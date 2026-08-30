import type {
  Gender,
  MatchPreference,
  MatchMode,
  Country,
  Language,
  ClientMessage,
  ServerMessage,
  ReportReason,
  WebRTCSignalingPayload,
  VoiceStatePayload
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

const ICE_SERVERS: RTCIceServer[] = [
  { urls: 'stun:stun.l.google.com:19302' },
  { urls: 'stun:stun1.l.google.com:19302' },
  { urls: 'stun:stun2.l.google.com:19302' }
];

export class ChatClient {
  public state: UIState = 'LANDING';
  public sessionId: string = '';
  public nickname: string = '';
  public gender: Gender = 'male';
  public preference: MatchPreference = 'anyone';
  public mode: MatchMode = 'text';
  public country: Country = 'anywhere';
  public language: Language = 'any';
  public partner: {
    sessionId?: string;
    nickname: string;
    gender: Gender;
    country: Country;
    language: Language;
  } | null = null;
  public messages: ChatMessageItem[] = [];
  public outgoingCount: number = 0;
  public isColdGated: boolean = false;
  public isPartnerTyping: boolean = false;
  public errorMessage: string = '';

  // WebRTC Voice Chat State (VOICE-001)
  public isVoiceActive: boolean = false;
  public isMicMuted: boolean = false;
  public isPartnerVoiceMuted: boolean = false;
  public voiceStatusText: string = 'Idle';

  private socket: WebSocket | null = null;
  private peerConnection: RTCPeerConnection | null = null;
  private localAudioStream: MediaStream | null = null;
  private pingInterval: number | null = null;
  private typingTimeout: number | null = null;
  private listeners: Set<(client: ChatClient) => void> = new Set();
  private blockedIds: Set<string> = new Set();

  constructor() {
    this.sessionId = this.getOrGenerateSessionId();
    this.loadBlockedIds();
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

  private loadBlockedIds(): void {
    if (typeof sessionStorage !== 'undefined') {
      try {
        const raw = sessionStorage.getItem('rc_blocked_ids');
        if (raw) {
          const parsed = JSON.parse(raw);
          if (Array.isArray(parsed)) {
            this.blockedIds = new Set(parsed);
          }
        }
      } catch {
        this.blockedIds = new Set();
      }
    }
  }

  private saveBlockedIds(): void {
    if (typeof sessionStorage !== 'undefined') {
      try {
        sessionStorage.setItem('rc_blocked_ids', JSON.stringify(Array.from(this.blockedIds)));
      } catch {
        // Fallback
      }
    }
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

  public enterQueue(
    nickname: string,
    gender: Gender,
    preference: MatchPreference,
    country: Country = 'anywhere',
    language: Language = 'any',
    mode: MatchMode = 'text'
  ): void {
    this.nickname = nickname;
    this.gender = gender;
    this.preference = preference;
    this.country = country;
    this.language = language;
    this.mode = mode;
    this.partner = null;
    this.messages = [];
    this.outgoingCount = 0;
    this.isColdGated = false;
    this.isPartnerTyping = false;
    this.errorMessage = '';
    this.endVoiceCall(false);

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

    // Add message locally
    const msgItem: ChatMessageItem = {
      id: `msg_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
      sender: 'me',
      text: trimmed,
      mediaType,
      mediaData,
      timestamp: Date.now()
    };
    this.messages.push(msgItem);
    this.outgoingCount++;
    this.notify();

    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.send({
        type: 'message.send',
        payload: { content: trimmed, mediaType, mediaData }
      });
    }

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
    this.endVoiceCall(false);
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.send({
        type: 'chat.next',
        payload: {}
      });
    }
    this.closeSocket();
    this.enterQueue(this.nickname, this.gender, this.preference, this.country, this.language, this.mode);
  }

  public leaveChat(): void {
    this.endVoiceCall(false);
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
    this.blockPartner();
  }

  public blockPartner(): void {
    this.endVoiceCall(false);
    if (this.partner?.sessionId) {
      this.blockedIds.add(this.partner.sessionId);
      this.saveBlockedIds();
    }

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

  public blockStranger(): void {
    this.blockPartner();
  }

  public clearMessages(): void {
    this.messages = [];
    this.notify();
  }

  // ==========================================
  // WebRTC Ephemeral Voice Chat Engine (VOICE-001)
  // ==========================================

  public async startVoiceCall(): Promise<void> {
    if (this.isVoiceActive) return;

    try {
      this.voiceStatusText = 'Requesting Microphone Permission...';
      this.notify();

      // Explicit permission guardrail: request microphone stream
      this.localAudioStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          autoGainControl: true
        },
        video: false
      });

      this.isVoiceActive = true;
      this.isMicMuted = false;
      this.voiceStatusText = 'Connecting Voice...';
      this.notify();

      this.createPeerConnection();

      // Add local audio tracks to peer connection
      for (const track of this.localAudioStream.getAudioTracks()) {
        this.peerConnection?.addTrack(track, this.localAudioStream);
      }

      // Create WebRTC Offer
      const offer = await this.peerConnection?.createOffer();
      if (offer) {
        await this.peerConnection?.setLocalDescription(offer);
        this.send({
          type: 'webrtc.offer',
          payload: { sdp: { type: offer.type, sdp: offer.sdp || '' } }
        });
      }
    } catch (err) {
      console.error('Failed to start voice call', err);
      this.voiceStatusText = 'Microphone Access Denied or Unavailable';
      this.isVoiceActive = false;
      this.notify();
    }
  }

  public toggleMicMute(): void {
    if (!this.localAudioStream) return;
    this.isMicMuted = !this.isMicMuted;
    for (const track of this.localAudioStream.getAudioTracks()) {
      track.enabled = !this.isMicMuted;
    }
    this.send({
      type: 'voice.state',
      payload: { isMuted: this.isMicMuted }
    });
    this.notify();
  }

  public endVoiceCall(notifyPartner: boolean = true): void {
    if (this.localAudioStream) {
      for (const track of this.localAudioStream.getTracks()) {
        track.stop();
      }
      this.localAudioStream = null;
    }

    if (this.peerConnection) {
      this.peerConnection.close();
      this.peerConnection = null;
    }

    this.isVoiceActive = false;
    this.isMicMuted = false;
    this.isPartnerVoiceMuted = false;
    this.voiceStatusText = 'Idle';

    if (notifyPartner && this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.send({
        type: 'voice.state',
        payload: { isMuted: true, isSpeaking: false }
      });
    }

    this.notify();
  }

  private createPeerConnection(): void {
    if (this.peerConnection) {
      this.peerConnection.close();
    }

    this.peerConnection = new RTCPeerConnection({ iceServers: ICE_SERVERS });

    this.peerConnection.onicecandidate = (event) => {
      if (event.candidate && this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.send({
          type: 'webrtc.ice_candidate',
          payload: {
            candidate: {
              candidate: event.candidate.candidate,
              sdpMid: event.candidate.sdpMid,
              sdpMLineIndex: event.candidate.sdpMLineIndex
            }
          }
        });
      }
    };

    this.peerConnection.ontrack = (event) => {
      const remoteAudio = document.getElementById('chat-remote-audio') as HTMLAudioElement | null;
      if (remoteAudio && event.streams[0]) {
        remoteAudio.srcObject = event.streams[0];
        remoteAudio.play().catch((e) => console.warn('Autoplay audio interaction pending', e));
      }
      this.voiceStatusText = 'Live Voice Connected';
      this.notify();
    };

    this.peerConnection.onconnectionstatechange = () => {
      const state = this.peerConnection?.connectionState;
      if (state === 'connected') {
        this.voiceStatusText = 'Live Voice Connected';
      } else if (state === 'disconnected' || state === 'failed') {
        this.voiceStatusText = 'Voice Disconnected';
      }
      this.notify();
    };
  }

  private async handleWebRTCOffer(sdp: { type: string; sdp: string }): Promise<void> {
    try {
      if (!this.localAudioStream) {
        this.localAudioStream = await navigator.mediaDevices.getUserMedia({
          audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
          video: false
        });
      }

      this.isVoiceActive = true;
      this.isMicMuted = false;
      this.createPeerConnection();

      for (const track of this.localAudioStream.getAudioTracks()) {
        this.peerConnection?.addTrack(track, this.localAudioStream);
      }

      await this.peerConnection?.setRemoteDescription(new RTCSessionDescription(sdp as RTCSessionDescriptionInit));
      const answer = await this.peerConnection?.createAnswer();
      if (answer) {
        await this.peerConnection?.setLocalDescription(answer);
        this.send({
          type: 'webrtc.answer',
          payload: { sdp: { type: answer.type, sdp: answer.sdp || '' } }
        });
      }
      this.voiceStatusText = 'Live Voice Connected';
      this.notify();
    } catch (err) {
      console.error('Failed to handle incoming WebRTC offer', err);
    }
  }

  private async handleWebRTCAnswer(sdp: { type: string; sdp: string }): Promise<void> {
    try {
      if (this.peerConnection) {
        await this.peerConnection.setRemoteDescription(new RTCSessionDescription(sdp as RTCSessionDescriptionInit));
      }
    } catch (err) {
      console.error('Failed to handle WebRTC answer', err);
    }
  }

  private async handleWebRTCIceCandidate(candidate: { candidate: string; sdpMid?: string | null; sdpMLineIndex?: number | null }): Promise<void> {
    try {
      if (this.peerConnection && candidate?.candidate) {
        await this.peerConnection.addIceCandidate(new RTCIceCandidate(candidate as RTCIceCandidateInit));
      }
    } catch (err) {
      console.warn('Failed to add ICE candidate', err);
    }
  }

  // ==========================================
  // WebSocket Connection & Dispatch
  // ==========================================

  private send(message: ClientMessage): void {
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    }
  }

  private connectWebSocket(): void {
    this.closeSocket();

    const blockedQuery = Array.from(this.blockedIds).join(',');
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}/api/ws?sessionId=${encodeURIComponent(this.sessionId)}&nickname=${encodeURIComponent(this.nickname)}&gender=${this.gender}&preference=${this.preference}&country=${encodeURIComponent(this.country)}&language=${encodeURIComponent(this.language)}&mode=${this.mode}&blocked=${encodeURIComponent(blockedQuery)}`;

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
            mode: this.mode,
            country: this.country,
            language: this.language,
            blockedSessionIds: Array.from(this.blockedIds)
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
        this.endVoiceCall(false);
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
        const payload = msg.payload as {
          partner: {
            sessionId?: string;
            nickname: string;
            gender: Gender;
            country: Country;
            language: Language;
          };
        };
        this.partner = payload.partner;
        this.setState('MATCH_FOUND');
        this.announceToScreenReader(`Match found with ${this.partner.nickname}!`);

        // If in voice mode, automatically initiate peer voice connection
        if (this.mode === 'voice') {
          this.startVoiceCall();
        }
        break;
      }

      case 'chat.connected': {
        const payload = msg.payload as {
          partner: {
            sessionId?: string;
            nickname: string;
            gender: Gender;
            country: Country;
            language: Language;
          };
        };
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
          this.announceToScreenReader(
            `Message from ${this.partner?.nickname || 'Stranger'}: ${payload.content || 'Photo attachment'}`
          );
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
        this.endVoiceCall(false);
        this.setState('DISCONNECTED');
        this.announceToScreenReader('Stranger disconnected.');
        break;
      }

      case 'webrtc.offer': {
        const payload = msg.payload as WebRTCSignalingPayload;
        if (payload?.sdp) {
          this.handleWebRTCOffer(payload.sdp);
        }
        break;
      }

      case 'webrtc.answer': {
        const payload = msg.payload as WebRTCSignalingPayload;
        if (payload?.sdp) {
          this.handleWebRTCAnswer(payload.sdp);
        }
        break;
      }

      case 'webrtc.ice_candidate': {
        const payload = msg.payload as WebRTCSignalingPayload;
        if (payload?.candidate) {
          this.handleWebRTCIceCandidate(payload.candidate);
        }
        break;
      }

      case 'voice.state': {
        const payload = msg.payload as VoiceStatePayload;
        this.isPartnerVoiceMuted = !!payload.isMuted;
        this.notify();
        break;
      }

      case 'rate_limit.reached': {
        const payload = msg.payload as { message?: string };
        this.errorMessage = payload.message || 'You are sending messages too quickly. Please wait a moment.';
        this.setState('RATE_LIMITED');
        break;
      }

      case 'error': {
        const payload = msg.payload as { message?: string };
        this.errorMessage = payload.message || 'An error occurred.';
        this.setState('ERROR');
        break;
      }
    }
  }

  private startPing(): void {
    this.stopPing();
    this.pingInterval = window.setInterval(() => {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.send({ type: 'ping', payload: {} });
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
