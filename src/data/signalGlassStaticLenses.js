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
  }
];

// Index by id for O(1) lookup
export const signalGlassLensIndex = Object.fromEntries(
  signalGlassStaticLenses.map(l => [l.id, l])
);

// Index by lens name
export const signalGlassLensByName = Object.fromEntries(
  signalGlassStaticLenses.map(l => [l.lens, l])
);