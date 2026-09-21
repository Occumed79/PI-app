# Role Intelligence v2 Engine Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Replace the prototype's mostly static role matching with an evidence-aware multi-layer role interaction engine and data-driven role orbit.

**Architecture:** Split role definitions, evidence provenance, and scoring math into focused modules. Keep the existing fourth-tab component as the presentation layer and feed it derived interaction objects. Sensitive context stays outside baseline scoring.

**Tech Stack:** React 18, Vite, Framer Motion, Node test runner, existing PI-app data model.

**Spec:** docs/role-intelligence-v2-spec.md

## Global Constraints
- No life-experience or sensitive context in baseline compatibility.
- No single displayed hireability/promotion score.
- External occupational data is analogue evidence, not an exact job equivalence.
- Adjacent-role pull must be computed, not manually declared.
- Render production build must run tests before Vite build.
- No GitHub Actions/workflows are introduced.

## Review Focus
- Same employee with and without context overlays must produce identical baseline role scores.
- Every component score must stay within 0-100 for extreme PI values.
- Adjacent-role computation must exclude the selected role and remain deterministic.
- Roles with weaker direct evidence must not masquerade as high-confidence profiles.
- Orbit radius must be derived from the internal compatibility index and remain bounded.

### Task 1: Add evidence catalog and role definitions
**Files:** Create src/data/roleIntelligenceSources.js; create src/data/roleIntelligenceRoles.js.
- Add official source metadata and evidence-type weights.
- Add 14 Occu-Med roles with behavioral bands, task/environment/boundary/work-value models, and evidence refs.
- Remove manual adjacent-role arrays from the model.

### Task 2: Build the multi-layer engine
**Files:** Rewrite src/data/roleIntelligence.js.
- Derive directional person preferences from exact PI factors.
- Calculate behavioral, cognitive/task, work-value, environment, boundary, sustainability, inversion-risk, and evidence-confidence outputs.
- Calculate adjacent-role pull from role similarity + person-role interaction.
- Calculate bounded orbit radius from the internal compatibility index.
- Preserve existing exports used by the UI.

### Task 3: Add unit tests and gate production builds
**Files:** Create test/roleIntelligence.test.js; modify package.json.
- Test sensitive-context separation, score bounds, role count, evidence confidence, adjacent-role determinism, and orbit radius.
- Change npm build to run node tests before Vite build.

### Task 4: Wire the UI to the new engine
**Files:** Modify src/components/RoleIntelligenceTab.jsx.
- Make role orbit radius data-driven.
- Show multi-layer interaction breakdown without a single overall score.
- Show evidence confidence and a compact evidence rail.
- Replace manual adjacent-role list with computed pull.
- Preserve the existing cinematic/AI/life-lens experience.

### Task 5: Verify on Render
- Merge only after code review of the diff.
- Confirm Render checks out the merged commit, tests pass, Vite build succeeds, deploy is live, and recent runtime logs contain no errors.
