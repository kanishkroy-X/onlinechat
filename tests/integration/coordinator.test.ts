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

describe('Chat Coordinator Integration & Cold Gate', () => {
  let coordinator: ChatCoordinator;

  beforeEach(() => {
    coordinator = new ChatCoordinator();
  });

  it('matches two compatible users and exchanges messages with cold-message gate', () => {
    const wsA = new MockWebSocket();
    const wsB = new MockWebSocket();

    // Register User A (Male wanting Female)
    coordinator.registerClient('sess_A', 'Alice', 'male', 'female', wsA as unknown as WebSocket);
    // Register User B (Female wanting Male)
    coordinator.registerClient('sess_B', 'Bob', 'female', 'male', wsB as unknown as WebSocket);

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

  it('handles Next Stranger teardown and informs partner', () => {
    const wsA = new MockWebSocket();
    const wsB = new MockWebSocket();

    coordinator.registerClient('sess_1', 'User1', 'male', 'anyone', wsA as unknown as WebSocket);
    coordinator.registerClient('sess_2', 'User2', 'female', 'anyone', wsB as unknown as WebSocket);

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
    coordinator.registerClient('sess_rep', 'Reporter', 'male', 'anyone', wsA as unknown as WebSocket);

    coordinator.handleReport('sess_rep', 'spam', 'Sending spam links');
    const repMsg = wsA.messages.find(m => m.type === 'report.submitted');
    expect(repMsg).toBeDefined();
  });
});
