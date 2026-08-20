# RandomChat — Dark Mode UI/UX Specification

**Version:** 1.0  
**Purpose:** Implementation-ready specification for an AI coding agent  
**Design mode:** Dark theme  
**Product:** RandomChat

---

## 1. Purpose

This document defines the dark-mode UI system and screen structure for RandomChat.

The AI coding agent must use the supplied dark-mode separated screenshots as **visual references**, while this document defines the product behavior and implementation rules.

### Source of truth priority

1. Product requirements in this document
2. Supplied RandomChat dark-mode reference screens
3. Existing RandomChat UI/UX specification
4. Never invent missing product behavior

The goal is to reproduce the visual language accurately without blindly copying unrelated competitor branding.

---

# 2. Dark Mode Design Direction

RandomChat dark mode should feel:

- Clean
- Minimal
- Premium
- Calm
- Modern
- Easy to scan
- Social without looking like a gaming dashboard

Avoid:

- Cyberpunk styling
- Excessive neon
- Heavy glassmorphism
- Animated backgrounds
- Large gradients
- Glow effects everywhere
- AI-slop aesthetics
- Overly rounded cards
- Excessive decorative elements

The interface should remain primarily functional.

---

# 3. Brand Identity

## Logo

Use the existing RandomChat wordmark.

Treatment:

- `Random` → light/white text
- `Chat` → brand purple
- Optional chat-bubble brand icon
- Keep the logo compact

Do not replace the logo with a generic AI icon.

Do not use competitor branding.

---

# 4. Typography

Primary typeface:

**Inter**

Use:

- 400 Regular
- 500 Medium
- 600 SemiBold
- 700 Bold

### Type scale

| Element | Size | Weight |
|---|---:|---|
| Display | 32px | 700 |
| H1 | 28px | 700 |
| H2 | 22px | 600 |
| H3 | 18px | 600 |
| Body | 16px | 400 |
| Secondary | 14px | 400 |
| Label | 13px | 500 |
| Caption | 12px | 400 |

Do not introduce decorative fonts.

---

# 5. Dark Color System

Use a near-black navy background rather than pure black.

### Core tokens

```css
--background: #07111B;
--surface: #0B1722;
--surface-elevated: #101D2A;
--surface-hover: #142436;

--border: #1D3040;
--border-strong: #294052;

--text-primary: #F5F7FA;
--text-secondary: #9AAABD;
--text-muted: #718397;

--primary: #6C4DFF;
--primary-hover: #7B61FF;
--primary-soft: rgba(108, 77, 255, 0.14);

--success: #18D889;
--warning: #F5B83D;
--danger: #FF4D5F;

--media-accent: #00D9A3;
```

### Color rules

Purple is used for:

- Active navigation
- Primary brand accent
- Selected filters
- Progress indicators
- Unlocked states
- Important interaction feedback

Green is used for:

- Online indicators
- Successful validation
- Unlocked status

Red is used for:

- Report
- Block/destructive actions
- End-call control

Do not make the entire interface purple.

---

# 6. Surface Hierarchy

Use three major dark surfaces.

### Level 0

Page background:

`#07111B`

### Level 1

Cards and panels:

`#0B1722`

### Level 2

Elevated elements:

`#101D2A`

The visual hierarchy should come primarily from:

- Surface contrast
- Borders
- Typography
- Spacing

Not heavy shadows.

---

# 7. Borders

Default:

```css
border: 1px solid #1D3040;
```

Focused control:

```css
border-color: #6C4DFF;
```

Do not use glowing borders.

---

# 8. Radius

Use restrained rounding.

| Component | Radius |
|---|---:|
| Inputs | 10px |
| Buttons | 10px |
| Cards | 14px |
| Modals | 16px |
| Pills | 999px |
| Avatar | 50% |

---

# 9. Navigation

Desktop navigation includes:

- RandomChat logo
- Online
- Gender
- Age
- Location
- History
- Search
- Inbox
- Friends
- Random

The navigation must remain compact.

### Active navigation

Use:

- Purple icon
- Purple text
- subtle purple background if needed

Do not use large glowing navigation indicators.

---

# 10. People Online Screen

This is the default experience after onboarding.

### Important

Normal chat does **not** use random matching.

The user should immediately see people who are online.

Do not display:

> Finding someone...

on the normal people/chat screen.

### Header

Display:

- Online status
- Online count
- Search
- Inbox/notifications
- Menu

Example:

```text
● 2,482 people online
Ready to chat now
```

During demo/pre-launch mode, this number may be seeded.

Once real users are active, production must use real telemetry.

---

# 11. People List

Each person contains:

- Avatar
- Username
- Age
- City
- Country
- Online indicator
- Open-chat action

Example:

```text
Ava Martinez
22 · Barcelona, Spain
●
```

### Avatar diversity

Use diverse avatars.

Do not infer ethnicity from:

- avatar
- username
- country
- city

Avatar appearance and geographic location are separate data.

---

# 12. Filters

The dark-mode filter panel contains:

## Gender

- All
- Male
- Female
- Other

## Age

Range slider.

Default example:

18–35

## Location

Country:

- All Countries
- specific country

City:

- All Cities
- specific city

Buttons:

- Apply Filters
- Clear all

Filters should update the visible people list.

---

# 13. Country Flags

If flags are displayed:

- derive them from verified country-code data
- never manually assign a flag to a user
- never infer nationality from avatar appearance

Example mappings:

```text
IN → India
ES → Spain
IE → Ireland
PK → Pakistan
KR → South Korea
IT → Italy
CA → Canada
BR → Brazil
```

A flag represents geographic location only.

---

# 14. Active Chat

The active chat screen is the primary product experience.

### Header

Contains:

- Back
- Avatar
- Username
- Online status
- Age
- City
- Country
- Safety
- Voice Call
- Video Call
- More menu

Example:

```text
Ava Martinez
● Online · 22 · Barcelona, Spain
```

---

# 15. Progressive Communication Unlock

This is a core RandomChat rule.

## Initial state

User has not received a reply.

Locked:

- Voice Note
- Voice Chat
- Voice Call
- Video Call

Only text messaging is available.

---

## User sends a message

Still locked.

Show:

```text
Waiting for a reply
```

Do not unlock anything simply because the user sends a message.

---

## Other person replies

Voice Note becomes unlocked.

```text
✓ Voice Note Unlocked
```

---

## Voice Note unlocked

Voice Chat becomes available.

```text
✓ Voice Chat Unlocked
```

---

## Voice Chat unlocked

Voice Call and Video Call become available.

```text
✓ Voice Call Unlocked
✓ Video Call Unlocked
```

The interface must always reflect the actual backend state.

---

# 16. Feature Unlock Bar

At the top of the chat screen:

```text
Voice Note → Voice Chat → Voice Call → Video Call
```

Locked items:

- muted
- lock icon
- low contrast

Unlocked items:

- normal contrast
- purple/green accent
- check/unlocked indicator

Do not use large animations when a feature unlocks.

---

# 17. Locked State

Example:

```text
🔒 Voice Note
Locked
```

```text
🔒 Voice Chat
Locked
```

```text
🔒 Voice Call
Locked
```

```text
🔒 Video Call
Locked
```

Locked controls should not appear fully interactive.

---

# 18. Feature Unlock Explanation

Include a help panel:

### How chat features unlock

1. You send a message
2. They reply
3. Voice Note unlocks
4. Voice Chat unlocks
5. Voice Call + Video Call unlock

If there is no reply:

```text
If there's no reply,
features remain locked.
```

---

# 19. Voice Note

Voice Note screen includes:

- User avatar
- Online status
- Waveform
- Play/pause
- Recording button
- Duration
- Send
- Cancel

Suggested maximum duration:

**60 seconds**

unless backend requirements change.

---

# 20. Voice Note in Chat

Voice-note message bubble contains:

- Play/pause
- Waveform
- Duration
- Timestamp

Example:

```text
▶ ───────────── 00:08
```

Use media accent green/purple sparingly.

---

# 21. Voice Chat

Voice Chat is a live communication mode.

Screen contains:

- Participant avatar
- Username
- Online/connected state
- Waveform
- Mute
- Speaker
- End call

Use a darker elevated surface for call mode.

The call interface should be extremely simple.

---

# 22. Voice Call

Voice Call screen contains:

- Participant avatar
- Username
- Calling/connected status
- Mute
- Speaker
- End Call

End Call:

- red
- circular or clearly dominant destructive control

---

# 23. Video Call

Video Call screen contains:

- Large remote video
- Small local preview
- Mute
- Camera
- Speaker if available
- End Call
- Flip camera where supported

Do not overcrowd the call interface.

---

# 24. Random Voice

Random Voice is separate from normal messaging.

This is the ONLY normal product flow where matching/loading is shown.

Flow:

```text
Random Voice
↓
Finding someone...
↓
Connecting
↓
Voice Call
```

Normal people browsing must never use this loading screen.

---

# 25. Rooms

Rooms are a separate discovery surface.

Examples:

- India Chat Room
- Dating Chat Room
- Singles Chat Room
- General Chat Room
- College Chat Room
- Music Chat Room
- Chill & Hangout
- International Chat Room

Each room shows:

- Icon
- Room name
- Online count

Example:

```text
India Chat Room       152 Online
Music Chat Room        78 Online
```

---

# 26. Room Detail

Contains:

- Room title
- Online count
- Members
- Description
- Rules
- Join Room

Rules should be concise.

---

# 27. Inbox

Tabs:

- All
- Chats
- Calls
- Requests

Each row:

- Avatar
- Username
- Last message
- Timestamp
- Unread count

Unread badges use purple.

---

# 28. Settings

Sections:

## Account

- Edit Nickname
- Clear Chat History
- Blocked Users

## Privacy

- Who can message me
- Read receipts
- Show online status

## Notifications

- Message notifications
- Sound

There is no:

- Password
- Email
- Google login
- Apple login
- Account recovery

because RandomChat does not use a traditional login system.

---

# 29. User Info

Profile panel contains:

- Avatar
- Username
- Age
- City
- Country
- Online status

Actions:

- Block User
- Report User

Never expose:

- Email
- Phone
- Exact address
- Private information

---

# 30. Attachments

There are ONLY TWO attachment options.

## PNG

```text
Photo (PNG)
Up to 10 MB
```

Allowed:

`.png`

Maximum:

**10 MB**

## MP4

```text
Video (MP4)
Up to 50 MB
```

Allowed:

`.mp4`

Maximum:

**50 MB**

Do not add:

- MP3
- PDF
- DOCX
- ZIP
- arbitrary files

---

# 31. Attachment Errors

Unsupported:

```text
File type not supported.
Only PNG images and MP4 videos are allowed.
```

PNG too large:

```text
This image is larger than 10 MB.
```

MP4 too large:

```text
This video is larger than 50 MB.
```

---

# 32. Empty States

People:

```text
No people match your filters.
```

Inbox:

```text
No conversations yet.
```

Rooms:

```text
No rooms available.
```

History:

```text
No recent activity.
```

Use a simple icon and one useful action.

---

# 33. Loading States

Use loading only when there is a real wait.

Allowed:

- Network requests
- Uploading
- Voice/video connection
- Random Voice matching

Do not use decorative loading animations.

---

# 34. Motion

Motion should be:

**Fast → Smooth → Subtle → Purposeful**

Recommended:

| Interaction | Duration |
|---|---:|
| Hover | 150ms |
| Press | 100–150ms |
| Message | 180–200ms |
| Dropdown | 150–200ms |
| Modal | 250ms |
| Drawer | 250–300ms |
| Screen transition | 300–400ms |
| Call connection | 400–700ms |

Avoid:

- floating particles
- animated gradients
- glowing borders
- bouncing cards
- constant background motion

Support:

`prefers-reduced-motion`

---

# 35. Responsive Rules

## Desktop

Use:

- Navigation
- Filter/sidebar
- People list
- Chat panel

## Tablet

Collapse:

- secondary navigation
- filters into drawer

Keep:

- people
- chat

## Mobile

Use:

- single-column navigation
- full-screen people list
- full-screen chat
- bottom-sheet filters
- sticky composer
- full-screen calls

Minimum touch target:

**44px**

Recommended:

**48px**

---

# 36. Component Inventory

### Global

- Logo
- Button
- IconButton
- Input
- Select
- Dropdown
- Avatar
- Badge
- Modal
- Drawer
- Toast
- Tabs

### People

- OnlineCount
- OnlineAvatarRow
- PersonCard
- PeopleList
- SearchPeople
- GenderFilter
- AgeFilter
- LocationFilter
- FilterPanel

### Chat

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

### Calls

- VoiceChatScreen
- VoiceCallScreen
- VideoCallScreen
- CallControls
- CallStatus
- RemoteParticipant
- LocalPreview

### Other

- RoomList
- RoomCard
- RoomDetail
- InboxList
- HistoryList
- SettingsPanel
- ReportModal
- BlockModal

---

# 37. Component State Requirements

Every interactive component must support where relevant:

- Default
- Hover
- Focus
- Active
- Disabled
- Loading
- Success
- Error
- Empty

Chat-specific:

- No reply
- Waiting for reply
- Reply received
- Voice Note unlocked
- Voice Chat unlocked
- Voice Call unlocked
- Video Call unlocked

---

# 38. Accessibility

Required:

- Semantic HTML
- Keyboard navigation
- Visible focus
- ARIA labels
- 44px minimum touch targets
- Adequate contrast
- Text alternatives for status
- Accessible form errors
- Accessible upload errors
- Reduced motion support

Never communicate important information using color alone.

---

# 39. AI IMPLEMENTATION RULES

The coding agent must NOT:

- Add a login system
- Add passwords
- Add email registration
- Add social login
- Add random matching to normal chat
- Add MP3 attachments
- Add arbitrary file uploads
- Invent profile fields
- Invent payment systems
- Invent subscriptions
- Invent social-feed features
- Invent AI assistants
- Add excessive gradients
- Add cyberpunk effects
- Add unnecessary loading screens
- Randomly assign country flags
- Infer ethnicity from avatars

When information is unspecified, use the simplest implementation consistent with this document.

---

# 40. Dark Mode Screen Reference Set

The separated reference package contains:

1. `01_dark_people_online_filters.png`
2. `02_dark_active_chat.png`
3. `03_dark_user_info.png`
4. `04_dark_feature_unlock.png`
5. `05_dark_rooms.png`
6. `06_dark_voice_note_info.png`
7. `07_dark_voice_note_chat.png`
8. `08_dark_voice_chat.png`
9. `09_dark_voice_call.png`
10. `10_dark_video_call.png`
11. `11_dark_settings.png`
12. `12_dark_inbox.png`

Plus:

`00_dark_mode_original_reference.png`

and:

`manifest.json`

Use these files as visual references, not as a substitute for the behavioral rules in this document.

---

# 41. Final Product Flow

## Normal Chat

```text
Username
↓
Age
↓
Country + City
↓
People Online
↓
Search / Gender / Age / Location
↓
Select Person
↓
Text Chat
↓
Send Message
↓
Wait for Reply
↓
Reply Received
↓
Voice Note Unlocked
↓
Voice Chat Unlocked
↓
Voice Call + Video Call Unlocked
```

## Random Voice

```text
Random Voice
↓
Finding Someone
↓
Connecting
↓
Voice Call
```

These two flows must remain separate.

---

# 42. Design North Star

> **RandomChat should feel like a clean dark place where users can immediately see who is online, choose someone to talk to, and gradually unlock richer communication as the conversation becomes mutual.**
