# RandomChat Mobile Optimization Specification

**Project:** RandomChat Online  
**Document type:** Mobile-first optimization specification  
**Status:** Implementation-ready  
**Scope:** Mobile web experience for the existing RandomChat application

---

## 1. Objective

Optimize RandomChat for real mobile devices, with priority given to:

1. Fast access to a conversation.
2. Comfortable one-handed/touch interaction.
3. Correct behavior when the mobile keyboard opens.
4. Reliable chat scrolling and message composition.
5. Safe-area support on modern phones.
6. Responsive layouts across small phones, large phones, tablets, and desktop.
7. Good performance on mobile networks and lower-powered devices.
8. Reliable voice-chat controls on mobile.
9. Accessibility and readable typography.
10. Prevention of mobile-specific layout and interaction bugs.

The goal is **not** to redesign the product or add new features. The goal is to make the existing product work exceptionally well on mobile.

---

# 2. Mobile Priority

Mobile is a primary experience, not a reduced desktop layout.

### Priority order

**P0 — Launch blockers**
- Chat must fit correctly within the mobile viewport.
- Keyboard must not hide the message composer.
- Messages must scroll correctly.
- Primary buttons must be easy to tap.
- No horizontal page overflow.
- Safe-area insets must be respected.
- Random matching, leave, next, report, and block flows must work on mobile.
- Voice controls must work correctly where voice is enabled.
- No critical interaction may depend on hover.
- No critical content may be inaccessible behind browser UI or the keyboard.

**P1 — High priority**
- Reduce unnecessary onboarding friction.
- Optimize country selection.
- Optimize images/assets.
- Reduce unnecessary JavaScript and rendering.
- Improve loading and reconnect states.
- Improve accessibility.
- Optimize mobile navigation.

**P2 — Polish**
- Animation refinement.
- Micro-interactions.
- Additional device-specific visual polish.
- Fine-grained performance tuning after measurement.

---

# 3. Supported Viewports

The UI must be responsive without depending on a single device size.

Test at minimum:

- 320px width
- 360px width
- 375px width
- 390px width
- 412px width
- 430px width
- 768px width
- 1024px width
- Desktop widths above 1024px

Also test both portrait and landscape where applicable.

Do not create excessive breakpoint-specific CSS. Prefer fluid layouts and a small number of meaningful breakpoints.

---

# 4. Viewport and Safe-Area Rules

Use modern viewport units for full-height mobile interfaces.

Prefer:

```css
min-height: 100dvh;
```

over assuming:

```css
height: 100vh;
```

where dynamic browser UI can make `100vh` inaccurate.

For devices with display cutouts or home indicators, use safe-area environment variables where appropriate:

```css
padding-bottom: env(safe-area-inset-bottom);
padding-top: env(safe-area-inset-top);
padding-left: env(safe-area-inset-left);
padding-right: env(safe-area-inset-right);
```

Do not allow important controls to sit underneath:

- iOS home indicator
- browser UI
- notches
- rounded display corners

---

# 5. Mobile Onboarding

The onboarding flow should minimize unnecessary typing and scrolling.

Preferred structure:

```text
Landing
  ↓
18+ / Safety confirmation
  ↓
Temporary guest setup
  ↓
Start Chat
  ↓
Matching
  ↓
Conversation
```

If the current product specification requires additional profile fields such as age, gender, or country, retain those requirements but make the controls mobile-native and compact.

## Rules

- Use large, obvious form controls.
- Avoid tiny dropdowns.
- Keep primary CTA visible without excessive scrolling.
- Use the correct mobile keyboard type.
- Preserve entered values when validation fails.
- Never unexpectedly reset the whole form.
- Avoid opening the keyboard before the user intentionally focuses a field.
- Ensure validation errors appear near the affected field.
- Do not use hover-dependent instructions.

---

# 6. Country Selector

Country selection can become a large mobile UI problem.

Do not render a huge country list as a permanently expanded desktop-style dropdown.

Preferred pattern:

```text
Country
[ 🇮🇳 India                         > ]
```

On tap:

```text
┌──────────────────────────────┐
│ Select country            ×  │
├──────────────────────────────┤
│ Search country...            │
├──────────────────────────────┤
│ 🇮🇳 India                    │
│ 🇺🇸 United States            │
│ 🇬🇧 United Kingdom           │
│ ...                          │
└──────────────────────────────┘
```

Requirements:

- Bottom sheet or mobile-friendly dialog.
- Searchable list.
- Large touch targets.
- Keyboard support.
- Escape/back behavior.
- Focus management.
- No horizontal overflow.
- Avoid loading unnecessary country assets before the selector is opened.
- Use optimized flag assets.

If the country list is large, use virtualization or another efficient rendering strategy.

---

# 7. Mobile Navigation

Do not expose the entire desktop navigation system on small screens.

The mobile header should remain simple.

Example:

```text
┌──────────────────────────┐
│ RandomChat           ☰   │
└──────────────────────────┘
```

Inside chat:

```text
┌──────────────────────────┐
│ ← Stranger           ⋮   │
└──────────────────────────┘
```

The active conversation should prioritize:

- partner/status
- conversation
- message composer
- essential actions

Secondary actions such as report/block can live behind an accessible overflow menu.

Do not hide critical safety controls completely.

---

# 8. Mobile Chat Layout

The chat screen should be intentionally designed for mobile.

Target structure:

```text
┌──────────────────────────┐
│ ← Stranger          ⋮    │
├──────────────────────────┤
│                          │
│      Conversation        │
│                          │
│  message                 │
│                 message  │
│                          │
│                          │
├──────────────────────────┤
│ +  Message...        ➤   │
└──────────────────────────┘
```

Requirements:

- Header remains visible.
- Conversation area occupies remaining space.
- Composer remains accessible.
- Messages do not overlap the composer.
- Long messages wrap correctly.
- URLs do not create horizontal overflow.
- The latest message remains reachable.
- Images/audio, where supported, remain constrained to the viewport.
- The composer must not jump unexpectedly when messages arrive.

---

# 9. Mobile Keyboard Handling

This is a **P0 requirement**.

When the keyboard opens:

```text
┌──────────────────────────┐
│ Stranger             ⋮   │
├──────────────────────────┤
│ messages                 │
│ messages                 │
├──────────────────────────┤
│ Message...           ➤   │
└──────────────────────────┘
        mobile keyboard
```

The composer must remain visible.

Requirements:

- Detect viewport changes appropriately.
- Do not depend solely on `window.innerHeight`.
- Use `visualViewport` where appropriate.
- Avoid fixed elements being hidden behind the keyboard.
- Preserve the user's draft while viewport dimensions change.
- Do not automatically scroll away from a message the user is reading.
- If the user is already at the bottom, keep them near the bottom when the keyboard opens.
- If the user has scrolled upward, do not forcibly jump them to the newest message.

---

# 10. Message Scroll Behavior

Use a clear scroll policy.

### User at bottom

When a new message arrives:

```text
new message
    ↓
stay near bottom
```

### User reading older messages

When a new message arrives:

```text
new message
    ↓
do not force scroll
    ↓
show new-message indicator
```

Example:

```text
      ↓ 1 new message
```

Tapping the indicator returns the user to the newest messages.

Avoid aggressive `scrollIntoView()` calls that fight the user's scrolling.

---

# 11. Message Composer

The composer is one of the most important mobile controls.

Requirements:

- Minimum comfortable touch height.
- Clear focus state.
- Send button remains easy to hit.
- Enter behavior must be intentional.
- Long text must wrap.
- Composer should grow only within a sensible maximum height.
- After reaching the maximum height, the text area should scroll internally.
- Sending should clear the draft only after the send operation is accepted.
- Failed messages should not silently disappear.
- Disabled/loading states must be obvious.
- Do not rely on hover states.

Suggested interaction:

```text
[ + ] [ Message...                    ] [➤]
```

Do not make the send button microscopic.

---

# 12. Touch Targets

Interactive controls should generally provide approximately **44–48px or larger touch areas**.

Apply this to:

- buttons
- icon buttons
- back controls
- menu controls
- microphone
- send
- next
- leave
- report
- block
- filters
- navigation
- dialog close buttons

Do not use tiny icons as the only clickable target.

If the visual icon is small, increase its clickable container.

---

# 13. One-Handed Interaction

Primary actions should be reachable without excessive hand movement.

High-frequency actions should be easy to access:

- Send
- Next Stranger
- Leave
- Microphone
- Back

Avoid placing destructive actions next to frequent actions without confirmation.

Example:

```text
Next Stranger
```

should not be so close to:

```text
Leave
```

that accidental taps are likely.

---

# 14. Voice Chat on Mobile

Where voice chat is enabled, test on actual mobile devices.

Required states:

```text
Idle
 ↓
Request microphone permission
 ↓
Permission granted
 ↓
Recording / voice active
 ↓
Stop
 ↓
Send / end
```

Also test:

- permission denied
- permission revoked
- microphone unavailable
- Bluetooth headphones
- wired headphones
- speaker output
- phone call interruption
- browser backgrounding
- screen locking
- network switching
- reconnect
- rapid start/stop
- duplicate voice actions

The UI must always expose the current state clearly.

Do not rely solely on color to indicate recording or active voice state.

---

# 15. Mobile Network Resilience

Mobile users frequently switch between:

- Wi-Fi
- 4G
- 5G
- poor signal
- temporary offline states

The application should handle:

```text
CONNECTED
   ↓
NETWORK LOST
   ↓
RECONNECTING
   ↓
CONNECTED
```

Requirements:

- Show a clear reconnecting state.
- Do not duplicate messages after reconnect.
- Do not duplicate matchmaking sessions.
- Preserve appropriate local UI state.
- Re-establish WebSocket state safely.
- Detect stale connections.
- Never assume a successful client action means the server accepted it.

Server state remains authoritative.

---

# 16. Loading States

Avoid blank screens.

Use intentional states for:

```text
Initial loading
Matching
Connecting
Reconnecting
Sending
Voice connecting
Voice active
Partner disconnected
Error
```

Example:

```text
Finding someone...
● ● ●
```

Do not use excessive animation.

Respect:

```css
@media (prefers-reduced-motion: reduce)
```

---

# 17. Mobile Performance

Optimize for real devices, not only developer laptops.

Priorities:

### JavaScript

- Remove unnecessary client-side JavaScript.
- Avoid large dependencies for simple interactions.
- Avoid unnecessary hydration.
- Lazy-load non-critical functionality.
- Avoid repeated rendering of large message lists.

### CSS

- Remove unused CSS.
- Avoid excessive layout-triggering animations.
- Prefer transforms for animation.
- Avoid expensive effects on large surfaces.

### Images

- Use appropriately sized images.
- Prefer modern/compressed formats where appropriate.
- Lazy-load non-critical images.
- Avoid loading assets that are hidden on initial mobile view.
- Optimize country flags.

### Network

- Minimize initial requests.
- Avoid large initial payloads.
- Cache appropriate static assets.
- Keep critical rendering paths small.

---

# 18. Accessibility

Mobile accessibility is mandatory.

Requirements:

- Semantic HTML.
- Proper labels for form controls.
- Visible focus states.
- Screen-reader labels for icon buttons.
- Sufficient text contrast.
- Do not communicate state only through color.
- Dialogs must manage focus correctly.
- Keyboard navigation must remain functional.
- Respect reduced-motion preferences.
- Error messages must be announced where appropriate.
- Touch targets must be large enough.

---

# 19. Orientation

Portrait is the primary mobile experience.

Landscape should not break the application.

Test:

- onboarding
- chat
- keyboard
- dialogs
- country selector
- voice controls
- report/block
- disconnect states

Do not hard-lock orientation unless there is a compelling product reason.

---

# 20. Mobile Browser Compatibility

At minimum, validate:

### iOS

- Safari
- recent iOS versions
- dynamic browser chrome
- keyboard
- microphone permissions
- safe areas
- viewport changes

### Android

- Chrome
- recent Android versions
- keyboard
- back navigation
- microphone permissions
- network switching

Desktop browser emulation is not sufficient for final mobile validation.

---

# 21. PWA / Install Behavior

Do not add PWA functionality merely for marketing.

If PWA support is implemented, validate:

- standalone viewport
- safe-area behavior
- keyboard behavior
- WebSocket behavior
- microphone permissions
- reconnect behavior
- navigation
- cached assets

Installed/standalone mode must not regress the core chat experience.

---

# 22. Mobile Error Handling

Errors should be actionable and concise.

Bad:

```text
WebSocket connection failed with code 1006.
```

Better:

```text
Connection lost.

Trying to reconnect...
```

If recovery fails:

```text
We couldn't reconnect.

[Try Again]
```

For server rejection:

```text
Message couldn't be sent.

[Try Again]
```

Never silently fail.

---

# 23. Mobile Safety Controls

Report and block must remain accessible.

Recommended:

```text
Stranger
   ⋮
   ├── Report
   └── Block
```

Requirements:

- Large touch targets.
- Confirmation for destructive actions.
- Clear consequences.
- Report submission state.
- No accidental report/block from normal chat actions.
- Block must take effect server-side.
- Report must not depend solely on client state.

---

# 24. Mobile Testing Matrix

Before release, test at minimum:

| Area | 320px | 360px | 390px | 412px | 768px |
|---|---:|---:|---:|---:|---:|
| Landing | ✓ | ✓ | ✓ | ✓ | ✓ |
| 18+ gate | ✓ | ✓ | ✓ | ✓ | ✓ |
| Guest setup | ✓ | ✓ | ✓ | ✓ | ✓ |
| Country selector | ✓ | ✓ | ✓ | ✓ | ✓ |
| Matching | ✓ | ✓ | ✓ | ✓ | ✓ |
| Chat | ✓ | ✓ | ✓ | ✓ | ✓ |
| Keyboard | ✓ | ✓ | ✓ | ✓ | ✓ |
| Next | ✓ | ✓ | ✓ | ✓ | ✓ |
| Leave | ✓ | ✓ | ✓ | ✓ | ✓ |
| Report | ✓ | ✓ | ✓ | ✓ | ✓ |
| Block | ✓ | ✓ | ✓ | ✓ | ✓ |
| Voice | ✓ | ✓ | ✓ | ✓ | ✓ |
| Reconnect | ✓ | ✓ | ✓ | ✓ | ✓ |

Also test portrait and landscape where applicable.

---

# 25. E2E Mobile Scenarios

Create automated tests for:

### M-001 — Start

```text
Open mobile viewport
→ pass safety gate
→ complete required setup
→ start chat
→ matching screen appears
```

### M-002 — Keyboard

```text
Open chat
→ focus composer
→ keyboard opens
→ composer remains visible
→ type message
→ send
→ message appears
```

### M-003 — Scroll

```text
Open long conversation
→ scroll upward
→ receive message
→ viewport does not jump
→ new-message indicator appears
```

### M-004 — Next

```text
Chat
→ tap Next
→ current conversation closes
→ new matching state appears
```

### M-005 — Disconnect

```text
Chat
→ network interrupted
→ reconnecting state
→ connection restored
→ valid session restored
```

### M-006 — Voice

```text
Voice mode
→ microphone permission
→ activate voice
→ stop
→ correct UI state
```

### M-007 — Safe area

```text
Mobile device with safe area
→ bottom controls
→ no control overlaps home indicator
```

### M-008 — No horizontal overflow

```text
All major mobile screens
→ document width equals viewport width
→ no horizontal scrolling
```

---

# 26. Performance Acceptance Criteria

Measure rather than guess.

Track:

- initial page load
- JS payload
- CSS payload
- image payload
- number of initial requests
- Largest Contentful Paint
- Interaction to Next Paint
- Cumulative Layout Shift
- memory usage where measurable
- long tasks
- chat rendering performance

Do not optimize based on assumptions alone.

Use real-device testing and production telemetry where available.

---

# 27. Definition of Done

Mobile optimization is complete only when:

- [ ] No horizontal overflow on supported mobile widths.
- [ ] All P0 interactions work with touch.
- [ ] Keyboard does not hide the composer.
- [ ] Chat scroll behavior is correct.
- [ ] Safe-area handling is correct.
- [ ] Primary touch targets are sufficiently large.
- [ ] Mobile navigation is usable.
- [ ] Country selector is mobile-friendly.
- [ ] Voice works on supported mobile devices if enabled.
- [ ] Network loss/reconnect works.
- [ ] Report/block work correctly.
- [ ] Loading/error states are clear.
- [ ] Reduced-motion behavior works.
- [ ] Accessibility checks pass.
- [ ] E2E mobile tests pass.
- [ ] Production build passes.
- [ ] No new console errors are introduced.
- [ ] No critical layout regressions exist at 320–768px widths.
- [ ] Actual iOS and Android device testing has been completed.

---

# 28. Implementation Rules for AI Coding Agents

Before changing code:

1. Read the current product specification.
2. Read the architecture specification.
3. Inspect the existing mobile implementation.
4. Identify the smallest change that solves the problem.
5. Do not redesign unrelated components.
6. Do not add dependencies unless necessary.
7. Do not create duplicate responsive components without justification.
8. Do not use client-side state as a substitute for server authorization.
9. Add regression tests for fixed bugs.
10. Run lint, typecheck, tests, and build after implementation.

### Important

Do not blindly apply this document if it conflicts with the authoritative product specification.

If a conflict exists:

```text
STOP
→ report the conflict
→ identify the conflicting requirements
→ wait for the authoritative decision
```

Never silently choose a product behavior.

---

# 29. Recommended Implementation Order

```text
Phase 1
Viewport + safe-area foundation
        ↓
Phase 2
Mobile navigation
        ↓
Phase 3
Onboarding/forms
        ↓
Phase 4
Chat shell
        ↓
Phase 5
Keyboard + composer
        ↓
Phase 6
Message scrolling
        ↓
Phase 7
Next/Leave/Report/Block
        ↓
Phase 8
Voice mobile behavior
        ↓
Phase 9
Network/reconnect
        ↓
Phase 10
Performance
        ↓
Phase 11
Accessibility
        ↓
Phase 12
Real-device testing
```

---

# 30. Final Principle

**Do not treat mobile optimization as a collection of media queries.**

RandomChat is fundamentally an interaction-heavy mobile product.

The quality bar is:

```text
Open
 ↓
Understand
 ↓
Start
 ↓
Match
 ↓
Chat
```

with as little friction as possible.

Every mobile optimization should make that loop:

**faster, clearer, more reliable, and easier to operate with one hand.**
