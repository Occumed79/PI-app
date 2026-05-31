import {
  CANONICAL_LENS_VISUALS,
  getLensVisualTableRows,
} from './lensVisualRegistry.js';

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

export { getLensVisualTableRows };
