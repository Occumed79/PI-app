import { PI_PROFILES } from './profiles.js';

export const ROLE_INTELLIGENCE_ROLES = [
  {
    id: 'examqa-analyst',
    title: 'ExamQA Analyst',
    shortTitle: 'ExamQA',
    family: 'Quality & Review',
    purpose: 'Maintain a low defect rate across a high volume of examination records by applying established requirements consistently, identifying exceptions, and moving cases forward.',
    behavioralBands: {
      dominance: [30, 62],
      extraversion: [18, 55],
      patience: [52, 88],
      formality: [68, 96],
    },
    signature: {
      volume: 94,
      depth: 48,
      exploration: 24,
      autonomy: 42,
      precision: 95,
      externalInteraction: 38,
      interruption: 78,
      boundedAuthority: 88,
    },
    alignment: [
      'Consistency and accuracy across a large moving queue matter more than maximum depth on every case.',
      'Strong pattern recognition is useful when it helps distinguish routine completion issues from true exceptions.',
      'The role rewards people who can hand work off cleanly when the substantive judgment belongs elsewhere.',
    ],
    friction: [
      'Investigative drive can become frustrating when additional research is outside the analyst’s scope.',
      'High personal ownership can make passive or waiting cases feel unfinished even after the analyst has done what the process requires.',
      'Frequent interruption can increase resumption cost in a role that still expects stable accuracy at volume.',
    ],
    inversion: 'Thoroughness is an asset until it becomes unnecessary investigation that slows throughput or crosses the boundary into Exam Review.',
    adjacent: ['exam-review', 'provider-relations', 'fitness-for-duty'],
  },
  {
    id: 'exam-review',
    title: 'Subject Matter Expert / Exam Review',
    shortTitle: 'Exam Review',
    family: 'Quality & Review',
    purpose: 'Interpret complete findings against applicable occupational, deployment, and employer standards and make the substantive fitness recommendation.',
    behavioralBands: {
      dominance: [42, 74],
      extraversion: [18, 55],
      patience: [42, 80],
      formality: [62, 96],
    },
    signature: {
      volume: 58,
      depth: 96,
      exploration: 82,
      autonomy: 78,
      precision: 94,
      externalInteraction: 34,
      interruption: 48,
      boundedAuthority: 42,
    },
    alignment: [
      'The role rewards synthesis, evidence evaluation, and individualized interpretation rather than simple completion checking.',
      'Depth is useful when it resolves a substantive medical or occupational question and supports a defensible determination.',
      'Expertise must still operate inside published standards and organizational review boundaries.',
    ],
    friction: [
      'Deep analysis can become analysis paralysis when the available evidence is already sufficient for a defensible conclusion.',
      'A strong preference for theoretical completeness can conflict with the need to make a decision under imperfect information.',
      'Independent expertise can create inconsistency if it drifts away from the governing standard or shared review methodology.',
    ],
    inversion: 'Intellectual depth is an asset until the pursuit of a perfect answer delays a decision that the evidence already supports.',
    adjacent: ['examqa-analyst', 'fitness-for-duty'],
  },
  {
    id: 'network-management',
    title: 'Network Management Analyst',
    shortTitle: 'Network',
    family: 'Provider Network',
    purpose: 'Solve provider coverage gaps, evaluate capabilities, develop pricing relationships, and translate operational requirements into workable provider arrangements.',
    behavioralBands: {
      dominance: [58, 90],
      extraversion: [38, 78],
      patience: [18, 58],
      formality: [34, 76],
    },
    signature: {
      volume: 68,
      depth: 78,
      exploration: 96,
      autonomy: 88,
      precision: 72,
      externalInteraction: 84,
      interruption: 72,
      boundedAuthority: 38,
    },
    alignment: [
      'Open-ended research, persistence, and creative pathway finding are part of the work rather than deviations from it.',
      'The role rewards comfort with incomplete information, external dependency, and irregular feedback cycles.',
      'Commercial, clinical, geographic, and workflow information often need to be synthesized into one operational answer.',
    ],
    friction: [
      'A high need for closure can be tested by provider nonresponse and long external dependency chains.',
      'Fast independent problem solving can create downstream friction if pricing, protocol, or handoff details are not documented.',
      'The work can swing between deep research and urgent interruption, making prioritization a recurring demand.',
    ],
    inversion: 'Initiative is an asset until independent improvisation outruns the documentation and cross-functional coordination needed downstream.',
    adjacent: ['client-accounts', 'operations-director'],
  },
  {
    id: 'provider-relations',
    title: 'Provider Relations Analyst',
    shortTitle: 'Provider Relations',
    family: 'Provider Operations',
    purpose: 'Confirm attendance, obtain records, pursue missing or amended documentation, and maintain the provider-side follow-up needed to complete cases.',
    behavioralBands: {
      dominance: [30, 64],
      extraversion: [50, 84],
      patience: [46, 82],
      formality: [58, 90],
    },
    signature: {
      volume: 90,
      depth: 38,
      exploration: 34,
      autonomy: 48,
      precision: 82,
      externalInteraction: 92,
      interruption: 88,
      boundedAuthority: 78,
    },
    alignment: [
      'Persistence, response tracking, and repeated external follow-up are central to the job.',
      'Success depends on maintaining momentum without losing accuracy across many provider interactions.',
      'The role benefits from people who can distinguish a routine follow-up from an issue that needs escalation.',
    ],
    friction: [
      'Low tolerance for repetitive outreach can make nonresponse-heavy queues unusually draining.',
      'Strong ownership can turn third-party delays into personally felt unfinished work.',
      'High social energy helps with outreach but does not remove the need for documentation discipline.',
    ],
    inversion: 'Persistence is an asset until it becomes overpursuit on cases that should be escalated, paused, or handed off.',
    adjacent: ['scheduling', 'examqa-analyst', 'client-accounts'],
  },
  {
    id: 'scheduling',
    title: 'Scheduling Analyst',
    shortTitle: 'Scheduling',
    family: 'Operations',
    purpose: 'Coordinate employee and provider availability, secure appointments, communicate logistics, and recover missed appointments quickly.',
    behavioralBands: {
      dominance: [28, 62],
      extraversion: [52, 86],
      patience: [50, 84],
      formality: [56, 90],
    },
    signature: {
      volume: 94,
      depth: 26,
      exploration: 30,
      autonomy: 44,
      precision: 78,
      externalInteraction: 96,
      interruption: 96,
      boundedAuthority: 82,
    },
    alignment: [
      'The job rewards rapid coordination, clear communication, and reliable sequencing across two external parties.',
      'High throughput and frequent interruption make fast resumption and visible status management important.',
      'Consistency matters because small logistical errors can create downstream delays for every other department.',
    ],
    friction: [
      'People who need long uninterrupted focus blocks may find the continuous coordination rhythm draining.',
      'A strong desire to solve every exception personally can create delays when escalation would be faster.',
      'High urgency without enough structure can produce appointment or communication defects.',
    ],
    inversion: 'Responsiveness is an asset until reacting to every incoming change prevents deliberate prioritization of the queue.',
    adjacent: ['provider-relations', 'client-accounts', 'operations-director'],
  },
  {
    id: 'client-accounts',
    title: 'Client Account Manager',
    shortTitle: 'Client Accounts',
    family: 'Client Services',
    purpose: 'Translate client needs into operational priorities, maintain trust, communicate status, and coordinate internal teams around account expectations.',
    behavioralBands: {
      dominance: [58, 88],
      extraversion: [66, 96],
      patience: [18, 58],
      formality: [28, 68],
    },
    signature: {
      volume: 74,
      depth: 50,
      exploration: 62,
      autonomy: 78,
      precision: 66,
      externalInteraction: 98,
      interruption: 86,
      boundedAuthority: 46,
    },
    alignment: [
      'Relationship maintenance, influence, rapid context switching, and clear expectation setting are central.',
      'The role benefits from translating operational complexity into concise client-facing communication.',
      'Strong ownership is useful when paired with realistic promises and good internal handoffs.',
    ],
    friction: [
      'A strong desire to satisfy the client can create internal pressure if commitments outrun operational capacity.',
      'High social speed can obscure details that downstream teams still need documented precisely.',
      'Avoidance of difficult expectation-setting can create larger problems later.',
    ],
    inversion: 'Persuasion is an asset until relationship protection turns into overpromising or bypassing realistic operational constraints.',
    adjacent: ['network-management', 'operations-director', 'provider-relations'],
  },
  {
    id: 'operations-director',
    title: 'Operations Director',
    shortTitle: 'Operations',
    family: 'Leadership',
    purpose: 'Coordinate capacity, priorities, process execution, and cross-functional tradeoffs across the operating system.',
    behavioralBands: {
      dominance: [72, 96],
      extraversion: [48, 86],
      patience: [14, 52],
      formality: [34, 74],
    },
    signature: {
      volume: 86,
      depth: 62,
      exploration: 72,
      autonomy: 94,
      precision: 70,
      externalInteraction: 72,
      interruption: 98,
      boundedAuthority: 24,
    },
    alignment: [
      'The role requires decisive prioritization when multiple teams and deadlines compete for attention.',
      'Cross-functional visibility matters more than deep ownership of every individual task.',
      'The job rewards people who can make tradeoffs, communicate them, and maintain operating rhythm under interruption.',
    ],
    friction: [
      'High speed can become destabilizing when teams need clearer sequencing or change management.',
      'Strong control can suppress local judgment if decision rights are not delegated deliberately.',
      'Operational urgency can conflict with quality functions whose value depends on deliberate gates.',
    ],
    inversion: 'Decisiveness is an asset until speed becomes volatility for the teams that have to execute the decision.',
    adjacent: ['client-accounts', 'network-management', 'scheduling'],
  },
  {
    id: 'finance-analyst',
    title: 'Finance Analyst',
    shortTitle: 'Finance',
    family: 'Finance',
    purpose: 'Reconcile authorized services, pricing agreements, invoices, dates, and payment information with a low tolerance for transactional error.',
    behavioralBands: {
      dominance: [24, 58],
      extraversion: [18, 55],
      patience: [56, 90],
      formality: [74, 98],
    },
    signature: {
      volume: 82,
      depth: 48,
      exploration: 28,
      autonomy: 48,
      precision: 98,
      externalInteraction: 42,
      interruption: 62,
      boundedAuthority: 84,
    },
    alignment: [
      'The role rewards reconciliation, consistency, and a low tolerance for mismatched transactional details.',
      'Stable process and precise documentation are more important than open-ended exploration.',
      'Exceptions matter because payment errors can propagate into provider relationships and downstream reporting.',
    ],
    friction: [
      'Very high perfectionism can create unnecessary delay when the governing discrepancy is already clear.',
      'People who need novelty may experience the repeated reconciliation cycle as under-stimulating.',
      'Ambiguous pricing or incomplete upstream documentation can create disproportionate rework.',
    ],
    inversion: 'Precision is an asset until the pursuit of a perfectly reconciled record slows resolution of an already-understood exception.',
    adjacent: ['examqa-analyst', 'provider-relations'],
  },
  {
    id: 'fitness-for-duty',
    title: 'Fitness for Duty Analyst',
    shortTitle: 'Fitness for Duty',
    family: 'Quality & Review',
    purpose: 'Operationalize fitness-for-duty requirements, organize case information, and support consistent application of the review process around job demands.',
    behavioralBands: {
      dominance: [36, 70],
      extraversion: [24, 62],
      patience: [48, 82],
      formality: [66, 96],
    },
    signature: {
      volume: 72,
      depth: 72,
      exploration: 58,
      autonomy: 58,
      precision: 92,
      externalInteraction: 46,
      interruption: 66,
      boundedAuthority: 68,
    },
    alignment: [
      'The role sits between process execution and substantive occupational reasoning, so both structure and contextual judgment matter.',
      'Job demands need to remain visible so medical information is interpreted in a work-relevant frame.',
      'The role benefits from people who can organize complex information without overstepping final clinical authority.',
    ],
    friction: [
      'People who prefer pure administrative closure may find the contextual judgment component uncomfortable.',
      'People who prefer unrestricted analysis may become frustrated by formal boundaries around final determination authority.',
      'Complex cases can create competing demands for speed, completeness, and escalation.',
    ],
    inversion: 'Contextual judgment is an asset until it becomes a substitute for the SME or medical authority responsible for the final determination.',
    adjacent: ['examqa-analyst', 'exam-review'],
  },
];

export const ROLE_BY_ID = Object.fromEntries(ROLE_INTELLIGENCE_ROLES.map(role => [role.id, role]));

export const ROLE_DIMENSIONS = [
  ['volume', 'Volume'],
  ['depth', 'Depth'],
  ['exploration', 'Exploration'],
  ['autonomy', 'Autonomy'],
  ['precision', 'Precision'],
  ['externalInteraction', 'External interaction'],
  ['interruption', 'Interruption'],
  ['boundedAuthority', 'Boundary rigidity'],
];

export const FACTOR_META = {
  dominance: { label: 'Dominance', short: 'D' },
  extraversion: { label: 'Extraversion', short: 'E' },
  patience: { label: 'Patience', short: 'P' },
  formality: { label: 'Formality', short: 'F' },
};

export function employeePiProfile(employee) {
  return PI_PROFILES.find(profile => profile.id === (employee?.piProfileId || employee?.profileId)) || PI_PROFILES[0];
}

export function employeeFactors(employee) {
  const profile = employeePiProfile(employee);
  return {
    dominance: Number(employee?.dominance ?? profile.dominance),
    extraversion: Number(employee?.extraversion ?? profile.extraversion),
    patience: Number(employee?.patience ?? profile.patience),
    formality: Number(employee?.formality ?? profile.formality),
  };
}

export function deriveRoleInteraction(employee, role) {
  const factors = employeeFactors(employee);
  const factorSignals = Object.entries(role.behavioralBands).map(([key, band]) => {
    const value = factors[key];
    const [min, max] = band;
    const distance = value < min ? min - value : value > max ? value - max : 0;
    const state = distance === 0 ? 'aligned' : distance <= 12 ? 'adjacent' : 'contrast';
    return {
      key,
      label: FACTOR_META[key].label,
      short: FACTOR_META[key].short,
      value,
      band,
      distance,
      state,
    };
  });

  const aligned = factorSignals.filter(signal => signal.state === 'aligned').length;
  const adjacent = factorSignals.filter(signal => signal.state === 'adjacent').length;
  const contrast = factorSignals.filter(signal => signal.state === 'contrast').length;

  let headline = 'Distinct operating pattern';
  if (aligned >= 3) headline = 'Broad behavioral overlap';
  else if (aligned >= 2 || aligned + adjacent >= 3) headline = 'Mixed but workable pattern';

  return { factors, factorSignals, aligned, adjacent, contrast, headline };
}
