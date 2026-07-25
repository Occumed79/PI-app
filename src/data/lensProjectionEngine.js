import { HSI_LENS_REGISTRY } from './hsiLensRegistry.js';
import {
  deriveBigFive,
  deriveDisc,
  deriveEqi,
  deriveHexaco,
  deriveHoganHds,
  deriveHoganHpi,
  normalizePiFactors,
} from './piCrosswalkEngine.js';
import {
  CONTEXT_OVERLAY_BY_ID,
  normalizeContextOverlayIds,
} from './contextOverlayCatalog.js';

const FACTOR_LABELS = {
  dominance: 'Dominance',
  extraversion: 'Extraversion',
  patience: 'Patience',
  formality: 'Formality',
};

function clamp(value) {
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

function dimension(label, value, basis) {
  return { label, value: clamp(value), basis };
}

function topDimensions(dimensions, count = 4) {
  return [...dimensions].sort((a, b) => b.value - a.value).slice(0, count);
}

export function applyContextOverlays(input, overlayIds = []) {
  const baseFactors = normalizePiFactors(input);
  const ids = normalizeContextOverlayIds(overlayIds);
  const overlays = ids.map(id => CONTEXT_OVERLAY_BY_ID[id]);
  const totalShift = { dominance: 0, extraversion: 0, patience: 0, formality: 0 };

  for (const item of overlays) {
    for (const key of Object.keys(totalShift)) {
      totalShift[key] += Number(item.factorShift?.[key] || 0);
    }
  }

  // Multiple simultaneous life variables should accumulate without allowing one
  // heuristic layer to completely erase the completed PI baseline.
  const damping = overlays.length <= 1 ? 1 : Math.max(0.52, 1 - (overlays.length - 1) * 0.08);
  const apparentFactors = Object.fromEntries(
    Object.keys(totalShift).map(key => [
      key,
      clamp(baseFactors[key] + totalShift[key] * damping),
    ])
  );

  const changes = Object.keys(totalShift)
    .map(key => ({
      factor: key,
      label: FACTOR_LABELS[key],
      base: baseFactors[key],
      apparent: apparentFactors[key],
      delta: apparentFactors[key] - baseFactors[key],
    }))
    .filter(item => item.delta !== 0)
    .sort((a, b) => Math.abs(b.delta) - Math.abs(a.delta));

  return {
    overlayIds: ids,
    overlays,
    baseFactors,
    apparentFactors,
    changes,
    manifestations: [...new Set(overlays.flatMap(item => item.manifestations || []))],
    supports: [...new Set(overlays.flatMap(item => item.supports || []))],
  };
}

function deriveInsights(f) {
  return [
    dimension('Fiery Red', weighted([f.dominance, 0.68], [inverse(f.patience), 0.22], [f.extraversion, 0.1]), 'Forcefulness, pace, and visible assertiveness.'),
    dimension('Sunshine Yellow', weighted([f.extraversion, 0.72], [f.dominance, 0.15], [inverse(f.formality), 0.13]), 'Social energy, spontaneity, and influence.'),
    dimension('Earth Green', weighted([f.patience, 0.64], [inverse(f.dominance), 0.22], [f.extraversion, 0.14]), 'Steadiness, accommodation, and relational patience.'),
    dimension('Cool Blue', weighted([f.formality, 0.68], [inverse(f.extraversion), 0.18], [f.patience, 0.14]), 'Precision, reserve, and structure.'),
  ];
}

function derive16pf(f) {
  return [
    dimension('Warmth', weighted([f.extraversion, 0.55], [f.patience, 0.3], [inverse(f.dominance), 0.15]), 'Social approach and accommodation.'),
    dimension('Reasoning Style', weighted([f.formality, 0.45], [f.dominance, 0.25], [inverse(f.extraversion), 0.3]), 'Structured, independent, reflective processing preference; not cognitive ability.'),
    dimension('Emotional Stability', weighted([f.patience, 0.55], [f.formality, 0.25], [inverse(Math.abs(f.dominance - f.extraversion)), 0.2]), 'Steady pace, structure, and drive balance.'),
    dimension('Dominance', f.dominance, 'Direct PI correspondence.'),
    dimension('Liveliness', weighted([f.extraversion, 0.65], [inverse(f.patience), 0.2], [inverse(f.formality), 0.15]), 'Visible energy and spontaneity.'),
    dimension('Rule Consciousness', f.formality, 'Directly anchored to PI Formality.'),
    dimension('Social Boldness', weighted([f.dominance, 0.45], [f.extraversion, 0.55]), 'Assertiveness plus social drive.'),
    dimension('Sensitivity', weighted([f.patience, 0.4], [f.extraversion, 0.25], [inverse(f.dominance), 0.35]), 'Accommodation and interpersonal receptivity.'),
    dimension('Vigilance', weighted([f.dominance, 0.35], [inverse(f.extraversion), 0.25], [f.formality, 0.4]), 'Independence, reserve, and standards.'),
    dimension('Abstractedness', weighted([inverse(f.formality), 0.45], [f.dominance, 0.3], [inverse(f.patience), 0.25]), 'Novelty, abstraction, and change orientation.'),
    dimension('Privateness', weighted([inverse(f.extraversion), 0.65], [f.formality, 0.2], [f.dominance, 0.15]), 'Reserve and information control.'),
    dimension('Apprehension', weighted([inverse(f.patience), 0.45], [f.formality, 0.3], [inverse(f.dominance), 0.25]), 'Caution and pressure sensitivity as a directional estimate.'),
    dimension('Openness to Change', weighted([f.dominance, 0.35], [inverse(f.formality), 0.4], [inverse(f.patience), 0.25]), 'Independence, flexibility, and faster change orientation.'),
    dimension('Self-Reliance', weighted([f.dominance, 0.55], [inverse(f.extraversion), 0.45]), 'Autonomy plus lower social dependence.'),
    dimension('Perfectionism', weighted([f.formality, 0.72], [f.dominance, 0.15], [inverse(f.patience), 0.13]), 'Standards and control.'),
    dimension('Tension', weighted([inverse(f.patience), 0.62], [f.dominance, 0.2], [inverse(f.formality), 0.18]), 'Pace pressure and impatience.'),
  ];
}

function deriveCognitiveProcessing(f) {
  return [
    dimension('Analytical Processing', weighted([f.formality, 0.55], [f.dominance, 0.25], [inverse(f.extraversion), 0.2]), 'Structure, independence, and reflective focus.'),
    dimension('Holistic Processing', weighted([inverse(f.formality), 0.45], [f.extraversion, 0.25], [f.dominance, 0.3]), 'Flexibility, synthesis, and externally stimulated thinking.'),
    dimension('Detail Orientation', weighted([f.formality, 0.72], [f.patience, 0.18], [inverse(f.extraversion), 0.1]), 'Formality is the strongest source.'),
    dimension('Pattern / Systems Orientation', weighted([f.dominance, 0.42], [inverse(f.formality), 0.32], [inverse(f.patience), 0.26]), 'Independence, abstraction, and change scanning.'),
    dimension('Reflective Pace', weighted([f.patience, 0.52], [f.formality, 0.28], [inverse(f.extraversion), 0.2]), 'Steady pace and internal processing.'),
  ];
}

function deriveDecisionMaking(f) {
  return [
    dimension('Decision Speed', weighted([f.dominance, 0.45], [inverse(f.patience), 0.35], [inverse(f.formality), 0.2]), 'Forcefulness, faster pace, and lower evidence burden.'),
    dimension('Evidence Threshold', weighted([f.formality, 0.62], [f.patience, 0.22], [inverse(f.extraversion), 0.16]), 'Structure and reflective verification.'),
    dimension('Risk Tolerance', weighted([f.dominance, 0.52], [inverse(f.formality), 0.3], [inverse(f.patience), 0.18]), 'Independence, flexibility, and pace.'),
    dimension('Consensus Orientation', weighted([f.patience, 0.45], [f.extraversion, 0.3], [inverse(f.dominance), 0.25]), 'Cooperation and social consultation.'),
    dimension('Ambiguity Tolerance', weighted([f.dominance, 0.35], [inverse(f.formality), 0.45], [inverse(f.patience), 0.2]), 'Autonomy and lower structure need.'),
  ];
}

function deriveSdt(f) {
  return [
    dimension('Autonomy Need', weighted([f.dominance, 0.72], [inverse(f.formality), 0.18], [inverse(f.patience), 0.1]), 'Independence and freedom from close control.'),
    dimension('Competence / Mastery Need', weighted([f.formality, 0.48], [f.dominance, 0.3], [inverse(f.extraversion), 0.22]), 'Standards, ownership, and task depth.'),
    dimension('Relatedness Need', weighted([f.extraversion, 0.52], [f.patience, 0.34], [inverse(f.dominance), 0.14]), 'Connection, cooperation, and social energy.'),
  ];
}

function deriveLearning(f) {
  return [
    dimension('Independent Study', weighted([f.dominance, 0.42], [inverse(f.extraversion), 0.38], [f.formality, 0.2]), 'Autonomy, reserve, and structured depth.'),
    dimension('Discussion / Social Learning', weighted([f.extraversion, 0.72], [f.patience, 0.18], [inverse(f.formality), 0.1]), 'External processing and connection.'),
    dimension('Structured Guidance', weighted([f.formality, 0.62], [f.patience, 0.28], [inverse(f.dominance), 0.1]), 'Clear sequence, standards, and steadiness.'),
    dimension('Experimentation', weighted([f.dominance, 0.35], [inverse(f.formality), 0.38], [inverse(f.patience), 0.27]), 'Independence, flexibility, and quick iteration.'),
    dimension('Practice / Repetition', weighted([f.patience, 0.55], [f.formality, 0.35], [inverse(f.dominance), 0.1]), 'Consistency and procedural reinforcement.'),
  ];
}

function deriveLearningAgility(f) {
  return [
    dimension('Change Agility', weighted([f.dominance, 0.3], [inverse(f.formality), 0.4], [inverse(f.patience), 0.3]), 'Novelty, independence, and faster pace.'),
    dimension('People Agility', weighted([f.extraversion, 0.55], [f.patience, 0.3], [inverse(f.dominance), 0.15]), 'Social learning and adaptation.'),
    dimension('Results Agility', weighted([f.dominance, 0.58], [inverse(f.patience), 0.22], [f.formality, 0.2]), 'Ownership, urgency, and execution standards.'),
    dimension('Mental Agility', weighted([f.dominance, 0.35], [inverse(f.formality), 0.35], [f.formality, 0.15], [inverse(f.extraversion), 0.15]), 'Independent thought plus ability to shift between structure and abstraction.'),
    dimension('Feedback Adaptation', weighted([f.patience, 0.35], [inverse(f.dominance), 0.2], [f.formality, 0.25], [f.extraversion, 0.2]), 'Receptivity, reflection, and social exchange.'),
  ];
}

function deriveSocialCognition(f) {
  return [
    dimension('Perspective-Taking Bandwidth', weighted([f.patience, 0.42], [f.extraversion, 0.32], [inverse(f.dominance), 0.26]), 'Patience, connection, and lower forcefulness.'),
    dimension('Social Inference Speed', weighted([f.extraversion, 0.48], [inverse(f.patience), 0.28], [f.dominance, 0.24]), 'Social scanning, pace, and assertiveness.'),
    dimension('Boundary Clarity', weighted([f.dominance, 0.55], [f.formality, 0.25], [inverse(f.extraversion), 0.2]), 'Agency, standards, and reserve.'),
    dimension('Belonging Orientation', weighted([f.extraversion, 0.48], [f.patience, 0.38], [inverse(f.dominance), 0.14]), 'Connection and cooperation.'),
    dimension('Attribution Caution', weighted([f.formality, 0.45], [f.patience, 0.35], [inverse(f.extraversion), 0.2]), 'Evidence checking and slower judgment.'),
  ];
}

function deriveExecutiveFunction(f) {
  return [
    dimension('Initiation Drive', weighted([f.dominance, 0.5], [inverse(f.patience), 0.3], [f.extraversion, 0.2]), 'Agency, pace, and visible activation.'),
    dimension('Planning Preference', weighted([f.formality, 0.6], [f.patience, 0.25], [f.dominance, 0.15]), 'Structure, sequence, and ownership.'),
    dimension('Task-Switching Comfort', weighted([inverse(f.patience), 0.4], [inverse(f.formality), 0.35], [f.extraversion, 0.25]), 'Pace, flexibility, and external stimulation.'),
    dimension('Inhibition / Deliberation', weighted([f.formality, 0.42], [f.patience, 0.4], [inverse(f.dominance), 0.18]), 'Structure and slower response threshold.'),
    dimension('Follow-Through Preference', weighted([f.formality, 0.5], [f.patience, 0.42], [inverse(f.extraversion), 0.08]), 'Consistency and closure.'),
  ];
}

function deriveTestExpression(f) {
  return [
    dimension('Speed Bias', weighted([inverse(f.patience), 0.5], [f.dominance, 0.3], [f.extraversion, 0.2]), 'How quickly the person may respond under timed conditions; not ability.'),
    dimension('Accuracy / Checking Bias', weighted([f.formality, 0.62], [f.patience, 0.25], [inverse(f.extraversion), 0.13]), 'How strongly the person may verify work; not test performance.'),
    dimension('Sustained Focus Preference', weighted([f.patience, 0.45], [f.formality, 0.35], [inverse(f.extraversion), 0.2]), 'Fit with long, structured concentration.'),
    dimension('Novel Problem Comfort', weighted([f.dominance, 0.35], [inverse(f.formality), 0.4], [inverse(f.patience), 0.25]), 'Comfort approaching unfamiliar problems; not cognitive ability.'),
  ];
}

function deriveKolbe(f) {
  return [
    dimension('Fact Finder', weighted([f.formality, 0.62], [inverse(f.extraversion), 0.2], [f.patience, 0.18]), 'Detail, evidence, and reflective depth.'),
    dimension('Follow Thru', weighted([f.formality, 0.48], [f.patience, 0.42], [inverse(f.dominance), 0.1]), 'Sequence, consistency, and closure.'),
    dimension('Quick Start', weighted([f.dominance, 0.42], [inverse(f.patience), 0.32], [inverse(f.formality), 0.26]), 'Experimentation, pace, and risk.'),
    dimension('Implementor', weighted([f.dominance, 0.35], [f.patience, 0.3], [f.formality, 0.35]), 'Ownership, tangible execution, and standards.'),
  ];
}

function deriveMbti(f) {
  return [
    dimension('Extraversion preference', f.extraversion, 'Directly anchored to PI Extraversion; inverse indicates Introversion preference.'),
    dimension('Intuition preference', weighted([f.dominance, 0.32], [inverse(f.formality), 0.42], [inverse(f.patience), 0.26]), 'Abstraction, novelty, and change orientation; inverse indicates Sensing.'),
    dimension('Thinking preference', weighted([f.dominance, 0.38], [f.formality, 0.35], [inverse(f.patience), 0.12], [inverse(f.extraversion), 0.15]), 'Task logic, standards, and independence; inverse indicates Feeling.'),
    dimension('Judging preference', weighted([f.formality, 0.62], [f.patience, 0.25], [inverse(f.dominance), 0.13]), 'Structure and closure; inverse indicates Perceiving.'),
  ];
}

function deriveHbdi(f) {
  return [
    dimension('A — Analytical', weighted([f.formality, 0.5], [f.dominance, 0.3], [inverse(f.extraversion), 0.2]), 'Facts, logic, and independent analysis.'),
    dimension('B — Sequential', weighted([f.formality, 0.62], [f.patience, 0.38]), 'Planning, detail, and order.'),
    dimension('C — Interpersonal', weighted([f.extraversion, 0.52], [f.patience, 0.34], [inverse(f.dominance), 0.14]), 'Connection and relational processing.'),
    dimension('D — Imaginative', weighted([inverse(f.formality), 0.42], [f.dominance, 0.32], [inverse(f.patience), 0.26]), 'Holistic, experimental, and future-oriented thinking.'),
  ];
}

function deriveKeirsey(f) {
  return [
    dimension('Artisan', weighted([inverse(f.formality), 0.38], [inverse(f.patience), 0.32], [f.extraversion, 0.3]), 'Spontaneity, action, and adaptability.'),
    dimension('Guardian', weighted([f.formality, 0.52], [f.patience, 0.38], [inverse(f.dominance), 0.1]), 'Duty, stability, and structure.'),
    dimension('Idealist', weighted([f.extraversion, 0.38], [f.patience, 0.38], [inverse(f.dominance), 0.24]), 'Connection, harmony, and meaning.'),
    dimension('Rational', weighted([f.dominance, 0.36], [inverse(f.formality), 0.24], [f.formality, 0.22], [inverse(f.extraversion), 0.18]), 'Independent systems thinking and competence focus.'),
  ];
}

function deriveStrengthDomains(f) {
  return [
    dimension('Executing', weighted([f.formality, 0.48], [f.patience, 0.3], [f.dominance, 0.22]), 'Standards, persistence, and ownership.'),
    dimension('Influencing', weighted([f.extraversion, 0.5], [f.dominance, 0.5]), 'Social energy and assertiveness.'),
    dimension('Relationship Building', weighted([f.patience, 0.45], [f.extraversion, 0.38], [inverse(f.dominance), 0.17]), 'Cooperation and connection.'),
    dimension('Strategic Thinking', weighted([f.dominance, 0.34], [inverse(f.formality), 0.28], [f.formality, 0.22], [inverse(f.extraversion), 0.16]), 'Independent synthesis, abstraction, and analysis.'),
  ];
}

function deriveKai(f) {
  return [
    dimension('Adaptation', weighted([f.formality, 0.55], [f.patience, 0.32], [inverse(f.dominance), 0.13]), 'Improvement inside structure.'),
    dimension('Innovation', weighted([inverse(f.formality), 0.45], [f.dominance, 0.32], [inverse(f.patience), 0.23]), 'Reframing and rule-challenging.'),
    dimension('Efficiency Preference', weighted([f.formality, 0.42], [f.patience, 0.3], [f.dominance, 0.28]), 'Systematic delivery.'),
    dimension('Originality Preference', weighted([inverse(f.formality), 0.48], [f.dominance, 0.3], [f.extraversion, 0.22]), 'Novel ideas and visible experimentation.'),
  ];
}

function deriveTki(f) {
  return [
    dimension('Competing', weighted([f.dominance, 0.68], [inverse(f.patience), 0.2], [inverse(f.formality), 0.12]), 'Assertiveness and urgency.'),
    dimension('Collaborating', weighted([f.dominance, 0.28], [f.extraversion, 0.3], [f.patience, 0.27], [f.formality, 0.15]), 'Agency plus relationship and problem structure.'),
    dimension('Compromising', weighted([f.patience, 0.35], [f.extraversion, 0.25], [inverse(Math.abs(f.dominance - 50)), 0.2], [inverse(Math.abs(f.formality - 50)), 0.2]), 'Balanced assertiveness and structure.'),
    dimension('Avoiding', weighted([inverse(f.dominance), 0.42], [inverse(f.extraversion), 0.3], [f.patience, 0.28]), 'Lower confrontation and higher withdrawal preference.'),
    dimension('Accommodating', weighted([inverse(f.dominance), 0.4], [f.patience, 0.38], [f.extraversion, 0.22]), 'Harmony and deference.'),
  ];
}

function deriveVia(f) {
  return [
    dimension('Leadership', weighted([f.dominance, 0.58], [f.extraversion, 0.28], [f.formality, 0.14]), 'Agency and mobilization.'),
    dimension('Teamwork', weighted([f.patience, 0.44], [f.extraversion, 0.34], [inverse(f.dominance), 0.22]), 'Cooperation and connection.'),
    dimension('Prudence', weighted([f.formality, 0.6], [f.patience, 0.28], [inverse(f.dominance), 0.12]), 'Planning and restraint.'),
    dimension('Curiosity', weighted([inverse(f.formality), 0.36], [f.dominance, 0.28], [inverse(f.patience), 0.2], [f.extraversion, 0.16]), 'Exploration and novelty.'),
    dimension('Perseverance', weighted([f.patience, 0.46], [f.formality, 0.34], [f.dominance, 0.2]), 'Consistency and ownership.'),
    dimension('Social Intelligence', weighted([f.extraversion, 0.46], [f.patience, 0.34], [inverse(f.dominance), 0.2]), 'Connection and accommodation.'),
    dimension('Bravery', weighted([f.dominance, 0.58], [inverse(f.patience), 0.2], [f.extraversion, 0.22]), 'Assertiveness and action under uncertainty.'),
    dimension('Self-Regulation', weighted([f.formality, 0.52], [f.patience, 0.38], [inverse(f.extraversion), 0.1]), 'Structure and steadiness.'),
  ];
}

function deriveEnneagram(f) {
  return [
    dimension('Type 1 — Reformer', weighted([f.formality, 0.68], [f.dominance, 0.18], [f.patience, 0.14]), 'Standards and improvement.'),
    dimension('Type 2 — Helper', weighted([f.extraversion, 0.35], [f.patience, 0.4], [inverse(f.dominance), 0.25]), 'Connection and service.'),
    dimension('Type 3 — Achiever', weighted([f.dominance, 0.45], [f.extraversion, 0.35], [inverse(f.patience), 0.2]), 'Results and visibility.'),
    dimension('Type 4 — Individualist', weighted([inverse(f.formality), 0.35], [inverse(f.extraversion), 0.2], [f.dominance, 0.25], [inverse(f.patience), 0.2]), 'Identity, autonomy, and novelty.'),
    dimension('Type 5 — Investigator', weighted([inverse(f.extraversion), 0.4], [f.formality, 0.34], [f.dominance, 0.26]), 'Depth and independence.'),
    dimension('Type 6 — Loyalist', weighted([f.formality, 0.4], [f.patience, 0.35], [inverse(f.dominance), 0.25]), 'Security and preparation.'),
    dimension('Type 7 — Enthusiast', weighted([f.extraversion, 0.42], [inverse(f.formality), 0.28], [inverse(f.patience), 0.3]), 'Options, energy, and speed.'),
    dimension('Type 8 — Challenger', weighted([f.dominance, 0.72], [inverse(f.patience), 0.18], [f.extraversion, 0.1]), 'Control and directness.'),
    dimension('Type 9 — Peacemaker', weighted([f.patience, 0.55], [inverse(f.dominance), 0.3], [f.extraversion, 0.15]), 'Stability and harmony.'),
  ];
}

function deriveInterpersonal(f) {
  return [
    dimension('Agency', f.dominance, 'Direct PI correspondence.'),
    dimension('Communion', weighted([f.extraversion, 0.45], [f.patience, 0.4], [inverse(f.dominance), 0.15]), 'Connection and accommodation.'),
    dimension('Warmth', weighted([f.extraversion, 0.5], [f.patience, 0.35], [inverse(f.formality), 0.15]), 'Visible approachability and flexibility.'),
    dimension('Boundary Firmness', weighted([f.dominance, 0.58], [f.formality, 0.27], [inverse(f.extraversion), 0.15]), 'Agency and standards.'),
  ];
}

function deriveFeedback(f) {
  return [
    dimension('Directness Tolerance', weighted([f.dominance, 0.48], [inverse(f.patience), 0.24], [f.formality, 0.28]), 'Agency, pace, and task framing.'),
    dimension('Detail Need', f.formality, 'Direct PI Formality correspondence.'),
    dimension('Processing Time Need', weighted([f.patience, 0.58], [inverse(f.extraversion), 0.24], [f.formality, 0.18]), 'Steady and reflective processing.'),
    dimension('Relational Framing Need', weighted([f.extraversion, 0.32], [f.patience, 0.42], [inverse(f.dominance), 0.26]), 'Connection and lower forcefulness.'),
    dimension('Recovery After Critique', weighted([f.patience, 0.45], [f.formality, 0.22], [inverse(Math.abs(f.dominance - f.extraversion)), 0.33]), 'Steadiness and drive balance.'),
  ];
}

function deriveReiss(f) {
  return [
    dimension('Power', f.dominance, 'Agency and control.'),
    dimension('Independence', weighted([f.dominance, 0.65], [inverse(f.extraversion), 0.35]), 'Autonomy and self-reliance.'),
    dimension('Curiosity', weighted([inverse(f.formality), 0.34], [f.dominance, 0.28], [inverse(f.patience), 0.2], [inverse(f.extraversion), 0.18]), 'Novelty and intellectual exploration.'),
    dimension('Acceptance', weighted([f.extraversion, 0.42], [inverse(f.dominance), 0.28], [f.patience, 0.3]), 'Connection and reassurance.'),
    dimension('Order', f.formality, 'Direct PI Formality correspondence.'),
    dimension('Saving', weighted([f.formality, 0.48], [f.patience, 0.32], [inverse(f.dominance), 0.2]), 'Conservation and preparedness.'),
    dimension('Honor', weighted([f.formality, 0.52], [f.patience, 0.3], [f.dominance, 0.18]), 'Standards and duty.'),
    dimension('Idealism', weighted([f.patience, 0.4], [inverse(f.dominance), 0.3], [f.extraversion, 0.3]), 'Harmony and contribution.'),
    dimension('Social Contact', f.extraversion, 'Direct PI Extraversion correspondence.'),
    dimension('Family / Care', weighted([f.patience, 0.5], [f.extraversion, 0.3], [inverse(f.dominance), 0.2]), 'Steadiness and relational orientation.'),
    dimension('Status', weighted([f.dominance, 0.48], [f.extraversion, 0.42], [inverse(f.formality), 0.1]), 'Visibility and achievement.'),
    dimension('Competition', weighted([f.dominance, 0.62], [inverse(f.patience), 0.25], [f.extraversion, 0.13]), 'Winning and pace.'),
    dimension('Romance / Aesthetic Expression', weighted([f.extraversion, 0.38], [inverse(f.formality), 0.34], [inverse(f.patience), 0.28]), 'Expression and novelty.'),
    dimension('Eating / Sensory Reward', weighted([inverse(f.formality), 0.36], [f.extraversion, 0.34], [f.patience, 0.3]), 'Spontaneity and sensory enjoyment as a weak directional estimate.'),
    dimension('Physical Activity', weighted([inverse(f.patience), 0.48], [f.dominance, 0.32], [f.extraversion, 0.2]), 'Pace and activation.'),
    dimension('Tranquility', weighted([f.patience, 0.6], [f.formality, 0.2], [inverse(f.dominance), 0.2]), 'Predictability and low conflict.'),
  ];
}

function deriveTrustSafety(f) {
  return [
    dimension('Speaking-Up Readiness', weighted([f.dominance, 0.48], [f.extraversion, 0.3], [inverse(f.formality), 0.1], [f.patience, 0.12]), 'Voice, visibility, and tolerance for ambiguity.'),
    dimension('Reliability Signaling', weighted([f.formality, 0.5], [f.patience, 0.4], [inverse(f.extraversion), 0.1]), 'Consistency and standards.'),
    dimension('Inclusion Orientation', weighted([f.patience, 0.42], [f.extraversion, 0.35], [inverse(f.dominance), 0.23]), 'Connection and accommodation.'),
    dimension('Error-Reporting Comfort', weighted([f.dominance, 0.32], [f.formality, 0.28], [f.patience, 0.22], [f.extraversion, 0.18]), 'Agency, responsibility, and social exchange; environment remains decisive.'),
  ];
}

function deriveFiro(f) {
  return [
    dimension('Inclusion', f.extraversion, 'Directly anchored to PI Extraversion.'),
    dimension('Control', f.dominance, 'Directly anchored to PI Dominance.'),
    dimension('Affection / Closeness', weighted([f.patience, 0.48], [f.extraversion, 0.34], [inverse(f.dominance), 0.18]), 'Steadiness and relational orientation.'),
  ];
}

function deriveMetacognition(f) {
  return [
    dimension('Self-Monitoring Preference', weighted([f.formality, 0.46], [f.patience, 0.32], [inverse(f.extraversion), 0.22]), 'Checking, reflection, and internal processing.'),
    dimension('Error Review Preference', weighted([f.formality, 0.6], [f.patience, 0.25], [f.dominance, 0.15]), 'Standards and ownership.'),
    dimension('Strategy Adjustment', weighted([inverse(f.formality), 0.3], [f.dominance, 0.3], [f.patience, 0.22], [f.extraversion, 0.18]), 'Flexibility plus agency and reflection.'),
    dimension('Help-Seeking Visibility', weighted([f.extraversion, 0.42], [inverse(f.dominance), 0.28], [f.patience, 0.3]), 'Connection and willingness to rely on others.'),
  ];
}

function deriveMsceitExpression(f) {
  return [
    dimension('Emotion-Perception Attention', weighted([f.extraversion, 0.32], [f.patience, 0.38], [f.formality, 0.3]), 'Attention and relational observation preference; not ability.'),
    dimension('Emotion-Facilitation Preference', weighted([f.extraversion, 0.4], [inverse(f.formality), 0.28], [f.dominance, 0.18], [f.patience, 0.14]), 'Comfort integrating emotion into thinking; not MSCEIT performance.'),
    dimension('Emotion-Understanding Preference', weighted([f.formality, 0.42], [f.patience, 0.34], [inverse(f.extraversion), 0.24]), 'Reflective pattern analysis; not measured ability.'),
    dimension('Emotion-Management Style', weighted([f.patience, 0.48], [f.formality, 0.25], [f.dominance, 0.15], [f.extraversion, 0.12]), 'Steadiness and structure; not measured EQ.'),
  ];
}

function deriveFlexibility(f) {
  return [
    dimension('Set Shifting Preference', weighted([inverse(f.patience), 0.36], [inverse(f.formality), 0.38], [f.dominance, 0.26]), 'Pace, flexibility, and autonomy.'),
    dimension('Perspective Flexibility', weighted([inverse(f.formality), 0.28], [f.patience, 0.3], [f.extraversion, 0.24], [inverse(f.dominance), 0.18]), 'Openness to alternate viewpoints.'),
    dimension('Ambiguity Tolerance', weighted([inverse(f.formality), 0.48], [f.dominance, 0.3], [inverse(f.patience), 0.22]), 'Lower structure need and action under uncertainty.'),
    dimension('Recovery After Change', weighted([f.patience, 0.42], [inverse(f.formality), 0.24], [f.dominance, 0.18], [f.extraversion, 0.16]), 'Steadiness plus adaptability.'),
  ];
}

function deriveSocialStyles(f) {
  return [
    dimension('Driver', weighted([f.dominance, 0.65], [inverse(f.patience), 0.22], [inverse(f.extraversion), 0.13]), 'Assertive, task-focused pace.'),
    dimension('Expressive', weighted([f.extraversion, 0.62], [f.dominance, 0.2], [inverse(f.formality), 0.18]), 'Visible, spontaneous influence.'),
    dimension('Amiable', weighted([f.patience, 0.54], [f.extraversion, 0.25], [inverse(f.dominance), 0.21]), 'Steady, cooperative connection.'),
    dimension('Analytical', weighted([f.formality, 0.62], [inverse(f.extraversion), 0.22], [f.patience, 0.16]), 'Precise, reserved structure.'),
  ];
}

function deriveCognitiveLoad(f) {
  return [
    dimension('Interruption Vulnerability', weighted([f.patience, 0.35], [f.formality, 0.42], [inverse(f.extraversion), 0.23]), 'Deep, structured focus may incur higher switching cost.'),
    dimension('Fast-Pace Load', weighted([f.patience, 0.56], [f.formality, 0.26], [inverse(f.dominance), 0.18]), 'Higher values indicate more likely strain from sustained speed.'),
    dimension('Ambiguity Load', weighted([f.formality, 0.62], [inverse(f.dominance), 0.2], [f.patience, 0.18]), 'Higher structure need increases ambiguity cost.'),
    dimension('Social Load', weighted([inverse(f.extraversion), 0.68], [f.formality, 0.18], [f.patience, 0.14]), 'Lower social drive increases cost of sustained interaction.'),
    dimension('Recovery Need', weighted([f.patience, 0.38], [f.formality, 0.22], [inverse(f.extraversion), 0.25], [inverse(f.dominance), 0.15]), 'Steady and reserved profiles may need protected reset time.'),
  ];
}

function deriveSchwartz(f) {
  return [
    dimension('Self-Direction', weighted([f.dominance, 0.55], [inverse(f.formality), 0.3], [inverse(f.extraversion), 0.15]), 'Autonomy and independent thought.'),
    dimension('Stimulation', weighted([inverse(f.patience), 0.42], [inverse(f.formality), 0.32], [f.extraversion, 0.26]), 'Novelty and activation.'),
    dimension('Achievement', weighted([f.dominance, 0.48], [f.formality, 0.22], [f.extraversion, 0.3]), 'Results and visible accomplishment.'),
    dimension('Power', weighted([f.dominance, 0.7], [f.extraversion, 0.2], [inverse(f.patience), 0.1]), 'Control and influence.'),
    dimension('Security', weighted([f.formality, 0.46], [f.patience, 0.4], [inverse(f.dominance), 0.14]), 'Predictability and stability.'),
    dimension('Conformity', weighted([f.formality, 0.52], [f.patience, 0.32], [inverse(f.dominance), 0.16]), 'Rules and restraint.'),
    dimension('Tradition', weighted([f.formality, 0.48], [f.patience, 0.38], [inverse(f.extraversion), 0.14]), 'Continuity and established practice.'),
    dimension('Benevolence', weighted([f.patience, 0.48], [f.extraversion, 0.3], [inverse(f.dominance), 0.22]), 'Care for close others.'),
    dimension('Universalism', weighted([f.patience, 0.35], [inverse(f.dominance), 0.28], [inverse(f.formality), 0.2], [f.extraversion, 0.17]), 'Broad inclusion and openness.'),
    dimension('Hedonism', weighted([inverse(f.formality), 0.4], [f.extraversion, 0.34], [inverse(f.patience), 0.26]), 'Spontaneity and enjoyment.'),
  ];
}

function deriveSdi(f) {
  return [
    dimension('Altruistic-Nurturing', weighted([f.patience, 0.48], [f.extraversion, 0.3], [inverse(f.dominance), 0.22]), 'Support and harmony.'),
    dimension('Assertive-Directing', weighted([f.dominance, 0.66], [inverse(f.patience), 0.2], [f.extraversion, 0.14]), 'Results and control.'),
    dimension('Analytic-Autonomizing', weighted([f.formality, 0.48], [inverse(f.extraversion), 0.3], [f.dominance, 0.22]), 'Logic, independence, and standards.'),
    dimension('Flexible-Cohering', weighted([f.extraversion, 0.3], [f.patience, 0.3], [inverse(Math.abs(f.dominance - 50)), 0.2], [inverse(Math.abs(f.formality - 50)), 0.2]), 'Adaptation and group coherence.'),
  ];
}

function deriveSpiral(f) {
  return [
    dimension('Order / Stability', weighted([f.formality, 0.5], [f.patience, 0.38], [inverse(f.dominance), 0.12]), 'Structure and continuity.'),
    dimension('Achievement / Agency', weighted([f.dominance, 0.5], [f.extraversion, 0.28], [inverse(f.patience), 0.22]), 'Results and advancement.'),
    dimension('Community / Harmony', weighted([f.patience, 0.45], [f.extraversion, 0.32], [inverse(f.dominance), 0.23]), 'Belonging and cooperation.'),
    dimension('Systems / Integration', weighted([f.dominance, 0.3], [inverse(f.formality), 0.28], [f.formality, 0.22], [inverse(f.extraversion), 0.2]), 'Independent synthesis across competing demands.'),
  ];
}

function deriveWorkValues(f) {
  return [
    dimension('Autonomy', f.dominance, 'Direct PI Dominance correspondence.'),
    dimension('Recognition / Visibility', f.extraversion, 'Direct PI Extraversion correspondence.'),
    dimension('Stability / Predictability', f.patience, 'Direct PI Patience correspondence.'),
    dimension('Structure / Quality', f.formality, 'Direct PI Formality correspondence.'),
    dimension('Variety / Change', weighted([inverse(f.patience), 0.55], [inverse(f.formality), 0.3], [f.dominance, 0.15]), 'Pace and flexibility.'),
    dimension('Collaboration', weighted([f.extraversion, 0.45], [f.patience, 0.4], [inverse(f.dominance), 0.15]), 'Connection and cooperation.'),
  ];
}

function derivePurpose(f) {
  return [
    dimension('Impact / Agency', weighted([f.dominance, 0.62], [f.extraversion, 0.22], [inverse(f.patience), 0.16]), 'Ownership and visible impact.'),
    dimension('Belonging / Contribution', weighted([f.patience, 0.42], [f.extraversion, 0.38], [inverse(f.dominance), 0.2]), 'Connection and service.'),
    dimension('Mastery / Craft', weighted([f.formality, 0.5], [f.patience, 0.3], [f.dominance, 0.2]), 'Standards and depth.'),
    dimension('Exploration / Growth', weighted([inverse(f.formality), 0.38], [f.dominance, 0.28], [inverse(f.patience), 0.22], [f.extraversion, 0.12]), 'Novelty and development.'),
  ];
}

function deriveBelbin(f) {
  return [
    dimension('Plant', weighted([inverse(f.formality), 0.42], [f.dominance, 0.32], [inverse(f.patience), 0.26]), 'Creative independence.'),
    dimension('Resource Investigator', weighted([f.extraversion, 0.6], [f.dominance, 0.24], [inverse(f.formality), 0.16]), 'External exploration.'),
    dimension('Coordinator', weighted([f.extraversion, 0.34], [f.patience, 0.32], [f.dominance, 0.26], [f.formality, 0.08]), 'Social direction and inclusion.'),
    dimension('Shaper', weighted([f.dominance, 0.58], [inverse(f.patience), 0.28], [f.extraversion, 0.14]), 'Drive and challenge.'),
    dimension('Monitor Evaluator', weighted([f.formality, 0.5], [inverse(f.extraversion), 0.28], [f.patience, 0.22]), 'Objective analysis.'),
    dimension('Teamworker', weighted([f.patience, 0.5], [f.extraversion, 0.3], [inverse(f.dominance), 0.2]), 'Harmony and support.'),
    dimension('Implementer', weighted([f.formality, 0.46], [f.patience, 0.34], [f.dominance, 0.2]), 'Practical organization.'),
    dimension('Completer Finisher', weighted([f.formality, 0.62], [f.patience, 0.22], [inverse(f.extraversion), 0.16]), 'Quality and closure.'),
    dimension('Specialist', weighted([f.formality, 0.44], [inverse(f.extraversion), 0.34], [f.patience, 0.22]), 'Depth and focused expertise.'),
  ];
}

function deriveTms(f) {
  return [
    dimension('Explorer-Promoter', weighted([f.extraversion, 0.54], [f.dominance, 0.28], [inverse(f.formality), 0.18]), 'External opportunity and influence.'),
    dimension('Assessor-Developer', weighted([f.formality, 0.38], [f.patience, 0.28], [f.dominance, 0.2], [inverse(f.extraversion), 0.14]), 'Evaluation and improvement.'),
    dimension('Thruster-Organizer', weighted([f.dominance, 0.46], [f.formality, 0.28], [inverse(f.patience), 0.26]), 'Drive and execution.'),
    dimension('Concluder-Producer', weighted([f.formality, 0.46], [f.patience, 0.36], [f.dominance, 0.18]), 'Reliable completion.'),
    dimension('Controller-Inspector', weighted([f.formality, 0.6], [inverse(f.extraversion), 0.22], [f.dominance, 0.18]), 'Control and quality.'),
    dimension('Upholder-Maintainer', weighted([f.patience, 0.48], [f.formality, 0.36], [inverse(f.dominance), 0.16]), 'Stability and stewardship.'),
    dimension('Reporter-Adviser', weighted([f.extraversion, 0.36], [f.patience, 0.3], [f.formality, 0.2], [inverse(f.dominance), 0.14]), 'Information sharing and support.'),
    dimension('Creator-Innovator', weighted([inverse(f.formality), 0.44], [f.dominance, 0.3], [inverse(f.patience), 0.26]), 'New concepts and experimentation.'),
  ];
}

function deriveLencioni(f) {
  return [
    dimension('Trust-Building Need', weighted([inverse(f.extraversion), 0.28], [f.patience, 0.28], [f.formality, 0.22], [inverse(f.dominance), 0.22]), 'Higher values indicate more deliberate safety and predictability may be needed.'),
    dimension('Conflict Participation', weighted([f.dominance, 0.48], [f.extraversion, 0.28], [inverse(f.patience), 0.24]), 'Willingness to surface disagreement.'),
    dimension('Commitment Clarity Need', weighted([f.formality, 0.55], [f.dominance, 0.25], [inverse(f.extraversion), 0.2]), 'Need for clear decisions and standards.'),
    dimension('Accountability Directness', weighted([f.dominance, 0.48], [f.formality, 0.32], [inverse(f.patience), 0.2]), 'Comfort enforcing expectations.'),
    dimension('Results Focus', weighted([f.dominance, 0.48], [f.formality, 0.25], [inverse(f.patience), 0.17], [f.extraversion, 0.1]), 'Outcome orientation.'),
  ];
}

function deriveLeadership(f) {
  return [
    dimension('Purposeful Direction', weighted([f.dominance, 0.56], [f.formality, 0.24], [f.extraversion, 0.2]), 'Agency, standards, and communication.'),
    dimension('Relating', weighted([f.extraversion, 0.42], [f.patience, 0.38], [inverse(f.dominance), 0.2]), 'Connection and inclusion.'),
    dimension('Self-Awareness / Reflection', weighted([f.formality, 0.32], [f.patience, 0.34], [inverse(f.extraversion), 0.2], [inverse(Math.abs(f.dominance - 50)), 0.14]), 'Reflection and balance.'),
    dimension('Systems Awareness', weighted([f.dominance, 0.32], [inverse(f.formality), 0.26], [f.formality, 0.24], [inverse(f.extraversion), 0.18]), 'Integration of abstraction and analysis.'),
    dimension('Achieving', weighted([f.dominance, 0.48], [inverse(f.patience), 0.22], [f.formality, 0.2], [f.extraversion, 0.1]), 'Results and execution.'),
    dimension('Controlling Risk', weighted([f.dominance, 0.36], [f.formality, 0.4], [inverse(f.patience), 0.24]), 'Control and standards can become overused.'),
    dimension('Protecting / Withdrawing Risk', weighted([inverse(f.extraversion), 0.42], [f.formality, 0.3], [inverse(f.dominance), 0.28]), 'Reserve and caution under pressure.'),
    dimension('Complying Risk', weighted([inverse(f.dominance), 0.38], [f.patience, 0.36], [f.formality, 0.26]), 'Deference and stability under pressure.'),
  ];
}

function deriveRoleFit(f) {
  return [
    dimension('Autonomy Demand Fit', f.dominance, 'Higher values indicate greater autonomy energy.'),
    dimension('Social Load Fit', f.extraversion, 'Higher values indicate more natural energy for sustained interaction.'),
    dimension('Steady-Pace Fit', f.patience, 'Higher values indicate greater fit with routine and continuity.'),
    dimension('Structure / Detail Fit', f.formality, 'Higher values indicate greater fit with rules and precision.'),
    dimension('Change Load Fit', weighted([inverse(f.patience), 0.55], [inverse(f.formality), 0.3], [f.dominance, 0.15]), 'Faster pace and flexibility support change-heavy roles.'),
  ];
}

function deriveGeneric(lens, f) {
  const category = String(lens.category || 'Other').toLowerCase();
  if (category.includes('personality')) return derive16pf(f).slice(0, 8);
  if (category.includes('cognitive')) return deriveCognitiveProcessing(f);
  if (category.includes('motivation')) return deriveWorkValues(f);
  if (category.includes('team')) return deriveBelbin(f);
  if (category.includes('emotional') || category.includes('interpersonal')) return deriveInterpersonal(f);
  if (category.includes('leadership')) return deriveLeadership(f);
  if (category.includes('wellbeing')) return deriveCognitiveLoad(f);
  return [
    dimension('Independent Drive', f.dominance, 'Exact PI Dominance.'),
    dimension('Social Drive', f.extraversion, 'Exact PI Extraversion.'),
    dimension('Pace / Stability', f.patience, 'Exact PI Patience.'),
    dimension('Structure / Precision', f.formality, 'Exact PI Formality.'),
  ];
}

const OVERLAY_LENS_PATTERNS = [
  'burnout', 'stress', 'wellbeing', 'resilience', 'neurodiversity', 'accessibility',
  'cognitive-load', 'feedback-sensitivity', 'trust-and-psychological-safety',
];

function isOverlayLens(id) {
  return OVERLAY_LENS_PATTERNS.some(pattern => id.includes(pattern));
}

function deriveForLens(lens, f) {
  const id = lens.id.toLowerCase();
  if (id.includes('big-five')) return deriveBigFive(f);
  if (id.includes('hexaco')) return deriveHexaco(f);
  if (id.includes('disc')) return deriveDisc(f);
  if (id.includes('hogan') && (id.includes('hds') || id.includes('development'))) return deriveHoganHds(f);
  if (id.includes('hogan')) return deriveHoganHpi(f);
  if (id.includes('eq-i') || id.includes('eqi')) return deriveEqi(f);
  if (id.includes('insights-discovery')) return deriveInsights(f);
  if (id === '16pf' || id.includes('sixteen-personality-factor')) return derive16pf(f);
  if (id.includes('cognitive-processing')) return deriveCognitiveProcessing(f);
  if (id.includes('decision-making') || id.includes('decisionmaking')) return deriveDecisionMaking(f);
  if (id.includes('self-determination') || id.includes('selfdetermination')) return deriveSdt(f);
  if (id.includes('learning-design')) return deriveLearning(f);
  if (id.includes('learning-agility') || id.includes('growth-mindset')) return deriveLearningAgility(f);
  if (id.includes('social-cognition')) return deriveSocialCognition(f);
  if (id.includes('executive-function')) return deriveExecutiveFunction(f);
  if (id.includes('cognitive-ability') || id.includes('wonderlic') || id.includes('mental-ability') || id.includes('reflection-test') || id.includes('crt')) return deriveTestExpression(f);
  if (id.includes('kolbe')) return deriveKolbe(f);
  if (id.includes('mbti') || id.includes('myers')) return deriveMbti(f);
  if (id.includes('hbdi') || id.includes('herrmann')) return deriveHbdi(f);
  if (id.includes('keirsey')) return deriveKeirsey(f);
  if (id.includes('clifton')) return deriveStrengthDomains(f);
  if (id.includes('kai') || id.includes('kirton')) return deriveKai(f);
  if (id.includes('kilmann') || id.includes('tki')) return deriveTki(f);
  if (id.includes('via-character')) return deriveVia(f);
  if (id.includes('enneagram')) return deriveEnneagram(f);
  if (id.includes('interpersonal-dynamics')) return deriveInterpersonal(f);
  if (id.includes('feedback-sensitivity')) return deriveFeedback(f);
  if (id.includes('reiss')) return deriveReiss(f);
  if (id.includes('motivational-maps')) return deriveReiss(f).slice(0, 9);
  if (id.includes('trust') && id.includes('safety')) return deriveTrustSafety(f);
  if (id.includes('firo')) return deriveFiro(f);
  if (id.includes('metacognition')) return deriveMetacognition(f);
  if (id.includes('msceit') || id.includes('mayer')) return deriveMsceitExpression(f);
  if (id.includes('cognitive-flexibility')) return deriveFlexibility(f);
  if (id.includes('social-styles')) return deriveSocialStyles(f);
  if (id.includes('cognitive-load')) return deriveCognitiveLoad(f);
  if (id.includes('schwartz')) return deriveSchwartz(f);
  if (id.includes('strength-deployment') || id.includes('sdi')) return deriveSdi(f);
  if (id.includes('spiral-dynamics') || id.includes('graves')) return deriveSpiral(f);
  if (id.includes('work-values')) return deriveWorkValues(f);
  if (id.includes('purpose') || id.includes('meaning')) return derivePurpose(f);
  if (id.includes('belbin')) return deriveBelbin(f);
  if (id.includes('team-management') || id.includes('tms')) return deriveTms(f);
  if (id.includes('lencioni')) return deriveLencioni(f);
  if (id.includes('leadership-circle') || id.includes('leadership-versatility') || id.includes('situational-leadership') || id.includes('lominger')) return deriveLeadership(f);
  if (id.includes('team-synthesis') || id.includes('role-fit') || id.includes('team-fit')) return deriveRoleFit(f);
  if (id.includes('workplace-stress') || id.includes('perceived-stress') || id.includes('pss')) return deriveCognitiveLoad(f);
  if (id.includes('burnout') || id.includes('maslach') || id.includes('copenhagen')) return deriveCognitiveLoad(f);
  if (id.includes('who5') || id.includes('wellbeing')) return deriveCognitiveLoad(f);
  if (id.includes('neurodiversity') || id.includes('accessibility')) return deriveExecutiveFunction(f);
  return deriveGeneric(lens, f);
}

function lensInterpretationBoundary(lens) {
  const id = lens.id.toLowerCase();
  if (id.includes('cognitive-ability') || id.includes('wonderlic') || id.includes('mental-ability') || id.includes('crt') || id.includes('msceit')) {
    return 'This shows how PI work-style and selected context may influence observed test-taking or task expression. It does not estimate ability, intelligence, accuracy, or an administered test score.';
  }
  if (id.includes('burnout') || id.includes('stress') || id.includes('wellbeing') || id.includes('neurodiversity') || id.includes('resilience')) {
    return 'This is a scenario overlay: it describes how the selected condition or context could bend the completed PI presentation. It does not infer that the condition exists.';
  }
  return 'This is a directional translation from completed PI factors, not a separately administered assessment result.';
}

export function deriveLensProjection(lensOrId, factors, contextOverlayIds = []) {
  const lens = typeof lensOrId === 'string'
    ? HSI_LENS_REGISTRY.find(item => item.id === lensOrId)
    : lensOrId;

  if (!lens) throw new Error(`Unknown lens: ${String(lensOrId)}`);

  const context = applyContextOverlays(factors, contextOverlayIds);
  const useApparentPresentation = context.overlays.length > 0;
  const projectionFactors = useApparentPresentation ? context.apparentFactors : context.baseFactors;
  const dimensions = deriveForLens(lens, projectionFactors);
  const projectionType = isOverlayLens(lens.id) || context.overlays.length > 0
    ? 'pi-plus-context-overlay'
    : 'pi-factor-crosswalk';

  const top = topDimensions(dimensions, 4);
  const summary = context.overlays.length
    ? `${lens.lens} is projected from the completed PI baseline after applying ${context.overlays.length} selected life/environment overlay${context.overlays.length === 1 ? '' : 's'}.`
    : `${lens.lens} is projected directly from the employee’s exact completed PI factors.`;

  return {
    lensId: lens.id,
    lens: lens.lens,
    category: lens.category,
    projectionType,
    summary,
    boundary: lensInterpretationBoundary(lens),
    baseFactors: context.baseFactors,
    apparentFactors: context.apparentFactors,
    overlayIds: context.overlayIds,
    overlays: context.overlays,
    changes: context.changes,
    manifestations: context.manifestations,
    supports: context.supports,
    dimensions,
    strongest: top,
  };
}

export function deriveAllLensProjections(factors, contextOverlayIds = []) {
  return HSI_LENS_REGISTRY.map(lens => deriveLensProjection(lens, factors, contextOverlayIds));
}

export function summarizeProjectionForAi(projection) {
  const strongest = projection.strongest
    .map(item => `${item.label} ${item.value}`)
    .join(', ');
  const changes = projection.changes
    .slice(0, 4)
    .map(item => `${item.label} ${item.delta > 0 ? '+' : ''}${item.delta}`)
    .join(', ');
  return `${projection.lens}: ${strongest}${changes ? ` | apparent PI shift: ${changes}` : ''}`;
}
