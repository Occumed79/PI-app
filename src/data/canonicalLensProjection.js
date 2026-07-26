import { deriveLensProjection } from './lensProjectionEngine.js';

const PROJECTION_ID_ALIASES = {
  'hogan-personality-inventory': 'hogan-hpi',
  'hogan-development-survey': 'hogan-hds-derailers',
  'cognitive-ability': 'cognitive-ability-gma-wonderlic',
  'self-determination-theory': 'self-determination-theory-sdt',
  'sixteen-pf': '16pf',
  'learning-design-style': 'learning-design-style-non-vark',
  'learning-agility-growth-mindset': 'learning-agility--growth-mindset',
  'cognitive-reflection-test': 'cognitive-reflection-test-crt',
  'kolbe-a-index': 'kolbe-a-index-conation',
  mbti: 'mbti-crosswalk',
  hbdi: 'hbdi--herrmann-brain-dominance-instrument',
  cliftonstrengths: 'cliftonstrengths-34-themes',
  kai: 'kai--kirton-adaption-innovation-inventory',
  tki: 'thomas-kilmann-conflict-mode-tki',
  enneagram: 'enneagram-core-types-and-subtypes',
  'feedback-sensitivity': 'feedback-sensitivity-lens',
  'trust-psychological-safety': 'trust-and-psychological-safety-lens',
  'eq-i-2': 'eq-i-20-emotional-intelligence',
  'firo-b': 'relational-needs-firo-b-lens',
  'cognitive-load-working-style': 'cognitive-load--working-style',
  'strength-deployment-inventory': 'strength-deployment-inventory-sdi',
  'work-values-inventory': 'work-values-inventory-practical-workplace-priorities',
  'purpose-meaning': 'purpose--meaning-lens',
  'team-management-systems': 'team-management-systems-tms',
  'neurodiversity-support': 'neurodiversity-support-lens',
  'controller-neurodivergence': 'neurodiversity-support-lens',
  'specialist-neurodivergence': 'neurodiversity-support-lens',
  'cd-risc-resilience': 'connordavidson-resilience-scale-cdrisc-lens',
  'copenhagen-burnout-inventory': 'copenhagen-burnout-inventory-cbi-lens',
  'leadership-versatility-index': 'leadership-versatility-index-lvi-lens',
  'lominger-competency': 'lominger-leadership-architect-competency-lens',
  'maslach-burnout-inventory': 'maslach-burnout-inventory-mbi-lens',
  'perceived-stress-scale': 'perceived-stress-scale-pss-lens',
  'workplace-stress': 'workplace-stress-lens',
};

export function canonicalLensForProjection(lens) {
  if (!lens) throw new Error('A lens is required.');
  return {
    ...lens,
    id: PROJECTION_ID_ALIASES[lens.id] || lens.id,
  };
}

export function deriveCanonicalLensProjection(lens, factors, contextOverlayIds = []) {
  const projection = deriveLensProjection(
    canonicalLensForProjection(lens),
    factors,
    contextOverlayIds
  );

  return {
    ...projection,
    lensId: lens.id,
    lens: lens.lens,
    category: lens.category,
  };
}

export function projectionToNativeResult(lens, projection) {
  const numericFields = (projection?.dimensions || []).map(item => ({
    label: item.label,
    value: `${item.value}%`,
    score: item.value,
    basis: item.basis,
  }));

  return {
    lens,
    matched: true,
    summary: projection?.summary || lens?.why || lens?.visualReason || '',
    fields: numericFields,
    numericFields,
  };
}
