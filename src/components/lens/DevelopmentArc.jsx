/**
 * DevelopmentArc — visual path: Natural Style → Under Stress → Growth Edge
 * Props:
 *   natural: string
 *   stress: string
 *   growth: string
 *   color: string (profile color)
 */
import React from 'react';
import { ArrowRight, Zap, TrendingUp, User } from 'lucide-react';

export default function DevelopmentArc({ natural, stress, growth, color = '#818cf8' }) {
  if (!natural && !stress && !growth) return null;

  const stages = [
    { icon: User,       label: 'Natural Style',  text: natural, color: color,    bg: `${color}18`, border: `${color}40` },
    { icon: Zap,        label: 'Under Stress',   text: stress,  color: '#f87171', bg: 'rgba(239,68,68,0.1)', border: 'rgba(239,68,68,0.3)' },
    { icon: TrendingUp, label: 'Growth Edge',    text: growth,  color: '#34d399', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.3)' },
  ];

  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">Development Arc</p>
      <div className="flex flex-col sm:flex-row items-stretch gap-2">
        {stages.map((stage, i) => {
          const Icon = stage.icon;
          return (
            <React.Fragment key={stage.label}>
              <div
                className="flex-1 rounded-xl p-4 border transition-all duration-200 hover:scale-[1.02]"
                style={{ background: stage.bg, borderColor: stage.border }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={13} style={{ color: stage.color }} />
                  <span className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: stage.color }}>
                    {stage.label}
                  </span>
                </div>
                <p className="text-xs text-white/75 leading-relaxed">{stage.text}</p>
              </div>
              {i < stages.length - 1 && (
                <div className="flex items-center justify-center sm:flex-col">
                  <ArrowRight size={14} className="text-white/20 sm:rotate-90 sm:my-1" />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}
