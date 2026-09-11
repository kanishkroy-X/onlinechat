---
name: vercel-design
description: Vercel / Geist Design Language & System guide. Stark monochrome developer-platform aesthetic, Geist Sans & Geist Mono typography, multi-stop mesh gradients for hero highlights, 6px square app buttons vs pill marketing CTAs, hairline borders, and elevated canvas layers. Use when building developer tools, cloud platforms, CLI dashboards, documentation portals, or high-performance technical websites.
metadata:
  authors: "Vercel Analysis & Design Community"
  version: "1.0.0"
---

# Vercel (Geist) Design Language & System

A stark black-on-near-white developer platform aesthetic where a single ink tone carries every heading, CTA, and border, and color is confined to multi-stop mesh gradients reserved for hero moments. Geist Sans drives tightly-tracked display type, Geist Mono labels technical eyebrows and code snippets, and a dual-button paradigm cleanly separates 6px sharp app controls from pill-shaped marketing CTAs.

- **Primary Source Analysis**: [`e:/vibe/skills/DESIGN.md`](file:///e:/vibe/skills/DESIGN.md)

---

## 1. Design Philosophy

- **Extreme Contrast & Monochrome Discipline**: The entire interface is constructed from pure ink (`#171717`), clean body text (`#4d4d4d`), and near-white canvas layers (`#fafafa` and `#ffffff`).
- **Hero-Confined Gradients**: Saturated color is not sprinkled across the UI. Instead, vivid multi-stop gradients (Develop Cyan, Preview Violet, Ship Amber) are focused purely on the hero headline or key milestone callout.
- **The Dual-Radius System**:
  - **Marketing CTAs**: Smooth pill shape (`rounded.pill` = 100px or 9999px) for friendly landing page conversion.
  - **App & Dashboard Controls**: Precision `6px` radius (`rounded.sm`) for dense, technical UI.
- **Hairline Geometry**: Crisp 1px `#ebebeb` borders separate components without drop shadows.

---

## 2. Color Tokens

### Base & Monochromes
| Token | Hex | Usage |
|---|---|---|
| `primary` / `ink` | `#171717` | High-contrast display text, headings, primary CTA background |
| `on-primary` | `#ffffff` | Text on dark buttons and badges |
| `body` | `#4d4d4d` | Standard body copy and secondary navigation |
| `mute` | `#8f8f8f` | Tertiary metadata, inactive tab labels |
| `faint` | `#a1a1a1` | Placeholder text, disabled actions |
| `hairline` | `#ebebeb` | Standard component border |
| `hairline-soft` | `#f2f2f2` | Inner table dividing lines |
| `canvas` | `#fafafa` | Primary page background |
| `canvas-elevated` | `#ffffff` | Floating card background, dropdown popovers |

### Signature Gradients (Develop → Preview → Ship)
| Stage | Start | End | Usage |
|---|---|---|---|
| **Develop** | `#007cf0` | `#00dfd8` | Cyan/blue mesh gradient for coding/development |
| **Preview** | `#7928ca` | `#ff0080` | Violet/magenta mesh gradient for staging/previews |
| **Ship** | `#ff4d4d` | `#f9cb28` | Coral/amber gradient for deployment and shipping |

### Functional Accents
- `link`: `#0070f3` | `link-deep`: `#0761d1` | `link-soft`: `#d3e5ff`
- `error`: `#ee0000` | `warning`: `#f5a623`

---

## 3. Typography Scale (Geist Hierarchy)

Pair **Geist Sans** (tight tracking on large sizes) with **Geist Mono** for metrics, commit hashes, URLs, and eyebrows.

| Role | Font Family | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|---|
| `display-xl` | Geist Sans | 48px | 600 | 48px | -2.4px |
| `heading-lg` | Geist Sans | 32px | 600 | 40px | -1.28px |
| `heading-md` | Geist Sans | 20px | 600 | 28px | -0.4px |
| `mono-eyebrow`| Geist Mono | 12px | 500 | 16px | 0px |
| `body-lg` | Geist Sans | 16px | 400 | 24px | 0px |
| `body-md` | Geist Sans | 14px | 400 | 20px | 0px |
| `body-sm` | Geist Sans | 12px | 400 | 16px | 0px |
| `button-lg` | Geist Sans | 16px | 500 | 20px | 0px |
| `button-md` | Geist Sans | 14px | 500 | 20px | 0px |
| `code` | Geist Mono | 14px | 400 | 20px | 0px |

---

## 4. Spacing & Rounded Geometry

### Spacing
- `xxs`: 4px | `xs`: 8px | `sm`: 12px | `md`: 16px | `lg`: 24px | `xl`: 32px | `2xl`: 40px | `3xl`: 64px | `4xl`: 96px | `section`: 128px

### Border Radii
- `sm`: 6px (app buttons, table cells, code blocks, form inputs)
- `md`: 12px (dashboard cards, deployment status widgets)
- `lg`: 16px (modal dialogs, large feature containers)
- `pill`: 100px (landing page CTAs, category tags)

---

## 5. Signature Components

### Marketing Primary Button (Pill)
- Background: `#171717` (hover: `#000000`)
- Text: `#ffffff`, 16px Geist Sans weight 500
- Radius: `100px` (pill)
- Padding: `0 18px`, Height: `44px`

### App / Dashboard Utility Button (6px Square)
- Background: `#ffffff`
- Border: `1px solid #ebebeb`
- Text: `#171717`, 14px Geist Sans weight 500
- Radius: `6px`
- Padding: `0 10px`, Height: `32px`
- Hover: Border `#171717` or background `#fafafa`

### Eyebrow Badge (Geist Mono)
- Text: 12px Geist Mono, uppercase or lowercase terminal syntax (e.g. `DEPLOYMENT_READY`)
- Color: `#0070f3` or `#171717`
- Background: `#ffffff` with `1px solid #ebebeb`
- Radius: `6px` or `9999px`

### Deployment Status Card
- Background: `#ffffff`
- Border: `1px solid #ebebeb`
- Radius: `12px`
- Padding: `24px`
- Status Indicator: 8px pulsing green dot (`#00e599`)
