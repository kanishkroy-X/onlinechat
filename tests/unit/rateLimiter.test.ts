import { describe, it, expect } from 'vitest';
import { SlidingWindowRateLimiter } from '../../src/server/rateLimiter';

describe('Sliding Window Rate Limiter', () => {
  it('allows requests within threshold and blocks excess requests', () => {
    const limiter = new SlidingWindowRateLimiter({ maxRequests: 3, windowMs: 1000 });
    const key = 'user_123';

    expect(limiter.isAllowed(key)).toBe(true);
    expect(limiter.isAllowed(key)).toBe(true);
    expect(limiter.isAllowed(key)).toBe(true);
    expect(limiter.isAllowed(key)).toBe(false); // 4th request blocked
  });

  it('maintains separate limits for different keys', () => {
    const limiter = new SlidingWindowRateLimiter({ maxRequests: 2, windowMs: 1000 });

    expect(limiter.isAllowed('user_A')).toBe(true);
    expect(limiter.isAllowed('user_A')).toBe(true);
    expect(limiter.isAllowed('user_A')).toBe(false);

    expect(limiter.isAllowed('user_B')).toBe(true);
    expect(limiter.isAllowed('user_B')).toBe(true);
  });
});
