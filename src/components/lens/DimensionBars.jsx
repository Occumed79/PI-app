/**
 * DimensionBars — animated fill bars for each dimension of a lens
 * Props:
 *   dimensions: [{ label, value (0-100), description?, color?, sublabel? }]
 *   title: string
 */
import React, { useEffect, useRef, useState } from 'react';

const LEVEL_MAP = {
  'Very Low': 8,
  'Low': 22,
  'Low-Moderate': 38,
  'Moderate': 55,
  'Moderate-High': 68,
  'High': 80,
  'Very High': 94,
};

function toPercent(value) {
  if (typeof value === 'number') return Math.min(100, Math.max(0, value));
  return LEVEL_MAP[value] ?? 55;
}

const GRADIENT_PAIRS = [
  ['#6366f1', '#818cf8'],
  ['#0ea5e9', '#38bdf8'],
  ['#10b981', '#34d399'],
  ['#f59e0b', '#fbbf24'],
  ['#ec4899', '#f472b6'],
  ['#8b5cf6', '#a78bfa'],
];

export default function DimensionBars({ dimensions = [], title, highlightIndex = null }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  if (!dimensions.length) return null;

  return (
    <div ref={ref} className="glass rounded-2xl p-5 border border-white/8">
      {title && <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">{title}</p>}
      <div className="space-y-4">
        {dimensions.map((dim, i) => {
          const pct = toPercent(dim.value);
          const [from, to] = GRADIENT_PAIRS[i % GRADIENT_PAIRS.length];
          const isHighlit = highlightIndex === i;
          return (
            <div key={dim.label} className={`transition-all duration-300 ${isHighlit ? 'opacity-100' : 'opacity-85 hover:opacity-100'}`}>
              <div className="flex items-center justify-between mb-1.5">
                <div>
                  <span className="text-sm font-medium text-white/90">{dim.label}</span>
                  {dim.sublabel && <span className="text-xs text-white/35 ml-2">{dim.sublabel}</span>}
                </div>
                <span className="text-xs font-semibold tabular-nums" style={{ color: from }}>
                  {typeof dim.value === 'number' ? `${dim.value}` : dim.value}
                </span>
              </div>
              {/* Track */}
              <div className="relative h-2 rounded-full bg-white/[0.06] overflow-hidden">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: animated ? `${pct}%` : '0%',
                    background: `linear-gradient(90deg, ${from}, ${to})`,
                    boxShadow: animated ? `0 0 8px ${from}60` : 'none',
                    transitionDelay: `${i * 80}ms`,
                  }}
                />
              </div>
              {dim.description && (
                <p className="text-xs text-white/40 mt-1.5 leading-relaxed">{dim.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
