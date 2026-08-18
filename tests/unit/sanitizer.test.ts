import { describe, it, expect } from 'vitest';
import { validateNickname, validateMessage, escapeHtml } from '../../src/server/sanitizer';

describe('Sanitizer & Input Validation', () => {
  it('escapes dangerous HTML characters', () => {
    const raw = '<script>alert("xss")</script>&foo=\'bar\'';
    const escaped = escapeHtml(raw);
    expect(escaped).not.toContain('<script>');
    expect(escaped).toBe('&lt;script&gt;alert(&quot;xss&quot;)&lt;/script&gt;&amp;foo=&#039;bar&#039;');
  });

  it('validates nicknames correctly', () => {
    expect(validateNickname('ValidNick123').isValid).toBe(true);
    expect(validateNickname('a').isValid).toBe(false); // too short
    expect(validateNickname('ThisNicknameIsWayTooLongToBeAllowed123').isValid).toBe(false); // >20 chars
    expect(validateNickname('admin').isValid).toBe(false); // reserved
    expect(validateNickname('system').isValid).toBe(false); // reserved
    expect(validateNickname('moderator').isValid).toBe(false); // reserved
    expect(validateNickname('Bad<script>').isValid).toBe(false); // invalid characters
  });

  it('validates messages correctly', () => {
    expect(validateMessage('Hello there!').isValid).toBe(true);
    expect(validateMessage('   ').isValid).toBe(false); // empty
    expect(validateMessage('').isValid).toBe(false);
    expect(validateMessage(1234).isValid).toBe(false); // non-string

    const longMessage = 'a'.repeat(1001);
    expect(validateMessage(longMessage).isValid).toBe(false); // >1000 chars

    const validLongMessage = 'a'.repeat(1000);
    expect(validateMessage(validLongMessage).isValid).toBe(true);
  });
});
