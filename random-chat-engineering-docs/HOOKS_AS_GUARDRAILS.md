# Hooks as Guardrails — Turn Tasks into a Skill

## Purpose
Automate quality rules so the team does not depend on memory.

## Local Pre-Commit
Run fast checks:
- Formatting
- Lint
- Typecheck on changed scope
- Secret detection
- Forbidden debug statements
- Migration sanity checks

## Pre-Push
Run:
- Full typecheck
- Unit tests
- Integration tests
- Security/static analysis

## CI Pull Request
Run:
- Install lockfile validation
- Lint
- Typecheck
- Unit tests
- Integration tests
- P0 E2E
- Dependency audit
- Secret scanning
- Build

## Main Branch
Require:
- Passing CI
- Approved review
- No critical security findings
- Successful build

## Guardrails
Block commits containing:
- .env secrets
- API keys
- Private certificates
- console.log in production paths where prohibited
- TODO hacks that bypass security
- disabled tests
- skipped E2E tests without approval

## Database Guardrails
Block:
- Destructive migration without explicit approval
- Missing migration file
- Schema drift
- Unindexed high-volume query patterns where detectable

## Testing Guardrails
Do not allow:
- `test.skip` without documented reason
- Disabled security tests
- Snapshot-only validation for critical flows

## Operational Principle
Hooks should prevent mistakes, not create friction.

Fast checks belong locally.
Expensive checks belong in CI.

## Skill Loop
Every repeated failure should become:
Failure → Root cause → Rule → Automated check → Regression test

That turns operational knowledge into a reusable engineering capability.
