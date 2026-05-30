/**
 * SpectrumSlider — bipolar spectrum visualization (e.g. Introvert ←→ Extravert)
 * Props:
 *   spectra: [{ leftLabel, rightLabel, value (0-100), color?, description? }]
 *   title: string
 */
import React, { useEffect, useRef, useState } from 'react';

const COLORS = ['#818cf8','#34d399','#f59e0b','#f472b6','#60a5fa','#a78bfa'];

export default function SpectrumSlider({ spectra = [], title }) {
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

  if (!spectra.length) return null;

  return (
    <div ref={ref} className="glass rounded-2xl p-5 border border-white/8">
      {title && <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">{title}</p>}
      <div className="space-y-5">
        {spectra.map((s, i) => {
          const color = s.color || COLORS[i % COLORS.length];
          const pct = Math.min(100, Math.max(0, s.value ?? 50));
          return (
            <div key={s.leftLabel + s.rightLabel}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-medium text-white/80">{s.leftLabel}</span>
                <span className="text-xs font-medium text-white/80">{s.rightLabel}</span>
              </div>
              {/* Track */}
              <div className="relative h-3 rounded-full bg-white/[0.05] border border-white/[0.06] overflow-hidden">
                {/* Center marker */}
                <div className="absolute inset-y-0 left-1/2 w-px bg-white/15 z-10" />
                {/* Gradient fill from center */}
                <div
                  className="absolute inset-y-0 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    left: pct < 50 ? `${pct}%` : '50%',
                    right: pct > 50 ? `${100 - pct}%` : '50%',
                    background: color,
                    boxShadow: animated ? `0 0 8px ${color}60` : 'none',
                    transitionDelay: `${i * 100}ms`,
                    opacity: animated ? 1 : 0,
                  }}
                />
                {/* Thumb */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full border-2 transition-all duration-1000 ease-out z-20"
                  style={{
                    left: animated ? `calc(${pct}% - 8px)` : 'calc(50% - 8px)',
                    backgroundColor: color,
                    borderColor: '#0a0a1a',
                    boxShadow: `0 0 8px ${color}80`,
                    transitionDelay: `${i * 100}ms`,
                  }}
                />
              </div>
              {s.description && (
                <p className="text-[10px] text-white/35 mt-1.5 leading-relaxed">{s.description}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
