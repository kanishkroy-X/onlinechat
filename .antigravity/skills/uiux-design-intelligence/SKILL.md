---
name: uiux-design-intelligence
description: Complete end-to-end framework to translate product ideas and references (YouTube channels/videos, websites, apps, screenshots, brands) into target Experience DNA and UI/UX design directions. Use when conceptualizing a new product, analyzing design references, creating design briefs, or establishing UX principles, color, typography, motion, and component systems.
metadata:
  authors: "Antigravity & Design Community"
  version: "1.0.0"
---

# UI/UX Design Intelligence Kit
### (Idea → References → Experience DNA → UI/UX Direction)

This skill provides a reusable 17-phase pipeline to transform any product idea or set of references into a complete first-pass UI/UX design system, UX psychology mapping, and interactive prototype/specification.

- **Primary Source Document**: [`e:/vibe/skills/uiux-design-intelligence-kit.md`](file:///e:/vibe/skills/uiux-design-intelligence-kit.md)

---

## Core Philosophy

References are **inspiration sources, not templates to copy**. Extract underlying principles, interaction mechanisms, and emotional beats—never copy surface aesthetics, logos, or brand marks.

Throughout analysis, strictly differentiate:
> **Observed** (Facts on screen) → **Inferred** (Underlying design intention) → **Recommended** (Direct action for our product)
> *(For video/channel analysis: Observed → Inferred → Hypothesized)*

---

## The 17-Phase Intelligence Pipeline

### Phase 0 — Intake
1. **Product Idea**: Problem statement, core utility, domain.
2. **References**: Videos, apps, websites, screenshots, brand inspirations.
*(If ideas are vague, declare explicit assumptions rather than stalling).*

### Phase 1 — Understand the Product
- What it is, primary problem solved.
- Primary user (+ secondary personas).
- User's main goal and core frustrations.
- Core use cases & critical user journey.
- **Anti-goals**: What the product must **NOT** try to do.

### Phase 2 — Define the Target Experience
- **Emotional Target**: 3–5 tailored emotional states (e.g., confident, relieved, energized).
- **Product Personality**: 5–10 precise adjectives.
- First 5-second sensation vs post-completion sensation.
- Retention driver: What makes them want to return?

### Phase 3 — Reference Intelligence
Analyze every provided reference:
- **3A. YouTube Channels / Videos**:
  - Creator positioning, target audience psychographics, retention drivers.
  - Video anatomy: Opening hook (first 5–30s), visual pacing, typography, motion motifs, contrast.
  - Storytelling arc: Problem → tension → solution, curiosity loops, pattern interruptions.
  - Audio/timing cues and translation to UI interactions.
  - UX Psychology mechanisms: Curiosity, variable reward, social proof, status, progress loops.
- **3B. Sites / Apps / Brands**:
  - Layout density, typography hierarchy, shape language, elevation, interaction models.
- **3C. Synthesis Formula**:
  `Observation → Why it works → UX principle → Possible application to our product`
- **3D. Sorting Matrix**:
  - **Borrow**: Principles directly adaptable.
  - **Adapt**: Needs modification to fit domain.
  - **Avoid**: Inappropriate, distracting, or video-specific gimmicks.
  - **Risk Flag**: Would become annoying/heavy in UI.

### Phase 4 — Build Experience DNA Matrix

| Field | Definition |
|---|---|
| **Audience** | Target user definition |
| **Core Problem** | What is being solved |
| **Core User Goal** | Primary job to be done |
| **Emotional Goal** | How users should feel |
| **Brand Personality** | Character of the product |
| **Visual Personality** | Visual communication tone |
| **UX Personality** | How interactions feel |
| **Content Personality**| Voice and microcopy tone |
| **Motion Personality** | Speed, physics, transition feel |
| **Signature** | Iconic recognizable hook |

### Phase 5 — Visual Direction
- **Color System**: Primary, Secondary, Accent, Canvas, Surfaces, Ink, Borders, State colors. Justify every hex choice against Experience DNA.
- **Typography System**: Display, Headings, Body, Eyebrows, Mono code, Buttons. Specify weights, letter-spacing, and line-heights.
- **Shape Language**: Border radii, elevation, card geometry, container feel. Position on sharp↔soft, geometric↔organic, minimal↔dense.
- **Layout & Grid**: Max width, responsive breakpoints, spacing scale, information density.

### Phase 6 — UX Principles
Formulate 10–20 actionable principles derived from the analysis:
`Principle → Why → Concrete Example`

### Phase 7 — Interaction & Motion System
- Micro-interactions (hover, active, focus, tap).
- State transitions (page shifts, modal reveals, filter morphs).
- Feedback loops (optimistic UI, loading skeletons, error recovery).
- Motion physics (duration, curves, springs).

### Phase 8 — Core Screens
Define minimum essential screens:
`Screen Name → Purpose → User Goal → Hierarchy → Primary CTA → Components → Emotional Target`

### Phase 9 — User Flow
`Entry → Discovery → Action → Feedback → Completion → Return`
Highlight friction points, decision moments, and delight opportunities.

### Phase 10 — Component Direction
Visual and behavioral specs for navigation, hero headers, content cards, inputs, buttons, pills, chips, modals, and toasts.

### Phase 11 — Pattern Translation Table
| Reference Pattern | Psychological Effect | UX Principle | UI Implementation |
|---|---|---|---|

### Phase 12 — Accessibility & Usability Stress Test
Audit contrast ratios (WCAG AAA/AA), touch targets (>=44px), cognitive load, keyboard navigation, and motion sensitivity.

### Phase 13 — Signature Elements
3–5 distinctive, memorable design motifs that make the product uniquely recognizable.

### Phase 14 — Rough UI Walkthrough
A plain-language descriptive walkthrough of what the user sees and feels from the first screen opening.

### Phase 15 — Moodboard in Words
- *Interface feels like*: ...
- *Interface never feels like*: ...
- *Visual analogies*: ...
- *First 5-second sensation*: ...

### Phase 16 — Final Design Brief
Locked design brief summarizing product, audience, visual tone, tokens, components, and constraints.

### Phase 17 — Prototype & Scaffolding
Produce one of:
1. Interactive code prototype (Astro / HTML / Tailwind).
2. Written token & component spec for design tools.
3. Codebase scaffold with components and design tokens.

---

## 14 Golden Rules
1. Start with UX before UI.
2. Principles over pixels.
3. Never copy surface decorations or brand assets.
4. Resolve conflicting references explicitly.
5. Prioritize usability over novelty.
6. Eliminate unnecessary features.
7. Avoid generic SaaS cookie-cutter tropes unless strictly appropriate.
8. Justify every token and color choice.
9. Separate Observed / Inferred / Recommended.
10. Challenge weak ideas honestly.
11. Keep lines short, readable, and structured.
12. Design for the user's emotional arc.
13. Maintain high contrast and accessible touch targets.
14. An interface's design language must reinforce its core utility.
