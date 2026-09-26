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

export const MetalButton = forwardRef(function MetalButton(
  {
    className = '',
    metalFxClassName = '',
    metalVariant = 'button',
    metalStrength = 0.9,
    metalPreset = 'chromatic',
    children,
    ...buttonProps
  },
  ref
) {
  return (
    <MetalFx
      ref={ref}
      className={wrapperClassFor(className, metalFxClassName)}
      preset={metalPreset}
      theme="dark"
      strength={metalStrength}
      variant={metalVariant}
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
