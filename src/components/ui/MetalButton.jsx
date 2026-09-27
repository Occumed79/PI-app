import React, { forwardRef } from 'react';
import { MetalFx } from 'metal-fx';

function wrapperClassFor(className = '', extra = '') {
  const classes = ['pi-metal-fx'];
  if (/\bw-full\b/.test(className)) classes.push('w-full');
  if (/\bflex-1\b/.test(className)) classes.push('flex-1');
  if (/\bshrink-0\b/.test(className)) classes.push('shrink-0');
  if (extra) classes.push(extra);
  return classes.join(' ');
}

function isDenseControl(className = '') {
  return /\btext-left\b|\bw-full\b|\brounded-2xl\b|\bmin-w-\[/.test(className);
}

export const MetalButton = forwardRef(function MetalButton(
  {
    className = '',
    metalFxClassName = '',
    metalVariant = 'button',
    metalStrength,
    metalPreset,
    metalDisableGlow,
    metalRingCssPx,
    children,
    ...buttonProps
  },
  ref
) {
  const dense = isDenseControl(className);
  const circle = metalVariant === 'circle';
  const resolvedPreset = metalPreset || 'silver';
  const resolvedStrength = metalStrength ?? (circle ? 0.30 : dense ? 0.24 : 0.48);
  const resolvedDisableGlow = metalDisableGlow ?? (circle || dense);
  const resolvedRingCssPx = metalRingCssPx ?? (dense ? 0.72 : 1);

  return (
    <MetalFx
      ref={ref}
      className={wrapperClassFor(className, metalFxClassName)}
      preset={resolvedPreset}
      theme="dark"
      strength={resolvedStrength}
      variant={metalVariant}
      disableGlow={resolvedDisableGlow}
      ringCssPx={resolvedRingCssPx}
      normalizeHostStyles={false}
    >
      <button className={className} {...buttonProps}>
        {children}
      </button>
    </MetalFx>
  );
});

MetalButton.displayName = 'MetalButton';
export default MetalButton;
