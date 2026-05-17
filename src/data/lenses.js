export const lensCatalog = [
  {
    id: 'big-five', label: 'Big Five', category: 'Personality',
    summary: 'Infers broad workplace tendencies related to openness, conscientiousness, extraversion, agreeableness, and emotional regulation from PI-style drives.',
    factorWeights: { Dominance: .35, Extraversion: .85, Patience: .35, Formality: .75 },
    outputs: ['Conscientiousness tendency', 'Social energy', 'Openness to change', 'Cooperation style', 'Stress reactivity caution'],
    means: 'A translation layer that helps managers understand broad work tendencies without treating them as fixed labels.',
    doesNotMean: 'This is not a formal Big Five assessment and should not claim validated trait scores.',
    managerUse: ['Use to shape communication, autonomy, feedback, and change pacing.', 'Compare the inferred tendency with the person’s own self-description.', 'Use as a conversation aid, not a decision rule.'],
    misreadRisks: ['Low extraversion can be misread as disengagement.', 'High formality can be misread as rigidity.', 'High dominance can be misread as hostility.'],
    citations: ['Five-factor model personality research', 'Occupational personality and job performance literature', 'Personality at work research']
  },
  {
    id: 'disc', label: 'DISC', category: 'Personality',
    summary: 'Maps PI-style drives into a familiar dominance, influence, steadiness, and conscientiousness communication lens.',
    factorWeights: { Dominance: .9, Extraversion: .8, Patience: .65, Formality: .75 },
    outputs: ['D-like drive', 'I-like influence', 'S-like steadiness', 'C-like precision'],
    means: 'A fast communication-style bridge for managers who already understand DISC language.',
    doesNotMean: 'This is not a licensed DISC assessment or official DISC score.',
    managerUse: ['Use to explain communication differences quickly.', 'Pair high-D styles with clear decision rights.', 'Pair high-C styles with standards and documentation.'],
    misreadRisks: ['Directness is not disrespect.', 'Sociability is not superficiality.', 'Steadiness is not lack of ambition.'],
    citations: ['Workplace communication style research', 'Behavioral style frameworks', 'Team interaction literature']
  },
  {
    id: 'hogan', label: 'Hogan', category: 'Personality',
    summary: 'Provides a careful leadership-derailer lens: how strengths may overextend under pressure.',
    factorWeights: { Dominance: .8, Extraversion: .55, Patience: .45, Formality: .65 },
    outputs: ['Overused strength risk', 'Pressure behavior', 'Leadership caution', 'Reputation management need'],
    means: 'A derailment-risk interpretation that helps leaders coach strengths before they become friction.',
    doesNotMean: 'This is not a Hogan assessment and should not label people with derailers.',
    managerUse: ['Use to plan coaching conversations.', 'Normalize that every strength has an overuse pattern.', 'Frame as support, not warning.'],
    misreadRisks: ['Risk tolerance may be misread as recklessness.', 'Precision may be misread as negativity.', 'Reserved processing may be misread as secrecy.'],
    citations: ['Leadership derailment research', 'Hogan-style occupational personality literature', 'Strength overuse research']
  },
  {
    id: 'mbti', label: 'MBTI', category: 'Personality',
    summary: 'Uses MBTI-style language as a work-preference translation lens for energy, information, decisions, and structure.',
    factorWeights: { Dominance: .45, Extraversion: .85, Patience: .45, Formality: .7 },
    outputs: ['Energy preference', 'Information preference', 'Decision preference', 'Structure preference'],
    means: 'A nonclinical work-preference summary that makes communication and planning easier to discuss.',
    doesNotMean: 'This is not an MBTI type assignment or official MBTI interpretation.',
    managerUse: ['Use as plain-language work preference language.', 'Avoid boxing people into fixed types.', 'Ask the person what fits and what does not.'],
    misreadRisks: ['Introversion is not disengagement.', 'Preference for structure is not inflexibility.', 'Action orientation is not lack of thought.'],
    citations: ['Psychological type theory as workplace language', 'Communication preference literature', 'Team preference frameworks']
  },
  {
    id: 'cliftonstrengths', label: 'CliftonStrengths', category: 'Strengths',
    summary: 'Infers likely contribution themes such as execution, influence, relationship-building, and strategic thinking.',
    factorWeights: { Dominance: .7, Extraversion: .7, Patience: .55, Formality: .55 },
    outputs: ['Execution themes', 'Influence themes', 'Relationship themes', 'Strategic thinking themes'],
    means: 'A strengths-first view of what the person may naturally contribute when supported well.',
    doesNotMean: 'This is not a CliftonStrengths report or ranked theme list.',
    managerUse: ['Assign work that uses natural energy.', 'Recognize contributions in the person’s preferred style.', 'Pair strengths with practical support.'],
    misreadRisks: ['Strong execution can be taken for granted.', 'Influence can be mistaken for showmanship.', 'Strategic thinking can be mistaken for criticism.'],
    citations: ['Positive psychology at work', 'Strengths-based development literature', 'Employee engagement research']
  },
  {
    id: 'via-character', label: 'VIA Character Strengths', category: 'Strengths',
    summary: 'Frames possible character-strength expression such as prudence, curiosity, leadership, kindness, perseverance, and teamwork.',
    factorWeights: { Dominance: .45, Extraversion: .45, Patience: .55, Formality: .55 },
    outputs: ['Prudence', 'Curiosity', 'Leadership', 'Teamwork', 'Perseverance'],
    means: 'A values-oriented strengths lens focused on how people may show integrity, care, persistence, and judgment at work.',
    doesNotMean: 'This is not an official VIA inventory score.',
    managerUse: ['Use to recognize character-based contributions.', 'Avoid reducing a person to productivity.', 'Connect work to meaning and values.'],
    misreadRisks: ['Humility can be missed.', 'Caution can be mistaken for negativity.', 'Kindness can be mistaken for lack of boundaries.'],
    citations: ['VIA character strengths literature', 'Positive organizational scholarship', 'Meaning at work research']
  },
  {
    id: 'cognitive-processing', label: 'Cognitive Processing', category: 'Cognition',
    summary: 'Explains likely information-processing preferences: abstract vs concrete, detail vs global, analytical vs intuitive, and systems thinking.',
    factorWeights: { Dominance: .55, Extraversion: .2, Patience: .35, Formality: .75 },
    outputs: ['Information filtering style', 'Problem-framing style', 'Pattern recognition', 'Systems thinking', 'Detail/global balance'],
    means: 'A lens for understanding how the person may take in, organize, and transform information.',
    doesNotMean: 'This does not measure intelligence or cognitive ability.',
    managerUse: ['Match instructions to processing style.', 'Give context and examples when ambiguity is high.', 'Offer written structure for detail-heavy work.'],
    misreadRisks: ['Slow processing can be deep processing.', 'Fast pattern recognition can miss implementation details.', 'Detail focus is not inability to think strategically.'],
    citations: ['Cognitive style research', 'Information processing theory', 'Cognitive load theory']
  },
  {
    id: 'executive-function', label: 'Executive Function', category: 'Cognition',
    summary: 'Visualizes work-management demands such as planning, task switching, prioritization, initiation, and interruption recovery.',
    factorWeights: { Dominance: .45, Extraversion: .25, Patience: .65, Formality: .8 },
    outputs: ['Planning support', 'Task switching load', 'Prioritization needs', 'Follow-through structure', 'Interruption recovery'],
    means: 'A support lens for reducing avoidable cognitive friction in complex work.',
    doesNotMean: 'This is not a neuropsychological evaluation or diagnosis.',
    managerUse: ['Clarify priorities.', 'Reduce unnecessary task switching.', 'Use written next steps and deadlines.', 'Build interruption recovery time.'],
    misreadRisks: ['Executive function strain may look like carelessness.', 'Overwhelm may look like avoidance.', 'Hyperfocus may look like inflexibility.'],
    citations: ['Executive function literature', 'ADHD workplace accommodation research', 'Cognitive load and task-switching research']
  },
  {
    id: 'decision-making', label: 'Decision-Making', category: 'Cognition',
    summary: 'Shows how quickly someone may move, how much evidence they may need, and how they relate to risk and ambiguity.',
    factorWeights: { Dominance: .85, Extraversion: .35, Patience: .45, Formality: .75 },
    outputs: ['Evidence threshold', 'Risk tolerance', 'Need for closure', 'Consensus vs autonomy', 'Escalation comfort'],
    means: 'A decision-support lens for matching pace, authority, and information needs.',
    doesNotMean: 'This does not determine whether someone makes good or bad decisions.',
    managerUse: ['Define decision rights.', 'Clarify acceptable risk.', 'Specify what evidence is enough.', 'Name when speed matters more than perfection.'],
    misreadRisks: ['Caution is not weakness.', 'Speed is not recklessness.', 'Consensus seeking is not lack of conviction.'],
    citations: ['Decision-making research', 'Risk perception literature', 'Need for closure research']
  },
  {
    id: 'motivation', label: 'Motivation', category: 'Cognition',
    summary: 'Translates PI drives into likely autonomy, competence, relatedness, mastery, recognition, and purpose needs.',
    factorWeights: { Dominance: .7, Extraversion: .65, Patience: .45, Formality: .5 },
    outputs: ['Autonomy needs', 'Competence needs', 'Relatedness needs', 'Recognition needs', 'Purpose alignment'],
    means: 'A manager lens for understanding what may energize effort and commitment.',
    doesNotMean: 'It does not prove what motivates a person; it suggests starting hypotheses.',
    managerUse: ['Ask what energizes the person.', 'Connect assignments to autonomy, mastery, connection, or purpose.', 'Use recognition that matches their style.'],
    misreadRisks: ['Low visible enthusiasm is not low motivation.', 'High autonomy need is not defiance.', 'Need for recognition is not vanity.'],
    citations: ['Self-Determination Theory', 'Achievement motivation research', 'Goal orientation literature']
  },
  {
    id: 'learning-style', label: 'Learning Style', category: 'Cognition',
    summary: 'Interprets how someone may learn best: examples, practice, written guides, coaching, independent study, or discussion.',
    factorWeights: { Dominance: .35, Extraversion: .45, Patience: .55, Formality: .75 },
    outputs: ['Training format fit', 'Feedback receptivity', 'Practice needs', 'Conceptual vs experiential learning', 'Transfer learning'],
    means: 'A training-design lens for helping people ramp faster and retain more.',
    doesNotMean: 'This avoids the unsupported idea that people only learn through one fixed style.',
    managerUse: ['Offer multiple learning channels.', 'Pair written instructions with examples.', 'Use coaching when social learning is helpful.'],
    misreadRisks: ['Asking questions is not incompetence.', 'Needing examples is not lack of intelligence.', 'Independent learning is not resistance.'],
    citations: ['Learning agility research', 'Adult learning theory', 'Feedback intervention literature']
  },
  {
    id: 'metacognition', label: 'Metacognition', category: 'Cognition',
    summary: 'Highlights how someone may monitor their own thinking, know when they need help, and adjust strategy after feedback.',
    factorWeights: { Dominance: .35, Extraversion: .25, Patience: .55, Formality: .65 },
    outputs: ['Self-monitoring', 'Reflective practice', 'Error review', 'Strategy adjustment', 'Help-seeking'],
    means: 'A lens for improving learning loops, quality review, and self-correction.',
    doesNotMean: 'This does not rate self-awareness as a fixed trait.',
    managerUse: ['Use debriefs after complex tasks.', 'Ask what worked and what should change.', 'Normalize help-seeking before errors compound.'],
    misreadRisks: ['Self-questioning can look like uncertainty.', 'Confidence can hide weak monitoring.', 'Perfectionism can block experimentation.'],
    citations: ['Metacognition research', 'Reflective practice literature', 'Self-regulated learning research']
  },
  {
    id: 'social-cognition', label: 'Social Cognition', category: 'Interpersonal',
    summary: 'Explores perspective-taking, trust-building, influence, group belonging, and social inference demands.',
    factorWeights: { Dominance: .45, Extraversion: .85, Patience: .55, Formality: .35 },
    outputs: ['Perspective-taking load', 'Influence style', 'Trust-building style', 'Boundary style', 'Belonging needs'],
    means: 'A relational lens for understanding how social context affects work behavior.',
    doesNotMean: 'It does not diagnose empathy, attachment, or social ability.',
    managerUse: ['Clarify social expectations.', 'Avoid assuming intent from style.', 'Make belonging and psychological safety explicit.'],
    misreadRisks: ['Quiet people may still be highly relational.', 'Animated communication may hide anxiety.', 'Boundary needs may be misread as distance.'],
    citations: ['Social cognition research', 'Belonging at work literature', 'Psychological safety research']
  },
  {
    id: 'emotional-intelligence', label: 'Emotional Intelligence', category: 'Interpersonal',
    summary: 'Frames emotion recognition, regulation, empathy, and relationship management as workplace support topics.',
    factorWeights: { Dominance: .35, Extraversion: .65, Patience: .6, Formality: .35 },
    outputs: ['Emotion regulation supports', 'Empathy style', 'Feedback sensitivity', 'Relationship repair', 'Conflict recovery'],
    means: 'A lens for coaching emotionally intelligent management responses.',
    doesNotMean: 'This does not score emotional intelligence or diagnose emotional capacity.',
    managerUse: ['Use calm feedback.', 'Name expectations without shame.', 'Give space after conflict when needed.'],
    misreadRisks: ['Emotional restraint is not lack of care.', 'Emotional expression is not instability.', 'Sensitivity is not weakness.'],
    citations: ['Emotional intelligence literature', 'Affective events theory', 'Emotion regulation research']
  },
  {
    id: 'conflict-style', label: 'Conflict Style', category: 'Interpersonal',
    summary: 'Shows likely comfort with directness, avoidance, collaboration, competition, and escalation.',
    factorWeights: { Dominance: .8, Extraversion: .45, Patience: .55, Formality: .45 },
    outputs: ['Directness comfort', 'Avoidance risk', 'Collaboration tendency', 'Escalation needs', 'Repair strategy'],
    means: 'A practical lens for preventing small friction from becoming relationship damage.',
    doesNotMean: 'It does not label someone as difficult or conflict-avoidant by identity.',
    managerUse: ['Set conflict norms.', 'Give scripts for hard conversations.', 'Separate policy from personal criticism.'],
    misreadRisks: ['Avoidance may signal low safety.', 'Directness may signal clarity, not aggression.', 'Collaboration may need more time.'],
    citations: ['Conflict management research', 'Organizational justice literature', 'Team conflict literature']
  },
  {
    id: 'maslach-burnout', label: 'Maslach Burnout', category: 'Wellbeing',
    summary: 'Uses burnout research categories as a non-diagnostic lens for exhaustion, cynicism, and reduced efficacy risk.',
    factorWeights: { Dominance: .35, Extraversion: .35, Patience: .75, Formality: .65 },
    outputs: ['Exhaustion risk', 'Cynicism risk', 'Efficacy strain', 'Recovery need', 'Workload mismatch'],
    means: 'A research-informed warning lens for workload and recovery design.',
    doesNotMean: 'This is not a Maslach Burnout Inventory score.',
    managerUse: ['Reduce overload.', 'Clarify priorities.', 'Add recovery time.', 'Address meaning and control.'],
    misreadRisks: ['Burnout can look like attitude.', 'Exhaustion can look like disengagement.', 'Reduced efficacy can look like capability decline.'],
    citations: ['Maslach Burnout Inventory literature', 'Burnout research', 'Occupational health psychology']
  },
  {
    id: 'who-5', label: 'WHO-5', category: 'Wellbeing',
    summary: 'References wellbeing concepts such as energy, interest, calm, rest, and daily functioning as manager awareness areas.',
    factorWeights: { Dominance: .25, Extraversion: .35, Patience: .55, Formality: .35 },
    outputs: ['Wellbeing check-in prompts', 'Energy signals', 'Rest/recovery needs', 'Mood caution', 'Functioning support'],
    means: 'A humane wellbeing lens for noticing support needs without diagnosing.',
    doesNotMean: 'This is not a WHO-5 screening score.',
    managerUse: ['Encourage support resources.', 'Adjust workload where appropriate.', 'Avoid interpreting low energy as low commitment.'],
    misreadRisks: ['Low enthusiasm can reflect depletion.', 'Withdrawal can reflect stress.', 'Reduced pace can reflect health strain.'],
    citations: ['WHO-5 wellbeing literature', 'Workplace wellbeing research', 'Occupational health research']
  },
  {
    id: 'copenhagen-burnout', label: 'Copenhagen Burnout', category: 'Wellbeing',
    summary: 'Separates personal, work-related, and client-related burnout as context clues.',
    factorWeights: { Dominance: .35, Extraversion: .45, Patience: .7, Formality: .55 },
    outputs: ['Personal burnout context', 'Work-related burnout context', 'Client-related burnout context', 'Recovery design'],
    means: 'A contextual burnout lens that asks where strain may be coming from.',
    doesNotMean: 'This is not a Copenhagen Burnout Inventory result.',
    managerUse: ['Separate client load from task load.', 'Review emotional labor.', 'Protect recovery cycles.'],
    misreadRisks: ['Client fatigue can look like poor service.', 'Work strain can look like personality change.', 'Personal burnout can be hidden.'],
    citations: ['Copenhagen Burnout Inventory literature', 'Emotional labor research', 'Job demands research']
  },
  {
    id: 'lived-experience', label: 'Lived Experience', category: 'Context',
    summary: 'Explains how social context, resources, culture, identity safety, neurodivergence, health, trauma, and life demands may bend workplace presentation.',
    factorWeights: { Dominance: .6, Extraversion: .6, Patience: .6, Formality: .6 },
    outputs: ['Context modifiers', 'Trait bending', 'Misread prevention', 'Support actions', 'Evidence library'],
    means: 'A manager education lens: behavior is not only personality. Context can mask, suppress, amplify, or temporarily change baseline presentation.',
    doesNotMean: 'It must never infer protected traits from behavior or score people by identity, trauma, disability, immigration, or poverty.',
    managerUse: ['Ask better questions.', 'Avoid moral judgments.', 'Use support and accommodations thinking.', 'Create psychological safety.'],
    misreadRisks: ['Survival pressure can look like impatience.', 'Masking fatigue can look like withdrawal.', 'Unsafe authority history can look like low initiative.', 'Cognitive overload can look like carelessness.'],
    citations: ['WHO Social Determinants of Health', 'CDC Social Determinants of Health', 'Adverse Childhood Experiences research', 'Trauma-informed care', 'Neurodiversity workplace inclusion', 'Job Demands-Resources model', 'Stereotype threat', 'Minority stress theory', 'Psychological safety research']
  },
  {
    id: 'communication', label: 'Communication', category: 'Manager Tools',
    summary: 'Converts PI-style drives into practical communication preferences, clarity needs, and feedback approach.',
    factorWeights: { Dominance: .55, Extraversion: .9, Patience: .45, Formality: .75 },
    outputs: ['Preferred channel', 'Level of detail', 'Feedback style', 'Meeting load fit', 'Written vs verbal balance'],
    means: 'A direct manager playbook for communicating without accidental friction.',
    doesNotMean: 'Communication preferences are not fixed rules; people can adapt with clarity.',
    managerUse: ['Match detail level.', 'Use written follow-up.', 'Balance speed with clarity.', 'Ask for preferred format.'],
    misreadRisks: ['Sparse communication is not indifference.', 'Talkative processing is not lack of focus.', 'Asking for details is not resistance.'],
    citations: ['Communication accommodation theory', 'Team communication research', 'Feedback environment literature']
  },
  {
    id: 'management', label: 'Management', category: 'Manager Tools',
    summary: 'Turns profile information into coaching, delegation, accountability, and support guidance.',
    factorWeights: { Dominance: .75, Extraversion: .55, Patience: .55, Formality: .7 },
    outputs: ['Delegation style', 'Coaching approach', 'Accountability structure', 'Recognition fit', 'Autonomy needs'],
    means: 'A practical operating manual for managing the person without misreading them.',
    doesNotMean: 'It does not replace real manager judgment or direct employee conversation.',
    managerUse: ['Define ownership.', 'Clarify quality standards.', 'Set check-in cadence.', 'Match autonomy to readiness.'],
    misreadRisks: ['Needs structure is not neediness.', 'Needs autonomy is not defiance.', 'Needs recognition is not insecurity.'],
    citations: ['Leader-member exchange research', 'Coaching research', 'Management by objectives literature']
  },
  {
    id: 'stress', label: 'Stress', category: 'Manager Tools',
    summary: 'Shows how overload, uncertainty, interruptions, and conflict may change how the person presents.',
    factorWeights: { Dominance: .45, Extraversion: .45, Patience: .85, Formality: .75 },
    outputs: ['Stress triggers', 'Overload presentation', 'Recovery needs', 'Misread risks', 'Support actions'],
    means: 'A context-aware lens for spotting strain before judging behavior.',
    doesNotMean: 'This does not diagnose stress disorders or mental health status.',
    managerUse: ['Reduce ambiguity.', 'Lower interruption load.', 'Sequence priorities.', 'Normalize recovery.'],
    misreadRisks: ['Stress can look like irritability.', 'Overload can look like disorganization.', 'Withdrawal can look like disengagement.'],
    citations: ['Transactional stress theory', 'Job strain research', 'Occupational stress literature']
  },
  {
    id: 'neurodiversity', label: 'Neurodiversity', category: 'Manager Tools',
    summary: 'Offers support-first guidance for ADHD, autism, learning differences, sensory load, executive function, and masking fatigue.',
    factorWeights: { Dominance: .4, Extraversion: .45, Patience: .65, Formality: .85 },
    outputs: ['Accessibility supports', 'Executive function supports', 'Sensory considerations', 'Written clarity needs', 'Masking fatigue caution'],
    means: 'A respectful accessibility lens that helps managers support different brains without stigma.',
    doesNotMean: 'The app must not infer diagnosis or require disclosure.',
    managerUse: ['Offer written instructions.', 'Reduce unnecessary interruptions.', 'Clarify priorities.', 'Provide structure without shame.'],
    misreadRisks: ['ADHD overwhelm can look like inconsistency.', 'Autistic masking can look like social ease until burnout.', 'Dyslexia can be missed in high performers.'],
    citations: ['Neurodiversity at work literature', 'ADHD workplace accommodation research', 'Autism employment inclusion research', 'Universal design principles']
  },
  {
    id: 'role-fit', label: 'Role Fit', category: 'Manager Tools',
    summary: 'Compares profile energy with role demands: pace, detail, autonomy, ambiguity, social load, and change load.',
    factorWeights: { Dominance: .65, Extraversion: .55, Patience: .7, Formality: .75 },
    outputs: ['Pace fit', 'Structure fit', 'Social load fit', 'Ambiguity fit', 'Autonomy fit'],
    means: 'A fit lens that identifies where the role may energize or drain the person.',
    doesNotMean: 'It should not be used as a hiring pass/fail rule.',
    managerUse: ['Adjust role design where possible.', 'Add supports for mismatch areas.', 'Distinguish ability from environment fit.'],
    misreadRisks: ['Poor fit can look like poor performance.', 'High skill can hide high strain.', 'Mismatch may be solvable with design changes.'],
    citations: ['Person-environment fit research', 'Work design theory', 'Job characteristics model']
  },
  {
    id: 'growth', label: 'Growth', category: 'Manager Tools',
    summary: 'Identifies growth path design: challenge level, coaching style, skill development, and readiness for stretch assignments.',
    factorWeights: { Dominance: .65, Extraversion: .45, Patience: .45, Formality: .55 },
    outputs: ['Stretch fit', 'Coaching style', 'Skill path', 'Feedback rhythm', 'Confidence support'],
    means: 'A development lens for helping people grow without overwhelming them.',
    doesNotMean: 'It does not predict potential with certainty.',
    managerUse: ['Set stretch goals carefully.', 'Pair autonomy with support.', 'Use feedback as skill-building, not criticism.'],
    misreadRisks: ['Caution can hide growth readiness.', 'Confidence can hide skill gaps.', 'Fast learners may still need structure.'],
    citations: ['Learning agility research', 'Growth mindset research with limitations', 'Coaching and feedback literature']
  },
  {
    id: 'team-fit', label: 'Team Fit', category: 'Manager Tools',
    summary: 'Shows likely team contribution, friction points, complementary pairings, and collaboration needs.',
    factorWeights: { Dominance: .65, Extraversion: .65, Patience: .65, Formality: .65 },
    outputs: ['Complementary strengths', 'Friction risks', 'Collaboration style', 'Meeting fit', 'Pairing suggestions'],
    means: 'A team-design lens for balancing speed, structure, people energy, and stability.',
    doesNotMean: 'It does not decide who should or should not work together.',
    managerUse: ['Pair fast starters with detail stabilizers.', 'Make conflict norms explicit.', 'Balance voices in meetings.'],
    misreadRisks: ['Opposite styles can be complementary.', 'Similarity can create blind spots.', 'Team friction may be design friction.'],
    citations: ['Team composition research', 'Psychological safety research', 'Belbin-style team role literature']
  }
];

export const platformLenses = [
  'Culture Amp','Qualtrics','Viva Glint','15Five','Lattice','Microsoft Viva Insights','Visier','Worklytics','ChartHop','Betterworks','WorkBoard','ADP','Gusto','Rippling','BambooHR','Workday','LinkedIn Learning','Degreed'
].map((label) => ({
  id: label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, ''),
  label,
  category: 'Platform Lens',
  summary: `${label} lens: explains what additional organizational data this platform category could add if connected or represented by exported data.`,
  factorWeights: { Dominance: .5, Extraversion: .5, Patience: .5, Formality: .5 },
  outputs: ['Possible data signals', 'What it would add', 'Manager interpretation', 'Limitations', 'Integration caution'],
  means: 'A transparent placeholder for how platform data could enrich interpretation in the future.',
  doesNotMean: `This app is not connected to ${label} yet and does not claim access to proprietary ${label} data.`,
  managerUse: ['Use as an integration map.', 'Separate current inference from future data connection.', 'Avoid pretending platform data exists until connected.'],
  misreadRisks: ['Platform metrics can miss context.', 'Activity data is not value.', 'Engagement data requires careful consent and governance.'],
  citations: ['People analytics governance literature', 'Employee engagement research', 'Workforce analytics ethics']
}));

export const allLenses = [...lensCatalog, ...platformLenses];

export const livedExperienceCategories = [
  'Economic and material security', 'Family system and caregiving context', 'Immigration, displacement, and cultural transition', 'Education and access background', 'Neurodivergence and cognitive accessibility', 'Disability, health, and body-based factors', 'Trauma, adversity, and nervous-system load', 'Identity, marginalization, and belonging', 'Work history and occupational socialization', 'Social support and community context', 'Life stage and transition factors', 'Environmental and sensory context', 'Cultural values and communication norms', 'Legal, administrative, and bureaucratic stress', 'Protective factors and resilience resources'
];

export const evidenceFoundation = [
  { area: 'Social determinants and material security', sources: ['WHO Social Determinants of Health', 'CDC Social Determinants of Health', 'Healthy People 2030'], use: 'Supports the idea that resources, housing, food, transportation, healthcare access, and economic strain can shape functioning and opportunity.' },
  { area: 'Adversity, trauma, and chronic stress', sources: ['Adverse Childhood Experiences research', 'Trauma-informed care principles', 'Occupational stress literature'], use: 'Supports cautious interpretation of threat sensitivity, hypervigilance, avoidance, and overload as possible context effects.' },
  { area: 'Neurodiversity and accessibility', sources: ['ADHD workplace accommodation research', 'Autism employment inclusion research', 'Universal design literature'], use: 'Supports non-stigmatizing environmental adjustments such as written clarity, reduced interruption, and sensory awareness.' },
  { area: 'Work design and wellbeing', sources: ['Job Demands-Resources model', 'Demand-Control-Support model', 'Effort-Reward Imbalance model'], use: 'Supports the idea that workload, autonomy, control, reward, and support affect wellbeing and performance presentation.' },
  { area: 'Identity safety and belonging', sources: ['Stereotype threat', 'Minority stress theory', 'Psychological safety research'], use: 'Supports the idea that safety, belonging, discrimination, and identity management can affect visibility, confidence, and communication.' }
];
