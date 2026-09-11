# RandomChat — Application Flow Sequence for Antigravity

**Product:** RandomChat  
**Domain:** randomcaht.online  
**Purpose:** Define the complete application behavior and state sequence for the AI coding agent Antigravity.

> **Source of truth:** Use the latest RandomChat UI/UX specification and existing project code. This document explains application flow and state behavior. Do not treat reference repositories or screenshots as the product specification.

---

## 1. Complete User Journey

```text
USER OPENS WEBSITE
        ↓
LANDING PAGE
        ↓
18+ / SAFETY GATE
        ↓
TEMPORARY GUEST SETUP
        ↓
PEOPLE LOBBY
        ↓
 ┌───────────────────────┐
 │                       │
 ▼                       ▼
PEOPLE                 RANDOM CHAT
 │                       │
 ▼                       ▼
SEARCH/FILTER          MATCHING
 │                       │
 ▼                       ▼
SELECT PERSON          STRANGER FOUND
 │                       │
 └───────────┬───────────┘
             ↓
            CHAT
             ↓
     ┌───────┴────────┐
     │                │
     ▼                ▼
   TEXT             VOICE
     │                │
     └───────┬────────┘
             ↓
       STRANGER LEAVES
             ↓
   FIND ANOTHER STRANGER
             ↓
        RANDOM CHAT
```

---

# 2. Step 1 — Landing Page

When the user opens `randomcaht.online`, show:

```text
RandomChat logo

Meet someone new.
Start a conversation.

[ Start Chat ]

No account required.
Temporary and anonymous.
```

Rules:

- Do not make the landing page look like account registration.
- Do not ask for email, password, phone number, real name, or profile photo.
- The primary action starts the guest setup flow.

---

# 3. Step 2 — Safety / Age Gate

Before entering the application, show the required age/safety confirmation.

Example:

```text
18+ only

RandomChat is for adults.

Do not share:
• Your real name
• Address
• Phone number
• Passwords
• Payment information
• Other private information

[ I am 18+ and understand ]
```

If the user does not satisfy the required age policy:

```text
Access unavailable.
```

Do not allow access to chat.

---

# 4. Step 3 — Temporary Guest Setup

This is **not login**.

It is a temporary guest setup.

Collect:

```text
Username / nickname
Age
Gender
Country
```

Example:

```text
RandomChat

Meet someone new.

Username
[ Stranger123 ]

Age
[ 24 ▼ ]

Gender
[ Male ] [ Female ]

Country
[ 🇮🇳 India ▼ ]

[ Enter RandomChat ]
```

Country must use the reusable country selector.

Country selector:

```text
🇮🇳 India ▼
```

When opened:

```text
Search country...

🇦🇩 Andorra
🇦🇪 United Arab Emirates
🇦🇫 Afghanistan
🇦🇱 Albania
🇦🇲 Armenia
...
🇮🇳 India
...
```

Use one country dataset/component throughout the application.

---

# 5. Step 4 — Create Temporary Session

When the user presses `Enter RandomChat`, create a temporary session.

Conceptually:

```text
createSession()

→ sessionId
→ temporary nickname
→ age
→ gender
→ country
→ online status
→ connection timestamp
```

Do not create a permanent account.

Then:

```text
Guest Setup
      ↓
People Lobby
```

---

# 6. Step 5 — People Lobby

People is the primary post-setup screen.

It shows people who are currently available to browse.

Example:

```text
┌────────────────────────────────────┐
│ RandomChat                          │
│                                     │
│ 🟢 4,568 online            🇮🇳 ▾    │
│                                     │
│ 🔍 Search people...           ⚙     │
│                                     │
│ Everyone  Male  Female              │
│                                     │
│ ─────────────────────────────────── │
│                                     │
│  R   roleplaymarried            🇦🇲 │
│      19 Yrs · Female · Online       │
│                                     │
│  H   hozes                      🇧🇾 │
│      25 Yrs · Male · Online         │
│                                     │
│  N   NINNNA                    🇬🇪 │
│      38 Yrs · Female · Online       │
│                                     │
└────────────────────────────────────┘
```

Each row contains:

- Anonymous initial/avatar
- Username
- Age
- Gender
- Online status
- Country flag

Do not create large profile cards.

Do not add:

- Bio
- Followers
- Likes
- Photos
- Dating score
- Social metrics
- Public profile history

---

# 7. People Lobby Presence Flow

Backend maintains real-time presence.

```text
User connects
      ↓
Create temporary session
      ↓
Register presence
      ↓
User becomes ONLINE
      ↓
People directory updates
      ↓
Other clients receive updated people list
```

When a user disconnects:

```text
User disconnects
      ↓
Remove/expire presence
      ↓
People directory updates
      ↓
Other users no longer see them as available
```

The online count must represent real current availability.

Do not hard-code preview numbers such as `4,568`.

---

# 8. Step 6 — Search People

User searches by temporary username.

Example:

```text
Search:
sarah
```

Result:

```text
Sarah
```

Keep search simple.

Do not turn People search into a social-network search.

---

# 9. Step 7 — People Filters

The People screen has a dedicated Filters control.

Available filters:

```text
Gender
○ Everyone
○ Male
○ Female

Age
18 ─────────────── 35

Country
All Countries
India
United States
United Kingdom
Canada
...
```

Filters can be combined:

```text
Female
+
18–35
+
India
```

The result should show only currently available people matching those People filters.

Important:

> People filters must never modify Random Chat matchmaking.

---

# 10. Country System

Use one reusable country component/data source.

It must be reused in:

```text
Guest Setup
      ↓
People Filter
      ↓
People Row
      ↓
Direct Chat Header
```

Examples:

Guest setup:

```text
🇮🇳 India
```

People filter:

```text
🌐 All Countries
🇮🇳 India
🇺🇸 United States
🇬🇧 United Kingdom
...
```

People row:

```text
Sarah
24 · Female · Online       🇺🇸
```

Chat:

```text
Sarah
24 · Female · 🇺🇸 United States
```

Requirements:

- Country flag
- Full country name
- Country search
- Keyboard navigation on desktop
- Touch scrolling on mobile
- Selected-state highlight
- Accessible text equivalent for flags
- `All Countries` option for People filtering

---

# 11. Step 8 — Select a Person

When the user clicks/taps a person:

```text
People
   ↓
Selected Person
   ↓
Direct Chat
```

Do not show a separate public profile page.

Example chat header:

```text
← Sarah                         ⋯
  24 · Female · 🇺🇸 United States
  🟢 Online
```

---

# 12. Step 9 — Direct Chat

Initial conversation:

```text
Sarah

You:
Hey 👋
```

The user can send messages, subject to the cold-message gate.

---

# 13. Step 10 — Two-Message Cold Gate

Before the other person replies:

```text
Maximum consecutive messages = 2
```

Example:

```text
You:
Hey 👋

You:
How are you?
```

Then:

```text
You've sent 2 messages.
Wait for a reply before sending another.
```

The Send control becomes disabled.

When the stranger replies:

```text
Sarah:
I'm good! Nice to meet you.
```

Reset the consecutive-message counter and allow normal conversation.

---

# 14. Server-Authoritative Cold Gate

This rule MUST be enforced by the server.

The client must not be trusted.

Server concept:

```text
sendMessage(message)

    ↓

Is session valid?
    ↓
Is chat active?
    ↓
Is recipient connected?
    ↓
Has sender exceeded cold-message limit?
    ↓
YES → reject message
NO  → accept and broadcast message
```

The rule must survive:

- Refresh
- Reconnect
- Another browser tab
- Manipulated client requests
- Repeated socket events

A user must not bypass the two-message limit by manipulating frontend state.

---

# 15. Step 11 — Normal Chat

After the stranger replies:

```text
NORMAL CHAT
```

Normal conversation has no artificial two-message restriction for that exchange.

Prioritize:

1. Conversation
2. Composer
3. Next / Find Another Stranger
4. Voice
5. Safety actions

Do not clutter the chat with unnecessary profile information.

---

# 16. Step 12 — Voice Request

Voice is an optional escalation from text.

Either participant can request voice:

```text
🎙 Request Voice
```

The other user receives:

```text
Sarah wants to voice chat.

[ Decline ]    [ Accept ]
```

CRITICAL:

- Voice must never start automatically.
- The receiving user must explicitly accept.
- The microphone must not activate before acceptance.
- Do not autoplay audio before acceptance.

---

# 17. Voice Declined

If the user declines:

```text
Voice request declined.
```

Return to normal text chat.

---

# 18. Voice Accepted

If accepted:

```text
Voice Connecting...
        ↓
Voice Connected
```

Example:

```text
Sarah

24
🇺🇸

     ○
   ○ 🎙 ○
     ○

01:24

[ Mute ]     [ End Voice ]
```

Support:

- Mute
- Unmute
- End voice
- Connection state
- Stranger disconnect
- Voice ended

---

# 19. Voice Ended

Either participant can end voice:

```text
End Voice
    ↓
Voice ended.
    ↓
Return to Text Chat
```

---

# 20. Step 13 — Stranger Leaves

If the stranger disconnects:

```text
Sarah left the chat.
```

Show:

```text
[ Find Another Stranger ]

[ Back to People ]
```

---

# 21. Find Another Stranger

If the user chooses `Find Another Stranger`:

```text
Current chat
      ↓
Find Another Stranger
      ↓
Random matchmaking
      ↓
Finding someone...
      ↓
New stranger
      ↓
New chat
```

For Random Chat, keep the user inside Random Chat.

Do not automatically return them to People.

---

# 22. Random Chat — Separate Mode

Random Chat is a completely separate experience from People.

People:

```text
Choose who you want to talk to.
```

Random Chat:

```text
Let RandomChat choose someone for you.
```

Random Chat exposes NO user-facing:

- Gender filter
- Age filter
- Country filter
- Search
- Person selection

---

# 23. Random Chat Entry

Navigation:

```text
Random Chat
```

When selected:

```text
Random Chat

Finding someone...

Matching you with a
random available stranger.

[ Cancel ]
```

No People filters should appear on this screen.

---

# 24. Random Matchmaking Backend Flow

```text
User requests Random Chat
        ↓
Check available matchmaking pool
        ↓
Select random compatible available stranger
        ↓
Reserve both users
        ↓
Create random chat session
        ↓
Notify both clients
        ↓
Match Found
        ↓
Open Chat
```

The internal matching algorithm may use compatibility logic, but the Random Chat UI must not expose People-style filters.

---

# 25. Random Match Found

Use a short transition:

```text
Stranger found
      ↓
Chat
```

Target transition:

```text
500–700ms
```

Do not use confetti or long animations.

---

# 26. Random Chat Voice

Random Chat follows the same voice process:

```text
Random Text Chat
      ↓
Request Voice
      ↓
Other user
      ↓
Accept / Decline
```

Accepted:

```text
Voice Chat
```

Declined:

```text
Text Chat
```

Voice is never automatic.

---

# 27. Random Chat → Find Another Stranger

If the random stranger leaves:

```text
Stranger left.
```

Primary action:

```text
[ Find Another Stranger ]
```

Then:

```text
Finding someone...
      ↓
New Stranger
      ↓
Chat
```

Stay in Random Chat unless the user explicitly chooses People.

---

# 28. Navigation

Desktop:

```text
[ RandomChat Logo ]

People
Random Chat
Voice
Chats
Settings
```

Use a narrow navigation rail.

Mobile:

```text
People | Chats | Random | Settings
```

Keep mobile navigation compact.

Voice should primarily be exposed inside active chat as `Request Voice`, because voice is an optional escalation rather than the default entry mode.

---

# 29. Mobile Flow

Mobile should behave like a full-height application.

```text
┌────────────────────────────┐
│ RandomChat                 │
├────────────────────────────┤
│ People                     │
│ 🟢 4,568 online            │
│                            │
│ 🔍 Search people...     ⚙  │
│                            │
│ R Sarah              🇺🇸  │
│   24 · Female · Online     │
│                            │
│ A Alex               🇮🇳  │
│   27 · Male · Online       │
│                            │
├────────────────────────────┤
│ People | Chats | Random | ⚙│
└────────────────────────────┘
```

People filters open as a bottom sheet.

Chat composer must remain usable when the keyboard is open.

Use modern viewport units where appropriate:

```text
dvh
svh
lvh
```

Do not rely exclusively on `100vh`.

---

# 30. Desktop Flow

Desktop can use:

```text
┌───────┬──────────────────────┬─────────────────────────┐
│ Logo  │ People               │                         │
│       │                      │       Main area         │
│ 👥    │ Search               │                         │
│       │ Filters              │                         │
│ 🔀    │                      │                         │
│       │ Person list          │                         │
│ 🎙    │                      │                         │
│       │                      │                         │
│ 💬    │                      │                         │
│       │                      │                         │
│ ⚙     │                      │                         │
└───────┴──────────────────────┴─────────────────────────┘
```

Keep the rail narrow.

Do not create a large SaaS-style sidebar.

---

# 31. Safety Actions

Inside chat:

```text
⋯
 ├── Report
 └── Block
```

Report reasons:

```text
Harassment
Spam
Sexual / inappropriate content
Threats
Hate / abuse
Scam / fraud
Other
```

Block should:

```text
Block user
      ↓
Terminate current conversation
      ↓
Prevent immediate rematching where technically supported
```

Do not claim permanent identity-level blocking if the system only has temporary sessions.

---

# 32. Disconnect and System States

Handle:

```text
User offline
Stranger offline
Network lost
Socket disconnected
Server unavailable
Session expired
Rate limited
```

Example:

```text
Connection lost.

Trying to reconnect...
```

If reconnection fails:

```text
You're offline.

[ Try Again ]
```

---

# 33. Application State Machine

Antigravity should model the product as states, not merely pages.

```text
LANDING
   ↓
AGE_GATE
   ↓
GUEST_SETUP
   ↓
SESSION_CREATED
   ↓
PEOPLE_LOBBY
```

People:

```text
PEOPLE_LOBBY
 ├── SEARCHING
 ├── FILTERING
 ├── PERSON_SELECTED
 │       ↓
 │   DIRECT_CHAT
 │
 └── RANDOM_CHAT
         ↓
      MATCHING
         ↓
      RANDOM_CHAT_SESSION
```

Chat:

```text
CHAT
 ├── COLD_MESSAGE_LIMIT
 ├── NORMAL_CHAT
 ├── VOICE_REQUESTED
 │      ├── ACCEPTED → VOICE_ACTIVE
 │      └── DECLINED → CHAT
 │
 ├── REPORT
 ├── BLOCK
 └── STRANGER_DISCONNECTED
           ↓
    FIND_ANOTHER_STRANGER
```

---

# 34. Core Data Model Concept

## Temporary Session

```text
sessionId
nickname
age
gender
country
connectedAt
lastSeen
status
```

## Presence

```text
sessionId
online
available
currentMode
```

## Chat

```text
chatId
participantA
participantB
mode
createdAt
status
```

Modes:

```text
direct
random
```

## Message

```text
messageId
chatId
senderId
content
createdAt
```

## Cold-message state

```text
chatId
senderId
consecutiveMessagesSinceReply
```

## Voice

```text
chatId
requester
recipient
status
```

Status:

```text
requested
accepted
declined
connected
ended
```

---

# 35. Real-Time Event Model

Use explicit typed real-time events.

At minimum support concepts for:

```text
session created
presence updated
people snapshot / updated
direct chat requested
direct chat connected
message sent
message received
cold-message limit reached
stranger replied
stranger disconnected
random match requested
random match found
random match cancelled
next stranger requested
voice requested
voice accepted
voice declined
voice ended
report submitted
block applied
```

If the existing project already has event names, preserve them unless there is a strong reason to change them.

---

# 36. Performance

The People lobby may contain a large number of users.

Do not render thousands of rows into the DOM at once.

Use where appropriate:

- Virtualization
- Pagination
- Incremental loading
- Server-side filtering for large populations
- Debounced search
- Efficient presence updates
- Cleanup on disconnect
- Stable React keys
- Minimal unnecessary rerenders

Do not broadcast the full online population on every tiny state change.

---

# 37. Accessibility

Required:

- Semantic HTML
- Keyboard navigation
- Visible focus
- Accessible labels
- Screen-reader announcements
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

# 38. UI and Reference Rules

The supplied screenshots are references for:

```text
Compactness
Country flags
Online users
Small avatars
Search
Filters
Dense information
Icon navigation
```

Do NOT copy:

```text
Their logo
Their branding
Their exact colors
Their typography
Their exact icons
Their exact layout
Their wording
Their visual identity
```

RandomChat keeps its own sunset/plum system:

```text
Deep Plum  #492351
Plum       #7F376D
Rose       #D55882
Coral      #FF808A
Peach      #FFBF92
Cream      #F6E5D9
```

Use SVG icons for primary interface controls rather than emoji.

---

# 39. Development Sequence for Antigravity

Implement in this order.

## Phase 1 — Project Audit

```text
Inspect existing project
        ↓
Identify frontend framework
        ↓
Identify backend
        ↓
Identify real-time architecture
        ↓
Identify routes
        ↓
Identify current session model
        ↓
Identify database/storage
```

Do not rewrite the project before understanding it.

## Phase 2 — Design System

```text
RandomChat logo
↓
SVG icon system
↓
Colors
↓
Typography
↓
Responsive application shell
```

## Phase 3 — Guest Setup

```text
Guest Setup
↓
Country dataset
↓
CountrySelector
↓
Temporary session
```

## Phase 4 — People

```text
People Lobby
↓
Presence
↓
Online count
↓
PersonRow
↓
Avatar
↓
Country flag
↓
Search
↓
Gender filter
↓
Age filter
↓
Country filter
```

## Phase 5 — Direct Chat

```text
Chat
↓
Chat header
↓
Messages
↓
Composer
↓
Cold-message gate
↓
Server enforcement
```

## Phase 6 — Random Chat

```text
Random entry
↓
Matchmaking
↓
Match found
↓
Random chat
↓
Find Another Stranger
```

## Phase 7 — Safety

```text
Report
↓
Block
↓
Disconnect
↓
Offline
↓
Rate limiting
```

## Phase 8 — Voice

```text
Voice request
↓
Accept / Decline
↓
Voice signaling
↓
Voice connection
↓
Mute
↓
End voice
```

## Phase 9 — Final Polish

```text
Mobile
↓
Tablet
↓
Desktop
↓
Keyboard behavior
↓
Accessibility
↓
Reduced motion
↓
Error states
↓
Performance
```

---

# 40. Development Discipline

After every major phase:

```text
1. Run the application.
2. Test the current flow.
3. Test desktop.
4. Test mobile.
5. Test reconnect/disconnect behavior.
6. Check browser console.
7. Check server logs.
8. Fix errors.
9. Only then continue.
```

Do not move to the next phase while the current phase is broken.

---

# 41. Final Antigravity Instruction

```text
DO NOT build RandomChat as a collection of disconnected screens.

Build it as one state-driven application.

Every important UI action must correspond to a real application state.

People is a live browseable presence directory.

Random Chat is a separate matchmaking system.

Chat is the central conversation state.

Voice is an optional accepted escalation from chat.

The country system is shared throughout the application.

The two-message cold gate is server authoritative.

Presence must be real.

Online counts must be real.

Random matchmaking must be real.

Do not fake backend functionality with static UI.

Do not introduce permanent accounts unless explicitly requested.

Do not add social-network profile features.

Do not turn RandomChat into a dating app.

Do not copy reference websites.

Use the latest RandomChat UI/UX specification as the product source of truth.

Use GitHub repositories only as implementation references.

Implement incrementally.

After every major phase:
1. run the application,
2. test the flow,
3. check desktop,
4. check mobile,
5. fix errors,
6. then continue.

Do not move to the next phase while the current phase is broken.
```
