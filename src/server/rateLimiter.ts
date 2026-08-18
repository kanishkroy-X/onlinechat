export interface RateLimitConfig {
  maxRequests: number;
  windowMs: number;
}

export class SlidingWindowRateLimiter {
  private requests: Map<string, number[]> = new Map();
  private maxRequests: number;
  private windowMs: number;

  constructor(config: RateLimitConfig) {
    this.maxRequests = config.maxRequests;
    this.windowMs = config.windowMs;
  }

  /**
   * Checks if an action by the given key (e.g. IP or session ID) is within rate limits.
   * Returns true if allowed, false if rate limited.
   */
  public isAllowed(key: string): boolean {
    const now = Date.now();
    const timestamps = this.requests.get(key) || [];

    // Filter out expired timestamps
    const validTimestamps = timestamps.filter(t => now - t < this.windowMs);

    if (validTimestamps.length >= this.maxRequests) {
      this.requests.set(key, validTimestamps);
      return false;
    }

    validTimestamps.push(now);
    this.requests.set(key, validTimestamps);
    return true;
  }

  /**
   * Returns remaining time in milliseconds until the rate limit window clears.
   */
  public getRetryAfterMs(key: string): number {
    const now = Date.now();
    const timestamps = this.requests.get(key) || [];
    if (timestamps.length === 0) return 0;

    const oldest = timestamps[0];
    const diff = now - oldest;
    return Math.max(0, this.windowMs - diff);
  }

  /**
   * Cleans up stale entries from memory.
   */
  public cleanup(): void {
    const now = Date.now();
    for (const [key, timestamps] of this.requests.entries()) {
      const valid = timestamps.filter(t => now - t < this.windowMs);
      if (valid.length === 0) {
        this.requests.delete(key);
      } else {
        this.requests.set(key, valid);
      }
    }
  }
}
