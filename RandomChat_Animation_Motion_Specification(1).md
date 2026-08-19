# RandomChat — Animation & Motion Design Specification

## 1. Purpose

RandomChat should feel alive, responsive, modern, and easy to use without becoming visually distracting.

The motion language combines:
- Subtle neon motion
- Fast interaction feedback
- Smooth transitions
- Clear state changes
- Vice City-inspired atmospheric movement
- A reusable RandomChat connection-orb visual language

The core principle is:

> Animation should explain interaction, not compete with it.

---

# 2. Motion Personality

**Fast → smooth → subtle → purposeful**

### Recommended timing

| Interaction | Duration |
|---|---:|
| Micro-interaction | 150–200ms |
| Button/card interaction | 150–220ms |
| Dropdown/modal | 200–300ms |
| Bottom sheet | 250–350ms |
| Match transition | 500–700ms |
| Ambient background | 8–15s |
| Voice pulse | Audio-responsive |

### Recommended easing

- `ease-out` for entering elements
- `ease-in-out` for looping/ambient motion
- Short linear/controlled motion for audio visualizers

Avoid long, slow UI transitions.

---

# 3. Landing Page — Ambient Background

Use the Vice City visual direction as an atmospheric layer.

### Animation

- Pink/purple glow slowly shifts
- Palm silhouettes have extremely subtle parallax
- City lights gently pulse
- Water reflections move slowly

### Timing

**8–15 seconds**, seamless loop.

The user should feel the movement without consciously noticing it.

---

# 4. CTA Button Animation

Primary CTA:

**Start RandomChat**

### Desktop hover

- Gradient shifts slightly
- Glow increases
- Button moves up 1–2px
- Shadow becomes slightly stronger

**Duration:** 180ms

### Mobile tap

Use a small press response:

```text
tap → scale(0.97) → release
```

Do not use bounce effects.

---

# 5. Online Counter

Example:

```text
● 4,568 people online
```

The online indicator should gently pulse.

```text
● → ◉ → ●
```

Approximately every 2 seconds.

Do not continuously animate the number itself. Only update the count when the real value changes.

---

# 6. Search Interaction

When the search field receives focus:

- Input border brightens
- Cyan/purple glow appears
- Search icon becomes slightly brighter

Example:

```text
[ 🔍 Search people... ]
          ↓
[ 🔍 | Search people... ]
       focused glow
```

**Duration:** 150ms.

---

# 7. Filter Button

When opening filters:

1. Filter icon rotates approximately 20°
2. Filter panel enters
3. Panel fades from 0 → 1 opacity
4. Panel moves from `translateY(-6px)` → `translateY(0)`

**Duration:** ~200ms.

The icon should not continuously rotate.

---

# 8. Country Selector

## Desktop

Use a compact dropdown:

```text
[ 🇮🇳 India ▾ ]

┌────────────────────────┐
│ 🔍 Search country...    │
├────────────────────────┤
│ 🇮🇳 India               │
│ 🇺🇸 United States       │
│ 🇬🇧 United Kingdom      │
│ 🇨🇦 Canada              │
└────────────────────────┘
```

### Animation

```text
scaleY(0.96) → scaleY(1)
opacity 0 → 1
```

## Mobile

Use a bottom sheet:

```text
──────────────
Choose country

🔍 Search...

🇮🇳 India
🇺🇸 United States
🇬🇧 United Kingdom
```

Animation:

```text
translateY(100%) → translateY(0)
```

**Duration:** ~280ms.

---

# 9. Message Animation

Messages should never fly dramatically across the screen.

## Incoming

```text
opacity: 0
translateY: 6px

↓

opacity: 1
translateY: 0
```

## Outgoing

Use the same pattern, slightly faster.

**Duration:** 180–220ms.

The purpose is simply to establish that a new message arrived.

---

# 10. Send Button

When sending:

```text
➤
 ↓
scale(0.88)
 ↓
scale(1)
```

Optionally give the icon a tiny forward movement.

Keep it extremely subtle.

---

# 11. Next Stranger Transition

This is one of the most important RandomChat animations.

When the user selects **Next Stranger**, do not instantly replace the conversation.

### Sequence

```text
Current stranger
       ↓
fade + slide left
       ↓
Finding someone...
       ↓
new stranger
       ↓
fade + slide in
```

Example:

```text
Stranger_482
     ←
──────────────

Finding someone...

      ⟳

──────────────

Stranger_913
     →
```

This creates a clear sense of matchmaking.

---

# 12. Finding Match Animation

Create a signature RandomChat matching animation using a neon connection orb.

```text
          ·
      ◯       ◯

    ◯   💬 💬   ◯

      ◯       ◯
          ·
```

### Animation

- Outer rings expand
- Chat bubbles slowly orbit
- Small particles move around the circle
- Cyan/pink glow pulses

### Loop

Approximately **1.5–2.5 seconds**.

Use this for:
- Text matching
- Voice matching
- Next Stranger
- Random connection loading

---

# 13. Match Found Animation

When a match is found:

### Sequence

1. Matching rings slow down
2. Two avatars appear
3. Avatars move toward each other
4. Small connection/heart/chat icon appears
5. Start Chatting CTA fades in

### Total duration

**500–700ms**

Avoid large confetti effects. RandomChat should feel mature and clean.

---

# 14. Voice Call Animation

Voice calls should feel more dynamic than text chat.

Use an audio-responsive neon ring system:

```text
             ◯
        ◯         ◯
      ◯     🎙     ◯
        ◯         ◯
             ◯
```

## When nobody is speaking

Use a slow, subtle pulse.

## When the user speaks

Increase ring amplitude based on audio volume:

```text
small ring
    ↓
medium ring
    ↓
large ring
```

The animation should react to actual microphone/audio activity.

This is a core part of the Random Voice identity.

---

# 15. Mute Animation

When muted:

```text
🎙
 ↓
🎙̸
```

Also display a small **Muted** state.

Transition the microphone button instead of abruptly swapping the icon.

---

# 16. End Call Animation

The red **End Call** button should respond with:

```text
🔴
 ↓
scale(0.94)
 ↓
fade
```

Then show a lightweight call-ended state.

Avoid giant “CALL ENDED” animations.

---

# 17. Online User List Animation

When the People screen loads, use a very small stagger.

```text
User 1 ↓
User 2   ↓
User 3     ↓
User 4       ↓
```

### Animation

```text
opacity: 0 → 1
translateY: 4px → 0
```

### Stagger

**30–40ms**

Do not animate every item dramatically.

---

# 18. User Card Interaction

## Desktop hover

- Slightly brighter background
- Subtle border glow
- Optional 1px lift

Do not enlarge the whole card.

## Mobile tap

```text
tap
 ↓
background highlight
 ↓
open chat
```

---

# 19. Mobile Navigation

RandomChat should simplify navigation compared with the old Chatib.us mobile interface.

The active navigation item can use:

- Small neon glow
- 2px upward movement
- Stronger label opacity
- Slightly brighter icon

Inactive items remain still.

Avoid bouncing icons.

---

# 20. Modal Animation

For registration, reports, settings, etc.

## Backdrop

```text
opacity: 0 → 0.65
```

## Modal

```text
scale(0.96) → scale(1)
opacity: 0 → 1
```

**Duration:** ~250ms.

This creates a modern transition without feeling slow.

---

# 21. Mobile Bottom Sheet

Use bottom sheets for:

- Filters
- Country selection
- Settings
- Report
- Match preferences

Structure:

```text
──────────────
      handle

Sheet content
```

Animation:

```text
translateY(100%) → translateY(0)
```

**Duration:** 250–350ms.

Include a small drag handle for obvious touch interaction.

---

# 22. Safety Feedback

For block/report actions, keep motion calm.

Example:

```text
✓ User blocked

You won't be matched
with this person again.
```

Use a small checkmark draw/fade animation around **300ms**.

Then optionally return to **Next Stranger**.

---

# 23. Empty States

For:

**No conversations yet**

Use the neon connection orb/chat artwork.

Animation:

- Very slow glow pulse
- Small orbit movement
- No aggressive movement

Loop approximately every **3–4 seconds**.

Primary CTA:

**Find People**

---

# 24. Loading Animation

Avoid generic spinners throughout the product.

Use the RandomChat visual language.

### Simple loading state

```text
●   ●   ●
```

Animate the dots with a subtle wave.

Alternatively, reuse the connection orb for matchmaking-related loading.

---

# 25. Page Transitions

Keep normal navigation transitions short.

## Desktop

```text
Current screen
      ↓
fade
      ↓
New screen
```

**150–200ms**

## Mobile

Use directional transitions where appropriate.

### People → Chat

Chat enters from the right.

### Chat → People

Chat exits toward the right.

This gives navigation a spatial relationship.

---

# 26. Signature RandomChat Connection Orb

The most important recommendation is to establish **one recognizable motion system** across the entire product.

The same connection-orb language should appear in:

- Finding someone
- Match found
- Voice call
- Next stranger
- Loading
- Empty states

### Text connection

```text
        ◯
     ◯ 💬💬 ◯
        ◯
```

### Voice connection

```text
        ◯
     ◯  🎙  ◯
        ◯
```

### Core visual behavior

- Pink and cyan orbiting elements
- Thin neon rings
- Soft glow
- Slow breathing/pulsing
- Faster movement only during active matching

This gives RandomChat a consistent visual identity.

---

# 27. Responsive Motion Rules

Animations must work across:

- Mobile: 320–767px
- Tablet: 768–1023px
- Desktop: 1024px+
- Large desktop: 1440px+

### Mobile

Prioritize:
- Tap feedback
- Bottom sheets
- Short transitions
- Touch-friendly motion
- Reduced ambient effects

### Tablet

Use:
- Compact panels
- Moderate background motion
- Short navigation transitions

### Desktop

Can use:
- Hover effects
- Ambient parallax
- Dropdown transitions
- More detailed matching visuals

Never make animation required for understanding the interface.

---

# 28. Accessibility & Performance

Animations must respect reduced-motion preferences.

Implement:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

### Performance rules

Prefer:
- `transform`
- `opacity`
- CSS transitions
- CSS keyframes

Avoid animating:
- `width`
- `height`
- `top`
- `left`
- expensive blur/filter effects continuously

Use GSAP only where it provides meaningful value, especially for:
- Matching orb
- Match-found sequence
- Voice/audio-reactive motion
- Complex coordinated transitions

CSS should handle most micro-interactions.

---

# 29. Animation Priority

## P0 — Must Have

1. Finding Match Orb
2. Match Found transition
3. Next Stranger transition
4. Voice audio rings
5. Message entrance
6. Button press/hover
7. Mobile bottom sheets
8. Modal transitions

## P1 — Important

9. Online indicator pulse
10. User-list stagger
11. Country dropdown animation
12. Empty-state animation
13. Navigation active state
14. Background parallax

## P2 — Optional

15. Extra ambient particles
16. Advanced onboarding transitions
17. More elaborate decorative effects

---

# 30. Animations to Avoid

Do **not** use:

- Constant floating particles
- Excessive neon flashes
- Bouncing buttons
- Long page transitions
- Confetti after every match
- Heavy 3D effects
- Animated text everywhere
- Autoplay sound
- Animations that delay typing
- Animations that block navigation

The interface should feel fast first and beautiful second.

---

# 31. Implementation Recommendation

For an HTML/CSS/JS implementation:

### CSS

Use for:
- Buttons
- Inputs
- Cards
- Modals
- Dropdowns
- Bottom sheets
- Navigation
- Basic fades/slides
- Hover states

### JavaScript

Use for:
- Match state
- Message arrival
- Voice state
- Audio levels
- Online count updates
- Bottom-sheet interactions

### GSAP

Use selectively for:
- Signature matching orb
- Match-found sequence
- Complex coordinated transitions
- Voice visualization when CSS alone is insufficient

---

# 32. Final Motion Direction

RandomChat should feel:

**Neon + Calm + Fast + Human + Safe**

The Vice City-inspired visuals provide the atmosphere.

The RandomChat connection orb provides the motion identity.

The Chatib.us mobile reference provides useful information architecture inspiration, but the final experience should be significantly cleaner, more modern, and more responsive.

The goal is not to impress users with animation.

The goal is to make every interaction feel **obvious, immediate, smooth, and trustworthy**.
