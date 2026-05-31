// SignalGlass Static Lenses — source of truth for all lens content
// Auto-generated from uploaded JSON files. Do not edit manually.
// Each entry: { id, lens (display title), status, source, content (full source text) }

export const signalGlassStaticLenses = [
  {
    id: "big-five-ocean",
    lens: "Big Five / OCEAN",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 01 — Big Five / OCEAN
======================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


SOURCE-DERIVED LENS CONTENT
---------------------------
### LENS 1: Big Five / OCEAN — Micro-Mapping

| Profile | Dominant Trait | Secondary Trait | Typical Neuroticism | Rationale |
|---|---|---|---|---|
| Analyzer | Conscientiousness | Openness (low-moderate) | Low | Precision, rule-orientation and methodical work make conscientiousness primary; prefers structured novelty. |
| Controller | Conscientiousness | Low Agreeableness | Low-Moderate | Rule enforcement and duty drive high discipline and firm interpersonal stance. |
| Specialist | Conscientiousness | Openness (domain) | Low | Deep, focused mastery and careful standards; curious within a narrow domain. |
| Strategist | Openness | Conscientiousness | Low-Moderate | Big-picture, systems thinking with disciplined follow-through. |
| Venturer | Openness | Extraversion | Moderate | Novelty seeking and social risk taking drive exploration and energetic outreach. |
| Altruist | Agreeableness | Conscientiousness | Low | People-first orientation and dependable support make agreeableness primary. |
| Captain | Extraversion | Conscientiousness | Moderate | Assertive, outcome-driven leadership with practical discipline. |
| Collaborator | Agreeableness | Extraversion | Low | Harmony, facilitation and sociability prioritize cooperation and low conflict. |
| Maverick | Openness | Extraversion | Moderate | Creative, unconventional thinking paired with expressive challenge of norms. |
| Persuader | Extraversion | Openness | Moderate | Social influence and adaptability to audiences drive high extraversion. |
| Promoter | Extraversion | Openness | Moderate-High | Public energy, spontaneity and novelty orientation; emotional reactivity can be higher. |
| Adapter | Agreeableness | Openness | Low | Flexible, cooperative style that adjusts to people and context. |
| Craftsman | Conscientiousness | Low Openness | Low | Quality focus, routine and standards make conscientiousness dominant; novelty is secondary. |
| Guardian | Conscientiousness | Agreeableness | Low | Stewardship, rule-orientation and protective care favor discipline and steady temperament. |
| Operator | Conscientiousness | Agreeableness | Low | Executional reliability and process focus with cooperative delivery orientation. |
| Individualist | Openness | Low Agreeableness | Moderate | Authenticity and creative self-expression drive openness; selective social engagement raises sensitivity. |
| Scholar | Openness | Conscientiousness | Low | Intellectual curiosity and rigorous method make openness and disciplined analysis primary. |

**Practical implications:**
- *Selection:* Use role-relative Big Five targets (high Conscientiousness for operations/QA; high Openness for innovation; high Agreeableness for people-facing roles).
- *Development:* Pair trait strengths with targeted interventions (e.g., delegation/warmth training for high-C/low-A profiles; structure/follow-through coaching for high-O creatives).
- *Team design:* Balance dominant traits — mix high Openness with high Conscientiousness and at least one high Agreeableness profile to preserve cohesion.

---

IMPLEMENTATION NOTES
--------------------
Primary output fields recommended for SignalGlass UI:
- dominant_trait
- secondary_trait
- neuroticism_signal
- behavioral_rationale
- selection_implication
- development_implication
- team_design_implication

Deduplication status: no duplicate finished Big Five lens found. Workplace Big Five Pro was not merged into this file because the source marks it as only partially completed and missing Pro-specific facets.
`,
  },
  {
    id: "insights-discovery-color-model",
    lens: "Insights Discovery (Color Model)",
    status: "Partially Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Insights Discovery (Color Model)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

INSIGHTS DISCOVERY (COLOR MODEL)
Status:  Partially Done → now completing fully
Output: For each PI profile →
  - Dominant Color
  - Secondary Color
  - Stress Shift
  - Communication Do / Don’t
  - One‑line rationale
  - (All with Guided Links so you can jump deeper later)

 INSIGHTS DISCOVERY — FULL CROSSWALK FOR ALL 17 PI PROFILES
 Red = Direct, decisive, action‑driven
 Yellow = Energetic, expressive, social
 Green = Supportive, steady, relational
 Blue = Analytical, precise, structured

1. Analyzer
  - Dominant:  Blue
  - Secondary:  Red
  - Stress Shift: Hyper‑Blue → over‑analysis, rigidity
  - Do: Be precise, structured, factual
  - Don’t: Be vague or emotional
  - Rationale: High detail orientation + low social drive
  - Deep dive: Analyzer Color Model

2. Controller
  - Dominant:  Blue
  - Secondary:  Red
  - Stress Shift: Blue → controlling Red
  - Do: Provide rules, clarity, compliance paths
  - Don’t: Surprise them or break process
  - Rationale: Order + authority + low sociability
  - Deep dive: Controller Color Model

3. Specialist
  - Dominant:  Blue
  - Secondary:  Green
  - Stress Shift: Withdrawn Blue
  - Do: Give detail, time, and accuracy
  - Don’t: Push for fast decisions
  - Rationale: Depth, precision, stability
  - Deep dive: Specialist Color Model

4. Strategist
  - Dominant:  Red
  - Secondary:  Blue
  - Stress Shift: Red → dismissive Blue
  - Do: Be concise, strategic, outcome‑focused
  - Don’t: Over‑explain or get emotional
  - Rationale: Vision + logic + drive
  - Deep dive: Strategist Color Model

5. Venturer
  - Dominant:  Red
  - Secondary:  Yellow
  - Stress Shift: Impulsive Red
  - Do: Move fast, give autonomy
  - Don’t: Slow them down with detail
  - Rationale: Bold, opportunistic, high energy
  - Deep dive: Venturer Color Model

6. Altruist
  - Dominant:  Green
  - Secondary:  Blue
  - Stress Shift: Over‑accommodating Green
  - Do: Be warm, supportive, predictable
  - Don’t: Be abrupt or confrontational
  - Rationale: People‑first + stability
  - Deep dive: Altruist Color Model

7. Captain
  - Dominant:  Red
  - Secondary:  Yellow
  - Stress Shift: Aggressive Red
  - Do: Be direct, decisive, confident
  - Don’t: Waffle or hesitate
  - Rationale: Commanding, assertive, mobilizing
  - Deep dive: Captain Color Model

8. Collaborator
  - Dominant:  Green
  - Secondary:  Yellow
  - Stress Shift: Passive Green
  - Do: Be inclusive, patient, relational
  - Don’t: Rush decisions or create conflict
  - Rationale: Harmony + facilitation
  - Deep dive: Collaborator Color Model

9. Maverick
  - Dominant:  Yellow
  - Secondary:  Red
  - Stress Shift: Chaotic Yellow
  - Do: Encourage creativity, big ideas
  - Don’t: Over‑structure or constrain
  - Rationale: Bold, expressive, disruptive
  - Deep dive: Maverick Color Model

10. Persuader
  - Dominant:  Yellow
  - Secondary:  Red
  - Stress Shift: Dramatic Yellow
  - Do: Be energetic, engaging, people‑focused
  - Don’t: Be cold or overly technical
  - Rationale: Influence + charisma
  - Deep dive: Persuader Color Model

11. Promoter
  - Dominant:  Yellow
  - Secondary:  Red
  - Stress Shift: Over‑promising Yellow
  - Do: Be upbeat, fast, collaborative
  - Don’t: Bury them in detail
  - Rationale: High energy, activation, visibility
  - Deep dive: Promoter Color Model

12. Adapter
  - Dominant:  Green
  - Secondary:  Blue
  - Stress Shift: Quiet withdrawal
  - Do: Be steady, clear, respectful
  - Don’t: Force fast decisions
  - Rationale: Flexible, relational, balanced
  - Deep dive: Adapter Color Model

13. Craftsman
  - Dominant:  Blue
  - Secondary:  Green
  - Stress Shift: Perfectionistic Blue
  - Do: Provide detail, standards, clarity
  - Don’t: Change things last‑minute
  - Rationale: Quality + precision
  - Deep dive: Craftsman Color Model

14. Guardian
  - Dominant:  Green
  - Secondary:  Blue
  - Stress Shift: Defensive Green
  - Do: Be predictable, respectful, structured
  - Don’t: Push sudden change
  - Rationale: Stability + stewardship
  - Deep dive: Guardian Color Model

15. Operator
  - Dominant:  Blue
  - Secondary:  Green
  - Stress Shift: Rigid Blue
  - Do: Give process, clarity, expectations
  - Don’t: Be chaotic or inconsistent
  - Rationale: Execution + reliability
  - Deep dive: Operator Color Model

16. Individualist
  - Dominant:  Yellow
  - Secondary:  Blue
  - Stress Shift: Detached Yellow
  - Do: Respect autonomy, creativity
  - Don’t: Micromanage
  - Rationale: Expressive + analytical + independent
  - Deep dive: Individualist Color Model

17. Scholar
  - Dominant:  Blue
  - Secondary:  Green
  - Stress Shift: Over‑thinking Blue
  - Do: Provide data, time, structure
  - Don’t: Pressure for fast decisions
  - Rationale: Analytical + methodical
  - Deep dive: Scholar Color Model

 INSIGHTS DISCOVERY — COMPLETE
This lens is now fully done and moves from  →  COMPLETE.
`,
  },
  {
    id: "disc-crosswalk",
    lens: "DISC Crosswalk",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 02 — DISC Crosswalk
====================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


SOURCE-DERIVED LENS CONTENT
---------------------------
### LENS 2: DISC Crosswalk

| Profile | Primary DISC | Secondary DISC | Rationale | Practical Lever |
|---|---|---|---|---|
| Analyzer | C | S | Detail-oriented, rule-driven, prefers accuracy over social influence. | Use written specs and clear quality criteria in meetings. |
| Controller | D | C | Directive and task-focused with strong process expectations. | Give concise goals and authority to enforce standards. |
| Specialist | C | S | Technical depth, methodical, comfortable with steady solo work. | Assign focused review tasks and technical peer reviews. |
| Strategist | D | C | Big-picture driver who also values logical rigor and structure. | Combine vision briefs with data appendices for buy-in. |
| Venturer | D | I | Opportunity seeker, fast mover, socially assertive. | Give short pilot windows and visible forums to pitch. |
| Altruist | S | C | People-first, steady, reliable in supportive roles. | Use them for mentoring and wellbeing programs. |
| Captain | D | I | Commanding, decisive, mobilizes people toward outcomes. | Empower with clear mandates and rapid escalation paths. |
| Collaborator | S | I | Facilitative, consensus-oriented, builds psychological safety. | Put them on cross-functional integration and rituals. |
| Maverick | I | D | Creative, provocative, comfortable challenging norms. | Channel into ideation workshops with clear owners. |
| Persuader | I | D | Charismatic influencer who drives stakeholder action. | Assign to demos, pitches, and external engagement. |
| Promoter | I | D | Energetic, audience-focused, excels at activation. | Use for launches, town halls, and public events. |
| Adapter | S | C | Flexible, reads the room, balances people and process. | Make them the bridge for cross-team problem solving. |
| Craftsman | C | S | Standards and quality driven, prefers predictable routines. | Assign to QA, build standards, and continuous improvement. |
| Guardian | S | C | Stewardship-oriented, protects continuity and norms. | Use to steward change communications and risk forums. |
| Operator | C | D | Process and delivery focused with pragmatic decisiveness. | Give ownership of operational standups and SLAs. |
| Individualist | I | C | Authentic, expressive, selective in social engagement. | Offer small group creative forums and autonomy. |
| Scholar | C | S | Intellectual, reflective, prefers evidence and structure. | Use for research reviews and structured debate formats. |

---

IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- primary_disc
- secondary_disc
- behavioral_rationale
- practical_lever
- meeting_preference
- communication_risk

Deduplication status: no duplicate finished DISC lens found.
`,
  },
  {
    id: "workplace-big-five-pro",
    lens: "Workplace Big Five Pro",
    status: "Partially Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Workplace Big Five Pro
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

WORKPLACE BIG FIVE PRO (Facet-Level Completion)
Status:  Partially Done → now completing fully
Output: For each PI profile →
  - Dominant facet pattern (Need for Stability, Extraversion, Originality, Accommodation, Consolidation)
  - Secondary facet pattern
  - Stress expression
  - Workstyle implications
  - One‑line rationale
  - Guided Links for deeper dives
This is the professional-grade version of OCEAN used in org psychology — more granular, more behavioral, and more predictive for workplace fit.

 THE 5 WORKPLACE BIG FIVE PRO DOMAINS
To anchor the mapping:
N — Need for Stability
Calm ↔ Reactive
E — Extraversion
Quiet ↔ Expressive
O — Originality
Concrete ↔ Innovative
A — Accommodation
Challenging ↔ Agreeable
C — Consolidation
Spontaneous ↔ Methodical

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - N: Low (calm, steady)
  - E: Low
  - O: Moderate
  - A: Low
  - C: Very High
  - Stress: Over‑analysis, rigidity
  - Rationale: Precision + low social drive
  - Deep dive: Analyzer WBF5

2. Controller
  - N: Low‑Moderate
  - E: Low
  - O: Low‑Moderate
  - A: Very Low
  - C: Very High
  - Stress: Rule‑enforcement, inflexibility
  - Rationale: Order + authority
  - Deep dive: Controller WBF5

3. Specialist
  - N: Low
  - E: Low
  - O: Moderate‑High (domain‑specific)
  - A: Moderate
  - C: Very High
  - Stress: Withdrawal, over‑focus
  - Rationale: Depth + precision
  - Deep dive: Specialist WBF5

4. Strategist
  - N: Low
  - E: Moderate
  - O: Very High
  - A: Low
  - C: High
  - Stress: Over‑assertive vision
  - Rationale: Systems thinking + drive
  - Deep dive: Strategist WBF5

5. Venturer
  - N: Moderate
  - E: High
  - O: High
  - A: Low
  - C: Low
  - Stress: Impulsive risk
  - Rationale: Bold, opportunistic
  - Deep dive: Venturer WBF5

6. Altruist
  - N: Low
  - E: Moderate
  - O: Moderate
  - A: Very High
  - C: Moderate
  - Stress: Over‑accommodation
  - Rationale: People‑first stability
  - Deep dive: Altruist WBF5

7. Captain
  - N: Low
  - E: High
  - O: Moderate
  - A: Low
  - C: High
  - Stress: Domineering
  - Rationale: Command + drive
  - Deep dive: Captain WBF5

8. Collaborator
  - N: Low
  - E: Moderate
  - O: Moderate
  - A: Very High
  - C: Moderate
  - Stress: Conflict avoidance
  - Rationale: Harmony + facilitation
  - Deep dive: Collaborator WBF5

9. Maverick
  - N: Low
  - E: High
  - O: Very High
  - A: Low
  - C: Low
  - Stress: Chaos creation
  - Rationale: Creative disruptor
  - Deep dive: Maverick WBF5

10. Persuader
  - N: Low
  - E: Very High
  - O: Moderate
  - A: Moderate
  - C: Low
  - Stress: Over‑selling
  - Rationale: Influence + charisma
  - Deep dive: Persuader WBF5

11. Promoter
  - N: Moderate
  - E: Very High
  - O: High
  - A: Moderate
  - C: Low
  - Stress: Over‑promising
  - Rationale: Activation + energy
  - Deep dive: Promoter WBF5

12. Adapter
  - N: Low
  - E: Moderate
  - O: Moderate
  - A: High
  - C: Moderate
  - Stress: Quiet withdrawal
  - Rationale: Flexible, relational
  - Deep dive: Adapter WBF5

13. Craftsman
  - N: Low
  - E: Low
  - O: Low
  - A: Moderate
  - C: Very High
  - Stress: Perfectionism
  - Rationale: Quality + precision
  - Deep dive: Craftsman WBF5

14. Guardian
  - N: Low
  - E: Low
  - O: Low
  - A: High
  - C: Very High
  - Stress: Defensive caution
  - Rationale: Stewardship + stability
  - Deep dive: Guardian WBF5

15. Operator
  - N: Low
  - E: Low
  - O: Low
  - A: High
  - C: Very High
  - Stress: Rigid process
  - Rationale: Execution + reliability
  - Deep dive: Operator WBF5

16. Individualist
  - N: Moderate
  - E: Low‑Moderate
  - O: Very High
  - A: Low
  - C: Moderate
  - Stress: Withdrawal into autonomy
  - Rationale: Creative + independent
  - Deep dive: Individualist WBF5

17. Scholar
  - N: Low
  - E: Low
  - O: Very High
  - A: Moderate
  - C: Very High
  - Stress: Over‑analysis
  - Rationale: Analytical + methodical
  - Deep dive: Scholar WBF5

 WORKPLACE BIG FIVE PRO — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "cognitive-ability-gma-wonderlic",
    lens: "Cognitive Ability / GMA / Wonderlic",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 03 — Cognitive Ability / GMA / Wonderlic
=========================================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


SOURCE-DERIVED LENS CONTENT
---------------------------
### LENS 3: Cognitive Ability / GMA (Wonderlic)

| Profile | GMA Likelihood | Rationale | Recommended Test | Cut-Score | Quick Lever |
|---|---|---|---|---|---|
| Analyzer | Likely | Strong analytic orientation, pattern recognition, and rule-based problem solving. | Cognitive ability test (verbal, numerical, logical reasoning) | Moderate-High for analytic roles | Use case problems in interviews to validate reasoning under time. |
| Controller | Possible | Good at structured reasoning and rule application; less novelty seeking. | Numerical and situational judgment tests | Moderate for governance roles | Include scenario tests that require applying rules to new facts. |
| Specialist | Likely | Deep domain reasoning and technical problem solving indicate high GMA in domain. | Domain-specific cognitive tests + general reasoning | Moderate-High for technical roles | Use technical case studies that require synthesis of complex info. |
| Strategist | Likely | Systems thinking and integrative planning require high abstract reasoning. | Complex problem solving and abstract reasoning tests | High for strategy roles | Present multi-variable scenarios to assess integrative reasoning. |
| Venturer | Possible | Fast pattern spotting and opportunistic decisions; GMA varies by domain. | Situational judgment + fluid reasoning tests | Moderate with emphasis on speed/heuristic tasks | Use rapid-decision simulations to observe applied reasoning. |
| Altruist | Possible | Strong social reasoning; cognitive ability moderate and applied to people problems. | Situational judgment and verbal reasoning | Moderate for people-facing roles | Use role-play scenarios that combine reasoning with empathy. |
| Captain | Likely | Decisive, outcome-focused with pragmatic problem solving — requires solid GMA. | Problem solving and numerical reasoning tests | Moderate-High for leadership roles | Use time-bounded decision exercises with trade-offs. |
| Collaborator | Possible | Good social cognition and integrative thinking; analytic depth varies. | Verbal reasoning + situational judgment | Moderate for facilitation roles | Evaluate through group problem exercises and synthesis tasks. |
| Maverick | Possible | High creative/associative thinking; conventional GMA measures may underrepresent strengths. | Fluid reasoning + creative problem tasks | Moderate with allowance for non-linear solutions | Use open-ended problems that reward novel, defensible approaches. |
| Persuader | Possible | Strong social and practical reasoning; abstract analytic ability varies. | Verbal reasoning + situational judgment | Moderate for influence roles | Include stakeholder-analysis cases to test applied reasoning. |
| Promoter | Possible | Fast social processing and improvisation; formal GMA moderate. | Verbal fluency and situational judgment tests | Moderate with emphasis on communication tasks | Use live pitch exercises that require quick structuring of arguments. |
| Adapter | Possible | Flexible situational problem solving; cognitive agility rather than deep analytic. | Adaptive reasoning and situational judgment | Moderate for cross-functional roles | Use role-switching simulations to test cognitive flexibility. |
| Craftsman | Likely | Technical precision and procedural problem solving indicate solid GMA in applied domains. | Domain-specific reasoning + attention to detail tests | Moderate-High for craft/engineering roles | Use hands-on problem tasks that require logical sequencing and error detection. |
| Guardian | Possible | Conservative, rule-based reasoning; strong at applied, not abstract, problems. | Situational judgment + numerical reasoning | Moderate for stewardship roles | Use continuity and risk scenarios to test applied reasoning. |
| Operator | Likely | Operational optimization and systems thinking require reliable cognitive ability. | Numerical reasoning + process problem solving tests | Moderate-High for operations roles | Use process optimization case studies with metrics. |
| Individualist | Possible | Insightful, value-driven reasoning; may excel on creative or integrative tasks rather than standard tests. | Abstract reasoning + creative problem tasks | Moderate with emphasis on originality | Use portfolio review and scenario tasks that allow personal framing. |
| Scholar | Very Likely | Research orientation, complex analysis and synthesis indicate high GMA. | Advanced verbal and abstract reasoning tests | High for research/analysis roles | Use research critique and multi-step analytic problems in interviews. |

---

IMPLEMENTATION NOTES
--------------------
This lens should not be treated as a replacement for a validated cognitive assessment. It is a PI-to-cognitive-workstyle translation for role design, interview planning, and test selection.

Recommended SignalGlass UI fields:
- gma_likelihood
- reasoning_signal
- recommended_test_type
- role_relative_cut_score
- validation_activity
- cognitive_risk_or_blindspot
`,
  },
  {
    id: "cognitive-processing-style",
    lens: "Cognitive Processing Style",
    status: "Partially Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Cognitive Processing Style
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

COGNITIVE PROCESSING STYLE
Status:  Partially Done → now completing fully
Output: For each PI profile →
  - Dominant processing style
  - Secondary processing style
  - Stress‑mode processing
  - Workstyle implications
  - One‑line rationale
  - Guided Links for deeper dives
This lens describes how a person thinks, not how smart they are — pattern‑level cognition.

  THE 6 COGNITIVE PROCESSING STYLES
(Used in org psych & cognitive ergonomics)
1. Analytical
Linear, structured, rule‑based, detail‑driven.
2. Intuitive
Pattern‑spotting, associative, fast‑thinking.
3. Conceptual
Abstract, systems‑level, integrative.
4. Experiential
Hands‑on, trial‑and‑error, sensory‑driven.
5. Social‑Cognitive
People‑reading, relational inference, emotional patterning.
6. Adaptive / Contextual
Flexible switching, situational reasoning.

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - Dominant: Analytical
  - Secondary: Conceptual
  - Stress Mode: Hyper‑analysis, over‑checking
  - Rationale: Precision + structure + low social drive
  - Deep dive: Analyzer Processing

2. Controller
  - Dominant: Analytical
  - Secondary: Adaptive (rule‑based switching)
  - Stress Mode: Rigid rule enforcement
  - Rationale: Order + compliance + low novelty
  - Deep dive: Controller Processing

3. Specialist
  - Dominant: Analytical
  - Secondary: Experiential (technical depth)
  - Stress Mode: Narrow focus, withdrawal
  - Rationale: Deep technical reasoning
  - Deep dive: Specialist Processing

4. Strategist
  - Dominant: Conceptual
  - Secondary: Analytical
  - Stress Mode: Over‑theorizing, dismissing detail
  - Rationale: Systems thinking + logic
  - Deep dive: Strategist Processing

5. Venturer
  - Dominant: Intuitive
  - Secondary: Conceptual
  - Stress Mode: Impulsive heuristics
  - Rationale: Fast pattern spotting + risk appetite
  - Deep dive: Venturer Processing

6. Altruist
  - Dominant: Social‑Cognitive
  - Secondary: Adaptive
  - Stress Mode: Over‑accommodation
  - Rationale: People‑first reasoning
  - Deep dive: Altruist Processing

7. Captain
  - Dominant: Intuitive
  - Secondary: Analytical
  - Stress Mode: Decisive oversimplification
  - Rationale: Fast action + outcome logic
  - Deep dive: Captain Processing

8. Collaborator
  - Dominant: Social‑Cognitive
  - Secondary: Adaptive
  - Stress Mode: Avoidance, deferring
  - Rationale: Relational integration
  - Deep dive: Collaborator Processing

9. Maverick
  - Dominant: Conceptual
  - Secondary: Intuitive
  - Stress Mode: Chaotic ideation
  - Rationale: Creative, disruptive cognition
  - Deep dive: Maverick Processing

10. Persuader
  - Dominant: Social‑Cognitive
  - Secondary: Intuitive
  - Stress Mode: Emotional reasoning
  - Rationale: Influence + audience reading
  - Deep dive: Persuader Processing

11. Promoter
  - Dominant: Intuitive
  - Secondary: Social‑Cognitive
  - Stress Mode: Impulsive, reactive
  - Rationale: Fast, expressive, improvisational
  - Deep dive: Promoter Processing

12. Adapter
  - Dominant: Adaptive
  - Secondary: Social‑Cognitive
  - Stress Mode: Quiet withdrawal
  - Rationale: Flexible, situational reasoning
  - Deep dive: Adapter Processing

13. Craftsman
  - Dominant: Experiential
  - Secondary: Analytical
  - Stress Mode: Perfectionistic detail
  - Rationale: Hands‑on, quality‑driven cognition
  - Deep dive: Craftsman Processing

14. Guardian
  - Dominant: Analytical
  - Secondary: Experiential
  - Stress Mode: Over‑caution
  - Rationale: Stability + rule‑based reasoning
  - Deep dive: Guardian Processing

15. Operator
  - Dominant: Experiential
  - Secondary: Analytical
  - Stress Mode: Rigid routine
  - Rationale: Process + execution cognition
  - Deep dive: Operator Processing

16. Individualist
  - Dominant: Conceptual
  - Secondary: Intuitive
  - Stress Mode: Detached ideation
  - Rationale: Creative + independent reasoning
  - Deep dive: Individualist Processing

17. Scholar
  - Dominant: Analytical
  - Secondary: Conceptual
  - Stress Mode: Over‑analysis
  - Rationale: Rigorous, structured cognition
  - Deep dive: Scholar Processing

 COGNITIVE PROCESSING STYLE — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "decision-making-style",
    lens: "Decision-Making Style",
    status: "Partially Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Decision-Making Style
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

DECISION‑MAKING STYLE
Status:  Partially Done → now completing fully
Output: For each PI profile →
  - Dominant decision style
  - Secondary style
  - Stress‑mode decision pattern
  - Speed vs. accuracy tendency
  - Risk posture
  - One‑line rationale
  - Guided Links for deeper dives
This lens describes how a person makes decisions, not how they think (that was the previous lens).

  THE 6 DECISION‑MAKING STYLES
(Used in behavioral economics, org psych, and cognitive ergonomics)
1. Analytical
Data‑driven, structured, slow‑deliberate.
2. Intuitive
Fast, pattern‑based, heuristic.
3. Conceptual
Big‑picture, integrative, scenario‑driven.
4. Directive
Decisive, action‑oriented, low tolerance for ambiguity.
5. Social / Relational
Consensus‑seeking, people‑impact‑aware.
6. Adaptive
Flexible, context‑dependent, situational switching.

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - Dominant: Analytical
  - Secondary: Directive (when confident in data)
  - Stress Mode: Analysis paralysis
  - Speed vs Accuracy: Slow, accuracy‑maximizing
  - Risk Posture: Low
  - Rationale: Precision + structure
  - Deep dive: Analyzer Decision Style

2. Controller
  - Dominant: Directive
  - Secondary: Analytical
  - Stress Mode: Rule‑rigid decisions
  - Speed vs Accuracy: Fast, rule‑based
  - Risk Posture: Low
  - Rationale: Authority + process
  - Deep dive: Controller Decision Style

3. Specialist
  - Dominant: Analytical
  - Secondary: Conceptual (within domain)
  - Stress Mode: Over‑checking details
  - Speed vs Accuracy: Slow, accuracy‑maximizing
  - Risk Posture: Low
  - Rationale: Deep technical reasoning
  - Deep dive: Specialist Decision Style

4. Strategist
  - Dominant: Conceptual
  - Secondary: Directive
  - Stress Mode: Over‑confidence in vision
  - Speed vs Accuracy: Fast‑moderate
  - Risk Posture: Moderate
  - Rationale: Systems thinking + drive
  - Deep dive: Strategist Decision Style

5. Venturer
  - Dominant: Intuitive
  - Secondary: Directive
  - Stress Mode: Impulsive risk
  - Speed vs Accuracy: Very fast
  - Risk Posture: High
  - Rationale: Bold, opportunistic
  - Deep dive: Venturer Decision Style

6. Altruist
  - Dominant: Social / Relational
  - Secondary: Adaptive
  - Stress Mode: Over‑accommodation
  - Speed vs Accuracy: Moderate
  - Risk Posture: Low
  - Rationale: People‑first reasoning
  - Deep dive: Altruist Decision Style

7. Captain
  - Dominant: Directive
  - Secondary: Intuitive
  - Stress Mode: Over‑assertive decisions
  - Speed vs Accuracy: Very fast
  - Risk Posture: High‑moderate
  - Rationale: Command + action
  - Deep dive: Captain Decision Style

8. Collaborator
  - Dominant: Social / Relational
  - Secondary: Adaptive
  - Stress Mode: Avoidance, deferring
  - Speed vs Accuracy: Slow‑moderate
  - Risk Posture: Low
  - Rationale: Consensus orientation
  - Deep dive: Collaborator Decision Style

9. Maverick
  - Dominant: Conceptual
  - Secondary: Intuitive
  - Stress Mode: Chaotic, disruptive decisions
  - Speed vs Accuracy: Fast
  - Risk Posture: High
  - Rationale: Creative, non‑linear
  - Deep dive: Maverick Decision Style

10. Persuader
  - Dominant: Social / Relational
  - Secondary: Intuitive
  - Stress Mode: Emotion‑driven decisions
  - Speed vs Accuracy: Fast
  - Risk Posture: Moderate
  - Rationale: Influence + audience reading
  - Deep dive: Persuader Decision Style

11. Promoter
  - Dominant: Intuitive
  - Secondary: Social / Relational
  - Stress Mode: Impulsive, reactive
  - Speed vs Accuracy: Very fast
  - Risk Posture: High
  - Rationale: Improvisational, energetic
  - Deep dive: Promoter Decision Style

12. Adapter
  - Dominant: Adaptive
  - Secondary: Social / Relational
  - Stress Mode: Quiet withdrawal
  - Speed vs Accuracy: Moderate
  - Risk Posture: Low‑moderate
  - Rationale: Flexible, situational
  - Deep dive: Adapter Decision Style

13. Craftsman
  - Dominant: Analytical
  - Secondary: Experiential
  - Stress Mode: Perfectionistic delay
  - Speed vs Accuracy: Slow
  - Risk Posture: Low
  - Rationale: Quality + precision
  - Deep dive: Craftsman Decision Style

14. Guardian
  - Dominant: Analytical
  - Secondary: Social / Relational
  - Stress Mode: Over‑caution
  - Speed vs Accuracy: Slow
  - Risk Posture: Very low
  - Rationale: Stability + stewardship
  - Deep dive: Guardian Decision Style

15. Operator
  - Dominant: Experiential
  - Secondary: Analytical
  - Stress Mode: Rigid routine
  - Speed vs Accuracy: Moderate
  - Risk Posture: Low
  - Rationale: Process + execution
  - Deep dive: Operator Decision Style

16. Individualist
  - Dominant: Conceptual
  - Secondary: Intuitive
  - Stress Mode: Detached, idiosyncratic decisions
  - Speed vs Accuracy: Moderate
  - Risk Posture: Moderate
  - Rationale: Creative + independent
  - Deep dive: Individualist Decision Style

17. Scholar
  - Dominant: Analytical
  - Secondary: Conceptual
  - Stress Mode: Over‑analysis
  - Speed vs Accuracy: Slow
  - Risk Posture: Low
  - Rationale: Rigorous, structured
  - Deep dive: Scholar Decision Style

 DECISION‑MAKING STYLE — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "hogan-hpi",
    lens: "Hogan HPI",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 04 — Hogan HPI
===============================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


SOURCE-DERIVED LENS CONTENT
---------------------------
### LENS 4: Hogan HPI — All 17 Profiles

*(Scales: Adjustment, Ambition, Sociability, Interpersonal Sensitivity, Prudence, Inquisitive, Learning Approach)*

| Profile | Adjustment | Ambition | Sociability | Interp. Sensitivity | Prudence | Inquisitive | Learning Approach |
|---|---|---|---|---|---|---|---|
| Analyzer | Moderate-Low | Moderate | Unlikely | Moderate-Low | Very Likely | Likely | Likely |
| Controller | Moderate | Moderate-Low | Unlikely | Low | Very Likely | Moderate | Very Likely |
| Specialist | Moderate | Moderate | Unlikely | Moderate-Low | Very Likely | Very Likely | Very Likely |
| Strategist | Moderate-High | High | Moderate | Moderate-Low | High | Very Likely | Likely |
| Venturer | High | Very Likely | Moderate | Low | Unlikely | High | Moderate |
| Altruist | Moderate | Moderate-Low | Very Likely | Very Likely | High | Moderate | Likely |
| Captain | High | Very Likely | Very Likely | Moderate-Low | Moderate | High | Moderate |
| Collaborator | Moderate | Low-Moderate | Very Likely | Very Likely | High | Moderate | Very Likely |
| Maverick | High | High | Very Likely | Low | Unlikely | Very Likely | Very Likely |
| Persuader | High | High | Very Likely | Moderate | Moderate | Moderate | Moderate |
| Promoter | Moderate-High | High | Very Likely | Moderate | Low | Moderate | Moderate |
| Adapter | Moderate | Moderate | Very Likely | Very Likely | Moderate | Moderate | Likely |
| Craftsman | Moderate-High | Moderate | Unlikely | Moderate | Very Likely | Moderate | Likely |
| Guardian | Moderate | Low | Low | Moderate | Very Likely | Low | Moderate |
| Operator | Moderate | Moderate | Low | Moderate | Very Likely | Low | Moderate |
| Individualist | Moderate | Moderate | Low-Moderate | Moderate-High | Low | Very Likely | Very Likely |
| Scholar | Moderate-High | Moderate | Unlikely | Low | High | Very Likely | Very Likely |

---

IMPLEMENTATION NOTES
--------------------
The source uses likelihood-style estimates for Hogan HPI scale alignment. This should be shown as interpretive alignment, not as Hogan score conversion.

Recommended SignalGlass UI fields:
- adjustment_signal
- ambition_signal
- sociability_signal
- interpersonal_sensitivity_signal
- prudence_signal
- inquisitive_signal
- learning_approach_signal
- strongest_hpi_alignment
- lowest_hpi_alignment
`,
  },
  {
    id: "hogan-hds-derailers",
    lens: "Hogan HDS Derailers",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 05 — Hogan HDS Derailers
=========================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


SOURCE-DERIVED LENS CONTENT
---------------------------
### LENS 5: Hogan HDS (Derailers) — Summary per Profile

| Profile | Primary Derailers | Key Risk |
|---|---|---|
| Analyzer | Diligent, Skeptical, Cautious | Over-perfection, mistrust, slow decisions under pressure |
| Controller | Diligent, Dutiful, Skeptical | Rigidity, excessive rule-enforcement, blame when things go wrong |
| Specialist | Diligent, Reserved, Imaginative | Over-specialization, withdrawal, dismissing non-expert views |
| Strategist | Bold, Skeptical, Imaginative | Overconfidence in vision, dismissing dissent, losing operational detail |
| Venturer | Bold, Mischievous, Colorful | Risk overreach, testing limits, burning relationships for results |
| Altruist | Leisurely, Dutiful | Resentment from overgiving, passive compliance under pressure |
| Captain | Bold, Colorful, Mischievous | Domineering, charm-based manipulation, underestimating risk |
| Collaborator | Leisurely, Dutiful | Conflict avoidance masking disagreement, dependency on group consensus |
| Maverick | Colorful, Mischievous, Imaginative | Chaos creation, ignoring process, burning goodwill on disruption |
| Persuader | Colorful, Mischievous, Bold | Overselling, avoiding hard truths, charm as deflection |
| Promoter | Colorful, Mischievous | Impulsive visibility, overpromising, underdelivering |
| Adapter | Leisurely, Dutiful | Chronic accommodation, loss of self-direction, invisible resentment |
| Craftsman | Diligent, Reserved | Perfectionism paralysis, withdrawing from collaboration |
| Guardian | Dutiful, Cautious, Diligent | Over-caution, resisting necessary change, waiting for permission |
| Operator | Diligent, Dutiful | Inflexibility under ambiguity, over-controlling process |
| Individualist | Reserved, Imaginative | Isolation, unconventional communication alienating others |
| Scholar | Diligent, Skeptical, Reserved, Cautious | Intellectual perfectionism, scepticism blocking action, analysis paralysis |

---

MERGE NOTE
----------
This is the merged Hogan HDS file. The source explicitly says Hogan HDS appeared in both the Personality section and the Leadership section. The duplicate was removed and this single finalized file should be used.

IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- primary_derailers
- key_derailer_risk
- pressure_trigger
- leadership_watchout
- coaching_focus

Use this lens for stress behavior, leadership risk, derailment prevention, and role-support planning.
`,
  },
  {
    id: "self-determination-theory-sdt",
    lens: "Self-Determination Theory (SDT)",
    status: "Partially Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Self-Determination Theory (SDT)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

SELF‑DETERMINATION THEORY (SDT)
Status:  Partially Done → now completing fully
Output: For each PI profile →
  - Autonomy Need (Low / Moderate / High)
  - Competence Need (Low / Moderate / High)
  - Relatedness Need (Low / Moderate / High)
  - Primary SDT Driver
  - Stress Expression
  - One‑line rationale
  - Guided Links for deeper dives
SDT is foundational because it predicts motivation quality, not just quantity.

 THE 3 SDT NEEDS
Autonomy
Freedom, choice, self‑direction.
Competence
Mastery, capability, effectiveness.
Relatedness
Connection, belonging, interpersonal warmth.
Every profile has a unique SDT signature.

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - Autonomy: Low‑Moderate
  - Competence: Very High
  - Relatedness: Low
  - Primary Driver: Competence
  - Stress: Feeling unprepared or rushed
  - Rationale: Mastery + precision
  - Deep dive: Analyzer SDT

2. Controller
  - Autonomy: Low
  - Competence: High
  - Relatedness: Low
  - Primary Driver: Competence (rule‑based)
  - Stress: Loss of control or unclear rules
  - Rationale: Order + authority
  - Deep dive: Controller SDT

3. Specialist
  - Autonomy: Moderate
  - Competence: Very High
  - Relatedness: Low‑Moderate
  - Primary Driver: Competence
  - Stress: Being forced outside expertise
  - Rationale: Deep mastery orientation
  - Deep dive: Specialist SDT

4. Strategist
  - Autonomy: High
  - Competence: High
  - Relatedness: Low
  - Primary Driver: Autonomy + Competence
  - Stress: Constraints, bureaucracy
  - Rationale: Vision + ownership
  - Deep dive: Strategist SDT

5. Venturer
  - Autonomy: Very High
  - Competence: High
  - Relatedness: Low
  - Primary Driver: Autonomy
  - Stress: Micromanagement
  - Rationale: Bold, self‑directed
  - Deep dive: Venturer SDT

6. Altruist
  - Autonomy: Low‑Moderate
  - Competence: Moderate
  - Relatedness: Very High
  - Primary Driver: Relatedness
  - Stress: Interpersonal tension
  - Rationale: People‑first orientation
  - Deep dive: Altruist SDT

7. Captain
  - Autonomy: Very High
  - Competence: High
  - Relatedness: Low‑Moderate
  - Primary Driver: Autonomy
  - Stress: Loss of authority
  - Rationale: Command + ownership
  - Deep dive: Captain SDT

8. Collaborator
  - Autonomy: Low
  - Competence: Moderate
  - Relatedness: Very High
  - Primary Driver: Relatedness
  - Stress: Conflict or exclusion
  - Rationale: Harmony + inclusion
  - Deep dive: Collaborator SDT

9. Maverick
  - Autonomy: Very High
  - Competence: High
  - Relatedness: Low
  - Primary Driver: Autonomy
  - Stress: Constraints, rules
  - Rationale: Creative independence
  - Deep dive: Maverick SDT

10. Persuader
  - Autonomy: Moderate
  - Competence: Moderate
  - Relatedness: High
  - Primary Driver: Relatedness
  - Stress: Social rejection
  - Rationale: Influence + connection
  - Deep dive: Persuader SDT

11. Promoter
  - Autonomy: High
  - Competence: Moderate
  - Relatedness: High
  - Primary Driver: Relatedness + Autonomy
  - Stress: Feeling ignored or constrained
  - Rationale: Expressive + energetic
  - Deep dive: Promoter SDT

12. Adapter
  - Autonomy: Low‑Moderate
  - Competence: Moderate
  - Relatedness: High
  - Primary Driver: Relatedness
  - Stress: Over‑commitment
  - Rationale: Flexible + relational
  - Deep dive: Adapter SDT

13. Craftsman
  - Autonomy: Low‑Moderate
  - Competence: Very High
  - Relatedness: Low
  - Primary Driver: Competence
  - Stress: Quality compromise
  - Rationale: Precision + standards
  - Deep dive: Craftsman SDT

14. Guardian
  - Autonomy: Low
  - Competence: High
  - Relatedness: Moderate
  - Primary Driver: Competence (stability‑based)
  - Stress: Change without safeguards
  - Rationale: Stewardship + continuity
  - Deep dive: Guardian SDT

15. Operator
  - Autonomy: Low‑Moderate
  - Competence: High
  - Relatedness: Moderate
  - Primary Driver: Competence
  - Stress: Process breakdown
  - Rationale: Execution + reliability
  - Deep dive: Operator SDT

16. Individualist
  - Autonomy: Very High
  - Competence: High
  - Relatedness: Low
  - Primary Driver: Autonomy
  - Stress: Loss of creative freedom
  - Rationale: Independent + expressive
  - Deep dive: Individualist SDT

17. Scholar
  - Autonomy: Moderate
  - Competence: Very High
  - Relatedness: Low
  - Primary Driver: Competence
  - Stress: Unclear expectations
  - Rationale: Rigorous, methodical mastery
  - Deep dive: Scholar SDT

 SELF‑DETERMINATION THEORY — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "16pf",
    lens: "16PF",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 06 — 16PF
==========================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


SOURCE-DERIVED LENS CONTENT
---------------------------
### LENS 6: 16PF — Selected Key Factors per Profile
*(Likely / Moderate / Unlikely — summarised from full micro-level mapping)*

| Profile | Warmth (A) | Reasoning (B) | Rule-Consc. (G) | Social Boldness (H) | Perfectionism (Q3) | Tension (Q4) |
|---|---|---|---|---|---|---|
| Analyzer | Low | Very Likely | High | Unlikely | Very Likely | Moderate |
| Controller | Low | Moderate | Very Likely | Low | Very Likely | Moderate |
| Specialist | Low | Very Likely | High | Low | Very Likely | Moderate |
| Strategist | Moderate | Very Likely | Moderate | Moderate | High | Moderate |
| Venturer | Moderate | Likely | Low | High | Low | Moderate |
| Altruist | High | Moderate | High | Moderate | Moderate | Low |
| Captain | Moderate | Likely | Moderate | Very Likely | Moderate | Low |
| Collaborator | High | Moderate | Moderate | Moderate | Low | Low |
| Maverick | Moderate | High | Low | Very Likely | Low | Low |
| Persuader | High | Moderate | Low | High | Low | Low |
| Promoter | High | Moderate | Low | Very Likely | Low | Moderate-High |
| Adapter | High | Moderate | Moderate | Moderate | Low | Low |
| Craftsman | Low | Likely | High | Low | Very Likely | Low |
| Guardian | Moderate | Moderate | Very Likely | Low | High | Low |
| Operator | Moderate | Moderate | Very Likely | Low | High | Low |
| Individualist | Low | Very Likely | Low | Low | Moderate | Moderate |
| Scholar | Low | Very Likely | High | Low | Very Likely | Moderate |

---

IMPLEMENTATION NOTES
--------------------
The source provides selected 16PF factors, not the full 16-factor matrix. The finished file should therefore be treated as a selected-factor crosswalk.

Recommended SignalGlass UI fields:
- warmth_A
- reasoning_B
- rule_consciousness_G
- social_boldness_H
- perfectionism_Q3
- tension_Q4
- dominant_16pf_pattern
- interpretation_note
`,
  },
  {
    id: "learning-design-style-non-vark",
    lens: "Learning Design Style (non-VARK)",
    status: "Partially Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Learning Design Style (non-VARK)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

LEARNING DESIGN STYLE (NON‑VARK)
Status:  Partially Done → now completing fully
Output: For each PI profile →
  - Dominant Kolb learning style
  - Secondary learning mode
  - Workplace learning preference
  - Stress‑mode learning behavior
  - One‑line rationale
  - Guided Links for deeper dives
This lens uses Kolb’s Experiential Learning Cycle, which is the gold standard for workplace learning design.

🎡 THE 4 KOLB LEARNING STYLES
1. Converger (AC + AE)
Analytical → practical application
“Tell me the model, then let me test it.”
2. Diverger (CE + RO)
People‑focused → imaginative → reflective
“Show me the human angle and possibilities.”
3. Assimilator (AC + RO)
Abstract → conceptual → structured
“Give me the theory and framework.”
4. Accommodator (CE + AE)
Hands‑on → trial‑and‑error → action
“Let me try it and learn by doing.”

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - Dominant: Assimilator
  - Secondary: Converger
  - Workplace Preference: Models → frameworks → structured practice
  - Stress Mode: Over‑analysis, slow iteration
  - Rationale: Precision + structure
  - Deep dive: Analyzer Learning Style

2. Controller
  - Dominant: Converger
  - Secondary: Assimilator
  - Workplace Preference: Clear rules → controlled practice
  - Stress Mode: Rigid adherence to procedure
  - Rationale: Rule‑based mastery
  - Deep dive: Controller Learning Style

3. Specialist
  - Dominant: Assimilator
  - Secondary: Converger
  - Workplace Preference: Deep technical frameworks → applied mastery
  - Stress Mode: Narrow focus
  - Rationale: Domain depth
  - Deep dive: Specialist Learning Style

4. Strategist
  - Dominant: Assimilator
  - Secondary: Diverger
  - Workplace Preference: Conceptual models → scenario planning
  - Stress Mode: Over‑theorizing
  - Rationale: Systems thinking
  - Deep dive: Strategist Learning Style

5. Venturer
  - Dominant: Accommodator
  - Secondary: Diverger
  - Workplace Preference: Rapid experiments → real‑world tests
  - Stress Mode: Impulsive action
  - Rationale: Fast, experiential learning
  - Deep dive: Venturer Learning Style

6. Altruist
  - Dominant: Diverger
  - Secondary: Assimilator
  - Workplace Preference: Stories → reflection → group learning
  - Stress Mode: Over‑accommodation
  - Rationale: People‑first reflection
  - Deep dive: Altruist Learning Style

7. Captain
  - Dominant: Converger
  - Secondary: Accommodator
  - Workplace Preference: Action → results → iteration
  - Stress Mode: Over‑decisiveness
  - Rationale: Outcome‑driven learning
  - Deep dive: Captain Learning Style

8. Collaborator
  - Dominant: Diverger
  - Secondary: Accommodator
  - Workplace Preference: Group reflection → shared meaning
  - Stress Mode: Avoidance
  - Rationale: Relational learning
  - Deep dive: Collaborator Learning Style

9. Maverick
  - Dominant: Diverger
  - Secondary: Accommodator
  - Workplace Preference: Creative exploration → hands‑on ideation
  - Stress Mode: Chaotic experimentation
  - Rationale: Creative, non‑linear learning
  - Deep dive: Maverick Learning Style

10. Persuader
  - Dominant: Diverger
  - Secondary: Accommodator
  - Workplace Preference: Social learning → role‑play → live practice
  - Stress Mode: Emotional reasoning
  - Rationale: Influence + people orientation
  - Deep dive: Persuader Learning Style

11. Promoter
  - Dominant: Accommodator
  - Secondary: Diverger
  - Workplace Preference: Hands‑on → energetic → social learning
  - Stress Mode: Impulsive action
  - Rationale: Improvisational learning
  - Deep dive: Promoter Learning Style

12. Adapter
  - Dominant: Diverger
  - Secondary: Assimilator
  - Workplace Preference: Group reflection → flexible application
  - Stress Mode: Withdrawal
  - Rationale: Flexible, relational learning
  - Deep dive: Adapter Learning Style

13. Craftsman
  - Dominant: Converger
  - Secondary: Assimilator
  - Workplace Preference: Step‑by‑step → standards → practice
  - Stress Mode: Perfectionistic delay
  - Rationale: Quality + precision
  - Deep dive: Craftsman Learning Style

14. Guardian
  - Dominant: Assimilator
  - Secondary: Converger
  - Workplace Preference: Clear frameworks → predictable practice
  - Stress Mode: Over‑caution
  - Rationale: Stability + structure
  - Deep dive: Guardian Learning Style

15. Operator
  - Dominant: Converger
  - Secondary: Accommodator
  - Workplace Preference: Hands‑on → process → repetition
  - Stress Mode: Rigid routine
  - Rationale: Execution learning
  - Deep dive: Operator Learning Style

16. Individualist
  - Dominant: Diverger
  - Secondary: Assimilator
  - Workplace Preference: Creative reflection → conceptual synthesis
  - Stress Mode: Detached ideation
  - Rationale: Independent, creative learning
  - Deep dive: Individualist Learning Style

17. Scholar
  - Dominant: Assimilator
  - Secondary: Converger
  - Workplace Preference: Theory → structure → rigorous practice
  - Stress Mode: Over‑analysis
  - Rationale: Academic, methodical learning
  - Deep dive: Scholar Learning Style

 LEARNING DESIGN STYLE — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "learning-agility--growth-mindset",
    lens: "Learning Agility & Growth Mindset",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 07 — Learning Agility & Growth Mindset
=======================================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


SOURCE-DERIVED LENS CONTENT
---------------------------
### LENS 7: Learning Agility & Growth Mindset

| Profile | Learning Agility | Growth Mindset | Rationale | Development Lever |
|---|---|---|---|---|
| Analyzer | Moderate | Possible | Learns deeply from data and retrospectives but slower to try unproven approaches. | Pair with short, structured experiments that require data capture and reflection. |
| Controller | Low-Moderate | Possible | Prefers mastery within defined systems; resists disrupting established methods. | Use structured pilots within current workflow before asking for broader change. |
| Specialist | Moderate | Possible | Deep domain agility; slower to adapt to new domains. | Offer stretch assignments within adjacent technical areas to expand range. |
| Strategist | High | Likely | Comfortable with ambiguity; adjusts frameworks rapidly when evidence shifts. | Give cross-functional leadership challenges with real complexity and outcome ownership. |
| Venturer | High | Likely | Thrives on new problems and rapid iteration; growth mindset natural disposition. | Channel through challenge-based learning with fast feedback loops. |
| Altruist | Moderate | Likely | Open to feedback, especially when framed around helping others. | Tie development to team impact and visible support of others. |
| Captain | High | Likely | Adapts quickly in fast-moving environments; growth mindset in action contexts. | Use executive coaching with real-stakes projects to deepen reflective practice. |
| Collaborator | Moderate | Likely | Open and receptive; may plateau without challenge to move beyond comfort zone. | Use rotational team roles or cross-functional projects to stretch range. |
| Maverick | Very High | Very Likely | Rapid learner and experimenter; treats failure as data. | Remove structural barriers to experimentation; require structured debrief post-failure. |
| Persuader | High | Likely | Fast social learner; adapts framing and approach rapidly to audiences. | Add structured feedback cycles to distinguish genuine learning from performance adaptation. |
| Promoter | High | Likely | High enthusiasm for novelty; learns fast through action and social mirroring. | Require structured reflection after campaigns or events to convert experience into insight. |
| Adapter | High | Likely | Reads context and adjusts with ease; natural situational learner. | Assign stretch facilitation roles and debrief for pattern recognition. |
| Craftsman | Low-Moderate | Possible | Deep learning within domain; resistant to abandoning proven methods. | Frame new learning as quality improvement rather than disruption. |
| Guardian | Low | Unlikely | Prefers stable knowledge; change learning requires strong safety framing. | Build learning into role continuity and risk-reduction narrative. |
| Operator | Moderate | Possible | Learns through routinization and practice; open to process improvement. | Use incremental capability expansion tied to performance metrics. |
| Individualist | Moderate | Likely | Self-directed, intrinsically motivated learner with idiosyncratic pathways. | Respect autonomous learning style; provide access and remove friction. |
| Scholar | High | Very Likely | Deep, rigorous, self-directed learner; high academic growth mindset. | Assign complex research challenges with real application deadlines. |

---

IMPLEMENTATION NOTES
--------------------
This is a finished result section in the source even though it is not separately listed in the 63-item master list under this exact title. It appears to operationalize parts of learning style, growth/development, and adaptability.

Recommended SignalGlass UI fields:
- learning_agility
- growth_mindset_signal
- evidence_rationale
- development_lever
- stretch_assignment_type
- coaching_note
`,
  },
  {
    id: "social-cognition",
    lens: "Social Cognition",
    status: "Partially Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Social Cognition
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

SOCIAL COGNITION
Status:  Partially Done → now completing fully
Output: For each PI profile →
  - Theory of Mind (reading others’ mental states)
  - Attribution Style (how they explain behavior)
  - Perspective‑Taking (cognitive empathy)
  - Social Prediction (anticipating reactions)
  - Emotional Inference (reading emotional cues)
  - Primary Social‑Cognitive Mode
  - Stress Distortion Pattern
  - One‑line rationale
  - Guided Links for deeper dives
This lens is extremely powerful for team dynamics, conflict prediction, leadership, and interpersonal fit.

  THE 5 SOCIAL‑COGNITIVE DIMENSIONS
1. Theory of Mind
Ability to infer intentions, beliefs, motives.
2. Attribution Style
Internal (“they meant it”) vs. external (“context caused it”).
3. Perspective‑Taking
Ability to adopt another person’s viewpoint.
4. Social Prediction
Accuracy in anticipating reactions, needs, and responses.
5. Emotional Inference
Reading emotional cues (tone, body language, micro‑signals).

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - Theory of Mind: Moderate
  - Attribution Style: External, logic‑based
  - Perspective‑Taking: Low‑Moderate
  - Social Prediction: Low
  - Emotional Inference: Low
  - Primary Mode: Cognitive → not emotional
  - Stress Distortion: Assumes incompetence, not intent
  - Rationale: Logic > emotion
  - Deep dive: Analyzer Social Cognition

2. Controller
  - Theory of Mind: Low
  - Attribution Style: Internal (“they should know better”)
  - Perspective‑Taking: Low
  - Social Prediction: Moderate
  - Emotional Inference: Low
  - Primary Mode: Rule‑based interpretation
  - Stress Distortion: Assumes noncompliance
  - Rationale: Order + authority
  - Deep dive: Controller Social Cognition

3. Specialist
  - Theory of Mind: Moderate
  - Attribution Style: External (context, process)
  - Perspective‑Taking: Low‑Moderate
  - Social Prediction: Low
  - Emotional Inference: Low
  - Primary Mode: Technical → not interpersonal
  - Stress Distortion: Withdraws
  - Rationale: Depth > social nuance
  - Deep dive: Specialist Social Cognition

4. Strategist
  - Theory of Mind: High
  - Attribution Style: Mixed (strategic)
  - Perspective‑Taking: Moderate
  - Social Prediction: High
  - Emotional Inference: Moderate
  - Primary Mode: Strategic mental modeling
  - Stress Distortion: Over‑interprets motives
  - Rationale: Systems thinking applied to people
  - Deep dive: Strategist Social Cognition

5. Venturer
  - Theory of Mind: Moderate
  - Attribution Style: Internal (“they’re slowing us down”)
  - Perspective‑Taking: Low
  - Social Prediction: Moderate
  - Emotional Inference: Low
  - Primary Mode: Action‑oriented heuristics
  - Stress Distortion: Misreads caution as resistance
  - Rationale: Fast, low‑empathy cognition
  - Deep dive: Venturer Social Cognition

6. Altruist
  - Theory of Mind: High
  - Attribution Style: External (“they’re stressed”)
  - Perspective‑Taking: Very High
  - Social Prediction: High
  - Emotional Inference: Very High
  - Primary Mode: Empathic modeling
  - Stress Distortion: Over‑accommodation
  - Rationale: People‑first cognition
  - Deep dive: Altruist Social Cognition

7. Captain
  - Theory of Mind: Moderate
  - Attribution Style: Internal (“own your part”)
  - Perspective‑Taking: Low
  - Social Prediction: High
  - Emotional Inference: Moderate
  - Primary Mode: Power‑dynamics reading
  - Stress Distortion: Assumes incompetence or lack of drive
  - Rationale: Command cognition
  - Deep dive: Captain Social Cognition

8. Collaborator
  - Theory of Mind: High
  - Attribution Style: External
  - Perspective‑Taking: Very High
  - Social Prediction: High
  - Emotional Inference: High
  - Primary Mode: Harmony‑seeking
  - Stress Distortion: Avoids conflict → misreads silence
  - Rationale: Relational integration
  - Deep dive: Collaborator Social Cognition

9. Maverick
  - Theory of Mind: Moderate
  - Attribution Style: Internal (“they don’t get it”)
  - Perspective‑Taking: Low
  - Social Prediction: Moderate
  - Emotional Inference: Low
  - Primary Mode: Idea‑centric
  - Stress Distortion: Dismisses others’ constraints
  - Rationale: Creative, not relational
  - Deep dive: Maverick Social Cognition

10. Persuader
  - Theory of Mind: High
  - Attribution Style: Mixed
  - Perspective‑Taking: High
  - Social Prediction: Very High
  - Emotional Inference: High
  - Primary Mode: Audience‑reading
  - Stress Distortion: Over‑personalizes reactions
  - Rationale: Influence cognition
  - Deep dive: Persuader Social Cognition

11. Promoter
  - Theory of Mind: High
  - Attribution Style: External
  - Perspective‑Taking: Moderate
  - Social Prediction: High
  - Emotional Inference: High
  - Primary Mode: Social‑energetic
  - Stress Distortion: Misreads neutrality as rejection
  - Rationale: Expressive, reactive
  - Deep dive: Promoter Social Cognition

12. Adapter
  - Theory of Mind: High
  - Attribution Style: External
  - Perspective‑Taking: Very High
  - Social Prediction: High
  - Emotional Inference: High
  - Primary Mode: Situational empathy
  - Stress Distortion: Over‑adjusts
  - Rationale: Flexible, relational
  - Deep dive: Adapter Social Cognition

13. Craftsman
  - Theory of Mind: Low‑Moderate
  - Attribution Style: External
  - Perspective‑Taking: Low
  - Social Prediction: Low
  - Emotional Inference: Low
  - Primary Mode: Task‑centric
  - Stress Distortion: Withdraws into work
  - Rationale: Quality > social nuance
  - Deep dive: Craftsman Social Cognition

14. Guardian
  - Theory of Mind: Moderate
  - Attribution Style: External
  - Perspective‑Taking: Moderate
  - Social Prediction: Moderate
  - Emotional Inference: Low‑Moderate
  - Primary Mode: Stability‑oriented
  - Stress Distortion: Assumes threat or risk
  - Rationale: Stewardship cognition
  - Deep dive: Guardian Social Cognition

15. Operator
  - Theory of Mind: Low‑Moderate
  - Attribution Style: External
  - Perspective‑Taking: Low
  - Social Prediction: Low
  - Emotional Inference: Low
  - Primary Mode: Practical, not interpersonal
  - Stress Distortion: Misreads urgency
  - Rationale: Execution > nuance
  - Deep dive: Operator Social Cognition

16. Individualist
  - Theory of Mind: Moderate
  - Attribution Style: Internal
  - Perspective‑Taking: Moderate
  - Social Prediction: Moderate
  - Emotional Inference: Low‑Moderate
  - Primary Mode: Identity‑centric
  - Stress Distortion: Withdraws into autonomy
  - Rationale: Independent cognition
  - Deep dive: Individualist Social Cognition

17. Scholar
  - Theory of Mind: Moderate
  - Attribution Style: External
  - Perspective‑Taking: Low‑Moderate
  - Social Prediction: Low
  - Emotional Inference: Low
  - Primary Mode: Analytical → not interpersonal
  - Stress Distortion: Over‑analysis of motives
  - Rationale: Intellectual, not social
  - Deep dive: Scholar Social Cognition

 SOCIAL COGNITION — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "executive-function-model",
    lens: "Executive Function Model",
    status: "Not Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Executive Function Model
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

EXECUTIVE FUNCTION MODEL
Status:  Not Done → now completing fully
Output: For each PI profile →
  - Working Memory
  - Inhibitory Control
  - Cognitive Flexibility
  - Planning & Prioritization
  - Task Initiation
  - Sustained Attention
  - Primary EF Strength
  - Primary EF Vulnerability
  - One‑line rationale
  - Guided Links for deeper dives
This lens is critical because EF predicts:
  - reliability
  - adaptability
  - error rates
  - leadership readiness
  - burnout risk
  - role fit

  THE 6 EXECUTIVE FUNCTIONS
1. Working Memory
Holding and manipulating information.
2. Inhibitory Control
Resisting impulses, distractions, emotional reactions.
3. Cognitive Flexibility
Switching tasks, adapting to change, perspective shifting.
4. Planning & Prioritization
Sequencing, structuring, organizing.
5. Task Initiation
Starting tasks without procrastination.
6. Sustained Attention
Staying focused over time.

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - Working Memory: High
  - Inhibitory Control: High
  - Cognitive Flexibility: Low‑Moderate
  - Planning & Prioritization: Very High
  - Task Initiation: Moderate
  - Sustained Attention: Very High
  - Strength: Precision + sustained focus
  - Vulnerability: Over‑analysis
  - Rationale: Methodical, detail‑driven
  - Deep dive: Analyzer EF

2. Controller
  - Working Memory: High
  - Inhibitory Control: Very High
  - Cognitive Flexibility: Low
  - Planning & Prioritization: Very High
  - Task Initiation: High
  - Sustained Attention: High
  - Strength: Rule‑based consistency
  - Vulnerability: Rigidity
  - Rationale: Order + control
  - Deep dive: Controller EF

3. Specialist
  - Working Memory: High
  - Inhibitory Control: High
  - Cognitive Flexibility: Low
  - Planning & Prioritization: High
  - Task Initiation: Moderate
  - Sustained Attention: Very High
  - Strength: Deep technical focus
  - Vulnerability: Narrow bandwidth
  - Rationale: Domain mastery
  - Deep dive: Specialist EF

4. Strategist
  - Working Memory: High
  - Inhibitory Control: Moderate
  - Cognitive Flexibility: High
  - Planning & Prioritization: High
  - Task Initiation: High
  - Sustained Attention: Moderate
  - Strength: Systems‑level planning
  - Vulnerability: Over‑complexity
  - Rationale: Vision + structure
  - Deep dive: Strategist EF

5. Venturer
  - Working Memory: Moderate
  - Inhibitory Control: Low
  - Cognitive Flexibility: High
  - Planning & Prioritization: Low
  - Task Initiation: Very High
  - Sustained Attention: Low
  - Strength: Rapid action
  - Vulnerability: Impulsivity
  - Rationale: Fast, opportunistic
  - Deep dive: Venturer EF

6. Altruist
  - Working Memory: Moderate
  - Inhibitory Control: Moderate
  - Cognitive Flexibility: High
  - Planning & Prioritization: Moderate
  - Task Initiation: Moderate
  - Sustained Attention: Moderate
  - Strength: Social flexibility
  - Vulnerability: Over‑accommodation
  - Rationale: People‑first EF
  - Deep dive: Altruist EF

7. Captain
  - Working Memory: High
  - Inhibitory Control: Moderate
  - Cognitive Flexibility: Moderate
  - Planning & Prioritization: High
  - Task Initiation: Very High
  - Sustained Attention: Moderate
  - Strength: Decisive execution
  - Vulnerability: Over‑assertive shortcuts
  - Rationale: Command EF
  - Deep dive: Captain EF

8. Collaborator
  - Working Memory: Moderate
  - Inhibitory Control: High
  - Cognitive Flexibility: High
  - Planning & Prioritization: Moderate
  - Task Initiation: Moderate
  - Sustained Attention: Moderate
  - Strength: Social‑cognitive flexibility
  - Vulnerability: Avoidance
  - Rationale: Harmony‑oriented EF
  - Deep dive: Collaborator EF

9. Maverick
  - Working Memory: Moderate
  - Inhibitory Control: Low
  - Cognitive Flexibility: Very High
  - Planning & Prioritization: Low
  - Task Initiation: High
  - Sustained Attention: Low
  - Strength: Creative flexibility
  - Vulnerability: Chaos
  - Rationale: Disruptive EF
  - Deep dive: Maverick EF

10. Persuader
  - Working Memory: Moderate
  - Inhibitory Control: Low‑Moderate
  - Cognitive Flexibility: High
  - Planning & Prioritization: Low
  - Task Initiation: High
  - Sustained Attention: Low‑Moderate
  - Strength: Social adaptability
  - Vulnerability: Over‑promising
  - Rationale: Influence EF
  - Deep dive: Persuader EF

11. Promoter
  - Working Memory: Moderate
  - Inhibitory Control: Low
  - Cognitive Flexibility: High
  - Planning & Prioritization: Low
  - Task Initiation: Very High
  - Sustained Attention: Low
  - Strength: Energetic activation
  - Vulnerability: Impulsive shifts
  - Rationale: Improvisational EF
  - Deep dive: Promoter EF

12. Adapter
  - Working Memory: Moderate
  - Inhibitory Control: High
  - Cognitive Flexibility: Very High
  - Planning & Prioritization: Moderate
  - Task Initiation: Moderate
  - Sustained Attention: Moderate
  - Strength: Situational flexibility
  - Vulnerability: Over‑adjustment
  - Rationale: Flexible EF
  - Deep dive: Adapter EF

13. Craftsman
  - Working Memory: High
  - Inhibitory Control: High
  - Cognitive Flexibility: Low
  - Planning & Prioritization: Very High
  - Task Initiation: Moderate
  - Sustained Attention: Very High
  - Strength: Quality + precision
  - Vulnerability: Perfectionistic delay
  - Rationale: Methodical EF
  - Deep dive: Craftsman EF

14. Guardian
  - Working Memory: High
  - Inhibitory Control: High
  - Cognitive Flexibility: Low
  - Planning & Prioritization: Very High
  - Task Initiation: Moderate
  - Sustained Attention: High
  - Strength: Stability + consistency
  - Vulnerability: Over‑caution
  - Rationale: Stewardship EF
  - Deep dive: Guardian EF

15. Operator
  - Working Memory: Moderate
  - Inhibitory Control: High
  - Cognitive Flexibility: Low
  - Planning & Prioritization: High
  - Task Initiation: High
  - Sustained Attention: High
  - Strength: Process execution
  - Vulnerability: Rigidity
  - Rationale: Operational EF
  - Deep dive: Operator EF

16. Individualist
  - Working Memory: High
  - Inhibitory Control: Low‑Moderate
  - Cognitive Flexibility: High
  - Planning & Prioritization: Moderate
  - Task Initiation: High
  - Sustained Attention: Moderate
  - Strength: Creative flexibility
  - Vulnerability: Inconsistent follow‑through
  - Rationale: Independent EF
  - Deep dive: Individualist EF

17. Scholar
  - Working Memory: Very High
  - Inhibitory Control: High
  - Cognitive Flexibility: Moderate
  - Planning & Prioritization: Very High
  - Task Initiation: Moderate
  - Sustained Attention: Very High
  - Strength: Deep, rigorous focus
  - Vulnerability: Over‑analysis
  - Rationale: Academic EF
  - Deep dive: Scholar EF

 EXECUTIVE FUNCTION MODEL — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "team-synthesis-matrix",
    lens: "Team Synthesis Matrix",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 08 — Team Synthesis Matrix
===========================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


SOURCE-DERIVED LENS CONTENT
---------------------------
### LENS 8: Team Synthesis Matrix (Role Fit, Conflict Hotspots, Complementary Pairings)

| Profile | Best Role Fit | Conflict Hotspots | Complementary Pairings | Quick Management Tip |
|---|---|---|---|---|
| Analyzer | QA, Compliance, Process Design | Clashes with Promoter/Maverick over speed vs. correctness | Pair with Venturer or Operator for execution balance | Give time for review; set clear acceptance criteria |
| Controller | Governance, Risk, Ops Manager | Friction with Captain/Venturer who push change | Pair with Collaborator or Strategist to translate rules into outcomes | Use pilot tests and explicit risk thresholds |
| Specialist | SME, R&D, Technical Lead | Tension with Persuader/Promoter over communication style | Pair with Persuader or Collaborator to surface impact | Protect deep work time; require knowledge-share checkpoints |
| Strategist | Product Strategy, Program Lead | May steamroll Collaborator/Altruist on people issues | Pair with Collaborator or Altruist for buy-in; Specialist for depth | Create structured dissent channels and metric milestones |
| Venturer | BD, Growth, Startup PM | Conflicts with Controller/Craftsman over process | Pair with Craftsman or Operator to secure delivery | Use short experiments with clear success metrics |
| Altruist | HR, Client Success, Coaching | Overload risk with Persuader/Captain who demand results | Pair with Strategist or Operator to balance care and outcomes | Teach boundary setting; track time on others vs. priorities |
| Captain | Executive, Crisis Lead, Sales Head | Can dominate Analyst/Specialist; intimidate Collaborator | Pair with Collaborator or Specialist to temper force with detail | Require pre-decision consultation and dissent forum |
| Collaborator | Team Lead, Community, Internal Comms | Avoids conflict with Captain/Strategist; may defer too much | Pair with Captain or Strategist for direction; Adapter for liaison | Use role clarity and rotating facilitation to build voice |
| Maverick | Innovation Lead, Creative Director | Clashes with Controller/Craftsman over standards | Pair with Craftsman or Operator to convert ideas to products | Time-box experiments and require handoffs to executors |
| Persuader | Sales Lead, Marketing, Change Lead | Image vs. Analyst tension; may overpromise to Specialist | Pair with Specialist or Operator to ground promises | Anchor pitches with data and delivery commitments |
| Promoter | Events, Brand, Community Growth | Friction with Analyzer/Controller over spontaneity | Pair with Operator or Strategist to structure campaigns | Define minimum viable deliverables and handoff plans |
| Adapter | Program Coordinator, PMO Liaison | May be pulled in all directions; risk of people-pleasing | Pair with Strategist for priorities; Collaborator for relationships | Set explicit priorities and escalation rules |
| Craftsman | Engineering Lead, QA, Skilled Ops | Conflict with Venturer/Promoter over shortcuts | Pair with Venturer for innovation; Controller for standards | Clarify "good enough" thresholds and safety limits |
| Guardian | Benefits, Facilities, Compliance Ops | Resists rapid change from Captain/Venturer | Pair with Strategist early in design; Adapter for rollout | Co-design safeguards into change plans |
| Operator | Operations, Scheduling, Customer Ops | May be bypassed by Persuader/Promoter in rush | Pair with Promoter for execution; Craftsman for quality | Use explicit SLAs and escalation triggers |
| Individualist | R&D, Design Lead, Thought Leadership | Misunderstood by Captain/Promoter; may withdraw | Pair with Strategist for impact; Specialist for rigor | Protect autonomy and provide recognition for uniqueness |
| Scholar | Research Lead, Analytics, Academia | Tension with Persuader/Promoter over speed vs. rigor | Pair with Persuader to translate findings; Operator for delivery | Schedule translation sessions and publication milestones |

---

IMPLEMENTATION NOTES
--------------------
This finished result section merges practical team-application outputs from Role Fit, Team Fit, Complementarity, and conflict-risk thinking.

Recommended SignalGlass UI fields:
- best_role_fit
- likely_conflict_hotspots
- complementary_pairings
- quick_management_tip
- team_design_use_case
- collaboration_guardrail
`,
  },
  {
    id: "cognitive-reflection-test-crt",
    lens: "Cognitive Reflection Test (CRT)",
    status: "Not Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Cognitive Reflection Test (CRT)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

COGNITIVE REFLECTION TEST (CRT)
Status:  Not Done → now completing fully
Output: For each PI profile →
  - CRT Score Likelihood (High / Moderate / Low)
  - Impulsivity vs. Reflection
  - Heuristic Reliance
  - Bias Susceptibility
  - Reflection‑Override Capability
  - Stress‑mode decision distortion
  - One‑line rationale
  - Guided Links for deeper dives
CRT is one of the strongest predictors of:
  - susceptibility to cognitive biases
  - ability to override intuitive but wrong answers
  - depth of reasoning
  - decision quality under uncertainty
This is a high‑value lens for leadership, risk, and strategy.

  THE 4 CRT DIMENSIONS WE MAP
1. CRT Score Likelihood
How likely they are to override intuitive errors.
2. Impulsivity vs. Reflection
Fast‑thinking vs. slow‑thinking balance.
3. Heuristic Reliance
How often they default to mental shortcuts.
4. Bias Susceptibility
Especially:
  - anchoring
  - availability
  - confirmation
  - affect heuristic
  - framing effects

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - CRT Score: High
  - Impulsivity: Very Low
  - Heuristic Reliance: Low
  - Bias Susceptibility: Low
  - Reflection Override: Very High
  - Stress Distortion: Over‑analysis
  - Rationale: Slow, methodical, data‑driven
  - Deep dive: Analyzer CRT

2. Controller
  - CRT Score: Moderate‑High
  - Impulsivity: Low
  - Heuristic Reliance: Low
  - Bias Susceptibility: Low‑Moderate
  - Reflection Override: High
  - Stress Distortion: Rule rigidity
  - Rationale: Rule‑based reasoning
  - Deep dive: Controller CRT

3. Specialist
  - CRT Score: High
  - Impulsivity: Low
  - Heuristic Reliance: Low
  - Bias Susceptibility: Low
  - Reflection Override: Very High
  - Stress Distortion: Narrow focus
  - Rationale: Deep technical reasoning
  - Deep dive: Specialist CRT

4. Strategist
  - CRT Score: High
  - Impulsivity: Low‑Moderate
  - Heuristic Reliance: Moderate
  - Bias Susceptibility: Moderate
  - Reflection Override: High
  - Stress Distortion: Over‑confidence in models
  - Rationale: Conceptual + analytical
  - Deep dive: Strategist CRT

5. Venturer
  - CRT Score: Low
  - Impulsivity: Very High
  - Heuristic Reliance: Very High
  - Bias Susceptibility: High
  - Reflection Override: Low
  - Stress Distortion: Impulsive risk
  - Rationale: Fast, intuitive, action‑driven
  - Deep dive: Venturer CRT

6. Altruist
  - CRT Score: Moderate
  - Impulsivity: Low‑Moderate
  - Heuristic Reliance: Moderate
  - Bias Susceptibility: High (affect heuristic)
  - Reflection Override: Moderate
  - Stress Distortion: Emotional reasoning
  - Rationale: People‑first cognition
  - Deep dive: Altruist CRT

7. Captain
  - CRT Score: Moderate
  - Impulsivity: High
  - Heuristic Reliance: High
  - Bias Susceptibility: High (dominance bias)
  - Reflection Override: Low‑Moderate
  - Stress Distortion: Over‑assertive shortcuts
  - Rationale: Fast, decisive
  - Deep dive: Captain CRT

8. Collaborator
  - CRT Score: Moderate
  - Impulsivity: Low
  - Heuristic Reliance: Moderate
  - Bias Susceptibility: High (social desirability bias)
  - Reflection Override: Moderate
  - Stress Distortion: Avoidance
  - Rationale: Relational reasoning
  - Deep dive: Collaborator CRT

9. Maverick
  - CRT Score: Low
  - Impulsivity: High
  - Heuristic Reliance: Very High
  - Bias Susceptibility: Very High
  - Reflection Override: Low
  - Stress Distortion: Chaotic decisions
  - Rationale: Creative, non‑linear, impulsive
  - Deep dive: Maverick CRT

10. Persuader
  - CRT Score: Low‑Moderate
  - Impulsivity: High
  - Heuristic Reliance: High
  - Bias Susceptibility: High (affect + framing)
  - Reflection Override: Low
  - Stress Distortion: Emotional reasoning
  - Rationale: Social‑intuitive cognition
  - Deep dive: Persuader CRT

11. Promoter
  - CRT Score: Low
  - Impulsivity: Very High
  - Heuristic Reliance: Very High
  - Bias Susceptibility: Very High
  - Reflection Override: Very Low
  - Stress Distortion: Impulsive shifts
  - Rationale: Improvisational, reactive
  - Deep dive: Promoter CRT

12. Adapter
  - CRT Score: Moderate
  - Impulsivity: Low‑Moderate
  - Heuristic Reliance: Moderate
  - Bias Susceptibility: Moderate
  - Reflection Override: Moderate
  - Stress Distortion: Over‑adjustment
  - Rationale: Flexible, situational
  - Deep dive: Adapter CRT

13. Craftsman
  - CRT Score: High
  - Impulsivity: Low
  - Heuristic Reliance: Low
  - Bias Susceptibility: Low
  - Reflection Override: High
  - Stress Distortion: Perfectionistic delay
  - Rationale: Methodical, detail‑driven
  - Deep dive: Craftsman CRT

14. Guardian
  - CRT Score: Moderate‑High
  - Impulsivity: Low
  - Heuristic Reliance: Low‑Moderate
  - Bias Susceptibility: Moderate (risk aversion bias)
  - Reflection Override: High
  - Stress Distortion: Over‑caution
  - Rationale: Stability + rule orientation
  - Deep dive: Guardian CRT

15. Operator
  - CRT Score: Moderate
  - Impulsivity: Low‑Moderate
  - Heuristic Reliance: Moderate
  - Bias Susceptibility: Moderate
  - Reflection Override: Moderate
  - Stress Distortion: Rigid routine
  - Rationale: Practical, steady
  - Deep dive: Operator CRT

16. Individualist
  - CRT Score: Moderate
  - Impulsivity: Moderate
  - Heuristic Reliance: Moderate
  - Bias Susceptibility: Moderate (identity bias)
  - Reflection Override: Moderate
  - Stress Distortion: Detached reasoning
  - Rationale: Independent, conceptual
  - Deep dive: Individualist CRT

17. Scholar
  - CRT Score: Very High
  - Impulsivity: Very Low
  - Heuristic Reliance: Very Low
  - Bias Susceptibility: Very Low
  - Reflection Override: Very High
  - Stress Distortion: Over‑analysis
  - Rationale: Deep, rigorous reasoning
  - Deep dive: Scholar CRT

 COGNITIVE REFLECTION TEST (CRT) — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "hexaco",
    lens: "HEXACO",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 09 — HEXACO
=============================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.

Source limitation note: the uploaded extraction says this lens was completed at full micro-level in the source conversation, but the hundreds of detailed cells were not included in the uploaded text. The profile-level content below is therefore a detailed reconstruction derived from the uploaded document’s summary, the 17 PI profile reference list, and the translation methodology preserved in the source document. It should be reviewed against the original Raw_data conversation if exact historical cell-by-cell wording is required.


LENS PURPOSE
------------
HEXACO translates each PI profile into six broad personality domains: Honesty-Humility, Emotionality, eXtraversion, Agreeableness, Conscientiousness, and Openness to Experience. The source states that HEXACO was completed across 25 subfacets with profile-level judgments.

PROFILE-LEVEL DERIVED HEXACO MAP
--------------------------------
| Profile       | Honesty-Humility | Emotionality  | eXtraversion | Agreeableness | Conscientiousness | Openness      | Rationale                                                                                                                                          |
| ------------- | ---------------- | ------------- | ------------ | ------------- | ----------------- | ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| Analyzer      | Moderate-High    | Low           | Low          | Moderate-Low  | Very High         | Moderate      | Order, precision, rule-following, and accuracy make Conscientiousness the strongest signal; interpersonal warmth/agreeableness is more restrained. |
| Controller    | Moderate         | Low-Moderate  | Low          | Low           | Very High         | Moderate-Low  | Directive control and rule enforcement point to very high Conscientiousness and lower Agreeableness/Extraversion.                                  |
| Specialist    | Moderate-High    | Low           | Low          | Moderate-Low  | Very High         | High          | Deep mastery and domain curiosity drive high Openness within a focused domain, with high standards and lower broad sociability.                    |
| Strategist    | Moderate         | Low           | Moderate     | Moderate-Low  | High              | High          | Systems thinking, strategic vision, and disciplined planning support high Openness and Conscientiousness.                                          |
| Venturer      | Low-Moderate     | Low           | High         | Low           | Low-Moderate      | High          | Novelty seeking, risk tolerance, and opportunity pursuit create high Extraversion/Openness with lower rule dependence.                             |
| Altruist      | High             | Moderate-High | High         | High          | High              | Moderate      | Helping orientation, care, and dependability support strong Honesty-Humility, Agreeableness, and Conscientiousness.                                |
| Captain       | Moderate-Low     | Low           | Very High    | Low-Moderate  | Moderate          | High          | Assertive leadership and results orientation produce high Extraversion and Openness, with lower softness in interpersonal conflict.                |
| Collaborator  | High             | Moderate-High | High         | High          | Moderate-High     | Moderate      | Harmony-building and facilitation create high Agreeableness and Extraversion with reliable conscientious support.                                  |
| Maverick      | Low-Moderate     | Low           | High         | Low           | Low               | Very High     | Creative disruption and rule-challenging point to very high Openness and lower Conscientiousness/Agreeableness.                                    |
| Persuader     | Moderate         | Low-Moderate  | Very High    | Moderate      | Moderate          | Moderate-High | Influence, audience reading, and social persuasion create a strong Extraversion signal with adaptive Openness.                                     |
| Promoter      | Moderate         | Moderate      | Very High    | Moderate      | Low               | High          | Visibility, enthusiasm, and spontaneity support very high Extraversion and high Openness, with lower structure preference.                         |
| Adapter       | High             | Moderate      | High         | High          | Moderate          | Moderate-High | Context-reading and flexibility create strong Agreeableness and Extraversion with adaptable Openness.                                              |
| Craftsman     | High             | Low           | Low          | Moderate      | Very High         | Low-Moderate  | Quality standards, routine, and precision create very high Conscientiousness and narrower Openness.                                                |
| Guardian      | High             | Moderate      | Low          | High          | Very High         | Low           | Stewardship, safety, and continuity support high Honesty-Humility, Agreeableness, and Conscientiousness.                                           |
| Operator      | High             | Low-Moderate  | Low-Moderate | High          | Very High         | Low-Moderate  | Reliable execution and process discipline support high Conscientiousness and practical Agreeableness.                                              |
| Individualist | Moderate-High    | Moderate      | Low-Moderate | Low-Moderate  | Moderate          | Very High     | Authenticity, originality, and self-direction produce very high Openness with selective social engagement.                                         |
| Scholar       | High             | Low           | Low          | Low-Moderate  | High              | Very High     | Rigorous inquiry and truth-seeking support very high Openness and high Conscientiousness, with reserved interpersonal style.                       |

IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- honesty_humility_signal
- emotionality_signal
- extraversion_signal
- agreeableness_signal
- conscientiousness_signal
- openness_signal
- strongest_hexaco_domain
- lowest_hexaco_domain
- profile_rationale

Use this lens for ethical posture, pressure style, collaboration tendency, dependability, and innovation-fit summaries. Keep all outputs non-diagnostic.
`,
  },
  {
    id: "kolbe-a-index-conation",
    lens: "Kolbe A Index (Conation)",
    status: "Not Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Kolbe A Index (Conation)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

KOLBE A INDEX (CONATION)
Status:  Not Done → now completing fully
Output: For each PI profile →
  - Fact Finder (Simplify → Explain)
  - Follow Thru (Adapt → Systematize)
  - Quick Start (Stabilize → Innovate)
  - Implementor (Envision → Build)
  - Primary Conative Mode
  - Stress Pattern
  - One‑line rationale
  - Guided Links for deeper dives
Kolbe measures how people take action — not personality, not intelligence, not motivation.
It is the closest behavioral cousin to PI’s drive structure.

 THE 4 KOLBE ACTION MODES
1. Fact Finder
How you gather and share information.
2. Follow Thru
How you organize, structure, and systematize.
3. Quick Start
How you deal with risk, uncertainty, and change.
4. Implementor
How you handle space, tangibility, and physical solutions.
Each mode ranges from 1 → 10, but we map as:
  - Low (Simplify / Adapt / Stabilize / Envision)
  - Moderate
  - High (Explain / Systematize / Innovate / Build)

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - Fact Finder: High
  - Follow Thru: High
  - Quick Start: Low
  - Implementor: Low
  - Primary Mode: Systematize
  - Stress Pattern: Over‑structuring
  - Rationale: Precision + structure
  - Deep dive: Analyzer Kolbe

2. Controller
  - Fact Finder: High
  - Follow Thru: Very High
  - Quick Start: Very Low
  - Implementor: Low
  - Primary Mode: Enforce systems
  - Stress Pattern: Rigidity
  - Rationale: Rules + order
  - Deep dive: Controller Kolbe

3. Specialist
  - Fact Finder: High
  - Follow Thru: High
  - Quick Start: Low
  - Implementor: Low‑Moderate
  - Primary Mode: Deep dive + structure
  - Stress Pattern: Over‑focus
  - Rationale: Domain mastery
  - Deep dive: Specialist Kolbe

4. Strategist
  - Fact Finder: High
  - Follow Thru: Moderate
  - Quick Start: High
  - Implementor: Low
  - Primary Mode: Vision + logic
  - Stress Pattern: Over‑complexity
  - Rationale: Systems + innovation
  - Deep dive: Strategist Kolbe

5. Venturer
  - Fact Finder: Low
  - Follow Thru: Low
  - Quick Start: Very High
  - Implementor: Low
  - Primary Mode: Innovate
  - Stress Pattern: Impulsive risk
  - Rationale: Bold, fast action
  - Deep dive: Venturer Kolbe

6. Altruist
  - Fact Finder: Moderate
  - Follow Thru: Moderate
  - Quick Start: Low‑Moderate
  - Implementor: Low
  - Primary Mode: Adapt
  - Stress Pattern: Over‑accommodation
  - Rationale: People‑first execution
  - Deep dive: Altruist Kolbe

7. Captain
  - Fact Finder: Moderate
  - Follow Thru: Moderate
  - Quick Start: High
  - Implementor: Low
  - Primary Mode: Drive + innovate
  - Stress Pattern: Over‑assertive shortcuts
  - Rationale: Command + action
  - Deep dive: Captain Kolbe

8. Collaborator
  - Fact Finder: Moderate
  - Follow Thru: Moderate
  - Quick Start: Low‑Moderate
  - Implementor: Low
  - Primary Mode: Adapt + harmonize
  - Stress Pattern: Avoidance
  - Rationale: Relational execution
  - Deep dive: Collaborator Kolbe

9. Maverick
  - Fact Finder: Low
  - Follow Thru: Low
  - Quick Start: Very High
  - Implementor: Low
  - Primary Mode: Innovate disruptively
  - Stress Pattern: Chaos
  - Rationale: Creative, non‑linear action
  - Deep dive: Maverick Kolbe

10. Persuader
  - Fact Finder: Low‑Moderate
  - Follow Thru: Low
  - Quick Start: High
  - Implementor: Low
  - Primary Mode: Innovate socially
  - Stress Pattern: Over‑promising
  - Rationale: Influence + improvisation
  - Deep dive: Persuader Kolbe

11. Promoter
  - Fact Finder: Low
  - Follow Thru: Low
  - Quick Start: Very High
  - Implementor: Low
  - Primary Mode: Activate + innovate
  - Stress Pattern: Impulsive shifts
  - Rationale: Energetic improvisation
  - Deep dive: Promoter Kolbe

12. Adapter
  - Fact Finder: Moderate
  - Follow Thru: Moderate
  - Quick Start: Moderate
  - Implementor: Low
  - Primary Mode: Flexible adaptation
  - Stress Pattern: Over‑adjustment
  - Rationale: Situational execution
  - Deep dive: Adapter Kolbe

13. Craftsman
  - Fact Finder: High
  - Follow Thru: Very High
  - Quick Start: Very Low
  - Implementor: Moderate
  - Primary Mode: Systematize + perfect
  - Stress Pattern: Perfectionistic delay
  - Rationale: Quality + structure
  - Deep dive: Craftsman Kolbe

14. Guardian
  - Fact Finder: High
  - Follow Thru: Very High
  - Quick Start: Very Low
  - Implementor: Low‑Moderate
  - Primary Mode: Preserve systems
  - Stress Pattern: Over‑caution
  - Rationale: Stewardship + stability
  - Deep dive: Guardian Kolbe

15. Operator
  - Fact Finder: Moderate
  - Follow Thru: High
  - Quick Start: Low
  - Implementor: Moderate
  - Primary Mode: Execute reliably
  - Stress Pattern: Rigid routine
  - Rationale: Process + consistency
  - Deep dive: Operator Kolbe

16. Individualist
  - Fact Finder: Moderate
  - Follow Thru: Low
  - Quick Start: High
  - Implementor: Low
  - Primary Mode: Innovate independently
  - Stress Pattern: Detached improvisation
  - Rationale: Creative autonomy
  - Deep dive: Individualist Kolbe

17. Scholar
  - Fact Finder: Very High
  - Follow Thru: High
  - Quick Start: Low
  - Implementor: Low
  - Primary Mode: Analyze + structure
  - Stress Pattern: Over‑analysis
  - Rationale: Academic rigor
  - Deep dive: Scholar Kolbe

 KOLBE A INDEX — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "mbti-crosswalk",
    lens: "MBTI Crosswalk",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 10 — MBTI Crosswalk
=====================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.

Source limitation note: the uploaded extraction says this lens was completed at full micro-level in the source conversation, but the hundreds of detailed cells were not included in the uploaded text. The profile-level content below is therefore a detailed reconstruction derived from the uploaded document’s summary, the 17 PI profile reference list, and the translation methodology preserved in the source document. It should be reviewed against the original Raw_data conversation if exact historical cell-by-cell wording is required.


LENS PURPOSE
------------
This lens provides a non-diagnostic MBTI-style crosswalk from PI profile patterns. The source states that E/I, S/N, T/F, and J/P judgments were produced per profile with confidence notes and rationale.

PROFILE-LEVEL DERIVED MBTI MAP
------------------------------
| Profile       | Likely MBTI Pattern | E/I | S/N | T/F | J/P | Confidence    | Rationale                                                                                                                         |
| ------------- | ------------------- | --- | --- | --- | --- | ------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Analyzer      | ISTJ / INTJ         | I   | S/N | T   | J   | High          | Structured, precise, analytical, and quality-driven; can look ISTJ when applying standards and INTJ when designing systems.       |
| Controller    | ESTJ / ISTJ         | E/I | S   | T   | J   | Moderate-High | Directive, rule-oriented, decisive, and operationally firm; likely a judging, thinking pattern.                                   |
| Specialist    | ISTJ / ISTP         | I   | S   | T   | J/P | Moderate      | Deep technical focus, low social need, and careful standards; type depends on whether structure or hands-on adaptation dominates. |
| Strategist    | INTJ / ENTJ         | I/E | N   | T   | J   | High          | Big-picture systems thinking with disciplined follow-through and strategic control.                                               |
| Venturer      | ENTJ / ESTP         | E   | N/S | T   | P/J | Moderate      | Fast-moving opportunity pursuit; may look ENTJ when leading strategy or ESTP when acting tactically.                              |
| Altruist      | ESFJ / ISFJ         | E/I | S   | F   | J   | Moderate-High | Supportive, people-centered, dependable, and service-oriented.                                                                    |
| Captain       | ENTJ / ESTJ         | E   | N/S | T   | J   | High          | Commanding, decisive, outcome-focused, and comfortable directing others.                                                          |
| Collaborator  | ESFJ / ENFJ         | E   | S/N | F   | J   | High          | Facilitative, relationship-centered, harmony-building, and group-oriented.                                                        |
| Maverick      | ENTP                | E   | N   | T   | P   | High          | Creative, disruptive, expressive, and comfortable challenging assumptions.                                                        |
| Persuader     | ENFJ / ENTP         | E   | N   | F/T | J/P | Moderate      | Audience-focused influence and adaptive communication; type shifts depending on whether values or argumentation leads.            |
| Promoter      | ENFP / ESFP         | E   | N/S | F   | P   | Moderate-High | Energetic, spontaneous, visibility-oriented, and socially expressive.                                                             |
| Adapter       | ESFJ / ENFP         | E   | S/N | F   | J/P | Moderate      | Flexible and people-attuned; can look structured in support roles or exploratory in changing contexts.                            |
| Craftsman     | ISTJ / ISTP         | I   | S   | T   | J/P | Moderate      | Precision, quality, practical skill, and reserved execution.                                                                      |
| Guardian      | ISFJ / ISTJ         | I   | S   | F/T | J   | High          | Protective, steady, continuity-focused, and duty-driven.                                                                          |
| Operator      | ISTJ / ESTJ         | I/E | S   | T   | J   | High          | Process-driven, reliable, practical, and execution-oriented.                                                                      |
| Individualist | INFP / INTP         | I   | N   | F/T | P   | Moderate      | Original, autonomous, authenticity-driven; may express through values or conceptual analysis.                                     |
| Scholar       | INTJ / INTP         | I   | N   | T   | J/P | High          | Intellectual, analytic, independent, and rigorous; judging/perceiving depends on structure vs. inquiry emphasis.                  |

IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- likely_mbti_pattern
- ei_signal
- sn_signal
- tf_signal
- jp_signal
- confidence
- rationale
- caution_note

Do not present this as a formal MBTI result. It is a language bridge for communication, team design, and role-style explanation.
`,
  },
  {
    id: "hbdi--herrmann-brain-dominance-instrument",
    lens: "HBDI - Herrmann Brain Dominance Instrument",
    status: "Not Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: HBDI - Herrmann Brain Dominance Instrument
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

HBDI — HERRMANN BRAIN DOMINANCE INSTRUMENT
Status:  Not Done → now completing fully
Output: For each PI profile →
  - Primary Quadrant (A / B / C / D)
  - Secondary Quadrant
  - Tertiary Quadrant
  - Lowest Quadrant
  - Thinking Strength
  - Thinking Blind Spot
  - Stress‑Mode Shift
  - One‑line rationale
  - Guided Links for deeper dives
This lens is extremely powerful for communication, collaboration, team design, and leadership because it maps how people prefer to think, not how smart they are.

  THE 4 HBDI QUADRANTS
A — Analytical (Blue)
Logic, data, analysis, numbers.
B — Organized (Green)
Structure, process, planning, detail.
C — Interpersonal (Red)
Empathy, communication, relationships.
D — Imaginative (Yellow)
Vision, creativity, big‑picture, innovation.

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - Primary: A (Analytical)
  - Secondary: B
  - Tertiary: D
  - Lowest: C
  - Strength: Precision + logic
  - Blind Spot: Emotional nuance
  - Stress Shift: Hyper‑A (over‑analysis)
  - Rationale: Data‑driven, structured
  - Deep dive: Analyzer HBDI

2. Controller
  - Primary: B (Organized)
  - Secondary: A
  - Tertiary: C
  - Lowest: D
  - Strength: Structure + control
  - Blind Spot: Creativity
  - Stress Shift: Rigid B
  - Rationale: Rule‑based, process‑driven
  - Deep dive: Controller HBDI

3. Specialist
  - Primary: A
  - Secondary: B
  - Tertiary: C
  - Lowest: D
  - Strength: Technical depth
  - Blind Spot: Innovation
  - Stress Shift: Withdrawn A/B
  - Rationale: Deep, precise reasoning
  - Deep dive: Specialist HBDI

4. Strategist
  - Primary: D (Imaginative)
  - Secondary: A
  - Tertiary: B
  - Lowest: C
  - Strength: Vision + logic
  - Blind Spot: Emotional tone
  - Stress Shift: Over‑theorizing
  - Rationale: Systems + innovation
  - Deep dive: Strategist HBDI

5. Venturer
  - Primary: D
  - Secondary: A
  - Tertiary: C
  - Lowest: B
  - Strength: Bold innovation
  - Blind Spot: Structure
  - Stress Shift: Impulsive D
  - Rationale: Fast, creative, risk‑taking
  - Deep dive: Venturer HBDI

6. Altruist
  - Primary: C (Interpersonal)
  - Secondary: B
  - Tertiary: A
  - Lowest: D
  - Strength: Empathy + harmony
  - Blind Spot: Innovation
  - Stress Shift: Over‑accommodation
  - Rationale: People‑first cognition
  - Deep dive: Altruist HBDI

7. Captain
  - Primary: D
  - Secondary: A
  - Tertiary: B
  - Lowest: C
  - Strength: Vision + drive
  - Blind Spot: Emotional nuance
  - Stress Shift: Dominant D/A
  - Rationale: Command + innovation
  - Deep dive: Captain HBDI

8. Collaborator
  - Primary: C
  - Secondary: B
  - Tertiary: D
  - Lowest: A
  - Strength: Harmony + facilitation
  - Blind Spot: Hard logic
  - Stress Shift: Avoidance
  - Rationale: Relational integration
  - Deep dive: Collaborator HBDI

9. Maverick
  - Primary: D
  - Secondary: A
  - Tertiary: C
  - Lowest: B
  - Strength: Creative disruption
  - Blind Spot: Structure
  - Stress Shift: Chaotic D
  - Rationale: Non‑linear, inventive
  - Deep dive: Maverick HBDI

10. Persuader
  - Primary: C
  - Secondary: D
  - Tertiary: A
  - Lowest: B
  - Strength: Influence + creativity
  - Blind Spot: Process discipline
  - Stress Shift: Emotional C
  - Rationale: Social‑creative cognition
  - Deep dive: Persuader HBDI

11. Promoter
  - Primary: C
  - Secondary: D
  - Tertiary: A
  - Lowest: B
  - Strength: Energy + connection
  - Blind Spot: Structure
  - Stress Shift: Reactive C/D
  - Rationale: Expressive, improvisational
  - Deep dive: Promoter HBDI

12. Adapter
  - Primary: C
  - Secondary: B
  - Tertiary: D
  - Lowest: A
  - Strength: Flexibility + empathy
  - Blind Spot: Hard analysis
  - Stress Shift: Over‑adjustment
  - Rationale: Situational, relational
  - Deep dive: Adapter HBDI

13. Craftsman
  - Primary: B
  - Secondary: A
  - Tertiary: C
  - Lowest: D
  - Strength: Structure + precision
  - Blind Spot: Innovation
  - Stress Shift: Perfectionistic B
  - Rationale: Quality + order
  - Deep dive: Craftsman HBDI

14. Guardian
  - Primary: B
  - Secondary: A
  - Tertiary: C
  - Lowest: D
  - Strength: Stability + stewardship
  - Blind Spot: Creativity
  - Stress Shift: Over‑caution
  - Rationale: Preservation + process
  - Deep dive: Guardian HBDI

15. Operator
  - Primary: B
  - Secondary: A
  - Tertiary: C
  - Lowest: D
  - Strength: Reliable execution
  - Blind Spot: Innovation
  - Stress Shift: Rigid B
  - Rationale: Process + consistency
  - Deep dive: Operator HBDI

16. Individualist
  - Primary: D
  - Secondary: A
  - Tertiary: C
  - Lowest: B
  - Strength: Creative independence
  - Blind Spot: Structure
  - Stress Shift: Detached D
  - Rationale: Identity‑driven creativity
  - Deep dive: Individualist HBDI

17. Scholar
  - Primary: A
  - Secondary: B
  - Tertiary: D
  - Lowest: C
  - Strength: Deep analysis
  - Blind Spot: Emotional nuance
  - Stress Shift: Over‑analysis
  - Rationale: Academic, structured
  - Deep dive: Scholar HBDI

 HBDI — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "keirsey-temperaments",
    lens: "Keirsey Temperaments",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 11 — Keirsey Temperaments
===========================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.

Source limitation note: the uploaded extraction says this lens was completed at full micro-level in the source conversation, but the hundreds of detailed cells were not included in the uploaded text. The profile-level content below is therefore a detailed reconstruction derived from the uploaded document’s summary, the 17 PI profile reference list, and the translation methodology preserved in the source document. It should be reviewed against the original Raw_data conversation if exact historical cell-by-cell wording is required.


LENS PURPOSE
------------
Keirsey summarizes profile behavior into temperament language: Guardian, Artisan, Rational, and Idealist. The source says a single temperament plus subtype was produced per profile with micro-bullets and role implications.

PROFILE-LEVEL DERIVED KEIRSEY MAP
---------------------------------
| Profile       | Temperament         | Subtype                    | Likely Work Signature                                        | Role Implication                                                                              |
| ------------- | ------------------- | -------------------------- | ------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Analyzer      | Guardian / Rational | Inspector or Mastermind    | Quality control, compliance, analysis                        | Best used where precision, structured review, and standards matter.                           |
| Controller    | Guardian            | Supervisor                 | Governance, enforcement, operational control                 | Best used where rules, accountability, and procedural clarity are required.                   |
| Specialist    | Rational / Guardian | Architect or Inspector     | Technical mastery, deep review, domain expertise             | Best used where depth and subject-matter credibility matter more than broad social influence. |
| Strategist    | Rational            | Mastermind / Fieldmarshal  | Systems strategy, architecture, program design               | Best used where complex tradeoffs and future-state planning are central.                      |
| Venturer      | Artisan / Rational  | Promoter or Fieldmarshal   | Opportunity pursuit, business development, new-market action | Best used in pilots, expansion, and fast-moving ambiguous opportunities.                      |
| Altruist      | Idealist / Guardian | Counselor or Provider      | Support, advocacy, mentoring, care-centered operations       | Best used where trust, support, and dependable follow-through are needed.                     |
| Captain       | Rational / Guardian | Fieldmarshal or Supervisor | Executive leadership, crisis command, outcome ownership      | Best used when decisive direction and mobilization are required.                              |
| Collaborator  | Idealist / Guardian | Teacher or Provider        | Facilitation, internal communication, team cohesion          | Best used as a bridge across groups and relationship systems.                                 |
| Maverick      | Rational / Artisan  | Inventor or Promoter       | Innovation, disruption, creative challenge                   | Best used when assumptions need to be broken and options widened.                             |
| Persuader     | Idealist / Artisan  | Teacher or Promoter        | Influence, stakeholder conversion, change adoption           | Best used in communication-heavy roles with a need for buy-in.                                |
| Promoter      | Artisan             | Performer / Promoter       | Launches, events, social activation, visibility              | Best used in high-energy settings requiring excitement and audience engagement.               |
| Adapter       | Idealist / Guardian | Champion or Provider       | Liaison work, flexible facilitation, context switching       | Best used where people and changing requirements must be balanced.                            |
| Craftsman     | Guardian / Artisan  | Inspector or Crafter       | Quality, build discipline, standards, hands-on precision     | Best used in roles requiring reliable technical execution and quality control.                |
| Guardian      | Guardian            | Protector                  | Continuity, safety, stewardship, institutional memory        | Best used in roles protecting stability, compliance, and people.                              |
| Operator      | Guardian            | Inspector / Supervisor     | Scheduling, process management, service delivery             | Best used in operational systems with metrics, routines, and accountability.                  |
| Individualist | Idealist / Rational | Healer or Architect        | Original design, thought leadership, identity-centered work  | Best used with autonomy and space for distinctive contribution.                               |
| Scholar       | Rational            | Architect                  | Research, analysis, knowledge systems, evidence review       | Best used in rigorous inquiry and complex intellectual problem-solving.                       |

IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- temperament
- subtype
- work_signature
- role_implication
- leadership_translation
- team_fit_note

Use this lens to simplify user-facing explanations of work temperament without implying a validated Keirsey test result.
`,
  },
  {
    id: "cliftonstrengths-34-themes",
    lens: "CliftonStrengths 34 Themes",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 12 — CliftonStrengths 34 Themes
=================================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.

Source limitation note: the uploaded extraction says this lens was completed at full micro-level in the source conversation, but the hundreds of detailed cells were not included in the uploaded text. The profile-level content below is therefore a detailed reconstruction derived from the uploaded document’s summary, the 17 PI profile reference list, and the translation methodology preserved in the source document. It should be reviewed against the original Raw_data conversation if exact historical cell-by-cell wording is required.


LENS PURPOSE
------------
This lens translates PI profiles into CliftonStrengths-style theme patterns. The source says all 34 CliftonStrengths themes were judged per profile as Likely/Possible/Unlikely/Indeterminate with PI-to-theme triggers.

The table below provides the most likely/high-signal theme set for each PI profile, grouped by practical priority. It is not a replacement for a Gallup CliftonStrengths assessment.

THE 34 THEMES BY DOMAIN
-----------------------
Executing: Achiever, Arranger, Belief, Consistency, Deliberative, Discipline, Focus, Responsibility, Restorative
Influencing: Activator, Command, Communication, Competition, Maximizer, Self-Assurance, Significance, Woo
Relationship Building: Adaptability, Connectedness, Developer, Empathy, Harmony, Includer, Individualization, Positivity, Relator
Strategic Thinking: Analytical, Context, Futuristic, Ideation, Input, Intellection, Learner, Strategic

PROFILE-LEVEL DERIVED CLIFTON MAP
---------------------------------
| Profile       | Highest-Signal Themes                                        | Secondary Likely Themes                    | Domain Emphasis                                                 |
| ------------- | ------------------------------------------------------------ | ------------------------------------------ | --------------------------------------------------------------- |
| Analyzer      | Analytical, Consistency, Deliberative, Discipline, Focus     | Responsibility, Intellection, Input        | Executing: 5; Strategic Thinking: 3                             |
| Controller    | Command, Discipline, Responsibility, Consistency, Focus      | Deliberative, Restorative, Significance    | Executing: 6; Influencing: 2                                    |
| Specialist    | Input, Learner, Analytical, Focus, Discipline                | Deliberative, Intellection, Responsibility | Executing: 4; Strategic Thinking: 4                             |
| Strategist    | Strategic, Analytical, Ideation, Futuristic, Focus           | Command, Learner, Intellection             | Executing: 1; Influencing: 1; Strategic Thinking: 6             |
| Venturer      | Activator, Command, Self-Assurance, Strategic, Competition   | Ideation, Woo, Maximizer                   | Influencing: 6; Strategic Thinking: 2                           |
| Altruist      | Developer, Empathy, Harmony, Relator, Responsibility         | Connectedness, Belief, Includer            | Executing: 2; Relationship Building: 6                          |
| Captain       | Command, Activator, Competition, Self-Assurance, Strategic   | Significance, Focus, Maximizer             | Executing: 1; Influencing: 6; Strategic Thinking: 1             |
| Collaborator  | Harmony, Includer, Positivity, Developer, Relator            | Empathy, Communication, Woo                | Influencing: 2; Relationship Building: 6                        |
| Maverick      | Ideation, Activator, Command, Self-Assurance, Strategic      | Futuristic, Individualization, Competition | Influencing: 4; Relationship Building: 1; Strategic Thinking: 3 |
| Persuader     | Woo, Communication, Activator, Command, Positivity           | Strategic, Individualization, Significance | Influencing: 5; Relationship Building: 2; Strategic Thinking: 1 |
| Promoter      | Woo, Communication, Positivity, Activator, Adaptability      | Ideation, Significance, Maximizer          | Influencing: 5; Relationship Building: 2; Strategic Thinking: 1 |
| Adapter       | Adaptability, Harmony, Empathy, Includer, Developer          | Relator, Positivity, Connectedness         | Relationship Building: 8                                        |
| Craftsman     | Discipline, Focus, Analytical, Consistency, Responsibility   | Deliberative, Restorative, Learner         | Executing: 6; Strategic Thinking: 2                             |
| Guardian      | Responsibility, Consistency, Belief, Deliberative, Harmony   | Discipline, Relator, Restorative           | Executing: 6; Relationship Building: 2                          |
| Operator      | Discipline, Focus, Responsibility, Arranger, Consistency     | Restorative, Deliberative, Achiever        | Executing: 8                                                    |
| Individualist | Individualization, Ideation, Intellection, Futuristic, Input | Strategic, Belief, Learner                 | Executing: 1; Relationship Building: 1; Strategic Thinking: 6   |
| Scholar       | Learner, Intellection, Input, Analytical, Strategic          | Deliberative, Context, Focus               | Executing: 2; Strategic Thinking: 6                             |

PROFILE INTERPRETATION NOTES
----------------------------
- Analyzer: Most aligned with Analytical, Consistency, Deliberative. Secondary support from Discipline, Focus, Responsibility. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Controller: Most aligned with Command, Discipline, Responsibility. Secondary support from Consistency, Focus, Deliberative. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Specialist: Most aligned with Input, Learner, Analytical. Secondary support from Focus, Discipline, Deliberative. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Strategist: Most aligned with Strategic, Analytical, Ideation. Secondary support from Futuristic, Focus, Command. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Venturer: Most aligned with Activator, Command, Self-Assurance. Secondary support from Strategic, Competition, Ideation. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Altruist: Most aligned with Developer, Empathy, Harmony. Secondary support from Relator, Responsibility, Connectedness. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Captain: Most aligned with Command, Activator, Competition. Secondary support from Self-Assurance, Strategic, Significance. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Collaborator: Most aligned with Harmony, Includer, Positivity. Secondary support from Developer, Relator, Empathy. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Maverick: Most aligned with Ideation, Activator, Command. Secondary support from Self-Assurance, Strategic, Futuristic. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Persuader: Most aligned with Woo, Communication, Activator. Secondary support from Command, Positivity, Strategic. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Promoter: Most aligned with Woo, Communication, Positivity. Secondary support from Activator, Adaptability, Ideation. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Adapter: Most aligned with Adaptability, Harmony, Empathy. Secondary support from Includer, Developer, Relator. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Craftsman: Most aligned with Discipline, Focus, Analytical. Secondary support from Consistency, Responsibility, Deliberative. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Guardian: Most aligned with Responsibility, Consistency, Belief. Secondary support from Deliberative, Harmony, Discipline. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Operator: Most aligned with Discipline, Focus, Responsibility. Secondary support from Arranger, Consistency, Restorative. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Individualist: Most aligned with Individualization, Ideation, Intellection. Secondary support from Futuristic, Input, Strategic. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.
- Scholar: Most aligned with Learner, Intellection, Input. Secondary support from Analytical, Strategic, Deliberative. Use this profile where its strongest Clifton-style themes can be expressed without forcing it into low-fit behavior.


IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- likely_top_themes
- secondary_themes
- dominant_clifton_domain
- theme_trigger_from_PI
- best_strength_use
- overuse_risk

Because the uploaded extraction does not include the omitted full 34-theme matrix, this file preserves a detailed high-signal map and should be reconciled with the original raw conversation if exact Likely/Possible/Unlikely labels are needed for every theme.
`,
  },
  {
    id: "kai--kirton-adaption-innovation-inventory",
    lens: "KAI - Kirton Adaption-Innovation Inventory",
    status: "Not Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: KAI - Kirton Adaption-Innovation Inventory
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

KAI — KIRTON ADAPTION–INNOVATION INVENTORY
Status:  Not Done → now completing fully
Output: For each PI profile →
  - Adaptor ↔ Innovator Position
  - Problem‑Solving Style
  - Rule Orientation
  - Change Tolerance
  - Preferred Environment
  - Stress‑Mode Behavior
  - One‑line rationale
  - Guided Links for deeper dives
KAI is one of the most predictive lenses for:
  - innovation roles
  - change management
  - conflict in teams
  - leadership style
  - risk posture
  - process vs. disruption tension
It maps how people solve problems, not how smart or creative they are.

 THE KAI CONTINUUM
Adaptors
  - Prefer structure
  - Improve existing systems
  - Work within rules
  - Minimize risk
  - Value precision and stability
Innovators
  - Challenge assumptions
  - Break or bend rules
  - Prefer radical change
  - High risk tolerance
  - Value novelty and disruption
Most people fall somewhere in between — but PI profiles map strongly to one side.

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - Position: Strong Adaptor
  - Problem‑Solving: Methodical, structured
  - Rule Orientation: High
  - Change Tolerance: Low
  - Preferred Environment: Stable, predictable
  - Stress Behavior: Over‑analysis
  - Rationale: Precision + structure
  - Deep dive: Analyzer KAI

2. Controller
  - Position: Very Strong Adaptor
  - Problem‑Solving: Rule‑driven, procedural
  - Rule Orientation: Very High
  - Change Tolerance: Very Low
  - Preferred Environment: High control
  - Stress Behavior: Rigidity
  - Rationale: Governance + order
  - Deep dive: Controller KAI

3. Specialist
  - Position: Strong Adaptor
  - Problem‑Solving: Technical, detail‑driven
  - Rule Orientation: High
  - Change Tolerance: Low
  - Preferred Environment: Deep expertise
  - Stress Behavior: Withdrawal
  - Rationale: Domain mastery
  - Deep dive: Specialist KAI

4. Strategist
  - Position: Moderate Innovator
  - Problem‑Solving: Conceptual, systems‑level
  - Rule Orientation: Low‑Moderate
  - Change Tolerance: High
  - Preferred Environment: Ambiguous, strategic
  - Stress Behavior: Over‑complexity
  - Rationale: Vision + logic
  - Deep dive: Strategist KAI

5. Venturer
  - Position: Strong Innovator
  - Problem‑Solving: Fast, disruptive
  - Rule Orientation: Very Low
  - Change Tolerance: Very High
  - Preferred Environment: High risk, high autonomy
  - Stress Behavior: Impulsive action
  - Rationale: Bold, opportunistic
  - Deep dive: Venturer KAI

6. Altruist
  - Position: Moderate Adaptor
  - Problem‑Solving: People‑first, relational
  - Rule Orientation: Moderate
  - Change Tolerance: Moderate
  - Preferred Environment: Cooperative
  - Stress Behavior: Over‑accommodation
  - Rationale: Harmony‑oriented
  - Deep dive: Altruist KAI

7. Captain
  - Position: Moderate Innovator
  - Problem‑Solving: Decisive, outcome‑driven
  - Rule Orientation: Low
  - Change Tolerance: High
  - Preferred Environment: Fast‑moving
  - Stress Behavior: Over‑assertive shortcuts
  - Rationale: Command + action
  - Deep dive: Captain KAI

8. Collaborator
  - Position: Moderate Adaptor
  - Problem‑Solving: Consensus‑oriented
  - Rule Orientation: Moderate
  - Change Tolerance: Low‑Moderate
  - Preferred Environment: Harmonious
  - Stress Behavior: Avoidance
  - Rationale: Relational stability
  - Deep dive: Collaborator KAI

9. Maverick
  - Position: Very Strong Innovator
  - Problem‑Solving: Non‑linear, disruptive
  - Rule Orientation: Very Low
  - Change Tolerance: Very High
  - Preferred Environment: Creative chaos
  - Stress Behavior: Disorder, provocation
  - Rationale: Radical creativity
  - Deep dive: Maverick KAI

10. Persuader
  - Position: Moderate Innovator
  - Problem‑Solving: Social‑creative
  - Rule Orientation: Low
  - Change Tolerance: High
  - Preferred Environment: Dynamic, people‑driven
  - Stress Behavior: Emotional reasoning
  - Rationale: Influence + improvisation
  - Deep dive: Persuader KAI

11. Promoter
  - Position: Strong Innovator
  - Problem‑Solving: Energetic, improvisational
  - Rule Orientation: Very Low
  - Change Tolerance: Very High
  - Preferred Environment: High energy, high novelty
  - Stress Behavior: Impulsive shifts
  - Rationale: Expressive disruptor
  - Deep dive: Promoter KAI

12. Adapter
  - Position: Balanced Adaptor
  - Problem‑Solving: Flexible, situational
  - Rule Orientation: Moderate
  - Change Tolerance: Moderate
  - Preferred Environment: Cooperative, stable
  - Stress Behavior: Over‑adjustment
  - Rationale: Flexible but not disruptive
  - Deep dive: Adapter KAI

13. Craftsman
  - Position: Strong Adaptor
  - Problem‑Solving: Structured, quality‑driven
  - Rule Orientation: Very High
  - Change Tolerance: Low
  - Preferred Environment: Predictable, precise
  - Stress Behavior: Perfectionistic delay
  - Rationale: Methodical execution
  - Deep dive: Craftsman KAI

14. Guardian
  - Position: Very Strong Adaptor
  - Problem‑Solving: Conservative, risk‑averse
  - Rule Orientation: Very High
  - Change Tolerance: Very Low
  - Preferred Environment: Stable, structured
  - Stress Behavior: Over‑caution
  - Rationale: Stewardship + continuity
  - Deep dive: Guardian KAI

15. Operator
  - Position: Strong Adaptor
  - Problem‑Solving: Practical, process‑driven
  - Rule Orientation: High
  - Change Tolerance: Low
  - Preferred Environment: Routine, clarity
  - Stress Behavior: Rigid routine
  - Rationale: Execution + reliability
  - Deep dive: Operator KAI

16. Individualist
  - Position: Moderate Innovator
  - Problem‑Solving: Independent, creative
  - Rule Orientation: Low
  - Change Tolerance: High
  - Preferred Environment: Autonomous, flexible
  - Stress Behavior: Detached ideation
  - Rationale: Creative autonomy
  - Deep dive: Individualist KAI

17. Scholar
  - Position: Moderate Adaptor
  - Problem‑Solving: Analytical, structured
  - Rule Orientation: High
  - Change Tolerance: Low‑Moderate
  - Preferred Environment: Predictable, intellectual
  - Stress Behavior: Over‑analysis
  - Rationale: Academic structure
  - Deep dive: Scholar KAI

 KAI — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "thomas-kilmann-conflict-mode-tki",
    lens: "Thomas-Kilmann Conflict Mode (TKI)",
    status: "Not Done \u2192 now completing fully",
    source: "Untitled 5.txt",
    content: `LENS: Thomas-Kilmann Conflict Mode (TKI)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Duplicate status/check-in text was removed. Content is preserved from the uploaded document.
================================================================================

THOMAS–KILMANN CONFLICT MODE (TKI)
Status:  Not Done → now completing fully
Output: For each PI profile →
  - Primary Conflict Mode
  - Secondary Mode
  - Low‑use Mode
  - Stress‑Triggered Mode
  - Conflict Strength
  - Conflict Vulnerability
  - One‑line rationale
  - Guided Links for deeper dives
TKI is one of the most behaviorally predictive lenses for:
  - conflict patterns
  - escalation risk
  - negotiation style
  - team friction
  - leadership under pressure

 THE 5 TKI MODES
1. Competing
Assertive, uncooperative, win‑lose.
2. Collaborating
Assertive + cooperative, win‑win.
3. Compromising
Middle ground, trade‑offs.
4. Avoiding
Unassertive, uncooperative, delay/withdraw.
5. Accommodating
Unassertive, cooperative, yield to others.

 FULL CROSSWALK — ALL 17 PI PROFILES

1. Analyzer
  - Primary: Avoiding
  - Secondary: Compromising
  - Low‑use: Collaborating
  - Stress Mode: Over‑analysis → delay
  - Strength: De‑escalation
  - Vulnerability: Avoids necessary confrontation
  - Deep dive: Analyzer TKI

2. Controller
  - Primary: Competing
  - Secondary: Compromising
  - Low‑use: Accommodating
  - Stress Mode: Domineering
  - Strength: Clear boundaries
  - Vulnerability: Escalation
  - Deep dive: Controller TKI

3. Specialist
  - Primary: Avoiding
  - Secondary: Compromising
  - Low‑use: Competing
  - Stress Mode: Withdrawal
  - Strength: Reduces unnecessary conflict
  - Vulnerability: Silence → misalignment
  - Deep dive: Specialist TKI

4. Strategist
  - Primary: Collaborating
  - Secondary: Competing
  - Low‑use: Accommodating
  - Stress Mode: Over‑assertive logic
  - Strength: Win‑win problem solving
  - Vulnerability: Can steamroll
  - Deep dive: Strategist TKI

5. Venturer
  - Primary: Competing
  - Secondary: Collaborating
  - Low‑use: Avoiding
  - Stress Mode: Aggressive push
  - Strength: Fast resolution
  - Vulnerability: High conflict intensity
  - Deep dive: Venturer TKI

6. Altruist
  - Primary: Accommodating
  - Secondary: Collaborating
  - Low‑use: Competing
  - Stress Mode: Over‑giving
  - Strength: Relationship preservation
  - Vulnerability: Self‑sacrifice
  - Deep dive: Altruist TKI

7. Captain
  - Primary: Competing
  - Secondary: Collaborating
  - Low‑use: Avoiding
  - Stress Mode: Domination
  - Strength: Decisive conflict resolution
  - Vulnerability: Intimidation
  - Deep dive: Captain TKI

8. Collaborator
  - Primary: Collaborating
  - Secondary: Accommodating
  - Low‑use: Competing
  - Stress Mode: Avoidance
  - Strength: Harmony + integration
  - Vulnerability: Over‑compromise
  - Deep dive: Collaborator TKI

9. Maverick
  - Primary: Competing
  - Secondary: Collaborating
  - Low‑use: Accommodating
  - Stress Mode: Provocation
  - Strength: Breakthrough solutions
  - Vulnerability: Conflict escalation
  - Deep dive: Maverick TKI

10. Persuader
  - Primary: Collaborating
  - Secondary: Compromising
  - Low‑use: Avoiding
  - Stress Mode: Emotional escalation
  - Strength: Win‑win influence
  - Vulnerability: Over‑personalization
  - Deep dive: Persuader TKI

11. Promoter
  - Primary: Compromising
  - Secondary: Collaborating
  - Low‑use: Avoiding
  - Stress Mode: Reactive emotion
  - Strength: Quick agreements
  - Vulnerability: Over‑promising
  - Deep dive: Promoter TKI

12. Adapter
  - Primary: Accommodating
  - Secondary: Compromising
  - Low‑use: Competing
  - Stress Mode: Withdrawal
  - Strength: Flexibility
  - Vulnerability: Loss of voice
  - Deep dive: Adapter TKI

13. Craftsman
  - Primary: Avoiding
  - Secondary: Compromising
  - Low‑use: Collaborating
  - Stress Mode: Perfectionistic retreat
  - Strength: Reduces unnecessary conflict
  - Vulnerability: Bottlenecks
  - Deep dive: Craftsman TKI

14. Guardian
  - Primary: Avoiding
  - Secondary: Compromising
  - Low‑use: Competing
  - Stress Mode: Over‑caution
  - Strength: Stability
  - Vulnerability: Delayed resolution
  - Deep dive: Guardian TKI

15. Operator
  - Primary: Compromising
  - Secondary: Avoiding
  - Low‑use: Collaborating
  - Stress Mode: Rigid routine
  - Strength: Practical middle ground
  - Vulnerability: Avoids deeper issues
  - Deep dive: Operator TKI

16. Individualist
  - Primary: Avoiding
  - Secondary: Collaborating
  - Low‑use: Accommodating
  - Stress Mode: Detached withdrawal
  - Strength: Reduces emotional escalation
  - Vulnerability: Misalignment
  - Deep dive: Individualist TKI

17. Scholar
  - Primary: Avoiding
  - Secondary: Collaborating
  - Low‑use: Competing
  - Stress Mode: Over‑analysis
  - Strength: De‑escalation
  - Vulnerability: Slow resolution
  - Deep dive: Scholar TKI

 TKI — COMPLETE
This lens moves from  →  COMPLETE.
`,
  },
  {
    id: "via-character-strengths",
    lens: "VIA Character Strengths",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 13 — VIA Character Strengths
===============================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.

Source limitation note: the uploaded extraction says this lens was completed at full micro-level in the source conversation, but the hundreds of detailed cells were not included in the uploaded text. The profile-level content below is therefore a detailed reconstruction derived from the uploaded document’s summary, the 17 PI profile reference list, and the translation methodology preserved in the source document. It should be reviewed against the original Raw_data conversation if exact historical cell-by-cell wording is required.


LENS PURPOSE
------------
This lens translates PI profile patterns into VIA-style character strengths. The source says all 24 VIA strengths were judged per profile with short rationales tied to PI cues.

THE 24 VIA STRENGTHS BY VIRTUE CATEGORY
---------------------------------------
Wisdom: Creativity, Curiosity, Judgment, Love of Learning, Perspective
Courage: Bravery, Perseverance, Honesty, Zest
Humanity: Love, Kindness, Social Intelligence
Justice: Teamwork, Fairness, Leadership
Temperance: Forgiveness, Humility, Prudence, Self-Regulation
Transcendence: Appreciation of Beauty, Gratitude, Hope, Humor, Spirituality

PROFILE-LEVEL DERIVED VIA MAP
-----------------------------
| Profile       | Highest-Signal Strengths                                 | Secondary Likely Strengths     | Virtue Category Emphasis                                         |
| ------------- | -------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------- |
| Analyzer      | Prudence, Judgment, Perseverance, Self-Regulation        | Love of Learning, Perspective  | Wisdom: 3; Courage: 1; Temperance: 2                             |
| Controller    | Leadership, Prudence, Perseverance, Fairness             | Judgment, Self-Regulation      | Wisdom: 1; Courage: 1; Justice: 2; Temperance: 2                 |
| Specialist    | Love of Learning, Perseverance, Prudence, Judgment       | Curiosity, Perspective         | Wisdom: 4; Courage: 1; Temperance: 1                             |
| Strategist    | Perspective, Judgment, Curiosity, Leadership             | Creativity, Perseverance       | Wisdom: 4; Courage: 1; Justice: 1                                |
| Venturer      | Bravery, Zest, Curiosity, Leadership                     | Creativity, Perspective        | Wisdom: 3; Courage: 2; Justice: 1                                |
| Altruist      | Kindness, Love, Fairness, Teamwork                       | Gratitude, Social Intelligence | Humanity: 3; Justice: 2; Transcendence: 1                        |
| Captain       | Leadership, Bravery, Perseverance, Perspective           | Zest, Judgment                 | Wisdom: 2; Courage: 3; Justice: 1                                |
| Collaborator  | Teamwork, Kindness, Social Intelligence, Fairness        | Humor, Gratitude               | Humanity: 2; Justice: 2; Transcendence: 2                        |
| Maverick      | Creativity, Bravery, Curiosity, Zest                     | Perspective, Humor             | Wisdom: 3; Courage: 2; Transcendence: 1                          |
| Persuader     | Social Intelligence, Leadership, Humor, Zest             | Creativity, Perspective        | Wisdom: 2; Courage: 1; Humanity: 1; Justice: 1; Transcendence: 1 |
| Promoter      | Zest, Humor, Social Intelligence, Creativity             | Hope, Bravery                  | Wisdom: 1; Courage: 2; Humanity: 1; Transcendence: 2             |
| Adapter       | Social Intelligence, Kindness, Teamwork, Perspective     | Humility, Forgiveness          | Wisdom: 1; Humanity: 2; Justice: 1; Temperance: 2                |
| Craftsman     | Perseverance, Prudence, Judgment, Love of Learning       | Self-Regulation, Honesty       | Wisdom: 2; Courage: 2; Temperance: 2                             |
| Guardian      | Prudence, Teamwork, Fairness, Humility                   | Perseverance, Kindness         | Courage: 1; Humanity: 1; Justice: 2; Temperance: 2               |
| Operator      | Perseverance, Self-Regulation, Prudence, Teamwork        | Fairness, Judgment             | Wisdom: 1; Courage: 1; Justice: 2; Temperance: 2                 |
| Individualist | Creativity, Authenticity/Honesty, Curiosity, Perspective | Love of Learning, Bravery      | Wisdom: 4; Courage: 2                                            |
| Scholar       | Love of Learning, Curiosity, Judgment, Perspective       | Perseverance, Prudence         | Wisdom: 4; Courage: 1; Temperance: 1                             |

PROFILE INTERPRETATION NOTES
----------------------------
- Analyzer: The strongest character-strength signals are Prudence, Judgment, Perseverance; development should protect these strengths from overuse and connect them to practical role demands.
- Controller: The strongest character-strength signals are Leadership, Prudence, Perseverance; development should protect these strengths from overuse and connect them to practical role demands.
- Specialist: The strongest character-strength signals are Love of Learning, Perseverance, Prudence; development should protect these strengths from overuse and connect them to practical role demands.
- Strategist: The strongest character-strength signals are Perspective, Judgment, Curiosity; development should protect these strengths from overuse and connect them to practical role demands.
- Venturer: The strongest character-strength signals are Bravery, Zest, Curiosity; development should protect these strengths from overuse and connect them to practical role demands.
- Altruist: The strongest character-strength signals are Kindness, Love, Fairness; development should protect these strengths from overuse and connect them to practical role demands.
- Captain: The strongest character-strength signals are Leadership, Bravery, Perseverance; development should protect these strengths from overuse and connect them to practical role demands.
- Collaborator: The strongest character-strength signals are Teamwork, Kindness, Social Intelligence; development should protect these strengths from overuse and connect them to practical role demands.
- Maverick: The strongest character-strength signals are Creativity, Bravery, Curiosity; development should protect these strengths from overuse and connect them to practical role demands.
- Persuader: The strongest character-strength signals are Social Intelligence, Leadership, Humor; development should protect these strengths from overuse and connect them to practical role demands.
- Promoter: The strongest character-strength signals are Zest, Humor, Social Intelligence; development should protect these strengths from overuse and connect them to practical role demands.
- Adapter: The strongest character-strength signals are Social Intelligence, Kindness, Teamwork; development should protect these strengths from overuse and connect them to practical role demands.
- Craftsman: The strongest character-strength signals are Perseverance, Prudence, Judgment; development should protect these strengths from overuse and connect them to practical role demands.
- Guardian: The strongest character-strength signals are Prudence, Teamwork, Fairness; development should protect these strengths from overuse and connect them to practical role demands.
- Operator: The strongest character-strength signals are Perseverance, Self-Regulation, Prudence; development should protect these strengths from overuse and connect them to practical role demands.
- Individualist: The strongest character-strength signals are Creativity, Authenticity/Honesty, Curiosity; development should protect these strengths from overuse and connect them to practical role demands.
- Scholar: The strongest character-strength signals are Love of Learning, Curiosity, Judgment; development should protect these strengths from overuse and connect them to practical role demands.


IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- likely_character_strengths
- secondary_strengths
- virtue_category_emphasis
- strength_expression_at_work
- overuse_risk
- development_prompt

Do not frame these as moral judgments. They are workstyle-aligned strength tendencies derived from PI behavior patterns.
`,
  },
  {
    id: "enneagram-core-types-and-subtypes",
    lens: "Enneagram Core Types and Subtypes",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 14 — Enneagram Core Types and Subtypes
=======================================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.

Source limitation note: the uploaded extraction says this lens was completed at full micro-level in the source conversation, but the hundreds of detailed cells were not included in the uploaded text. The profile-level content below is therefore a detailed reconstruction derived from the uploaded document’s summary, the 17 PI profile reference list, and the translation methodology preserved in the source document. It should be reviewed against the original Raw_data conversation if exact historical cell-by-cell wording is required.


LENS PURPOSE
------------
This lens translates PI profile patterns into Enneagram-style language. The source says core type plus wing, instinctual subtype, stacking, center, trifix, levels, arrows, and full subtype narratives were completed for all 17 profiles.

PROFILE-LEVEL DERIVED ENNEAGRAM MAP
-----------------------------------
| Profile       | Core Type + Wing | Instinct Stack | Center Emphasis | Trifix | Growth/Stress Note                                                                      | Rationale                                                |
| ------------- | ---------------- | -------------- | --------------- | ------ | --------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Analyzer      | 1w9 / 5w6        | sp/so          | Head + Gut      | 153    | To 7 under growth; to 4 or 6 under stress depending on subtype                          | Accuracy, self-control, standards, and analytic caution. |
| Controller    | 1w9 / 8w9        | sp/so          | Gut             | 163    | Growth through flexibility and relational trust; stress through rigidity and blame      | Rule enforcement, duty, order, and control.              |
| Specialist    | 5w6              | sp/so          | Head            | 513    | Growth through sharing expertise; stress through withdrawal or overprotection of domain | Technical mastery, focus, low social demand.             |
| Strategist    | 5w6 / 8w9        | so/sp          | Head + Gut      | 583    | Growth through inclusive vision; stress through skepticism or overcontrol               | Systems vision, ambition, intellectual control.          |
| Venturer      | 8w7 / 7w8        | so/sx          | Gut + Head      | 873    | Growth through discipline and risk calibration; stress through impulsive overreach      | Opportunity pursuit, autonomy, risk tolerance.           |
| Altruist      | 2w1 / 9w1        | so/sp          | Heart           | 216    | Growth through boundaries; stress through overgiving and quiet resentment               | Service, support, acceptance, and care.                  |
| Captain       | 8w7              | so/sp          | Gut             | 837    | Growth through empathy and restraint; stress through domination or force                | Power, leadership, confidence, results.                  |
| Collaborator  | 9w1 / 2w3        | so/sp          | Gut + Heart     | 926    | Growth through directness; stress through conflict avoidance                            | Harmony, team cohesion, belonging.                       |
| Maverick      | 7w8 / 8w7        | sx/so          | Head + Gut      | 748    | Growth through follow-through; stress through chaos and relational burn                 | Novelty, disruption, creativity, independence.           |
| Persuader     | 3w2 / 7w8        | so/sx          | Heart           | 378    | Growth through truth-telling and grounded accountability; stress through overselling    | Influence, recognition, social adaptation.               |
| Promoter      | 7w6 / 3w2        | so/sx          | Head + Heart    | 739    | Growth through consistency; stress through scattered energy and image management        | Visibility, excitement, social energy.                   |
| Adapter       | 9w1 / 2w1        | so/sp          | Gut + Heart     | 927    | Growth through self-definition; stress through chronic accommodation                    | Flexibility, harmony, contextual responsiveness.         |
| Craftsman     | 1w9 / 5w6        | sp/so          | Gut + Head      | 153    | Growth through acceptable imperfection; stress through withdrawal or overchecking       | Quality, routine, craft standards.                       |
| Guardian      | 6w5 / 1w9        | sp/so          | Head            | 612    | Growth through confidence and calibrated change; stress through worry or overcaution    | Safety, duty, continuity, caution.                       |
| Operator      | 6w5 / 1w9        | sp/so          | Head + Gut      | 613    | Growth through strategic flexibility; stress through process rigidity                   | Reliable execution, process control, stability.          |
| Individualist | 4w5 / 5w4        | sx/sp          | Heart + Head    | 459    | Growth through translation and connection; stress through isolation                     | Authenticity, originality, internal meaning.             |
| Scholar       | 5w6              | sp/sx          | Head            | 514    | Growth through timely application; stress through analysis paralysis                    | Research, depth, truth-seeking, conceptual rigor.        |

NARRATIVE USE GUIDANCE
----------------------
- Use Enneagram outputs as motivational narratives, not as definitive typing.
- Keep each narrative behavior-based: what motivates the profile, what it protects, how it reacts under pressure, and what growth looks like.
- Avoid making clinical claims or implying the person has a fixed identity.

IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- likely_core_type
- wing
- instinct_stack
- center
- trifix
- pressure_pattern
- growth_pattern
- subtype_narrative
- caution_note
`,
  },
  {
    id: "interpersonal-dynamics-inventory",
    lens: "Interpersonal Dynamics Inventory",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Interpersonal Dynamics Inventory
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Interpersonal Dynamics Inventory

Primary = Dominance / Warmth / Expressiveness / Control pattern; Secondary = supporting dynamic; Stress = typical distortion under pressure.

| Profile | Primary | Secondary | Stress |
|---|---|---|---|
| Analyzer | Low Warmth | High Control | Withdraws into critique |
| Controller | High Dominance | High Control | Becomes punitive |
| Specialist | Low Expressiveness | High Control | Silent withdrawal |
| Strategist | High Dominance | Low Warmth | Overly directive |
| Venturer | High Dominance | High Expressiveness | Provokes conflict |
| Altruist | High Warmth | Low Dominance | Over‑accommodates |
| Captain | High Dominance | Moderate Expressiveness | Intimidates others |
| Collaborator | High Warmth | Moderate Expressiveness | Avoids hard talk |
| Maverick | High Expressiveness | Low Control | Chaotic provocation |
| Persuader | High Expressiveness | Moderate Warmth | Over‑personalizes |
| Promoter | High Expressiveness | Low Control | Dramatic escalation |
| Adapter | Moderate Warmth | Moderate Control | Over‑adjusts |
| Craftsman | Low Expressiveness | High Control | Retreats into work |
| Guardian | Moderate Warmth | High Control | Defensive caution |
| Operator | Low Expressiveness | High Control | Rigid, blunt responses |
| Individualist | Low Warmth | Moderate Expressiveness | Detaches emotionally |
| Scholar | Low Expressiveness | High Control | Over‑analysis, silence |
`,
  },
  {
    id: "feedback-sensitivity-lens",
    lens: "Feedback Sensitivity Lens",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Feedback Sensitivity Lens
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Feedback Sensitivity Lens

Primary = How feedback is received (Threat / Opportunity / Neutral); Secondary = Preferred delivery; Stress = Typical negative reaction.

| Profile | Primary | Preferred Delivery | Stress |
|---|---|---|---|
| Analyzer | Opportunity | Data‑driven, specific | Defensive detail‑checking |
| Controller | Threat | Clear rules, direct | Punitive response |
| Specialist | Opportunity | Technical, private | Withdraws, defends expertise |
| Strategist | Opportunity | Big‑picture, rationale | Dismisses trivial points |
| Venturer | Neutral/Threat | Short, outcome‑focused | Ignores or pushes back |
| Altruist | Threat | Gentle, relational | Takes it personally |
| Captain | Threat | Direct, status‑aware | Counters aggressively |
| Collaborator | Opportunity | Inclusive, supportive | Over‑apologizes |
| Maverick | Neutral | Creative framing | Rejects constraints |
| Persuader | Opportunity | Socially framed | Over‑emotional response |
| Promoter | Neutral | Energetic, public praise | Shrugs off criticism |
| Adapter | Opportunity | Private, collaborative | Over‑accommodates |
| Craftsman | Opportunity | Standards‑based | Perfectionistic defensiveness |
| Guardian | Threat | Respectful, procedural | Resists change |
| Operator | Opportunity | Practical, stepwise | Ignores vague feedback |
| Individualist | Neutral | Autonomy‑preserving | Withdraws to reflect |
| Scholar | Opportunity | Evidence‑based | Over‑questions intent |
`,
  },
  {
    id: "reiss-motivation-profile",
    lens: "Reiss Motivation Profile",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 15 — Reiss Motivation Profile
===============================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


LENS PURPOSE
------------
The Reiss lens identifies the primary motive pattern most consistent with each PI profile. In the source section, Reiss Motivation Profile is combined with Motivational Maps; this file splits Reiss into its own finalized lens so each lens has a separate txt document.

SOURCE-DERIVED REISS MAP
------------------------
| Profile       | Reiss Top Motives                       |
| ------------- | --------------------------------------- |
| Analyzer      | Order, Curiosity, Honor                 |
| Controller    | Order, Power, Honor                     |
| Specialist    | Curiosity, Order, Independence          |
| Strategist    | Power, Curiosity, Independence          |
| Venturer      | Power, Adventure, Independence          |
| Altruist      | Acceptance, Idealism, Social Contact    |
| Captain       | Power, Status, Independence             |
| Collaborator  | Acceptance, Social Contact, Idealism    |
| Maverick      | Independence, Adventure, Curiosity      |
| Persuader     | Social Contact, Status, Power           |
| Promoter      | Social Contact, Status, Adventure       |
| Adapter       | Acceptance, Tranquility, Social Contact |
| Craftsman     | Order, Honor, Curiosity                 |
| Guardian      | Order, Tranquility, Honor               |
| Operator      | Order, Tranquility, Family              |
| Individualist | Independence, Curiosity, Idealism       |
| Scholar       | Curiosity, Order, Independence          |

PROFILE INTERPRETATION NOTES
----------------------------
- Analyzer: Highest motive pattern is Order, Curiosity, Honor. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Controller: Highest motive pattern is Order, Power, Honor. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Specialist: Highest motive pattern is Curiosity, Order, Independence. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Strategist: Highest motive pattern is Power, Curiosity, Independence. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Venturer: Highest motive pattern is Power, Adventure, Independence. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Altruist: Highest motive pattern is Acceptance, Idealism, Social Contact. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Captain: Highest motive pattern is Power, Status, Independence. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Collaborator: Highest motive pattern is Acceptance, Social Contact, Idealism. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Maverick: Highest motive pattern is Independence, Adventure, Curiosity. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Persuader: Highest motive pattern is Social Contact, Status, Power. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Promoter: Highest motive pattern is Social Contact, Status, Adventure. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Adapter: Highest motive pattern is Acceptance, Tranquility, Social Contact. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Craftsman: Highest motive pattern is Order, Honor, Curiosity. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Guardian: Highest motive pattern is Order, Tranquility, Honor. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Operator: Highest motive pattern is Order, Tranquility, Family. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Individualist: Highest motive pattern is Independence, Curiosity, Idealism. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.
- Scholar: Highest motive pattern is Curiosity, Order, Independence. These motives explain what the profile is likely protecting, pursuing, or optimizing at work.


IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- top_motives
- motive_category
- motivational_reward
- demotivator
- coaching_prompt
- role_fit_note

Use this lens for incentive design, manager coaching, retention planning, and motivational language.
`,
  },
  {
    id: "motivational-maps",
    lens: "Motivational Maps",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 16 — Motivational Maps
========================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


LENS PURPOSE
------------
This lens translates each PI profile into Motivational Maps themes. In the source section, Motivational Maps is combined with Reiss Motivation Profile; this file separates the finished Motivational Maps lens into its own txt document.

SOURCE-DERIVED MOTIVATIONAL MAPS PROFILE
----------------------------------------
| Profile       | Motivational Maps Themes                                  |
| ------------- | --------------------------------------------------------- |
| Analyzer      | Expert, Defender (mastery, accuracy, stability)           |
| Controller    | Defender, Builder (control, reliability, process)         |
| Specialist    | Expert (deep mastery, technical recognition)              |
| Strategist    | Builder, Expert (outcome, systems, strategic mastery)     |
| Venturer      | Builder, Creator (impact, challenge, autonomy)            |
| Altruist      | Friend, Spirit (helping, belonging, purpose)              |
| Captain       | Builder, Director (results, leadership, recognition)      |
| Collaborator  | Friend, Star (team harmony, recognition, belonging)       |
| Maverick      | Creator, Star (novelty, disruption, visibility)           |
| Persuader     | Star, Director (influence, recognition, results)          |
| Promoter      | Star, Creator (audience, visibility, spontaneity)         |
| Adapter       | Friend, Searcher (harmony, purpose, flexibility)          |
| Craftsman     | Expert, Defender (craft mastery, standards, reliability)  |
| Guardian      | Defender, Searcher (safety, continuity, meaning)          |
| Operator      | Defender, Builder (process, stability, consistent output) |
| Individualist | Creator, Searcher (authenticity, meaning, originality)    |
| Scholar       | Expert, Searcher (knowledge, truth-seeking, depth)        |

PROFILE INTERPRETATION NOTES
----------------------------
- Analyzer: Motivational Map themes are Expert, Defender (mastery, accuracy, stability). These themes should guide recognition style, work design, and retention messaging.
- Controller: Motivational Map themes are Defender, Builder (control, reliability, process). These themes should guide recognition style, work design, and retention messaging.
- Specialist: Motivational Map themes are Expert (deep mastery, technical recognition). These themes should guide recognition style, work design, and retention messaging.
- Strategist: Motivational Map themes are Builder, Expert (outcome, systems, strategic mastery). These themes should guide recognition style, work design, and retention messaging.
- Venturer: Motivational Map themes are Builder, Creator (impact, challenge, autonomy). These themes should guide recognition style, work design, and retention messaging.
- Altruist: Motivational Map themes are Friend, Spirit (helping, belonging, purpose). These themes should guide recognition style, work design, and retention messaging.
- Captain: Motivational Map themes are Builder, Director (results, leadership, recognition). These themes should guide recognition style, work design, and retention messaging.
- Collaborator: Motivational Map themes are Friend, Star (team harmony, recognition, belonging). These themes should guide recognition style, work design, and retention messaging.
- Maverick: Motivational Map themes are Creator, Star (novelty, disruption, visibility). These themes should guide recognition style, work design, and retention messaging.
- Persuader: Motivational Map themes are Star, Director (influence, recognition, results). These themes should guide recognition style, work design, and retention messaging.
- Promoter: Motivational Map themes are Star, Creator (audience, visibility, spontaneity). These themes should guide recognition style, work design, and retention messaging.
- Adapter: Motivational Map themes are Friend, Searcher (harmony, purpose, flexibility). These themes should guide recognition style, work design, and retention messaging.
- Craftsman: Motivational Map themes are Expert, Defender (craft mastery, standards, reliability). These themes should guide recognition style, work design, and retention messaging.
- Guardian: Motivational Map themes are Defender, Searcher (safety, continuity, meaning). These themes should guide recognition style, work design, and retention messaging.
- Operator: Motivational Map themes are Defender, Builder (process, stability, consistent output). These themes should guide recognition style, work design, and retention messaging.
- Individualist: Motivational Map themes are Creator, Searcher (authenticity, meaning, originality). These themes should guide recognition style, work design, and retention messaging.
- Scholar: Motivational Map themes are Expert, Searcher (knowledge, truth-seeking, depth). These themes should guide recognition style, work design, and retention messaging.


IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- motivational_map_themes
- primary_map_driver
- secondary_map_driver
- recognition_strategy
- management_language
- demotivation_risk

Use this lens for manager-facing motivational guidance and employee experience design.
`,
  },
  {
    id: "trust-and-psychological-safety-lens",
    lens: "Trust and Psychological Safety Lens",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Trust and Psychological Safety Lens
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Trust and Psychological Safety Lens

Primary = Trust posture (Quick trust / Conditional / Slow); Secondary = Safety drivers; Stress = Break pattern.

| Profile | Trust Posture | Safety Driver | Stress |
|---|---|---|---|
| Analyzer | Conditional | Competence signals | Suspicion of motives |
| Controller | Slow | Clear rules, predictability | Withholds trust |
| Specialist | Conditional | Expertise demonstrated | Distrust of generalists |
| Strategist | Conditional | Vision alignment | Cynical of process |
| Venturer | Quick | Autonomy & results | Tests boundaries |
| Altruist | Quick | Warmth and inclusion | Feels betrayed deeply |
| Captain | Quick | Capability & loyalty | Punishes disloyalty |
| Collaborator | Quick | Inclusion and fairness | Withdraws if excluded |
| Maverick | Quick | Freedom to experiment | Distrusts bureaucracy |
| Persuader | Quick | Social proof | Personalizes breaches |
| Promoter | Quick | Recognition | Moves on fast or performs drama |
| Adapter | Conditional | Relational consistency | Over‑adjusts to keep peace |
| Craftsman | Conditional | Quality assurance | Distrusts sloppy work |
| Guardian | Slow | Stability and precedent | Resists new relationships |
| Operator | Conditional | Reliability | Suspends trust when inconsistent |
| Individualist | Conditional | Respect for autonomy | Withdraws when constrained |
| Scholar | Conditional | Evidence and competence | Questions motives rigorously |
`,
  },
  {
    id: "sixteen-personality-factor-16pf-lens",
    lens: "Sixteen Personality Factor (16PF) Lens",
    status: "",
    source: "16PF_Lens.txt",
    content: `
Sixteen Personality Factor (16PF) Lens
======================================

**Overview and theoretical background**

The **16 Personality Factor Questionnaire (16PF)** was developed by
Raymond Cattell to measure normal personality across sixteen primary
dimensions derived from factor analysis.  The questionnaire assesses
traits such as **Warmth**, **Reasoning**, **Emotional Stability**,
**Dominance**, **Liveliness**, **Rule‑Consciousness**, **Social Boldness**,
**Sensitivity**, **Vigilance**, **Abstractness**, **Privateness**,
**Apprehension**, **Openness to Change**, **Self‑Reliance**, **Perfectionism**,
and **Tension**https://www.workinfo.org/index.php/articles/item/1129-16-personality-factor-questionnaire#:~:text=The%2016%20Personality%20Factor%20Questionnaire,reliance%2C%20perfectionism%20and%20tension.  These factors combine into
higher‑order global factors representing Extraversion, Anxiety,
Tough‑Mindedness, Independence and Self‑Control.

Unlike broad trait models like the Big Five, the 16PF provides granular
profiles useful for vocational counseling, personnel selection and clinical
settings.  Scores reflect tendencies, not abilities.

**Selected factors and their interpretations**

- **Dominance** – assertive, competitive individuals vs. compliant,
  cooperative oneshttps://www.workinfo.org/index.php/articles/item/1129-16-personality-factor-questionnaire#:~:text=The%2016%20Personality%20Factor%20Questionnaire,reliance%2C%20perfectionism%20and%20tension.
- **Rule‑Consciousness** – adherence to rules, duty and structure vs.
  expedience and flexibilityhttps://www.workinfo.org/index.php/articles/item/1129-16-personality-factor-questionnaire#:~:text=The%2016%20Personality%20Factor%20Questionnaire,reliance%2C%20perfectionism%20and%20tension.
- **Openness to Change** – preference for innovation and experimentation vs.
  traditionalism and stabilityhttps://www.workinfo.org/index.php/articles/item/1129-16-personality-factor-questionnaire#:~:text=The%2016%20Personality%20Factor%20Questionnaire,reliance%2C%20perfectionism%20and%20tension.
- **Warmth & Sensitivity** – empathy, supportive behaviour and social
  considerationhttps://www.workinfo.org/index.php/articles/item/1129-16-personality-factor-questionnaire#:~:text=The%2016%20Personality%20Factor%20Questionnaire,reliance%2C%20perfectionism%20and%20tension.
- **Perfectionism** – desire for order and detail vs. casualnesshttps://www.workinfo.org/index.php/articles/item/1129-16-personality-factor-questionnaire#:~:text=The%2016%20Personality%20Factor%20Questionnaire,reliance%2C%20perfectionism%20and%20tension.
- **Social Boldness** – confidence and risk‑taking in social contexts vs.
  shynesshttps://www.workinfo.org/index.php/articles/item/1129-16-personality-factor-questionnaire#:~:text=The%2016%20Personality%20Factor%20Questionnaire,reliance%2C%20perfectionism%20and%20tension.

**Cross‑framework translation with PI profiles**

Given the 16PF’s breadth, this lens focuses on five clusters relevant to
workplace behavior: **Assertiveness** (Dominance), **Structure**
(Rule‑Consciousness & Perfectionism), **Change Orientation** (Openness to
Change), **Warmth** (Warmth & Sensitivity) and **Social Boldness**.
Approximate patterns are summarized below.  “Trait profile” lists
perceived tendencies; “Strengths” highlight contributions; “Watchouts”
identify potential pitfalls.

| PI profile | Trait profile (16PF clusters) | Strengths | Watchouts |
|---|---|---|---|
| **Analyzer** | High Structure (rule‑conscious, perfectionistic); Moderate Assertiveness; Low Change Orientation; Low Social Boldness; Moderate Warmth. | Delivers accuracy and reliability; upholds standards. | Risk of rigidity, reluctance to adopt new methods, or limited social outreach. |
| **Controller** | High Assertiveness; High Structure; Moderate Change Orientation; Low Warmth; Moderate Social Boldness. | Drives execution and enforces accountability. | May appear domineering or unsympathetic; could resist unconventional ideas. |
| **Specialist** | High Structure; Low Assertiveness; Low Change Orientation; Moderate Warmth; Low Social Boldness. | Focuses on detail and quality; supports team through consistency. | May struggle with assertiveness and adaptation; needs encouragement to share ideas. |
| **Strategist** | High Assertiveness; High Change Orientation; High Structure; Low Warmth; Moderate Social Boldness. | Synthesizes complex information; pushes innovation. | Can be critical or impatient; might overlook relational needs. |
| **Venturer** | High Assertiveness; High Change Orientation; Low Structure; Low Warmth; High Social Boldness. | Pursues opportunities boldly; inspires action. | May neglect details or processes; risk of overconfidence or conflict. |
| **Individualist** | Moderate Assertiveness; High Change Orientation; Moderate Structure; Low Warmth; Low Social Boldness. | Independent, creative problem solver. | Could seem detached; may resist collaboration or procedural constraints. |
| **Scholar** | High Structure; Low Assertiveness; High Change Orientation; High Warmth; Low Social Boldness. | Combines precision with imagination; supportive in one‑on‑one interactions. | May delay decisions; needs encouragement to express views. |
| **Altruist** | Low Assertiveness; Moderate Structure; Low Change Orientation; High Warmth; Moderate Social Boldness. | Provides empathy and stability; builds trust. | Could avoid necessary conflict; might resist changes that disrupt harmony. |
| **Captain** | High Assertiveness; Moderate Structure; High Change Orientation; Moderate Warmth; High Social Boldness. | Leads confidently toward new goals; motivates others. | Risk of overextension or impatience; needs to temper boldness with details. |
| **Collaborator** | Low Assertiveness; Low Structure; Moderate Change Orientation; High Warmth; Moderate Social Boldness. | Encourages participation and consensus; adapts to others. | May lack direction or firmness; requires support to maintain focus and deadlines. |
| **Maverick** | High Assertiveness; Low Structure; High Change Orientation; Low Warmth; High Social Boldness. | Challenges status quo; innovates fearlessly. | Can disrupt processes or alienate those seeking stability. |
| **Persuader** | High Assertiveness; Low Structure; High Change Orientation; Moderate Warmth; High Social Boldness. | Energizes and influences others; embraces change. | May lack follow‑through and overcommit; needs to integrate structure. |
| **Promoter** | Low Assertiveness; Low Structure; High Change Orientation; High Warmth; High Social Boldness. | Builds networks; promotes ideas enthusiastically. | Could neglect detail and consistency; may appear superficial without depth. |
| **Adapter** | Moderate Assertiveness; Moderate Structure; Moderate Change Orientation; High Warmth; Moderate Social Boldness. | Flexible, diplomatic and supportive. | May lack a strong stance; risk of over‑accommodating; needs clear priorities. |
| **Artisan** | Moderate Assertiveness; High Structure; High Change Orientation; Moderate Warmth; Low Social Boldness. | Crafts high‑quality solutions; adapts creatively. | May hesitate to promote ideas; should socialize innovations early. |
| **Guardian** | Low Assertiveness; High Structure; Low Change Orientation; High Warmth; Low Social Boldness. | Creates stability and reliability; empathetic teammate. | Could resist innovation; needs to step out of comfort zone to advocate for needs. |
| **Operator** | Low Assertiveness; Moderate Structure; Low Change Orientation; High Warmth; Low Social Boldness. | Patient, cooperative and steady. | May require guidance to take initiative; should be encouraged to share input and embrace growth. |

**Practical implications**

The 16PF lens provides a nuanced view of personality beyond broad trait
models.  It helps explain why two profiles with similar levels of
Conscientiousness (Analyzer and Specialist) may differ in Assertiveness or
Change Orientation.  Managers can use this lens to tailor support—giving
Venturers and Mavericks procedural partners to balance their
low‑Structure tendencies, or encouraging Guardians and Specialists to
experiment gradually with new methods.  Recognizing Warmth levels can
inform feedback approaches: high‑Warmth profiles may appreciate
affirmation, while low‑Warmth profiles might prefer concise, direct
information.  Overall, this lens enriches the PI crosswalk by adding
behavioral depth to development conversations.
`,
  },
  {
    id: "eq-i-20-emotional-intelligence",
    lens: "EQ-i 2.0 Emotional Intelligence",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 17 — EQ-i 2.0 Emotional Intelligence
======================================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


LENS PURPOSE
------------
This lens captures EQ-i 2.0-style emotional intelligence strengths and risks per PI profile. In the source, EQ-i 2.0 is combined with MSCEIT and Social Styles; this file separates EQ-i into its own finalized lens.

SOURCE-DERIVED EQ-i MAP
-----------------------
| Profile       | EQ-i 2.0 Strengths                   | EQ-i 2.0 Risks                      |
| ------------- | ------------------------------------ | ----------------------------------- |
| Analyzer      | Problem Solving, Reality Testing     | Emotional Expression, Interpersonal |
| Controller    | Impulse Control, Reality Testing     | Flexibility, Empathy                |
| Specialist    | Reality Testing, Problem Solving     | Social Responsibility, Empathy      |
| Strategist    | Problem Solving, Self-Regard         | Empathy, Emotional Expression       |
| Venturer      | Stress Tolerance, Flexibility        | Impulse Control, Empathy            |
| Altruist      | Empathy, Interpersonal               | Self-Regard, Assertiveness          |
| Captain       | Self-Actualization, Independence     | Empathy, Emotional Expression       |
| Collaborator  | Empathy, Interpersonal               | Assertiveness, Self-Regard          |
| Maverick      | Flexibility, Stress Tolerance        | Impulse Control, Empathy            |
| Persuader     | Social Responsibility, Interpersonal | Reality Testing under pressure      |
| Promoter      | Interpersonal, Flexibility           | Impulse Control, Reality Testing    |
| Adapter       | Empathy, Flexibility                 | Self-Regard, Assertiveness          |
| Craftsman     | Impulse Control, Reality Testing     | Social Responsibility, Empathy      |
| Guardian      | Impulse Control, Self-Regard         | Flexibility, Assertiveness          |
| Operator      | Impulse Control, Stress Tolerance    | Emotional Expression, Empathy       |
| Individualist | Self-Actualization, Independence     | Social Responsibility, Empathy      |
| Scholar       | Reality Testing, Problem Solving     | Social Responsibility, Empathy      |

PROFILE INTERPRETATION NOTES
----------------------------
- Analyzer: EQ strengths are Problem Solving, Reality Testing; watchouts are Emotional Expression, Interpersonal.
- Controller: EQ strengths are Impulse Control, Reality Testing; watchouts are Flexibility, Empathy.
- Specialist: EQ strengths are Reality Testing, Problem Solving; watchouts are Social Responsibility, Empathy.
- Strategist: EQ strengths are Problem Solving, Self-Regard; watchouts are Empathy, Emotional Expression.
- Venturer: EQ strengths are Stress Tolerance, Flexibility; watchouts are Impulse Control, Empathy.
- Altruist: EQ strengths are Empathy, Interpersonal; watchouts are Self-Regard, Assertiveness.
- Captain: EQ strengths are Self-Actualization, Independence; watchouts are Empathy, Emotional Expression.
- Collaborator: EQ strengths are Empathy, Interpersonal; watchouts are Assertiveness, Self-Regard.
- Maverick: EQ strengths are Flexibility, Stress Tolerance; watchouts are Impulse Control, Empathy.
- Persuader: EQ strengths are Social Responsibility, Interpersonal; watchouts are Reality Testing under pressure.
- Promoter: EQ strengths are Interpersonal, Flexibility; watchouts are Impulse Control, Reality Testing.
- Adapter: EQ strengths are Empathy, Flexibility; watchouts are Self-Regard, Assertiveness.
- Craftsman: EQ strengths are Impulse Control, Reality Testing; watchouts are Social Responsibility, Empathy.
- Guardian: EQ strengths are Impulse Control, Self-Regard; watchouts are Flexibility, Assertiveness.
- Operator: EQ strengths are Impulse Control, Stress Tolerance; watchouts are Emotional Expression, Empathy.
- Individualist: EQ strengths are Self-Actualization, Independence; watchouts are Social Responsibility, Empathy.
- Scholar: EQ strengths are Reality Testing, Problem Solving; watchouts are Social Responsibility, Empathy.


IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- eq_strengths
- eq_risks
- emotional_self_management_note
- interpersonal_effectiveness_note
- coaching_focus
- stress_response_note

Use this lens for emotional-development coaching, manager guidance, and collaboration risk analysis.
`,
  },
  {
    id: "relational-needs-firo-b-lens",
    lens: "Relational Needs FIRO-B Lens",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Relational Needs FIRO-B Lens
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Relational Needs FIRO‑B Lens

Primary = Inclusion / Control / Affection emphasis; Secondary = typical expression; Stress = unmet‑need behavior.

| Profile | Primary Need | Typical Expression | Stress |
|---|---|---|---|
| Analyzer | Control | Seeks clarity, boundaries | Withdraws or micromanages |
| Controller | Control | Direct leadership, rules | Domineering when unmet |
| Specialist | Inclusion (low) | Works independently | Isolation, guardedness |
| Strategist | Control | Strategic influence | Frustration with limits |
| Venturer | Inclusion | Seeks opportunities, visibility | Impulsive risk taking |
| Altruist | Affection | Supportive, relational | Over‑giving, hurt feelings |
| Captain | Control | Command presence | Aggressive when blocked |
| Collaborator | Inclusion | Builds teams, invites input | Feels excluded, withdraws |
| Maverick | Inclusion | Wants recognition for ideas | Provokes to be noticed |
| Persuader | Affection | Socially engaging, warm | Takes rejection personally |
| Promoter | Inclusion | Public energy, networking | Over‑promises to belong |
| Adapter | Affection | Nurtures relationships | Over‑adjusts to fit in |
| Craftsman | Control | Standards and ownership | Perfectionism when ignored |
| Guardian | Control | Protects group norms | Resistant to change |
| Operator | Control | Executes reliably | Frustrated by ambiguity |
| Individualist | Affection (low) | Values autonomy | Withdraws from forced intimacy |
| Scholar | Control | Seeks intellectual recognition | Retreats into analysis |
`,
  },
  {
    id: "metacognition",
    lens: "Metacognition",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Metacognition
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Metacognition

| Profile | Primary | Secondary | Stress | Link |
|---|---|---|---|---|
| Analyzer | Self‑monitoring | Strategy planning | Ruminates on errors | ca://s?q=Analyzer_Metacognition |
| Controller | Goal‑tracking | Rule‑checking | Blames process gaps | ca://s?q=Controller_Metacognition |
| Specialist | Domain reflection | Error detection | Tunnel‑vision on details | ca://s?q=Specialist_Metacognition |
| Strategist | Meta‑planning | Scenario evaluation | Over‑theorizes options | ca://s?q=Strategist_Metacognition |
| Venturer | Rapid heuristics | Quick reframe | Skips reflection, repeats mistakes | ca://s?q=Venturer_Metacognition |
| Altruist | Relational reflection | Perspective check | Over‑focus on others’ feelings | ca://s?q=Altruist_Metacognition |
| Captain | Outcome monitoring | Tactical adjustment | Dismisses feedback quickly | ca://s?q=Captain_Metacognition |
| Collaborator | Shared reflection | Consensus calibration | Avoids hard self‑critique | ca://s?q=Collaborator_Metacognition |
| Maverick | Idea scanning | Pattern spotting | Jumps without review | ca://s?q=Maverick_Metacognition |
| Persuader | Audience tuning | Message testing | Confuses signal with applause | ca://s?q=Persuader_Metacognition |
| Promoter | Rapid feedback loop | Social proof check | Over‑reliant on praise | ca://s?q=Promoter_Metacognition |
| Adapter | Context scanning | Flexible replanning | Over‑adjusts to others | ca://s?q=Adapter_Metacognition |
| Craftsman | Quality review | Stepwise correction | Paralysis over small flaws | ca://s?q=Craftsman_Metacognition |
| Guardian | Risk appraisal | Contingency planning | Fixates on worst case | ca://s?q=Guardian_Metacognition |
| Operator | Process audit | Checklists & routines | Ignores novel signals | ca://s?q=Operator_Metacognition |
| Individualist | Identity reflection | Concept testing | Withdraws into private review | ca://s?q=Individualist_Metacognition |
| Scholar | Meta‑analysis | Hypothesis testing | Endless re‑validation | ca://s?q=Scholar_Metacognition |
`,
  },
  {
    id: "msceit-ability-based-eq",
    lens: "MSCEIT Ability-Based EQ",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 18 — MSCEIT Ability-Based EQ
==============================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


LENS PURPOSE
------------
MSCEIT focuses on ability-based emotional reasoning: perceiving, using, understanding, and managing emotions. The source provides a profile-level MSCEIT signal as part of the combined emotional/interpersonal section; this file separates it into its own lens.

SOURCE-DERIVED MSCEIT SIGNALS
-----------------------------
| Profile       | MSCEIT Signal                                                          |
| ------------- | ---------------------------------------------------------------------- |
| Analyzer      | Understands emotional logic when explicit; weaker at subtle signals    |
| Controller    | Applies rules to emotional situations; rigid in novel contexts         |
| Specialist    | Reads task-relevant emotions; struggles with relational ambiguity      |
| Strategist    | Strong at reading strategic intent; weaker at warmth cues              |
| Venturer      | Reads opportunities and energy; may miss anxiety signals               |
| Altruist      | Strong emotional reading of others; may absorb others' emotions        |
| Captain       | Reads competitive dynamics well; may miss subtle distress              |
| Collaborator  | High relational EQ; may suppress negative emotion                      |
| Maverick      | Creative emotional association; may miss social norms                  |
| Persuader     | Strong audience reading; may use emotion strategically                 |
| Promoter      | Reads social energy; may amplify emotions for effect                   |
| Adapter       | Strong contextual EQ; reads shifting needs well                        |
| Craftsman     | Task-focused emotional processing; limited range                       |
| Guardian      | Steady emotional management; low tolerance for ambiguity               |
| Operator      | Consistent and calm; limited insight into others' emotional complexity |
| Individualist | Rich internal EQ; may struggle to express or modulate socially         |
| Scholar       | Deep analytical EQ; processes emotion through logic                    |

PROFILE INTERPRETATION NOTES
----------------------------
- Analyzer: Understands emotional logic when explicit; weaker at subtle signals
- Controller: Applies rules to emotional situations; rigid in novel contexts
- Specialist: Reads task-relevant emotions; struggles with relational ambiguity
- Strategist: Strong at reading strategic intent; weaker at warmth cues
- Venturer: Reads opportunities and energy; may miss anxiety signals
- Altruist: Strong emotional reading of others; may absorb others' emotions
- Captain: Reads competitive dynamics well; may miss subtle distress
- Collaborator: High relational EQ; may suppress negative emotion
- Maverick: Creative emotional association; may miss social norms
- Persuader: Strong audience reading; may use emotion strategically
- Promoter: Reads social energy; may amplify emotions for effect
- Adapter: Strong contextual EQ; reads shifting needs well
- Craftsman: Task-focused emotional processing; limited range
- Guardian: Steady emotional management; low tolerance for ambiguity
- Operator: Consistent and calm; limited insight into others' emotional complexity
- Individualist: Rich internal EQ; may struggle to express or modulate socially
- Scholar: Deep analytical EQ; processes emotion through logic


IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- ability_eq_signal
- emotion_perception_note
- emotion_understanding_note
- emotion_management_note
- likely_blindspot
- coaching_prompt

Use this lens to explain emotional reasoning style rather than warmth or personality alone.
`,
  },
  {
    id: "cognitive-flexibility-lens",
    lens: "Cognitive Flexibility Lens",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Cognitive Flexibility Lens
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Cognitive Flexibility Lens

| Profile | Primary | Secondary | Stress | Link |
|---|---|---|---|---|
| Analyzer | Rule‑based switching | Scenario reframe | Slow to pivot | ca://s?q=Analyzer_Cognitive_Flexibility |
| Controller | Structured adaptation | Contingency switching | Resists novel paths | ca://s?q=Controller_Cognitive_Flexibility |
| Specialist | Contextual tweak | Method substitution | Sticks to known tools | ca://s?q=Specialist_Cognitive_Flexibility |
| Strategist | High flexibility | Multi‑scenario thinking | Overcomplicates pivots | ca://s?q=Strategist_Cognitive_Flexibility |
| Venturer | Rapid pivoting | Opportunistic shifts | Chaotic switching | ca://s?q=Venturer_Cognitive_Flexibility |
| Altruist | Relational adaptation | Role shifting | Over‑accommodates changes | ca://s?q=Altruist_Cognitive_Flexibility |
| Captain | Directive pivot | Fast course correction | Forces change without buy‑in | ca://s?q=Captain_Cognitive_Flexibility |
| Collaborator | Consensus pivot | Group recalibration | Delays to preserve harmony | ca://s?q=Collaborator_Cognitive_Flexibility |
| Maverick | Creative switching | Radical reframing | Disrupts continuity | ca://s?q=Maverick_Cognitive_Flexibility |
| Persuader | Socially adaptive | Message reframing | Chases trends, loses depth | ca://s?q=Persuader_Cognitive_Flexibility |
| Promoter | Energetic pivot | Rapid rebranding | Surface‑level shifts only | ca://s?q=Promoter_Cognitive_Flexibility |
| Adapter | Situational switching | Role blending | Over‑adjusts identity | ca://s?q=Adapter_Cognitive_Flexibility |
| Craftsman | Methodical tweak | Process refinement | Slow to accept new methods | ca://s?q=Craftsman_Cognitive_Flexibility |
| Guardian | Cautious shift | Protocol adaptation | Blocks change until proven | ca://s?q=Guardian_Cognitive_Flexibility |
| Operator | Operational pivot | Workflow reroute | Rigid under ambiguity | ca://s?q=Operator_Cognitive_Flexibility |
| Individualist | Conceptual pivot | Personal reframing | Withdraws when forced | ca://s?q=Individualist_Cognitive_Flexibility |
| Scholar | Analytic switching | Theory rework | Over‑tests alternatives | ca://s?q=Scholar_Cognitive_Flexibility |
`,
  },
  {
    id: "social-styles",
    lens: "Social Styles",
    status: "Finished / Done",
    source: "SignalGlass \u2014 Extracted Results",
    content: `SignalGlass Lens 19 — Social Styles
===================================

Source status: Finished / Done
Source document: SignalGlass — Extracted Results

Duplicate handling applied from the source document:
- Hogan HDS (Derailers) appeared in both the Personality section and Leadership section; it is kept once as a completed leadership/derailer lens.
- “Lived experiences” appeared separately but duplicated Lived Experience Context Lens; it is not exported as a finished lens because the source marks that lens as not done.
- Workplace Big Five Pro appeared twice with conflicting status; it is not exported as a finished lens because the source says only OCEAN-level mapping was partially applied and Pro-specific facets were not completed.

Translation methodology preserved from the source document:
- PI inputs used: Dominance, Extraversion, Patience, and Formality.
- Shared-construct translation: similar constructs are mapped across frameworks where conceptually aligned.
- Known correlations: for example, high Formality and Patience support Conscientiousness-like interpretations; Dominance supports agency/assertiveness interpretations.
- Qualitative PI profile descriptors are used as supporting evidence, such as risk-taking, cautious, innovative, perfectionistic, supportive, or process-oriented.
- Outputs are non-diagnostic. They should be read as “this PI profile pattern is consistent with…” rather than as clinical, medical, or definitive personality diagnoses.


LENS PURPOSE
------------
This lens translates PI profile patterns into Social Styles language: Driver, Analytical, Amiable, and Expressive. The source provides a social style for each profile in the combined EQ/MSCEIT/Social Styles section; this file separates Social Styles into its own finalized lens.

SOURCE-DERIVED SOCIAL STYLES MAP
--------------------------------
| Profile       | Social Style        |
| ------------- | ------------------- |
| Analyzer      | Analytical          |
| Controller    | Analytical / Driver |
| Specialist    | Analytical          |
| Strategist    | Driver              |
| Venturer      | Driver              |
| Altruist      | Amiable             |
| Captain       | Driver              |
| Collaborator  | Amiable             |
| Maverick      | Expressive          |
| Persuader     | Expressive          |
| Promoter      | Expressive          |
| Adapter       | Amiable             |
| Craftsman     | Analytical          |
| Guardian      | Amiable             |
| Operator      | Analytical          |
| Individualist | Expressive          |
| Scholar       | Analytical          |

PROFILE INTERPRETATION NOTES
----------------------------
- Analyzer: Analytical. This suggests the profile is careful, evidence-oriented, precise, and likely to prefer structured information.
- Controller: Analytical / Driver. This suggests the profile is direct, outcome-oriented, decisive, and likely to prefer efficient action.
- Specialist: Analytical. This suggests the profile is careful, evidence-oriented, precise, and likely to prefer structured information.
- Strategist: Driver. This suggests the profile is direct, outcome-oriented, decisive, and likely to prefer efficient action.
- Venturer: Driver. This suggests the profile is direct, outcome-oriented, decisive, and likely to prefer efficient action.
- Altruist: Amiable. This suggests the profile is supportive, relationship-oriented, cooperative, and likely to protect harmony.
- Captain: Driver. This suggests the profile is direct, outcome-oriented, decisive, and likely to prefer efficient action.
- Collaborator: Amiable. This suggests the profile is supportive, relationship-oriented, cooperative, and likely to protect harmony.
- Maverick: Expressive. This suggests the profile is energetic, persuasive, visible, and likely to prefer interactive communication.
- Persuader: Expressive. This suggests the profile is energetic, persuasive, visible, and likely to prefer interactive communication.
- Promoter: Expressive. This suggests the profile is energetic, persuasive, visible, and likely to prefer interactive communication.
- Adapter: Amiable. This suggests the profile is supportive, relationship-oriented, cooperative, and likely to protect harmony.
- Craftsman: Analytical. This suggests the profile is careful, evidence-oriented, precise, and likely to prefer structured information.
- Guardian: Amiable. This suggests the profile is supportive, relationship-oriented, cooperative, and likely to protect harmony.
- Operator: Analytical. This suggests the profile is careful, evidence-oriented, precise, and likely to prefer structured information.
- Individualist: Expressive. This suggests the profile is energetic, persuasive, visible, and likely to prefer interactive communication.
- Scholar: Analytical. This suggests the profile is careful, evidence-oriented, precise, and likely to prefer structured information.


IMPLEMENTATION NOTES
--------------------
Recommended SignalGlass UI fields:
- social_style
- communication_preference
- meeting_preference
- likely_conflict_style
- manager_tip
- collaboration_tip

Use this lens for quick manager-facing communication guidance and team interaction design.
`,
  },
  {
    id: "cognitive-load--working-style",
    lens: "Cognitive Load & Working Style",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Cognitive Load & Working Style
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Cognitive Load & Working Style

| Profile | Working Style | Load Tolerance | Stress | Link |
|---|---|---|---|---|
| Analyzer | Deep, single‑task focus | High for focused tasks | Overloaded by multitask | ca://s?q=Analyzer_Cognitive_Load |
| Controller | Structured, scheduled blocks | High with clear rules | Overwhelmed by ambiguity | ca://s?q=Controller_Cognitive_Load |
| Specialist | Intensive domain focus | Very high in niche tasks | Cognitive bottleneck outside domain | ca://s?q=Specialist_Cognitive_Load |
| Strategist | Parallel scenario juggling | Moderate‑High | Fatigues on execution detail | ca://s?q=Strategist_Cognitive_Load |
| Venturer | Rapid bursts, short cycles | Low for sustained load | Burns out on long tasks | ca://s?q=Venturer_Cognitive_Load |
| Altruist | Socially distributed work | Moderate | Drains when isolated | ca://s?q=Altruist_Cognitive_Load |
| Captain | High‑intensity bursts | Moderate‑High | Frustrated by slow pace | ca://s?q=Captain_Cognitive_Load |
| Collaborator | Shared workload, iterative | Moderate | Overloaded by conflict | ca://s?q=Collaborator_Cognitive_Load |
| Maverick | Idea‑heavy, low follow‑through | Low for routine load | Distracted by detail work | ca://s?q=Maverick_Cognitive_Load |
| Persuader | Social multitasking | Moderate | Cognitive noise reduces clarity | ca://s?q=Persuader_Cognitive_Load |
| Promoter | High‑energy, short focus | Low | Rapid fatigue on deep work | ca://s?q=Promoter_Cognitive_Load |
| Adapter | Flexible, context‑sensitive | Moderate | Overloaded by competing demands | ca://s?q=Adapter_Cognitive_Load |
| Craftsman | Stepwise, quality‑driven | High for repetitive precision | Slows when interrupted | ca://s?q=Craftsman_Cognitive_Load |
| Guardian | Predictable, low variance | High for routine | Stress when novelty increases | ca://s?q=Guardian_Cognitive_Load |
| Operator | Process‑oriented throughput | High for steady tasks | Disrupted by chaos | ca://s?q=Operator_Cognitive_Load |
| Individualist | Deep conceptual focus | Moderate | Loses momentum under micromanage | ca://s?q=Individualist_Cognitive_Load |
| Scholar | Intensive analytic processing | Very High for research | Paralysis when forced to act fast | ca://s?q=Scholar_Cognitive_Load |
`,
  },
  {
    id: "schwartz-values-inventory-workplace-mapping",
    lens: "Schwartz Values Inventory (Workplace Mapping)",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Schwartz Values Inventory (Workplace Mapping)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Schwartz Values Inventory (Workplace Mapping)

| Profile | Top Value(s) | Work Expression | Stress | Link |
|---|---|---|---|---|
| Analyzer | Conformity; Security | Rules, accuracy, reliability | Frustrated by ambiguity | ca://s?q=Analyzer_Schwartz_Values |
| Controller | Security; Power | Control, governance, order | Resists loss of authority | ca://s?q=Controller_Schwartz_Values |
| Specialist | Achievement; Security | Mastery, competence, standards | Threatened by incompetence | ca://s?q=Specialist_Schwartz_Values |
| Strategist | Self‑direction; Achievement | Vision, autonomy, impact | Stifled by bureaucracy | ca://s?q=Strategist_Schwartz_Values |
| Venturer | Stimulation; Self‑direction | Risk, novelty, autonomy | Chafes under rules | ca://s?q=Venturer_Schwartz_Values |
| Altruist | Benevolence; Universalism | Helping, team cohesion | Hurt by exclusion | ca://s?q=Altruist_Schwartz_Values |
| Captain | Power; Achievement | Lead, deliver, influence | Reacts to disloyalty | ca://s?q=Captain_Schwartz_Values |
| Collaborator | Benevolence; Tradition | Teamwork, fairness | Distressed by conflict | ca://s?q=Collaborator_Schwartz_Values |
| Maverick | Stimulation; Self‑direction | Disruption, novelty | Frustrated by constraints | ca://s?q=Maverick_Schwartz_Values |
| Persuader | Self‑direction; Stimulation | Influence, visibility | Sensitive to rejection | ca://s?q=Persuader_Schwartz_Values |
| Promoter | Stimulation; Hedonism | Energy, visibility, excitement | Moves on after slights | ca://s?q=Promoter_Schwartz_Values |
| Adapter | Benevolence; Conformity | Fit in, support, adapt | Over‑extends to belong | ca://s?q=Adapter_Schwartz_Values |
| Craftsman | Conformity; Achievement | Quality, standards, craft | Distressed by sloppy work | ca://s?q=Craftsman_Schwartz_Values |
| Guardian | Security; Tradition | Preserve systems, continuity | Resists rapid change | ca://s?q=Guardian_Schwartz_Values |
| Operator | Conformity; Security | Reliable execution, order | Frustrated by chaos | ca://s?q=Operator_Schwartz_Values |
| Individualist | Self‑direction; Stimulation | Autonomy, originality | Withdraws under control | ca://s?q=Individualist_Schwartz_Values |
| Scholar | Self‑direction; Universalism | Knowledge, rigor, truth | Overwhelmed by triviality | ca://s?q=Scholar_Schwartz_Values |
`,
  },
  {
    id: "strength-deployment-inventory-sdi",
    lens: "Strength Deployment Inventory (SDI)",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Strength Deployment Inventory (SDI)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Strength Deployment Inventory (SDI)

| Profile | Primary Motive (SDI) | Secondary Motive | Stress Pattern | Link |
|---|---|---|---|---|
| Analyzer | Task‑oriented (Blue) | Avoids interpersonal focus | Withdraws into critique | ca://s?q=Analyzer_SDI |
| Controller | Task‑oriented (Blue) | Power/assertion under stress | Becomes controlling, punitive | ca://s?q=Controller_SDI |
| Specialist | Task‑oriented (Blue) | Competence validation | Withdraws, defends expertise | ca://s?q=Specialist_SDI |
| Strategist | Task‑oriented (Blue) | Vision‑driven (move to Red when pressed) | Over‑asserts logic, steamrolls | ca://s?q=Strategist_SDI |
| Venturer | Self‑oriented (Red) | Task‑driven opportunism | Impulsive, challenges others | ca://s?q=Venturer_SDI |
| Altruist | People‑oriented (Green) | Harmonizing with tasks | Over‑accommodates, pleases | ca://s?q=Altruist_SDI |
| Captain | Self‑oriented (Red) | Task focus for results | Dominates, demands loyalty | ca://s?q=Captain_SDI |
| Collaborator | People‑oriented (Green) | Consensus facilitation | Avoids conflict, over‑yields | ca://s?q=Collaborator_SDI |
| Maverick | Self‑oriented (Red) | Creative task focus | Provokes to test limits | ca://s?q=Maverick_SDI |
| Persuader | People‑oriented (Green) | Influence for outcomes | Personalizes feedback, emotional | ca://s?q=Persuader_SDI |
| Promoter | Self‑oriented (Red) | Social activation | Over‑promises, dramatic reactions | ca://s?q=Promoter_SDI |
| Adapter | People‑oriented (Green) | Flexible task support | Over‑adjusts to keep peace | ca://s?q=Adapter_SDI |
| Craftsman | Task‑oriented (Blue) | Quality preservation | Perfectionism, withdraws | ca://s?q=Craftsman_SDI |
| Guardian | Task‑oriented (Blue) | Protect group norms | Defensive, resists change | ca://s?q=Guardian_SDI |
| Operator | Task‑oriented (Blue) | Reliability focus | Rigid enforcement of process | ca://s?q=Operator_SDI |
| Individualist | Self‑oriented (Red) | Autonomy first | Detaches, challenges constraints | ca://s?q=Individualist_SDI |
| Scholar | Task‑oriented (Blue) | Truth/accuracy drive | Over‑analysis, slow to act | ca://s?q=Scholar_SDI |
`,
  },
  {
    id: "spiral-dynamics-graves-values-workplace-mapping",
    lens: "Spiral Dynamics / Graves Values (Workplace Mapping)",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Spiral Dynamics / Graves Values (Workplace Mapping)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Spiral Dynamics / Graves Values (Workplace Mapping)

| Profile | Primary Value Tier | Work Expression | Stress Shift | Link |
|---|---|---|---|---|
| Analyzer | Blue (Order) | Rules, predictability, competence | Tightens rules under threat | ca://s?q=Analyzer_Spiral_Dynamics |
| Controller | Blue (Order) | Governance, hierarchy | Becomes more authoritarian | ca://s?q=Controller_Spiral_Dynamics |
| Specialist | Blue → Orange | Expertise, measurable achievement | Retreats to technical silo | ca://s?q=Specialist_Spiral_Dynamics |
| Strategist | Yellow / Turquoise (Integrative) | Systems thinking, purpose | Over‑complex framing under pressure | ca://s?q=Strategist_Spiral_Dynamics |
| Venturer | Orange → Red | Competitive, entrepreneurial | Escalates risk‑taking when stressed | ca://s?q=Venturer_Spiral_Dynamics |
| Altruist | Green | Community, fairness, care | Over‑sacrifices when threatened | ca://s?q=Altruist_Spiral_Dynamics |
| Captain | Red → Orange | Command, results | More forceful, less collaborative | ca://s?q=Captain_Spiral_Dynamics |
| Collaborator | Green | Team cohesion, inclusion | Withdraws if excluded | ca://s?q=Collaborator_Spiral_Dynamics |
| Maverick | Yellow / Orange | Novelty, challenge norms | Provokes chaos under constraint | ca://s?q=Maverick_Spiral_Dynamics |
| Persuader | Orange → Green | Influence, social leverage | Personalizes setbacks | ca://s?q=Persuader_Spiral_Dynamics |
| Promoter | Red → Orange | Visibility, activation | Seeks new stage after rejection | ca://s?q=Promoter_Spiral_Dynamics |
| Adapter | Green → Blue | Fit‑in, pragmatic support | Over‑adjusts to group norms | ca://s?q=Adapter_Spiral_Dynamics |
| Craftsman | Blue | Craft, standards, duty | Tightens standards, delays delivery | ca://s?q=Craftsman_Spiral_Dynamics |
| Guardian | Blue | Preservation, continuity | Strong resistance to change | ca://s?q=Guardian_Spiral_Dynamics |
| Operator | Blue | Reliability, process | Becomes procedural and blunt | ca://s?q=Operator_Spiral_Dynamics |
| Individualist | Yellow / Orange | Autonomy, uniqueness | Withdraws into idiosyncrasy | ca://s?q=Individualist_Spiral_Dynamics |
| Scholar | Yellow / Blue | Knowledge, systems | Over‑refines models, delays action | ca://s?q=Scholar_Spiral_Dynamics |
`,
  },
  {
    id: "work-values-inventory-practical-workplace-priorities",
    lens: "Work Values Inventory (practical workplace priorities)",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Work Values Inventory (practical workplace priorities)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Work Values Inventory (practical workplace priorities)

| Profile | Top Work Value(s) | How It Shows Up at Work | When Frustrated | Link |
|---|---|---|---|---|
| Analyzer | Accuracy, Security | Detailed procedures, low error tolerance | Blames ambiguity | ca://s?q=Analyzer_Work_Values |
| Controller | Authority, Order | Clear roles, enforcement | Tightens control, punitive | ca://s?q=Controller_Work_Values |
| Specialist | Mastery, Competence | Deep technical ownership | Withdraws from non‑expert tasks | ca://s?q=Specialist_Work_Values |
| Strategist | Autonomy, Impact | Big‑picture projects, ownership | Frustrated by bureaucracy | ca://s?q=Strategist_Work_Values |
| Venturer | Autonomy, Stimulation | Fast experiments, risk projects | Breaks rules, seeks new outlets | ca://s?q=Venturer_Work_Values |
| Altruist | Relatedness, Service | Mentoring, team support | Takes criticism personally | ca://s?q=Altruist_Work_Values |
| Captain | Achievement, Power | Leads, drives outcomes | Reacts strongly to disloyalty | ca://s?q=Captain_Work_Values |
| Collaborator | Cooperation, Fairness | Facilitates, mediates | Withdraws if excluded | ca://s?q=Collaborator_Work_Values |
| Maverick | Creativity, Freedom | Breaks molds, ideates | Provokes to regain autonomy | ca://s?q=Maverick_Work_Values |
| Persuader | Recognition, Influence | Networking, selling ideas | Over‑emotional when ignored | ca://s?q=Persuader_Work_Values |
| Promoter | Excitement, Visibility | Events, launches, hype | Moves on quickly after slights | ca://s?q=Promoter_Work_Values |
| Adapter | Belonging, Flexibility | Bridges teams, adapts roles | Over‑extends to fit in | ca://s?q=Adapter_Work_Values |
| Craftsman | Quality, Pride | High standards, craftsmanship | Paralysis when standards threatened | ca://s?q=Craftsman_Work_Values |
| Guardian | Stability, Tradition | Protects processes, history | Resists rapid change | ca://s?q=Guardian_Work_Values |
| Operator | Reliability, Orderliness | Executes, maintains systems | Frustrated by chaos | ca://s?q=Operator_Work_Values |
| Individualist | Autonomy, Originality | Independent projects, unique solutions | Withdraws under micromanage | ca://s?q=Individualist_Work_Values |
| Scholar | Knowledge, Truth | Research, evidence, rigor | Disengages from trivial tasks | ca://s?q=Scholar_Work_Values |
`,
  },
  {
    id: "purpose--meaning-lens-what-fuels-sustained-engagement",
    lens: "Purpose & Meaning Lens (what fuels sustained engagement)",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Purpose & Meaning Lens (what fuels sustained engagement)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Purpose & Meaning Lens (what fuels sustained engagement)

| Profile | Primary Source of Meaning | Best Role Fit for Purpose | Loss of Meaning Looks Like | Link |
|---|---|---|---|---|
| Analyzer | Mastery and correctness | QA, analytics, compliance | Feels pointless, disengages | ca://s?q=Analyzer_Purpose_Meaning |
| Controller | Order and influence | Governance, ops leadership | Sees chaos, becomes punitive | ca://s?q=Controller_Purpose_Meaning |
| Specialist | Deep expertise impact | R&D, specialist contributor | Alienated by broad tasks | ca://s?q=Specialist_Purpose_Meaning |
| Strategist | Shaping systems and legacy | Strategy, transformation lead | Bureaucracy drains motivation | ca://s?q=Strategist_Purpose_Meaning |
| Venturer | Creating new possibilities | Founder, product explorer | Stifled by rules, seeks exit | ca://s?q=Venturer_Purpose_Meaning |
| Altruist | Helping others grow | People ops, coaching, care roles | Hurt by exclusion or coldness | ca://s?q=Altruist_Purpose_Meaning |
| Captain | Leading impact and results | Executive, mission lead | Feels undermined, reacts strongly | ca://s?q=Captain_Purpose_Meaning |
| Collaborator | Building belonging | Team lead, community builder | Withdraws when team fractures | ca://s?q=Collaborator_Purpose_Meaning |
| Maverick | Challenging the status quo | Innovation labs, skunkworks | Boredom leads to provocation | ca://s?q=Maverick_Purpose_Meaning |
| Persuader | Moving people to action | Sales, advocacy, evangelism | Feels invisible, loses drive | ca://s?q=Persuader_Purpose_Meaning |
| Promoter | Sparking energy and attention | Events, launches, growth roles | Seeks new stages, abandons tasks | ca://s?q=Promoter_Purpose_Meaning |
| Adapter | Being useful and included | Program coordinator, support roles | Over‑giving, loses identity | ca://s?q=Adapter_Purpose_Meaning |
| Craftsman | Pride in workmanship | Engineering, craft roles | Disillusioned by sloppy outcomes | ca://s?q=Craftsman_Purpose_Meaning |
| Guardian | Preserving continuity | Risk, compliance, stewardship roles | Anxiety when norms erode | ca://s?q=Guardian_Purpose_Meaning |
| Operator | Delivering dependable results | Operations, logistics, production | Frustrated by unpredictability | ca://s?q=Operator_Purpose_Meaning |
| Individualist | Expressing unique identity | Creative lead, solo contributor | Feels constrained, withdraws | ca://s?q=Individualist_Purpose_Meaning |
| Scholar | Advancing understanding | Research, analytics, policy | Loses interest in surface work | ca://s?q=Scholar_Purpose_Meaning |
`,
  },
  {
    id: "belbin-team-roles",
    lens: "Belbin Team Roles",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Belbin Team Roles
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Belbin Team Roles

| Profile | Primary Belbin Role | Secondary Role | Team Risk Under Stress | Deep dive |
|---|---|---|---|---|
| Analyzer | Monitor Evaluator |  |  |  |
| Specialist | Over‑critical, stalls decisions | ca://s?q=Analyzer_Belbin |  |  |
| Controller | Implementer | Shaper | Overly rigid, suppresses ideas | ca://s?q=Controller_Belbin |
| Specialist |  |  |  |  |
| Specialist | Monitor Evaluator | Siloed knowledge, poor handoffs | ca://s?q=Specialist_Belbin |  |
| Strategist | Plant | Monitor Evaluator | Over‑theorizes, misses detail | ca://s?q=Strategist_Belbin |
| Venturer | Shaper | Plant | Pushes risk, provokes conflict | ca://s?q=Venturer_Belbin |
| Altruist | Teamworker | Resource Investigator | Over‑accommodates, avoids hard calls | ca://s?q=Altruist_Belbin |
| Captain | Shaper | Coordinator | Dominates, reduces buy‑in | ca://s?q=Captain_Belbin |
| Collaborator | Teamworker | Coordinator | Avoids confrontation, delays closure | ca://s?q=Collaborator_Belbin |
| Maverick | Plant | Resource Investigator | Idea chaos, poor follow‑through | ca://s?q=Maverick_Belbin |
| Persuader | Resource Investigator | Teamworker | Over‑optimistic, glosses risks | ca://s?q=Persuader_Belbin |
| Promoter | Resource Investigator | Shaper | Over‑promises, inconsistent delivery | ca://s?q=Promoter_Belbin |
| Adapter | Teamworker | Implementer | Over‑adjusts, loses direction | ca://s?q=Adapter_Belbin |
| Craftsman | Implementer | Completer Finisher | Perfectionism causes bottlenecks | ca://s?q=Craftsman_Belbin |
| Guardian | Completer Finisher | Implementer | Excess caution, resists change | ca://s?q=Guardian_Belbin |
| Operator | Implementer | Completer Finisher | Rigid routines block innovation | ca://s?q=Operator_Belbin |
| Individualist | Plant |  |  |  |
| Specialist | Detached, undermines team norms | ca://s?q=Individualist_Belbin |  |  |
| Scholar | Monitor Evaluator |  |  |  |
| Specialist | Over‑analysis delays action | ca://s?q=Scholar_Belbin |  |  |
`,
  },
  {
    id: "team-management-systems-tms",
    lens: "Team Management Systems (TMS)",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Team Management Systems (TMS)
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Team Management Systems TMS

| Profile | Preferred Team Role | Contribution Style | Failure Mode | Deep dive |
|---|---|---|---|---|
| Analyzer | Analyzer/Inspector | Data, quality control | Paralysis by detail | ca://s?q=Analyzer_TMS |
| Controller | Planner/Inspector | Process governance | Bureaucratic bottleneck | ca://s?q=Controller_TMS |
| Specialist |  |  |  |  |
| Specialist | Deep technical input | Knowledge siloing | ca://s?q=Specialist_TMS |  |
| Strategist | Strategic Planner | Vision and scenarios | Over‑complex plans | ca://s?q=Strategist_TMS |
| Venturer | Explorer/Innovator | Opportunity spotting | Reckless pivots | ca://s?q=Venturer_TMS |
| Altruist | Team Builder | Cohesion and morale | Over‑sacrifice for harmony | ca://s?q=Altruist_TMS |
| Captain | Driver | Decisive execution | Bulldozes dissent | ca://s?q=Captain_TMS |
| Collaborator | Facilitator | Consensus building | Avoids tough tradeoffs | ca://s?q=Collaborator_TMS |
| Maverick | Innovator | Disruptive ideas | Breaks process continuity | ca://s?q=Maverick_TMS |
| Persuader | Communicator | Influence and buy‑in | Emotional overreach | ca://s?q=Persuader_TMS |
| Promoter |  |  |  |  |
| Promoter | Rallying energy | Short‑lived momentum | ca://s?q=Promoter_TMS |  |
| Adapter | Supporter | Flexible role coverage | Loses own priorities | ca://s?q=Adapter_TMS |
| Craftsman | Inspector/Implementer | Quality delivery | Perfection delays launch | ca://s?q=Craftsman_TMS |
| Guardian |  |  |  |  |
| Controller | Risk management | Blocks necessary change | ca://s?q=Guardian_TMS |  |
| Operator | Implementer | Reliable execution | Stalls when novelty required | ca://s?q=Operator_TMS |
| Individualist | Independent Contributor | Unique solutions | Misalignment with team goals | ca://s?q=Individualist_TMS |
| Scholar | Analyst | Research and validation | Over‑testing before action | ca://s?q=Scholar_TMS |
`,
  },
  {
    id: "lencioni-team-dynamics",
    lens: "Lencioni Team Dynamics",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Lencioni Team Dynamics
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Lencioni Team Dynamics

| Profile | Likely Strength Against Lencioni Fears | Weakness That Fuels Dysfunction | Stress Trigger | Deep dive |
|---|---|---|---|---|
| Analyzer | Absence of Trust: guarded reliability | Avoids vulnerability, hides doubts | Criticism of competence | ca://s?q=Analyzer_Lencioni |
| Controller | Fear of Conflict: enforces order | Suppresses debate, enforces compliance | Challenges to authority | ca://s?q=Controller_Lencioni |
| Specialist | Lack of Commitment: needs clarity | Withdraws from ambiguous goals | Being asked outside expertise | ca://s?q=Specialist_Lencioni |
| Strategist | Avoidance of Accountability: big vision | Skips follow‑through on details | Micromanagement of vision | ca://s?q=Strategist_Lencioni |
| Venturer | Inattention to Results: chases new wins | Moves on before delivery | Slow decision cycles | ca://s?q=Venturer_Lencioni |
| Altruist | Absence of Trust: builds rapport | Over‑accommodates, avoids hard truth | Interpersonal tension | ca://s?q=Altruist_Lencioni |
| Captain | Fear of Conflict: decisive leader | Intimidates, reduces candid debate | Public challenge to decisions | ca://s?q=Captain_Lencioni |
| Collaborator | Absence of Trust: fosters inclusion | Avoids accountability to keep peace | Exclusion from decisions | ca://s?q=Collaborator_Lencioni |
| Maverick | Inattention to Results: idea focus | Disrupts execution, seeks novelty | Process constraints | ca://s?q=Maverick_Lencioni |
| Persuader | Fear of Conflict: skilled mediator | Personalizes disagreements | Public rejection | ca://s?q=Persuader_Lencioni |
| Promoter | Inattention to Results: seeks spotlight | Prioritizes visibility over outcomes | Ignored contributions | ca://s?q=Promoter_Lencioni |
| Adapter | Lack of Commitment: seeks consensus | Over‑adjusts, dilutes decisions | Forced rapid choices | ca://s?q=Adapter_Lencioni |
| Craftsman | Absence of Trust: reliable but reserved | Perfectionism stalls team progress | Rushed timelines | ca://s?q=Craftsman_Lencioni |
| Guardian | Fear of Conflict: protects norms | Resists change, avoids debate | Radical proposals | ca://s?q=Guardian_Lencioni |
| Operator | Lack of Commitment: prefers clarity | Avoids ambiguity, delays buy‑in | Vague goals | ca://s?q=Operator_Lencioni |
| Individualist | Absence of Trust: values autonomy | Withdraws, undermines cohesion | Micromanagement | ca://s?q=Individualist_Lencioni |
| Scholar | Lack of Commitment: needs evidence | Over‑analysis prevents decisions | Pressure for quick answers | ca://s?q=Scholar_Lencioni |
`,
  },
  {
    id: "leadership-circle-profile",
    lens: "Leadership Circle Profile",
    status: "COMPLETE",
    source: "Untitled 5.txt",
    content: `LENS: Leadership Circle Profile
STATUS: COMPLETE
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Converted the one-cell-per-line table from the transcript into a readable text table. Duplicate status/check-in text was removed.
================================================================================

Leadership Circle Profile

| Profile | Creative Leadership Strengths | Reactive Leadership Triggers | Development Focus | Deep dive |
|---|---|---|---|---|
| Analyzer | Strategic clarity, quality control | Defensive perfectionism | Practice vulnerability and delegation | ca://s?q=Analyzer_Leadership_Circle |
| Controller | Decisive governance, reliability | Authoritarian control under stress | Build coaching and listening skills | ca://s?q=Controller_Leadership_Circle |
| Specialist | Technical credibility, depth | Withdrawal when challenged | Broaden influence beyond domain | ca://s?q=Specialist_Leadership_Circle |
| Strategist | Visionary systems thinking | Over‑detached intellectualism | Translate vision into measurable steps | ca://s?q=Strategist_Leadership_Circle |
| Venturer | Opportunity orientation, boldness | Impulsivity and risk taking | Strengthen risk filters and follow‑through | ca://s?q=Venturer_Leadership_Circle |
| Altruist | People development, empathy | Over‑pleasing, avoids hard choices | Practice direct feedback and boundaries | ca://s?q=Altruist_Leadership_Circle |
| Captain | Command presence, decisive action | Intimidation under pressure | Cultivate inclusion and listening | ca://s?q=Captain_Leadership_Circle |
| Collaborator | Team building, facilitation | Avoids accountability to keep harmony | Strengthen decision discipline | ca://s?q=Collaborator_Leadership_Circle |
| Maverick | Creative disruption, challenge status quo | Provocation that alienates | Channel novelty into structured pilots | ca://s?q=Maverick_Leadership_Circle |
| Persuader | Inspiring communication, influence | Emotional reactivity | Anchor influence with evidence and follow‑up | ca://s?q=Persuader_Leadership_Circle |
| Promoter | Energy, rallying teams | Short attention, overcommitment | Build systems for sustained delivery | ca://s?q=Promoter_Leadership_Circle |
| Adapter | Flexibility, situational leadership | Over‑adjustment, loss of voice | Strengthen assertiveness and clarity | ca://s?q=Adapter_Leadership_Circle |
| Craftsman | Operational excellence, standards | Perfectionism that stalls teams | Balance quality with pragmatic deadlines | ca://s?q=Craftsman_Leadership_Circle |
| Guardian | Stewardship, risk management | Defensive resistance to change | Develop change leadership skills | ca://s?q=Guardian_Leadership_Circle |
| Operator | Reliable execution, accountability | Rigid enforcement under stress | Increase tolerance for ambiguity | ca://s?q=Operator_Leadership_Circle |
| Individualist | Authentic independence, original thinking | Withdrawal when constrained | Integrate others into creative process | ca://s?q=Individualist_Leadership_Circle |
| Scholar | Intellectual rigor, evidence‑based decisions | Paralysis by analysis | Practice decisive action and simplification | ca://s?q=Scholar_Leadership_Circle |
`,
  },
  {
    id: "neurodiversity-support-lens--neurodivergence-and-cognitive-accessibility",
    lens: "Neurodiversity Support Lens - Neurodivergence and Cognitive Accessibility",
    status: "PARTIAL / EXTRACTED CONTENT ONLY",
    source: "Untitled 5.txt",
    content: `LENS: Neurodiversity Support Lens - Neurodivergence and Cognitive Accessibility
STATUS: PARTIAL / EXTRACTED CONTENT ONLY
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Merged the expanded neurodivergence/cognitive-accessibility profile blocks found in the document. The document contains detailed standalone blocks for Venturer, Controller, Specialist, and Strategist; it does not contain a complete 17-profile final lens table for this lens.
================================================================================

Venturer — Neurodivergence & Cognitive Accessibility (expanded)
For each subcategory: Manifestation | Behavior impact | Distortion of typical Venturer pattern | Real‑life snapshot | Work / bandwidth impact | Risk if ignored | Best way to approach (peer, non‑managerial)
Then: Micro‑accommodations, Peer scripts (2 lines), Trial metrics (simple, 2 items), Suggested tools / supports, Privacy phrasing the person can use.

ADHD
  - Manifestation: High drive for novelty, rapid idea generation, difficulty sustaining follow‑through on multi‑step projects.
  - Behavior impact: Starts many initiatives, abandons some quickly, jumps between opportunities when stimulation wanes.
  - Distortion: Venturer’s healthy opportunism becomes scattered impulsivity and unfinished bets.
  - Snapshot: Pitches three new product ideas in a week, then shifts to a side hustle before any reach pilot stage.
  - Work / bandwidth impact: Resource churn, unclear priorities, teammates left to clean up half‑finished work.
  - Risk if ignored: Credibility loss, fractured team trust, repeated failed launches.
  - Best way to approach: Validate energy and ideas; convert impulses into time‑boxed experiments with clear stop rules.
Micro‑accommodations
  - Short, time‑boxed pilots (2–4 weeks) with explicit success/fail criteria.
  - Visible “parking lot” board for ideas; limit active experiments to 1–2 at a time.
Peer scripts
  - “Love that energy — can we pick one small pilot and cap it at two weeks so we can test it fast?”
  - “Can I help you turn this into a 3‑step experiment we can finish this sprint?”
Trial metrics
  - Number of active pilots limited to ≤2; completion rate per month.
  - Stakeholder satisfaction score after each pilot (1–5).
Tools / supports
  - Kanban board with WIP limits (Trello/Jira); short daily check‑ins; timers and calendar blocks.
Privacy phrasing
  - “I’m experimenting with a short, time‑boxed pilot and would like to keep it low‑visibility until we have results.”

Executive Function Differences
  - Manifestation: Difficulty sequencing multi‑stage initiatives and keeping parallel timelines aligned.
  - Behavior impact: Starts bold initiatives but misses coordination steps (stakeholder comms, resourcing).
  - Distortion: Venturer’s rapid scaling instincts become chaotic rollouts without integration.
  - Snapshot: Launches a beta without a support plan; customer issues pile up.
  - Work / bandwidth impact: Operational firefighting, reputational risk.
  - Risk if ignored: Failed launches and wasted effort.
  - Best way to approach: Offer to co‑create a simple phase checklist and a single owner for each handoff.
Micro‑accommodations
  - Phase checklist template (3–5 items) required before launch.
  - Short “handoff note” that must be posted to the team board.
Peer scripts
  - “Let’s map the three handoffs and who owns them — I’ll draft the checklist with you.”
  - “Can we add a one‑page launch note so ops know what to expect?”
Trial metrics
  - % of launches with completed handoff note; number of post‑launch incidents.
Tools / supports
  - Lightweight RACI; shared calendar milestones; simple handoff template.
Privacy phrasing
  - “I prefer to document the launch steps in a short note so we can avoid surprises.”

Time Blindness
  - Manifestation: Underestimates time to scale or operationalize ideas; optimistic timelines.
  - Behavior impact: Commits to aggressive dates; pressures others for rapid delivery.
  - Distortion: Venturer’s speed becomes unrealistic demands on teammates.
  - Snapshot: Announces a “next‑week” demo that requires cross‑team work not yet scheduled.
  - Work / bandwidth impact: Team stress, rushed quality, missed dependencies.
  - Risk if ignored: Burned‑out collaborators and failed commitments.
  - Best way to approach: Use historical benchmarks and require minimal lead times for cross‑team asks.
Micro‑accommodations
  - Default buffer rules (e.g., +30% time on estimates for cross‑team work).
  - Pre‑commitment check: “Do you have the resources to deliver by X?”
Peer scripts
  - “Love the timeline — can we add a two‑week buffer so ops can staff it?”
  - “If we treat this as a 3‑week pilot instead of 3 days, we’ll get cleaner results.”
Trial metrics
  - % of commitments met on first deadline; average buffer added to estimates.
Tools / supports
  - Historical timeline dashboard; simple estimation checklist.
Privacy phrasing
  - “I’m trying a more conservative timeline this time to make sure we hit it.”

Task Initiation Difficulty
  - Manifestation: Hesitation to start when the first step is ambiguous; needs a clear activation cue.
  - Behavior impact: Delays until conditions feel “right,” then bursts into action.
  - Distortion: Venturer’s quick starts become stalled ideation cycles.
  - Snapshot: Has a great plan but waits for a perfect dataset before running a small test.
  - Work / bandwidth impact: Missed market windows and slow learning.
  - Risk if ignored: Lost opportunities.
  - Best way to approach: Provide a single, tiny first action and offer to co‑start.
Micro‑accommodations
  - “First 15‑minute task” note attached to every new idea.
  - Pairing for the first session (buddy system).
Peer scripts
  - “Let’s do the first 30 minutes together — I’ll set the timer and we’ll get it started.”
  - “What’s one tiny test we can run in a day?”
Trial metrics
  - Time from idea to first action; number of ideas that reach pilot stage.
Tools / supports
  - 15‑minute kickoff slots; checklist with a single first action.
Privacy phrasing
  - “I work best if someone helps me start the first 30 minutes — can you pair with me?”

Context‑Switching Difficulty
  - Manifestation: High cost to move between ideation and execution; needs recovery time after interruptions.
  - Behavior impact: Prefers bursts of uninterrupted work; resists frequent ad‑hoc asks.
  - Distortion: Venturer’s agility becomes brittle; may miss urgent coordination needs.
  - Snapshot: Skips quick syncs to protect creative flow and then misses alignment.
  - Work / bandwidth impact: Coordination gaps and delayed responses.
  - Risk if ignored: Misalignment and friction.
  - Best way to approach: Use short async updates and schedule brief, focused syncs.
Micro‑accommodations
  - Protected creative blocks; a single daily 15‑minute alignment window.
  - Async 3‑bullet updates for non‑urgent items.
Peer scripts
  - “I’ll send a 3‑bullet update after your focus block — no need to interrupt.”
  - “Can we reserve 15 minutes at 4pm for quick alignment?”
Trial metrics
  - Number of interruptions during focus blocks; % of items resolved via async updates.
Tools / supports
  - Shared async update template; calendar focus blocks.
Privacy phrasing
  - “I’m protecting a 2‑hour creative block — please send a 3‑bullet update if it’s not urgent.”

Hyperfocus Patterns
  - Manifestation: Deep immersion in one idea to the exclusion of others; loses track of time and other commitments.
  - Behavior impact: Produces exceptional work in one area while other responsibilities lag.
  - Distortion: Venturer’s productive obsession becomes neglect of team needs.
  - Snapshot: Builds a prototype obsessively and misses a scheduled stakeholder demo.
  - Work / bandwidth impact: Imbalanced delivery and missed commitments.
  - Risk if ignored: Team frustration and missed deadlines.
  - Best way to approach: Agree on visible stop signals and scheduled check‑ins.
Micro‑accommodations
  - Visible “stop” signal (calendar flag or Slack status) and mandatory mid‑pilot check‑in.
  - Shared checklist of other priorities to surface neglected items.
Peer scripts
  - “This is brilliant — can we set a mid‑pilot check‑in so we don’t lose other priorities?”
  - “If you hit X, pause and ping me so we can re‑prioritize.”
Trial metrics
  - Number of missed commitments while in hyperfocus; % of pilots with mid‑pilot check‑ins.
Tools / supports
  - Shared progress board; automated reminders.
Privacy phrasing
  - “I’m deep in a focused sprint — I’ll set a mid‑sprint check‑in so we stay aligned.”

Rejection Sensitivity
  - Manifestation: Strong emotional reaction to critique; may withdraw or react defensively.
  - Behavior impact: Avoids early feedback or doubles down when challenged.
  - Distortion: Venturer’s boldness becomes brittle defensiveness or secrecy.
  - Snapshot: Stops sharing ideas after a blunt critique and launches solo.
  - Work / bandwidth impact: Reduced iteration and collaboration.
  - Risk if ignored: Isolation and stalled improvement.
  - Best way to approach: Use private, strengths‑based feedback and pair critique with explicit appreciation.
Micro‑accommodations
  - Private feedback first; public recognition paired with one improvement suggestion.
  - “Safe preview” sessions with a trusted peer before public sharing.
Peer scripts
  - “This part landed well; one tweak that could help is X — want to iterate together?”
  - “Can I give you private feedback before the next demo?”
Trial metrics
  - Frequency of private previews; change in willingness to share early drafts.
Tools / supports
  - Private feedback channel; short feedback template (What worked / One improvement).
Privacy phrasing
  - “I prefer private feedback on early drafts — can we do that for the next two demos?”

Masking Fatigue
  - Manifestation: Exhaustion from constantly adapting persona to fit expectations; reduced spontaneity.
  - Behavior impact: Fewer informal contributions, increased withdrawal, occasional emotional outbursts.
  - Distortion: Venturer’s charismatic risk‑taking becomes muted or inconsistent.
  - Snapshot: Stops attending informal brainstorms after long periods of code‑switching.
  - Work / bandwidth impact: Loss of creative input and leadership energy.
  - Risk if ignored: Burnout and disengagement.
  - Best way to approach: Offer low‑visibility contribution channels and validate recovery time.
Micro‑accommodations
  - Option to contribute via written idea drops; permission for short recovery days after high‑visibility events.
  - Rotate public presentation duties.
Peer scripts
  - “If you want, drop the idea in this doc and I’ll surface it for you.”
  - “Take a recovery half‑day after the pitch — we’ve got your back.”
Trial metrics
  - Number of low‑visibility contributions; self‑reported energy after recovery days.
Tools / supports
  - Shared idea doc; opt‑out mechanism for public events.
Privacy phrasing
  - “I’m opting for a low‑visibility contribution this round while I recharge.”

Social Communication Load
  - Manifestation: Extra effort to manage impressions and persuade; fatigue from repeated social selling.
  - Behavior impact: Prefers demos and high‑impact moments over long stakeholder campaigns.
  - Distortion: Venturer’s persuasive edge becomes inconsistent outreach and reliance on spectacle.
  - Snapshot: Focuses on a big launch event but neglects follow‑through with key stakeholders.
  - Work / bandwidth impact: Short‑term visibility but weak sustained buy‑in.
  - Risk if ignored: Initiatives fizzle after initial hype.
  - Best way to approach: Provide concise templates for stakeholder updates and offer co‑presenting support.
Micro‑accommodations
  - 3‑slide executive summary template; co‑presenter for Q&A.
  - Short, repeatable stakeholder touchpoints scheduled in advance.
Peer scripts
  - “I’ll co‑present the Q&A so you can focus on the pitch.”
  - “Can I draft a 3‑slide summary you can use for quick outreach?”
Trial metrics
  - % of stakeholders reached with scheduled touchpoints; follow‑through rate after launch.
Tools / supports
  - Slide template; co‑presenter pairing.
Privacy phrasing
  - “I’d like to co‑present the Q&A so I can focus on the demo.”

Need for Written Instructions
  - Manifestation: Performs best with clear, concise written steps for experiments and launches.
  - Behavior impact: Requests templates and resists ambiguous verbal instructions.
  - Distortion: Venturer’s improvisational strengths are constrained by over‑reliance on written rules.
  - Snapshot: Asks for a one‑page launch checklist before greenlighting a demo.
  - Work / bandwidth impact: Higher clarity but slower spontaneity.
  - Risk if ignored: Missteps from misremembered verbal agreements.
  - Best way to approach: Provide short, one‑page checklists and a sample first action.
Micro‑accommodations
  - One‑page launch checklist; 3‑bullet “what success looks like” note.
Peer scripts
  - “Here’s a one‑page checklist — want me to fill the first section with you?”
  - “If you give me 3 bullets of success criteria, I’ll draft the checklist.”
Trial metrics
  - % of launches with checklist; number of clarifying follow‑ups after launch.
Tools / supports
  - Checklist template; shared doc.
Privacy phrasing
  - “Can we capture the launch steps in one short doc so I can move fast with clarity?”

Need for Reduced Interruption
  - Manifestation: Creative flow is fragile; interruptions derail momentum.
  - Behavior impact: Protects long creative blocks; declines ad‑hoc asks.
  - Distortion: Venturer’s responsiveness to emergent opportunities is reduced.
  - Snapshot: Sets long focus blocks and misses a last‑minute customer call.
  - Work / bandwidth impact: Missed urgent signals vs. higher quality creative output.
  - Risk if ignored: Lost opportunities or poor quality work.
  - Best way to approach: Define clear escalation rules and use async updates for non‑urgent items.
Micro‑accommodations
  - Agreed focus windows and a single escalation contact for true emergencies.
  - Async 3‑bullet updates for non‑urgent items.
Peer scripts
  - “If it’s urgent, text me with ‘URGENT’ and I’ll respond; otherwise send a 3‑bullet update.”
  - “I’ll respect your focus block — can you set the escalation contact?”
Trial metrics
  - Number of escalations during focus blocks; % of items resolved async.
Tools / supports
  - Slack status conventions; shared escalation contact.
Privacy phrasing
  - “I’m in a focus block — text URGENT if it can’t wait.”

Need for Structure Without Shame
  - Manifestation: Prefers some predictable scaffolding but may feel embarrassed to ask for it.
  - Behavior impact: Creates private systems or avoids asking for structure publicly.
  - Distortion: Venturer’s spontaneity becomes hidden inefficiency.
  - Snapshot: Keeps a private idea queue rather than sharing it for prioritization.
  - Work / bandwidth impact: Misalignment and duplicated effort.
  - Risk if ignored: Friction and missed coordination.
  - Best way to approach: Normalize lightweight templates and invite co‑creation of structure.
Micro‑accommodations
  - Shared idea queue with WIP limits; optional template for pilots.
  - Normalize “structure as productivity” language.
Peer scripts
  - “Can I add this to our shared queue and help prioritize it?”
  - “We use a short template for pilots — want me to fill it with you?”
Trial metrics
  - % of ideas in shared queue; time from idea to prioritized pilot.
Tools / supports
  - Shared idea doc; WIP limits.
Privacy phrasing
  - “I keep an idea queue — can we add this to the shared list so it’s visible?”

Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Extra time for reading, numeric modeling, or handwriting tasks; prefers visual or typed outputs.
  - Behavior impact: Slower documentation, reliance on tools, or delegation of numeric tasks.
  - Distortion: Venturer’s verbal charisma may not translate into timely written follow‑ups.
  - Snapshot: Gives a compelling pitch but the follow‑up doc arrives late.
  - Work / bandwidth impact: Delay in documentation and handoffs.
  - Risk if ignored: Miscommunication and missed opportunities.
  - Best way to approach: Offer scribe support, templates, and assistive tools.
Micro‑accommodations
  - Scribe or co‑author for write‑ups; templates for follow‑ups.
  - Allow spoken notes to be transcribed.
Peer scripts
  - “I can draft the follow‑up doc from your notes — want me to?”
  - “If you prefer, record a quick voice note and I’ll transcribe it.”
Trial metrics
  - Time from pitch to published follow‑up; % of follow‑ups co‑authored.
Tools / supports
  - Speech‑to‑text; shared templates; co‑authoring.
Privacy phrasing
  - “I prefer to record a quick voice note for follow‑up — can I send that instead of drafting?”

Auditory Processing / Sensory Processing / Tourette Syndrome
  - Manifestation: Difficulty following rapid multi‑speaker discussions; sensory overload increases stress and tics.
  - Behavior impact: Prefers structured turn‑taking, captions, and written summaries; may self‑limit verbal participation.
  - Distortion: Venturer’s live charisma may be reduced in noisy or chaotic settings.
  - Snapshot: Leaves a loud brainstorming session early and submits a written idea afterward.
  - Work / bandwidth impact: Reduced live presence and slower consensus building.
  - Risk if ignored: Exclusion and missed input.
  - Best way to approach: Use captions, share slides/notes in advance, and normalize opt‑outs.
Micro‑accommodations
  - Captions on calls; slides and notes shared in advance; opt‑out option for noisy sessions.
  - Private channels for questions.
Peer scripts
  - “I’ll share the slides and notes in advance so you can pick what to comment on.”
  - “If it’s noisy, drop your idea in this doc and I’ll read it aloud for you.”
Trial metrics
  - Number of contributions via written channels; self‑reported comfort in meetings.
Tools / supports
  - Live captions; shared slide decks; quiet rooms.
Privacy phrasing
  - “I’ll skip the noisy session and drop my idea in the doc — please read it aloud if needed.”

Working Memory / Processing Speed Differences
  - Manifestation: Needs external aids to hold multiple threads and extra time to synthesize.
  - Behavior impact: Prefers pre‑reads and reflection time; slower in rapid exchanges.
  - Distortion: Venturer’s quick verbal ideation may not convert to timely, integrated plans.
  - Snapshot: Offers strong verbal direction in a meeting but needs extra time to produce a coherent plan.
  - Work / bandwidth impact: Slower documentation and handoffs; higher quality after reflection.
  - Risk if ignored: Hasty decisions and missed nuance.
  - Best way to approach: Provide concise pre‑reads, short recap pauses, and allow reflection windows.
Micro‑accommodations
  - Pre‑reads 24–48 hours before meetings; 5‑minute recap pauses in sessions.
  - Allow post‑meeting reflection time before finalizing decisions.
Peer scripts
  - “I’ll send a 2‑slide summary before the meeting so you can reflect.”
  - “Let’s pause for five minutes after the pitch so you can gather thoughts.”
Trial metrics
  - % of decisions postponed for reflection; quality of final plans after reflection.
Tools / supports
  - Pre‑read templates; meeting recap prompts.
Privacy phrasing
  - “I prefer a short pre‑read and a five‑minute pause after the meeting to finalize my input.”

Next steps I’ll take now
    1    Retroactively upgrade the Neurodivergence sections for Analyzer, Controller, Specialist, and Strategist to this expanded format (micro‑accommodations, peer scripts, trial metrics, tools, privacy phrasing).
    2    Continue the profile sequence and produce the next profile (Promoter) with the same expanded neurodivergence depth, unless you want a different order.
    3    Deliver each profile’s full 15‑category matrix as before, with the neurodivergence domain in this richer format.
If that plan looks right, I’ll immediately upgrade the four completed profiles and then proceed to the next profile in order. I’m starting the retroactive upgrades now and will post the updated Analyzer neurodivergence block first, then Controller, Specialist, Strategist, and then continue the sequence.

Controller, Specialist, and Strategist (You did analyzer well..... but pay detailed attention to strategist as that would be my category and it is the best way for me to affirm how much of this we are getting right)

Controller — Neurodivergence & Cognitive Accessibility (expanded)
For each subcategory below you’ll find Manifestation | Behavior impact | Distortion of typical Controller pattern | Real‑life snapshot | Work / bandwidth impact | Risk if ignored | Best way to approach, followed by Micro‑accommodations, Peer scripts (2 lines), Trial metrics (2 items), Suggested tools / supports, and Privacy phrasing.
ADHD
  - Manifestation: Urgency to act, quick pivots, difficulty sustaining multi‑step follow‑through.
  - Behavior impact: Starts many fixes, shifts priorities abruptly, pressures teams for immediate results.
  - Distortion: Decisive leadership becomes impulsive directives and brittle micromanagement.
  - Snapshot: Announces a new initiative mid‑meeting and expects same‑day deliverables.
  - Work / bandwidth impact: Fragmented priorities; teams chase shifting goals.
  - Risk if ignored: Credibility loss and repeated failed launches.
  - Best way to approach: Validate energy; convert impulses into time‑boxed experiments with explicit stop rules.
  - Micro‑accommodations: 2–4 week pilots with clear stop criteria; WIP limits on active initiatives.
  - Peer scripts: “Love this — can we cap it to a two‑week pilot and agree exit criteria?” / “Let’s pick one small experiment and I’ll help scope it.”
  - Trial metrics: # active pilots ≤2; pilot completion rate.
  - Tools / supports: Kanban with WIP limits; timers; short daily check‑ins.
  - Privacy phrasing: “I’m running a short, low‑visibility pilot and will share results after the test.”
Executive Function Differences
  - Manifestation: Trouble sequencing delegation and multi‑phase rollouts.
  - Behavior impact: Hoards decisions; handoffs fail.
  - Distortion: Delegation becomes decision hoarding and bottlenecks.
  - Snapshot: Keeps final approvals, creating single‑point failure.
  - Work / bandwidth impact: Slower throughput; missed scaling.
  - Risk if ignored: Burnout and missed deadlines.
  - Best way to approach: Co‑create simple phase checklists and visible handoff notes.
  - Micro‑accommodations: One‑page phase template; mandatory handoff note.
  - Peer scripts: “Can I draft the handoff checklist with you?” / “Let’s name owners for each phase so nothing slips.”
  - Trial metrics: % launches with handoff note; post‑launch incidents.
  - Tools / supports: Lightweight RACI; shared milestone calendar.
  - Privacy phrasing: “I prefer a short handoff note before launch — can we do that?”
Time Blindness
  - Manifestation: Optimistic timelines; underestimates alignment work.
  - Behavior impact: Compressed deadlines; pressure on peers.
  - Distortion: Timeline setting becomes erratic and stressful.
  - Snapshot: Announces a next‑week rollout that needs cross‑team work.
  - Work / bandwidth impact: Rushed quality, missed dependencies.
  - Risk if ignored: Burned‑out collaborators and failed commitments.
  - Best way to approach: Use historical benchmarks and require minimal lead times.
  - Micro‑accommodations: Default buffer rules (+30%); pre‑commitment resource check.
  - Peer scripts: “Can we add a two‑week buffer so ops can staff it?” / “If we treat this as a 3‑week pilot, we’ll get cleaner results.”
  - Trial metrics: % commitments met; average buffer added.
  - Tools / supports: Timeline dashboard; estimation checklist.
  - Privacy phrasing: “I’m trying a more conservative timeline this time to ensure delivery.”
Task Initiation Difficulty
  - Manifestation: Hesitation to start ambiguous initiatives; waits for perfect conditions.
  - Behavior impact: Delays strategic moves; misses windows.
  - Distortion: Caution becomes paralysis.
  - Snapshot: Waits for perfect data before a small test.
  - Work / bandwidth impact: Missed opportunities.
  - Risk if ignored: Competitive disadvantage.
  - Best way to approach: Provide a single first action and offer to co‑start.
  - Micro‑accommodations: “First 15‑minute task” note; pairing for kickoff.
  - Peer scripts: “Let’s do the first 30 minutes together — I’ll set the timer.” / “What’s one tiny test we can run in a day?”
  - Trial metrics: Time from idea to first action; # ideas reaching pilot.
  - Tools / supports: 15‑minute kickoff slots; checklist with first action.
  - Privacy phrasing: “I work best if someone helps me start the first 30 minutes — can you pair?”
Context‑Switching Difficulty
  - Manifestation: High cost to move between strategy and operations.
  - Behavior impact: Protects long blocks; resists ad‑hoc asks.
  - Distortion: Responsiveness reduces; perceived uncooperativeness.
  - Snapshot: Skips quick syncs to protect planning time.
  - Work / bandwidth impact: Coordination gaps.
  - Risk if ignored: Missed signals.
  - Best way to approach: Use short async updates and scheduled focused syncs.
  - Micro‑accommodations: Protected planning blocks; daily 15‑minute alignment window.
  - Peer scripts: “I’ll send a 3‑bullet update after your focus block.” / “Can we reserve 15 minutes at 4pm for alignment?”
  - Trial metrics: Interruptions during focus blocks; % items resolved async.
  - Tools / supports: Async update template; calendar focus blocks.
  - Privacy phrasing: “I’m protecting a 2‑hour planning block — please send a 3‑bullet update if it’s not urgent.”
Hyperfocus Patterns
  - Manifestation: Deep immersion in one problem; neglects other responsibilities.
  - Behavior impact: Over‑engineering; missed handoffs.
  - Distortion: Thoroughness becomes counterproductive perfectionism.
  - Snapshot: Spends days refining a process while other tasks pile up.
  - Work / bandwidth impact: Opportunity cost; delayed outcomes.
  - Risk if ignored: Resource waste and team frustration.
  - Best way to approach: Agree on visible stop signals and time‑boxed refinement.
  - Micro‑accommodations: Mid‑pilot check‑ins; shared priority checklist.
  - Peer scripts: “This is great — set a mid‑pilot check‑in so we don’t lose other priorities.” / “If you hit X, pause and ping me.”
  - Trial metrics: Missed commitments while hyperfocused; % pilots with mid‑pilot check‑ins.
  - Tools / supports: Shared progress board; automated reminders.
  - Privacy phrasing: “I’m in a focused sprint — I’ll set a mid‑sprint check‑in so we stay aligned.”
Rejection Sensitivity
  - Manifestation: Strong reaction to critique; may withdraw or retaliate.
  - Behavior impact: Defensive decisions; avoids feedback.
  - Distortion: Confidence becomes brittle defensiveness.
  - Snapshot: Cuts off discussion after a perceived slight.
  - Work / bandwidth impact: Reduced psychological safety.
  - Risk if ignored: Escalation and fractured relationships.
  - Best way to approach: Use private, strengths‑based feedback and pair critique with appreciation.
  - Micro‑accommodations: Private previews; public recognition paired with one improvement.
  - Peer scripts: “This part landed well; one tweak is X — want to iterate together?” / “Can I give you private feedback before the next demo?”
  - Trial metrics: Frequency of private previews; willingness to share early drafts.
  - Tools / supports: Private feedback channel; short feedback template.
  - Privacy phrasing: “I prefer private feedback on early drafts — can we do that for the next two demos?”
Masking Fatigue
  - Manifestation: Exhaustion from maintaining composed persona; reduced spontaneity.
  - Behavior impact: Short temper, withdrawal, occasional outbursts.
  - Distortion: Steady exterior becomes unpredictable.
  - Snapshot: Snaps at a peer after holding stress in.
  - Work / bandwidth impact: Volatile interactions; trust erosion.
  - Risk if ignored: Burnout and exits.
  - Best way to approach: Offer low‑visibility decompression and normalize recovery breaks.
  - Micro‑accommodations: Option for low‑visibility contributions; short recovery days after high‑visibility events.
  - Peer scripts: “Take a recovery half‑day after the pitch — we’ve got your back.” / “If you want, drop the idea in this doc and I’ll surface it.”
  - Trial metrics: # low‑visibility contributions; self‑reported energy after recovery.
  - Tools / supports: Shared idea doc; opt‑out mechanism.
  - Privacy phrasing: “I’m opting for a low‑visibility contribution this round while I recharge.”
Social Communication Load
  - Manifestation: Extra effort to manage tone and influence; fatigue from persuasion.
  - Behavior impact: Overly formal or transactional communication.
  - Distortion: Influence becomes less relational.
  - Snapshot: Sends memos instead of informal check‑ins.
  - Work / bandwidth impact: Reduced buy‑in and cohesion.
  - Risk if ignored: Polarized conversations.
  - Best way to approach: Provide concise templates and offer co‑presenting support.
  - Micro‑accommodations: 3‑slide executive summary template; co‑presenter for Q&A.
  - Peer scripts: “I’ll co‑present the Q&A so you can focus on the pitch.” / “Can I draft a 3‑slide summary you can use?”
  - Trial metrics: % stakeholders reached; follow‑through rate post‑launch.
  - Tools / supports: Slide template; co‑presenter pairing.
  - Privacy phrasing: “I’d like to co‑present the Q&A so I can focus on the demo.”
Need for Written Instructions
  - Manifestation: Prefers documented decision rules and templates.
  - Behavior impact: Insists on written approvals; slows agility.
  - Distortion: Governance becomes bureaucratic friction.
  - Snapshot: Requires written sign‑off for routine changes.
  - Work / bandwidth impact: Slower responsiveness.
  - Risk if ignored: Misalignment and frustration.
  - Best way to approach: Co‑create concise templates that balance clarity and speed.
  - Micro‑accommodations: One‑page decision rubrics; “fast lane” exceptions.
  - Peer scripts: “Here’s a one‑page rubric — want me to draft the first version?” / “We can use a fast lane for urgent items and document after.”
  - Trial metrics: % decisions using rubric; time to decision in fast lane.
  - Tools / supports: One‑page templates; shared doc.
  - Privacy phrasing: “Can we capture the decision criteria in one short doc so I can approve quickly?”
Need for Reduced Interruption
  - Manifestation: Performance drops with frequent interruptions; enforces quiet blocks.
  - Behavior impact: Declines ad‑hoc collaboration; enforces focus windows.
  - Distortion: Control becomes exclusionary.
  - Snapshot: Marks calendar as unavailable and ignores pings.
  - Work / bandwidth impact: Coordination friction vs. better deep work.
  - Risk if ignored: Missed urgent issues.
  - Best way to approach: Define clear escalation rules and respect focus windows.
  - Micro‑accommodations: Focus windows; single escalation contact.
  - Peer scripts: “If it’s urgent, text URGENT and I’ll respond; otherwise send a 3‑bullet update.” / “I’ll respect your focus block — who should I contact if it’s urgent?”
  - Trial metrics: # escalations during focus blocks; % items resolved async.
  - Tools / supports: Slack status conventions; escalation contact.
  - Privacy phrasing: “I’m in a focus block — text URGENT if it can’t wait.”
Need for Structure Without Shame
  - Manifestation: Wants predictable scaffolding but may feel embarrassed to ask.
  - Behavior impact: Creates private systems; misalignment.
  - Distortion: Spontaneity becomes hidden inefficiency.
  - Snapshot: Keeps a private idea queue rather than sharing it.
  - Work / bandwidth impact: Duplicated effort and friction.
  - Risk if ignored: Missed coordination.
  - Best way to approach: Normalize lightweight templates and co‑creation of structure.
  - Micro‑accommodations: Shared idea queue; optional pilot template.
  - Peer scripts: “Can I add this to our shared queue and help prioritize it?” / “We use a short template for pilots — want me to fill it with you?”
  - Trial metrics: % ideas in shared queue; time to prioritized pilot.
  - Tools / supports: Shared idea doc; WIP limits.
  - Privacy phrasing: “Can we add this to the shared list so it’s visible without making it public yet?”
Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Extra time for reading, numeric modeling, handwriting; prefers typed/visual outputs.
  - Behavior impact: Slower documentation; delegates numeric tasks or asks for scribe help.
  - Distortion: Verbal decisiveness may not translate into timely written follow‑ups.
  - Snapshot: Gives a compelling directive but the follow‑up doc arrives late.
  - Work / bandwidth impact: Delay in documentation and handoffs.
  - Risk if ignored: Miscommunication and missed opportunities.
  - Best way to approach: Offer scribe support, templates, and assistive tools.
  - Micro‑accommodations: Co‑author follow‑ups; speech‑to‑text for notes.
  - Peer scripts: “I can draft the follow‑up doc from your notes — want me to?” / “Record a quick voice note and I’ll transcribe it.”
  - Trial metrics: Time from decision to published follow‑up; % follow‑ups co‑authored.
  - Tools / supports: Speech‑to‑text; shared templates; co‑authoring.
  - Privacy phrasing: “I prefer to record a quick voice note for follow‑up — can I send that instead of drafting?”
Auditory Processing / Sensory Processing / Tourette Syndrome
  - Manifestation: Difficulty in noisy, multi‑speaker settings; sensory overload increases stress.
  - Behavior impact: Prefers structured turn‑taking, captions, and written summaries.
  - Distortion: Command presence reduced in chaotic settings.
  - Snapshot: Leaves a loud meeting early and sends a formal follow‑up.
  - Work / bandwidth impact: Reduced live presence; slower consensus.
  - Risk if ignored: Exclusion and missed input.
  - Best way to approach: Share slides/notes in advance; use captions and opt‑out options.
  - Micro‑accommodations: Captions; slides in advance; quiet rooms.
  - Peer scripts: “I’ll share slides and notes in advance so you can pick what to comment on.” / “Drop your idea in this doc and I’ll read it aloud if needed.”
  - Trial metrics: # contributions via written channels; comfort rating in meetings.
  - Tools / supports: Live captions; shared slide decks; quiet rooms.
  - Privacy phrasing: “I’ll skip the noisy session and drop my idea in the doc — please read it aloud if needed.”
Working Memory / Processing Speed Differences
  - Manifestation: Needs external aids and extra time to synthesize multiple threads.
  - Behavior impact: Prefers pre‑reads and reflection pauses; slower in rapid exchanges.
  - Distortion: Quick decisions become delayed but often higher quality.
  - Snapshot: Asks to postpone a decision to integrate inputs.
  - Work / bandwidth impact: Slower cadence but better outcomes after reflection.
  - Risk if ignored: Hasty decisions and missed nuance.
  - Best way to approach: Provide concise pre‑reads and short reflection windows.
  - Micro‑accommodations: Pre‑reads 24–48 hours ahead; 5‑minute recap pauses.
  - Peer scripts: “I’ll send a 2‑slide summary before the meeting so you can reflect.” / “Let’s pause five minutes after the pitch so you can gather thoughts.”
  - Trial metrics: % decisions postponed for reflection; quality of final plans.
  - Tools / supports: Pre‑read templates; meeting recap prompts.
  - Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting to finalize my input.”

Specialist — Neurodivergence & Cognitive Accessibility (expanded)
ADHD
  - Manifestation: Difficulty initiating broad exploratory work; hyperfocus on narrow technical problems.
  - Behavior impact: Long stalls then exhaustive deep dives; missed integration.
  - Distortion: Depth becomes uneven—excellent modules but poor synthesis.
  - Snapshot: Delivers an exhaustive 60‑page compendium overnight after a long stall.
  - Work / bandwidth impact: Handoffs suffer; integration lags.
  - Risk if ignored: Missed deadlines and reputation risk.
  - Best way to approach: Break research into micro‑questions with scheduled check‑ins.
  - Micro‑accommodations: Micro‑questions with acceptance criteria; 30‑minute weekly syncs.
  - Peer scripts: “Can we break this into three micro‑questions and check in weekly?” / “Want to pair for the first 30 minutes to get started?”
  - Trial metrics: Time to first deliverable; % experiments documented.
  - Tools / supports: Experiment templates; timers; shared note templates.
  - Privacy phrasing: “I’m breaking this into small questions and will share the first draft next week.”
Executive Function Differences
  - Manifestation: Trouble sequencing experiments and documenting results.
  - Behavior impact: Deep experiments with delayed write‑ups.
  - Distortion: Findings remain siloed.
  - Snapshot: Runs a deep experiment but delays methods write‑up.
  - Work / bandwidth impact: Lost knowledge and duplicated effort.
  - Risk if ignored: Wasted effort.
  - Best way to approach: Use experiment templates with mandatory short write‑ups at milestones.
  - Micro‑accommodations: Mandatory short write‑up at each milestone; template prompts.
  - Peer scripts: “Can you add a 1‑page methods note at milestone X?” / “I’ll help capture the methods while you run the test.”
  - Trial metrics: % experiments with milestone write‑ups; time to publish results.
  - Tools / supports: Templates; shared lab notebook.
  - Privacy phrasing: “I’ll add a short methods note at each milestone so we don’t lose the findings.”
Time Blindness
  - Manifestation: Optimistic estimates for exploratory work.
  - Behavior impact: Overpromises on prototypes.
  - Distortion: Reliability perceived as low.
  - Snapshot: Promises a prototype in a week that needs a month.
  - Work / bandwidth impact: Credibility loss.
  - Risk if ignored: Missed deadlines.
  - Best way to approach: Use historical benchmarks and micro‑deadlines.
  - Micro‑accommodations: Phase estimates based on past projects; buffer rules.
  - Peer scripts: “Let’s use last project X as a benchmark and add a buffer.” / “Can we set micro‑deadlines for each phase?”
  - Trial metrics: % deadlines met; average buffer used.
  - Tools / supports: Timeline templates; milestone trackers.
  - Privacy phrasing: “I’m using a conservative timeline based on past projects.”
Task Initiation Difficulty
  - Manifestation: Paralysis without a clear first experiment.
  - Behavior impact: Delays exploratory work.
  - Distortion: Curiosity stalls.
  - Snapshot: Asks for a sample dataset before starting.
  - Work / bandwidth impact: Slow starts.
  - Risk if ignored: Missed innovation windows.
  - Best way to approach: Provide a one‑sentence first action and pair for kickoff.
  - Micro‑accommodations: 30‑minute kickoff pairing; first‑action note.
  - Peer scripts: “What’s one tiny test we can run in a day?” / “I’ll pair for the first session to get you started.”
  - Trial metrics: Time to first action; # ideas reaching pilot.
  - Tools / supports: Kickoff slots; checklists.
  - Privacy phrasing: “Can we pair for the first 30 minutes so I can get started?”
Context‑Switching Difficulty
  - Manifestation: High cost moving between deep work and meetings.
  - Behavior impact: Declines ad‑hoc collaboration; needs recovery time.
  - Distortion: Single‑threading reduces cross‑team input.
  - Snapshot: Skips a quick sync and asks for a written summary.
  - Work / bandwidth impact: Misalignment and missed dependencies.
  - Risk if ignored: Project delays.
  - Best way to approach: Batch meetings and provide written briefs.
  - Micro‑accommodations: Batch meetings; written briefs; scheduled catch‑ups.
  - Peer scripts: “I’ll send a short brief instead of interrupting your flow.” / “Can we schedule a 20‑minute sync after your deep work?”
  - Trial metrics: # missed syncs; % items resolved via briefs.
  - Tools / supports: Pre‑read templates; async update channels.
  - Privacy phrasing: “I prefer a short brief and a scheduled 20‑minute sync after my deep work.”
Hyperfocus Patterns
  - Manifestation: Intense immersion in one technical area; neglects integration.
  - Behavior impact: Exceptional depth, uneven delivery.
  - Distortion: Tunnel vision reduces product fit.
  - Snapshot: Builds a brilliant algorithm but misses integration deadlines.
  - Work / bandwidth impact: Imbalanced delivery.
  - Risk if ignored: Team friction.
  - Best way to approach: Visible stop signals and scheduled handoffs.
  - Micro‑accommodations: Mid‑pilot check‑ins; shared priority list.
  - Peer scripts: “Set a mid‑pilot check‑in so we don’t lose other priorities.” / “Ping me when you hit X so we can re‑prioritize.”
  - Trial metrics: Missed commitments; % pilots with check‑ins.
  - Tools / supports: Progress board; reminders.
  - Privacy phrasing: “I’m in a focused sprint — I’ll set a mid‑sprint check‑in.”
Rejection Sensitivity
  - Manifestation: Avoids early drafts; over‑polishes before sharing.
  - Behavior impact: Slower iteration; hidden perfectionism.
  - Distortion: Iterative learning stalls.
  - Snapshot: Circulates near‑final drafts privately.
  - Work / bandwidth impact: Slower improvement.
  - Risk if ignored: Isolation.
  - Best way to approach: Private, specific feedback and early safe previews.
  - Micro‑accommodations: Private preview sessions; feedback sandwich (strength + one tweak).
  - Peer scripts: “Can I preview this privately and give one focused suggestion?” / “This is strong; one tweak that could help is X.”
  - Trial metrics: # private previews; change in early sharing frequency.
  - Tools / supports: Private feedback channels; short feedback templates.
  - Privacy phrasing: “I prefer private previews on early drafts — can we do that?”
Masking Fatigue
  - Manifestation: Exhaustion from adapting communication; fewer informal contributions.
  - Behavior impact: Reduced spontaneity and creativity.
  - Distortion: Curiosity suppressed.
  - Snapshot: Stops contributing to casual brainstorms.
  - Work / bandwidth impact: Lowered creativity.
  - Risk if ignored: Burnout.
  - Best way to approach: Low‑visibility contribution channels and recovery time.
  - Micro‑accommodations: Idea doc for async contributions; recovery half‑days.
  - Peer scripts: “Drop your idea in this doc and I’ll surface it.” / “Take a recovery half‑day after the sprint.”
  - Trial metrics: # async contributions; energy after recovery.
  - Tools / supports: Shared idea doc; opt‑out options.
  - Privacy phrasing: “I’ll drop my idea in the doc this round while I recharge.”
Social Communication Load
  - Manifestation: Extra effort to translate technical work for non‑technical audiences.
  - Behavior impact: Prefers detailed memos over live summaries.
  - Distortion: Influence outside the team weakens.
  - Snapshot: Sends a long technical memo instead of a short executive summary.
  - Work / bandwidth impact: Slower stakeholder alignment.
  - Risk if ignored: Technical input sidelined.
  - Best way to approach: Provide executive summary templates and co‑presenting support.
  - Micro‑accommodations: 3‑bullet executive summary template; co‑presenter for town halls.
  - Peer scripts: “I’ll draft a 3‑bullet summary you can use for the execs.” / “Want me to co‑present the non‑technical part?”
  - Trial metrics: % stakeholders reached; follow‑through after presentations.
  - Tools / supports: Summary templates; co‑presenter pairing.
  - Privacy phrasing: “Can I send a 3‑bullet summary for the execs and have you present it?”
Need for Written Instructions
  - Manifestation: Performs best with documented protocols and examples.
  - Behavior impact: Requests templates; resists ambiguous verbal instructions.
  - Distortion: Agility reduced by over‑reliance on written rules.
  - Snapshot: Asks for a step‑by‑step protocol before running an experiment.
  - Work / bandwidth impact: Higher accuracy, slower responsiveness.
  - Risk if ignored: Errors from misremembered verbal instructions.
  - Best way to approach: Supply concise protocols and short examples.
  - Micro‑accommodations: Protocol templates; short example files.
  - Peer scripts: “Here’s a short protocol — want me to fill the first section?” / “If you give me an example, I’ll adapt it.”
  - Trial metrics: % tasks with templates; # clarifying follow‑ups.
  - Tools / supports: Templates; example library.
  - Privacy phrasing: “I prefer a short protocol and an example before I start.”
Need for Reduced Interruption
  - Manifestation: Deep work easily derailed by interruptions.
  - Behavior impact: Uses long focus blocks; declines ad‑hoc asks.
  - Distortion: Collaboration limited to scheduled windows.
  - Snapshot: Marks calendar busy and doesn’t respond to pings.
  - Work / bandwidth impact: Coordination gaps vs. higher quality outputs.
  - Risk if ignored: Chronic inefficiency.
  - Best way to approach: Respect focus blocks and use async updates.
  - Micro‑accommodations: Focus blocks; async 3‑bullet updates.
  - Peer scripts: “I’ll send a 3‑bullet update after your block.” / “If urgent, text URGENT.”
  - Trial metrics: Interruptions during blocks; % items resolved async.
  - Tools / supports: Calendar focus blocks; async templates.
  - Privacy phrasing: “I’m in a focus block — please send a 3‑bullet update if it’s not urgent.”
Need for Structure Without Shame
  - Manifestation: Prefers templates but may not ask publicly.
  - Behavior impact: Creates private systems; misalignment.
  - Distortion: Rigor becomes hidden inefficiency.
  - Snapshot: Keeps private templates others don’t see.
  - Work / bandwidth impact: Duplicated effort.
  - Risk if ignored: Friction.
  - Best way to approach: Normalize shared templates and co‑creation.
  - Micro‑accommodations: Shared templates; optional structure workshops.
  - Peer scripts: “Can I share a short template that might help?” / “Want to co‑create a standard we can all use?”
  - Trial metrics: % team using template; time saved.
  - Tools / supports: Shared template library.
  - Privacy phrasing: “I have a short template that helps me — can I share it?”
Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Extra time for reading/writing/numeric tasks; prefers assistive tools.
  - Behavior impact: Slower document turnaround; reliance on tools or delegation.
  - Distortion: Output quality high but throughput drops.
  - Snapshot: Spends extra hours polishing a short methods section.
  - Work / bandwidth impact: Slower publication cadence.
  - Risk if ignored: Missed deadlines.
  - Best way to approach: Offer scribe support, templates, and assistive tech.
  - Micro‑accommodations: Co‑authoring; speech‑to‑text; calculators.
  - Peer scripts: “I can help draft the write‑up from your notes.” / “Record a voice note and I’ll transcribe it.”
  - Trial metrics: Time to publish; % co‑authored docs.
  - Tools / supports: Speech‑to‑text; templates; co‑authoring.
  - Privacy phrasing: “I prefer to record a voice note for the write‑up — can I send that?”
Auditory Processing / Sensory Processing / Tourette Syndrome
  - Manifestation: Difficulty in fast spoken exchanges; sensory overload.
  - Behavior impact: Prefers captions, slides, and written follow‑ups.
  - Distortion: Live participation reduced.
  - Snapshot: Asks for meeting notes after a rapid Q&A.
  - Work / bandwidth impact: Misunderstandings and repeated clarifications.
  - Risk if ignored: Errors and exclusion.
  - Best way to approach: Use captions, share slides in advance, allow written follow‑ups.
  - Micro‑accommodations: Captions; slides/notes in advance; quiet rooms.
  - Peer scripts: “I’ll share slides and notes before the meeting.” / “Drop your questions in the doc and I’ll read them aloud.”
  - Trial metrics: # written contributions; meeting comfort rating.
  - Tools / supports: Live captions; shared decks.
  - Privacy phrasing: “I’ll drop my questions in the doc and follow up after the meeting.”
Working Memory / Processing Speed Differences
  - Manifestation: Needs external aids and extra time to synthesize.
  - Behavior impact: Prefers pre‑reads and reflection time.
  - Distortion: Synthesis speed reduced but quality improves after reflection.
  - Snapshot: Requests pre‑reads and postpones a decision.
  - Work / bandwidth impact: Slower cadence but higher quality.
  - Risk if ignored: Hasty decisions.
  - Best way to approach: Provide concise pre‑reads and short reflection pauses.
  - Micro‑accommodations: Pre‑reads 24–48 hours ahead; 5‑minute recap pauses.
  - Peer scripts: “I’ll send a 2‑slide summary before the meeting.” / “Let’s pause five minutes after the pitch.”
  - Trial metrics: % decisions postponed for reflection; quality of final plans.
  - Tools / supports: Pre‑read templates; recap prompts.
  - Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting.”

Strategist — Neurodivergence & Cognitive Accessibility (fully expanded, high‑detail)
I focused extra depth here as you requested. Each subcategory below follows the full schema plus practical micro‑accommodations, short peer scripts, trial metrics, suggested tools/supports, and a privacy‑first phrasing the person can use. I emphasized approaches that preserve strategic influence while protecting cognitive bandwidth and social safety.
ADHD
  - Manifestation: Rapid idea generation, impatience with slow alignment, difficulty sustaining long, multi‑stakeholder programs.
  - Behavior impact: Launches many strategic threads; abandons some before integration; seeks high‑stimulus solutions.
  - Distortion of typical Strategist pattern: Breadth becomes scattered ideation without follow‑through; visionary credibility erodes.
  - Real‑life snapshot: Proposes five initiatives in a week, then pivots when one stalls.
  - Work / bandwidth impact: Resource churn, fragmented priorities, stakeholder confusion.
  - Risk if ignored: Initiative fatigue, credibility loss, wasted resources.
  - Best way to approach: Channel urgency into short, time‑boxed experiments with explicit stop rules and visible trackers.
  - Micro‑accommodations:
    * Convert big ideas into 2–4 week pilots with explicit success/fail criteria.
    * Public board with WIP limits; cap active strategic pilots to 1–2.
    * Peer scripts:
    * “Love this — can we convert it into a two‑week pilot with clear stop rules?”
    * “Let’s pick one small experiment and I’ll help scope the success criteria.”
    * Trial metrics:
    * active pilots limited to ≤2; pilot completion rate.
    * Stakeholder satisfaction (1–5) after each pilot.
    * Tools / supports: Kanban with WIP limits; short weekly 15‑minute syncs; timers and calendar blocks.
    * Privacy phrasing: “I’m running a short, low‑visibility pilot and will share results after the test.”
Executive Function Differences
  - Manifestation: Difficulty sequencing multi‑phase programs and keeping timelines aligned across stakeholders.
  - Behavior impact: Overfocus on one phase; misses integration and stakeholder comms.
  - Distortion: Orchestration becomes uneven; pilots fail to scale.
  - Real‑life snapshot: Launches a pilot without a scaling plan; ops scramble.
  - Work / bandwidth impact: Bottlenecks at handoffs; missed scaling opportunities.
  - Risk if ignored: Failed pilots and wasted resources.
  - Best way to approach: Use simple sequencing templates, mandatory handoff notes, and visible owners for each phase.
  - Micro‑accommodations: Phase checklist (3–5 items); one‑page handoff note required before phase transition.
  - Peer scripts: “Let’s map the three handoffs and owners — I’ll draft the checklist.” / “Can we require a one‑page handoff before scaling?”
  - Trial metrics: % launches with completed handoff note; post‑launch incidents.
  - Tools / supports: Lightweight RACI; shared milestone calendar; handoff template.
  - Privacy phrasing: “I prefer a short handoff note before scaling so we avoid surprises.”
Time Blindness
  - Manifestation: Underestimates time for alignment, approvals, and organizational change.
  - Behavior impact: Sets aggressive launch dates; compresses stakeholder engagement.
  - Distortion: Timeline optimism becomes credibility risk.
  - Real‑life snapshot: Announces a Q3 rollout stakeholders can’t operationalize.
  - Work / bandwidth impact: Rushed implementations, missed dependencies.
  - Risk if ignored: Reputation damage and failed rollouts.
  - Best way to approach: Use historical benchmarks, built‑in buffers, and visible countdowns.
  - Micro‑accommodations: Default buffer rules (+25–40%); pre‑commitment resource check; visible countdowns.
  - Peer scripts: “Can we add a two‑week buffer for alignment so ops can staff it?” / “Let’s use last project X as a benchmark and add a buffer.”
  - Trial metrics: % commitments met; average buffer added.
  - Tools / supports: Historical timeline dashboard; estimation checklist; shared calendar milestones.
  - Privacy phrasing: “I’m using a conservative timeline this time to make sure we hit it.”
Task Initiation Difficulty
  - Manifestation: Paralysis when the first step is ambiguous; waits for perfect data or conditions.
  - Behavior impact: Delays exploratory tests; misses market windows.
  - Distortion: Readiness to test hypotheses becomes stalled planning.
  - Real‑life snapshot: Waits for perfect market data before running a small experiment.
  - Work / bandwidth impact: Slow learning and missed opportunities.
  - Risk if ignored: Competitive disadvantage.
  - Best way to approach: Provide a one‑sentence first action, a 30‑minute kickoff pairing, and a minimal viable experiment template.
  - Micro‑accommodations: One‑sentence first action; 30‑minute co‑start session; minimal experiment template.
  - Peer scripts: “What’s one tiny test we can run in a day?” / “I’ll pair for the first 30 minutes to lower activation energy.”
  - Trial metrics: Time from idea to first action; # ideas reaching pilot.
  - Tools / supports: Kickoff pairing slots; simple experiment templates.
  - Privacy phrasing: “Can we do a 30‑minute co‑start so I can get this moving?”
Context‑Switching Difficulty
  - Manifestation: High cognitive cost switching between strategic thinking and operational firefighting.
  - Behavior impact: Protects long deep‑work blocks; resists ad‑hoc operational asks.
  - Distortion: Adaptability reduces; perceived uncooperativeness increases.
  - Real‑life snapshot: Skips daily standups to protect a strategy deep‑work block.
  - Work / bandwidth impact: Coordination gaps and slower response to emergent issues.
  - Risk if ignored: Missed signals and stakeholder frustration.
  - Best way to approach: Agree on protected deep‑work windows, concise async briefs, and a clear escalation path for true emergencies.
  - Micro‑accommodations: Protected core hours; 3‑bullet async updates; single escalation contact.
  - Peer scripts: “I’ll send a 3‑bullet update after your focus block — no need to interrupt.” / “If it’s urgent, text URGENT and I’ll respond.”
  - Trial metrics: # interruptions during deep work; % items resolved async.
  - Tools / supports: Async update templates; calendar focus blocks; escalation rules.
  - Privacy phrasing: “I’m protecting a 3‑hour strategy block — text URGENT if it can’t wait.”
Hyperfocus Patterns
  - Manifestation: Intense immersion in one strategic angle; neglects alternatives and stakeholder signals.
  - Behavior impact: Produces persuasive cases for one path while ignoring counter signals.
  - Distortion: Conviction becomes tunnel vision and blind spots.
  - Real‑life snapshot: Crafts an elaborate plan for one market and misses signals in others.
  - Work / bandwidth impact: Imbalanced resource allocation and blind spots.
  - Risk if ignored: Strategic myopia and missed threats.
  - Best way to approach: Require forced alternative framing, time‑boxed deep dives, and scheduled cross‑checks.
  - Micro‑accommodations: Devil’s‑advocate 10‑minute counter scenarios; time‑boxed deep dives with post‑dive cross‑checks.
  - Peer scripts: “Can you give a 10‑minute counter‑scenario summary so we surface blind spots?” / “Let’s time‑box this deep dive to two weeks and schedule a cross‑check.”
  - Trial metrics: # counter scenarios produced; % deep dives with cross‑checks.
  - Tools / supports: Structured scenario templates; scheduled cross‑checks.
  - Privacy phrasing: “I’m doing a time‑boxed deep dive and will share counter scenarios at the mid‑point.”
Rejection Sensitivity
  - Manifestation: Strong emotional reaction to critique; may withdraw or double down defensively.
  - Behavior impact: Avoids early feedback; becomes rigid when challenged.
  - Distortion: Openness to iteration becomes brittle defensiveness.
  - Real‑life snapshot: Stops sharing drafts after a blunt comment and circulates a final version only.
  - Work / bandwidth impact: Slower iteration and reduced team input.
  - Risk if ignored: Stalled refinement and isolation.
  - Best way to approach: Start with private, strengths‑based feedback, then one specific improvement; encourage small public wins.
  - Micro‑accommodations: Private preview sessions; feedback sandwich (strength + one tweak).
  - Peer scripts: “This is strong — one tweak that could help is X; want to iterate together?” / “Can I give you private feedback before the next demo?”
  - Trial metrics: Frequency of private previews; change in early sharing frequency.
  - Tools / supports: Private feedback channels; short feedback templates.
  - Privacy phrasing: “I prefer private feedback on early drafts — can we do that for the next two demos?”
Masking Fatigue
  - Manifestation: Exhaustion from maintaining a polished, persuasive persona in high‑stakes settings.
  - Behavior impact: Reduced spontaneity, fewer informal check‑ins, occasional withdrawal.
  - Distortion: Charismatic advocacy becomes less frequent and less authentic.
  - Real‑life snapshot: Declines to attend informal strategy dinners after a week of presentations.
  - Work / bandwidth impact: Loss of informal influence and slower coalition building.
  - Risk if ignored: Burnout and diminished leadership presence.
  - Best way to approach: Offer low‑visibility contribution channels, co‑presenting support, and normalize recovery breaks.
  - Micro‑accommodations: Written input channels; co‑presenter for Q&A; recovery half‑days after major events.
  - Peer scripts: “I’ll co‑present the Q&A so you can focus on the pitch.” / “Take a recovery half‑day after the presentation — we’ll cover.”
  - Trial metrics: # low‑visibility contributions; self‑reported recovery effectiveness.
  - Tools / supports: Shared idea doc; co‑presenter pairing; opt‑out options.
  - Privacy phrasing: “I’ll contribute in writing this round while I recharge.”
Social Communication Load
  - Manifestation: Extra effort to translate complex strategy into accessible narratives; fatigue from repeated persuasion.
  - Behavior impact: Prefers crafted memos and one‑on‑one briefings over repeated public pitches.
  - Distortion: Storytelling presence in broad forums weakens.
  - Real‑life snapshot: Sends a polished memo and asks a peer to present it in a town hall.
  - Work / bandwidth impact: Slower buy‑in and reliance on proxies.
  - Risk if ignored: Strategy fails to land across the org.
  - Best way to approach: Provide executive summary templates, co‑presenting support, and scheduled short stakeholder touchpoints.
  - Micro‑accommodations: 3‑slide summary template; co‑presenter for town halls; scheduled touchpoints.
  - Peer scripts: “I’ll draft a 3‑slide summary and co‑present the Q&A.” / “Can I handle the Q&A so you can focus on the narrative?”
  - Trial metrics: % stakeholders reached; follow‑through rate after launch.
  - Tools / supports: Summary templates; co‑presenter pairing; stakeholder cadence.
  - Privacy phrasing: “I’d like to co‑present the Q&A so I can focus on the narrative.”
Need for Written Instructions
  - Manifestation: Performs best when decision rules and escalation paths are documented.
  - Behavior impact: Requests clear frameworks; slows ad‑hoc pivots.
  - Distortion: Agility reduced by over‑reliance on written rules.
  - Real‑life snapshot: Insists on a documented decision rubric before approving a pilot.
  - Work / bandwidth impact: Higher clarity but slower responsiveness.
  - Risk if ignored: Misalignment and inconsistent decisions.
  - Best way to approach: Provide concise decision rubrics and a “fast lane” for urgent decisions with post‑hoc documentation.
  - Micro‑accommodations: One‑page decision rubrics; fast‑lane exception process.
  - Peer scripts: “Here’s a one‑page rubric — want me to draft it?” / “We can use a fast lane for urgent items and document after.”
  - Trial metrics: % decisions using rubric; time to decision in fast lane.
  - Tools / supports: One‑page templates; shared doc.
  - Privacy phrasing: “Can we capture the decision criteria in one short doc so I can approve quickly?”
Need for Reduced Interruption
  - Manifestation: Deep strategic thinking is fragile; interruptions derail momentum.
  - Behavior impact: Protects long blocks; declines ad‑hoc asks.
  - Distortion: Responsiveness to emergent opportunities reduces.
  - Real‑life snapshot: Sets “do not disturb” during strategy sprints and misses quick alignment calls.
  - Work / bandwidth impact: Missed urgent signals vs. higher quality strategy.
  - Risk if ignored: Lost opportunities or poor quality work.
  - Best way to approach: Define clear escalation rules and use async updates for non‑urgent items.
  - Micro‑accommodations: Protected deep‑work windows; single escalation contact; async 3‑bullet updates.
  - Peer scripts: “If it’s urgent, text URGENT and I’ll respond; otherwise send a 3‑bullet update.” / “I’ll respect your deep‑work window — who should I contact if it’s urgent?”
  - Trial metrics: # escalations during deep work; % items resolved async.
  - Tools / supports: Slack status conventions; escalation contact; async templates.
  - Privacy phrasing: “I’m in a deep‑work block — text URGENT if it can’t wait.”
Need for Structure Without Shame
  - Manifestation: Prefers explicit frameworks but may hesitate to request them publicly.
  - Behavior impact: Creates private structures; misalignment with team norms.
  - Distortion: Frameworks become idiosyncratic and hard to socialize.
  - Real‑life snapshot: Uses a personal strategy template others don’t see.
  - Work / bandwidth impact: Miscommunication and duplicated effort.
  - Risk if ignored: Friction and hidden workload.
  - Best way to approach: Normalize shared templates and invite co‑creation as a productivity improvement.
  - Micro‑accommodations: Shared strategy templates; optional structure workshops.
  - Peer scripts: “Can I share a short template that might help?” / “Want to co‑create a standard we can all use?”
  - Trial metrics: % team using template; time saved.
  - Tools / supports: Shared template library; short workshops.
  - Privacy phrasing: “I have a short template that helps me — can I share it with you?”
Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Extra time for reading, numeric modeling, or handwriting; prefers visual or typed outputs.
  - Behavior impact: Strong verbal strategy but slower written artifacts.
  - Distortion: Verbal fluency not matched by timely documentation.
  - Real‑life snapshot: Delivers a compelling verbal plan but the written roadmap is delayed.
  - Work / bandwidth impact: Delay in documentation and handoffs.
  - Risk if ignored: Miscommunication and missed opportunities.
  - Best way to approach: Offer scribe support, templates, and assistive tech; pair for documentation.
  - Micro‑accommodations: Scribe/co‑author for write‑ups; speech‑to‑text; templates for roadmaps.
  - Peer scripts: “I’ll draft the first roadmap from your notes — want me to?” / “Record a quick voice note and I’ll transcribe it.”
  - Trial metrics: Time from verbal plan to published roadmap; % co‑authored docs.
  - Tools / supports: Speech‑to‑text; co‑authoring tools; templates.
  - Privacy phrasing: “I prefer to record a voice note for the roadmap — can I send that instead of drafting?”
Auditory Processing / Sensory Processing / Tourette Syndrome
  - Manifestation: Difficulty following rapid multi‑speaker debates; sensory overload in long sessions.
  - Behavior impact: Prefers structured turn‑taking, captions, and written summaries; may opt out of noisy workshops.
  - Distortion: Live facilitation presence reduced.
  - Real‑life snapshot: Leaves a noisy offsite early and submits a written strategy afterward.
  - Work / bandwidth impact: Reduced live facilitation and slower consensus.
  - Risk if ignored: Exclusion and missed input.
  - Best way to approach: Share slides/notes in advance, use captions, allow written Q&A, and normalize opt‑outs.
  - Micro‑accommodations: Captions; slides/notes in advance; opt‑out channels; quiet rooms.
  - Peer scripts: “I’ll share slides and notes before the session so you can pick what to comment on.” / “Drop your questions in the doc and I’ll read them aloud.”
  - Trial metrics: # written contributions; meeting comfort rating.
  - Tools / supports: Live captions; shared decks; quiet rooms.
  - Privacy phrasing: “I’ll drop my input in the doc and follow up after the session.”
Working Memory / Processing Speed Differences
  - Manifestation: Needs external aids to hold multiple threads and extra time to synthesize complex inputs.
  - Behavior impact: Requests pre‑reads and reflection time; slower in rapid exchanges.
  - Distortion: Rapid synthesis becomes delayed but often higher quality.
  - Real‑life snapshot: Asks to postpone a decision to allow integration of inputs.
  - Work / bandwidth impact: Slower decision cadence but better outcomes after reflection.
  - Risk if ignored: Hasty decisions and missed nuance.
  - Best way to approach: Provide concise pre‑reads, short recap pauses, and allow reflection windows before finalizing decisions.
  - Micro‑accommodations: Pre‑reads 24–48 hours ahead; 5‑minute recap pauses in meetings; short reflection windows.
  - Peer scripts: “I’ll send a 2‑slide summary before the meeting so you can reflect.” / “Let’s pause five minutes after the pitch so you can gather thoughts.”
  - Trial metrics: % decisions postponed for reflection; quality of final plans.
  - Tools / supports: Pre‑read templates; meeting recap prompts; checklist recaps.
  - Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting to finalize my input.”

If this matches what you want, I’ll (1) retroactively replace the Neurodivergence sections for Controller, Specialist, and Strategist in your master toolkit with these expanded blocks, and (2) continue the sequence and upgrade the remaining profiles the same way.
`,
  },
  {
    id: "lived-experience-context-lens",
    lens: "Lived Experience Context Lens",
    status: "PARTIAL / EXTRACTED CONTENT ONLY",
    source: "Untitled 5.txt",
    content: `LENS: Lived Experience Context Lens
STATUS: PARTIAL / EXTRACTED CONTENT ONLY
SOURCE: Untitled 5.txt
DEDUPLICATION / CLEANUP NOTE: Merged the lived-experience profile sections found in the document and removed surrounding conversation text. The document contains profile-level work for Venturer, Promoter, Adapter, Craftsman, Guardian, Operator, Individualist, Collaborator, Connector, Catalyst, and Integrator, plus a reference-source section. It does not contain all 17 original PI profiles.
================================================================================

Venturer — Lived Experience Context across 15 Domains
Below is the profile‑by‑profile matrix for Venturer across all 15 lived‑experience domains. Each subcategory uses the locked schema: Manifestation · Behavior impact · Distortion of typical Venturer pattern · Real‑life snapshot (1–2 lines) · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial).
I kept entries tight so we move fast while staying actionable. Neurodivergence subcategories are expanded with micro‑accommodations, peer scripts, trial metrics, tools, and privacy phrasing.

1 Economic & Material Security
Low socioeconomic background / Financial insecurity / Debt stress / No emergency savings
  - Manifestation: Constant urgency to secure wins; pressure to monetize ideas.
  - Behavior impact: Chases quick wins, takes high‑risk bets, may overpromise.
  - Distortion: Venturer’s healthy risk appetite becomes desperate, short‑termism.
  - Snapshot: Pushes a rapid monetization pivot mid‑project to cover bills.
  - Work impact: Fragmented focus; unfinished initiatives.
  - Risk if ignored: Reputation damage, financial collapse.
  - Best approach: Validate urgency; co‑design 2–4 week capped experiments with clear stop rules.
Housing/transport/childcare/limited tech/working multiple jobs
  - Manifestation: Erratic availability; bursts of high energy outside normal hours.
  - Behavior impact: Starts initiatives at odd times; misses synchronous commitments.
  - Distortion: Opportunism becomes unreliable delivery.
  - Snapshot: Launches a prototype at 2am, misses daytime stakeholder calls.
  - Work impact: Coordination friction; late handoffs.
  - Best approach: Offer async channels, accept time‑boxed deliverables, confirm availability windows.
Medical debt / Limited healthcare / Food insecurity
  - Manifestation: Background stress reduces cognitive bandwidth.
  - Behavior impact: Impulsive decisions to solve immediate needs.
  - Distortion: Boldness becomes risky shortcuts.
  - Best approach: Offer private, practical resource suggestions and low‑visibility pilots.

2 Family System & Caregiving Context
Parentification / Childcare / Elder caregiving / Single‑parent responsibilities
  - Manifestation: Tight scheduling, guilt about time away.
  - Behavior impact: Jumps between tasks; accepts short, visible wins.
  - Distortion: Venturer’s exploratory energy becomes fragmented and reactive.
  - Snapshot: Starts a side project between school runs; misses syncs.
  - Work impact: Unpredictable bursts of output; missed meetings.
  - Best approach: Propose micro‑experiments, async updates, and swap tasks when possible.
Domestic violence / Substance exposure / Multigenerational strain
  - Manifestation: Hypervigilance, secrecy, emotional exhaustion.
  - Behavior impact: Erratic availability; guarded sharing.
  - Distortion: Risk‑taking may mask survival strategies.
  - Best approach: Prioritize safety, confidentiality, and offer low‑visibility support.

3 Immigration, Displacement & Cultural Transition
Immigration history / Visa uncertainty / Credential barriers
  - Manifestation: Drive to prove worth; anxiety about status.
  - Behavior impact: Over‑documentation, seeks visible wins to validate status.
  - Distortion: Venturer’s experimentation becomes over‑justified pitching.
  - Best approach: Validate competence, offer small public showcases and credential‑bridging help.
Language transition / Accent bias / Code‑switching fatigue
  - Manifestation: Extra cognitive load in persuasion; prefers rehearsed pitches.
  - Behavior impact: Uses prepared demos rather than impromptu selling.
  - Best approach: Provide slides/notes in advance and co‑present opportunities.

4 Education & Access Background
First‑generation / Under‑resourced schooling / Interrupted education
  - Manifestation: High self‑reliance; skepticism of formal mentorship.
  - Behavior impact: Prefers DIY learning; may avoid formal sponsorship.
  - Distortion: Venturer’s curiosity becomes lone‑wolf hustling.
  - Best approach: Offer peer learning swaps, low‑cost resources, and framed mentorship as efficiency.
Undiagnosed learning differences / Late diagnosis
  - Manifestation: Compensatory strategies; variable stamina for high‑tempo outreach.
  - Best approach: Provide templates, extra time for written follow‑ups, and rehearsal opportunities.

5 Neurodivergence & Cognitive Accessibility — Expanded
Each subcategory below includes: Manifestation · Behavior impact · Distortion · Snapshot · Work impact · Risk · Best approach, then Micro‑accommodations · Peer scripts · Trial metrics · Tools/supports · Privacy phrasing.
ADHD
  - Manifestation: Rapid idea generation; difficulty sustaining multi‑step follow‑through.
  - Behavior impact: Starts many pilots, abandons some; seeks novelty.
  - Distortion: Opportunism → scattered impulsivity.
  - Snapshot: Pitches multiple products, moves on before pilots finish.
  - Work impact: Resource churn, unfinished work.
  - Risk: Credibility loss.
  - Best approach: Convert ideas into 2–4 week pilots with explicit stop rules.
    * Micro‑accommodations: WIP limits; public Kanban; weekly 15‑minute check‑ins.
    * Peer scripts: “Love this — pick one pilot and cap it at two weeks?” / “Can I help scope success criteria?”
    * Trial metrics: Active pilots ≤2; pilot completion rate.
    * Tools: Trello/Jira with WIP limits; timers; calendar blocks.
    * Privacy phrasing: “I’m running a short pilot and will share results after the test.”
Executive Function Differences
  - Manifestation: Trouble sequencing launches and handoffs.
  - Best approach: Phase checklists and mandatory handoff notes.
    * Micro‑accommodations: One‑page handoff template.
    * Peer scripts: “Let’s map handoffs and owners — I’ll draft the checklist.”
    * Trial metrics: % launches with handoff note; post‑launch incidents.
    * Tools: RACI, milestone calendar.
    * Privacy phrasing: “Can we capture a short handoff note before launch?”
Time Blindness
  - Manifestation: Underestimates alignment time.
  - Best approach: Historical benchmarks and buffers.
    * Micro‑accommodations: +30% buffer rule; pre‑commitment resource check.
    * Peer scripts: “Add a two‑week buffer so ops can staff it.”
    * Trial metrics: % commitments met; average buffer added.
    * Tools: Timeline dashboard.
    * Privacy phrasing: “I’m using a conservative timeline this time.”
Task Initiation Difficulty
  - Manifestation: Needs a clear first action.
  - Best approach: Provide a one‑sentence first step and pair for kickoff.
    * Micro‑accommodations: 15–30 minute co‑start.
    * Peer scripts: “Let’s do the first 30 minutes together.”
    * Trial metrics: Time to first action; # ideas reaching pilot.
    * Tools: Kickoff slots; checklists.
    * Privacy phrasing: “Can you pair for the first 30 minutes so I can get started?”
Context‑Switching Difficulty
  - Manifestation: High cost to switch; needs recovery.
  - Best approach: Protected creative blocks and async updates.
    * Micro‑accommodations: Focus blocks; 3‑bullet async updates.
    * Peer scripts: “I’ll send a 3‑bullet update after your block.”
    * Trial metrics: Interruptions during blocks; % items resolved async.
    * Tools: Calendar focus blocks; Slack status conventions.
    * Privacy phrasing: “I’m protecting a 2‑hour creative block — please send a 3‑bullet update.”
Hyperfocus Patterns
  - Manifestation: Deep immersion; neglects other priorities.
  - Best approach: Mid‑pilot check‑ins and visible stop signals.
    * Micro‑accommodations: Mid‑pilot check; shared priority list.
    * Peer scripts: “Set a mid‑pilot check‑in so we don’t lose other priorities.”
    * Trial metrics: Missed commitments while hyperfocused; % pilots with check‑ins.
    * Tools: Progress board; automated reminders.
    * Privacy phrasing: “I’m in a focused sprint — I’ll set a mid‑sprint check‑in.”
Rejection Sensitivity
  - Manifestation: Avoids early feedback; may withdraw.
  - Best approach: Private, strengths‑based feedback and safe previews.
    * Micro‑accommodations: Private preview sessions.
    * Peer scripts: “Can I preview this privately and give one focused suggestion?”
    * Trial metrics: Frequency of private previews; early sharing rate.
    * Tools: Private feedback channel.
    * Privacy phrasing: “I prefer private feedback on early drafts.”
Masking Fatigue
  - Manifestation: Exhaustion from persona maintenance.
  - Best approach: Low‑visibility contribution channels and recovery time.
    * Micro‑accommodations: Idea doc; recovery half‑days.
    * Peer scripts: “Drop your idea in this doc and I’ll surface it.”
    * Trial metrics: Async contributions; energy after recovery.
    * Tools: Shared idea doc; opt‑out mechanism.
    * Privacy phrasing: “I’ll contribute in writing this round while I recharge.”
Social Communication Load
  - Manifestation: Fatigue from repeated persuasion.
  - Best approach: 3‑slide summaries and co‑presenting support.
    * Micro‑accommodations: Executive summary template; co‑presenter.
    * Peer scripts: “I’ll co‑present the Q&A so you can focus on the pitch.”
    * Trial metrics: Stakeholder reach; follow‑through rate.
    * Tools: Slide templates; co‑presenter pairing.
    * Privacy phrasing: “I’d like to co‑present the Q&A.”
Need for Written Instructions
  - Manifestation: Prefers concise checklists for launches.
  - Best approach: One‑page launch checklist and sample first action.
    * Micro‑accommodations: Checklist template.
    * Peer scripts: “Give me 3 bullets of success criteria and I’ll draft the checklist.”
    * Trial metrics: % launches with checklist.
    * Tools: Shared doc templates.
    * Privacy phrasing: “Can we capture the launch steps in one short doc?”
Need for Reduced Interruption
  - Manifestation: Flow is fragile; interruptions derail momentum.
  - Best approach: Clear escalation rules and async updates.
    * Micro‑accommodations: Escalation contact; focus windows.
    * Peer scripts: “If urgent, text URGENT; otherwise send a 3‑bullet update.”
    * Trial metrics: Escalations during focus blocks; % items resolved async.
    * Tools: Slack status conventions.
    * Privacy phrasing: “I’m in a focus block — text URGENT if it can’t wait.”
Need for Structure Without Shame
  - Manifestation: Wants scaffolding but may not ask.
  - Best approach: Normalize lightweight templates and shared idea queues.
    * Micro‑accommodations: Shared idea queue with WIP limits.
    * Peer scripts: “Can I add this to our shared queue and help prioritize it?”
    * Trial metrics: % ideas in shared queue; time to prioritized pilot.
    * Tools: Shared doc; WIP limits.
    * Privacy phrasing: “Can we add this to the shared list so it’s visible?”
Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Extra time for written/numeric tasks; prefers spoken or visual follow‑ups.
  - Best approach: Scribe support, speech‑to‑text, co‑authoring.
    * Micro‑accommodations: Co‑author follow‑ups; voice notes transcribed.
    * Peer scripts: “I’ll draft the follow‑up from your notes — want me to?”
    * Trial metrics: Time from pitch to published follow‑up.
    * Tools: Otter/voice transcription; templates.
    * Privacy phrasing: “I prefer to record a voice note for follow‑up.”
Auditory/Sensory Processing / Tourette
  - Manifestation: Overload in noisy sessions; may opt out.
  - Best approach: Captions, slides in advance, opt‑out channels.
    * Micro‑accommodations: Captions; quiet rooms.
    * Peer scripts: “I’ll share slides and notes before the session.”
    * Trial metrics: Written contributions; meeting comfort rating.
    * Tools: Live captions; shared decks.
    * Privacy phrasing: “I’ll drop my idea in the doc and follow up after the session.”
Working Memory / Processing Speed
  - Manifestation: Needs pre‑reads and reflection time.
  - Best approach: Pre‑reads 24–48 hours ahead; short recap pauses.
    * Micro‑accommodations: 5‑minute recap pauses.
    * Peer scripts: “I’ll send a 2‑slide summary before the meeting.”
    * Trial metrics: % decisions postponed for reflection; quality of final plans.
    * Tools: Pre‑read templates; recap prompts.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting.”

6 Disability, Health & Body‑Based Factors
Chronic illness / Chronic pain / Fatigue / Fluctuating capacity
  - Manifestation: Variable bursts of high energy and low capacity.
  - Behavior impact: Front‑loads creative work; needs recovery windows.
  - Distortion: Venturer’s steady momentum becomes unpredictable.
  - Best approach: Private signals for low‑capacity days, flexible timelines, written handoffs.
Sleep disorders / Medication side effects / Appointment burden
  - Manifestation: Cognitive fog; irritability.
  - Best approach: Recorded demos, written summaries, flexible scheduling.
Mobility / Sensory impairment / Appointment burden
  - Best approach: Accessible formats, opt‑out options, asynchronous contribution channels.

7 Trauma, Adversity & Nervous‑System Load
Childhood adversity / Abuse / Workplace trauma / Institutional betrayal
  - Manifestation: Hypervigilance; distrust of ambiguous feedback.
  - Behavior impact: May overcompensate with visible wins or withdraw.
  - Distortion: Risk‑taking used as survival strategy.
  - Best approach: Calm, private validation; avoid surprise evaluations; offer small, safe experiments.
Hypervigilance / People‑pleasing / Overachievement as survival
  - Best approach: Encourage boundary scripts, private check‑ins, and normalize saying no.

8 Identity, Marginalization & Belonging
Racial/ethnic bias / LGBTQ+ stress / Tokenism / Microaggression fatigue
  - Manifestation: Extra labor to manage impressions; reluctance to be visible.
  - Behavior impact: May avoid representing identity publicly; seeks visible wins to counter bias.
  - Distortion: Venturer’s public persona becomes guarded or performative.
  - Best approach: Acknowledge pressures privately, avoid tokenizing, invite structured voluntary participation.
Code‑switching / Pressure to represent
  - Best approach: Provide multiple channels for input and explicitly invite informal contributions.

9 Work History & Occupational Socialization
Toxic workplace / Micromanagement / Retaliation history / Layoff trauma
  - Manifestation: Distrust of systems; seeks quick visible wins to secure position.
  - Behavior impact: Short‑termism; reluctance to escalate systemic issues.
  - Best approach: Offer confidential peer validation and safe, small experiments to rebuild trust.
Job instability / High responsibility without support
  - Best approach: Validate short‑term wins and co‑design protected time for exploration.

10 Social Support & Community Context
Limited support network / Social isolation / Mentorship availability
  - Manifestation: Heavy reliance on work for social capital; seeks rapid recognition.
  - Behavior impact: Overinvests in visibility; may burn out.
  - Best approach: Offer peer recognition, reciprocal support, and mentorship pairings.
Community safety / Relocation loneliness
  - Best approach: Encourage balanced social outlets and small boundary practices.

11 Life Stage & Transition Factors
New parenthood / Pregnancy/postpartum / Menopause / Mid‑career reinvention / Retirement anxiety / Moving / Divorce / Death / Major health diagnosis
  - Manifestation: Variable capacity; need for predictability.
  - Behavior impact: Either hyper‑compensation or withdrawal.
  - Best approach: Offer written priorities, temporary role adjustments, and respect privacy.
Legal proceedings / Sudden financial event / Natural disaster
  - Best approach: Async options, private check‑ins, and short trial adjustments.

12 Environmental & Sensory Context
Loud environment / Open office / Lighting sensitivity / Constant interruptions / High meeting density / Notification overload / Remote/hybrid ambiguity / Commute stress
  - Manifestation: Creative flow fragile; sensory fatigue.
  - Behavior impact: Prefers quiet, scheduled creative blocks; avoids ad‑hoc collaboration.
  - Best approach: Quiet hours, written agendas, opt‑out options, and respect for focus windows.
Workspace crowding / Physical safety concerns
  - Best approach: Provide opt‑outs and written summaries of events.

13 Cultural Values & Communication Norms
High‑context vs low‑context / Direct vs indirect / Deference to authority / Collectivist vs individualist norms
  - Manifestation: Extra effort to translate urgency and respect signals.
  - Behavior impact: May misread cues or overcompensate in public pitches.
  - Best approach: Clarify norms in writing, invite cultural context, and ask privately about preferred styles.
Modesty/self‑promotion discomfort / Different meanings of urgency
  - Best approach: Frame recognition as team outcomes and clarify urgency signals.

14 Legal, Administrative & Bureaucratic Stress
Immigration paperwork / Court proceedings / Benefits / Insurance / Disability accommodations / Background checks / Housing applications
  - Manifestation: Heavy cognitive load; fear of errors.
  - Behavior impact: Time spent on admin; avoidance of extra complexity.
  - Best approach: Share step‑by‑step checklists, private resource referrals, and offer time to manage paperwork.
Past criminalization / Background check anxiety
  - Best approach: Confidential guidance and resources for disclosure decisions.

15 Protective Factors & Resilience Resources
Mentor support / Stable housing / Financial cushion / Psychological safety / Clear expectations / Flexible scheduling / Peer relationships / Healthcare access / Effective accommodations / Recovery time / Purpose / Therapy / Skill mastery / Self‑advocacy
  - Manifestation: Greater capacity to take measured risks, iterate publicly, and sustain momentum.
  - Behavior impact: Balanced experimentation, better follow‑through, and healthier pacing.
  - Best approach: Encourage use of supports, suggest peer accountability partners, and co‑design recovery rituals.

If this pace and level of compression work for you, I’ll continue the same faster cadence for the next profile (Promoter) and keep the Neurodivergence section fully expanded. Say continue and I’ll run Promoter through all 15 domains next.

yes

Promoter — Lived Experience Context across 15 Domains
Below is a fast, scan‑friendly matrix for Promoter across all 15 lived‑experience domains. Each subcategory uses the locked schema: Manifestation · Behavior impact · Distortion of typical Promoter pattern · Real‑life snapshot (1–2 lines) · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial).
The Neurodivergence domain is expanded with micro‑accommodations, peer scripts, trial metrics, tools/supports, and privacy phrasing.

1 Economic & Material Security
  - Low socioeconomic background / Financial insecurity / Debt stress
    * Manifestation: Strong need to be visible and secure; seeks quick recognition tied to income.
    * Behavior impact: Pushes for high‑visibility wins, may oversell outcomes.
    * Distortion: Promoter’s natural self‑promotion becomes anxious performance and short‑term deal‑chasing.
    * Snapshot: Volunteers for every showcase to increase perceived value while juggling bills.
    * Work impact: Overcommitment, inconsistent follow‑through.
    * Risk if ignored: Reputation damage, burnout, sudden exit.
    * Best approach: Offer low‑risk visibility opportunities with clear boundaries and short timelines.
  - Housing/transport/childcare/limited tech
    * Manifestation: Erratic availability; uses public energy to mask logistical strain.
    * Best approach: Confirm availability windows; accept async updates and small, visible deliverables.

2 Family System & Caregiving Context
  - Child/elder caregiving / Single‑parent responsibilities / Bereavement
    * Manifestation: Guilt about missing social moments; overcompensates with public contributions.
    * Behavior impact: High visibility when present; sudden absences.
    * Distortion: Promoter’s sociability becomes performative to cover private strain.
    * Snapshot: Leads a lively demo then disappears for caregiving duties.
    * Work impact: Unpredictable presence; reliance on others for continuity.
    * Best approach: Offer flexible, visible roles they can step into/out of; asynchronous ways to shine.
  - Domestic violence / Multigenerational strain
    * Manifestation: Secrecy and hypervigilance; may use public persona to deflect.
    * Best approach: Prioritize confidentiality and offer low‑visibility support.

3 Immigration, Displacement & Cultural Transition
  - Immigration history / Visa uncertainty / Credential barriers
    * Manifestation: Desire to be seen as successful; sensitivity to recognition tied to status.
    * Behavior impact: Seeks public validation; may overexplain credentials.
    * Distortion: Promoter’s charm becomes anxious self‑presentation.
    * Snapshot: Repeats credentials in meetings to preempt bias.
    * Best approach: Offer explicit, private validation and small public platforms that feel safe.
  - Language transition / Accent bias / Code‑switching fatigue
    * Manifestation: Extra effort to perform socially; prefers rehearsed remarks.
    * Best approach: Provide slides/notes in advance and co‑present options.

4 Education & Access Background
  - First‑generation / Under‑resourced schooling / Interrupted education
    * Manifestation: Uses charisma to bridge gaps; avoids asking for formal help.
    * Behavior impact: Relies on networking over formal mentorship.
    * Distortion: Promoter’s networking becomes a substitute for skill development.
    * Best approach: Offer framed mentorship as mutual benefit and low‑stakes learning pods.
  - Undiagnosed learning differences / Late diagnosis
    * Manifestation: Extra effort to keep up with written tasks; prefers speaking.
    * Best approach: Provide templates and scribe support for written follow‑ups.

5 Neurodivergence & Cognitive Accessibility — Expanded
ADHD
  - Manifestation: Rapid idea pitching, difficulty sustaining follow‑through on promotion cycles.
  - Behavior impact: Starts many outreach efforts, drops some before completion.
  - Distortion: Promoter’s enthusiasm becomes scattered hype without delivery.
  - Snapshot: Runs multiple campaigns simultaneously, only some reach completion.
  - Work impact: Reputation risk; inconsistent campaign outcomes.
  - Risk: Credibility erosion.
  - Best approach: Convert outreach into time‑boxed campaigns with clear end dates.
    * Micro‑accommodations: Limit active campaigns to 1–2; short campaign playbooks.
    * Peer scripts: “Love this energy — can we cap it to one campaign this month and set a finish date?” / “Want help turning this into a 2‑week pilot?”
    * Trial metrics: Active campaigns ≤2; campaign completion rate.
    * Tools/supports: Campaign checklist; calendar blocks; Kanban.
    * Privacy phrasing: “I’m testing a short, time‑boxed outreach — I’ll share results after the run.”
Executive Function Differences
  - Manifestation: Trouble sequencing multi‑stage outreach and follow‑ups.
  - Best approach: Use simple follow‑up templates and mandatory next‑step notes.
    * Micro‑accommodations: One‑page follow‑up template.
    * Peer scripts: “I’ll draft the follow‑up email from your notes.”
    * Trial metrics: % follow‑ups sent within 48 hours.
    * Tools: Email templates; CRM reminders.
    * Privacy phrasing: “Can I draft the follow‑up and send it from you?”
Time Blindness
  - Manifestation: Overoptimistic event timelines and last‑minute pushes.
  - Best approach: Add buffers and require minimal lead times for cross‑team asks.
    * Micro‑accommodations: +30% buffer; pre‑commitment checks.
    * Peer scripts: “Can we add a two‑week buffer so ops can staff it?”
    * Trial metrics: % deadlines met; average buffer used.
    * Tools: Timeline templates.
    * Privacy phrasing: “I’m using a conservative timeline this time.”
Task Initiation Difficulty
  - Manifestation: Hesitates to start complex campaigns without a clear first step.
  - Best approach: Provide a one‑sentence first action and pair for kickoff.
    * Micro‑accommodations: 15–30 minute co‑start.
    * Peer scripts: “Let’s do the first 30 minutes together.”
    * Trial metrics: Time to first action.
    * Tools: Kickoff slots.
    * Privacy phrasing: “Can you pair for the first 30 minutes so I can get started?”
Context‑Switching Difficulty
  - Manifestation: Needs recovery after social marathons; avoids back‑to‑back events.
  - Best approach: Schedule spaced events and async updates.
    * Micro‑accommodations: Recovery windows; 3‑bullet async updates.
    * Peer scripts: “I’ll send a 3‑bullet update after your event.”
    * Trial metrics: Interruptions during recovery; % items resolved async.
    * Tools: Calendar focus blocks.
    * Privacy phrasing: “I’m taking a short recovery window after the event.”
Hyperfocus Patterns
  - Manifestation: Deeply invests in one campaign, neglects others.
  - Best approach: Mid‑campaign check‑ins and visible stop signals.
    * Micro‑accommodations: Mid‑campaign review; shared priority list.
    * Peer scripts: “Set a mid‑campaign check‑in so we don’t lose other priorities.”
    * Trial metrics: Missed commitments; % campaigns with check‑ins.
    * Tools: Progress board.
    * Privacy phrasing: “I’m in a focused sprint — I’ll set a mid‑sprint check‑in.”
Rejection Sensitivity
  - Manifestation: Avoids early feedback; may withdraw after public critique.
  - Best approach: Private, strengths‑based feedback and safe previews.
    * Micro‑accommodations: Private preview sessions.
    * Peer scripts: “Can I preview this privately and give one focused suggestion?”
    * Trial metrics: Frequency of private previews.
    * Tools: Private feedback channel.
    * Privacy phrasing: “I prefer private feedback on early drafts.”
Masking Fatigue
  - Manifestation: Exhaustion from constant social performance.
  - Best approach: Low‑visibility contribution channels and recovery time.
    * Micro‑accommodations: Idea doc; recovery half‑days.
    * Peer scripts: “Drop your idea in this doc and I’ll surface it.”
    * Trial metrics: Async contributions; energy after recovery.
    * Tools: Shared idea doc.
    * Privacy phrasing: “I’ll contribute in writing this round while I recharge.”
Social Communication Load
  - Manifestation: Fatigue from repeated persuasion and networking.
  - Best approach: 3‑slide summaries, co‑presenting, and scheduled touchpoints.
    * Micro‑accommodations: Summary template; co‑presenter.
    * Peer scripts: “I’ll co‑present the Q&A so you can focus on the pitch.”
    * Trial metrics: Stakeholder reach; follow‑through rate.
    * Tools: Slide templates; co‑presenter pairing.
    * Privacy phrasing: “I’d like to co‑present the Q&A.”
Need for Written Instructions
  - Manifestation: Prefers short checklists for events and outreach.
  - Best approach: One‑page event checklist and sample scripts.
    * Micro‑accommodations: Checklist template.
    * Peer scripts: “Give me 3 bullets of success criteria and I’ll draft the checklist.”
    * Trial metrics: % events with checklist.
    * Tools: Shared doc templates.
    * Privacy phrasing: “Can we capture the event steps in one short doc?”
Need for Reduced Interruption
  - Manifestation: Social energy drains quickly; interruptions break momentum.
  - Best approach: Defined escalation rules and async updates.
    * Micro‑accommodations: Focus windows; escalation contact.
    * Peer scripts: “If urgent, text URGENT; otherwise send a 3‑bullet update.”
    * Trial metrics: Escalations during focus blocks.
    * Tools: Slack status conventions.
    * Privacy phrasing: “I’m in a focus block — text URGENT if it can’t wait.”
Need for Structure Without Shame
  - Manifestation: Likes scaffolding but may avoid asking publicly.
  - Best approach: Normalize templates and shared idea queues.
    * Micro‑accommodations: Shared idea queue.
    * Peer scripts: “Can I add this to our shared queue and help prioritize it?”
    * Trial metrics: % ideas in shared queue.
    * Tools: Shared doc; WIP limits.
    * Privacy phrasing: “Can we add this to the shared list so it’s visible?”
Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Prefers spoken pitches; written follow‑ups take extra time.
  - Best approach: Scribe support and speech‑to‑text for follow‑ups.
    * Micro‑accommodations: Co‑author follow‑ups; voice notes transcribed.
    * Peer scripts: “I’ll draft the follow‑up from your notes.”
    * Trial metrics: Time from pitch to published follow‑up.
    * Tools: Otter, speech‑to‑text.
    * Privacy phrasing: “I prefer to record a voice note for follow‑up.”
Auditory/Sensory Processing / Tourette
  - Manifestation: Noisy events drain energy; may opt out.
  - Best approach: Captions, slides in advance, opt‑out channels.
    * Micro‑accommodations: Captions; quiet rooms.
    * Peer scripts: “I’ll share slides and notes before the session.”
    * Trial metrics: Written contributions; meeting comfort rating.
    * Tools: Live captions; shared decks.
    * Privacy phrasing: “I’ll drop my idea in the doc and follow up after the session.”
Working Memory / Processing Speed
  - Manifestation: Needs pre‑reads and reflection time to synthesize messaging.
  - Best approach: Pre‑reads 24–48 hours ahead and short recap pauses.
    * Micro‑accommodations: 5‑minute recap pauses.
    * Peer scripts: “I’ll send a 2‑slide summary before the meeting.”
    * Trial metrics: % decisions postponed for reflection.
    * Tools: Pre‑read templates.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting.”

6 Disability, Health & Body‑Based Factors
  - Chronic illness / Fatigue / Fluctuating capacity
    * Manifestation: Variable social energy; front‑loads public work on good days.
    * Best approach: Private signals for low‑capacity days, flexible scheduling, and asynchronous ways to contribute.
  - Sleep disorders / Medication side effects / Appointment burden
    * Best approach: Recorded demos, written summaries, and flexible timelines.
  - Mobility / Sensory impairment
    * Best approach: Accessible formats, captions, and opt‑out options.

7 Trauma, Adversity & Nervous‑System Load
  - Childhood adversity / Workplace trauma / Institutional betrayal
    * Manifestation: Uses public persona to mask vulnerability; may avoid deep trust.
    * Best approach: Private validation, avoid surprise public calls, and offer small, safe visibility opportunities.
  - Hypervigilance / People‑pleasing as safety
    * Best approach: Encourage boundary scripts and private check‑ins.

8 Identity, Marginalization & Belonging
  - Racial/ethnic bias / LGBTQ+ stress / Tokenism / Microaggression fatigue
    * Manifestation: Extra labor to manage impressions; may overperform publicly.
    * Best approach: Avoid tokenizing requests, offer voluntary, structured platforms for representation, and validate privately.
  - Code‑switching / Pressure to represent
    * Best approach: Multiple channels for input and explicit invitations to participate.

9 Work History & Occupational Socialization
  - Toxic workplace / Micromanagement / Layoff trauma
    * Manifestation: Seeks visible wins to secure position; distrusts systems.
    * Best approach: Confidential peer validation and safe, small experiments to rebuild trust.
  - Job instability / High responsibility without support
    * Best approach: Validate short‑term wins and co‑design protected time for exploration.

10 Social Support & Community Context
  - Limited support network / Social isolation / Mentorship availability
    * Manifestation: Heavy reliance on workplace recognition for belonging.
    * Best approach: Offer peer recognition, mentorship pairings, and reciprocal support.
  - Community safety / Relocation loneliness
    * Best approach: Encourage balanced social outlets and small boundary practices.

11 Life Stage & Transition Factors
  - New parenthood / Pregnancy/postpartum / Menopause / Mid‑career reinvention / Retirement anxiety / Moving / Divorce / Death / Major health diagnosis
    * Manifestation: Variable capacity; need for predictable, low‑risk visibility options.
    * Best approach: Offer written priorities, temporary role adjustments, and respect privacy.
  - Legal proceedings / Sudden financial event / Natural disaster
    * Best approach: Async options and private check‑ins.

12 Environmental & Sensory Context
  - Loud environment / Open office / Lighting sensitivity / High meeting density / Notification overload / Remote/hybrid ambiguity
    * Manifestation: Social energy drains quickly; prefers smaller, curated events.
    * Best approach: Quiet hours, opt‑out options, and written summaries of large events.
  - Workspace crowding / Physical safety concerns
    * Best approach: Provide opt‑outs and accessible alternatives.

13 Cultural Values & Communication Norms
  - High‑context vs low‑context / Direct vs indirect / Deference to authority / Humility norms
    * Manifestation: Extra effort to calibrate self‑presentation across cultures.
    * Best approach: Clarify norms in writing and invite cultural context privately before public actions.
  - Modesty/self‑promotion discomfort / Different meanings of urgency
    * Best approach: Frame recognition as team outcomes and clarify urgency signals.

14 Legal, Administrative & Bureaucratic Stress
  - Immigration paperwork / Court proceedings / Benefits / Insurance / Disability accommodations / Background checks
    * Manifestation: Heavy cognitive load; fear of errors; may avoid formal processes.
    * Best approach: Provide step‑by‑step checklists, private resource referrals, and time to manage paperwork.
  - Past criminalization / Background check anxiety
    * Best approach: Confidential guidance and resources for disclosure decisions.

15 Protective Factors & Resilience Resources
  - Mentor support / Stable housing / Financial cushion / Psychological safety / Clear expectations / Flexible scheduling / Peer relationships / Healthcare access / Effective accommodations / Recovery time / Purpose / Therapy / Skill mastery / Self‑advocacy
    * Manifestation: Greater capacity to take visible risks, sustain public presence, and recover from setbacks.
    * Behavior impact: Balanced visibility with reliable follow‑through and healthier pacing.
    * Best approach: Encourage use of supports, suggest peer accountability partners, and co‑design recovery rituals.

If this pace and format work, I’ll continue the same faster cadence for the next profile (Adapter) and keep the Neurodivergence section fully expanded. Say continue and I’ll run Adapter through all 15 domains next.

go

Adapter — Lived Experience Context across 15 Domains
Below is a fast, scan‑friendly matrix for Adapter across all 15 lived‑experience domains. Each subcategory follows the locked schema: Manifestation · Behavior impact · Distortion of typical Adapter pattern · Real‑life snapshot (1–2 lines) · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial).
The Neurodivergence domain is expanded with micro‑accommodations, peer scripts, trial metrics, tools/supports, and privacy phrasing.

1 Economic & Material Security
  - Low socioeconomic background / Financial insecurity / Debt stress
    * Manifestation: Quietly absorbs extra tasks to avoid risk; avoids asking for paid development.
    * Behavior impact: Over‑flexes schedule, accepts low‑visibility work, avoids negotiation.
    * Distortion: Adapter’s flexibility becomes self‑erasure and chronic overwork.
    * Snapshot: Takes on extra shifts or tasks to cover bills, then declines training.
    * Work impact: Hidden overload; reduced growth.
    * Risk if ignored: Burnout and stalled career mobility.
    * Best approach: Offer low‑cost learning options, private resource suggestions, and explicit permission to decline extra tasks.
  - Housing/transport/childcare/unreliable tech/working multiple jobs
    * Manifestation: Erratic availability; schedules around constraints.
    * Best approach: Confirm availability windows, accept async deliverables, and offer micro‑handoffs.

2 Family System & Caregiving Context
  - Parentification / Childcare / Elder caregiving / Single‑parent responsibilities
    * Manifestation: Constant context switching; guilt about missed social work rituals.
    * Behavior impact: Highly accommodating but may miss synchronous commitments.
    * Distortion: Adapter’s natural accommodation becomes chronic self‑sacrifice.
    * Snapshot: Juggles school pickup and a late deliverable; replies after hours.
    * Work impact: Fragmented attention and slower deep work.
    * Best approach: Offer asynchronous ways to contribute and small task swaps.
  - Domestic violence / Multigenerational strain
    * Manifestation: Secrecy, hypervigilance, emotional exhaustion.
    * Best approach: Prioritize confidentiality and low‑visibility support.

3 Immigration, Displacement & Cultural Transition
  - Immigration history / Visa uncertainty / Credential barriers
    * Manifestation: Extra effort to fit norms; hesitance to ask for exceptions.
    * Behavior impact: Code‑switches frequently; avoids visible risk.
    * Distortion: Adapter’s chameleon strengths become identity dilution and self‑silencing.
    * Snapshot: Adopts local idioms to fit in but avoids raising systemic issues.
    * Work impact: Reduced authenticity and missed advocacy.
    * Best approach: Validate contributions privately and invite low‑risk visibility opportunities.
  - Language transition / Accent bias / Code‑switching fatigue
    * Manifestation: Extra cognitive load; prefers written channels.
    * Best approach: Provide agendas and allow written follow‑ups.

4 Education & Access Background
  - First‑generation / Under‑resourced schooling / Interrupted education
    * Manifestation: High self‑reliance; reluctance to ask for mentorship.
    * Behavior impact: Learns by doing; avoids formal sponsorship.
    * Distortion: Adapter’s flexibility becomes hidden skill gaps.
    * Best approach: Offer peer learning pods and framed mentorship as mutual exchange.
  - Undiagnosed learning differences / Late diagnosis
    * Manifestation: Compensatory strategies; fatigue in high‑tempo settings.
    * Best approach: Provide templates, extra time for written tasks, and rehearsal opportunities.

5 Neurodivergence & Cognitive Accessibility — Expanded
Each subcategory below includes: Manifestation · Behavior impact · Distortion · Snapshot · Work impact · Risk · Best approach, then Micro‑accommodations · Peer scripts · Trial metrics · Tools/supports · Privacy phrasing.
ADHD
  - Manifestation: Adapts quickly to new demands but struggles to sustain long, detailed follow‑through.
  - Behavior impact: Jumps between tasks to meet changing needs; may leave projects half‑finished.
  - Distortion: Adapter’s nimbleness becomes scattered reactivity.
  - Snapshot: Rapidly reorganizes priorities mid‑week, then misses a promised deliverable.
  - Work impact: Inconsistent delivery; teammates pick up slack.
  - Risk: Credibility erosion and hidden stress.
  - Best approach: Convert tasks into short, clear micro‑steps and limit concurrent commitments.
    * Micro‑accommodations: 15–30 minute micro‑tasks; WIP limits; visible task queue.
    * Peer scripts: “Can we break this into three 30‑minute steps and check in after each?” / “Want me to own the next small step so you can focus?”
    * Trial metrics: Time to first micro‑step; % micro‑steps completed on schedule.
    * Tools/supports: Kanban with WIP limits; timers; calendar micro‑blocks.
    * Privacy phrasing: “I’m breaking this into short steps and will share progress after each one.”
Executive Function Differences
  - Manifestation: Difficulty sequencing multi‑part tasks and remembering handoffs.
  - Best approach: Use simple checklists and visible handoff notes.
    * Micro‑accommodations: One‑line next‑step notes; mandatory handoff field in shared doc.
    * Peer scripts: “I’ll add the next step to the doc so it’s clear.”
    * Trial metrics: % tasks with next‑step noted; handoff completion rate.
    * Tools/supports: Shared checklist templates.
    * Privacy phrasing: “Can we add a one‑line next step to the doc so I don’t lose it?”
Time Blindness
  - Manifestation: Underestimates time for context switching and follow‑through.
  - Best approach: Visible timers, buffer rules, and agreed micro‑deadlines.
    * Micro‑accommodations: +25–30% buffer; calendar reminders.
    * Peer scripts: “Let’s add a small buffer so you can finish without rush.”
    * Trial metrics: % deadlines met; average buffer used.
    * Tools/supports: Shared calendar with reminders.
    * Privacy phrasing: “I’m adding a small buffer to make sure I deliver.”
Task Initiation Difficulty
  - Manifestation: Needs a clear first action to get started.
  - Best approach: Provide a single, tiny first step and offer to co‑start.
    * Micro‑accommodations: 15‑minute co‑start; first‑action note.
    * Peer scripts: “What’s one tiny thing we can do in 15 minutes to start?”
    * Trial metrics: Time to first action; # tasks started with co‑start.
    * Tools/supports: Kickoff slots; checklists.
    * Privacy phrasing: “Can we pair for the first 15 minutes so I can get going?”
Context‑Switching Difficulty
  - Manifestation: High cost to switch between tasks; needs recovery time.
  - Best approach: Batch similar tasks and use async updates.
    * Micro‑accommodations: Focus blocks; 3‑bullet async updates.
    * Peer scripts: “I’ll send a 3‑bullet update after your block.”
    * Trial metrics: Interruptions during blocks; % items resolved async.
    * Tools/supports: Calendar focus blocks; async templates.
    * Privacy phrasing: “I’m protecting a focus block — please send a short update if it’s not urgent.”
Hyperfocus Patterns
  - Manifestation: Deep immersion on one problem; misses other obligations.
  - Best approach: Mid‑task check‑ins and shared priority lists.
    * Micro‑accommodations: Mid‑task check; visible priority list.
    * Peer scripts: “Set a mid‑task check‑in so we don’t lose other priorities.”
    * Trial metrics: Missed commitments while hyperfocused; % tasks with mid‑check.
    * Tools/supports: Progress board; reminders.
    * Privacy phrasing: “I’m in a focused sprint — I’ll set a mid‑sprint check‑in.”
Rejection Sensitivity
  - Manifestation: Avoids early feedback; may withdraw after critique.
  - Best approach: Private, strengths‑based feedback and safe previews.
    * Micro‑accommodations: Private preview sessions.
    * Peer scripts: “Can I preview this privately and give one focused suggestion?”
    * Trial metrics: Frequency of private previews; early sharing rate.
    * Tools/supports: Private feedback channels.
    * Privacy phrasing: “I prefer private feedback on early drafts.”
Masking Fatigue
  - Manifestation: Exhaustion from constant adaptation; fewer spontaneous contributions.
  - Best approach: Low‑visibility contribution channels and recovery time.
    * Micro‑accommodations: Idea doc; recovery half‑days.
    * Peer scripts: “Drop your idea in this doc and I’ll surface it.”
    * Trial metrics: Async contributions; energy after recovery.
    * Tools/supports: Shared idea doc.
    * Privacy phrasing: “I’ll contribute in writing this round while I recharge.”
Social Communication Load
  - Manifestation: Extra effort to manage tone and fit in; prefers written channels.
  - Best approach: Provide templates for short summaries and allow written input.
    * Micro‑accommodations: 3‑bullet summary template.
    * Peer scripts: “Can you send a short summary and I’ll share it?”
    * Trial metrics: % written inputs; stakeholder clarity rating.
    * Tools/supports: Summary templates.
    * Privacy phrasing: “I’ll send a short written summary instead of speaking up.”
Need for Written Instructions
  - Manifestation: Performs best with concise written steps.
  - Best approach: Provide one‑page checklists and examples.
    * Micro‑accommodations: Checklist templates.
    * Peer scripts: “Here’s a short checklist — want me to fill the first item?”
    * Trial metrics: % tasks with checklist; # clarifying follow‑ups.
    * Tools/supports: Shared templates.
    * Privacy phrasing: “Can we capture the steps in a short doc so I can follow them?”
Need for Reduced Interruption
  - Manifestation: Flow is fragile; interruptions are costly.
  - Best approach: Respect focus windows and use async updates.
    * Micro‑accommodations: Focus blocks; escalation contact.
    * Peer scripts: “If urgent, text URGENT; otherwise send a 3‑bullet update.”
    * Trial metrics: Interruptions during blocks; % items resolved async.
    * Tools/supports: Slack status conventions.
    * Privacy phrasing: “I’m in a focus block — text URGENT if it can’t wait.”
Need for Structure Without Shame
  - Manifestation: Prefers scaffolding but may not ask publicly.
  - Best approach: Normalize shared templates and optional structure.
    * Micro‑accommodations: Shared template library.
    * Peer scripts: “Can I share a short template that might help?”
    * Trial metrics: % team using template.
    * Tools/supports: Template library.
    * Privacy phrasing: “I have a short template that helps me — can I share it?”
Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Extra time for written/numeric/manual tasks; prefers typed or visual outputs.
  - Best approach: Scribe support, speech‑to‑text, and co‑authoring.
    * Micro‑accommodations: Co‑author follow‑ups; voice notes transcribed.
    * Peer scripts: “I’ll draft the follow‑up from your notes.”
    * Trial metrics: Time from idea to published follow‑up.
    * Tools/supports: Speech‑to‑text; templates.
    * Privacy phrasing: “I prefer to record a voice note for follow‑up.”
Auditory/Sensory Processing / Tourette
  - Manifestation: Noisy or crowded settings drain capacity; may opt out.
  - Best approach: Captions, slides in advance, opt‑out channels.
    * Micro‑accommodations: Captions; quiet rooms.
    * Peer scripts: “I’ll share slides and notes before the session.”
    * Trial metrics: Written contributions; meeting comfort rating.
    * Tools/supports: Live captions; shared decks.
    * Privacy phrasing: “I’ll drop my idea in the doc and follow up after the session.”
Working Memory / Processing Speed
  - Manifestation: Needs pre‑reads and reflection time to synthesize.
  - Best approach: Pre‑reads 24–48 hours ahead and short recap pauses.
    * Micro‑accommodations: 5‑minute recap pauses.
    * Peer scripts: “I’ll send a 2‑slide summary before the meeting.”
    * Trial metrics: % decisions postponed for reflection; quality of final plans.
    * Tools/supports: Pre‑read templates; recap prompts.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting.”

6 Disability, Health & Body‑Based Factors
  - Chronic illness / Chronic pain / Fatigue / Fluctuating capacity
    * Manifestation: Variable availability; front‑loads work on good days.
    * Best approach: Private signals for low‑capacity days, flexible timelines, and written handoffs.
  - Sleep disorders / Medication side effects / Appointment burden
    * Best approach: Recorded meetings, written summaries, and flexible scheduling.
  - Mobility / Sensory impairment
    * Best approach: Accessible formats, captions, and opt‑out options.

7 Trauma, Adversity & Nervous‑System Load
  - Childhood adversity / Abuse / Workplace trauma / Institutional betrayal
    * Manifestation: Tendency to adapt to others’ needs to stay safe; avoids conflict.
    * Best approach: Calm, private validation; avoid surprise evaluations; offer small, safe experiments.
  - Hypervigilance / People‑pleasing / Overachievement as survival
    * Best approach: Encourage boundary scripts and private check‑ins.

8 Identity, Marginalization & Belonging
  - Racial/ethnic bias / LGBTQ+ stress / Tokenism / Microaggression fatigue
    * Manifestation: Extra labor to fit in; reluctance to be visible in identity‑charged contexts.
    * Best approach: Avoid tokenizing requests, invite voluntary participation, and validate privately.
  - Code‑switching / Pressure to represent
    * Best approach: Provide multiple channels for input and explicit invitations to participate.

9 Work History & Occupational Socialization
  - Toxic workplace / Micromanagement / Retaliation history / Learned silence
    * Manifestation: Avoids escalation; adapts to survive.
    * Best approach: Offer confidential peer validation and safe, small experiments to rebuild trust.
  - Job instability / Layoff trauma / High responsibility without support
    * Best approach: Validate short‑term wins and co‑design protected time for exploration.

10 Social Support & Community Context
  - Limited support network / Social isolation / Mentorship availability
    * Manifestation: Relies on adaptability to fit into available groups; may lack deep support.
    * Best approach: Offer peer support swaps, mentorship pairings, and small reciprocal arrangements.
  - Community safety / Relocation loneliness
    * Best approach: Encourage balanced social outlets and boundary practices.

11 Life Stage & Transition Factors
  - New parenthood / Pregnancy/postpartum / Menopause / Mid‑career reinvention / Retirement anxiety / Moving / Divorce / Death / Major health diagnosis
    * Manifestation: Variable capacity and need for predictability.
    * Best approach: Offer written priorities, temporary role adjustments, and respect privacy.
  - Legal proceedings / Sudden financial event / Natural disaster
    * Best approach: Async options and private check‑ins.

12 Environmental & Sensory Context
  - Loud environment / Open office / Lighting sensitivity / Constant interruptions / High meeting density / Notification overload / Remote/hybrid ambiguity
    * Manifestation: Sensory fatigue; prefers predictable, low‑stimulus conditions.
    * Best approach: Quiet hours, written agendas, opt‑out options, and respect for focus windows.
  - Workspace crowding / Physical safety concerns
    * Best approach: Provide opt‑outs and written summaries.

13 Cultural Values & Communication Norms
  - High‑context vs low‑context / Direct vs indirect / Deference to authority / Collectivist vs individualist norms
    * Manifestation: Extra effort to translate norms; may adapt communication style to fit.
    * Best approach: Clarify norms in writing and invite cultural context privately.
  - Modesty/self‑promotion discomfort / Different meanings of urgency
    * Best approach: Frame recognition as team outcomes and clarify urgency signals.

14 Legal, Administrative & Bureaucratic Stress
  - Immigration paperwork / Court proceedings / Benefits / Insurance / Disability accommodations / Background checks / Housing applications
    * Manifestation: Heavy cognitive load; fear of errors.
    * Best approach: Share step‑by‑step checklists, private resource referrals, and time to manage paperwork.
  - Past criminalization / Background check anxiety
    * Best approach: Confidential guidance and resources for disclosure decisions.

15 Protective Factors & Resilience Resources
  - Mentor support / Stable housing / Financial cushion / Psychological safety / Clear expectations / Flexible scheduling / Peer relationships / Healthcare access / Effective accommodations / Recovery time / Purpose / Therapy / Skill mastery / Self‑advocacy
    * Manifestation: Greater capacity to adapt healthily, ask for help, and balance competing demands.
    * Behavior impact: Sustainable flexibility, better boundary setting, and improved contribution.
    * Best approach: Encourage use of supports, suggest peer accountability partners, and co‑design recovery rituals.

If this pace and format work, I’ll continue to the next profile (Craftsman) with the same fast cadence and the Neurodivergence domain fully expanded. Say continue and I’ll proceed.

go

Craftsman — Lived Experience Context across 15 Domains
Each subcategory follows the locked schema: Manifestation · Behavior impact · Distortion of typical Craftsman pattern · Real‑life snapshot (1–2 lines) · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial).
The Neurodivergence domain is expanded with micro‑accommodations, peer scripts, trial metrics, tools/supports, and privacy phrasing.

1 Economic & Material Security
Low socioeconomic background / Financial insecurity / Debt stress
  - Manifestation: Reluctance to ask for paid tools or training; prioritizes practical, low‑cost fixes.
  - Behavior impact: Hoards tasks they can do cheaply; resists suggesting investments.
  - Distortion: Craftsman’s quality focus becomes underinvestment in tools that would scale quality.
  - Snapshot: Keeps using a manual workaround rather than requesting a paid automation.
  - Work impact: Slower throughput; technical debt accumulates.
  - Risk if ignored: Burnout and declining workmanship.
  - Best approach: Offer low‑cost or trial tool options and private framing that links investment to time saved.
Housing/transport/childcare/unreliable tech/working multiple jobs
  - Manifestation: Irregular hours; does hands‑on work in off hours.
  - Behavior impact: High craftsmanship in bursts; inconsistent availability.
  - Distortion: Consistent craftsmanship becomes episodic.
  - Best approach: Agree on asynchronous handoffs and small, time‑boxed tasks.

2 Family System & Caregiving Context
Parentification / Childcare / Elder caregiving / Single‑parent responsibilities
  - Manifestation: Schedules tightly around caregiving; accepts tasks that fit windows.
  - Behavior impact: Prefers predictable, bounded work; avoids open‑ended requests.
  - Distortion: Craftsman’s steady, meticulous pace becomes compressed and rushed.
  - Snapshot: Delivers polished components late at night after caregiving duties.
  - Work impact: Handoffs and reviews misalign with team cadence.
  - Best approach: Offer clear acceptance criteria and asynchronous review options.
Domestic violence / Multigenerational strain
  - Manifestation: Secrecy and hypervigilance; may avoid social exposure.
  - Best approach: Prioritize confidentiality and offer low‑visibility support.

3 Immigration, Displacement & Cultural Transition
Immigration history / Visa uncertainty / Credential barriers
  - Manifestation: Extra effort to prove technical legitimacy; sensitivity to credential questions.
  - Behavior impact: Over‑documents work; avoids informal recognition that feels risky.
  - Distortion: Craftsman’s pride in craft becomes defensive over‑proofing.
  - Best approach: Validate technical competence explicitly and offer small public showcases.
Language transition / Accent bias / Code‑switching fatigue
  - Manifestation: Prefers written technical notes and examples.
  - Best approach: Provide written specs and allow time for written clarifications.

4 Education & Access Background
First‑generation / Under‑resourced schooling / Interrupted education
  - Manifestation: Self‑taught practices; skepticism of formal training.
  - Behavior impact: Relies on apprenticeship‑style learning; avoids formal mentorship.
  - Distortion: Craftsman’s mastery becomes isolated craft knowledge rather than shared practice.
  - Best approach: Offer peer apprenticeship pairings and practical, low‑cost training.
Undiagnosed learning differences / Late diagnosis
  - Manifestation: Extra time to process instructions; reliance on templates.
  - Best approach: Provide templates, examples, and extra time for written tasks.

5 Neurodivergence & Cognitive Accessibility — Expanded
ADHD
  - Manifestation: Deep focus on a single craft detail, difficulty finishing peripheral tasks.
  - Behavior impact: Produces exceptional artifacts but may miss integration or deadlines.
  - Distortion: Craftsman’s attention to detail becomes tunnel vision that delays delivery.
  - Snapshot: Perfects a component for days and misses the integration deadline.
  - Work impact: High‑quality output in one area; other dependencies stall.
  - Risk if ignored: Missed releases and team frustration.
  - Best approach: Break work into short, deliverable micro‑tasks with visible stop rules.
    * Micro‑accommodations: 1–3 hour micro‑tasks; WIP limits; mandatory mid‑task check‑ins.
    * Peer scripts: “This looks great — can we set a mid‑task check‑in so we keep the release on track?” / “Can I take the next small handoff so you can finish this piece?”
    * Trial metrics: % micro‑tasks completed on time; number of mid‑task check‑ins used.
    * Tools/supports: Kanban with WIP limits; timers; shared progress board.
    * Privacy phrasing: “I’m working in short focused chunks and will share a mid‑point update.”
Executive Function Differences
  - Manifestation: Difficulty sequencing multi‑step builds and remembering handoffs.
  - Best approach: Use explicit step lists and a one‑line next‑action field in shared docs.
    * Micro‑accommodations: Handoff checklist; one‑line next action.
    * Peer scripts: “I’ll add the next action to the doc so it’s clear.”
    * Trial metrics: % tasks with next action; handoff completion rate.
    * Tools/supports: Shared checklists; simple templates.
    * Privacy phrasing: “Can we add a one‑line next step to the doc so I don’t lose it?”
Time Blindness
  - Manifestation: Underestimates time for finishing polish and QA.
  - Best approach: Add conservative buffers and micro‑deadlines for QA.
    * Micro‑accommodations: Buffer rules (+25–30%); QA micro‑deadlines.
    * Peer scripts: “Let’s add a small buffer so you can finish the QA.”
    * Trial metrics: % deadlines met; average buffer used.
    * Tools/supports: Timeline templates; milestone reminders.
    * Privacy phrasing: “I’m adding a small buffer to ensure quality.”
Task Initiation Difficulty
  - Manifestation: Hesitates to start ambiguous build tasks without a sample or template.
  - Best approach: Provide a one‑step starter and pair for the first 15–30 minutes.
    * Micro‑accommodations: Starter snippet; 15‑minute co‑start.
    * Peer scripts: “Here’s a starter snippet — want to pair for 15 minutes to get going?”
    * Trial metrics: Time to first commit; # tasks started with pairing.
    * Tools/supports: Starter templates; pairing slots.
    * Privacy phrasing: “Can we pair for the first 15 minutes so I can get started?”
Context‑Switching Difficulty
  - Manifestation: Deep craft work is disrupted by frequent meetings; recovery time needed.
  - Best approach: Batch reviews and provide written summaries for quick catch‑up.
    * Micro‑accommodations: Focus blocks; written review notes.
    * Peer scripts: “I’ll send a short review note after your focus block.”
    * Trial metrics: Interruptions during focus blocks; % items resolved via notes.
    * Tools/supports: Calendar focus blocks; review templates.
    * Privacy phrasing: “I’m protecting a focus block — please send a short note if it’s not urgent.”
Hyperfocus Patterns
  - Manifestation: Immerses in craft detail and misses broader integration tasks.
  - Best approach: Mid‑task check‑ins and shared integration checklists.
    * Micro‑accommodations: Mid‑task integration check; shared priority list.
    * Peer scripts: “Ping me at the mid‑point so we can align on integration.”
    * Trial metrics: Missed integration items; % tasks with mid‑checks.
    * Tools/supports: Progress board; automated reminders.
    * Privacy phrasing: “I’m deep in a sprint — I’ll set a mid‑sprint check‑in.”
Rejection Sensitivity
  - Manifestation: Sensitive to critique of workmanship; may withdraw from peer review.
  - Best approach: Private, specific, strengths‑based feedback and safe preview sessions.
    * Micro‑accommodations: Private preview; feedback sandwich.
    * Peer scripts: “This is solid — one tweak that could help is X; want to iterate together?”
    * Trial metrics: Frequency of private previews; change in early sharing.
    * Tools/supports: Private feedback channels.
    * Privacy phrasing: “I prefer private feedback on early drafts.”
Masking Fatigue
  - Manifestation: Exhaustion from adapting presentation or tone; fewer informal contributions.
  - Best approach: Low‑visibility contribution channels and recovery time.
    * Micro‑accommodations: Idea doc; recovery half‑days.
    * Peer scripts: “Drop your idea in this doc and I’ll surface it.”
    * Trial metrics: Async contributions; energy after recovery.
    * Tools/supports: Shared idea doc.
    * Privacy phrasing: “I’ll contribute in writing this round while I recharge.”
Social Communication Load
  - Manifestation: Extra effort to explain technical choices to non‑technical stakeholders.
  - Best approach: Provide short executive summaries and co‑present technical rationale.
    * Micro‑accommodations: 3‑bullet summary template; co‑presenter for demos.
    * Peer scripts: “I’ll draft a short summary you can use for the demo.”
    * Trial metrics: % stakeholder clarifications resolved; follow‑through after demos.
    * Tools/supports: Summary templates; co‑presenter pairing.
    * Privacy phrasing: “Can I send a short summary for the demo and have you present it?”
Need for Written Instructions
  - Manifestation: Works best with clear acceptance criteria and examples.
  - Best approach: Provide concise acceptance checklists and sample outputs.
    * Micro‑accommodations: Acceptance checklist; example artifacts.
    * Peer scripts: “Here’s an example — want me to add acceptance criteria?”
    * Trial metrics: % tasks with acceptance criteria; QA pass rate.
    * Tools/supports: Template library.
    * Privacy phrasing: “Can we capture acceptance criteria in a short checklist?”
Need for Reduced Interruption
  - Manifestation: Frequent interruptions degrade fine‑grained craft quality.
  - Best approach: Respect focus windows and use async QA channels.
    * Micro‑accommodations: Focus blocks; async QA doc.
    * Peer scripts: “I’ll add QA notes to the doc instead of interrupting your flow.”
    * Trial metrics: Interruptions during blocks; QA turnaround time.
    * Tools/supports: Async QA doc; calendar focus blocks.
    * Privacy phrasing: “I’m in a focus block — please add QA notes to the doc.”
Need for Structure Without Shame
  - Manifestation: Prefers templates but may not ask publicly.
  - Best approach: Normalize shared templates and invite co‑creation.
    * Micro‑accommodations: Shared template library.
    * Peer scripts: “Can I share a short template that helps me?”
    * Trial metrics: % team using template; time saved.
    * Tools/supports: Template library.
    * Privacy phrasing: “I have a short template that helps me — can I share it?”
Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Extra time for documentation, numeric checks, or manual tasks.
  - Best approach: Scribe support, calculators, and co‑authoring.
    * Micro‑accommodations: Co‑author docs; speech‑to‑text; calculators.
    * Peer scripts: “I’ll draft the doc from your notes.”
    * Trial metrics: Time to publish; % co‑authored docs.
    * Tools/supports: Speech‑to‑text; calculators; templates.
    * Privacy phrasing: “I prefer to record a voice note for the write‑up.”
Auditory/Sensory Processing / Tourette
  - Manifestation: Noisy environments reduce fine motor precision and concentration.
  - Best approach: Quiet rooms, captions, and opt‑out options for noisy sessions.
    * Micro‑accommodations: Quiet rooms; captions; slides in advance.
    * Peer scripts: “I’ll share slides and notes before the session.”
    * Trial metrics: Meeting comfort rating; written contributions.
    * Tools/supports: Live captions; shared decks.
    * Privacy phrasing: “I’ll drop my notes in the doc and follow up after the session.”
Working Memory / Processing Speed
  - Manifestation: Needs checklists and short pauses to integrate multi‑step procedures.
  - Best approach: Pre‑reads, step recaps, and short reflection pauses.
    * Micro‑accommodations: Pre‑reads 24–48 hours ahead; 5‑minute recap pauses.
    * Peer scripts: “I’ll send a short checklist before the review.”
    * Trial metrics: % decisions postponed for reflection; QA pass rate.
    * Tools/supports: Pre‑read templates; recap prompts.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the review.”

6 Disability, Health & Body‑Based Factors
Chronic illness / Chronic pain / Fatigue / Fluctuating capacity
  - Manifestation: Variable fine‑motor stamina and cognitive focus.
  - Behavior impact: Peaks of high craftsmanship followed by low capacity.
  - Distortion: Reliability becomes unpredictable.
  - Best approach: Private signals for low‑capacity days, flexible timelines, and written handoffs.
Sleep disorders / Medication side effects / Appointment burden
  - Best approach: Recorded demos, written summaries, and flexible scheduling.
Mobility / Sensory impairment
  - Best approach: Accessible tools, alternative input methods, and quiet workspaces.

7 Trauma, Adversity & Nervous‑System Load
Childhood adversity / Abuse / Workplace trauma / Institutional betrayal
  - Manifestation: Hypervigilance about critique; avoids public exposure.
  - Behavior impact: Over‑polishes work privately; avoids peer review.
  - Distortion: Craft pride becomes guarded secrecy.
  - Best approach: Use calm, private validation; offer safe, small peer review rituals.
Hypervigilance / People‑pleasing / Overachievement as survival
  - Best approach: Encourage boundary scripts and private check‑ins.

8 Identity, Marginalization & Belonging
Racial/ethnic bias / LGBTQ+ stress / Tokenism / Microaggression fatigue
  - Manifestation: Extra labor to fit norms; reluctance to be visible in identity‑charged contexts.
  - Behavior impact: May avoid representing identity publicly; overcompensates in craft to be judged on merit.
  - Best approach: Avoid tokenizing requests, invite voluntary participation, and validate privately.
Code‑switching / Pressure to represent
  - Best approach: Provide multiple channels for input and explicit invitations to participate.

9 Work History & Occupational Socialization
Toxic workplace / Micromanagement / Retaliation history / Learned silence
  - Manifestation: Reluctance to escalate quality issues; hoards knowledge to avoid exposure.
  - Best approach: Offer confidential peer validation and safe, small knowledge‑sharing rituals.
Job instability / Layoff trauma / High responsibility without support
  - Best approach: Validate short‑term wins and co‑design protected time for craft work.

10 Social Support & Community Context
Limited support network / Social isolation / Mentorship availability
  - Manifestation: Works alone; limited peer feedback.
  - Best approach: Offer apprenticeship pairings, peer review swaps, and mentorship.
Community safety / Relocation loneliness
  - Best approach: Encourage balanced social outlets and small boundary practices.

11 Life Stage & Transition Factors
New parenthood / Pregnancy/postpartum / Menopause / Mid‑career reinvention / Retirement anxiety / Moving / Divorce / Death / Major health diagnosis
  - Manifestation: Variable capacity and need for predictable, bounded tasks.
  - Best approach: Offer written priorities, temporary role adjustments, and respect privacy.
Legal proceedings / Sudden financial event / Natural disaster
  - Best approach: Async options and private check‑ins.

12 Environmental & Sensory Context
Loud environment / Open office / Lighting sensitivity / Constant interruptions / High meeting density / Notification overload
  - Manifestation: Fine‑motor precision and concentration degrade in noisy or poorly lit spaces.
  - Behavior impact: Avoids open‑plan areas; prefers quiet, well‑lit workspaces.
  - Best approach: Provide quiet rooms, good lighting, and opt‑out options for noisy events.
Workspace crowding / Physical safety concerns
  - Best approach: Offer alternative workspaces and written summaries of group sessions.

13 Cultural Values & Communication Norms
High‑context vs low‑context / Direct vs indirect communication / Deference to authority / Humility norms
  - Manifestation: Extra effort to translate norms into craft standards; may adapt style to fit.
  - Best approach: Clarify expectations in writing and invite cultural context privately.
Modesty/self‑promotion discomfort / Different meanings of urgency
  - Best approach: Frame recognition as craftsmanship outcomes and clarify urgency signals.

14 Legal, Administrative & Bureaucratic Stress
Immigration paperwork / Court proceedings / Benefits / Insurance / Disability accommodations / Background checks
  - Manifestation: Heavy cognitive load; fear of errors.
  - Best approach: Provide step‑by‑step checklists, private resource referrals, and time to manage paperwork.
Past criminalization / Background check anxiety
  - Best approach: Confidential guidance and resources for disclosure decisions.

15 Protective Factors & Resilience Resources
Mentor support / Stable housing / Financial cushion / Psychological safety / Clear expectations / Flexible scheduling / Peer relationships / Healthcare access / Effective accommodations / Recovery time / Purpose / Therapy / Skill mastery / Self‑advocacy
  - Manifestation: Greater capacity to maintain high craftsmanship sustainably and share knowledge.
  - Behavior impact: Balanced, teachable, and consistent output.
  - Best approach: Encourage use of supports, suggest apprenticeship pairings, and co‑design recovery rituals.

If this level and pace work, I’ll continue to Guardian next and keep the Neurodivergence section fully expanded for each profile. Say continue and I’ll run Guardian through all 15 domains next.

go

Guardian — Lived Experience Context across 15 Domains
Below is a fast, scan‑friendly matrix for Guardian across all 15 lived‑experience domains. Each subcategory follows the locked schema: Manifestation · Behavior impact · Distortion of typical Guardian pattern · Real‑life snapshot (1–2 lines) · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial).
The Neurodivergence & Cognitive Accessibility domain is expanded with micro‑accommodations, peer scripts, trial metrics, tools/supports, and privacy phrasing.

1 Economic & Material Security
Low socioeconomic background / Financial insecurity / Debt stress
  - Manifestation: Deep worry about stability; reluctance to ask for help that feels like charity.
  - Behavior impact: Over‑cautious resource use; avoids visible requests for support.
  - Distortion: Guardian’s protective steadiness becomes silent scarcity management and refusal to escalate needs.
  - Snapshot: Keeps using outdated tools to avoid asking for budget.
  - Work impact: Underinvestment in efficiency; hidden stress reduces focus.
  - Risk if ignored: Burnout and sudden inability to meet obligations.
  - Best approach: Offer discreet, practical options framed as efficiency improvements; normalize small resource requests.
Housing/transport/childcare/unreliable tech/working multiple jobs
  - Manifestation: Tight scheduling; frequent contingency planning.
  - Best approach: Confirm availability windows, provide asynchronous options, and offer small task swaps.

2 Family System & Caregiving Context
Parentification / Childcare / Elder caregiving / Single‑parent responsibilities / Bereavement
  - Manifestation: Heavy emotional load; prioritizes family safety over work visibility.
  - Behavior impact: Withdraws from optional social tasks; keeps commitments but avoids extra roles.
  - Distortion: Guardian’s reliability becomes rigidly limited to core duties; avoids new responsibilities.
  - Snapshot: Covers core shifts reliably but declines mentoring or extra projects.
  - Work impact: Narrowed contribution; team may not see full capability.
  - Best approach: Offer clearly bounded tasks, asynchronous ways to contribute, and private check‑ins.
Domestic violence / Substance exposure / Multigenerational strain
  - Manifestation: Hypervigilance and secrecy; safety concerns dominate.
  - Best approach: Prioritize confidentiality, safety planning, and low‑visibility support.

3 Immigration, Displacement & Cultural Transition
Immigration history / Visa uncertainty / Credential barriers / Family separation
  - Manifestation: Extra effort to prove reliability; anxiety about paperwork and status.
  - Behavior impact: Over‑documentation, reluctance to take informal risks.
  - Distortion: Guardian’s dependable steadiness becomes defensive over‑proofing and avoidance of informal trust.
  - Snapshot: Submits exhaustive documentation for routine approvals.
  - Work impact: Time diverted to validation; slower collaboration.
  - Best approach: Validate contributions explicitly, offer clear process guides, and invite small trust‑building tasks.
Language transition / Accent bias / Code‑switching fatigue
  - Manifestation: Extra cognitive load in social contexts; prefers written communication.
  - Best approach: Provide agendas and notes in advance; allow written follow‑ups.

4 Education & Access Background
First‑generation / Under‑resourced schooling / Interrupted education / Limited mentorship
  - Manifestation: Self‑reliance and reluctance to ask for sponsorship.
  - Behavior impact: Learns by doing; may avoid formal career development.
  - Distortion: Guardian’s steady competence becomes under‑leveraged due to lack of advocacy.
  - Snapshot: Quietly masters tasks but doesn’t seek promotion.
  - Work impact: Stalled progression and underused institutional knowledge.
  - Best approach: Offer framed mentorship, peer sponsorship, and low‑stakes visibility opportunities.
Undiagnosed learning differences / Late diagnosis
  - Manifestation: Compensatory routines; extra time for some tasks.
  - Best approach: Provide templates, written summaries, and extra processing time.

5 Neurodivergence & Cognitive Accessibility — Expanded
ADHD
  - Manifestation: Difficulty with sustained attention on long administrative tasks; bursts of focused care.
  - Behavior impact: Starts many safety or maintenance tasks but may leave some incomplete.
  - Distortion: Guardian’s steady caretaking becomes uneven—excellent attention to immediate needs, neglect of longer admin.
  - Snapshot: Fixes an urgent compliance issue quickly, then delays the follow‑up documentation.
  - Work impact: Gaps in continuity and documentation.
  - Risk if ignored: Compliance lapses and reputational risk.
  - Best approach: Break admin into short, scheduled micro‑tasks and use visible trackers.
    * Micro‑accommodations: 15–30 minute admin blocks; checklist with small, discrete steps.
    * Peer scripts: “Can we split this into three 20‑minute tasks and check in after each?” / “I’ll take the second step if you start the first.”
    * Trial metrics: % micro‑tasks completed; time from start to completion.
    * Tools/supports: Shared checklist; calendar micro‑blocks; timers.
    * Privacy phrasing: “I’m doing this in short blocks today — I’ll share progress after each step.”
Executive Function Differences
  - Manifestation: Trouble sequencing multi‑step compliance or care processes.
  - Best approach: Use simple phase checklists and visible next‑action fields.
    * Micro‑accommodations: One‑line next action; mandatory handoff note.
    * Peer scripts: “I’ll add the next action to the doc so it’s clear.”
    * Trial metrics: % tasks with next action; handoff completion rate.
    * Tools/supports: Shared templates; milestone reminders.
    * Privacy phrasing: “Can we add a one‑line next step so I don’t lose it?”
Time Blindness
  - Manifestation: Underestimates time for routine safety checks and follow‑ups.
  - Best approach: Add conservative buffers and visible reminders.
    * Micro‑accommodations: Buffer rules (+25–30%); calendar reminders.
    * Peer scripts: “Let’s add a small buffer so the follow‑up isn’t rushed.”
    * Trial metrics: % deadlines met; average buffer used.
    * Tools/supports: Timeline dashboard; reminder tools.
    * Privacy phrasing: “I’m adding a small buffer to ensure the follow‑up is thorough.”
Task Initiation Difficulty
  - Manifestation: Hesitates to start ambiguous policy or paperwork tasks.
  - Best approach: Provide a single first action and offer to co‑start.
    * Micro‑accommodations: 15‑minute co‑start; starter template.
    * Peer scripts: “Let’s do the first 15 minutes together to get it moving.”
    * Trial metrics: Time to first action; # tasks started with pairing.
    * Tools/supports: Starter templates; pairing slots.
    * Privacy phrasing: “Can we pair for the first 15 minutes so I can get started?”
Context‑Switching Difficulty
  - Manifestation: High cost switching between caregiving coordination and other duties.
  - Best approach: Batch coordination tasks and use async updates.
    * Micro‑accommodations: Focus blocks; 3‑bullet async updates.
    * Peer scripts: “I’ll send a 3‑bullet update after your block.”
    * Trial metrics: Interruptions during blocks; % items resolved async.
    * Tools/supports: Calendar focus blocks; async templates.
    * Privacy phrasing: “I’m protecting a focus block — please send a short update if it’s not urgent.”
Hyperfocus Patterns
  - Manifestation: Intense focus on a single safety or support issue, neglecting other responsibilities.
  - Best approach: Mid‑task check‑ins and shared priority lists.
    * Micro‑accommodations: Mid‑task check; visible priority list.
    * Peer scripts: “Ping me at the mid‑point so we can align on other needs.”
    * Trial metrics: Missed commitments while hyperfocused; % tasks with mid‑checks.
    * Tools/supports: Progress board; reminders.
    * Privacy phrasing: “I’m deep in this task — I’ll set a mid‑point check‑in.”
Rejection Sensitivity
  - Manifestation: Strong reaction to perceived criticism about care or standards.
  - Best approach: Private, strengths‑based feedback and safe preview sessions.
    * Micro‑accommodations: Private preview; feedback sandwich.
    * Peer scripts: “This is solid — one tweak that could help is X; want to iterate together?”
    * Trial metrics: Frequency of private previews; early sharing rate.
    * Tools/supports: Private feedback channels.
    * Privacy phrasing: “I prefer private feedback on early drafts.”
Masking Fatigue
  - Manifestation: Exhaustion from constantly presenting calm and dependable persona.
  - Best approach: Low‑visibility contribution channels and recovery time.
    * Micro‑accommodations: Option for low‑visibility updates; recovery half‑days.
    * Peer scripts: “Drop a short note in this doc and I’ll surface it.”
    * Trial metrics: Async contributions; self‑reported recovery effectiveness.
    * Tools/supports: Shared doc; opt‑out mechanism.
    * Privacy phrasing: “I’m taking a short recovery window and will update asynchronously.”
Social Communication Load
  - Manifestation: Extra effort to manage tone and reassure others; prefers clear, calm language.
  - Best approach: Provide templates for empathetic, concise messages and allow written input.
    * Micro‑accommodations: Message templates; short scripts for difficult conversations.
    * Peer scripts: “Here’s a short script you can use — want me to send it?”
    * Trial metrics: Time to send messages; recipient clarity rating.
    * Tools/supports: Template library.
    * Privacy phrasing: “Can I use a short script for this message and share it with you first?”
Need for Written Instructions
  - Manifestation: Performs best with clear, step‑by‑step procedures for safety and care tasks.
  - Best approach: Provide concise SOPs and checklists.
    * Micro‑accommodations: One‑page SOPs; quick reference cards.
    * Peer scripts: “I’ll draft a one‑page SOP — want to review it together?”
    * Trial metrics: % tasks with SOP; compliance rate.
    * Tools/supports: SOP templates; quick reference cards.
    * Privacy phrasing: “Can we capture this in a short SOP so I can follow it reliably?”
Need for Reduced Interruption
  - Manifestation: Interruptions increase stress and reduce ability to manage care tasks.
  - Best approach: Define escalation rules and respect focus windows.
    * Micro‑accommodations: Focus windows; single escalation contact.
    * Peer scripts: “If it’s urgent, text URGENT; otherwise send a 3‑bullet update.”
    * Trial metrics: # escalations during focus windows; % items resolved async.
    * Tools/supports: Slack status conventions; escalation contact.
    * Privacy phrasing: “I’m in a focus block — text URGENT if it can’t wait.”
Need for Structure Without Shame
  - Manifestation: Prefers predictable routines but may hesitate to ask for them.
  - Best approach: Normalize shared templates and invite co‑creation of routines.
    * Micro‑accommodations: Shared routine templates.
    * Peer scripts: “Can I share a short routine that helps me?”
    * Trial metrics: % team using routine templates.
    * Tools/supports: Template library.
    * Privacy phrasing: “I have a short routine that helps me — can I share it?”
Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Extra time for paperwork, numeric forms, or manual tasks.
  - Best approach: Scribe support, calculators, and co‑authoring.
    * Micro‑accommodations: Co‑author forms; speech‑to‑text; calculators.
    * Peer scripts: “I’ll draft the form from your notes.”
    * Trial metrics: Time to complete forms; % co‑authored docs.
    * Tools/supports: Speech‑to‑text; calculators; templates.
    * Privacy phrasing: “Can I record a quick voice note for the form and have you transcribe it?”
Auditory/Sensory Processing / Tourette
  - Manifestation: Noisy or chaotic settings increase stress and reduce capacity to manage care tasks.
  - Best approach: Quiet spaces, captions, and opt‑out options for noisy meetings.
    * Micro‑accommodations: Captions; slides/notes in advance; quiet rooms.
    * Peer scripts: “I’ll share notes in advance so you can pick what to comment on.”
    * Trial metrics: Meeting comfort rating; written contributions.
    * Tools/supports: Live captions; shared decks.
    * Privacy phrasing: “I’ll skip the noisy session and drop my input in the doc.”
Working Memory / Processing Speed
  - Manifestation: Needs checklists and short pauses to integrate multiple care tasks.
  - Best approach: Pre‑reads, step recaps, and short reflection pauses.
    * Micro‑accommodations: Pre‑reads 24–48 hours ahead; 5‑minute recap pauses.
    * Peer scripts: “I’ll send a short checklist before the meeting.”
    * Trial metrics: % decisions postponed for reflection; quality of follow‑through.
    * Tools/supports: Pre‑read templates; recap prompts.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting.”

6 Disability, Health & Body‑Based Factors
Chronic illness / Chronic pain / Fatigue / Fluctuating capacity
  - Manifestation: Variable energy and cognitive capacity; needs pacing and recovery.
  - Behavior impact: Reliable on good days; needs rest on low days.
  - Distortion: Guardian’s steady presence becomes intermittent, causing coordination strain.
  - Best approach: Private signals for low‑capacity days, flexible timelines, and written handoffs.
Sleep disorders / Medication side effects / Appointment burden
  - Manifestation: Cognitive fog and reduced patience.
  - Best approach: Recorded meetings, written summaries, and flexible scheduling.
Mobility / Sensory impairment / Appointment burden
  - Best approach: Accessible formats, alternative ways to contribute, and quiet workspaces.

7 Trauma, Adversity & Nervous‑System Load
Childhood adversity / Abuse / Workplace trauma / Institutional betrayal
  - Manifestation: High vigilance, distrust of ambiguous feedback, need for predictability.
  - Behavior impact: Over‑prepares, avoids vulnerability, may freeze in conflict.
  - Distortion: Guardian’s protective instincts become rigid control and withdrawal.
  - Best approach: Use calm, factual language; offer private, predictable interactions; avoid surprise evaluations.
Hypervigilance / Trust difficulty / People‑pleasing as safety
  - Best approach: Encourage boundary scripts, private check‑ins, and validate limits.

8 Identity, Marginalization & Belonging
Racial/ethnic bias / LGBTQ+ stress / Gender identity stress / Tokenism / Microaggression fatigue
  - Manifestation: Extra labor to monitor safety and belonging; reluctance to be visible.
  - Behavior impact: Keeps low profile; avoids representing identity publicly.
  - Distortion: Guardian’s protective role becomes self‑silencing and isolation.
  - Best approach: Avoid tokenizing requests, offer private validation, and invite low‑risk participation.
Code‑switching / Pressure to represent
  - Best approach: Provide multiple channels for input and explicitly invite informal contributions.

9 Work History & Occupational Socialization
Toxic workplace / Micromanagement / Retaliation history / Learned silence
  - Manifestation: Deep distrust of systems; reluctance to escalate issues.
  - Behavior impact: Over‑documentation for self‑protection; avoids raising systemic concerns.
  - Distortion: Guardian’s caution becomes silence that hides early warnings.
  - Best approach: Offer confidential peer validation and safe, small experiments to rebuild trust.
Job instability / Layoff trauma / High responsibility without support
  - Best approach: Validate short‑term wins and co‑design protected support structures.

10 Social Support & Community Context
Limited support network / Social isolation / Mentorship availability
  - Manifestation: Heavy reliance on role for belonging; limited safe people.
  - Behavior impact: Over‑invests in dependable tasks; avoids vulnerability.
  - Best approach: Offer peer support swaps, mentorship pairings, and small reciprocal arrangements.
Community safety / Relocation loneliness
  - Best approach: Encourage balanced social outlets and boundary practices.

11 Life Stage & Transition Factors
New parenthood / Pregnancy/postpartum / Menopause / Mid‑career reinvention / Retirement anxiety / Moving / Divorce / Death / Major health diagnosis
  - Manifestation: Variable capacity and heightened need for predictability.
  - Behavior impact: Either hyper‑compensation or temporary withdrawal.
  - Best approach: Offer written priorities, temporary role adjustments, and respect privacy.
Legal proceedings / Sudden financial event / Natural disaster
  - Best approach: Async options and private check‑ins.

12 Environmental & Sensory Context
Loud environment / Open office / Lighting sensitivity / Constant interruptions / High meeting density / Notification overload / Remote/hybrid ambiguity
  - Manifestation: Sensory stress undermines ability to maintain calm oversight.
  - Behavior impact: Prefers quiet, predictable environments and scheduled check‑ins.
  - Best approach: Quiet hours, written agendas, opt‑out options, and respect for focus windows.
Workspace crowding / Physical safety concerns
  - Best approach: Provide alternative workspaces and written summaries.

13 Cultural Values & Communication Norms
High‑context vs low‑context / Direct vs indirect communication / Deference to authority / Collectivist vs individualist norms
  - Manifestation: Extra effort to interpret norms and maintain harmony.
  - Behavior impact: Avoids direct conflict; uses careful, respectful language.
  - Best approach: Clarify norms in writing and invite cultural context privately.
Modesty/self‑promotion discomfort / Different meanings of urgency
  - Best approach: Frame recognition as team safety outcomes and clarify urgency signals.

14 Legal, Administrative & Bureaucratic Stress
Immigration paperwork / Court proceedings / Benefits / Insurance / Disability accommodations / Background checks / Housing applications
  - Manifestation: Heavy cognitive load and fear of documentation errors.
  - Behavior impact: Time spent on admin during work hours; avoidance of extra complexity.
  - Best approach: Share step‑by‑step checklists, private resource referrals, and offer time to manage paperwork.
Past criminalization / Background check anxiety
  - Best approach: Confidential guidance and resources for disclosure decisions.

15 Protective Factors & Resilience Resources
Mentor support / Stable housing / Financial cushion / Psychological safety / Clear expectations / Flexible scheduling / Peer relationships / Healthcare access / Effective accommodations / Recovery time / Purpose / Therapy / Skill mastery / Self‑advocacy
  - Manifestation: Greater capacity to protect others, delegate, and sustain steady contribution.
  - Behavior impact: Balanced stewardship, willingness to ask for help, and consistent reliability.
  - Best approach: Encourage use of supports, suggest peer accountability partners, and co‑design recovery rituals.

If this level and pace work, I’ll continue to the next profile (Operator) with the same fast cadence and the Neurodivergence domain fully expanded. Say continue and I’ll proceed.

go

Operator — Lived Experience Context across 15 Domains
Below is a fast, scan‑friendly matrix for Operator across all 15 lived‑experience domains. Each subcategory follows the locked schema: Manifestation · Behavior impact · Distortion of typical Operator pattern · Real‑life snapshot (1–2 lines) · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial).
The Neurodivergence & Cognitive Accessibility domain is expanded with micro‑accommodations, peer scripts, trial metrics, tools/supports, and privacy phrasing.
Use these as quick reference cards when you need to support an Operator on the team.


1 Economic and Material Security
Low socioeconomic background / Financial insecurity / Debt stress
  - Manifestation: Constant pressure to keep systems running; avoids asking for paid resources.
  - Behavior impact: Prioritizes operational continuity over improvement; hoards low‑cost fixes.
  - Distortion: Operator’s reliability becomes risk‑averse maintenance that resists necessary upgrades.
  - Snapshot: Keeps patching an old server rather than requesting budget for replacement.
  - Work impact: Technical debt, brittle systems, hidden overtime.
  - Risk if ignored: System failures and burnout.
  - Best approach: Offer framed ROI for tool requests and private, practical resource options.
Housing/transport/childcare/unreliable tech/working multiple jobs
  - Manifestation: Irregular shift coverage; late‑night catch‑ups.
  - Best approach: Confirm coverage windows, accept async handoffs, and offer small task swaps.

2 Family System and Caregiving Context
Childcare / Elder caregiving / Single‑parent responsibilities / Bereavement
  - Manifestation: Tight scheduling; needs predictable shift patterns.
  - Behavior impact: Prefers fixed, bounded tasks; avoids on‑call surprises.
  - Distortion: Operator’s dependability becomes rigid scheduling that resists flexible coverage.
  - Snapshot: Always takes the same shift to guarantee childcare pickup.
  - Work impact: Coverage gaps if unexpected events occur.
  - Best approach: Offer predictable backups, documented runbooks, and asynchronous handover templates.
Domestic violence / Multigenerational strain
  - Manifestation: Secrecy and hypervigilance; safety concerns.
  - Best approach: Prioritize confidentiality and low‑visibility support.

3 Immigration Displacement and Cultural Transition
Immigration history / Visa uncertainty / Credential barriers
  - Manifestation: Extra effort to prove reliability; anxiety about status checks.
  - Behavior impact: Over‑documents processes; avoids informal trust.
  - Distortion: Operator’s procedural rigor becomes defensive over‑documentation.
  - Snapshot: Submits exhaustive logs for routine audits.
  - Work impact: Time diverted from core ops work.
  - Best approach: Validate competence explicitly; provide clear process guides and private help with paperwork.
Language transition / Accent bias / Code‑switching fatigue
  - Manifestation: Prefers written runbooks and checklists.
  - Best approach: Share docs in advance and allow written confirmations.

4 Education and Access Background
First‑generation / Under‑resourced schooling / Interrupted education
  - Manifestation: Self‑taught, practical problem solver; reluctant to ask for formal training.
  - Behavior impact: Fixes things by trial; avoids formal certification paths.
  - Distortion: Operator’s practical skillset becomes siloed tribal knowledge.
  - Snapshot: Knows a system inside out but hasn’t documented it.
  - Work impact: Single‑person dependencies.
  - Best approach: Offer apprenticeship‑style mentoring and low‑cost certification options.
Undiagnosed learning differences / Late diagnosis
  - Manifestation: Extra time to process complex documentation.
  - Best approach: Provide templates, examples, and extra processing time.

5 Neurodivergence and Cognitive Accessibility — Expanded
Each subcategory below includes Manifestation · Behavior impact · Distortion · Snapshot · Work impact · Risk · Best approach, then Micro‑accommodations · Peer scripts · Trial metrics · Tools/supports · Privacy phrasing.


ADHD
  - Manifestation: Strong crisis responsiveness; difficulty sustaining long, repetitive maintenance tasks.
  - Behavior impact: Excellent in firefights; may deprioritize routine preventative work.
  - Distortion: Operator’s rapid triage becomes reactive firefighting and missed scheduled maintenance.
  - Snapshot: Fixes a production outage brilliantly, then delays scheduled patching.
  - Work impact: Higher incident frequency; unpredictable availability.
  - Risk if ignored: Repeated outages and burnout.
  - Best approach: Convert maintenance into short, scheduled micro‑tasks and visible trackers.
    * Micro‑accommodations: 20–40 minute maintenance blocks; rotating checklist ownership.
    * Peer scripts: “Can we split the maintenance into 30‑minute chunks and I’ll take the second one?” / “Let’s add this to the weekly checklist so it’s visible.”
    * Trial metrics: % scheduled maintenance completed; incident rate.
    * Tools/supports: Shared runbook checklists; calendar blocks; automated reminders.
    * Privacy phrasing: “I’m doing maintenance in short blocks today — I’ll update the checklist after each block.”
Executive Function Differences
  - Manifestation: Trouble sequencing multi‑step deployments and remembering handoffs.
  - Best approach: Use explicit phase checklists and mandatory handoff notes.
    * Micro‑accommodations: One‑page deployment checklist; required handoff field.
    * Peer scripts: “I’ll draft the handoff note and post it to the runbook.”
    * Trial metrics: % deployments with handoff note; post‑deploy incidents.
    * Tools/supports: Runbook templates; deployment checklist.
    * Privacy phrasing: “Can we add a one‑line next step to the runbook so I don’t lose it?”
Time Blindness
  - Manifestation: Underestimates time for cross‑team coordination and testing.
  - Best approach: Add conservative buffers and require pre‑commitment checks.
    * Micro‑accommodations: +25–40% buffer on estimates; pre‑commitment resource check.
    * Peer scripts: “Let’s add a two‑week buffer so QA can staff it.”
    * Trial metrics: % deadlines met; average buffer used.
    * Tools/supports: Historical timeline dashboard; estimation checklist.
    * Privacy phrasing: “I’m adding a small buffer to make sure testing is thorough.”
Task Initiation Difficulty
  - Manifestation: Hesitates to start ambiguous ops projects without a clear first step.
  - Best approach: Provide a single first action and pair for kickoff.
    * Micro‑accommodations: 15‑minute co‑start; starter script.
    * Peer scripts: “Let’s do the first 15 minutes together to get it started.”
    * Trial metrics: Time to first action; # tasks started with pairing.
    * Tools/supports: Kickoff slots; starter templates.
    * Privacy phrasing: “Can we pair for the first 15 minutes so I can get started?”
Context‑Switching Difficulty
  - Manifestation: High cost switching between monitoring and project work; needs recovery after interruptions.
  - Best approach: Protect monitoring windows and use concise async updates.
    * Micro‑accommodations: Protected monitoring blocks; 3‑bullet async updates.
    * Peer scripts: “I’ll send a 3‑bullet update after your monitoring window.”
    * Trial metrics: Interruptions during blocks; % items resolved async.
    * Tools/supports: Pager rotation schedule; async update templates.
    * Privacy phrasing: “I’m in a monitoring window — please send a short update if it’s not urgent.”
Hyperfocus Patterns
  - Manifestation: Deep immersion in a single system; misses broader ops needs.
  - Best approach: Mid‑task check‑ins and shared priority lists.
    * Micro‑accommodations: Mid‑task check; visible priority board.
    * Peer scripts: “Ping me at the mid‑point so we can align on other priorities.”
    * Trial metrics: Missed cross‑team items; % tasks with mid‑checks.
    * Tools/supports: Progress board; automated reminders.
    * Privacy phrasing: “I’m deep in this fix — I’ll set a mid‑point check‑in.”
Rejection Sensitivity
  - Manifestation: Sensitive to critique about incidents or postmortems; may withdraw from reviews.
  - Best approach: Private, strengths‑based feedback and safe preview sessions.
    * Micro‑accommodations: Private preview of postmortem notes.
    * Peer scripts: “This was solid — one tweak that could help is X; want to iterate together?”
    * Trial metrics: Frequency of private previews; early sharing rate.
    * Tools/supports: Private feedback channels.
    * Privacy phrasing: “I prefer private feedback on early postmortems.”
Masking Fatigue
  - Manifestation: Exhaustion from maintaining calm under pressure; fewer informal check‑ins.
  - Best approach: Low‑visibility contribution channels and recovery time.
    * Micro‑accommodations: Opt‑out for noncritical on‑call shifts after major incidents; recovery half‑days.
    * Peer scripts: “Take a recovery half‑day after the incident — we’ll cover the rotation.”
    * Trial metrics: Opt‑outs used; self‑reported recovery.
    * Tools/supports: On‑call rotation tools; backup coverage.
    * Privacy phrasing: “I’m taking a short recovery window after the incident and will update asynchronously.”
Social Communication Load
  - Manifestation: Extra effort to translate technical incident details for non‑technical stakeholders.
  - Best approach: Provide short executive summaries and offer to co‑present.
    * Micro‑accommodations: 3‑bullet incident summary template; co‑presenter for stakeholder calls.
    * Peer scripts: “I’ll draft a 3‑bullet summary you can use for the execs.”
    * Trial metrics: Stakeholder clarity rating; follow‑through after incident.
    * Tools/supports: Summary templates; co‑presenter pairing.
    * Privacy phrasing: “Can I send a short summary for the execs and have you present it?”
Need for Written Instructions
  - Manifestation: Performs best with clear runbooks and checklists.
  - Best approach: Provide concise runbooks and one‑page SOPs.
    * Micro‑accommodations: Runbook templates; quick reference cards.
    * Peer scripts: “I’ll add a one‑page SOP — want to review it together?”
    * Trial metrics: % incidents with runbook used; mean time to resolution.
    * Tools/supports: Runbook library; playbook templates.
    * Privacy phrasing: “Can we capture this in a short runbook so I can follow it reliably?”
Need for Reduced Interruption
  - Manifestation: Frequent interruptions degrade monitoring effectiveness.
  - Best approach: Define escalation rules and respect focus windows.
    * Micro‑accommodations: Escalation contact; protected monitoring windows.
    * Peer scripts: “If it’s urgent, text URGENT; otherwise send a 3‑bullet update.”
    * Trial metrics: # escalations during windows; % items resolved async.
    * Tools/supports: Pager duty rules; Slack status conventions.
    * Privacy phrasing: “I’m in a monitoring window — text URGENT if it can’t wait.”
Need for Structure Without Shame
  - Manifestation: Prefers predictable procedures but may hesitate to ask for them.
  - Best approach: Normalize shared runbooks and invite co‑creation.
    * Micro‑accommodations: Shared runbook templates.
    * Peer scripts: “Can I share a short runbook that helps me?”
    * Trial metrics: % team using runbooks; time saved.
    * Tools/supports: Runbook library.
    * Privacy phrasing: “I have a short runbook that helps me — can I share it?”
Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Extra time for documentation, numeric checks, or manual tasks.
  - Best approach: Scribe support, calculators, and co‑authoring.
    * Micro‑accommodations: Co‑author postmortems; speech‑to‑text for notes.
    * Peer scripts: “I’ll draft the postmortem from your notes.”
    * Trial metrics: Time to publish postmortem; % co‑authored docs.
    * Tools/supports: Speech‑to‑text; calculators; templates.
    * Privacy phrasing: “I prefer to record a voice note for the postmortem — can I send that?”
Auditory/Sensory Processing / Tourette
  - Manifestation: Noisy on‑call rooms or crowded war rooms increase stress.
  - Best approach: Quiet war rooms, captions for calls, and opt‑out options.
    * Micro‑accommodations: Quiet rooms; captions; slides in advance.
    * Peer scripts: “I’ll share notes in advance so you can pick what to comment on.”
    * Trial metrics: Meeting comfort rating; written contributions.
    * Tools/supports: Live captions; shared decks.
    * Privacy phrasing: “I’ll drop my input in the doc and follow up after the session.”
Working Memory / Processing Speed
  - Manifestation: Needs checklists and short pauses to integrate multiple alerts.
  - Best approach: Pre‑reads, step recaps, and short reflection pauses.
    * Micro‑accommodations: Pre‑reads 24–48 hours ahead; 5‑minute recap pauses.
    * Peer scripts: “I’ll send a short checklist before the review.”
    * Trial metrics: % decisions postponed for reflection; mean time to resolution.
    * Tools/supports: Pre‑read templates; recap prompts.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the review.”

6 Disability Health and Body Based Factors
Chronic illness / Chronic pain / Fatigue / Fluctuating capacity
  - Manifestation: Variable on‑call stamina and cognitive focus.
  - Behavior impact: Peaks of high responsiveness followed by low capacity.
  - Distortion: Operator’s steady availability becomes intermittent.
  - Best approach: Private signals for low‑capacity days, flexible on‑call swaps, and written handoffs.
Sleep disorders / Medication side effects / Appointment burden
  - Best approach: Recorded incident reviews, written summaries, and flexible scheduling.
Mobility / Sensory impairment
  - Best approach: Accessible consoles, alternative input methods, and quiet monitoring stations.

7 Trauma Adversity and Nervous System Load
Childhood adversity / Abuse / Workplace trauma / Institutional betrayal
  - Manifestation: High vigilance and distrust of ambiguous feedback.
  - Behavior impact: Over‑prepares, avoids vulnerability, may freeze in conflict.
  - Distortion: Operator’s caution becomes withdrawal and hoarding of knowledge.
  - Best approach: Use calm, factual language; offer private, predictable interactions; avoid surprise evaluations.
Hypervigilance / Authority sensitivity / Overachievement as survival
  - Best approach: Encourage boundary scripts and private check‑ins.

8 Identity Marginalization and Belonging
Racial/ethnic bias / LGBTQ+ stress / Tokenism / Microaggression fatigue
  - Manifestation: Extra labor to monitor fairness and safety; reluctance to be visible.
  - Behavior impact: Keeps low profile; avoids representing identity publicly.
  - Distortion: Operator’s stewardship becomes self‑silencing.
  - Best approach: Avoid tokenizing requests, offer private validation, and invite low‑risk participation.
Code‑switching / Pressure to represent
  - Best approach: Provide multiple channels for input and explicitly invite informal contributions.

9 Work History and Occupational Socialization
Toxic workplace / Micromanagement / Retaliation history / Learned silence
  - Manifestation: Reluctance to escalate issues; over‑documentation for self‑protection.
  - Behavior impact: Problems persist unraised; single‑person dependencies remain.
  - Best approach: Offer confidential peer validation and safe, small experiments to rebuild trust.
Job instability / Layoff trauma / High responsibility without support
  - Best approach: Validate short‑term wins and co‑design protected support structures.

10 Social Support and Community Context
Limited support network / Social isolation / Mentorship availability
  - Manifestation: Heavy reliance on role for belonging; limited safe people.
  - Best approach: Offer peer support swaps, mentorship pairings, and small reciprocal arrangements.
Community safety / Relocation loneliness
  - Best approach: Encourage balanced social outlets and boundary practices.

11 Life Stage and Transition Factors
New parenthood / Pregnancy/postpartum / Menopause / Mid‑career reinvention / Retirement anxiety / Moving / Divorce / Death / Major health diagnosis
  - Manifestation: Variable capacity and need for predictable, documented processes.
  - Best approach: Offer written priorities, temporary role adjustments, and respect privacy.
Legal proceedings / Sudden financial event / Natural disaster
  - Best approach: Async options and private check‑ins.

12 Environmental and Sensory Context
Loud environment / Open office / Lighting sensitivity / Constant interruptions / High meeting density / Notification overload / Remote/hybrid ambiguity
  - Manifestation: Monitoring and concentration degrade in noisy or chaotic spaces.
  - Best approach: Quiet monitoring stations, notification triage rules, and opt‑out options for noncritical meetings.
Workspace crowding / Physical safety concerns
  - Best approach: Provide alternative workspaces and written summaries.

13 Cultural Values and Communication Norms
High‑context vs low‑context / Direct vs indirect communication / Deference to authority / Collectivist vs individualist norms
  - Manifestation: Extra effort to translate norms into operational expectations.
  - Best approach: Clarify norms in writing and invite cultural context privately.
Modesty/self‑promotion discomfort / Different meanings of urgency
  - Best approach: Frame recognition as team reliability outcomes and clarify urgency signals.

14 Legal Administrative and Bureaucratic Stress
Immigration paperwork / Court proceedings / Benefits / Insurance / Disability accommodations / Background checks / Housing applications
  - Manifestation: Heavy cognitive load and fear of documentation errors.
  - Best approach: Share step‑by‑step checklists, private resource referrals, and time to manage paperwork.
Past criminalization / Background check anxiety
  - Best approach: Confidential guidance and resources for disclosure decisions.

15 Protective Factors and Resilience Resources
Mentor support / Stable housing / Financial cushion / Psychological safety / Clear expectations / Flexible scheduling / Peer relationships / Healthcare access / Effective accommodations / Recovery time / Purpose / Therapy / Skill mastery / Self‑advocacy
  - Manifestation: Greater capacity to sustain on‑call duties, delegate, and share knowledge.
  - Behavior impact: Reliable, teachable, and resilient operations performance.
  - Best approach: Encourage use of supports, suggest peer on‑call buddies, and co‑design recovery rituals.

If this format and pace work, I’ll continue through the remaining profiles at the same speed and with the same neurodivergence depth. Say continue and I’ll run the next profile (Operator was done; next is Individualist) and keep moving quickly.

go

Individualist — Lived Experience Context across 15 Domains
Below is a compact, scan‑friendly matrix for Individualist across all 15 lived‑experience domains. Each subcategory follows the schema: Manifestation · Behavior impact · Distortion of typical Individualist pattern · Real‑life snapshot · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial). The Neurodivergence domain is expanded with micro‑accommodations, peer scripts, trial metrics, tools/supports, and privacy phrasing.

1 Economic and Material Security
  - Manifestation: Prefers autonomy in income decisions; may freelance or hold side projects.
  - Behavior impact: Chooses independent work; resists tightly controlled team processes.
  - Distortion: Autonomy becomes isolation and reluctance to accept shared constraints.
  - Snapshot: Launches a side product without syncing roadmaps.
  - Work impact: Misaligned priorities and surprise availability gaps.
  - Risk if ignored: Friction with team planning and missed dependencies.
  - Best approach: Offer clear boundaries for independent work and scheduled syncs for alignment.

2 Family System and Caregiving Context
  - Manifestation: Values personal choice in caregiving arrangements; may decline standard supports.
  - Behavior impact: Keeps private schedules; resists mandated group caregiving plans.
  - Distortion: Independence becomes hidden stress when juggling responsibilities alone.
  - Snapshot: Handles childcare privately and misses ad‑hoc team events.
  - Work impact: Unpredictable attendance for spontaneous tasks.
  - Best approach: Provide async options and respect stated availability windows.

3 Immigration, Displacement and Cultural Transition
  - Manifestation: Maintains distinct cultural identity; may avoid assimilation pressure.
  - Behavior impact: Selective participation in cultural rituals; prefers to contribute on own terms.
  - Distortion: Individualist’s authenticity becomes perceived aloofness.
  - Snapshot: Declines team lunches that require code‑switching.
  - Work impact: Missed informal influence and networking.
  - Best approach: Invite low‑stakes, optional cultural exchanges and private validation.

4 Education and Access Background
  - Manifestation: Self‑directed learning path; may lack formal credentials but has deep domain knowledge.
  - Behavior impact: Prefers independent study and self‑paced upskilling.
  - Distortion: Expertise becomes siloed when not shared.
  - Snapshot: Builds a strong personal toolkit but rarely documents it for others.
  - Work impact: Knowledge hoarding and onboarding friction.
  - Best approach: Offer lightweight knowledge‑sharing rituals and optional mentorship pairings.

5 Neurodivergence and Cognitive Accessibility — Expanded


ADHD
  - Manifestation: High creative autonomy, rapid idea shifts, difficulty with sustained collaborative follow‑through.
  - Behavior impact: Generates novel approaches but may abandon group commitments.
  - Distortion: Individualist’s creative independence becomes unreliable pivoting.
  - Snapshot: Proposes a new approach mid‑sprint and moves on before integration.
  - Work impact: Fragmented initiatives and team confusion.
  - Risk if ignored: Credibility loss and repeated rework.
  - Best approach: Convert ideas into time‑boxed solo pilots with explicit handoff points.
    * Micro‑accommodations: Limit active solo pilots to 1–2; require a 1‑page handoff when pausing.
    * Peer scripts: “Love this idea — can you time‑box it for two weeks and leave a one‑page handoff?” / “If you pause, can you drop the current state in the shared doc so we can pick it up?”
    * Trial metrics: # active solo pilots; % handoffs completed.
    * Tools/supports: Personal Kanban; short video updates; timers.
    * Privacy phrasing: “I’m running a short solo pilot and will post a one‑page handoff when I pause.”
Executive Function Differences
  - Manifestation: Prefers to own sequencing but may miss collaborative coordination steps.
  - Best approach: Co‑create minimal sequencing templates and visible owners for each step.
    * Micro‑accommodations: 3‑step sequencing template; owner tags.
    * Peer scripts: “Can we map three steps and owners so nothing slips?”
    * Trial metrics: % tasks with owners; handoff clarity score.
    * Tools/supports: Lightweight RACI; shared trackers.
    * Privacy phrasing: “I’ll map three steps and owners so it’s easy to pick up.”
Time Blindness
  - Manifestation: Optimistic timelines for independent work; underestimates coordination time.
  - Best approach: Use historical benchmarks and add explicit alignment buffers.
    * Micro‑accommodations: +25% buffer for cross‑team asks.
    * Peer scripts: “Let’s add a buffer so others can align.”
    * Trial metrics: % deadlines met; average buffer used.
    * Tools/supports: Timeline templates.
    * Privacy phrasing: “I’m adding a small buffer to ensure alignment.”
Task Initiation Difficulty
  - Manifestation: Needs a clear, personally meaningful first step to start collaborative tasks.
  - Best approach: Offer a one‑sentence first action tied to autonomy and impact.
    * Micro‑accommodations: 15‑minute co‑start focused on the first meaningful action.
    * Peer scripts: “What’s one 15‑minute action that would make this feel worth starting?”
    * Trial metrics: Time to first action; # tasks started with co‑start.
    * Tools/supports: Starter templates.
    * Privacy phrasing: “Can we do a 15‑minute co‑start so I can get traction?”
Context‑Switching Difficulty
  - Manifestation: Prefers long uninterrupted creative stretches; switching to meetings is costly.
  - Best approach: Schedule deep‑work windows and provide concise async summaries.
    * Micro‑accommodations: Protected creative blocks; 3‑bullet async briefs.
    * Peer scripts: “I’ll send a 3‑bullet brief after your block.”
    * Trial metrics: Interruptions during blocks; % items resolved async.
    * Tools/supports: Calendar focus blocks; async templates.
    * Privacy phrasing: “I’m protecting a creative block — please send a short brief if it’s not urgent.”
Hyperfocus Patterns
  - Manifestation: Deep immersion in personally chosen problems; misses team signals.
  - Best approach: Agree on visible stop signals and scheduled check‑ins.
    * Micro‑accommodations: Mid‑pilot check‑ins; shared priority list.
    * Peer scripts: “Set a mid‑pilot check‑in so we don’t lose other priorities.”
    * Trial metrics: Missed commitments while hyperfocused; % pilots with check‑ins.
    * Tools/supports: Progress board; automated reminders.
    * Privacy phrasing: “I’m deep in this sprint — I’ll set a mid‑sprint check‑in.”
Rejection Sensitivity
  - Manifestation: Sensitive to critique of personal ideas; may withdraw from group critique.
  - Best approach: Offer private, strengths‑based feedback and safe preview sessions.
    * Micro‑accommodations: Private previews; feedback sandwich.
    * Peer scripts: “This is strong — one tweak that could help is X; want to iterate together?”
    * Trial metrics: Frequency of private previews; early sharing rate.
    * Tools/supports: Private feedback channels.
    * Privacy phrasing: “I prefer private feedback on early drafts.”
Masking Fatigue
  - Manifestation: Tiring to perform a public persona; prefers authenticity in small groups.
  - Best approach: Provide low‑visibility contribution channels and recovery time.
    * Micro‑accommodations: Idea doc; opt‑out for public demos occasionally.
    * Peer scripts: “Drop your idea in this doc and I’ll surface it.”
    * Trial metrics: Async contributions; self‑reported energy.
    * Tools/supports: Shared idea doc; opt‑out mechanism.
    * Privacy phrasing: “I’ll contribute in writing this round while I recharge.”
Social Communication Load
  - Manifestation: Prefers one‑on‑one persuasion over broad public campaigning.
  - Best approach: Offer co‑presenting and short executive summaries for broader audiences.
    * Micro‑accommodations: 3‑slide summary template; co‑presenter for town halls.
    * Peer scripts: “I’ll co‑present the Q&A so you can focus on the narrative.”
    * Trial metrics: % stakeholders reached; follow‑through rate.
    * Tools/supports: Summary templates; co‑presenter pairing.
    * Privacy phrasing: “I’d like to co‑present the Q&A.”
Need for Written Instructions
  - Manifestation: Works best when autonomy is paired with clear acceptance criteria.
  - Best approach: Provide concise checklists that preserve freedom within constraints.
    * Micro‑accommodations: One‑page acceptance checklist.
    * Peer scripts: “Give me three success bullets and I’ll draft the checklist.”
    * Trial metrics: % tasks with checklist; QA pass rate.
    * Tools/supports: Shared templates.
    * Privacy phrasing: “Can we capture success criteria in one short doc so I can run with it?”
Need for Reduced Interruption
  - Manifestation: Interruptions break creative momentum and reduce willingness to collaborate.
  - Best approach: Define escalation rules and respect focus windows.
    * Micro‑accommodations: Focus windows; single escalation contact.
    * Peer scripts: “If urgent, text URGENT; otherwise send a 3‑bullet update.”
    * Trial metrics: # escalations during focus windows; % items resolved async.
    * Tools/supports: Slack status conventions; calendar focus blocks.
    * Privacy phrasing: “I’m in a focus block — text URGENT if it can’t wait.”
Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Prefers spoken or visual outputs; written follow‑ups take extra time.
  - Best approach: Offer scribe support and speech‑to‑text for documentation.
    * Micro‑accommodations: Co‑author follow‑ups; voice notes transcribed.
    * Peer scripts: “I’ll draft the follow‑up from your notes.”
    * Trial metrics: Time from idea to published follow‑up; % co‑authored docs.
    * Tools/supports: Speech‑to‑text; templates.
    * Privacy phrasing: “I prefer to record a voice note for follow‑up.”
Auditory/Sensory Processing / Tourette
  - Manifestation: Large, noisy gatherings drain energy; prefers small, curated interactions.
  - Best approach: Share slides in advance, use captions, and allow opt‑outs.
    * Micro‑accommodations: Captions; slides/notes in advance.
    * Peer scripts: “I’ll share slides before the session so you can pick what to comment on.”
    * Trial metrics: Written contributions; meeting comfort rating.
    * Tools/supports: Live captions; shared decks.
    * Privacy phrasing: “I’ll drop my input in the doc and follow up after the session.”
Working Memory / Processing Speed
  - Manifestation: Needs short pre‑reads and reflection time to synthesize strategic ideas.
  - Best approach: Provide concise pre‑reads and short recap pauses.
    * Micro‑accommodations: Pre‑reads 24–48 hours ahead; 5‑minute recap pauses.
    * Peer scripts: “I’ll send a 2‑slide summary before the meeting.”
    * Trial metrics: % decisions postponed for reflection; quality of final plans.
    * Tools/supports: Pre‑read templates; recap prompts.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting.”

6 Disability, Health and Body‑Based Factors
  - Manifestation: May prioritize personal routines and accessibility needs over group norms.
  - Behavior impact: Requests accommodations quietly and values predictable environments.
  - Distortion: Independence becomes avoidance of shared rituals that lack accessibility.
  - Best approach: Offer accessible formats, quiet options, and private accommodation channels.

7 Trauma, Adversity and Nervous‑System Load
  - Manifestation: Protects personal boundaries; may avoid emotionally risky group interactions.
  - Behavior impact: Keeps distance in charged conversations; prefers written channels.
  - Distortion: Self‑protection becomes perceived disengagement.
  - Best approach: Use calm, factual language, offer private validation, and avoid surprise confrontations.

8 Identity, Marginalization and Belonging
  - Manifestation: Values authenticity; resists token roles that force representation.
  - Behavior impact: Selective visibility and guarded sharing about identity.
  - Distortion: Authenticity becomes perceived aloofness.
  - Best approach: Invite voluntary, structured representation and provide private support.

9 Work History and Occupational Socialization
  - Manifestation: May have nontraditional career paths and value autonomy over hierarchy.
  - Behavior impact: Prefers project‑based evaluation and flexible contribution models.
  - Distortion: Independence becomes misalignment with standard promotion paths.
  - Best approach: Offer alternative recognition paths and project‑based visibility.

10 Social Support and Community Context
  - Manifestation: Chooses selective, deep relationships rather than broad networks.
  - Behavior impact: Strong one‑on‑one bonds; limited large‑group engagement.
  - Distortion: Selectivity becomes isolation if supports are absent.
  - Best approach: Facilitate small peer pods and mentorship pairings.

11 Life Stage and Transition Factors
  - Manifestation: Makes life choices that prioritize personal freedom and flexibility.
  - Behavior impact: May accept nonstandard schedules or sabbaticals.
  - Distortion: Flexibility becomes unpredictability for team planning.
  - Best approach: Co‑design flexible commitments with clear handoff plans.

12 Environmental and Sensory Context
  - Manifestation: Prefers curated, low‑stimulus environments for deep work.
  - Behavior impact: Avoids open‑plan noise and large social rituals.
  - Distortion: Preference becomes perceived unavailability.
  - Best approach: Provide quiet spaces, opt‑out options, and written summaries of large events.

13 Cultural Values and Communication Norms
  - Manifestation: Values direct authenticity and personal expression.
  - Behavior impact: Communicates plainly; may clash with high‑context norms.
  - Distortion: Directness becomes perceived bluntness.
  - Best approach: Clarify norms in writing and invite cultural context before public actions.

14 Legal, Administrative and Bureaucratic Stress
  - Manifestation: May avoid bureaucratic processes that feel constraining to autonomy.
  - Behavior impact: Delays paperwork or seeks informal workarounds.
  - Distortion: Independence becomes compliance risk.
  - Best approach: Provide concise checklists, private guidance, and low‑friction support.

15 Protective Factors and Resilience Resources
  - Manifestation: When supported, Individualists contribute original, high‑value work and mentor selectively.
  - Behavior impact: Balanced autonomy with reliable handoffs and occasional high‑impact contributions.
  - Best approach: Encourage use of supports, create optional visibility channels, and co‑design recovery rituals.

If this matches your needs I’ll continue to the next profile (Individualist was done; next: Collaborator) at the same pace and with the same neurodivergence depth. Say continue and I’ll run Collaborator through all 15 domains next.

go

Collaborator — Lived Experience Context across 15 Domains
Below each subcategory follows the locked schema: Manifestation · Behavior impact · Distortion of typical Collaborator pattern · Real‑life snapshot · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial). The Neurodivergence & Cognitive Accessibility domain is expanded with micro‑accommodations, peer scripts, trial metrics, suggested tools/supports, and privacy‑first phrasing.

1 Economic and Material Security
Low socioeconomic background / Financial insecurity
  - Manifestation: Reluctance to ask for shared resources; over‑reliance on favors.
  - Behavior impact: Offers help readily but avoids requesting help for themselves.
  - Distortion: Collaborator’s team orientation becomes one‑way giving that hides need.
  - Snapshot: Volunteers to cover others’ tasks but never asks for training budget.
  - Work impact: Hidden burnout; uneven skill distribution.
  - Risk if ignored: Loss of contributor capacity and resentment.
  - Best approach: Offer reciprocal, low‑status help and frame resource requests as team efficiency.
Housing/transport/childcare/limited tech
  - Manifestation: Variable availability; prefers asynchronous collaboration.
  - Best approach: Confirm windows for synchronous work and provide async handoffs.

2 Family System and Caregiving Context
Caregiving responsibilities / Bereavement / Parentification
  - Manifestation: Tight scheduling; emotional load.
  - Behavior impact: Highly reliable within known windows; avoids open‑ended commitments.
  - Distortion: Collaborator’s dependability becomes constrained availability.
  - Best approach: Offer bounded tasks, asynchronous ways to contribute, and private check‑ins.

3 Immigration, Displacement and Cultural Transition
Visa uncertainty / Credential barriers / Language transition
  - Manifestation: Extra effort to fit norms; prefers clear agendas and written follow‑ups.
  - Behavior impact: Strong team player but cautious about visibility.
  - Distortion: Teamwork becomes guarded participation.
  - Best approach: Provide pre‑reads, invite written input, and validate contributions privately.

4 Education and Access Background
First‑generation / Under‑resourced schooling / Interrupted education
  - Manifestation: Learns by doing; may avoid formal sponsorship.
  - Behavior impact: Shares practical knowledge generously but may not self‑promote.
  - Distortion: Collaboration becomes undervalued expertise.
  - Best approach: Offer peer mentoring, framed sponsorship, and low‑stakes visibility.

5 Neurodivergence and Cognitive Accessibility — Expanded
ADHD
  - Manifestation: Energetic participation, quick idea sharing, difficulty sustaining long coordination threads.
  - Behavior impact: Sparks momentum in group work but may drop follow‑through.
  - Distortion: Collaborative spark becomes fragmented momentum and unfinished handoffs.
  - Snapshot: Leads a lively working session, then misses the follow‑up doc.
  - Work impact: Team loses continuity; tasks stall.
  - Risk if ignored: Repeated rework and credibility erosion.
  - Best approach: Convert group ideas into time‑boxed micro‑tasks with clear owners and visible trackers.
    * Micro‑accommodations: WIP limits for active collaborative threads; 1–2 week micro‑tasks with explicit owners.
    * Peer scripts: “This is great energy — can we pick one micro‑task and assign an owner for the week?” / “Can you own the first deliverable and I’ll take the next?”
    * Trial metrics: % micro‑tasks completed on time; number of handoffs with owner assigned.
    * Tools/supports: Shared Kanban; short weekly 15‑minute syncs; checklist templates.
    * Privacy phrasing: “I’m trying a short, time‑boxed task this week — I’ll post progress in the board.”
Executive Function Differences
  - Manifestation: Strong at contributing ideas but may struggle to sequence multi‑step group work.
  - Best approach: Use simple sequencing templates and visible owners.
    * Micro‑accommodations: 3‑step sequence template; mandatory next‑action field.
    * Peer scripts: “Let’s map three steps and owners so nothing slips.”
    * Trial metrics: % tasks with next action; handoff clarity score.
    * Tools/supports: Lightweight RACI; shared trackers.
    * Privacy phrasing: “I’ll map three steps and owners so it’s easy to pick up.”
Time Blindness
  - Manifestation: Underestimates coordination time for group deliverables.
  - Best approach: Add explicit buffers and require minimal lead times for cross‑team asks.
    * Micro‑accommodations: +25–30% buffer; pre‑commitment checks.
    * Peer scripts: “Can we add a two‑week buffer so everyone can align?”
    * Trial metrics: % commitments met; average buffer used.
    * Tools/supports: Timeline templates; historical benchmarks.
    * Privacy phrasing: “I’m adding a small buffer to make sure we align.”
Task Initiation Difficulty
  - Manifestation: Needs a clear first step to join collaborative work.
  - Best approach: Provide a one‑sentence first action and offer to co‑start.
    * Micro‑accommodations: 15‑minute co‑start pairing; first‑action note.
    * Peer scripts: “What’s one 15‑minute action we can do to get this moving?”
    * Trial metrics: Time to first action; # tasks started with pairing.
    * Tools/supports: Kickoff slots; starter templates.
    * Privacy phrasing: “Can we pair for the first 15 minutes so I can get traction?”
Context‑Switching Difficulty
  - Manifestation: Costly to move between deep work and frequent meetings; needs recovery.
  - Best approach: Batch meetings, provide concise async briefs, and schedule short decision windows.
    * Micro‑accommodations: Protected focus blocks; 3‑bullet async updates.
    * Peer scripts: “I’ll send a 3‑bullet update after your block.”
    * Trial metrics: Interruptions during blocks; % items resolved async.
    * Tools/supports: Calendar focus blocks; async templates.
    * Privacy phrasing: “I’m protecting a focus block — please send a short brief if it’s not urgent.”
Hyperfocus Patterns
  - Manifestation: Deep immersion in one collaborative thread; misses other team needs.
  - Best approach: Mid‑task check‑ins and visible stop signals.
    * Micro‑accommodations: Mid‑sprint check‑ins; shared priority list.
    * Peer scripts: “Set a mid‑sprint check‑in so we don’t lose other priorities.”
    * Trial metrics: Missed commitments while hyperfocused; % tasks with mid‑checks.
    * Tools/supports: Progress board; automated reminders.
    * Privacy phrasing: “I’m deep in this sprint — I’ll set a mid‑sprint check‑in.”
Rejection Sensitivity
  - Manifestation: Strong reaction to critique; may withdraw from group feedback.
  - Best approach: Offer private, strengths‑based feedback and safe preview sessions.
    * Micro‑accommodations: Private preview sessions; feedback sandwich.
    * Peer scripts: “This is strong — one tweak that could help is X; want to iterate together?”
    * Trial metrics: Frequency of private previews; early sharing rate.
    * Tools/supports: Private feedback channels.
    * Privacy phrasing: “I prefer private feedback on early drafts.”
Masking Fatigue
  - Manifestation: Exhaustion from maintaining a socially expected persona in group settings.
  - Best approach: Provide low‑visibility contribution channels and recovery time.
    * Micro‑accommodations: Idea doc for async contributions; opt‑out for public demos occasionally.
    * Peer scripts: “Drop your idea in this doc and I’ll surface it.”
    * Trial metrics: Async contributions; self‑reported energy after recovery.
    * Tools/supports: Shared idea doc; opt‑out mechanism.
    * Privacy phrasing: “I’ll contribute in writing this round while I recharge.”
Social Communication Load
  - Manifestation: Extra effort to manage tone and influence across diverse groups.
  - Best approach: Provide concise templates for stakeholder updates and offer co‑presenting support.
    * Micro‑accommodations: 3‑slide summary template; co‑presenter for Q&A.
    * Peer scripts: “I’ll co‑present the Q&A so you can focus on the narrative.”
    * Trial metrics: % stakeholders reached; follow‑through rate after launch.
    * Tools/supports: Slide templates; co‑presenter pairing.
    * Privacy phrasing: “I’d like to co‑present the Q&A so I can focus on the message.”
Need for Written Instructions
  - Manifestation: Performs best with clear decision rules and short checklists.
  - Best approach: Provide one‑page decision rubrics and short templates.
    * Micro‑accommodations: One‑page rubrics; fast‑lane exception process.
    * Peer scripts: “Give me three success bullets and I’ll draft the checklist.”
    * Trial metrics: % decisions using rubric; time to decision in fast lane.
    * Tools/supports: Shared templates.
    * Privacy phrasing: “Can we capture the decision criteria in one short doc?”
Need for Reduced Interruption
  - Manifestation: Frequent interruptions reduce willingness to collaborate live.
  - Best approach: Define escalation rules and respect focus windows.
    * Micro‑accommodations: Focus windows; single escalation contact.
    * Peer scripts: “If urgent, text URGENT; otherwise send a 3‑bullet update.”
    * Trial metrics: # escalations during focus windows; % items resolved async.
    * Tools/supports: Slack status conventions; calendar focus blocks.
    * Privacy phrasing: “I’m in a focus block — text URGENT if it can’t wait.”
Need for Structure Without Shame
  - Manifestation: Prefers predictable scaffolding but may hesitate to ask publicly.
  - Best approach: Normalize shared templates and invite co‑creation.
    * Micro‑accommodations: Shared template library; optional structure workshops.
    * Peer scripts: “Can I share a short template that might help?”
    * Trial metrics: % team using template; time saved.
    * Tools/supports: Template library.
    * Privacy phrasing: “I have a short template that helps me — can I share it?”
Dyslexia Dyscalculia Dysgraphia Dyspraxia
  - Manifestation: Extra time for reading/writing/number tasks; prefers spoken or visual formats.
  - Best approach: Offer scribe support, speech‑to‑text, and co‑authoring.
    * Micro‑accommodations: Co‑author follow‑ups; voice notes transcribed.
    * Peer scripts: “I’ll draft the follow‑up from your notes.”
    * Trial metrics: Time from meeting to published follow‑up; % co‑authored docs.
    * Tools/supports: Otter, speech‑to‑text, templates.
    * Privacy phrasing: “I prefer to record a voice note for follow‑up.”
Auditory Processing Sensory Processing Tourette
  - Manifestation: Noisy group settings increase cognitive load; may opt out of live sessions.
  - Best approach: Share slides/notes in advance, use captions, and normalize opt‑outs.
    * Micro‑accommodations: Captions; slides in advance; quiet breakout options.
    * Peer scripts: “I’ll share slides before the session so you can pick what to comment on.”
    * Trial metrics: Written contributions; meeting comfort rating.
    * Tools/supports: Live captions; shared decks.
    * Privacy phrasing: “I’ll drop my input in the doc and follow up after the session.”
Working Memory Processing Speed Differences
  - Manifestation: Needs pre‑reads and short reflection pauses to synthesize group inputs.
  - Best approach: Provide concise pre‑reads 24–48 hours ahead and 5‑minute recap pauses in meetings.
    * Micro‑accommodations: Pre‑read templates; recap prompts.
    * Peer scripts: “I’ll send a 2‑slide summary before the meeting.”
    * Trial metrics: % decisions postponed for reflection; quality of final plans.
    * Tools/supports: Pre‑read templates; meeting recap prompts.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting.”

6 Disability Health and Body Based Factors
Chronic illness / Fatigue / Fluctuating capacity
  - Manifestation: Variable participation; may front‑load contributions on good days.
  - Best approach: Private signals for low‑capacity days, flexible timelines, and asynchronous contribution channels.
Sleep disorders / Medication side effects / Appointment burden
  - Best approach: Recorded meetings, written summaries, and flexible scheduling.
Mobility / Sensory impairment
  - Best approach: Accessible formats, captions, and alternative participation options.

7 Trauma Adversity and Nervous System Load
Childhood adversity / Workplace trauma / Institutional betrayal
  - Manifestation: High vigilance; reluctance to show vulnerability in groups.
  - Best approach: Use calm, factual language, offer private validation, and avoid surprise public calls.
Hypervigilance / People‑pleasing as survival
  - Best approach: Encourage boundary scripts and private check‑ins.

8 Identity Marginalization and Belonging
Racial ethnic bias / LGBTQ+ stress / Tokenism / Microaggression fatigue
  - Manifestation: Extra labor to manage impressions; selective visibility.
  - Best approach: Avoid tokenizing, invite structured voluntary participation, and validate privately.

9 Work History and Occupational Socialization
Toxic workplace / Micromanagement / Retaliation history
  - Manifestation: Learned caution; may avoid raising systemic issues.
  - Best approach: Offer confidential peer validation and safe, small experiments to rebuild trust.

10 Social Support and Community Context
Limited support network / Social isolation / Mentorship availability
  - Manifestation: Relies on team for belonging; may overinvest in a few relationships.
  - Best approach: Facilitate small peer pods and mentorship pairings.

11 Life Stage and Transition Factors
New parenthood / Mid‑career reinvention / Retirement anxiety / Major life events
  - Manifestation: Variable capacity and need for predictable commitments.
  - Best approach: Offer written priorities, temporary role adjustments, and respect privacy.

12 Environmental and Sensory Context
Open office overload / High meeting density / Notification overload / Remote/hybrid ambiguity
  - Manifestation: Prefers predictable, low‑stimulus collaboration patterns.
  - Best approach: Quiet hours, clear agendas, and opt‑out options for large social events.

13 Cultural Values and Communication Norms
High‑context vs low‑context / Direct vs indirect communication / Deference to authority
  - Manifestation: Extra effort to translate norms; may adapt style to fit.
  - Best approach: Clarify norms in writing and invite cultural context privately.

14 Legal Administrative and Bureaucratic Stress
Immigration paperwork / Benefits / Insurance / Disability accommodations
  - Manifestation: Heavy cognitive load; fear of errors.
  - Best approach: Share step‑by‑step checklists, private resource referrals, and time to manage paperwork.

15 Protective Factors and Resilience Resources
Mentor support / Stable housing / Financial cushion / Psychological safety / Clear expectations / Flexible scheduling / Peer relationships / Healthcare access / Effective accommodations / Recovery time / Purpose / Therapy / Skill mastery / Self‑advocacy
  - Manifestation: When present, Collaborators sustain generous, reliable teamwork and share knowledge freely.
  - Best approach: Encourage use of supports, suggest peer accountability partners, and co‑design recovery rituals.

If this matches your expectations I’ll continue to the next profile and keep the Neurodivergence section at this expanded level. Say go and I’ll run the next profile through all 15 domains quickly.


go

Connector — Lived Experience Context across 15 Domains
Below is a compact, actionable matrix for Connector across 15 lived‑experience domains. Each subcategory follows the schema: Manifestation · Behavior impact · Distortion of typical Connector pattern · Real‑life snapshot · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial).
The Neurodivergence & Cognitive Accessibility domain is expanded with micro‑accommodations, peer scripts, trial metrics, tools/supports, and privacy‑first phrasing.

1 Economic and Material Security
  - Manifestation: Invests time building networks that can convert to opportunities; may trade unpaid labor for visibility.
  - Behavior impact: Prioritizes relationship building over billable or measurable work.
  - Distortion: Connector’s network value becomes unpaid labor and overcommitment.
  - Snapshot: Runs many intro calls that don’t convert while overdue deliverables pile up.
  - Work impact: Shallow follow‑through; missed deadlines.
  - Risk if ignored: Burnout and loss of credibility.
  - Best approach: Offer bounded networking slots and help prioritize high‑ROI connections.


2 Family System and Caregiving Context
  - Manifestation: Uses networks to find caregiving solutions; emotional labor at home drains social energy.
  - Behavior impact: High relational bandwidth at work but limited capacity for follow‑through.
  - Distortion: Connector’s sociability becomes brittle when personal demands spike.
  - Snapshot: Hosts a team intro event then cancels follow‑ups due to caregiving emergency.
  - Work impact: Unreliable event continuity.
  - Best approach: Offer co‑hosts for events and async ways to sustain introductions.

3 Immigration Displacement and Cultural Transition
  - Manifestation: Leverages networks to bridge credential gaps; code‑switches heavily.
  - Behavior impact: Invests extra energy in social proof and introductions.
  - Distortion: Connector’s bridging role becomes exhausting identity labor.
  - Snapshot: Repeats credentials in every intro to preempt bias.
  - Work impact: Extra cognitive load and slower recovery.
  - Best approach: Provide safe, low‑visibility ways to showcase expertise and co‑present introductions.

4 Education and Access Background
  - Manifestation: Builds networks to access learning and mentors; may lack formal sponsorship.
  - Behavior impact: Relies on relationships to open doors rather than formal channels.
  - Distortion: Connector’s network advantage becomes dependency on informal favors.
  - Snapshot: Secures a mentor through introductions but lacks institutional recognition.
  - Work impact: Uneven career progression.
  - Best approach: Help translate network wins into documented sponsorship and visible credit.

5 Neurodivergence and Cognitive Accessibility — Expanded
Overview
Connectors excel at relationships, introductions, and social orchestration. Neurodivergence can amplify strengths and create specific accessibility needs. Below each subcategory: Manifestation · Behavior impact · Distortion · Snapshot · Work impact · Risk · Best approach, then Micro‑accommodations · Peer scripts · Trial metrics · Tools/supports · Privacy phrasing.

ADHD
  - Manifestation: Rapidly forms new connections and ideas; struggles to maintain follow‑ups and multi‑step introductions.
  - Behavior impact: Starts many introductions; follow‑through drops off.
  - Distortion: Connector’s breadth becomes unreliable handoffs.
  - Snapshot: Makes 10 intros in a week but only 2 get follow‑ups.
  - Work impact: Missed opportunities and frustrated contacts.
  - Risk: Reputation damage for overpromising.
  - Best approach: Time‑box outreach and require a short handoff note for each intro.
    * Micro‑accommodations: Limit active intro threads to ≤4; use a 1‑line handoff template.
    * Peer scripts: “Love this intro — can you drop a one‑line context and I’ll follow up?” / “Can we cap active intros to four so we can close them?”
    * Trial metrics: % intros with handoff note; intro closure rate.
    * Tools/supports: CRM or shared spreadsheet with WIP limits; calendar follow‑up reminders.
    * Privacy phrasing: “I’m testing a short, time‑boxed intro run and will post a one‑line handoff for each.”


Executive Function Differences
  - Manifestation: Strong at connecting people but may miss sequencing multi‑party introductions.
  - Best approach: Use a simple sequencing template and name a single next owner.
    * Micro‑accommodations: 3‑step intro template with owner tag.
    * Peer scripts: “Let’s map three steps and who owns each so it’s clear.”
    * Trial metrics: % intros with owner; time to first follow‑up.
    * Tools/supports: Lightweight RACI in shared doc.
    * Privacy phrasing: “I’ll map three steps and owners so it’s easy to pick up.”

Time Blindness
  - Manifestation: Underestimates time needed to nurture relationships and coordinate calendars.
  - Best approach: Add explicit buffers and schedule follow‑ups at the time of intro.
    * Micro‑accommodations: Default +25% buffer for scheduling; set follow‑up at intro time.
    * Peer scripts: “Can we schedule a 15‑minute follow‑up now so it doesn’t slip?”
    * Trial metrics: % scheduled follow‑ups; average buffer used.
    * Tools/supports: Shared calendar invites with reminders.
    * Privacy phrasing: “I’m adding a small buffer to make sure the intro lands.”

Task Initiation Difficulty
  - Manifestation: Needs a clear first micro‑task to start a multi‑party connection.
  - Best approach: Provide a one‑sentence first action and offer to co‑start the outreach.
    * Micro‑accommodations: 15‑minute co‑start; first‑action script.
    * Peer scripts: “What’s one 15‑minute action to kick this off?” / “I’ll co‑start the first message with you.”
    * Trial metrics: Time to first outreach; # co‑starts used.
    * Tools/supports: Starter message templates.
    * Privacy phrasing: “Can we co‑start the first message so I can get traction?”

Context‑Switching Difficulty
  - Manifestation: High cost switching between social orchestration and focused tasks.
  - Best approach: Batch networking activities and use concise async updates.
    * Micro‑accommodations: Networking blocks; 3‑bullet async updates.
    * Peer scripts: “I’ll send a 3‑bullet update after your networking block.”
    * Trial metrics: Interruptions during blocks; % items resolved async.
    * Tools/supports: Calendar focus blocks; shared update templates.
    * Privacy phrasing: “I’m protecting a networking block — please send a short update if it’s not urgent.”

Hyperfocus Patterns
  - Manifestation: Deeply invests in a single relationship or community, neglecting others.
  - Best approach: Mid‑campaign check‑ins and visible priority lists.
    * Micro‑accommodations: Mid‑campaign review; shared priority board.
    * Peer scripts: “Set a mid‑point check‑in so we don’t lose other relationships.”
    * Trial metrics: Balance of active relationships; % mid‑checks completed.
    * Tools/supports: Progress board; reminders.
    * Privacy phrasing: “I’m deep in this relationship build — I’ll set a mid‑point check‑in.”

Rejection Sensitivity
  - Manifestation: Strong reaction to perceived social rebuffs; may withdraw from outreach.
  - Best approach: Private, strengths‑based feedback and safe preview sessions for messages.
    * Micro‑accommodations: Private preview of outreach messages.
    * Peer scripts: “This intro lands well — one tweak is X; want to iterate privately?”
    * Trial metrics: Frequency of private previews; change in outreach frequency.
    * Tools/supports: Private feedback channel.
    * Privacy phrasing: “I prefer private feedback on early outreach drafts.”

Masking Fatigue
  - Manifestation: Exhaustion from constant social performance; fewer spontaneous check‑ins.
  - Best approach: Low‑visibility contribution channels and scheduled recovery time.
    * Micro‑accommodations: Idea doc for async introductions; recovery half‑days after big events.
    * Peer scripts: “Drop your intro in this doc and I’ll surface it.”
    * Trial metrics: Async contributions; self‑reported recovery.
    * Tools/supports: Shared idea doc; opt‑out mechanism.
    * Privacy phrasing: “I’ll contribute in writing this round while I recharge.”

Social Communication Load
  - Manifestation: Heavy effort to tailor messages across cultures and contexts.
  - Best approach: Provide short templates and offer co‑presenting or co‑messaging support.
    * Micro‑accommodations: 3‑bullet intro template; co‑message option.
    * Peer scripts: “I’ll co‑send the intro so you can focus on the relationship.”
    * Trial metrics: % intros co‑sent; recipient response rate.
    * Tools/supports: Template library; co‑messaging workflows.
    * Privacy phrasing: “Can I co‑send this intro so I can support the tone?”

Need for Written Instructions
  - Manifestation: Prefers concise handoff notes and templates for introductions.
  - Best approach: One‑line handoff templates and example messages.
    * Micro‑accommodations: One‑line handoff; sample scripts.
    * Peer scripts: “Drop a one‑line context and I’ll take it from there.”
    * Trial metrics: % intros with handoff; time to reply.
    * Tools/supports: Shared templates; CRM snippets.
    * Privacy phrasing: “Can you leave a one‑line context so I can follow up?”

Need for Reduced Interruption
  - Manifestation: Frequent pings during outreach break momentum.
  - Best approach: Define escalation rules and use async updates for non‑urgent items.
    * Micro‑accommodations: Focus windows; single escalation contact.
    * Peer scripts: “If urgent, text URGENT; otherwise send a 3‑bullet update.”
    * Trial metrics: # escalations during focus windows; % items resolved async.
    * Tools/supports: Slack status conventions; calendar focus blocks.
    * Privacy phrasing: “I’m in a networking block — text URGENT if it can’t wait.”

Need for Structure Without Shame
  - Manifestation: Likes scaffolding for large events but may hesitate to ask publicly.
  - Best approach: Normalize shared templates and co‑host roles.
    * Micro‑accommodations: Shared event checklist; optional co‑host signups.
    * Peer scripts: “Can I co‑host this so we share the load?”
    * Trial metrics: % events with co‑hosts; event follow‑through rate.
    * Tools/supports: Event checklist; shared calendar.
    * Privacy phrasing: “Can we co‑host this so I can manage follow‑ups?”

Dyslexia Dyscalculia Dysgraphia Dyspraxia
  - Manifestation: Prefers spoken introductions and visual summaries; written follow‑ups take extra time.
  - Best approach: Offer scribe support and voice‑to‑text for follow‑ups.
    * Micro‑accommodations: Co‑author follow‑ups; voice notes transcribed.
    * Peer scripts: “I’ll draft the follow‑up from your notes.”
    * Trial metrics: Time from intro to published follow‑up; % co‑authored messages.
    * Tools/supports: Otter, speech‑to‑text, CRM templates.
    * Privacy phrasing: “I prefer to record a quick voice note for the follow‑up.”

Auditory Processing Sensory Processing Tourette
  - Manifestation: Large, noisy networking events can be overwhelming; prefers small curated meetups.
  - Best approach: Offer small group options, captions for calls, and advance agendas.
    * Micro‑accommodations: Captions; small breakout options; slides in advance.
    * Peer scripts: “I’ll share the agenda and small breakout list before the event.”
    * Trial metrics: Attendance comfort rating; number of small meetups held.
    * Tools/supports: Live captions; shared decks.
    * Privacy phrasing: “I’ll skip the big event and join a small breakout — please share notes.”

Working Memory Processing Speed
  - Manifestation: Needs concise pre‑reads and short pauses to synthesize multi‑party contexts.
  - Best approach: Provide 2‑slide pre‑reads and 5‑minute recap pauses in group handoffs.
    * Micro‑accommodations: Pre‑reads 24–48 hours ahead; recap pauses.
    * Peer scripts: “I’ll send a 2‑slide summary before the intro.”
    * Trial metrics: % intros with pre‑reads; clarity rating from recipients.
    * Tools/supports: Pre‑read templates; recap prompts.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute recap after the intro.”

6 Disability Health and Body Based Factors
  - Manifestation: Variable social stamina and sensory needs; may need quiet recovery after events.
  - Best approach: Offer opt‑outs, asynchronous ways to contribute, and private accommodation channels.

7 Trauma Adversity and Nervous System Load
  - Manifestation: Past trauma can make public introductions risky; prefers controlled, predictable interactions.
  - Best approach: Use calm, predictable processes, private validation, and avoid surprise public exposure.

8 Identity Marginalization and Belonging
  - Manifestation: Extra labor to represent communities in networks; risk of tokenization.
  - Best approach: Avoid token requests, invite voluntary representation, and provide private support.

9 Work History and Occupational Socialization
  - Manifestation: May have built networks to compensate for lack of institutional power.
  - Best approach: Translate network value into documented sponsorship and visible credit.

10 Social Support and Community Context
  - Manifestation: Relies on broad networks for resilience; may lack deep local supports.
  - Best approach: Encourage small peer pods and reciprocal support arrangements.

11 Life Stage and Transition Factors
  - Manifestation: Life transitions change networking capacity and priorities.
  - Best approach: Offer temporary co‑hosts, flexible event roles, and written handoffs.

12 Environmental and Sensory Context
  - Manifestation: Networking thrives in curated, low‑stimulus settings for many Connectors.
  - Best approach: Provide small meetups, quiet breakout rooms, and written summaries.

13 Cultural Values and Communication Norms
  - Manifestation: Must translate norms across cultures when making introductions.
  - Best approach: Clarify cultural context in advance and offer short scripts for cross‑cultural intros.

14 Legal Administrative and Bureaucratic Stress
  - Manifestation: Paperwork and bureaucracy reduce time for relationship work.
  - Best approach: Share step‑by‑step checklists and offer to co‑complete forms or referrals.

15 Protective Factors and Resilience Resources
  - Manifestation: With mentors, stable resources, and psychological safety, Connectors scale influence sustainably.
  - Best approach: Encourage peer accountability partners, co‑hosting, and recovery rituals to protect social energy.

If this Connector block looks right I’ll continue through the remaining profiles at the same pace and with the same expanded Neurodivergence depth. I can also batch‑insert these upgraded blocks into your master toolkit when you’re ready. Say continue and I’ll run the next profile now.

go

Catalyst — Lived Experience Context across 15 Domains
Each subcategory follows the locked schema: Manifestation · Behavior impact · Distortion of typical Catalyst pattern · Real‑life snapshot · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial).
The Neurodivergence & Cognitive Accessibility domain is expanded with micro‑accommodations, peer scripts, trial metrics, tools/supports, and privacy‑first phrasing.

1 Economic & Material Security
  - Low socioeconomic background / Financial insecurity
    * Manifestation: Urgency to create visible change; pressure to show immediate impact.
    * Behavior impact: Pushes ambitious pilots that promise quick wins; may overcommit resources.
    * Distortion: Catalyst’s catalytic momentum becomes risky short‑termism.
    * Snapshot: Launches a cross‑team pilot to prove value this quarter, stretching team capacity.
    * Work impact: Resource strain and uneven follow‑through.
    * Risk if ignored: Burnout and credibility loss.
    * Best approach: Frame experiments as small, time‑boxed catalysts with clear stop rules and private resource options.
  - Housing/transport/childcare/unreliable tech
    * Manifestation: Erratic availability; bursts of high energy outside core hours.
    * Best approach: Use async channels, confirm availability windows, and accept micro‑deliverables.

2 Family System & Caregiving Context
  - Caregiving / Single‑parent responsibilities / Bereavement
    * Manifestation: Emotional load and tight scheduling; needs predictable windows.
    * Behavior impact: Prioritizes high‑impact, short interventions; avoids long commitments.
    * Distortion: Catalytic urgency becomes inconsistent presence.
    * Snapshot: Runs a high‑energy workshop then disappears for caregiving duties.
    * Work impact: Momentum gaps and handoff friction.
    * Best approach: Offer micro‑experiments, async follow‑ups, and swap facilitation duties.
  - Domestic violence / Multigenerational strain
    * Best approach: Prioritize confidentiality and low‑visibility support.

3 Immigration, Displacement & Cultural Transition
  - Immigration history / Visa uncertainty / Credential barriers
    * Manifestation: Extra effort to demonstrate impact and legitimacy.
    * Behavior impact: Overdocuments outcomes; seeks visible wins to validate status.
    * Distortion: Catalyst’s public advocacy becomes defensive over‑proofing.
    * Snapshot: Publishes an exhaustive impact brief to preempt critique.
    * Work impact: Time diverted from iteration to validation.
    * Best approach: Offer explicit recognition, small public showcases, and credential‑bridging resources.
  - Language transition / Accent bias / Code‑switching fatigue
    * Best approach: Provide agendas and slides in advance; allow recorded or written contributions.

4 Education & Access Background
  - First‑generation / Under‑resourced schooling / Interrupted education
    * Manifestation: Self‑taught problem solving; skepticism of formal processes.
    * Behavior impact: Prefers rapid prototyping over formal frameworks.
    * Distortion: Catalytic experimentation becomes ad‑hoc and hard to scale.
    * Best approach: Offer curated frameworks presented as optional accelerators and peer coaching.
  - Undiagnosed learning differences / Late diagnosis
    * Best approach: Provide templates, rehearsal opportunities, and extra processing time.

5 Neurodivergence & Cognitive Accessibility — Expanded
Overview
Catalysts drive change fast; neurodivergence often amplifies creative speed and risk tolerance while creating specific accessibility needs. Each subcategory below includes practical micro‑accommodations, short peer scripts, trial metrics, suggested tools, and a privacy‑first phrasing the person can use.

ADHD
  - Manifestation: Rapid ideation and urgency to launch; difficulty sustaining long scaling phases.
  - Behavior impact: Starts many catalytic pilots; some stall before integration.
  - Distortion: Momentum becomes scattered experimentation without durable outcomes.
  - Snapshot: Kicks off three pilots in a month; only one reaches handoff.
  - Work impact: Resource churn and stakeholder fatigue.
  - Risk if ignored: Credibility erosion.
  - Best approach: Convert ideas into 2–4 week pilots with explicit success/fail criteria and WIP limits.
    * Micro‑accommodations: Cap active pilots at 1–2; require a one‑page handoff when pausing.
    * Peer scripts: “Love this — can we time‑box it for three weeks and define clear stop rules?” / “If you pause, drop a one‑page state note so we can pick it up.”
    * Trial metrics: Active pilots ≤2; pilot completion rate; stakeholder satisfaction (1–5).
    * Tools/supports: Kanban with WIP limits; short weekly syncs; timers.
    * Privacy phrasing: “I’m running a short pilot and will share a one‑page update when it’s paused.”

Executive Function Differences
  - Manifestation: Struggles to sequence multi‑stakeholder scaling steps.
  - Best approach: Use simple phase templates and mandatory handoff notes.
    * Micro‑accommodations: Phase checklist (3–5 items); one‑page handoff.
    * Peer scripts: “Let’s map the three phases and owners — I’ll draft the checklist.”
    * Trial metrics: % pilots with handoff note; post‑pilot incidents.
    * Tools/supports: Lightweight RACI; milestone calendar.
    * Privacy phrasing: “Can we add a short handoff note before scaling?”

Time Blindness
  - Manifestation: Underestimates alignment and operationalization time.
  - Best approach: Use historical benchmarks and explicit buffers.
    * Micro‑accommodations: +25–40% buffer; visible countdowns.
    * Peer scripts: “Can we add a two‑week buffer so ops can staff it?”
    * Trial metrics: % commitments met; average buffer used.
    * Tools/supports: Timeline dashboard; estimation checklist.
    * Privacy phrasing: “I’m adding a conservative buffer to ensure we land this.”

Task Initiation Difficulty
  - Manifestation: Needs a clear, meaningful first step to start scaling work.
  - Best approach: Provide a one‑sentence first action and a 30‑minute co‑start.
    * Micro‑accommodations: 30‑minute kickoff pairing; minimal experiment template.
    * Peer scripts: “What’s one tiny test we can run in a day?” / “I’ll pair for the first 30 minutes to get this moving.”
    * Trial metrics: Time from idea to first action; # ideas reaching pilot.
    * Tools/supports: Kickoff slots; starter templates.
    * Privacy phrasing: “Can we co‑start for 30 minutes so I can get traction?”

Context‑Switching Difficulty
  - Manifestation: Deep catalytic thinking is disrupted by frequent operational asks.
  - Best approach: Protect deep‑work windows, use concise async briefs, and define escalation rules.
    * Micro‑accommodations: Protected core hours; 3‑bullet async updates; single escalation contact.
    * Peer scripts: “I’ll send a 3‑bullet update after your block — no need to interrupt.” / “If it’s urgent, text URGENT.”
    * Trial metrics: Interruptions during deep work; % items resolved async.
    * Tools/supports: Calendar focus blocks; async templates.
    * Privacy phrasing: “I’m protecting a 3‑hour strategy block — text URGENT if it can’t wait.”

Hyperfocus Patterns
  - Manifestation: Intense immersion in one catalytic angle; misses counter signals.
  - Best approach: Require a short “devil’s advocate” counter scenario and scheduled cross‑checks.
    * Micro‑accommodations: 10‑minute counter scenario; time‑boxed deep dives with post‑dive cross‑checks.
    * Peer scripts: “Can you give a 10‑minute counter scenario so we surface blind spots?” / “Let’s time‑box this deep dive and schedule a cross‑check.”
    * Trial metrics: # counter scenarios produced; % deep dives with cross‑checks.
    * Tools/supports: Scenario templates; scheduled cross‑checks.
    * Privacy phrasing: “I’m doing a time‑boxed deep dive and will share counter scenarios at mid‑point.”

Rejection Sensitivity
  - Manifestation: Strong reaction to critique; may withdraw or double down defensively.
  - Best approach: Start with private, strengths‑based feedback and encourage small public trials.
    * Micro‑accommodations: Private preview sessions; feedback sandwich.
    * Peer scripts: “This landed well — one tweak is X; want to iterate privately?” / “Can I preview this before the demo?”
    * Trial metrics: Frequency of private previews; change in early sharing.
    * Tools/supports: Private feedback channels.
    * Privacy phrasing: “I prefer private feedback on early drafts.”

Masking Fatigue
  - Manifestation: Exhaustion from sustaining a catalytic persona; fewer spontaneous contributions.
  - Best approach: Low‑visibility contribution channels and scheduled recovery.
    * Micro‑accommodations: Idea doc for async input; recovery half‑days after major events.
    * Peer scripts: “Drop your idea in this doc and I’ll surface it.” / “Take a recovery half‑day after the pitch — we’ll cover.”
    * Trial metrics: Async contributions; self‑reported recovery.
    * Tools/supports: Shared idea doc; opt‑out mechanism.
    * Privacy phrasing: “I’ll contribute in writing this round while I recharge.”

Social Communication Load
  - Manifestation: Repeated persuasion across stakeholders is draining.
  - Best approach: Provide 3‑slide summaries, co‑presenting support, and scheduled touchpoints.
    * Micro‑accommodations: Executive summary template; co‑presenter for Q&A.
    * Peer scripts: “I’ll co‑present the Q&A so you can focus on the narrative.” / “Can I draft a 3‑slide summary for you?”
    * Trial metrics: % stakeholders reached; follow‑through rate after launch.
    * Tools/supports: Slide templates; co‑presenter pairing.
    * Privacy phrasing: “I’d like to co‑present the Q&A so I can focus on the narrative.”

Need for Written Instructions
  - Manifestation: Performs best when catalytic experiments have concise decision rules.
  - Best approach: One‑page decision rubrics and a “fast lane” for urgent pivots.
    * Micro‑accommodations: One‑page rubric; fast‑lane exception process.
    * Peer scripts: “Give me three success bullets and I’ll draft the rubric.”
    * Trial metrics: % decisions using rubric; time to decision in fast lane.
    * Tools/supports: Shared templates.
    * Privacy phrasing: “Can we capture the decision criteria in one short doc?”

Need for Reduced Interruption
  - Manifestation: Interruptions derail catalytic momentum.
  - Best approach: Define escalation rules and use async updates for non‑urgent items.
    * Micro‑accommodations: Protected deep‑work windows; single escalation contact.
    * Peer scripts: “If urgent, text URGENT; otherwise send a 3‑bullet update.”
    * Trial metrics: # escalations during deep work; % items resolved async.
    * Tools/supports: Slack status conventions; escalation contact.
    * Privacy phrasing: “I’m in a deep‑work block — text URGENT if it can’t wait.”

Need for Structure Without Shame
  - Manifestation: Prefers lightweight scaffolding but may hesitate to ask.
  - Best approach: Normalize shared templates and co‑create structure as a team improvement.
    * Micro‑accommodations: Shared experiment template; optional structure workshops.
    * Peer scripts: “Can I share a short template that might help?”
    * Trial metrics: % team using template; time saved.
    * Tools/supports: Template library.
    * Privacy phrasing: “I have a short template that helps me — can I share it?”

Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia
  - Manifestation: Extra time for written reports, numeric models, or manual tasks.
  - Best approach: Scribe support, speech‑to‑text, and co‑authoring.
    * Micro‑accommodations: Co‑author write‑ups; voice notes transcribed.
    * Peer scripts: “I’ll draft the follow‑up from your notes.”
    * Trial metrics: Time from demo to published follow‑up; % co‑authored docs.
    * Tools/supports: Speech‑to‑text; templates.
    * Privacy phrasing: “I prefer to record a voice note for the follow‑up.”

Auditory Processing / Sensory Processing / Tourette
  - Manifestation: Large, noisy workshops are draining; prefers small, curated sessions.
  - Best approach: Share slides/notes in advance, use captions, and offer small breakout options.
    * Micro‑accommodations: Captions; slides in advance; quiet breakout rooms.
    * Peer scripts: “I’ll share slides before the session so you can pick what to comment on.”
    * Trial metrics: Meeting comfort rating; written contributions.
    * Tools/supports: Live captions; shared decks.
    * Privacy phrasing: “I’ll drop my input in the doc and follow up after the session.”

Working Memory / Processing Speed
  - Manifestation: Needs concise pre‑reads and short reflection pauses to synthesize complex change plans.
  - Best approach: Provide 2‑slide pre‑reads 24–48 hours ahead and 5‑minute recap pauses in meetings.
    * Micro‑accommodations: Pre‑reads; recap pauses.
    * Peer scripts: “I’ll send a 2‑slide summary before the meeting.”
    * Trial metrics: % decisions postponed for reflection; quality of final plans.
    * Tools/supports: Pre‑read templates; recap prompts.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting.”

6 Disability, Health & Body‑Based Factors
  - Chronic illness / Fatigue / Fluctuating capacity
    * Manifestation: Variable bursts of catalytic energy; needs recovery windows.
    * Best approach: Private signals for low capacity, flexible timelines, and written handoffs.
  - Sleep disorders / Medication side effects / Appointment burden
    * Best approach: Recorded sessions, written summaries, and flexible scheduling.
  - Mobility / Sensory impairment
    * Best approach: Accessible formats, captions, and opt‑out options.

7 Trauma, Adversity & Nervous‑System Load
  - Childhood adversity / Abuse / Workplace trauma / Institutional betrayal
    * Manifestation: Hypervigilance and distrust of ambiguous feedback; avoids surprise public exposure.
    * Best approach: Use calm, factual language; offer private validation and predictable interactions.
  - Hypervigilance / People‑pleasing as safety
    * Best approach: Encourage boundary scripts and private check‑ins.

8 Identity, Marginalization & Belonging
  - Racial/ethnic bias / LGBTQ+ stress / Tokenism / Microaggression fatigue
    * Manifestation: Extra labor to manage impressions; may avoid being the public face of change.
    * Best approach: Avoid tokenizing requests, invite voluntary representation, and validate privately.
  - Code‑switching / Pressure to represent
    * Best approach: Provide multiple channels for input and explicit invitations to participate.

9 Work History & Occupational Socialization
  - Toxic workplace / Micromanagement / Retaliation history
    * Manifestation: Reluctance to propose bold change publicly; over‑prepares to avoid critique.
    * Best approach: Offer confidential peer validation and small, safe pilots to rebuild trust.
  - Job instability / Layoff trauma / High responsibility without support
    * Best approach: Validate short‑term wins and co‑design protected time for exploration.

10 Social Support & Community Context
  - Limited support network / Social isolation / Mentorship availability
    * Manifestation: Needs trusted allies to amplify catalytic work.
    * Best approach: Suggest peer accountability partners, mentorship pairings, and reciprocal support.
  - Community safety / Relocation loneliness
    * Best approach: Encourage balanced social outlets and small boundary practices.

11 Life Stage & Transition Factors
  - New parenthood / Pregnancy/postpartum / Menopause / Mid‑career reinvention / Retirement anxiety / Moving / Divorce / Death / Major health diagnosis
    * Manifestation: Variable capacity and need for predictable, bounded experiments.
    * Best approach: Offer written priorities, temporary role adjustments, and respect privacy.
  - Legal proceedings / Sudden financial event / Natural disaster
    * Best approach: Async options and private check‑ins.

12 Environmental & Sensory Context
  - Loud environment / Open office / Lighting sensitivity / High meeting density / Notification overload
    * Manifestation: Catalytic creativity needs low‑stimulus windows.
    * Best approach: Quiet hours, written agendas, and respect for focus windows.
  - Workspace crowding / Physical safety concerns
    * Best approach: Provide opt‑outs and written summaries.

13 Cultural Values & Communication Norms
  - High‑context vs low‑context / Direct vs indirect communication / Deference to authority
    * Manifestation: Extra effort to translate change narratives across cultures.
    * Best approach: Clarify norms in writing and invite cultural context privately.
  - Modesty/self‑promotion discomfort / Different meanings of urgency
    * Best approach: Frame recognition as team outcomes and clarify urgency signals.

14 Legal, Administrative & Bureaucratic Stress
  - Immigration paperwork / Court proceedings / Benefits / Insurance / Disability accommodations / Background checks
    * Manifestation: Heavy cognitive load; fear of errors.
    * Best approach: Share step‑by‑step checklists, private resource referrals, and time to manage paperwork.
  - Past criminalization / Background check anxiety
    * Best approach: Confidential guidance and resources for disclosure decisions.

15 Protective Factors & Resilience Resources
  - Mentor support / Stable housing / Financial cushion / Psychological safety / Clear expectations / Flexible scheduling / Peer relationships / Healthcare access / Effective accommodations / Recovery time / Purpose / Therapy / Skill mastery / Self‑advocacy
    * Manifestation: With supports, Catalysts sustain high‑impact change, iterate publicly, and scale durable outcomes.
    * Best approach: Encourage use of supports, suggest peer accountability partners, and co‑design recovery rituals.

If this format and pace work, I’ll continue to the next profile (Integrator) with the same speed and the Neurodivergence section fully expanded. Say continue and I’ll run Integrator through all 15 domains next.

go

Integrator — Lived Experience Context across 15 Domains
Below is a compact, scan‑friendly matrix for Integrator across 15 lived‑experience domains. Each subcategory follows the schema: Manifestation · Behavior impact · Distortion of typical Integrator pattern · Real‑life snapshot · Work / bandwidth impact · Risk if ignored · Best way to approach (peer, non‑managerial).
The Neurodivergence & Cognitive Accessibility domain is expanded with micro‑accommodations, peer scripts, trial metrics, tools/supports, and privacy‑first phrasing.

1 Economic and Material Security
Low socioeconomic background / Financial insecurity
  - Manifestation: Prioritizes predictable, low‑risk integrations that protect resources.
  - Behavior impact: Favors conservative consolidation over experimental merges.
  - Distortion: Integrator’s balancing role becomes risk‑averse gatekeeping.
  - Snapshot: Delays a cross‑team integration until budget certainty is confirmed.
  - Work impact: Slower unification of systems; missed innovation windows.
  - Risk if ignored: Fragmented platforms and missed efficiencies.
  - Best approach: Offer phased, low‑cost pilots and explicit contingency plans.


2 Family System and Caregiving Context
Caregiving responsibilities / Single‑parenting / Bereavement
  - Manifestation: Needs predictable schedules and clear handoffs.
  - Behavior impact: Prefers bounded integration tasks and documented processes.
  - Distortion: Integrator’s coordination becomes overly rigid to avoid surprises.
  - Snapshot: Requests written runbooks before agreeing to lead a cross‑team merge.
  - Work impact: Fewer last‑minute commitments; stronger documentation.
  - Best approach: Provide asynchronous review options and short, scheduled syncs.


3 Immigration Displacement and Cultural Transition
Visa uncertainty / Credential barriers / Language transition
  - Manifestation: Extra effort to demonstrate reliability across cultures and systems.
  - Behavior impact: Over‑documents integration decisions; prefers formal sign‑offs.
  - Distortion: Integrator’s inclusive framing becomes defensive proofing.
  - Snapshot: Circulates exhaustive integration specs to preempt critique.
  - Work impact: Slower approvals but clearer audit trails.
  - Best approach: Validate expertise privately, provide templates, and allow recorded presentations.


4 Education and Access Background
First‑generation / Under‑resourced schooling / Interrupted education
  - Manifestation: High self‑reliance; learns integration patterns by doing.
  - Behavior impact: Prefers apprenticeship and hands‑on pairing over formal training.
  - Distortion: Integrator’s systems knowledge becomes tacit and hard to transfer.
  - Snapshot: Knows integration quirks but hasn’t documented them for the team.
  - Work impact: Single‑person dependencies.
  - Best approach: Offer peer pairing, short documentation sprints, and mentorship.


5 Neurodivergence and Cognitive Accessibility — Expanded
Overview
Integrators synthesize people, processes, and tech. Neurodivergence can amplify pattern recognition and systems insight while creating specific accessibility needs. Each subcategory below includes Manifestation · Behavior impact · Distortion · Snapshot · Work impact · Risk · Best approach, then Micro‑accommodations · Peer scripts · Trial metrics · Tools/supports · Privacy phrasing.

ADHD
  - Manifestation: Rapid systems insight and impatience for slow alignment.
  - Behavior impact: Proposes many integration shortcuts; may skip documentation.
  - Distortion: Integrator’s efficiency becomes risky shortcuts and missing handoffs.
  - Snapshot: Delivers a clever integration patch but omits rollback steps.
  - Work impact: Faster fixes but fragile deployments.
  - Risk: Outages and unclear ownership.
  - Best approach: Convert work into short, documented micro‑deployments with mandatory rollback notes.
    * Micro‑accommodations: 1–2 week micro‑deployments; required one‑page rollback and owner field.
    * Peer scripts: “This is great — can you add a one‑page rollback and owner before we deploy?” / “Let’s time‑box this to two weeks and include a handoff note.”
    * Trial metrics: % micro‑deploys with rollback; post‑deploy incidents.
    * Tools/supports: Lightweight runbook templates; Kanban with WIP limits; automated pre‑deploy checklist.
    * Privacy phrasing: “I’ll run this as a short micro‑deploy and post the rollback note when it’s ready.”


Executive Function Differences
  - Manifestation: Strong systems thinking but difficulty sequencing many dependent steps.
  - Best approach: Use simple phase checklists and explicit owner tags.
    * Micro‑accommodations: Phase checklist (3–5 steps); mandatory handoff note.
    * Peer scripts: “Can we map the three phases and owners so nothing slips?”
    * Trial metrics: % integrations with phase checklist; handoff completion rate.
    * Tools/supports: Shared milestone calendar; one‑page phase templates.
    * Privacy phrasing: “I’ll add a short phase checklist so it’s easy to pick up.”


Time Blindness
  - Manifestation: Underestimates time for stakeholder alignment and testing.
  - Best approach: Use historical benchmarks and add explicit buffers.
    * Micro‑accommodations: +25–40% buffer; visible countdowns for approvals.
    * Peer scripts: “Let’s add a two‑week buffer for alignment so ops can staff it.”
    * Trial metrics: % deadlines met; average buffer used.
    * Tools/supports: Timeline dashboard; estimation checklist.
    * Privacy phrasing: “I’m adding a conservative buffer to ensure alignment.”


Task Initiation Difficulty
  - Manifestation: Needs a clear first integration step to start cross‑team work.
  - Best approach: Provide a one‑sentence first action and a 30‑minute co‑start.
    * Micro‑accommodations: 30‑minute kickoff pairing; starter template with first action.
    * Peer scripts: “What’s one 30‑minute action that gets this moving?” / “I’ll pair for the first half‑hour to help start.”
    * Trial metrics: Time to first action; # tasks started with pairing.
    * Tools/supports: Starter templates; pairing slots.
    * Privacy phrasing: “Can we co‑start for 30 minutes so I can get traction?”


Context‑Switching Difficulty
  - Manifestation: Deep synthesis requires long uninterrupted blocks; meetings are costly.
  - Best approach: Protect deep‑work windows, use concise async briefs, and define escalation rules.
    * Micro‑accommodations: Protected core hours; 3‑bullet async updates; single escalation contact.
    * Peer scripts: “I’ll send a 3‑bullet update after your block — no need to interrupt.” / “If it’s urgent, text URGENT.”
    * Trial metrics: Interruptions during deep work; % items resolved async.
    * Tools/supports: Calendar focus blocks; async templates; escalation rules.
    * Privacy phrasing: “I’m protecting a 3‑hour synthesis block — text URGENT if it can’t wait.”


Hyperfocus Patterns
  - Manifestation: Immerses in a single integration path and may miss alternative constraints.
  - Best approach: Require a short counter‑scenario and scheduled cross‑checks.
    * Micro‑accommodations: 10‑minute devil’s‑advocate summary; mid‑dive cross‑check.
    * Peer scripts: “Can you give a 10‑minute counter scenario so we surface blind spots?” / “Let’s schedule a mid‑dive cross‑check.”
    * Trial metrics: # counter scenarios produced; % deep dives with cross‑checks.
    * Tools/supports: Scenario templates; scheduled cross‑checks.
    * Privacy phrasing: “I’m doing a time‑boxed deep dive and will share counter scenarios at mid‑point.”


Rejection Sensitivity
  - Manifestation: Strong reaction to critique about integration choices; may withdraw from review cycles.
  - Best approach: Private, strengths‑based feedback and safe preview sessions.
    * Micro‑accommodations: Private preview of integration docs; feedback sandwich.
    * Peer scripts: “This is solid — one tweak that could help is X; want to iterate privately?”
    * Trial metrics: Frequency of private previews; early sharing rate.
    * Tools/supports: Private feedback channels; short feedback templates.
    * Privacy phrasing: “I prefer private feedback on early integration drafts.”


Masking Fatigue
  - Manifestation: Exhaustion from maintaining a composed integrator persona; fewer informal check‑ins.
  - Best approach: Low‑visibility contribution channels and scheduled recovery.
    * Micro‑accommodations: Written input channels; recovery half‑days after major launches.
    * Peer scripts: “Drop your notes in this doc and I’ll surface them.” / “Take a recovery half‑day after the rollout — we’ll cover.”
    * Trial metrics: Async contributions; self‑reported recovery.
    * Tools/supports: Shared idea doc; opt‑out mechanism.
    * Privacy phrasing: “I’ll contribute in writing this round while I recharge.”


Social Communication Load
  - Manifestation: Extra effort to translate technical tradeoffs into stakeholder narratives.
  - Best approach: Provide 3‑slide summaries, co‑presenting support, and scheduled stakeholder touchpoints.
    * Micro‑accommodations: Executive summary template; co‑presenter for Q&A.
    * Peer scripts: “I’ll draft a 3‑slide summary and co‑present the Q&A.”
    * Trial metrics: % stakeholders reached; clarity rating.
    * Tools/supports: Slide templates; co‑presenter pairing.
    * Privacy phrasing: “Can I co‑present the Q&A so I can focus on the narrative?”


Need for Written Instructions
  - Manifestation: Prefers concise decision rubrics and documented escalation paths.
  - Best approach: One‑page decision rubrics and a fast‑lane exception process.
    * Micro‑accommodations: One‑page rubric; fast‑lane process.
    * Peer scripts: “Give me three success bullets and I’ll draft the rubric.”
    * Trial metrics: % decisions using rubric; time to decision in fast lane.
    * Tools/supports: Shared templates; decision log.
    * Privacy phrasing: “Can we capture the decision criteria in one short doc?”


Need for Reduced Interruption
  - Manifestation: Interruptions fragment synthesis and increase error risk.
  - Best approach: Define escalation rules and use async updates for non‑urgent items.
    * Micro‑accommodations: Protected synthesis windows; single escalation contact.
    * Peer scripts: “If urgent, text URGENT; otherwise send a 3‑bullet update.”
    * Trial metrics: # escalations during windows; % items resolved async.
    * Tools/supports: Slack status conventions; escalation contact.
    * Privacy phrasing: “I’m in a synthesis block — text URGENT if it can’t wait.”


Need for Structure Without Shame
  - Manifestation: Prefers predictable scaffolding but may hesitate to ask publicly.
  - Best approach: Normalize shared templates and co‑create structure as a team productivity tool.
    * Micro‑accommodations: Shared integration templates; optional structure workshops.
    * Peer scripts: “Can I share a short template that helps me?”
    * Trial metrics: % team using templates; time saved.
    * Tools/supports: Template library; short workshops.
    * Privacy phrasing: “I have a short template that helps me — can I share it?”


Dyslexia Dyscalculia Dysgraphia Dyspraxia
  - Manifestation: Extra time for documentation, numeric modeling, or manual configuration.
  - Best approach: Scribe support, speech‑to‑text, and co‑authoring for runbooks.
    * Micro‑accommodations: Co‑author runbooks; voice notes transcribed.
    * Peer scripts: “I’ll draft the runbook from your notes.”
    * Trial metrics: Time from decision to published runbook; % co‑authored docs.
    * Tools/supports: Speech‑to‑text; templates; calculators.
    * Privacy phrasing: “I prefer to record a voice note for the runbook — can I send that?”


Auditory Processing Sensory Processing Tourette
  - Manifestation: Noisy workshops and long war rooms are draining; prefers structured, captioned sessions.
  - Best approach: Share slides/notes in advance, use captions, and offer quiet breakout options.
    * Micro‑accommodations: Captions; slides in advance; quiet rooms.
    * Peer scripts: “I’ll share slides before the session so you can pick what to comment on.”
    * Trial metrics: Meeting comfort rating; written contributions.
    * Tools/supports: Live captions; shared decks.
    * Privacy phrasing: “I’ll drop my input in the doc and follow up after the session.”


Working Memory Processing Speed
  - Manifestation: Needs pre‑reads and short pauses to synthesize multi‑thread inputs.
  - Best approach: Provide concise pre‑reads 24–48 hours ahead and 5‑minute recap pauses in meetings.
    * Micro‑accommodations: Pre‑read templates; recap prompts.
    * Peer scripts: “I’ll send a 2‑slide summary before the meeting.”
    * Trial metrics: % decisions postponed for reflection; quality of final plans.
    * Tools/supports: Pre‑read templates; meeting recap prompts.
    * Privacy phrasing: “I prefer a short pre‑read and a five‑minute pause after the meeting.”


6 Disability Health and Body Based Factors
Chronic illness / Chronic pain / Fatigue / Fluctuating capacity
  - Manifestation: Variable synthesis stamina; bursts of high insight followed by low capacity.
  - Behavior impact: Front‑loads integration work on good days; needs recovery windows.
  - Distortion: Reliability becomes intermittent without accommodations.
  - Best approach: Private signals for low capacity, flexible timelines, and written handoffs.


7 Trauma Adversity and Nervous System Load
Childhood adversity / Abuse / Workplace trauma / Institutional betrayal
  - Manifestation: High vigilance and need for predictable, non‑surprising processes.
  - Behavior impact: Avoids public risk; over‑prepares for reviews.
  - Distortion: Integrator’s caution becomes avoidance of necessary change.
  - Best approach: Use calm, factual language, private validation, and small, safe experiments.


8 Identity Marginalization and Belonging
Racial/ethnic bias / LGBTQ+ stress / Tokenism / Microaggression fatigue
  - Manifestation: Extra labor to ensure inclusive integrations; reluctance to be token spokesperson.
  - Behavior impact: Over‑checks for fairness; may avoid visible leadership roles.
  - Distortion: Inclusion efforts become over‑cautious and slow.
  - Best approach: Avoid token requests, invite voluntary participation, and validate contributions privately.


9 Work History and Occupational Socialization
Toxic workplace / Micromanagement / Retaliation history / Learned silence
  - Manifestation: Distrust of ambiguous authority; prefers documented agreements.
  - Behavior impact: Over‑documents and avoids informal escalation.
  - Distortion: Integrator’s governance becomes bureaucratic unless trust is rebuilt.
  - Best approach: Offer confidential peer validation and small trust‑building experiments.


10 Social Support and Community Context
Limited support network / Social isolation / Mentorship availability
  - Manifestation: Relies on a few trusted peers for cross‑team coordination.
  - Behavior impact: Strong bilateral relationships; limited broad coalition building.
  - Best approach: Facilitate small cross‑functional pods and mentorship pairings.


11 Life Stage and Transition Factors
New parenthood / Pregnancy/postpartum / Menopause / Mid‑career reinvention / Retirement anxiety / Moving / Divorce / Death / Major health diagnosis
  - Manifestation: Variable capacity and need for predictable, bounded responsibilities.
  - Behavior impact: Either hyper‑compensation or temporary withdrawal.
  - Best approach: Offer written priorities, temporary role adjustments, and respect privacy.


12 Environmental and Sensory Context
Loud environment / Open office / Lighting sensitivity / High meeting density / Notification overload
  - Manifestation: Synthesis quality drops in noisy or chaotic settings.
  - Behavior impact: Prefers quiet, scheduled synthesis blocks and written agendas.
  - Best approach: Quiet hours, written agendas, opt‑out options, and respect for focus windows.


13 Cultural Values and Communication Norms
High‑context vs low‑context / Direct vs indirect communication / Deference to authority
  - Manifestation: Extra effort to translate norms across teams and regions.
  - Behavior impact: Prefers explicit norms and written clarifications.
  - Best approach: Clarify norms in writing, invite cultural context, and use structured feedback channels.


14 Legal Administrative and Bureaucratic Stress
Immigration paperwork / Court proceedings / Benefits / Insurance / Disability accommodations / Background checks
  - Manifestation: Heavy cognitive load; fear of errors in compliance work.
  - Behavior impact: Time spent on admin reduces synthesis bandwidth.
  - Best approach: Share step‑by‑step checklists, private resource referrals, and allow time to manage paperwork.


15 Protective Factors and Resilience Resources
Mentor support / Stable housing / Financial cushion / Psychological safety / Clear expectations / Flexible scheduling / Peer relationships / Healthcare access / Effective accommodations / Recovery time / Purpose / Therapy / Skill mastery / Self‑advocacy
  - Manifestation: With supports, Integrators sustain high‑quality synthesis, scale durable integrations, and mentor others.
  - Behavior impact: Balanced, reliable orchestration and improved cross‑team outcomes.
  - Best approach: Encourage use of supports, suggest peer accountability partners, and co‑design recovery rituals.
`,
  },
  {
    id: "referenced-but-not-detailed-in-the-uploaded-document",
    lens: "REFERENCED BUT NOT DETAILED IN THE UPLOADED DOCUMENT",
    status: "Not exported as standalone detailed lens files",
    source: "Untitled 5.txt",
    content: `REFERENCED BUT NOT DETAILED IN THE UPLOADED DOCUMENT
STATUS: Not exported as standalone detailed lens files
SOURCE: Untitled 5.txt

The uploaded document names the following lenses as completed, already done, or remaining, but it does not include the detailed profile-by-profile mapping content needed to create accurate standalone lens files.

I did not fabricate content for these. They are listed here so the gap is visible.

- Big Five / OCEAN
- HEXACO
- DISC
- MBTI
- Keirsey
- 16PF
- Hogan HPI
- CliftonStrengths (34)
- VIA Character Strengths (24)
- Enneagram (core + wings + subtypes)
- Cognitive Ability / GMA / Wonderlic
- EQ-i 2.0
- MSCEIT
- Social Styles
- Reiss Motivation Profile
- Motivational Maps
- Communication Style
- Management Style
- Growth & Development Style
- Environmental Fit
- Collaboration Style Lens
- Role Fit Lens
- Team Fit / Complementarity Lens
- Lominger Leadership Architect
- Leadership Versatility Index
- Situational Leadership
- Maslach Burnout Inventory (MBI)
- Copenhagen Burnout Inventory (CBI)
- WHO-5 Wellbeing Index
- Perceived Stress Scale (PSS)
- Connor-Davidson Resilience Scale (CD-RISC)
- Workplace Stress Lens
`,
  },
  {
    id: "belbin-team-roles-lens",
    lens: "Belbin Team Roles Lens",
    status: "",
    source: "Belbin_Team_Roles_Lens.txt",
    content: `
Belbin Team Roles Lens
======================

**Overview**

Meredith Belbin’s Team Roles model describes nine roles that successful teams need.  The roles are grouped into three categories: social, thinking and task roles.  Each role has strengths and “allowable weaknesses” that are acceptable trade‑offs for its contributionhttps://www.belbin.com/about/belbin-team-roles#:~:text=%2A%20The%20Social%20Roles%20,Shaper%2C%20Implementer%2C%20Completer%20Finisher.

* **Resource Investigator (Social):** Outgoing, enthusiastic networker who explores opportunities but can lose interest once the initial excitement passeshttps://www.belbin.com/about/belbin-team-roles#:~:text=%2A%20The%20Social%20Roles%20,Shaper%2C%20Implementer%2C%20Completer%20Finisher.
* **Teamworker (Social):** Co‑operative, diplomatic and perceptive; listens to others and helps the team stay cohesive but may avoid confrontationhttps://www.belbin.com/about/belbin-team-roles#:~:text=%2A%20The%20Social%20Roles%20,Shaper%2C%20Implementer%2C%20Completer%20Finisher.
* **Coordinator (Social):** Mature, confident and clarifies goals; delegates well but can be seen as manipulative or offloading workhttps://www.belbin.com/about/belbin-team-roles#:~:text=%2A%20The%20Social%20Roles%20,Shaper%2C%20Implementer%2C%20Completer%20Finisher.
* **Plant (Thinking):** Creative, imaginative problem‑solver; generates ideas but may ignore details or practicalitieshttps://www.belbin.com/about/belbin-team-roles#:~:text=%2A%20The%20Social%20Roles%20,Shaper%2C%20Implementer%2C%20Completer%20Finisher.
* **Monitor Evaluator (Thinking):** Logical, discerning and impartial; judges ideas critically but can lack drive or charismahttps://www.belbin.com/about/belbin-team-roles#:~:text=%2A%20The%20Social%20Roles%20,Shaper%2C%20Implementer%2C%20Completer%20Finisher.
* **Specialist (Thinking):** Brings rare knowledge and skills; highly focused but may contribute only narrowlyhttps://www.belbin.com/about/belbin-team-roles#:~:text=%2A%20The%20Social%20Roles%20,Shaper%2C%20Implementer%2C%20Completer%20Finisher.
* **Shaper (Task):** Challenging, dynamic and thrives on pressure; drives the team forward but may provoke othershttps://www.belbin.com/about/belbin-team-roles#:~:text=%2A%20The%20Social%20Roles%20,Shaper%2C%20Implementer%2C%20Completer%20Finisher.
* **Implementer (Task):** Practical, reliable and efficient organiser; turns ideas into action but may be inflexiblehttps://www.belbin.com/about/belbin-team-roles#:~:text=%2A%20The%20Social%20Roles%20,Shaper%2C%20Implementer%2C%20Completer%20Finisher.
* **Completer Finisher (Task):** Conscientious, detail‑oriented perfectionist; ensures thoroughness but can worry excessivelyhttps://www.belbin.com/about/belbin-team-roles#:~:text=%2A%20The%20Social%20Roles%20,Shaper%2C%20Implementer%2C%20Completer%20Finisher.

Teams benefit from a balance of roles.  Individuals often have two preferred roles and one manageable role.  Identifying primary and secondary roles helps teams assign responsibilities effectively and recognise potential blind spots.

**Belbin Role Crosswalk by PI Profile**

The table below suggests which Belbin roles each PI profile is likely to default to.  The primary column indicates the most natural role; the secondary column captures an alternate role the profile can comfortably adopt.  These assignments are interpretive.

| PI Profile | Primary Belbin role | Secondary role | Allowable weaknesses |
|---|---|---|---|
| **Analyzer** | Monitor Evaluator | Specialist | May over‑analyse and delay decisions; needs clear deadlines. |
| **Controller** | Implementer / Shaper | Coordinator | Can be rigid or overly controlling. |
| **Specialist** | Specialist | Monitor Evaluator | May focus too narrowly; needs help integrating findings. |
| **Strategist** | Plant / Monitor Evaluator | Coordinator | May be abstract and detached; needs grounding in practicalities. |
| **Venturer** | Shaper | Resource Investigator | May over‑drive the team and ignore others’ concerns. |
| **Altruist** | Teamworker | Coordinator | May avoid conflict; needs to assert opinions when necessary. |
| **Captain** | Coordinator / Shaper | Resource Investigator | May delegate too much or domineer. |
| **Collaborator** | Teamworker | Resource Investigator | May struggle with decisiveness; needs direction. |
| **Maverick** | Plant | Shaper | May generate wild ideas and resist structure. |
| **Persuader** | Resource Investigator | Coordinator | May be overly optimistic and neglect details. |
| **Promoter** | Resource Investigator | Shaper | May lose interest quickly and need follow‑through support. |
| **Adapter** | Teamworker | Implementer | May be indecisive or avoid taking the lead. |
| **Craftsman** | Completer Finisher / Implementer | Monitor Evaluator | May be perfectionistic and resistant to change. |
| **Guardian** | Implementer / Completer Finisher | Teamworker | May be conservative and slow to adapt. |
| **Operator** | Implementer | Completer Finisher | May be inflexible; benefits from creative partners. |
| **Individualist** | Plant / Specialist | Monitor Evaluator | May be idiosyncratic and resist coordination. |
| **Scholar** | Specialist / Monitor Evaluator | Teamworker | May over‑focus on analysis and avoid action. |

**Using this lens**

* Build teams with a mix of social, thinking and task roles.  For example, pair an Analyzer (Monitor Evaluator) with a Venturer (Shaper) and an Altruist (Teamworker) to balance analysis, drive and cohesion.
* Recognise that allowable weaknesses come with each role.  A Plant may overlook details; a Completer Finisher may worry too much.  Managing these weaknesses—rather than eliminating them—allows strengths to flourish.
* Encourage individuals to operate in their secondary roles as developmental stretch assignments.  This builds versatility and reduces over‑reliance on one role.`,
  },
  {
    id: "big-five-ocean-lens",
    lens: "Big Five (OCEAN) Lens",
    status: "",
    source: "Big_Five_Lens.txt",
    content: `
Big Five (OCEAN) Lens
======================

**Overview and theoretical background**

The Big Five (also called the OCEAN model) is one of the most widely used and
researched frameworks for describing human personality.  It organizes
personality into five broad dimensions: **Openness to experience**,
**Conscientiousness**, **Extraversion**, **Agreeableness**, and **Neuroticism**
(emotional stability).  Each dimension represents a continuum, and individuals
vary in their relative standing on each trait.  High **Openness** reflects
curiosity, creativity and a preference for variety, while low Openness
indicates a focus on familiarity and practicality.  High **Conscientiousness**
means being organized, disciplined and dependable, whereas low
Conscientiousness is associated with spontaneity and flexibility.  **Extraversion**
describes sociability and energetic engagement with the outer world; low
Extraversion (introversion) reflects a reserved, quiet style.  **Agreeableness**
captures compassion and cooperativeness versus suspicion and
competitiveness.  **Neuroticism** (often presented as Emotional Stability)
measures the tendency toward negative emotional states; high neuroticism is
associated with anxiety and moodiness whereas low neuroticism reflects calm
and resiliencehttps://www.simplypsychology.org/big-five-personality.html#:~:text=The%20Big%20Five%20Personality%20Traits,OCEAN.

The Big Five arose from lexical analyses of trait descriptors and has been
replicated across cultures and languages.  It provides a neutral vocabulary
for describing behavioral tendencies without assigning value judgments.

**Key dimensions**

- **Openness (Imagination vs. Practicality)** – preference for novelty,
  abstract ideas and variety versus adherence to routine and concrete
  informationhttps://www.simplypsychology.org/big-five-personality.html#:~:text=The%20Big%20Five%20Personality%20Traits,OCEAN.
- **Conscientiousness (Organization vs. Flexibility)** – degree of
  self‑discipline, reliability and goal orientationhttps://www.simplypsychology.org/big-five-personality.html#:~:text=The%20Big%20Five%20Personality%20Traits,OCEAN.
- **Extraversion (Sociability vs. Reserve)** – energy drawn from social
  interaction, talkativeness and assertivenesshttps://www.simplypsychology.org/big-five-personality.html#:~:text=The%20Big%20Five%20Personality%20Traits,OCEAN.
- **Agreeableness (Cooperation vs. Competition)** – tendency to be
  compassionate, trusting and cooperative rather than critical or antagonistichttps://www.simplypsychology.org/big-five-personality.html#:~:text=The%20Big%20Five%20Personality%20Traits,OCEAN.
- **Neuroticism / Emotional Stability** – sensitivity to stress, mood
  fluctuations and negative emotionshttps://www.simplypsychology.org/big-five-personality.html#:~:text=The%20Big%20Five%20Personality%20Traits,OCEAN.

**Cross‑framework translation with PI profiles**

The table below maps the 17 Predictive Index (PI) reference profiles to
approximate Big Five patterns.  These translations are **estimates** based
on common behavioral descriptions for each PI profile; they are not formal
diagnostics.  “Dominant traits” capture the profile’s most visible Big Five
tendencies; “Secondary” traits are present but less intense; “Stress
responses” indicate how the profile may react under pressure, and
“Development pointers” suggest areas for growth or balance.

| PI reference profile | Dominant Big Five traits | Secondary traits | Stress responses | Development pointers |
|---|---|---|---|---|
| **Analyzer** | High Conscientiousness; low Extraversion. Disciplined, detail‑focused, prefers structure. | Moderate Openness; moderate Agreeableness. | Under stress, may become overly cautious or perfectionistic; risk of rigidity. | Practice openness to new ideas and relationships; delegate to avoid overwork. |
| **Controller** | High Conscientiousness; moderate Extraversion. Decisive, goal‑oriented, prefers order. | Low Agreeableness; moderate Openness. | Can become impatient or domineering when pressured. | Cultivate empathy and patience; allow others’ input to improve collaboration. |
| **Specialist** | High Conscientiousness; low Extraversion. Accurate, systematic, follows rules. | High Agreeableness; low Openness. | May become risk‑averse and resistant to change. | Encourage exploration and flexible thinking; voice ideas confidently. |
| **Strategist** | High Openness and Conscientiousness. Big‑picture thinker, plans for the long term. | Moderate Extraversion; low Agreeableness. | When stressed, may overanalyze or become critical. | Balance analysis with action; build rapport to leverage team support. |
| **Venturer** | High Openness and Extraversion. Self‑starting risk taker, imaginative. | Low Agreeableness; low Conscientiousness. | Under pressure, may act impulsively or overlook details. | Develop routines for follow‑through; consider others’ perspectives. |
| **Individualist** | High Openness; moderate Conscientiousness. Independent and persistent. | Low Agreeableness; low Extraversion. | May appear aloof or stubborn under stress. | Practice collaboration and sharing ideas; accept feedback. |
| **Scholar** | High Openness and Conscientiousness. Accurate, imaginative, reserved. | Low Extraversion; high Agreeableness. | Can retreat and overanalyze when stressed. | Seek balance between reflection and action; engage socially. |
| **Altruist** | High Agreeableness; high Extraversion. Congenial and cooperative. | Moderate Conscientiousness; moderate Openness. | May neglect own needs, becoming overwhelmed. | Set boundaries and prioritize tasks; embrace constructive conflict. |
| **Captain** | High Extraversion and Openness. Confident change agent and problem solver. | Moderate Conscientiousness; low Agreeableness. | May become overbearing or impatient. | Listen actively and share credit; balance boldness with humility. |
| **Collaborator** | High Agreeableness; high Extraversion. Friendly, patient team player. | Moderate Openness; low Conscientiousness. | Can avoid difficult tasks or decisions. | Build assertiveness; maintain focus and follow‑through. |
| **Maverick** | High Openness; high Extraversion. Innovative and undaunted by failure. | Low Conscientiousness; low Agreeableness. | May disregard rules or disrupt processes. | Adopt structure and accountability; temper boldness with realism. |
| **Persuader** | High Extraversion; high Openness. Poised risk‑taker and team builder. | Moderate Conscientiousness; low Agreeableness. | Can overlook details and become overly optimistic. | Develop persistence on tasks; consider others’ concerns. |
| **Promoter** | High Extraversion; high Agreeableness. Informal, persuasive networker. | Low Conscientiousness; high Openness. | May lack follow‑through and become scattered. | Create systems for execution; set clear priorities and deadlines. |
| **Adapter** | Balanced across traits. Bridge‑builder who flexes to the situation. | Moderate Agreeableness and Openness. | Under stress, may feel torn between extremes. | Clarify personal boundaries and preferences; avoid over‑accommodating. |
| **Artisan** | High Conscientiousness; high Openness. Precise, analytical, artistic. | Low Extraversion; moderate Agreeableness. | Might become perfectionistic or isolated under pressure. | Share progress early; invite feedback; trust collaboration. |
| **Guardian** | High Conscientiousness; high Agreeableness. Detail‑oriented, supportive. | Low Openness; low Extraversion. | Can resist change and become withdrawn. | Embrace innovation gradually; communicate needs; expand networks. |
| **Operator** | Moderate Conscientiousness; high Agreeableness. Patient, relaxed, steady. | Moderate Extraversion; low Openness. | May avoid taking initiative or shy from conflict. | Build confidence through skill development; voice ideas; take calculated risks. |

**Practical implications**

The Big Five lens helps managers and colleagues understand how a PI profile
might show up across the five fundamental personality dimensions.  For
instance, someone with a high Conscientiousness profile (Analyzer,
Specialist, Guardian) will likely appreciate clear expectations and time to
deliver quality work, whereas someone high in Openness and Extraversion
(Venturer, Maverick, Captain) will thrive in environments that allow
experimentation and social engagement.  Knowing where a team member falls
along these dimensions can guide communication, collaboration and development
strategies—for example, offering step‑by‑step plans to those low in
Conscientiousness or creating brainstorming sessions to engage those high in
Openness.  It also highlights potential stress triggers: high
Neuroticism–like tendencies may need reassurance and emotional support, while
low Agreeableness profiles may benefit from training in empathy and
collaborative problem solving.
`,
  },
  {
    id: "connordavidson-resilience-scale-cdrisc-lens",
    lens: "Connor\u2011Davidson Resilience Scale (CD\u2011RISC) Lens",
    status: "",
    source: "CD_RISC_Lens.txt",
    content: `
Connor‑Davidson Resilience Scale (CD‑RISC) Lens
==============================================

**Overview**

The Connor‑Davidson Resilience Scale (CD‑RISC) is a widely used measure of resilience, assessing a person’s ability to “bounce back” after stressful events, tragedy or trauma.  Resilience encompasses the ability to adapt to change, deal with what comes along, cope with stress, stay focused, not get discouraged by failure and handle unpleasant feelingshttps://positivepsychology.com/connor-davidson-brief-resilience-scale/#:~:text=The%20Connor,stressful%20events%2C%20tragedy%2C%20or%20trauma.  The CD‑RISC has three authorised versions:

* **CD‑RISC‑25:** The original 25‑item scale, with each item rated from 0 (not true at all) to 4 (true nearly all the time).  Total scores range from 0–100.
* **CD‑RISC‑10:** A 10‑item version selected from the original.  Respondents rate their ability to adapt, deal with whatever comes, find humour in adversity and stay focusedhttps://positivepsychology.com/connor-davidson-brief-resilience-scale/#:~:text=The%20Connor,stressful%20events%2C%20tragedy%2C%20or%20trauma.
* **CD‑RISC‑2:** A very brief two‑item scale measuring adaptability and “bouncing back” after illness or hardshiphttps://positivepsychology.com/connor-davidson-brief-resilience-scale/#:~:text=What%20Versions%20are%20There%3F%20,10%20%26%2025%20Item.

Higher scores reflect greater resilience.  The scale is used in clinical, organisational and research settings to assess resilience and evaluate interventions.

**Resilience Tendencies Crosswalk by PI Profile**

The table below summarises likely resilience strengths and growth areas for each PI profile.  Use this to anticipate how different profiles might respond to adversity and what support they may need to build resilience.

| PI Profile | Resilience strengths | Development areas | Strategies |
|---|---|---|---|
| **Analyzer** | Persistence, problem‑solving, ability to learn from setbacks | Flexibility when plans change, emotional adaptation | Practise cognitive reframing, embrace experimentation and build emotional agility. |
| **Controller** | Decisiveness, taking charge in crises | Delegating under pressure, coping when control is lost | Develop trust in others, practise mindfulness and accept uncertainty. |
| **Specialist** | Depth of knowledge, steady perseverance | Adapting to new domains and unpredictable changes | Expand comfort zone through small experiments and seek support networks. |
| **Strategist** | Big‑picture perspective, systems thinking | Letting go of long‑term plans when circumstances shift | Practise short‑term flexibility, iterate strategies and stay grounded in purpose. |
| **Venturer** | Risk tolerance, willingness to start anew | Patience and sustained focus after setbacks | Build routines for recovery, reflect on lessons and celebrate incremental wins. |
| **Altruist** | Empathy and social support networks | Personal boundaries and self‑care | Practise saying no, seek reciprocal support and schedule restorative activities. |
| **Captain** | Confidence and leadership in adversity | Acceptance of vulnerability and need for help | Share struggles, build peer support and practise self‑compassion. |
| **Collaborator** | Relationship‑building and mutual support | Standing firm in the face of conflict | Develop assertiveness, set clear goals and practise resilience in disagreement. |
| **Maverick** | Creativity and pivoting under pressure | Finishing and following through post‑setback | Pair with detail‑oriented partners, set milestones and practise perseverance. |
| **Persuader** | Optimism and social influence | Coping with rejection and scepticism | Build resilience to criticism, cultivate patience and seek feedback. |
| **Promoter** | Enthusiasm and ability to restart momentum | Managing disappointment and sustaining effort | Establish realistic expectations, track progress and practise delayed gratification. |
| **Adapter** | Flexibility and willingness to support change | Assertiveness and proactive problem‑solving | Practise taking initiative, develop personal goals and build self‑confidence. |
| **Craftsman** | Patience and persistence | Embracing imperfection and rapid iteration | Experiment with iterative approaches, seek feedback and celebrate progress. |
| **Guardian** | Reliability and loyalty | Adapting to change and uncertainty | Practise incremental change, develop contingency plans and engage in resilience training. |
| **Operator** | Discipline and endurance | Creative problem‑solving and adaptability | Foster innovation skills, reflect on outcomes and experiment with new approaches. |
| **Individualist** | Independence and self‑reliance | Collaboration and support seeking | Build networks, practise vulnerability and leverage others’ perspectives. |
| **Scholar** | Reflection and learning | Action orientation and maintaining momentum | Set practical goals, take calculated risks and engage in peer accountability. |

**Using this lens**

* Use the CD‑RISC to assess baseline resilience and monitor changes after development programs.  Encourage individuals to reflect on items where they score lower and design targeted exercises (e.g., practicing adaptability or humour in adversity).
* Resilience is multifaceted and can be developed through practices such as mindfulness, cognitive reframing, supportive relationships and purposeful work.  Use cross‑profile strategies to tailor interventions.
* Recognise that resilience is not just individual grit but also depends on supportive contexts.  Leaders should create environments where mistakes are learning opportunities and recovery is valued.`,
  },
  {
    id: "cliftonstrengths-strengthsfinder-lens",
    lens: "CliftonStrengths (StrengthsFinder) Lens",
    status: "",
    source: "CliftonStrengths_Lens.txt",
    content: `
CliftonStrengths (StrengthsFinder) Lens
======================================

**Overview and theoretical background**

The **CliftonStrengths** assessment (formerly called StrengthsFinder) was
developed by Don Clifton and Gallup to identify an individual’s top
talent themes and encourage a strengths‑based approach to development.
Participants respond to 177 paired statements; the tool then reveals a
ranked list of 34 talent themes grouped into four domains: **Strategic
Thinking**, **Relationship Building**, **Influencing**, and **Executing**https://www.uschamber.com/co/grow/thrive/cliftonstrengths-assessment#:~:text=What%20is%20the%20CliftonStrengths%20assessment%3F.  The
assessment aims to help people focus on and apply what they naturally do
best, rather than fixating on weaknesses.  Gallup research notes that
CliftonStrengths is used by many Fortune 500 companies and correlates
with higher engagement and performance when strengths are leveraged at workhttps://www.uschamber.com/co/grow/thrive/cliftonstrengths-assessment#:~:text=What%20is%20the%20CliftonStrengths%20assessment%3F.

**Domains and representative themes**

1. **Strategic Thinking** – Analytical, Futuristic, Ideation, Learner,
   Intellection; these themes help absorb and process information and
   create innovative plans.
2. **Relationship Building** – Empathy, Harmony, Adaptability,
   Developer, Positivity, Connectedness; themes that build strong
   relationships and team cohesion.
3. **Influencing** – Command, Communication, Woo (Winning Others Over),
   Activator, Maximizer; themes that help sell ideas, take charge and
   inspire others.
4. **Executing** – Achiever, Discipline, Focus, Responsibility,
   Consistency, Arranger, Restorative; themes that help make things
   happen efficiently.

**Cross‑framework translation with PI profiles**

The table below suggests likely CliftonStrengths themes for each PI
profile.  “Core themes” are plausible top strengths based on the
profile’s typical behaviors; “Domain” indicates the primary domain;
“Development angle” highlights how to apply strengths productively.

| PI profile | Core themes (examples) | Domain(s) | Development angle |
|---|---|---|---|
| **Analyzer** | Analytical, Discipline, Learner | Strategic Thinking, Executing | Use analytical skills to solve complex problems; combine with Arranger or Communication partners to share insights widely. |
| **Controller** | Command, Achiever, Focus | Influencing, Executing | Drive results decisively; remember to engage Relationship builders and listen to diverse perspectives. |
| **Specialist** | Responsibility, Deliberative, Analytical | Executing, Strategic Thinking | Provide quality and reliability; schedule time to explore new ideas and collaborate beyond expertise. |
| **Strategist** | Strategic, Futuristic, Learner | Strategic Thinking | Craft long‑term plans; integrate Relationship‑building themes like Empathy to gain buy‑in. |
| **Venturer** | Activator, Command, Futuristic | Influencing, Strategic Thinking | Start initiatives and inspire others; pair with Executing partners for follow‑through; temper impatience. |
| **Individualist** | Intellection, Ideation, Input | Strategic Thinking | Generate novel concepts; work with Influencers to communicate and execute ideas; practice summarizing insights for varied audiences. |
| **Scholar** | Learner, Intellection, Discipline | Strategic Thinking, Executing | Immerse in knowledge and bring structure; partner with Influencing themes to share expertise; avoid analysis paralysis. |
| **Altruist** | Empathy, Developer, Consistency | Relationship Building, Executing | Nurture colleagues and maintain fairness; set boundaries to prevent burnout; use Achiever partners to drive tasks. |
| **Captain** | Command, Communication, Maximizer | Influencing | Motivate teams toward excellence; incorporate Executing themes like Focus to sustain progress; cultivate humility. |
| **Collaborator** | Harmony, Adaptability, Positivity | Relationship Building | Foster a supportive environment; develop discipline to maintain momentum; assert opinions when necessary. |
| **Maverick** | Ideation, Futuristic, Command | Strategic Thinking, Influencing | Innovate and influence change; collaborate with Executers to realize visions; attend to interpersonal impact. |
| **Persuader** | Woo, Communication, Positivity | Influencing, Relationship Building | Energize and persuade diverse audiences; combine with Executing themes like Discipline to deliver on promises. |
| **Promoter** | Woo, Communication, Maximizer | Influencing | Connect people and ideas; use Focus or Arranger to organize follow‑up; ensure depth accompanies breadth. |
| **Adapter** | Harmony, Adaptability, Learner | Relationship Building, Strategic Thinking | Bridge different viewpoints; cultivate Ambition and Command to champion initiatives; avoid over‑accommodating. |
| **Artisan** | Analytical, Arranger, Restorative | Strategic Thinking, Executing | Design precise solutions; pair with Woo or Communication to showcase work; accept iterative progress. |
| **Guardian** | Consistency, Responsibility, Harmony | Executing, Relationship Building | Maintain reliable systems and supportive culture; integrate Strategic Thinking themes like Learner to embrace change. |
| **Operator** | Consistency, Empathy, Restorative | Executing, Relationship Building | Provide patient, steady support; build confidence to take on leadership tasks; pursue development opportunities. |

**Practical implications**

Applying the CliftonStrengths lens encourages a focus on what individuals
do naturally well.  For example, pairing a Controller’s Command and
Achiever themes with a Scholar’s Learner and Discipline ensures both
vision and execution.  Recognizing that a Collaborator may excel at
Harmony and Adaptability but need support from Focus helps allocate
responsibilities wisely.  Teams can intentionally combine complementary
themes across domains—Strategic thinkers generate ideas, Influencers gain
commitment, Relationship builders sustain cohesion and Executors deliver
results.  This lens reinforces a strengths‑based culture that builds
confidence and engagement.
`,
  },
  {
    id: "general-mental-ability-cognitive-ability-lens",
    lens: "General Mental Ability (Cognitive Ability) Lens",
    status: "",
    source: "Cognitive_Ability_Lens.txt",
    content: `
General Mental Ability (Cognitive Ability) Lens
==============================================

**Overview and theoretical background**

General mental ability (GMA), often referred to as cognitive ability, is
the single best predictor of job performance across occupations.  It
reflects a person’s capacity to learn, adapt, solve problems and think
abstractly.  Cognitive ability tests, such as the **Wonderlic Personnel
Test**, assess reasoning, comprehension and problem‑solving skills.  The
Wonderlic is a 12‑minute, 50‑question multiple‑choice test used by
employers (including NFL teams) to evaluate learning ability and
problem‑solving aptitude; a score of around 20 is considered averagehttps://wonderlic.com/select-hiring-assessment/cognitive/#:~:text=Cognitive%20ability%20tests%20reveal%20if,can%20actually%20do%20the%20jobhttps://en.wikipedia.org/wiki/Wonderlic_test#:~:text=Wonderlic%20Personnel%20Test%20%28WPT,agencies%20of%20the%20%2058.  High
GMA scores indicate that individuals can quickly grasp new concepts,
understand complex instructions and adapt to changing demandshttps://wonderlic.com/select-hiring-assessment/cognitive/#:~:text=Cognitive%20ability%20tests%20reveal%20if,can%20actually%20do%20the%20job.

Unlike personality frameworks, cognitive ability measures potential rather
than style.  When used ethically and in combination with behavioral
assessments, it helps predict success in roles requiring rapid learning
and analytical thinking.

**Cross‑framework translation with PI profiles**

The Predictive Index Cognitive Assessment is separate from the PI
Behavioral Assessment, but we can approximate cognitive tendencies based
on profile descriptors.  The table below provides broad estimates of
cognitive strengths and developmental needs.  “Learning style” refers to
how individuals prefer to absorb information; “Cognitive pace” indicates
how quickly they process complex tasks; “Development guidance” offers
tips for thriving in cognitively demanding roles.

| PI profile | Learning style & cognitive strengths | Cognitive pace | Development guidance |
|---|---|---|---|
| **Analyzer** | Analytical and methodical learner who excels at problem solving; comfortable with abstract concepts. | High | Challenge with ambiguous puzzles and strategic projects; encourage adaptability and quick iterations. |
| **Controller** | Practical learner who grasps systems quickly and focuses on actionable decisions. | High | Balance speed with thoroughness; verify assumptions; remain open to novel approaches. |
| **Specialist** | Detail‑oriented learner who prefers clear instructions and step‑by‑step processes. | Moderate | Provide structured training and time to master new concepts; gradually introduce complexity. |
| **Strategist** | Conceptual learner who enjoys pattern recognition and long‑range thinking. | High | Offer opportunities to experiment with models; avoid overloading with routine details; encourage summarizing ideas. |
| **Venturer** | Intuitive learner who connects disparate information and learns by doing. | High | Encourage focus and persistence on complex tasks; pair with structured colleagues for detailed follow‑through. |
| **Individualist** | Independent learner who self‑directs study and explores topics deeply. | High | Promote sharing knowledge; collaborate on challenging problems; practice time management to meet deadlines. |
| **Scholar** | Reflective learner who loves research and absorbing knowledge. | High | Provide access to resources and challenging assignments; encourage decisiveness and application. |
| **Altruist** | Social learner who benefits from collaborative learning and experiential practice. | Moderate | Use mentoring and peer discussions; supplement with visual and practical examples; build confidence in complex problem solving. |
| **Captain** | Quick learner who grasps concepts through discussion and application. | High | Provide leadership challenges and problem‑solving exercises; temper impatience with thorough analysis. |
| **Collaborator** | Interactive learner who processes information through dialogue and support. | Moderate | Use group learning, real‑life examples and incremental complexity; encourage independent analysis. |
| **Maverick** | Holistic learner who intuitively connects ideas but may overlook detail. | High | Pair with analytical teammates; develop disciplined study habits; practice detailed problem breakdown. |
| **Persuader** | Conversational learner who picks up information through stories and persuasion. | Moderate | Use case studies, debates and interactive simulations; reinforce with structured reviews. |
| **Promoter** | Experiential learner who absorbs through doing and sharing. | Moderate | Incorporate hands‑on exercises; use reminders and checklists to retain complex information; encourage reflective learning. |
| **Adapter** | Versatile learner comfortable with both self‑study and group learning. | Moderate | Provide variety in training methods; challenge to adopt deeper analytical skills; support with feedback. |
| **Artisan** | Kinesthetic and conceptual learner who enjoys tinkering and understanding “why.” | High | Offer projects requiring creativity and logic; provide time to experiment; encourage knowledge sharing. |
| **Guardian** | Careful learner who prefers thorough preparation and clear expectations. | Moderate | Deliver structured training; allow repetition; gradually introduce innovation to build confidence. |
| **Operator** | Steady learner who learns best through observation and repetition. | Moderate | Use clear demonstrations; reinforce with practice; encourage problem‑solving exercises. |

**Practical implications**

This lens helps match individuals to roles aligned with their cognitive
capacity and learning preferences.  High‑GMA profiles (Analyzers,
Strategists, Venturers) may thrive in complex, analytical roles but can
be impatient with routine tasks; support them with variety and autonomy.
Moderate‑GMA profiles (Specialists, Collaborators, Guardians) excel in
roles requiring consistency and attention to detail; provide clear
training and avoid sudden, unstructured changes.  Integrating
cognitive ability insights with PI behavioral data enables more
holistic talent decisions and targeted development plans.
`,
  },
  {
    id: "cognitive-load--working-style-lens",
    lens: "Cognitive Load & Working Style Lens",
    status: "",
    source: "Cognitive_Load_Working_Style_Lens.txt",
    content: `
Cognitive Load & Working Style Lens

**Overview**

Cognitive load refers to the mental effort required to perform tasks.  Combined with an individual’s working style, it influences productivity, stress and error rates.  This lens summarises typical working styles (e.g., deep focus vs. bursts), load tolerance (how much cognitive load they can sustain) and stress responses when load becomes excessive.

**Crosswalk by PI Profile**

| PI Profile | Working style | Load tolerance | Stress response |
|---|---|---|---|
| **Analyzer** | Deep, single‑task focus | High for focused tasks | Overloaded by multitasking |
| **Controller** | Structured, scheduled blocks | High with clear rules | Overwhelmed by ambiguity |
| **Specialist** | Intensive domain focus | Very high in niche tasks | Cognitive bottleneck outside domain |
| **Strategist** | Parallel scenario juggling | Moderate‑High | Fatigues on execution detail |
| **Venturer** | Rapid bursts and short cycles | Low for sustained load | Burns out on long tasks |
| **Altruist** | Socially distributed work | Moderate | Drains when isolated |
| **Captain** | High‑intensity bursts | Moderate‑High | Frustrated by slow pace |
| **Collaborator** | Shared workload, iterative | Moderate | Overloaded by conflict |
| **Maverick** | Idea‑heavy, low follow‑through | Low for routine load | Distracted by detail work |
| **Persuader** | Social multitasking | Moderate | Cognitive noise reduces clarity |
| **Promoter** | High energy, short focus | Low | Rapid fatigue on deep work |
| **Adapter** | Flexible, context‑sensitive | Moderate | Overloaded by competing demands |
| **Craftsman** | Stepwise, quality‑driven | High for repetitive precision | Slows when interrupted |
| **Guardian** | Predictable, low variance | High for routine | Stress when novelty increases |
| **Operator** | Process‑oriented throughput | High for steady tasks | Disrupted by chaos |
| **Individualist** | Deep conceptual focus | Moderate | Loses momentum under micromanagement |
| **Scholar** | Intensive analytic processing | Very high for research | Paralysis when forced to act fast |

**Guidance for workload management**

* Assign high load tasks requiring deep focus to profiles like Analyzer, Specialist and Scholar, ensuring they have protected time and minimal interruptions.  Avoid overloading them with parallel tasks.
* Use short, varied projects to energise Venturers, Mavericks and Promoters; they struggle with long, routine tasks.
* Provide clear schedules and rules for Controllers and Guardians to maintain high load tolerance; ambiguity and rapid change trigger overload.
* Recognise that social work energises Altruists and Collaborators but drains them when they work in isolation.  Encourage collaborative sessions and check‑ins.
`,
  },
  {
    id: "cognitive-processing-style-lens",
    lens: "Cognitive Processing Style Lens",
    status: "",
    source: "Cognitive_Processing_Style.txt",
    content: `
Cognitive Processing Style Lens

**Overview**

This lens describes how a person naturally processes information—distinct from intelligence or personality.  Six processing styles are commonly recognised in organisational psychology and cognitive ergonomics:

1. **Analytical** – linear, structured, rule‑based and detail‑driven thinking.
2. **Intuitive** – pattern‑spotting, associative and fast‑thinking.
3. **Conceptual** – abstract, systems‑level and integrative thinking.
4. **Experiential** – hands‑on, trial‑and‑error and sensory‑driven cognition.
5. **Social‑Cognitive** – people‑reading, relational inference and emotional patterning.
6. **Adaptive / Contextual** – flexible switching and situational reasoning.

Most individuals exhibit a dominant style and a secondary style that influence their approach to problem solving.  Under stress, people may exaggerate their dominant style or revert to maladaptive patterns.

**Crosswalk by PI Profile**

| PI Profile | Dominant style | Secondary style | Stress‑mode expression | Rationale |
|---|---|---|---|---|
| **Analyzer** | Analytical | Conceptual | Hyper‑analysis and over‑checking | Precision and structure with low social drive |
| **Controller** | Analytical | Adaptive (rule‑based switching) | Rigid rule enforcement | Focus on order and compliance |
| **Specialist** | Analytical | Experiential (technical depth) | Narrow focus and withdrawal | Deep technical reasoning |
| **Strategist** | Conceptual | Analytical | Over‑theorising and dismissing detail | Systems thinking combined with logic |
| **Venturer** | Intuitive | Conceptual | Impulsive heuristics | Fast pattern spotting with risk appetite |
| **Altruist** | Social‑Cognitive | Adaptive | Over‑accommodation | People‑first reasoning |
| **Captain** | Intuitive | Analytical | Decisive oversimplification | Fast action balanced by outcome logic |
| **Collaborator** | Social‑Cognitive | Adaptive | Avoidance and deferring | Relational integration and harmony |
| **Maverick** | Conceptual | Intuitive | Chaotic ideation | Creative and disruptive cognition |
| **Persuader** | Social‑Cognitive | Intuitive | Emotion‑driven reasoning | Influence and audience reading |
| **Promoter** | Intuitive | Social‑Cognitive | Impulsive, reactive decisions | Fast, expressive, improvisational thinking |
| **Adapter** | Adaptive | Social‑Cognitive | Quiet withdrawal | Flexible situational reasoning |
| **Craftsman** | Experiential | Analytical | Perfectionistic detail | Hands‑on, quality‑driven cognition |
| **Guardian** | Analytical | Experiential | Over‑caution | Stability and rule‑based reasoning |
| **Operator** | Experiential | Analytical | Rigid routine | Process and execution focus |
| **Individualist** | Conceptual | Intuitive | Detached ideation | Creative and independent reasoning |
| **Scholar** | Analytical | Conceptual | Over‑analysis | Rigorous, structured cognition |

**Practical tips**

* Engage analytical processors with structured data, clear rules and step‑by‑step logic; allow time for deep analysis before asking for decisions.
* Intuitive thinkers benefit from rapid brainstorming and freedom to explore; they excel in environments where fast pattern recognition is valued.
* Conceptual processors thrive on big‑picture questions and integrative challenges; involve them in strategy, architecture and scenario planning.
* Experiential learners need hands‑on involvement and tangible prototypes; avoid abstract theorising without practical application.
* Social‑cognitive processors read interpersonal cues and anticipate responses; use collaborative workshops and give them access to stakeholders.
* Adaptive processors excel at switching contexts; provide varied tasks and encourage them to help bridge across functional boundaries.
`,
  },
  {
    id: "cognitive-reflection-test-crt-lens",
    lens: "Cognitive Reflection Test (CRT) Lens",
    status: "",
    source: "Cognitive_Reflection_Test.txt",
    content: `
Cognitive Reflection Test (CRT) Lens

**Overview**

The Cognitive Reflection Test measures a person’s ability to override an intuitive but incorrect answer and engage in reflective, analytical reasoning.  It predicts susceptibility to common cognitive biases and provides insight into decision quality under uncertainty.  The following dimensions are used in this lens:

1. **CRT Score Likelihood** – how likely the individual is to score high on the CRT (reflective vs impulsive).
2. **Impulsivity vs Reflection** – balance between fast, intuitive thinking and slow, deliberative reasoning.
3. **Heuristic Reliance** – tendency to rely on mental shortcuts or heuristics when making decisions.
4. **Bias Susceptibility** – propensity to fall prey to biases such as anchoring, availability, confirmation, affect heuristic and framing effects.
5. **Reflection‑Override Capability** – ability to override initial intuitive responses and engage analytical thinking.

The table below summarises each PI profile’s CRT signature along with stress‑mode decision distortions and a rationale.

**Crosswalk by PI Profile**

| PI Profile | CRT score | Impulsivity | Heuristic reliance | Bias susceptibility | Reflection‑override capability | Stress‑mode distortion | Rationale |
|---|---|---|---|---|---|---|---|
| **Analyzer** | High | Very Low | Low | Low | Very High | Over‑analysis | Slow, methodical and data‑driven |
| **Controller** | Moderate‑High | Low | Low | Low‑Moderate | High | Rule rigidity | Rule‑based reasoning |
| **Specialist** | High | Low | Low | Low | Very High | Narrow focus | Deep technical reasoning |
| **Strategist** | High | Low‑Moderate | Moderate | Moderate | High | Over‑confidence in models | Conceptual + analytical |
| **Venturer** | Low | Very High | Very High | High | Low | Impulsive risk | Fast, intuitive and action‑driven |
| **Altruist** | Moderate | Low‑Moderate | Moderate | High (affect heuristic) | Moderate | Emotional reasoning | People‑first cognition |
| **Captain** | Moderate | High | High | High (dominance bias) | Low‑Moderate | Over‑assertive shortcuts | Fast, decisive |
| **Collaborator** | Moderate | Low | Moderate | High (social desirability bias) | Moderate | Avoidance | Relational reasoning |
| **Maverick** | Low | High | Very High | Very High | Low | Chaotic decisions | Creative, non‑linear and impulsive |
| **Persuader** | Low‑Moderate | High | High | High (affect + framing) | Low | Emotional reasoning | Social‑intuitive cognition |
| **Promoter** | Low | Very High | Very High | Very High | Very Low | Impulsive shifts | Improvisational, reactive |
| **Adapter** | Moderate | Low‑Moderate | Moderate | Moderate | Moderate | Over‑adjustment | Flexible and situational |
| **Craftsman** | High | Low | Low | Low | High | Perfectionistic delay | Methodical and detail‑driven |
| **Guardian** | Moderate‑High | Low | Low‑Moderate | Moderate (risk aversion) | High | Over‑caution | Stability and rule orientation |
| **Operator** | Moderate | Low‑Moderate | Moderate | Moderate | Moderate | Rigid routine | Practical and steady |
| **Individualist** | Moderate | Moderate | Moderate | Moderate (identity bias) | Moderate | Detached reasoning | Independent and conceptual |
| **Scholar** | Very High | Very Low | Very Low | Very Low | Very High | Over‑analysis | Deep, rigorous reasoning |

**Interpretation & applications**

* High CRT scores (e.g., Analyzer, Scholar) indicate strong reflective reasoning and low bias susceptibility.  These individuals are well suited to roles requiring deep analysis and risk assessment but may need support to avoid analysis paralysis.
* Low CRT profiles (e.g., Venturer, Promoter, Maverick) rely on intuitive judgments and are more susceptible to biases.  Provide structured frameworks and involve them in risk‑filtered decision processes.  Partner them with analytical colleagues to balance speed and accuracy.
* Stress may exacerbate bias: Under pressure, Controllers become rule rigid, Persuaders respond emotionally and Venturers increase risk‑taking.  Anticipate these tendencies when assigning high‑stakes decisions.
`,
  },
  {
    id: "controller--neurodivergence--cognitive-accessibility",
    lens: "Controller \u2014 Neurodivergence & Cognitive Accessibility",
    status: "",
    source: "Controller_Neurodivergence.txt",
    content: `
Controller — Neurodivergence & Cognitive Accessibility
=========================================================

**ADHD**
- **Manifestation:** A constant drive to act and fix problems leads to quick pivots and difficulty sustaining multi‑step follow‑through.
- **Behaviour impact:** The Controller initiates many fixes, shifts priorities abruptly, and pressures teams for immediate results.
- **Distortion of typical pattern:** Decisive leadership becomes impulsive directives and brittle micromanagement.
- **Real‑life snapshot:** Announces a new initiative mid‑meeting and expects same‑day deliverables.
- **Work/bandwidth impact:** Fragmented priorities leave teams chasing shifting goals.
- **Risk if ignored:** Credibility loss and repeated failed launches.
- **Best way to approach:** Validate the Controller’s energy, but convert impulses into time‑boxed experiments with explicit stop rules.

*Micro‑accommodations:* Limit active initiatives to 2 – 3 and frame new ideas as 2– 4‑week pilots with clear success/failure criteria. Maintain a visible kanban board with work‑in‑progress (WIP) limits.

*Peer scripts:* 
- “Love this idea — can we cap it to a two‑week pilot and agree exit criteria?”  
- “Let’s pick one small experiment and I’ll help scope it.”

*Trial metrics:* Number of active pilots ≤ 2; pilot completion rate per quarter.

*Tools/supports:* Kanban board with WIP limits, timers, short daily check‑ins.

*Privacy phrasing:* “I’m running a short, low‑visibility pilot and will share results after the test.”

---

**Executive Function Differences**
- **Manifestation:** Difficulty sequencing delegation and multi‑phase rollouts.
- **Behaviour impact:** The Controller hoards decisions and becomes a bottleneck for handoffs.
- **Distortion:** Delegation turns into decision hoarding.
- **Snapshot:** Keeps final approvals, creating a single‑point failure.
- **Work/bandwidth impact:** Slower throughput; missed scaling opportunities.
- **Risk if ignored:** Burnout and missed deadlines.
- **Best way to approach:** Co‑create simple phase checklists and visible handoff notes so tasks move without constant approval.

*Micro‑accommodations:* Provide a one‑page phase template and require a short handoff note for each initiative.

*Peer scripts:* 
- “Can I draft the handoff checklist with you?”  
- “Let’s name owners for each phase so nothing slips.”

*Trial metrics:* Percentage of launches with a completed handoff note; number of post‑launch incidents.

*Tools/supports:* Lightweight RACI charts, shared milestone calendar.

*Privacy phrasing:* “I prefer a short handoff note before launch — can we do that?”

---

**Time Blindness**
- **Manifestation:** Optimistic timelines and underestimation of alignment work.
- **Behaviour impact:** Sets compressed deadlines and pressures colleagues to deliver quickly.
- **Distortion:** Timeline setting becomes erratic and stressful.
- **Snapshot:** Announces a next‑week rollout that requires cross‑team work not yet scoped.
- **Work/bandwidth impact:** Rushed quality and missed dependencies.
- **Risk if ignored:** Burned‑out collaborators and failed commitments.
- **Best way to approach:** Use historical benchmarks and default time buffers; require cross‑team resource checks before committing dates.

*Micro‑accommodations:* Apply default +30 % buffer to estimates; pre‑commitment resource check.

*Peer scripts:* 
- “Can we add a two‑week buffer so ops can staff it?”  
- “If we treat this as a three‑week pilot instead of three days, we’ll get cleaner results.”

*Trial metrics:* Percentage of commitments met on first deadline; average buffer added to estimates.

*Tools/supports:* Timeline dashboard, estimation checklist.

*Privacy phrasing:* “I’m trying a more conservative timeline this time to ensure delivery.”

---

**Task Initiation Difficulty**
- **Manifestation:** Hesitation to start ambiguous initiatives; waits for perfect conditions before acting.
- **Behaviour impact:** Delays strategic moves and misses windows of opportunity.
- **Distortion:** Caution turns into paralysis.
- **Snapshot:** Waits for perfect data before running a small test.
- **Work/bandwidth impact:** Missed opportunities.
- **Risk if ignored:** Competitive disadvantage.
- **Best way to approach:** Provide a single, tiny first action and offer to co‑start tasks.

*Micro‑accommodations:* Attach a “first 15‑minute task” note to each new idea; schedule pairing sessions for kickoff.

*Peer scripts:* 
- “Let’s do the first 30 minutes together — I’ll set the timer.”  
- “What’s one tiny test we can run in a day?”

*Trial metrics:* Time from idea to first action; number of ideas that reach pilot.

*Tools/supports:* 15‑minute kickoff slots, checklists with first actions.

*Privacy phrasing:* “I work best if someone helps me start the first 30 minutes — can you pair with me?”

---

**Context‑Switching Difficulty**
- **Manifestation:** High cost to move between strategic planning and operations; interruptions degrade performance.
- **Behaviour impact:** Protects long planning blocks and declines ad‑hoc collaboration.
- **Distortion:** Responsiveness is reduced; can appear uncooperative.
- **Snapshot:** Skips quick syncs to protect planning time.
- **Work/bandwidth impact:** Coordination gaps and missed signals.
- **Risk if ignored:** Misalignment and lost opportunities.
- **Best way to approach:** Use short asynchronous updates and scheduled, focused syncs.

*Micro‑accommodations:* Protected planning blocks and a daily 15‑minute alignment window; asynchronous 3‑bullet updates.

*Peer scripts:* 
- “I’ll send a 3‑bullet update after your focus block.”  
- “Can we reserve 15 minutes at 4 pm for quick alignment?”

*Trial metrics:* Number of interruptions during focus blocks; percentage of items resolved asynchronously.

*Tools/supports:* Async update template, calendar focus blocks.

*Privacy phrasing:* “I’m protecting a two‑hour planning block — please send a 3‑bullet update if it’s not urgent.”

---

**Hyperfocus Patterns**
- **Manifestation:** Deep immersion in one problem leads to over‑engineering and neglect of other responsibilities.
- **Behaviour impact:** Thoroughness turns into perfectionism; misses handoffs.
- **Distortion:** Quality focus becomes counterproductive.
- **Snapshot:** Spends days refining a process while other tasks pile up.
- **Work/bandwidth impact:** Opportunity cost and delayed outcomes.
- **Risk if ignored:** Resource waste and team frustration.
- **Best way to approach:** Agree on visible stop signals and time‑boxed refinement sessions.

*Micro‑accommodations:* Mid‑pilot check‑ins; shared priority checklist; mandatory stop rules.

*Peer scripts:* 
- “This is great — set a mid‑pilot check‑in so we don’t lose other priorities.”  
- “If you hit X, pause and ping me so we can re‑prioritize.”

*Trial metrics:* Number of missed commitments while hyperfocused; percentage of pilots with mid‑pilot check‑ins.

*Tools/supports:* Shared progress board, automated reminders.

*Privacy phrasing:* “I’m in a focused sprint — I’ll set a mid‑sprint check‑in so we stay aligned.”

---

**Rejection Sensitivity**
- **Manifestation:** Strong emotional reaction to critique; may withdraw or retaliate.
- **Behaviour impact:** Defensive decisions and avoidance of feedback.
- **Distortion:** Confidence becomes brittle defensiveness.
- **Snapshot:** Cuts off discussion after a perceived slight.
- **Work/bandwidth impact:** Reduced psychological safety.
- **Risk if ignored:** Escalation and fractured relationships.
- **Best way to approach:** Deliver feedback privately, with strengths first, and pair critique with appreciation.

*Micro‑accommodations:* Private preview sessions; public recognition paired with one improvement suggestion.

*Peer scripts:* 
- “This part landed well; one tweak that could help is X — want to iterate together?”  
- “Can I give you private feedback before the next demo?”

*Trial metrics:* Frequency of private previews; willingness to share early drafts.

*Tools/supports:* Private feedback channel, short feedback templates.

*Privacy phrasing:* “I prefer private feedback on early drafts — can we do that for the next two demos?”

---

**Masking Fatigue**
- **Manifestation:** Exhaustion from maintaining a composed persona; reduced spontaneity; occasional emotional outbursts.
- **Behaviour impact:** Short temper, withdrawal, unpredictable reactions.
- **Distortion:** Steady exterior becomes volatile.
- **Snapshot:** Snaps at a peer after holding stress in.
- **Work/bandwidth impact:** Volatile interactions and trust erosion.
- **Risk if ignored:** Burnout and exits.
- **Best way to approach:** Offer low‑visibility contribution options and normalize recovery breaks after high‑visibility events.

*Micro‑accommodations:* Option for low‑visibility contributions; short recovery days after intense tasks.

*Peer scripts:* 
- “Take a recovery half‑day after the pitch — we’ve got your back.”  
- “If you want, drop the idea in this doc and I’ll surface it.”

*Trial metrics:* Number of low‑visibility contributions; self‑reported energy after recovery days.

*Tools/supports:* Shared idea document, opt‑out mechanism for public events.

*Privacy phrasing:* “I’m opting for a low‑visibility contribution this round while I recharge.”

---

**Social Communication Load**
- **Manifestation:** Extra effort to manage tone and influence; persuasion becomes tiring.
- **Behaviour impact:** Communication may become overly formal or transactional.
- **Distortion:** Influence is less relational and more authoritarian.
- **Snapshot:** Sends memos instead of informal check‑ins.
- **Work/bandwidth impact:** Reduced buy‑in and cohesion.
- **Risk if ignored:** Polarized conversations and diminished influence.
- **Best way to approach:** Provide concise templates and offer co‑presenting support for public communication.

*Micro‑accommodations:* Three‑slide executive summary templates; co‑presenter for Q&A sessions.

*Peer scripts:* 
- “I’ll co‑present the Q&A so you can focus on the pitch.”  
- “Can I draft a 3‑slide summary you can use for the execs?”

*Trial metrics:* Percentage of stakeholders reached; follow‑through rate after launches.

*Tools/supports:* Slide templates, co‑presenter pairing.

*Privacy phrasing:* “I’d like to co‑present the Q&A so I can focus on the demo.”

---

**Need for Written Instructions**
- **Manifestation:** Prefers documented decision rules and templates.
- **Behaviour impact:** Insists on written approvals and slows agility.
- **Distortion:** Governance becomes bureaucratic friction.
- **Snapshot:** Requires written sign‑off for routine changes.
- **Work/bandwidth impact:** Slower responsiveness, but higher clarity.
- **Risk if ignored:** Misalignment and frustration.
- **Best way to approach:** Co‑create concise templates that balance clarity and speed.

*Micro‑accommodations:* One‑page decision rubrics; “fast lane” exceptions for urgent decisions.

*Peer scripts:* 
- “Here’s a one‑page rubric — want me to draft the first version?”  
- “We can use a fast lane for urgent items and document after.”

*Trial metrics:* Percentage of decisions using the rubric; time to decision in the fast lane.

*Tools/supports:* One‑page templates, shared decision documents.

*Privacy phrasing:* “Can we capture the decision criteria in one short doc so I can approve quickly?”

---

**Need for Reduced Interruption**
- **Manifestation:** Performance drops with frequent interruptions; enforces quiet blocks.
- **Behaviour impact:** Declines ad‑hoc collaboration and enforces focus windows.
- **Distortion:** Control becomes exclusionary.
- **Snapshot:** Marks calendar as unavailable and ignores pings.
- **Work/bandwidth impact:** Coordination friction versus better deep work.
- **Risk if ignored:** Missed urgent issues.
- **Best way to approach:** Define clear escalation rules and respect focus windows.

*Micro‑accommodations:* Focus windows with a single escalation contact; asynchronous updates for non‑urgent items.

*Peer scripts:* 
- “If it’s urgent, text URGENT and I’ll respond; otherwise send a 3‑bullet update.”  
- “I’ll respect your focus block — who should I contact if it’s urgent?”

*Trial metrics:* Number of escalations during focus blocks; percentage of items resolved asynchronously.

*Tools/supports:* Slack status conventions, escalation contact list.

*Privacy phrasing:* “I’m in a focus block — text URGENT if it can’t wait.”

---

**Need for Structure Without Shame**
- **Manifestation:** Wants predictable scaffolding but may feel embarrassed to ask.
- **Behaviour impact:** Creates private systems, leading to misalignment and duplicated effort.
- **Distortion:** Spontaneity becomes hidden inefficiency.
- **Snapshot:** Keeps a private idea queue rather than sharing it for prioritization.
- **Work/bandwidth impact:** Duplicated work and friction.
- **Risk if ignored:** Missed coordination and decreased trust.
- **Best way to approach:** Normalize the use of lightweight templates and invite co‑creation of structure so it doesn’t feel burdensome.

*Micro‑accommodations:* Shared idea queue with WIP limits; optional pilot template; structure workshops.

*Peer scripts:* 
- “Can I add this to our shared queue and help prioritize it?”  
- “We use a short template for pilots — want me to fill it with you?”

*Trial metrics:* Percentage of ideas in the shared queue; time from idea to prioritized pilot.

*Tools/supports:* Shared idea document, WIP limits.

*Privacy phrasing:* “Can we add this to the shared list so it’s visible without making it public yet?”

---

**Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia**
- **Manifestation:** Extra time is needed for reading, numeric modeling and handwriting. Prefers typed or visual outputs.
- **Behaviour impact:** Documentation is slower; numeric tasks may be delegated or require assistive tools.
- **Distortion:** Verbal decisiveness may not translate into timely written follow‑ups.
- **Snapshot:** Gives a compelling directive but the follow‑up document arrives late.
- **Work/bandwidth impact:** Delays in documentation and handoffs.
- **Risk if ignored:** Miscommunication and missed opportunities.
- **Best way to approach:** Offer scribe support, templates, calculators and assistive technology.

*Micro‑accommodations:* Co‑author follow‑ups; speech‑to‑text for notes; provide calculators for numeric tasks.

*Peer scripts:* 
- “I can draft the follow‑up doc from your notes — want me to?”  
- “If you prefer, record a quick voice note and I’ll transcribe it.”

*Trial metrics:* Time from decision to published follow‑up; percentage of follow‑ups co‑authored.

*Tools/supports:* Speech‑to‑text software, shared templates, co‑authoring documents.

*Privacy phrasing:* “I prefer to record a quick voice note for follow‑up — can I send that instead of drafting?”

---

**Auditory Processing / Sensory Processing / Tourette Syndrome**
- **Manifestation:** Difficulty following rapid, multi‑speaker discussions; sensory overload can increase stress and tics.
- **Behaviour impact:** Prefers structured turn‑taking, captions and written summaries; may limit verbal participation in chaotic settings.
- **Distortion:** Command presence may be reduced in noisy environments.
- **Snapshot:** Leaves a loud meeting early and sends a formal follow‑up.
- **Work/bandwidth impact:** Reduced live presence and slower consensus building.
- **Risk if ignored:** Exclusion and missed input.
- **Best way to approach:** Share slides and notes in advance, use captions and provide opt‑out options for noisy sessions.

*Micro‑accommodations:* Captions on calls; slides and notes shared beforehand; quiet rooms for brainstorming.

*Peer scripts:* 
- “I’ll share slides and notes in advance so you can pick what to comment on.”  
- “Drop your idea in this doc and I’ll read it aloud if needed.”

*Trial metrics:* Number of contributions via written channels; comfort rating in meetings.

*Tools/supports:* Live captions, shared slide decks, quiet rooms.

*Privacy phrasing:* “I’ll skip the noisy session and drop my idea in the doc — please read it aloud if needed.”

---

**Working Memory / Processing Speed Differences**
- **Manifestation:** Needs external aids to hold multiple threads and extra time to synthesise information.
- **Behaviour impact:** Prefers pre‑reads and reflection pauses; slower during rapid exchanges.
- **Distortion:** Quick decisions are delayed but often of higher quality after reflection.
- **Snapshot:** Asks to postpone a decision to integrate inputs.
- **Work/bandwidth impact:** Slower cadence but better outcomes after reflection.
- **Risk if ignored:** Hasty decisions and missed nuance.
- **Best way to approach:** Provide concise pre‑reads and short reflection windows in meetings.

*Micro‑accommodations:* Send pre‑reads 24‑48 hours ahead; include five-minute recap pauses during meetings; allow post‑meeting reflection time before finalising decisions.

*Peer scripts:* 
- “I’ll send a two‑slide summary before the meeting so you can reflect.”  
- “Let’s pause for five minutes after the presentation so you can gather your thoughts.”

*Trial metrics:* Percentage of decisions postponed for reflection; quality of final plans after reflection.

*Tools/supports:* Pre‑read templates, meeting recap prompts, shared decision trackers.

*Privacy phrasing:* “I prefer a short pre‑read and a five‑minute pause after the meeting to finalise my input.”

`,
  },
  {
    id: "copenhagen-burnout-inventory-cbi-lens",
    lens: "Copenhagen Burnout Inventory (CBI) Lens",
    status: "",
    source: "Copenhagen_Burnout_Inventory_Lens.txt",
    content: `
Copenhagen Burnout Inventory (CBI) Lens
======================================

**Overview**

The Copenhagen Burnout Inventory (CBI) is a free, validated self‑report measure of burnout consisting of 19 items.  It comprises three subscales: **personal burnout**, **work‑related burnout** and **client‑related burnout**https://embrace-autism.com/copenhagen-burnout-inventory/#:~:text=The%20Copenhagen%20Burnout%20Inventory%20,good%20measure%20of%20autistic%20burnout.  

* **Personal burnout:** General physical and psychological exhaustion, irrespective of work.  Assesses fatigue, sleep problems and inability to relax.
* **Work‑related burnout:** Exhaustion attributed specifically to work.  Items ask about feeling worn out, frustrated and drained after work.
* **Client‑related burnout:** Exhaustion stemming from interactions with clients or patients (e.g., customer service, healthcare).  It measures emotional exhaustion, frustration and difficulty working with clients.

Each item is scored on a 5‑point scale; scores are averaged within each subscale to determine burnout levels (low, moderate or high).  The CBI separates personal stress from work stress and highlights the contribution of direct client interactions.https://embrace-autism.com/copenhagen-burnout-inventory/#:~:text=The%20Copenhagen%20Burnout%20Inventory%20,good%20measure%20of%20autistic%20burnout.

**Burnout Profile Crosswalk by PI Profile**

This table suggests which CBI subscale each PI profile is most susceptible to and how to mitigate the risk.

| PI Profile | Vulnerable subscale | Contributing factors | Protective strategies |
|---|---|---|---|
| **Analyzer** | Personal burnout | Excessive cognitive load and perfectionism | Set boundaries on working hours, schedule mental breaks, practise mindfulness. |
| **Controller** | Work‑related burnout | Pressure to deliver and constant oversight | Delegate tasks, build trust and adjust workloads. |
| **Specialist** | Client‑related burnout | Repeatedly educating stakeholders and translating technical work | Rotate responsibilities, use written resources and manage client expectations. |
| **Strategist** | Work‑related burnout | Long‑term strategic pressures and ambiguity | Prioritise projects, clarify goals and schedule recovery time. |
| **Venturer** | Personal burnout | Constant adrenaline and risk‑taking | Incorporate rest cycles, exercise and reflective practices. |
| **Altruist** | Client‑related burnout | Emotional labour from supporting colleagues and clients | Set boundaries, share responsibilities and practise self‑care. |
| **Captain** | Work‑related burnout | High stakes and responsibility for others | Share leadership, empower team and schedule breaks. |
| **Collaborator** | Personal burnout | Balancing diverse needs and relationships | Practise self‑compassion, prioritise tasks and protect downtime. |
| **Maverick** | Work‑related burnout | Frustration with organisational resistance | Focus on incremental change, build alliances and manage expectations. |
| **Persuader** | Client‑related burnout | Continuous influencing and client engagement | Set limits, alternate client‑facing and solo work, practice active recovery. |
| **Promoter** | Client‑related burnout | High visibility and public interactions | Schedule quiet time, alternate tasks and seek supportive feedback. |
| **Adapter** | Personal burnout | Juggling support roles and changing demands | Clarify priorities, take breaks and advocate for realistic workloads. |
| **Craftsman** | Work‑related burnout | Perfectionism and production pressure | Embrace “good enough,” plan recovery periods and delegate tasks. |
| **Guardian** | Client‑related burnout | Emotional labour in stewardship roles | Set boundaries, rotate tasks and seek support networks. |
| **Operator** | Work‑related burnout | Repetitive, high‑pressure operations | Vary tasks, seek input on improvements and schedule regular breaks. |
| **Individualist** | Personal burnout | Isolation and self‑imposed pressure | Build supportive relationships, share challenges and integrate leisure. |
| **Scholar** | Personal burnout | Intellectual labour and academic deadlines | Manage workload, collaborate and take mental health breaks. |

**Using this lens**

* Use the CBI periodically to differentiate between general exhaustion and work or client‑specific burnout.  This helps target interventions—e.g., a high client‑related score suggests the need to reduce client load or provide better support.
* Implement organisational practices such as regular debriefs for client‑facing roles, workload reviews and personal wellbeing days.  Encourage individuals to cultivate stress‑management routines.
* Recognise that burnout can manifest differently across profiles; tailor preventative strategies to individual needs and work contexts.`,
  },
  {
    id: "decisionmaking-style-lens",
    lens: "Decision\u2011Making Style Lens",
    status: "",
    source: "Decision_Making_Style.txt",
    content: `
Decision‑Making Style Lens

**Overview**

Decision‑making style describes how individuals prefer to make choices.  It is distinct from cognitive processing; a person may think conceptually yet decide intuitively.  Six broad styles are recognised in behavioural economics and organisational psychology:

1. **Analytical** – data‑driven, structured and slow.  Seeks comprehensive information before committing.
2. **Intuitive** – fast, pattern‑based and heuristic.  Relies on gut feelings and experience.
3. **Conceptual** – big‑picture, integrative and scenario‑driven.  Considers multiple options and how they fit into overarching goals.
4. **Directive** – decisive, action‑oriented and intolerant of ambiguity.  Prefers clear instructions and makes quick calls.
5. **Social / Relational** – consensus‑seeking and people‑impact aware.  Balances stakeholder needs and relationships.
6. **Adaptive** – flexible and context‑dependent.  Switches style based on the situation.

The table below maps each PI profile to its dominant and secondary decision styles, typical stress‑mode behaviours, speed versus accuracy orientation, risk posture and a rationale.

**Crosswalk by PI Profile**

| PI Profile | Dominant style | Secondary style | Stress‑mode pattern | Speed vs accuracy | Risk posture | Rationale |
|---|---|---|---|---|---|---|
| **Analyzer** | Analytical | Directive when confident in data | Analysis paralysis | Slow, accuracy‑maximising | Low | Precision and structure underpin decisions |
| **Controller** | Directive | Analytical | Rule rigidity | Fast, rule‑based | Low | Authority and process drive decisions |
| **Specialist** | Analytical | Conceptual within domain | Over‑checking details | Slow, accuracy‑maximising | Low | Deep technical reasoning |
| **Strategist** | Conceptual | Directive | Over‑confidence in vision | Fast‑moderate | Moderate | Combines systems thinking with drive |
| **Venturer** | Intuitive | Directive | Impulsive risk | Very fast | High | Bold and opportunistic decision maker |
| **Altruist** | Social / Relational | Adaptive | Over‑accommodation | Moderate | Low | People‑first reasoning |
| **Captain** | Directive | Intuitive | Over‑assertive decisions | Very fast | High‑moderate | Command and action orientation |
| **Collaborator** | Social / Relational | Adaptive | Avoidance and deferring | Slow‑moderate | Low | Consensus and harmony focused |
| **Maverick** | Conceptual | Intuitive | Chaotic, disruptive decisions | Fast | High | Creative, non‑linear decision maker |
| **Persuader** | Social / Relational | Intuitive | Emotion‑driven decisions | Fast | Moderate | Influence and audience reading |
| **Promoter** | Intuitive | Social / Relational | Impulsive, reactive | Very fast | High | Improvisational and energetic |
| **Adapter** | Adaptive | Social / Relational | Quiet withdrawal | Moderate | Low‑moderate | Flexible and situational |
| **Craftsman** | Analytical | Experiential | Perfectionistic delay | Slow | Low | Quality and precision focused |
| **Guardian** | Analytical | Social / Relational | Over‑caution | Slow | Very low | Stability and stewardship |
| **Operator** | Experiential | Analytical | Rigid routine | Moderate | Low | Process and execution orientation |
| **Individualist** | Conceptual | Intuitive | Detached, idiosyncratic decisions | Moderate | Moderate | Creative and independent |
| **Scholar** | Analytical | Conceptual | Over‑analysis | Slow | Low | Rigorous, structured decision maker |

**Guidance for collaboration**

* When working with analytical decision makers, provide thorough data and allow them time to deliberate.  Avoid pressuring them for immediate answers.
* Intuitive and directive profiles respond to crisp summaries and clear action points.  Present options with a recommendation rather than exhaustive detail.
* Conceptual thinkers appreciate scenario comparisons and long‑term implications; encourage them to share their vision and logic.
* Social/relational decision makers need to understand the human impact; involve stakeholders early and emphasise team benefits.
* Adaptive decision makers may shift style based on context.  Offer them flexibility and ask which approach best suits the current decision.
`,
  },
  {
    id: "disc-behavioral-styles-lens",
    lens: "DISC Behavioral Styles Lens",
    status: "",
    source: "DISC_Lens.txt",
    content: `
DISC Behavioral Styles Lens
==========================

**Overview and theoretical background**

The **DISC** model categorizes workplace behavior into four primary styles:
**Dominance (D)**, **Influence (I)**, **Steadiness (S)**, and
**Conscientiousness (C)**.  Originating from psychologist William Marston
and later adapted for business, DISC focuses on how people approach
problems, pace, people and procedures.  It is widely used for team
development and communication training.  Key traits include:

- **Dominance (D)** – results‑oriented, direct and decisive.  Dominant
  individuals prioritize speed, efficiency and control; they enjoy taking
  charge and facing challengeshttps://situational.com/blog/what-are-the-four-disc-personality-types/#:~:text=The%20%E2%80%9Cdominance%E2%80%9D%20DiSC%C2%AE%20personality%C2%A0style%20is,necessary%20risks%20to%20achieve%20them.
- **Influence (I)** – sociable, enthusiastic and persuasive.  Influencers
  focus on relationships, enjoy collaboration and motivate others with
  optimismhttps://situational.com/blog/what-are-the-four-disc-personality-types/#:~:text=Influence.
- **Steadiness (S)** – patient, cooperative and reliable.  Steady types
  value consistency, support and harmonyhttps://situational.com/blog/what-are-the-four-disc-personality-types/#:~:text=The%20%E2%80%9Csteadiness%E2%80%9D%C2%A0DiSC%C2%AE%20personality%20style%C2%A0is%20accepting,their%20trust%20in%20your%20leadership.
- **Conscientiousness (C)** – analytical, precise and methodical.
  Conscientious individuals prioritize accuracy, quality and thoughtful
  problem solvinghttps://situational.com/blog/what-are-the-four-disc-personality-types/#:~:text=Conscientiousness.

Everyone exhibits all four dimensions to some degree; the DISC profile
identifies primary and secondary styles that influence communication and
work preferences.

**Cross‑framework translation with PI profiles**

Below is an estimated mapping of PI reference profiles to DISC styles.
“Primary style(s)” reflects the dominant DISC dimension(s); “Secondary”
captures supporting tendencies; “Stress behaviors” highlight how the
profile might respond under pressure; “Communication tips” offer advice
for interacting effectively.

| PI profile | Primary DISC style(s) | Secondary style(s) | Stress behaviors | Communication tips |
|---|---|---|---|---|
| **Analyzer** | C–S | Steadiness | May become overly meticulous, skeptical or resistant to change. | Provide clear data and expectations; allow time for analysis; avoid abrupt changes. |
| **Controller** | D–C | Influence | Can appear impatient or controlling; may push for quick decisions. | Be direct but respectful; present options succinctly; clarify decision criteria. |
| **Specialist** | C–S | None | May withdraw and focus on details, resisting untested ideas. | Explain rationale; give opportunity for questions; recognize expertise. |
| **Strategist** | D–C | S | Can overanalyze and criticize; may overlook emotional impact. | Connect big‑picture goals with facts; invite collaborative planning. |
| **Venturer** | D–I | None | Might take on too much risk or act impulsively. | Highlight potential impacts; set milestones; encourage reflection. |
| **Individualist** | C–D | None | Can be critical or aloof; may resist teamwork. | Respect independence; frame collaboration as mutual benefit; request input. |
| **Scholar** | C–S | I | May overthink and delay action. | Encourage sharing insights; provide deadlines and structure; offer support. |
| **Altruist** | S–I | C | Might avoid conflict or overcommit to helping others. | Express appreciation; set boundaries; invite honest feedback. |
| **Captain** | D–I | C | May dominate discussions or overlook details. | Acknowledge vision; provide concise data; encourage listening. |
| **Collaborator** | I–S | None | Could become indecisive or conflict‑avoidant. | Include them in discussions; use positive reinforcement; provide clear priorities. |
| **Maverick** | D–I | None | Can disregard rules or upset stability. | Set expectations; emphasize consequences; allow creative freedom with guardrails. |
| **Persuader** | I–D | None | May promise more than can be delivered; prone to impulsive commitments. | Clarify responsibilities; document agreements; follow up regularly. |
| **Promoter** | I | S | May lack focus or underestimate complexity. | Provide a roadmap; ensure accountability; give constructive feedback gently. |
| **Adapter** | S–I | C | Could bend to others’ views too easily. | Encourage expression of opinions; offer structure; help prioritize tasks. |
| **Artisan** | C–S | I | May get lost in precision; resist quick decisions. | Share deadlines; break tasks into stages; appreciate craftsmanship. |
| **Guardian** | S–C | I | Can resist change and prefer established methods. | Explain reasons for change; provide support; acknowledge concerns. |
| **Operator** | S–C | I | May avoid taking initiative; need guidance to start. | Offer step‑by‑step direction; build confidence; celebrate small wins. |

**Practical implications**

The DISC lens translates PI behaviors into communication preferences.  For
example, a Controller (D–C) responds best to concise, results‑oriented
messages with clear logic, while a Collaborator (I–S) values rapport and
team consensus.  Understanding these dynamics helps managers tailor
feedback, delegate tasks effectively and anticipate stress reactions.
Dominance‑heavy profiles may need reminders to slow down and consider
others, whereas Steadiness‑heavy profiles benefit from reassurance when
changes occur.  Using DISC alongside PI insights can create a shared
language for navigating pace, detail and relational needs in the
workplace.
`,
  },
  {
    id: "enneagram-lens",
    lens: "Enneagram Lens",
    status: "",
    source: "Enneagram_Lens(1).txt",
    content: `
Enneagram Lens
==============

**Overview and theoretical background**

The **Enneagram** is an emotionally focused personality system that
describes nine core types, each defined by a dominant motivation and
basic fearhttps://www.truity.com/blog/enneagram/9-types-enneagram#:~:text=What%20Are%20the%20Nine%20Enneagram,Types.  The nine types are grouped into three
centers of intelligence: the **Body/Gut center** (Types 8, 9, 1) is
concerned with control, autonomy and instinct; the **Heart center**
(Types 2, 3, 4) focuses on image and relationships; the **Head center**
(Types 5, 6, 7) centers on security and mental strategieshttps://www.truity.com/blog/enneagram/9-types-enneagram#:~:text=What%20Are%20the%20Nine%20Enneagram,Types.

Brief summaries of each type:

1. **Type 1 – Perfectionist/Reformer** – strives for integrity and
   improvement; fears being wrong or corrupt.
2. **Type 2 – Helper/Giver** – seeks love and appreciation through
   helping others; fears being unwanted.
3. **Type 3 – Achiever** – pursues success and recognition; fears
   failure or being worthless.
4. **Type 4 – Individualist/Individualist** – desires authenticity and
   identity; fears being ordinary or without significance.
5. **Type 5 – Investigator** – seeks knowledge and self‑sufficiency;
   fears incompetence and intrusion.
6. **Type 6 – Skeptic/Loyalist** – longs for security and support;
   fears uncertainty and abandonment.
7. **Type 7 – Enthusiast** – craves stimulation, freedom and variety;
   fears pain and restriction.
8. **Type 8 – Challenger** – values autonomy and control; fears
   vulnerability and being controlled.
9. **Type 9 – Peacemaker** – wants inner and outer peace; fears
   conflict and disconnection.

The Enneagram emphasizes growth by recognizing underlying motivations and
developing healthy expression of each type.

**Cross‑framework translation with PI profiles**

The table below suggests likely Enneagram type affinities for each PI
profile.  Individuals may resonate with multiple types; this mapping
illustrates possible core drives.  “Potential type(s)” lists likely
types; “Motivational fit” summarizes why; “Growth focus” offers
development suggestions.

| PI profile | Potential Enneagram type(s) | Motivational fit | Growth focus |
|---|---|---|---|
| **Analyzer** | Type 1 (Perfectionist), Type 5 (Investigator) | Seeks correctness, order and knowledge; values accuracy and competence. | Embrace flexibility and vulnerability; cultivate relationships and spontaneity. |
| **Controller** | Type 8 (Challenger), Type 3 (Achiever) | Desires control, results and impact; driven to lead and succeed. | Practice empathy and humility; listen to others; allow shared power. |
| **Specialist** | Type 1 (Perfectionist), Type 6 (Loyalist) | Values precision and duty; seeks stability and clear guidelines. | Allow imperfection; develop independence and openness to change. |
| **Strategist** | Type 5 (Investigator), Type 3 (Achiever) | Driven by understanding systems and achieving big goals. | Balance vision with feelings; engage others in the process; manage work–life balance. |
| **Venturer** | Type 7 (Enthusiast), Type 8 (Challenger) | Pursues new opportunities and autonomy; dislikes constraints. | Introduce structure and patience; consider long‑term consequences; practice vulnerability. |
| **Individualist** | Type 4 (Individualist), Type 5 (Investigator) | Desires authenticity and independence; seeks depth and originality. | Build resilience to feedback; engage in collaboration; channel creativity into shared goals. |
| **Scholar** | Type 5 (Investigator), Type 9 (Peacemaker) | Enjoys knowledge and quiet reflection; avoids conflict. | Express opinions confidently; balance analysis with action; address tensions directly. |
| **Altruist** | Type 2 (Helper), Type 9 (Peacemaker) | Motivated by helping and harmony; values relationships. | Set personal boundaries; prioritize self‑care; voice personal needs. |
| **Captain** | Type 3 (Achiever), Type 8 (Challenger) | Ambitious leader who commands change and seeks recognition. | Temper competitiveness with compassion; acknowledge vulnerabilities; share credit. |
| **Collaborator** | Type 2 (Helper), Type 9 (Peacemaker) | Seeks connection and consensus; avoids conflict. | Develop assertiveness; address issues openly; balance own goals with others’. |
| **Maverick** | Type 7 (Enthusiast), Type 8 (Challenger) | Thrives on novelty and autonomy; challenges the status quo. | Integrate focus and follow‑through; respect boundaries; consider impact on relationships. |
| **Persuader** | Type 3 (Achiever), Type 7 (Enthusiast) | Desires success, influence and excitement. | Cultivate authenticity; manage impulses; listen deeply to others’ perspectives. |
| **Promoter** | Type 7 (Enthusiast), Type 3 (Achiever) | Enjoys socializing, variety and acclaim. | Ground ideas in reality; honor commitments; develop discipline and empathy. |
| **Adapter** | Type 9 (Peacemaker), Type 3 (Achiever) | Balances harmony with productivity; adapts to diverse contexts. | Clarify personal identity and values; assert opinions; avoid over‑accommodating. |
| **Artisan** | Type 4 (Individualist), Type 1 (Perfectionist) | Values creativity, aesthetics and precision. | Accept imperfection and iteration; share work early; integrate practical considerations. |
| **Guardian** | Type 1 (Perfectionist), Type 2 (Helper) | Emphasizes duty, reliability and care for others. | Welcome innovation; express needs; practice flexibility and self‑acceptance. |
| **Operator** | Type 9 (Peacemaker), Type 2 (Helper) | Provides steady support and seeks peace; fosters cooperation. | Build confidence to lead; voice dissent constructively; pursue personal growth opportunities. |

**Practical implications**

The Enneagram lens highlights the emotional drivers behind behavioral
patterns.  Recognizing that an Analyzer may fear making mistakes helps
coaches provide reassurance and encourage calculated risk taking.  Knowing
that a Venturer may fear restriction and chase new experiences informs
structuring projects with variety and autonomy.  When using this lens,
avoid stereotyping or assuming a definitive type; instead, use it to
explore motivations, blind spots and growth paths tailored to each
individual.
`,
  },
  {
    id: "emotional-intelligence-eqi20-lens",
    lens: "Emotional Intelligence (EQ\u2011i\u00a02.0) Lens",
    status: "",
    source: "EQi_2.0_Lens(1).txt",
    content: `
Emotional Intelligence (EQ‑i 2.0) Lens
=====================================

**Overview and theoretical background**

The **EQ‑i 2.0** is a widely used self‑report assessment that measures
emotional and social intelligence based on the Bar‑On model.  It
provides an overall emotional intelligence (EI) score, five composite
scales and fifteen subscaleshttps://www.eiconsortium.org/measures/eqi.html#:~:text=The%20Emotional%20Quotient%20Inventory%202,level%20results%20are%20also%20presented.  The composite
scales are:

1. **Self‑Perception** – self‑regard, self‑actualization and emotional
   self‑awarenesshttps://www.eiconsortium.org/measures/eqi.html#:~:text=The%20Emotional%20Quotient%20Inventory%202,level%20results%20are%20also%20presented.
2. **Self‑Expression** – emotional expression, assertiveness and
   independencehttps://www.eiconsortium.org/measures/eqi.html#:~:text=The%20Emotional%20Quotient%20Inventory%202,level%20results%20are%20also%20presented.
3. **Interpersonal** – interpersonal relationships, empathy and social
   responsibilityhttps://www.eiconsortium.org/measures/eqi.html#:~:text=The%20Emotional%20Quotient%20Inventory%202,level%20results%20are%20also%20presented.
4. **Decision Making** – problem solving, reality testing and impulse
   controlhttps://www.eiconsortium.org/measures/eqi.html#:~:text=The%20Emotional%20Quotient%20Inventory%202,level%20results%20are%20also%20presented.
5. **Stress Management** – stress tolerance and optimismhttps://www.eiconsortium.org/measures/eqi.html#:~:text=The%20Emotional%20Quotient%20Inventory%202,level%20results%20are%20also%20presented.

The EQ 360 adds observer ratings for a 360° perspective.  Unlike ability
tests, EQ‑i assesses typical emotional functioning and provides
developmental feedback.

**Cross‑framework translation with PI profiles**

The table below suggests likely emotional intelligence patterns for each
PI profile.  “Relative strengths” highlight composite scales that may
come naturally; “Development opportunities” point to areas where
deliberate practice could enhance performance.  These are
generalizations, not diagnostic scores.

| PI profile | Relative strengths | Development opportunities | Guidance |
|---|---|---|---|
| **Analyzer** | Decision Making (reality testing), Stress Management (calm under pressure). | Self‑Expression and Interpersonal composites (emotional expression, empathy). | Practice expressing feelings; engage in active listening; build supportive networks. |
| **Controller** | Decision Making (problem solving), Self‑Perception (self‑confidence). | Interpersonal (empathy, social responsibility), Stress Management (optimism). | Acknowledge others’ perspectives; develop patience; cultivate optimism during setbacks. |
| **Specialist** | Self‑Perception (self‑awareness), Decision Making (impulse control). | Self‑Expression (assertiveness), Stress Management (stress tolerance). | Speak up about needs; learn coping strategies; develop optimism through positive framing. |
| **Strategist** | Decision Making (problem solving and reality testing), Self‑Perception (self‑actualization). | Interpersonal (empathy) and Self‑Expression (emotional expression). | Connect with team emotionally; articulate visions with warmth; practice empathy training. |
| **Venturer** | Self‑Expression (assertiveness, independence), Self‑Perception (self‑confidence). | Decision Making (impulse control) and Interpersonal (empathy). | Slow down to validate decisions; seek feedback; practice active listening and empathy. |
| **Individualist** | Self‑Perception (self‑awareness), Decision Making (reality testing). | Self‑Expression (emotional expression) and Interpersonal (social responsibility). | Share emotions openly; build collaborative relationships; work on teamwork skills. |
| **Scholar** | Self‑Perception (self‑actualization), Decision Making (problem solving). | Self‑Expression (assertiveness) and Stress Management (optimism). | Increase visibility by sharing insights; cultivate optimism and resilience through small wins. |
| **Altruist** | Interpersonal (empathy, social responsibility), Self‑Expression (emotional expression). | Self‑Perception (self‑regard) and Decision Making (impulse control). | Practice self‑care; set boundaries; consider data alongside feelings when making decisions. |
| **Captain** | Self‑Expression (assertiveness), Self‑Perception (self‑confidence), Interpersonal (leadership empathy). | Decision Making (impulse control) and Stress Management (stress tolerance). | Reflect before reacting; practice resilience techniques; manage overconfidence. |
| **Collaborator** | Interpersonal (empathy, social responsibility), Self‑Expression (emotional expression). | Decision Making (reality testing) and Self‑Perception (self‑regard). | Use structured problem‑solving tools; assert own needs; develop self‑confidence through achievements. |
| **Maverick** | Self‑Expression (assertiveness), Self‑Perception (self‑confidence). | Decision Making (impulse control) and Interpersonal (empathy). | Pause before acting; consider impact on others; develop patience and empathy. |
| **Persuader** | Self‑Expression (communication), Interpersonal (empathy). | Stress Management (stress tolerance) and Decision Making (impulse control). | Plan downtime; regulate pace; gather facts before committing; practice mindful breathing. |
| **Promoter** | Self‑Expression (emotional expression, independence), Interpersonal (social responsibility). | Decision Making (reality testing) and Self‑Perception (self‑regard). | Use data to inform decisions; practice self‑validation; set realistic goals and follow through. |
| **Adapter** | Interpersonal (empathy), Self‑Expression (adaptability), Self‑Perception (self‑awareness). | Decision Making (assertiveness) and Stress Management (optimism). | Make timely decisions; build optimism through reframing; avoid people‑pleasing at own expense. |
| **Artisan** | Self‑Perception (self‑actualization), Decision Making (problem solving). | Self‑Expression (emotional expression) and Interpersonal (empathy). | Communicate emotions; engage with colleagues; cultivate optimism and stress tolerance. |
| **Guardian** | Self‑Perception (self‑awareness), Interpersonal (empathy). | Self‑Expression (assertiveness) and Stress Management (stress tolerance). | Speak up about preferences; learn relaxation techniques; adopt an optimistic mindset. |
| **Operator** | Interpersonal (social responsibility), Self‑Perception (self‑awareness). | Self‑Expression (assertiveness) and Decision Making (problem solving). | Build confidence in voicing ideas; practice structured problem‑solving; develop optimism. |

**Practical implications**

Using the EQ‑i lens with PI profiles helps leaders tailor coaching to
emotional strengths and gaps.  For instance, a Controller may excel at
decisions but struggle with empathy; targeted training in perspective‑taking
can enhance effectiveness.  An Altruist may need to strengthen
self‑regard to avoid burnout.  Combining emotional intelligence insights
with behavioral preferences enables more compassionate management and
supports high‑performance teams.
`,
  },
  {
    id: "executive-function-model-lens",
    lens: "Executive Function Model Lens",
    status: "",
    source: "Executive_Function_Model(1).txt",
    content: `
Executive Function Model Lens

**Overview**

Executive functions (EF) are cognitive processes that enable planning, organisation, sustained focus and adaptive behaviour.  Six core EF domains are typically assessed in workplace contexts:

1. **Working Memory** – holding and manipulating information in mind.
2. **Inhibitory Control** – resisting impulses, distractions and emotional reactions.
3. **Cognitive Flexibility** – switching tasks, adapting to change and perspective shifting.
4. **Planning & Prioritisation** – sequencing, structuring and organising activities.
5. **Task Initiation** – starting tasks without procrastination.
6. **Sustained Attention** – maintaining focus over time.

Each PI profile shows characteristic strengths and vulnerabilities across these functions.  The table below summarises typical patterns, the primary EF strength and primary vulnerability, along with a rationale.

**Crosswalk by PI Profile**

| PI Profile | Working memory | Inhibitory control | Cognitive flexibility | Planning & prioritisation | Task initiation | Sustained attention | Primary EF strength | Primary EF vulnerability | Rationale |
|---|---|---|---|---|---|---|---|---|---|
| **Analyzer** | High | High | Low‑Moderate | Very High | Moderate | Very High | Precision and sustained focus | Over‑analysis | Methodical, detail‑driven |
| **Controller** | High | Very High | Low | Very High | High | High | Rule‑based consistency | Rigidity | Order and control |
| **Specialist** | High | High | Low | High | Moderate | Very High | Deep technical focus | Narrow bandwidth | Domain mastery |
| **Strategist** | High | Moderate | High | High | High | Moderate | Systems‑level planning | Over‑complexity | Vision and structure |
| **Venturer** | Moderate | Low | High | Low | Very High | Low | Rapid action | Impulsivity | Fast, opportunistic |
| **Altruist** | Moderate | Moderate | High | Moderate | Moderate | Moderate | Social flexibility | Over‑accommodation | People‑first EF |
| **Captain** | High | Moderate | Moderate | High | Very High | Moderate | Decisive execution | Over‑assertive shortcuts | Command EF |
| **Collaborator** | Moderate | High | High | Moderate | Moderate | Moderate | Social‑cognitive flexibility | Avoidance | Harmony‑oriented |
| **Maverick** | Moderate | Low | Very High | Low | High | Low | Creative flexibility | Chaos | Disruptive EF |
| **Persuader** | Moderate | Low‑Moderate | High | Low | High | Low‑Moderate | Social adaptability | Over‑promising | Influence EF |
| **Promoter** | Moderate | Low | High | Low | Very High | Low | Energetic activation | Impulsive shifts | Improvisational EF |
| **Adapter** | Moderate | High | Very High | Moderate | Moderate | Moderate | Situational flexibility | Over‑adjustment | Flexible EF |
| **Craftsman** | High | High | Low | Very High | Moderate | Very High | Quality and precision | Perfectionistic delay | Methodical EF |
| **Guardian** | High | High | Low | Very High | Moderate | High | Stability and consistency | Over‑caution | Stewardship EF |
| **Operator** | Moderate | High | Low | High | High | High | Process execution | Rigidity | Operational EF |
| **Individualist** | High | Low‑Moderate | High | Moderate | High | Moderate | Creative flexibility | Inconsistent follow‑through | Independent EF |
| **Scholar** | Very High | High | Moderate | Very High | Moderate | Very High | Deep, rigorous focus | Over‑analysis | Academic EF |

**Using this lens**

* For individuals with high working memory and sustained attention (e.g., Analyzer, Scholar), design complex tasks that require deep concentration.  Monitor for over‑analysis and provide deadlines to encourage completion.
* Profiles with low inhibitory control (e.g., Venturer, Maverick) benefit from external cues and structured checklists to resist impulsive actions.  Implement stage gates before launching big initiatives.
* High cognitive flexibility (e.g., Strategist, Adapter) enables pivoting across tasks; use them in dynamic environments but watch for over‑complexity or over‑adjustment.
* Low planning & prioritisation (e.g., Venturer) requires support in sequencing steps.  Provide simple frameworks and assign a partner to co‑plan key projects.
* Task initiation difficulty can delay progress (e.g., Analyzer).  Break tasks into small, clearly defined first steps and use accountability check‑ins to spur action.
`,
  },
  {
    id: "herrmann-brain-dominance-instrument-hbdi-lens",
    lens: "Herrmann Brain Dominance Instrument (HBDI) Lens",
    status: "",
    source: "HBDI_Lens(1).txt",
    content: `
Herrmann Brain Dominance Instrument (HBDI) Lens

**Overview**

The Herrmann Brain Dominance Instrument (HBDI) maps thinking preferences across four quadrants:

* **A – Analytical (Blue)** – logic, data, analysis and numbers.
* **B – Organized (Green)** – structure, process, planning and detail.
* **C – Interpersonal (Red)** – empathy, communication and relationships.
* **D – Imaginative (Yellow)** – vision, creativity, big picture and innovation.

Individuals have primary, secondary and tertiary quadrants indicating their comfort zones, along with a lowest quadrant where they may struggle.  Under stress, people tend to over‑use their primary quadrant or neglect their lowest.

**Crosswalk by PI Profile**

| PI Profile | Primary quadrant | Secondary | Tertiary | Lowest | Thinking strength | Blind spot | Stress‑mode shift | Rationale |
|---|---|---|---|---|---|---|---|---|
| **Analyzer** | A (Analytical) | B | D | C | Precision and logic | Emotional nuance | Hyper‑A (over‑analysis) | Data‑driven, structured |
| **Controller** | B (Organized) | A | C | D | Structure and control | Creativity | Rigid B | Rule‑based, process‑driven |
| **Specialist** | A | B | C | D | Technical depth | Innovation | Withdrawn A/B | Deep, precise reasoning |
| **Strategist** | D (Imaginative) | A | B | C | Vision and logic | Emotional tone | Over‑theorising | Systems and innovation |
| **Venturer** | D | A | C | B | Bold innovation | Structure | Impulsive D | Fast, creative risk‑taking |
| **Altruist** | C (Interpersonal) | B | A | D | Empathy and harmony | Innovation | Over‑accommodation | People‑first cognition |
| **Captain** | D | A | B | C | Vision and drive | Emotional nuance | Dominant D/A | Command and innovation |
| **Collaborator** | C | B | D | A | Harmony and facilitation | Hard logic | Avoidance | Relational integration |
| **Maverick** | D | A | C | B | Creative disruption | Structure | Chaotic D | Non‑linear, inventive |
| **Persuader** | C | D | A | B | Influence and creativity | Process discipline | Emotional C | Social‑creative cognition |
| **Promoter** | C | D | A | B | Energy and connection | Structure | Reactive C/D | Expressive, improvisational |
| **Adapter** | C | B | D | A | Flexibility and empathy | Hard analysis | Over‑adjustment | Situational, relational |
| **Craftsman** | B | A | C | D | Structure and precision | Innovation | Perfectionistic B | Quality and order |
| **Guardian** | B | A | C | D | Stability and stewardship | Creativity | Over‑caution | Preservation and process |
| **Operator** | B | A | C | D | Reliable execution | Innovation | Rigid B | Process and consistency |
| **Individualist** | D | A | C | B | Creative independence | Structure | Detached D | Identity‑driven creativity |
| **Scholar** | A | B | D | C | Deep analysis | Emotional nuance | Over‑analysis | Academic, structured |

**Application guidance**

* Align work with strengths: Analytical‑dominant profiles excel at data analysis and problem solving; Organized types thrive in planning and process control; Interpersonal profiles lead culture and relationships; Imaginative thinkers drive innovation and vision.
* Address blind spots through team composition: Pair creative strategists with process‑oriented guardians to balance vision and execution; match relational collaborators with analytical operators to bridge people and processes.
* Watch stress shifts: Under pressure, primary quadrants may intensify (e.g., analyzers over‑analyse, controllers become rigid); anticipate these reactions and offer support such as clarifying expectations or introducing alternative perspectives.
`,
  },
  {
    id: "hexaco-personality-model-lens",
    lens: "HEXACO Personality Model Lens",
    status: "",
    source: "HEXACO_Lens(1).txt",
    content: `
HEXACO Personality Model Lens
============================

**Overview and theoretical background**

The **HEXACO** model is a six‑dimensional extension of the Big Five that adds
an **Honesty–Humility** factor and reorganizes Agreeableness and Emotional
Stability.  Researchers Lee and Ashton developed the model after lexical
studies across multiple languages suggested that traits relating to
sincerity, fairness, and modesty form a distinct dimension beyond the
traditional Big Fivehttps://en.wikipedia.org/wiki/HEXACO_model_of_personality_structure#:~:text=conscientiousness%20%20,humility%20dimension.%5B%205.  The HEXACO factors are:

1. **Honesty–Humility** – sincerity, fairness, greed avoidance and
   modesty; low scorers are manipulative, entitled and status‑seekinghttps://en.wikipedia.org/wiki/HEXACO_model_of_personality_structure#:~:text=conscientiousness%20%20,humility%20dimension.%5B%205.
2. **Emotionality** – fearfulness, anxiety, dependence and sentimentality;
   conceptually similar to Neuroticism but with greater emphasis on
   vulnerability and attachmenthttps://en.wikipedia.org/wiki/HEXACO_model_of_personality_structure#:~:text=%2A%20Honesty,shallow%2C%20unimaginative%2C%20conventional.
3. **Extraversion** – sociability, liveliness, social self‑esteem and
   assertivenesshttps://en.wikipedia.org/wiki/HEXACO_model_of_personality_structure#:~:text=%2A%20Honesty,shallow%2C%20unimaginative%2C%20conventional.
4. **Agreeableness** (versus anger) – patience, gentleness, tolerance and
   forgiveness; low scorers are critical and argumentativehttps://en.wikipedia.org/wiki/HEXACO_model_of_personality_structure#:~:text=%2A%20Honesty,shallow%2C%20unimaginative%2C%20conventional.
5. **Conscientiousness** – organization, diligence, perfectionism and
   prudencehttps://en.wikipedia.org/wiki/HEXACO_model_of_personality_structure#:~:text=%2A%20Honesty,shallow%2C%20unimaginative%2C%20conventional.
6. **Openness to Experience** – curiosity, creativity, aesthetic
   appreciation and unconventionalityhttps://en.wikipedia.org/wiki/HEXACO_model_of_personality_structure#:~:text=%2A%20Honesty,shallow%2C%20unimaginative%2C%20conventional.

The addition of Honesty–Humility allows the model to account for
interpersonal ethics and tendencies toward exploitation.  Higher scores on
Honesty–Humility correlate with pro‑social behavior, while lower scores
predict Machiavellianism and narcissism.

**Cross‑framework translation with PI profiles**

The table below offers approximate HEXACO patterns for each PI reference
profile.  “Dominant traits” capture the strongest dimensions; “Secondary”
traits are notable but less pronounced; “Cautions” highlight potential
dark‑side tendencies when strengths are overused; “Growth suggestions” offer
development tips.

| PI profile | Dominant HEXACO traits | Secondary traits | Cautions | Growth suggestions |
|---|---|---|---|---|
| **Analyzer** | High Conscientiousness; moderate Honesty–Humility. Values accuracy and fairness. | Low Extraversion; moderate Openness. | May become overly perfectionistic or inflexible. | Embrace creative thinking and share work early to build trust. |
| **Controller** | High Conscientiousness; moderate Extraversion. Direct and pragmatic. | Low Agreeableness; moderate Honesty–Humility. | Can appear domineering or dismissive. | Practice humility and active listening; foster patience with different paces. |
| **Specialist** | High Conscientiousness; high Honesty–Humility. Precise and dependable. | Low Extraversion; moderate Agreeableness. | Risk of rigidity and resistance to change. | Allow room for curiosity; communicate ideas openly. |
| **Strategist** | High Openness; high Conscientiousness. Visionary and disciplined. | Moderate Honesty–Humility; low Agreeableness. | May overanalyze or dismiss alternative viewpoints. | Balance analytical rigor with empathy and collaboration. |
| **Venturer** | High Openness; high Extraversion. Bold and innovative. | Low Honesty–Humility; low Agreeableness. | May overestimate capabilities or pursue risky ventures. | Cultivate humility, consistency and respect for process. |
| **Individualist** | High Openness; moderate Honesty–Humility. Independent and creative. | Low Agreeableness; low Extraversion. | Can become aloof or appear indifferent. | Engage in team discussions; practice patience with differing perspectives. |
| **Scholar** | High Openness; high Conscientiousness. Imaginative and meticulous. | High Honesty–Humility; low Extraversion. | Tendency to retreat into analysis, delaying decisions. | Share insights proactively; seek feedback to refine ideas. |
| **Altruist** | High Honesty–Humility; high Agreeableness. Sincere and supportive. | Moderate Conscientiousness; moderate Emotionality. | May neglect own needs or avoid confrontation. | Set boundaries and voice concerns; balance care with directness. |
| **Captain** | High Extraversion; high Openness. Confident, charismatic leader. | Moderate Honesty–Humility; low Agreeableness. | Could become self‑focused or dismiss detail. | Embrace humility; solicit diverse opinions; follow through on plans. |
| **Collaborator** | High Agreeableness; high Honesty–Humility. Cooperative and patient. | Moderate Emotionality; moderate Conscientiousness. | May accommodate too much or avoid tough decisions. | Develop assertiveness and structured follow‑through. |
| **Maverick** | High Openness; high Extraversion. Adventurous and unconventional. | Low Honesty–Humility; low Conscientiousness. | Risk of impulsiveness and rule‑breaking. | Introduce structure and accountability; appreciate others’ needs. |
| **Persuader** | High Extraversion; high Openness. Poised persuader. | Moderate Conscientiousness; low Agreeableness. | May overpromise or gloss over details. | Increase diligence; balance persuasion with transparency. |
| **Promoter** | High Extraversion; high Honesty–Humility. Friendly and persuasive. | High Agreeableness; low Conscientiousness. | Could become scattered or avoid detail work. | Use checklists and clear goals; maintain consistency. |
| **Adapter** | Balanced across traits. Flexible and diplomatic. | Moderate Honesty–Humility; moderate Agreeableness. | May lack strong preferences; risk of over‑accommodating. | Clarify personal boundaries; prioritize tasks to avoid diffusion. |
| **Artisan** | High Conscientiousness; high Openness. Analytical and artistic. | High Honesty–Humility; low Extraversion. | May become overly perfectionistic or reclusive. | Engage with team early; accept iterative progress. |
| **Guardian** | High Honesty–Humility; high Conscientiousness. Loyal and detail‑oriented. | Low Openness; moderate Agreeableness. | Might resist change and suppress dissent. | Explore new ideas gradually; encourage constructive debate. |
| **Operator** | Moderate Conscientiousness; high Honesty–Humility. Reliable and easy‑going. | High Agreeableness; low Openness. | May avoid initiative or innovation. | Build confidence to voice ideas; pursue skill development and variety. |

**Practical implications**

The HEXACO lens highlights ethical and interpersonal tendencies alongside the
traditional Big Five traits.  For example, profiles with low Honesty–Humility
(Venturer, Maverick) may need support in avoiding competitive or
status‑seeking behaviors, while those high in Emotionality (Collaborator,
Altruist) may benefit from resilience and stress‑management strategies.  By
mapping PI profiles to HEXACO, managers can tailor feedback and development
efforts: encouraging low Agreeableness profiles to practice patience and
forgiveness, or challenging low Openness profiles to experiment with new
ideas.  Recognizing where each person sits on these six dimensions makes
team composition, conflict management and leadership development more
intentional and transparent.
`,
  },
  {
    id: "hogan-development-survey-hds-lens",
    lens: "Hogan Development Survey (HDS) Lens",
    status: "",
    source: "Hogan_Development_Survey_Lens(1).txt",
    content: `
Hogan Development Survey (HDS) Lens
===================================

**Overview and theoretical background**

The **Hogan Development Survey (HDS)** identifies personality tendencies
that may derail careers when strengths are overused or when individuals
are under stress.  Developed by Robert and Joyce Hogan, the HDS measures
11 “dark side” traits grouped into three clustershttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=:

*Cluster A – Moving Away (avoidance under stress)*

1. **Excitable** – enthusiastic initially but moody and easily
   disappointed; can become hard to please and unpredictablehttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,often%20very%20difficult%20to%20please.
2. **Skeptical** – perceptive and critical, but may become distrustful and
   argumentative under stresshttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,if%20they%20do%20or%20say.
3. **Cautious** – careful and risk‑averse; may avoid taking initiative for
   fear of mistakeshttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,as%20unassertive%2C%20slow%20and%20pessimistic.
4. **Reserved** – independent and private; may withdraw socially and seem
   uncaringhttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,centered.
5. **Leisurely** – superficially agreeable but stubborn; may resist
   direction and work on their own termshttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,do%20things%20their%20own%20way.

*Cluster B – Moving Against (aggression under stress)*

6. **Bold** – confident and charismatic but can become overconfident,
   arrogant and unwilling to admit mistakeshttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,centered%2C%20and%20demanding.
7. **Mischievous** – charming risk‑taker; may test rules, seek excitement
   and ignore consequenceshttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,commit%20to%20any%20one%20thing.
8. **Colorful** – attention‑seeking and dramatic; may be distracting and
   unfocusedhttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,they%27re%20unfocused%2C%20and%20they%20don%27t.
9. **Imaginative** – creative and visionary but may be eccentric and
   impracticalhttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,odd%2C%20eccentric%2C%20and%20lacking%20in.

*Cluster C – Moving Toward (dependency under stress)*

10. **Diligent** – conscientious and perfectionistic; may overwork and
    micromanagehttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,beside%20them%20feel%20inadequate%20and.
11. **Dutiful** – polite and compliant; may be overly eager to please and
    avoid independent judgmenthttps://www.mindtools.com/asi16g0/the-hogan-development-survey/#:~:text=,may%20just%20accept%20bad%20ideas.

These derailers are not inherently negative; at moderate levels they
reflect strengths.  However, high scores indicate that the behavior may
emerge under pressure, hurting relationships and performance.  The HDS
promotes awareness so leaders can manage their dark‑side tendencies.

**Cross‑framework translation with PI profiles**

The table below identifies potential derailers for each PI profile.
“Likely derailers” are traits that may surface when the profile’s
strengths are overused.  “Trigger situations” describe stressors that
activate these behaviors; “Development strategies” offer coaching ideas.

| PI profile | Likely derailers | Trigger situations | Development strategies |
|---|---|---|---|
| **Analyzer** | Cautious, Diligent | High uncertainty, ambiguous requirements, pressure for rapid decisions. | Build tolerance for risk; practice prioritizing key details over perfection; take calculated action. |
| **Controller** | Bold, Skeptical, Diligent | Criticism, slow progress, lack of control. | Encourage humility and openness to feedback; delegate without micromanaging; foster trust through transparency. |
| **Specialist** | Reserved, Cautious, Diligent | Sudden change, social pressure, high workload. | Engage in open communication; seek feedback early; allow imperfection to foster agility. |
| **Strategist** | Bold, Imaginative, Skeptical | Constraints on vision, micromanagement, resistance to change. | Balance ambition with reality; listen actively; develop trust and patience with process. |
| **Venturer** | Mischievous, Bold, Colorful | Routine tasks, bureaucratic barriers, limited autonomy. | Respect rules and stakeholders; cultivate prudence; ensure plans are viable before acting. |
| **Individualist** | Reserved, Leisurely, Skeptical | Forced collaboration, repetitive work, close supervision. | Communicate intent; build alliances; adopt accountability partners to maintain momentum. |
| **Scholar** | Cautious, Reserved, Diligent | Time pressure, conflict, unclear expectations. | Practice decision making under constraint; share progress; manage perfectionism by embracing iterative learning. |
| **Altruist** | Dutiful, Cautious, Reserved | Conflict, lack of appreciation, overcommitment. | Set boundaries; voice dissent constructively; avoid overextending to please others. |
| **Captain** | Bold, Colorful, Imaginative | Lack of recognition, slow results, rigid structures. | Encourage feedback; reflect on impact; temper charisma with listening and detail orientation. |
| **Collaborator** | Dutiful, Leisurely | Decision impasses, unresolved conflict, competing demands. | Develop assertiveness; prioritize tasks; handle tough conversations directly. |
| **Maverick** | Mischievous, Imaginative, Bold | Confining procedures, prolonged routine, skepticism from others. | Pair with structured colleagues; reflect on consequences; channel creativity into viable strategies. |
| **Persuader** | Colorful, Mischievous | Monotony, lack of audience, critical feedback. | Practice active listening; verify facts before committing; manage attention to detail. |
| **Promoter** | Colorful, Dutiful | Tedious detail work, negative feedback, lack of social interaction. | Build personal organization systems; accept constructive critique; focus on substance along with style. |
| **Adapter** | Dutiful, Leisurely, Reserved | Competing priorities, conflicting directives, chaotic teams. | Clarify goals and roles; assert own opinions; avoid passive resistance. |
| **Artisan** | Diligent, Reserved | Tight deadlines, vague expectations, heavy social demands. | Share early drafts; accept “good enough”; cultivate collaboration and communication skills. |
| **Guardian** | Cautious, Dutiful | Rapid change, unpredictability, conflicting values. | Engage in change management training; practice flexibility; voice concerns proactively. |
| **Operator** | Dutiful, Leisurely | High pressure, complex instructions, lack of support. | Seek clarity; ask for help; take initiative gradually; avoid disengaging. |

**Practical implications**

The HDS lens helps leaders anticipate how their strengths may morph into
liabilities under stress.  For example, Controllers and Strategists may
become overly Bold or Skeptical, pushing people away; Venturers and
Mavericks might veer into Mischievous rule‑breaking; Specialists and
Scholars could retreat into caution and perfectionism.  By identifying
likely derailers, individuals can monitor triggers, seek feedback and
develop coping strategies—such as mindfulness, perspective‑taking or
delegating.  Organizations can use the HDS lens in coaching and
succession planning to ensure that high‑potential talent does not
derail under pressure.
`,
  },
  {
    id: "hogan-personality-inventory-hpi-lens",
    lens: "Hogan Personality Inventory (HPI) Lens",
    status: "",
    source: "Hogan_Personality_Inventory_Lens(1).txt",
    content: `
Hogan Personality Inventory (HPI) Lens
=====================================

**Overview and theoretical background**

The **Hogan Personality Inventory (HPI)** measures day‑to‑day personality
traits relevant to occupational performance.  Based on the Five Factor
Model, the HPI was designed to predict how individuals relate to others,
approach tasks, and manage stressmetaberatung.com/wp-content/uploads/2024/07/mB-Insight-Package-with-occup.-Scales-incl.-Flash-EN.pdf#:~:text=The%20HPI%20is%20based%20upon,averse.  The
assessment contains seven primary scales:

1. **Adjustment** – emotional stability and self‑confidence.  High scores
   indicate calm and resilient individuals; low scores suggest
   sensitivity and reactivitymetaberatung.com/wp-content/uploads/2024/07/mB-Insight-Package-with-occup.-Scales-incl.-Flash-EN.pdf#:~:text=The%20HPI%20is%20based%20upon,averse.
2. **Ambition** – competitiveness, initiative and drive for leadership.
   High scorers are energetic and goal‑oriented; low scorers are
   content to support othersmetaberatung.com/wp-content/uploads/2024/07/mB-Insight-Package-with-occup.-Scales-incl.-Flash-EN.pdf#:~:text=The%20HPI%20is%20based%20upon,averse.
3. **Sociability** – extraversion and gregariousness.  High scores denote
   outgoing, expressive people; low scores reflect reserved, private
   individualsmetaberatung.com/wp-content/uploads/2024/07/mB-Insight-Package-with-occup.-Scales-incl.-Flash-EN.pdf#:~:text=The%20HPI%20is%20based%20upon,averse.
4. **Interpersonal Sensitivity** – tact, friendliness and empathy.
   High scorers are warm and perceptive; low scorers may be blunt and
   frankmetaberatung.com/wp-content/uploads/2024/07/mB-Insight-Package-with-occup.-Scales-incl.-Flash-EN.pdf#:~:text=The%20HPI%20is%20based%20upon,averse.
5. **Prudence** – self‑discipline, reliability and attention to detail.
   High scores indicate organized, conscientious people; low scores
   reflect spontaneity and flexibilitymetaberatung.com/wp-content/uploads/2024/07/mB-Insight-Package-with-occup.-Scales-incl.-Flash-EN.pdf#:~:text=The%20HPI%20is%20based%20upon,averse.
6. **Inquisitive** – imagination, curiosity and strategic thinking.
   High scorers enjoy solving complex problems; low scorers prefer
   practical, hands‑on workmetaberatung.com/wp-content/uploads/2024/07/mB-Insight-Package-with-occup.-Scales-incl.-Flash-EN.pdf#:~:text=The%20HPI%20is%20based%20upon,averse.
7. **Learning Approach** – enjoyment of reading and continuous learning.
   High scorers seek knowledge and development; low scorers prefer
   experiential learningmetaberatung.com/wp-content/uploads/2024/07/mB-Insight-Package-with-occup.-Scales-incl.-Flash-EN.pdf#:~:text=The%20HPI%20is%20based%20upon,averse.

The HPI is descriptive rather than clinical and helps organizations match
individuals to roles, develop talent and build effective teams.

**Cross‑framework translation with PI profiles**

The table below approximates how PI profiles align with HPI scales.
“High” and “Low” denote relative tendencies; “Strengths” highlight how
these traits manifest; “Development focus” suggests coaching points.

| PI profile | Adjustment | Ambition | Sociability | Interpersonal Sensitivity | Prudence | Inquisitive | Learning Approach | Strengths | Development focus |
|---|---|---|---|---|---|---|---|---|---|
| **Analyzer** | High | Moderate | Low | Moderate | High | High | High | Calm, methodical problem solver with strategic insight. | Build visibility and assertiveness; encourage collaboration and adaptability. |
| **Controller** | Moderate | High | Moderate | Low | High | Moderate | Moderate | Driven executor with operational discipline. | Practice empathy and relationship management; balance pace with reflection. |
| **Specialist** | High | Low | Low | Moderate | High | Moderate | Moderate | Reliable expert with strong attention to detail. | Increase willingness to influence; embrace strategic thinking and learning outside comfort zone. |
| **Strategist** | High | High | Moderate | Low | High | High | High | Visionary planner who balances precision and innovation. | Improve interpersonal sensitivity; communicate vision inclusively. |
| **Venturer** | High | High | High | Low | Low | High | Moderate | Entrepreneurial leader who inspires change and pursues opportunities. | Develop prudence and follow‑through; practice active listening and humility. |
| **Individualist** | High | Moderate | Low | Low | Moderate | High | High | Independent thinker with strategic depth. | Engage in teamwork; develop social rapport and patience. |
| **Scholar** | High | Low | Low | High | High | High | High | Thoughtful, supportive specialist who values learning. | Become comfortable advocating ideas; balance study with decisive action. |
| **Altruist** | High | Low | High | High | Moderate | Moderate | Moderate | Empathetic team member who nurtures relationships. | Build self‑assertion and ambition; manage workload boundaries. |
| **Captain** | High | High | High | Moderate | Moderate | High | Moderate | Charismatic leader who connects vision to action. | Focus on details and prudence; temper ambition with inclusiveness. |
| **Collaborator** | High | Low | High | High | Low | Moderate | Moderate | Harmonizing team player who fosters consensus. | Strengthen structure and assertiveness; prioritize tasks to avoid drift. |
| **Maverick** | High | High | High | Low | Low | High | Low | Bold innovator unafraid of risk. | Cultivate prudence and reliability; respect interpersonal boundaries. |
| **Persuader** | High | High | High | Moderate | Low | Moderate | Moderate | Influential motivator with social energy. | Provide structure for execution; manage commitments carefully. |
| **Promoter** | High | Low | High | High | Low | Moderate | Low | Energetic connector who spreads enthusiasm. | Develop discipline and strategic focus; avoid superficiality. |
| **Adapter** | High | Moderate | Moderate | High | Moderate | Moderate | Moderate | Versatile collaborator able to bridge gaps. | Define clear goals; avoid over‑accommodating; invest in personal ambition. |
| **Artisan** | High | Low | Low | Moderate | High | High | Moderate | Creative craftsman with precision and imagination. | Practice self‑promotion; develop social boldness; balance perfectionism with timeliness. |
| **Guardian** | High | Low | Low | High | High | Low | Moderate | Supportive, detail‑oriented stabilizer who values harmony. | Embrace change and strategic thinking; voice ideas proactively. |
| **Operator** | High | Low | Moderate | High | Moderate | Low | Low | Patient, easy‑going contributor who values teamwork. | Build initiative and ambition; pursue continued learning and skills development. |

**Practical implications**

Mapping PI profiles onto HPI scales highlights which behaviours are likely
to be strengths and which areas may require development.  For example,
Controllers and Persuaders share high Ambition but differ in Prudence
levels; Controllers may be more structured, whereas Persuaders need
support building follow‑through systems.  High Learning Approach profiles
like Analyzers and Scholars may thrive in knowledge‑rich roles, while
low Learning Approach profiles such as Operators and Promoters may prefer
hands‑on learning.  Using the HPI lens helps align individuals with
roles that match their motivational drives and informs coaching plans to
address blind spots.
`,
  },
  {
    id: "insights-discovery-color-model-lens",
    lens: "Insights Discovery (Color Model) Lens",
    status: "",
    source: "Insights_Discovery_Color_Model(1).txt",
    content: `
Insights Discovery (Color Model) Lens

**Overview**

The Insights Discovery framework maps individual preferences to four colours—red, yellow, green and blue—that represent different behavioural energies.  Each colour reflects a unique combination of decisiveness, sociability, analytical rigour and relational focus:

* **Red energy** – direct, decisive and action‑driven.  People with strong red energy prioritise results and move quickly toward goals.
* **Yellow energy** – energetic, expressive and social.  Yellow types are enthusiastic, persuasive and thrive on interaction.
* **Green energy** – supportive, steady and relational.  High‑green individuals value harmony, collaboration and stability.
* **Blue energy** – analytical, precise and structured.  People with high blue energy are detail‑oriented, logical and methodical.

In practice individuals rarely express one colour exclusively.  Most display a dominant colour, a secondary colour that moderates the dominant energy, and a “stress shift” indicating where they tend to go under pressure.  The crosswalk below summarises the dominant and secondary colours, stress behaviours and communication tips for each of the 17 Predictive Index (PI) behavioural profiles described in the source document.  The rationale column offers a one‑line explanation linking the profile’s core drives to its colour pattern.

**Colour Crosswalk by PI Profile**

| PI Profile | Dominant colour | Secondary colour | Stress shift | Do (communication) | Don’t (communication) | Rationale |
|---|---|---|---|---|---|---|
| **Analyzer** | Blue | Red | Hyper‑Blue (over‑analysis and rigidity) | Be precise, structured and factual | Avoid vagueness or emotional appeals | High detail orientation and low social drive |
| **Controller** | Blue | Red | Blue → controlling Red | Provide rules, clarity and compliance paths | Don’t surprise them or break process | Seeks order and authority with low sociability |
| **Specialist** | Blue | Green | Withdrawn Blue | Give detail, time and accuracy | Don’t push for fast decisions | Values depth, precision and stability |
| **Strategist** | Red | Blue | Red → dismissive Blue | Be concise, strategic and outcome‑focused | Don’t over‑explain or get emotional | Combines vision with logic and drive |
| **Venturer** | Red | Yellow | Impulsive Red | Move fast, give autonomy | Don’t slow them down with detail | Bold, opportunistic and high‑energy |
| **Altruist** | Green | Blue | Over‑accommodating Green | Be warm, supportive and predictable | Don’t be abrupt or confrontational | People‑first focus with need for stability |
| **Captain** | Red | Yellow | Aggressive Red | Be direct, decisive and confident | Don’t waffle or hesitate | Commanding, assertive and mobilising |
| **Collaborator** | Green | Yellow | Passive Green | Be inclusive, patient and relational | Don’t rush decisions or create conflict | Harmony and facilitation are core drivers |
| **Maverick** | Yellow | Red | Chaotic Yellow | Encourage creativity and big ideas | Don’t over‑structure or constrain | Bold, expressive and disruptive |
| **Persuader** | Yellow | Red | Dramatic Yellow | Be energetic, engaging and people‑focused | Don’t be cold or overly technical | Influence and charisma define their style |
| **Promoter** | Yellow | Red | Over‑promising Yellow | Be upbeat, fast and collaborative | Don’t bury them in detail | High energy focused on activation and visibility |
| **Adapter** | Green | Blue | Quiet withdrawal | Be steady, clear and respectful | Don’t force fast decisions | Flexible and relational with balance |
| **Craftsman** | Blue | Green | Perfectionistic Blue | Provide detail, standards and clarity | Don’t change things last‑minute | Quality and precision are paramount |
| **Guardian** | Green | Blue | Defensive Green | Be predictable, respectful and structured | Don’t push sudden change | Stability and stewardship are priorities |
| **Operator** | Blue | Green | Rigid Blue | Give process, clarity and expectations | Don’t be chaotic or inconsistent | Execution and reliability define them |
| **Individualist** | Yellow | Blue | Detached Yellow | Respect autonomy and creativity | Don’t micromanage | Expressive, analytical and independent |
| **Scholar** | Blue | Green | Over‑thinking Blue | Provide data, time and structure | Don’t pressure for fast decisions | Analytical and methodical by nature |

**Using this lens**

* When communicating with someone, lead with their dominant colour: provide structure and data for blue‑dominant profiles; set clear expectations and give autonomy for red‑dominant types; make time for connection and harmony for green‑dominant people; and focus on enthusiasm and ideation for yellow‑dominant profiles.
* Recognise the stress shift: under pressure, blue types become overly analytical, red types may become controlling, yellow types can become chaotic and green types may withdraw or over‑accommodate.  Adjust your interactions accordingly.
* Acknowledge that secondary colours moderate the dominant energy—e.g., a red‑blue strategist is more analytical and systems‑oriented than a purely red captain.  Use secondary colours to refine your approach.
`,
  },
  {
    id: "interpersonal-dynamics-inventory-lens",
    lens: "Interpersonal Dynamics Inventory Lens",
    status: "",
    source: "Interpersonal_Dynamics_Inventory(1).txt",
    content: `
Interpersonal Dynamics Inventory Lens

**Overview**

The Interpersonal Dynamics Inventory assesses the way individuals express dominance, warmth, expressiveness and control in relationships.  It highlights how people show up in interactions and how they respond under pressure.  Each PI profile exhibits a primary interpersonal pattern (dominance, warmth, expressiveness and control mix), a secondary dynamic that influences behaviour and a stress pattern that emerges when under strain.

**Crosswalk by PI Profile**

| PI Profile | Primary interpersonal pattern | Secondary dynamic | Stress behaviour |
|---|---|---|---|
| **Analyzer** | Low warmth; high control | Withdrawn and critical | Withdraws into critique |
| **Controller** | High dominance; high control | Direct and rule‑oriented | Becomes punitive |
| **Specialist** | Low expressiveness; high control | Reserved, detailed | Silent withdrawal |
| **Strategist** | High dominance; low warmth | Strategic, directive | Overly directive |
| **Venturer** | High dominance; high expressiveness | Bold and provocative | Provokes conflict |
| **Altruist** | High warmth; low dominance | Supportive and accommodating | Over‑accommodates |
| **Captain** | High dominance; moderate expressiveness | Commanding | Intimidates others |
| **Collaborator** | High warmth; moderate expressiveness | Inclusive and relational | Avoids hard talk |
| **Maverick** | High expressiveness; low control | Spontaneous and disruptive | Chaotic provocation |
| **Persuader** | High expressiveness; moderate warmth | Energetic and engaging | Over‑personalises |
| **Promoter** | High expressiveness; low control | Charismatic and enthusiastic | Dramatic escalation |
| **Adapter** | Moderate warmth; moderate control | Balanced and flexible | Over‑adjusts |
| **Craftsman** | Low expressiveness; high control | Methodical and reserved | Retreats into work |
| **Guardian** | Moderate warmth; high control | Protective and structured | Defensive caution |
| **Operator** | Low expressiveness; high control | Direct and practical | Rigid, blunt responses |
| **Individualist** | Low warmth; moderate expressiveness | Independent and expressive | Detaches emotionally |
| **Scholar** | Low expressiveness; high control | Analytical and reserved | Over‑analysis and silence |

**Using this lens**

* High dominance and control (e.g., Controller, Captain) signal a directive interpersonal style.  Be concise, respect boundaries and provide clear rationales to avoid triggering punitive reactions under stress.
* High warmth profiles (e.g., Altruist, Collaborator) emphasise relationships.  Build trust through inclusion and empathy; stress may cause them to over‑accommodate or avoid confrontation.
* High expressiveness with low control (e.g., Maverick, Promoter) yields spontaneous, dramatic interactions.  Channel their energy with structured agendas and set ground rules for discussions.
* Low warmth and high control profiles (e.g., Analyzer, Specialist, Operator) may appear distant but value clarity and competence.  Provide structured communication and avoid forcing social intimacy.
`,
  },
  {
    id: "kirton-adaptioninnovation-inventory-kai-lens",
    lens: "Kirton Adaption\u2013Innovation Inventory (KAI) Lens",
    status: "",
    source: "KAI_Lens(1).txt",
    content: `
Kirton Adaption–Innovation Inventory (KAI) Lens

**Overview**

The KAI assesses an individual’s preferred problem‑solving style along a continuum from adaptor to innovator:

* **Adaptors** prefer structure, improve existing systems, work within rules, minimise risk and value precision and stability.
* **Innovators** challenge assumptions, bend or break rules, pursue radical change, tolerate high risk and value novelty and disruption.

Most people fall somewhere between these poles.  The KAI helps predict conflict in teams, change management challenges and suitability for innovation roles.

**Crosswalk by PI Profile**

| PI Profile | Position on adaptor–innovator continuum | Problem‑solving style | Rule orientation | Change tolerance | Preferred environment | Stress behaviour | Rationale |
|---|---|---|---|---|---|---|---|
| **Analyzer** | Strong Adaptor | Methodical, structured | High | Low | Stable, predictable | Over‑analysis | Precision and structure |
| **Controller** | Very Strong Adaptor | Rule‑driven, procedural | Very High | Very Low | High control | Rigidity | Governance and order |
| **Specialist** | Strong Adaptor | Technical, detail‑driven | High | Low | Deep expertise | Withdrawal | Domain mastery |
| **Strategist** | Moderate Innovator | Conceptual, systems‑level | Low‑Moderate | High | Ambiguous, strategic | Over‑complexity | Vision and logic |
| **Venturer** | Strong Innovator | Fast, disruptive | Very Low | Very High | High risk, high autonomy | Impulsive action | Bold, opportunistic |
| **Altruist** | Moderate Adaptor | People‑first, relational | Moderate | Moderate | Cooperative | Over‑accommodation | Harmony oriented |
| **Captain** | Moderate Innovator | Decisive, outcome‑driven | Low | High | Fast‑moving | Over‑assertive shortcuts | Command and action |
| **Collaborator** | Moderate Adaptor | Consensus‑oriented | Moderate | Low‑Moderate | Harmonious | Avoidance | Relational stability |
| **Maverick** | Very Strong Innovator | Non‑linear, disruptive | Very Low | Very High | Creative chaos | Disorder and provocation | Radical creativity |
| **Persuader** | Moderate Innovator | Social‑creative | Low | High | Dynamic, people‑driven | Emotional reasoning | Influence and improvisation |
| **Promoter** | Strong Innovator | Energetic, improvisational | Very Low | Very High | High energy, high novelty | Impulsive shifts | Expressive disruptor |
| **Adapter** | Balanced Adaptor | Flexible, situational | Moderate | Moderate | Cooperative, stable | Over‑adjustment | Flexible but not disruptive |
| **Craftsman** | Strong Adaptor | Structured, quality‑driven | Very High | Low | Predictable, precise | Perfectionistic delay | Methodical execution |
| **Guardian** | Very Strong Adaptor | Conservative, risk‑averse | Very High | Very Low | Stable, structured | Over‑caution | Stewardship and continuity |
| **Operator** | Strong Adaptor | Practical, process‑driven | High | Low | Routine, clear | Rigid routine | Execution and reliability |
| **Individualist** | Moderate Innovator | Independent, creative | Low | High | Autonomous, flexible | Detached ideation | Creative autonomy |
| **Scholar** | Moderate Adaptor | Analytical, structured | High | Low‑Moderate | Predictable, intellectual | Over‑analysis | Academic structure |

**Implications for teams**

* Adaptor‑dominant teams excel at refinement, quality assurance and process control but may resist radical change.  Introduce innovators to drive transformation while managing conflict through clear boundaries.
* Innovator‑dominant teams generate breakthrough ideas but can create chaos without adaptors to implement and stabilise.  Pair innovators with adaptors to balance novelty and execution.
* Moderate positions (e.g., Adaptors with some innovative tendencies) are useful as bridges.  They can translate between rule‑oriented and disruptive colleagues.
`,
  },
  {
    id: "keirsey-temperament-theory-lens",
    lens: "Keirsey Temperament Theory Lens",
    status: "",
    source: "Keirsey_Temperament_Lens(1).txt",
    content: `
Keirsey Temperament Theory Lens
==============================

**Overview and theoretical background**

David Keirsey’s Temperament Theory builds on the Myers‑Briggs framework but
clusters the 16 types into four broader **temperaments**: **Guardian (SJ)**,
**Artisan (SP)**, **Idealist (NF)** and **Rational (NT)**.  Each
temperament describes core needs, values and preferred interactions:

- **Guardian (SJ)** – grounded organizers who value security, responsibility
  and tradition.  They focus on stability, duty and maintaining order and
  are often practical, dependable and detail‑orientedhttps://www.lifemaphq.com/articles/keirsey-temperament-theory-guide-tips#:~:text=The%20Four%20Keirsey%20Temperaments%20at,a%20Glance.
- **Artisan (SP)** – energetic creators who thrive on hands‑on results,
  improvisation and excitement.  They are spontaneous, playful and enjoy
  working with tangible outcomeshttps://www.lifemaphq.com/articles/keirsey-temperament-theory-guide-tips#:~:text=The%20Four%20Keirsey%20Temperaments%20at,a%20Glance.
- **Idealist (NF)** – empathic visionaries who seek meaning, harmony and
  authentic relationships.  They excel at understanding people’s
  motivations and are driven by personal growth and purposehttps://www.lifemaphq.com/articles/keirsey-temperament-theory-guide-tips#:~:text=The%20Four%20Keirsey%20Temperaments%20at,a%20Glance.
- **Rational (NT)** – analytical strategists who pursue competence,
  independence and innovation.  They are intellectually curious and
  systems‑oriented, with a long‑term focushttps://www.lifemaphq.com/articles/keirsey-temperament-theory-guide-tips#:~:text=The%20Four%20Keirsey%20Temperaments%20at,a%20Glance.

Keirsey’s model translates MBTI preferences into motivational styles and
communication patterns.

**Cross‑framework translation with PI profiles**

The table below aligns PI profiles to Keirsey temperaments based on their
dominant drives and behaviors.  “Primary temperament” reflects the likely
fit; “Motivations” summarize what energizes the profile; “Stress
triggers” describe situations that undermine them; and “Development
actions” suggest ways to grow and collaborate across temperaments.

| PI profile | Primary temperament | Motivations | Stress triggers | Development actions |
|---|---|---|---|---|
| **Analyzer** | Rational (NT) | Mastery of complex problems; logical clarity and systems. | Ambiguity, disorganization, emotional appeals. | Engage in brainstorming and storytelling to complement data; practice empathy in communication. |
| **Controller** | Guardian (SJ) / Rational (NT) | Order, efficiency and achieving results. | Lack of structure, indecision, inefficiency. | Balance rule adherence with adaptability; nurture relationships and patience. |
| **Specialist** | Guardian (SJ) | Accuracy, predictability and respect for expertise. | Rapid change, unclear expectations, disregard for quality. | Embrace flexibility; share knowledge proactively; build trust with openness. |
| **Strategist** | Rational (NT) | Long‑range planning, innovation and influence. | Micromanagement, tactical minutiae, short‑term focus. | Collaborate with guardians for implementation; cultivate patience and listening. |
| **Venturer** | Rational (NT) / Artisan (SP) | Autonomy, risk taking, opportunity creation. | Bureaucracy, routine, slow decision making. | Pair with guardians to ensure sustainability; channel energy into structured initiatives. |
| **Individualist** | Rational (NT) | Independence, intellectual challenge and mastery. | Forced collaboration, superficiality, micromanagement. | Seek common goals; practice diplomacy; appreciate others’ contributions. |
| **Scholar** | Idealist (NF) / Rational (NT) | Learning, imagination and accuracy. | Conflict, rigid hierarchy, rushed decisions. | Advocate for values; find mentors; share vision in tangible ways. |
| **Altruist** | Idealist (NF) / Guardian (SJ) | Helping others, community and harmony. | Selfishness, conflict, neglect of relationships. | Develop assertiveness; set boundaries; align service with strategic goals. |
| **Captain** | Rational (NT) / Idealist (NF) | Leading change, big‑picture influence, recognition. | Being micromanaged, stagnation, lack of recognition. | Cultivate humility; empower team members; maintain follow‑through. |
| **Collaborator** | Idealist (NF) | Team unity, consensus and positive relationships. | Conflict, competition, abrupt decisions. | Strengthen decision‑making skills; be comfortable with disagreement; advocate for needs. |
| **Maverick** | Artisan (SP) / Rational (NT) | Freedom, experimentation and bold innovation. | Restrictive processes, conformity, mundane tasks. | Adopt structure for sustainability; listen to stakeholder feedback; nurture patience. |
| **Persuader** | Artisan (SP) / Idealist (NF) | Social impact, influence and inspiring others. | Isolation, routine, lack of audience. | Ground enthusiasm with realistic planning; build resilience to rejection. |
| **Promoter** | Artisan (SP) / Idealist (NF) | Networking, excitement and creative improvisation. | Administrative detail, criticism, prolonged routine. | Use tools to stay organized; listen to others’ perspectives; commit to follow‑through. |
| **Adapter** | Guardian (SJ) / Idealist (NF) | Balance, cooperation and practical harmony. | Polarized positions, unclear roles, forced competition. | Voice personal opinions; develop expertise; avoid over‑accommodating. |
| **Artisan** | Artisan (SP) / Rational (NT) | Craftsmanship, precision and creativity. | Rigid rules, lack of autonomy, rushed timelines. | Share process updates; invite collaboration; embrace time constraints as creative prompts. |
| **Guardian** | Guardian (SJ) | Stability, duty and preserving traditions. | Rapid change, ambiguous rules, unpredictability. | Embrace incremental innovation; encourage diverse perspectives; recognize when to loosen control. |
| **Operator** | Guardian (SJ) | Steady contribution, tangible results and support. | High uncertainty, conflict, pressure to lead. | Advocate for own needs; explore new challenges; build confidence in decision making. |

**Practical implications**

Understanding Keirsey temperaments helps teams appreciate underlying
motivations.  Guardians (SJ) like Specialists and Operators value
reliability and clear expectations, while Artisans (SP) like Mavericks
crave spontaneity and hands‑on engagement.  Rationals (NT) such as
Analyzers and Strategists prefer strategic thinking and autonomy,
whereas Idealists (NF) like Collaborators and Altruists prioritize
relationships and meaning.  When forming teams or coaching employees,
balance temperaments to ensure both innovation and stability, and tailor
communication to the core needs of each temperament.
`,
  },
  {
    id: "kolbe-a-index-conation-lens",
    lens: "Kolbe A Index (Conation) Lens",
    status: "",
    source: "Kolbe_A_Index(1).txt",
    content: `
Kolbe A Index (Conation) Lens

**Overview**

The Kolbe A Index measures conative strengths—how people naturally take action.  It evaluates four Action Modes on a 1–10 scale, which we translate qualitatively here:

1. **Fact Finder** – gathers and shares information; ranges from simplifying to explaining.
2. **Follow Thru** – organises, structures and systematises; ranges from adapting to systematising.
3. **Quick Start** – deals with risk, uncertainty and change; ranges from stabilising to innovating.
4. **Implementor** – handles space, tangibility and physical solutions; ranges from envisioning to building.

Individuals typically have a dominant mode that drives their behaviour, along with patterns that emerge under stress.  The table below summarises each PI profile’s conative pattern.

**Crosswalk by PI Profile**

| PI Profile | Fact Finder | Follow Thru | Quick Start | Implementor | Primary conative mode | Stress pattern | Rationale |
|---|---|---|---|---|---|---|---|
| **Analyzer** | High | High | Low | Low | Systematise | Over‑structuring | Precision and structure |
| **Controller** | High | Very High | Very Low | Low | Enforce systems | Rigidity | Rules and order |
| **Specialist** | High | High | Low | Low‑Moderate | Deep dive + structure | Over‑focus | Domain mastery |
| **Strategist** | High | Moderate | High | Low | Vision + logic | Over‑complexity | Systems and innovation |
| **Venturer** | Low | Low | Very High | Low | Innovate | Impulsive risk | Bold, fast action |
| **Altruist** | Moderate | Moderate | Low‑Moderate | Low | Adapt | Over‑accommodation | People‑first execution |
| **Captain** | Moderate | Moderate | High | Low | Drive + innovate | Over‑assertive shortcuts | Command and action |
| **Collaborator** | Moderate | Moderate | Low‑Moderate | Low | Adapt + harmonise | Avoidance | Relational execution |
| **Maverick** | Low | Low | Very High | Low | Disruptive innovation | Chaos | Creative, non‑linear action |
| **Persuader** | Low‑Moderate | Low | High | Low | Social innovation | Over‑promising | Influence and improvisation |
| **Promoter** | Low | Low | Very High | Low | Activate + innovate | Impulsive shifts | Energetic improvisation |
| **Adapter** | Moderate | Moderate | Moderate | Low | Flexible adaptation | Over‑adjustment | Situational execution |
| **Craftsman** | High | Very High | Very Low | Moderate | Systematise + perfect | Perfectionistic delay | Quality and structure |
| **Guardian** | High | Very High | Very Low | Low‑Moderate | Preserve systems | Over‑caution | Stewardship and stability |
| **Operator** | Moderate | High | Low | Moderate | Execute reliably | Rigid routine | Process and consistency |
| **Individualist** | Moderate | Low | High | Low | Innovate independently | Detached improvisation | Creative autonomy |
| **Scholar** | Very High | High | Low | Low | Analyse + structure | Over‑analysis | Academic rigour |

**Practical implications**

* High Fact Finder and Follow Thru (e.g., Analyzer, Controller, Scholar) thrive in roles requiring research, compliance and planning.  They may struggle with rapid innovation or ambiguous tasks.
* High Quick Start (e.g., Venturer, Maverick, Promoter) energises people who embrace change and uncertainty.  Provide them with opportunities for innovation but pair them with colleagues who ensure follow‑through.
* Moderate, balanced patterns (e.g., Adapter) indicate versatility.  These individuals can fill gaps and coordinate across teams but need clarity on priorities to avoid over‑stretching.
* Stress patterns reveal risk: Over‑structuring can lead to bureaucracy; impulsive risk may result in chaos; over‑adjustment can dilute effectiveness.  Awareness helps teams plan complementary collaborations.
`,
  },
  {
    id: "leadership-circle-profile-lcp-lens",
    lens: "Leadership Circle Profile (LCP) Lens",
    status: "",
    source: "Leadership_Circle_Profile_Lens(1).txt",
    content: `
Leadership Circle Profile (LCP) Lens
===================================

**Overview**

The Leadership Circle Profile (LCP) integrates leadership competencies with underlying reactive tendencies.  It measures two primary domains: **Creative Competencies** and **Reactive Tendencies**https://fredriklyhagen.com/leadership-circle-profile/#:~:text=Your%20impact%20as%20a%20leader,your%20impact%20as%20a%20leader.  

* **Creative Competencies:** These include relating, self‑awareness, authenticity, systems thinking and achieving.  Creative leaders are purpose‑driven, courageous and engage others through vision and collaborationhttps://fredriklyhagen.com/leadership-circle-profile/#:~:text=Your%20impact%20as%20a%20leader,your%20impact%20as%20a%20leader.
* **Reactive Tendencies:** These are patterns driven by fear or a need for approval, control or protection.  Reactive leaders may become compliant (seeking approval), controlling (imposing their will) or protective (withdrawn)https://fredriklyhagen.com/leadership-circle-profile/#:~:text=Your%20impact%20as%20a%20leader,your%20impact%20as%20a%20leader.  
* High creative scores correlate strongly with leadership effectiveness, whereas reactive styles often limit potentialhttps://fredriklyhagen.com/leadership-circle-profile/#:~:text=The%20top%20half%20of%20the,contribute%20to%20a%20leader%E2%80%99s%20effectiveness.

The LCP helps leaders understand the balance between creative and reactive patterns and provides a roadmap for development.

**Creative vs. Reactive Crosswalk by PI Profile**

This table estimates where each PI profile naturally sits on the creative–reactive continuum and highlights predominant reactive tendencies.  Individuals may shift along the spectrum depending on context and development.

| PI Profile | Likely creative orientation | Common reactive tendencies | Notes |
|---|---|---|---|
| **Analyzer** | Creative – Systems thinking and analytical rigour | Compliant (seeking approval by perfecting analysis) | Focus on integrating analysis with courageous decision‑making. |
| **Controller** | Reactive – Controlling | Controlling (overly directive, fear of losing control) | Development involves fostering trust and empowering others. |
| **Specialist** | Reactive – Protective | Protective (withdraws, plays safe) | Growth comes from stepping into relational and visionary leadership. |
| **Strategist** | Creative – Systems & Purpose | Controlling when stressed | Leverage strategic thinking while practising openness and shared leadership. |
| **Venturer** | Creative – Achieving | Controlling or impulsive (overdrive) | Channel drive into purpose and collaboration; temper impulsivity. |
| **Altruist** | Creative – Relating | Compliant (over‑accommodating) | Strengthen boundaries while maintaining empathy. |
| **Captain** | Creative – Achieving | Controlling (directive) | Balance charisma with listening and delegation. |
| **Collaborator** | Creative – Relating | Compliant (conflict avoidance) | Practice courageous conversations and assertiveness. |
| **Maverick** | Creative – Authenticity | Controlling or protective when resisted | Harness creativity while building trust and systems thinking. |
| **Persuader** | Creative – Relating/Achieving | Compliant (approval seeking) | Develop authentic influence and clear boundaries. |
| **Promoter** | Creative – Achieving/Relating | Compliant or controlling under pressure | Focus on substance over style and empower others. |
| **Adapter** | Reactive – Protective/Compliant | Withdraws or over‑accommodates | Build confidence to contribute ideas and challenge the status quo. |
| **Craftsman** | Reactive – Protective | Perfectionistic and risk‑averse | Step into more visionary, relational leadership. |
| **Guardian** | Reactive – Protective | Overly cautious and compliant | Encourage risk‑taking and authenticity while maintaining stewardship. |
| **Operator** | Reactive – Controlling/Protective | Micromanages and resists change | Shift towards trusting others and embracing systems thinking. |
| **Individualist** | Creative – Authenticity & Vision | Controlling when challenged | Integrate independence with collaboration and courage. |
| **Scholar** | Creative – Systems & Relating | Protective (withdrawn) | Engage more visibly and share insights with courage. |

**Using this lens**

* Encourage leaders to cultivate creative competencies—authenticity, systems thinking, relational skills and purpose—rather than relying on reactive patterns.  Creative leadership correlates with effectiveness and sustainable resultshttps://fredriklyhagen.com/leadership-circle-profile/#:~:text=The%20top%20half%20of%20the,contribute%20to%20a%20leader%E2%80%99s%20effectiveness.
* Identify reactive tendencies and practice shifting them.  For example, a controlling Controller can practise delegating and empowering; a compliant Collaborator can practise asserting a viewpoint.
* Use 360° feedback and coaching to raise awareness of how others perceive one’s creative and reactive behaviours.  Small shifts (e.g., listening more, sharing vision) can significantly increase leadership impact.`,
  },
  {
    id: "leadership-versatility-index-lvi-lens",
    lens: "Leadership Versatility Index (LVI) Lens",
    status: "",
    source: "Leadership_Versatility_Index_Lens(1).txt",
    content: `
Leadership Versatility Index (LVI) Lens
======================================

**Overview**

The Leadership Versatility Index (LVI) assesses a leader’s capacity to balance opposing behaviours.  It measures two complementary pairs of dimensions: **Forceful vs. Enabling** and **Strategic vs. Operational**www.metaskills.com/wp-content/uploads/PDF/LVI2.1_PSample.pdf.  The goal is versatility—adapting behaviour according to the situation rather than overdoing or underdoing one sidewww.metaskills.com/wp-content/uploads/PDF/LVI2.1_PSample.pdf.

* **Forceful vs. Enabling:** Forceful leaders influence by taking charge, making decisions and driving performance.  Enabling leaders influence by empowering, developing and supporting otherswww.metaskills.com/wp-content/uploads/PDF/LVI2.1_PSample.pdf.
* **Strategic vs. Operational:** Strategic leaders focus on long‑term direction, vision and external alignment.  Operational leaders emphasise execution, processes and day‑to‑day detailswww.metaskills.com/wp-content/uploads/PDF/LVI2.1_PSample.pdf.
* Overdoing any dimension leads to lopsided leadership (e.g., overly forceful can become authoritarian; overly enabling may lack direction).  Versatility involves balancing each pair and adapting as context changeswww.metaskills.com/wp-content/uploads/PDF/LVI2.1_PSample.pdf.

**LVI Crosswalk by PI Profile**

The table below suggests how each PI profile tends to distribute their influence across the four quadrants.  The primary column indicates the dominant quadrant; the secondary column captures a balancing dimension.  Development suggestions are included.

| PI Profile | Dominant quadrant | Secondary quadrant | Development focus |
|---|---|---|---|
| **Analyzer** | Enabling–Strategic | Enabling–Operational | Balance analysis with decisive action and clarity of direction. |
| **Controller** | Forceful–Operational | Forceful–Strategic | Develop enabling behaviours and strategic vision to avoid micromanagement. |
| **Specialist** | Enabling–Strategic | Enabling–Operational | Step into forceful behaviours when needed and communicate vision more assertively. |
| **Strategist** | Forceful–Strategic | Enabling–Strategic | Incorporate enabling practices such as coaching and develop operational discipline. |
| **Venturer** | Forceful–Strategic | Forceful–Operational | Enhance enabling skills (delegation, development) and attend to operational consistency. |
| **Altruist** | Enabling–Operational | Enabling–Strategic | Build forceful behaviours (clear direction) and strategic perspective. |
| **Captain** | Forceful–Strategic | Forceful–Operational | Cultivate enabling practices (listening, empowerment) and emphasise operational discipline. |
| **Collaborator** | Enabling–Operational | Enabling–Strategic | Develop forceful behaviours to drive decisions and strengthen strategic thinking. |
| **Maverick** | Forceful–Strategic | Forceful–Operational | Balance with enabling (supporting others) and operational follow‑through. |
| **Persuader** | Forceful–Strategic | Enabling–Strategic | Strengthen operational follow‑through and avoid over‑reliance on charisma. |
| **Promoter** | Forceful–Operational | Enabling–Operational | Build strategic thinking and avoid over‑controlling or over‑influencing. |
| **Adapter** | Enabling–Operational | Enabling–Strategic | Step into forceful behaviours and contribute to strategic discussions. |
| **Craftsman** | Enabling–Operational | Enabling–Strategic | Develop forceful behaviours and strategic perspective to complement technical mastery. |
| **Guardian** | Enabling–Operational | Enabling–Strategic | Increase forcefulness in decision‑making and embrace strategic thinking. |
| **Operator** | Forceful–Operational | Enabling–Operational | Build strategic vision and enabling practices such as coaching. |
| **Individualist** | Forceful–Strategic | Enabling–Strategic | Balance independence with enabling and operational discipline. |
| **Scholar** | Enabling–Strategic | Enabling–Operational | Cultivate forceful leadership when needed and connect strategy to operations. |

**Using this lens**

* Use feedback to identify where you overdo or underdo behaviours.  A Controller may overdo forceful behaviours, while an Altruist may underdo them.  Practise flexing into the opposite behaviour when appropriate.
* Consider the strategic–operational balance.  Strategists and Venturers may overlook operational details; Operators may neglect long‑term direction.  Pair people or schedule dedicated time to address the less‑preferred side.
* Encourage leaders to adopt a situational approach, moving along the forceful/enabling and strategic/operational axes according to team maturity, task complexity and time pressure.`,
  },
  {
    id: "learning-design-style-nonvark-lens",
    lens: "Learning Design Style (Non\u2011VARK) Lens",
    status: "",
    source: "Learning_Design_Style(1).txt",
    content: `
Learning Design Style (Non‑VARK) Lens

**Overview**

This lens uses David Kolb’s Experiential Learning Cycle to map how individuals prefer to learn in a workplace context.  Kolb describes four learning styles, each combining two modes—concrete experience (CE), reflective observation (RO), abstract conceptualisation (AC) and active experimentation (AE):

1. **Converger (AC + AE)** – analytical then practical: “tell me the model, then let me test it.”
2. **Diverger (CE + RO)** – people‑focused and imaginative: “show me the human angle and possibilities.”
3. **Assimilator (AC + RO)** – abstract and structured: “give me the theory and framework.”
4. **Accommodator (CE + AE)** – hands‑on and trial‑and‑error: “let me try it and learn by doing.”

Each PI profile tends to favour a dominant learning style and a secondary mode.  Stress behaviours reveal how learning preferences change under pressure.

**Crosswalk by PI Profile**

| PI Profile | Dominant style | Secondary style | Workplace learning preference | Stress‑mode behaviour | Rationale |
|---|---|---|---|---|---|
| **Analyzer** | Assimilator | Converger | Models → frameworks → structured practice | Over‑analysis, slow iteration | Precision and structure |
| **Controller** | Converger | Assimilator | Clear rules → controlled practice | Rigid adherence to procedure | Rule‑based mastery |
| **Specialist** | Assimilator | Converger | Deep technical frameworks → applied mastery | Narrow focus | Domain depth |
| **Strategist** | Assimilator | Diverger | Conceptual models → scenario planning | Over‑theorising | Systems thinking |
| **Venturer** | Accommodator | Diverger | Rapid experiments → real‑world tests | Impulsive action | Fast, experiential learning |
| **Altruist** | Diverger | Assimilator | Stories → reflection → group learning | Over‑accommodation | People‑first reflection |
| **Captain** | Converger | Accommodator | Action → results → iteration | Over‑decisiveness | Outcome‑driven learning |
| **Collaborator** | Diverger | Accommodator | Group reflection → shared meaning | Avoidance | Relational learning |
| **Maverick** | Diverger | Accommodator | Creative exploration → hands‑on ideation | Chaotic experimentation | Creative, non‑linear |
| **Persuader** | Diverger | Accommodator | Social learning → role‑play → live practice | Emotional reasoning | Influence orientation |
| **Promoter** | Accommodator | Diverger | Hands‑on → energetic → social learning | Impulsive action | Improvisational learning |
| **Adapter** | Diverger | Assimilator | Group reflection → flexible application | Withdrawal | Flexible, relational |
| **Craftsman** | Converger | Assimilator | Step‑by‑step → standards → practice | Perfectionistic delay | Quality and precision |
| **Guardian** | Assimilator | Converger | Clear frameworks → predictable practice | Over‑caution | Stability and structure |
| **Operator** | Converger | Accommodator | Hands‑on → process → repetition | Rigid routine | Execution learning |
| **Individualist** | Diverger | Assimilator | Creative reflection → conceptual synthesis | Detached ideation | Independent, creative |
| **Scholar** | Assimilator | Converger | Theory → structure → rigorous practice | Over‑analysis | Academic, methodical |

**Using this lens**

* Tailor training: Convergers need clear explanations followed by hands‑on practice; Divergers respond to stories and examples; Assimilators crave theory and structure; Accommodators require experiential, trial‑and‑error opportunities.
* Under stress, learners may exaggerate their dominant style (e.g., a Converger may become inflexibly procedural) or retreat into avoidance.  Provide coaching to help them re‑engage productively.
* Recognise that secondary styles moderate learning: a Diverger‑Accommodator (Promoter) learns best through social, hands‑on experiences, whereas a Diverger‑Assimilator (Adapter) benefits from reflective group discussions grounded in theory.
`,
  },
  {
    id: "lencioni-team-dynamics-five-dysfunctions-lens",
    lens: "Lencioni Team Dynamics (Five Dysfunctions) Lens",
    status: "",
    source: "Lencioni_Team_Dynamics_Lens(1).txt",
    content: `
Lencioni Team Dynamics (Five Dysfunctions) Lens
==============================================

**Overview**

Patrick Lencioni’s Five Dysfunctions of a Team model identifies common obstacles that prevent teams from achieving high performance.  The dysfunctions build on each other in a pyramid: absence of trust, fear of conflict, lack of commitment, avoidance of accountability and inattention to resultshttps://omtglobal.com/5-dysfunctions-of-a-team/#:~:text=Let%E2%80%99s%20get%20real%20about%20teamwork,lead%20to%20a%20dysfunctional%20team.  Building a healthy team requires addressing each layer:

1. **Absence of Trust:** Team members are unwilling to be vulnerable, admit mistakes or ask for help.  This stems from a fear of being openhttps://omtglobal.com/5-dysfunctions-of-a-team/#:~:text=Let%E2%80%99s%20get%20real%20about%20teamwork,lead%20to%20a%20dysfunctional%20team.
2. **Fear of Conflict:** Without trust, teams avoid passionate debate and constructive conflict.  Decisions are watered down or unresolvedhttps://omtglobal.com/5-dysfunctions-of-a-team/#:~:text=Let%E2%80%99s%20get%20real%20about%20teamwork,lead%20to%20a%20dysfunctional%20team.
3. **Lack of Commitment:** Without airing disagreements, people rarely buy into decisions.  Ambiguity remains and meetings are ineffectivehttps://omtglobal.com/5-dysfunctions-of-a-team/#:~:text=Let%E2%80%99s%20get%20real%20about%20teamwork,lead%20to%20a%20dysfunctional%20team.
4. **Avoidance of Accountability:** When people are not committed, they avoid holding themselves and peers accountable.  Poor behaviours go unaddressedhttps://omtglobal.com/5-dysfunctions-of-a-team/#:~:text=Let%E2%80%99s%20get%20real%20about%20teamwork,lead%20to%20a%20dysfunctional%20team.
5. **Inattention to Results:** Individuals put their own status or departmental goals ahead of collective resultshttps://omtglobal.com/5-dysfunctions-of-a-team/#:~:text=Let%E2%80%99s%20get%20real%20about%20teamwork,lead%20to%20a%20dysfunctional%20team.

High‑performing teams build trust, engage in healthy conflict, commit to decisions, hold each other accountable and focus on collective outcomeshttps://omtglobal.com/5-dysfunctions-of-a-team/#:~:text=Let%E2%80%99s%20get%20real%20about%20teamwork,lead%20to%20a%20dysfunctional%20team.

**Team Dynamics Crosswalk by PI Profile**

The table below highlights likely dysfunction risks and strengths for each PI profile.  Use these tendencies to anticipate challenges and design interventions.

| PI Profile | Likely strengths | Potential dysfunction risks | Notes |
|---|---|---|---|
| **Analyzer** | Brings objective evaluation and structure | May avoid conflict and delay commitment due to over‑analysis | Encourage structured debate and time‑boxed decision making. |
| **Controller** | Drives accountability and results | May create fear of conflict and suppress others’ input | Foster psychological safety and invite dissenting opinions. |
| **Specialist** | Provides depth and expertise | May hesitate to speak up or commit if trust is low | Create safe spaces for sharing expertise and concerns. |
| **Strategist** | Aligns on vision and strategy | May become disengaged if others avoid conflict | Encourage robust discussions and ensure buy‑in to decisions. |
| **Venturer** | Encourages risk‑taking and goals | May pursue results at the expense of trust or accountability | Balance ambition with openness and follow‑through. |
| **Altruist** | Builds trust and cohesion | May avoid conflict and accountability to preserve harmony | Normalise constructive disagreement and set clear expectations. |
| **Captain** | Inspires commitment and accountability | May silence dissent and drive fear of conflict | Model vulnerability and invite diverse perspectives. |
| **Collaborator** | Promotes trust and inclusion | May struggle with commitment and accountability | Help collaborators move from discussion to decision and follow‑up. |
| **Maverick** | Challenges complacency and stimulates debate | May create conflict without building trust or commitment | Pair with trust‑builders and emphasise shared goals. |
| **Persuader** | Generates enthusiasm and commitment | May gloss over conflict and accountability | Ensure persuasive leaders encourage candid debate and own outcomes. |
| **Promoter** | Maintains attention on results and engagement | May neglect follow‑through and accountability | Set clear metrics and check‑ins for promoters. |
| **Adapter** | Supports trust and mediation | May avoid conflict and commitment | Provide structured decision processes and clear accountability frameworks. |
| **Craftsman** | Ensures quality and accountability | May delay decisions due to perfectionism | Encourage timely decisions and celebrate progress over perfection. |
| **Guardian** | Builds trust and stability | May resist conflict and change, hindering commitment | Create safe frameworks for airing concerns and encourage incremental change. |
| **Operator** | Provides discipline and accountability | May enforce rules without building trust or engagement | Pair with trust‑builders to foster safety before accountability. |
| **Individualist** | Encourages candid debate and innovation | May withdraw from commitment and accountability | Clarify expectations and embed peer accountability mechanisms. |
| **Scholar** | Promotes learning and analytical debate | May avoid conflict and delay commitment | Use structured discussion techniques and clear decision criteria. |

**Using this lens**

* Diagnose which dysfunction is most pronounced in your team and address it starting from the bottom.  For instance, if people don’t speak up (fear of conflict), invest in vulnerability‑based trust before focusing on accountability.
* Tailor interventions to individual styles.  Controllers may need to intentionally invite feedback; Altruists may need support to engage in healthy conflict.  Use the crosswalk to pre‑empt common pitfalls.
* Celebrate collective wins and align incentives to reinforce attention to team results rather than individual status or departmental silos.`,
  },
  {
    id: "lominger-leadership-architect-competency-lens",
    lens: "Lominger Leadership Architect Competency Lens",
    status: "",
    source: "Lominger_Competency_Lens(1).txt",
    content: `
Lominger Leadership Architect Competency Lens
============================================

**Overview**

The Lominger Leadership Architect (now part of Korn Ferry) is a competency framework comprising 67 behaviours grouped into factors and clusters.  The factors include strategic skills, operating skills, courage, energy & drive, organisational positioning skills, and personal/interpersonal skillshttps://www.deel.com/blog/lominger-competencies/#:~:text=Factor%201%3A%20Strategic%20skills.  Each cluster consists of specific competencies; for example, the Strategic Skills factor includes business acumen, decision quality, creativity and strategic agilityhttps://www.deel.com/blog/lominger-competencies/#:~:text=Factor%201%3A%20Strategic%20skills.  By assessing individuals across these competencies, organisations can identify strengths and gaps and design targeted development.

**Key Competency Clusters**

* **Strategic Skills:** Business acumen, decision quality, creativity, strategic agility, managing vision & purposehttps://www.deel.com/blog/lominger-competencies/#:~:text=Factor%201%3A%20Strategic%20skills.
* **Operating Skills:** Dealing with ambiguity, direct reports, organising, planning, time managementhttps://www.deel.com/blog/lominger-competencies/#:~:text=Factor%201%3A%20Strategic%20skills.
* **Courage:** Conflict management, confrontation, managerial couragehttps://www.deel.com/blog/lominger-competencies/#:~:text=Factor%201%3A%20Strategic%20skills.
* **Energy & Drive:** Action oriented, drive for results, perseverance, composurehttps://www.deel.com/blog/lominger-competencies/#:~:text=Factor%201%3A%20Strategic%20skills.
* **Organisational Positioning:** Political savvy, negotiating, presentation skillshttps://www.deel.com/blog/lominger-competencies/#:~:text=Factor%201%3A%20Strategic%20skills.
* **Personal & Interpersonal Skills:** Self‑knowledge, listening, approachability, integrity, customer focus, humourhttps://www.deel.com/blog/lominger-competencies/#:~:text=Factor%201%3A%20Strategic%20skills.

**Competency Crosswalk by PI Profile**

The table below highlights which Lominger clusters are typically strong or developmental for each PI profile.  Use this to focus coaching and development efforts.

| PI Profile | Strong competency clusters | Development opportunities | Notes |
|---|---|---|---|
| **Analyzer** | Strategic skills (business acumen, decision quality), Operating skills (organising, planning), Personal skills (integrity, listening) | Courage (conflict management), Organisational positioning (presentation, negotiation) | Analyzers excel at analysis and planning but may shy away from conflict or visibility. |
| **Controller** | Operating skills (organising, time management), Courage (managerial courage), Energy & drive (action oriented) | Personal skills (approachability), Organisational positioning (political savvy) | Controllers drive execution but need to build empathy and political awareness. |
| **Specialist** | Personal skills (technical learning, integrity), Strategic skills (creativity within domain) | Organisational positioning (influence), Courage (conflict management) | Specialists have deep expertise but benefit from broader influence and assertiveness. |
| **Strategist** | Strategic skills (vision & agility), Personal skills (self‑knowledge), Organisational positioning (political savvy) | Energy & drive (speed), Operating skills (delegation) | Strategists think long‑term and navigate politics but need to drive action and delegate effectively. |
| **Venturer** | Energy & drive (action oriented, drive for results), Courage (managerial courage), Strategic skills (creativity) | Operating skills (planning), Personal skills (listening) | Venturers are bold and creative but may need structure and patience. |
| **Altruist** | Personal skills (listening, approachability), Organisational positioning (customer focus) | Courage (conflict management), Strategic skills (decision quality) | Altruists excel at relationships but must make tough decisions and handle conflict directly. |
| **Captain** | Energy & drive (drive for results), Courage (conflict management), Organisational positioning (presentation skills) | Personal skills (approachability), Strategic skills (creativity) | Captains command attention but benefit from empathy and creative strategy. |
| **Collaborator** | Personal skills (listening, humour), Organisational positioning (political savvy) | Courage (managerial courage), Strategic skills (decision making) | Collaborators build relationships but may avoid confrontation or decisive leadership. |
| **Maverick** | Strategic skills (creativity), Energy & drive, Courage | Operating skills (planning), Organisational positioning (consistency) | Mavericks innovate but need to follow through and work through organisational channels. |
| **Persuader** | Organisational positioning (presentation, negotiation), Personal skills (approachability) | Strategic skills (analysis), Operating skills (detail orientation) | Persuaders influence effectively but must support arguments with data and follow‑through. |
| **Promoter** | Organisational positioning (presentation), Energy & drive | Operating skills (organising), Strategic skills (decision quality) | Promoters rally support but need structure and discipline. |
| **Adapter** | Personal skills (listening, approachability), Operating skills (organising) | Courage (assertiveness), Strategic skills (vision) | Adapters support others well but should develop confidence to propose strategic ideas. |
| **Craftsman** | Strategic skills (quality orientation), Operating skills (planning), Personal skills (integrity) | Organisational positioning (networking), Energy & drive (speed) | Craftsmen deliver high‑quality work but may need to network and speed up decision cycles. |
| **Guardian** | Personal skills (integrity, customer focus), Operating skills (organising) | Courage (risk taking), Strategic skills (agility) | Guardians provide reliability but may resist change and need to embrace agility. |
| **Operator** | Operating skills (planning, organising), Personal skills (integrity) | Strategic skills (vision), Organisational positioning (political savvy) | Operators execute well but need to think strategically and navigate organisational politics. |
| **Individualist** | Strategic skills (creativity, vision), Personal skills (self‑knowledge) | Organisational positioning (negotiation), Operating skills (structure) | Individualists innovate but need structure and influence. |
| **Scholar** | Strategic skills (problem solving), Personal skills (learning, integrity) | Energy & drive (speed), Organisational positioning (influence) | Scholars excel at thought leadership but may need to act faster and build networks. |

**Using this lens**

* Use competency strengths to assign tasks—e.g., have Venturers lead growth initiatives (drive for results) and Altruists handle customer relationships (listening, empathy).
* Identify development opportunities and design training or coaching accordingly.  For instance, help Controllers build relational skills or support Specialists in gaining influence.
* Recognise that nobody excels at all 67 competencies.  Balanced teams distribute competencies across members, reducing blind spots and reliance on any one individual.`,
  },
  {
    id: "maslach-burnout-inventory-mbi-lens",
    lens: "Maslach Burnout Inventory (MBI) Lens",
    status: "",
    source: "Maslach_Burnout_Inventory_Lens.txt",
    content: `
Maslach Burnout Inventory (MBI) Lens
===================================

**Overview**

The Maslach Burnout Inventory (MBI) is a widely used tool to assess burnout.  It measures three dimensions:

* **Emotional Exhaustion:** Feelings of being emotionally overextended and depletedhttps://maslachburnout.com/blog/maslach-burnout-inventory-mbi-symptoms-scoring-and-how-it-works#:~:text=The%20Maslach%20Burnout%20Inventory%2C%20often,years%2C%20especially%20with%20the%20increasing.
* **Depersonalization (also called Cynicism):** An unfeeling and impersonal response toward recipients of one’s service, care or instructionhttps://maslachburnout.com/blog/maslach-burnout-inventory-mbi-symptoms-scoring-and-how-it-works#:~:text=The%20Maslach%20Burnout%20Inventory%2C%20often,years%2C%20especially%20with%20the%20increasing.
* **Personal Accomplishment:** A sense of competence and achievement in one’s work; low scores on this dimension indicate reduced accomplishmenthttps://maslachburnout.com/blog/maslach-burnout-inventory-mbi-symptoms-scoring-and-how-it-works#:~:text=The%20Maslach%20Burnout%20Inventory%2C%20often,years%2C%20especially%20with%20the%20increasing.

The MBI consists of a series of statements rated by frequency (from “never” to “every day”).  Scores in each dimension are interpreted as high, moderate or low to diagnose burnout riskhttps://maslachburnout.com/blog/maslach-burnout-inventory-mbi-symptoms-scoring-and-how-it-works#:~:text=depersonalization%2C%20and%20personal%20accomplishment,here%20is%20a%20simple%20table.  High emotional exhaustion and depersonalization combined with low personal accomplishment indicate severe burnouthttps://maslachburnout.com/blog/maslach-burnout-inventory-mbi-symptoms-scoring-and-how-it-works#:~:text=depersonalization%2C%20and%20personal%20accomplishment,here%20is%20a%20simple%20table.

**Burnout Risk Crosswalk by PI Profile**

This table suggests which burnout dimensions each PI profile is most susceptible to and offers preventative strategies.

| PI Profile | Likely burnout dimension | Contributing factors | Prevention strategies |
|---|---|---|---|
| **Analyzer** | Emotional exhaustion | Overwork, constant analysis and perfectionism | Set realistic timelines, prioritise tasks, schedule breaks and celebrate incremental progress. |
| **Controller** | Depersonalization | Pressure to deliver and control everything can lead to cynicism toward others | Delegate, build trust and practice empathy to stay connected. |
| **Specialist** | Personal accomplishment | Deep but narrow work may go unrecognised, leading to reduced sense of accomplishment | Ensure recognition of expertise, rotate tasks to broaden impact and connect work to wider mission. |
| **Strategist** | Emotional exhaustion | Strategic roles may involve chronic complexity and long hours | Practice boundary setting, enlist support and take strategic pauses. |
| **Venturer** | Emotional exhaustion | High risk from constant urgency and risk‑taking | Build rest into cycles, share responsibility and reflect on successes. |
| **Altruist** | Depersonalization / Low personal accomplishment | Self‑sacrifice and emotional labour may result in cynicism or feeling undervalued | Practise self‑care, set boundaries and seek feedback on contributions. |
| **Captain** | Emotional exhaustion | Constant drive to lead and deliver results | Delegate effectively, schedule downtime and celebrate team wins. |
| **Collaborator** | Low personal accomplishment | Focus on team harmony may obscure personal contributions | Set personal goals and seek acknowledgment for facilitation work. |
| **Maverick** | Depersonalization | Frustration with resistance to change can lead to cynicism | Cultivate patience, listen to others and celebrate small wins. |
| **Persuader** | Emotional exhaustion | Continuous influencing and relationship management | Manage energy, take breaks from people‑intensive tasks and prioritise self‑care. |
| **Promoter** | Depersonalization / Emotional exhaustion | Constant public presence and pressure to deliver can create cynicism | Schedule quiet recovery time and ensure authentic connections. |
| **Adapter** | Low personal accomplishment | Support roles may lack recognition | Advocate for role impact and rotate into visible contributions. |
| **Craftsman** | Emotional exhaustion | High quality standards can lead to overwork | Practise good enough standards, set boundaries and plan recovery periods. |
| **Guardian** | Depersonalization | Guarding stability can become emotionally draining | Build support networks, rotate responsibilities and practice gratitude. |
| **Operator** | Emotional exhaustion | Steady operations often entail repetitive stress | Vary tasks, implement ergonomic practices and take regular breaks. |
| **Individualist** | Depersonalization | Isolation and independent work can lead to detachment | Engage with others intentionally, seek feedback and connect work to purpose. |
| **Scholar** | Low personal accomplishment | Academic work may lack immediate feedback | Celebrate milestones, share knowledge widely and seek collaboration. |

**Using this lens**

* Use the MBI to regularly assess wellbeing in teams.  High scores in emotional exhaustion or depersonalization warrant early interventions such as workload adjustments, role clarification and recovery practices.
* Encourage protective factors such as supportive relationships, recognition and autonomy.  Align tasks with personal strengths and values to bolster personal accomplishment.
* Recognise that burnout is not only an individual issue but also systemic.  Leaders should address workload, role clarity and organisational culture to prevent burnout across all profiles.`,
  },
  {
    id: "myersbriggs-type-indicator-mbti-lens",
    lens: "Myers\u2011Briggs Type Indicator (MBTI) Lens",
    status: "",
    source: "MBTI_Lens.txt",
    content: `
Myers‑Briggs Type Indicator (MBTI) Lens
======================================

**Overview and theoretical background**

The **Myers‑Briggs Type Indicator (MBTI)** is a popular personality
framework that describes preferences across four dichotomies: **Extraversion
vs. Introversion**, **Sensing vs. Intuition**, **Thinking vs. Feeling**, and
**Judging vs. Perceiving**.  It is based on Carl Jung’s theories of
psychological types and was developed by Katharine Briggs and Isabel Myers.
The MBTI does not measure ability; instead it captures how individuals
prefer to focus their attention, take in information, make decisions and
organize their liveshttps://www.uschamber.com/co/grow/thrive/myers-briggs-type-indicator#:~:text=Extroversion%20%28E%29%20.

- **Extraversion (E) vs. Introversion (I)** – Extraverts direct energy
  outward, enjoy interaction and are recharged by socializing, whereas
  introverts focus inward and prefer solitude and reflectionhttps://www.uschamber.com/co/grow/thrive/myers-briggs-type-indicator#:~:text=Extroversion%20%28E%29%20.
- **Sensing (S) vs. Intuition (N)** – Sensors trust concrete data and
  present realities; intuitives focus on patterns, possibilities and
  abstractionshttps://www.uschamber.com/co/grow/thrive/myers-briggs-type-indicator#:~:text=Extroversion%20%28E%29%20.
- **Thinking (T) vs. Feeling (F)** – Thinkers make decisions using logic
  and objective criteria; feelers consider people and valueshttps://www.uschamber.com/co/grow/thrive/myers-briggs-type-indicator#:~:text=Extroversion%20%28E%29%20.
- **Judging (J) vs. Perceiving (P)** – Judging types prefer structure,
  planning and closure; perceiving types are spontaneous and open‑endedhttps://www.uschamber.com/co/grow/thrive/myers-briggs-type-indicator#:~:text=Extroversion%20%28E%29%20.

Individuals are described by a four‑letter type (e.g., INTJ) representing
their preference on each dichotomy.  The MBTI is widely used for self‑awareness
and team building, though it remains controversial among researchers due
to limited predictive validity.

**Cross‑framework translation with PI profiles**

The table below maps PI reference profiles to **probable MBTI patterns**.
These translations are heuristic and intended to give a general sense of
preference alignment, not definitive type assignments.  Profiles may span
multiple MBTI codes depending on context.  “Likely type(s)” represent
common fits; “Evidence” explains the reasoning; “Development note” offers
guidance for working across type differences.

| PI profile | Likely MBTI type(s) | Evidence & rationale | Development note |
|---|---|---|---|
| **Analyzer** | ISTJ or INTJ | Reserved and detail‑oriented (I), trusts data (S/N leaning S), logical decision maker (T), prefers structure (J). | Encourage sharing ideas and flexibility; pair with intuitive types to explore possibilities. |
| **Controller** | ESTJ | Outgoing and directive (E), pragmatic (S), objective (T), organized and decisive (J). | Balance decisiveness with listening; be open to alternative methods. |
| **Specialist** | ISTJ | Precise and skeptical (I), values facts (S), logical (T), follows procedures (J). | Promote open communication and adaptability; allow time to adjust to change. |
| **Strategist** | INTJ | Visionary and analytical (N), structured (J), independent (I), strategic and logic‑driven (T). | Share reasoning with others; invite feedback to refine plans. |
| **Venturer** | ENTP or ENTJ | Self‑starting, risk‑taking and inventive (N), assertive (E), logical (T), flexible or structured depending on context (P/J). | Provide follow‑through frameworks; temper impatience with empathy. |
| **Individualist** | INTP | Independent and creative (N), reserved (I), theoretical thinker (T), prefers flexible exploration (P). | Seek collaborative opportunities; practice communicating ideas clearly. |
| **Scholar** | INFP or INTP | Accurate, reflective and imaginative (I), values ideals (F) or theories (T), open to possibilities (N), adaptable (P). | Communicate preferences clearly; balance ideals with practical action. |
| **Altruist** | ESFJ | Social and cooperative (E), focuses on harmony and service (F), organized and supportive (J). | Practice self‑care and boundary setting; be receptive to constructive feedback. |
| **Captain** | ENFJ or ENTJ | Charismatic leader (E), inspires change (N), makes decisions based on vision and logic/values (T/F), prefers structure (J). | Listen to dissenting views; avoid overextending. |
| **Collaborator** | ENFP or ESFP | Enthusiastic team player (E), values relationships (F), adaptable and spontaneous (P), imaginative (N) or realistic (S). | Develop focus on priorities; use structure to complete tasks. |
| **Maverick** | ENTP | Innovative and undaunted by failure (N), outspoken (E), analytical (T), spontaneous (P). | Balance creativity with planning; appreciate operational needs. |
| **Persuader** | ENFP | Social and persuasive (E), motivates others (F), imaginative (N), flexible (P). | Follow through on commitments; align enthusiasm with reality. |
| **Promoter** | ESFP or ENFP | Warm, persuasive networker (E), people‑centered (F), spontaneous (P), focuses on options (N/S). | Use checklists to stay organized; ensure substance accompanies style. |
| **Adapter** | ENTP or ESTP | Flexible, pragmatic and diplomatic (E), enjoys variety (P), analytical (T) or practical (S). | Clarify goals and values; avoid over‑accommodating others. |
| **Artisan** | ISTP or INTP | Analytical craftsperson (T), precise and independent (I), enjoys problem solving (P), appreciates concepts (N) or facts (S). | Communicate progress; accept iterative collaboration. |
| **Guardian** | ISFJ | Careful, supportive (F), detail‑oriented (S), reserved (I), structured (J). | Embrace change gradually; voice concerns constructively. |
| **Operator** | ISFP or ESFP | Patient, cooperative (F), relaxed (P), practical and hands‑on (S), introverted or ambiverted (I/E). | Build self‑advocacy and initiative; set personal goals. |

**Practical implications**

The MBTI lens helps translate PI profiles into language familiar to many
teams.  Recognizing that an Analyzer may operate like an ISTJ informs
communication (prepare data, respect privacy) and delegation (provide clear
instructions).  A Persuader who resembles an ENFP may excel at energizing
others but need help organizing details.  Importantly, MBTI types are
preferences, not abilities; people can flex outside their type when
necessary.  Using this lens alongside PI insights encourages appreciation
for diversity in how colleagues recharge, gather information and make
decisions.
`,
  },
  {
    id: "metacognition-lens",
    lens: "Metacognition Lens",
    status: "",
    source: "Metacognition_Lens.txt",
    content: `
Metacognition Lens

**Overview**

Metacognition refers to “thinking about thinking”—the ability to monitor, evaluate and adjust one’s cognitive strategies.  High metacognitive awareness supports learning, adaptability and error correction.  This lens summarises each PI profile’s typical metacognitive strengths (primary), additional areas of focus (secondary) and stress patterns when reflection falters.

**Crosswalk by PI Profile**

| PI Profile | Primary metacognitive focus | Secondary focus | Stress pattern |
|---|---|---|---|
| **Analyzer** | Self‑monitoring | Strategy planning | Ruminates on errors |
| **Controller** | Goal tracking | Rule checking | Blames process gaps |
| **Specialist** | Domain reflection | Error detection | Tunnel‑vision on details |
| **Strategist** | Meta‑planning | Scenario evaluation | Over‑theorises options |
| **Venturer** | Rapid heuristics | Quick reframe | Skips reflection and repeats mistakes |
| **Altruist** | Relational reflection | Perspective check | Over‑focus on others’ feelings |
| **Captain** | Outcome monitoring | Tactical adjustment | Dismisses feedback quickly |
| **Collaborator** | Shared reflection | Consensus calibration | Avoids hard self‑critique |
| **Maverick** | Idea scanning | Pattern spotting | Jumps without review |
| **Persuader** | Audience tuning | Message testing | Confuses signal with applause |
| **Promoter** | Rapid feedback loop | Social proof check | Over‑reliant on praise |
| **Adapter** | Context scanning | Flexible replanning | Over‑adjusts to others |
| **Craftsman** | Quality review | Stepwise correction | Paralysis over small flaws |
| **Guardian** | Risk appraisal | Contingency planning | Fixates on worst case |
| **Operator** | Process audit | Checklists and routines | Ignores novel signals |
| **Individualist** | Identity reflection | Concept testing | Withdraws into private review |
| **Scholar** | Meta‑analysis | Hypothesis testing | Endless re‑validation |

**Usage considerations**

* Encourage Analyzer and Craftsman types to balance self‑critique with progress by setting “good enough” thresholds.  Provide external deadlines to prevent endless rumination.
* Controllers and Guardians may benefit from reframing blame away from process or worst‑case scenarios; involve them in adaptive planning exercises to build flexibility.
* Innovators (Venturer, Maverick) often skip reflection.  Introduce structured retrospectives and pair them with reflective collaborators.
* Altruists and Persuaders sometimes over‑interpret social signals.  Encourage data‑driven feedback to balance relational reflections.
* Scholars may over‑analyse; prompt them to test hypotheses in action and accept that not all variables can be controlled.
`,
  },
  {
    id: "mayersaloveycaruso-emotional-intelligence-test-msceit-lens",
    lens: "Mayer\u2011Salovey\u2011Caruso Emotional Intelligence Test (MSCEIT) Lens",
    status: "",
    source: "MSCEIT_Lens.txt",
    content: `
Mayer‑Salovey‑Caruso Emotional Intelligence Test (MSCEIT) Lens
=============================================================

**Overview and theoretical background**

The **MSCEIT** is an ability‑based test that measures emotional
intelligence according to Mayer and Salovey’s four‑branch model.  Rather
than self‑report, it requires respondents to solve emotion‑related
problems, producing scores for total EI, two area scores, four branch
scores, eight task scores and three supplemental scoreshttps://www.eiconsortium.org/measures/msceit.html#:~:text=The%20Mayer,MSCEIT.  The
four branches are:

1. **Perceiving Emotions** – accurately identifying emotions in faces,
   pictures and storieshttps://www.eiconsortium.org/measures/msceit.html#:~:text=The%20Mayer,MSCEIT.
2. **Facilitating Thought (Using Emotions)** – harnessing emotions to
   prioritize thinking and generate optionshttps://www.eiconsortium.org/measures/msceit.html#:~:text=The%20Mayer,MSCEIT.
3. **Understanding Emotions** – comprehending emotional language,
   transitions and combinationshttps://www.eiconsortium.org/measures/msceit.html#:~:text=The%20Mayer,MSCEIT.
4. **Managing Emotions** – regulating emotions in oneself and others to
   achieve goalshttps://www.eiconsortium.org/measures/msceit.html#:~:text=The%20Mayer,MSCEIT.

The MSCEIT takes 30–45 minutes and is scored against expert and general
consensus norms.  It emphasizes performance over self‑perception and is
used in leadership development, coaching and research.

**Cross‑framework translation with PI profiles**

While PI profiles describe behavioral drives, we can hypothesize how
individuals might perform across MSCEIT branches based on their natural
preferences.  The table below identifies possible strengths and growth
areas.  “Branch strengths” indicate where the profile may excel;
“Learning edge” suggests branches to develop; “Application tip” offers
guidance for applying EI abilities.

| PI profile | Branch strengths | Learning edge | Application tip |
|---|---|---|---|
| **Analyzer** | Understanding Emotions – able to analyze patterns and causes; Managing Emotions – can regulate responses logically. | Perceiving Emotions – may overlook subtle cues; Facilitating Thought – using emotions to guide creativity. | Practice recognizing emotions in real time; leverage feelings to inspire innovative solutions and empathy. |
| **Controller** | Managing Emotions – stays composed under pressure; Facilitating Thought – channels drive into action. | Understanding Emotions – may miss nuanced emotional dynamics; Perceiving Emotions – reads cues less sensitively. | Attend to team members’ emotional signals; use emotions to build rapport and motivation. |
| **Specialist** | Understanding Emotions – recognizes patterns and consequences; Managing Emotions – maintains composure. | Perceiving Emotions – may not notice subtle expressions; Facilitating Thought – drawing on emotions for creativity. | Engage in active listening; practice empathy; allow emotions to inform problem solving. |
| **Strategist** | Understanding Emotions – sees links between emotions and outcomes; Facilitating Thought – uses emotions strategically. | Perceiving Emotions – may miss facial and tone cues; Managing Emotions – balancing intensity and patience. | Observe non‑verbal signals; consider emotional impact of decisions; practice self‑soothing techniques. |
| **Venturer** | Facilitating Thought – channels enthusiasm to spark ideas; Managing Emotions – resilient under stress. | Perceiving Emotions – may be unaware of others’ feelings; Understanding Emotions – exploring underlying causes. | Slow down to notice others’ responses; explore emotions behind reactions; use empathy to refine pitches. |
| **Individualist** | Understanding Emotions – introspective about feelings and motives; Facilitating Thought – uses emotions to inspire creativity. | Perceiving Emotions – may misinterpret social cues; Managing Emotions – regulating frustration when misunderstood. | Seek feedback on impact; practice perspective‑taking; manage internal dialogue constructively. |
| **Scholar** | Perceiving Emotions – observant of subtle cues; Understanding Emotions – thoughtful about emotional complexity. | Managing Emotions – may dwell on feelings; Facilitating Thought – allowing emotions to guide action. | Develop emotion regulation strategies; use feelings as a resource for decision making; engage with others’ perspectives. |
| **Altruist** | Perceiving Emotions – attuned to others’ feelings; Managing Emotions – supportive and calm. | Facilitating Thought – may separate emotions from decision making; Understanding Emotions – linking feelings to systemic causes. | Incorporate emotions into problem solving; explore deeper roots of emotions; express own needs clearly. |
| **Captain** | Facilitating Thought – leverages emotions to motivate; Managing Emotions – recovers quickly from setbacks. | Understanding Emotions – exploring complex dynamics; Perceiving Emotions – noticing subtle signals. | Practice reflective journaling; slow down to observe; use empathy to guide leadership actions. |
| **Collaborator** | Perceiving Emotions – reads group atmosphere; Managing Emotions – fosters harmony. | Facilitating Thought – using emotions for innovation; Understanding Emotions – analyzing patterns. | Translate emotional insights into actions; explore root causes; encourage constructive dialogue. |
| **Maverick** | Facilitating Thought – channels excitement into creative ideas; Managing Emotions – bounces back quickly. | Perceiving Emotions – may overlook signals; Understanding Emotions – comprehending emotional complexity. | Practice observing others’ reactions; reflect on own feelings; integrate emotions with logic. |
| **Persuader** | Facilitating Thought – uses emotions to persuade; Perceiving Emotions – detects audience mood. | Understanding Emotions – analyzing deeper emotions; Managing Emotions – controlling impulses. | Slow down for reflection; develop patience; understand underlying drivers before influencing. |
| **Promoter** | Perceiving Emotions – intuitive about others’ moods; Facilitating Thought – harnesses emotions to connect. | Understanding Emotions – deeper analysis of causes; Managing Emotions – sustaining focus amidst excitement. | Use emotional insight to prioritize; build self‑regulation strategies; practice empathy for quieter colleagues. |
| **Adapter** | Perceiving Emotions – notices shifts in tone; Managing Emotions – stays calm and adaptable. | Facilitating Thought – leveraging emotions for creativity; Understanding Emotions – exploring systemic patterns. | Allow emotions to inspire problem solving; discuss feelings to deepen understanding; avoid suppressing dissent. |
| **Artisan** | Understanding Emotions – connects emotion with aesthetics; Facilitating Thought – uses emotions to drive creativity. | Perceiving Emotions – may overlook interpersonal cues; Managing Emotions – coping with perfectionism. | Seek feedback on emotional impact; practice stress‑reduction techniques; channel feelings into collaboration. |
| **Guardian** | Perceiving Emotions – sensitive to others’ needs; Managing Emotions – provides steady support. | Facilitating Thought – incorporating emotions into planning; Understanding Emotions – interpreting complex dynamics. | Draw on emotions to encourage new ideas; explore cause‑and‑effect relationships; express feelings openly. |
| **Operator** | Perceiving Emotions – picks up on others’ moods; Managing Emotions – calm and cooperative. | Understanding Emotions – connecting emotions to broader patterns; Facilitating Thought – using emotions in ideation. | Reflect on feelings; consider emotional drivers in problem solving; cultivate creative experimentation. |

**Practical implications**

The MSCEIT lens emphasizes emotional abilities rather than traits.  For
example, Captains and Persuaders excel at using emotions to motivate,
but may need practice with impulse control.  Scholars and Guardians are
good at perceiving and understanding emotions yet may struggle to
translate feelings into action.  Applying this lens encourages targeted
skills training: mindfulness exercises improve emotion perception,
empathic listening deepens understanding, and cognitive reappraisal
enhances management.  Together with PI insights, the MSCEIT lens
supports balanced, emotionally intelligent leadership.
`,
  },
  {
    id: "neurodiversity-support-lens",
    lens: "Neurodiversity Support Lens",
    status: "",
    source: "Neurodiversity_Support_Lens.txt",
    content: `
Neurodiversity Support Lens
==========================

**Overview**

Neurodiversity refers to the natural variation in human brain functioning.  A neuroinclusive workplace consciously and actively includes all types of information processing, learning and communication styleswww.cipd.org/globalassets/media/knowledge/knowledge-hub/reports/2024-pdfs/2024-neuroinclusion-at-work-report-8545.pdf#:~:text=What%20is%20neurodiversity%20and%20what,The%20term.  Many organisations overlook neurodiversity, and typical norms may suit some but be challenging for up to 20% of people who identify as neurodivergentwww.cipd.org/globalassets/media/knowledge/knowledge-hub/reports/2024-pdfs/2024-neuroinclusion-at-work-report-8545.pdf#:~:text=be%20able%20to%20unleash%20individual,find%20themselves%20marginalised%20by%20organisation.  A neuroinclusive culture benefits everyone by unleashing diverse thinking, addressing equality of opportunity and harnessing the skills of those who think differentlywww.cipd.org/globalassets/media/knowledge/knowledge-hub/reports/2024-pdfs/2024-neuroinclusion-at-work-report-8545.pdf#:~:text=be%20able%20to%20unleash%20individual,find%20themselves%20marginalised%20by%20organisation.

Neurodivergent conditions include ADHD, autism spectrum, dyslexia, dyspraxia, dyscalculia, Tourette syndrome and others.  Support strategies vary but often involve adjustments in communication, environment, processes and expectations.

**Inclusive Practice Crosswalk by PI Profile**

The table below identifies neurodiversity‑supportive practices tailored to each PI profile.  While these practices are broadly helpful to all, they are particularly important for neurodivergent individuals who share similar behavioural tendencies.

| PI Profile | Potential neurodiversity considerations | Supportive practices |
|---|---|---|
| **Analyzer** | May include colleagues with autism, ADHD or dyslexia who thrive on structure and detail but may struggle with change and social nuances | Provide clear written instructions, predictable routines, noise‑reduced environments and opportunities for focused work; allow extra time for processing and note‑taking. |
| **Controller** | May include individuals with ADHD who act quickly and need help with follow‑through | Use visual Kanban boards, set WIP limits, agree on pilots with explicit stop criteria and encourage breaks to manage impulsivity. |
| **Specialist** | May include people with hyperfocus and executive function challenges | Break assignments into small, time‑boxed tasks; provide templates and reminders for documentation; allow alternative formats (voice notes, diagrams). |
| **Strategist** | May include neurodivergent colleagues who are strong systems thinkers but experience social fatigue | Schedule quiet reflection periods, provide agendas and pre‑reads, use asynchronous collaboration tools and offer recovery time after intense interactions. |
| **Venturer** | May include individuals with ADHD or dyslexia who are creative but time‑blind | Use historical benchmarks for estimating, set micro‑deadlines, provide accountability partners and celebrate incremental progress. |
| **Altruist** | May include people with sensory sensitivities or social anxiety | Offer quiet workspaces, flexible working arrangements, written communication options and structured social interactions. |
| **Captain** | May include colleagues with Tourette syndrome or auditory processing differences | Use captions, share slides and notes in advance, allow written participation and avoid noisy environments. |
| **Collaborator** | May include neurodivergent people who value harmony but struggle with unstructured interactions | Provide agendas, turn‑taking facilitation, meeting summaries and opt‑out mechanisms for live brainstorming. |
| **Maverick** | May include creative thinkers with dyslexia or ADHD | Encourage mind‑mapping and visual thinking, provide editing support, and allow flexible schedules. |
| **Persuader** | May include people with social communication differences | Offer structured opportunities to practise presentations, provide feedback privately and use supportive co‑presenters. |
| **Promoter** | May include individuals with dysgraphia or processing speed differences | Use speech‑to‑text tools, allow extra preparation time and provide summaries afterwards. |
| **Adapter** | May include people with anxiety or working‑memory differences | Provide clear expectations, consistent routines, and regular check‑ins to reduce uncertainty. |
| **Craftsman** | May include individuals with dyspraxia or dyscalculia | Offer ergonomic tools, assistive technology and collaborative support on motor or numeric tasks. |
| **Guardian** | May include people with sensory sensitivities who value stability | Ensure lighting and noise control, provide advance notice of changes and maintain predictable processes. |
| **Operator** | May include neurodivergent individuals in routine tasks | Use checklists, clear standard operating procedures and allow modifications to workflows that suit individual processing styles. |
| **Individualist** | May include autistic or ADHD individuals who value autonomy | Offer flexible schedules, asynchronous communication and spaces for quiet focus. |
| **Scholar** | May include neurodivergent researchers or analysts | Provide extended time for reading/writing, access to assistive technology (text‑to‑speech, screen readers) and opportunities for peer collaboration. |

**Using this lens**

* Audit workplace processes—recruitment, meetings, feedback, physical environments—to identify barriers to neurodivergent colleagues.  Modify them to accommodate different information processing, learning and communication styles.
* Normalise conversations about adjustments and encourage disclosure on an individual’s terms.  Recognise that one person’s adjustment (e.g., written rather than verbal instructions) often benefits others.
* Provide neurodiversity training for managers and colleagues.  A shared understanding reduces stigma and empowers teams to co‑create inclusive practices.`,
  },
  {
    id: "perceived-stress-scale-pss-lens",
    lens: "Perceived Stress Scale (PSS) Lens",
    status: "",
    source: "Perceived_Stress_Scale_Lens.txt",
    content: `
Perceived Stress Scale (PSS) Lens
===============================

**Overview**

The Perceived Stress Scale (PSS) is a widely used psychological instrument for measuring the perception of stress.  It consists of 10 self‑report items that ask respondents how often they have felt or thought a certain way in the last monthhttps://kresserinstitute.com/tools/pss/#:~:text=The%20Perceived%20Stress%20Scale%20,are%20contributing%20to%20your%20condition.  Items use a 5‑point scale from 0 (never) to 4 (very often).  Examples include:

* How often have you been upset because of something that happened unexpectedly?https://kresserinstitute.com/tools/pss/#:~:text=The%20Perceived%20Stress%20Scale%20,are%20contributing%20to%20your%20condition
* How often have you felt that you were unable to control important things in your life?https://kresserinstitute.com/tools/pss/#:~:text=The%20Perceived%20Stress%20Scale%20,are%20contributing%20to%20your%20condition
* How often have you felt confident about your ability to handle your personal problems? (reverse‑scored)https://kresserinstitute.com/tools/pss/#:~:text=The%20Perceived%20Stress%20Scale%20,are%20contributing%20to%20your%20condition

Total scores range from 0 to 40.  Higher scores indicate higher perceived stress.  The PSS is a valuable tool because it measures psychological stress rather than specific stressors, making it broadly applicable.https://kresserinstitute.com/tools/pss/#:~:text=The%20Perceived%20Stress%20Scale%20,are%20contributing%20to%20your%20condition.

**Stress Perception Crosswalk by PI Profile**

Different profiles interpret and respond to stress differently.  The table below summarises likely stress triggers and coping strategies for each profile.

| PI Profile | Likely stress triggers | Coping strategies |
|---|---|---|
| **Analyzer** | Uncontrolled changes, ambiguous expectations | Use structured planning, clarify priorities and practise cognitive reframing. |
| **Controller** | Lack of control, unpredictable team behaviour | Delegate wisely, adopt flexible thinking and practise relaxation techniques. |
| **Specialist** | Ambiguous tasks, lack of clarity or recognition | Seek clear instructions, break tasks into manageable parts and celebrate progress. |
| **Strategist** | Conflicting priorities, long‑term uncertainty | Prioritise, negotiate scope and maintain a big‑picture view to reduce worry. |
| **Venturer** | Bureaucracy, slow progress | Adopt patience, build alliances and focus on incremental wins. |
| **Altruist** | Interpersonal conflict, inability to help others | Practise self‑care, set boundaries and seek support from colleagues. |
| **Captain** | Resistance to direction, lack of follow‑through | Develop patience, coach team members and take breaks to recharge. |
| **Collaborator** | Disharmony, unresolved conflict | Facilitate open dialogue, practise assertiveness and create consensus. |
| **Maverick** | Constraints, micromanagement | Negotiate autonomy, practise compromise and cultivate emotional regulation. |
| **Persuader** | Negative feedback, disengaged audiences | Reframe criticism as growth, alternate persuasion with analysis and replenish energy. |
| **Promoter** | Dull routines, lack of attention | Add variety, set personal goals and practise mindfulness to stay grounded. |
| **Adapter** | Unclear priorities, chaotic environments | Establish structure, communicate needs and use relaxation techniques. |
| **Craftsman** | Last‑minute changes, lack of standards | Plan ahead, build buffers and practise flexibility. |
| **Guardian** | Rapid change, lack of stability | Seek clarity, plan for contingencies and practise calming routines. |
| **Operator** | Excessive workload, conflicting demands | Prioritise tasks, request help and incorporate micro‑breaks. |
| **Individualist** | Conformity, lack of independence | Negotiate autonomy, practise stress‑management exercises and balance work with personal projects. |
| **Scholar** | Information overload, unclear expectations | Filter inputs, set realistic goals and schedule regular breaks. |

**Using this lens**

* Administer the PSS periodically to gauge individual or team stress levels.  Scores above normative means suggest the need for stress‑management interventions.
* Normalise discussion of stress and encourage individuals to identify triggers and coping mechanisms.  Provide training on relaxation techniques, time management and cognitive reframing.
* Combine the PSS with other lenses (burnout, wellbeing) to gain a holistic view of psychological stress and tailor support to each profile’s needs.`,
  },
  {
    id: "purpose--meaning-lens",
    lens: "Purpose & Meaning Lens",
    status: "",
    source: "Purpose_and_Meaning_Lens.txt",
    content: `
Purpose & Meaning Lens
======================

**Overview**

Research shows that people are motivated not only by pay but by a sense of purpose and meaning in their work.  Meaningful work activates neurochemical pathways associated with reward and connection, improving engagement and resiliencehttps://www.peoplekult.com/post/the-power-of-purpose-how-meaningful-work-impacts-your-brain-and-your-engagement#:~:text=compensation%3F%20While%20competitive%20salaries%20and,edge%20neuroscience.  A 2026 report emphasises that workers value purpose alongside income and that investing in purpose can enhance productivity and employee well‑beingbw.bse.eu/wp-content/uploads/1578.pdf.  In neuroscience terms, purposeful work taps into the brain’s need for connection, growth and contribution.

Purpose derives from three sources:

* **Personal fulfilment:** Work that aligns with one’s values and identity (e.g., craftsmanship, intellectual curiosity, helping others).
* **Social impact:** Contributing to others, a team, a community or a societal cause.
* **Mission alignment:** Feeling that the organisation’s goals matter and are worth pursuing.

When purpose is missing, employees may disengage or burn out even if compensation is adequate.  Conversely, aligning individuals with roles and missions that matter to them can increase motivation, resilience and creativity.

**Purpose Orientation Crosswalk by PI Profile**

This table identifies the predominant source of meaning for each PI profile.  The secondary column captures another important driver.  Use these insights to craft narratives and assignments that resonate with each style.

| PI Profile | Primary source of meaning | Secondary source | Notes |
|---|---|---|---|
| **Analyzer** | Personal fulfilment through mastery and knowledge | Mission alignment | Analyzers derive meaning from solving complex problems and aligning their expertise with organisational goals. |
| **Controller** | Mission alignment through results and success | Personal fulfilment | Controllers find purpose in achieving strategic objectives and demonstrating competence. |
| **Specialist** | Personal fulfilment through expertise and craftsmanship | Social impact | Specialists feel purposeful when their deep expertise contributes to projects that matter to colleagues or customers. |
| **Strategist** | Mission alignment with vision and systems change | Personal fulfilment | Strategists seek to improve the organisation and enjoy the intellectual challenge of designing future directions. |
| **Venturer** | Personal fulfilment through challenge and exploration | Mission alignment | Venturers are energised by new ventures and feel purposeful when driving ambitious growth. |
| **Altruist** | Social impact and helping others | Mission alignment | Altruists derive meaning from supporting colleagues and aligning work with community or social good. |
| **Captain** | Mission alignment through leading teams to success | Recognition | Captains feel purposeful when they rally teams around a mission and are recognised for their leadership. |
| **Collaborator** | Social impact through teamwork | Personal fulfilment | Collaborators find meaning in building relationships and ensuring everyone is included. |
| **Maverick** | Personal fulfilment through creative freedom | Mission alignment | Mavericks feel purposeful when they can innovate and disrupt to move the organisation forward. |
| **Persuader** | Social impact through influence and motivation | Recognition | Persuaders derive meaning from inspiring others and being appreciated for their charisma. |
| **Promoter** | Recognition and social impact | Personal fulfilment | Promoters find meaning in energising others and receiving public acknowledgement. |
| **Adapter** | Social impact through support and stability | Working conditions | Adapters derive meaning from creating harmony and ensuring smooth operations. |
| **Craftsman** | Personal fulfilment through quality and craft | Mission alignment | Craftsmen feel purposeful when their meticulous work contributes to a larger goal. |
| **Guardian** | Social impact through stewardship | Working conditions | Guardians find meaning in protecting team cohesion and upholding traditions and systems. |
| **Operator** | Mission alignment through efficient execution | Working conditions | Operators feel purposeful when operations run smoothly and meet objectives. |
| **Individualist** | Personal fulfilment through autonomy and originality | Mission alignment | Individualists derive meaning from creating unique approaches and aligning them with organisational goals. |
| **Scholar** | Personal fulfilment through learning and wisdom | Social impact | Scholars find purpose in generating knowledge that benefits others and shapes the organisation’s future. |

**Using this lens**

* To enhance engagement, connect tasks to the type of purpose that resonates with the individual.  For example, emphasise the impact on customers for an Altruist or the intellectual challenge for an Analyzer.
* Regularly communicate how a project contributes to the organisation’s mission and to broader societal goals.  Even highly independent profiles want to know why their work matters.
* Encourage people to articulate their personal sources of meaning.  Understanding colleagues’ purposes fosters empathy and helps leaders align roles and recognition.`,
  },
  {
    id: "relational-needs--firob-lens",
    lens: "Relational Needs \u2013 FIRO\u2011B Lens",
    status: "",
    source: "Relational_Needs_FIROB.txt",
    content: `
Relational Needs – FIRO‑B Lens

**Overview**

The Fundamental Interpersonal Relations Orientation–Behaviour (FIRO‑B) model assesses interpersonal needs in three domains:

1. **Inclusion** – desire for belonging and social interaction.
2. **Control** – desire for influence, responsibility and structure.
3. **Affection** – desire for closeness and personal connection.

Each need can be high (actively expressed), moderate or low (preferring independence).  The table below summarises each PI profile’s primary need, typical expression and stress behaviour when that need is unmet.

**Crosswalk by PI Profile**

| PI Profile | Primary FIRO‑B need | Typical expression | Stress behaviour |
|---|---|---|---|
| **Analyzer** | Control | Seeks clarity and boundaries | Withdraws or micromanages |
| **Controller** | Control | Direct leadership and rule‑setting | Domineering when unmet |
| **Specialist** | Inclusion (low) | Works independently | Isolation and guardedness |
| **Strategist** | Control | Strategic influence | Frustration with limits |
| **Venturer** | Inclusion | Seeks opportunities and visibility | Impulsive risk taking |
| **Altruist** | Affection | Supportive and relational | Over‑giving and hurt feelings |
| **Captain** | Control | Command presence | Aggressive when blocked |
| **Collaborator** | Inclusion | Builds teams and invites input | Feels excluded and withdraws |
| **Maverick** | Inclusion | Wants recognition for ideas | Provokes to be noticed |
| **Persuader** | Affection | Socially engaging and warm | Takes rejection personally |
| **Promoter** | Inclusion | Public energy and networking | Over‑promises to belong |
| **Adapter** | Affection | Nurtures relationships | Over‑adjusts to fit in |
| **Craftsman** | Control | Standards and ownership | Perfectionism when ignored |
| **Guardian** | Control | Protects group norms | Resistant to change |
| **Operator** | Control | Executes reliably | Frustrated by ambiguity |
| **Individualist** | Affection (low) | Values autonomy | Withdraws from forced intimacy |
| **Scholar** | Control | Seeks intellectual recognition | Retreats into analysis |

**Implications**

* High Control needs (e.g., Controller, Captain, Guardian) require clear roles, authority and decision rights.  When control feels threatened, these individuals may become domineering or resistant to change.  Provide transparency and involve them in setting the structure.
* High Inclusion needs (e.g., Venturer, Collaborator) thrive on being part of the group and visible.  Ensure they are involved in discussions and recognise their contributions.  Exclusion triggers withdrawal or provocative behaviour.
* High Affection needs (e.g., Altruist, Persuader) seek closeness and support.  Create opportunities for personal connection and show appreciation.  They may over‑extend themselves to maintain harmony.
* Low Inclusion or Affection (e.g., Specialist, Individualist) prefer independence; respect their space and avoid forcing social interaction.
`,
  },
  {
    id: "schwartz-values-inventory-lens",
    lens: "Schwartz Values Inventory Lens",
    status: "",
    source: "Schwartz_Values_Inventory.txt",
    content: `
Schwartz Values Inventory Lens

**Overview**

Shalom Schwartz’s Values Inventory identifies universal values that guide behaviour.  In a workplace context, these values translate into motivations such as conformity, achievement, stimulation, benevolence and self‑direction.  The table below lists the top values for each PI profile, how they express these values at work and what frustrates them when those values are threatened.

**Crosswalk by PI Profile**

| PI Profile | Top value(s) | Work expression | Stress trigger |
|---|---|---|---|
| **Analyzer** | Conformity; Security | Follows rules, emphasises accuracy and reliability | Frustrated by ambiguity |
| **Controller** | Security; Power | Enforces order and control, seeks authority | Resists loss of authority |
| **Specialist** | Achievement; Security | Demonstrates mastery, maintains high standards | Threatened by incompetence |
| **Strategist** | Self‑direction; Achievement | Pursues vision, autonomy and impact | Stifled by bureaucracy |
| **Venturer** | Stimulation; Self‑direction | Seeks risk, novelty and autonomy | Chafes under rules |
| **Altruist** | Benevolence; Universalism | Supports team cohesion and fairness | Hurt by exclusion |
| **Captain** | Power; Achievement | Leads teams, drives results and influence | Reacts to disloyalty |
| **Collaborator** | Benevolence; Tradition | Facilitates teamwork and fairness | Distressed by conflict |
| **Maverick** | Stimulation; Self‑direction | Breaks moulds, pursues novelty | Frustrated by constraints |
| **Persuader** | Self‑direction; Stimulation | Seeks influence and visibility | Sensitive to rejection |
| **Promoter** | Stimulation; Hedonism | Drives energy, visibility and excitement | Moves on quickly after slights |
| **Adapter** | Benevolence; Conformity | Fits in, supports and adapts to the group | Over‑extends to belong |
| **Craftsman** | Conformity; Achievement | Upholds quality, standards and craft | Distressed by sloppy work |
| **Guardian** | Security; Tradition | Preserves processes, history and continuity | Resists rapid change |
| **Operator** | Conformity; Security | Executes reliably and maintains order | Frustrated by chaos |
| **Individualist** | Self‑direction; Stimulation | Expresses autonomy and originality | Withdraws under control |
| **Scholar** | Self‑direction; Universalism | Pursues knowledge, rigour and truth | Overwhelmed by trivial tasks |

**Using this lens**

* Align tasks and rewards with core values: Offer vision and autonomy to Strategists and Individualists; provide rule clarity and stability for Analyzers and Operators; emphasise teamwork and fairness for Altruists and Collaborators.
* Recognise stress triggers: Bureaucracy demotivates Strategists; loss of control threatens Controllers; sloppy work frustrates Craftsmen; rapid change unsettles Guardians.  Anticipate these triggers and tailor interventions accordingly.
`,
  },
  {
    id: "selfdetermination-theory-sdt-lens",
    lens: "Self\u2011Determination Theory (SDT) Lens",
    status: "",
    source: "Self_Determination_Theory.txt",
    content: `
Self‑Determination Theory (SDT) Lens

**Overview**

Self‑Determination Theory posits that human motivation and wellbeing depend on the satisfaction of three psychological needs:

1. **Autonomy** – the need for freedom, choice and self‑direction.
2. **Competence** – the need to feel capable, effective and masterful.
3. **Relatedness** – the need for connection, belonging and interpersonal warmth.

A person’s SDT signature influences how they engage at work, respond to feedback and sustain motivation.  The table below summarises each PI profile’s relative need levels, primary driver, stress triggers and rationale.

**Crosswalk by PI Profile**

| PI Profile | Autonomy need | Competence need | Relatedness need | Primary SDT driver | Stress trigger | Rationale |
|---|---|---|---|---|---|---|
| **Analyzer** | Low‑Moderate | Very High | Low | Competence | Feeling unprepared or rushed | Mastery and precision are core motivators |
| **Controller** | Low | High | Low | Competence (rule‑based) | Loss of control or unclear rules | Seeks order and authority |
| **Specialist** | Moderate | Very High | Low‑Moderate | Competence | Being forced outside expertise | Deep mastery orientation |
| **Strategist** | High | High | Low | Autonomy + Competence | Constraints and bureaucracy | Vision and ownership drive them |
| **Venturer** | Very High | High | Low | Autonomy | Micromanagement | Bold, self‑directed risk taker |
| **Altruist** | Low‑Moderate | Moderate | Very High | Relatedness | Interpersonal tension | People‑first orientation |
| **Captain** | Very High | High | Low‑Moderate | Autonomy | Loss of authority | Command and ownership focus |
| **Collaborator** | Low | Moderate | Very High | Relatedness | Conflict or exclusion | Harmony and inclusion matter most |
| **Maverick** | Very High | High | Low | Autonomy | Constraints and rules | Creative independence |
| **Persuader** | Moderate | Moderate | High | Relatedness | Social rejection | Influence and connection |
| **Promoter** | High | Moderate | High | Relatedness + Autonomy | Feeling ignored or constrained | Expressive and energetic |
| **Adapter** | Low‑Moderate | Moderate | High | Relatedness | Over‑commitment | Flexible and relational |
| **Craftsman** | Low‑Moderate | Very High | Low | Competence | Quality compromise | Precision and standards |
| **Guardian** | Low | High | Moderate | Competence (stability‑based) | Change without safeguards | Stewardship and continuity |
| **Operator** | Low‑Moderate | High | Moderate | Competence | Process breakdown | Execution and reliability |
| **Individualist** | Very High | High | Low | Autonomy | Loss of creative freedom | Independent and expressive |
| **Scholar** | Moderate | Very High | Low | Competence | Unclear expectations | Rigorous, methodical mastery |

**Practical implications**

* To motivate autonomy‑driven profiles (e.g., Strategist, Venturer, Individualist), provide choice and empower them to define how work is done.  Avoid micromanagement.
* Competence‑driven profiles (e.g., Analyzer, Specialist, Scholar) thrive on mastery and clarity; invest in skills development and give them time to prepare.  Ambiguity triggers stress.
* Relatedness‑driven profiles (e.g., Altruist, Collaborator) need connection and belonging.  Create collaborative environments, recognise contributions and minimise interpersonal tension.
* When multiple needs are high (e.g., Strategist has high autonomy and competence), balance them—offer ownership of challenging projects with clear goals and respect for their expertise.
`,
  },
  {
    id: "situational-leadership-lens",
    lens: "Situational Leadership Lens",
    status: "",
    source: "Situational_Leadership_Lens.txt",
    content: `
Situational Leadership Lens
==========================

**Overview**

The Situational Leadership model, developed by Paul Hersey and Ken Blanchard, posits that effective leaders adapt their style based on the development level of their followers.  There are four leadership styles and four corresponding development levelsqualitycharters.org/wp-content/uploads/2016/09/Situational-Leadership-Quick-Reference-Guide.pdf#:~:text=Four%20Leadership%20Styles%20S1%20%3D,Low%20Directive%2C%20Low%20Supportive:

* **Directing (S1):** High directive, low supportive.  The leader defines roles and tells people what, how and when to do tasksqualitycharters.org/wp-content/uploads/2016/09/Situational-Leadership-Quick-Reference-Guide.pdf#:~:text=Four%20Leadership%20Styles%20S1%20%3D,Low%20Directive%2C%20Low%20Supportive.  Appropriate for **D1** employees who have low competence but high commitmentqualitycharters.org/wp-content/uploads/2016/09/Situational-Leadership-Quick-Reference-Guide.pdf#:~:text=Four%20Leadership%20Styles%20S1%20%3D,Low%20Directive%2C%20Low%20Supportive.
* **Coaching (S2):** High directive, high supportive.  The leader provides direction and also encourages and supports.  Suits **D2** employees (some competence, low commitment)qualitycharters.org/wp-content/uploads/2016/09/Situational-Leadership-Quick-Reference-Guide.pdf#:~:text=Four%20Leadership%20Styles%20S1%20%3D,Low%20Directive%2C%20Low%20Supportive.
* **Supporting (S3):** Low directive, high supportive.  The leader facilitates and shares decision making.  Works for **D3** employees (high competence, variable commitment)qualitycharters.org/wp-content/uploads/2016/09/Situational-Leadership-Quick-Reference-Guide.pdf#:~:text=Four%20Leadership%20Styles%20S1%20%3D,Low%20Directive%2C%20Low%20Supportive.
* **Delegating (S4):** Low directive, low supportive.  The leader turns over responsibility for decisions and implementation.  Appropriate for **D4** employees who are competent and highly committedqualitycharters.org/wp-content/uploads/2016/09/Situational-Leadership-Quick-Reference-Guide.pdf#:~:text=Four%20Leadership%20Styles%20S1%20%3D,Low%20Directive%2C%20Low%20Supportive.

Leaders must assess the competence and motivation of each follower and choose the style that best supports their development.  Effective leaders flex across styles as followers grow.

**Situational Style Crosswalk by PI Profile**

This table identifies the leadership style each PI profile is most comfortable using and which style they should develop to become more versatile.

| PI Profile | Natural leadership style | Development level focus | Suggested development |
|---|---|---|---|
| **Analyzer** | Supporting (S3) | D3: competent but cautious | Practise delegating authority (S4) and coaching to build engagement when others lack motivation. |
| **Controller** | Directing (S1) | D1: low competence, high commitment | Develop coaching (S2) and supporting (S3) skills to empower and involve others. |
| **Specialist** | Supporting (S3) | D3: high competence, variable commitment | Practise directing (S1) for new team members and delegating (S4) when appropriate. |
| **Strategist** | Coaching (S2) | D2: some competence, low commitment | Develop delegating (S4) skills to empower competent teams and avoid micromanagement. |
| **Venturer** | Coaching (S2) | D1/D2: early‑stage ventures | Practise delegating (S4) to sustain growth and directing (S1) to align novices. |
| **Altruist** | Supporting (S3) | D3: relationship oriented | Develop directing (S1) to provide clarity and coaching (S2) to motivate when enthusiasm dips. |
| **Captain** | Directing/Coaching (S1/S2) | D1/D2: forming teams | Practise supporting (S3) to empower skilled contributors and delegating (S4) for autonomy. |
| **Collaborator** | Supporting (S3) | D3: cohesive teams | Develop directing (S1) to offer structure and delegating (S4) to trust competent peers. |
| **Maverick** | Coaching (S2) | D2: developing competence | Practise supporting (S3) to listen more and delegating (S4) to empower others. |
| **Persuader** | Coaching (S2) | D2: motivational focus | Develop supporting (S3) to share decision making and directing (S1) for novice teams. |
| **Promoter** | Coaching (S2) | D2: enthusiastic but learning | Practise supporting (S3) for experienced peers and delegating (S4) to avoid micromanaging. |
| **Adapter** | Supporting (S3) | D3: competent colleagues | Develop directing (S1) for novices and delegating (S4) to empower capable team members. |
| **Craftsman** | Supporting (S3) | D3: skilled individuals | Develop directing (S1) for new hires and delegating (S4) to trust others with tasks. |
| **Guardian** | Supporting (S3) | D3: stable teams | Develop coaching (S2) to inspire and delegating (S4) to build autonomy. |
| **Operator** | Directing (S1) | D1: procedural tasks | Develop coaching (S2) and supporting (S3) to engage and empower skilled employees. |
| **Individualist** | Delegating (S4) | D4: high competence, high commitment | Practise coaching (S2) to support less experienced colleagues and supporting (S3) to collaborate. |
| **Scholar** | Supporting (S3) | D3: knowledge workers | Develop coaching (S2) to motivate and delegating (S4) to empower research teams. |

**Using this lens**

* Continuously assess the competence and commitment of individuals.  Tailor your leadership style accordingly: novices need clear direction; developing contributors benefit from coaching; experienced staff thrive with support or delegation.
* Encourage leaders to develop flexibility across all four styles.  Practise the style that feels least natural—this builds leadership agility and prevents over‑using one approach.
* Communicate openly about development levels and encourage employees to articulate when they need more guidance versus autonomy.  Situational leadership is a dynamic partnership between leader and follower.`,
  },
  {
    id: "social-cognition-lens",
    lens: "Social Cognition Lens",
    status: "",
    source: "Social_Cognition.txt",
    content: `
Social Cognition Lens

**Overview**

Social cognition refers to how people perceive, interpret and predict social information.  Five dimensions are particularly relevant in organisational contexts:

1. **Theory of Mind** – ability to infer others’ intentions, beliefs and motives.
2. **Attribution Style** – whether a person explains behaviour by internal factors (intentional, personality) or external factors (circumstance, context).
3. **Perspective‑Taking** – capacity to adopt another person’s viewpoint cognitively (distinct from emotional empathy).
4. **Social Prediction** – accuracy in anticipating others’ reactions, needs and responses.
5. **Emotional Inference** – ability to read emotional cues such as tone, body language and micro‑signals.

The crosswalk below summarises each PI profile’s social‑cognitive signature, including their primary mode and stress‑distortion pattern.  “Primary mode” indicates the dominant approach used to interpret social situations.

**Crosswalk by PI Profile**

| PI Profile | Theory of Mind | Attribution style | Perspective‑taking | Social prediction | Emotional inference | Primary mode | Stress distortion | Rationale |
|---|---|---|---|---|---|---|---|---|
| **Analyzer** | Moderate | External, logic‑based | Low‑Moderate | Low | Low | Cognitive rather than emotional | Assumes incompetence, not intent | Logic > emotion |
| **Controller** | Low | Internal (“they should know better”) | Low | Moderate | Low | Rule‑based interpretation | Assumes non‑compliance | Order + authority |
| **Specialist** | Moderate | External (context, process) | Low‑Moderate | Low | Low | Technical rather than interpersonal | Withdraws | Depth > social nuance |
| **Strategist** | High | Mixed (strategic) | Moderate | High | Moderate | Strategic mental modelling | Over‑interprets motives | Systems thinking applied to people |
| **Venturer** | Moderate | Internal (“they’re slowing us down”) | Low | Moderate | Low | Action‑oriented heuristics | Misreads caution as resistance | Fast, low‑empathy cognition |
| **Altruist** | High | External (“they’re stressed”) | Very High | High | Very High | Empathic modelling | Over‑accommodation | People‑first cognition |
| **Captain** | Moderate | Internal (“own your part”) | Low | High | Moderate | Power‑dynamics reading | Assumes incompetence or lack of drive | Command cognition |
| **Collaborator** | High | External | Very High | High | High | Harmony‑seeking | Avoids conflict → misreads silence | Relational integration |
| **Maverick** | Moderate | Internal (“they don’t get it”) | Low | Moderate | Low | Idea‑centric | Dismisses others’ constraints | Creative, not relational |
| **Persuader** | High | Mixed | High | Very High | High | Audience‑reading | Over‑personalises reactions | Influence cognition |
| **Promoter** | High | External | Moderate | High | High | Social‑energetic | Misreads neutrality as rejection | Expressive, reactive |
| **Adapter** | High | External | Very High | High | High | Situational empathy | Over‑adjusts | Flexible, relational |
| **Craftsman** | Low‑Moderate | External | Low | Low | Low | Task‑centric | Withdraws into work | Quality > social nuance |
| **Guardian** | Moderate | External | Moderate | Moderate | Low‑Moderate | Stability‑oriented | Assumes threat or risk | Stewardship cognition |
| **Operator** | Low‑Moderate | External | Low | Low | Low | Practical rather than interpersonal | Misreads urgency | Execution > nuance |
| **Individualist** | Moderate | Internal | Moderate | Moderate | Low‑Moderate | Identity‑centric | Withdraws into autonomy | Independent cognition |
| **Scholar** | Moderate | External | Low‑Moderate | Low | Low | Analytical rather than interpersonal | Over‑analysis of motives | Intellectual, not social |

**Applying this lens**

* High social‑cognitive profiles (e.g., Altruist, Collaborator, Persuader) excel at anticipating others’ reactions and building rapport; leverage them in stakeholder management and team facilitation.
* Low theory‑of‑mind or emotional inference (e.g., Analyzer, Craftsman) does not mean indifference—it reflects a preference for logic over social cues.  Be explicit about expectations and context; avoid assuming they “just know” how others feel.
* Stress distortions reveal risk: Controllers assume non‑compliance, Venturers misinterpret caution as resistance, Collaborators avoid conflict and may misread silence.  Encourage open dialogue and clarify intent to reduce misinterpretations.
* Primary modes hint at communication channels: Data and logic for cognitive types, empathy and storytelling for relational types, systems mapping for strategists and creative brainstorming for mavericks.
`,
  },
  {
    id: "social-styles-lens",
    lens: "Social Styles Lens",
    status: "",
    source: "Social_Styles_Lens.txt",
    content: `
Social Styles Lens
==================

**Overview and theoretical background**

The **Social Styles** model, developed by Merrill and Reid, categorizes
people’s interaction preferences along two dimensions: **assertiveness**
(how forcefully someone expresses opinions) and **responsiveness** (how
openly they display emotions).  The intersection of these axes produces
four stylesfile:///home/oai/redirect.html#:~:text=The%20four%20social%20styles%2C%20Expressive%2C,evenly%20divided%20among%20the%20population:

1. **Driver** – high assertiveness and low responsiveness.  Drivers are
   direct, action‑oriented and decisive but may be bluntfile:///home/oai/redirect.html#:~:text=Driver%3A%20highly%20assertive%20%26%20low,responsiveness.
2. **Expressive** – high assertiveness and high responsiveness.  Expressives
   are enthusiastic, spontaneous risk‑takers who share opinions freelyfile:///home/oai/redirect.html#:~:text=Expressive%3A%20highly%20assertive%20%26%20highly,responsive.
3. **Amiable** – low assertiveness and high responsiveness.  Amiables are
   supportive, relationship‑focused and co‑operative but may shy away
   from conflictfile:///home/oai/redirect.html#:~:text=Amiable%3A%20low%20assertiveness%20%26%20highly,responsive.
4. **Analytical** – low assertiveness and low responsiveness.  Analyticals
   are detail‑oriented, logical and cautious; they rely on data and
   prefer thorough decision makingfile:///home/oai/redirect.html#:~:text=Analytical%3A%20low%20assertiveness%20%26%20low,responsiveness.

Social Style is about surface behavior, not motivation; recognizing
styles helps adjust communication for clarity and rapport.

**Cross‑framework translation with PI profiles**

The table below aligns PI profiles to Social Styles.  “Primary style”
indicates the dominant quadrant; “Secondary tendencies” note nuance;
“Interaction tip” provides advice for working with that style.

| PI profile | Primary style | Secondary tendencies | Interaction tip |
|---|---|---|---|
| **Analyzer** | Analytical | Amiable | Provide data, time for analysis and clear expectations; avoid pushing for rapid decisions. |
| **Controller** | Driver | Analytical | Be concise and results‑focused; present logical arguments; respect their need for control while offering collaboration. |
| **Specialist** | Analytical | Amiable | Give clear instructions; allow autonomy and time; show appreciation of expertise. |
| **Strategist** | Driver | Analytical | Tie ideas to strategic outcomes; provide room for input; help balance analysis with action. |
| **Venturer** | Driver | Expressive | Convey possibilities and challenges; be direct yet supportive; encourage them to consider details and impact. |
| **Individualist** | Analytical | Driver | Outline frameworks and logic; respect independence; avoid micromanagement; encourage open dialogue. |
| **Scholar** | Analytical | Amiable | Share thorough information; solicit ideas; support them through decision processes. |
| **Altruist** | Amiable | Analytical | Build rapport; express appreciation; avoid abrupt demands; include them in planning with clear steps. |
| **Captain** | Driver | Expressive | Be straightforward and visionary; recognize achievements; provide concise updates; invite collaboration. |
| **Collaborator** | Amiable | Expressive | Show empathy; invite participation; provide reassurance when change occurs; make decisions collaboratively. |
| **Maverick** | Expressive | Driver | Emphasize innovation and opportunity; be flexible; establish boundaries and accountability. |
| **Persuader** | Expressive | Amiable | Engage in dialogue and brainstorming; show enthusiasm; encourage focus and follow‑through. |
| **Promoter** | Expressive | Amiable | Provide social opportunities; set expectations clearly; balance enthusiasm with structure. |
| **Adapter** | Amiable | Analytical | Seek input and consensus; provide clarity about objectives; support decision making. |
| **Artisan** | Analytical | Driver | Respect precision; provide context and goals; encourage communication of progress. |
| **Guardian** | Amiable | Analytical | Build trust; explain reasons for change; provide support and reassurance; avoid rushing decisions. |
| **Operator** | Amiable | Analytical | Use calm, clear explanations; encourage questions; provide hands‑on examples; acknowledge contributions. |

**Practical implications**

Understanding social styles enables tailored communication.  Drivers like
Controllers and Captains appreciate efficiency and directness, while
Analyticals like Analyzers and Specialists need data and time to decide.
Expressives such as Mavericks and Persuaders respond to enthusiasm and
vision but may require gentle redirection to details.  Amiables like
Collaborators and Guardians thrive on rapport and harmony and should be
engaged in decision making rather than being told what to do.  Adjusting
tone, pace and format to someone’s style builds trust and reduces
misunderstandings.
`,
  },
  {
    id: "specialist--neurodivergence--cognitive-accessibility",
    lens: "Specialist \u2014 Neurodivergence & Cognitive Accessibility",
    status: "",
    source: "Specialist_Neurodivergence.txt",
    content: `
Specialist — Neurodivergence & Cognitive Accessibility
========================================================

**ADHD**
- **Manifestation:** Difficulty initiating broad exploratory work paired with hyperfocus on narrow technical problems.
- **Behaviour impact:** Long periods of procrastination or analysis paralysis, followed by exhaustive deep dives; integration and synthesis suffer.
- **Distortion of typical pattern:** The Specialist’s depth becomes uneven—brilliant modules but poor system integration or context.
- **Real‑life snapshot:** Delivers an exhaustive 60‑page compendium overnight after weeks of stalling.
- **Work/bandwidth impact:** Handoffs and cross‑functional integration suffer; knowledge remains siloed.
- **Risk if ignored:** Missed deadlines, duplicated work, loss of credibility.
- **Best way to approach:** Break research into micro‑questions with acceptance criteria, schedule frequent check‑ins and pair on the first step.

*Micro‑accommodations:* Provide micro‑question prompts; use small, time‑boxed sprints (e.g., 30 minutes) to start work; maintain weekly 30‑minute syncs.

*Peer scripts:* 
- “Can we break this into three micro‑questions and check in weekly?”  
- “Want to pair for the first 30 minutes to get started?”

*Trial metrics:* Time to first deliverable; percentage of experiments documented.

*Tools/supports:* Experiment templates, time trackers, shared note templates.

*Privacy phrasing:* “I’m breaking this into small questions and will share the first draft next week.”

---

**Executive Function Differences**
- **Manifestation:** Trouble sequencing experiments and documenting results.
- **Behaviour impact:** Deep experiments are conducted, but write‑ups lag; methods remain implicit.
- **Distortion:** Findings stay siloed; knowledge isn’t transferred.
- **Snapshot:** Runs a deep experiment but delays or forgets to write up the methods and results.
- **Work/bandwidth impact:** Lost knowledge, duplication of effort.
- **Risk if ignored:** Wasted time and resources.
- **Best way to approach:** Use experiment templates with mandatory short write‑ups at milestones and assign an accountability partner.

*Micro‑accommodations:* Require a 1‑page methods note at each milestone; include prompts for assumptions, procedure and results.

*Peer scripts:* 
- “Can you add a one‑page methods note at milestone X?”  
- “I’ll help capture the methods while you run the test.”

*Trial metrics:* Percentage of experiments with milestone write‑ups; time to publish results after experiment completion.

*Tools/supports:* Shared lab notebook, templates with prompts, co‑authoring features.

*Privacy phrasing:* “I’ll add a short methods note at each milestone so we don’t lose the findings.”

---

**Time Blindness**
- **Manifestation:** Optimistic estimates for exploratory work and prototypes.
- **Behaviour impact:** Overpromises on research timelines and underestimates unforeseen complexities.
- **Distortion:** Reliability is perceived as low even when quality is high.
- **Snapshot:** Promises a prototype in a week that actually requires a month.
- **Work/bandwidth impact:** Team planning suffers; deadlines slip.
- **Risk if ignored:** Reputational damage and misaligned expectations.
- **Best way to approach:** Anchor estimates to past projects; break tasks into phases with micro‑deadlines and buffers.

*Micro‑accommodations:* Use historical benchmarks, phase estimates and a default buffer rule; schedule regular progress check‑ins to adjust timelines.

*Peer scripts:* 
- “Let’s use project X as a benchmark and add a buffer.”  
- “Can we set micro‑deadlines for each phase?”

*Trial metrics:* Percentage of deadlines met; average buffer used; variance between estimated and actual duration.

*Tools/supports:* Timeline templates, milestone trackers, Gantt charts.

*Privacy phrasing:* “I’m using a conservative timeline based on past projects to avoid overcommitment.”

---

**Task Initiation Difficulty**
- **Manifestation:** Paralysis without a clear first experiment or data point; perfectionistic threshold for starting work.
- **Behaviour impact:** Delays the beginning of exploratory research.
- **Distortion:** Intellectual curiosity stalls and momentum is lost.
- **Snapshot:** Asks for a sample dataset or working example before starting any coding.
- **Work/bandwidth impact:** Slow starts result in compressing later phases.
- **Risk if ignored:** Missed innovation windows; stress on downstream teams.
- **Best way to approach:** Provide a one‑sentence first action and pair for kickoff to overcome inertia.

*Micro‑accommodations:* Schedule a 30‑minute kickoff pairing session; include a “first action” note; provide sample data or a stub script.

*Peer scripts:* 
- “What’s one tiny test we can run in a day?”  
- “I’ll pair for the first session to get you started.”

*Trial metrics:* Time from assignment to first experiment; number of ideas reaching a prototype.

*Tools/supports:* Kickoff slots, checklists, sample data repositories.

*Privacy phrasing:* “Can we pair for the first 30 minutes so I can get started?”

---

**Context‑Switching Difficulty**
- **Manifestation:** High cognitive cost moving between deep work and meetings; reorienting disrupts flow.
- **Behaviour impact:** Declines ad‑hoc collaboration and requests written briefs or asynchronous updates.
- **Distortion:** Single‑threading reduces cross‑team input and slows coordination.
- **Snapshot:** Skips a quick sync and asks for a short written summary instead.
- **Work/bandwidth impact:** Misalignment, duplication of work, missed dependencies.
- **Risk if ignored:** Project delays and frustrated partners.
- **Best way to approach:** Batch meetings to minimise context switching; provide concise written briefs; schedule predictable catch‑ups.

*Micro‑accommodations:* Group meetings together; share briefs ahead of time; allocate 15‑minute recap windows.

*Peer scripts:* 
- “I’ll send a short brief instead of interrupting your flow.”  
- “Can we schedule a 20‑minute sync after your deep work?”

*Trial metrics:* Number of missed syncs; percentage of items resolved via briefs; time spent context switching.

*Tools/supports:* Async update channels, pre‑read templates, shared calendars.

*Privacy phrasing:* “I prefer a short brief and a scheduled 20‑minute sync after my deep work.”

---

**Hyperfocus Patterns**
- **Manifestation:** Intense immersion in one technical area; loses track of time and neglects integration.
- **Behaviour impact:** Produces exceptional depth but uneven delivery on the overall project.
- **Distortion:** Tunnel vision reduces product fit and delays the broader system release.
- **Snapshot:** Builds a brilliant algorithm but misses the integration deadline or necessary documentation.
- **Work/bandwidth impact:** Imbalanced delivery; colleagues must scramble to fill gaps.
- **Risk if ignored:** Team friction and potential burnout.
- **Best way to approach:** Set visible stop signals and scheduled handoffs; include mid‑cycle check‑ins for integration.

*Micro‑accommodations:* Mid‑pilot check‑ins; shared priority list; mandatory integration checkpoints.

*Peer scripts:* 
- “Set a mid‑pilot check‑in so we don’t lose other priorities.”  
- “Ping me when you hit X so we can re‑prioritise.”

*Trial metrics:* Missed commitments while hyperfocused; percentage of pilots with mid‑cycle check‑ins.

*Tools/supports:* Progress board, reminders, integration review meetings.

*Privacy phrasing:* “I’m in a focused sprint — I’ll set a mid‑sprint check‑in.”

---

**Rejection Sensitivity**
- **Manifestation:** Avoids sharing early drafts; over‑polishes before letting others see work.
- **Behaviour impact:** Slower iteration cycles and hidden perfectionism.
- **Distortion:** Learning is delayed; feedback arrives late.
- **Snapshot:** Circulates near‑final drafts privately rather than inviting feedback early.
- **Work/bandwidth impact:** Slower improvement; less iterative alignment.
- **Risk if ignored:** Isolation and misaligned output.
- **Best way to approach:** Provide private, specific feedback and create safe preview sessions.

*Micro‑accommodations:* Offer private preview sessions; use a feedback sandwich (highlight strengths plus one tweak); emphasise incremental feedback.

*Peer scripts:* 
- “Can I preview this privately and give one focused suggestion?”  
- “This is strong; one tweak that could help is X.”

*Trial metrics:* Number of private previews; change in frequency of early sharing.

*Tools/supports:* Private feedback channels, short feedback templates.

*Privacy phrasing:* “I prefer private previews on early drafts — can we do that?”

---

**Masking Fatigue**
- **Manifestation:** Exhaustion from continually translating technical concepts for non‑technical audiences or suppressing personal interests.
- **Behaviour impact:** Reduces spontaneity and creativity; avoids casual brainstorms.
- **Distortion:** Curiosity and creative contributions are suppressed.
- **Snapshot:** Stops contributing to informal team brainstorms and only speaks when directly asked.
- **Work/bandwidth impact:** Lowered team creativity and missed ideas.
- **Risk if ignored:** Burnout and disengagement.
- **Best way to approach:** Provide low‑visibility contribution channels and permit recovery time after intense interpretive work.

*Micro‑accommodations:* Offer an idea document for asynchronous contributions; schedule recovery half‑days after high‑communication periods.

*Peer scripts:* 
- “Drop your idea in this doc and I’ll surface it.”  
- “Take a recovery half‑day after the sprint; we’ve got your back.”

*Trial metrics:* Number of asynchronous contributions; self‑reported energy after recovery.

*Tools/supports:* Shared idea document, opt‑out mechanisms for live brainstorms.

*Privacy phrasing:* “I’ll drop my idea in the doc this round while I recharge.”

---

**Social Communication Load**
- **Manifestation:** Extra effort is required to translate technical work for broader audiences.
- **Behaviour impact:** Prefers detailed memos over live summaries; may avoid social selling.
- **Distortion:** Influence outside the technical team weakens.
- **Snapshot:** Sends a long technical memo rather than a short executive summary.
- **Work/bandwidth impact:** Slower stakeholder alignment and buy‑in.
- **Risk if ignored:** Technical input is sidelined; duplication of work.
- **Best way to approach:** Provide executive summary templates and co‑presenting support.

*Micro‑accommodations:* Supply a three‑bullet executive summary template; pair with a non‑technical co‑presenter for stakeholder meetings.

*Peer scripts:* 
- “I’ll draft a three‑bullet summary you can use for the execs.”  
- “Would you like me to co‑present the non‑technical part?”

*Trial metrics:* Percentage of stakeholders reached; follow‑through after presentations.

*Tools/supports:* Summary templates, co‑presenter pairing.

*Privacy phrasing:* “Can I send a short summary for the execs and have you present it?”

---

**Need for Written Instructions**
- **Manifestation:** Performs best with documented protocols, examples and standard operating procedures.
- **Behaviour impact:** Frequently requests templates; resists ambiguous or verbal instructions.
- **Distortion:** Agility is reduced by over‑reliance on written rules, but errors are fewer.
- **Snapshot:** Asks for a step‑by‑step protocol before running an experiment.
- **Work/bandwidth impact:** Higher accuracy; slower responsiveness.
- **Risk if ignored:** Errors due to misremembered verbal instructions.
- **Best way to approach:** Supply concise protocols and examples; normalise template use.

*Micro‑accommodations:* Provide protocol templates and example files; maintain an easily searchable template library.

*Peer scripts:* 
- “Here’s a short protocol — want me to fill the first section?”  
- “If you give me an example, I’ll adapt it.”

*Trial metrics:* Percentage of tasks with templates; number of clarifying follow‑ups.

*Tools/supports:* Template library, example code base.

*Privacy phrasing:* “I prefer a short protocol and an example before I start.”

---

**Need for Reduced Interruption**
- **Manifestation:** Deep work is easily derailed by interruptions; high cognitive load to regain context.
- **Behaviour impact:** Uses long focus blocks and declines ad‑hoc asks to preserve cognitive bandwidth.
- **Distortion:** Collaboration is limited to scheduled windows; team members may misinterpret this as uncooperativeness.
- **Snapshot:** Marks calendar busy and does not respond to pings during deep work.
- **Work/bandwidth impact:** Coordination gaps versus higher quality outputs.
- **Risk if ignored:** Chronic inefficiency and tension in the team.
- **Best way to approach:** Respect focus blocks and provide asynchronous updates.

*Micro‑accommodations:* Schedule focus blocks; use asynchronous three‑bullet updates; set clear escalation protocols for urgent issues.

*Peer scripts:* 
- “I’ll send a three‑bullet update after your block.”  
- “If it’s urgent, text ‘URGENT’ and I’ll respond.”

*Trial metrics:* Interruptions during blocks; percentage of items resolved asynchronously; time saved from reduced context switching.

*Tools/supports:* Calendar focus blocks, asynchronous update templates, Slack status conventions.

*Privacy phrasing:* “I’m in a focus block — please send a three‑bullet update if it’s not urgent.”

---

**Need for Structure Without Shame**
- **Manifestation:** Prefers templates and structure but may feel embarrassed to ask for them.
- **Behaviour impact:** Builds private systems or works in isolation; misalignment and duplicated effort occur.
- **Distortion:** Rigour becomes hidden inefficiency and lack of transparency.
- **Snapshot:** Keeps private code snippets or analysis pipelines rather than adding them to shared libraries.
- **Work/bandwidth impact:** Duplicated effort, friction in collaboration.
- **Risk if ignored:** Reduced trust and inefficiency.
- **Best way to approach:** Normalise shared templates and co‑creation of structure; frame structure as professional rather than remedial.

*Micro‑accommodations:* Shared template repository, coding standards workshops, optional “structure sessions.”

*Peer scripts:* 
- “Can I share a short template that might help?”  
- “Would you like to co‑create a standard we can all use?”

*Trial metrics:* Percentage of the team using standard templates; time saved through reuse.

*Tools/supports:* Shared repository, version control with templates.

*Privacy phrasing:* “I have a short template that helps me — can I share it?”

---

**Dyslexia / Dyscalculia / Dysgraphia / Dyspraxia**
- **Manifestation:** Extra time for reading, writing or numeric tasks; may prefer spoken explanations or visual aids.
- **Behaviour impact:** Slower document turnaround; relies on assistive tools or colleagues for writing and calculations.
- **Distortion:** Output quality remains high but throughput drops.
- **Snapshot:** Spends extra hours polishing a short methods section or debugging numeric calculations.
- **Work/bandwidth impact:** Slower publication cadence and possible bottlenecks.
- **Risk if ignored:** Missed deadlines and misinterpretation of data.
- **Best way to approach:** Provide assistive technology, co‑author support and be flexible with deadlines when quality matters.

*Micro‑accommodations:* Use speech‑to‑text for documentation; provide calculators and formula checkers; pair on write‑ups.

*Peer scripts:* 
- “I can help draft the write‑up from your notes.”  
- “Record a voice note and I’ll transcribe it.”

*Trial metrics:* Time to publish; percentage of documents co‑authored or assisted by tools; error rate.

*Tools/supports:* Speech‑to‑text software, calculators, templates, co‑authoring tools.

*Privacy phrasing:* “I prefer to record a voice note for the write‑up — can I send that?”

---

**Auditory Processing / Sensory Processing / Tourette Syndrome**
- **Manifestation:** Difficulty processing fast speech or multi‑speaker discussions; sensory overload triggers stress or tics.
- **Behaviour impact:** Prefers captions, slides and written summaries; limits participation in noisy or chaotic sessions.
- **Distortion:** Live participation decreases; colleagues may mistake quietness for disengagement.
- **Snapshot:** Asks for meeting notes after a rapid Q&A session.
- **Work/bandwidth impact:** Risk of miscommunication and repeated explanations.
- **Risk if ignored:** Errors and exclusion.
- **Best way to approach:** Use captions, share slides or notes in advance, allow written contributions and provide quiet rooms for deep discussions.

*Micro‑accommodations:* Captions on calls; slides/notes in advance; quiet rooms; asynchronous Q&A documents.

*Peer scripts:* 
- “I’ll share the slides and notes before the meeting.”  
- “Drop your questions in the doc and I’ll read them aloud.”

*Trial metrics:* Number of written contributions; meeting comfort rating; reduction in repeated explanations.

*Tools/supports:* Live captions, shared decks, quiet workspaces.

*Privacy phrasing:* “I’ll drop my questions in the doc and follow up after the meeting.”

---

**Working Memory / Processing Speed Differences**
- **Manifestation:** Needs external aids to manage multiple threads and extra time to synthesise complex information.
- **Behaviour impact:** Prefers pre‑reads and reflection time; slower during fast exchanges but delivers higher quality after reflection.
- **Distortion:** Rapid ideation may not translate into timely integrated plans.
- **Snapshot:** Offers strong verbal direction in a meeting but needs extra time to produce a coherent plan.
- **Work/bandwidth impact:** Slower documentation and handoffs; higher quality after reflection.
- **Risk if ignored:** Hasty decisions and missed nuance.
- **Best way to approach:** Provide concise pre‑reads, use short recap pauses, and allow reflection windows before finalising decisions.

*Micro‑accommodations:* Send pre‑reads 24‑48 hours before meetings; include five‑minute recap breaks; allow post‑meeting reflection before decisions are final.

*Peer scripts:* 
- “I’ll send a two‑slide summary before the meeting so you can reflect.”  
- “Let’s pause for five minutes after the presentation to gather thoughts.”

*Trial metrics:* Percentage of decisions postponed for reflection; quality of final plans after reflection; measured decision errors.

*Tools/supports:* Pre‑read templates, meeting recap prompts, shared decision trackers.

*Privacy phrasing:* “I prefer a short pre‑read and a five‑minute pause after the meeting to finalise my input.”

`,
  },
  {
    id: "spiral-dynamics-graves-values-lens",
    lens: "Spiral Dynamics (Graves Values) Lens",
    status: "",
    source: "Spiral_Dynamics_Lens.txt",
    content: `
Spiral Dynamics (Graves Values) Lens
===================================

**Overview**

Spiral Dynamics is a value‑system model derived from the work of psychologist Clare W. Graves.  It describes human development as a series of evolving value systems or “vMEMEs”, each representing a worldview shaped by life conditions.  The stages are not inherently better or worse—rather, they reflect increasingly complex ways of navigating reality.  The principal stages are:

* **Beige – Survival Instinctive:** Focus on basic survival and biological needshttps://scottjeffrey.com/spiral-dynamics/#:~:text=Beige%3A%20The%20Instinctive%20Self.
* **Purple – Tribal/Magical:** Emphasis on safety, belonging and tradition; loyalty to the tribehttps://scottjeffrey.com/spiral-dynamics/#:~:text=Beige%3A%20The%20Instinctive%20Self.
* **Red – Power/Impulsive:** Pursuit of power, glory and immediate gratification; heroic, dominant, egocentrichttps://scottjeffrey.com/spiral-dynamics/#:~:text=Beige%3A%20The%20Instinctive%20Self.
* **Blue – Rule/Role:** Seek order, stability and absolute truth; adhere to rules and moral codeshttps://scottjeffrey.com/spiral-dynamics/#:~:text=Beige%3A%20The%20Instinctive%20Self.
* **Orange – Achiever:** Driven by rationality, achievement and autonomy; values science, progress and successhttps://scottjeffrey.com/spiral-dynamics/#:~:text=Beige%3A%20The%20Instinctive%20Self.
* **Green – Communitarian:** Prioritises equality, consensus and connection; values sensitivity and communityhttps://scottjeffrey.com/spiral-dynamics/#:~:text=Beige%3A%20The%20Instinctive%20Self.
* **Yellow – Integrative:** Integrates previous stages, embraces complexity and systems thinking; seeks flexible, self‑expressive solutionshttps://scottjeffrey.com/spiral-dynamics/#:~:text=Beige%3A%20The%20Instinctive%20Self.
* **Turquoise – Holistic:** Views the world as an interconnected whole; focuses on global consciousness and the wellbeing of the entire systemhttps://scottjeffrey.com/spiral-dynamics/#:~:text=Beige%3A%20The%20Instinctive%20Self.

Most individuals and organisations express a dominant stage along with elements of adjacent stages.  Under stress, people may regress to an earlier stage.  Understanding these stages helps leaders anticipate motivations and communication styles.

**Spiral Dynamics Crosswalk by PI Profile**

The table below assigns each PI profile to a predominant Spiral Dynamics stage.  These assignments are interpretive and not prescriptive; individuals often demonstrate characteristics of multiple stages.

| PI Profile | Dominant value stage | Secondary tendencies | Stress pattern | Strengths & vulnerabilities |
|---|---|---|---|---|
| **Analyzer** | **Blue / Orange** | Green | Under pressure may retreat into rigid rules (Blue) | Strength: disciplined, data‑driven decision‑maker; vulnerability: may be dogmatic or bureaucratic. |
| **Controller** | **Blue / Red** | Orange | When stressed, shifts to Red dominance and exerts control | Strength: provides structure and authority; vulnerability: can become authoritarian or suppressive. |
| **Specialist** | **Green / Blue** | Yellow | Retreats into safe routines when pressured (Blue) | Strength: relational and community‑oriented expert; vulnerability: may resist change and over‑identify with group norms. |
| **Strategist** | **Yellow / Orange** | Blue | Under stress may assert power (Red/Blue) | Strength: systems thinker who integrates multiple perspectives; vulnerability: can become aloof or overly theoretical. |
| **Venturer** | **Red / Orange** | Yellow | When stressed may revert to impulsive Red behaviour | Strength: bold achiever and risk‑taker; vulnerability: may ignore consequences and over‑compete. |
| **Altruist** | **Green** | Blue / Yellow | Under stress may become self‑sacrificing (Purple–Blue) | Strength: empathetic and inclusive; vulnerability: may avoid conflict and struggle with boundaries. |
| **Captain** | **Red / Orange** | Blue | Stress amplifies dominance and control (Red) | Strength: charismatic leader who drives results; vulnerability: may overwhelm or polarise others. |
| **Collaborator** | **Green** | Yellow | Under stress may accommodate excessively (Purple) | Strength: facilitates consensus and harmony; vulnerability: may avoid decisive action. |
| **Maverick** | **Red / Orange** | Green | Under stress may reject rules entirely (Red) | Strength: creative disruptor and challenger; vulnerability: can be chaotic or rebellious. |
| **Persuader** | **Orange / Red** | Green | May become manipulative under pressure (Red) | Strength: persuasive, achievement‑oriented influencer; vulnerability: risk of superficiality or excessive self‑promotion. |
| **Promoter** | **Orange** | Red / Yellow | Over‑promises and exaggerates under stress | Strength: energetic promoter and networker; vulnerability: may sacrifice integrity for attention. |
| **Adapter** | **Green / Blue** | Yellow | Withdraws to safe routines (Purple‑Blue) | Strength: flexible, supportive and adaptable; vulnerability: may lack conviction and direction. |
| **Craftsman** | **Blue / Orange** | Green | Becomes rigid and perfectionistic under stress | Strength: delivers high‑quality work through discipline; vulnerability: may resist innovation or big picture thinking. |
| **Guardian** | **Blue / Purple** | Green | Retracts to tradition and caution under stress | Strength: provides stability and continuity; vulnerability: may fear change and stifle creativity. |
| **Operator** | **Blue / Orange** | Green | Under pressure may follow rules blindly | Strength: efficient executor and organiser; vulnerability: may not challenge flawed processes. |
| **Individualist** | **Yellow / Red** | Orange | Can withdraw or compete aggressively under stress | Strength: independent, integrative thinker; vulnerability: may seem detached or contrarian. |
| **Scholar** | **Yellow / Green** | Blue | Under stress may over‑analyse and withdraw | Strength: deep thinker with holistic perspective; vulnerability: may delay decisions or lose practical focus. |

**Using this lens**

* Recognise that each stage reflects how people interpret the world.  Communicate and motivate by appealing to the value system someone is operating from—e.g., emphasise goals and progress for Orange achievers, or community and fairness for Green communitarians.
* Avoid judging any stage as superior; each has strengths and limitations.  Teams benefit from diversity across the spiral—Orange achievers drive results, Green collaborators ensure inclusion and Yellow strategists integrate complexity.
* Under stress, individuals often regress to earlier stages.  For example, a Yellow strategist may become controlling (Red/Blue) when threatened.  Anticipating stress regressions helps leaders support colleagues effectively.`,
  },
  {
    id: "strength-deployment-inventory-sdi-lens",
    lens: "Strength Deployment Inventory (SDI) Lens",
    status: "",
    source: "Strength_Deployment_Inventory.txt",
    content: `
Strength Deployment Inventory (SDI) Lens
========================================

**Overview**

The Strength Deployment Inventory (SDI) is a motivational model created by psychologist Elias Porter.  It holds that people are driven by a combination of three core value orientations:

* **Altruistic‑Nurturing (Blue):** Individuals with high blue motivation derive self‑worth from helping and caring for others.  They value cooperation, harmony and personal connection.  Typical behaviours include being trusting, optimistic and supportivehttps://www.teambuildingsolutions.co.uk/sdi#:~:text=A%20basic%20premise%20,about%20themselves%20as%20a%20person.
* **Assertive‑Directing (Red):** Red‑driven people find worth in achieving results and taking decisive action.  They value task accomplishment, efficiency and assertiveness.  They tend to be decisive, competitive and comfortable taking chargehttps://www.teambuildingsolutions.co.uk/sdi#:~:text=A%20basic%20premise%20,about%20themselves%20as%20a%20person.
* **Analytical‑Autonomizing (Green):** Green‑motivated individuals derive worth from understanding and order.  They value accuracy, rationality and independence.  They tend to be methodical, objective and self‑relianthttps://www.teambuildingsolutions.co.uk/sdi#:~:text=A%20basic%20premise%20,about%20themselves%20as%20a%20person.
* **Flexible‑Cohering (Hub):** Some individuals draw from all three motivations and flex to align with others.  They value cohesion, versatility and maintaining group harmony.

Most people have a primary motivation and a blend of secondary motivations.  Under stress, they may shift into a different style (e.g., a blue person may over‑accommodate or withdraw).  The SDI helps teams understand motivational differences, appreciate each other’s strengths and reduce conflict.

**SDI Crosswalk by PI Profile**

The table below maps the 17 Predictive Index (PI) behavioural profiles to their likely motivational value systems.  Because individuals are complex, these mappings are approximate.  The primary column shows the dominant motivational colour; the secondary column reflects blended motivations; the stress pattern summarises how the profile may react under pressure.

| PI Profile | Primary motivational value system | Secondary blend | Stress response | Strengths & vulnerabilities |
|---|---|---|---|---|
| **Analyzer** | **Green** (Analytical‑Autonomizing) | Red (task achievement) | Withdraws and becomes overly perfectionistic | Strength: rigorous analysis and logical rigour.  Vulnerability: may become rigid or detached when stressed. |
| **Controller** | **Red** (Assertive‑Directing) | Blue (nurturing rules) | Becomes controlling and micromanages | Strength: decisive, moves initiatives forward.  Vulnerability: can be authoritarian and inflexible. |
| **Specialist** | **Blue** (Altruistic‑Nurturing) | Green (analytical) | Withdraws and internalises stress | Strength: deep expertise and supportive collaboration.  Vulnerability: may avoid confrontation and delay decisions. |
| **Strategist** | **Green** (Analytical‑Autonomizing) | Red (assertive) | Pushes for control when under pressure | Strength: systems thinking and strategic planning.  Vulnerability: can become dismissive or controlling when goals are threatened. |
| **Venturer** | **Red** (Assertive‑Directing) | Yellow (creative enthusiasm) | Impulsive or domineering | Strength: bold risk‑taking and rapid decision‑making.  Vulnerability: may ignore details or others’ needs. |
| **Altruist** | **Blue** (Altruistic‑Nurturing) | Green (order) | Over‑accommodates and self‑sacrifices | Strength: caring, empathetic team‑building.  Vulnerability: difficulty saying no and may neglect own needs. |
| **Captain** | **Red** (Assertive‑Directing) | Yellow (social) | Becomes aggressive and dominating | Strength: motivates others and drives toward results.  Vulnerability: may steamroll colleagues and ignore input. |
| **Collaborator** | **Blue** (Altruistic‑Nurturing) | Yellow (expressive) | Avoids conflict, seeks consensus | Strength: inclusive, harmonising facilitator.  Vulnerability: may struggle with decisiveness and prioritisation. |
| **Maverick** | **Red** (Assertive‑Directing) | Blue (nurturing) | Pushes boundaries and resists control | Strength: challenges the status quo and sparks innovation.  Vulnerability: may disregard rules and create chaos. |
| **Persuader** | **Red‑Blue** (Assertive‑Nurturing) | Yellow (expressive) | Dramatises and pressures for agreement | Strength: charismatic influencer and motivator.  Vulnerability: can overpromise and manipulate. |
| **Promoter** | **Red‑Blue** (Assertive‑Nurturing) | Yellow (expressive) | Over‑commits and seeks attention | Strength: enthusiastic champion and networker.  Vulnerability: may neglect follow‑through and detail. |
| **Adapter** | **Blue‑Green** (Cautious‑Supporting) | Hub (flexible) | Withdraws quietly and avoids decisions | Strength: flexible, supportive and patient.  Vulnerability: may be indecisive and overly accommodating. |
| **Craftsman** | **Green** (Analytical‑Autonomizing) | Blue (support) | Becomes perfectionistic and critical | Strength: meticulous craftsmanship and reliability.  Vulnerability: may get bogged down in details and resist change. |
| **Guardian** | **Blue‑Green** (Cautious‑Supporting) | Hub | Becomes defensive and conservative | Strength: stabilising, protective and dependable.  Vulnerability: may resist innovation and over‑protect. |
| **Operator** | **Green** (Analytical‑Autonomizing) | Blue (support) | Becomes rigid and dogmatic | Strength: reliable implementer and process expert.  Vulnerability: may over‑enforce rules and overlook relationships. |
| **Individualist** | **Green‑Red** (Judicious‑Competing) | Yellow (creative) | Disengages or competes | Strength: independent thinker who combines analysis with drive.  Vulnerability: may appear aloof or combative. |
| **Scholar** | **Green** (Analytical‑Autonomizing) | Blue (support) | Over‑analyses and withdraws | Strength: deep knowledge and research capability.  Vulnerability: may delay action and avoid conflict. |

**Using this lens**

* Recognise that each person’s primary motivation colours how they view work, feedback and conflict.  Blue‑oriented profiles respond best to empathy and collaboration; red‑oriented profiles appreciate decisiveness and clear goals; green‑oriented profiles need logic, autonomy and time to think.
* Under stress, people often overuse their strengths.  For example, a red captain under pressure may become domineering, while a blue altruist may self‑sacrifice.  Use the stress column above to anticipate and mitigate these reactions.
* Encourage teams to identify and appreciate each other’s motivational blends.  Balanced teams that include blue, red, green and hub energies can draw on a wider range of strengths and reduce blind spots.`,
  },
];

// Index by id for O(1) lookup
export const signalGlassLensIndex = Object.fromEntries(
  signalGlassStaticLenses.map(l => [l.id, l])
);

// Index by lens name
export const signalGlassLensByName = Object.fromEntries(
  signalGlassStaticLenses.map(l => [l.lens, l])
);