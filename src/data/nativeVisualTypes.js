const VISUAL_FAMILIES = {
  radar: [
    'radar',
    'radarBars',
    'hexagonRadar',
    'layeredRadar',
    'radarSubscaleBars',
    'rankedBarsRadar',
    'narrativeScorecardRadar',
    'radial360Bars',
  ],
  trend: ['lineRadar', 'spiderTrend'],
  quadrant: [
    'quadrantPlot',
    'scatterQuadrant',
    'typeGrid',
    'typeGridBars',
    'typeGridBarsMBTI',
    'temperamentQuadrant',
    'leaderStyleMatrix',
    'dualAxisBalance',
  ],
  colorWheel: ['colorWheel'],
  donut: ['pieStackedBars'],
  gauge: [
    'scoreGauge',
    'gaugeSubscaleBars',
    'scoreGaugeTrend',
    'gaugeHeatmap',
    'gaugeDistribution',
  ],
  enneagram: ['enneagramWheel'],
  pyramid: ['pyramid'],
  timeline: ['timelineTagCloud'],
  matrix: ['matrix', 'roleMatrix', 'competencyMatrix', 'itemTablePassRate', 'networkHeatmap'],
  spiral: ['spiralBands'],
  checklist: ['accessibilityMatrixRadar', 'profileBarsChecklist', 'profileChecklist'],
  continuum: ['continuumBars', 'threeBars', 'threeBarsCircumplex'],
  circumplex: ['circumplex', 'valuesCircumplex'],
  triangle: ['triangleCircumplex'],
  wheel: ['roleWheel', 'brainQuadrantWheel', 'segmentedWheel', 'fourAxisRadial'],
  curve: ['normalCurve'],
  bars: [
    'rankedBars',
    'profileBars',
    'riskBars',
    'domainBars',
    'multiDomainBars',
    'stackedWorkloadBars',
    'multiBarProfile',
    'multiAxisBars',
    'threeBarProfile',
    'fiveModeBars',
    'motiveBars',
    'branchBarsAccuracy',
    'structuredCards',
  ],
  placeholder: ['placeholder'],
};

const TYPE_TO_FAMILY = Object.entries(VISUAL_FAMILIES).reduce((map, [family, types]) => {
  for (const type of types) map.set(type, family);
  return map;
}, new Map());

export const NATIVE_RENDERER_FAMILIES = Object.freeze([
  'radar',
  'trend',
  'quadrant',
  'colorWheel',
  'donut',
  'gauge',
  'enneagram',
  'pyramid',
  'timeline',
  'matrix',
  'spiral',
  'checklist',
  'continuum',
  'circumplex',
  'triangle',
  'wheel',
  'curve',
  'bars',
  'placeholder',
]);

export function getNativeVisualFamily(visualType = '') {
  return TYPE_TO_FAMILY.get(String(visualType || '')) || 'unsupported';
}

export function isNativeVisualTypeSupported(visualType = '') {
  return getNativeVisualFamily(visualType) !== 'unsupported';
}

export function getNativeBarLimit(visualType = '') {
  if (visualType === 'multiBarProfile' || visualType === 'motiveBars') return 16;
  if (visualType === 'rankedBars' || visualType === 'rankedBarsRadar') return 12;
  if (visualType === 'branchBarsAccuracy') return 8;
  return 10;
}

export function getNativeWheelSides(visualType = '') {
  if (visualType === 'fourAxisRadial' || visualType === 'brainQuadrantWheel') return 4;
  if (visualType === 'roleWheel') return 9;
  if (visualType === 'segmentedWheel') return 6;
  return 8;
}

export const SUPPORTED_NATIVE_VISUAL_TYPES = Object.freeze([...TYPE_TO_FAMILY.keys()]);
