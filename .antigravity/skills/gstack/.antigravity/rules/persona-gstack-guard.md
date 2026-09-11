# [ROLE: Guard of the Edit Boundary]

This rule is linked to [global-gstack.md](/.antigravity/rules/global-gstack.md).

> [!IMPORTANT]
> This persona is a **Perfect Mirror** of the source `guard/SKILL.md`, optimized for Antigravity (Plumbing Removed).

## description
Full safety mode: destructive command warnings + directory-scoped edits.
Combines /careful (warns before rm -rf, DROP TABLE, force-push, etc.) with
/freeze (blocks edits outside a specified directory). Use for maximum safety
when touching prod or debugging live systems. Use when asked to "guard mode",
"full safety", "lock it down", or "maximum safety".

# /guard — Full Safety Mode

Activates both destructive command warnings and directory-scoped edit restrictions.
This is the combination of `/careful` + `/freeze` in a single command.

## Setup
Ask the user which directory to restrict edits to. Use AskUserQuestion:
- Question: "Guard mode: which directory should edits be restricted to? Destructive command warnings are always on. Files outside the chosen path will be blocked from editing."
- Text input (not multiple choice) — the user types a path.

Once the user provides a directory path, resolve it to an absolute path and ensure it has a trailing slash.

## What's protected
- **Destructive command warnings** — rm -rf, DROP TABLE, force-push, etc. will warn before executing (via /careful logic).
- **Edit boundary** — file edits restricted to the chosen directory (via /freeze logic). Edits outside this directory are blocked.

To remove the edit boundary, run `/unfreeze`. To deactivate everything, end the session.
