---
name: fluentui-emoji
description: Guide and asset catalog for Microsoft FluentUI Emoji. Use when looking up 3D, Color, Flat, or High Contrast emojis, embedding modern Microsoft Fluent emoji graphics in web interfaces, or integrating expressive emoji assets into Astro/React/Tailwind applications.
metadata:
  authors: "Microsoft & Design Community"
  version: "1.0.0"
---

# Microsoft FluentUI Emoji Guide

Microsoft FluentUI Emoji provides a collection of expressive, modern emojis designed with the Fluent design system, across 4 distinct styles: **3D**, **Color**, **Flat**, and **High Contrast**.

- **Local Repository**: [`e:/vibe/skills/fluentui-emoji`](file:///e:/vibe/skills/fluentui-emoji)
- **Official GitHub**: [microsoft/fluentui-emoji](https://github.com/microsoft/fluentui-emoji)

---

## 1. Directory Structure

```
fluentui-emoji/
└── assets/
    └── <Emoji Name>/
        ├── 3D/             # High-fidelity 3D rendered PNG images
        │   └── 3d.png
        ├── Color/          # Vibrant, layered modern SVG vectors
        │   └── color.svg
        ├── Flat/           # Clean, minimalist flat 2D vector SVGs
        │   └── flat.svg
        ├── High Contrast/  # Monochrome high-contrast vector SVGs
        │   └── high_contrast.svg
        └── metadata.json   # Unicode, glyph, keywords, and cldr info
```

---

## 2. Choosing the Right Style

| Style | Format | Best For |
| :--- | :--- | :--- |
| **Color** | `.svg` | Default choice for modern web apps, badges, and marketing headers. Vector quality with gradients. |
| **3D** | `.png` | Rich, photorealistic hero banners, reaction buttons, and playful landing pages. |
| **Flat** | `.svg` | Minimalist interfaces, dark/light dense UI dashboards, and clean typography integration. |
| **High Contrast** | `.svg` | High-contrast accessibility modes, monocolor icons, and inverted dark themes. |

---

## 3. Metadata & Search

Each emoji directory has a `metadata.json` containing:
- `cldr`: Canonical name (e.g. `grinning face with smiling eyes`)
- `unicode`: Primary Unicode hex (e.g. `1f604`)
- `glyph`: Actual Unicode character (e.g. `😄`)
- `keywords`: Array of search tags (e.g. `["eye", "face", "grin", "smile"]`)

---

## 4. Usage in Web Applications (Astro / Tailwind)

### Option A: Color SVG (Modern Web Vector)
```astro
---
// Component: FluentEmoji.astro
interface Props {
  name: string; // e.g. "Rocket", "Fire", "Sparkles"
  style?: "Color" | "Flat" | "High Contrast";
  className?: string;
}

const { name, style = "Color", className = "w-7 h-7 inline-block" } = Astro.props;
---

<img
  src={`/emojis/fluent/${name}/${style.toLowerCase()}.${style === "High Contrast" ? "svg" : "svg"}`}
  alt={name}
  class={className}
  loading="lazy"
/>
```

### Option B: 3D PNG (Hero / Rich Buttons)
```html
<button class="flex items-center gap-2 px-4 py-2 bg-neutral-900 text-white rounded-xl hover:scale-105 transition-transform shadow-lg">
  <img src="/emojis/fluent/Rocket/3d.png" alt="Rocket" class="w-6 h-6 object-contain" />
  <span class="font-semibold">Launch Project</span>
</button>
```

---

## 5. Skin Tone Variations
Emojis with human figures contain skin tone subdirectories inside `assets/<Emoji Name>/`:
- `Default/`
- `Light/`
- `Medium-Light/`
- `Medium/`
- `Medium-Dark/`
- `Dark/`

Each skin tone folder has its own `3D`, `Color`, `Flat`, and `High Contrast` subdirectories.
