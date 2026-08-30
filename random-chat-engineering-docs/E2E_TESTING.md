# E2E Testing Strategy

## Test Philosophy
Test the journeys that can destroy trust or revenue first.

## P0 Journeys

### Anonymous/Pseudonymous Entry
- Open landing
- Select text
- Start matching
- Receive match
- Send message
- Skip
- Receive another match

### Voice
- Select voice
- Grant microphone permission
- Match
- Establish voice connection
- Mute
- Unmute
- End
- Rematch

### Safety
- Block user
- Verify they cannot rematch
- Report user
- Verify report acknowledgement
- Verify moderation state where applicable

### Failure Recovery
- Partner disconnects
- Network disconnects
- Refresh during match
- Session expires
- Voice provider fails
- Matchmaking times out

## P1
- Language matching
- Interest matching
- Reconnect
- Rate limiting
- Banned user
- Permission denied
- Mobile viewport
- Accessibility keyboard navigation

## Test Data
Use deterministic test users:
- Alice
- Bob
- BlockedUser
- BannedUser
- Moderator

Never use production user data.

## Assertions
Do not rely only on text selectors.
Prefer:
- Accessible roles
- Stable data-testid values
- API state assertions where appropriate

## CI
Every PR:
- Lint
- Typecheck
- Unit tests
- Integration tests
- P0 E2E

Before release:
- Full E2E suite
- Cross-browser smoke
- Mobile smoke
- Security checks

## Flakiness
Do not add arbitrary sleeps.
Use:
- Event-driven waits
- Network assertions
- State assertions
- Explicit timeouts

Track flaky tests separately and fix them rather than disabling them.
