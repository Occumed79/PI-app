export const ROLE_EVIDENCE_SOURCES = {
  'occu-process': {
    id: 'occu-process',
    kind: 'organization',
    label: 'Occu-Med workflow and role-process documentation',
    authority: 1,
    directness: 1,
    public: false,
    note: 'Direct organization evidence used to define role boundaries, handoffs, and operational purpose.',
  },
  'occu-network-work': {
    id: 'occu-network-work',
    kind: 'organization',
    label: 'Occu-Med Network Management work products and manager descriptions',
    authority: 0.95,
    directness: 1,
    public: false,
    note: 'Direct organization evidence for provider discovery, capabilities, pricing, protocol, and provider-relationship work.',
  },
  'occu-friction-patterns': {
    id: 'occu-friction-patterns',
    kind: 'organization-observation',
    label: 'Anonymized recurring workflow-friction patterns',
    authority: 0.72,
    directness: 0.85,
    public: false,
    note: 'Generalized operational patterns only; no employee names, quotes, diagnoses, or personal stories are exposed.',
  },
  'onet-medical-records': {
    id: 'onet-medical-records',
    kind: 'official-analogue',
    label: 'O*NET: Medical Records Specialists',
    authority: 0.92,
    directness: 0.68,
    public: true,
    url: 'https://www.onetonline.org/link/details/29-2072.00',
    note: 'Analogue evidence for completeness, accuracy, compliance, detail orientation, dependability, and cautiousness.',
  },
  'onet-compliance': {
    id: 'onet-compliance',
    kind: 'official-analogue',
    label: 'O*NET: Compliance Officers',
    authority: 0.92,
    directness: 0.58,
    public: true,
    url: 'https://www.onetonline.org/link/details/13-1041.00',
    note: 'Analogue evidence for standards application, follow-up, investigation boundaries, detail, cautiousness, and dependability.',
  },
  'onet-customer-service': {
    id: 'onet-customer-service',
    kind: 'official-analogue',
    label: 'O*NET: Customer Service Representatives',
    authority: 0.92,
    directness: 0.64,
    public: true,
    url: 'https://www.onetonline.org/link/details/43-4051.00',
    note: 'Analogue evidence for external communication, repeated follow-up, records, complaint resolution, social orientation, and self-control.',
  },
  'onet-medical-admin': {
    id: 'onet-medical-admin',
    kind: 'official-analogue',
    label: 'O*NET: Medical Secretaries and Administrative Assistants',
    authority: 0.92,
    directness: 0.76,
    public: true,
    url: 'https://www.onetonline.org/link/details/43-6013.00',
    note: 'Analogue evidence for appointment coordination, medical-office communication, records transmission, and administrative sequencing.',
  },
  'onet-sales-services': {
    id: 'onet-sales-services',
    kind: 'official-analogue',
    label: 'O*NET: Sales Representatives of Services',
    authority: 0.92,
    directness: 0.58,
    public: true,
    url: 'https://www.onetonline.org/link/details/41-3091.00',
    note: 'Analogue evidence for provider/client relationship development, pricing/terms, persistence, initiative, external communication, and creative problem solving.',
  },
  'onet-bookkeeping': {
    id: 'onet-bookkeeping',
    kind: 'official-analogue',
    label: 'O*NET: Bookkeeping, Accounting, and Auditing Clerks',
    authority: 0.92,
    directness: 0.72,
    public: true,
    url: 'https://www.onetonline.org/link/details/43-3031.00',
    note: 'Analogue evidence for reconciliation, checking transactional accuracy, discrepancy reporting, and procedural compliance.',
  },
  'onet-supervisors': {
    id: 'onet-supervisors',
    kind: 'official-analogue',
    label: 'O*NET: First-Line Supervisors of Office and Administrative Support Workers',
    authority: 0.92,
    directness: 0.52,
    public: true,
    url: 'https://www.onetonline.org/link/custom/43-1011.00',
    note: 'Analogue evidence for coordinating administrative teams, monitoring work, assigning priorities, and supervisory responsibility.',
  },
  'onet-work-values': {
    id: 'onet-work-values',
    kind: 'official-framework',
    label: 'O*NET Work Values framework',
    authority: 0.96,
    directness: 0.42,
    public: true,
    url: 'https://www.onetcenter.org/dictionary/26.1/text/work_values.html',
    note: 'Framework source for Achievement, Working Conditions, Recognition, Relationships, Support, and Independence.',
  },
  'bls-ors': {
    id: 'bls-ors',
    kind: 'official-framework',
    label: 'BLS Occupational Requirements Survey',
    authority: 0.97,
    directness: 0.48,
    public: true,
    url: 'https://www.bls.gov/ors/factsheet/orsprofiles.htm',
    note: 'Framework source for work pace, external/internal interaction, supervisory responsibility, schedule variability, and other job requirements.',
  },
  'bls-medical-records-pace': {
    id: 'bls-medical-records-pace',
    kind: 'official-analogue',
    label: 'BLS ORS 2023: Medical Records Specialists work pace',
    authority: 0.97,
    directness: 0.67,
    public: true,
    url: 'https://www.bls.gov/news.release/archives/ors_02082024.htm',
    note: 'Analogue evidence that medical-record work can require a consistent generally fast pace; not treated as an Occu-Med-specific measurement.',
  },
  'niosh-job-stress': {
    id: 'niosh-job-stress',
    kind: 'official-framework',
    label: 'NIOSH: Stress at Work',
    authority: 0.97,
    directness: 0.4,
    public: true,
    url: 'https://www.cdc.gov/niosh/docs/99-101/',
    note: 'Framework source for demand-resource mismatch, challenge versus strain, and job-design effects.',
  },
  'niosh-office-work': {
    id: 'niosh-office-work',
    kind: 'official-framework',
    label: 'NIOSH: Office environments and work design',
    authority: 0.97,
    directness: 0.4,
    public: true,
    url: 'https://www.cdc.gov/niosh/office-environment/about/',
    note: 'Framework source for speed, repetition, duration, job control, work pace, and environmental design.',
  },
  'pi-behavioral-target': {
    id: 'pi-behavioral-target',
    kind: 'assessment-methodology',
    label: 'Predictive Index: Behavioral Target methodology',
    authority: 0.9,
    directness: 0.55,
    public: true,
    url: 'https://docs.predictiveindex.com/en/articles/10579855-setting-a-behavioral-target',
    note: 'Methodology source for comparing completed PI behavior data with behavioral needs of a role. SignalGlass extends beyond PI-only matching.',
  },
};

export const EVIDENCE_KIND_WEIGHT = {
  organization: 1,
  'organization-observation': 0.72,
  'official-analogue': 0.72,
  'official-framework': 0.48,
  'assessment-methodology': 0.52,
};

export function evidenceForRole(role) {
  return (role.evidenceRefs || [])
    .map(id => ROLE_EVIDENCE_SOURCES[id])
    .filter(Boolean);
}

export function evidenceConfidence(role) {
  const sources = evidenceForRole(role);
  if (!sources.length) return 20;

  const directOrganization = sources.filter(source => source.kind === 'organization').length;
  const organizationObservation = sources.filter(source => source.kind === 'organization-observation').length;
  const officialAnalogues = sources.filter(source => source.kind === 'official-analogue').length;
  const officialFrameworks = sources.filter(source => source.kind === 'official-framework').length;
  const methodology = sources.filter(source => source.kind === 'assessment-methodology').length;

  const weighted = sources.reduce((sum, source) => {
    const kindWeight = EVIDENCE_KIND_WEIGHT[source.kind] ?? 0.35;
    return sum + kindWeight * source.authority * source.directness;
  }, 0);

  const breadthBonus =
    Math.min(18, officialAnalogues * 5) +
    Math.min(10, officialFrameworks * 3) +
    Math.min(6, methodology * 3);

  const directBonus = Math.min(34, directOrganization * 24 + organizationObservation * 7);
  return Math.max(25, Math.min(96, Math.round(24 + weighted * 7 + breadthBonus + directBonus)));
}
