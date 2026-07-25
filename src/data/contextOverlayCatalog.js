export const CONTEXT_CATEGORY_ORDER = [
  'economic-material-security',
  'family-caregiving',
  'immigration-cultural-transition',
  'education-access',
  'neurodivergence-accessibility',
  'health-disability',
  'trauma-nervous-system',
  'identity-belonging',
  'work-history',
  'social-support',
  'life-stage-transition',
  'environment-sensory',
  'culture-communication',
  'legal-administrative',
  'protective-resilience',
];

export const CONTEXT_CATEGORIES = {
  'economic-material-security': 'Economic and material security',
  'family-caregiving': 'Family system and caregiving context',
  'immigration-cultural-transition': 'Immigration, displacement, and cultural transition',
  'education-access': 'Education and access background',
  'neurodivergence-accessibility': 'Neurodivergence and cognitive accessibility',
  'health-disability': 'Disability, health, and body-based factors',
  'trauma-nervous-system': 'Trauma, adversity, and nervous-system load',
  'identity-belonging': 'Identity, marginalization, and belonging',
  'work-history': 'Work history and occupational socialization',
  'social-support': 'Social support and community context',
  'life-stage-transition': 'Life stage and transition factors',
  'environment-sensory': 'Environmental and sensory context',
  'culture-communication': 'Cultural values and communication norms',
  'legal-administrative': 'Legal, administrative, and bureaucratic stress',
  'protective-resilience': 'Protective factors and resilience resources',
};

function overlay(id, label, category, description, factorShift, manifestations, supports, tags = []) {
  return { id, label, category, description, factorShift, manifestations, supports, tags };
}

export const CONTEXT_OVERLAYS = [
  overlay(
    'financial-strain',
    'Financial strain or material insecurity',
    'economic-material-security',
    'Ongoing pressure related to income, debt, housing, food, transportation, or basic stability.',
    { dominance: -4, extraversion: -7, patience: -12, formality: -8 },
    ['Shorter planning horizon', 'Lower tolerance for delay or ambiguity', 'Reduced discretionary social energy', 'More mistakes when attention is divided'],
    ['Clarify priorities', 'Avoid preventable schedule volatility', 'Use predictable timelines', 'Separate resource strain from commitment judgments'],
    ['financial', 'housing', 'poverty', 'material security']
  ),
  overlay(
    'housing-transport-instability',
    'Housing or transportation instability',
    'economic-material-security',
    'Unreliable housing, commute, transportation, or physical access that creates repeated logistical load.',
    { dominance: -3, extraversion: -5, patience: -10, formality: -11 },
    ['Late changes may increase', 'Routine may be harder to protect', 'Recovery time may be reduced', 'Visible organization may fluctuate'],
    ['Use realistic scheduling', 'Provide advance notice', 'Offer remote or flexible options where possible', 'Do not equate logistics with capability'],
    ['housing', 'transportation', 'access']
  ),
  overlay(
    'caregiving-load',
    'Caregiving load',
    'family-caregiving',
    'Responsibility for children, elders, disabled relatives, or other dependents.',
    { dominance: -3, extraversion: -8, patience: -9, formality: -6 },
    ['Lower spare bandwidth', 'Greater need for schedule predictability', 'Reduced after-hours availability', 'Faster depletion after interruption-heavy days'],
    ['Use predictable calendars', 'Distinguish availability from dedication', 'Provide clear coverage plans', 'Protect recovery and transition time'],
    ['family', 'caregiving', 'parenting']
  ),
  overlay(
    'family-conflict-crisis',
    'Family conflict or family crisis',
    'family-caregiving',
    'Acute or sustained family-system conflict, instability, illness, or crisis.',
    { dominance: -5, extraversion: -12, patience: -16, formality: -10 },
    ['More guarded or distracted presentation', 'Lower frustration tolerance', 'Inconsistent social availability', 'Slower recovery after conflict'],
    ['Reduce nonessential load', 'Use written clarity', 'Avoid forcing disclosure', 'Offer temporary flexibility and check-ins'],
    ['family', 'conflict', 'crisis']
  ),
  overlay(
    'grief-bereavement',
    'Grief or bereavement',
    'family-caregiving',
    'Loss-related cognitive, emotional, and physical load.',
    { dominance: -8, extraversion: -18, patience: -12, formality: -9 },
    ['Lower energy and initiation', 'Withdrawal or reduced expressiveness', 'Working-memory lapses', 'Uneven pace across days'],
    ['Lower unnecessary urgency', 'Repeat important information', 'Permit flexible pacing', 'Do not interpret reduced affect as disengagement'],
    ['grief', 'loss', 'bereavement']
  ),
  overlay(
    'immigration-administrative-uncertainty',
    'Immigration or status uncertainty',
    'immigration-cultural-transition',
    'Visa, residency, documentation, sponsorship, family reunification, or status-related uncertainty.',
    { dominance: -12, extraversion: -9, patience: -14, formality: 5 },
    ['More caution with authority', 'Higher document vigilance', 'Reduced risk-taking', 'Attention pulled toward deadlines and consequences'],
    ['Provide written process clarity', 'Avoid coercive requests for disclosure', 'Give advance notice for documentation', 'Do not misread caution as low initiative'],
    ['immigration', 'visa', 'status', 'documentation']
  ),
  overlay(
    'displacement-relocation',
    'Displacement, relocation, or cultural transition',
    'immigration-cultural-transition',
    'Adjustment to a new country, region, language environment, or cultural system.',
    { dominance: -8, extraversion: -10, patience: -7, formality: 2 },
    ['Baseline confidence may be temporarily suppressed', 'Social behavior may become more observant', 'More energy spent decoding norms', 'Higher reliance on explicit rules'],
    ['Explain unwritten norms', 'Use examples instead of assumptions', 'Allow acclimation time', 'Separate language fluency from expertise'],
    ['immigration', 'displacement', 'relocation', 'culture']
  ),
  overlay(
    'language-load',
    'Second-language or language-processing load',
    'immigration-cultural-transition',
    'Additional processing effort required to communicate, read nuance, or work in a non-primary language.',
    { dominance: -7, extraversion: -15, patience: -6, formality: 4 },
    ['Verbal spontaneity may drop', 'Written precision may exceed spoken fluency', 'Long meetings may cause fatigue', 'Humor or indirect cues may be missed'],
    ['Use written follow-up', 'Avoid equating accent with competence', 'Allow processing time', 'Use direct, concrete language'],
    ['language', 'communication', 'culture']
  ),
  overlay(
    'limited-educational-access',
    'Uneven educational or technology access',
    'education-access',
    'Past differences in formal education, technology exposure, mentoring, or professional-network access.',
    { dominance: -5, extraversion: -4, patience: 2, formality: -6 },
    ['Confidence may lag behind actual capability', 'Unfamiliar conventions may slow output', 'Skill gaps may be narrow rather than global', 'Questions may be withheld to avoid stigma'],
    ['Teach hidden conventions', 'Provide examples and templates', 'Normalize questions', 'Assess demonstrated learning rather than pedigree'],
    ['education', 'technology', 'access']
  ),
  overlay(
    'adhd-executive-load',
    'ADHD or executive-function load',
    'neurodivergence-accessibility',
    'A known or hypothetical overlay involving attention regulation, initiation, working memory, time perception, or task switching.',
    { dominance: 2, extraversion: 4, patience: -17, formality: -18 },
    ['High-interest work may produce hyperfocus', 'Routine follow-through may become inconsistent', 'Interruptions may sharply impair recovery', 'Visible pace can alternate between bursts and stalls'],
    ['Externalize priorities', 'Use short written next steps', 'Reduce unnecessary task switching', 'Build reminders and checkpoints without shame'],
    ['adhd', 'executive function', 'attention', 'neurodiversity']
  ),
  overlay(
    'autism-masking-sensory-load',
    'Autistic masking or sensory/social load',
    'neurodivergence-accessibility',
    'A known or hypothetical overlay involving masking, sensory processing, social decoding, or change load.',
    { dominance: -4, extraversion: -16, patience: -7, formality: 12 },
    ['Apparent social ease may collapse after sustained masking', 'Unexpected change may consume disproportionate energy', 'Precision may increase when uncertainty rises', 'Withdrawal may be recovery rather than rejection'],
    ['Make expectations explicit', 'Reduce sensory and social overload', 'Give advance notice of changes', 'Do not require performative sociability'],
    ['autism', 'masking', 'sensory', 'neurodiversity']
  ),
  overlay(
    'dyslexia-language-processing',
    'Dyslexia or language-processing load',
    'neurodivergence-accessibility',
    'A known or hypothetical overlay affecting reading speed, written sequencing, spelling, or dense-text processing.',
    { dominance: -2, extraversion: 0, patience: -8, formality: -12 },
    ['Written mechanics may underrepresent reasoning', 'Dense instructions may increase error risk', 'Verbal or visual problem solving may remain strong', 'Proofreading can consume excessive time'],
    ['Use accessible formatting', 'Allow assistive technology', 'Separate content quality from spelling mechanics', 'Provide verbal or visual alternatives'],
    ['dyslexia', 'language processing', 'accessibility']
  ),
  overlay(
    'chronic-illness-pain',
    'Chronic illness, pain, or fluctuating symptoms',
    'health-disability',
    'Persistent or episodic health load that affects energy, attention, mobility, sleep, or recovery.',
    { dominance: -6, extraversion: -13, patience: -10, formality: -7 },
    ['Performance may vary by day or time', 'Lower social energy may preserve task capacity', 'Pace may slow despite unchanged skill', 'Errors may increase during symptom flares'],
    ['Use flexible pacing where possible', 'Focus on outcomes', 'Support accommodations', 'Do not infer motivation from symptom variability'],
    ['health', 'disability', 'pain', 'chronic illness']
  ),
  overlay(
    'sleep-disruption',
    'Sleep disruption or fatigue',
    'health-disability',
    'Acute or chronic sleep loss, shift disruption, caregiving-related fatigue, or treatment-related fatigue.',
    { dominance: -4, extraversion: -10, patience: -18, formality: -16 },
    ['Reduced inhibition and frustration tolerance', 'Slower working memory', 'More variable attention to detail', 'Lower social regulation'],
    ['Prioritize safety-critical work', 'Reduce avoidable context switching', 'Use checklists', 'Avoid interpreting fatigue behavior as stable personality'],
    ['sleep', 'fatigue', 'health']
  ),
  overlay(
    'treatment-medication-burden',
    'Treatment or medication burden',
    'health-disability',
    'Appointments, side effects, recovery periods, medication changes, or treatment logistics.',
    { dominance: -4, extraversion: -8, patience: -7, formality: -5 },
    ['Availability may fluctuate', 'Energy or concentration may vary', 'Planning load increases', 'Privacy concerns may reduce explanation'],
    ['Offer predictable flexibility', 'Avoid demanding medical detail', 'Use clear coverage planning', 'Evaluate patterns over time rather than one day'],
    ['health', 'treatment', 'medication']
  ),
  overlay(
    'acute-stress-overload',
    'Acute stress or overload',
    'trauma-nervous-system',
    'A temporary state of overload caused by demands exceeding available resources.',
    { dominance: 3, extraversion: -7, patience: -22, formality: -15 },
    ['Existing strengths become exaggerated', 'Fast profiles may become abrupt or impulsive', 'Precise profiles may become rigid or perfectionistic', 'Social profiles may over-communicate or withdraw'],
    ['Sequence priorities', 'Reduce ambiguity', 'Lower interruption load', 'Create a clear recovery point'],
    ['stress', 'overload', 'pressure']
  ),
  overlay(
    'trauma-hypervigilance',
    'Trauma-related hypervigilance or threat load',
    'trauma-nervous-system',
    'A known or hypothetical overlay involving heightened threat monitoring, startle, avoidance, or authority sensitivity.',
    { dominance: -10, extraversion: -13, patience: -18, formality: 8 },
    ['Neutral ambiguity may feel unsafe', 'Authority interactions may trigger caution', 'Control and predictability needs may rise', 'Withdrawal may be self-protection'],
    ['Use transparent expectations', 'Avoid surprise confrontation', 'Offer choices where possible', 'Do not infer trauma from behavior'],
    ['trauma', 'hypervigilance', 'safety']
  ),
  overlay(
    'low-belonging-discrimination',
    'Low belonging, exclusion, or discrimination pressure',
    'identity-belonging',
    'Social threat, stereotype pressure, exclusion, discrimination, or uncertainty about acceptance.',
    { dominance: -11, extraversion: -15, patience: -8, formality: 5 },
    ['Ideas may be withheld', 'Self-monitoring increases', 'Social energy is spent on safety', 'Errors may rise under evaluation threat'],
    ['Make inclusion behavior concrete', 'Use consistent standards', 'Invite input without spotlighting', 'Address exclusion rather than coaching the person to tolerate it'],
    ['belonging', 'identity safety', 'discrimination']
  ),
  overlay(
    'unsafe-authority-history',
    'Unsafe authority or retaliation history',
    'work-history',
    'Prior environments where speaking up, taking initiative, or making mistakes led to punishment or retaliation.',
    { dominance: -17, extraversion: -9, patience: 2, formality: 11 },
    ['Initiative may be suppressed', 'Over-documentation may increase', 'Approval seeking may replace autonomy', 'Silence may reflect learned risk management'],
    ['Clarify decision rights', 'Reward early escalation', 'Respond predictably to mistakes', 'Build trust through repeated evidence'],
    ['authority', 'retaliation', 'work history']
  ),
  overlay(
    'toxic-workplace-recovery',
    'Recovery from a toxic or chaotic workplace',
    'work-history',
    'Carryover from sustained instability, bullying, role ambiguity, overload, or poor leadership.',
    { dominance: -6, extraversion: -11, patience: -13, formality: 8 },
    ['Higher sensitivity to ambiguity', 'Trust develops slowly', 'Defensive documentation', 'Strong reactions to shifting expectations'],
    ['Keep commitments', 'Define roles and escalation', 'Use stable feedback rhythms', 'Do not demand immediate trust'],
    ['work history', 'toxicity', 'recovery']
  ),
  overlay(
    'low-social-support',
    'Low social support or isolation',
    'social-support',
    'Limited practical, emotional, family, community, or workplace support.',
    { dominance: -5, extraversion: -14, patience: -8, formality: -5 },
    ['Less recovery outside work', 'Higher impact from workplace conflict', 'Reduced help-seeking', 'More pressure to appear self-sufficient'],
    ['Create reliable points of contact', 'Normalize assistance', 'Build peer connection without forcing disclosure', 'Use proactive check-ins'],
    ['support', 'isolation', 'community']
  ),
  overlay(
    'major-life-transition',
    'Major life transition',
    'life-stage-transition',
    'Marriage, separation, new parenthood, caregiving changes, retirement planning, relocation, or another major transition.',
    { dominance: -3, extraversion: -8, patience: -9, formality: -7 },
    ['Attention is split across adaptation tasks', 'Routine may temporarily weaken', 'Energy and availability fluctuate', 'Identity or priority shifts may affect motivation'],
    ['Allow adjustment time', 'Clarify near-term priorities', 'Use predictable check-ins', 'Avoid treating a transition state as permanent'],
    ['life transition', 'family', 'relocation']
  ),
  overlay(
    'sensory-environment-overload',
    'Sensory or environmental overload',
    'environment-sensory',
    'Noise, lighting, crowding, temperature, visual clutter, interruption, or physical-environment demands.',
    { dominance: -3, extraversion: -12, patience: -18, formality: -12 },
    ['Irritability or withdrawal may rise', 'Detail accuracy may fall', 'Social interaction becomes more costly', 'Recovery after interruption slows'],
    ['Reduce avoidable sensory load', 'Provide quiet work options', 'Batch interruptions', 'Use environmental adjustments before performance judgments'],
    ['sensory', 'environment', 'overload']
  ),
  overlay(
    'cultural-deference-indirectness',
    'Cultural deference or indirect communication norms',
    'culture-communication',
    'Cultural norms that shape disagreement, authority behavior, eye contact, self-promotion, directness, or group harmony.',
    { dominance: -12, extraversion: -7, patience: 5, formality: 4 },
    ['Direct PI drive may be behaviorally muted', 'Disagreement may be expressed indirectly', 'Self-promotion may be avoided', 'Harmony may be prioritized in public settings'],
    ['Ask specific questions', 'Provide low-risk channels for disagreement', 'Do not equate directness with confidence', 'Explain local communication expectations'],
    ['culture', 'communication', 'deference']
  ),
  overlay(
    'legal-administrative-burden',
    'Legal, administrative, or bureaucratic burden',
    'legal-administrative',
    'Court, benefits, insurance, licensing, immigration, compliance, or other high-consequence administrative load.',
    { dominance: -5, extraversion: -8, patience: -15, formality: 7 },
    ['Attention is consumed by deadlines and documentation', 'Higher fear of procedural error', 'Reduced bandwidth for optional tasks', 'More checking and reassurance seeking'],
    ['Use clear written deadlines', 'Avoid unnecessary paperwork churn', 'Give advance notice', 'Separate administrative load from capability'],
    ['legal', 'administrative', 'bureaucracy']
  ),
  overlay(
    'strong-support-resources',
    'Strong support and practical resources',
    'protective-resilience',
    'Reliable relationships, financial stability, healthcare access, community, flexible resources, or trusted support.',
    { dominance: 5, extraversion: 6, patience: 8, formality: 5 },
    ['Baseline strengths are easier to express', 'Recovery improves', 'Risk-taking becomes more sustainable', 'Help-seeking occurs earlier'],
    ['Preserve effective supports', 'Recognize protective resources', 'Avoid assuming resilience removes all strain', 'Use strengths without overloading'],
    ['protective', 'support', 'resources', 'resilience']
  ),
  overlay(
    'high-psychological-safety',
    'High psychological safety and belonging',
    'protective-resilience',
    'A context where questions, disagreement, mistakes, and requests for help are handled safely.',
    { dominance: 8, extraversion: 8, patience: 5, formality: -2 },
    ['More authentic PI presentation', 'Greater initiative and voice', 'Earlier error reporting', 'Less masking and defensive documentation'],
    ['Maintain predictable responses', 'Reward constructive dissent', 'Protect confidentiality', 'Keep standards clear and humane'],
    ['psychological safety', 'belonging', 'resilience']
  ),
];

export const CONTEXT_OVERLAY_BY_ID = Object.fromEntries(
  CONTEXT_OVERLAYS.map(item => [item.id, item])
);

export function normalizeContextOverlayIds(value) {
  if (!Array.isArray(value)) return [];
  return [...new Set(value.map(String).filter(id => CONTEXT_OVERLAY_BY_ID[id]))];
}

export function groupedContextOverlays() {
  return CONTEXT_CATEGORY_ORDER.map(category => ({
    id: category,
    label: CONTEXT_CATEGORIES[category],
    overlays: CONTEXT_OVERLAYS.filter(item => item.category === category),
  }));
}
