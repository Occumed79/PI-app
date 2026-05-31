/**
 * ProfileScoreMatrix — compact grid showing all 17 profiles vs a set of dimensions
 * Props:
 *   profiles: [{ name, scores: { [dimensionKey]: number|string } }]
 *   dimensions: [{ key, label, description? }]
 *   title: string
 *
 * Scores can be 0-100 numbers OR level strings ('Low', 'High', etc.)
 */
import React, { useState } from 'react';

const LEVEL_TO_NUM = {
  'Very Low': 8, 'Low': 22, 'Low-Moderate': 38, 'Moderate': 55,
  'Moderate-High': 68, 'High': 80, 'Very High': 96,
};

function toNum(v) {
  if (typeof v === 'number') return v;
  return LEVEL_TO_NUM[v] ?? 50;
}

function heatColor(pct) {
  if (pct >= 80) return { bg: 'rgba(99,102,241,0.35)', text: '#a5b4fc' };
  if (pct >= 60) return { bg: 'rgba(59,130,246,0.25)', text: '#93c5fd' };
  if (pct >= 40) return { bg: 'rgba(16,185,129,0.2)',  text: '#6ee7b7' };
  if (pct >= 20) return { bg: 'rgba(245,158,11,0.2)',  text: '#fcd34d' };
  return               { bg: 'rgba(239,68,68,0.15)',  text: '#fca5a5' };
}

export default function ProfileScoreMatrix({ profiles = [], dimensions = [], title }) {
  const [hoveredRow, setHoveredRow] = useState(null);
  const [hoveredCol, setHoveredCol] = useState(null);

  if (!profiles.length || !dimensions.length) return null;

  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      {title && (
        <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">{title}</p>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-xs border-collapse">
          <thead>
            <tr>
              <th className="text-left py-2 pr-3 text-white/40 font-medium min-w-[110px]">Profile</th>
              {dimensions.map((d, ci) => (
                <th
                  key={d.key}
                  className="text-center py-2 px-2 font-medium cursor-pointer select-none transition-colors"
                  style={{ color: hoveredCol === ci ? '#a5b4fc' : 'rgba(255,255,255,0.45)' }}
                  title={d.description}
                  onMouseEnter={() => setHoveredCol(ci)}
                  onMouseLeave={() => setHoveredCol(null)}
                >
                  <span className="writing-mode-vertical">{d.label}</span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {profiles.map((p, ri) => (
              <tr
                key={p.name}
                className="transition-all duration-150 cursor-pointer"
                style={{ background: hoveredRow === ri ? 'rgba(255,255,255,0.04)' : 'transparent' }}
                onMouseEnter={() => setHoveredRow(ri)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td className="py-1.5 pr-3 font-medium text-white/80 whitespace-nowrap">{p.name}</td>
                {dimensions.map((d, ci) => {
                  const raw = p.scores?.[d.key];
                  const num = toNum(raw);
                  const { bg, text } = heatColor(num);
                  const isActive = hoveredRow === ri || hoveredCol === ci;
                  return (
                    <td key={d.key} className="py-1.5 px-1 text-center">
                      <div
                        className="rounded-md px-1.5 py-0.5 text-[10px] font-semibold transition-all duration-200 mx-auto w-fit"
                        style={{
                          background: isActive ? bg : 'rgba(255,255,255,0.04)',
                          color: isActive ? text : 'rgba(255,255,255,0.3)',
                          border: `1px solid ${isActive ? bg : 'transparent'}`,
                          minWidth: 28,
                        }}
                      >
                        {typeof raw === 'string' && raw.length <= 10 ? raw : num}
                      </div>
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
