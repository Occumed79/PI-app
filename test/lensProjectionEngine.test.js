import test from 'node:test';
import assert from 'node:assert/strict';
import { HSI_LENS_REGISTRY } from '../src/data/hsiLensRegistry.js';
import {
  CONTEXT_CATEGORIES,
  CONTEXT_OVERLAYS,
  CONTEXT_OVERLAY_BY_ID,
  normalizeContextOverlayIds,
} from '../src/data/contextOverlayCatalog.js';
import {
  applyContextOverlays,
  deriveAllLensProjections,
  deriveLensProjection,
} from '../src/data/lensProjectionEngine.js';

const ANALYZER = { dominance: 78, extraversion: 28, patience: 34, formality: 86 };

test('restores the original lived-experience category families', () => {
  const labels = Object.values(CONTEXT_CATEGORIES);
  assert.ok(labels.includes('Family system and caregiving context'));
  assert.ok(labels.includes('Immigration, displacement, and cultural transition'));
  assert.ok(labels.includes('Disability, health, and body-based factors'));
  assert.ok(labels.includes('Neurodivergence and cognitive accessibility'));
  assert.ok(labels.includes('Legal, administrative, and bureaucratic stress'));
  assert.ok(labels.includes('Protective factors and resilience resources'));
  assert.ok(CONTEXT_OVERLAYS.length >= 20);
});

test('normalizes context overlay ids and rejects unknown ids', () => {
  assert.deepEqual(
    normalizeContextOverlayIds(['adhd-executive-load', 'unknown', 'adhd-executive-load', 'financial-strain']),
    ['adhd-executive-load', 'financial-strain']
  );
});

test('context overlays preserve the PI baseline and calculate an apparent shift', () => {
  const context = applyContextOverlays(ANALYZER, ['adhd-executive-load']);
  assert.deepEqual(context.baseFactors, ANALYZER);
  assert.ok(context.apparentFactors.patience < ANALYZER.patience);
  assert.ok(context.apparentFactors.formality < ANALYZER.formality);
  assert.ok(context.changes.length > 0);
  assert.equal(context.overlays[0].label, CONTEXT_OVERLAY_BY_ID['adhd-executive-load'].label);
});

test('every registry lens returns a usable bounded projection', () => {
  const projections = deriveAllLensProjections(ANALYZER, ['acute-stress-overload']);
  assert.equal(projections.length, HSI_LENS_REGISTRY.length);
  assert.equal(projections.length, 104);

  for (const projection of projections) {
    assert.ok(projection.lensId);
    assert.ok(projection.lens);
    assert.ok(projection.summary.length > 20);
    assert.ok(projection.boundary.length > 20);
    assert.ok(projection.dimensions.length > 0, `${projection.lensId} returned no dimensions`);
    for (const item of projection.dimensions) {
      assert.ok(item.label);
      assert.ok(item.value >= 0 && item.value <= 100, `${projection.lensId}/${item.label} was ${item.value}`);
      assert.ok(item.basis.length > 8, `${projection.lensId}/${item.label} had no basis`);
    }
  }
});

test('a hypothetical stress overlay changes a lens projection without claiming diagnosis', () => {
  const baseline = deriveLensProjection('big-five-ocean', ANALYZER, []);
  const stressed = deriveLensProjection('big-five-ocean', ANALYZER, ['acute-stress-overload']);
  assert.equal(baseline.projectionType, 'pi-factor-crosswalk');
  assert.equal(stressed.projectionType, 'pi-plus-context-overlay');
  assert.notDeepEqual(stressed.apparentFactors, baseline.apparentFactors);
  assert.match(stressed.boundary, /directional translation|scenario overlay/i);
});

test('ability-style lenses describe expression rather than fabricating ability', () => {
  const projection = deriveLensProjection('cognitive-ability-gma-wonderlic', ANALYZER, []);
  assert.match(projection.boundary, /does not estimate ability/i);
  assert.ok(projection.dimensions.every(item => !/iq|percentile|intelligence score/i.test(item.label)));
});
