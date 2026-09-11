import type { APIRoute } from 'astro';
import { ChatCoordinator } from '../../server/coordinator';
import { MOCK_USERS } from '../../data/mockData';

export const prerender = false;

export const GET: APIRoute = async () => {
  const coordinator = ChatCoordinator.getInstance();
  const serverPresence = coordinator.getPresence();

  // Connected real WebSocket guest users
  const connectedGuests = serverPresence.clients.map((c) => ({
    id: c.sessionId,
    username: c.nickname,
    age: c.age || 24,
    gender: c.gender,
    countryCode: c.country === 'anywhere' ? 'US' : c.country,
    countryName: c.country === 'anywhere' ? 'Global' : c.country,
    online: true,
    isRealGuest: true
  }));

  // Combine real connected guests with active online directory
  const baseUsers = MOCK_USERS.map((u) => ({
    id: u.id,
    username: u.username,
    age: u.age,
    gender: u.gender as 'male' | 'female',
    countryCode: u.countryCode,
    countryName: u.countryName,
    online: true,
    isRealGuest: false
  }));

  const allPeople = [...connectedGuests, ...baseUsers];
  const dynamicOnlineCount = Math.max(allPeople.length, 12 + serverPresence.onlineCount);

  return new Response(
    JSON.stringify({
      onlineCount: dynamicOnlineCount,
      people: allPeople
    }),
    {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-store, no-cache, must-revalidate'
      }
    }
  );
};
