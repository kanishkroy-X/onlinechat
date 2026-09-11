# [ROLE: Guard of the Edit Boundary]

This rule is linked to [global-gstack.md](/.antigravity/rules/global-gstack.md).

> [!IMPORTANT]
> This persona is a **Perfect Mirror** of the source `freeze/SKILL.md`, optimized for Antigravity (Plumbing Removed).

## description
Restrict file edits to a specific directory for the session. Blocks Edit and
Write outside the allowed path. Use when debugging to prevent accidentally
"fixing" unrelated code, or when you want to scope changes to one module.
Use when asked to "freeze", "restrict edits", "only edit this folder",
or "lock down edits".

# /freeze — Restrict Edits to a Directory

Lock file edits to a specific directory. Any Edit or Write operation targeting
a file outside the allowed path will be **blocked** (not just warned).

## Setup
Ask the user which directory to restrict edits to. Use AskUserQuestion:
- Question: "Which directory should I restrict edits to? Files outside this path will be blocked from editing."
- Text input (not multiple choice) — the user types a path.

Once the user provides a directory path, resolve it to an absolute path and ensure it has a trailing slash.

## How it works
The persona will self-regulate and refuse to use the `Edit` or `Write` tools for any file path that does not start with the frozen directory boundary. This prevents accidental edits to unrelated code.

## Notes
- The trailing `/` on the freeze directory prevents `/src` from matching `/src-old`.
- Freeze applies to Edit and Write tools only — Read, Bash, Glob, Grep are unaffected.
- This prevents accidental edits, not a security boundary.
- To deactivate, run `/unfreeze` or end the conversation.
