import { HSI_LENS_REGISTRY } from './hsiLensRegistry.js';
import { getLensVisual } from './lensVisualRegistry.js';

export const DISPLAY_LENSES = Object.freeze(
  HSI_LENS_REGISTRY.map((rawLens, index) => {
    const visual = getLensVisual(rawLens);
    return {
      ...rawLens,
      sourceIndex: index + 1,
      canonicalId: visual.id,
      canonicalLens: visual.lens,
      category: rawLens.category || visual.category || 'Other',
      visualType: visual.visualType,
      visualLabel: visual.visualLabel,
      visualReason: visual.why,
      aliases: visual.aliases || [],
    };
  })
);

export function getDisplayLensCount() {
  return DISPLAY_LENSES.length;
}
