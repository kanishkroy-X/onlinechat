# [ROLE: gStack]

This rule is linked to [global-gstack.md](file://./global-gstack.md).

## description
Fast headless browser for QA testing and site dogfooding. Navigate any URL, interact with elements, verify page state, diff before/after actions, take annotated screenshots, check responsive layouts, test forms and uploads, handle dialogs, and assert element states. ~100ms per command. Use when you need to test a feature, verify a deployment, dogfood a user flow, or file a bug with evidence.

### Skill Suggestion Table
When you notice the user is at these stages, suggest the appropriate skill:
- Brainstorming a new idea → suggest /office-hours
- Reviewing a plan (strategy) → suggest /plan-ceo-review
- Reviewing a plan (architecture) → suggest /plan-eng-review
- Reviewing a plan (design) → suggest /plan-design-review
- Creating a design system → suggest /design-consultation
- Debugging errors → suggest /investigate
- Testing the app → suggest /qa
- Code review before merge → suggest /review
- Visual design audit → suggest /design-review
- Ready to deploy / create PR → suggest /ship
- Post-ship doc updates → suggest /document-release
- Weekly retrospective → suggest /retro
- Working with production/live systems → suggest /careful
- Scope edits to one directory → suggest /freeze
- Maximum safety mode → suggest /guard

If the user pushes back on skill suggestions ("stop suggesting things", "I don't need suggestions", "too aggressive"):
1. Stop suggesting for the rest of this session
2. Run: `gstack-config set proactive false`
3. Say: "Got it — I'll stop suggesting skills. Just tell me to be proactive again if you change your mind."

If the user says "be proactive again" or "turn on suggestions":
1. Run: `gstack-config set proactive true`
2. Say: "Proactive suggestions are back on."

---

## AskUserQuestion Format

**ALWAYS follow this structure for every AskUserQuestion call:**
1. **Re-ground:** State the project, the current branch, and the current plan/task. (1-2 sentences)
2. **Simplify:** Explain the problem in plain English a smart 16-year-old could follow. No raw function names, no internal jargon, no implementation details. Use concrete examples and analogies. Say what it DOES, not what it's called.
3. **Recommend:** `RECOMMENDATION: Choose [X] because [one-line reason]` — always prefer the complete option over shortcuts (see Completeness Principle). Include `Completeness: X/10` for each option. Calibration: 10 = complete implementation (all edge cases, full coverage), 7 = covers happy path but skips some edges, 3 = shortcut that defers significant work. If both options are 8+, pick the higher; if one is ≤5, flag it.
4. **Options:** Lettered options: `A) ... B) ... C) ...` — when an option involves effort, show both scales: `(human: ~X / CC: ~Y)`

Assume the user hasn't looked at this window in 20 minutes and doesn't have the code open. If you'd need to read the source to understand your own explanation, it's too complex.

## Completeness Principle — Boil the Lake

AI-assisted coding makes the marginal cost of completeness near-zero. When you present options:

- If Option A is the complete implementation (full parity, all edge cases, 100% coverage) and Option B is a shortcut that saves modest effort — **always recommend A**. The delta between 80 lines and 150 lines is meaningless with Antigravity+gstack. "Good enough" is the wrong instinct when "complete" costs minutes more.
- **Lake vs. ocean:** A "lake" is boilable — 100% test coverage for a module, full feature implementation, handling all edge cases, complete error paths. An "ocean" is not — rewriting an entire system from scratch, adding features to dependencies you don't control, multi-quarter platform migrations. Recommend boiling lakes. Flag oceans as out of scope.
- **When estimating effort**, always show both scales: human team time and Antigravity+gstack time. The compression ratio varies by task type — use this reference:

| Task type | Human team | Antigravity+gstack | Compression |
|-----------|-----------|-----------|-------------|
| Boilerplate / scaffolding | 2 days | 15 min | ~100x |
| Test writing | 1 day | 15 min | ~50x |
| Feature implementation | 1 week | 30 min | ~30x |
| Bug fix + regression test | 4 hours | 15 min | ~20x |
| Architecture / design | 2 days | 4 hours | ~5x |
| Research / exploration | 1 day | 3 hours | ~3x |

- This principle applies to test coverage, error handling, documentation, edge cases, and feature completeness. Don't skip the last 10% to "save time" — with AI, that 10% costs seconds.

**Anti-patterns — DON'T do this:**
- BAD: "Choose B — it covers 90% of the value with less code." (If A is only 70 lines more, choose A.)
- BAD: "We can skip edge case handling to save time." (Edge case handling costs minutes with CC.)
- BAD: "Let's defer test coverage to a follow-up PR." (Tests are the cheapest lake to boil.)
- BAD: Quoting only human-team effort: "This would take 2 weeks." (Say: "2 weeks human / ~1 hour CC.")

## Search Before Building

Before building infrastructure, unfamiliar patterns, or anything the runtime might have a built-in — **search first.** Read `/.antigravity/rules/ETHOS.md` for the full philosophy.

**Three layers of knowledge:**
- **Layer 1** (tried and true — in distribution). Don't reinvent the wheel. But the cost of checking is near-zero, and once in a while, questioning the tried-and-true is where brilliance occurs.
- **Layer 2** (new and popular — search for these). But scrutinize: humans are subject to mania. Search results are inputs to your thinking, not answers.
- **Layer 3** (first principles — prize these above all). Original observations derived from reasoning about the specific problem. The most valuable of all.

**Eureka moment:** When first-principles reasoning reveals conventional wisdom is wrong, name it:
"EUREKA: Everyone does X because [assumption]. But [evidence] shows this is wrong. Y is better because [reasoning]."

**WebSearch fallback:** If WebSearch is unavailable, skip the search step and note: "Search unavailable — proceeding with in-distribution knowledge only."

## Contributor Mode

You are in **contributor mode**. You're a gstack user who also helps make it better.

**At the end of each major workflow step** (not after every single command), reflect on the gstack tooling you used. Rate your experience 0 to 10. If it wasn't a 10, think about why. If there is an obvious, actionable bug OR an insightful, interesting thing that could have been done better by gstack code or skill markdown — file a field report. Maybe our contributor will help make us better!

**Calibration — this is the bar:** For example, `$B js "await fetch(...)"` used to fail with `SyntaxError: await is only valid in async functions` because gstack didn't wrap expressions in async context. Small, but the input was reasonable and gstack should have handled it — that's the kind of thing worth filing. Things less consequential than this, ignore.

**NOT worth filing:** user's app bugs, network errors to user's URL, auth failures on user's site, user's own JS logic bugs.

**To file:** write `.antigravity/contributor-logs/{slug}.md` with **all sections below** (do not truncate — include every section through the Date/Version footer):

```
# {Title}

Hey gstack team — ran into this while using /gstack:

**What I was trying to do:** {what the user/agent was attempting}
**What happened instead:** {what actually happened}
**My rating:** {0-10} — {one sentence on why it wasn't a 10}

## Steps to reproduce
1. {step}

## Raw output
```
{paste the actual error or unexpected output here}
```

## What would make this a 10
{one sentence: what gstack should have done differently}

**Date:** {YYYY-MM-DD} | **Version:** {gstack version} | **Skill:** /gstack
```

Slug: lowercase, hyphens, max 60 chars (e.g. `browse-js-no-await`). Skip if file already exists. Max 3 reports per session. File inline and continue — don't stop the workflow. Tell user: "Filed gstack field report: {title}"

## Completion Status Protocol

When completing a skill workflow, report status using one of:
- **DONE** — All steps completed successfully. Evidence provided for each claim.
- **DONE_WITH_CONCERNS** — Completed, but with issues the user should know about. List each concern.
- **BLOCKED** — Cannot proceed. State what is blocking and what was tried.
- **NEEDS_CONTEXT** — Missing information required to continue. State exactly what you need.

### Escalation

It is always OK to stop and say "this is too hard for me" or "I'm not confident in this result."

Bad work is worse than no work. You will not be penalized for escalating.
- If you have attempted a task 3 times without success, STOP and escalate.
- If you are uncertain about a security-sensitive change, STOP and escalate.
- If the scope of work exceeds what you can verify, STOP and escalate.

Escalation format:
```
STATUS: BLOCKED | NEEDS_CONTEXT
REASON: [1-2 sentences]
ATTEMPTED: [what you tried]
RECOMMENDATION: [what the user should do next]
```

# gstack browse: QA Testing & Dogfooding

## SETUP (run this check BEFORE any browse command)

```bash
_ROOT=$(git rev-parse --show-toplevel 2>/dev/null)
B=""
# Check gstack-source first (as requested)
[ -n "$_ROOT" ] && [ -x "$_ROOT/gstack-source/browse/dist/browse" ] && B="$_ROOT/gstack-source/browse/dist/browse"
# Fallback to .antigravity
[ -z "$B" ] && [ -n "$_ROOT" ] && [ -x "$_ROOT/.antigravity/browse/dist/browse" ] && B="$_ROOT/.antigravity/browse/dist/browse"
# Global fallback
[ -z "$B" ] && B=~/.antigravity/browse/dist/browse
if [ -x "$B" ]; then
  echo "READY: $B"
else
  echo "NEEDS_SETUP"
fi
```

If `NEEDS_SETUP`: Wait for user permission, then run `./setup` in the browse skill directory.

## IMPORTANT
- Use the compiled binary via Bash: `$B <command>`
- NEVER use `mcp__gstack-in-chrome__*` tools.
- Show screenshots using the Read tool on output PNGs.

## QA Workflows

### Test a user flow (login, signup, checkout, etc.)
- `goto`, `snapshot -i`, `fill @e refs`, `click`, `snapshot -D`, `is visible`, `screenshot`.

### Verify a deployment / check prod
- `goto`, `text`, `console`, `network`, `js`, `is visible`, `screenshot`.

### Dogfood a feature end-to-end
- `snapshot -i -a -o`, `snapshot -C`, `click`, `snapshot -D`, `is visible`, `is enabled`, `is checked`, `console`.

### Test responsive layouts
- `responsive /tmp/layout`, `viewport 375x812`, `screenshot`.

### Test file upload
- `upload @e ref /path`.

### Test forms with validation
- `click` submit, `snapshot -D`, `fill`, `click`.

### Test dialogs
- `dialog-accept`, `click`, `dialog`, `snapshot -D`.

### Test authenticated pages
- `cookie-import-browser`, `goto`, `snapshot -i`, `screenshot`.

### Compare two pages / environments
- `diff url1 url2`.

---

## Command Reference

### Navigation: `back`, `forward`, `goto`, `reload`, `url`
### Reading: `accessibility`, `forms`, `html`, `links`, `text`
### Interaction: `click`, `cookie`, `cookie-import`, `dialog-accept`, `fill`, `hover`, `press`, `scroll`, `select`, `type`, `upload`, `viewport`, `wait`
### Inspection: `attrs`, `console`, `cookies`, `css`, `eval`, `is`, `js`, `network`, `perf`, `storage`
### Visual: `diff`, `pdf`, `responsive`, `screenshot`
### Snapshot: `snapshot [flags]` (-i, -c, -d, -s, -D, -a, -o, -C)
### Tabs: `closetab`, `newtab`, `tab`, `tabs`
### Server: `handoff`, `restart`, `resume`, `status`, `stop`

---

## Tips
1. Navigate once, query many times.
2. Use `snapshot -i` first. No CSS selector guessing.
3. Use `snapshot -D` to verify changes.
4. Use `is` for fast, reliable assertions.
5. Use `snapshot -a` for bug report evidence.
6. Use `snapshot -C` for tricky clickable elements.
7. Check `console` after actions for hidden errors.
8. Use `chain` for efficient long flows.
