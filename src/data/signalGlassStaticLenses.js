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
];

// Index by id for O(1) lookup
export const signalGlassLensIndex = Object.fromEntries(
  signalGlassStaticLenses.map(l => [l.id, l])
);

// Index by lens name
export const signalGlassLensByName = Object.fromEntries(
  signalGlassStaticLenses.map(l => [l.lens, l])
);