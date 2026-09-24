import React from 'react';

const ITEMS = [
  { id: 'radar', label: 'Radar', glyph: '⌁' },
  { id: 'network', label: 'Network', glyph: '✦' },
  { id: 'heatmap', label: 'Heatmap', glyph: '▦' },
  { id: 'gauge', label: 'Gauge', glyph: '◔' },
  { id: 'chord', label: 'Chord', glyph: '◎' },
  { id: 'stream', label: 'Stream', glyph: '≈' },
  { id: 'map', label: 'Map', glyph: '⌖' },
  { id: 'bubble', label: 'Bubble', glyph: '◌' },
];

export default function IdleOrbitalVisual({ visible = true }) {
  if (!visible) return null;

  return (
    <div className="pi-idle-orbit" aria-hidden="true">
      <div className="pi-idle-orbit-core">
        <span>Visual intelligence</span>
      </div>
      <div className="pi-idle-orbit-ring">
        {ITEMS.map((item, index) => {
          const angle = (360 / ITEMS.length) * index;
          return (
            <div
              key={item.id}
              className="pi-idle-orbit-node"
              style={{ '--orbit-angle': `${angle}deg`, '--orbit-delay': `${index * -0.45}s` }}
              title={item.label}
            >
              <span className="pi-idle-orbit-glyph">{item.glyph}</span>
              <span className="pi-idle-orbit-label">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
