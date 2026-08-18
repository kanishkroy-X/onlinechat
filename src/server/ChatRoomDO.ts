import type {
  ActiveMatch,
  ClientMessage,
  ServerMessage,
  SendMessagePayload,
  ReportPayload,
  ReportRecord
} from './types';
import { validateMessage, validateReportReason } from './sanitizer';
import { SlidingWindowRateLimiter } from './rateLimiter';

export class ChatRoomDO {
  private match: ActiveMatch | null = null;
  private sockets: Map<string, WebSocket> = new Map(); // sessionId -> WebSocket
  private messageRateLimiter = new SlidingWindowRateLimiter({ maxRequests: 10, windowMs: 5000 });
  private reports: ReportRecord[] = [];

  constructor() {}

  private sendToSocket(sessionId: string, message: ServerMessage): void {
    const ws = this.sockets.get(sessionId);
    if (ws && ws.readyState === WebSocket.OPEN) {
      ws.send(JSON.stringify(message));
    }
  }

  private broadcast(message: ServerMessage, excludeSessionId?: string): void {
    for (const [sessionId, ws] of this.sockets.entries()) {
      if (sessionId !== excludeSessionId && ws.readyState === WebSocket.OPEN) {
        ws.send(JSON.stringify(message));
      }
    }
  }

  public initMatch(match: ActiveMatch): void {
    this.match = match;
  }

  public handleWebSocket(sessionId: string, ws: WebSocket): void {
    this.sockets.set(sessionId, ws);

    ws.addEventListener('message', (event: MessageEvent) => {
      try {
        const data = typeof event.data === 'string' ? event.data : new TextDecoder().decode(event.data as ArrayBuffer);
        const msg = JSON.parse(data) as ClientMessage;
        this.processClientMessage(sessionId, msg);
      } catch (err) {
        this.sendToSocket(sessionId, {
          type: 'error',
          payload: { message: 'Invalid payload format' },
          timestamp: Date.now()
        });
      }
    });

    ws.addEventListener('close', () => {
      this.sockets.delete(sessionId);
      if (this.match && this.match.status === 'active') {
        const partnerSessionId =
          this.match.participantA.sessionId === sessionId
            ? this.match.participantB.sessionId
            : this.match.participantA.sessionId;

        this.sendToSocket(partnerSessionId, {
          type: 'chat.partner_disconnected',
          payload: { reason: 'Stranger disconnected' },
          timestamp: Date.now()
        });
        this.match.status = 'closed';
      }
    });
  }

  private processClientMessage(sessionId: string, msg: ClientMessage): void {
    if (!this.match || this.match.status !== 'active') {
      this.sendToSocket(sessionId, {
        type: 'error',
        payload: { message: 'Chat is not active' },
        timestamp: Date.now()
      });
      return;
    }

    const isParticipantA = this.match.participantA.sessionId === sessionId;
    const isParticipantB = this.match.participantB.sessionId === sessionId;

    if (!isParticipantA && !isParticipantB) {
      this.sendToSocket(sessionId, {
        type: 'error',
        payload: { message: 'Unauthorized match participant' },
        timestamp: Date.now()
      });
      return;
    }

    const partnerSessionId = isParticipantA
      ? this.match.participantB.sessionId
      : this.match.participantA.sessionId;

    switch (msg.type) {
      case 'ping': {
        this.sendToSocket(sessionId, {
          type: 'pong',
          payload: {},
          timestamp: Date.now()
        });
        break;
      }

      case 'chat.typing': {
        this.sendToSocket(partnerSessionId, {
          type: 'chat.typing',
          payload: { isTyping: true },
          timestamp: Date.now()
        });
        break;
      }

      case 'message.send': {
        // 1. Rate limit check
        if (!this.messageRateLimiter.isAllowed(sessionId)) {
          this.sendToSocket(sessionId, {
            type: 'rate_limit.reached',
            payload: { message: 'You are sending messages too fast. Please slow down.' },
            timestamp: Date.now()
          });
          return;
        }

        // 2. Cold-message gate check (max 2 consecutive messages without reply)
        const currentOutgoing = isParticipantA ? this.match.outgoingCountA : this.match.outgoingCountB;
        if (currentOutgoing >= 2) {
          this.sendToSocket(sessionId, {
            type: 'message.rejected',
            requestId: msg.requestId,
            payload: {
              code: 'COLD_MESSAGE_LIMIT_REACHED',
              message: "You've sent 2 messages. Wait for a reply before sending another."
            },
            timestamp: Date.now()
          });
          return;
        }

        // 3. Message validation & sanitization
        const rawPayload = msg.payload as SendMessagePayload;
        const hasMedia = !!rawPayload?.mediaData;
        const hasText = !!rawPayload?.content?.trim();

        if (!hasMedia && !hasText) {
          this.sendToSocket(sessionId, {
            type: 'error',
            requestId: msg.requestId,
            payload: { message: 'Message or media content is required' },
            timestamp: Date.now()
          });
          return;
        }

        let sanitizedText = '';
        if (hasText) {
          const validation = validateMessage(rawPayload.content);
          if (!validation.isValid) {
            this.sendToSocket(sessionId, {
              type: 'error',
              requestId: msg.requestId,
              payload: { message: validation.error || 'Invalid message content' },
              timestamp: Date.now()
            });
            return;
          }
          sanitizedText = validation.sanitizedValue || '';
        }

        // 4. Update cold gate state
        if (isParticipantA) {
          this.match.outgoingCountA += 1;
          this.match.outgoingCountB = 0; // Stranger reply resets B's counter
        } else {
          this.match.outgoingCountB += 1;
          this.match.outgoingCountA = 0; // Stranger reply resets A's counter
        }

        const messageId = `msg_${crypto.randomUUID()}`;
        const messagePayload = {
          messageId,
          senderSessionId: sessionId,
          content: sanitizedText,
          mediaType: rawPayload.mediaType,
          mediaData: rawPayload.mediaData,
          timestamp: Date.now()
        };

        // Forward to partner
        this.sendToSocket(partnerSessionId, {
          type: 'message.received',
          payload: messagePayload,
          timestamp: Date.now()
        });

        // Acknowledge to sender
        this.sendToSocket(sessionId, {
          type: 'message.received',
          requestId: msg.requestId,
          payload: messagePayload,
          timestamp: Date.now()
        });
        break;
      }

      case 'chat.next':
      case 'chat.leave': {
        this.match.status = 'closed';
        this.sendToSocket(partnerSessionId, {
          type: 'chat.ended',
          payload: { reason: 'Stranger left the chat' },
          timestamp: Date.now()
        });
        this.sendToSocket(sessionId, {
          type: 'chat.ended',
          payload: { reason: 'You left the chat' },
          timestamp: Date.now()
        });
        break;
      }

      case 'chat.report': {
        const reportPayload = msg.payload as ReportPayload;
        if (!validateReportReason(reportPayload?.reason)) {
          this.sendToSocket(sessionId, {
            type: 'error',
            payload: { message: 'Invalid report reason' },
            timestamp: Date.now()
          });
          return;
        }

        const reportRecord: ReportRecord = {
          reportId: `rep_${crypto.randomUUID()}`,
          reporterSessionId: sessionId,
          reportedSessionId: partnerSessionId,
          matchId: this.match.matchId,
          reason: reportPayload.reason,
          details: reportPayload.details ? String(reportPayload.details).slice(0, 500) : undefined,
          createdAt: Date.now()
        };

        this.reports.push(reportRecord);

        this.sendToSocket(sessionId, {
          type: 'report.submitted',
          payload: { reportId: reportRecord.reportId, message: 'Report received. Thank you.' },
          timestamp: Date.now()
        });
        break;
      }

      case 'chat.block': {
        this.match.status = 'closed';
        this.sendToSocket(partnerSessionId, {
          type: 'chat.ended',
          payload: { reason: 'Stranger disconnected' },
          timestamp: Date.now()
        });
        this.sendToSocket(sessionId, {
          type: 'chat.ended',
          payload: { reason: 'User blocked' },
          timestamp: Date.now()
        });
        break;
      }
    }
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (request.headers.get('Upgrade') === 'websocket') {
      const sessionId = url.searchParams.get('sessionId') || '';
      const pair = new WebSocketPair();
      const [clientWs, serverWs] = Object.values(pair);

      // In Cloudflare Workers WebSocket accept
      // @ts-expect-error WebSocket accept is Cloudflare DO specific
      serverWs.accept();
      this.handleWebSocket(sessionId, serverWs as unknown as WebSocket);

      return new Response(null, {
        status: 101,
        // @ts-expect-error Cloudflare webSocket response
        webSocket: clientWs
      });
    }

    if (request.method === 'POST' && url.pathname === '/init') {
      const body = (await request.json()) as ActiveMatch;
      this.initMatch(body);
      return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
}
