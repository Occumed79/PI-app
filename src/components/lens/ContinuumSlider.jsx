/**
 * ContinuumSlider — a labeled spectrum bar showing a profile's position on a continuum
 * Perfect for KAI (Adaptor↔Innovator), LVI (Forceful↔Enabling), etc.
 * Props:
 *   leftLabel: string
 *   rightLabel: string
 *   profiles: [{ name, value: 0-100, color? }]
 *   title?: string
 *   description?: string
 */
import React, { useEffect, useState } from 'react';

const PROFILE_COLORS = [
  '#818cf8','#34d399','#f59e0b','#f472b6','#60a5fa',
  '#a78bfa','#fb923c','#4ade80','#e879f9','#38bdf8',
];

export default function ContinuumSlider({ leftLabel, rightLabel, profiles = [], title, description }) {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setAnimated(true), 120);
    return () => clearTimeout(t);
  }, []);

  if (!profiles.length) return null;

  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      {title && <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-1">{title}</p>}
      {description && <p className="text-xs text-white/40 mb-4">{description}</p>}

      {/* Axis */}
      <div className="relative mb-6">
        <div className="flex justify-between text-[10px] text-white/40 font-medium mb-2">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>
        <div className="relative h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
          <div className="absolute inset-0 rounded-full" style={{
            background: 'linear-gradient(to right, #f87171, rgba(255,255,255,0.1) 50%, #818cf8)',
            opacity: 0.5,
          }} />
        </div>
        {/* Tick marks */}
        <div className="flex justify-between mt-1 px-0">
          {[0,25,50,75,100].map(t => (
            <div key={t} className="w-px h-1.5" style={{ background: 'rgba(255,255,255,0.15)' }} />
          ))}
        </div>
      </div>

      {/* Profile markers */}
      <div className="space-y-3">
        {profiles.map((p, i) => {
          const pct = Math.min(100, Math.max(0, p.value));
          const color = p.color || PROFILE_COLORS[i % PROFILE_COLORS.length];
          return (
            <div key={p.name} className="flex items-center gap-3">
              <span className="text-xs text-white/60 w-24 text-right flex-shrink-0 truncate">{p.name}</span>
              <div className="flex-1 relative h-5 flex items-center">
                {/* Track */}
                <div className="absolute inset-y-0 left-0 right-0 flex items-center">
                  <div className="w-full h-px" style={{ background: 'rgba(255,255,255,0.06)' }} />
                </div>
                {/* Dot */}
                <div
                  className="absolute w-3 h-3 rounded-full transition-all duration-700"
                  style={{
                    left: animated ? `calc(${pct}% - 6px)` : '0%',
                    background: color,
                    boxShadow: `0 0 8px ${color}88`,
                    transition: animated ? 'left 0.8s cubic-bezier(0.34,1.56,0.64,1)' : 'none',
                  }}
                />
              </div>
              <span className="text-[10px] text-white/35 w-8 flex-shrink-0">{pct}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
