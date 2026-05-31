// Canonical SignalGlass lens visual registry.
// The raw uploaded lens source can contain duplicate framework entries.
// This file provides the cleaned display layer used by the app so each framework
// maps to one canonical lens and one intended visual treatment.

export const CANONICAL_LENS_VISUALS = [
  {
    id: "big-five-ocean",
    lens: "Big Five / OCEAN",
    category: "Personality",
    visualType: "radar",
    visualLabel: "Radar (spider) chart",
    why: "Shows five continuous trait scores on radial axes.",
    aliases: ["Big Five / OCEAN", "Big Five Lens"],
  },
  {
    id: "insights-discovery-color-model",
    lens: "Insights Discovery Color Model",
    category: "Personality",
    visualType: "colorWheel",
    visualLabel: "4-color wheel / quadrant",
    why: "Wheel shows relative color energies and position on a circular continuum.",
    aliases: ["Insights Discovery (Color Model)", "Insights Discovery Color Model Lens"],
  },
  {
    id: "disc-crosswalk",
    lens: "DISC",
    category: "Personality",
    visualType: "quadrantPlot",
    visualLabel: "4-quadrant plot",
    why: "Dominance, Influence, Steadiness, and Conscientiousness are arranged on two axes.",
    aliases: ["DISC Crosswalk", "DISC Lens"],
  },
  {
    id: "workplace-big-five-pro",
    lens: "Workplace Big Five Pro",
    category: "Personality",
    visualType: "radarBars",
    visualLabel: "Radar + bar profile",
    why: "Radar gives the profile shape while bars support subscale detail.",
    aliases: ["Workplace Big Five Pro"],
  },
  {
    id: "hogan-personality-inventory",
    lens: "Hogan Personality Inventory",
    category: "Personality",
    visualType: "profileBars",
    visualLabel: "Profile bar chart / line profile",
    why: "Multi-scale bars show bright-side trait levels.",
    aliases: ["Hogan Personality Inventory (HPI)", "Hogan Personality Inventory Lens"],
  },
  {
    id: "hogan-development-survey",
    lens: "Hogan Development Survey",
    category: "Personality",
    visualType: "riskBars",
    visualLabel: "Risk-profile bar chart",
    why: "Bars highlight derailers at high or low extremes.",
    aliases: ["Hogan Development Survey (HDS / Derailers)", "Hogan Development Survey Lens"],
  },
  {
    id: "cognitive-ability",
    lens: "Cognitive Ability",
    category: "Cognitive",
    visualType: "scoreGauge",
    visualLabel: "Single score + percentile gauge",
    why: "A numeric score is easiest to read with a percentile gauge or normal-curve placement.",
    aliases: ["Cognitive Ability / GMA / Wonderlic", "Cognitive Ability Lens"],
  },
  {
    id: "cognitive-processing-style",
    lens: "Cognitive Processing Style",
    category: "Cognitive",
    visualType: "scatterQuadrant",
    visualLabel: "2D scatter or quadrant",
    why: "Axes can position analytic versus holistic or intuitive processing.",
    aliases: ["Cognitive Processing Style", "Cognitive Processing Style Lens"],
  },
  {
    id: "decision-making-style",
    lens: "Decision-Making Style",
    category: "Cognitive",
    visualType: "matrix",
    visualLabel: "Matrix or quadrant",
    why: "Speed, thoroughness, intuition, and analysis can be plotted as preference axes.",
    aliases: ["Decision-Making Style", "Decision Making Style Lens"],
  },
  {
    id: "self-determination-theory",
    lens: "Self-Determination Theory",
    category: "Motivation",
    visualType: "threeBars",
    visualLabel: "Stacked bars or radar",
    why: "Autonomy, competence, and relatedness should be shown as separate need scales.",
    aliases: ["Self-Determination Theory (SDT)", "Self-Determination Theory"],
  },
  {
    id: "sixteen-pf",
    lens: "16PF",
    category: "Personality",
    visualType: "multiBarProfile",
    visualLabel: "16-bar profile",
    why: "One bar per primary factor gives a clear factor-by-factor profile.",
    aliases: ["16PF", "16PF Lens"],
  },
  {
    id: "learning-design-style",
    lens: "Learning Design Style",
    category: "Cognitive",
    visualType: "segmentedWheel",
    visualLabel: "Segmented wheel or stacked bars",
    why: "Shows the preference mix across learning-design modes.",
    aliases: ["Learning Design Style (Non-VARK)", "Learning Design Style Lens"],
  },
  {
    id: "learning-agility-growth-mindset",
    lens: "Learning Agility / Growth Mindset",
    category: "Cognitive",
    visualType: "lineRadar",
    visualLabel: "Line trend + radar",
    why: "A trend line can show change over time while radar shows the current profile.",
    aliases: ["Learning Agility / Growth Mindset"],
  },
  {
    id: "social-cognition",
    lens: "Social Cognition",
    category: "Team",
    visualType: "networkHeatmap",
    visualLabel: "Network diagram or heatmap",
    why: "Shows relational attributions, perception patterns, and social strengths.",
    aliases: ["Social Cognition", "Social Cognition Lens"],
  },
  {
    id: "executive-function-model",
    lens: "Executive Function Model",
    category: "Cognitive",
    visualType: "multiAxisBars",
    visualLabel: "Multi-axis bar chart",
    why: "Working memory, inhibition, shifting, and planning are separate control functions.",
    aliases: ["Executive Function Model", "Executive Function Model Lens"],
  },
  {
    id: "team-synthesis-matrix",
    lens: "Team Synthesis Matrix",
    category: "Team",
    visualType: "matrix",
    visualLabel: "2×2 or 3×3 matrix",
    why: "Roles and behaviors can be mapped together for team fit.",
    aliases: ["Team Synthesis Matrix"],
  },
  {
    id: "cognitive-reflection-test",
    lens: "Cognitive Reflection Test",
    category: "Cognitive",
    visualType: "itemTablePassRate",
    visualLabel: "Item-level table + pass-rate bar",
    why: "Simple item-level counts and correct-rate distribution fit the CRT format.",
    aliases: ["Cognitive Reflection Test (CRT)", "Cognitive Reflection Test"],
  },
  {
    id: "hexaco",
    lens: "HEXACO",
    category: "Personality",
    visualType: "hexagonRadar",
    visualLabel: "Radar / hexagon chart",
    why: "Six axes naturally form a hexagon for quick shape reading.",
    aliases: ["HEXACO", "HEXACO Lens"],
  },
  {
    id: "kolbe-a-index",
    lens: "Kolbe A Index",
    category: "Cognitive",
    visualType: "fourAxisRadial",
    visualLabel: "Four-axis radial chart",
    why: "Four conative action modes work well as radial axes.",
    aliases: ["Kolbe A Index (Conation)", "Kolbe A Index Lens"],
  },
  {
    id: "mbti",
    lens: "MBTI",
    category: "Personality",
    visualType: "typeGrid",
    visualLabel: "Type grid / 4-letter profile",
    why: "Four dichotomy bars or a type grid communicate the preference pattern.",
    aliases: ["MBTI Crosswalk", "MBTI Lens"],
  },
  {
    id: "hbdi",
    lens: "HBDI",
    category: "Cognitive",
    visualType: "brainQuadrantWheel",
    visualLabel: "Four-quadrant brain wheel",
    why: "Four thinking preferences are commonly arranged in a circular quadrant.",
    aliases: ["HBDI / Herrmann Brain Dominance Instrument", "HBDI Lens"],
  },
  {
    id: "keirsey-temperaments",
    lens: "Keirsey Temperaments",
    category: "Personality",
    visualType: "temperamentQuadrant",
    visualLabel: "4-quadrant temperament map",
    why: "Temperament clusters read clearly as quadrants.",
    aliases: ["Keirsey Temperaments", "Keirsey Temperament Lens"],
  },
  {
    id: "cliftonstrengths",
    lens: "CliftonStrengths",
    category: "Motivation",
    visualType: "rankedBars",
    visualLabel: "Ranked bar list",
    why: "The 34 themes are naturally ordered by strength.",
    aliases: ["CliftonStrengths 34 Themes", "CliftonStrengths Lens"],
  },
  {
    id: "kai",
    lens: "KAI / Kirton Adaption-Innovation",
    category: "Cognitive",
    visualType: "continuumBars",
    visualLabel: "Bar profile or continuum",
    why: "Adaptation versus innovation is best shown as a continuum.",
    aliases: ["KAI / Kirton Adaption-Innovation Inventory", "KAI Lens"],
  },
  {
    id: "tki",
    lens: "Thomas-Kilmann Conflict Mode",
    category: "Team",
    visualType: "fiveModeBars",
    visualLabel: "5-mode bar chart",
    why: "The five conflict modes are easiest to compare as bars.",
    aliases: ["Thomas-Kilmann Conflict Mode (TKI)", "TKI Lens"],
  },
  {
    id: "via-character-strengths",
    lens: "VIA Character Strengths",
    category: "Motivation",
    visualType: "rankedBarsRadar",
    visualLabel: "Ranked bars or radar",
    why: "The 24 strengths can be shown as ordered bars or a profile shape.",
    aliases: ["VIA Character Strengths (24)", "VIA Character Strengths Lens"],
  },
  {
    id: "enneagram",
    lens: "Enneagram",
    category: "Personality",
    visualType: "enneagramWheel",
    visualLabel: "9-point circle with connecting lines",
    why: "The nine-point circle is the native structure of the Enneagram.",
    aliases: ["Enneagram Core Types and 27 Subtypes", "Enneagram Lens"],
  },
  {
    id: "interpersonal-dynamics-inventory",
    lens: "Interpersonal Dynamics Inventory",
    category: "Team",
    visualType: "circumplex",
    visualLabel: "Circumplex / circular map",
    why: "Agency and communion are well represented in a circular interpersonal space.",
    aliases: ["Interpersonal Dynamics Inventory", "Interpersonal Dynamics Inventory Lens"],
  },
  {
    id: "feedback-sensitivity",
    lens: "Feedback Sensitivity",
    category: "Team",
    visualType: "gaugeDistribution",
    visualLabel: "Gauge + distribution plot",
    why: "A sensitivity score plus distribution explains both intensity and variability.",
    aliases: ["Feedback Sensitivity Lens"],
  },
  {
    id: "reiss-motivation-profile",
    lens: "Reiss Motivation Profile",
    category: "Motivation",
    visualType: "motiveBars",
    visualLabel: "Bar profile of 16 motives",
    why: "Each basic desire can be shown as a bar for quick comparison.",
    aliases: ["Reiss Motivation Profile"],
  },
  {
    id: "motivational-maps",
    lens: "Motivational Maps",
    category: "Motivation",
    visualType: "pieStackedBars",
    visualLabel: "Pie or stacked bar of motivators",
    why: "Relative motivator contribution is best shown as proportions.",
    aliases: ["Motivational Maps"],
  },
  {
    id: "trust-psychological-safety",
    lens: "Trust and Psychological Safety",
    category: "Team",
    visualType: "gaugeHeatmap",
    visualLabel: "Gauge + heatmap",
    why: "Overall safety can be shown as a gauge while group variation appears as a heatmap.",
    aliases: ["Trust and Psychological Safety Lens", "Trust / Psychological Safety Lens"],
  },
  {
    id: "eq-i-2",
    lens: "EQ-i 2.0 Emotional Intelligence",
    category: "Emotional",
    visualType: "radarSubscaleBars",
    visualLabel: "Radar + subscale bars",
    why: "Radar shows overall EI shape while bars show composite subscales.",
    aliases: ["EQ-i 2.0 Emotional Intelligence", "EQ-i 2.0 Lens"],
  },
  {
    id: "firo-b",
    lens: "Relational Needs / FIRO-B",
    category: "Team",
    visualType: "threeBarsCircumplex",
    visualLabel: "Circumplex or three-bar profile",
    why: "Inclusion, control, and affection work as three clear dimensions.",
    aliases: ["Relational Needs / FIRO-B Lens", "Relational Needs / FIRO-B"],
  },
  {
    id: "metacognition",
    lens: "Metacognition",
    category: "Cognitive",
    visualType: "layeredRadar",
    visualLabel: "Layered radar or stacked bars",
    why: "Metacognitive components can be layered as competencies.",
    aliases: ["Metacognition", "Metacognition Lens"],
  },
  {
    id: "msceit",
    lens: "MSCEIT",
    category: "Emotional",
    visualType: "branchBarsAccuracy",
    visualLabel: "Profile bars + task accuracy histogram",
    why: "Ability branches and task performance need separate but related displays.",
    aliases: ["MSCEIT Ability-Based EQ", "MSCEIT Lens"],
  },
  {
    id: "cognitive-flexibility",
    lens: "Cognitive Flexibility",
    category: "Cognitive",
    visualType: "spiderTrend",
    visualLabel: "Spider chart + trend line",
    why: "Flexibility facets fit a spider chart while change can use a line trend.",
    aliases: ["Cognitive Flexibility Lens"],
  },
  {
    id: "social-styles",
    lens: "Social Styles",
    category: "Team",
    visualType: "quadrantPlot",
    visualLabel: "4-quadrant plot",
    why: "Driver, Analytical, Amiable, and Expressive are quadrant-style categories.",
    aliases: ["Social Styles: Driver / Analytical / Amiable / Expressive", "Social Styles Lens"],
  },
  {
    id: "cognitive-load-working-style",
    lens: "Cognitive Load / Working Style",
    category: "Cognitive",
    visualType: "stackedWorkloadBars",
    visualLabel: "Stacked bar or gauge",
    why: "Working memory load, pace, and capacity should be separated visually.",
    aliases: ["Cognitive Load / Working Style", "Cognitive Load Working Style Lens"],
  },
  {
    id: "schwartz-values",
    lens: "Schwartz Values Inventory",
    category: "Motivation",
    visualType: "valuesCircumplex",
    visualLabel: "Value map or ranked bars",
    why: "Values can be positioned on a circumplex or ranked for workplace mapping.",
    aliases: ["Schwartz Values Inventory: Workplace Mapping", "Schwartz Values Inventory"],
  },
  {
    id: "strength-deployment-inventory",
    lens: "Strength Deployment Inventory",
    category: "Team",
    visualType: "triangleCircumplex",
    visualLabel: "Triangle or circumplex map",
    why: "Motivational value systems are commonly plotted in triangular or circular space.",
    aliases: ["Strength Deployment Inventory (SDI)", "Strength Deployment Inventory"],
  },
  {
    id: "spiral-dynamics",
    lens: "Spiral Dynamics / Graves Values",
    category: "Motivation",
    visualType: "spiralBands",
    visualLabel: "Spiral map with color bands",
    why: "Value levels can be shown as staged bands or a spiral progression.",
    aliases: ["Spiral Dynamics / Graves Values: Workplace Mapping", "Spiral Dynamics Lens"],
  },
  {
    id: "work-values-inventory",
    lens: "Work Values Inventory",
    category: "Motivation",
    visualType: "rankedBars",
    visualLabel: "Ranked bar list",
    why: "Workplace priorities are easiest to read as ordered bars.",
    aliases: ["Work Values Inventory: Practical Workplace Priorities", "Work Values Inventory"],
  },
  {
    id: "purpose-meaning",
    lens: "Purpose & Meaning",
    category: "Motivation",
    visualType: "narrativeScorecardRadar",
    visualLabel: "Narrative scorecard + radar",
    why: "Meaning is multi-facet and benefits from a short narrative plus trait shape.",
    aliases: ["Purpose & Meaning Lens", "Purpose and Meaning Lens"],
  },
  {
    id: "belbin-team-roles",
    lens: "Belbin Team Roles",
    category: "Team",
    visualType: "roleWheel",
    visualLabel: "Role wheel or bar profile",
    why: "Team role strengths can be shown around a wheel or as bars.",
    aliases: ["Belbin Team Roles", "Belbin Team Roles Lens"],
  },
  {
    id: "team-management-systems",
    lens: "Team Management Systems",
    category: "Team",
    visualType: "roleMatrix",
    visualLabel: "Role matrix or radar",
    why: "Work preference axes fit a role or skill matrix.",
    aliases: ["Team Management Systems (TMS)", "Team Management Systems Lens"],
  },
  {
    id: "lencioni-team-dynamics",
    lens: "Lencioni Team Dynamics",
    category: "Team",
    visualType: "pyramid",
    visualLabel: "Pyramid diagram",
    why: "The dysfunction model is naturally layered as a pyramid.",
    aliases: ["Lencioni Team Dynamics", "Lencioni Team Dynamics Lens"],
  },
  {
    id: "leadership-circle-profile",
    lens: "Leadership Circle Profile",
    category: "Leadership",
    visualType: "radial360Bars",
    visualLabel: "360° radial profile + competency bars",
    why: "Creative and reactive tendencies fit a circular profile with supporting bars.",
    aliases: ["Leadership Circle Profile", "Leadership Circle Profile Lens"],
  },
  {
    id: "neurodiversity-support",
    lens: "Neurodiversity Support",
    category: "Neurodiversity",
    visualType: "accessibilityMatrixRadar",
    visualLabel: "Accessibility checklist + radar",
    why: "Cognitive accessibility needs require both a matrix/checklist and summary profile.",
    aliases: ["Neurodiversity Support Lens: Neurodivergence and Cognitive Accessibility", "Neurodiversity Support Lens"],
  },
  {
    id: "lived-experience-context",
    lens: "Lived Experience Context",
    category: "Neurodiversity",
    visualType: "timelineTagCloud",
    visualLabel: "Narrative timeline + tag cloud",
    why: "Experience context is best represented as narrative time plus recurring themes.",
    aliases: ["Lived Experience Context Lens"],
  },
  {
    id: "referenced-not-detailed",
    lens: "Referenced but Not Detailed",
    category: "Other",
    visualType: "placeholder",
    visualLabel: "Placeholder icon + note",
    why: "Indicates that the lens was referenced but no usable visual detail is available.",
    aliases: ["Referenced but Not Detailed in Uploaded Document", "Referenced but Not Detailed"],
  },
  {
    id: "cd-risc-resilience",
    lens: "CD-RISC Resilience",
    category: "Emotional",
    visualType: "gaugeSubscaleBars",
    visualLabel: "Gauge + bar subscales",
    why: "Overall resilience works as a gauge while subscales clarify the source of resilience.",
    aliases: ["CD-RISC Lens", "CD-RISC (Resilience) Lens"],
  },
  {
    id: "controller-neurodivergence",
    lens: "Controller Neurodivergence",
    category: "Neurodiversity",
    visualType: "profileBarsChecklist",
    visualLabel: "Profile bars + accommodation checklist",
    why: "Controller tendencies should be paired with targeted support recommendations.",
    aliases: ["Controller Neurodivergence"],
  },
  {
    id: "copenhagen-burnout-inventory",
    lens: "Copenhagen Burnout Inventory",
    category: "Emotional",
    visualType: "domainBars",
    visualLabel: "Bar profile by domain",
    why: "Personal, work-related, and client burnout can be compared as domains.",
    aliases: ["Copenhagen Burnout Inventory Lens"],
  },
  {
    id: "leadership-versatility-index",
    lens: "Leadership Versatility Index",
    category: "Leadership",
    visualType: "dualAxisBalance",
    visualLabel: "Dual-axis scatter or bar pairs",
    why: "Versatility is about balance between opposing leadership behaviors.",
    aliases: ["Leadership Versatility Index Lens"],
  },
  {
    id: "lominger-competency",
    lens: "Lominger Competency",
    category: "Leadership",
    visualType: "competencyMatrix",
    visualLabel: "Competency matrix or ranked bars",
    why: "Competencies are best listed with proficiency or development-priority bars.",
    aliases: ["Lominger Competency Lens"],
  },
  {
    id: "maslach-burnout-inventory",
    lens: "Maslach Burnout Inventory",
    category: "Emotional",
    visualType: "threeBarProfile",
    visualLabel: "Three-bar profile",
    why: "Emotional exhaustion, depersonalization, and personal accomplishment are three key dimensions.",
    aliases: ["Maslach Burnout Inventory Lens"],
  },
  {
    id: "perceived-stress-scale",
    lens: "Perceived Stress Scale",
    category: "Emotional",
    visualType: "scoreGaugeTrend",
    visualLabel: "Score gauge + trend line",
    why: "Stress score is best shown as a gauge with optional recent trend.",
    aliases: ["Perceived Stress Scale Lens"],
  },
  {
    id: "situational-leadership",
    lens: "Situational Leadership",
    category: "Leadership",
    visualType: "leaderStyleMatrix",
    visualLabel: "2×2 leader-style matrix",
    why: "Leadership style can be plotted against task and relationship axes.",
    aliases: ["Situational Leadership Lens"],
  },
  {
    id: "specialist-neurodivergence",
    lens: "Specialist Neurodivergence",
    category: "Neurodiversity",
    visualType: "profileChecklist",
    visualLabel: "Profile + accommodations checklist",
    why: "Specialist strengths and support needs require tailored accommodation guidance.",
    aliases: ["Specialist Neurodivergence"],
  },
  {
    id: "who5-wellbeing-index",
    lens: "WHO-5 Well-Being Index",
    category: "Emotional",
    visualType: "scoreGaugeTrend",
    visualLabel: "Simple score gauge + trend",
    why: "A short wellbeing score works best as a simple gauge with trend.",
    aliases: ["WHO-5 Well-Being Index Lens", "WHO‑5 Well‑Being Index Lens"],
  },
  {
    id: "workplace-stress",
    lens: "Workplace Stress",
    category: "Emotional",
    visualType: "multiDomainBars",
    visualLabel: "Multi-domain bar profile",
    why: "Separate stress domains allow targeted action.",
    aliases: ["Workplace Stress Lens"],
  },
];

function normalizeLensName(name = '') {
  return String(name)
    .toLowerCase()
    .replace(/[‑–—]/g, '-')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export const LENS_ALIAS_TO_CANONICAL = CANONICAL_LENS_VISUALS.reduce((acc, item) => {
  [item.lens, ...item.aliases].forEach((alias) => {
    acc[normalizeLensName(alias)] = item.id;
  });
  return acc;
}, {});

export function getCanonicalLensKey(lensOrName) {
  const rawName = typeof lensOrName === 'string' ? lensOrName : lensOrName?.lens || lensOrName?.id || '';
  return LENS_ALIAS_TO_CANONICAL[normalizeLensName(rawName)] || normalizeLensName(rawName).replace(/\s+/g, '-');
}

export function getLensVisual(lensOrName) {
  const key = getCanonicalLensKey(lensOrName);
  return CANONICAL_LENS_VISUALS.find((item) => item.id === key) || {
    id: key,
    lens: typeof lensOrName === 'string' ? lensOrName : lensOrName?.lens || key,
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
    const canonicalId = visual.id;
    const existing = byCanonicalId.get(canonicalId);
    const candidate = {
      ...rawLens,
      id: canonicalId,
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
      byCanonicalId.set(canonicalId, candidate);
      return;
    }

    const richer = preferRicherLens(existing, candidate);
    const duplicateSourceIds = Array.from(new Set([...(existing.duplicateSourceIds || []), rawLens.id].filter(Boolean)));
    const duplicateSourceNames = Array.from(new Set([...(existing.duplicateSourceNames || []), rawLens.lens].filter(Boolean)));

    byCanonicalId.set(canonicalId, {
      ...richer,
      id: canonicalId,
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
