export const languages = {
  en: 'English',
  es: 'Español',
  ja: '日本語',
  fr: 'Français',
  de: 'Deutsch',
  pt: 'Português',
  ko: '한국어',
  it: 'Italiano',
} as const;

export type SupportedLang = keyof typeof languages;

export const defaultLang: SupportedLang = 'en';
export const showDefaultLang = false;

export const languageFlags: Record<SupportedLang, string> = {
  en: '🇺🇸',
  es: '🇪🇸',
  ja: '🇯🇵',
  fr: '🇫🇷',
  de: '🇩🇪',
  pt: '🇧🇷',
  ko: '🇰🇷',
  it: '🇮🇹',
};

export const languageOgLocales: Record<SupportedLang, string> = {
  en: 'en_US',
  es: 'es_ES',
  ja: 'ja_JP',
  fr: 'fr_FR',
  de: 'de_DE',
  pt: 'pt_BR',
  ko: 'ko_KR',
  it: 'it_IT',
};
