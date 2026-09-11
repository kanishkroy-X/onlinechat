---
name: svgl
description: Comprehensive library of SVG logos for brands, developer tools, libraries, frameworks, cloud hosting, AI, and design systems. Use when searching for brand/tech logos, embedding official SVGs in web apps (Astro, React, Svelte, HTML), optimizing logos (<21KB, preserve viewBox), or querying the SVGL API.
metadata:
  authors: "pheralb & community"
  version: "1.0.0"
---

# SVGL - SVG Logos Library

SVGL is a curated library of high-quality, web-optimized SVG logos for brands, programming languages, libraries, frameworks, databases, and tech platforms.

- **Local Repository**: [`e:/vibe/skills/svgl`](file:///e:/vibe/skills/svgl)
- **Official Documentation & Website**: [svgl.app](https://svgl.app)
- **API Documentation**: [svgl.app/api](https://svgl.app/api)

---

## 1. Directory Structure

```
svgl/
├── static/
│   └── library/            # Over 1,000+ optimized SVGs (e.g. astro.svg, react.svg, tailwindcss.svg)
├── src/
│   ├── data/
│   │   └── svgs.ts         # Central database & metadata for all logos
│   └── types/
│       ├── categories.ts   # Available logo categories
│       └── svg.ts          # TypeScript interfaces
└── api-routes/             # Hono / Redis backend API
```

---

## 2. Searching & Finding Logos

All logos and metadata are defined in [`src/data/svgs.ts`](file:///e:/vibe/skills/svgl/src/data/svgs.ts).

### Data Schema
```typescript
export interface iSVG {
  title: string;
  category: Category | Category[];
  route: string | { light: string; dark: string };
  wordmark?: string | { light: string; dark: string };
  url: string;
  brandUrl?: string;
  loftlyyUrl?: string;
}
```

### Example Configurations

#### 1. Single Icon
```typescript
{
  title: 'Astro',
  category: 'Framework',
  route: '/library/astro.svg',
  url: 'https://astro.build'
}
```

#### 2. Light & Dark Themes
```typescript
{
  title: 'GitHub',
  category: 'Software',
  route: {
    light: '/library/github-light.svg',
    dark: '/library/github-dark.svg'
  },
  url: 'https://github.com'
}
```

#### 3. With Wordmark & Multiple Categories
```typescript
{
  title: 'Tailwind CSS',
  category: ['Framework', 'Design'],
  route: '/library/tailwindcss.svg',
  wordmark: {
    light: '/library/tailwindcss-wordmark-light.svg',
    dark: '/library/tailwindcss-wordmark-dark.svg'
  },
  url: 'https://tailwindcss.com'
}
```

---

## 3. Categories
Standard categories in [`src/types/categories.ts`](file:///e:/vibe/skills/svgl/src/types/categories.ts):
- `Software`, `Library`, `Framework`, `Language`, `Database`
- `Hosting`, `Cloud`, `Devtools`, `Design`, `AI`, `Cybersecurity`
- `Social`, `Community`, `Entertainment`, `Crypto`, `Hardware`

---

## 4. Using Logos in Web Projects (Astro / HTML / Tailwind)

### Option A: Direct Copy from `static/library/`
1. Locate the file in `svgl/static/library/<logo-name>.svg`.
2. Copy it to your project's `public/icons/` or `src/assets/` folder.
3. In Astro:
   ```astro
   ---
   // Direct import as image or inline SVG
   ---
   <img src="/icons/astro.svg" alt="Astro Logo" class="w-8 h-8" />
   ```

### Option B: SVGL Public CDN / Hosted URL
```html
<img src="https://svgl.app/library/astro.svg" alt="Astro" width="32" height="32" />
```

---

## 5. Contributing / Adding New Logos

1. **Optimize the SVG**:
   - Limit file size to **≤ 21KB**.
   - Preserve the `viewBox` attribute (do not remove it).
   - Use SVGOMG ([jakearchibald.github.io/svgomg](https://jakearchibald.github.io/svgomg/)) or `svgo`.
2. **Place in `static/library/`**:
   - Save file as `your_logo.svg` inside [`svgl/static/library`](file:///e:/vibe/skills/svgl/static/library).
3. **Register in `src/data/svgs.ts`**:
   - Append the entry matching the `iSVG` schema.
4. **Test locally**:
   ```powershell
   cd e:\vibe\skills\svgl
   pnpm dev
   ```

---

## 6. Local API Setup
```powershell
cd e:\vibe\skills\svgl\api-routes
pnpm build:data
pnpm dev
```
Endpoints include:
- `GET /svgs` - List all logos
- `GET /svgs?category=framework` - Filter by category
- `GET /svgs?search=react` - Search by name
