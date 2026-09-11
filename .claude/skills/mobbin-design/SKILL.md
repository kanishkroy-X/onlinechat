---
name: mobbin-design
description: Mobbin Design Language & System guide. Gallery-white monochrome UI, Saans variable typography (weights 652/456/300), stadium-pill controls, 24px card geometry, iOS-style 30% squircle app icons, subtle neutral tint ladder instead of shadows, and reserved electric blue #0066ff commercial accents. Use when building content curation directories, design asset showcases, pattern libraries, or inspiration galleries.
metadata:
  authors: "Mobbin Analysis & Design Community"
  version: "1.0.0"
---

# Mobbin Design Language & System

A gallery-white, monochrome interface system built to disappear behind the curated visual content it showcases. Near-black ink (`#141414`) on pure white canvas (`#ffffff`), a stepped ladder of barely-there neutral tints instead of drop shadows, stadium-pill controls, 24px card geometry, and iOS-style 30% squircle icon tiles. A single electric blue accent (`#0066ff`) is reserved exclusively for commercial and pro signals.

- **Primary Source Analysis**: [`e:/vibe/skills/mobbin/DESIGN.md`](file:///e:/vibe/skills/mobbin/DESIGN.md)

---

## 1. Design Philosophy

- **Receding Chrome**: All UI chrome is neutral and borderless or hairline-bordered to let user content and screenshot assets pop with maximum vibrance.
- **Ladder of Neutral Tints**: Instead of heavy elevation shadows, layers are separated through delicate neutral shades (`#ffffff` canvas → `#f3f3f3` soft canvas → `#f0f0f0` field/hairline → `#e0e0e0` border).
- **Stadium-Pill Controls**: All interactive buttons, chips, filter badges, and search bars use a full 9999px border-radius.
- **Strict Geometry**: Content cards use a unified `24px` radius (`rounded.md`), while app icons use a 30% squircle radius.
- **Saans Variable Typography**: Uses non-standard variable font weights (652 for strong headings, 456 for crisp body text, 300 for airy descriptions).

---

## 2. Color Tokens

### Primary Palette & Accents
| Token | Hex | Usage |
|---|---|---|
| `primary` | `#141414` | Deepest charcoal ink, primary CTA fill |
| `on-primary` | `#ffffff` | Text on primary button |
| `accent` | `#0066ff` | Electric blue reserved for Pro badges, checkout CTAs, active indicators |

### Text Hierarchy
| Token | Hex | Usage |
|---|---|---|
| `ink` | `#141414` | High-contrast display titles, headers, active tabs |
| `ink-soft` | `#262626` | Secondary body text, sub-headers |
| `text-muted` | `#707070` | Supporting descriptions, timestamps, counts |
| `text-faint` | `#adadad` | Inactive placeholders, disabled metadata |

### Surfaces & Divisors
| Token | Hex | Usage |
|---|---|---|
| `canvas` | `#ffffff` | Base background and card fill |
| `canvas-soft` | `#f3f3f3` | Subtle chip backgrounds, secondary button fill |
| `field` | `#f0f0f0` | Form input backgrounds, filter bar background |
| `hairline-soft`| `#f0f0f0` | Soft dividers between sections |
| `hairline` | `#e0e0e0` | Card borders and input focus outlines |

---

## 3. Typography Scale (Saans Hierarchy)

Saans provides clean neo-grotesque geometry with exceptional legibility across dense screenshot grids.

| Role | Size | Weight | Line Height | Letter Spacing |
|---|---|---|---|---|
| `display` | 80px | 652 | 1.00 | 0px |
| `heading-1` | 56px | 652 | 1.00 | 0px |
| `heading-2` | 44px | 652 | 1.13 | 0px |
| `heading-3` | 32px | 652 | 1.13 | 0px |
| `heading-4` | 24px | 652 | 1.25 | 0px |
| `title` | 20px | 600 | 1.30 | 0px |
| `body-lg` | 20px | 300 | 1.38 | 0px |
| `body` | 16px | 456 | 1.38 | 0px |
| `body-sm` | 14px | 456 | 1.43 | 0px |
| `link` | 16px | 600 | 1.38 | 0px |
| `label` | 12px | 600 | 1.33 | 0px |
| `caption` | 12px | 456 | 1.33 | 0px |

---

## 4. Spacing & Shape System

### Spacing Scale
- `xxs`: 4px | `xs`: 8px | `sm`: 12px | `md`: 16px | `lg`: 24px | `xl`: 32px | `xxl`: 48px | `section`: 80px | `section-lg`: 120px

### Rounded Corners
- `none`: 0px
- `sm`: 16px (inputs, small card insets)
- `md`: 24px (content cards, screenshot containers)
- `full`: 9999px (stadium-pill buttons, filter tags, search fields)

---

## 5. Signature Components

### Primary Button (Stadium Pill)
- Background: `#141414`
- Text: `#ffffff`, 16px weight 600
- Radius: `9999px`
- Height: `44px`, Padding: `0 20px`

### Soft Pill Filter / Secondary Button
- Background: `#f3f3f3`
- Text: `#141414`, 14px weight 456
- Radius: `9999px`
- Hover: `#e8e8e8`

### Search Field (Stadium Pill)
- Background: `#f0f0f0`
- Border: `1px solid transparent` (focus: `1px solid #141414`)
- Radius: `9999px`
- Padding: `12px 20px`

### Pro Badge
- Background: `#0066ff`
- Text: `#ffffff`, 12px weight 600 uppercase
- Radius: `9999px`
- Padding: `2px 8px`

### Gallery Screenshot Card
- Background: `#ffffff`
- Border: `1px solid #e0e0e0`
- Radius: `24px`
- Overflow: `hidden`
- Image: Centered preview with crisp hover zoom (`scale(1.02)`) and micro-fade overlay.
