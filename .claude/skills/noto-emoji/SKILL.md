---
name: noto-emoji
description: Guide and asset reference for Google Noto Emoji. Use when searching for Unicode emojis, embedding vector SVG emojis, converting between emoji characters / Unicode code points and file paths, or styling Noto emojis in web and UI designs.
metadata:
  authors: "Google Fonts Team"
  version: "1.0.0"
---

# Google Noto Emoji Guide

Google Noto Emoji provides open-source, full-color and vector emoji graphics conforming to the Unicode Emoji standard.

- **Local Repository**: [`e:/vibe/skills/noto-emoji`](file:///e:/vibe/skills/noto-emoji)
- **Official GitHub**: [googlefonts/noto-emoji](https://github.com/googlefonts/noto-emoji)

---

## 1. Asset Structure

```
noto-emoji/
├── svg/                    # Scalable vector graphics (SVG) for all emojis
│   ├── emoji_u1f600.svg    # Grinning face (U+1F600)
│   ├── emoji_u1f680.svg    # Rocket (U+1F680)
│   └── emoji_u1f916.svg    # Robot (U+1F916)
└── png/                    # High-resolution raster PNG images
```

---

## 2. Unicode Naming Convention

All SVG files in `svg/` follow a standard Unicode hexadecimal naming pattern:
`emoji_u{hex_code}.svg`

### Single Codepoints
- 😀 (U+1F600) ➔ `svg/emoji_u1f600.svg`
- 🚀 (U+1F680) ➔ `svg/emoji_u1f680.svg`
- ❤️ (U+2764) ➔ `svg/emoji_u2764.svg`
- ✨ (U+2728) ➔ `svg/emoji_u2728.svg`
- 💻 (U+1F4BB) ➔ `svg/emoji_u1f4bb.svg`

### ZWJ (Zero Width Joiner) Sequences & Modifiers
Multi-codepoint sequences join hex values with underscores:
- 👨‍💻 (Man Technologist: U+1F468, U+200D, U+1F4BB) ➔ `svg/emoji_u1f468_200d_1f4bb.svg`
- 👍🏽 (Thumbs Up Medium Skin: U+1F44D, U+1F3FD) ➔ `svg/emoji_u1f44d_1f3fd.svg`

---

## 3. JavaScript Helper: Emoji to File Name

To convert any emoji character into its Noto SVG file name:

```typescript
export function emojiToNotoFilename(emoji: string): string {
  const codePoints = Array.from(emoji).map((char) =>
    char.codePointAt(0)!.toString(16).toLowerCase()
  );
  return `emoji_u${codePoints.join('_')}.svg`;
}

// Example usage:
emojiToNotoFilename("🚀"); // "emoji_u1f680.svg"
emojiToNotoFilename("👍🏽"); // "emoji_u1f44d_1f3fd.svg"
```

---

## 4. Usage in Web Applications (Astro / HTML)

### Astro Component
```astro
---
interface Props {
  code: string; // Hex code without 'u', e.g. "1f680"
  alt?: string;
  className?: string;
}

const { code, alt = "Emoji", className = "w-6 h-6 inline-block align-middle" } = Astro.props;
---

<img
  src={`/emojis/noto/emoji_u${code.toLowerCase()}.svg`}
  alt={alt}
  class={className}
  loading="lazy"
/>
```

---

## 5. Best Practices
- **Scalability**: Because Noto Emoji SVGs are resolution-independent, set explicit `width` and `height` (or Tailwind sizing classes like `w-5 h-5` / `w-6 h-6`) to prevent layout shifts.
- **Accessibility**: Always provide an `alt` attribute or `aria-label` describing the emoji's expression or object name for screen readers.
