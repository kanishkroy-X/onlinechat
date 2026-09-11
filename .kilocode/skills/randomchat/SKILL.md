---
name: randomchat
description: Build and modify RandomChat (randomcaht.online) using the project's UI/UX specification, with verified open-source references for chat UI, anonymous real-time messaging, and random-chat architecture. Use this skill whenever implementing RandomChat frontend, backend, real-time chat, People lobby, Random Chat, country filters, or voice-request flows.
---

# RandomChat Coding Skill

## 1. Source-of-truth order

When working on RandomChat, follow this priority:

1. The latest RandomChat UI/UX specification supplied with the project.
2. Existing RandomChat code and established project conventions.
3. The user's explicit current request.
4. The open-source reference repositories listed below.

The reference repositories are implementation-learning material only. They are NOT the product specification.

Never silently replace RandomChat requirements with features from a reference repository.

## 2. Product identity

Product:
- RandomChat
- Domain: randomcaht.online
- Promise: "Meet someone new. Start a conversation."
- No traditional account creation.
- Temporary guest sessions.
- Anonymous-by-default.
- Text is the primary experience.
- Voice is optional and must require explicit acceptance.

The current UI/UX specification explicitly separates:
- People = browse/search/filter/select a person.
- Random Chat = unfiltered automatic stranger matching.

Do not merge these experiences.

## 3. Verified GitHub references

Study these repositories for patterns, not for copying.

### A. chatcn — primary chat UI reference

https://github.com/leonickson1/chatcn

Verified description: open-source React chat UI components built with shadcn/ui + Tailwind CSS, including messages, threads, reactions, file upload, and themes. MIT licensed.

Use it to study:
- message composition
- chat message layout
- reusable React chat components
- responsive chat UI
- component organization
- shadcn/Tailwind patterns

Do NOT copy:
- branding
- exact visual identity
- unrelated features
- exact component styling if it conflicts with RandomChat

### B. Sesh / Random-Chat-App — random/anonymous chat reference

https://github.com/ZeroxyDev/Random-Chat-App

Verified description: real-time chat application built with Next.js and Socket.io; includes anonymous chat and chat-room concepts. The repository is MIT licensed.

Use it to study:
- random/anonymous chat architecture
- Next.js + Socket.IO integration
- connection lifecycle
- room/match concepts
- real-time event patterns

Do NOT import its rooms/password-room model unless RandomChat explicitly requires it.

### C. anon-chat — ephemeral anonymous messaging reference

https://github.com/aditya8Raj/anon-chat

Verified description: real-time anonymous chat built with Next.js, TypeScript, Socket.IO, and Tailwind CSS. Its stated design uses ephemeral in-memory messaging and presence.

Use it to study:
- ephemeral session architecture
- Socket.IO event patterns
- presence
- online users
- typing indicators
- mobile responsive behavior
- server/client separation
- cleanup on disconnect

Important: its README claims "zero data storage" and no database. Treat that as a reference architecture, not a promise RandomChat can make unless RandomChat's actual implementation guarantees it.

## 4. RandomChat UI requirements

### People lobby

People is the primary post-setup screen.

It must support:
- online people list
- username
- age
- gender metadata
- online status
- country flag
- search by username
- gender filter: Everyone / Male / Female
- age filter, with requested default example 18–35 subject to final age policy
- country filter
- All Countries option
- compact rows
- initial-based anonymous avatars
- direct click/tap into chat

Target row density:
- mobile row about 64–76px
- avatar about 40–44px
- username 14–16px
- metadata 12–13px
- flag 20–24px

Do NOT build large dating-style profile cards.
Do NOT add bios, followers, likes, photos, dating scores, or social metrics.

### Country system

Create ONE reusable country component/data source and reuse it across:
- Guest Setup
- People filter
- People rows
- Direct chat header

Country selector requirements:
- flag
- full country name
- searchable list
- keyboard navigation on desktop
- touch scrolling on mobile
- selected-state highlight
- All Countries for People filtering
- accessible text equivalent for every flag

Preferred selector behavior:

Selected:
    🇮🇳 India ▾

Opened:
    Search country...
    🇦🇩 Andorra
    🇦🇪 United Arab Emirates
    🇦🇫 Afghanistan
    ...

Do not implement region labels as a replacement for countries.

### Logo

Use the supplied RandomChat logo as the product's primary brand mark.

Support:
- full logo/wordmark
- compact mark
- light/dark compatible presentation
- favicon/app icon derivative where appropriate

Do not replace the supplied logo with a generic chat logo.

### Icons

Use one coherent SVG icon family.

Primary:
- People
- Random Chat
- Voice
- Chats
- Settings

Tools:
- Search
- Filters/sliders
- Country/globe
- Gender
- Age
- Online status

Chat:
- Back
- More
- Send
- Request Voice
- Next Stranger
- Report
- Block

Safety:
- Shield
- Warning
- Offline
- Error

Rules:
- SVG icons, not emoji, for primary interface controls.
- Consistent 20–24px line-icon language.
- Accessible labels on icon-only buttons.
- Do not copy the exact icons from reference screenshots.

## 5. Random Chat requirements

Random Chat is separate from People.

Random Chat UI must expose NO:
- gender filter
- age filter
- country filter
- search
- person selection

Flow:

Random Chat
→ Finding someone...
→ Random stranger found
→ Chat

"Find Another Stranger" must allow the user to stay in Random Chat and rematch without returning to People unless they explicitly choose People.

## 6. Chat requirements

Direct People chat:
- show selected temporary identity
- age
- gender
- country flag
- online status
- message composer
- Next/Find Another Stranger
- Request Voice
- Report
- Block

Random Chat:
- identify the other person as Stranger unless product logic provides a temporary nickname
- same core chat controls

### Two-message cold gate

This is a server-authoritative product rule.

Before the stranger replies:
- maximum 2 consecutive messages from the initiating user

Example:
1. You → Hey
2. You → How are you?

Then:
- disable Send
- show a clear notice:
  "You've sent 2 messages. Wait for a reply before sending another."

When the other person replies:
- reset the restriction
- normal chat resumes

Never rely only on client state.
Refresh, reconnect, another tab, or manipulated client events must not bypass the limit.

## 7. Voice requirements

Voice is an optional escalation from text.

Flow:

Text Chat
→ Either person requests voice
→ Other person sees request
→ Accept / Decline
→ If accepted: Voice Chat

Rules:
- never auto-start microphone
- never autoplay voice
- explicit user acceptance required
- support mute/unmute
- support end voice
- handle declined, disconnected, and ended states
- if voice backend is not ready, show disabled/coming-soon instead of fake functionality

## 8. Responsive architecture

### Mobile 320–767px

Prioritize:
- compact People list
- bottom navigation
- bottom-sheet filters
- full-height chat
- keyboard-safe composer
- touch targets
- reduced ambient decoration

Use dvh/svh/lvh where appropriate. Do not rely exclusively on 100vh.

### Tablet 768–1023px

Use:
- compact panels
- denser list
- more breathing room
- optional two-column layouts

### Desktop 1024px+

Use:
- narrow left navigation rail
- constrained main content
- search + filters in a horizontal toolbar
- hover states
- more generous spacing

### Large desktop 1440px+

Do not stretch chat content across the entire viewport.

## 9. Visual system

Retain RandomChat's sunset/plum system:

- Deep Plum #492351
- Plum #7F376D
- Rose #D55882
- Coral #FF808A
- Peach #FFBF92
- Cream #F6E5D9

Use gradients strategically.

People and active chat should be calmer and more functional than landing/matching screens.

Dark theme reference:
- Background #241622
- Surface #301B2D
- Elevated #3B2140
- Text #FFF7F5
- Secondary #D8C7CF
- Border #58374F

Avoid:
- excessive neon
- constant particles
- giant cards
- dating-app aesthetics
- crowded old-chat-site navigation
- emoji as primary UI icons
- decorative animation that delays typing

## 10. Motion

Motion explains interaction.

Use:
- subtle online pulse
- short row entrance
- 150–220ms micro-interactions
- 250–350ms filter sheets
- 500–700ms match transition
- 1.5–2.5s connection orb loop

Avoid:
- confetti
- bouncing controls
- giant transitions
- constant particles
- excessive flashing

## 11. Privacy and safety

Do not introduce:
- email/password accounts
- permanent public profiles
- profile photos by default
- unnecessary identity collection

Safety UI:
- Report
- Block
- Don't share real name, address, phone, passwords, payment details, or other private information.

Report reasons:
- Harassment
- Spam
- Sexual/inappropriate content
- Threats
- Hate/abuse
- Scam/fraud
- Other

Do not claim permanent identity-level blocking if the architecture only has temporary sessions.

## 12. Implementation strategy for an AI coding agent

Before changing code:

1. Inspect the existing project structure.
2. Identify frontend framework and backend/real-time architecture.
3. Read the latest RandomChat UI/UX specification.
4. Preserve working features.
5. Map requirements to components and server events.
6. Implement one vertical slice at a time.
7. Test desktop and mobile after each major slice.

Recommended implementation order:

### P0
1. Guest Setup
2. Logo/brand component
3. Country dataset + reusable CountrySelector
4. People lobby
5. PersonRow
6. Search
7. Gender filter
8. Age filter
9. Country filter
10. Direct chat
11. Server-authoritative two-message gate
12. Random Chat
13. Random matchmaking
14. Find Another Stranger
15. Leave/disconnect
16. Report/block
17. Responsive/mobile shell

### P1
18. Voice request
19. Voice signaling/call
20. Audio-reactive voice UI
21. Persistent People filters within the temporary session
22. Advanced loading/empty states

### P2
23. Additional ambient motion
24. Advanced onboarding
25. Decorative polish

## 13. Architecture rules

Prefer small reusable components.

Suggested frontend component boundaries:

- RandomChatLogo
- AppShell
- NavigationRail
- MobileNavigation
- PeopleHeader
- PeopleSearch
- PeopleFilters
- CountrySelector
- CountryList
- PersonRow
- OnlineIndicator
- Avatar
- DirectChat
- ChatHeader
- MessageList
- MessageComposer
- ColdMessageNotice
- VoiceRequestDialog
- VoiceControls
- RandomChat
- MatchingOrb
- StrangerDisconnected
- SafetyMenu

Suggested server/domain boundaries:

- session
- presence
- people directory
- filters
- direct chat
- random matchmaking
- message gate
- voice signaling
- report/block
- rate limiting

Do not tightly couple People filtering to Random matchmaking.

## 14. Real-time event design

Use explicit event names and typed payloads.

At minimum model events for:
- session created
- presence updated
- people snapshot/updated
- direct chat requested
- direct chat accepted/connected
- message sent
- message received
- cold-message limit reached
- stranger replied
- stranger disconnected
- random match requested
- random match found
- random match cancelled
- next stranger requested
- voice requested
- voice accepted
- voice declined
- voice ended
- report submitted
- block applied

The exact event names can follow the existing project if already implemented. Do not rename working events without reason.

## 15. Performance

The People lobby may contain a large number of users.

Do not render thousands of DOM rows at once.

Use:
- pagination, incremental loading, or virtualization
- debounced username search where appropriate
- server-side filtering when the population is large
- efficient presence updates
- cleanup on disconnect
- stable keys for rows
- minimal rerendering

Do not broadcast the full population unnecessarily on every minor state change.

## 16. Accessibility

Required:
- semantic HTML
- keyboard navigation
- visible focus
- accessible labels
- screen-reader announcements
- sufficient contrast
- do not use color as the only state indicator
- reduced-motion support
- touch-friendly controls

Announce important real-time state:
- Match found
- New message
- Voice request
- Voice connected
- Connection lost
- Stranger disconnected
- Report submitted
- Message blocked

## 17. Reference-repository rules

When reading the GitHub references:

DO:
- understand architecture
- inspect component patterns
- compare Socket.IO event handling
- learn responsive layout techniques
- reuse ideas that fit RandomChat
- respect each repository's license

DO NOT:
- copy branding
- copy exact UI
- copy source-site text
- copy logos
- copy proprietary assets
- blindly transplant dependencies
- add unrelated features
- assume reference architecture is production-safe for RandomChat

When adapting code from a repository, verify the repository license and keep attribution/license obligations where required.

## 18. Agent behavior

If a requirement is already defined in the RandomChat UI/UX specification, implement it rather than asking the user to redefine it.

If the current code conflicts with the specification:
- identify the conflict
- prefer the latest explicit RandomChat requirement
- preserve backward compatibility where practical
- do not silently remove existing functionality

If a feature is technically impossible with the current stack:
- explain the constraint briefly
- propose the smallest compatible architecture
- do not fake the feature

Do not create placeholder UI that falsely claims a backend feature works.

## 19. Definition of done

A RandomChat implementation is not complete until:

- logo is integrated
- country selector works
- country search works
- flags appear in People rows
- People list is compact
- online indicators work
- search works
- gender filter works
- age filter works
- country filter works
- clicking a person opens direct chat
- cold-message limit is server authoritative
- Random Chat is separate and unfiltered
- random matching works
- Find Another Stranger works
- disconnect state works
- report/block work
- mobile layout works
- desktop layout works
- keyboard-safe chat composer works
- primary icons are consistent SVG icons
- voice request requires explicit acceptance
- no automatic microphone activation
- safety UI is present
- no accidental account/profile system is introduced

## 20. Final design principle

People = choice.

Random Chat = serendipity.

Chat = conversation.

Voice = optional escalation.

The People screen should be compact and useful. Random Chat should be effortless. The active conversation should be calm.
