---
name: country-flags
description: Collection and utilities for country flag SVGs, ISO 3166-1 alpha-2 codes, and country mappings. Use when needing country flags, nation icons, localized language selector flags, or embedding SVG/PNG flags in Astro, React, Svelte, or Tailwind apps.
metadata:
  authors: "Antigravity & Community"
  version: "1.0.0"
---

# Country Flags & ISO Icons Guide

This skill provides immediate access to world country flags in SVG and PNG formats, mapped by ISO 3166-1 alpha-2 standard country codes (e.g. `us`, `in`, `gb`, `de`, `fr`, `jp`, `ca`).

- **Local Flag Asset Directory**: [`e:/vibe/skills/node_modules/svg-country-flags/svg`](file:///e:/vibe/skills/node_modules/svg-country-flags/svg)
- **Local Countries Mapping**: [`e:/vibe/skills/node_modules/svg-country-flags/countries.json`](file:///e:/vibe/skills/node_modules/svg-country-flags/countries.json)
- **PNG Sizes**: `png100px/`, `png250px/`, and `png1000px/` inside [`svg-country-flags`](file:///e:/vibe/skills/node_modules/svg-country-flags).

---

## 1. File Naming Convention

All flags are named using their 2-letter lowercase ISO 3166-1 alpha-2 code:
- United States: `us.svg`
- India: `in.svg`
- United Kingdom: `gb.svg`
- Canada: `ca.svg`
- Germany: `de.svg`
- France: `fr.svg`
- Japan: `jp.svg`
- Australia: `au.svg`
- Brazil: `br.svg`
- European Union: `eu.svg`

Full country code to name mappings are in [`countries.json`](file:///e:/vibe/skills/node_modules/svg-country-flags/countries.json).

---

## 2. Usage Patterns

### A. Astro Application (e.g. `onlinechat`)
Place the flags in `public/flags/` or import dynamically:

```astro
---
// Component: CountryFlag.astro
interface Props {
  code: string; // ISO alpha-2, e.g. "US", "IN"
  name?: string;
  className?: string;
}

const { code, name, className = "w-6 h-4 inline-block rounded-xs shadow-xs object-cover" } = Astro.props;
const codeLower = code.toLowerCase();
---

<img
  src={`/flags/${codeLower}.svg`}
  alt={name || `${code.toUpperCase()} flag`}
  title={name || code.toUpperCase()}
  class={className}
  loading="lazy"
  width="24"
  height="16"
/>
```

### B. Inline SVG in HTML/Tailwind
```html
<!-- Rounded flag with border and shadow -->
<span class="inline-flex items-center gap-2 font-medium">
  <img src="/flags/us.svg" alt="United States" class="w-5 h-3.5 object-cover rounded-sm border border-gray-200" />
  United States
</span>
```

### C. Language Selector Dropdown
```astro
---
const languages = [
  { code: "en", country: "us", label: "English (US)" },
  { code: "hi", country: "in", label: "हिन्दी" },
  { code: "es", country: "es", label: "Español" },
  { code: "de", country: "de", label: "Deutsch" },
  { code: "ja", country: "jp", label: "日本語" },
];
---

<ul class="space-y-1">
  {languages.map((lang) => (
    <li>
      <a href={`/${lang.code}`} class="flex items-center gap-2.5 px-3 py-1.5 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-md transition-colors">
        <img src={`/flags/${lang.country}.svg`} alt="" class="w-5 h-3.5 rounded-xs object-cover" />
        <span class="text-sm">{lang.label}</span>
      </a>
    </li>
  ))}
</ul>
```

---

## 3. Quick Reference: Common ISO Country Codes

| Code | Country | Flag File |
| :--- | :--- | :--- |
| `us` | United States | `us.svg` |
| `in` | India | `in.svg` |
| `gb` | United Kingdom | `gb.svg` |
| `ca` | Canada | `ca.svg` |
| `au` | Australia | `au.svg` |
| `de` | Germany | `de.svg` |
| `fr` | France | `fr.svg` |
| `jp` | Japan | `jp.svg` |
| `cn` | China | `cn.svg` |
| `br` | Brazil | `br.svg` |
| `mx` | Mexico | `mx.svg` |
| `es` | Spain | `es.svg` |
| `it` | Italy | `it.svg` |
| `kr` | South Korea | `kr.svg` |
| `ru` | Russian Federation | `ru.svg` |
| `sg` | Singapore | `sg.svg` |
| `ae` | United Arab Emirates | `ae.svg` |
| `eu` | European Union | `eu.svg` |

For any code not listed above, look up key in [`countries.json`](file:///e:/vibe/skills/node_modules/svg-country-flags/countries.json).
