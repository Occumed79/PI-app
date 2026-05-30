/**
 * StressHeatmap — grid showing stress risk level per profile under this lens
 * Props:
 *   profiles: [{ name, color, stressLevel (0-100 or 'low'|'medium'|'high'), stressLabel }]
 *   title: string
 */
import React, { useState } from 'react';

const LEVEL_TO_NUM = { low: 25, medium: 55, high: 82, critical: 96 };
const NUM_TO_LABEL = (n) => {
  if (n >= 80) return { label: 'High risk', color: '#f87171', bg: 'rgba(239,68,68,0.15)', border: 'rgba(239,68,68,0.3)' };
  if (n >= 55) return { label: 'Moderate', color: '#fbbf24', bg: 'rgba(245,158,11,0.12)', border: 'rgba(245,158,11,0.3)' };
  return { label: 'Resilient', color: '#34d399', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.25)' };
};

export default function StressHeatmap({ profiles = [], title = 'Stress Risk by Profile' }) {
  const [hovered, setHovered] = useState(null);
  if (!profiles.length) return null;

  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">{title}</p>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
        {profiles.map((p, i) => {
          const numVal = typeof p.stressLevel === 'number' ? p.stressLevel : (LEVEL_TO_NUM[p.stressLevel] ?? 50);
          const style = NUM_TO_LABEL(numVal);
          const isHov = hovered === i;
          return (
            <div
              key={p.name}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative flex flex-col items-center gap-1.5 rounded-xl p-2.5 cursor-default transition-all duration-200 border"
              style={{
                background: isHov ? style.bg : 'rgba(255,255,255,0.03)',
                borderColor: isHov ? style.border : 'rgba(255,255,255,0.06)',
                transform: isHov ? 'translateY(-2px)' : 'none',
              }}
            >
              {/* Color dot */}
              <div
                className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: p.color, boxShadow: `0 0 6px ${p.color}80` }}
              />
              <span className="text-[10px] text-white/70 text-center leading-tight">{p.name}</span>

              {/* Mini bar */}
              <div className="w-full h-1 rounded-full bg-white/5 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-700"
                  style={{
                    width: `${numVal}%`,
                    backgroundColor: style.color,
                    boxShadow: `0 0 4px ${style.color}80`,
                  }}
                />
              </div>

              {/* Tooltip on hover */}
              {isHov && (
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap rounded-lg border border-white/10 bg-[#0a0a1a] px-2.5 py-1.5 text-[10px] shadow-xl">
                  <span style={{ color: style.color }} className="font-semibold">{style.label}</span>
                  {p.stressLabel && <div className="text-white/50 mt-0.5 max-w-[160px] whitespace-normal">{p.stressLabel}</div>}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/5">
        {[
          { label: 'Resilient', color: '#34d399' },
          { label: 'Moderate risk', color: '#fbbf24' },
          { label: 'High risk', color: '#f87171' },
        ].map(l => (
          <div key={l.label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: l.color }} />
            <span className="text-[10px] text-white/40">{l.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
