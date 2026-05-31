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
];

// Index by id for O(1) lookup
export const signalGlassLensIndex = Object.fromEntries(
  signalGlassStaticLenses.map(l => [l.id, l])
);

// Index by lens name
export const signalGlassLensByName = Object.fromEntries(
  signalGlassStaticLenses.map(l => [l.lens, l])
);