# RandomChat — Full UI/UX Design Brief
Version: 1.0
Status: Design specification for AI implementation
Primary goal: Give an AI coding agent a deterministic specification for building the RandomChat interface without inventing missing UI, flows, colors, states, or product behavior.

---

## 0. SOURCE OF TRUTH

Use these references in this order:

1. **Current product requirements in this brief** — highest priority.
2. **RandomChat visual reference board** — source for logo treatment, typography, spacing language, component style, and overall visual tone.
3. **Reference product screenshots** — source for information architecture and useful interaction patterns only.
4. Do NOT copy competitor branding, logos, text, advertisements, or proprietary visual assets.

### Critical rule

Do not invent details that are not specified here.

If a value is not defined:
- use the existing design tokens,
- use the simplest conventional UI,
- keep the element visually subordinate,
- do not introduce a new visual style.

---

# 1. PRODUCT MODEL

RandomChat is a lightweight anonymous social-chat product.

The primary experience is NOT random matching.

### Normal experience

Username
→ Age
→ Location
→ People Online
→ Filters
→ Select a person
→ Send message
→ Wait for reply
→ Reply received
→ Voice Note unlocked
→ Voice Chat unlocked
→ Voice Call + Video Call unlocked

### Random Voice experience

Random Voice
→ Finding someone
→ Connecting
→ Voice call

The "Finding someone..." loading/matching interface must NEVER appear in the normal people-browsing or normal text-chat flow.

---

# 2. DESIGN PRINCIPLES

## 2.1 Visual personality

- Clean
- Minimal
- Human
- Modern
- Lightweight
- Trustworthy
- Slightly playful through purple accent
- Not futuristic
- Not cyberpunk
- Not gaming UI
- Not excessive glassmorphism
- Not AI-generated-looking
- Not gradient-heavy

## 2.2 UX personality

- Immediate
- Predictable
- Low cognitive load
- Clear state changes
- One obvious primary action per screen
- No unnecessary onboarding
- No traditional account/login system

## 2.3 Core principle

The interface should disappear behind the conversation.

---

# 3. BRAND / VISUAL IDENTITY

## 3.1 Logo

Brand name:

RandomChat

Wordmark treatment:

- "Random" = primary dark text
- "Chat" = brand purple
- compact chat-bubble icon may appear to the left
- use the supplied RandomChat logo/reference as the visual source
- do not replace it with a generic AI/chat logo

Do not use:
- Chatib logo
- competitor logo
- copied competitor wordmark
- country flags inside the brand logo

## 3.2 Typography

Primary font:

**Inter**

Use one font family throughout the application.

Recommended weights:
- 400 Regular
- 500 Medium
- 600 SemiBold
- 700 Bold

Typography scale:

| Token | Size | Weight | Use |
|---|---:|---|---|
| Display | 32px | 700 | Landing hero |
| H1 | 28px | 700 | Main screen heading |
| H2 | 22px | 600 | Section heading |
| H3 | 18px | 600 | Card/feature heading |
| Body | 16px | 400 | Main copy |
| Body Small | 14px | 400 | Secondary information |
| Label | 13px | 500 | Form labels |
| Caption | 12px | 400 | timestamps/status |

Line height:
- Display: 1.15
- Heading: 1.2
- Body: 1.5
- Caption: 1.4

Do not use decorative serif fonts or monospace fonts for normal product UI.

---

# 4. COLOR SYSTEM

Primary brand purple:

`#6C4DFF`

Secondary purple:

`#8C65FF`

Dark text:

`#111827`

Secondary text:

`#6B7280`

Border:

`#E5E7EB`

Page background:

`#FFFFFF`

Soft surface:

`#F8FAFC`

Muted surface:

`#F3F4F6`

Success:

`#16A34A`

Warning:

`#F59E0B`

Danger:

`#DC2626`

Voice/media success accent:

`#00DAA3`

### Color usage rules

Purple is for:
- brand accent
- active navigation
- selected filter
- progress indicator
- links
- important secondary actions
- unlocked feature emphasis

Black/dark:
- primary CTA
- main headings
- high-priority text

Green:
- online status
- successful validation
- unlocked state

Red:
- destructive actions
- report
- end call

Do NOT use purple gradients across the whole interface.

Do NOT use neon glow.

Do NOT make every button purple.

---

# 5. SPACING SYSTEM

Use an 8px base system.

Allowed spacing:
- 4px
- 8px
- 12px
- 16px
- 20px
- 24px
- 32px
- 40px
- 48px
- 64px
- 80px

Default page content spacing:
- desktop horizontal: 32–48px
- mobile horizontal: 16–20px

Card padding:
- compact: 12px
- normal: 16px
- large: 24px

---

# 6. CORNER RADIUS

Use restrained rounding.

- Input: 10px
- Button: 10px
- Card: 14px
- Modal: 16px
- Avatar: 50%
- Pills: 999px

Avoid extremely rounded "bubble UI" everywhere.

---

# 7. BORDERS / SHADOWS

Borders:
- 1px solid `#E5E7EB`

Shadows:
- use extremely subtle shadows only when elevation is required
- default cards should rely primarily on border + whitespace

Do not use:
- heavy drop shadows
- glowing borders
- neon outlines

---

# 8. ICON SYSTEM

Use one consistent outline icon family.

Recommended:
Lucide Icons.

Icon size:
- inline: 16px
- standard control: 18px
- navigation: 20px
- prominent action: 22–24px

Icons must never replace an important text label when the meaning is ambiguous.

---

# 9. ONBOARDING

There is NO login.

There is NO password.

There is NO email.

There is NO Google/Apple sign-in.

The user only creates a lightweight identity.

## Screen 01 — Username

### Purpose

Create a unique username.

### Layout

Desktop:
- centered card
- max width approximately 460–520px
- logo at top
- 3-step progress indicator
- title
- subtitle
- username input
- availability state
- username rules
- primary CTA

Mobile:
- full-width content
- 16–20px horizontal padding

### Content

Heading:

"Create your username"

Supporting text:

"This will be your identity in RandomChat."

Input:
- placeholder: "Choose a username"
- show validation icon at right

Requirements:
- 4–20 characters
- letters, numbers, underscores
- no spaces
- no unsupported special characters

Available state:
- green check
- "Username available."

Taken state:
- red error
- "[username] is already taken."
- show 2–3 generated alternatives

Example:
- CoolVibes27
- CoolVibes_27
- CoolVibes2026

CTA:
"Continue"

---

# 10. ONBOARDING — AGE

## Screen 02

Heading:
"How old are you?"

Supporting text:
"This helps us keep RandomChat safe for everyone."

Control:
- age selector/dropdown

CTA:
"Continue"

Secondary:
"Back"

Do not ask for unnecessary personal information.

---

# 11. ONBOARDING — LOCATION

## Screen 03

Heading:
"Where are you from?"

Supporting text:
"Select your location to find people around you."

Fields:
1. Country
2. City

CTA:
"Start Chatting"

Secondary:
"Back"

### Privacy

Do not request exact address.

Do not expose precise location.

Display only:
- country
- city

---

# 12. COUNTRY / LOCATION DATA RULE

Country information must be data-driven.

Never guess a flag from an avatar.

If a country flag is displayed:
- it must match the selected country exactly
- use a real country-code mapping
- do not manually type random emoji flags into UI data

User location and avatar appearance are separate properties.

Do not infer ethnicity from:
- name
- avatar
- country
- city

---

# 13. MAIN APP NAVIGATION

Desktop navigation:

Logo
- Online
- Gender
- Location
- History
- Search
- Inbox
- Friends
- Random

Top-level navigation must remain compact.

Mobile:
- collapse secondary navigation into a menu
- keep the main chat/people experience dominant

---

# 14. PEOPLE ONLINE SCREEN

This is the default application screen after onboarding.

### Critical behavior

Do NOT show "Finding someone..."

The user sees people immediately.

### Header

Show:

- online status indicator
- online count
- search
- notifications/inbox
- menu

Example:

"2,482 people online"

IMPORTANT:
During pre-launch/demo mode, online numbers may be seeded/fake for UX demonstration.

Production:
- replace seeded numbers with actual live telemetry
- never represent fake numbers as verified live users once real telemetry is available

---

# 15. PEOPLE LIST

Each person card contains:

- avatar
- username/display name
- age
- city
- country
- online indicator
- message/open-chat action

Example:

Ava Martinez
22
Barcelona, Spain
● Online

Do not display country flags unless country representation is deliberate and data-driven.

---

# 16. AVATAR SYSTEM

Avatars should be visually diverse.

Use:
- varied skin tones
- varied hair styles
- varied facial features
- varied genders
- varied ages

But:

Do NOT use avatar appearance to infer nationality or ethnicity.

Location should be explicitly represented by location data.

Avoid making all avatars look like:
- one ethnicity
- one gender
- one age group
- AI stock portraits

---

# 17. SEARCH

Search people by:
- username

Search field:
"Search people..."

Search should be instant or near-instant.

Empty state:
"No people found."

Do not show fake loading animations for simple local filtering.

---

# 18. FILTERS

Filters:

## Gender
- All
- Male
- Female
- Other

## Age
Range slider:
- minimum 18
- maximum configurable upper bound

Recommended default:
18–35

## Location
Country:
- All Countries
- selected country

City:
- All Cities
- selected city

CTA:
"Apply Filters"

Secondary:
"Clear all"

Filters should update the visible people list.

---

# 19. USER PROFILE / USER INFO

Profile panel contains:

- avatar
- username
- age
- city
- country
- online status

Actions:
- Start chat
- Block
- Report

Do not expose:
- email
- phone
- address
- private account details

---

# 20. NORMAL CHAT

## Chat header

Contains:
- back
- avatar
- username
- online indicator
- age
- city/country
- safety/report menu

Example:

Ava Martinez
● Online · 22 · Barcelona, Spain

Actions:
- safety
- voice call/video call buttons only when unlocked
- menu

---

# 21. CHAT UNLOCK SYSTEM

This is a core product rule.

### State 0 — No conversation

No advanced communication features.

Locked:
- Voice Note
- Voice Chat
- Voice Call
- Video Call

User can only send text.

### State 1 — User sends first message

Still locked.

Status:

"Waiting for a reply"

Do NOT unlock any voice features yet.

### State 2 — Other person replies

Unlock:

**Voice Note**

The user can now:
- record voice note
- send voice note
- receive voice notes

### State 3 — Voice Note unlocked

Unlock:

**Voice Chat**

This can be a live voice conversation.

### State 4 — Voice Chat unlocked

Unlock:

**Voice Call**

### State 5 — Voice Call unlocked

Unlock:

**Video Call**

The UI may present Voice Call and Video Call together after the required reciprocal interaction has been established.

---

# 22. LOCKED FEATURE UI

Locked features should visibly communicate that they are unavailable.

Example:

Voice Note
🔒 Locked

Voice Chat
🔒 Locked

Voice Call
🔒 Locked

Video Call
🔒 Locked

Use muted gray.

Do not make locked features look clickable.

---

# 23. UNLOCKED FEATURE UI

Unlocked state:

Voice Note
✓ Unlocked

Voice Chat
✓ Unlocked

Voice Call
✓ Unlocked

Video Call
✓ Unlocked

Use subtle green confirmation.

Do not use large celebratory animations.

---

# 24. FEATURE UNLOCK EXPLANATION PANEL

Create a small help panel:

### How chat features unlock

1. **You send a message**
   Start the conversation.

2. **They reply**
   Reciprocal conversation is established.

3. **Voice Note unlocked**
   Send voice notes.

4. **Voice Chat unlocked**
   Start live voice chat.

5. **Voice Call + Video Call unlocked**
   Start calls after the required unlock state.

If there is no reply:
"Advanced communication features remain locked."

---

# 25. VOICE NOTE

Voice note composer:

- microphone button
- tap to record
- recording timer
- waveform
- stop
- preview
- send
- cancel

Recommended maximum voice note duration:
60 seconds unless backend requirements specify otherwise.

Voice note bubble:
- play/pause
- waveform
- duration
- timestamp

---

# 26. ATTACHMENTS

There are ONLY TWO attachment options.

## Option 1 — PNG image

Allowed:
`.png`

Maximum:
10 MB

Label:
"Photo (PNG)"
"Up to 10 MB"

## Option 2 — MP4 video

Allowed:
`.mp4`

Maximum:
50 MB

Label:
"Video (MP4)"
"Up to 50 MB"

Do NOT include:
- MP3
- PDF
- DOCX
- ZIP
- arbitrary files

Attachment menu should show exactly two choices.

Example:

Attach file

[ Photo (PNG) ]
Up to 10 MB

[ Video (MP4) ]
Up to 50 MB

---

# 27. ATTACHMENT VALIDATION

Reject:
- unsupported extension
- incorrect MIME type
- file larger than limit

Error:

"Only PNG images up to 10 MB are supported."

or:

"Only MP4 videos up to 50 MB are supported."

Never silently fail.

---

# 28. RANDOM VOICE MODE

This is the ONLY place where matching/loading exists.

Screen:

Random Voice

"Finding someone..."

Subtext:
"Looking for an available person."

Cancel button.

After match:
→ voice call screen

This system is separate from normal text chat.

---

# 29. VOICE CHAT SCREEN

Dark call surface may be used here for usability.

Contains:
- participant avatar
- username
- online/calling state
- waveform
- mute
- speaker
- end

Keep call UI simple.

---

# 30. VOICE CALL SCREEN

Contains:
- avatar
- username
- calling/connected state
- mute
- speaker
- end call

Primary destructive action:
red End Call button

---

# 31. VIDEO CALL SCREEN

Contains:
- large remote video
- small local preview
- mute
- camera
- speaker
- end call
- flip camera if supported

Do not overcrowd the screen.

---

# 32. ROOMS

Rooms are a separate discovery surface.

Example rooms:

- India Chat Room
- Dating Chat Room
- Singles Chat Room
- College Chat Room
- Music Chat Room
- Chill & Hangout
- International Chat Room

Each room shows:
- room icon
- room name
- online count
- optional short description

Do not hardcode country flags as room icons.

---

# 33. ROOM DETAIL

Room detail:
- room name
- online count
- member avatars
- description
- rules
- Join Room CTA

Rules:
- Be kind
- No spam
- No personal information
- 18+ only if applicable to product policy

---

# 34. INBOX

Tabs:

- All
- Chats
- Calls
- Requests

Conversation row:
- avatar
- username
- last message
- timestamp
- unread indicator

---

# 35. HISTORY

History includes:
- recent chats
- voice calls
- video calls

Do not retain unnecessary personal information.

---

# 36. SETTINGS

Sections:

## Account
- Edit nickname
- Clear chat history
- Blocked users

## Privacy
- Who can message me
- Read receipts
- Show online status

## Notifications
- Message notifications
- Sound

## Safety
- Block list
- Reports

No password/account recovery section because there is no traditional login system.

---

# 37. SAFETY / REPORT

Report reasons:
- Harassment
- Spam
- Hate/abuse
- Sexual content
- Threatening behavior
- Other

Block confirmation:
"Block this user?"

Report confirmation:
"Report submitted."

Keep safety UI clear but not visually dominant.

---

# 38. EMPTY STATES

People:
"No people match your filters."

Inbox:
"No conversations yet."

History:
"No recent activity."

Rooms:
"No rooms available."

Each empty state gets:
- small icon
- one sentence
- one useful action if applicable

---

# 39. ERROR STATES

Network:
"Something went wrong. Check your connection and try again."

Upload:
"Upload failed. Please try again."

Unsupported file:
"File type not supported."

File too large:
"File exceeds the maximum size."

Call failed:
"Could not connect the call."

Use one primary recovery action.

---

# 40. LOADING STATES

Use loading only when the system genuinely waits for a response.

Allowed:
- initial people data fetch
- chat message send
- file upload
- voice/video connection
- Random Voice matching

Do NOT use:
- fake loading before showing online users
- decorative loading bars
- unnecessary skeleton screens for instant local UI

---

# 41. RESPONSIVE DESIGN

## Desktop >= 1200px

Use a multi-column application layout.

Suggested structure:

Left:
navigation/filter panel

Center:
people list

Right:
active conversation

For landing:
centered content with generous whitespace.

## Tablet 768–1199px

Collapse:
- secondary navigation
- some filters into modal/drawer

Keep:
- people list
- active chat

## Mobile < 768px

Use single-column navigation.

People:
full screen

Chat:
full screen

Profile:
bottom sheet or full-screen panel

Filters:
bottom sheet

Composer:
sticky to bottom

Call:
full screen

Minimum touch target:
44px

Recommended:
48px

---

# 42. LANDING PAGE

Landing should NOT force random matching.

Hero:

"Meet someone new.
Have a real conversation."

Supporting copy:

"Chat with people around the world.
No profiles. No pressure."

Primary:
"Start Chatting"

Secondary:
"See who's online"

Show a compact online-people preview.

Do not show:
"Finding someone..."

---

# 43. LANDING INFORMATION HIERARCHY

1. Logo
2. Navigation
3. Hero
4. Start Chatting CTA
5. People Online preview
6. Anonymous/privacy benefits
7. How it works
8. Safety
9. Footer

---

# 44. HOW IT WORKS

Use three simple steps:

1. Create your username
2. Choose age and location
3. Pick someone online and chat

Do NOT describe normal chat as random matching.

Separate Random Voice as an optional feature.

---

# 45. MOTION

Motion personality:

Fast → Smooth → Subtle → Purposeful

Durations:

| Interaction | Duration |
|---|---:|
| Hover | 150ms |
| Press | 100–150ms |
| Message appear | 180–200ms |
| Dropdown | 150–200ms |
| Modal | 250ms |
| Drawer | 250–300ms |
| Page/state transition | 300–400ms |
| Call connection | 400–700ms |

Use:
- opacity
- transform
- scale
- translate

Avoid:
- large bouncing elements
- excessive particle effects
- animated gradients
- glowing borders
- constant background animation

Support:
`prefers-reduced-motion`

---

# 46. ACCESSIBILITY

Required:

- semantic HTML
- keyboard navigation
- visible focus state
- ARIA labels where needed
- 44px minimum touch targets
- adequate contrast
- do not communicate status by color alone
- form errors associated with fields
- file upload errors readable by screen readers
- reduced-motion mode
- keyboard-accessible menus/modals

---

# 47. COMPONENT INVENTORY

## Global

- Logo
- Button
- IconButton
- Input
- Select
- Dropdown
- Avatar
- Badge
- Tooltip
- Modal
- Drawer
- Toast
- Tabs
- Divider
- Progress indicator

## People

- OnlineCount
- OnlineAvatarRow
- PeopleList
- PersonCard
- SearchPeople
- GenderFilter
- AgeFilter
- LocationFilter
- FilterPanel

## Chat

- ChatHeader
- MessageList
- MessageBubble
- TypingIndicator
- Composer
- AttachmentMenu
- AttachmentPreview
- VoiceNoteBubble
- FeatureUnlockBar
- LockedFeature
- UnlockedFeature

## Calls

- VoiceChatScreen
- VoiceCallScreen
- VideoCallScreen
- CallControls
- CallStatus
- RemoteParticipant
- LocalPreview

## Other

- RoomList
- RoomCard
- RoomDetail
- InboxList
- HistoryList
- SettingsPanel
- ReportModal
- BlockModal

---

# 48. COMPONENT STATES

Every interactive component must define:

- default
- hover
- focus
- active
- disabled
- loading
- success
- error
- empty

Chat-specific states:
- no reply
- waiting for reply
- reply received
- voice note unlocked
- voice chat unlocked
- voice call unlocked
- video call unlocked

---

# 49. DATA MODEL EXPECTATIONS

## User

```ts
type User = {
  id: string
  username: string
  age: number
  countryCode: string
  countryName: string
  city: string
  avatarUrl: string
  isOnline: boolean
}
```

## Conversation

```ts
type Conversation = {
  id: string
  participantId: string
  messages: Message[]
  hasSentMessage: boolean
  hasReceivedReply: boolean
  voiceNoteUnlocked: boolean
  voiceChatUnlocked: boolean
  voiceCallUnlocked: boolean
  videoCallUnlocked: boolean
}
```

## Message

```ts
type Message = {
  id: string
  senderId: string
  type: "text" | "png" | "mp4" | "voice"
  content: string
  createdAt: string
}
```

---

# 50. UNLOCK LOGIC — IMPLEMENTATION RULE

Use deterministic state.

```text
if no reply:
    voiceNote = locked
    voiceChat = locked
    voiceCall = locked
    videoCall = locked

if reply received:
    voiceNote = unlocked

if voiceNoteUnlocked:
    voiceChat = unlocked

if voiceChatUnlocked:
    voiceCall = unlocked
    videoCall = unlocked
```

The UI must always reflect backend state.

Never unlock a feature only because the user clicked a button.

---

# 51. DEMO DATA

For the initial prototype, seeded users are allowed.

Example:

Ava Martinez — 22 — Barcelona, Spain
Liam O'Connor — 27 — Dublin, Ireland
Zara Khan — 24 — Lahore, Pakistan
Noah Kim — 21 — Seoul, South Korea
Sofia Rossi — 26 — Milan, Italy
Ethan Brown — 23 — Toronto, Canada
Priya Nair — 25 — Bengaluru, India
Lucas Mendes — 28 — Rio de Janeiro, Brazil

These are demo records only.

Do not imply that these specific people are real users.

Online counts in prototype/demo mode can be synthetic.

---

# 52. COUNTRY FLAGS

If flags are used in a production build:

- derive them from `countryCode`
- use a verified country-code → flag mapping
- never hardcode an unrelated flag

Examples:
- IN = India
- ES = Spain
- IE = Ireland
- PK = Pakistan
- KR = South Korea
- IT = Italy
- CA = Canada
- BR = Brazil

The country flag is a geographic indicator only.

Do not infer ethnicity from it.

---

# 53. NO HALLUCINATION RULE FOR AI CODING AGENT

The AI coding agent must NOT:

- invent new pages
- invent new account systems
- invent subscription tiers
- invent payments
- invent country flags
- invent user demographics
- invent extra attachment types
- add random matching to normal chat
- add fake loading states
- add AI assistants
- add unnecessary gradients
- add gamification
- add social-media feeds
- add follower counts
- add likes/reactions unless explicitly requested
- add arbitrary profile fields

If the requirement is unclear, choose the simplest implementation consistent with this brief.

---

# 54. FINAL USER JOURNEY

```text
FIRST VISIT
    ↓
Create Username
    ↓
Choose Age
    ↓
Choose Country + City
    ↓
People Online
    ↓
Search / Gender / Age / Location Filters
    ↓
Select Person
    ↓
Open 1-to-1 Chat
    ↓
Send Text Message
    ↓
┌───────────────────────────┐
│ No reply                  │
│ Voice features stay LOCKED│
└───────────────────────────┘
    ↓
Reply Received
    ↓
Voice Note UNLOCKED
    ↓
Voice Chat UNLOCKED
    ↓
Voice Call + Video Call UNLOCKED
```

Separate path:

```text
Random Voice
    ↓
Finding Someone
    ↓
Match
    ↓
Voice Call
```

---

# 55. AI AGENT IMPLEMENTATION ORDER

Build in this exact order:

1. Design tokens
2. Global typography
3. Logo/header
4. Button/input primitives
5. Onboarding
6. People Online
7. Filters
8. Person cards
9. User profile
10. Chat layout
11. Message system
12. Attachment menu
13. Voice note
14. Feature unlock bar
15. Voice chat
16. Voice call
17. Video call
18. Random Voice flow
19. Rooms
20. Inbox
21. History
22. Settings
23. Safety/report/block
24. Empty/error states
25. Responsive layouts
26. Accessibility
27. Motion
28. Final QA

---

# 56. FINAL DESIGN TEST

Before considering the implementation complete, verify:

[ ] No login/password system exists
[ ] Username is unique
[ ] Age is collected
[ ] Country + city are collected
[ ] People Online is the default post-onboarding experience
[ ] No "Finding someone" appears during normal chat
[ ] Random Voice has its own matching flow
[ ] Online count exists
[ ] Search works
[ ] Gender filter works
[ ] Age filter works
[ ] Location filters work
[ ] User cards show identity/location data
[ ] Text chat works
[ ] No reply = voice features locked
[ ] Reply = Voice Note unlocked
[ ] Voice Note = Voice Chat unlocked
[ ] Voice Chat = Voice Call + Video Call unlocked
[ ] Attachment menu has ONLY PNG + MP4
[ ] PNG max = 10 MB
[ ] MP4 max = 50 MB
[ ] Unsupported files are rejected
[ ] Rooms exist
[ ] Inbox exists
[ ] History exists
[ ] Settings exist
[ ] Block/report exists
[ ] Mobile layout works
[ ] Keyboard navigation works
[ ] Reduced motion works
[ ] No competitor logo/branding appears
[ ] Country flags are data-driven
[ ] Avatar appearance is not used to infer ethnicity
[ ] Demo users/counts are clearly treated as seeded data
[ ] No unnecessary AI-style visual effects

---

# 57. ONE-SENTENCE DESIGN NORTH STAR

**RandomChat should feel like a clean, lightweight place to see who is online, choose someone, start talking, and gradually unlock richer communication as the conversation becomes mutual.**
