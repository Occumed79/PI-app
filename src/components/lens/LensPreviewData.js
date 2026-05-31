const PREVIEW_FIELD_SETS = {
  radar: [
    ['Openness', 74], ['Conscientiousness', 67], ['Extraversion', 46], ['Agreeableness', 58], ['Stability', 62],
  ],
  quadrant: [['Axis A', 68], ['Axis B', 61], ['Balance', 52], ['Tension', 44]],
  colorWheel: [['Cool Blue', 76], ['Fiery Red', 58], ['Sunshine Yellow', 42], ['Earth Green', 64]],
  gauge: [['Overall score', 71], ['Recent trend', 55], ['Support signal', 42]],
  enneagram: Array.from({ length: 9 }, (_, index) => [`Type ${index + 1}`, 38 + ((index * 8) % 52)]),
  pyramid: [['Trust', 76], ['Conflict', 58], ['Commitment', 64], ['Accountability', 52], ['Results', 70]],
  matrix: [['Role fit', 72], ['Behavior fit', 58], ['Team need', 67], ['Risk', 38]],
  spiral: [['Purple', 48], ['Red', 55], ['Blue', 68], ['Orange', 74], ['Green', 63], ['Yellow', 57]],
  checklist: [['Sensory load', 62], ['Task switching', 74], ['Recovery time', 58], ['Structure', 82]],
  continuum: [['Adaptive', 42], ['Innovative', 68], ['Tolerance', 57]],
  circumplex: [['Agency', 66], ['Communion', 58], ['Control', 47], ['Warmth', 62], ['Distance', 38], ['Support', 70]],
  triangle: [['Assertive', 62], ['Relational', 54], ['Analytical', 72]],
  wheel: [['Role 1', 73], ['Role 2', 55], ['Role 3', 64], ['Role 4', 42], ['Role 5', 59], ['Role 6', 67]],
  normalCurve: [['Percentile', 68]],
  risk: [['Domain A', 32], ['Domain B', 57], ['Domain C', 77], ['Domain D', 44]],
  ranked: [['Primary', 81], ['Secondary', 66], ['Third', 54], ['Fourth', 39], ['Fifth', 73]],
};

function visualKindForType(visualType = '') {
  const groups = {
    radar: ['radar', 'radarBars', 'hexagonRadar', 'layeredRadar', 'radarSubscaleBars', 'rankedBarsRadar', 'narrativeScorecardRadar', 'spiderTrend'],
    quadrant: ['quadrantPlot', 'scatterQuadrant', 'typeGrid', 'temperamentQuadrant', 'leaderStyleMatrix', 'dualAxisBalance'],
    colorWheel: ['colorWheel'],
    gauge: ['scoreGauge', 'gaugeSubscaleBars', 'scoreGaugeTrend', 'gaugeHeatmap', 'gaugeDistribution'],
    enneagram: ['enneagramWheel'],
    pyramid: ['pyramid'],
    matrix: ['matrix', 'roleMatrix', 'competencyMatrix', 'itemTablePassRate'],
    spiral: ['spiralBands'],
    checklist: ['accessibilityMatrixRadar', 'profileBarsChecklist', 'profileChecklist'],
    continuum: ['continuumBars', 'threeBars', 'threeBarsCircumplex'],
    circumplex: ['circumplex', 'valuesCircumplex'],
    triangle: ['triangleCircumplex'],
    wheel: ['roleWheel', 'brainQuadrantWheel', 'segmentedWheel', 'fourAxisRadial'],
    normalCurve: ['normalCurve'],
    risk: ['riskBars', 'domainBars', 'threeBarProfile', 'multiDomainBars', 'stackedWorkloadBars'],
  };

  for (const [kind, values] of Object.entries(groups)) {
    if (values.includes(visualType)) return kind;
  }
  return 'ranked';
}

export function buildLensPreviewResult(lens) {
  const kind = visualKindForType(lens?.visualType);
  const preview = PREVIEW_FIELD_SETS[kind] || PREVIEW_FIELD_SETS.ranked;
  const numericFields = preview.map(([label, score]) => ({ label, value: `${score}%`, score }));
  return {
    lens,
    matched: false,
    summary: lens?.visualReason || 'Native visual preview',
    fields: numericFields,
    numericFields,
  };
}
