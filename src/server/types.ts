export type Gender = 'male' | 'female';
export type MatchPreference = 'male' | 'female' | 'anyone';
export type Country = string;
export type Language = string;

export type SessionStatus =
  | 'idle'
  | 'queued'
  | 'matched'
  | 'chatting'
  | 'disconnecting'
  | 'expired'
  | 'blocked';

export interface GuestSession {
  sessionId: string;
  nickname: string;
  gender: Gender;
  preference: MatchPreference;
  country: Country;
  language: Language;
  status: SessionStatus;
  createdAt: number;
  lastSeenAt: number;
  activeMatchId: string | null;
}

export interface QueueEntry {
  sessionId: string;
  nickname: string;
  gender: Gender;
  preference: MatchPreference;
  country: Country;
  language: Language;
  queuedAt: number;
  socketId?: string;
}

export interface ActiveMatch {
  matchId: string;
  participantA: {
    sessionId: string;
    nickname: string;
    gender: Gender;
    country: Country;
    language: Language;
  };
  participantB: {
    sessionId: string;
    nickname: string;
    gender: Gender;
    country: Country;
    language: Language;
  };
  createdAt: number;
  lastActivityAt: number;
  status: 'active' | 'closing' | 'closed';
  outgoingCountA: number; // consecutive messages from A since B's last message
  outgoingCountB: number; // consecutive messages from B since A's last message
}

export type ReportReason =
  | 'harassment'
  | 'spam'
  | 'sexual_inappropriate'
  | 'threats'
  | 'hate_abuse'
  | 'scam_fraud'
  | 'other';

export interface ReportRecord {
  reportId: string;
  reporterSessionId: string;
  reportedSessionId: string;
  matchId: string;
  reason: ReportReason;
  details?: string;
  createdAt: number;
}

// WebSocket Envelope Protocol
export type ClientEventType =
  | 'session.init'
  | 'match.queue'
  | 'match.cancel'
  | 'message.send'
  | 'chat.typing'
  | 'chat.next'
  | 'chat.leave'
  | 'chat.report'
  | 'chat.block'
  | 'ping';

export type ServerEventType =
  | 'session.ready'
  | 'match.searching'
  | 'match.found'
  | 'chat.connected'
  | 'message.received'
  | 'message.rejected'
  | 'chat.typing'
  | 'chat.ended'
  | 'chat.partner_disconnected'
  | 'rate_limit.reached'
  | 'report.submitted'
  | 'error'
  | 'pong';

export interface ClientMessage<T = unknown> {
  type: ClientEventType;
  requestId?: string;
  payload: T;
}

export interface ServerMessage<T = unknown> {
  type: ServerEventType;
  requestId?: string;
  payload: T;
  timestamp: number;
}

export interface SendMessagePayload {
  content?: string;
  mediaType?: 'image' | 'video';
  mediaData?: string;
}

export interface QueuePayload {
  nickname: string;
  gender: Gender;
  preference: MatchPreference;
  country: Country;
  language: Language;
}

export interface ReportPayload {
  reason: ReportReason;
  details?: string;
}
