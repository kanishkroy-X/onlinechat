# RandomChat — UI/UX Specification v3
## People Lobby + Filtered Browse + Separate Random Chat + Text/Voice

**Product:** RandomChat  
**Domain:** randomcaht.online  
**Document status:** Proposed updated UI/UX source  
**Supersedes:** Existing `randomcaht_online_UI-UX(1)(2).md` where this document conflicts with it  
**Primary reference:** The supplied Chatix/Chatib-style screenshots are used for information architecture and compactness only. Do not copy branding, code, exact visual identity, or exact layout.

---

# 1. Purpose

This update keeps the strongest parts of the existing RandomChat UI/UX specification — anonymous temporary sessions, clean chat, the sunset/plum visual language, mobile-first behavior, safety controls, and purposeful motion — while adding the new product experience requested for the People lobby.

The new experience has **two clearly different ways to meet people**:

1. **People** — browse people who are currently online, search them, and optionally filter by gender, age, and country.
2. **Random Chat** — enter an entirely separate unfiltered matchmaking mode and be connected to a random available stranger.

The People screen should feel like a compact live lobby. The Random Chat screen should feel like an intentional matchmaking experience.

Core product flow:

```text
Landing
  ↓
Temporary Guest Setup
  ↓
People Lobby
  ├── Search / Filter / Browse online people
  ├── Select a person → Direct chat
  └── Random Chat → Unfiltered random stranger
```

---

# 2. Important Scope Update

The older project documents define the MVP as text-only and list voice chat as out of scope.

This v3 document represents the newer product decision:

**Voice chat is now an approved product feature for the updated experience.**

Voice is optional and must never start automatically.

Voice flow:

```text
Text Chat
   ↓
Either person requests voice
   ↓
Other person receives request
   ↓
Accept / Decline
   ↓
If accepted → Voice Chat
   ↓
Mute / Unmute
   ↓
End Voice
```

If voice implementation is not ready in a particular build, the UI should show a disabled/coming-soon state rather than pretending the feature works.

---

# 3. Product Identity

## Core promise

> **Meet someone new. Start a conversation.**

Supporting message:

> **Browse people or meet a random stranger. No account required.**

Product personality:

- Modern
- Fast
- Anonymous-by-default
- Global
- Social
- Curious
- Friendly
- Safe
- Slightly mysterious
- Premium rather than dated

Do not make the product look like a dating app.

---

# 4. Visual Direction

Retain the existing RandomChat visual system.

The existing UI/UX specification establishes the sunset progression:

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

Use this mainly for:

- Landing
- Guest setup
- Matching states
- Important active states
- Connection visuals
- Voice states
- Empty states
- Small decorative accents

The People lobby and active chat should be calmer and more functional.

Do not make every surface pink or neon.

---

# 5. Entry / Guest Setup

There is **no account creation**.

The user creates a temporary session and provides:

- Username / temporary nickname
- Age
- Gender
- Country

These values are session-level information, not a permanent profile.

Recommended mobile layout:

```text
┌─────────────────────────────┐
│        RandomChat           │
│                             │
│     Meet someone new.       │
│                             │
│ Username                    │
│ ┌─────────────────────────┐ │
│ │ Stranger123             │ │
│ └─────────────────────────┘ │
│                             │
│ Age                         │
│ ┌─────────────────────────┐ │
│ │ 24                   ▾  │ │
│ └─────────────────────────┘ │
│                             │
│ Gender                      │
│ ┌──────────┐ ┌───────────┐ │
│ │  Male    │ │  Female   │ │
│ └──────────┘ └───────────┘ │
│                             │
│ Country                     │
│ ┌─────────────────────────┐ │
│ │ 🇮🇳 India            ▾  │ │
│ └─────────────────────────┘ │
│                             │
│      [ Enter RandomChat ]   │
│                             │
│ No account. Temporary only. │
└─────────────────────────────┘
```

Do not make this look like registration.

Avoid:

- Email
- Password
- Profile photo
- Real name
- Permanent profile language

Age should have an explicit minimum-age policy. Do not silently imply that selecting an age makes the service legally appropriate for every jurisdiction.

---

# 6. People Lobby — PRIMARY NEW SCREEN

After entering the temporary session, the user lands on **People**.

This screen is inspired by the supplied compact Chatix-style screenshot but should be cleaner and more modern.

## Desktop structure

```text
┌──────┬────────────────────────────────────────────────────┐
│      │ 🟢 4,568 online                         🇮🇳 India  │
│  RC  │────────────────────────────────────────────────────│
│      │ 🔍 Search people...                    ⚙ Filters   │
│──────│────────────────────────────────────────────────────│
│ 👥   │                                                    │
│People│  R  Sarah                         24 yrs      🇺🇸 │
│      │     Female · 🟢 Online                            │
│ 💬   │────────────────────────────────────────────────────│
│Chats │  A  Alex                          27 yrs      🇮🇳 │
│      │     Male · 🟢 Online                              │
│ 🎲   │────────────────────────────────────────────────────│
│Random│  E  Emma                          22 yrs      🇬🇧 │
│      │     Female · 🟢 Online                            │
│ 🎙   │────────────────────────────────────────────────────│
│Voice │  J  John                          31 yrs      🇨🇦 │
│      │     Male · 🟢 Online                              │
│ ⚙    │                                                    │
│      │                                                    │
└──────┴────────────────────────────────────────────────────┘
```

### Important

The People lobby is a **browse experience**, not the Random Chat matchmaking screen.

It shows everyone currently available to browse.

---

# 7. People List Information

Each person row should show only useful information:

```text
Avatar / initial
Username
Age
Gender
Online status
Country flag
```

Example:

```text
┌─────────────────────────────────────┐
│  R   Sarah                          │
│      24 · Female · 🟢 Online    🇺🇸 │
└─────────────────────────────────────┘
```

Do not create large profile cards.

Do not add:

- Bio
- Followers
- Likes
- Photos
- Dating score
- Social metrics
- Public profile history

The product is still anonymous and temporary.

---

# 8. Online Status

Use a clear status indicator:

```text
🟢 Online
```

The number at the top should represent the real current online population.

Example:

```text
● 4,568 online
```

Do not continuously animate the number.

The online dot may have a subtle pulse.

---

# 9. Search

The People screen contains:

```text
┌───────────────────────────────────┐
│ 🔍 Search people...               │
└───────────────────────────────────┘
```

Search should match the temporary username.

Examples:

```text
Search: sarah
→ Sarah

Search: 24
→ Do not treat age as username search unless explicitly implemented.

Search: @something
→ Username matching if the product uses @ usernames.
```

Keep search simple.

---

# 10. People Filters

The People screen has a dedicated filter button:

```text
⚙ Filters
```

Filters:

### Gender

```text
○ Everyone
○ Male
○ Female
```

### Age

Default example requested:

```text
18 ─────────────── 35
```

The actual minimum and maximum must follow the product's age policy.

### Country

Support country selection:

```text
☑ India
☑ United States
☑ United Kingdom
☐ Canada
☐ Germany
...
```

Include:

```text
All countries
```

as an explicit option.

The user can combine filters:

```text
Female
18–35
India + USA + UK
```

---

# 11. Filter UX — Mobile

On mobile, filters should open as a bottom sheet.

```text
┌─────────────────────────────┐
│                             │
│       People screen         │
│                             │
│─────────────────────────────│
│          ─────              │
│          Filters            │
│                             │
│ Gender                      │
│ [ Everyone ] [ Male ]       │
│ [ Female ]                  │
│                             │
│ Age                         │
│ 18 ─────────────── 35       │
│                             │
│ Country                     │
│ 🔍 Search country...         │
│                             │
│ ☑ 🇮🇳 India                  │
│ ☑ 🇺🇸 United States          │
│ ☑ 🇬🇧 United Kingdom         │
│                             │
│ [ Reset ] [ Apply Filters ] │
└─────────────────────────────┘
```

Do not use a tiny desktop dropdown on a phone.

---

# 12. Clicking a Person

Tapping a person opens their temporary chat.

Example:

```text
┌─────────────────────────────┐
│ ←  Sarah               ⋯    │
│    24 · Female · 🇺🇸        │
│    🟢 Online                │
├─────────────────────────────┤
│                             │
│ Sarah                       │
│ ┌─────────────────────────┐ │
│ │ Hey                      │ │
│ └─────────────────────────┘ │
│                             │
│                  You        │
│       ┌───────────────────┐ │
│       │ Hi Sarah!         │ │
│       └───────────────────┘ │
│                             │
├─────────────────────────────┤
│ 1 introductory message left │
├─────────────────────────────┤
│ Type a message...       ➤   │
├─────────────────────────────┤
│ 🎙 Request Voice            │
└─────────────────────────────┘
```

---

# 13. Two-Message Cold-Message Gate

This is a core product rule.

Before the other person replies:

```text
Maximum consecutive messages: 2
```

Example:

```text
You → Hey 👋
You → How are you?
```

Now:

```text
You've sent 2 messages.
Wait for a reply before sending another.
```

Send becomes disabled.

When Sarah replies:

```text
Sarah → I'm good!
```

The restriction resets and normal chat resumes.

The server remains authoritative.

Refresh, reconnect, or another tab must not bypass the limit.

---

# 14. Normal Chat

After a reply:

```text
NORMAL CHAT
```

No artificial two-message restriction remains for that exchange.

The chat should prioritize:

1. Conversation
2. Composer
3. Next Stranger
4. Voice
5. Safety actions

Do not clutter the screen with profile information.

---

# 15. Voice Request

Either person can request a voice chat.

Button:

```text
🎙 Request Voice
```

When requested:

```text
┌─────────────────────────────┐
│      Voice chat request     │
│                             │
│ Sarah wants to voice chat.  │
│                             │
│ [ Decline ]   [ Accept ]    │
└─────────────────────────────┘
```

Never activate the microphone automatically.

The receiving user must explicitly accept.

---

# 16. Voice Chat

After acceptance:

```text
┌─────────────────────────────┐
│ ← Voice Chat          ⋯     │
├─────────────────────────────┤
│                             │
│             Sarah           │
│             24              │
│             🇺🇸             │
│                             │
│          ◯  🎙  ◯           │
│       audio-reactive rings  │
│                             │
│         01:24               │
│                             │
│  [ 🔇 Mute ]  [ End Call ] │
│                             │
└─────────────────────────────┘
```

Voice UI should be more atmospheric than text chat but still calm.

Use audio-responsive rings.

Never autoplay sound before the user accepts the call.

---

# 17. Voice States

Required states:

```text
Voice request
    ↓
Waiting for acceptance
    ↓
Connected
    ↓
Muted / Unmuted
    ↓
Other person disconnected
    ↓
Voice ended
```

If the other person declines:

```text
Voice request declined.
```

Return to text chat.

If the other person leaves:

```text
Sarah left the chat.

[ Find Another Stranger ]
[ Back to People ]
```

---

# 18. Separate Random Chat Mode — PRIMARY NEW FEATURE

Random Chat must be visually and conceptually separate from People.

### People

> Choose who you want to talk to.

### Random Chat

> Let RandomChat choose someone for you.

Random Chat has **no user filters**.

No:

- Gender filter
- Age filter
- Country filter
- Search
- Person selection

The matching system can still use whatever compatibility rules the product internally supports, but the Random Chat UI must not expose browse filters.

---

# 19. Random Chat Entry

Navigation:

```text
🎲 Random Chat
```

Mobile bottom navigation can show:

```text
┌─────────────────────────────┐
│ 👥 People  💬 Chats  🎲     │
│                      Random │
└─────────────────────────────┘
```

Random Chat should be one tap away.

---

# 20. Random Chat Matching Screen

Recommended:

```text
┌─────────────────────────────┐
│ ← Random Chat               │
├─────────────────────────────┤
│                             │
│                             │
│          ◯                 │
│       ◯  💬  ◯             │
│          ◯                 │
│                             │
│     Finding someone...      │
│                             │
│  Matching you with a        │
│  random available stranger. │
│                             │
│                             │
│       [ Cancel ]            │
│                             │
└─────────────────────────────┘
```

Do not show:

```text
Male / Female
Age
Country
```

as selectable filters here.

---

# 21. Random Match Found

Use a short match-found state:

```text
Stranger found

     R       S
      \     /
       \ ● /
        \ /
```

Then transition directly into chat.

Target perceived transition:

```text
500–700ms
```

Do not add confetti.

---

# 22. Find Another Stranger

This action is central to both random and direct chat.

When the current stranger leaves:

```text
┌─────────────────────────────┐
│                             │
│       Sarah left.           │
│                             │
│ [ Find Another Stranger ]   │
│                             │
│ [ Back to People ]          │
└─────────────────────────────┘
```

For Random Chat:

```text
Current stranger
      ↓
Find Another Stranger
      ↓
Finding someone...
      ↓
New stranger
```

Do not send the user back to the People screen unless they explicitly choose it.

---

# 23. People → Chat → Random

The navigation relationship should be:

```text
People
  ├── Search
  ├── Filter
  └── Person
        ↓
       Chat
        ↓
  Find Another Stranger
        ↓
   Random matching
```

The Random tab independently does:

```text
Random Chat
     ↓
No filters
     ↓
Find stranger
     ↓
Chat
```

This keeps browsing and random matching from becoming the same experience.

---

# 24. Mobile Application Shell

Mobile should prioritize content over navigation chrome.

Recommended:

```text
┌─────────────────────────────┐
│ Top bar                     │
├─────────────────────────────┤
│                             │
│        Main content         │
│                             │
│                             │
├─────────────────────────────┤
│ People │ Chats │ Random │ Me│
└─────────────────────────────┘
```

Do not reproduce the old Chatib mobile navigation bar with many tiny icons.

The new navigation should be significantly cleaner.

---

# 25. Desktop Application Shell

Desktop can use a compact left navigation rail:

```text
┌──────┬────────────────────────────────────────┐
│  RC  │ Main content                           │
│      │                                        │
│ 👥   │                                        │
│      │                                        │
│ 💬   │                                        │
│      │                                        │
│ 🎲   │                                        │
│      │                                        │
│ 🎙   │                                        │
│      │                                        │
│ ⚙    │                                        │
└──────┴────────────────────────────────────────┘
```

Keep the rail narrow.

Do not build a large SaaS-style sidebar.

---

# 26. Recommended People Row Dimensions

Mobile target:

```text
Row height: approximately 64–76px
Horizontal padding: 12–16px
Avatar: 40–44px
Username: 14–16px
Metadata: 12–13px
Flag: 20–24px
```

The exact values can adapt to the viewport.

The objective is to show many people without making the list cramped.

---

# 27. Avatar System

Because there are no permanent profile photos, use:

- Initial-based avatars
- Abstract connection avatars
- Generated color/gradient backgrounds from the design system

Example:

```text
R
S
A
E
```

Do not make avatars look like dating-profile photos.

---

# 28. People List States

Required:

### Loading

```text
●
● ●
● ● ●
```

or a subtle connection-orb animation.

### No people

```text
No one matches these filters.

[ Clear Filters ]
```

### No search result

```text
No people found.

Try a different name or remove a filter.
```

### Offline

```text
You're offline.

Reconnect to see people online.
```

### Large population

Use virtualized/incremental rendering if needed.

Do not attempt to render thousands of rows into the DOM at once.

---

# 29. Search + Filter Behavior

Filters should update the list without requiring a full page reload.

Example:

```text
All people
   ↓
Female
   ↓
Female + 18–35
   ↓
Female + 18–35 + India
```

Show the active filter state compactly:

```text
Filters (3)
```

or:

```text
Female · 18–35 · India
```

Do not use huge filter chips that consume the screen.

---

# 30. Filter Persistence

During the current temporary session:

- Keep selected People filters while navigating People → Chat → People.
- Random Chat ignores those filters.
- Returning to People restores the previous People filters.

Filters should not become permanent user profile data.

---

# 31. Chat Header

Direct People chat:

```text
←  Sarah
   24 · Female · 🇺🇸
   🟢 Online
```

Random chat:

```text
←  Stranger
   🟢 Online
```

Avoid exposing more personal information than necessary.

---

# 32. Chat Actions

Primary:

```text
Send
```

Secondary:

```text
Next Stranger
Request Voice
```

Safety:

```text
Report
Block
```

The menu can contain:

```text
⋯
 ├ Report
 └ Block
```

Do not hide Next Stranger.

---

# 33. Safety

Safety must remain visible without dominating the product.

Short reminder:

> Don't share your real name, address, phone number, passwords, payment details, or other private information.

Report reasons:

- Harassment
- Spam
- Sexual / inappropriate content
- Threats
- Hate / abuse
- Scam / fraud
- Other

Block should terminate the active conversation and prevent immediate rematching where technically supported.

Do not promise permanent identity-level blocking because sessions are temporary.

---

# 34. Motion

Retain the existing RandomChat motion language.

Principle:

> Animation should explain interaction, not compete with it.

Use:

- Small online pulse
- 30–40ms stagger for People rows
- 150–220ms micro interactions
- 250–350ms bottom sheets
- 500–700ms match transition
- 1.5–2.5s connection-orb matching loop
- Audio-responsive voice rings

Avoid:

- Bouncing buttons
- Constant particles
- Huge transitions
- Confetti
- Excessive neon flashes
- Animations that delay typing

The existing motion specification explicitly recommends a reusable connection-orb language across finding, match found, voice, next stranger, loading, and empty states.

---

# 35. Responsive Rules

### Mobile: 320–767px

Prioritize:

- Compact People list
- Bottom navigation
- Bottom-sheet filters
- Full-height chat
- Keyboard-safe composer
- Touch targets
- Reduced ambient effects

### Tablet: 768–1023px

Use:

- Compact panels
- Larger list density
- More breathing room
- Optional two-column layouts where useful

### Desktop: 1024px+

Use:

- Left navigation rail
- Constrained main content
- Hover states
- Search + filters in one horizontal toolbar
- More generous spacing

### Large desktop: 1440px+

Do not stretch the chat to the full width.

Keep content constrained and readable.

---

# 36. Mobile Keyboard

The composer must remain visible when the keyboard opens.

Use modern viewport units where appropriate:

```text
dvh
svh
lvh
```

Do not depend exclusively on `100vh`.

The latest message must remain reachable.

---

# 37. Accessibility

Required:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Accessible labels
- Screen-reader status announcements
- Sufficient contrast
- Do not use color as the only state indicator
- Reduced-motion support
- Touch-friendly controls

Important announcements:

```text
Match found
New message
Voice request
Voice connected
Connection lost
Stranger disconnected
Report submitted
Message blocked
```

---

# 38. Dark Theme

Use the existing dark palette:

```text
Dark Background: #241622
Dark Surface:    #301B2D
Dark Elevated:   #3B2140
Dark Text:       #FFF7F5
Secondary Text:  #D8C7CF
Border:          #58374F
```

The People lobby should be especially restrained in dark mode.

Use coral/pink only for selected states and important actions.

---

# 39. Light Theme

Use:

```text
Cream
White
Soft pink
Plum typography
Coral accent
```

The People lobby should remain high contrast and easy to scan.

---

# 40. Design Rules From the Existing UI/UX Spec

Retain these principles:

- No unnecessary friction.
- Make anonymity obvious.
- Keep chat dominant once matched.
- Safety without fear.
- Mobile first.
- Use SVG icons.
- Avoid emoji as primary interface icons.
- Keep gradients strategic.
- Use consistent spacing.
- Avoid excessive pill shapes.
- Avoid cards inside cards.
- Keep shadows subtle.
- Use typography for hierarchy.

The original UI/UX specification explicitly emphasizes clean, readable chat surfaces and a calmer conversation interface rather than a decorative poster.

---

# 41. Required Screens — Updated

## Entry

01. Landing  
02. Guest Setup  
03. Age/Safety Gate if required  

## People

04. People Lobby  
05. People Search  
06. People Filters  
07. People Empty State  
08. People Loading  

## Random

09. Random Chat Entry  
10. Random Matching  
11. Random Match Found  

## Chat

12. Direct Person Chat  
13. Random Stranger Chat  
14. Cold Message Limit  
15. Voice Request  
16. Voice Connecting  
17. Voice Active  
18. Voice Muted  
19. Voice Declined  
20. Stranger Disconnected  
21. Find Another Stranger  
22. Leave Confirmation  

## Safety / System

23. Report  
24. Block  
25. Report Confirmation  
26. Offline  
27. Error  
28. Rate Limited  
29. Session Expired  

## Settings / Legal

30. Settings  
31. Safety  
32. Privacy  
33. Terms  
34. Cookie Policy where applicable  

---

# 42. Updated Core State Model

```text
LANDING
   ↓
GUEST SETUP
   ↓
PEOPLE LOBBY
   ├───────────────┐
   ↓               ↓
BROWSE          RANDOM CHAT
   ↓               ↓
PERSON          MATCHING
   ↓               ↓
DIRECT CHAT     RANDOM CHAT
   └───────┬───────┘
           ↓
      VOICE REQUEST
           ↓
     VOICE ACCEPTED
           ↓
       VOICE CHAT
           ↓
     LEAVE / DISCONNECT
           ↓
 FIND ANOTHER STRANGER
           ↓
       RANDOM CHAT
```

---

# 43. Product Logic Clarification

There are now two different concepts that must not be mixed in the UI.

### Browse mode

```text
People
→ Search
→ Filters
→ Select person
→ Chat
```

### Random mode

```text
Random Chat
→ No filters
→ Automatic stranger selection
→ Chat
```

This distinction should be visible in navigation, page titles, empty states, and matching screens.

---

# 44. What Should NOT Be Copied From the Reference Screens

The supplied screenshots are useful because they demonstrate:

- Compact user rows
- Online count
- Search
- Filter access
- Country flags
- Dense mobile information
- Simple person selection

But RandomChat should not copy:

- Exact navigation
- Exact colors
- Exact typography
- Exact icons
- Exact spacing
- Exact branding
- Exact wording
- Exact layout

Use the screenshots as **information architecture inspiration**, then apply RandomChat's own visual system.

---

# 45. Final UX Target

The final product should feel like:

```text
OPEN
  ↓
SETUP
  ↓
PEOPLE
  ↓
See everyone online
  ↓
Search / Filter / Choose
  ↓
CHAT
  ↓
2-message cold gate
  ↓
Reply
  ↓
Normal chat
  ↓
Optional voice
```

And independently:

```text
OPEN
  ↓
SETUP
  ↓
RANDOM CHAT
  ↓
No filters
  ↓
Finding someone...
  ↓
STRANGER
  ↓
CHAT / VOICE
  ↓
LEAVE
  ↓
FIND ANOTHER STRANGER
```

The People lobby is for **choice**.

Random Chat is for **serendipity**.

The chat is for **conversation**.

Voice is an **optional escalation from text**, never the default.

---

# 46. Implementation Priority

### P0

- Guest setup
- People lobby
- Online status
- Search
- Gender filter
- Age filter
- Country filter
- Person selection
- Direct chat
- Two-message gate
- Random Chat mode
- Random matching
- Next / Find Another Stranger
- Leave / disconnect
- Report / block
- Responsive mobile layout

### P1

- Voice request
- Voice call
- Audio-reactive voice UI
- Persistent People filters during the temporary session
- Advanced list loading states

### P2

- More elaborate ambient motion
- Advanced onboarding
- Additional decorative effects

---

# 47. Final Design Principle

> **Make the People screen compact and useful. Make Random Chat effortless. Make the chat calm.**

The reference screenshots solve the problem of showing many people efficiently.

RandomChat should take that information architecture, combine it with the existing sunset visual system, and produce a cleaner mobile-first experience that feels like a modern product rather than an old chat website.

