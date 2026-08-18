import { describe, it, expect } from 'vitest';
import { isCompatible } from '../../src/server/compatibility';
import type { Gender, MatchPreference } from '../../src/server/types';

describe('Matchmaking Compatibility Matrix', () => {
  it('Male (wants Female) + Female (wants Anyone) => COMPATIBLE', () => {
    const a = { gender: 'male' as Gender, preference: 'female' as MatchPreference };
    const b = { gender: 'female' as Gender, preference: 'anyone' as MatchPreference };
    expect(isCompatible(a, b)).toBe(true);
    expect(isCompatible(b, a)).toBe(true);
  });

  it('Male (wants Female) + Male (wants Anyone) => INCOMPATIBLE', () => {
    const a = { gender: 'male' as Gender, preference: 'female' as MatchPreference };
    const b = { gender: 'male' as Gender, preference: 'anyone' as MatchPreference };
    expect(isCompatible(a, b)).toBe(false);
    expect(isCompatible(b, a)).toBe(false);
  });

  it('Female (wants Male) + Male (wants Female) => COMPATIBLE', () => {
    const a = { gender: 'female' as Gender, preference: 'male' as MatchPreference };
    const b = { gender: 'male' as Gender, preference: 'female' as MatchPreference };
    expect(isCompatible(a, b)).toBe(true);
    expect(isCompatible(b, a)).toBe(true);
  });

  it('Male (wants Male) + Male (wants Male) => COMPATIBLE', () => {
    const a = { gender: 'male' as Gender, preference: 'male' as MatchPreference };
    const b = { gender: 'male' as Gender, preference: 'male' as MatchPreference };
    expect(isCompatible(a, b)).toBe(true);
  });

  it('Female (wants Female) + Female (wants Female) => COMPATIBLE', () => {
    const a = { gender: 'female' as Gender, preference: 'female' as MatchPreference };
    const b = { gender: 'female' as Gender, preference: 'female' as MatchPreference };
    expect(isCompatible(a, b)).toBe(true);
  });

  it('Anyone + Anyone => COMPATIBLE for any gender combination', () => {
    const genders: Gender[] = ['male', 'female'];
    for (const g1 of genders) {
      for (const g2 of genders) {
        const a = { gender: g1, preference: 'anyone' as MatchPreference };
        const b = { gender: g2, preference: 'anyone' as MatchPreference };
        expect(isCompatible(a, b)).toBe(true);
      }
    }
  });

  it('Female (wants Female) + Male (wants Female) => INCOMPATIBLE (one-way only)', () => {
    const a = { gender: 'female' as Gender, preference: 'female' as MatchPreference };
    const b = { gender: 'male' as Gender, preference: 'female' as MatchPreference };
    expect(isCompatible(a, b)).toBe(false);
    expect(isCompatible(b, a)).toBe(false);
  });
});
