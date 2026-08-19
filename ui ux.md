# RandomChat --- UI/UX Design Specification

**Document type:** Product UI/UX specification + design handoff\
**Product:** RandomChat\
**Primary purpose:** Help people meet and talk to strangers through
anonymous 1:1 text chat and optional random voice calls.\
**Design basis:** Previous RandomChat redesign discussions, provided
Chatib.us mobile screenshots, Vice City-inspired visual references, the
RandomChat visual storyboard, and the generated UI/UX mood-board
direction.

------------------------------------------------------------------------

## 1. Product Identity

### Product name

**RandomChat**

### Core promise

> **Meet someone new. Start a conversation.**

RandomChat is a stranger-conversation product, not a stranger-video-chat
product.

The primary experience is: 1. Enter RandomChat. 2. Choose text or voice.
3. Optionally set basic matching preferences. 4. Find a random person.
5. Start the conversation. 6. Skip and meet someone else. 7.
Report/block when necessary.

### Product personality

-   Curious
-   Playful
-   Fast
-   Anonymous
-   Global
-   Friendly
-   Safe
-   Slightly mysterious
-   Neon/nightlife inspired

The visual identity should feel premium and modern rather than like a
generic dating app or an old-school chat website.

------------------------------------------------------------------------

# 2. Visual Direction

## 2.1 Primary visual reference

The strongest visual direction comes from the **Vice City-inspired
reference**:

-   Neon night
-   Pink/purple sunset
-   Cyan highlights
-   Palm silhouettes
-   Dark city skyline
-   Water/reflection atmosphere
-   Soft glowing lights
-   Strong contrast between dark UI and luminous accents

The background imagery should be used selectively. It should support the
brand rather than overpower the functional chat UI.

## 2.2 Important design rule

**Do not turn the whole application into a decorative poster.**

The UI should remain usable.

Use the Vice City aesthetic mainly for:

-   Landing/entry screens
-   Empty states
-   Finding-match screens
-   Voice matching screens
-   Safety sections
-   Promotional panels
-   Onboarding
-   Footer/brand areas
-   Background atmosphere

The actual conversation interface should stay clean and readable.

------------------------------------------------------------------------

# 3. Color System

The visual system combines the first reference's neon palette with the
dark atmospheric background from the Vice City references.

## Core palette

  Token            Color       Usage
  ---------------- ----------- ---------------------------------------
  Sunset Pink      `#FF5CA8`   Primary brand/accent
  Vice Cyan        `#00F0FF`   Secondary accent, online state, voice
  Neon Purple      `#BC6CFF`   Secondary CTA/accent
  Miami Peach      `#FFB86B`   Warm highlight, warnings
  Ocean Night      `#0B0F2B`   Primary background
  Deep Plum        `#14102E`   Secondary background
  Dark Surface     `#070B18`   Deep cards/panels
  Border           `#31354A`   UI borders
  Primary Text     `#F7F8FF`   Main text
  Secondary Text   `#9CA7C7`   Supporting text

### Gradient direction

Preferred brand gradient:

`Sunset Pink → Neon Purple → Vice Cyan`

Use gradients primarily for:

-   Primary CTA buttons
-   Logo accents
-   Active navigation
-   Matching animations
-   Small decorative glows

Avoid putting gradients behind large blocks of body text.

------------------------------------------------------------------------

# 4. Background System

## Desktop / large screens

Use:

-   Ocean-night/dark-purple base
-   Subtle pink/purple atmospheric glow
-   Optional Vice City skyline
-   Palm silhouettes
-   Water reflection
-   Soft neon horizon

## Mobile

Do not use a heavy photographic background behind the entire
application.

Instead:

-   Dark solid/gradient base
-   Small atmospheric glow
-   Optional cropped city/palm image on landing or empty states
-   Clean functional surfaces

### Reason

The Chatib.us mobile screenshots demonstrate that mobile stranger-chat
UX needs to prioritize:

-   Navigation
-   People list
-   Search
-   Filters
-   Conversation controls
-   Readability
-   Fast scrolling

Therefore, decorative imagery should never compromise content density.

------------------------------------------------------------------------

# 5. Typography

## Recommended font direction

Use a modern geometric sans-serif similar in character to **Poppins**.

### Hierarchy

-   H1: Bold
-   H2: SemiBold
-   H3: SemiBold
-   Body: Regular
-   Caption: Regular/Medium
-   Buttons: SemiBold

### General rules

-   Large headings should be short.
-   Avoid excessive uppercase text.
-   Use high contrast for usernames and primary actions.
-   Secondary information should be visibly quieter.
-   Keep mobile text comfortably readable.

------------------------------------------------------------------------

# 6. Iconography

Use a consistent modern outline icon system.

Required icon categories:

-   People
-   Chat
-   Voice/microphone
-   Search
-   Filter
-   Inbox
-   Friends
-   Random
-   Rooms
-   Profile
-   Settings
-   Report
-   Block
-   Safety
-   Flag
-   Mute
-   Speaker
-   End call
-   Skip
-   Back
-   Menu
-   Close

Icon treatment:

-   Thin/medium outline
-   Rounded geometry
-   Pink/cyan/purple active states
-   Neutral gray inactive states
-   Avoid mixing unrelated icon styles

------------------------------------------------------------------------

# 7. Responsive Strategy

RandomChat must work across:

-   Mobile
-   Tablet
-   Laptop
-   Desktop
-   Wide desktop

## Breakpoint philosophy

Do not simply shrink the desktop UI.

The information architecture should adapt.

### Mobile

Primary navigation becomes compact.

Recommended bottom navigation:

1.  People
2.  Random
3.  Rooms
4.  Inbox
5.  Profile

A top bar can contain:

-   RandomChat logo
-   Back/menu
-   Current user/match information
-   Overflow menu

### Tablet

Use a compact sidebar or top navigation.

Chat content receives more width than the people list.

### Desktop

Use a multi-column application layout.

Recommended structure:

``` text
┌──────────────────────────────────────────────────────────┐
│ Global header / brand / status                           │
├───────┬───────────────────┬──────────────────────────────┤
│ Side  │ People / rooms    │ Conversation / active view  │
│ nav   │                   │                              │
├───────┴───────────────────┴──────────────────────────────┤
│ Optional contextual panel                                │
└──────────────────────────────────────────────────────────┘
```

------------------------------------------------------------------------

# 8. Information Architecture

## Main navigation

### 1. People

Browse currently available people.

### 2. Random

Start an instant random conversation.

### 3. Rooms

Join topic/community chat rooms.

### 4. Inbox

See existing conversations.

### 5. Profile

Manage basic identity/preferences/settings.

Additional secondary functions:

-   Search
-   Gender preference
-   Country preference
-   History
-   Friends
-   Safety
-   Settings

------------------------------------------------------------------------

# 9. Landing / Home Screen

## Goal

Get a new visitor into a conversation as quickly as possible.

### Recommended hierarchy

``` text
RandomChat

Meet someone new.
Start a conversation.

[ Text Chat ]
[ Voice Call ]

4,568 people online

No account required
Text & Voice
18+ only
```

### Visual treatment

-   Dark ocean-night background
-   Neon sunset/city atmosphere
-   Pink/cyan logo
-   Large but simple CTA
-   Minimal copy

### Primary CTA

**Start RandomChat**

Secondary actions:

-   Text Chat
-   Voice Call

------------------------------------------------------------------------

# 10. Entry Mode Selection

Instead of forcing users through unnecessary registration, show the two
primary experiences immediately.

## Text Chat

Label:

**Text Chat**

Supporting copy:

> Start a random text conversation.

## Voice Call

Label:

**Voice Call**

Supporting copy:

> Start a random voice conversation.

A small online counter establishes activity:

> `● 4,568 people online`

------------------------------------------------------------------------

# 11. Preferences Screen

Users can optionally define matching preferences.

## Sections

### I am

-   Male
-   Female
-   Other

### I want to chat with

-   Male
-   Female
-   Anyone

### Interests

Optional chips:

-   Gaming
-   Music
-   Movies
-   Anime
-   Travel
-   Sports
-   Add more

### Primary CTA

**Continue**

Secondary text:

> You can change this anytime.

### UX rule

Preferences should be optional and fast.

Do not create a long onboarding form.

------------------------------------------------------------------------

# 12. Finding Match Screen

This is one of the major brand moments.

## Content

``` text
Finding someone
awesome for you...

[ animated matching orb ]

Please wait while we
find a great match.

[ Cancel ]
```

## Visual

Use:

-   Neon circular rings
-   Pink/cyan particles
-   Chat-bubble symbol
-   Soft glow
-   Dark background

Animation should communicate activity without being distracting.

------------------------------------------------------------------------

# 13. Match Found Screen

## Content

``` text
It's a Match! 🎉

You're now connected.

[ avatar ]  ♥  [ avatar ]

[ Start Chatting ]

Keep it friendly and fun!
```

### Design goal

Create a small moment of excitement before the conversation begins.

------------------------------------------------------------------------

# 14. Text Chat Screen

This is the core product screen.

## Desktop layout

``` text
┌───────────────┬─────────────────────────────────┐
│ People        │ Stranger_482                    │
│               │ ● Online                        │
│ Search        ├─────────────────────────────────┤
│               │                                 │
│ User list     │        Messages                 │
│               │                                 │
│               │                                 │
│               ├─────────────────────────────────┤
│               │ Type a message...       Send    │
└───────────────┴─────────────────────────────────┘
```

## Header

Show:

-   Avatar
-   Username
-   Online state
-   Overflow menu

Overflow actions:

-   Report
-   Block
-   Safety information

## Messages

Incoming:

Dark neutral bubble.

Outgoing:

Purple/pink gradient or dark purple accent bubble.

## Composer

Include:

-   Text field
-   Emoji
-   Send button

Optional:

-   Voice-call action

## Bottom actions

-   Report
-   Block
-   Next Stranger

### Important

**Next Stranger must be easy to access but visually secondary to sending
a message.**

------------------------------------------------------------------------

# 15. Random Voice Call

Random voice is a first-class feature, not a hidden secondary feature.

## Voice matching screen

``` text
Random Voice

Finding a voice match
for you...

        ◉
     ◉  🎙  ◉
        ◉

Please wait while we
connect you.

[ Cancel ]
```

Use the same matching language and visual system as text matching.

------------------------------------------------------------------------

# 16. Voice Call Connected Screen

## Header

``` text
‹ Random Voice       ⋮

Stranger_482
● Online
```

## Center

Large animated microphone/orb.

Timer:

`01:24`

## Controls

Three primary controls:

-   Mute
-   Speaker
-   End Call

### Secondary controls

-   Report
-   Next Stranger

## Critical UX rule

The **End Call** control must be visually distinct and easy to find.

The **Next Stranger** action should not be confused with End Call.

------------------------------------------------------------------------

# 17. Voice Call Options

Overflow menu can include:

-   Chat via Text
-   Block User
-   Report User
-   End Call
-   Next Stranger

This allows the user to transition from voice to text without leaving
the match.

------------------------------------------------------------------------

# 18. Next Stranger Flow

After ending/skipping:

``` text
Looking for
next stranger...

       [ animated matching orb ]

[ Cancel ]

Or choose a topic
```

This creates a continuous discovery loop.

------------------------------------------------------------------------

# 19. People / Online Screen

This is where the Chatib.us reference is useful.

The reference demonstrates the usefulness of:

-   Online counter
-   Search
-   Gender filter
-   User list
-   Country indicators
-   History
-   Inbox
-   Friends
-   Random

RandomChat should preserve the **functionality**, but redesign the
visual language.

## Desktop

``` text
● 4,568 online      [ India ▾ ]

[ Search people... ] [ Filters ]

────────────────────────
Avatar  RandomRose
        24 · India
                         🇮🇳
────────────────────────
Avatar  MoonWalker
        22 · Canada
                         🇨🇦
────────────────────────
```

### User cards

Show:

-   Avatar
-   Username
-   Approximate age
-   Country
-   Online indicator

Avoid unnecessary profile details.

------------------------------------------------------------------------

# 20. Gender Filter

The Chatib.us reference shows a simple filter menu:

-   All
-   Male
-   Female

RandomChat should keep this interaction model but make it visually
consistent with the new brand.

Possible expanded filtering:

-   All
-   Male
-   Female
-   Other

Use a compact popover on desktop and a bottom sheet on mobile.

------------------------------------------------------------------------

# 21. Search People

The reference shows a dedicated search experience.

Recommended layout:

``` text
Search People

[ Username ]

[ All ]
[ Female ] [ Male ]

[ All Countries ▾ ]

[ SEARCH ]
```

For RandomChat, use:

-   Search input
-   Gender filter
-   Country filter
-   Optional online-only filter

Keep the search form short.

------------------------------------------------------------------------

# 22. Search Results

Results should use compact cards:

``` text
○  mackryw
   28 · US · Texas

○  Carrie5433
   20 · US · New York

○  Sharon39cl
   24 · US · Kansas
```

Primary interaction:

**Tap → open profile/chat**

------------------------------------------------------------------------

# 23. History

The Chatib.us reference shows a dedicated latest-discussions screen.

RandomChat should retain this because users need a way to return to
recent conversations.

### Empty state

``` text
No conversations yet

Start chatting with someone
to see them here.

[ Find People ]
```

Use a neon chat/inbox illustration.

------------------------------------------------------------------------

# 24. Inbox

Inbox should be simple.

### Empty state

``` text
No conversations yet

Start chatting with someone
to see it here.

[ Find People ]
```

### Populated state

Each item:

-   Avatar
-   Username
-   Last message
-   Timestamp
-   Unread badge

------------------------------------------------------------------------

# 25. Friends

Friends can be a registered-user feature.

The reference demonstrates that some advanced functionality can require
registration.

If registration is required, explain the value clearly.

Example:

``` text
This feature is for registered users.

Register now — it's free!

✓ Save friends
✓ Keep your username
✓ Customize your profile
✓ Continue conversations

[ Register Now ]
```

Do not interrupt the user repeatedly with registration prompts.

------------------------------------------------------------------------

# 26. Registration Prompt

The reference's registration modal is useful as a behavioral model.

Recommended redesign:

-   Dark modal
-   Neon border/glow
-   Clear close button
-   3--4 benefits maximum
-   Single primary CTA

### Copy

**Create your free account**

Keep your identity and unlock more ways to connect.

Benefits:

-   Save friends
-   Keep your username
-   Manage preferences
-   Customize your profile

CTA:

**Register Free**

------------------------------------------------------------------------

# 27. Rooms

Rooms are a secondary discovery system.

Examples from the reference:

-   India Chat Room
-   Dating Chat Room
-   Singles Chat Room
-   Religion Chat Room
-   Music Chat Room
-   College Chat Room
-   Gaming Chat Room

RandomChat should present them as modern cards rather than large plain
rows.

### Room card

``` text
[ icon ]

India Chat Room
68 online

Join →
```

Use category colors sparingly.

------------------------------------------------------------------------

# 28. Profile

The profile should be intentionally lightweight because anonymity is
part of the product.

Potential fields:

-   Username
-   Avatar
-   Age
-   Gender
-   Country
-   Interests
-   Online status
-   Safety/settings

Avoid encouraging users to expose:

-   Real name
-   Address
-   Phone number
-   Workplace
-   Financial information

------------------------------------------------------------------------

# 29. Safety UX

Safety is not a legal page hidden in the footer.

It should appear at relevant moments.

## Safety reminder

``` text
Stay safe.

• Never share personal information.
• Be respectful.
• Never send money.
• Report uncomfortable behavior.
• Block anyone you don't trust.
```

The previous reference uses an explicit warning block for adult/minor
safety. RandomChat should have a clear age/safety policy appropriate to
its actual service and jurisdiction.

------------------------------------------------------------------------

# 30. Report / Block

Report and Block should always be accessible from:

-   Chat header
-   Voice-call screen
-   User profile
-   User card

### Report flow

``` text
Why are you reporting this user?

○ Harassment
○ Spam
○ Sexual content
○ Threats
○ Other

[ Submit Report ]
```

Keep reporting friction low.

------------------------------------------------------------------------

# 31. Mobile UX --- Reference Analysis

The supplied Chatib.us mobile screenshots show several useful patterns
that should influence RandomChat.

### Keep

-   Compact top-level navigation
-   Hamburger/menu access
-   Tabbed primary areas
-   People list
-   Online counter
-   Gender filter
-   History
-   Search
-   Inbox
-   Friends
-   Random
-   Rooms
-   Country information
-   Simple search form
-   Registration modal when a restricted feature is selected

### Improve

The reference has several UX problems:

-   Large amounts of unused vertical space
-   Weak visual hierarchy
-   Old-fashioned bright-blue UI
-   Oversized footer content
-   Navigation consumes too much attention
-   User cards feel visually dated
-   Search/filter interactions feel disconnected
-   Some screens appear poorly optimized for mobile viewport height
-   Large footer sections compete with actual product content

RandomChat should keep the **information architecture** but replace the
visual system and improve the layout.

------------------------------------------------------------------------

# 32. Mobile Navigation

Recommended bottom navigation:

``` text
┌────────────────────────────────────────────┐
│                                            │
│                Content                     │
│                                            │
├────────────────────────────────────────────┤
│ People │ Random │ Rooms │ Inbox │ Profile │
└────────────────────────────────────────────┘
```

### Active state

Use:

-   Pink/purple glow
-   Filled icon or highlighted icon
-   Short label

Do not use giant text navigation.

------------------------------------------------------------------------

# 33. Mobile People Screen

``` text
┌──────────────────────────────┐
│ RandomChat              ☰    │
├──────────────────────────────┤
│ ● 4,568 online     India ▾   │
├──────────────────────────────┤
│ 🔍 Search people...     ⚙     │
├──────────────────────────────┤
│                              │
│ ○ RandomRose           🇮🇳   │
│   24 · India                 │
│                              │
│ ○ MoonWalker           🇨🇦   │
│   22 · Canada                │
│                              │
│ ○ Alex_07              🇬🇧   │
│   26 · UK                    │
│                              │
└──────────────────────────────┘
```

Use a vertically scrolling list.

------------------------------------------------------------------------

# 34. Mobile Random Screen

This should be the most action-oriented screen.

``` text
RandomChat

Meet someone new.

Choose how you want to connect.

[ 💬 Text Chat ]
[ 🎙 Voice Call ]

● 4,568 people online
```

Optional:

**Set preferences**

Do not force users through preferences before allowing them to try
RandomChat.

------------------------------------------------------------------------

# 35. Mobile Chat Screen

Use the Chatib.us concept of a focused mobile chat area, but modernize
it.

``` text
┌──────────────────────────────┐
│ ‹  Stranger_482       ⋮      │
│    ● Online                  │
├──────────────────────────────┤
│                              │
│  Hey there! 👋               │
│                              │
│             Hi! How are you? │
│                              │
│  I'm good, thanks!           │
│  What about you?             │
│                              │
│                              │
├──────────────────────────────┤
│ Type a message...      ➤     │
├──────────────────────────────┤
│ Report   Block      Next     │
└──────────────────────────────┘
```

The composer should remain near the bottom of the viewport.

------------------------------------------------------------------------

# 36. Mobile Voice Screen

``` text
┌──────────────────────────────┐
│ ‹ Random Voice          ⋮    │
├──────────────────────────────┤
│                              │
│          Stranger_482        │
│            ● Online          │
│                              │
│            ◉                 │
│         ◉  🎙  ◉             │
│            ◉                 │
│                              │
│             01:24            │
│                              │
│  [Mute] [Speaker] [End Call] │
│                              │
│  Report              Next    │
└──────────────────────────────┘
```

------------------------------------------------------------------------

# 37. Mobile Rooms

``` text
Rooms

India Chat Room          68 online
Dating Chat Room        208 online
Singles Chat Room        73 online
Music Chat Room          16 online
College Chat Room        15 online
Gaming Chat Room        124 online
```

Cards should be compact and scroll naturally.

------------------------------------------------------------------------

# 38. Mobile Search

Use the Chatib.us search structure as the baseline:

``` text
Search People

[ Username ]

[ All ]

[ Female ]    [ Male ]

[ All Countries ▾ ]

[ Search ]
```

Modernized:

-   Dark surface
-   Pink CTA
-   Cyan/purple filter states
-   Rounded controls
-   Clear spacing
-   Bottom-sheet country selector

------------------------------------------------------------------------

# 39. Country Selector

Desktop:

A compact popover.

Mobile:

Use a bottom sheet.

Required elements:

``` text
Choose country

[ 🔍 Search country... ]

🇮🇳 India
🇦🇲 Armenia
🇨🇦 Canada
🇬🇧 United Kingdom
🇺🇸 United States
...
```

The selector should support search rather than forcing users to scroll
through a long country list.

------------------------------------------------------------------------

# 40. Empty States

Empty states should feel branded, not like blank pages.

## No conversations

``` text
No conversations yet.

The next conversation
could start with you.

[ Find People ]
```

## No people found

``` text
No people found.

Try changing your filters.

[ Clear Filters ]
```

## No room

``` text
This room is coming soon.

Stay tuned.
```

## 404

``` text
Oops! This page got lost.

[ Go Home ]
```

Use small neon illustrations or Vice City-inspired atmospheric imagery.

------------------------------------------------------------------------

# 41. Footer

The Chatib.us reference shows a large footer that becomes dominant on
mobile.

RandomChat should avoid this.

### Desktop footer

Compact footer:

-   About
-   Safety
-   Privacy
-   Terms
-   Contact
-   Community Guidelines

### Mobile

Use a collapsible footer or a very compact footer.

Do not place a huge footer immediately after every content section.

------------------------------------------------------------------------

# 42. UX Principles

## Principle 1 --- Conversation first

The product exists to start conversations.

Every major screen should move users toward:

**Meet → Connect → Talk → Continue/Skip**

## Principle 2 --- Anonymous by default

Do not require unnecessary personal information.

## Principle 3 --- Text and voice are equal modes

Voice is not an afterthought.

## Principle 4 --- Fast discovery

A user should be able to start matching within seconds.

## Principle 5 --- Safety is visible

Report, block and safety guidance must be easy to access.

## Principle 6 --- Responsive by design

Mobile is not a compressed desktop experience.

## Principle 7 --- Visual atmosphere, functional UI

Vice City aesthetics should create identity without reducing usability.

------------------------------------------------------------------------

# 43. Core User Flow

``` text
Landing
   ↓
Choose Text / Voice
   ↓
Optional Preferences
   ↓
Finding Match
   ↓
Match Found
   ↓
┌───────────────┬───────────────┐
│ Text Chat     │ Voice Call    │
└───────────────┴───────────────┘
   ↓
Continue
   ↓
Next Stranger
   ↓
Finding Match
   ↓
Repeat
```

------------------------------------------------------------------------

# 44. Detailed Voice Flow

``` text
Choose Voice
      ↓
Microphone Permission
      ↓
Finding Voice Match
      ↓
Voice Match Found
      ↓
Start Call
      ↓
Voice Call Connected
      ↓
Mute / Speaker / Report / Block
      ↓
End Call
      ↓
Next Stranger
```

------------------------------------------------------------------------

# 45. Detailed Text Flow

``` text
Choose Text
      ↓
Optional Preferences
      ↓
Finding Match
      ↓
Match Found
      ↓
Start Chatting
      ↓
Message Exchange
      ↓
Report / Block / Next Stranger
      ↓
Next Match
```

------------------------------------------------------------------------

# 46. Main Screen Inventory

The first design system should include these screens:

### Core

1.  Landing
2.  Text/Voice selection
3.  Preferences
4.  Finding match
5.  Match found
6.  Text chat
7.  Voice call
8.  Next stranger

### Discovery

9.  People online
10. Gender filter
11. Search people
12. Search results
13. Country selector
14. History
15. Inbox
16. Friends

### Community

17. Rooms
18. Room detail/chat

### Account

19. Profile
20. Settings
21. Registration
22. Registration modal

### Safety

23. Safety reminder
24. Report
25. Block confirmation

### System

26. No people found
27. No conversations
28. Room coming soon
29. 404
30. Error/loading states

------------------------------------------------------------------------

# 47. Design System Components

Create reusable components rather than designing each screen
independently.

## Components

-   Primary button
-   Secondary button
-   Outline button
-   Icon button
-   Avatar
-   Online indicator
-   User card
-   Room card
-   Message bubble
-   Search field
-   Filter chip
-   Select/dropdown
-   Country selector
-   Bottom sheet
-   Modal
-   Toast
-   Badge
-   Safety alert
-   Voice control button
-   Match animation
-   Navigation item
-   Bottom navigation
-   Sidebar
-   Header
-   Empty state
-   Loading state

------------------------------------------------------------------------

# 48. Button System

## Primary

Use the pink/purple gradient.

Examples:

-   Start RandomChat
-   Start Chatting
-   Start Call
-   Find People
-   Register Free

## Secondary

Dark surface with neon border.

Examples:

-   Cancel
-   Skip
-   Browse Rooms

## Destructive

Use red only where necessary:

-   End Call
-   Block
-   Confirm report

Do not make the whole product red.

------------------------------------------------------------------------

# 49. Avatar System

Use simple generated avatars/initials rather than requiring profile
photography.

States:

-   Online
-   Offline
-   Connecting
-   Voice connected

Online indicator:

Small cyan/green dot.

------------------------------------------------------------------------

# 50. Motion System

Animations should reinforce the concept of meeting/connectivity.

### Matching

-   Expanding rings
-   Orbiting dots
-   Pulsing chat bubbles

### Voice

-   Audio waveform
-   Pulsing microphone
-   Circular audio rings

### Match found

-   Two avatar circles moving together
-   Small heart/connection animation

### CTA

-   Very subtle hover glow
-   Press feedback

Avoid excessive animations on mobile.

------------------------------------------------------------------------

# 51. Accessibility

Minimum requirements:

-   Strong text contrast
-   Large enough touch targets
-   Clear focus states
-   Do not communicate state through color alone
-   Labels for icons
-   Accessible modal close controls
-   Keyboard navigation on desktop
-   Screen-reader labels for icon-only controls

Important controls such as **Mute**, **End Call**, **Report**, and
**Next Stranger** must be unambiguous.

------------------------------------------------------------------------

# 52. UX Problems to Avoid

Do not reproduce the weaknesses visible in the Chatib.us screenshots.

### Avoid

-   Huge bright-blue navigation bars
-   Giant footer sections on mobile
-   Excessive empty white space
-   Oversized user rows
-   Visually disconnected filters
-   Too many navigation icons competing simultaneously
-   Old-fashioned gradients
-   Unclear active states
-   Long forms before first conversation
-   Requiring registration before the core experience
-   Decorative imagery behind readable chat messages
-   Confusing voice and text controls
-   Making Skip/Next hard to find
-   Hiding Report/Block

------------------------------------------------------------------------

# 53. Final Visual Composition

The finished RandomChat product should visually combine:

### From the first visual reference

-   Neon color language
-   Dark atmospheric background
-   Pink/cyan/purple contrast
-   Sunset-inspired lighting

### From the Vice City reference

-   Palm silhouettes
-   Neon city skyline
-   Sunset/water reflection
-   Diversity of atmospheric background scenes
-   Premium nightlife mood

### From the Chatib.us mobile reference

-   People discovery
-   Online counter
-   Gender filter
-   Search
-   History
-   Inbox
-   Friends
-   Random
-   Rooms
-   Country selection
-   Simple mobile navigation
-   Registration modal behavior

### From the RandomChat UX direction

-   Text chat
-   Random voice
-   Preferences
-   Finding match
-   Match found
-   Next stranger
-   Voice call controls
-   Safety
-   Anonymous-first identity
-   Responsive desktop/tablet/mobile system

------------------------------------------------------------------------

# 54. One-Sentence Design Direction

> **RandomChat should feel like a modern neon-night social utility:
> visually inspired by Vice City, functionally inspired by proven
> stranger-chat patterns, and redesigned around fast anonymous text and
> voice conversations across every screen size.**

------------------------------------------------------------------------

# 55. Design Handoff Priority

Build in this order:

### Phase 1 --- Core conversion path

1.  Landing
2.  Text/Voice selection
3.  Preferences
4.  Finding match
5.  Match found
6.  Text chat
7.  Voice call
8.  Next stranger

### Phase 2 --- Discovery

9.  People
10. Search
11. Filters
12. Country selector
13. History
14. Inbox
15. Rooms

### Phase 3 --- Account and safety

16. Profile
17. Registration
18. Friends
19. Safety
20. Report/block

### Phase 4 --- Polish

21. Empty states
22. Error states
23. Motion
24. Responsive refinement
25. Accessibility
26. Final design-system cleanup

------------------------------------------------------------------------

## Final Product Principle

**The UI should make meeting a stranger feel effortless.**

The user should never wonder:

-   Where do I start?
-   How do I find someone?
-   How do I switch from text to voice?
-   How do I skip?
-   How do I report someone?
-   Where did my previous conversation go?

Every major interaction should have an obvious next step.

**RandomChat = Discover → Connect → Talk → Skip → Discover again.**
