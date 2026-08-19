# randomcaht.online — Image Generation Prompts (Sunset System v2)

Rebuilt against `UI/UX Design Specification v2.0`. Replaces the earlier Blue/Cyan/Purple SaaS-style prompt set.

---

## Palette (exact mapping — use consistently across every asset)

| Token | Hex | Role in prompts |
|---|---|---|
| Deep Plum | `#492351` | Darkest background, dark-mode base |
| Plum | `#7F376D` | Secondary dark, mid-tone shapes |
| Rose | `#D55882` | Primary accent, connection lines |
| Coral | `#FF808A` | CTA highlight, brightest glow |
| Peach | `#FFBF92` | Warm secondary glow, transition tone |
| Cream | `#F6E5D9` | Light background, negative space |

**Hero gradient (use verbatim for Tier A assets):** `180deg, #492351 0% → #7F376D 24% → #D55882 48% → #FF808A 68% → #FFBF92 84% → #F6E5D9 100%`

## Consistency anchor (append to every prompt)

*Atmospheric gradient illustration, soft ambient glow, minimal rounded geometric shapes — never literal human figures, bodies, or faces. Dusk-toned color grading with gentle painterly gradient blending (not flat solid fills). Warmth and intimacy communicated entirely through color temperature, light, and negative space.*

## Non-negotiable exclusions (every prompt, no exceptions)

Lips, bodies, explicit or suggestive imagery, nudity, dating hearts as a primary symbol, sexual symbols, realistic human faces, stock photography, neon/nightclub lighting, pornographic framing of any kind. This brand communicates warmth and mystery through **color and atmosphere only.**

---

# TIER A — Full Sunset Gradient (atmospheric, emotional moments)

## 1. Hero Background

```
Full-bleed atmospheric background illustration for randomcaht.online's landing page hero.

GRADIENT: Vertical (180deg), top to bottom: Deep Plum #492351 → Plum #7F376D → Rose #D55882 → Coral #FF808A → Peach #FFBF92 → Cream #F6E5D9. Render as a natural sunset atmosphere, not a synthetic UI gradient — soft banding, gentle color bleed between stops, like dusk light through haze.

DECORATION: Extremely minimal. At most 2-3 very soft, large, out-of-focus circular glow shapes (Coral/Peach, low opacity, heavily blurred) suggesting distant light sources — think bokeh, not objects. No hard edges, no icons, no defined shapes competing with the gradient itself.

COMPOSITION: The upper-middle third of the canvas (where Plum/Rose sit) must stay visually calm and low-detail — this is where the headline text will be placed and needs strong contrast against it. Keep all decoration in the outer edges and lower third.

CANVAS: 16:9, full-bleed, no transparency (this is a background layer).

AVOID: any figures, silhouettes, faces, bodies, hearts, literal sun/horizon line if it reads as a stock-photo cliché, hard geometric shapes, icons, text, logo.
```

## 2. Matching / Searching Screen

```
Full-screen atmospheric illustration for randomcaht.online's "Finding someone..." matching state.

BACKGROUND: Full sunset gradient (same as hero: Deep Plum → Plum → Rose → Coral → Peach → Cream, vertical), slightly more saturated/active in the Rose-Coral band to suggest energy and searching, rather than the calmer hero version.

FOCAL ELEMENT: One small, soft-edged glowing orb/node (Coral #FF808A core, Peach glow falloff) positioned center or center-upper, pulsing outward in 2-3 concentric soft rings (design as separate ring layers for animation). This is the ONLY defined shape in the composition — everything else is atmosphere.

MOTION-READY: Design the pulse rings as 3 separable layers of increasing size/decreasing opacity, so they can animate as an expanding pulse in the browser. This is NOT a generic loading spinner — it should read as "searching," warm and alive, not mechanical.

CANVAS: 9:16 or full mobile-screen aspect, room left in the lower-middle third for "Finding someone..." text and a Cancel button to sit on top.

AVOID: spinning-wheel/spinner iconography, mechanical loading bars, figures, faces, harsh edges, more than one focal node.
```

## 3. Match Found

```
Transition illustration for randomcaht.online's "Match Found" moment — the brief, brightest instant before the chat opens.

CONCEPT: The single pulsing node from the Matching screen resolves into a brief bright flare — Coral #FF808A core with a warm Peach #FFBF92 burst radiating outward, quickly softening to Cream at the very edges. This should feel like a single warm "spark" moment, not a busy scene.

STYLE: Radial gradient burst, soft-edged, painterly (not a hard-edged starburst/sparkle icon). Center-weighted composition.

LAYERING: Core glow, mid-glow ring, outer soft falloff — three separable layers so the transition can animate as a quick brighten-then-settle (under 1 second in implementation).

CANVAS: Square or full-screen, transparent-compatible edges (fades to nothing at the border, so it can overlay the matching-screen background without a hard cutoff).

AVOID: literal sparkle/star icons, confetti, hearts, fireworks clichés, figures, faces, text.
```

---

# TIER B — Restrained / Calm (in-app states, must stay readable)

These use **cream or plum neutrals as the base**, with **one accent color only** (Rose or Coral) — not the full six-stop gradient. This is deliberate: Section 2 of the spec requires the chat and functional UI to stay calm and legible, not compete with the hero's emotional intensity.

## 4. Safety Illustration

```
Calm, reassuring illustration for randomcaht.online's Safety section — must feel protective, not alarming.

BASE: Neutral Cream #F6E5D9 (light mode) background, no gradient sweep.

SHAPE: A single soft rounded shield-like form (organic rounded outline, not a literal hard-edged shield icon) in Plum #7F376D at low-medium opacity, enclosing a small warm Rose #D55882 glow at its center — the glow represents "a protected conversation," nothing literal inside it.

STYLE: Soft, rounded, minimal linework, one accent color only (Rose). No gradient blending here — flatter and calmer than the Tier A assets, consistent with the "safety without fear" principle.

CANVAS: Square, generous padding, works equally in light (Cream base) and dark (Deep Plum #492351 base, same Rose glow) mode — specify both variants if your tool supports it.

AVOID: literal padlocks as the dominant shape, warning triangles, sirens, surveillance cameras, police imagery, figures, faces, text, anything that reads as clinical or threatening.
```

## 5. Stranger Disconnected

```
Transition illustration for randomcaht.online's "Stranger disconnected — find someone new" state.

BASE: Neutral Cream #F6E5D9 (light) or Deep Plum #492351 (dark) — no full gradient.

CONCEPT: A single small warm glow (Rose #D55882) softly fading toward the left edge of the canvas (opacity dropping to near-zero), while a new small glow begins forming at the right edge (Coral #FF808A, low opacity, just appearing). No connecting line between them — the point is one ending, one beginning, not yet linked.

MOOD: Optimistic, gentle, not sad. Keep both glows warm-toned — no gray, no desaturation, no "dimming to nothing" that reads as loss.

CANVAS: 16:9, transparent-compatible, both glows in the outer thirds, calm empty center.

AVOID: figures, faces, grayscale treatment, broken-heart or "X" iconography, dating symbolism, text.
```

## 6. Empty Chat / Cold-Message-Limit State

```
Minimal empty-state illustration for randomcaht.online's mobile chat screen before a match, or when the two-message limit is active.

BASE: Neutral Cream #F6E5D9 or Deep Plum #492351, no gradient sweep.

SHAPE: One single small, soft rounded speech-bubble-adjacent shape (an abstract rounded rectangle with one soft notch, not a literal cartoon speech bubble) in Rose #D55882 at medium opacity, centered, with a very faint single-ring pulse around it suggesting "waiting."

STYLE: Extremely minimal, generous whitespace, calm — this sits behind functional UI text, so it must not compete with it.

CANVAS: Portrait/mobile (9:16), shape in the upper-middle third, transparent background.

AVOID: text, figures, faces, second shape/node, dating imagery, clutter, gradient blending.
```

## 7. How It Works — Three Icons (Choose / Match / Talk)

Match the doc's literal copy: **01 Choose preferences → 02 Find a stranger → 03 Start talking.** Keep identical canvas, scale, and base color across all three so they read as one numbered sequence — generate back-to-back.

### 7a. Choose (01)

```
Small numbered-step icon illustration for randomcaht.online, step "01 — Choose preferences." Same base style/canvas as steps 02 and 03 in this set.

SHAPE: One small central rounded form (Plum #7F376D) with 3 tiny option-marks arranged around it (Rose #D55882, one slightly emphasized/highlighted to suggest selection). Simple, iconographic, not a busy illustration.

STYLE: Minimal linework, one accent color, no gradient, generous padding.

CANVAS: Square, small/icon-scale (this sits next to short body text, not as a hero element), transparent background.

AVOID: text, figures, faces, dating imagery, more than 4 total shapes.
```

### 7b. Match (02)

```
Small numbered-step icon illustration for randomcaht.online, step "02 — Find a stranger." Identical canvas, scale, and style to steps 01 and 03 in this set.

SHAPE: Two small rounded forms (Plum #7F376D and Rose #D55882) moving toward each other, a single thin warm connecting line forming between them (Coral #FF808A).

STYLE: Same minimal linework as step 01, one new accent (the connecting line) marking progression from "choosing" to "connecting."

CANVAS: Square, icon-scale, matching step 01's exact padding and shape sizing, transparent background.

AVOID: text, figures, faces, dating imagery, hearts.
```

### 7c. Talk (03)

```
Small numbered-step icon illustration for randomcaht.online, step "03 — Start talking." Identical canvas, scale, and style to steps 01 and 02 in this set.

SHAPE: The same two connected forms from step 02, now with 2 tiny message-mark shapes flowing along the connecting line (alternating position, suggesting back-and-forth).

STYLE: Same minimal linework and canvas as steps 01-02 — this is the calm resolution of the sequence.

CANVAS: Square, icon-scale, matching steps 01-02 exactly, transparent background.

AVOID: text, figures, faces, dating imagery.
```

## 8. 404 Page

```
404 error-page illustration for randomcaht.online.

BASE: Neutral Cream #F6E5D9 or Deep Plum #492351, no full gradient.

CONCEPT: A small cluster of 2-3 connected rounded forms (Plum/Rose) positioned to one side, with one additional small form (Coral #FF808A, low opacity) drifting toward the opposite edge, its connecting line to the cluster shown as a faint broken/dotted line rather than solid.

MOOD: Light, slightly playful, not heavy or alarming — "took a wrong turn," not "system failure."

CANVAS: Square or 4:5, generous padding, transparent background.

AVOID: text/numerals inside the image, figures, faces, sad expressions, dark/heavy color treatment, dating imagery.
```

---

# New Prompt Types (introduced by this doc, not in the original set)

## 9. Core Icon Set (functional UI icons)

This is a **line-icon system prompt**, not an illustration prompt — different tool/output than everything above (use an icon-focused generator, or brief this to a designer/Iconify-style SVG set rather than a raster image generator).

```
Consistent line-icon set for randomcaht.online, a chat product.

STYLE: Thin-to-medium consistent stroke weight (1.5-2px at 24px grid), rounded line caps and joins, minimal internal detail, consistent optical size across the whole set. Single color per icon (works in Plum #7F376D on light backgrounds, Cream #F6E5D9 on dark backgrounds) — no fills, no gradients, these must work as monochrome UI icons.

ICON LIST (generate as one consistent set): Start Chat, Next Stranger, Leave, Send, Report, Block, Safety, Language, Theme (Sun/Moon/System — 3 separate icons), Male, Female, Anyone, Connection, Search, Close, Back, More, Warning, Check, Offline.

SPECIFIC GUIDANCE PER ICON:
- Matching/Connection: two small connected rounded nodes, not literal people
- Next Stranger: a forward/skip arrow motif — must NOT resemble a browser refresh/reload icon
- Report: a flag or outlined warning shape
- Block: a circle with a diagonal slash
- Safety: a simple rounded shield outline
- Anyone: a small cluster of 2-3 abstract rounded person-marks (simplified to the point of being iconographic, not figurative)
- Theme: standard sun / moon / half-circle system glyphs

GRID: 24x24px artboard, 20x20px live icon area (2px padding on all sides), consistent stroke weight across every icon in the set — this consistency matters more than any individual icon's cleverness.

AVOID: filled/solid icon style, gradients, more than one stroke weight in the set, literal camera/microphone icons, hearts, generic copy of another chat product's icon set.
```

## 10. Matching Screen — Full Product Reference (screen-level, not just background)

Section 14 describes a full screen, not just atmosphere — useful as a combined reference if you want one image showing background + focal element + implied text zone together (for stakeholder review, not for direct dev handoff — build the actual screen in code against the spec's exact copy and layout).

```
Full mobile-screen composition reference for randomcaht.online's Matching screen (for visual reference only, not literal UI — text will be implemented in code).

LAYOUT: Sunset gradient background (Tier A hero gradient), the single pulsing Coral/Peach node from the Matching illustration positioned upper-center, with a large empty calm zone below it (Rose-to-Peach band) reserved for "Finding someone... / Searching for a stranger to chat with. / Looking for: Anyone / [Cancel]" — do not render this text, just leave the zone clean and low-contrast-neutral so text would sit legibly on top.

CANVAS: 9:16 mobile screen aspect ratio.

PURPOSE: mood/atmosphere reference only — treat as a design reference board image, not a literal UI mockup to ship.

AVOID: rendering any literal text, buttons, or UI chrome — this is atmosphere only.
```

## 11. Guest Setup Screen — Note (not an image-gen prompt)

Section 12 describes a literal form: Nickname field, Male/Female toggle, Male/Female/Anyone toggle, Start Chat button. **This is not a good candidate for AI image generation** — it's a functional form with specific interactive states (focus, validation, selected/unselected segmented controls) that need to be built directly in code against the doc's exact tokens:

- Selected segment state: Rose/Coral background, white/high-contrast text, per Section 13
- Border radius: 12–16px per Section 11
- Spacing scale: 4/8/12/16/20/24/32/40/48/64 per Section 37

If you want a *mood reference* for how the setup card should feel sitting on the sunset background, reuse the **Hero Background** prompt (#1 above) as the page backdrop and place a plain Cream `#F6E5D9` card with rounded corners in the center third — but build the actual form as real HTML/CSS components, not a generated image.

## 12. Light/Dark Theme Reference Sheet

```
Side-by-side theme comparison reference for randomcaht.online's design system — not a product illustration, a documentation asset.

LEFT HALF (Light theme): Background Cream #F6E5D9, surface White #FFFFFF, text in dark Plum tone, one small UI element (e.g. a button) shown in Coral #FF808A with white text.

RIGHT HALF (Dark theme): Background Deep Plum #492351, surface Dark Elevated #3B2140, text in Cream #FFF7F5-equivalent, the same UI element shown with the same Coral #FF808A accent (accent color stays constant across themes — this is important, only backgrounds/surfaces shift).

STYLE: Flat, clean, documentation-style — not atmospheric or gradient-heavy. This asset exists to verify the accent color reads correctly against both surfaces, not to be emotionally evocative.

CANVAS: 2:1 landscape, clean divider line at center.

PURPOSE: internal design-system reference, not a marketing or product asset.
```

---

## Summary: what to actually generate first

1. **Logo + icon set (#9)** first — everything else should key off the exact rounded-shape language you land on there.
2. **Hero background (#1)** second — this defines your Tier A gradient rendering quality; if the gradient doesn't look natural (not banded/synthetic), regenerate before touching anything else.
3. Then batch the rest of Tier A, then Tier B, in the same session/tool state so style carries over.
4. Skip generating #10 and #11 as literal shippable assets — they're reference-only, per the notes above. Build those screens in code.
