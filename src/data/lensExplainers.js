import { getNativeVisualFamily } from './nativeVisualTypes.js';

const FRAMEWORK_SUMMARIES = {
  'big-five-ocean': 'A five-trait personality model describing openness, conscientiousness, extraversion, agreeableness, and emotional stability.',
  'insights-discovery-color-model': 'A four-color communication model that groups visible behavioral energy into Cool Blue, Fiery Red, Sunshine Yellow, and Earth Green.',
  'disc-crosswalk': 'A behavioral-style model describing Dominance, Influence, Steadiness, and Conscientiousness.',
  'workplace-big-five-pro': 'A workplace-focused Big Five interpretation emphasizing how broad personality tendencies may appear in job behavior.',
  'hogan-personality-inventory': 'A bright-side workplace personality framework describing how a person is likely to be seen when functioning normally.',
  'hogan-development-survey': 'A pressure-risk framework describing how otherwise useful tendencies may become overextended under strain.',
  'cognitive-ability': 'A task-expression lens for discussing how work style may affect test-taking behavior; it is not an intelligence estimate.',
  'cognitive-processing-style': 'A work-style lens describing preferences for analytical, holistic, systematic, and intuitive processing.',
  'decision-making-style': 'A lens describing preferred speed, evidence depth, structure, and intuition when making decisions.',
  'self-determination-theory': 'A motivation framework organized around autonomy, competence, and relatedness needs.',
  'sixteen-pf': 'A broad sixteen-factor personality framework used to describe a detailed pattern of behavioral tendencies.',
  'learning-design-style': 'A learning-environment lens describing how structure, interaction, practice, reflection, and pacing may support learning.',
  'learning-agility-growth-mindset': 'A development lens describing likely openness to feedback, experimentation, adaptation, and growth through experience.',
  'social-cognition': 'A lens describing how a person may read social cues, assign intent, build trust, and interpret interpersonal situations.',
  'executive-function-model': 'A work-expression lens organized around planning, inhibition, task initiation, working memory, and shifting.',
  'team-synthesis-matrix': 'A team-fit lens combining role contribution, behavioral style, collaboration needs, and likely friction points.',
  'cognitive-reflection-test': 'A test-expression lens describing how pace and structure may influence reflective versus immediate responding; it does not predict test accuracy.',
  hexaco: 'A six-domain personality framework adding Honesty-Humility to five broad personality dimensions.',
  'kolbe-a-index': 'A conative-style framework describing preferred ways of initiating, organizing, researching, and completing action.',
  mbti: 'A four-dichotomy preference model describing likely orientation toward energy, information, decisions, and structure.',
  hbdi: 'A four-quadrant thinking-preference framework covering analytical, sequential, interpersonal, and imaginative modes.',
  'keirsey-temperaments': 'A temperament model grouping behavioral preferences into broad patterns of action, communication, and attention.',
  cliftonstrengths: 'A strengths-language framework describing recurring talent themes that may feel natural and energizing.',
  kai: 'A problem-solving continuum describing preference for adaptive improvement versus innovative disruption.',
  tki: 'A conflict-mode framework describing competing, collaborating, compromising, avoiding, and accommodating tendencies.',
  'via-character-strengths': 'A character-strength framework describing recurring values-based capacities and positive behavioral resources.',
  enneagram: 'A nine-pattern motivational framework used here as a directional analogy for likely drivers and defenses.',
  'interpersonal-dynamics-inventory': 'An interpersonal lens describing agency, warmth, control, distance, trust, and relational orientation.',
  'feedback-sensitivity': 'A lens describing likely emotional and behavioral reactions to correction, evaluation, ambiguity, and perceived criticism.',
  'reiss-motivation-profile': 'A sixteen-motive framework describing likely priorities that energize or sustain behavior.',
  'motivational-maps': 'A workplace motivation lens grouping likely drivers into relative patterns of achievement, relationship, and purpose.',
  'trust-psychological-safety': 'A context lens describing conditions that may support speaking up, asking questions, admitting mistakes, and taking interpersonal risks.',
  'eq-i-2': 'An emotional-intelligence framework describing self-perception, expression, interpersonal behavior, decision-making, and stress management.',
  'firo-b': 'A relational-needs framework organized around inclusion, control, and affection or interpersonal closeness.',
  metacognition: 'A self-regulation lens describing awareness of one’s thinking, planning, monitoring, and adjustment.',
  msceit: 'An ability-based emotional-processing framework used here only to discuss task-expression tendencies, not test performance.',
  'cognitive-flexibility': 'A lens describing likely ease of shifting perspectives, changing strategies, and adapting to competing demands.',
  'social-styles': 'A four-style interpersonal model describing Driver, Analytical, Amiable, and Expressive patterns.',
  'cognitive-load-working-style': 'A workload lens describing how pace, complexity, interruptions, structure, and social demand may affect visible performance.',
  'schwartz-values': 'A values framework describing likely priorities such as achievement, security, self-direction, benevolence, and tradition.',
  'strength-deployment-inventory': 'A motivation-under-conflict framework describing assertive, analytical, and relational value systems.',
  'spiral-dynamics': 'A staged values lens describing which organizing priorities may be most visible in a workplace context.',
  'work-values-inventory': 'A practical priorities lens describing what a person may value in role design, rewards, autonomy, stability, and contribution.',
  'purpose-meaning': 'An engagement lens describing conditions likely to create significance, contribution, coherence, and sustained effort.',
  'belbin-team-roles': 'A team-contribution framework describing likely role strengths such as shaping, implementing, coordinating, or evaluating.',
  'team-management-systems': 'A team-work preference framework describing how a person may contribute across task, people, and organizational demands.',
  'lencioni-team-dynamics': 'A team-health framework organized around trust, conflict, commitment, accountability, and collective results.',
  'leadership-circle-profile': 'A leadership-development lens contrasting creative leadership competencies with reactive protective tendencies.',
  'neurodiversity-support': 'A cognitive-accessibility overlay describing how a selected neurodivergence or access need could alter the visible PI presentation.',
  'lived-experience-context': 'An environmental overlay describing how life history, current demands, resources, and stressors may bend visible behavior.',
  'referenced-not-detailed': 'A source placeholder indicating that the framework was named but did not include enough usable detail for a complete interpretation.',
  'cd-risc-resilience': 'A resilience lens describing possible recovery resources, persistence, adaptability, and support conditions.',
  'controller-neurodivergence': 'A profile-specific accessibility overlay exploring how neurodivergent load could alter a Controller-style PI presentation.',
  'copenhagen-burnout-inventory': 'A burnout-context lens separating possible personal, work-related, and client-related depletion patterns.',
  'leadership-versatility-index': 'A leadership-balance lens describing flexibility across forceful, enabling, strategic, and operational behavior.',
  'lominger-competency': 'A leadership competency lens describing likely strengths and development priorities across practical leadership behaviors.',
  'maslach-burnout-inventory': 'A burnout-context lens organized around exhaustion, distancing or cynicism, and reduced accomplishment.',
  'perceived-stress-scale': 'A stress-context lens describing how overwhelmed, unpredictable, or uncontrollable current demands may feel.',
  'situational-leadership': 'A leadership-adaptation lens describing likely preference for directing, coaching, supporting, and delegating.',
  'specialist-neurodivergence': 'A profile-specific accessibility overlay exploring how neurodivergent load could alter a Specialist-style PI presentation.',
  'who5-wellbeing-index': 'A wellbeing-context lens focused on positive mood, energy, rest, interest, and daily functioning.',
  'workplace-stress': 'A multi-domain context lens describing likely strain from workload, ambiguity, relationships, control, and recovery demands.',
};

const CATEGORY_USE = {
  Personality: 'Useful for translating the PI pattern into another personality vocabulary while keeping the original PI factors visible.',
  Cognitive: 'Useful for discussing preferred processing and task conditions, not for estimating intelligence or clinical capacity.',
  Emotional: 'Useful for forming development hypotheses about emotional expression, regulation, feedback, or interpersonal behavior.',
  Motivation: 'Useful for understanding likely sources of energy, persistence, satisfaction, and disengagement.',
  Team: 'Useful for anticipating contribution style, communication needs, conflict patterns, and team friction.',
  Leadership: 'Useful for coaching leadership range, overused strengths, role demands, and development priorities.',
  Wellbeing: 'Useful as an explicitly selected context scenario showing how current conditions could bend visible PI behavior.',
  Neurodiversity: 'Useful for accessibility planning when the variable is known or intentionally tested as a hypothetical.',
  Other: 'Useful as a directional interpretation aid when the framework does not fit a single standard category.',
};

const VISUAL_READING = {
  radar: 'Read the overall shape first, then compare the longest and shortest axes. Greater distance from the center means a stronger projected expression.',
  trend: 'Read the direction and relative height of the points. The line shows the projected pattern across dimensions, not measured change over time unless actual repeated data is supplied.',
  quadrant: 'Read the marker’s position relative to the center and axis labels. Placement shows the balance between two paired behavioral tendencies.',
  colorWheel: 'Compare the relative size of the color segments. Larger segments indicate more visible projected energy in that communication style.',
  donut: 'Compare the proportions rather than treating them as independent scores. The largest segments represent the most visible projected motivators.',
  gauge: 'Read the central value as a directional index and use any supporting bars to understand what contributes to it.',
  enneagram: 'Read highlighted points as the strongest analogies. They are possible motivational similarities, not a confirmed Enneagram type.',
  pyramid: 'Read from the foundation upward. Lower layers support the layers above them, and a weak foundation can affect the entire team pattern.',
  timeline: 'Read the recurring themes and context tags as possible influences on visible behavior across periods or situations.',
  matrix: 'Compare the cells by position and intensity. The matrix emphasizes combinations and tradeoffs rather than one overall score.',
  spiral: 'Read the strongest bands as the most visible organizing values. The stages are not a fixed maturity ranking.',
  checklist: 'Read high items as areas where structure or support may matter more. The checklist does not diagnose a condition or accommodation need.',
  continuum: 'Read the marker’s location between the two poles. A middle position may indicate situational flexibility rather than indecision.',
  circumplex: 'Read the position and shape around the circle to understand the balance between interpersonal dimensions.',
  triangle: 'Read the point or shape as a balance among three competing motivational orientations.',
  wheel: 'Compare the spokes or segments. Longer or larger areas indicate stronger projected preference in that mode.',
  curve: 'Read the marker as a directional placement only. It is not a true percentile without a separately administered normed assessment.',
  bars: 'Compare bar length across dimensions. The highest bars are the strongest projected expressions; the lowest bars may indicate lower preference or visibility.',
  placeholder: 'This card explains why no full visual is available. It should not be interpreted as a completed assessment result.',
  unsupported: 'The visual type is not supported and should be treated as a display defect until a native renderer is assigned.',
};

export function getLensExplainer(lens, projection) {
  const family = getNativeVisualFamily(lens?.visualType);
  const reason = lens?.visualReason || lens?.why || 'The visual summarizes the lens dimensions.';
  const strongest = (projection?.strongest || []).slice(0, 3).map(item => item.label);

  return {
    whatItIs: FRAMEWORK_SUMMARIES[lens?.id] || `${lens?.lens || 'This lens'} is a ${String(lens?.category || 'behavioral').toLowerCase()} framework translated from the selected PI pattern.`,
    whatItShows: `${reason}${strongest.length ? ` For the selected PI profile, the strongest projected dimensions are ${strongest.join(', ')}.` : ''}`,
    howToRead: VISUAL_READING[family] || VISUAL_READING.unsupported,
    bestUse: CATEGORY_USE[lens?.category] || CATEGORY_USE.Other,
    boundary: projection?.boundary || 'This is a directional PI crosswalk, not a separately administered assessment result.',
  };
}

export function hasCompleteLensExplainer(explainer) {
  return ['whatItIs', 'whatItShows', 'howToRead', 'bestUse', 'boundary']
    .every(key => typeof explainer?.[key] === 'string' && explainer[key].trim().length >= 20);
}
