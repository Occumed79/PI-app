/**
 * PulseRing — animated concentric rings showing intensity/risk level
 * Great for stress risk, burnout risk, EQ level, etc.
 * Props:
 *   value: 0-100
 *   label: string
 *   sublabel?: string
 *   color?: string  (auto-derived from value if not set)
 *   animate?: boolean
 */
import React, { useEffect, useState } from 'react';

function levelColor(v) {
  if (v >= 75) return '#f87171'; // red — high risk/intensity
  if (v >= 50) return '#fbbf24'; // amber — moderate
  if (v >= 25) return '#34d399'; // green — low
  return '#60a5fa';              // blue — very low
}

export default function PulseRing({ value = 50, label, sublabel, color, animate = true }) {
  const [tick, setTick] = useState(0);
  const col = color || levelColor(value);
  const rings = 3;
  const size = 120;
  const center = size / 2;

  useEffect(() => {
    if (!animate) return;
    const id = setInterval(() => setTick(t => t + 1), 1200);
    return () => clearInterval(id);
  }, [animate]);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} style={{ position: 'absolute', top: 0, left: 0, overflow: 'visible' }}>
          {/* Pulse rings */}
          {Array.from({ length: rings }).map((_, i) => {
            const delay = i * 0.4;
            const maxR = center - 4 + i * 12;
            return (
              <circle
                key={i}
                cx={center} cy={center}
                r={maxR}
                fill="none"
                stroke={col}
                strokeWidth="1.5"
                opacity={0}
                style={{
                  animation: animate ? `pulseRing 2.4s ${delay}s ease-out infinite` : 'none',
                }}
              />
            );
          })}
        </svg>

        {/* Core circle */}
        <div
          className="absolute inset-0 rounded-full flex flex-col items-center justify-center"
          style={{
            background: `radial-gradient(circle at 40% 40%, ${col}28, ${col}10)`,
            border: `2px solid ${col}55`,
            boxShadow: `0 0 20px ${col}33, inset 0 0 20px ${col}11`,
          }}
        >
          <span className="text-2xl font-bold text-white" style={{ textShadow: `0 0 12px ${col}` }}>
            {Math.round(value)}
          </span>
          <span className="text-[9px] text-white/40 font-medium uppercase tracking-wide">/ 100</span>
        </div>
      </div>

      <style>{`
        @keyframes pulseRing {
          0%   { r: 20px; opacity: 0.6; }
          100% { r: 60px; opacity: 0; }
        }
      `}</style>

      <div className="text-center">
        <p className="text-xs font-semibold text-white/80">{label}</p>
        {sublabel && <p className="text-[10px] text-white/40 mt-0.5">{sublabel}</p>}
      </div>
    </div>
  );
}
