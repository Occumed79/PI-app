export const CROSSWALK_MODEL = {
  title: 'PI-derived crosswalk',
  sourceLabel: 'Source assessment',
  sourceValue: 'Completed Predictive Index behavioral profile',
  methodLabel: 'Translation method',
  methodValue: 'PI factor pattern and profile-to-trait correspondence',
  outputLabel: 'Output type',
  outputValue: 'Cross-framework projection',
  boundary:
    'This shows how the selected PI profile is expected to align with another framework. It is not presented as a separately administered assessment result.',
};

export const CROSSWALK_AI_RULES = [
  'Treat the employee PI profile and PI factor data as the source assessment.',
  'Treat Big Five, HEXACO, Hogan, EQ-i, DISC, and other lens outputs as PI-derived crosswalk projections unless separate assessment data is explicitly provided.',
  'Explain the PI-to-framework translation basis when it helps answer the question.',
  'Never claim that a crosswalk score or trait was independently administered or directly measured.',
  'Do not describe the user as a manager or frame the product as a manager workflow.',
];
