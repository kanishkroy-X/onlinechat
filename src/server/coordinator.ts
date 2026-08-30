import type { Gender, MatchPreference, MatchMode, Country, Language, ServerMessage, WebRTCSignalingPayload, VoiceStatePayload } from './types';
import { isCompatible } from './compatibility';
import { validateNickname, validateMessage, validateReportReason } from './sanitizer';
import { SlidingWindowRateLimiter } from './rateLimiter';

export interface ConnectedClient {
  sessionId: string;
  nickname: string;
  gender: Gender;
  preference: MatchPreference;
  mode: MatchMode;
  country: Country;
  language: Language;
  socket: WebSocket;
  currentMatchId?: string;
  outgoingCount: number;
  blockedSessionIds: Set<string>;
}

/**
 * Universal In-Memory & Cloudflare-compatible Chat Coordinator.
 * Runs in worker / DO / local dev environments for instant matchmaking & chat dispatch.
 */
export class ChatCoordinator {
  private static instance: ChatCoordinator;

  public clients: Map<string, ConnectedClient> = new Map();
  public queue: Map<string, ConnectedClient> = new Map();
  public recentMatches: Map<string, number> = new Map(); // "id1:id2" -> expiresAt
  public rateLimiter = new SlidingWindowRateLimiter({ maxRequests: 20, windowMs: 10000 });

  public static getInstance(): ChatCoordinator {
    if (!ChatCoordinator.instance) {
      ChatCoordinator.instance = new ChatCoordinator();
    }
    return ChatCoordinator.instance;
  }

  private getPairKey(a: string, b: string): string {
    return a < b ? `${a}:${b}` : `${b}:${a}`;
  }

  private cleanStale(): void {
    const now = Date.now();
    for (const [key, expiresAt] of this.recentMatches.entries()) {
      if (now >= expiresAt) this.recentMatches.delete(key);
    }
  }

  public registerClient(
    sessionId: string,
    nickname: string,
    gender: Gender,
    preference: MatchPreference,
    country: Country,
    language: Language,
    socket: WebSocket,
    mode: MatchMode = 'text',
    blockedSessionIds: string[] = []
  ): ConnectedClient {
    const sanitizedNick = validateNickname(nickname).sanitizedValue || `User_${sessionId.slice(0, 5)}`;
    const client: ConnectedClient = {
      sessionId,
      nickname: sanitizedNick,
      gender,
      preference,
      mode,
      country,
      language,
      socket,
      outgoingCount: 0,
      blockedSessionIds: new Set(blockedSessionIds)
    };
    this.clients.set(sessionId, client);
    return client;
  }

  public removeClient(sessionId: string): void {
    const client = this.clients.get(sessionId);
    if (!client) return;

    this.queue.delete(sessionId);

    if (client.currentMatchId) {
      // Find partner and notify
      for (const other of this.clients.values()) {
        if (other.currentMatchId === client.currentMatchId && other.sessionId !== sessionId) {
          other.currentMatchId = undefined;
          this.send(other.socket, {
            type: 'chat.partner_disconnected',
            payload: { reason: 'Stranger disconnected' },
            timestamp: Date.now()
          });
        }
      }
    }

    this.clients.delete(sessionId);
  }

  public enqueue(sessionId: string): void {
    const client = this.clients.get(sessionId);
    if (!client) return;

    this.cleanStale();
    this.queue.delete(sessionId);

    let matchedPartner: ConnectedClient | null = null;

    for (const candidate of this.queue.values()) {
      if (candidate.sessionId === sessionId) continue;

      // Mode matching: text with text, voice with voice
      if (candidate.mode !== client.mode) continue;

      // Block-aware matching (MATCH-001 / SEC-001): Bidirectional block exclusion
      if (client.blockedSessionIds.has(candidate.sessionId)) continue;
      if (candidate.blockedSessionIds.has(client.sessionId)) continue;

      const pairKey = this.getPairKey(sessionId, candidate.sessionId);
      if (this.recentMatches.has(pairKey)) continue;

      if (
        isCompatible(
          { gender: client.gender, preference: client.preference, country: client.country, language: client.language },
          { gender: candidate.gender, preference: candidate.preference, country: candidate.country, language: candidate.language }
        )
      ) {
        matchedPartner = candidate;
        break;
      }
    }

    if (matchedPartner) {
      this.queue.delete(matchedPartner.sessionId);

      const matchId = `match_${crypto.randomUUID()}`;
      client.currentMatchId = matchId;
      matchedPartner.currentMatchId = matchId;
      client.outgoingCount = 0;
      matchedPartner.outgoingCount = 0;

      const pairKey = this.getPairKey(sessionId, matchedPartner.sessionId);
      this.recentMatches.set(pairKey, Date.now() + 120000); // 2 min avoidance

      // Notify both clients of match
      this.send(client.socket, {
        type: 'match.found',
        payload: {
          partner: {
            nickname: matchedPartner.nickname,
            gender: matchedPartner.gender,
            country: matchedPartner.country,
            language: matchedPartner.language
          }
        },
        timestamp: Date.now()
      });

      this.send(matchedPartner.socket, {
        type: 'match.found',
        payload: {
          partner: {
            nickname: client.nickname,
            gender: client.gender,
            country: client.country,
            language: client.language
          }
        },
        timestamp: Date.now()
      });

      // Immediately transition to connected
      this.send(client.socket, {
        type: 'chat.connected',
        payload: {
          partner: {
            nickname: matchedPartner.nickname,
            gender: matchedPartner.gender,
            country: matchedPartner.country,
            language: matchedPartner.language
          }
        },
        timestamp: Date.now()
      });

      this.send(matchedPartner.socket, {
        type: 'chat.connected',
        payload: {
          partner: {
            nickname: client.nickname,
            gender: client.gender,
            country: client.country,
            language: client.language
          }
        },
        timestamp: Date.now()
      });
    } else {
      this.queue.set(sessionId, client);
      this.send(client.socket, {
        type: 'match.searching',
        payload: {},
        timestamp: Date.now()
      });
    }
  }

  public handleMessage(sessionId: string, rawContent?: string, mediaType?: 'image' | 'video', mediaData?: string): void {
    const client = this.clients.get(sessionId);
    if (!client || !client.currentMatchId) return;

    if (!this.rateLimiter.isAllowed(sessionId)) {
      this.send(client.socket, {
        type: 'rate_limit.reached',
        payload: { message: 'You are sending messages too quickly. Please wait a moment.' },
        timestamp: Date.now()
      });
      return;
    }

    // Cold-message gate: allow up to 2 consecutive messages without stranger reply
    if (client.outgoingCount >= 2) {
      this.send(client.socket, {
        type: 'message.rejected',
        payload: {
          code: 'COLD_MESSAGE_LIMIT_REACHED',
          message: "You've sent 2 messages. Wait for a reply before sending another."
        },
        timestamp: Date.now()
      });
      return;
    }

    let sanitizedText = '';
    if (rawContent && rawContent.trim()) {
      const validation = validateMessage(rawContent);
      if (!validation.isValid || !validation.sanitizedValue) {
        this.send(client.socket, {
          type: 'error',
          payload: { message: validation.error || 'Invalid message' },
          timestamp: Date.now()
        });
        return;
      }
      sanitizedText = validation.sanitizedValue;
    } else if (!mediaData) {
      this.send(client.socket, {
        type: 'error',
        payload: { message: 'Message or media cannot be empty' },
        timestamp: Date.now()
      });
      return;
    }

    // Find partner
    let partner: ConnectedClient | null = null;
    for (const other of this.clients.values()) {
      if (other.currentMatchId === client.currentMatchId && other.sessionId !== sessionId) {
        partner = other;
        break;
      }
    }

    if (!partner) return;

    // Update cold message counters
    client.outgoingCount += 1;
    partner.outgoingCount = 0; // Stranger reply unlocks partner's gate!

    const messageId = `msg_${crypto.randomUUID()}`;
    const payload = {
      messageId,
      senderSessionId: sessionId,
      content: sanitizedText,
      mediaType,
      mediaData,
      timestamp: Date.now()
    };

    // Send to partner
    this.send(partner.socket, {
      type: 'message.received',
      payload,
      timestamp: Date.now()
    });

    // Send to sender
    this.send(client.socket, {
      type: 'message.received',
      payload,
      timestamp: Date.now()
    });
  }

  public handleTyping(sessionId: string): void {
    const client = this.clients.get(sessionId);
    if (!client || !client.currentMatchId) return;

    for (const other of this.clients.values()) {
      if (other.currentMatchId === client.currentMatchId && other.sessionId !== sessionId) {
        this.send(other.socket, {
          type: 'chat.typing',
          payload: {},
          timestamp: Date.now()
        });
        break;
      }
    }
  }

  public handleNext(sessionId: string): void {
    const client = this.clients.get(sessionId);
    if (!client) return;

    if (client.currentMatchId) {
      for (const other of this.clients.values()) {
        if (other.currentMatchId === client.currentMatchId && other.sessionId !== sessionId) {
          other.currentMatchId = undefined;
          this.send(other.socket, {
            type: 'chat.partner_disconnected',
            payload: { reason: 'Stranger moved to next conversation' },
            timestamp: Date.now()
          });
        }
      }
      client.currentMatchId = undefined;
    }

    this.enqueue(sessionId);
  }

  public handleLeave(sessionId: string): void {
    this.removeClient(sessionId);
  }

  public handleReport(sessionId: string, reason: string, details?: string): void {
    const client = this.clients.get(sessionId);
    if (!client) return;

    if (validateReportReason(reason)) {
      this.send(client.socket, {
        type: 'report.submitted',
        payload: { message: 'Report recorded. Thank you for keeping our community safe.' },
        timestamp: Date.now()
      });
    }
  }

  public handleBlock(sessionId: string): void {
    const client = this.clients.get(sessionId);
    if (!client) return;

    if (client.currentMatchId) {
      for (const other of this.clients.values()) {
        if (other.currentMatchId === client.currentMatchId && other.sessionId !== sessionId) {
          // Bidirectional block enforcement
          client.blockedSessionIds.add(other.sessionId);
          other.blockedSessionIds.add(client.sessionId);
          other.currentMatchId = undefined;

          this.send(other.socket, {
            type: 'chat.ended',
            payload: { reason: 'Stranger disconnected' },
            timestamp: Date.now()
          });
          break;
        }
      }
      client.currentMatchId = undefined;
    }

    this.send(client.socket, {
      type: 'chat.ended',
      payload: { reason: 'User blocked' },
      timestamp: Date.now()
    });
  }

  public handleWebRTCSignaling(
    sessionId: string,
    type: 'webrtc.offer' | 'webrtc.answer' | 'webrtc.ice_candidate',
    payload: WebRTCSignalingPayload
  ): void {
    const client = this.clients.get(sessionId);
    if (!client || !client.currentMatchId) return;

    for (const other of this.clients.values()) {
      if (other.currentMatchId === client.currentMatchId && other.sessionId !== sessionId) {
        this.send(other.socket, {
          type,
          payload,
          timestamp: Date.now()
        });
        break;
      }
    }
  }

  public handleVoiceState(sessionId: string, payload: VoiceStatePayload): void {
    const client = this.clients.get(sessionId);
    if (!client || !client.currentMatchId) return;

    for (const other of this.clients.values()) {
      if (other.currentMatchId === client.currentMatchId && other.sessionId !== sessionId) {
        this.send(other.socket, {
          type: 'voice.state',
          payload,
          timestamp: Date.now()
        });
        break;
      }
    }
  }

  public send(socket: WebSocket, msg: ServerMessage): void {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify(msg));
    }
  }
}
