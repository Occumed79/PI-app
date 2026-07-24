import test from 'node:test';
import assert from 'node:assert/strict';
import {
  deriveBigFive,
  deriveDisc,
  deriveFrameworkSummaries,
  factorDistance,
  normalizePiFactors,
} from '../src/data/piCrosswalkEngine.js';

test('normalizes PI factors into the 0-100 range', () => {
  assert.deepEqual(
    normalizePiFactors({ dominance: 120, extraversion: -5, patience: '44', formality: null }),
    { dominance: 100, extraversion: 0, patience: 44, formality: 50 }
  );
});

test('DISC uses direct PI factor correspondences', () => {
  const disc = deriveDisc({ dominance: 81, extraversion: 63, patience: 27, formality: 74 });
  assert.deepEqual(disc.map(item => item.value), [81, 63, 27, 74]);
});

test('all supported framework values stay within bounds', () => {
  const frameworks = deriveFrameworkSummaries({ dominance: 94, extraversion: 8, patience: 3, formality: 99 });
  assert.equal(frameworks.length, 6);
  for (const framework of frameworks) {
    assert.ok(framework.values.length > 0);
    for (const item of framework.values) {
      assert.ok(item.value >= 0 && item.value <= 100, `${framework.label} ${item.label} was ${item.value}`);
      assert.ok(item.basis.length > 10);
    }
  }
});

test('exact factors change the crosswalk rather than using one blanket result', () => {
  const reserved = Object.fromEntries(
    deriveBigFive({ dominance: 35, extraversion: 15, patience: 75, formality: 90 })
      .map(item => [item.label, item.value])
  );
  const expressive = Object.fromEntries(
    deriveBigFive({ dominance: 75, extraversion: 92, patience: 20, formality: 18 })
      .map(item => [item.label, item.value])
  );
  assert.ok(expressive.Extraversion > reserved.Extraversion + 40);
  assert.ok(reserved.Conscientiousness > expressive.Conscientiousness + 30);
});

test('factor distance reports average absolute variance', () => {
  assert.equal(
    factorDistance(
      { dominance: 80, extraversion: 20, patience: 40, formality: 60 },
      { dominance: 70, extraversion: 30, patience: 50, formality: 70 }
    ),
    10
  );
});
