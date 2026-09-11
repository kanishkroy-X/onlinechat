# RandomChat — Mobile-First Responsive Optimization Plan

**Project:** randomcaht.online  
**Product:** RandomChat  
**Document type:** Implementation specification / AI coding-agent handoff  
**Status:** Ready for implementation  
**Primary goal:** Make RandomChat excellent on mobile first, while maintaining a polished tablet and desktop experience.

---

## 1. Objective

RandomChat must be designed **mobile-first**, not desktop-first with a mobile breakpoint added later.

The product must work smoothly across:

- iPhone
- iPad
- Android phones
- Android tablets
- MacBook
- iMac
- macOS desktop browsers
- Windows PCs
- Linux desktop browsers
- Large external monitors

The core experience must remain:

> Open → choose temporary identity/preferences → find someone → chat → next stranger.

The existing product is an anonymous, no-account, responsive web product. Preserve that model. Do not introduce native apps, accounts, profiles, payments, permanent chat history, or unrelated features.

---

# 2. Source-of-Truth Rules

Use the existing project documents in this order:

1. Current product requirements
2. Current UI/UX specification
3. Current design specification
4. Current implementation/architecture
5. This mobile-first responsive specification
6. Existing working code
7. Reference products only for interaction inspiration

Do not replace existing product behavior merely to make the UI responsive.

The existing project uses Astro with the Cloudflare adapter and Tailwind CSS. Preserve the current stack unless a concrete technical problem requires a change.

---

# 3. Core Responsive Principle

Do **not** make one desktop layout and then squeeze it into a phone.

Instead:

```text
Mobile-first foundation
        ↓
Tablet enhancement
        ↓
Desktop enhancement
        ↓
Large-screen refinement
```

The same application state, components, real-time connection, and product logic must work across all sizes.

Responsive design is a layout problem, not a separate product.

---

# 4. Device Classes

Use viewport ranges as design guidance rather than hardcoding individual device models.

## Compact Mobile

Approx. `320px–374px`

Priorities:

- zero horizontal scrolling
- compact header
- compact People rows
- bottom navigation
- full-height chat
- keyboard-safe composer
- large enough touch targets
- minimal decoration

## Standard Mobile

Approx. `375px–767px`

Priorities:

- primary mobile application experience
- bottom navigation
- full-height chat
- bottom-sheet filters
- comfortable one-handed interaction
- safe-area support
- keyboard-safe input

## Tablet

Approx. `768px–1023px`

Priorities:

- tablet-specific spacing
- larger People list
- optional two-column layout
- touch + keyboard + trackpad support
- portrait + landscape
- filters can become a side panel

## Desktop

Approx. `1024px–1439px`

Priorities:

- navigation rail
- constrained application content
- horizontal filters
- mouse hover
- keyboard navigation
- wider chat layout

## Large Desktop

`1440px+`

Priorities:

- constrained readable content
- generous whitespace
- no stretched chat
- no giant controls
- no unnecessarily large cards

---

# 5. Mobile-First Layout Rules

Start component styling from the smallest supported viewport.

Example approach:

```css
/* Base = mobile */
.component {
  ...
}

/* Enhance progressively */
@media (min-width: 768px) {
  ...
}

@media (min-width: 1024px) {
  ...
}

@media (min-width: 1440px) {
  ...
}
```

Do not create dozens of device-specific breakpoints.

Avoid arbitrary rules such as:

```css
@media (max-width: 390px) {}
@media (max-width: 430px) {}
```

unless a real documented browser/device issue requires one.

Prefer fluid sizing, Grid, Flexbox, intrinsic sizing, and container queries where useful.

---

# 6. Mobile Viewport Handling

Never depend exclusively on:

```css
height: 100vh;
```

Use modern viewport units where appropriate:

```css
100dvh
100svh
100lvh
```

Recommended principle:

- `dvh` for dynamic application-height areas
- `svh` where a stable small viewport is required
- `lvh` only where the large viewport is intentionally useful

Test browser UI expansion/collapse on:

- iPhone Safari
- iPad Safari
- Android Chrome

---

# 7. Apple Safe-Area Support

Important UI must respect:

- iPhone notch
- Dynamic Island
- home indicator
- iPad safe areas
- browser edge areas

Use:

```css
env(safe-area-inset-top)
env(safe-area-inset-right)
env(safe-area-inset-bottom)
env(safe-area-inset-left)
```

Apply safe-area padding to:

- mobile header where required
- bottom navigation
- chat composer
- full-screen sheets
- full-screen dialogs

Do not place critical controls directly against the physical screen edge.

---

# 8. Mobile Navigation

## Mobile

Use bottom navigation for the primary application areas.

The bottom navigation must:

- remain accessible
- respect the iPhone home indicator
- not overlap the chat composer
- not be hidden behind the keyboard
- support touch
- have clear active state
- use consistent SVG icons

Do not use tiny text-only navigation links.

## Tablet

Use an adaptive navigation rail or compact navigation depending on width.

## Desktop

Use the established narrow left navigation rail.

Do not create a crowded old-style sidebar.

---

# 9. Touch Interaction

Every primary interactive control must be touch-friendly.

Target approximately:

- `44px × 44px` minimum interactive area where practical
- adequate spacing between adjacent controls
- comfortable thumb interaction
- no precision tapping requirement

Applies to:

- buttons
- People rows
- navigation
- search
- filters
- country selector
- send button
- back button
- report/block
- voice controls
- modal controls

Important:

> Increase the interactive area rather than making every visual icon huge.

---

# 10. Chat — Highest Priority Mobile Experience

Chat is the most important mobile screen.

It must behave like a proper mobile messaging application.

## Mobile structure

```text
┌───────────────────────────┐
│ ← Stranger       ⋮        │
├───────────────────────────┤
│                           │
│        Messages           │
│                           │
│                           │
│                           │
├───────────────────────────┤
│ Message...          Send  │
└───────────────────────────┘
```

Requirements:

- full available viewport height
- header remains accessible
- message list scrolls independently
- composer stays usable
- latest messages remain visible
- no accidental page-level scrolling
- no keyboard overlap
- safe-area aware bottom spacing

---

# 11. Mobile Keyboard Requirements

This is a **P0 requirement**.

When the software keyboard opens:

```text
Application viewport
        ↓
Keyboard appears
        ↓
Chat area dynamically resizes
        ↓
Composer remains visible
```

The application must not:

- hide the composer
- cover the send button
- scroll the entire page unexpectedly
- hide the newest message
- create an unusable blank area
- jump unpredictably

Test:

- iPhone Safari
- iPad Safari
- Android Chrome

Test both:

- opening keyboard
- closing keyboard

Also test after:

- receiving a message
- sending a message
- rotating the device
- reconnecting

---

# 12. Mobile Composer

The composer must be optimized for thumb and keyboard use.

Requirements:

- minimum comfortable input height
- clear send action
- sufficient left/right padding
- safe-area-aware bottom spacing
- disabled state when sending is prohibited
- visible cold-message gate notice
- no horizontal overflow
- no accidental submission while interacting with the UI

The two-message restriction remains server-authoritative.

The responsive UI must never bypass product security rules.

---

# 13. People Lobby — Mobile

People is a compact directory, not a dating-style card grid.

Use compact rows.

Target approximately:

- row height: `64–76px`
- avatar: `40–44px`
- username: `14–16px`
- metadata: `12–13px`
- flag: `20–24px`

Example:

```text
┌────────────────────────────┐
│ People                     │
│ ● 2,431 online             │
│                            │
│ Search people...      ⚙    │
├────────────────────────────┤
│ A   Alex       24 · 🇮🇳    │
│ S   Sarah      22 · 🇺🇸    │
│ M   Mike       27 · 🇬🇧    │
│ E   Emma       25 · 🇨🇦    │
└────────────────────────────┘
```

Do not add:

- bios
- followers
- likes
- dating scores
- social metrics
- large profile cards
- unnecessary photos

---

# 14. Mobile Search

Search should:

- occupy the available width
- have a comfortable touch target
- support keyboard input
- have a clear focus state
- debounce requests where appropriate
- not cause layout jumping
- remain visible when useful

When focused:

- increase visual contrast
- provide obvious focus indication
- avoid excessive animation

---

# 15. Mobile Filters

Do not force a desktop filter toolbar onto a phone.

Use a bottom sheet.

Example:

```text
┌────────────────────────────┐
│                            │
│      People                │
│                            │
│   Search                   │
│                            │
├────────────────────────────┤
│        Filters             │
│                            │
│ Gender                     │
│ Everyone / Male / Female  │
│                            │
│ Age                        │
│ 18 — 35                    │
│                            │
│ Country                    │
│ All Countries              │
│                            │
│        Apply               │
└────────────────────────────┘
```

Requirements:

- touch-friendly controls
- clear close action
- visible selected states
- scrollable content
- safe-area support
- no content behind the sheet that remains accidentally interactive

Desktop can use a toolbar or panel instead.

---

# 16. Country Selector — Mobile

Use a bottom sheet or mobile-friendly modal.

Requirements:

- search country
- full country name
- flag
- selected state
- touch scrolling
- accessible text alternative for flags
- fast filtering
- large enough selection rows

Example:

```text
┌────────────────────────────┐
│ Select country          ×  │
│                            │
│ Search country...          │
├────────────────────────────┤
│ 🇮🇳 India              ✓   │
│ 🇺🇸 United States          │
│ 🇬🇧 United Kingdom         │
│ 🇨🇦 Canada                 │
│ 🇦🇺 Australia              │
└────────────────────────────┘
```

Do not use tiny desktop dropdowns on phones.

---

# 17. Guest Setup — Mobile

The first interaction must be extremely simple.

Prioritize:

1. nickname
2. required product choices
3. primary CTA

Avoid:

- multi-step unnecessary forms
- large decorative illustrations consuming viewport space
- excessive explanatory copy
- tiny labels
- multiple competing CTAs

The primary CTA must remain above the fold on normal mobile screens where practical.

---

# 18. Landing Page — Mobile

The mobile landing page should prioritize conversion into the product.

Order:

```text
Brand
↓
Short value proposition
↓
Primary CTA
↓
Minimal trust/safety explanation
↓
Supporting content
```

Do not reproduce a large desktop hero on mobile.

Reduce:

- decorative background area
- large headings
- excessive animation
- unnecessary content

Keep:

- brand
- promise
- CTA
- safety signal
- essential legal links

---

# 19. Random Matching — Mobile

Matching must feel fast and purposeful.

Use a compact visual state.

```text
Finding someone...

     ◉

Looking for a stranger
```

Do not consume the entire mobile screen with unnecessary animation.

Animation must not block interaction or delay matching.

Respect reduced-motion preferences.

---

# 20. Desktop / Large-Screen Adaptation

Mobile-first does not mean desktop should feel like a stretched phone.

At desktop widths:

```text
┌──────┬──────────────────────────────────┐
│ Nav  │       RandomChat Content         │
│      │                                  │
│      │      constrained main area       │
│      │                                  │
└──────┴──────────────────────────────────┘
```

Use:

- navigation rail
- wider content area
- horizontal filter toolbar
- hover states
- keyboard navigation
- larger spacing

At large displays, constrain the central content.

Do not stretch messages across a 4K screen.

---

# 21. iPad-Specific Requirements

Treat iPad as a tablet, not a giant phone.

Support:

- portrait
- landscape
- touch
- external keyboard
- trackpad
- reduced-width browser windows
- responsive split layouts where appropriate

Possible landscape structure:

```text
┌──────────────┬──────────────────────────┐
│ Navigation   │ Chat / People            │
│              │                          │
│              │                          │
└──────────────┴──────────────────────────┘
```

Do not force a three-column interface if it reduces usability.

---

# 22. MacBook Requirements

Support:

- Safari
- Chrome
- Firefox where practical
- trackpad
- mouse
- keyboard
- browser resizing
- hover
- visible focus

The interface must remain usable at partial browser-window widths.

Do not assume the browser is always maximized.

---

# 23. iMac / Large Monitor Requirements

Large screens should provide:

- whitespace
- hierarchy
- visual calm
- constrained reading width

They should NOT produce:

- giant chat bubbles
- huge buttons
- stretched People rows
- excessive empty UI panels
- unreadably long message lines

Use max-width containers for primary content.

---

# 24. Orientation Changes

Support:

```text
Portrait
↓
Landscape
↓
Portrait
```

without:

- losing temporary session
- losing chat state
- duplicating WebSocket connections
- resetting filters
- losing typed input
- starting duplicate matchmaking
- breaking composer position

Orientation change is a layout event, not a new application session.

---

# 25. Mouse + Keyboard + Touch

The same interface must support different input modes.

## Touch

- tap
- scroll
- touch-friendly sheets
- comfortable controls

## Mouse

- hover
- pointer feedback
- click
- wheel scrolling

## Keyboard

Support:

- Tab
- Shift + Tab
- Enter
- Escape
- arrow keys where appropriate

Country selectors, filters, dialogs, and navigation must remain keyboard accessible.

---

# 26. Accessibility

Responsive optimization must not reduce accessibility.

Required:

- semantic HTML
- visible focus
- accessible labels
- keyboard navigation
- screen-reader announcements
- sufficient contrast
- non-color-only state indicators
- reduced-motion support
- touch-friendly controls

Announce important real-time events:

- match found
- new message
- connection lost
- stranger disconnected
- report submitted
- message blocked

---

# 27. Reduced Motion

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

When enabled:

- remove unnecessary ambient animation
- shorten transitions
- disable decorative looping effects
- preserve functional state changes
- never require animation to understand an interaction

The existing motion direction should remain subtle and purposeful.

---

# 28. Performance — Mobile Priority

Optimize especially for mobile networks and lower-end Android devices.

Avoid:

- unnecessary JavaScript
- large images
- heavy background video
- continuous particle effects
- unnecessary DOM nodes
- excessive re-renders
- layout thrashing

For People:

- paginate/incrementally load large populations
- virtualize where appropriate
- debounce search
- use server-side filtering when necessary
- minimize presence updates
- avoid rendering thousands of rows

---

# 29. Network Resilience on Mobile

Mobile users frequently change networks.

Test:

```text
Wi-Fi
↓
Mobile data
↓
Wi-Fi
```

Also test:

- temporary network loss
- airplane mode
- weak connection
- browser backgrounding
- returning to the browser
- device sleep/wake

The application must:

- detect disconnection
- show clear state
- reconnect when appropriate
- avoid duplicate sessions
- avoid duplicate messages
- preserve valid temporary state

---

# 30. Browser Backgrounding

Mobile browsers may suspend pages.

When the user returns:

1. verify session validity
2. verify connection state
3. reconnect if necessary
4. synchronize current chat state
5. avoid duplicate event listeners
6. avoid duplicate matchmaking requests

Do not assume a WebSocket remains continuously active while the browser is backgrounded.

---

# 31. Visual Design on Mobile

The existing RandomChat visual language must remain intact.

Use the established sunset/plum palette and visual identity.

However:

> Functional chat surfaces must be calmer than landing and matching screens.

On mobile specifically:

- reduce decorative background intensity
- reduce ambient animation
- preserve contrast
- prioritize readable text
- avoid visual clutter
- avoid oversized cards

Do not turn the application into a decorative poster.

---

# 32. Typography on Mobile

Use the existing Inter typography system.

Mobile typography must:

- remain readable without zoom
- maintain hierarchy
- avoid excessively large headings
- prevent text clipping
- allow long usernames to truncate safely
- prevent long words/URLs from breaking layouts

Use:

```css
overflow-wrap: anywhere;
```

where necessary for user-generated content.

Never allow user-generated text to create horizontal page overflow.

---

# 33. Horizontal Overflow Rule

At every supported viewport:

```text
document width == viewport width
```

No accidental horizontal page scrolling.

Test especially:

- long usernames
- long messages
- country names
- filters
- dialogs
- buttons
- navigation
- error messages

---

# 34. Safe Modal / Bottom-Sheet Behavior

Mobile sheets must:

- lock background interaction when appropriate
- remain scrollable
- support Escape on keyboard devices
- support touch dismissal only where safe
- have an obvious close action
- respect safe-area insets
- avoid content being hidden behind browser UI

Do not create sheets that are too tall to use comfortably.

---

# 35. PWA / App-Like Considerations

The MVP remains a responsive website.

Do not build a native mobile application.

However, structure the frontend so future PWA support is possible.

Where appropriate:

- correct mobile viewport metadata
- proper Apple touch icon
- theme color
- web app manifest readiness
- standalone-safe spacing
- safe-area handling

Do not introduce PWA complexity unless required for launch.

---

# 36. Mobile SEO / Metadata

Ensure the responsive implementation includes:

- correct viewport metadata
- responsive Open Graph image
- mobile-friendly title/description
- proper canonical handling
- no mobile-specific duplicate URLs
- readable text without zoom
- adequate tap targets

SEO content must not damage the mobile product experience.

---

# 37. QA Device Matrix

Every P0 flow must be smoke-tested on:

### Apple

- iPhone Safari
- iPad Safari
- macOS Safari
- macOS Chrome

### Android

- Android Chrome
- Android tablet Chrome

### Windows

- Chrome
- Edge
- Firefox

---

# 38. Required Viewport Tests

Test representative viewport sizes:

```text
320 × 568
360 × 800
375 × 667
390 × 844
414 × 896
430 × 932

768 × 1024
820 × 1180
1024 × 768

1280 × 800
1440 × 900
1920 × 1080
2560 × 1440
```

These are QA dimensions, not device-specific layout rules.

---

# 39. P0 Mobile Acceptance Checklist

## Layout

- [ ] No horizontal scrolling
- [ ] No clipped controls
- [ ] No overlapping UI
- [ ] Correct safe-area spacing
- [ ] Correct mobile viewport height
- [ ] Orientation changes work

## Navigation

- [ ] Bottom navigation works
- [ ] Home indicator does not overlap controls
- [ ] Navigation remains usable with keyboard open

## Chat

- [ ] Chat fills available height
- [ ] Composer remains visible
- [ ] Keyboard does not cover composer
- [ ] New messages remain visible
- [ ] Message list scrolls correctly
- [ ] Long messages do not overflow

## People

- [ ] Rows remain compact
- [ ] Search works
- [ ] Filters work
- [ ] Bottom-sheet filters work
- [ ] Country selector works
- [ ] Touch targets are comfortable

## Real-Time

- [ ] Matchmaking works
- [ ] Chat works
- [ ] Disconnect handling works
- [ ] Reconnect works
- [ ] No duplicate sessions
- [ ] No duplicate messages

## Accessibility

- [ ] Keyboard navigation works
- [ ] Focus is visible
- [ ] Labels are accessible
- [ ] Screen-reader states are announced
- [ ] Reduced motion works
- [ ] Color is not the only state indicator

---

# 40. Final Implementation Order

Implement responsive behavior in this order:

```text
1. Mobile viewport foundation
        ↓
2. Safe-area handling
        ↓
3. Mobile AppShell
        ↓
4. Mobile navigation
        ↓
5. Guest setup
        ↓
6. People lobby
        ↓
7. Search
        ↓
8. Mobile filter sheet
        ↓
9. Country selector
        ↓
10. Full-height mobile chat
        ↓
11. Keyboard-safe composer
        ↓
12. Cold-message gate UI
        ↓
13. Random matching
        ↓
14. Report / Block
        ↓
15. Reconnect handling
        ↓
16. Tablet adaptation
        ↓
17. Desktop adaptation
        ↓
18. Large-screen refinement
        ↓
19. Accessibility
        ↓
20. Performance
        ↓
21. Cross-browser QA
```

---

# 41. Engineering Rules

Do not:

- create separate mobile and desktop applications
- duplicate business logic
- duplicate WebSocket/session logic
- use device sniffing for layout
- hardcode individual phone dimensions
- rely only on `100vh`
- hide functionality on mobile without a product reason
- use hover as the only interaction
- sacrifice chat usability for decorative animation
- sacrifice accessibility for visual design

Do:

- build mobile-first
- progressively enhance
- use fluid responsive layouts
- use safe-area variables
- use modern viewport units
- keep application state independent from layout
- test real devices/browsers
- preserve the existing product behavior

---

# 42. Definition of Done

RandomChat is considered mobile-first responsive only when:

1. iPhone Safari provides a complete usable experience.
2. iPad Safari provides a tablet-optimized experience.
3. Android Chrome works on small and large phones.
4. Android tablets work correctly.
5. MacBook Safari and Chrome work correctly.
6. iMac/large displays remain constrained and readable.
7. Windows Chrome and Edge work correctly.
8. Firefox works for core desktop flows.
9. Mobile keyboard never makes chat unusable.
10. Safe areas are respected.
11. Orientation changes preserve state.
12. Touch targets are comfortable.
13. Mouse interactions work.
14. Keyboard navigation works.
15. Screen-reader accessibility is maintained.
16. Reduced motion is respected.
17. Network changes do not corrupt the temporary session.
18. Browser backgrounding does not create duplicate connections.
19. People remains compact on mobile.
20. Filters become mobile-friendly bottom sheets.
21. Country selection is mobile-friendly.
22. Chat remains the primary focus.
23. Large screens do not stretch content excessively.
24. No accidental horizontal overflow exists.
25. P0 responsive tests pass.
26. Cross-browser smoke tests pass.
27. No critical mobile Safari issues remain.

---

# 43. Final Product Principle

The goal is not:

> "Make the desktop website responsive."

The goal is:

> **Build RandomChat mobile-first so that it feels natural on a phone, comfortable on a tablet, efficient on a laptop, and polished on a large desktop.**

Mobile is the primary design constraint.

Desktop is the enhancement.

The conversation must always remain the center of the product.
