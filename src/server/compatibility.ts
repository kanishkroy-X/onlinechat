import type { Gender, MatchPreference } from './types';

export interface ParticipantProfile {
  gender: Gender;
  preference: MatchPreference;
}

/**
 * Evaluates mutual compatibility between two participants.
 * Both users' preferences MUST be satisfied simultaneously.
 */
export function isCompatible(
  userA: ParticipantProfile,
  userB: ParticipantProfile
): boolean {
  const aAcceptsB = userA.preference === 'anyone' || userA.preference === userB.gender;
  const bAcceptsA = userB.preference === 'anyone' || userB.preference === userA.gender;

  return aAcceptsB && bAcceptsA;
}
