import type {
  Gender,
  MatchPreference,
  Country,
  Language,
  ClientMessage,
  ServerMessage,
  ReportReason
} from '../server/types';
import { COUNTRY_NAMES, LANGUAGE_NAMES } from '../server/constants';

export type UIState =
  | 'LANDING'
  | 'SETUP'
  | 'MATCHING'
  | 'MATCH_FOUND'
  | 'CONNECTING'
  | 'CONNECTED'
  | 'DISCONNECTED'
  | 'RATE_LIMITED'
  | 'ERROR';

export interface ChatMessageItem {
  id: string;
  sender: 'me' | 'stranger';
  text?: string;
  mediaType?: 'image' | 'video';
  mediaData?: string;
  timestamp: number;
}

export class ChatClient {
  public state: UIState = 'LANDING';
  public sessionId: string = '';
  public nickname: string = '';
  public gender: Gender = 'male';
  public preference: MatchPreference = 'anyone';
  public country: Country = 'anywhere';
  public language: Language = 'any';
  public partner: { nickname: string; gender: Gender; country: Country; language: Language } | null = null;
  public messages: ChatMessageItem[] = [];
  public outgoingCount: number = 0;
  public isColdGated: boolean = false;
  public isPartnerTyping: boolean = false;
  public errorMessage: string = '';

  private socket: WebSocket | null = null;
  private pingInterval: number | null = null;
  private typingTimeout: number | null = null;
  private listeners: Set<(client: ChatClient) => void> = new Set();

  constructor() {
    this.sessionId = this.getOrGenerateSessionId();
  }

  private getOrGenerateSessionId(): string {
    if (typeof sessionStorage !== 'undefined') {
      let id = sessionStorage.getItem('rc_session_id');
      if (!id) {
        id = `sess_${crypto.randomUUID()}`;
        sessionStorage.setItem('rc_session_id', id);
      }
      return id;
    }
    return `sess_${crypto.randomUUID()}`;
  }

  public subscribe(callback: (client: ChatClient) => void): () => void {
    this.listeners.add(callback);
    callback(this);
    return () => this.listeners.delete(callback);
  }

  private notify(): void {
    for (const listener of this.listeners) {
      listener(this);
    }
  }

  public setState(newState: UIState): void {
    this.state = newState;
    this.notify();
  }

  public announceToScreenReader(message: string): void {
    if (typeof document === 'undefined') return;
    const announcer = document.getElementById('sr-announcer');
    if (announcer) {
      announcer.textContent = message;
    }
  }

  public startSetup(): void {
    this.setState('SETUP');
  }

  public cancelSetup(): void {
    this.setState('LANDING');
  }

  public enterQueue(nickname: string, gender: Gender, preference: MatchPreference, country: Country = 'anywhere', language: Language = 'any'): void {
    this.nickname = nickname;
    this.gender = gender;
    this.preference = preference;
    this.country = country;
    this.language = language;
    this.partner = null;
    this.messages = [];
    this.outgoingCount = 0;
    this.isColdGated = false;
    this.isPartnerTyping = false;
    this.errorMessage = '';

    this.setState('MATCHING');
    this.announceToScreenReader('Searching for a compatible stranger to chat with...');

    this.connectWebSocket();
  }

  public cancelQueue(): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.send({
        type: 'match.cancel',
        payload: {}
      });
    }
    this.closeSocket();
    this.setState('LANDING');
    this.announceToScreenReader('Matchmaking cancelled.');
  }

  public sendMessage(text?: string, mediaType?: 'image' | 'video', mediaData?: string): boolean {
    const trimmed = text ? text.trim() : '';
    if (!trimmed && !mediaData) return false;
    if (this.isColdGated) return false;

    // Check cold gate locally
    if (this.outgoingCount >= 2) {
      this.isColdGated = true;
      this.notify();
      return false;
    }

    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.send({
        type: 'message.send',
        payload: { content: trimmed, mediaType, mediaData }
      });
      return true;
    }

    return false;
  }

  public notifyTyping(): void {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) return;
    this.send({
      type: 'chat.typing',
      payload: {}
    });
  }

  public nextStranger(): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.send({
        type: 'chat.next',
        payload: {}
      });
    }
    this.closeSocket();
    this.enterQueue(this.nickname, this.gender, this.preference, this.country, this.language);
  }

  public leaveChat(): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.send({
        type: 'chat.leave',
        payload: {}
      });
    }
    this.closeSocket();
    this.setState('LANDING');
    this.announceToScreenReader('Left chat conversation.');
  }

  public submitReport(reason: ReportReason, details?: string): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.send({
        type: 'safety.report',
        payload: { reason, details }
      });
    }
    this.leaveChat();
  }

  public blockPartner(): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.send({
        type: 'safety.block',
        payload: {}
      });
    }
    this.leaveChat();
  }

  private send(message: ClientMessage): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    }
  }

  private connectWebSocket(): void {
    this.closeSocket();

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/api/ws?sessionId=${encodeURIComponent(this.sessionId)}&nickname=${encodeURIComponent(this.nickname)}&gender=${this.gender}&preference=${this.preference}&country=${encodeURIComponent(this.country)}&language=${encodeURIComponent(this.language)}`;

    try {
      this.socket = new WebSocket(wsUrl);

      this.socket.addEventListener('open', () => {
        this.startPing();
        this.send({
          type: 'match.queue',
          payload: {
            nickname: this.nickname,
            gender: this.gender,
            preference: this.preference,
            country: this.country,
            language: this.language
          }
        });
      });

      this.socket.addEventListener('message', (event: MessageEvent) => {
        try {
          const msg = JSON.parse(event.data) as ServerMessage;
          this.handleServerMessage(msg);
        } catch (err) {
          console.error('Failed to parse server message', err);
        }
      });

      this.socket.addEventListener('close', () => {
        this.stopPing();
        if (this.state === 'CONNECTED' || this.state === 'MATCH_FOUND') {
          this.setState('DISCONNECTED');
          this.announceToScreenReader('Stranger disconnected.');
        }
      });

      this.socket.addEventListener('error', (err) => {
        console.error('WebSocket connection error', err);
      });
    } catch (err) {
      console.error('WebSocket initialization error', err);
    }
  }

  private handleServerMessage(msg: ServerMessage): void {
    switch (msg.type) {
      case 'match.searching': {
        this.setState('MATCHING');
        break;
      }

      case 'match.found': {
        const payload = msg.payload as { partner: { nickname: string; gender: Gender; country: Country; language: Language } };
        this.partner = payload.partner;
        this.setState('MATCH_FOUND');
        this.announceToScreenReader(`Match found with ${this.partner.nickname}!`);
        break;
      }

      case 'chat.connected': {
        const payload = msg.payload as { partner: { nickname: string; gender: Gender; country: Country; language: Language } };
        if (payload?.partner) this.partner = payload.partner;
        this.setState('CONNECTED');
        this.announceToScreenReader('Connected! You can now start chatting.');
        break;
      }

      case 'message.received': {
        const payload = msg.payload as {
          messageId: string;
          senderSessionId: string;
          content?: string;
          mediaType?: 'image' | 'video';
          mediaData?: string;
          timestamp: number;
        };

        const isMe = payload.senderSessionId === this.sessionId;
        this.messages.push({
          id: payload.messageId,
          sender: isMe ? 'me' : 'stranger',
          text: payload.content,
          mediaType: payload.mediaType,
          mediaData: payload.mediaData,
          timestamp: payload.timestamp
        });

        if (isMe) {
          this.outgoingCount += 1;
          if (this.outgoingCount >= 2) {
            this.isColdGated = true;
            this.announceToScreenReader("You've sent 2 messages. Please wait for a reply.");
          }
        } else {
          // Reply received resets cold message gate
          this.outgoingCount = 0;
          this.isColdGated = false;
          this.isPartnerTyping = false;
          this.announceToScreenReader(`Message from ${this.partner?.nickname || 'Stranger'}: ${payload.content || 'Photo attachment'}`);
        }

        this.notify();
        break;
      }

      case 'message.rejected': {
        const payload = msg.payload as { code: string; message: string };
        if (payload.code === 'COLD_MESSAGE_LIMIT_REACHED') {
          this.isColdGated = true;
          this.announceToScreenReader(payload.message);
        }
        this.notify();
        break;
      }

      case 'chat.typing': {
        this.isPartnerTyping = true;
        this.notify();
        if (this.typingTimeout) window.clearTimeout(this.typingTimeout);
        this.typingTimeout = window.setTimeout(() => {
          this.isPartnerTyping = false;
          this.notify();
        }, 3000);
        break;
      }

      case 'chat.ended': {
        this.setState('DISCONNECTED');
        this.announceToScreenReader('Stranger disconnected.');
        break;
      }

      case 'error.rate_limited': {
        const payload = msg.payload as { retryAfterSeconds?: number };
        this.errorMessage = `You are sending messages too quickly. Please wait ${payload.retryAfterSeconds || 10} seconds.`;
        this.setState('RATE_LIMITED');
        break;
      }

      case 'error.generic': {
        const payload = msg.payload as { message: string };
        this.errorMessage = payload.message || 'An unexpected error occurred.';
        this.setState('ERROR');
        break;
      }
    }
  }

  private startPing(): void {
    this.stopPing();
    this.pingInterval = window.setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.send({ type: 'system.ping', payload: {} });
      }
    }, 25000);
  }

  private stopPing(): void {
    if (this.pingInterval) {
      window.clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }

  private closeSocket(): void {
    this.stopPing();
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  public getPartnerDisplayString(): string {
    if (!this.partner) return 'Stranger';
    return this.partner.nickname;
  }
}
