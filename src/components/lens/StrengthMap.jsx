/**
 * StrengthMap — bubble/tag cloud showing strengths vs blind spots
 * Props:
 *   strengths: string[]
 *   blindSpots: string[]
 *   growthAreas: string[]
 *   title?: string
 */
import React from 'react';
import { CheckCircle, EyeOff, TrendingUp } from 'lucide-react';

export default function StrengthMap({ strengths = [], blindSpots = [], growthAreas = [], title }) {
  const sections = [
    { label: 'Strengths',    items: strengths,   Icon: CheckCircle, color: '#34d399', bg: 'rgba(16,185,129,0.1)',  border: 'rgba(16,185,129,0.25)' },
    { label: 'Blind Spots',  items: blindSpots,  Icon: EyeOff,      color: '#f87171', bg: 'rgba(239,68,68,0.1)',   border: 'rgba(239,68,68,0.25)'  },
    { label: 'Growth Areas', items: growthAreas, Icon: TrendingUp,  color: '#fbbf24', bg: 'rgba(245,158,11,0.1)',  border: 'rgba(245,158,11,0.25)' },
  ].filter(s => s.items.length > 0);

  if (!sections.length) return null;

  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      {title && <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">{title}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {sections.map(({ label, items, Icon, color, bg, border }) => (
          <div key={label} className="rounded-xl p-4" style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${border}` }}>
            <div className="flex items-center gap-2 mb-3">
              <Icon size={13} style={{ color }} />
              <span className="text-xs font-semibold" style={{ color }}>{label}</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item, i) => (
                <span
                  key={i}
                  className="text-[10px] font-medium px-2 py-0.5 rounded-full"
                  style={{ background: bg, color, border: `1px solid ${border}` }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
