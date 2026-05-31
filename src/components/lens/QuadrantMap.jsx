/**
 * QuadrantMap — 2D scatter positioning profiles on X/Y axes
 * Perfect for DISC (D/I vs S/C), Social Styles, HBDI quadrants, etc.
 * Props:
 *   xAxis: { label, lowLabel, highLabel }
 *   yAxis: { label, lowLabel, highLabel }
 *   quadrantLabels: { topLeft, topRight, bottomLeft, bottomRight }
 *   profiles: [{ name, x: 0-100, y: 0-100, color?, highlighted? }]
 *   title: string
 */
import React, { useState } from 'react';

export default function QuadrantMap({
  xAxis = { label: 'X', lowLabel: 'Low', highLabel: 'High' },
  yAxis = { label: 'Y', lowLabel: 'Low', highLabel: 'High' },
  quadrantLabels = { topLeft: 'Q2', topRight: 'Q1', bottomLeft: 'Q3', bottomRight: 'Q4' },
  profiles = [],
  title,
}) {
  const [tooltip, setTooltip] = useState(null);

  if (!profiles.length) return null;

  const SIZE = 320;
  const PAD = 40;
  const INNER = SIZE - PAD * 2;

  function toSvg(val, axis) {
    // x: 0=left, 100=right; y: 0=bottom, 100=top (invert for SVG)
    const clamped = Math.min(100, Math.max(0, val));
    if (axis === 'x') return PAD + (clamped / 100) * INNER;
    return PAD + INNER - (clamped / 100) * INNER;
  }

  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      {title && <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">{title}</p>}
      <div className="flex justify-center">
        <svg width={SIZE} height={SIZE} style={{ overflow: 'visible' }}>
          {/* Quadrant background fills */}
          {[
            { x: PAD, y: PAD,            label: quadrantLabels.topLeft,     color: 'rgba(99,102,241,0.06)' },
            { x: PAD + INNER/2, y: PAD,  label: quadrantLabels.topRight,    color: 'rgba(16,185,129,0.06)' },
            { x: PAD, y: PAD + INNER/2,  label: quadrantLabels.bottomLeft,  color: 'rgba(245,158,11,0.06)' },
            { x: PAD + INNER/2, y: PAD + INNER/2, label: quadrantLabels.bottomRight, color: 'rgba(236,72,153,0.06)' },
          ].map((q) => (
            <g key={q.label}>
              <rect x={q.x} y={q.y} width={INNER/2} height={INNER/2} fill={q.color} rx="4" />
              <text
                x={q.x + INNER/4} y={q.y + INNER/4}
                textAnchor="middle" dominantBaseline="central"
                fill="rgba(255,255,255,0.08)" fontSize="11" fontWeight="600"
                style={{ userSelect: 'none' }}
              >
                {q.label}
              </text>
            </g>
          ))}

          {/* Grid lines */}
          <line x1={PAD} y1={PAD + INNER/2} x2={PAD + INNER} y2={PAD + INNER/2} stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />
          <line x1={PAD + INNER/2} y1={PAD} x2={PAD + INNER/2} y2={PAD + INNER} stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="4 4" />

          {/* Axes */}
          <line x1={PAD} y1={PAD + INNER} x2={PAD + INNER} y2={PAD + INNER} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <line x1={PAD} y1={PAD} x2={PAD} y2={PAD + INNER} stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

          {/* Axis labels */}
          <text x={PAD + INNER/2} y={SIZE - 6} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10">{xAxis.label}</text>
          <text x={PAD - 4} y={PAD + INNER + 12} textAnchor="start" fill="rgba(255,255,255,0.25)" fontSize="8">{xAxis.lowLabel}</text>
          <text x={PAD + INNER} y={PAD + INNER + 12} textAnchor="end" fill="rgba(255,255,255,0.25)" fontSize="8">{xAxis.highLabel}</text>
          <text x={6} y={PAD + INNER/2} textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="10" transform={`rotate(-90, 6, ${PAD + INNER/2})`}>{yAxis.label}</text>
          <text x={PAD - 6} y={PAD + INNER} textAnchor="end" fill="rgba(255,255,255,0.25)" fontSize="8">{yAxis.lowLabel}</text>
          <text x={PAD - 6} y={PAD + 4} textAnchor="end" fill="rgba(255,255,255,0.25)" fontSize="8">{yAxis.highLabel}</text>

          {/* Profile dots */}
          {profiles.map((p, i) => {
            const cx = toSvg(p.x, 'x');
            const cy = toSvg(p.y, 'y');
            const col = p.color || '#818cf8';
            const isActive = tooltip?.name === p.name || p.highlighted;
            return (
              <g key={p.name}
                onMouseEnter={() => setTooltip({ name: p.name, x: cx, y: cy })}
                onMouseLeave={() => setTooltip(null)}
                style={{ cursor: 'pointer' }}
              >
                {isActive && <circle cx={cx} cy={cy} r={14} fill={col} opacity={0.12} />}
                <circle cx={cx} cy={cy} r={isActive ? 7 : 5} fill={col}
                  style={{ filter: `drop-shadow(0 0 6px ${col}88)`, transition: 'r 0.2s' }}
                />
                {isActive && (
                  <text x={cx} y={cy - 12} textAnchor="middle" fill={col} fontSize="10" fontWeight="600">
                    {p.name}
                  </text>
                )}
              </g>
            );
          })}
        </svg>
      </div>
      {/* Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 justify-center">
        {profiles.map(p => (
          <div key={p.name} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: p.color || '#818cf8' }} />
            <span className="text-[10px] text-white/50">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
