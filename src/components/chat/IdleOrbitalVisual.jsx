import React from 'react';
import OrbitalImageWheel from '../smoothui/OrbitalImageWheel.tsx';

function svgData(body, accent = '#7dd3fc', accent2 = '#c4b5fd') {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
      <defs>
        <radialGradient id="bg" cx="30%" cy="20%" r="90%">
          <stop offset="0%" stop-color="#20273a"/>
          <stop offset="65%" stop-color="#111522"/>
          <stop offset="100%" stop-color="#090b12"/>
        </radialGradient>
        <linearGradient id="accent" x1="0" x2="1">
          <stop offset="0%" stop-color="${accent}"/>
          <stop offset="100%" stop-color="${accent2}"/>
        </linearGradient>
        <filter id="glow"><feGaussianBlur stdDeviation="2.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <rect width="96" height="96" rx="48" fill="url(#bg)"/>
      <circle cx="48" cy="48" r="42" fill="none" stroke="#ffffff" stroke-opacity=".08"/>
      <g stroke="url(#accent)" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)">
        ${body}
      </g>
    </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const ITEMS = [
  {
    id: 'radar',
    label: 'Radar',
    alt: 'Radar visualization',
    image: svgData('<polygon points="48,20 70,36 62,66 34,70 23,40" fill="#7dd3fc" fill-opacity=".16" stroke-width="3"/><circle cx="48" cy="20" r="2" fill="#fff"/><circle cx="70" cy="36" r="2" fill="#fff"/><circle cx="62" cy="66" r="2" fill="#fff"/>')
  },
  {
    id: 'network',
    label: 'Network',
    alt: 'Network visualization',
    image: svgData('<path d="M25 61 45 29l27 18M45 29l5 39M25 61l25 7 22-21" stroke-width="2.5"/><circle cx="25" cy="61" r="4" fill="#c4b5fd"/><circle cx="45" cy="29" r="4" fill="#c4b5fd"/><circle cx="72" cy="47" r="4" fill="#c4b5fd"/><circle cx="50" cy="68" r="4" fill="#c4b5fd"/>', '#c4b5fd', '#f9a8d4')
  },
  {
    id: 'heatmap',
    label: 'Heatmap',
    alt: 'Heatmap visualization',
    image: svgData('<rect x="23" y="25" width="12" height="12" rx="2" fill="#f9a8d4" fill-opacity=".45"/><rect x="39" y="25" width="12" height="12" rx="2" fill="#f9a8d4" fill-opacity=".85"/><rect x="55" y="25" width="12" height="12" rx="2" fill="#f9a8d4" fill-opacity=".6"/><rect x="23" y="41" width="12" height="12" rx="2" fill="#7dd3fc" fill-opacity=".8"/><rect x="39" y="41" width="12" height="12" rx="2" fill="#7dd3fc" fill-opacity=".35"/><rect x="55" y="41" width="12" height="12" rx="2" fill="#7dd3fc" fill-opacity=".95"/><rect x="23" y="57" width="12" height="12" rx="2" fill="#c4b5fd" fill-opacity=".5"/><rect x="39" y="57" width="12" height="12" rx="2" fill="#c4b5fd" fill-opacity=".9"/><rect x="55" y="57" width="12" height="12" rx="2" fill="#c4b5fd" fill-opacity=".65"/>', '#f9a8d4', '#7dd3fc')
  },
  {
    id: 'gauge',
    label: 'Gauge',
    alt: 'Gauge visualization',
    image: svgData('<path d="M24 62a25 25 0 0 1 50 0" stroke="#ffffff" stroke-opacity=".18" stroke-width="7"/><path d="M24 62a25 25 0 0 1 36-22" stroke-width="7"/><path d="M49 62 62 43" stroke-width="3"/><circle cx="49" cy="62" r="4" fill="#7dd3fc"/>')
  },
  {
    id: 'chord',
    label: 'Chord',
    alt: 'Chord visualization',
    image: svgData('<circle cx="48" cy="48" r="28" stroke-width="2" stroke-opacity=".35"/><path d="M27 37C55 31 69 41 70 55M25 56C43 76 64 70 70 34M38 22C30 48 40 67 63 72" stroke-width="2.5"/>', '#a7f3d0', '#7dd3fc')
  },
  {
    id: 'stream',
    label: 'Stream',
    alt: 'Stream visualization',
    image: svgData('<path d="M18 54C30 28 40 70 52 40s20 11 30-6" stroke-width="4"/><path d="M18 65C31 44 41 74 53 55s20 12 29-4" stroke-width="2" stroke-opacity=".45"/>', '#67e8f9', '#a7f3d0')
  },
  {
    id: 'map',
    label: 'Map',
    alt: 'Map visualization',
    image: svgData('<path d="M25 28 40 23l18 9 14-5v41l-14 5-18-9-15 5Z" stroke-width="2" stroke-opacity=".45"/><circle cx="39" cy="44" r="4" fill="#f9a8d4"/><circle cx="62" cy="54" r="4" fill="#f9a8d4"/><path d="M39 44c7 2 14 5 23 10" stroke-width="2" stroke-dasharray="4 4"/>', '#f9a8d4', '#c4b5fd')
  },
  {
    id: 'bubble',
    label: 'Bubble',
    alt: 'Bubble visualization',
    image: svgData('<circle cx="34" cy="59" r="11" fill="#7dd3fc" fill-opacity=".4"/><circle cx="53" cy="37" r="15" fill="#c4b5fd" fill-opacity=".7"/><circle cx="67" cy="61" r="8" fill="#f9a8d4" fill-opacity=".62"/>', '#7dd3fc', '#f9a8d4')
  }
];

export default function IdleOrbitalVisual({ visible = true }) {
  if (!visible) return null;

  return (
    <div className="pi-smooth-orbital">
      <OrbitalImageWheel
        autoRotate
        autoRotateSpeed={10}
        items={ITEMS}
        radius={105}
        snap
      />
    </div>
  );
}
