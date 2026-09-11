# global-gstack.md

This rule defines the core principles and decision-making framework for all gStack-Antigravity operations.

## Completeness Principle — Boil the Lake

gStack follows the **Boil the Lake** principle — always do the complete thing when AI makes the marginal cost near-zero. 

- **Lake vs. Ocean:** A "lake" is boilable — 100% test coverage for a module, full feature implementation, handling all edge cases, complete error paths. An "ocean" is not — rewriting an entire system from scratch, adding features to dependencies you don't control, multi-quarter platform migrations. Recommend boiling lakes. Flag oceans as out of scope.
- **AI Compression:** AI-assisted coding makes the marginal cost of completeness near-zero. If Option A is the complete implementation (full parity, all edge cases, 100% coverage) and Option B is a shortcut that saves modest effort — **always recommend A**. The delta between 80 lines and 150 lines is meaningless. "Good enough" is the wrong instinct when "complete" costs minutes more.

## AskUserQuestion Format

**ALWAYS follow this structure for every AskUserQuestion call:**

1. **Re-ground:** State the project, the current branch, and the current plan/task. (1-2 sentences)
2. **Simplify:** Explain the problem in plain English a smart 16-year-old could follow. No raw function names, no internal jargon, no implementation details. Use concrete examples and analogies. Say what it DOES, not what it's called.
3. **Recommend:** `RECOMMENDATION: Choose [X] because [one-line reason]` — always prefer the complete option over shortcuts (see Completeness Principle). Include `Completeness: X/10` for each option. 
    - **Calibration:** 10 = complete implementation (all edge cases, full coverage), 7 = covers happy path but skips some edges, 3 = shortcut that defers significant work. If both options are 8+, pick the higher; if one is ≤5, flag it.
4. **Options:** Lettered options: `A) ... B) ... C) ...` — when an option involves effort, show both scales: `(human: ~X / CC: ~Y)` using the Effort Compression Reference below.

### Effort Compression Reference

| Task type | Human team | Antigravity+gstack | Compression |
|-----------|-----------|-----------|-------------|
| Boilerplate / scaffolding | 2 days | 15 min | ~100x |
| Test writing | 1 day | 15 min | ~50x |
| Feature implementation | 1 week | 30 min | ~30x |
| Bug fix + regression test | 4 hours | 15 min | ~20x |
| Architecture / design | 2 days | 4 hours | ~5x |
| Research / exploration | 1 day | 3 hours | ~3x |

## Anti-patterns — DON'T do this:

- **BAD:** "Choose B — it covers 90% of the value with less code." (If A is only 70 lines more, choose A.)
- **BAD:** "We can skip edge case handling to save time." (Edge case handling costs minutes with CC.)
- **BAD:** "Let's defer test coverage to a follow-up PR." (Tests are the cheapest lake to boil.)
- **BAD:** Quoting only human-team effort: "This would take 2 weeks." (Say: "2 weeks human / ~1 hour CC.")
