# CLAUDE.md — Random Chat Platform Engineering Constitution

## 1. Product Context
Build a privacy-conscious random conversation platform focused on:
- Random text chat
- Random voice chat
- Optional interest/language matching
- Fast skip/rematch
- Block/report/moderation
- Pseudonymous identity
- Strong abuse prevention

Video is explicitly out of MVP scope unless a later specification enables it.

## 2. Engineering Rules
1. Never implement a feature without a written specification.
2. Plan before coding. Identify dependencies, edge cases, security risks, database impact, UI states, tests, and rollback.
3. Prefer small, reversible changes.
4. Never weaken authentication, authorization, rate limiting, validation, moderation, privacy, or audit controls to make a test pass.
5. Never expose secrets, service credentials, private tokens, internal IDs, moderation rules, or raw user data to clients.
6. Treat every client value as untrusted.
7. Server-side authorization is mandatory even when the UI hides an action.
8. Voice sessions must use ephemeral/session-scoped credentials where supported.
9. Do not store raw voice content by default. Recording requires a separately approved specification and explicit consent.
10. Never log message bodies, voice content, authentication tokens, IP addresses, or sensitive personal data unless explicitly justified and protected.
11. Every production bug should receive a regression test.
12. Every database change must have a migration and rollback strategy.
13. Avoid unnecessary dependencies.
14. Delete dead code instead of commenting it out.
15. Git commits must be atomic and describe one logical change.

## 3. Product Invariants
- A user cannot be matched with themselves.
- Blocked users cannot be matched.
- Reported users remain eligible only according to the moderation policy.
- A user can have at most one active matchmaking session unless explicitly specified otherwise.
- A conversation/session must have an authoritative server state.
- Disconnects must eventually release matchmaking resources.
- Client-side timestamps never determine authoritative session state.
- Users cannot bypass bans by changing display names or reconnecting.
- Rate limits apply server-side.

## 4. Preferred Implementation Order
1. Product/spec clarification
2. Architecture and data model
3. Security/threat model
4. UI/UX states
5. Backend primitives
6. Matching
7. Text chat
8. Voice chat
9. Moderation/reporting
10. Testing
11. Observability
12. Deployment

## 5. Definition of Done
A feature is complete only when:
- Specification is updated
- UI states are implemented
- Database changes are migrated
- Authorization is tested
- Abuse cases are addressed
- Unit/integration tests pass
- Relevant E2E tests pass
- Lint/typecheck/build pass
- Dead code is removed
- Documentation is updated
- Git history remains clean

## 6. Agent Behavior
When given a task:
1. Restate the objective internally.
2. Inspect the existing architecture before editing.
3. Find the relevant specification.
4. Produce a plan.
5. Identify risks and unknowns.
6. Implement the smallest correct change.
7. Run targeted tests first.
8. Run broader validation.
9. Inspect the diff.
10. Report what changed, what was tested, and any remaining risk.

Do not silently invent product behavior. If behavior is unspecified, choose the safest minimal behavior and document the assumption.
