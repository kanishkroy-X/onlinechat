import rawCountries from './countries.json';

export interface CountryItem {
  code: string; // ISO 3166-1 alpha-2, e.g. "US", "IN"
  name: string;
  flagUrl: string;
}

// Map countries to list sorted alphabetically by name
export const ALL_COUNTRIES: CountryItem[] = Object.entries(rawCountries as Record<string, string>)
  .map(([code, name]) => ({
    code: code.toUpperCase(),
    name,
    flagUrl: `/flags/${code.toLowerCase()}.svg`
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

// Map for O(1) lookups by 2-letter uppercase or lowercase code
export const COUNTRY_MAP: Record<string, CountryItem> = ALL_COUNTRIES.reduce((acc, c) => {
  acc[c.code] = c;
  acc[c.code.toLowerCase()] = c;
  return acc;
}, {} as Record<string, CountryItem>);

// Common default / top countries for fast access
export const POPULAR_COUNTRIES: CountryItem[] = [
  'US', 'IN', 'GB', 'CA', 'AU', 'DE', 'FR', 'ES', 'BR', 'JP', 'IT', 'NL', 'SG', 'KR', 'MX'
]
  .map(code => COUNTRY_MAP[code])
  .filter((c): c is CountryItem => Boolean(c));

export function getCountryByCode(code?: string): CountryItem | null {
  if (!code) return null;
  return COUNTRY_MAP[code.toUpperCase()] || null;
}
