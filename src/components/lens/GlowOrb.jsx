/**
 * GlowOrb — animated pulsing orb for a single high-level score or value
 * Props:
 *   value: 0-100
 *   label: string
 *   sublabel: string
 *   color: string (hex)
 *   size: 'sm' | 'md' | 'lg'
 */
import React, { useEffect, useState } from 'react';

const SIZES = {
  sm: { outer: 80,  inner: 56,  font: 18, sub: 9  },
  md: { outer: 110, inner: 78,  font: 24, sub: 10 },
  lg: { outer: 140, inner: 100, font: 30, sub: 11 },
};

export default function GlowOrb({ value = 0, label = '', sublabel = '', color = '#818cf8', size = 'md' }) {
  const [displayed, setDisplayed] = useState(0);
  const s = SIZES[size] || SIZES.md;

  useEffect(() => {
    let start = 0;
    const target = Math.min(100, Math.max(0, value));
    const step = target / 40;
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setDisplayed(target); clearInterval(timer); }
      else setDisplayed(Math.floor(start));
    }, 25);
    return () => clearInterval(timer);
  }, [value]);

  const pct = Math.min(100, Math.max(0, value));
  const circumference = Math.PI * 2 * (s.outer / 2 - 8);
  const dash = (pct / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex items-center justify-center" style={{ width: s.outer, height: s.outer }}>
        {/* Outer glow */}
        <div
          className="absolute inset-0 rounded-full opacity-20 blur-xl animate-pulse"
          style={{ backgroundColor: color }}
        />
        {/* SVG ring */}
        <svg
          className="absolute inset-0 -rotate-90"
          width={s.outer} height={s.outer}
          viewBox={`0 0 ${s.outer} ${s.outer}`}
        >
          {/* Track */}
          <circle
            cx={s.outer / 2} cy={s.outer / 2} r={s.outer / 2 - 8}
            fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth={4}
          />
          {/* Progress */}
          <circle
            cx={s.outer / 2} cy={s.outer / 2} r={s.outer / 2 - 8}
            fill="none" stroke={color} strokeWidth={4}
            strokeLinecap="round"
            strokeDasharray={`${dash} ${circumference}`}
            style={{ transition: 'stroke-dasharray 1s ease-out', filter: `drop-shadow(0 0 6px ${color}80)` }}
          />
        </svg>
        {/* Inner orb */}
        <div
          className="relative z-10 flex flex-col items-center justify-center rounded-full"
          style={{
            width: s.inner, height: s.inner,
            background: `radial-gradient(circle at 40% 35%, ${color}30, transparent 70%)`,
            border: `1px solid ${color}30`,
          }}
        >
          <span className="font-bold tabular-nums" style={{ fontSize: s.font, color, lineHeight: 1 }}>
            {displayed}
          </span>
        </div>
      </div>
      {label && <p className="text-xs font-medium text-white/70 text-center leading-tight">{label}</p>}
      {sublabel && <p className="text-[10px] text-white/35 text-center">{sublabel}</p>}
    </div>
  );
}
