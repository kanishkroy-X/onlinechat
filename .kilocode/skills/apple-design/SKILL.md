---
name: apple-design
description: Apple Design Language & System guide. Museum-gallery product presentation, SF Pro typography with negative letter-spacing, #0066cc Action Blue, alternating light/dark viewport tiles, parchment and pearl neutral surfaces, and minimalist UI chrome. Use when designing premium consumer electronics, flagship marketing pages, hardware showcases, or clean photography-first experiences.
metadata:
  authors: "Apple Analysis & Design Community"
  version: "1.0.0"
---

# Apple Design Language & System

A photography-first interface system that turns marketing and product discovery into a museum gallery. Full-width product tiles alternate between pure white, parchment, and deep charcoal canvases, framed by SF Pro headlines with negative letter-spacing and a single Action Blue (`#0066cc`) interactive accent. UI chrome recedes completely to let high-resolution hardware and photography speak.

- **Primary Source Analysis**: [`e:/vibe/skills/apple/DESIGN.md`](file:///e:/vibe/skills/apple/DESIGN.md)

---

## 1. Design Philosophy

- **Museum Wall Aesthetic**: The interface is the white or black wall of a gallery; the product photography is the artwork. Decorative chrome, gradients, and extraneous borders are eliminated.
- **Alternating Viewport Tiles**: Each product or key message owns a distinct full-width section alternating between light (`#ffffff` / `#f5f5f7`) and dark (`#272729` / `#000000`).
- **Single Accent Color**: All interactive intent is signaled by a single Action Blue (`#0066cc` on light, `#2997ff` on dark).
- **Surface Elevation Shadow**: Drop shadows are never applied to cards or buttons—only to physical products resting on a flat surface (`rgba(0, 0, 0, 0.22) 3px 5px 30px`).

---

## 2. Color Tokens

### Interactive & Brand Accents
| Token | Hex | Usage |
|---|---|---|
| `primary` | `#0066cc` | Main interactive color, primary pill buttons, links |
| `primary-focus` | `#0071e3` | Hover and active focus state on light backgrounds |
| `primary-on-dark` | `#2997ff` | High-contrast action blue for dark tiles and midnight mode |

### Ink & Text Hierarchy
| Token | Hex | Usage |
|---|---|---|
| `ink` / `body` | `#1d1d1f` | Primary dark text on light backgrounds |
| `body-on-dark` | `#ffffff` | Primary text on dark tiles |
| `ink-muted-80` | `#333333` | Secondary text, footer links |
| `ink-muted-48` | `#7a7a7a` | Captions, legal disclaimers, inactive metadata |
| `body-muted` | `#cccccc` | Secondary text on dark surfaces |

### Surfaces & Backgrounds
| Token | Hex | Usage |
|---|---|---|
| `canvas` | `#ffffff` | Pure white primary canvas |
| `canvas-parchment` | `#f5f5f7` | Soft off-white neutral background tile, sticky sub-nav, footer |
| `surface-pearl` | `#fafafc` | Ultra-subtle elevated utility card background |
| `surface-tile-1` | `#272729` | Premium dark section tile (Pro line) |
| `surface-tile-2` | `#2a2a2c` | Secondary dark section tile |
| `surface-tile-3` | `#252527` | Deep slate tile |
| `surface-black` | `#000000` | Jet black global navigation bar and OLED showcase |
| `hairline` | `#e0e0e0` | Subtle divider rule |
| `divider-soft` | `#f0f0f0` | Inset list separator |

---

## 3. Typography Scale (SF Pro Hierarchy)

Apple uses **SF Pro Display** for headers (tight negative tracking) and **SF Pro Text** for body and UI elements.

| Role | Font Family | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| `hero-display` | SF Pro Display | 56px | 600 | 1.07 | -0.28px |
| `display-lg` | SF Pro Display | 40px | 600 | 1.10 | 0px |
| `display-md` | SF Pro Text | 34px | 600 | 1.47 | -0.374px |
| `lead` | SF Pro Display | 28px | 400 | 1.14 | +0.196px |
| `tagline` | SF Pro Display | 21px | 600 | 1.19 | +0.231px |
| `body-strong` | SF Pro Text | 17px | 600 | 1.24 | -0.374px |
| `body` | SF Pro Text | 17px | 400 | 1.47 | -0.374px |
| `caption` | SF Pro Text | 14px | 400 | 1.43 | -0.224px |
| `caption-strong` | SF Pro Text | 14px | 600 | 1.29 | -0.224px |
| `button-large` | SF Pro Text | 18px | 400 | 1.00 | 0px |
| `fine-print` | SF Pro Text | 12px | 400 | 1.00 | -0.12px |
| `nav-link` | SF Pro Text | 12px | 400 | 1.00 | -0.12px |

---

## 4. Spacing & Geometry

### Spacing Scale
- `xxs`: 4px | `xs`: 8px | `sm`: 12px | `md`: 17px | `lg`: 24px | `xl`: 32px | `xxl`: 48px | `section`: 80px

### Border Radii
- `sm`: 8px (utility controls)
- `md`: 11px (pearl capsules)
- `lg`: 18px (utility cards)
- `pill` / `full`: 9999px (all primary buttons, chips, search inputs)

---

## 5. Signature Components

### Primary Buy Button (Pill)
- Background: `#0066cc` (hover: `#0071e3`)
- Text: `#ffffff`
- Radius: `9999px` (pill)
- Padding: `11px 22px` (hero: `14px 28px`)
- Font: SF Pro Text, 17px / 18px

### Secondary Learn More Link
- Inline text link in `#0066cc` (or `#2997ff` on dark)
- Suffix icon: small right chevron `>` with 4px gap
- Hover: underline or opacity transition

### Global Nav Bar
- Background: `#000000` (translucent blur on scroll: `rgba(0, 0, 0, 0.8)` with backdrop-filter `blur(20px)`)
- Height: `44px`
- Text: `#ffffff`, 12px SF Pro Text

### Frosted Sub-Navigation
- Background: `#f5f5f7` (translucent blur: `rgba(245, 245, 247, 0.8)`)
- Height: `52px`
- Sticky below global nav with product title and right-aligned buy action

### Product Tile (Viewport Module)
- Full width (`100vw`), minimum height `600px–750px`
- Vertical stack: Eyebrow category → Hero Headline → Subhead tagline → Action pill group (Buy + Learn More) → High-res centered product graphic
- Padding: `80px 24px`
