/**
 * ProfileCompare — side-by-side dimension comparison for 2 selected profiles
 * Props:
 *   profiles: all PI_PROFILES
 *   getDimensions: (profileId) => [{ label, value }]
 *   dimensionLabels: [string]
 */
import React, { useState } from 'react';

const GRAD = [
  ['#6366f1','#818cf8'],
  ['#34d399','#10b981'],
  ['#f59e0b','#fbbf24'],
  ['#f472b6','#ec4899'],
  ['#60a5fa','#38bdf8'],
  ['#a78bfa','#8b5cf6'],
];

const LEVEL_MAP = {
  'Very Low':8,'Low':22,'Low-Moderate':38,'Moderate':55,
  'Moderate-High':68,'High':80,'Very High':94,
};
function toPct(v) {
  if (typeof v === 'number') return Math.min(100, Math.max(0, v));
  return LEVEL_MAP[v] ?? 55;
}

export default function ProfileCompare({ profiles = [], getDimensions, dimensionLabels = [] }) {
  const [a, setA] = useState(profiles[0]?.id || '');
  const [b, setB] = useState(profiles[1]?.id || '');

  const profA = profiles.find(p => p.id === a);
  const profB = profiles.find(p => p.id === b);
  const dimsA = getDimensions?.(a) || [];
  const dimsB = getDimensions?.(b) || [];

  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Profile Comparison</p>

      {/* Selectors */}
      <div className="grid grid-cols-2 gap-3 mb-5">
        {[{ val: a, set: setA, prof: profA }, { val: b, set: setB, prof: profB }].map((side, si) => (
          <div key={si}>
            <label className="text-[10px] text-white/35 uppercase tracking-wide block mb-1">
              Profile {si + 1}
            </label>
            <select
              value={side.val}
              onChange={e => side.set(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-white outline-none focus:border-indigo-400/40 appearance-none"
              style={{ backgroundImage: 'none' }}
            >
              {profiles.map(p => (
                <option key={p.id} value={p.id} style={{ background: '#0f172a' }}>{p.name}</option>
              ))}
            </select>
          </div>
        ))}
      </div>

      {/* Bars */}
      {dimsA.length > 0 && dimsB.length > 0 && (
        <div className="space-y-4">
          {dimsA.map((dim, i) => {
            const pctA = toPct(dim.value);
            const pctB = toPct(dimsB[i]?.value ?? 0);
            const [fromA] = GRAD[i % GRAD.length];
            const [fromB] = GRAD[(i + 2) % GRAD.length];
            return (
              <div key={dim.label}>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-white/60">{dim.label}</span>
                </div>
                {/* Profile A bar */}
                <div className="flex items-center gap-2 mb-1">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: profA?.color || fromA }}
                  />
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700"
                      style={{ width: `${pctA}%`, backgroundColor: profA?.color || fromA }}
                    />
                  </div>
                  <span className="text-[10px] text-white/40 w-6 text-right">{pctA}</span>
                </div>
                {/* Profile B bar */}
                <div className="flex items-center gap-2">
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ backgroundColor: profB?.color || fromB }}
                  />
                  <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-700 transition-delay-100"
                      style={{ width: `${pctB}%`, backgroundColor: profB?.color || fromB }}
                    />
                  </div>
                  <span className="text-[10px] text-white/40 w-6 text-right">{pctB}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Legend */}
      <div className="flex items-center gap-4 mt-4 pt-3 border-t border-white/5">
        {[profA, profB].filter(Boolean).map((p, i) => (
          <div key={p.id} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ backgroundColor: p.color }} />
            <span className="text-[10px] text-white/50">{p.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
