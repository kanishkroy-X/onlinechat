# Spec-Driven Deployment

## Principle
Production code must be traceable to an approved specification.

## Lifecycle
Idea
→ Product requirement
→ Technical specification
→ Security review
→ Implementation
→ Tests
→ Review
→ Deployment

## Specification Requirements
Every feature specification should contain:
- Problem
- Goal
- Non-goals
- User stories
- Functional requirements
- Non-functional requirements
- UX states
- API contract
- Data model
- Security considerations
- Failure modes
- Analytics/events
- Testing criteria
- Acceptance criteria
- Rollback plan

## Requirement IDs
Use stable IDs such as:
- MATCH-001
- VOICE-001
- CHAT-001
- MOD-001
- SEC-001

Implementation and tests should reference these IDs where practical.

## Deployment Gates
Do not deploy when:
- Typecheck fails
- Lint fails
- Build fails
- Required tests fail
- Migration is unreviewed
- Critical security issue is open
- Required environment variable is missing
- E2E smoke test fails

## Database Deployment
Use expand → migrate/backfill → switch → contract.

Never combine destructive schema changes with an unverified application release.

## Rollback
Every deployment must answer:
- Can application code be reverted?
- Can the database safely support the previous version?
- Can a feature flag disable the feature?
- Can external integrations be disabled?
