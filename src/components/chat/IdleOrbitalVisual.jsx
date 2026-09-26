import React from 'react';

const ITEMS = [
  { id: 'radar', label: 'Radar' },
  { id: 'network', label: 'Network' },
  { id: 'heatmap', label: 'Heatmap' },
  { id: 'gauge', label: 'Gauge' },
  { id: 'chord', label: 'Chord' },
  { id: 'stream', label: 'Stream' },
  { id: 'map', label: 'Map' },
  { id: 'bubble', label: 'Bubble' },
];

function MiniVisual({ type }) {
  if (type === 'radar') {
    return (
      <svg viewBox="0 0 44 32" aria-hidden="true">
        <polygon points="22,3 37,12 32,27 13,28 6,13" fill="rgba(56,189,248,.28)" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="22" cy="3" r="1.6" fill="currentColor" />
        <circle cx="37" cy="12" r="1.6" fill="currentColor" />
        <circle cx="32" cy="27" r="1.6" fill="currentColor" />
        <circle cx="13" cy="28" r="1.6" fill="currentColor" />
        <circle cx="6" cy="13" r="1.6" fill="currentColor" />
      </svg>
    );
  }
  if (type === 'network') {
    return (
      <svg viewBox="0 0 44 32" aria-hidden="true">
        <path d="M8 22 20 8l15 6M20 8l3 18M8 22l15 4 12-12" fill="none" stroke="currentColor" strokeWidth="1.3" opacity=".65" />
        {[['8','22'],['20','8'],['35','14'],['23','26']].map(([x,y]) => <circle key={x+y} cx={x} cy={y} r="2.3" fill="currentColor" />)}
      </svg>
    );
  }
  if (type === 'heatmap') {
    const values = [.35,.72,.48,.88,.58,.32,.78,.52,.94,.43,.68,.27];
    return (
      <svg viewBox="0 0 44 32" aria-hidden="true">
        {values.map((value, index) => {
          const x = 4 + (index % 4) * 9.5;
          const y = 3 + Math.floor(index / 4) * 9.2;
          return <rect key={index} x={x} y={y} width="7.5" height="7.2" rx="1.4" fill="currentColor" opacity={value} />;
        })}
      </svg>
    );
  }
  if (type === 'gauge') {
    return (
      <svg viewBox="0 0 44 32" aria-hidden="true">
        <path d="M7 25a15 15 0 0 1 30 0" fill="none" stroke="currentColor" strokeWidth="3" opacity=".24" strokeLinecap="round" />
        <path d="M7 25a15 15 0 0 1 22-13" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
        <path d="M22 25 30 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="22" cy="25" r="2.3" fill="currentColor" />
      </svg>
    );
  }
  if (type === 'chord') {
    return (
      <svg viewBox="0 0 44 32" aria-hidden="true">
        <circle cx="22" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".34" />
        <path d="M12 10C25 7 31 11 34 19M10 19C19 29 29 27 34 12M17 5C13 17 18 25 29 27" fill="none" stroke="currentColor" strokeWidth="1.4" opacity=".88" />
      </svg>
    );
  }
  if (type === 'stream') {
    return (
      <svg viewBox="0 0 44 32" aria-hidden="true">
        <path d="M3 20C9 6 15 27 22 13s12 5 19-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M3 25C9 14 15 30 22 19s12 6 19-2" fill="none" stroke="currentColor" strokeWidth="1.1" opacity=".38" strokeLinecap="round" />
      </svg>
    );
  }
  if (type === 'map') {
    return (
      <svg viewBox="0 0 44 32" aria-hidden="true">
        <path d="M8 7 17 4l10 5 9-3v20l-9 3-10-5-9 3Z" fill="none" stroke="currentColor" strokeWidth="1.2" opacity=".5" />
        <circle cx="17" cy="14" r="2.2" fill="currentColor" />
        <circle cx="30" cy="18" r="2.2" fill="currentColor" />
        <path d="M17 14c4 1 8 2 13 4" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 2" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 44 32" aria-hidden="true">
      <circle cx="12" cy="21" r="5" fill="currentColor" opacity=".45" />
      <circle cx="24" cy="11" r="7" fill="currentColor" opacity=".82" />
      <circle cx="33" cy="22" r="4" fill="currentColor" opacity=".62" />
    </svg>
  );
}

export default function IdleOrbitalVisual({ visible = true }) {
  if (!visible) return null;

  return (
    <div className="pi-idle-orbit" aria-hidden="true">
      <div className="pi-idle-orbit-track pi-idle-orbit-track-a" />
      <div className="pi-idle-orbit-track pi-idle-orbit-track-b" />
      <div className="pi-idle-orbit-ring">
        {ITEMS.map((item, index) => {
          const angle = (360 / ITEMS.length) * index;
          return (
            <div
              key={item.id}
              className="pi-idle-orbit-node"
              style={{ '--orbit-angle': `${angle}deg`, '--orbit-delay': `${index * -0.42}s` }}
            >
              <div className="pi-idle-orbit-node-inner">
                <span className="pi-idle-orbit-mini"><MiniVisual type={item.id} /></span>
                <span className="pi-idle-orbit-label">{item.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
