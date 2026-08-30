# Clean Git Commits

## Commit Principle
One commit = one logical change.

## Format
Use:
<type>(scope): short imperative description

Types:
- feat
- fix
- refactor
- test
- docs
- chore
- security
- perf

Examples:
- feat(matching): add voice matchmaking
- fix(voice): recover expired sessions
- security(chat): enforce message rate limits
- test(matching): cover blocked-user exclusion

## Rules
- No unrelated changes
- No generated noise
- No secrets
- No debugging console spam
- No mass formatting mixed with feature work
- Keep migrations with the code change that requires them
- Tests belong with the feature/fix

## Before Commit
Run:
1. git diff
2. git status
3. lint
4. typecheck
5. targeted tests

## Before Merge
Review:
- Functional correctness
- Security
- Data migration
- Tests
- Documentation
- Dead code

## Commit Message Quality
Bad:
"updates"
"fix"
"changes"

Good:
"fix(matchmaking): prevent blocked users from rematching"

## Rewriting History
Do not force-push shared branches unless explicitly authorized.
