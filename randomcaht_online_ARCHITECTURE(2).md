# Architecture Document

## Project: randomcaht.online

**Document status:** MVP Architecture  
**Version:** 1.0  
**Product type:** Anonymous/random stranger text-chat website  
**Primary platform:** Responsive web  
**Authentication:** None  
**Deployment direction:** Cloudflare  
**Code environment:** Antigravity  
**Source control:** GitHub

---

# 1. Architecture Goal

The architecture must support a simple anonymous random-chat experience:

```text
Visitor
   ↓
Landing Page
   ↓
Temporary Guest Session
   ↓
Gender + Chat Preference
   ↓
Matchmaking Queue
   ↓
Compatible Stranger
   ↓
Real-time Chat Session
   ↓
Next Stranger / Leave
```

The architecture should remain deliberately simple.

Do not introduce user accounts, profiles, subscriptions, or a traditional SaaS backend unless a future requirement explicitly demands them.

The main technical challenges are:

1. Real-time communication.
2. Temporary guest sessions.
3. Preference-compatible matchmaking.
4. Correct disconnect handling.
5. Abuse prevention.
6. Privacy-conscious temporary data handling.
7. Responsive client behavior.
8. Reliable operation on Cloudflare.

---

# 2. Architecture Principles

## 2.1 Anonymous by default

No account system is required for the MVP.

The application should use temporary session identifiers rather than permanent user identities.

## 2.2 Server is authoritative

The browser must never be trusted to decide:

- Whether a match is valid.
- Whether a user is allowed to send a message.
- Whether a session is active.
- Whether a user is rate limited.
- Whether a report is valid.
- Whether a user is banned.

Client-side validation improves UX; server-side validation provides security.

## 2.3 Minimal persistence

The application should persist only what is necessary for:

- Active matchmaking.
- Active chat sessions.
- Abuse prevention.
- Reports.
- Operational reliability.

Chat history should not be permanently stored in the MVP unless explicitly required later.

## 2.4 Real-time first

The core chat experience depends on low-latency bidirectional communication.

The architecture should use a real-time transport suitable for the selected Cloudflare-compatible implementation.

## 2.5 Mobile first

The same application must work across:

- Mobile phones
- Tablets
- Laptops
- Desktop monitors

The architecture must not assume a large viewport.

## 2.6 Stateless where possible

HTTP application requests should remain stateless where practical.

Temporary state should live in appropriate shared state infrastructure rather than only in one application server's memory.

---

# 3. High-Level System

```text
                         ┌─────────────────────┐
                         │      Visitor        │
                         │ Mobile/Desktop/Web  │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │     Cloudflare      │
                         │ DNS / CDN / Edge    │
                         └──────────┬──────────┘
                                    │
                                    ▼
                         ┌─────────────────────┐
                         │   Web Application   │
                         │ UI + Client Logic   │
                         └──────────┬──────────┘
                                    │
                      ┌─────────────┴─────────────┐
                      │                           │
                      ▼                           ▼
             ┌─────────────────┐        ┌─────────────────┐
             │ Matchmaking /   │        │ Real-time Chat  │
             │ Session State   │        │ Transport       │
             └────────┬────────┘        └────────┬────────┘
                      │                          │
                      └────────────┬─────────────┘
                                   │
                                   ▼
                         ┌─────────────────────┐
                         │ Abuse / Safety      │
                         │ Rate Limits/Reports │
                         └─────────────────────┘
```

The exact Cloudflare primitives should be selected during implementation based on current platform support and the expected traffic profile.

---

# 4. Recommended Technology Direction

The architecture should remain flexible, but the MVP can follow this direction:

| Layer | Direction |
|---|---|
| Frontend | Modern component-based web framework or lightweight frontend selected in Antigravity |
| Styling | Responsive CSS/design system |
| Real-time transport | WebSocket-compatible implementation |
| Edge / Hosting | Cloudflare |
| DNS | Cloudflare |
| Source control | GitHub |
| Development | Antigravity |
| Browser testing | Automated browser testing |
| Temporary state | Cloudflare-compatible stateful storage/service |
| Abuse controls | Server-side rate limiting + Cloudflare protection |
| Persistent database | Only where justified |
| Analytics | Privacy-conscious analytics, optional for MVP |

Do not add Supabase merely because it is popular.

The product has no account system and does not require a conventional relational user database for the core chat experience.

---

# 5. Frontend Architecture

The frontend should be organized around product states rather than one large chat component.

Suggested structure:

```text
src/
├── app/
│   ├── home/
│   ├── chat/
│   ├── settings/
│   └── legal/
│
├── components/
│   ├── chat/
│   ├── matching/
│   ├── settings/
│   ├── safety/
│   └── common/
│
├── state/
│   ├── session/
│   ├── matching/
│   ├── chat/
│   └── preferences/
│
├── services/
│   ├── realtime/
│   ├── matching/
│   ├── session/
│   └── analytics/
│
├── i18n/
│   ├── locales/
│   └── translations/
│
└── styles/
```

The exact folder structure can be adapted to the framework chosen in implementation.

---

# 6. Client Application States

The UI should have explicit states.

```text
LANDING
   ↓
SETUP
   ↓
MATCHING
   ↓
CONNECTED
   ↓
DISCONNECTED
   ↓
MATCHING / LANDING
```

Additional error states:

```text
CONNECTION_ERROR
RATE_LIMITED
SESSION_EXPIRED
SERVICE_UNAVAILABLE
```

The client should never infer that a user is connected simply because a button was clicked.

The server/realtime layer should provide authoritative state updates.

---

# 7. Guest Session Architecture

Each visitor receives a temporary session.

Example:

```text
GuestSession
├── sessionId
├── nickname
├── gender
├── preference
├── createdAt
├── lastSeenAt
├── status
└── activeMatchId
```

Possible status values:

```text
idle
queued
matched
chatting
disconnecting
expired
blocked
```

The session identifier must be unpredictable and must not expose sequential IDs.

The client may store a temporary session token where necessary, but sensitive server-side state must not be trusted from client storage.

---

# 8. Gender and Matching Model

The MVP supports:

### User gender

```text
male
female
```

### Desired match

```text
male
female
any
```

These are self-declared matching attributes.

They are **not verified identities**.

---

# 9. Match Compatibility Rules

A match is valid only if both users' preferences are compatible.

Define:

```text
A.gender
A.preference

B.gender
B.preference
```

A valid match requires:

```text
A.preference == any
OR
A.preference == B.gender
```

AND:

```text
B.preference == any
OR
B.preference == A.gender
```

Example:

```text
A = Male
A wants = Female

B = Female
B wants = Anyone

→ MATCH
```

Example:

```text
A = Male
A wants = Female

B = Male
B wants = Anyone

→ NO MATCH
```

Example:

```text
A = Female
A wants = Male

B = Male
B wants = Female

→ MATCH
```

The compatibility check must happen server-side.

---

# 10. Matchmaking Queue

Users enter a temporary queue after selecting:

- Nickname
- Gender
- Desired match

Conceptual queue:

```text
Waiting Users

User A → Male → wants Female
User B → Female → wants Anyone
User C → Male → wants Male
User D → Female → wants Male
```

The matchmaking service searches for compatible waiting users.

When a compatible pair is found:

```text
User A + User B
        ↓
Match created
        ↓
Both removed from queue
        ↓
Chat session created
```

The matching operation must be atomic.

Two users must not be assigned to multiple matches because of race conditions.

---

# 11. Preventing Duplicate Matches

The server must enforce:

```text
one active session
+
one active queue entry
+
one active match
```

for each guest.

Before creating a match:

1. Verify both sessions are still active.
2. Verify both are still queued.
3. Verify neither has an active match.
4. Re-check compatibility.
5. Atomically reserve both users.
6. Create the match.
7. Remove both from the queue.
8. Notify both clients.

If any step fails, the system must release the reservation safely.

---

# 12. Real-Time Chat Architecture

Once matched, each pair receives a unique temporary chat session.

Example:

```text
ChatSession
├── matchId
├── participantA
├── participantB
├── createdAt
├── lastActivityAt
└── status
```

Possible states:

```text
active
closing
closed
expired
```

Messages should travel through a real-time connection.

Conceptual flow:

```text
User A
  │
  │ send message
  ▼
Realtime Server
  │
  ├── validate session
  ├── validate message
  ├── rate-limit
  └── sanitize/validate
  │
  ▼
User B
```

The server must verify that the sender belongs to the active chat session before forwarding the message.

For media, the real-time channel should coordinate the message/event while the actual temporary media object can use an appropriate temporary upload/delivery mechanism. Do not send large image/video files directly through the chat signaling channel if the selected infrastructure provides a better temporary object-transfer path.

---

# 13. Message and Media Model

The MVP supports temporary text, image, and video sharing.

A temporary text message can be represented as:

```text
Message
├── messageId
├── matchId
├── senderSessionId
├── content
└── createdAt
```

Temporary media can be represented as:

```text
MediaMessage
├── messageId
├── matchId
├── senderSessionId
├── mediaType
├── temporaryObjectId
├── size
├── mimeType
└── createdAt
```

Supported MVP media:

```text
Image
Video
```

The media system must be designed as **ephemeral**, not as permanent file storage.

A media upload should:

1. Validate the active chat session.
2. Validate MIME type.
3. Validate file size.
4. Apply abuse/rate limits.
5. Store the media only in temporary storage.
6. Generate a temporary access mechanism where necessary.
7. Deliver/display it to the active participants.
8. Delete the temporary object when the chat/session expires or the configured retention window is reached.

There should be no permanent media library or user media profile.

The system should also automatically clean up orphaned uploads so abandoned uploads do not accumulate.

Important privacy limitation:

**Temporary server storage does not guarantee that media can never be saved.** A recipient can still take a screenshot, screen-record, download a file while it is available, or otherwise capture content. The product must not promise that shared media is impossible to retain outside the platform.

For the MVP, media should not be included in permanent chat history because permanent chat history does not exist.

---

# 14. Message and Media Validation

Every incoming text or media message must be validated server-side.

### Text checks

- Is the session valid?
- Is the user a participant in this match?
- Is the match active?
- Is the message non-empty?
- Is the message within the maximum length?
- Is the request rate within limits?
- Does the payload conform to the expected schema?

### Media checks

- Is the session valid?
- Is the sender a participant in the active match?
- Is the media type allowed?
- Is the MIME type allowed?
- Is the file size below the configured limit?
- Is the upload rate within limits?
- Is the file stored only in temporary storage?
- Is the temporary access mechanism authorized?
- Is cleanup scheduled?

Do not trust a client-provided MIME type alone. Validate the uploaded file as part of the server-side upload pipeline.

Never directly inject raw user content into HTML.

Use framework-safe rendering and proper output encoding/sanitization.

---

# 15. Disconnect Architecture

Disconnects are normal in this product.

The system must handle:

```text
Browser closed
Browser refreshed
Network lost
Laptop sleeps
Mobile switches network
User presses Next
User presses Leave
Server connection lost
```

When a connection disappears:

1. Mark the participant as disconnected or unavailable.
2. Stop accepting new messages from that session.
3. Remove the user from matchmaking if queued.
4. Notify the other participant if a chat was active.
5. Close/expire the match according to the session policy.
6. Release temporary resources.
7. Allow the remaining user to find another stranger.

A heartbeat/ping mechanism may be used to detect stale connections.

---

# 15A. Cold Message / Reply Gate Architecture

The chat system must maintain a server-side counter for consecutive outgoing messages that have not yet received an incoming reply.

Conceptual state:

```text
ChatParticipantState
├── sessionId
├── matchId
├── outgoingSinceReply
└── lastIncomingMessageAt
```

### Server-side rule

For each participant:

```text
outgoingSinceReply < 2
```

allows another outgoing message.

When the counter reaches 2:

```text
outgoingSinceReply = 2
```

the server rejects additional outgoing messages until the other participant sends a valid message.

When the stranger replies:

```text
outgoingSinceReply = 0
```

and normal two-way messaging resumes.

### Example

```text
A sends #1
counter A = 1

A sends #2
counter A = 2

A tries #3
       ↓
SERVER REJECTS

B replies
       ↓
counter A = 0

A can chat normally
```

### Security requirements

The counter must be maintained server-side.

Do not store the authoritative counter only in:

- React/Vue/Svelte state
- localStorage
- sessionStorage
- cookies controlled by the client

Refreshing the browser, opening another tab, reconnecting the WebSocket, or changing client state must not reset the server-side counter.

The rule applies per active match and per participant.

Normal rate limits remain active after the reply gate is cleared.

The server should return a clear machine-readable reason when rejecting a third consecutive message, for example:

```text
COLD_MESSAGE_LIMIT_REACHED
```

The UI can then show:

```text
You've sent 2 messages.
Wait for a reply before sending another.
```

This mechanism is separate from global anti-spam rate limiting. Both controls should operate simultaneously.

# 16. Next Stranger Architecture

When the user presses:

```text
Next Stranger
```

the client sends a server-side request.

The server must:

1. Close the current match.
2. Notify the current stranger.
3. Invalidate the old match for further messages.
4. Remove stale queue state.
5. Apply a short cooldown if necessary to prevent abuse.
6. Put the requesting user into the queue.
7. Search for another compatible stranger.

The old chat session must not remain active.

---

# 17. Same-Stranger Avoidance

The system should avoid immediately reconnecting two users who just disconnected from each other when other compatible users are available.

This can be implemented using a short-lived recent-match record:

```text
RecentMatch
├── sessionA
├── sessionB
└── expiresAt
```

This record should expire automatically.

Do not build a permanent relationship graph for the MVP.

---

# 18. Abuse Prevention Architecture

Anonymous chat is a high-risk environment for abuse.

Required controls:

```text
Visitor
   ↓
Cloudflare protection
   ↓
Request validation
   ↓
Session validation
   ↓
Rate limiting
   ↓
Message validation
   ↓
Chat
```

Rate limits should apply to:

- Session creation
- Match requests
- Next requests
- Messages
- Reports
- Connection attempts

The exact limits should be tuned during testing rather than hardcoded permanently in the PRD.

---

# 19. Report Architecture

A report should contain temporary operational information necessary to investigate abuse.

Conceptual model:

```text
Report
├── reportId
├── reporterSessionId
├── reportedSessionId
├── matchId
├── reason
├── createdAt
└── metadata
```

Do not expose the reporter's identity to the reported user.

Reports should be protected against spam.

A user should not be able to submit unlimited reports.

---

# 20. Block Architecture

The MVP block feature should prevent the current pair from being immediately rematched where technically feasible.

A temporary block record may be:

```text
Block
├── blockerSessionId
├── blockedSessionId
└── expiresAt
```

Because there are no permanent accounts, blocking cannot guarantee permanent identity-level blocking if the same person creates a completely new anonymous session.

The UI must not promise stronger protection than the architecture can provide.

---

# 21. Data Persistence Strategy

The MVP should separate data into:

### Ephemeral state

- Guest sessions
- Queue entries
- Active matches
- Active connections
- Recent-match exclusions
- Temporary blocks
- Temporary message buffers
- Temporary image/video objects

These should automatically expire.

Image/video objects must have a defined maximum retention window and should be deleted when the associated chat session expires or earlier where practical.

The cleanup process must also handle orphaned uploads where a user starts an upload but never completes a chat session.

### Operational/safety data

Potentially retained:

- Reports
- Abuse flags
- Temporary bans
- Security/rate-limit events

Retention periods must be defined in the Privacy Policy before production launch.

### No permanent user profile database

The MVP does not require:

```text
users
passwords
emails
profiles
friends
followers
subscriptions
```

---

# 22. Multi-Language Architecture

All user-facing UI strings must use translation keys.

Example:

```text
translations/
├── en.json
├── hi.json
└── ...
```

Example:

```json
{
  "chat": {
    "send": "Send",
    "next": "Next Stranger",
    "report": "Report",
    "block": "Block"
  }
}
```

The application should:

1. Detect a reasonable default language.
2. Allow manual language selection.
3. Store the preference locally.
4. Load the selected translation set.
5. Fall back to the default language if a translation is missing.

User-generated chat messages remain unchanged.

---

# 23. Theme Architecture

Supported themes:

```text
light
dark
system
```

Theme should be controlled through a central preference state.

Conceptually:

```text
ThemePreference
├── light
├── dark
└── system
```

The preference should persist locally.

Avoid scattering theme-specific logic across individual components.

Use shared design tokens/CSS variables so every component can respond consistently.

---

# 24. Responsive Architecture

Breakpoints should be based on layout needs rather than specific device brands.

The UI should support:

```text
Small mobile
     ↓
Large mobile
     ↓
Tablet
     ↓
Laptop
     ↓
Desktop
```

The chat layout should use flexible dimensions.

Avoid fixed heights that cause problems when mobile keyboards appear.

The message composer should remain accessible when the viewport changes.

Touch targets should be large enough for mobile use.

---

# 25. Security Boundaries

Trust boundary:

```text
UNTRUSTED
──────────────
Browser
Nickname
Gender
Preference
Messages
Report input
Client state
Headers
Query parameters
──────────────
        ↓
SERVER VALIDATION
        ↓
TRUSTED INTERNAL STATE
```

Never trust:

- Client-provided session status.
- Client-provided match IDs.
- Client-provided participant IDs.
- Client-side gender compatibility decisions.
- Client-side rate-limit decisions.
- Client-side permissions.

---

# 26. Security Requirements

The implementation must include:

- HTTPS.
- Secure WebSocket connections.
- Input validation.
- Output encoding/sanitization.
- Content Security Policy where compatible.
- Secure security headers.
- Rate limiting.
- Connection limits.
- Payload-size limits.
- Media file-size limits.
- Allowed media-type restrictions.
- Session authorization.
- Secret management.
- No API secrets in frontend code.
- Protection against XSS.
- Protection against injection attacks.
- Protection against unauthorized session access.
- Protection against abuse of matching endpoints.
- Protection against report spam.

Cloudflare's edge security features should be used where appropriate.

---

# 27. Cloudflare Architecture

Cloudflare should provide the public infrastructure layer:

```text
Internet
   ↓
Cloudflare DNS
   ↓
Cloudflare edge/security
   ↓
Web application
   ↓
Real-time/session infrastructure
```

The final implementation should select the appropriate Cloudflare products for:

- Static/web hosting
- Server-side logic
- Durable state
- Real-time connections
- Rate limiting
- DNS
- Security

Do not commit the implementation to a specific Cloudflare product until the current platform capabilities and traffic requirements have been validated.

---

# 28. Domain Architecture

Production domain:

```text
randomcaht.online
```

Potential subdomain:

```text
www.randomcaht.online
```

The preferred canonical domain should be selected during deployment.

HTTPS must be enabled.

DNS should be managed through Cloudflare.

---

# 29. Environment Strategy

Use separate environments where practical:

```text
Local
   ↓
Preview/Test
   ↓
Production
```

Environment variables must never be committed to GitHub.

Example categories:

```text
PUBLIC_APP_URL
SERVER_SECRET
REALTIME_CONFIGURATION
RATE_LIMIT_CONFIGURATION
ANALYTICS_CONFIGURATION
```

Actual secret names depend on the implementation.

---

# 30. GitHub Architecture

GitHub is the source of truth for application code.

Suggested repository structure:

```text
randomcaht-online/
├── src/
├── public/
├── docs/
├── legal/
├── tests/
├── AGENTS.md
├── package.json
└── README.md
```

Recommended branch model:

```text
main
  ↑
feature/*
fix/*
```

Keep commits small and descriptive.

Do not commit:

```text
.env
.env.local
API keys
private credentials
production secrets
```

---

# 31. Testing Architecture

Testing should occur at multiple levels.

### Unit tests

Test:

- Matching compatibility logic.
- Session state transitions.
- Validation.
- Rate-limit logic.
- Translation fallback.
- Theme preference logic.

### Integration tests

Test:

- Queue → match.
- Match → chat.
- Chat → disconnect.
- Chat → Next.
- Report/block.
- Session expiration.

### End-to-end tests

Use two independent browser sessions.

Example:

```text
Browser A                 Browser B

Start Chat                Start Chat
    ↓                          ↓
Queue                      Queue
    └──────── MATCH ──────────┘
          ↓
       Chat
          ↓
Message A ───────────────→ Message B
Message B ←─────────────── Message A
          ↓
      Next Stranger
```

This is mandatory because single-browser tests cannot properly validate matchmaking.

---

# 32. Observability

The system should record operational metrics such as:

- Active connections
- Queue size
- Match success rate
- Average matchmaking wait
- Message delivery errors
- Disconnect rate
- Server errors
- Rate-limit events
- Report volume

Avoid logging message contents by default.

Logs should not unnecessarily contain personal or sensitive information.

---

# 33. Failure Handling

### No compatible stranger

Show:

```text
Looking for someone...
```

Do not make the user think the application is broken.

### Real-time connection failure

Show:

```text
Connection lost.

[Reconnect]
```

### Matchmaking failure

Allow retry without requiring a page reload.

### Server failure

Show a clear recovery state.

### Session expiration

Create a new temporary session and return the user to the appropriate setup/matching state.

---

# 34. Scalability Direction

The MVP should work with a small user base first.

However, matchmaking state must not depend on a single browser or a single server process's local memory.

The architecture should allow multiple application instances/edge locations to coordinate shared state.

The main scalability bottleneck is likely to be:

```text
Concurrent real-time connections
+
Matchmaking coordination
+
Abuse traffic
```

Optimize these before adding unrelated infrastructure.

---

# 35. Architecture Anti-Patterns

Do NOT:

- Build a traditional account system.
- Store every chat message permanently by default.
- Put matchmaking state only in browser memory.
- Trust client-side matching.
- Trust client-side rate limits.
- Put secrets in frontend code.
- Build voice/video before validating text-chat demand.
- Add multiple databases without a real need.
- Introduce microservices for the MVP.
- Build a complex recommendation engine.
- Over-engineer analytics.
- Copy Chatib's code, branding, or proprietary UI.

---

# 36. Recommended Request Flow

## Start Chat

```text
Browser
  ↓
Create/initialize guest session
  ↓
Validate nickname/gender/preference
  ↓
Server creates temporary session
  ↓
User enters queue
  ↓
Matchmaking searches compatible users
```

## Match

```text
Queue
  ↓
Find compatible candidate
  ↓
Atomic compatibility check
  ↓
Reserve both users
  ↓
Create match
  ↓
Remove from queue
  ↓
Notify both browsers
  ↓
Open chat
```

## Send Message

```text
Browser
  ↓
Realtime connection
  ↓
Validate session
  ↓
Validate match
  ↓
Validate message
  ↓
Rate limit
  ↓
Forward to other participant
```

## Next

```text
Browser
  ↓
Close current match
  ↓
Invalidate old session
  ↓
Notify stranger
  ↓
Cooldown / recent-match exclusion
  ↓
Queue user again
  ↓
Find compatible stranger
```

---

# 37. Architecture Decision Summary

| Decision | MVP Direction |
|---|---|
| Authentication | None |
| Guest identity | Temporary session |
| User profiles | None |
| Gender | Self-declared Male/Female |
| Match preference | Male/Female/Anyone |
| Matching | Server-side compatible random matching |
| Messaging | Real-time text |
| Permanent chat history | No |
| Image sharing | Yes — temporary only || Video sharing | Yes — temporary only || Voice/video calls | No |
| Database | Only where technically justified |
| Persistent user table | No |
| Hosting | Cloudflare |
| DNS | Cloudflare |
| Code | Antigravity |
| Repository | GitHub |
| Testing | Browser + automated tests |
| Theme | Light/Dark/System |
| Language | i18n-ready |
| Responsive | Mobile/Tablet/Desktop |
| Abuse controls | Required |
| Reports | Required |
| Blocking | Required |
| Analytics | Optional, privacy-conscious |

---

# 38. Definition of Done

The architecture is successfully implemented when:

- [ ] Guest sessions work without accounts.
- [ ] Gender and preference data are handled server-side.
- [ ] Male/Female/Anyone matching works correctly.
- [ ] Two independent browsers can be matched.
- [ ] Matches cannot be duplicated through race conditions.
- [ ] Real-time text messages reach the correct participant.
- [ ] A participant can send the first 2 consecutive messages without a reply.
- [ ] The third consecutive message is rejected until the other participant replies.
- [ ] A reply resets the participant's cold-message counter.
- [ ] Refreshing/reconnecting/opening another tab cannot bypass the server-side counter.
- [ ] Temporary image sharing works only inside the active match.
- [ ] Temporary video sharing works only inside the active match.
- [ ] Media uploads enforce type, size, session, and rate limits.
- [ ] Temporary media is deleted according to the retention/cleanup policy.
- [ ] Unauthorized users cannot access another match's media.
- [ ] Next Stranger correctly closes the old match.
- [ ] Disconnects cleanly release sessions.
- [ ] Stale sessions expire.
- [ ] Rate limits work.
- [ ] Report/block functionality works.
- [ ] Light/Dark/System themes work.
- [ ] Theme preference persists.
- [ ] UI supports translation keys and language selection.
- [ ] Mobile and desktop layouts work.
- [ ] Production runs through Cloudflare with HTTPS.
- [ ] Secrets are not committed.
- [ ] Two-browser E2E testing passes.
- [ ] Basic production observability is available.

---

# 39. Final Architecture

The intended MVP architecture is:

```text
                    randomcaht.online
                           │
                           ▼
                  ┌─────────────────┐
                  │    Cloudflare   │
                  │ DNS + Edge      │
                  │ Security        │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │ Web Application │
                  │ Responsive UI   │
                  └────────┬────────┘
                           │
             ┌─────────────┼─────────────┐
             │             │             │
             ▼             ▼             ▼
        Guest Session  Matchmaking   Real-time Chat
             │             │             │
             └─────────────┼─────────────┘
                           │
                           ▼
                  Temporary Shared State
                           │
                           ▼
                  Safety / Rate Limits
                           │
                           ▼
                    Anonymous Chat
```

The architecture deliberately avoids unnecessary SaaS infrastructure.

The core engineering objective is:

> **Create the smallest reliable system that can anonymously match two compatible strangers, maintain a real-time conversation with temporary text/image/video sharing, safely end the session, remove temporary platform-held content, and match them with another stranger.**

Everything else should support that objective.
