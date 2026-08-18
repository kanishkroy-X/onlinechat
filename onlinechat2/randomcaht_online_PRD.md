# Product Requirements Document (PRD)

## Project: randomcaht.online

**Document status:** MVP PRD  
**Version:** 1.0  
**Product type:** Anonymous/random stranger text-chat website  
**Primary platform:** Responsive web  
**Authentication:** None  
**Pricing:** Free  
**Reference product:** Chatib.us  
**Working domain:** randomcaht.online

---

## 1. Product Overview

randomcaht.online is a free, browser-based platform that lets people start a text conversation with a randomly matched stranger without creating an account.

The product should minimize friction:

> Open website → choose a temporary nickname → start → get matched → chat → next stranger.

The experience should be fast, simple, mobile-friendly, and privacy-conscious.

The product is inspired by the simplicity of anonymous/random chat platforms such as Chatib.us, which currently promotes no-registration chat and supports random chat experiences. The new product should not copy its branding, content, UI, or code.

---

## 2. Problem

People who want a spontaneous conversation with a stranger often face unnecessary friction:

- Account creation
- Email verification
- Profiles
- Social connections
- Downloads
- Complicated interfaces
- Long onboarding

The product should provide an immediate way to start a conversation while reducing the amount of personal information collected.

---

## 3. Product Goal

### Primary goal

Allow a new visitor to reach a real stranger conversation with as few steps as possible.

### MVP success condition

A first-time visitor should be able to:

1. Open the website.
2. Enter a temporary nickname.
3. Start random matching.
4. Be placed in a waiting state if nobody is immediately available.
5. Be connected to another available stranger.
6. Exchange text messages in real time.
7. Leave the conversation and receive another stranger.

---

## 4. Target Users

### Primary users

People who:

- Want casual conversations with strangers.
- Do not want to create an account.
- Want a quick, low-friction experience.
- Use desktop or mobile browsers.
- Prefer text chat over voice/video for the MVP.

### Initial audience

The website should be usable internationally.

The MVP should not require users to select a country, gender, age, or detailed profile unless a later product decision requires it.

---

## 5. Product Principles

### 1. Zero unnecessary friction

Do not force registration, email, password, or profile creation.

### 2. Fast to conversation

The product should prioritize getting users into a chat rather than making them configure preferences.

### 3. Privacy by default

Collect and retain the minimum information required to operate the service, prevent abuse, and maintain reliability.

### 4. Safety before growth

Anonymous communication creates abuse risks. Rate limiting, reporting, blocking, input validation, and abuse controls are part of the MVP.

### 5. Mobile first

The chat experience must work properly on small screens and touch devices.

### 6. Simple UI

The interface should make the next action obvious. Avoid unnecessary dashboards, menus, profiles, and social features.

---

# 6. MVP Scope

## 6.1 Landing Page

The homepage should communicate:

- What the service does.
- That it is free.
- That no account is required.
- A clear Start Chat CTA.
- Basic safety guidance.
- Age/safety restriction appropriate to the final policy.
- Links to Privacy, Terms, and Safety pages.

### Primary CTA

**Start Chat**

---

## 6.2 Guest Identity

The user does not create an account.

They may enter a temporary nickname before entering the matching queue.

Example:

```text
Choose a nickname

[ RandomUser123        ]

[ Start Chat ]
```

The nickname:

- Is temporary.
- Is not a permanent profile.
- Does not require an email.
- Should be validated for length and unsafe input.
- Should not be allowed to impersonate system/admin identities.

---

## 6.3 Random Matching

After selecting a nickname, the user enters a matching queue.

Possible states:

```text
Searching for a stranger...
```

When another compatible waiting user exists:

```text
Match found
```

The system creates a temporary chat session between the two users.

### Matching requirements

- A user must not be matched with themselves.
- A user should not be matched with the same stranger immediately after pressing "Next" when another reasonable match is available.
- Users who disconnect must be removed from the active matching queue.
- A user can have only one active chat session at a time.
- Rapid repeated matching requests must be rate limited.

---

# 7. Chat Experience

The core screen contains:

- Stranger nickname
- Connection/status indicator
- Message history for the current session
- Text input
- Send button
- Next button
- Leave/disconnect action
- Report/block controls

Example:

```text
┌─────────────────────────────────┐
│ Stranger123          ● Connected│
├─────────────────────────────────┤
│                                 │
│ Stranger: Hey                   │
│                                 │
│ You: Hello!                     │
│                                 │
├─────────────────────────────────┤
│ Type a message...       [Send]  │
├─────────────────────────────────┤
│ [Next Stranger] [Report] [Block]│
└─────────────────────────────────┘
```

---

# 8. Messaging Requirements

Messages must:

- Send in real time.
- Appear without a page refresh.
- Display sender identity clearly.
- Reject empty messages.
- Enforce a maximum message length.
- Sanitize/escape user-generated content.
- Rate-limit excessive messages.
- Handle temporary network failures gracefully.

The MVP supports **text only**.

Do not build voice, video, file sharing, image sharing, or screen sharing in the MVP.

---

# 9. Next Stranger

The user can end the current conversation and request another random match.

Expected flow:

```text
Current chat
    ↓
Next Stranger
    ↓
Current session closed
    ↓
User enters matching queue
    ↓
New stranger found
    ↓
New chat
```

The previous conversation should not remain active.

The system must prevent the old partner from continuing to send messages after the session has ended.

---

# 10. Disconnect Handling

The system must handle:

- User closes browser.
- User refreshes page.
- Network disconnects.
- Browser goes offline.
- Stranger presses Next.
- Stranger leaves.
- Server/session failure.

Example state:

```text
Stranger disconnected.

[Find Another Stranger]
```

A disconnected user should be removed from the active matchmaking pool.

---

# 11. Reporting and Blocking

Anonymous chat requires basic abuse controls.

### Report

Users should be able to report the current stranger.

Possible reasons:

- Harassment
- Spam
- Sexual/inappropriate content
- Threats
- Hate/abusive behavior
- Scam/fraud
- Other

### Block

A user should be able to prevent further interaction with the reported stranger where technically feasible.

The system should maintain enough temporary identifiers to enforce blocking without requiring permanent user accounts.

---

# 12. Abuse Prevention

The MVP must include basic anti-abuse protections.

### Required controls

- Rate limiting.
- Message-length limits.
- Input validation.
- Output sanitization.
- Connection/session limits.
- Matching request limits.
- Spam protection.
- Bot/automation mitigation where appropriate.
- Temporary bans or abuse flags.
- Report handling.
- Protection against oversized payloads.
- Protection against common injection/XSS attacks.

Do not rely on the browser/client to enforce security rules. Critical validation must happen server-side.

---

# 13. Privacy Requirements

The product should collect as little personal information as practical.

### Do not require

- Email
- Password
- Real name
- Phone number
- Profile photo
- Social media account

### Temporary data may include

- Anonymous session identifier
- Temporary nickname
- Matching/session state
- Connection timestamps
- Abuse/rate-limit identifiers
- Report information where required

The final data-retention policy must be explicitly defined before production launch.

---

# 14. Age and Safety

The product must have a clearly defined age policy before launch.

The MVP should:

- Clearly display the minimum permitted age.
- Provide basic safety guidance.
- Warn users not to share personal information.
- Provide reporting/blocking mechanisms.
- Include Terms, Privacy, and Safety pages.

The exact age restriction and legal requirements must be validated for the countries in which the service will operate.

---

# 15. Core User Flows

## Flow A — First visit

```text
Homepage
 ↓
Read basic product/safety information
 ↓
Enter nickname
 ↓
Start Chat
 ↓
Matching
 ↓
Chat
```

## Flow B — Match found

```text
Matching
 ↓
Match found
 ↓
Chat screen
 ↓
Send/receive messages
```

## Flow C — Next stranger

```text
Chat
 ↓
Next Stranger
 ↓
Close current session
 ↓
Matching
 ↓
New stranger
```

## Flow D — Stranger disconnects

```text
Chat
 ↓
Stranger disconnects
 ↓
Show disconnected state
 ↓
Find Another Stranger
```

## Flow E — Report

```text
Chat
 ↓
Report
 ↓
Select reason
 ↓
Submit
 ↓
Confirmation
 ↓
Optionally leave/block
```

---

# 16. MVP Non-Goals

The following are explicitly OUT OF SCOPE for the first version:

- User accounts
- Passwords
- Email verification
- User profiles
- Friend system
- Followers
- Permanent chat history
- Public social feed
- Voice chat
- Video chat
- File sharing
- Image sharing
- Payments
- Subscriptions
- Premium accounts
- Complex user matching filters
- Dating features
- Native mobile apps
- Large-scale recommendation algorithms

These can be reconsidered only after the core random-chat experience is working and has evidence of demand.

---

# 17. Functional Requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-01 | Visitor can open the site without an account | P0 |
| FR-02 | Visitor can choose a temporary nickname | P0 |
| FR-03 | Visitor can start random matching | P0 |
| FR-04 | System can place users into a waiting queue | P0 |
| FR-05 | System can match two available users | P0 |
| FR-06 | Users can exchange real-time text messages | P0 |
| FR-07 | Users can end the current chat | P0 |
| FR-08 | Users can request another stranger | P0 |
| FR-09 | System handles disconnects | P0 |
| FR-10 | Messages are validated and sanitized | P0 |
| FR-11 | System rate-limits abusive activity | P0 |
| FR-12 | User can report a stranger | P0 |
| FR-13 | User can block a stranger | P1 |
| FR-14 | Site works on mobile and desktop | P0 |
| FR-15 | Privacy/Terms/Safety pages are available | P0 |
| FR-16 | Basic analytics can measure product usage without requiring accounts | P1 |

---

# 18. Non-Functional Requirements

## Performance

The application should:

- Load quickly on normal mobile connections.
- Keep the landing page lightweight.
- Establish chat connections quickly.
- Avoid unnecessary client-side JavaScript.
- Handle temporary network failures gracefully.

## Reliability

The system should:

- Avoid duplicate active sessions.
- Recover cleanly from disconnects.
- Never leave users permanently stuck in a matching queue.
- Expire abandoned sessions.

## Security

The system must:

- Validate all untrusted input.
- Sanitize user-generated content.
- Protect server-side secrets.
- Apply rate limits.
- Prevent unauthorized session access.
- Secure real-time communication.
- Avoid exposing sensitive infrastructure information.

## Accessibility

The UI should:

- Support keyboard navigation.
- Use readable text sizes.
- Provide visible focus states.
- Maintain sufficient contrast.
- Provide accessible labels for controls.
- Work with common screen-reader patterns where practical.

---

# 19. Success Metrics

The first version should measure the following:

### Acquisition

- Unique visitors
- Start Chat clicks
- Start-chat conversion rate

### Matching

- Users entering queue
- Successful matches
- Match success rate
- Average waiting time

### Engagement

- Messages per session
- Chat duration
- Next Stranger usage
- Sessions per visitor

### Reliability

- Failed matches
- Disconnect rate
- Message delivery failures
- Client/server errors

### Safety

- Reports per 100 sessions
- Blocks per 100 sessions
- Rate-limit events
- Banned/flagged sessions

The initial goal is not maximum traffic.

The goal is proving:

> **People can arrive, get matched quickly, have a usable conversation, and successfully start another chat.**

---

# 20. MVP Acceptance Criteria

The MVP is ready for production testing when:

- [ ] A visitor can start without registration.
- [ ] A temporary nickname can be created.
- [ ] Two independent browsers can be matched.
- [ ] Both users can exchange real-time messages.
- [ ] Messages appear in the correct conversation.
- [ ] Empty/oversized/invalid messages are rejected.
- [ ] Next Stranger terminates the old session correctly.
- [ ] Disconnects are detected and handled.
- [ ] Users cannot access another user's active session.
- [ ] Basic rate limiting works.
- [ ] Report functionality works.
- [ ] Block functionality works or has a documented MVP limitation.
- [ ] Mobile UI works.
- [ ] Desktop UI works.
- [ ] Privacy, Terms, and Safety pages exist.
- [ ] Production secrets are not exposed to the client.
- [ ] Production deployment has been tested with two real browser sessions.
- [ ] Basic security checks pass.

---

# 21. Recommended MVP Architecture Direction

The final architecture should be chosen after evaluating the real-time requirements.

The product needs three fundamental capabilities:

```text
1. Static web application
       ↓
2. Real-time chat transport
       ↓
3. Temporary matchmaking/session state
```

Because this is an anonymous real-time application, the architecture should prioritize:

- Low latency
- Simple session management
- Automatic cleanup of abandoned sessions
- Horizontal scalability if traffic grows
- Strong server-side validation
- Minimal persistent personal data

Do not introduce a traditional user-account backend unless a future feature actually requires it.

---

# 22. Future Features — NOT MVP

Potential future additions:

- Interest-based matching
- Country/language matching
- Optional age-range matching
- Topic matching
- Guest preferences
- Smarter anti-bot systems
- Automated moderation
- Conversation quality scoring
- Temporary session history
- Voice chat
- Video chat
- Mobile applications
- Monetization/advertising
- Premium features

These should be evaluated only after MVP usage data exists.

---

# 23. Key Product Risks

### Risk 1 — Not enough simultaneous users

Random matching fails if there are not enough people online.

**Mitigation:** Make waiting states clear, optimize acquisition, and consider alternative matching modes later.

### Risk 2 — Bots and spam

Anonymous systems are attractive targets for automation.

**Mitigation:** Rate limits, bot detection, session controls, abuse monitoring, and progressive restrictions.

### Risk 3 — Harassment/inappropriate content

Stranger communication can produce unsafe interactions.

**Mitigation:** Report/block, safety guidance, moderation controls, age policy, and clear enforcement rules.

### Risk 4 — WebSocket/session abuse

Attackers may attempt to create large numbers of connections or messages.

**Mitigation:** Server-side rate limiting, connection limits, payload limits, session expiration, and infrastructure-level protection.

### Risk 5 — Privacy mistakes

"No login" does not automatically mean "anonymous."

**Mitigation:** Define exactly what data is collected, why it is collected, how long it is retained, and who can access it.

---

# 24. Definition of Done

The MVP is considered complete when the core experience works end-to-end:

```text
Visitor
  ↓
Nickname
  ↓
Start Chat
  ↓
Match
  ↓
Real-time conversation
  ↓
Next Stranger
  ↓
New match
```

and the system has basic:

```text
Security
+ Abuse prevention
+ Reporting
+ Privacy controls
+ Mobile support
+ Production testing
```

No additional feature should be added to the MVP unless it directly improves the core random-chat experience or is required for safety, security, legal compliance, or reliable operation.

---

## Final Product Definition

**randomcaht.online is a free, anonymous-by-default random text-chat website that lets visitors quickly meet and talk to strangers without creating an account.**

The MVP optimizes for:

**Low friction → Fast matching → Real-time chat → Easy next match → Safety → Privacy**
