/**
 * TraitDial — a circular gauge/dial for a single trait score
 * Great for showing a single dominant value (e.g., EQ score, resilience %)
 * Props:
 *   value: 0-100
 *   label: string
 *   sublabel?: string
 *   color?: string
 *   size?: 'sm' | 'md' | 'lg'
 */
import React, { useEffect, useState } from 'react';

const SIZES = {
  sm: { r: 36, stroke: 6, svgSize: 90,  fontSize: 18, labelSize: '9px' },
  md: { r: 50, stroke: 8, svgSize: 120, fontSize: 24, labelSize: '10px' },
  lg: { r: 64, stroke: 9, svgSize: 150, fontSize: 30, labelSize: '11px' },
};

export default function TraitDial({ value = 0, label, sublabel, color = '#818cf8', size = 'md' }) {
  const [animated, setAnimated] = useState(0);
  const cfg = SIZES[size];
  const circumference = 2 * Math.PI * cfg.r;
  const dash = (animated / 100) * circumference;
  const gap = circumference - dash;

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(Math.min(100, Math.max(0, value))), 80);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width={cfg.svgSize} height={cfg.svgSize} viewBox={`0 0 ${cfg.svgSize} ${cfg.svgSize}`}>
        {/* Background track */}
        <circle
          cx={cfg.svgSize / 2}
          cy={cfg.svgSize / 2}
          r={cfg.r}
          fill="none"
          stroke="rgba(255,255,255,0.07)"
          strokeWidth={cfg.stroke}
        />
        {/* Glow filter */}
        <defs>
          <filter id={`dial-glow-${label}`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>
        {/* Progress arc — starts at top (-90deg) */}
        <circle
          cx={cfg.svgSize / 2}
          cy={cfg.svgSize / 2}
          r={cfg.r}
          fill="none"
          stroke={color}
          strokeWidth={cfg.stroke}
          strokeLinecap="round"
          strokeDasharray={`${dash} ${gap}`}
          strokeDashoffset={circumference / 4}
          style={{ transition: 'stroke-dasharray 1s cubic-bezier(0.34,1.56,0.64,1)', filter: `drop-shadow(0 0 6px ${color}88)` }}
        />
        {/* Value text */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="central"
          fill="white"
          fontSize={cfg.fontSize}
          fontWeight="700"
          fontFamily="system-ui"
          style={{ letterSpacing: '-0.5px' }}
        >
          {Math.round(animated)}
        </text>
      </svg>
      <div className="text-center">
        <p className="text-xs font-semibold text-white/80 leading-tight">{label}</p>
        {sublabel && <p className="text-[10px] text-white/40 mt-0.5">{sublabel}</p>}
      </div>
    </div>
  );
}
