import type { QueueEntry, Gender, MatchPreference, Country, Language } from './types';
import { isCompatible } from './compatibility';
import { SlidingWindowRateLimiter } from './rateLimiter';

export interface MatchResult {
  matched: boolean;
  matchId?: string;
  partner?: {
    sessionId: string;
    nickname: string;
    gender: Gender;
    country: Country;
    language: Language;
  };
}

export class MatchmakerDO {
  private queue: Map<string, QueueEntry> = new Map();
  // key: "sessionIdA:sessionIdB" -> expiry timestamp
  private recentMatches: Map<string, number> = new Map();
  private rateLimiter = new SlidingWindowRateLimiter({ maxRequests: 15, windowMs: 60000 });

  constructor() {}

  /**
   * Generates a deterministic pair key regardless of order.
   */
  private getPairKey(id1: string, id2: string): string {
    return id1 < id2 ? `${id1}:${id2}` : `${id2}:${id1}`;
  }

  private cleanRecentMatches(): void {
    const now = Date.now();
    for (const [key, expiresAt] of this.recentMatches.entries()) {
      if (now >= expiresAt) {
        this.recentMatches.delete(key);
      }
    }
  }

  /**
   * Enqueues a participant and atomically attempts to match with waiting compatible participants.
   */
  public enqueue(entry: QueueEntry): MatchResult {
    // Check rate limit
    if (!this.rateLimiter.isAllowed(entry.sessionId)) {
      return { matched: false };
    }

    this.cleanRecentMatches();

    // Clean up if already in queue
    this.queue.delete(entry.sessionId);

    // Search for compatible candidate in queue
    let matchedCandidate: QueueEntry | null = null;

    for (const candidate of this.queue.values()) {
      // Don't match with self
      if (candidate.sessionId === entry.sessionId) continue;

      // Check recent match exclusion (avoid immediate rematching)
      const pairKey = this.getPairKey(entry.sessionId, candidate.sessionId);
      if (this.recentMatches.has(pairKey)) continue;

      // Check mutual compatibility
      if (isCompatible(
        { gender: entry.gender, preference: entry.preference, country: entry.country, language: entry.language },
        { gender: candidate.gender, preference: candidate.preference, country: candidate.country, language: candidate.language }
      )) {
        matchedCandidate = candidate;
        break;
      }
    }

    if (matchedCandidate) {
      // Remove candidate from queue atomically
      this.queue.delete(matchedCandidate.sessionId);

      const matchId = `match_${crypto.randomUUID()}`;

      // Set recent match cooldown for 2 minutes
      const pairKey = this.getPairKey(entry.sessionId, matchedCandidate.sessionId);
      this.recentMatches.set(pairKey, Date.now() + 120000);

      return {
        matched: true,
        matchId,
        partner: {
          sessionId: matchedCandidate.sessionId,
          nickname: matchedCandidate.nickname,
          gender: matchedCandidate.gender,
          country: matchedCandidate.country,
          language: matchedCandidate.language
        }
      };
    }

    // No candidate found: add to queue
    this.queue.set(entry.sessionId, entry);
    return { matched: false };
  }

  /**
   * Removes a user from queue (e.g. cancelled search, disconnected, or navigation away).
   */
  public dequeue(sessionId: string): boolean {
    return this.queue.delete(sessionId);
  }

  /**
   * Checks if user is currently queued.
   */
  public isQueued(sessionId: string): boolean {
    return this.queue.has(sessionId);
  }

  /**
   * HTTP Handler for Durable Object invocations.
   */
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);

    if (request.method === 'POST' && url.pathname === '/enqueue') {
      const body = (await request.json()) as QueueEntry;
      const result = this.enqueue(body);
      return new Response(JSON.stringify(result), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (request.method === 'POST' && url.pathname === '/dequeue') {
      const body = (await request.json()) as { sessionId: string };
      const removed = this.dequeue(body.sessionId);
      return new Response(JSON.stringify({ success: removed }), {
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response('Not Found', { status: 404 });
  }
}
