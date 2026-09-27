import React from 'react';
import OrbitalImageWheel from '../smoothui/OrbitalImageWheel.tsx';

const BASE = 'https://ik.imagekit.io/16u211libb/smoothui/scenes';

const ITEMS = [
  ['amber-violet', 'Amber and violet abstract color fields'],
  ['cobalt-pink', 'Cobalt blue and pink abstract color fields'],
  ['coral-lavender', 'Coral and lavender abstract color fields'],
  ['cyan-tangerine', 'Cyan and tangerine abstract color fields'],
  ['coral-cyan', 'Coral and cyan heavily blurred color fields with fine grain'],
  ['violet-tangerine', 'Violet and tangerine heavily blurred color fields with fine grain'],
  ['teal-apricot', 'Teal and apricot heavily blurred color fields with fine grain'],
  ['plum-coral', 'Plum and coral heavily blurred color fields with fine grain'],
].map(([id, alt]) => ({
  id,
  alt,
  label: id.split('-').join(' '),
  image: `${BASE}/${id}.webp?tr=w-160,h-160,f-auto`,
}));

export default function IdleOrbitalVisual({ visible = true }) {
  if (!visible) return null;

  return (
    <div className="pi-smooth-orbital-demo">
      <OrbitalImageWheel
        autoRotate
        autoRotateSpeed={10}
        items={ITEMS}
        snap
      />
    </div>
  );
}
