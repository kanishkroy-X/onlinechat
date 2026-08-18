import type { APIRoute } from 'astro';
import { ChatCoordinator } from '../../server/coordinator';
import type { Gender, MatchPreference, ClientMessage } from '../../server/types';

export const prerender = false;

export const GET: APIRoute = async ({ request }) => {
  const url = new URL(request.url);

  if (request.headers.get('Upgrade') !== 'websocket') {
    return new Response('Expected WebSocket upgrade', { status: 426 });
  }

  const sessionId = url.searchParams.get('sessionId') || `sess_${crypto.randomUUID()}`;
  const nickname = url.searchParams.get('nickname') || 'Stranger';
  const gender = (url.searchParams.get('gender') as Gender) || 'male';
  const preference = (url.searchParams.get('preference') as MatchPreference) || 'anyone';

  // Cloudflare WebSocket Pair
  // @ts-expect-error WebSocketPair is standard in Cloudflare Workers
  const pair = new WebSocketPair();
  const [clientSocket, serverSocket] = Object.values(pair) as [WebSocket, WebSocket];

  // @ts-expect-error accept() method on server WebSocket in Cloudflare Workers
  serverSocket.accept();

  const coordinator = ChatCoordinator.getInstance();
  coordinator.registerClient(sessionId, nickname, gender, preference, serverSocket);

  serverSocket.addEventListener('message', (event: MessageEvent) => {
    try {
      const raw = typeof event.data === 'string' ? event.data : new TextDecoder().decode(event.data as ArrayBuffer);
      const msg = JSON.parse(raw) as ClientMessage;

      switch (msg.type) {
        case 'ping':
          coordinator.send(serverSocket, {
            type: 'pong',
            payload: {},
            timestamp: Date.now()
          });
          break;

        case 'match.queue':
          coordinator.enqueue(sessionId);
          break;

        case 'match.cancel':
          coordinator.queue.delete(sessionId);
          break;

        case 'message.send': {
          const payload = msg.payload as { content?: string; mediaType?: 'image' | 'video'; mediaData?: string };
          coordinator.handleMessage(sessionId, payload?.content, payload?.mediaType, payload?.mediaData);
          break;
        }

        case 'chat.typing':
          coordinator.handleTyping(sessionId);
          break;

        case 'chat.next':
          coordinator.handleNext(sessionId);
          break;

        case 'chat.leave':
          coordinator.handleLeave(sessionId);
          break;

        case 'chat.report': {
          const payload = msg.payload as { reason: string; details?: string };
          coordinator.handleReport(sessionId, payload.reason, payload.details);
          break;
        }

        case 'chat.block':
          coordinator.handleLeave(sessionId);
          break;
      }
    } catch (e) {
      console.error('Error handling websocket message', e);
    }
  });

  serverSocket.addEventListener('close', () => {
    coordinator.removeClient(sessionId);
  });

  serverSocket.addEventListener('error', () => {
    coordinator.removeClient(sessionId);
  });

  return new Response(null, {
    status: 101,
    // @ts-expect-error webSocket property in Cloudflare Response
    webSocket: clientSocket
  });
};
