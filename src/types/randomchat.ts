export type Gender = 'male' | 'female' | 'other';

export interface User {
  id: string;
  username: string;
  age: number;
  gender: Gender;
  countryCode: string;
  countryName: string;
  city: string;
  avatarUrl: string;
  isOnline: boolean;
  statusMessage?: string;
}

export type MessageType = 'text' | 'png' | 'mp4' | 'voice';

export interface Message {
  id: string;
  senderId: string;
  type: MessageType;
  content?: string;
  mediaUrl?: string;
  fileName?: string;
  fileSize?: string;
  voiceDuration?: string;
  createdAt: string;
}

export interface Conversation {
  id: string;
  participant: User;
  messages: Message[];
  hasSentMessage: boolean;
  hasReceivedReply: boolean;
  voiceNoteUnlocked: boolean;
  voiceChatUnlocked: boolean;
  voiceCallUnlocked: boolean;
  videoCallUnlocked: boolean;
  unreadCount: number;
  lastActivity: string;
}

export interface Room {
  id: string;
  name: string;
  icon: string;
  category: string;
  onlineCount: number;
  description: string;
  rules: string[];
}

export type InboxTab = 'all' | 'chats' | 'calls' | 'requests';

export interface InboxItem {
  id: string;
  participant: User;
  lastMessage: string;
  timestamp: string;
  unreadCount: number;
  type: 'chat' | 'call' | 'request';
  status?: string;
}

export interface FilterState {
  gender: 'all' | Gender;
  minAge: number;
  maxAge: number;
  countryCode: string;
  city: string;
}

export type ReportReason =
  | 'harassment'
  | 'spam'
  | 'hate'
  | 'sexual'
  | 'threatening'
  | 'other';
