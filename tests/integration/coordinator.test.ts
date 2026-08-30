import { describe, it, expect, beforeEach } from 'vitest';
import { ChatCoordinator } from '../../src/server/coordinator';
import type { ServerMessage } from '../../src/server/types';

class MockWebSocket {
  public readyState = 1; // WebSocket.OPEN
  public messages: ServerMessage[] = [];

  send(data: string) {
    this.messages.push(JSON.parse(data));
  }

  getLastMessage(): ServerMessage | undefined {
    return this.messages[this.messages.length - 1];
  }

  clear() {
    this.messages = [];
  }
}

describe('Chat Coordinator Integration & Operating System Guardrails', () => {
  let coordinator: ChatCoordinator;

  beforeEach(() => {
    coordinator = new ChatCoordinator();
  });

  it('matches two compatible users and exchanges messages with cold-message gate', () => {
    const wsA = new MockWebSocket();
    const wsB = new MockWebSocket();

    // Register User A (Male wanting Female)
    coordinator.registerClient('sess_A', 'Alice', 'male', 'female', 'US', 'en', wsA as unknown as WebSocket);
    // Register User B (Female wanting Male)
    coordinator.registerClient('sess_B', 'Bob', 'female', 'male', 'US', 'en', wsB as unknown as WebSocket);

    // Enqueue A
    coordinator.enqueue('sess_A');
    expect(wsA.getLastMessage()?.type).toBe('match.searching');

    // Enqueue B -> Match created!
    coordinator.enqueue('sess_B');

    // Both should receive match.found and chat.connected
    const aConnected = wsA.messages.find(m => m.type === 'chat.connected');
    const bConnected = wsB.messages.find(m => m.type === 'chat.connected');
    expect(aConnected).toBeDefined();
    expect(bConnected).toBeDefined();

    wsA.clear();
    wsB.clear();

    // 1. User A sends message #1 -> SUCCESS
    coordinator.handleMessage('sess_A', 'Hello from A!');
    expect(wsA.messages.find(m => m.type === 'message.received')).toBeDefined();
    expect(wsB.messages.find(m => m.type === 'message.received')).toBeDefined();
    expect(coordinator.clients.get('sess_A')?.outgoingCount).toBe(1);

    wsA.clear();
    wsB.clear();

    // 2. User A sends message #2 -> SUCCESS
    coordinator.handleMessage('sess_A', 'Are you there?');
    expect(wsA.messages.find(m => m.type === 'message.received')).toBeDefined();
    expect(coordinator.clients.get('sess_A')?.outgoingCount).toBe(2);

    wsA.clear();
    wsB.clear();

    // 3. User A tries to send message #3 without reply -> REJECTED by Cold Gate!
    coordinator.handleMessage('sess_A', 'Why are you not replying?');
    const rejection = wsA.messages.find(m => m.type === 'message.rejected');
    expect(rejection).toBeDefined();
    expect((rejection?.payload as { code: string })?.code).toBe('COLD_MESSAGE_LIMIT_REACHED');
    expect(wsB.messages.length).toBe(0); // Partner received nothing!

    wsA.clear();
    wsB.clear();

    // 4. User B replies -> Resets User A's cold gate counter to 0!
    coordinator.handleMessage('sess_B', 'Hey! Sorry I was typing.');
    expect(wsA.messages.find(m => m.type === 'message.received')).toBeDefined();
    expect(coordinator.clients.get('sess_A')?.outgoingCount).toBe(0);
    expect(coordinator.clients.get('sess_B')?.outgoingCount).toBe(1);

    wsA.clear();
    wsB.clear();

    // 5. User A can now send message #3 normally!
    coordinator.handleMessage('sess_A', 'Great to hear from you!');
    expect(wsA.messages.find(m => m.type === 'message.received')).toBeDefined();
    expect(wsB.messages.find(m => m.type === 'message.received')).toBeDefined();
  });

  it('enforces Block-Aware Matchmaking: blocked users never rematch (MATCH-001 / SEC-001)', () => {
    const wsAlice = new MockWebSocket();
    const wsBob = new MockWebSocket();
    const wsCharlie = new MockWebSocket();

    coordinator.registerClient('sess_alice', 'Alice', 'female', 'anyone', 'anywhere', 'any', wsAlice as unknown as WebSocket);
    coordinator.registerClient('sess_bob', 'Bob', 'male', 'anyone', 'anywhere', 'any', wsBob as unknown as WebSocket);
    coordinator.registerClient('sess_charlie', 'Charlie', 'male', 'anyone', 'anywhere', 'any', wsCharlie as unknown as WebSocket);

    // Initial match: Alice & Bob
    coordinator.enqueue('sess_alice');
    coordinator.enqueue('sess_bob');
    expect(wsAlice.messages.find(m => m.type === 'chat.connected')).toBeDefined();

    // Alice blocks Bob!
    coordinator.handleBlock('sess_alice');

    // Both should be disconnected
    expect(wsBob.messages.find(m => m.type === 'chat.ended')).toBeDefined();
    expect(coordinator.clients.get('sess_alice')?.blockedSessionIds.has('sess_bob')).toBe(true);
    expect(coordinator.clients.get('sess_bob')?.blockedSessionIds.has('sess_alice')).toBe(true);

    wsAlice.clear();
    wsBob.clear();
    wsCharlie.clear();

    // Alice and Bob re-enter matchmaking
    coordinator.enqueue('sess_alice');
    coordinator.enqueue('sess_bob');

    // Neither should match with each other! Both should remain searching
    expect(wsAlice.getLastMessage()?.type).toBe('match.searching');
    expect(wsBob.getLastMessage()?.type).toBe('match.searching');

    // When third user Charlie enters, Alice matches with Charlie, NOT Bob!
    coordinator.enqueue('sess_charlie');
    expect(wsAlice.messages.find(m => m.type === 'chat.connected')).toBeDefined();
  });

  it('isolates matchmaking modes: Text mode users only match with Text mode, Voice with Voice', () => {
    const wsText = new MockWebSocket();
    const wsVoice = new MockWebSocket();
    const wsVoice2 = new MockWebSocket();

    coordinator.registerClient('sess_text', 'TextUser', 'male', 'anyone', 'anywhere', 'any', wsText as unknown as WebSocket, 'text');
    coordinator.registerClient('sess_voice', 'VoiceUser1', 'female', 'anyone', 'anywhere', 'any', wsVoice as unknown as WebSocket, 'voice');
    coordinator.registerClient('sess_voice2', 'VoiceUser2', 'male', 'anyone', 'anywhere', 'any', wsVoice2 as unknown as WebSocket, 'voice');

    coordinator.enqueue('sess_text');
    coordinator.enqueue('sess_voice');

    // Incompatible modes: neither should match
    expect(wsText.getLastMessage()?.type).toBe('match.searching');
    expect(wsVoice.getLastMessage()?.type).toBe('match.searching');

    // When another voice user joins -> Voice matching occurs!
    coordinator.enqueue('sess_voice2');
    expect(wsVoice.messages.find(m => m.type === 'chat.connected')).toBeDefined();
    expect(wsVoice2.messages.find(m => m.type === 'chat.connected')).toBeDefined();
  });

  it('relays WebRTC voice signaling (offer, answer, ice candidate, voice state) between matched peers (VOICE-001)', () => {
    const ws1 = new MockWebSocket();
    const ws2 = new MockWebSocket();

    coordinator.registerClient('sess_v1', 'Peer1', 'male', 'anyone', 'anywhere', 'any', ws1 as unknown as WebSocket, 'voice');
    coordinator.registerClient('sess_v2', 'Peer2', 'female', 'anyone', 'anywhere', 'any', ws2 as unknown as WebSocket, 'voice');

    coordinator.enqueue('sess_v1');
    coordinator.enqueue('sess_v2');

    ws1.clear();
    ws2.clear();

    // Peer 1 sends WebRTC Offer
    coordinator.handleWebRTCSignaling('sess_v1', 'webrtc.offer', {
      sdp: { type: 'offer', sdp: 'v=0\r\no=- 12345 2 IN IP4 127.0.0.1...' }
    });
    const receivedOffer = ws2.messages.find(m => m.type === 'webrtc.offer');
    expect(receivedOffer).toBeDefined();

    // Peer 2 replies with WebRTC Answer
    coordinator.handleWebRTCSignaling('sess_v2', 'webrtc.answer', {
      sdp: { type: 'answer', sdp: 'v=0\r\no=- 67890 2 IN IP4 127.0.0.1...' }
    });
    const receivedAnswer = ws1.messages.find(m => m.type === 'webrtc.answer');
    expect(receivedAnswer).toBeDefined();

    // Peer 1 mutes mic
    coordinator.handleVoiceState('sess_v1', { isMuted: true });
    const voiceState = ws2.messages.find(m => m.type === 'voice.state');
    expect(voiceState).toBeDefined();
    expect((voiceState?.payload as { isMuted: boolean })?.isMuted).toBe(true);
  });

  it('handles Next Stranger teardown and informs partner', () => {
    const wsA = new MockWebSocket();
    const wsB = new MockWebSocket();

    coordinator.registerClient('sess_1', 'User1', 'male', 'anyone', 'anywhere', 'any', wsA as unknown as WebSocket);
    coordinator.registerClient('sess_2', 'User2', 'female', 'anyone', 'anywhere', 'any', wsB as unknown as WebSocket);

    coordinator.enqueue('sess_1');
    coordinator.enqueue('sess_2');

    wsA.clear();
    wsB.clear();

    // User 1 requests Next Stranger
    coordinator.handleNext('sess_1');

    // Partner (User 2) receives partner_disconnected
    expect(wsB.messages.find(m => m.type === 'chat.partner_disconnected')).toBeDefined();

    // User 1 is placed back in queue searching
    expect(wsA.messages.find(m => m.type === 'match.searching')).toBeDefined();
  });

  it('records report safely without breaking chat', () => {
    const wsA = new MockWebSocket();
    coordinator.registerClient('sess_rep', 'Reporter', 'male', 'anyone', 'anywhere', 'any', wsA as unknown as WebSocket);

    coordinator.handleReport('sess_rep', 'spam', 'Sending spam links');
    const repMsg = wsA.messages.find(m => m.type === 'report.submitted');
    expect(repMsg).toBeDefined();
  });
});
