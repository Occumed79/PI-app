import test from 'node:test';
import assert from 'node:assert/strict';
import { CANONICAL_LENS_VISUALS } from '../src/data/lensVisualRegistry.js';
import { DISPLAY_LENSES } from '../src/data/displayLensRegistry.js';
import { HSI_LENS_REGISTRY } from '../src/data/hsiLensRegistry.js';
import { PI_PROFILES } from '../src/data/profiles.js';
import {
  getNativeVisualFamily,
  isNativeVisualTypeSupported,
  NATIVE_RENDERER_FAMILIES,
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

test('complete source lens navigation preserves every real registry entry', () => {
  assert.equal(DISPLAY_LENSES.length, HSI_LENS_REGISTRY.length);
  assert.deepEqual(
    DISPLAY_LENSES.map(lens => lens.id),
    HSI_LENS_REGISTRY.map(lens => lens.id)
  );
  assert.ok(DISPLAY_LENSES.every(lens => lens.canonicalId));
  assert.ok(DISPLAY_LENSES.every(lens => lens.visualType));
});

test('every canonical lens visual type routes to an implemented native renderer', () => {
  for (const lens of CANONICAL_LENS_VISUALS) {
    const family = getNativeVisualFamily(lens.visualType);
    assert.equal(
      isNativeVisualTypeSupported(lens.visualType),
      true,
      `${lens.id} uses unsupported visual type ${lens.visualType}`
    );
    assert.ok(
      NATIVE_RENDERER_FAMILIES.includes(family),
      `${lens.id} routes ${lens.visualType} to unimplemented family ${family}`
    );
  }
});

test('every displayed source lens routes to an implemented native renderer', () => {
  for (const lens of DISPLAY_LENSES) {
    const family = getNativeVisualFamily(lens.visualType);
    assert.equal(
      isNativeVisualTypeSupported(lens.visualType),
      true,
      `${lens.id} uses unsupported visual type ${lens.visualType}`
    );
    assert.ok(
      NATIVE_RENDERER_FAMILIES.includes(family),
      `${lens.id} routes ${lens.visualType} to unimplemented family ${family}`
    );
  }
});

test('every displayed source lens receives a complete explainer card model', () => {
  for (const lens of DISPLAY_LENSES) {
    const projection = deriveCanonicalLensProjection(lens, ANALYZER);
    const explainer = getLensExplainer(lens, projection);
    assert.equal(
      hasCompleteLensExplainer(explainer),
      true,
      `${lens.id} has an incomplete explainer`
    );
  }
});

test('every displayed source lens returns bounded exact PI projection dimensions', () => {
  for (const lens of DISPLAY_LENSES) {
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
