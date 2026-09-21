# Role Intelligence v2 Specification

## Goal
Turn the fourth tab from a mostly visual prototype into an evidence-aware person × role analysis engine while keeping life-experience context separate from baseline employment compatibility.

## Product rules
- Do not reduce the experience to a single hireability or promotion score.
- Keep PI Behavioral Assessment data as the behavioral source; any derived work-value, cognitive-style, or environment preference is explicitly heuristic and directional.
- Life-experience, health, disability, family, immigration, identity, neurodivergence, and other sensitive context must never change baseline role compatibility or employee ranking.
- Role demands must be traceable to evidence channels: Occu-Med workflow/role evidence, official occupational analogues, work-design research, and PI job-target methodology.
- ExamQA and Exam Review remain separate cognitive environments: ExamQA emphasizes quality-at-volume and bounded discretion; Exam Review emphasizes interpretive depth and substantive judgment.
- Adjacent-role pull is computed from role similarity plus suppressed/expressed drives; it is not a promotion recommendation.
- The role orbit is spatially data-driven but does not expose an overall hireability score.
- The UI stays cinematic and avoids a wall of cards.

## Engine outputs
For each employee × role interaction:
- behavioral fit
- cognitive/task fit
- work-value fit
- environment fit
- boundary fit
- sustainability/strain fit
- strength-inversion risk
- evidence confidence
- factor signals
- computed adjacent-role pull
- internal compatibility index used for spatial layout only

## Evidence source families
- Occu-Med internal/public workflow evidence
- O*NET occupational analogues
- BLS Occupational Requirements Survey
- NIOSH work-design/stress framework
- Predictive Index Behavioral Target / Job Target methodology

## Role catalog
Analyst/specialist roles:
- ExamQA Analyst
- Subject Matter Expert / Exam Review
- Network Management Analyst
- Provider Relations Analyst
- Scheduling Analyst
- Client Account Manager
- Operations Director
- Finance Analyst
- Fitness for Duty Analyst

Leadership roles added in v2:
- ExamQA Manager
- ExamQA Director
- Provider Relations Manager
- Scheduling Manager
- Network Management Director

## Evidence caution
External occupations are analogues, not claims that an Occu-Med role is identical to the O*NET occupation. Leadership roles with less direct Occu-Med evidence must surface lower confidence than well-documented analyst workflows.
