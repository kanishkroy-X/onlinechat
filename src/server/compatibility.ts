import type { Gender, MatchPreference, Country, Language } from './types';

export interface ParticipantProfile {
  gender: Gender;
  preference: MatchPreference;
  country: Country;
  language: Language;
}

/**
 * Evaluates mutual compatibility between two participants.
 * Both users' preferences MUST be satisfied simultaneously.
 */
export function isCompatible(
  userA: ParticipantProfile,
  userB: ParticipantProfile
): boolean {
  const aAcceptsB =
    userA.preference === 'anyone' || userA.preference === userB.gender;
  const bAcceptsA =
    userB.preference === 'anyone' || userB.preference === userA.gender;

  const countryCompatible =
    userA.country === 'anywhere' ||
    userB.country === 'anywhere' ||
    userA.country === userB.country;

  const languageCompatible =
    userA.language === 'any' ||
    userB.language === 'any' ||
    userA.language === userB.language;

  return aAcceptsB && bAcceptsA && countryCompatible && languageCompatible;
}
