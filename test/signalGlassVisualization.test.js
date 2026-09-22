import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const chatSource = await readFile(new URL('../src/components/AITab.jsx', import.meta.url), 'utf8');
const vizSource = await readFile(new URL('../src/components/chat/SignalGlassVisualization.jsx', import.meta.url), 'utf8');

test('Crosswalk Assistant supports inline SignalGlass visualization payloads', () => {
  assert.match(chatSource, /signalglass-viz/);
  assert.match(chatSource, /extractSignalGlassVisualizations/);
  assert.match(chatSource, /SignalGlassVisualization/);
  assert.match(chatSource, /Exact visualization-ready lens data/);
});

test('SignalGlass renderer covers the required visual families', () => {
  for (const family of [
    'score-radar',
    'risk-gauge',
    'bubble',
    'activity-waveform',
    'allocation-performance',
    'animated-area',
    'radial-chart',
    'radar-chart',
    'pie-chart',
    'bar-chart',
    'scatter-plot',
    'heatmap',
    'histogram',
    'circular-barplot',
    'donut',
    'streamchart',
    'timeseries',
    'choropleth-map',
    'hexbin-map',
    'cartogram',
    'connection-map',
    'bubble-map',
    'chord-diagram',
    'network-chart',
    'arc-diagram',
  ]) {
    assert.match(vizSource, new RegExp(family.replace(/[.*+?^$\{\}()|[\]\\]/g, '\\$&')));
  }
});
