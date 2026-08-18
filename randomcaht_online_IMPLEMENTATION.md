# IMPLEMENTATION.md

## randomcaht.online — MVP Implementation Plan

**Version:** 1.0  
**Status:** Build plan  
**Source documents:**
- `PRD.md`
- `ARCHITECTURE.md`
- `UI-UX.md`
- `DESIGN.md` — visual authority when present

---

# 1. Implementation Objective

Build the smallest production-capable version of `randomcaht.online` that can:

1. Open without an account.
2. Create a temporary guest session.
3. Collect nickname, gender, and matching preference.
4. Find a compatible stranger.
5. Establish a real-time chat.
6. Enforce the two-message cold-message gate.
7. Support Next Stranger and Leave.
8. Handle disconnects and stale sessions.
9. Provide Report and Block.
10. Apply server-side validation and rate limits.
11. Support Light/Dark/System themes.
12. Support i18n-ready UI.
13. Work responsively across mobile, tablet, laptop, and desktop.
14. Deploy through Cloudflare.

Do not implement features marked out of scope in the PRD.

---

# 2. Non-Negotiable Architecture Decision

Astro handles the website/UI and server-side HTTP functionality.

The real-time stateful layer must not be simulated inside Astro's frontend.

Recommended deployment:

```text
Browser
   │
   ▼
Cloudflare
   │
   ├── Astro application
   │
   └── Cloudflare Worker
            │
            ▼
      Durable Objects
            │
            ├── Matchmaking state
            ├── Active chat sessions
            ├── WebSockets
            ├── Cold-message counters
            └── Temporary session state
```

Use the Astro Cloudflare adapter for the Astro application.

Use Cloudflare Durable Objects for coordination of stateful real-time sessions.

The exact APIs and configuration must be verified against the current Astro and Cloudflare documentation before implementation.

Do not invent framework APIs.

---

# 3. Build Order

Build in this order:

```text
Phase 0  Inspect project + DESIGN.md
Phase 1  Foundation + styling
Phase 2  Landing + guest setup
Phase 3  Client session model
Phase 4  Real-time infrastructure
Phase 5  Matchmaking
Phase 6  Chat
Phase 7  Cold-message gate
Phase 8  Disconnect / Next / Leave
Phase 9  Safety / Report / Block
Phase 10 Theme + i18n
Phase 11 Responsive/accessibility polish
Phase 12 Testing
Phase 13 Security audit
Phase 14 Cloudflare deployment
Phase 15 Production verification
```

Do not jump directly into matchmaking before the real-time architecture is established.

---

# 4. Phase 0 — Inspect Before Coding

Before modifying code:

1. Read `DESIGN.md`.
2. Read `PRD.md`.
3. Read `ARCHITECTURE.md`.
4. Read `UI-UX.md`.
5. Inspect the existing Astro project.
6. Identify Astro version.
7. Identify package manager.
8. Identify current integrations.
9. Identify Tailwind configuration.
10. Check whether Tailwind v4 is already configured.
11. Inspect existing routes/components.
12. Inspect existing environment configuration.
13. Check Git status.

Do not overwrite existing work blindly.

### Verification

Produce a short implementation map:

```text
Existing:
- framework
- Astro version
- styling
- components
- deployment config

Need:
- realtime layer
- session state
- matchmaking
- chat state
- safety
```

If the project already contains working code, preserve it unless it conflicts with the source documents.

---

# 5. Phase 1 — Foundation

## 5.1 Project requirements

Verify:

- Astro is installed.
- Cloudflare adapter is installed/configured where needed.
- Tailwind v4 is configured according to the project's current supported Astro integration.
- TypeScript configuration is valid.
- Build command works.

Do not downgrade or replace dependencies without a reason.

## 5.2 Design tokens

Create a centralized token system.

Primary palette:

```text
--color-plum-deep: #492351
--color-plum: #7F376D
--color-rose: #D55882
--color-coral: #FF808A
--color-peach: #FFBF92
--color-cream: #F6E5D9
```

Supporting colors:

```text
--color-white: #FFFFFF
--color-text: #2A2027
--color-text-muted: #665B63
--color-border: #E8DDE0
```

Dark theme tokens:

```text
--color-dark-bg: #241622
--color-dark-surface: #301B2D
--color-dark-elevated: #3B2140
--color-dark-text: #FFF7F5
--color-dark-muted: #D8C7CF
--color-dark-border: #58374F
```

If `DESIGN.md` specifies different values, use `DESIGN.md`.

## 5.3 Base components

Create only reusable components that are actually needed:

```text
Button
Input
SegmentedControl
Modal
IconButton
StatusIndicator
Toast
```

Do not create a large component library.

### Verification

Run:

```text
dev server
build
typecheck
lint
```

Fix all errors before proceeding.

---

# 6. Phase 2 — Landing and Guest Setup

Implement:

```text
/
```

Landing sections:

- Header
- Hero
- Primary CTA
- How it works
- Safety/trust section
- Footer/legal links

Primary CTA:

```text
Start Chat
```

Guest setup:

```text
Nickname
Your gender: Male / Female
Chat with: Male / Female / Anyone
Start Chat
```

Validation:

- Required nickname.
- Length limits.
- Unsafe input rejection/sanitization.
- Prevent impersonation of reserved system/admin names.
- Valid gender.
- Valid preference.

Client validation is for UX only.

Server validation is authoritative.

### Verification

Test:

- Empty nickname.
- Very long nickname.
- Invalid values.
- Reserved names.
- Keyboard navigation.
- Mobile layout.

---

# 7. Phase 3 — Guest Session

Create a temporary guest session.

Conceptual object:

```text
GuestSession {
  sessionId
  nickname
  gender
  preference
  status
  createdAt
  lastSeenAt
  activeMatchId
}
```

Session IDs must be unpredictable.

Do not use:

```text
1
2
3
4
```

as identifiers.

The client must not be able to arbitrarily change:

```text
sessionId
activeMatchId
status
```

after the server establishes the session.

### Session states

```text
idle
queued
matched
chatting
disconnecting
expired
```

### Verification

Confirm:

- Session survives normal client state transitions.
- Session cannot be impersonated.
- Expired sessions are rejected.
- One session cannot create multiple active matches.

---

# 8. Phase 4 — Real-Time Infrastructure

Implement the WebSocket-compatible real-time layer through the selected Cloudflare Worker/Durable Object architecture.

Do not treat Astro's static page rendering as the real-time server.

## Connection flow

```text
Browser
  ↓
Request/create guest session
  ↓
Obtain authorized realtime connection
  ↓
WebSocket connection
  ↓
Durable Object
  ↓
Authenticate/authorize connection
```

## Server message envelope

Use a typed protocol.

Example:

```json
{
  "type": "message.send",
  "requestId": "unique-id",
  "payload": {
    "content": "Hello"
  }
}
```

Server events:

```text
session.ready
match.searching
match.found
chat.connected
message.received
message.rejected
chat.ended
chat.partner_disconnected
rate_limit.reached
error
```

Do not use arbitrary untyped strings throughout the application.

## Connection requirements

Implement:

- Connection authentication/authorization.
- Heartbeat/keepalive where appropriate.
- Connection cleanup.
- Server-side session association.
- Graceful close handling.

### Verification

Open two independent browser sessions.

Confirm:

```text
A connects
B connects
A/B remain separate
```

No chat should exist before matchmaking creates one.

---

# 9. Phase 5 — Matchmaking

Implement the compatibility function first as a pure function.

Concept:

```text
isCompatible(A, B)
```

Rules:

```text
A.preference == anyone
OR
A.preference == B.gender
```

AND:

```text
B.preference == anyone
OR
B.preference == A.gender
```

Example:

```text
Male + wants Female
Female + wants Anyone

→ compatible
```

```text
Male + wants Female
Male + wants Anyone

→ incompatible
```

## Queue

Queue entries contain only the state needed for matching.

```text
QueueEntry {
  sessionId
  gender
  preference
  queuedAt
}
```

## Atomic matching

Before creating a match:

1. Verify A exists.
2. Verify B exists.
3. Verify both are queued.
4. Verify neither already has a match.
5. Re-check compatibility.
6. Reserve both.
7. Create match.
8. Remove both from queue.
9. Notify both clients.

Race conditions must not create duplicate matches.

### Verification matrix

Test every preference combination.

```text
A gender × A preference
B gender × B preference
```

Include:

- Male → Male
- Male → Female
- Male → Anyone
- Female → Male
- Female → Female
- Female → Anyone
- Both-way compatibility
- One-way incompatibility

---

# 10. Phase 6 — Active Chat

Create the active match model:

```text
Match {
  matchId
  participantA
  participantB
  createdAt
  lastActivityAt
  status
}
```

Only participants in the active match may send messages.

## Message validation

Every message must be checked server-side:

- Session valid.
- Match valid.
- Sender belongs to match.
- Match is active.
- Content is non-empty.
- Length is within limit.
- Payload schema is valid.
- Rate limit is not exceeded.

Messages should be safely rendered.

Never insert raw user HTML.

## Message delivery

```text
A
 ↓
Server
 ↓
Validate
 ↓
Rate limit
 ↓
Match lookup
 ↓
B
```

No page refresh should be necessary.

---

# 11. Phase 7 — Two-Message Cold Message Gate

Maintain a server-side per-participant counter:

```text
outgoingSinceReply
```

Rules:

```text
0 → can send
1 → can send
2 → cannot send
```

When the other user replies:

```text
outgoingSinceReply = 0
```

Example:

```text
A → message 1
A → message 2
A → message 3  ❌

B → reply

A → message 3  ✅
```

The client must not control this counter.

Refreshing, reconnecting, or opening another tab must not reset it.

Server rejection:

```text
COLD_MESSAGE_LIMIT_REACHED
```

UI:

```text
You've sent 2 messages.
Wait for a reply before sending another.
```

This control operates alongside normal spam/rate limits.

---

# 12. Phase 8 — Next Stranger / Leave / Disconnect

## Next Stranger

Server sequence:

```text
Receive next request
↓
Verify active match
↓
Invalidate old match
↓
Notify current stranger
↓
Remove old queue state
↓
Apply recent-match exclusion
↓
Queue requester
↓
Find compatible stranger
```

Do not leave the old match active.

## Leave

```text
User chooses Leave
↓
Close match
↓
Notify stranger
↓
Release state
↓
Return to start/find-new state
```

## Browser close

Treat connection termination as a normal lifecycle event.

## Network loss

Use connection/heartbeat handling to detect stale sessions.

## Refresh

Do not accidentally create duplicate active sessions or duplicate matches.

### Verification

Test:

- Leave.
- Browser close.
- Refresh.
- Network disconnect.
- Reconnect.
- Stranger disconnect.
- Next Stranger.

---

# 13. Recent-Match Avoidance

Keep a short-lived exclusion between users who just matched.

Concept:

```text
RecentMatch {
  sessionA
  sessionB
  expiresAt
}
```

The system should avoid immediate rematching where another compatible user exists.

Do not build permanent matching history.

---

# 14. Phase 9 — Safety

Implement:

### Report

Reasons:

```text
harassment
spam
sexual/inappropriate content
threats
hate/abuse
scam/fraud
other
```

Validate report requests server-side.

Apply report rate limits.

### Block

Block the active counterpart.

Terminate the current chat.

Do not claim permanent identity-level blocking.

### Safety reminder

Provide a short reminder in the product:

```text
Don't share your real name, address,
phone number, passwords, payment details,
or other private information.
```

---

# 15. Rate Limiting

Rate limit at minimum:

```text
Session creation
Match requests
Next Stranger requests
Messages
Reports
Connection attempts
```

The exact thresholds should be configurable.

Do not hardcode business limits into many unrelated components.

The server must be authoritative.

Cloudflare edge controls should be used where appropriate.

---

# 16. Phase 10 — Theme

Implement:

```text
light
dark
system
```

Use centralized theme tokens.

Persist the preference locally.

Prevent incorrect-theme flash where practical.

Test:

```text
First visit
Refresh
System preference changes
Light → Dark
Dark → Light
```

Every screen must work in both themes.

---

# 17. Phase 10B — Internationalization

Use translation keys.

Example:

```text
common.startChat
common.cancel
common.nextStranger
chat.send
chat.typeMessage
chat.report
chat.block
matching.searching
matching.found
settings.language
settings.theme
safety.title
```

Do not hardcode user-facing strings throughout components.

Fallback language:

```text
English
```

Only expose languages with sufficiently complete translations.

Persist language preference locally.

---

# 18. Phase 11 — Responsive UI

Test:

```text
Mobile
Tablet
Laptop
Desktop
```

Prioritize mobile chat.

Use modern viewport units where appropriate.

Verify:

- Keyboard does not cover composer.
- Messages scroll correctly.
- Header remains usable.
- Buttons have adequate touch targets.
- Modals fit small screens.
- Long nicknames do not break layout.
- Long messages wrap.
- Error messages do not overflow.

---

# 19. Phase 11B — Accessibility

Implement:

- Semantic HTML.
- Keyboard navigation.
- Focus management.
- Visible focus.
- Accessible labels.
- Screen-reader announcements.
- `aria-live` where appropriate.
- Reduced motion.
- Contrast checks.
- Non-color-only state indicators.

Important announcements:

```text
Match found
New message
Connection lost
Report submitted
Message blocked
```

---

# 20. Phase 12 — Testing Strategy

Testing must reflect the real product.

## Unit

Test:

```text
Compatibility
Nickname validation
Preference validation
Message validation
Cold-message counter
State transitions
Translation fallback
```

## Integration

Test:

```text
Session → Queue
Queue → Match
Match → Chat
Chat → Next
Chat → Leave
Chat → Disconnect
Report
Block
```

## E2E

Use two independent browser contexts.

### Test 1 — Basic matching

```text
Browser A → setup
Browser B → setup
A/B → queue
A/B → match
```

### Test 2 — Messaging

```text
A sends
B receives
B replies
A receives
```

### Test 3 — Cold-message gate

```text
A sends #1
A sends #2
A sends #3 → rejected
B replies
A sends #3 → accepted
```

### Test 4 — Preference matching

Verify both sides' preferences.

### Test 5 — Next

```text
A/B matched
A presses Next
old match closes
A returns to queue
```

### Test 6 — Disconnect

```text
A/B matched
B closes browser
A receives disconnect state
A can find another
```

### Test 7 — Safety

Verify report/block.

### Test 8 — Responsive

Test at mobile and desktop viewport sizes.

---

# 21. Phase 13 — Security Audit

Before deployment, inspect:

## Input

- Nickname.
- Messages.
- Report reasons.
- WebSocket payloads.
- Query parameters.
- Headers.

## Session security

Verify:

- Session IDs are unpredictable.
- Match IDs cannot be guessed.
- One participant cannot access another match.
- Expired sessions are rejected.
- Old matches cannot receive new messages.

## Injection

Test for:

- XSS.
- HTML injection.
- Script injection.
- Malformed JSON.
- Oversized payloads.

## Abuse

Test:

- Message spam.
- Matchmaking spam.
- Connection floods.
- Report spam.
- Repeated Next requests.

Never expose:

- Server secrets.
- Internal IDs unnecessarily.
- Stack traces.
- Infrastructure credentials.

---

# 22. Environment Variables

Keep environment-specific configuration outside source code.

Possible categories:

```text
PUBLIC_APP_URL
REALTIME_ENDPOINT
SERVER_SECRET
RATE_LIMIT_CONFIGURATION
ANALYTICS_CONFIGURATION
```

Only expose variables intended for the browser.

Never commit:

```text
.env
.env.local
production secrets
API keys
private credentials
```

Maintain:

```text
.env.example
```

with placeholder values only.

---

# 23. Repository Structure

A reasonable structure:

```text
randomcaht-online/
│
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── styles/
│   ├── lib/
│   └── i18n/
│
├── functions/ or worker/
│   └── realtime/
│
├── tests/
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── public/
│
├── docs/
│
├── legal/
│
├── DESIGN.md
├── PRD.md
├── ARCHITECTURE.md
├── UI-UX.md
├── IMPLEMENTATION.md
├── README.md
├── .env.example
└── package.json
```

The exact Worker/Durable Object file structure depends on the selected Cloudflare integration.

---

# 24. Tailwind v4 Rules

Use Tailwind v4 conventions according to the project's installed Astro/Tailwind setup and current official documentation.

Do not:

- Mix incompatible Tailwind versions.
- Invent old v3 configuration patterns if v4 is installed.
- Add arbitrary utility values everywhere.
- Scatter color literals throughout components.

Prefer centralized design tokens.

Example conceptual token use:

```text
bg-[var(--color-cream)]
text-[var(--color-text)]
border-[var(--color-border)]
```

The exact syntax should follow the project's Tailwind v4 configuration.

---

# 25. Astro Rules

Use Astro for:

- Page composition.
- Static/SSR content.
- Layouts.
- SEO metadata.
- Legal pages.
- Landing page.
- UI shell.

Use client-side components only where interaction requires them.

Do not turn the entire application into a client-rendered SPA without a reason.

For real-time chat:

```text
Astro UI
+
client-side chat controller
+
WebSocket
+
Cloudflare Worker/Durable Object
```

---

# 26. API / Protocol Contract

Use explicit request/event types.

Suggested client → server:

```text
session.create
match.join
match.cancel
chat.message.send
chat.next
chat.leave
report.create
block.create
```

Suggested server → client:

```text
session.created
match.searching
match.found
chat.connected
chat.message
chat.message.rejected
chat.partner_left
chat.ended
rate_limit.reached
error
```

Keep protocol types centralized.

Do not duplicate string literals across files.

---

# 27. Error Handling

Every server failure should have a stable error code.

Examples:

```text
INVALID_SESSION
INVALID_NICKNAME
INVALID_PREFERENCE
MATCH_NOT_FOUND
NOT_MATCH_PARTICIPANT
MESSAGE_EMPTY
MESSAGE_TOO_LONG
COLD_MESSAGE_LIMIT_REACHED
RATE_LIMITED
SESSION_EXPIRED
CONNECTION_FAILED
```

User-facing text should be translated separately from error codes.

---

# 28. Logging

Log operational events, not private conversation content.

Useful:

```text
session created
match created
match ended
connection error
rate limit triggered
report created
server exception
```

Avoid logging message bodies by default.

Do not log secrets.

---

# 29. Observability

Track:

```text
Active connections
Queue size
Match success rate
Average wait time
Match failures
Message delivery failures
Disconnect rate
Rate-limit events
Report volume
Server errors
```

Do not collect unnecessary personal data.

---

# 30. Performance

Prioritize:

1. Fast landing page.
2. Small initial JavaScript.
3. Fast first interaction.
4. Fast matching feedback.
5. Low-latency messages.
6. Efficient WebSocket connections.

Do not ship unnecessary libraries.

Images/assets should be optimized.

Avoid large background assets when CSS gradients can produce the intended visual.

---

# 31. SEO / Metadata

Implement:

```text
Title
Description
Canonical URL
Open Graph metadata
Twitter/X metadata where appropriate
Favicon
Robots directives
Sitemap if appropriate
```

Example positioning:

```text
Random Chat — Talk to Strangers | randomcaht.online
```

Do not make misleading SEO claims.

---

# 32. Legal Pages

Implement:

```text
/terms
/privacy
/safety
```

Add cookie policy if the final implementation actually uses cookies requiring disclosure.

Legal copy must match the actual behavior of the product.

Do not claim:

- Absolute anonymity.
- Guaranteed safety.
- Guaranteed deletion from user devices.
- Permanent blocking without account identity.

---

# 33. Deployment

Target:

```text
GitHub
   ↓
Cloudflare deployment
   ↓
randomcaht.online
```

Before production:

1. Build succeeds.
2. Typecheck succeeds.
3. Tests pass.
4. Security checks pass.
5. Environment variables are configured.
6. WebSocket connection works in production.
7. Durable Object/stateful layer works in production.
8. HTTPS works.
9. Domain works.
10. Mobile browser test passes.

---

# 34. Production Smoke Test

After deployment:

```text
1. Open homepage.
2. Check theme.
3. Check language.
4. Start chat.
5. Create guest session.
6. Enter gender/preferences.
7. Open second browser.
8. Match users.
9. Send messages.
10. Test 2-message gate.
11. Reply and unlock.
12. Test Next Stranger.
13. Test Leave.
14. Test disconnect.
15. Test Report.
16. Test Block.
17. Test mobile.
18. Test dark mode.
```

Do not call the deployment complete until the core loop works end-to-end.

---

# 35. Rollback Strategy

Every meaningful implementation phase should be committed separately.

Suggested commits:

```text
feat: establish astro foundation
feat: build landing and guest setup
feat: add guest session model
feat: add realtime transport
feat: add matchmaking
feat: add realtime chat
feat: add cold message gate
feat: add disconnect handling
feat: add safety controls
feat: add themes and i18n
test: add e2e chat flows
chore: production deployment
```

If a phase breaks the previous working state:

1. Identify the last known-good commit.
2. Reproduce the regression.
3. Revert or fix the specific phase.
4. Re-run tests.
5. Continue only after the baseline is restored.

Do not stack several unverified architectural changes together.

---

# 36. Definition of Done

The MVP implementation is complete when:

- [ ] Astro application builds successfully.
- [ ] Tailwind v4 setup is valid.
- [ ] Cloudflare deployment works.
- [ ] Guest sessions work.
- [ ] No account is required.
- [ ] Nickname validation works.
- [ ] Male/Female gender selection works.
- [ ] Male/Female/Anyone matching works.
- [ ] Both users' preferences are respected.
- [ ] One active match per session is enforced.
- [ ] Real-time chat works without page refresh.
- [ ] Two-message cold-message gate works server-side.
- [ ] Reply unlocks normal chat.
- [ ] Next Stranger terminates the old match.
- [ ] Leave works.
- [ ] Disconnects are handled.
- [ ] Stale sessions are cleaned up.
- [ ] Report works.
- [ ] Block works.
- [ ] Rate limiting works.
- [ ] Input validation and sanitization work.
- [ ] Light/Dark/System work.
- [ ] Theme preference persists.
- [ ] i18n architecture works.
- [ ] Implemented languages work.
- [ ] Mobile/tablet/desktop layouts work.
- [ ] Mobile keyboard does not obscure the composer.
- [ ] Accessibility basics pass.
- [ ] Legal pages exist.
- [ ] Two-browser E2E tests pass.
- [ ] Production smoke test passes.
- [ ] No secrets are committed.

---

# 37. What Must NOT Be Implemented

Do not implement or scaffold:

```text
User accounts
Passwords
Email verification
Profiles
Friends
Followers
Dating profiles
Payments
Subscriptions
Voice calls
Video calls
Permanent chat history
Permanent media storage
File/image sharing
Native mobile apps
Advanced recommendation algorithms
Complex admin dashboards
Microservices
```

Only build what the current PRD requires.

---

# 38. Final Build Sequence

The coding agent should execute this exact high-level sequence:

```text
READ
├── DESIGN.md
├── PRD.md
├── ARCHITECTURE.md
└── UI-UX.md

↓
INSPECT
├── Astro version
├── Tailwind v4 setup
├── Cloudflare setup
├── Existing files
└── Git status

↓

BUILD FOUNDATION
├── Tokens
├── Layout
├── Components
└── Theme

↓

BUILD UX
├── Landing
├── Guest Setup
└── Matching UI

↓

BUILD REALTIME
├── Worker
├── Durable Object
├── WebSocket
└── Session state

↓

BUILD MATCHING
├── Queue
├── Compatibility
└── Atomic match creation

↓

BUILD CHAT
├── Messages
├── Validation
├── Cold-message gate
└── Connection state

↓

BUILD SAFETY
├── Report
├── Block
└── Rate limits

↓

BUILD PERSONALIZATION
├── Theme
└── i18n

↓

TEST
├── Unit
├── Integration
└── Two-browser E2E

↓

SECURITY AUDIT

↓

DEPLOY

↓

PRODUCTION SMOKE TEST
```

---

# 39. Final Engineering Rule

The implementation must optimize for **correctness before complexity**.

The most important part of this product is not the landing page.

It is:

```text
Correct stranger matching
        +
Reliable real-time chat
        +
Correct session lifecycle
        +
Anti-spam controls
        +
Safe anonymous UX
```

Build those correctly.

Do not hide architectural uncertainty behind frontend code.

If the selected Astro/Cloudflare integration cannot support a required real-time behavior, stop and resolve the architecture before implementing a workaround.
