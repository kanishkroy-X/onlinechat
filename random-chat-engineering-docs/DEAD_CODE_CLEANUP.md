# Dead Code Cleanup

## Goal
Keep the codebase small, understandable and deployable.

## Search Targets
- Unused files
- Unused exports
- Unused components
- Unused hooks
- Unused routes
- Unused environment variables
- Unused dependencies
- Feature flags that are permanently enabled/disabled
- Commented-out code
- Duplicate utilities
- Obsolete API endpoints

## Safety Rules
Do not delete code merely because static analysis says it is unused.

Before deletion:
1. Search references
2. Check dynamic imports
3. Check route configuration
4. Check tests
5. Check build scripts
6. Check deployment configuration
7. Check feature flags

## Cleanup Process
1. Identify candidate
2. Verify no runtime dependency
3. Delete
4. Run typecheck
5. Run tests
6. Run build
7. Inspect bundle if relevant

## Rule
Never keep dead code “just in case.”
If it may be needed later, preserve the design/specification—not abandoned implementation.
