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


# 48. Reference-Inspired UI Element Update — Logo, Country UI, Compact People Rows, and Icon System

This section adds the specific UI elements requested from the supplied reference screenshots. The screenshots are treated as interaction/information-architecture references only; RandomChat keeps its own branding, sunset/plum visual system, typography, spacing, and component styling.

## 48.1 RandomChat Logo

Use the supplied RandomChat logo as the primary product mark.

Required placements:

- Desktop application header or compact navigation rail
- Mobile top bar
- Landing / guest setup
- Random Chat matching state
- Chat header where space permits
- Empty / connection states where a brand mark improves recognition
- Favicon/app icon derived from the supplied logo mark

Logo rules:

- Do not replace the supplied brand mark with a generic chat-bubble logo.
- Keep the logo visually crisp at small sizes.
- Provide a compact mark-only variant for narrow mobile/desktop navigation.
- Provide a full logo + wordmark variant where horizontal space allows.
- Preserve clear space around the logo.
- Do not place the logo inside an unnecessary card.
- The logo must remain readable in both light and dark themes.

## 48.2 Country Selector — Reference Pattern

The country selector should follow the useful interaction pattern shown in the supplied reference: compact selected-country control, searchable country list, flags, and a scrollable result list.

Desktop example:

```text
┌──────────────────────────────┐
│ 🇮🇳 India                 ▾ │
└──────────────────────────────┘

When opened:

┌──────────────────────────────┐
│ 🔍 Search country...         │
├──────────────────────────────┤
│ 🇦🇩 Andorra                  │
│ 🇦🇪 United Arab Emirates     │
│ 🇦🇫 Afghanistan              │
│ 🇦🇬 Antigua and Barbuda      │
│ 🇦🇮 Anguilla                 │
│ 🇦🇱 Albania                  │
│ 🇦🇲 Armenia                  │
│ ...                          │
└──────────────────────────────┘
```

Country selector requirements:

- Show the official country flag beside each country.
- Show the full country name in the dropdown.
- Include a search field.
- Search by country name.
- Allow keyboard navigation on desktop.
- Allow touch scrolling on mobile.
- Highlight the selected country.
- Include an explicit `All Countries` option where the control is used as a People filter.
- Preserve the selected country during the temporary session where appropriate.
- Do not expose region-group labels as a substitute for actual countries unless region grouping is intentionally added as a separate feature.
- The country selector must work in Guest Setup and People filtering.
- In the People list, use the same country dataset and flag rendering component.

Mobile selected state:

```text
┌─────────────────────────────┐
│ 🇮🇳 India               ▾  │
└─────────────────────────────┘
```

People filter state:

```text
┌─────────────────────────────┐
│ 🌐 All Countries        ▾  │
└─────────────────────────────┘
```

## 48.3 Country Flags in People Rows

Country should be visible directly in the compact People list without opening a profile.

Preferred row:

```text
┌──────────────────────────────────────┐
│  R   roleplaymarried             🇦🇲 │
│      19 Yrs · Female · 🟢 Online     │
└──────────────────────────────────────┘
```

For maximum mobile density, the metadata may be reduced to:

```text
R   roleplaymarried                 🇦🇲
    19 Yrs · Female · 🟢
```

Rules:

- Flag remains aligned to the trailing edge.
- Do not replace the flag with country text when density is the priority.
- Country name remains available in the chat header and accessible label.
- Hover/tap/focus can expose the country name where useful.
- Flags must have accessible text equivalents; do not rely on the image/flag alone to communicate country.

## 48.4 Compact People Directory — Reference-Inspired

The People page should visually borrow the density and scanning behavior of the supplied people-list screenshot.

Target structure:

```text
┌────────────────────────────────────────┐
│ 🟢 4,568 online                  🇮🇳 ▾ │
├────────────────────────────────────────┤
│ 🔍 Search people...              ⚙     │
├────────────────────────────────────────┤
│                                        │
│  R   roleplaymarried               🇦🇲 │
│      19 Yrs · Female · 🟢 Online       │
│────────────────────────────────────────│
│  H   hozes                         🇧🇾 │
│      25 Yrs · Male · 🟢 Online         │
│────────────────────────────────────────│
│  N   NINNNA                        🇬🇪 │
│      38 Yrs · Female · 🟢 Online       │
│────────────────────────────────────────│
│  P   Poiuy                         🇬🇪 │
│      30 Yrs · Male · 🟢 Online         │
└────────────────────────────────────────┘
```

The list must prioritize:

1. Username
2. Age
3. Gender
4. Online state
5. Country flag

Do not turn these rows into large social profiles.

## 48.5 Avatar / Initial Treatment

Use compact circular initial avatars as the default anonymous identity treatment.

Examples:

```text
R
H
N
P
A
B
```

Avatar rules:

- 40–44px target on mobile.
- Initial is centered and highly legible.
- Background may use a restrained RandomChat gradient or generated accent from the existing palette.
- Add a small green online indicator attached to the avatar.
- Do not use real-person profile photography by default.
- Do not imply that an avatar is a permanent profile.
- Keep avatar treatment consistent between People and Direct Chat.

## 48.6 Icon System — Inspired by the Reference, Rebuilt for RandomChat

The supplied reference uses many small, recognizable navigation/action icons. RandomChat should adopt the principle of compact icon-driven navigation while using its own consistent SVG icon set.

Primary navigation:

```text
People        → people/users icon
Random Chat   → shuffle/random icon
Voice         → microphone icon
Chats         → chat/message icon
Settings      → gear icon
```

People tools:

```text
Search        → magnifying glass
Filters       → sliders/tune
Country       → globe
Gender        → gender/users
Age           → calendar or age-control icon
Online        → status dot
```

Chat tools:

```text
Back          → arrow-left
More          → three-dot menu
Send          → paper-plane/arrow
Request Voice → microphone
Next Stranger → shuffle/next
Report        → flag/alert
Block         → block/prohibited symbol
```

Safety/system:

```text
Safety        → shield
Warning       → warning triangle
Offline       → connection/offline symbol
Error         → alert circle
```

Icon rules:

- Use one coherent SVG icon family.
- Prefer simple 20–24px line icons for navigation.
- Use filled/stronger variants only for selected or active states where appropriate.
- Every icon-only control requires an accessible label.
- Do not use emoji as primary interface icons.
- Do not mix unrelated icon styles.
- Do not reproduce the exact icons from the supplied reference.
- Icons should support text hierarchy rather than replace important labels on mobile.

## 48.7 Desktop Navigation Rail

Use a narrow rail rather than the large multi-section navigation shown in older chat websites.

```text
┌────────┐
│ [ RC ] │
│        │
│  👥    │  People
│        │
│  🔀    │  Random
│        │
│  🎙    │  Voice
│        │
│  💬    │  Chats
│        │
│  ⚙     │  Settings
└────────┘
```

Implementation note: the displayed symbols above are conceptual placeholders. The production interface must use the approved SVG icon family.

On wider desktop, the rail may reveal text labels on hover or through an expanded state, but it should remain visually compact.

## 48.8 Mobile Navigation

Do not copy the reference site's crowded row of tiny icons.

Use a small number of high-value destinations:

```text
┌─────────────────────────────────────┐
│ People │ Chats │ Random │ Settings  │
└─────────────────────────────────────┘
```

The exact destinations can be adjusted if the final product removes a separate Chats/Voice destination, but the mobile navigation must remain compact and touch-friendly.

Voice should primarily be exposed inside an active conversation as `Request Voice`, because voice is an optional escalation from text rather than the default entry mode.

## 48.9 People Header

The People header should combine the strongest elements from the supplied screenshots:

```text
┌─────────────────────────────────────────┐
│ 🟢 4,568 online                 🇮🇳 ▾   │
├─────────────────────────────────────────┤
│ 🔍 Search people...                ⚙    │
└─────────────────────────────────────────┘
```

Requirements:

- Online count is prominent but not animated continuously.
- Country selector/filter is compact.
- Search and filter are immediately discoverable.
- The filter button opens the full People filter UI.
- On mobile, the country selector may move into the filter sheet if horizontal space is limited.

## 48.10 Filter Button

Use a sliders/tune SVG icon rather than a generic gear for People filtering.

Preferred:

```text
Search people...                    [≡]
```

where `[≡]` represents a sliders/tune icon.

Label:

```text
Filters
```

when sufficient desktop space exists.

Active state:

```text
Filters (3)
```

or:

```text
Female · 18–35 · India
```

Keep the compact presentation already defined in Sections 10, 11, and 29.

## 48.11 Reference-Inspired Information Density

The supplied screenshots demonstrate that a chat site can show a large number of available users without large cards.

RandomChat should therefore:

- Keep People rows approximately 64–76px high on mobile.
- Keep separators subtle.
- Keep avatar sizes compact.
- Align flags consistently.
- Keep username and age near the avatar.
- Avoid oversized decorative illustrations inside the list.
- Avoid bios and social metrics.
- Use virtualized/incremental rendering for very large populations.

This is an information-density decision, not a request to reproduce the reference site's visual design.

## 48.12 Country + Gender + Age Combination

The People toolbar should make the requested browse controls immediately understandable:

```text
Search people...

[ Everyone ] [ Male ] [ Female ]

Age
18 ─────────────── 35

🌐 All Countries ▾
```

On desktop, these can be visible in the main toolbar/filter area.

On mobile, keep the People list visible and open the controls in the existing bottom-sheet filter pattern.

## 48.13 Direct Chat Entry From People

Selecting any row should open direct chat immediately.

The chat header should retain the selected person's essential context:

```text
←  roleplaymarried
   19 · Female · 🇦🇲
   🟢 Online
```

Do not show a large profile page between People and Chat.

## 48.14 Visual Priority

When implementing these reference-inspired elements, the priority is:

```text
RandomChat logo
      ↓
People / Random navigation
      ↓
Online count
      ↓
Search
      ↓
Filters / Country
      ↓
Compact people rows
      ↓
Country flags + status
      ↓
Direct chat
```

The interface should feel like a modern anonymous live lobby, not a traditional social-network profile directory.

## 48.15 Explicit Reference Mapping

The requested screenshot elements map to RandomChat as follows:

```text
Supplied logo screenshot
        ↓
RandomChat brand/logo component

Country dropdown screenshot
        ↓
Reusable CountrySelector + searchable flag list

Compact people screenshot
        ↓
PeopleLobby + compact PersonRow + online indicator + country flag

Chat-room/icon screenshot
        ↓
Compact SVG navigation/action icon system
```

Do not copy the source site's advertising, old-fashioned typography, crowded navigation, exact colors, or exact layouts.

## 48.16 Updated Acceptance Criteria

The implementation is not complete unless:

- [ ] Supplied RandomChat logo is used as the primary brand mark.
- [ ] Compact logo variant exists for narrow navigation.
- [ ] Country selector supports flags and country names.
- [ ] Country selector has country search.
- [ ] `All Countries` exists for People filtering.
- [ ] People rows show country flags.
- [ ] People rows use compact anonymous initial avatars.
- [ ] People rows show online status.
- [ ] People rows show username and age.
- [ ] Gender can be displayed as metadata and filtered.
- [ ] People page has Search.
- [ ] People page has a dedicated Filters control.
- [ ] Age filter supports the requested 18–35 range subject to the final age policy.
- [ ] Desktop uses a compact icon-led navigation rail.
- [ ] Mobile uses compact bottom navigation.
- [ ] Production icons are SVG and consistently styled.
- [ ] Emoji are not used as primary interface icons.
- [ ] Clicking a person goes directly to chat.
- [ ] Country information remains consistent between setup, People, filters, and chat.
- [ ] Random Chat remains separate and exposes no People filters.
- [ ] Reference screenshots influence information architecture and density only.
- [ ] RandomChat's own branding and sunset/plum visual system remain intact.

