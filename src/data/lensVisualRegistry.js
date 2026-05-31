// Canonical SignalGlass lens visual registry.
// This file is the display/visual layer over the raw uploaded lens source.
// It merges duplicate framework variants and assigns each canonical lens a native visual treatment.

function C(id, lens, category, visualType, visualLabel, why, aliases = []) {
  return { id, lens, category, visualType, visualLabel, why, aliases };
}

export const CANONICAL_LENS_VISUALS = [
  C('big-five-ocean', 'Big Five / OCEAN', 'Personality', 'radar', 'Radar (spider) chart', 'Shows five continuous trait scores on radial axes.', ['Big Five Lens', 'Big Five (OCEAN) Lens']),
  C('insights-discovery-color-model', 'Insights Discovery Color Model', 'Personality', 'colorWheel', '4-color wheel / quadrant', 'Wheel shows relative color energies and position on a circular continuum.', ['Insights Discovery (Color Model)', 'Insights Discovery Color Model Lens']),
  C('disc-crosswalk', 'DISC', 'Personality', 'quadrantPlot', '4-quadrant plot', 'Dominance, Influence, Steadiness, and Conscientiousness are arranged on two axes.', ['DISC Crosswalk', 'DISC Lens', 'DISC Behavioral Styles Lens']),
  C('workplace-big-five-pro', 'Workplace Big Five Pro', 'Personality', 'radarBars', 'Radar + bar profile', 'Radar gives the profile shape while bars support subscale detail.', ['Workplace Big Five Pro Lens']),
  C('hogan-personality-inventory', 'Hogan Personality Inventory', 'Personality', 'profileBars', 'Profile bar chart / line profile', 'Multi-scale bars show bright-side trait levels.', ['Hogan Personality Inventory (HPI)', 'Hogan Personality Inventory Lens', 'Hogan HPI', 'Hogan HPI Lens']),
  C('hogan-development-survey', 'Hogan Development Survey', 'Personality', 'riskBars', 'Risk-profile bar chart', 'Bars highlight derailers at high or low extremes.', ['Hogan Development Survey (HDS / Derailers)', 'Hogan Development Survey Lens', 'Hogan HDS Derailers', 'Hogan HDS']),
  C('cognitive-ability', 'Cognitive Ability', 'Cognitive', 'scoreGauge', 'Single score + percentile gauge', 'A numeric score is easiest to read with a percentile gauge or normal-curve placement.', ['Cognitive Ability / GMA / Wonderlic', 'Cognitive Ability Lens', 'General Mental Ability (Cognitive Ability) Lens']),
  C('cognitive-processing-style', 'Cognitive Processing Style', 'Cognitive', 'scatterQuadrant', '2D scatter or quadrant', 'Axes can position analytic versus holistic or intuitive processing.', ['Cognitive Processing Style Lens']),
  C('decision-making-style', 'Decision-Making Style', 'Cognitive', 'matrix', 'Matrix or quadrant', 'Speed, thoroughness, intuition, and analysis can be plotted as preference axes.', ['Decision Making Style Lens', 'Decision-Making Style Lens']),
  C('self-determination-theory', 'Self-Determination Theory', 'Motivation', 'threeBars', 'Stacked bars or radar', 'Autonomy, competence, and relatedness should be shown as separate need scales.', ['Self-Determination Theory (SDT)', 'Self-Determination Theory (SDT) Lens']),
  C('sixteen-pf', '16PF', 'Personality', 'multiBarProfile', '16-bar profile', 'One bar per primary factor gives a clear factor-by-factor profile.', ['16PF Lens', 'Sixteen Personality Factor (16PF) Lens', '16 PF']),
  C('learning-design-style', 'Learning Design Style', 'Cognitive', 'segmentedWheel', 'Segmented wheel or stacked bars', 'Shows the preference mix across learning-design modes.', ['Learning Design Style (Non-VARK)', 'Learning Design Style (Non-VARK) Lens', 'Learning Design Style Lens']),
  C('learning-agility-growth-mindset', 'Learning Agility / Growth Mindset', 'Cognitive', 'lineRadar', 'Line trend + radar', 'A trend line can show change over time while radar shows the current profile.', ['Learning Agility & Growth Mindset Lens']),
  C('social-cognition', 'Social Cognition', 'Team', 'networkHeatmap', 'Network diagram or heatmap', 'Shows relational attributions, perception patterns, and social strengths.', ['Social Cognition Lens']),
  C('executive-function-model', 'Executive Function Model', 'Cognitive', 'multiAxisBars', 'Multi-axis bar chart', 'Working memory, inhibition, shifting, and planning are separate control functions.', ['Executive Function Model Lens']),
  C('team-synthesis-matrix', 'Team Synthesis Matrix', 'Team', 'matrix', '2x2 or 3x3 matrix', 'Roles and behaviors can be mapped together for team fit.', ['Team Synthesis Matrix Lens']),
  C('cognitive-reflection-test', 'Cognitive Reflection Test', 'Cognitive', 'itemTablePassRate', 'Item-level table + pass-rate bar', 'Simple item-level counts and correct-rate distribution fit the CRT format.', ['Cognitive Reflection Test (CRT)', 'Cognitive Reflection Test (CRT) Lens', 'CRT Lens']),
  C('hexaco', 'HEXACO', 'Personality', 'hexagonRadar', 'Radar / hexagon chart', 'Six axes naturally form a hexagon for quick shape reading.', ['HEXACO Lens', 'HEXACO Personality Model Lens']),
  C('kolbe-a-index', 'Kolbe A Index', 'Cognitive', 'fourAxisRadial', 'Four-axis radial chart', 'Four conative action modes work well as radial axes.', ['Kolbe A Index (Conation)', 'Kolbe A Index (Conation) Lens', 'Kolbe A Index Lens']),
  C('mbti', 'MBTI', 'Personality', 'typeGrid', 'Type grid / 4-letter profile', 'Four dichotomy bars or a type grid communicate the preference pattern.', ['MBTI Crosswalk', 'MBTI Lens', 'Myers-Briggs Type Indicator (MBTI) Lens']),
  C('hbdi', 'HBDI', 'Cognitive', 'brainQuadrantWheel', 'Four-quadrant brain wheel', 'Four thinking preferences are commonly arranged in a circular quadrant.', ['HBDI / Herrmann Brain Dominance Instrument', 'HBDI Lens', 'Herrmann Brain Dominance Instrument (HBDI) Lens']),
  C('keirsey-temperaments', 'Keirsey Temperaments', 'Personality', 'temperamentQuadrant', '4-quadrant temperament map', 'Temperament clusters read clearly as quadrants.', ['Keirsey Temperament Lens', 'Keirsey Temperament Theory Lens']),
  C('cliftonstrengths', 'CliftonStrengths', 'Motivation', 'rankedBars', 'Ranked bar list', 'The 34 themes are naturally ordered by strength.', ['CliftonStrengths 34 Themes', 'CliftonStrengths Lens', 'CliftonStrengths (StrengthsFinder) Lens']),
  C('kai', 'KAI / Kirton Adaption-Innovation', 'Cognitive', 'continuumBars', 'Bar profile or continuum', 'Adaptation versus innovation is best shown as a continuum.', ['KAI Lens', 'KAI / Kirton Adaption-Innovation', 'Kirton Adaption-Innovation Inventory (KAI) Lens']),
  C('tki', 'Thomas-Kilmann Conflict Mode', 'Team', 'fiveModeBars', '5-mode bar chart', 'The five conflict modes are easiest to compare as bars.', ['Thomas-Kilmann Conflict Mode (TKI)', 'TKI Lens', 'Thomas-Kilmann Conflict Mode (TKI) Lens']),
  C('via-character-strengths', 'VIA Character Strengths', 'Motivation', 'rankedBarsRadar', 'Ranked bars or radar', 'The 24 strengths can be shown as ordered bars or a profile shape.', ['VIA Character Strengths (24)', 'VIA Character Strengths Lens']),
  C('enneagram', 'Enneagram', 'Personality', 'enneagramWheel', '9-point circle with connecting lines', 'The nine-point circle is the native structure of the Enneagram.', ['Enneagram Core Types and 27 Subtypes', 'Enneagram Lens', 'Enneagram Core Types and Subtypes']),
  C('interpersonal-dynamics-inventory', 'Interpersonal Dynamics Inventory', 'Team', 'circumplex', 'Circumplex / circular map', 'Agency and communion are well represented in a circular interpersonal space.', ['Interpersonal Dynamics Inventory Lens']),
  C('feedback-sensitivity', 'Feedback Sensitivity', 'Team', 'gaugeDistribution', 'Gauge + distribution plot', 'A sensitivity score plus distribution explains both intensity and variability.', ['Feedback Sensitivity Lens']),
  C('reiss-motivation-profile', 'Reiss Motivation Profile', 'Motivation', 'motiveBars', 'Bar profile of 16 motives', 'Each basic desire can be shown as a bar for quick comparison.', ['Reiss Motivation Profile Lens']),
  C('motivational-maps', 'Motivational Maps', 'Motivation', 'pieStackedBars', 'Pie or stacked bar of motivators', 'Relative motivator contribution is best shown as proportions.', ['Motivational Maps Lens']),
  C('trust-psychological-safety', 'Trust and Psychological Safety', 'Team', 'gaugeHeatmap', 'Gauge + heatmap', 'Overall safety can be shown as a gauge while group variation appears as a heatmap.', ['Trust and Psychological Safety Lens', 'Trust / Psychological Safety Lens']),
  C('eq-i-2', 'EQ-i 2.0 Emotional Intelligence', 'Emotional', 'radarSubscaleBars', 'Radar + subscale bars', 'Radar shows overall EI shape while bars show composite subscales.', ['EQ-i 2.0 Lens', 'Emotional Intelligence (EQ-i 2.0) Lens']),
  C('firo-b', 'Relational Needs / FIRO-B', 'Team', 'threeBarsCircumplex', 'Circumplex or three-bar profile', 'Inclusion, control, and affection work as three clear dimensions.', ['Relational Needs / FIRO-B Lens', 'Relational Needs / FIRO-B']),
  C('metacognition', 'Metacognition', 'Cognitive', 'layeredRadar', 'Layered radar or stacked bars', 'Metacognitive components can be layered as competencies.', ['Metacognition Lens']),
  C('msceit', 'MSCEIT', 'Emotional', 'branchBarsAccuracy', 'Profile bars + task accuracy histogram', 'Ability branches and task performance need separate but related displays.', ['MSCEIT Lens', 'MSCEIT Ability-Based EQ', 'Mayer-Salovey-Caruso Emotional Intelligence Test (MSCEIT) Lens']),
  C('cognitive-flexibility', 'Cognitive Flexibility', 'Cognitive', 'spiderTrend', 'Spider chart + trend line', 'Flexibility facets fit a spider chart while change can use a line trend.', ['Cognitive Flexibility Lens']),
  C('social-styles', 'Social Styles', 'Team', 'quadrantPlot', '4-quadrant plot', 'Driver, Analytical, Amiable, and Expressive are quadrant-style categories.', ['Social Styles Lens', 'Social Styles: Driver / Analytical / Amiable / Expressive']),
  C('cognitive-load-working-style', 'Cognitive Load / Working Style', 'Cognitive', 'stackedWorkloadBars', 'Stacked bar or gauge', 'Working memory load, pace, and capacity should be separated visually.', ['Cognitive Load Working Style Lens', 'Cognitive Load & Working Style Lens']),
  C('schwartz-values', 'Schwartz Values Inventory', 'Motivation', 'valuesCircumplex', 'Value map or ranked bars', 'Values can be positioned on a circumplex or ranked for workplace mapping.', ['Schwartz Values Inventory Lens', 'Schwartz Values Inventory: Workplace Mapping']),
  C('strength-deployment-inventory', 'Strength Deployment Inventory', 'Team', 'triangleCircumplex', 'Triangle or circumplex map', 'Motivational value systems are commonly plotted in triangular or circular space.', ['Strength Deployment Inventory (SDI)', 'Strength Deployment Inventory Lens']),
  C('spiral-dynamics', 'Spiral Dynamics / Graves Values', 'Motivation', 'spiralBands', 'Spiral map with color bands', 'Value levels can be shown as staged bands or a spiral progression.', ['Spiral Dynamics Lens', 'Spiral Dynamics (Graves Values) Lens', 'Spiral Dynamics / Graves Values: Workplace Mapping']),
  C('work-values-inventory', 'Work Values Inventory', 'Motivation', 'rankedBars', 'Ranked bar list', 'Workplace priorities are easiest to read as ordered bars.', ['Work Values Inventory Lens', 'Work Values Inventory: Practical Workplace Priorities']),
  C('purpose-meaning', 'Purpose & Meaning', 'Motivation', 'narrativeScorecardRadar', 'Narrative scorecard + radar', 'Meaning is multi-facet and benefits from a short narrative plus trait shape.', ['Purpose and Meaning Lens', 'Purpose & Meaning Lens', 'Purpose & Meaning Lens (what fuels sustained engagement)']),
  C('belbin-team-roles', 'Belbin Team Roles', 'Team', 'roleWheel', 'Role wheel or bar profile', 'Team role strengths can be shown around a wheel or as bars.', ['Belbin Team Roles Lens']),
  C('team-management-systems', 'Team Management Systems', 'Team', 'roleMatrix', 'Role matrix or radar', 'Work preference axes fit a role or skill matrix.', ['Team Management Systems (TMS)', 'Team Management Systems (TMS) Lens', 'Team Management Systems Lens']),
  C('lencioni-team-dynamics', 'Lencioni Team Dynamics', 'Team', 'pyramid', 'Pyramid diagram', 'The dysfunction model is naturally layered as a pyramid.', ['Lencioni Team Dynamics Lens', 'Lencioni Team Dynamics (Five Dysfunctions) Lens']),
  C('leadership-circle-profile', 'Leadership Circle Profile', 'Leadership', 'radial360Bars', '360° radial profile + competency bars', 'Creative and reactive tendencies fit a circular profile with supporting bars.', ['Leadership Circle Profile Lens', 'Leadership Circle Profile (LCP) Lens']),
  C('neurodiversity-support', 'Neurodiversity Support', 'Neurodiversity', 'accessibilityMatrixRadar', 'Accessibility checklist + radar', 'Cognitive accessibility needs require both a matrix/checklist and summary profile.', ['Neurodiversity Support Lens', 'Neurodiversity Support Lens: Neurodivergence and Cognitive Accessibility']),
  C('lived-experience-context', 'Lived Experience Context', 'Neurodiversity', 'timelineTagCloud', 'Narrative timeline + tag cloud', 'Experience context is best represented as narrative time plus recurring themes.', ['Lived Experience Context Lens']),
  C('referenced-not-detailed', 'Referenced but Not Detailed', 'Other', 'placeholder', 'Placeholder icon + note', 'Indicates that the lens was referenced but no usable visual detail is available.', ['Referenced but Not Detailed in Uploaded Document', 'Referenced but Not Detailed in the Uploaded Document']),
  C('cd-risc-resilience', 'CD-RISC Resilience', 'Emotional', 'gaugeSubscaleBars', 'Gauge + bar subscales', 'Overall resilience works as a gauge while subscales clarify the source of resilience.', ['CD-RISC Lens', 'CD-RISC (Resilience) Lens', 'Connor-Davidson Resilience Scale (CD-RISC) Lens']),
  C('controller-neurodivergence', 'Controller Neurodivergence', 'Neurodiversity', 'profileBarsChecklist', 'Profile bars + accommodation checklist', 'Controller tendencies should be paired with targeted support recommendations.', ['Controller Neurodivergence', 'Controller — Neurodivergence & Cognitive Accessibility']),
  C('copenhagen-burnout-inventory', 'Copenhagen Burnout Inventory', 'Emotional', 'domainBars', 'Bar profile by domain', 'Personal, work-related, and client burnout can be compared as domains.', ['Copenhagen Burnout Inventory Lens', 'Copenhagen Burnout Inventory (CBI) Lens']),
  C('leadership-versatility-index', 'Leadership Versatility Index', 'Leadership', 'dualAxisBalance', 'Dual-axis scatter or bar pairs', 'Versatility is about balance between opposing leadership behaviors.', ['Leadership Versatility Index Lens', 'Leadership Versatility Index (LVI) Lens']),
  C('lominger-competency', 'Lominger Competency', 'Leadership', 'competencyMatrix', 'Competency matrix or ranked bars', 'Competencies are best listed with proficiency or development-priority bars.', ['Lominger Competency Lens', 'Lominger Leadership Architect Competency Lens']),
  C('maslach-burnout-inventory', 'Maslach Burnout Inventory', 'Emotional', 'threeBarProfile', 'Three-bar profile', 'Emotional exhaustion, depersonalization, and personal accomplishment are three key dimensions.', ['Maslach Burnout Inventory Lens', 'Maslach Burnout Inventory (MBI) Lens']),
  C('perceived-stress-scale', 'Perceived Stress Scale', 'Emotional', 'scoreGaugeTrend', 'Score gauge + trend line', 'Stress score is best shown as a gauge with optional recent trend.', ['Perceived Stress Scale Lens', 'Perceived Stress Scale (PSS) Lens']),
  C('situational-leadership', 'Situational Leadership', 'Leadership', 'leaderStyleMatrix', '2x2 leader-style matrix', 'Leadership style can be plotted against task and relationship axes.', ['Situational Leadership Lens']),
  C('specialist-neurodivergence', 'Specialist Neurodivergence', 'Neurodiversity', 'profileChecklist', 'Profile + accommodations checklist', 'Specialist strengths and support needs require tailored accommodation guidance.', ['Specialist Neurodivergence', 'Specialist — Neurodivergence & Cognitive Accessibility']),
  C('who5-wellbeing-index', 'WHO-5 Well-Being Index', 'Emotional', 'scoreGaugeTrend', 'Simple score gauge + trend', 'A short wellbeing score works best as a simple gauge with trend.', ['WHO-5 Well-Being Index Lens', 'WHO‑5 Well‑Being Index Lens']),
  C('workplace-stress', 'Workplace Stress', 'Emotional', 'multiDomainBars', 'Multi-domain bar profile', 'Separate stress domains allow targeted action.', ['Workplace Stress Lens']),
];

function normalizeLensName(name = '') {
  return String(name)
    .toLowerCase()
    .replace(/[‑–—]/g, '-')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

const EXACT_ALIAS_TO_CANONICAL = CANONICAL_LENS_VISUALS.reduce((acc, item) => {
  [item.lens, ...(item.aliases || [])].forEach((alias) => {
    acc[normalizeLensName(alias)] = item.id;
  });
  return acc;
}, {});

const FUZZY_RULES = [
  ['referenced-not-detailed', [/referenced but not detailed/, /not detailed.*uploaded document/]],
  ['big-five-ocean', [/big five.*ocean/, /ocean.*big five/]],
  ['workplace-big-five-pro', [/workplace big five/]],
  ['insights-discovery-color-model', [/insights discovery/, /color model/]],
  ['disc-crosswalk', [/\bdisc\b/, /disc behavioral/]],
  ['hogan-development-survey', [/hogan.*development/, /\bhds\b/, /derailer/]],
  ['hogan-personality-inventory', [/hogan.*personality/, /\bhpi\b/]],
  ['cognitive-ability', [/cognitive ability/, /general mental ability/, /wonderlic/, /\bgma\b/]],
  ['cognitive-processing-style', [/cognitive processing/]],
  ['decision-making-style', [/decision making/, /decision-making/]],
  ['self-determination-theory', [/self determination/, /\bsdt\b/]],
  ['sixteen-pf', [/sixteen personality factor/, /\b16pf\b/, /16 pf/]],
  ['learning-design-style', [/learning design/, /non vark/, /non-vark/]],
  ['learning-agility-growth-mindset', [/learning agility/, /growth mindset/]],
  ['social-cognition', [/social cognition/]],
  ['executive-function-model', [/executive function/]],
  ['team-synthesis-matrix', [/team synthesis/]],
  ['cognitive-reflection-test', [/cognitive reflection/, /\bcrt\b/]],
  ['hexaco', [/hexaco/]],
  ['kolbe-a-index', [/kolbe/]],
  ['mbti', [/myers briggs/, /myers-briggs/, /\bmbti\b/]],
  ['hbdi', [/herrmann/, /\bhbdi\b/, /brain dominance/]],
  ['keirsey-temperaments', [/keirsey/]],
  ['cliftonstrengths', [/clifton/, /strengthsfinder/]],
  ['kai', [/kirton/, /adaption innovation/, /adaption-innovation/, /\bkai\b/]],
  ['tki', [/thomas kilmann/, /thomas-kilmann/, /\btki\b/]],
  ['via-character-strengths', [/via character/, /character strengths/]],
  ['enneagram', [/enneagram/]],
  ['interpersonal-dynamics-inventory', [/interpersonal dynamics/]],
  ['feedback-sensitivity', [/feedback sensitivity/]],
  ['reiss-motivation-profile', [/reiss/]],
  ['motivational-maps', [/motivational maps/]],
  ['trust-psychological-safety', [/trust.*psychological safety/, /psychological safety/]],
  ['eq-i-2', [/eq i/, /eq-i/, /emotional intelligence.*2 0/]],
  ['firo-b', [/firo/, /relational needs/]],
  ['metacognition', [/metacognition/]],
  ['msceit', [/msceit/, /mayer salovey caruso/, /mayer-salovey-caruso/]],
  ['cognitive-flexibility', [/cognitive flexibility/]],
  ['social-styles', [/social styles/]],
  ['cognitive-load-working-style', [/cognitive load/, /working style/]],
  ['schwartz-values', [/schwartz/]],
  ['strength-deployment-inventory', [/strength deployment/, /\bsdi\b/]],
  ['spiral-dynamics', [/spiral dynamics/, /graves values/]],
  ['work-values-inventory', [/work values/]],
  ['purpose-meaning', [/purpose.*meaning/, /meaning lens/]],
  ['belbin-team-roles', [/belbin/]],
  ['team-management-systems', [/team management systems/, /\btms\b/]],
  ['lencioni-team-dynamics', [/lencioni/, /five dysfunctions/]],
  ['leadership-circle-profile', [/leadership circle/, /\blcp\b/]],
  ['neurodiversity-support', [/^neurodiversity support/, /neurodiversity support/]],
  ['lived-experience-context', [/lived experience/]],
  ['cd-risc-resilience', [/cd risc/, /cd-risc/, /connor davidson/, /connor-davidson/, /resilience scale/]],
  ['controller-neurodivergence', [/controller.*neurodivergence/, /controller.*cognitive accessibility/]],
  ['specialist-neurodivergence', [/specialist.*neurodivergence/, /specialist.*cognitive accessibility/]],
  ['copenhagen-burnout-inventory', [/copenhagen burnout/, /\bcbi\b/]],
  ['leadership-versatility-index', [/leadership versatility/, /\blvi\b/]],
  ['lominger-competency', [/lominger/, /leadership architect/]],
  ['maslach-burnout-inventory', [/maslach burnout/, /\bmbi\b/]],
  ['perceived-stress-scale', [/perceived stress/, /\bpss\b/]],
  ['situational-leadership', [/situational leadership/]],
  ['who5-wellbeing-index', [/who 5/, /who-5/, /well being index/, /well-being index/]],
  ['workplace-stress', [/workplace stress/]],
];

const CANONICAL_BY_ID = new Map(CANONICAL_LENS_VISUALS.map((item) => [item.id, item]));

function inferCanonicalId(lensOrName) {
  const rawName = typeof lensOrName === 'string' ? lensOrName : `${lensOrName?.lens || ''} ${lensOrName?.file || ''}`;
  const normalized = normalizeLensName(rawName);
  if (EXACT_ALIAS_TO_CANONICAL[normalized]) return EXACT_ALIAS_TO_CANONICAL[normalized];

  for (const [canonicalId, patterns] of FUZZY_RULES) {
    if (patterns.some((pattern) => pattern.test(normalized))) return canonicalId;
  }

  return normalized.replace(/\s+/g, '-');
}

export function getCanonicalLensKey(lensOrName) {
  return inferCanonicalId(lensOrName);
}

export function getLensVisual(lensOrName) {
  const canonicalId = inferCanonicalId(lensOrName);
  const visual = CANONICAL_BY_ID.get(canonicalId);
  if (visual) return visual;

  return {
    id: canonicalId,
    lens: typeof lensOrName === 'string' ? lensOrName : lensOrName?.lens || canonicalId,
    category: 'Other',
    visualType: 'structuredCards',
    visualLabel: 'Structured cards',
    why: 'No canonical visual mapping has been assigned yet.',
    aliases: [],
  };
}

function preferRicherLens(existing, candidate) {
  const existingLength = existing?.content?.length || 0;
  const candidateLength = candidate?.content?.length || 0;
  if (candidateLength > existingLength) return candidate;
  return existing;
}

export function getCanonicalSignalGlassLenses(rawLenses = []) {
  const byCanonicalId = new Map();

  rawLenses.forEach((rawLens) => {
    const visual = getLensVisual(rawLens);
    const existing = byCanonicalId.get(visual.id);
    const candidate = {
      ...rawLens,
      id: visual.id,
      rawId: rawLens.id,
      lens: visual.lens,
      category: visual.category,
      visualType: visual.visualType,
      visualLabel: visual.visualLabel,
      visualReason: visual.why,
      duplicateSourceIds: [rawLens.id],
      duplicateSourceNames: [rawLens.lens],
    };

    if (!existing) {
      byCanonicalId.set(visual.id, candidate);
      return;
    }

    const richer = preferRicherLens(existing, candidate);
    const duplicateSourceIds = Array.from(new Set([...(existing.duplicateSourceIds || []), rawLens.id].filter(Boolean)));
    const duplicateSourceNames = Array.from(new Set([...(existing.duplicateSourceNames || []), rawLens.lens].filter(Boolean)));

    byCanonicalId.set(visual.id, {
      ...richer,
      id: visual.id,
      lens: visual.lens,
      category: visual.category,
      visualType: visual.visualType,
      visualLabel: visual.visualLabel,
      visualReason: visual.why,
      duplicateSourceIds,
      duplicateSourceNames,
      duplicateCount: duplicateSourceIds.length,
    });
  });

  const order = new Map(CANONICAL_LENS_VISUALS.map((item, index) => [item.id, index]));
  return Array.from(byCanonicalId.values()).sort((a, b) => {
    const aOrder = order.has(a.id) ? order.get(a.id) : 9999;
    const bOrder = order.has(b.id) ? order.get(b.id) : 9999;
    return aOrder - bOrder || a.lens.localeCompare(b.lens);
  });
}

export function getLensVisualTableRows() {
  return CANONICAL_LENS_VISUALS.map((item, index) => ({
    number: index + 1,
    lens: item.lens,
    typicalVisualRepresentation: item.visualLabel,
    whyThisVisual: item.why,
    visualType: item.visualType,
    category: item.category,
    aliases: item.aliases,
  }));
}
