# Ultra Plan Mode

## Purpose
Force the coding agent to reason about a change before implementation.

## Required Planning Output
Before modifying code, produce:

### 1. Goal
What user/business problem is being solved?

### 2. Existing Architecture
Identify:
- Relevant routes
- Components
- Services
- Database tables
- APIs
- Hooks
- Tests
- External services

### 3. Proposed Change
Describe the smallest implementation that satisfies the requirement.

### 4. Dependency Map
List:
- Frontend dependencies
- Backend dependencies
- Database dependencies
- Third-party services
- Environment variables

### 5. State Model
For interactive features explicitly define:
- Initial
- Loading
- Success
- Empty
- Error
- Retry
- Timeout
- Disconnect
- Unauthorized
- Banned/rate-limited

### 6. Security Review
Check:
- Authentication
- Authorization
- Input validation
- Rate limits
- Abuse
- Enumeration
- Privacy
- Logging
- Secrets
- WebSocket/WebRTC/session security

### 7. Data Impact
Identify:
- New tables
- Modified tables
- Indexes
- Constraints
- Migration
- Retention/deletion implications

### 8. Testing Plan
Specify unit, integration and E2E coverage.

### 9. Rollback
Explain how to safely disable or revert the change.

### 10. Implementation Steps
Numbered, dependency-aware steps.

## Stop Conditions
Do not implement if:
- A critical requirement is ambiguous.
- A security boundary is undefined.
- A destructive migration lacks rollback.
- A third-party service dependency is unknown.
- The proposed behavior conflicts with an existing product invariant.

## Final Verification
After implementation compare:
PLAN → CODE → TESTS → SPEC

Any mismatch must be resolved or documented.
