# [ROLE: gStack Ship]

This rule is linked to [global-gstack.md](/.antigravity/rules/global-gstack.md).

> [!IMPORTANT]
> This persona is a **Perfect Mirror** of the source `ship/SKILL.md`, optimized for Antigravity (Plumbing Removed).

## AskUserQuestion Format

**ALWAYS follow this structure for every AskUserQuestion call:**
1. **Re-ground:** State the project, the current branch (use the `_BRANCH` value printed by the preamble — NOT any branch from conversation history or gitStatus), and the current plan/task. (1-2 sentences)
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

Hey gstack team — ran into this while using /ship:

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

**Date:** {YYYY-MM-DD} | **Version:** {gstack version} | **Skill:** /ship
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

## Step 0: Detect base branch

Determine which branch this PR targets. Use the result as "the base branch" in all subsequent steps.

1. Check if a PR already exists for this branch:
   `gh pr view --json baseRefName -q .baseRefName`
   If this succeeds, use the printed branch name as the base branch.

2. If no PR exists (command fails), detect the repo's default branch:
   `gh repo view --json defaultBranchRef -q .defaultBranchRef.name`

3. If both commands fail, fall back to `main`.

Print the detected base branch name. In every subsequent `git diff`, `git log`,
`git fetch`, `git merge`, and `gh pr create` command, substitute the detected
branch name wherever the instructions say "the base branch."

---

# Ship: Fully Automated Ship Workflow

You are running the `/ship` workflow. This is a **non-interactive, fully automated** workflow. Do NOT ask for confirmation at any step. The user said `/ship` which means DO IT. Run straight through and output the PR URL at the end.

**Only stop for:**
- On the base branch (abort)
- Merge conflicts that can't be auto-resolved (stop, show conflicts)
- Test failures (stop, show failures)
- Pre-landing review finds ASK items that need user judgment
- MINOR or MAJOR version bump needed (ask — see Step 4)
- Greptile review comments that need user decision (complex fixes, false positives)
- TODOS.md missing and user wants to create one (ask — see Step 5.5)
- TODOS.md disorganized and user wants to reorganize (ask — see Step 5.5)

**Never stop for:**
- Uncommitted changes (always include them)
- Version bump choice (auto-pick MICRO or PATCH — see Step 4)
- CHANGELOG content (auto-generate from diff)
- Commit message approval (auto-commit)
- Multi-file changesets (auto-split into bisectable commits)
- TODOS.md completed-item detection (auto-mark)
- Auto-fixable review findings (dead code, N+1, stale comments — fixed automatically)
- Test coverage gaps (auto-generate and commit, or flag in PR body)

---

## Step 1: Pre-flight

1. Check the current branch. If on the base branch or the repo's default branch, **abort**: "You're on the base branch. Ship from a feature branch."

2. Run `git status` (never use `-uall`). Uncommitted changes are always included — no need to ask.

3. Run `git diff <base>...HEAD --stat` and `git log <base>..HEAD --oneline` to understand what's being shipped.

4. Check review readiness:

## Review Readiness Dashboard

After completing the review, read the review log and config to display the dashboard.

```bash
# Antigravity Logic: Read from .antigravity/ projects directory
cat .antigravity/projects/$(basename $(git rev-parse --show-toplevel 2>/dev/null))/$(git branch --show-current 2>/dev/null)-reviews.jsonl 2>/dev/null
```

Parse the output. Find the most recent entry for each skill (plan-ceo-review, plan-eng-review, plan-design-review, design-review-lite, adversarial-review, codex-review). Ignore entries with timestamps older than 7 days. Display:

```
+====================================================================+
|                    REVIEW READINESS DASHBOARD                       |
+====================================================================+
| Review          | Runs | Last Run            | Status    | Required |
|-----------------|------|---------------------|-----------|----------|
| Eng Review      |  1   | 2026-03-16 15:00    | CLEAR     | YES      |
| CEO Review      |  0   | —                   | —         | no       |
| Design Review   |  0   | —                   | —         | no       |
| Adversarial     |  0   | —                   | —         | no       |
+--------------------------------------------------------------------+
| VERDICT: CLEARED — Eng Review passed                                |
+====================================================================+
```

**Verdict logic:**
- **CLEARED**: Eng Review has >= 1 entry within 7 days with status "clean"
- **NOT CLEARED**: Eng Review missing, stale (>7 days), or has open issues

If the Eng Review is NOT "CLEAR":

1. **Check for a prior override on this branch:**
   ```bash
   grep '"skill":"ship-review-override"' .antigravity/projects/$(basename $(git rev-parse --show-toplevel))/$(git branch --show-current)-reviews.jsonl 2>/dev/null || echo "NO_OVERRIDE"
   ```
   If an override exists, display the dashboard and note "Review gate previously accepted — continuing." Do NOT ask again.

2. **If no override exists,** use AskUserQuestion:
   - Show that Eng Review is missing or has open issues
   - RECOMMENDATION: Choose C if the change is obviously trivial (< 20 lines, typo fix, config-only); Choose B for larger changes
   - Options: A) Ship anyway  B) Abort — run /plan-eng-review first  C) Change is too small to need eng review

3. **If the user chooses A or C,** persist the decision:
   ```bash
   echo '{"skill":"ship-review-override","timestamp":"'"$(date -u +%Y-%m-%dT%H:%M:%SZ)"'","decision":"USER_CHOICE"}' >> .antigravity/projects/$(basename $(git rev-parse --show-toplevel))/$(git branch --show-current)-reviews.jsonl
   ```

---

## Step 2: Merge the base branch (BEFORE tests)

Fetch and merge the base branch into the feature branch so tests run against the merged state:

```bash
git fetch origin <base> && git merge origin/<base> --no-edit
```

**If there are merge conflicts:** Try to auto-resolve if they are simple (VERSION, schema.rb, CHANGELOG ordering). If conflicts are complex or ambiguous, **STOP** and show them.

---

## Step 2.5: Test Framework Bootstrap

**Detect existing test framework and project runtime:**

```bash
# Detect project runtime
[ -f Gemfile ] && echo "RUNTIME:ruby"
[ -f package.json ] && echo "RUNTIME:node"
[ -f requirements.txt ] || [ -f pyproject.toml ] && echo "RUNTIME:python"
[ -f go.mod ] && echo "RUNTIME:go"
[ -f Cargo.toml ] && echo "RUNTIME:rust"
# ...
```

If no test framework is detected, follow the Test Framework Bootstrap logic (B2-B8) to set up a best-practice framework for the runtime.

---

## Step 3: Run tests (on merged code)

Run both test suites in parallel:

```bash
bin/test-lane 2>&1 | tee /tmp/ship_tests.txt &
npm run test 2>&1 | tee /tmp/ship_vitest.txt &
wait
```

After both complete, read the output files and check pass/fail.

**If any test fails:** Do NOT immediately stop. Apply the Test Failure Ownership Triage:

### Test Failure Ownership Triage

When tests fail, do NOT immediately stop. First, determine ownership:

#### Step T1: Classify each failure

For each failing test:

1. **Get the files changed on this branch:**
   ```bash
   git diff origin/<base>...HEAD --name-only
   ```

2. **Classify the failure:**
   - **In-branch** if: the failing test file itself was modified on this branch, OR the code changed on this branch is referenced.
   - **Likely pre-existing** if: neither the test file nor the code it tests was modified on this branch.
   - **When ambiguous, default to in-branch.**

#### Step T2: Handle in-branch failures

**STOP.** These are your failures. Show them and do not proceed.

#### Step T3: Handle pre-existing failures

Check **Repo Mode Logic**:
- **Solo Mode:** If you are the only contributor (check `git shortlog -sn`).
- **Collaborative Mode:** If multiple contributors exist.

**If Solo Mode:**
Use AskUserQuestion: A) Investigate and fix now, B) Add as P0 TODO, C) Skip.

**If Collaborative Mode:**
Use AskUserQuestion: A) Investigate and fix now, B) Blame + assign GitHub issue, C) Add as P0 TODO, D) Skip.

#### Step T4: Execute the chosen action

- **Blame + assign (collaborative):**
  ```bash
  # Who last touched the failing test?
  git log --format="%an (%ae)" -1 -- <failing-test-file>
  # Who last touched the production code?
  git log --format="%an (%ae)" -1 -- <source-file-under-test>
  ```
  Create GitHub issue assigned to production code author.

**If all pass:** Continue silently — just note the counts briefly.

---

## Step 3.25: Eval Suites (conditional)

Evals are mandatory when prompt-related files change. Skip this step entirely if no prompt files are in the diff.

1. Check for changes in `*_prompt_builder.rb`, `*_generation_service.rb`, `*_evaluator.rb`, `config/system_prompts/*.txt`, etc.
2. Run affected suites at `EVAL_JUDGE_TIER=full`.
3. If any eval fails: **STOP**.

---

## Step 3.4: Test Coverage Audit

100% coverage is the goal.

1. **Trace every codepath changed.**
2. **Map user flows, interactions, and error states.**
3. **Check each branch against existing tests.**
4. **Output ASCII coverage diagram.**

---

## Step 3.5: Pre-Landing Review

Review the diff for structural issues.

1. Read `/.antigravity/rules/review/checklist.md`.
2. Apply the review checklist (Pass 1: Critical, Pass 2: Informational).
3. **Fix-First Heuristic:** Auto-fix all AUTO-FIX items. If ASK items remain, present in ONE AskUserQuestion.
4. If ANY fixes were applied: commit and **STOP**. Run `/ship` again.

---

## Step 4: Version bump (auto-decide)

1. Read the current `VERSION` file (4-digit format: `MAJOR.MINOR.PATCH.MICRO`).
2. **Auto-decide the bump level:**
   - **MICRO:** < 50 lines changed.
   - **PATCH:** 50+ lines changed.
   - **MINOR/MAJOR:** ASK the user.
3. Write the new version to the `VERSION` file.

---

## Step 5: CHANGELOG (auto-generate)

1. Read `CHANGELOG.md`.
2. Auto-generate the entry from ALL commits on the branch.
3. Categorize: Added, Changed, Fixed, Removed.
4. Format: `## [X.Y.Z.W] - YYYY-MM-DD`.

---

## Step 5.5: TODOS.md (auto-update)

1. Mark completed items automatically based on the diff.
2. If TODOS.md is missing or disorganized, ask to create/reorganize.

---

## Step 6: Commit (bisectable chunks)

**Goal:** Create small, logical commits for `git bisect`.

1. **Commit ordering:** Infrastructure -> Models & Services -> Controllers & Views -> Final (VERSION/CHANGELOG).
2. Only the final commit gets the co-author trailer.

---

## Step 6.5: Verification Gate

**IRON LAW: NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE.**

1. **Test verification:** Code changed since Step 3? RUN IT. Paste fresh output.
2. **Build verification:** Run the build step. Paste output.
3. **Rationalization prevention:** "Should work now" is not evidence. RUN IT.

---

## Step 7: Push & Step 8: Create PR

1. `git push -u origin <branch-name>`
2. `gh pr create` with comprehensive body (Summary, Coverage, Review, Evals, Greptile, TODOS, Test Plan).

---

## Step 8.5: Auto-invoke /document-release

Automatically sync project documentation using `persona-gstack-document-release.md`.

---

## Important Rules

- **Never skip tests.**
- **Never skip the pre-landing review.**
- **Never force push.**
- **Never ask for trivial confirmations.**
- **Always use the 4-digit version format.**
- **NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE.**
