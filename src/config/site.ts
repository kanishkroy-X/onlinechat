/**
 * Brand and site configuration.
 *
 * Keep the product name independent of the current hosting domain.
 * Set PUBLIC_SITE_URL when the real domain is ready (no trailing slash).
 * Set PUBLIC_CONTACT_EMAIL to the public inbox you actually monitor.
 * Set PUBLIC_GA_ID to an empty string to disable analytics.
 */
const env = import.meta.env;

export const SITE = {
  name: 'RandomChat',
  shortName: 'RandomChat',
  tagline: 'Talk to a stranger. No account.',
  description:
    'RandomChat is a free, browser-based text chat that matches you with a stranger. No email, no profile, no app. When the chat ends, we do not keep a message history.',
  url: typeof env.PUBLIC_SITE_URL === 'string' ? env.PUBLIC_SITE_URL.replace(/\/$/, '') : '',
  contactEmail: typeof env.PUBLIC_CONTACT_EMAIL === 'string' ? env.PUBLIC_CONTACT_EMAIL : '',
  gaId:
    env.PUBLIC_GA_ID === ''
      ? ''
      : typeof env.PUBLIC_GA_ID === 'string'
        ? env.PUBLIC_GA_ID
        : 'G-GJTQW9LZ5W',
  minAge: 18,
  locale: 'en',
} as const;

export function siteOrigin(fallbackOrigin = ''): string {
  return SITE.url || fallbackOrigin;
}

export function canonicalUrl(pathname: string, fallbackOrigin = ''): string {
  const origin = siteOrigin(fallbackOrigin);
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (!origin) return path;
  return `${origin}${path === '/' ? '/' : path}`;
}

export function contactEmail(fallbackHost = ''): string {
  if (SITE.contactEmail) return SITE.contactEmail;
  try {
    if (SITE.url) return `hello@${new URL(SITE.url).host}`;
  } catch {
    /* ignore invalid PUBLIC_SITE_URL */
  }
  if (fallbackHost) {
    const host = fallbackHost.replace(/:\d+$/, '');
    if (host && host !== 'localhost' && host !== '127.0.0.1') {
      return `hello@${host}`;
    }
  }
  return '';
}

export function ogImageUrl(fallbackOrigin = ''): string {
  const origin = siteOrigin(fallbackOrigin);
  return origin ? `${origin}/og.svg` : '/og.svg';
}
