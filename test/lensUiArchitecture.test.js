import test from 'node:test';
import assert from 'node:assert/strict';
import { CANONICAL_LENS_VISUALS } from '../src/data/lensVisualRegistry.js';
import { PI_PROFILES } from '../src/data/profiles.js';
import {
  getNativeVisualFamily,
  isNativeVisualTypeSupported,
} from '../src/data/nativeVisualTypes.js';
import {
  getLensExplainer,
  hasCompleteLensExplainer,
} from '../src/data/lensExplainers.js';
import { deriveCanonicalLensProjection } from '../src/data/canonicalLensProjection.js';

const ANALYZER = PI_PROFILES.find(profile => profile.id === 'analyzer') || PI_PROFILES[0];

test('canonical lens registry has unique ids', () => {
  const ids = CANONICAL_LENS_VISUALS.map(lens => lens.id);
  assert.equal(new Set(ids).size, ids.length);
  assert.ok(ids.length >= 50);
});

test('every canonical lens visual type has an explicit native renderer', () => {
  for (const lens of CANONICAL_LENS_VISUALS) {
    assert.equal(
      isNativeVisualTypeSupported(lens.visualType),
      true,
      `${lens.id} uses unsupported visual type ${lens.visualType}`
    );
    assert.notEqual(getNativeVisualFamily(lens.visualType), 'unsupported');
  }
});

test('every canonical lens receives a complete explainer card model', () => {
  for (const lens of CANONICAL_LENS_VISUALS) {
    const projection = deriveCanonicalLensProjection(lens, ANALYZER);
    const explainer = getLensExplainer(lens, projection);
    assert.equal(
      hasCompleteLensExplainer(explainer),
      true,
      `${lens.id} has an incomplete explainer`
    );
  }
});

test('every canonical lens returns bounded exact PI projection dimensions', () => {
  for (const lens of CANONICAL_LENS_VISUALS) {
    const projection = deriveCanonicalLensProjection(lens, ANALYZER);
    assert.equal(projection.lensId, lens.id);
    assert.equal(projection.lens, lens.lens);
    assert.ok(projection.dimensions.length > 0, `${lens.id} returned no dimensions`);
    for (const dimension of projection.dimensions) {
      assert.ok(dimension.label);
      assert.ok(dimension.value >= 0 && dimension.value <= 100, `${lens.id}/${dimension.label} was ${dimension.value}`);
      assert.ok(dimension.basis.length > 8, `${lens.id}/${dimension.label} has no basis`);
    }
  }
});
