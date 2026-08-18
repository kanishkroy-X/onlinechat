import type {
  Gender,
  MatchPreference,
  ClientMessage,
  ServerMessage,
  ReportReason
} from '../server/types';

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
  text: string;
  timestamp: number;
}

export class ChatClient {
  public state: UIState = 'LANDING';
  public sessionId: string = '';
  public nickname: string = '';
  public gender: Gender = 'male';
  public preference: MatchPreference = 'anyone';
  public partner: { nickname: string; gender: Gender } | null = null;
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

  public enterQueue(nickname: string, gender: Gender, preference: MatchPreference): void {
    this.nickname = nickname;
    this.gender = gender;
    this.preference = preference;
    this.partner = null;
    this.messages = [];
    this.outgoingCount = 0;
    this.isColdGated = false;
    this.isPartnerTyping = false;
    this.errorMessage = '';

    this.setState('MATCHING');
    this.announceToScreenReader('Searching for a stranger to chat with...');

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

  public sendMessage(text: string): boolean {
    const trimmed = text.trim();
    if (!trimmed) return false;
    if (this.isColdGated) return false;

    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      return false;
    }

    this.send({
      type: 'message.send',
      payload: { content: trimmed }
    });

    return true;
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
    this.enterQueue(this.nickname, this.gender, this.preference);
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
        type: 'chat.report',
        payload: { reason, details }
      });
    }
  }

  public blockStranger(): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.send({
        type: 'chat.block',
        payload: {}
      });
    }
    this.closeSocket();
    this.setState('DISCONNECTED');
    this.announceToScreenReader('Stranger blocked.');
  }

  private connectWebSocket(): void {
    this.closeSocket();

    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/api/ws?sessionId=${encodeURIComponent(this.sessionId)}&nickname=${encodeURIComponent(this.nickname)}&gender=${this.gender}&preference=${this.preference}`;

    try {
      this.socket = new WebSocket(wsUrl);

      this.socket.addEventListener('open', () => {
        this.startPing();
        this.send({
          type: 'match.queue',
          payload: {
            nickname: this.nickname,
            gender: this.gender,
            preference: this.preference
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

      this.socket.addEventListener('error', () => {
        this.errorMessage = 'Connection error occurred.';
        this.setState('ERROR');
      });
    } catch (err) {
      this.errorMessage = 'Failed to open real-time connection.';
      this.setState('ERROR');
    }
  }

  private handleServerMessage(msg: ServerMessage): void {
    switch (msg.type) {
      case 'match.searching': {
        this.setState('MATCHING');
        break;
      }

      case 'match.found': {
        const payload = msg.payload as { partner: { nickname: string; gender: Gender } };
        this.partner = payload.partner;
        this.setState('MATCH_FOUND');
        this.announceToScreenReader(`Match found with ${this.partner.nickname}!`);
        break;
      }

      case 'chat.connected': {
        const payload = msg.payload as { partner: { nickname: string; gender: Gender } };
        if (payload?.partner) this.partner = payload.partner;
        this.setState('CONNECTED');
        this.announceToScreenReader('Connected! You can now start chatting.');
        break;
      }

      case 'message.received': {
        const payload = msg.payload as {
          messageId: string;
          senderSessionId: string;
          content: string;
          timestamp: number;
        };

        const isMe = payload.senderSessionId === this.sessionId;
        this.messages.push({
          id: payload.messageId,
          sender: isMe ? 'me' : 'stranger',
          text: payload.content,
          timestamp: payload.timestamp
        });

        if (isMe) {
          this.outgoingCount += 1;
          if (this.outgoingCount >= 2) {
            this.isColdGated = true;
            this.announceToScreenReader("You've sent 2 messages. Please wait for a reply.");
          }
        } else {
          // Reply received resets my cold message gate!
          this.outgoingCount = 0;
          this.isColdGated = false;
          this.isPartnerTyping = false;
          this.announceToScreenReader(`Message from ${this.partner?.nickname || 'Stranger'}: ${payload.content}`);
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

      case 'chat.partner_disconnected':
      case 'chat.ended': {
        this.setState('DISCONNECTED');
        this.announceToScreenReader('Stranger disconnected.');
        break;
      }

      case 'rate_limit.reached': {
        const payload = msg.payload as { message: string };
        this.errorMessage = payload.message || 'Rate limit reached.';
        this.setState('RATE_LIMITED');
        break;
      }

      case 'report.submitted': {
        this.announceToScreenReader('Report submitted successfully.');
        break;
      }

      case 'error': {
        const payload = msg.payload as { message: string };
        this.errorMessage = payload.message || 'An error occurred.';
        this.notify();
        break;
      }
    }
  }

  private send(msg: ClientMessage): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(msg));
    }
  }

  private startPing(): void {
    this.stopPing();
    this.pingInterval = window.setInterval(() => {
      this.send({ type: 'ping', payload: {} });
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
      try {
        this.socket.close();
      } catch (e) {}
      this.socket = null;
    }
  }
}
