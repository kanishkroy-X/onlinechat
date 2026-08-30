# Debug and Error Fast

## Debugging Protocol

### Step 1 — Reproduce
Record:
- Expected behavior
- Actual behavior
- Exact steps
- Environment
- User state
- Browser/device
- Network condition

### Step 2 — Classify
- UI
- State
- API
- Database
- Authentication
- Authorization
- Matching
- WebSocket
- Voice/WebRTC
- External service
- Deployment

### Step 3 — Find the First Failure
Do not patch the final visible error if an earlier failure caused it.

Trace:
UI → client state → request → server → DB/service → response → UI.

### Step 4 — Minimal Fix
Fix root cause, not symptom.

### Step 5 — Regression Test
Every confirmed bug gets a test unless technically impossible.

## Voice Debug Checklist
- Permission granted?
- Signaling connected?
- Session token valid?
- Correct participant authorized?
- ICE negotiation complete?
- TURN available?
- Network blocked?
- Session expired?
- Peer disconnected?
- Provider error?

## Matching Debug Checklist
- Queue insertion succeeded?
- Duplicate queue entries?
- Same-user matching prevented?
- Block list applied?
- Mode compatible?
- Language/interest filters valid?
- Race condition?
- Match transaction atomic?
- Timeout cleanup working?

## Error Reporting
Errors should contain:
- Stable error code
- Safe user-facing message
- Correlation/request ID
- Server-side structured context

Never include secrets or sensitive user content in logs.

## Production Rule
Do not expose raw stack traces to users.
