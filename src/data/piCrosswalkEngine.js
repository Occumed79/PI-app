const FACTOR_KEYS = ['dominance', 'extraversion', 'patience', 'formality'];

function clamp(value) {
  if (value === null || value === undefined || value === '') return 50;
  const numeric = Number(value);
  if (!Number.isFinite(numeric)) return 50;
  return Math.max(0, Math.min(100, Math.round(numeric)));
}

function inverse(value) {
  return 100 - clamp(value);
}

function weighted(...pairs) {
  const totalWeight = pairs.reduce((sum, [, weight]) => sum + weight, 0) || 1;
  return clamp(pairs.reduce((sum, [value, weight]) => sum + clamp(value) * weight, 0) / totalWeight);
}

export function normalizePiFactors(input = {}) {
  return FACTOR_KEYS.reduce((result, key) => {
    result[key] = clamp(input[key]);
    return result;
  }, {});
}

export function factorDistance(left = {}, right = {}) {
  const a = normalizePiFactors(left);
  const b = normalizePiFactors(right);
  return Math.round(
    FACTOR_KEYS.reduce((sum, key) => sum + Math.abs(a[key] - b[key]), 0) /
      FACTOR_KEYS.length
  );
}

export function deriveBigFive(input) {
  const f = normalizePiFactors(input);
  return [
    {
      label: 'Openness',
      value: weighted([f.dominance, 0.35], [inverse(f.formality), 0.45], [inverse(f.patience), 0.2]),
      basis: 'Higher independence and lower structure/steadiness generally translate toward greater novelty and change orientation.',
    },
    {
      label: 'Conscientiousness',
      value: weighted([f.formality, 0.55], [f.patience, 0.25], [inverse(f.extraversion), 0.2]),
      basis: 'Formality is the strongest PI correspondence, supported by consistency and reserved task focus.',
    },
    {
      label: 'Extraversion',
      value: weighted([f.extraversion, 0.8], [f.dominance, 0.2]),
      basis: 'PI Extraversion is the primary source, with Dominance adding social assertiveness.',
    },
    {
      label: 'Agreeableness',
      value: weighted([f.patience, 0.45], [inverse(f.dominance), 0.35], [f.extraversion, 0.2]),
      basis: 'Higher patience and lower forcefulness generally translate toward accommodation and cooperation.',
    },
    {
      label: 'Emotional Stability',
      value: weighted([f.patience, 0.45], [f.formality, 0.25], [inverse(Math.abs(f.dominance - f.extraversion)), 0.3]),
      basis: 'Steady pace, structure, and a less internally conflicting drive pattern support a more stable directional estimate.',
    },
  ];
}

export function deriveHexaco(input) {
  const f = normalizePiFactors(input);
  const bigFive = Object.fromEntries(deriveBigFive(f).map(item => [item.label, item.value]));
  return [
    {
      label: 'Honesty-Humility',
      value: weighted([f.formality, 0.4], [inverse(f.dominance), 0.35], [f.patience, 0.25]),
      basis: 'Rule orientation, lower forcefulness, and steadiness are used as the directional PI correspondence.',
    },
    {
      label: 'Emotionality',
      value: inverse(bigFive['Emotional Stability']),
      basis: 'Shown as the directional inverse of the crosswalk emotional-stability estimate.',
    },
    {
      label: 'Extraversion',
      value: bigFive.Extraversion,
      basis: 'Primarily translated from PI Extraversion with a smaller Dominance contribution.',
    },
    {
      label: 'Agreeableness',
      value: bigFive.Agreeableness,
      basis: 'Translated from patience, cooperation, and lower forcefulness.',
    },
    {
      label: 'Conscientiousness',
      value: bigFive.Conscientiousness,
      basis: 'Translated primarily from PI Formality and Patience.',
    },
    {
      label: 'Openness',
      value: bigFive.Openness,
      basis: 'Translated from independence, flexibility, and change orientation.',
    },
  ];
}

export function deriveDisc(input) {
  const f = normalizePiFactors(input);
  return [
    { label: 'D — Dominance', value: f.dominance, basis: 'Direct correspondence to PI Dominance.' },
    { label: 'I — Influence', value: f.extraversion, basis: 'Direct correspondence to PI Extraversion.' },
    { label: 'S — Steadiness', value: f.patience, basis: 'Direct correspondence to PI Patience.' },
    { label: 'C — Conscientiousness', value: f.formality, basis: 'Direct correspondence to PI Formality.' },
  ];
}

export function deriveHoganHpi(input) {
  const f = normalizePiFactors(input);
  return [
    { label: 'Adjustment', value: weighted([f.patience, 0.45], [f.formality, 0.3], [inverse(Math.abs(f.dominance - f.extraversion)), 0.25]), basis: 'Steady pace, structure, and drive balance.' },
    { label: 'Ambition', value: weighted([f.dominance, 0.65], [f.extraversion, 0.35]), basis: 'Dominance plus visible social drive.' },
    { label: 'Sociability', value: f.extraversion, basis: 'Directly anchored to PI Extraversion.' },
    { label: 'Interpersonal Sensitivity', value: weighted([f.patience, 0.5], [inverse(f.dominance), 0.3], [f.extraversion, 0.2]), basis: 'Patience, lower forcefulness, and connection drive.' },
    { label: 'Prudence', value: weighted([f.formality, 0.65], [f.patience, 0.35]), basis: 'Structure, rules, and consistency.' },
    { label: 'Inquisitive', value: weighted([f.dominance, 0.35], [inverse(f.formality), 0.4], [inverse(f.patience), 0.25]), basis: 'Independence, flexibility, and novelty seeking.' },
    { label: 'Learning Approach', value: weighted([f.formality, 0.45], [f.dominance, 0.25], [inverse(f.extraversion), 0.3]), basis: 'Accuracy, intellectual control, and reflective focus.' },
  ];
}

export function deriveHoganHds(input) {
  const f = normalizePiFactors(input);
  return [
    { label: 'Excitable', value: weighted([inverse(f.patience), 0.55], [f.extraversion, 0.2], [inverse(f.formality), 0.25]), basis: 'Fast pace, emotional visibility, and low structure may become volatility under pressure.' },
    { label: 'Skeptical', value: weighted([f.dominance, 0.45], [inverse(f.extraversion), 0.25], [f.formality, 0.3]), basis: 'Independence, reserve, and high standards may become guardedness.' },
    { label: 'Cautious', value: weighted([inverse(f.dominance), 0.35], [f.formality, 0.4], [f.patience, 0.25]), basis: 'Lower forcefulness, structure, and steadiness may become hesitation.' },
    { label: 'Reserved', value: weighted([inverse(f.extraversion), 0.65], [f.formality, 0.2], [f.dominance, 0.15]), basis: 'Low social drive is the primary correspondence.' },
    { label: 'Leisurely', value: weighted([f.patience, 0.35], [inverse(f.dominance), 0.35], [inverse(f.extraversion), 0.3]), basis: 'Steadiness and lower visible push may become passive resistance.' },
    { label: 'Bold', value: weighted([f.dominance, 0.55], [f.extraversion, 0.3], [inverse(f.formality), 0.15]), basis: 'High forcefulness and visibility may become overconfidence.' },
    { label: 'Mischievous', value: weighted([f.dominance, 0.35], [f.extraversion, 0.3], [inverse(f.formality), 0.35]), basis: 'Risk orientation and lower structure may become boundary testing.' },
    { label: 'Colorful', value: weighted([f.extraversion, 0.7], [f.dominance, 0.2], [inverse(f.formality), 0.1]), basis: 'High social drive is the strongest correspondence.' },
    { label: 'Imaginative', value: weighted([inverse(f.formality), 0.45], [f.dominance, 0.3], [inverse(f.patience), 0.25]), basis: 'Flexibility, independence, and novelty orientation.' },
    { label: 'Diligent', value: weighted([f.formality, 0.7], [f.dominance, 0.15], [inverse(f.patience), 0.15]), basis: 'High standards and control may become perfectionism.' },
    { label: 'Dutiful', value: weighted([f.formality, 0.4], [f.patience, 0.35], [inverse(f.dominance), 0.25]), basis: 'Structure, steadiness, and lower forcefulness may become over-compliance.' },
  ];
}

export function deriveEqi(input) {
  const f = normalizePiFactors(input);
  return [
    { label: 'Self-Perception', value: weighted([f.dominance, 0.45], [inverse(Math.abs(f.dominance - f.formality)), 0.25], [f.patience, 0.3]), basis: 'Agency, internal consistency, and steadiness.' },
    { label: 'Self-Expression', value: weighted([f.extraversion, 0.55], [f.dominance, 0.45]), basis: 'Social visibility and assertiveness.' },
    { label: 'Interpersonal', value: weighted([f.patience, 0.45], [f.extraversion, 0.35], [inverse(f.dominance), 0.2]), basis: 'Cooperation, connection, and lower forcefulness.' },
    { label: 'Decision Making', value: weighted([f.dominance, 0.35], [f.formality, 0.4], [inverse(f.extraversion), 0.25]), basis: 'Agency, accuracy, and reflective processing.' },
    { label: 'Stress Management', value: weighted([f.patience, 0.5], [f.formality, 0.25], [inverse(Math.abs(f.dominance - f.extraversion)), 0.25]), basis: 'Steady pace, structure, and drive balance.' },
  ];
}

export const FRAMEWORK_DERIVATIONS = [
  { id: 'big-five-ocean', label: 'Big Five', derive: deriveBigFive },
  { id: 'hexaco', label: 'HEXACO', derive: deriveHexaco },
  { id: 'disc-crosswalk', label: 'DISC', derive: deriveDisc },
  { id: 'hogan-hpi', label: 'Hogan HPI', derive: deriveHoganHpi },
  { id: 'hogan-hds-derailers', label: 'Hogan HDS', derive: deriveHoganHds },
  { id: 'eq-i-20-emotional-intelligence', label: 'EQ-i', derive: deriveEqi },
];

export function deriveFrameworkSummaries(factors) {
  return FRAMEWORK_DERIVATIONS.map(framework => {
    const values = framework.derive(factors);
    const strongest = [...values].sort((a, b) => b.value - a.value).slice(0, 3);
    return { ...framework, values, strongest };
  });
}
