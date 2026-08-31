import { languages, defaultLang, showDefaultLang, type SupportedLang } from './ui';
import { translations, type TranslationDict } from './translations';
import { siteConfig } from '../config/site';

export function getLangFromUrl(url: URL): SupportedLang {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as SupportedLang;
  }
  return defaultLang;
}

export function useTranslations(lang: string = defaultLang): TranslationDict {
  return translations[lang] || translations[defaultLang];
}

export function useTranslatedPath(lang: string = defaultLang) {
  return function translatePath(path: string, l: string = lang): string {
    const cleanPath = path.startsWith('/') ? path : `/${path}`;
    // Strip existing language prefix if present
    const segments = cleanPath.split('/').filter(Boolean);
    const firstSegment = segments[0];
    const isLangPrefix = firstSegment && firstSegment in languages;
    const pathWithoutLang = isLangPrefix ? '/' + segments.slice(1).join('/') : cleanPath;
    const finalCleanPath = pathWithoutLang === '' ? '/' : pathWithoutLang;

    if (!showDefaultLang && l === defaultLang) {
      return finalCleanPath;
    }
    return `/${l}${finalCleanPath === '/' ? '' : finalCleanPath}`;
  };
}

export function getRouteFromUrl(url: URL): string {
  const pathname = url.pathname;
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length > 0 && parts[0] in languages) {
    return '/' + parts.slice(1).join('/');
  }
  return pathname;
}

export interface HreflangItem {
  lang: string;
  url: string;
}

export function getHreflangLinks(currentPathOrUrl: string | URL): HreflangItem[] {
  let path = typeof currentPathOrUrl === 'string' ? currentPathOrUrl : currentPathOrUrl.pathname;
  // If full URL was provided, extract pathname
  if (path.startsWith('http://') || path.startsWith('https://')) {
    try {
      path = new URL(path).pathname;
    } catch {
      // fallback
    }
  }

  // Remove existing lang prefix if any
  const segments = path.split('/').filter(Boolean);
  if (segments.length > 0 && segments[0] in languages) {
    segments.shift();
  }
  const cleanPath = segments.length > 0 ? '/' + segments.join('/') : '';
  const baseUrl = siteConfig.url.replace(/\/$/, '');

  const items: HreflangItem[] = [];

  // x-default points to default language (English) root/path
  items.push({
    lang: 'x-default',
    url: `${baseUrl}${cleanPath || '/'}`
  });

  // Default language (en) without prefix
  items.push({
    lang: 'en',
    url: `${baseUrl}${cleanPath || '/'}`
  });

  // All other supported locales
  const otherLangs: SupportedLang[] = ['es', 'ja', 'fr', 'de', 'pt', 'ko', 'it'];
  for (const l of otherLangs) {
    items.push({
      lang: l,
      url: `${baseUrl}/${l}${cleanPath}`
    });
  }

  return items;
}
