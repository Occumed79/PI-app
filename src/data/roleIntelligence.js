import { PI_PROFILES } from './profiles.js';
import {
  FACTOR_META,
  ROLE_BY_ID,
  ROLE_DIMENSIONS,
  ROLE_INTELLIGENCE_ROLES,
} from './roleIntelligenceRoles.js';
import {
  evidenceConfidence,
  evidenceForRole,
} from './roleIntelligenceSources.js';

export { FACTOR_META, ROLE_BY_ID, ROLE_DIMENSIONS, ROLE_INTELLIGENCE_ROLES };

const clamp = (value, min = 0, max = 100) => Math.max(min, Math.min(max, Number(value) || 0));
const mean = values => values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : 0;
const rounded = value => Math.round(clamp(value));
const closeness = (left, right) => clamp(100 - Math.abs(Number(left) - Number(right)));

function bandDistance(value, [min, max]) {
  if (value < min) return min - value;
  if (value > max) return value - max;
  return 0;
}

function bandScore(value, band) {
  return clamp(100 - bandDistance(value, band) * 3.4);
}

function center(band) {
  return (band[0] + band[1]) / 2;
}

export function employeePiProfile(employee) {
  return PI_PROFILES.find(profile => profile.id === (employee?.piProfileId || employee?.profileId)) || PI_PROFILES[0];
}

export function employeeFactors(employee) {
  const profile = employeePiProfile(employee);
  return {
    dominance: clamp(employee?.dominance ?? profile.dominance),
    extraversion: clamp(employee?.extraversion ?? profile.extraversion),
    patience: clamp(employee?.patience ?? profile.patience),
    formality: clamp(employee?.formality ?? profile.formality),
  };
}

// These are directional work-style projections from completed PI factors.
// They are not separately administered cognitive, values, or clinical measurements.
export function deriveDirectionalPreferences(employee) {
  const { dominance: d, extraversion: e, patience: p, formality: f } = employeeFactors(employee);

  return {
    volume: rounded(28 + (100 - p) * 0.28 + d * 0.24 + f * 0.16),
    depth: rounded(18 + p * 0.34 + f * 0.30 + d * 0.12),
    exploration: rounded(10 + d * 0.40 + (100 - f) * 0.34 + (100 - p) * 0.12),
    autonomy: rounded(12 + d * 0.62 + (100 - f) * 0.18),
    precision: rounded(12 + f * 0.68 + p * 0.18),
    externalInteraction: rounded(e),
    interruption: rounded(18 + e * 0.40 + (100 - p) * 0.30 + d * 0.12),
    boundedAuthority: rounded(12 + f * 0.54 + (100 - d) * 0.28),
  };
}

export function deriveDirectionalWorkValues(employee) {
  const { dominance: d, extraversion: e, patience: p, formality: f } = employeeFactors(employee);

  return {
    achievement: rounded(28 + d * 0.38 + f * 0.20),
    independence: rounded(10 + d * 0.62 + (100 - f) * 0.18),
    relationships: rounded(10 + e * 0.70 + p * 0.16),
    support: rounded(16 + p * 0.34 + f * 0.30 + (100 - d) * 0.14),
    workingConditions: rounded(14 + p * 0.38 + f * 0.38),
    recognition: rounded(8 + d * 0.34 + e * 0.48),
  };
}

function roleVector(role) {
  return {
    ...role.signature,
    ...Object.fromEntries(
      Object.entries(role.workValues || {}).map(([key, value]) => [`wv:${key}`, value])
    ),
    dominance: center(role.behavioralBands.dominance),
    extraversion: center(role.behavioralBands.extraversion),
    patience: center(role.behavioralBands.patience),
    formality: center(role.behavioralBands.formality),
  };
}

function roleSimilarity(leftRole, rightRole) {
  const left = roleVector(leftRole);
  const right = roleVector(rightRole);
  const keys = Object.keys(left).filter(key => Number.isFinite(right[key]));
  return rounded(mean(keys.map(key => closeness(left[key], right[key]))));
}

function behavioralComponent(factors, role) {
  return rounded(mean(
    Object.entries(role.behavioralBands).map(([key, band]) => bandScore(factors[key], band))
  ));
}

function dimensionalFit(preferences, role, keys) {
  return rounded(mean(keys.map(key => closeness(preferences[key], role.signature[key]))));
}

function workValueFit(workValues, role) {
  const keys = Object.keys(role.workValues || {});
  return rounded(mean(keys.map(key => closeness(workValues[key], role.workValues[key]))));
}

function sustainabilityComponent(preferences, role) {
  const penalties = [];

  const overload = (demandKey, weight = 1) => {
    const demand = role.signature[demandKey];
    const preference = preferences[demandKey];
    const excess = Math.max(0, demand - preference);
    penalties.push(excess * weight);
  };

  overload('volume', 1.0);
  overload('interruption', 1.25);
  overload('precision', 0.9);
  overload('externalInteraction', 0.8);

  // Low-demand environments can also strain people whose natural operating pull is
  // substantially higher, but this is intentionally a smaller penalty than overload.
  for (const key of ['depth', 'exploration', 'autonomy']) {
    const underuse = Math.max(0, preferences[key] - role.signature[key]);
    penalties.push(underuse * 0.55);
  }

  return rounded(100 - mean(penalties) * 1.7);
}

function inversionSignals(factors, preferences, role) {
  const signals = [];

  const add = (id, label, score, rationale) => {
    const bounded = rounded(score);
    if (bounded >= 18) signals.push({ id, label, score: bounded, rationale });
  };

  add(
    'exploration-overreach',
    'Exploration can outrun role depth',
    Math.max(0, preferences.exploration - role.signature.exploration) * 1.3,
    'A strong exploratory pull can become unnecessary investigation when the role intentionally limits research depth.'
  );

  add(
    'autonomy-boundary',
    'Autonomy can press against authority boundaries',
    Math.max(0, preferences.autonomy - role.signature.autonomy) * (0.8 + role.signature.boundedAuthority / 180),
    'Independent problem solving can create friction when the role requires clean escalation or tightly bounded decision rights.'
  );

  add(
    'precision-overcheck',
    'Precision can become overchecking',
    Math.max(0, factors.formality - 62) * (role.signature.precision / 100) * (role.signature.volume / 100) * 1.55,
    'High precision can become slower release or repeated verification when the role also carries heavy volume.'
  );

  add(
    'urgency-reactivity',
    'Urgency can become reactive switching',
    Math.max(0, 48 - factors.patience) * (role.signature.interruption / 100) * (role.signature.volume / 100) * 1.9,
    'Fast action can become priority churn when both volume and interruption are high.'
  );

  add(
    'social-speed-documentation',
    'Social speed can outrun documentation',
    Math.max(0, factors.extraversion - 66) * (role.signature.externalInteraction / 100) * (role.signature.precision / 100) * 1.2,
    'High communication energy can create downstream defects if documentation discipline does not keep pace.'
  );

  add(
    'control-centralization',
    'Ownership can become overcontrol',
    Math.max(0, factors.dominance - 66) * (role.signature.boundedAuthority / 100) * 1.25,
    'Strong ownership can become overcontrol when the operating system expects delegated or bounded decision rights.'
  );

  return signals.sort((a, b) => b.score - a.score);
}

function headlineFor({ behavioralFit, cognitiveTaskFit, environmentFit, boundaryFit }) {
  const average = mean([behavioralFit, cognitiveTaskFit, environmentFit, boundaryFit]);
  if (average >= 82) return 'Broad person × role overlap';
  if (average >= 70) return 'Strong overlap with specific tensions';
  if (average >= 58) return 'Mixed operating pattern';
  return 'Distinct operating pattern';
}

export function deriveRoleInteraction(employee, role) {
  const factors = employeeFactors(employee);
  const preferences = deriveDirectionalPreferences(employee);
  const workValues = deriveDirectionalWorkValues(employee);

  const factorSignals = Object.entries(role.behavioralBands).map(([key, band]) => {
    const value = factors[key];
    const distance = bandDistance(value, band);
    const state = distance === 0 ? 'aligned' : distance <= 12 ? 'adjacent' : 'contrast';
    return {
      key,
      label: FACTOR_META[key].label,
      short: FACTOR_META[key].short,
      value,
      band,
      distance,
      state,
      score: rounded(bandScore(value, band)),
    };
  });

  const aligned = factorSignals.filter(signal => signal.state === 'aligned').length;
  const adjacent = factorSignals.filter(signal => signal.state === 'adjacent').length;
  const contrast = factorSignals.filter(signal => signal.state === 'contrast').length;

  const components = {
    behavioralFit: behavioralComponent(factors, role),
    cognitiveTaskFit: dimensionalFit(preferences, role, ['volume', 'depth', 'exploration', 'precision']),
    workValueFit: workValueFit(workValues, role),
    environmentFit: dimensionalFit(preferences, role, ['externalInteraction', 'interruption']),
    boundaryFit: dimensionalFit(preferences, role, ['autonomy', 'boundedAuthority']),
    sustainabilityFit: sustainabilityComponent(preferences, role),
  };

  const inversion = inversionSignals(factors, preferences, role);
  const inversionRisk = inversion.length
    ? rounded(mean(inversion.slice(0, 3).map(item => item.score)))
    : 0;

  const internalCompatibilityIndex = rounded(
    components.behavioralFit * 0.25 +
    components.cognitiveTaskFit * 0.20 +
    components.workValueFit * 0.10 +
    components.environmentFit * 0.15 +
    components.boundaryFit * 0.15 +
    components.sustainabilityFit * 0.15 -
    Math.max(0, inversionRisk - 50) * 0.08
  );

  return {
    factors,
    preferences,
    workValues,
    factorSignals,
    aligned,
    adjacent,
    contrast,
    components,
    inversionRisk,
    inversionSignals: inversion,
    evidenceConfidence: evidenceConfidence(role),
    evidence: evidenceForRole(role),
    internalCompatibilityIndex,
    orbitRadius: orbitRadiusForInteraction(internalCompatibilityIndex),
    headline: headlineFor(components),
  };
}

export function orbitRadiusForInteraction(internalCompatibilityIndex) {
  const score = clamp(internalCompatibilityIndex);
  return Math.round(112 + (100 - score) * 1.35);
}

export function deriveAdjacentRolePull(employee, selectedRole, limit = 4) {
  const selected = deriveRoleInteraction(employee, selectedRole);

  return ROLE_INTELLIGENCE_ROLES
    .filter(candidate => candidate.id !== selectedRole.id)
    .map(candidate => {
      const candidateInteraction = deriveRoleInteraction(employee, candidate);
      const similarity = roleSimilarity(selectedRole, candidate);
      const relief = clamp(candidateInteraction.internalCompatibilityIndex - selected.internalCompatibilityIndex + 50);
      const pull = rounded(
        candidateInteraction.internalCompatibilityIndex * 0.58 +
        similarity * 0.30 +
        relief * 0.12
      );

      return {
        role: candidate,
        roleId: candidate.id,
        title: candidate.title,
        pull,
        roleSimilarity: similarity,
        candidateCompatibility: candidateInteraction.internalCompatibilityIndex,
        selectedCompatibility: selected.internalCompatibilityIndex,
        delta: candidateInteraction.internalCompatibilityIndex - selected.internalCompatibilityIndex,
        evidenceConfidence: candidateInteraction.evidenceConfidence,
      };
    })
    .sort((left, right) => right.pull - left.pull || left.title.localeCompare(right.title))
    .slice(0, Math.max(1, limit));
}

export function deriveRoleLandscape(employee) {
  return ROLE_INTELLIGENCE_ROLES
    .map(role => ({
      role,
      interaction: deriveRoleInteraction(employee, role),
    }))
    .sort((left, right) =>
      right.interaction.internalCompatibilityIndex - left.interaction.internalCompatibilityIndex ||
      left.role.title.localeCompare(right.role.title)
    );
}
