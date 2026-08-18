# UI/UX Design Specification — randomcaht.online

**Version:** 2.0  
**Status:** MVP design source  
**Product:** Anonymous random-stranger chat  
**Domain:** randomcaht.online

> **Visual reference priority:** The supplied sunset/lust palette references define the intended visual mood. If `DESIGN.md` exists in the project and conflicts with this document, `DESIGN.md` takes precedence.

---

# 1. Product Experience

randomcaht.online is a free, anonymous stranger-chat website.

The UX goal is simple:

**Open → choose preferences → find someone → chat → next stranger.**

The product should feel:

- Modern
- Clean
- Minimal
- Warm
- Social
- Slightly sensual/romantic
- Mysterious
- Safe
- Fast

It should **not** feel:

- Explicit
- Pornographic
- Like an adult-content website
- Like a dating app
- Like a generic SaaS dashboard
- Over-designed
- Neon or nightclub-like

The visual idea is:

> **Sunset atmosphere + anonymous connection + modern chat.**

---

# 2. Visual Concept

The supplied references establish a sunset gradient moving from deep plum into rose, coral, peach, and cream.

Primary visual progression:

```text
#492351
    ↓
#7F376D
    ↓
#D55882
    ↓
#FF808A
    ↓
#FFBF92
    ↓
#F6E5D9
```

This gradient is the signature visual language.

Do not use the gradient on every element.

Use it primarily for:

- Hero/landing background
- Matching/waiting atmosphere
- Selected/highlighted surfaces
- Important brand moments
- Decorative accents

The actual chat area should remain calmer for readability.

---

# 3. Color System

## Primary palette

| Token | Hex | Purpose |
|---|---|---|
| Deep Plum | `#492351` | Primary dark/background |
| Plum | `#7F376D` | Secondary dark/surface |
| Rose | `#D55882` | Primary accent |
| Coral | `#FF808A` | CTA/highlight |
| Peach | `#FFBF92` | Gradient transition |
| Cream | `#F6E5D9` | Light background |

## Supporting neutrals

```text
White:
#FFFFFF

Near White:
#FFF9F7

Text:
#2A2027

Secondary Text:
#665B63

Muted Text:
#95878F

Border:
#E8DDE0
```

## Dark theme

```text
Dark Background:
#241622

Dark Surface:
#301B2D

Dark Elevated:
#3B2140

Dark Text:
#FFF7F5

Dark Secondary Text:
#D8C7CF

Dark Border:
#58374F
```

---

# 4. Gradient System

The primary brand gradient should use the supplied palette.

### Hero gradient

```css
linear-gradient(
  180deg,
  #492351 0%,
  #7F376D 24%,
  #D55882 48%,
  #FF808A 68%,
  #FFBF92 84%,
  #F6E5D9 100%
)
```

The gradient should feel like a sunset rather than a synthetic UI gradient.

### Secondary gradient

For smaller components:

```css
linear-gradient(
  135deg,
  #7F376D,
  #D55882,
  #FF808A
)
```

### Important rule

Do not place large amounts of text directly over the busiest part of the gradient.

Use sufficient contrast or a subtle surface overlay.

---

# 5. Typography

Use a modern, clean sans-serif unless `DESIGN.md` specifies another typeface.

The typography should contrast with the emotional color palette.

Use:

```text
Large heading:
Confident / elegant

Body:
Simple / highly readable

Labels:
Compact / functional
```

Suggested sizes:

```text
Desktop H1: 48–64px
Mobile H1: 36–44px

H2: 28–36px
H3: 20–24px

Body: 15–17px
Small: 13–14px
```

Avoid excessive bold text.

Use typography to create hierarchy instead of decorative elements.

---

# 6. Logo and Brand

The brand name is:

**randomcaht.online**

Keep the wordmark simple.

Preferred treatment:

```text
randomcaht
.online
```

or a single-line wordmark depending on the final layout.

A small abstract connection/chat symbol may accompany it.

Do not use:

- Lips
- Bodies
- Explicit imagery
- Dating hearts as the main logo
- Sexual symbols
- Generic chat bubbles copied from another product

The identity should suggest connection without being explicit.

---

# 7. Icon System

All product icons should be SVG-based.

Use one consistent icon family:

- Thin/medium line weight
- Rounded geometry
- Simple shapes
- Minimal detail
- Consistent optical size

Core icons:

```text
Start Chat
Next Stranger
Leave
Send
Report
Block
Safety
Language
Theme
Sun
Moon
System
Male
Female
Anyone
Connection
Search
Close
Back
More
Warning
Check
Offline
```

## Product-specific icons

### Matching

Two abstract people or connected nodes.

### Next Stranger

Use a forward/skip/connection icon.

Do not make it look like browser page refresh.

### Report

Flag/warning icon.

### Block

Blocked-user/circle-slash icon.

### Safety

Shield icon.

### Anyone

Group/people icon.

### Theme

Sun / moon / system icon.

All meaningful icon-only controls must have accessible labels.

---

# 8. UX Principles

## Principle 1 — No friction

The visitor should reach matching quickly.

Do not ask for:

- Email
- Password
- Phone
- Account
- Profile photo
- Date of birth unless required for the age gate

## Principle 2 — Make anonymity obvious

Communicate:

**No account. Free to use.**

Do not falsely imply that anonymity means content cannot be captured by another user.

## Principle 3 — Keep chat dominant

Once matched, the conversation becomes the product.

Remove unnecessary navigation.

## Principle 4 — Safety without fear

Safety tools should be easy to find but should not dominate the interface.

## Principle 5 — Mobile first

The chat must be excellent on phones.

---

# 9. Landing Page

The landing page should immediately communicate:

```text
What?
Random stranger chat.

Account?
None.

Cost?
Free.

Action?
Start Chat.
```

Suggested structure:

```text
┌─────────────────────────────────────────┐
│ randomcaht.online       Language  Theme │
│                                         │
│                                         │
│        Talk to someone new.             │
│                                         │
│   Random conversations. No account.     │
│                                         │
│             [ Start Chat ]              │
│                                         │
│        Free • Anonymous • Instant       │
│                                         │
│                                         │
│     How it works                        │
│     01 Choose preferences               │
│     02 Find a stranger                  │
│     03 Start talking                    │
│                                         │
│     Safety • Privacy • Terms            │
└─────────────────────────────────────────┘
```

The hero can use the full sunset gradient.

---

# 10. Hero Design

Use the supplied sunset palette as the strongest visual statement.

Recommended:

```text
Deep Plum
    ↓
Rose
    ↓
Coral
    ↓
Peach
    ↓
Cream
```

Place the primary headline in a high-contrast area.

Use minimal decoration.

The hero should not contain stock photos of people.

The emotional effect should come from color, typography, and whitespace.

---

# 11. Primary CTA

Primary CTA:

**Start Chat**

Style:

- Coral/pink gradient or solid coral
- White text
- Medium radius
- Strong contrast
- Subtle hover/press feedback

Do not make the CTA excessively rounded.

Suggested radius:

```text
12–16px
```

---

# 12. Guest Setup

The setup screen should be short.

```text
Start chatting

Nickname
[ Stranger123              ]

Your gender
[ Male ] [ Female ]

Chat with
[ Male ] [ Female ] [ Anyone ]

[ Start Chat ]
```

Nickname validation should be immediate.

Requirements:

- Length validation
- Unsafe-character handling
- No system/admin impersonation
- No empty value

Do not make this look like account registration.

---

# 13. Matching Preference Controls

Use segmented controls.

### Gender

```text
Your gender

┌─────────┐ ┌──────────┐
│  Male   │ │  Female  │
└─────────┘ └──────────┘
```

### Preference

```text
Chat with

┌───────┐ ┌────────┐ ┌────────┐
│ Male  │ │ Female │ │ Anyone │
└───────┘ └────────┘ └────────┘
```

Selected state:

- Pink/coral background
- White or high-contrast text
- Clear border/focus state

Do not use blue for male and pink for female.

---

# 14. Matching Screen

The waiting state must feel alive.

```text
             ◌

      Finding someone...

   Searching for a stranger
          to chat with.

        Looking for:
           Anyone

          [ Cancel ]
```

Use a subtle animated connection/search icon.

Do not use a giant loading spinner.

The user should know:

1. The system is working.
2. What preference is being used.
3. They can cancel.

---

# 15. Match Found

Use a quick transition.

```text
        Stranger found

            ●

        Connecting...

```

Then transition into chat.

Avoid long animations.

Perceived speed matters.

---

# 16. Chat Layout

## Desktop

```text
┌─────────────────────────────────────────────┐
│ ←  Stranger_42       ● Connected        ⋯  │
├─────────────────────────────────────────────┤
│                                             │
│  Stranger                                    │
│  ┌──────────────────────┐                   │
│  │ Hey!                 │                   │
│  └──────────────────────┘                   │
│                                             │
│                         You                 │
│              ┌─────────────────────────┐    │
│              │ Hey, what's up?          │    │
│              └─────────────────────────┘    │
│                                             │
├─────────────────────────────────────────────┤
│ Type a message...                      ➤   │
├─────────────────────────────────────────────┤
│        Next Stranger     Report     Block   │
└─────────────────────────────────────────────┘
```

The chat container should be visually focused.

Do not fill the entire desktop width with the conversation.

---

# 17. Chat Color System

The chat should be calmer than the landing page.

### Background

Light:

```text
#FFF9F7
```

Dark:

```text
#241622
```

### Stranger bubble

Light:

```text
#FFFFFF
```

Dark:

```text
#3B2140
```

### User bubble

Light:

```text
#FCECEF
```

Dark:

```text
#6B304C
```

### User text

Dark plum/near-black.

The sunset gradient should not sit behind every message.

---

# 18. Message Bubbles

Use subtle rounded rectangles.

Suggested radius:

```text
10–14px
```

Avoid oversized pill-shaped bubbles.

Keep message width readable:

```text
max-width: 70–75%
```

On mobile:

```text
max-width: 85%
```

---

# 19. Message Composer

The composer stays anchored at the bottom.

Desktop:

```text
┌───────────────────────────────────────┐
│ Type a message...                ➤   │
└───────────────────────────────────────┘
```

Mobile:

```text
┌────────────────────────────────┐
│ Type a message...          ➤  │
└────────────────────────────────┘
```

Requirements:

- Large touch target
- Clear focus state
- Enter-to-send where appropriate
- Empty-message rejection
- Server-side message validation
- Mobile keyboard safe

---

# 20. Two-Message Cold Message Rule

A user may send two consecutive messages before receiving a reply.

```text
You → Message 1
You → Message 2

WAIT

Stranger → Reply

NORMAL CHAT
```

After the second unanswered message:

```text
You've sent 2 messages.
Wait for a reply before sending another.
```

The Send button becomes disabled.

The server is authoritative.

Refreshing or opening another tab must not reset the counter.

---

# 21. Next Stranger

Next Stranger should be visible at all times in the chat experience.

Visual hierarchy:

```text
Send
↓
Next Stranger
↓
Report / Block
```

Use the product's forward/connection icon.

When activated:

```text
End this chat?

You'll be connected to someone new.

[ Stay ] [ Next Stranger ]
```

On desktop, a confirmation may be lightweight.

On mobile, prevent accidental taps.

---

# 22. Leave

Intentional leave:

```text
Leave chat?

You'll disconnect from this stranger.

[ Stay ] [ Leave ]
```

After leaving:

```text
Chat ended.

[ Find another stranger ]
```

---

# 23. Disconnect Handling

If the stranger leaves:

```text
Stranger disconnected.

[ Find another stranger ]
```

If the user's network drops:

```text
Connection lost.

Trying to reconnect...
```

If recovery fails:

```text
This chat ended.

[ Find another stranger ]
```

Do not expose technical WebSocket errors.

---

# 24. Report

Report should be available from the chat menu.

```text
Report stranger

Why are you reporting this person?

○ Harassment
○ Spam
○ Sexual / inappropriate content
○ Threats
○ Hate / abuse
○ Scam / fraud
○ Other

[ Cancel ] [ Submit Report ]
```

Use restrained red for destructive emphasis.

After submission:

```text
Report submitted.

[ Find another stranger ]
```

---

# 25. Block

```text
Block stranger?

You'll leave this conversation and
won't be matched with this active session again.

[ Cancel ] [ Block ]
```

Do not promise permanent identity-level blocking because there are no accounts.

---

# 26. Safety

Short safety reminder in chat/settings:

> Don't share your real name, address, phone number, passwords, payment details, or other private information.

Dedicated Safety page should provide more detail.

Safety should feel trustworthy rather than frightening.

---

# 27. Settings

Settings remain intentionally small.

```text
Settings

Appearance
  Light
  Dark
  System

Language
  English

Safety
  Safety information

Legal
  Privacy
  Terms
  Cookies (if applicable)
```

No account/profile settings.

---

# 28. Theme

Supported:

```text
Light
Dark
System
```

The user's choice is persisted locally.

### Light

Use:

```text
Cream
White
Soft pink
Plum typography
Coral accent
```

### Dark

Use:

```text
Deep plum
Dark purple
Muted rose
Soft cream text
Coral accent
```

Do not convert dark mode into pure black + neon red.

---

# 29. Language

Language selection must be user-friendly.

Example:

```text
Language

English
हिन्दी
বাংলা
...
```

The final list should contain only languages with implemented translations.

All UI copy should use translation keys.

Example:

```text
common.startChat
common.nextStranger
chat.send
chat.report
chat.block
matching.searching
settings.language
settings.theme
```

---

# 30. Responsive Layout

## Mobile

Prioritize:

1. Chat
2. Composer
3. Next Stranger
4. Safety actions

Use a full-height app shell.

## Tablet

Use a centered chat layout with increased spacing.

## Desktop

Use a constrained chat width.

Example:

```text
┌─────────────────────────────────────┐
│                                     │
│       ┌─────────────────────┐       │
│       │                     │       │
│       │       CHAT          │       │
│       │                     │       │
│       └─────────────────────┘       │
│                                     │
└─────────────────────────────────────┘
```

---

# 31. Mobile Keyboard

The message composer must remain visible when the software keyboard opens.

Use modern viewport handling where appropriate:

```text
dvh
svh
lvh
```

Do not depend exclusively on traditional `100vh`.

The latest message should remain reachable.

---

# 32. Accessibility

Required:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Accessible labels
- Screen-reader status announcements
- Sufficient contrast
- Color is not the only state indicator
- Reduced-motion support
- Touch-friendly targets

Important live announcements:

```text
Match found
New message
Connection lost
Report submitted
Message blocked
```

---

# 33. Motion

Motion should communicate state.

Use:

- Gentle matchmaking pulse
- Quick match-found transition
- Message entrance
- Button press
- Modal entrance
- Connection state transition

Avoid:

- Constant animated backgrounds
- Particle effects
- Excessive bouncing
- Long transitions

Respect:

```text
prefers-reduced-motion
```

---

# 34. Cards and Surfaces

Use cards for:

- Guest setup
- Settings
- Report modal
- Safety content

Do not put cards inside cards unnecessarily.

The chat should rely on:

```text
Whitespace
Borders
Surface contrast
Message bubbles
```

rather than heavy card styling.

---

# 35. Shadows

Very subtle.

Use shadows primarily for:

- Modal
- Floating elements
- Elevated controls

Do not use large blurred shadows.

---

# 36. Border Radius

Use a consistent scale:

```text
8px
12px
16px
20px
```

Avoid excessive pill shapes.

---

# 37. Spacing

Use a consistent scale:

```text
4
8
12
16
20
24
32
40
48
64
```

Prefer whitespace over decorative separators.

---

# 38. Button Hierarchy

### Primary

```text
Start Chat
Submit Report
Confirm
```

Use coral/pink.

### Secondary

```text
Next Stranger
Cancel
Settings
```

Use neutral or soft-pink surfaces.

### Destructive

```text
Block
Leave
```

Use restrained red.

---

# 39. Input Design

Inputs should have:

- Visible labels
- Clear focus state
- Comfortable height
- Error state
- Accessible label
- No dependence on placeholder-only labels

Nickname:

```text
Nickname

[ Stranger123 ]
```

Validation should be short and direct.

---

# 40. Trust Signals

The landing page should visibly communicate:

```text
No registration
Free
Anonymous by default
Safety tools
```

A small line near the CTA can say:

```text
No account. No profile. Just chat.
```

Avoid exaggerated claims like:

```text
100% anonymous
100% safe
Nobody can save your messages
```

Those claims cannot be guaranteed.

---

# 41. UX Improvements Over Chatib

Use Chatib only as a usability reference.

randomcaht.online should improve on the baseline through:

### Faster first action

Get the visitor to setup/matching quickly.

### Better visual hierarchy

Use strong typography, whitespace, and a coherent sunset palette.

### Better waiting state

Clearly show:

```text
Searching for a stranger...
```

rather than leaving the user uncertain.

### Better mobile UX

Keyboard-safe composer and touch-friendly controls.

### Better safety

Report and Block are easy to locate.

### Better personalization

Light/Dark/System and language selection.

### Better trust

Clear no-account positioning and honest privacy language.

### Better modern feel

A refined sunset gradient system instead of dense or dated layouts.

---

# 42. UI State Model

The main product flow must visually support:

```text
LANDING
   ↓
SETUP
   ↓
VALIDATING
   ↓
MATCHING
   ↓
MATCH FOUND
   ↓
CONNECTING
   ↓
CONNECTED
   ↓
NORMAL CHAT
   ↓
NEXT / LEAVE
   ↓
DISCONNECTED
```

Additional states:

```text
ERROR
OFFLINE
RATE LIMITED
SESSION EXPIRED
COLD MESSAGE LIMIT
REPORT SUBMITTED
```

Every state needs intentional UI.

---

# 43. Required Screens

```text
01 Landing
02 Guest Setup
03 Matching
04 Match Found / Connecting
05 Active Chat
06 Cold Message Limit
07 Stranger Disconnected
08 Leave Confirmation
09 Report
10 Block
11 Settings
12 Safety
13 Privacy
14 Terms
15 Cookie Policy if applicable
16 Offline
17 Error
18 Rate Limited
```

---

# 44. Implementation Rules

1. Follow `DESIGN.md` over this document when conflicts exist.
2. Use the defined color tokens.
3. Do not introduce random colors.
4. Use SVG icons consistently.
5. Do not use emoji as primary interface icons.
6. Keep gradients strategic.
7. Keep the chat area readable.
8. Build mobile and desktop states together.
9. Test light and dark themes.
10. Use semantic HTML.
11. Keep all UI strings i18n-ready.
12. Avoid unnecessary dependencies.
13. Do not copy Chatib branding, layout, code, or visual identity.
14. Do not scaffold out-of-scope features.

---

# 45. Definition of Done

- [ ] Landing page clearly communicates anonymous free chat.
- [ ] Start Chat is the dominant action.
- [ ] Guest setup requires no account.
- [ ] Nickname validation is clear.
- [ ] Male/Female selection works.
- [ ] Male/Female/Anyone preference works.
- [ ] Matching state is clear.
- [ ] Chat UI is readable and focused.
- [ ] Two-message cold-message gate is understandable.
- [ ] Next Stranger is obvious.
- [ ] Leave/disconnect states are clear.
- [ ] Report and Block are accessible.
- [ ] Light/Dark/System work.
- [ ] Language selector works for implemented translations.
- [ ] Mobile keyboard does not obscure the composer.
- [ ] Responsive layouts work on phone/tablet/desktop.
- [ ] Accessibility basics are implemented.
- [ ] SVG icon system is consistent.
- [ ] Sunset palette is used strategically.
- [ ] UI does not become overly pink or neon.
- [ ] `DESIGN.md` remains the final visual authority.

---

# 46. Final Design Direction

The final personality should sit here:

```text
             MODERN
                │
                │
     CLEAN ─────┼───── SOCIAL
                │
                │
          SUBTLY SENSUAL
                │
                │
             WARM
```

The visual signature is:

```text
#492351  Deep Plum
     ↓
#7F376D  Plum
     ↓
#D55882  Rose
     ↓
#FF808A  Coral
     ↓
#FFBF92  Peach
     ↓
#F6E5D9  Cream
```

The landing page can feel like a sunset.

The chat should feel like a calm room inside that sunset.

**Design principle:**

> **Make the first impression emotional, but make the conversation interface calm.**
