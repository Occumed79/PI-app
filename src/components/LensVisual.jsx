import React from 'react';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';
import { PI_PROFILES } from '../data/profiles.js';
import { getLensVisual } from '../data/lensVisualRegistry.js';
import {
  deriveCanonicalLensProjection,
  projectionToNativeResult,
} from '../data/canonicalLensProjection.js';
import NativeLensVisual from './lens/NativeLensVisual.jsx';
import LensExplainerCard from './LensExplainerCard.jsx';

export default function LensVisual({
  lensId,
  visualType,
  profileId,
  showExplainer = true,
}) {
  const rawLens = HSI_LENS_REGISTRY.find(item => item.id === lensId);
  const canonical = getLensVisual(rawLens || { lens: lensId, id: lensId });
  const lens = {
    ...canonical,
    visualType: visualType || canonical.visualType,
    visualReason: canonical.why,
  };
  const profile = PI_PROFILES.find(item => item.id === profileId) || PI_PROFILES[0];
  const projection = deriveCanonicalLensProjection(lens, profile);
  const result = projectionToNativeResult(lens, projection);

  return (
    <div className="space-y-4">
      {showExplainer && <LensExplainerCard lens={lens} projection={projection} compact />}
      <NativeLensVisual lens={lens} result={result} />
    </div>
  );
}
