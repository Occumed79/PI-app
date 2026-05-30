/**
 * InsightCards — glassy highlight cards for key takeaways
 * Props:
 *   cards: [{ icon?: string, title, text, color? }]
 *   columns: 2 | 3 (default 3)
 */
import React from 'react';
import {
  Lightbulb, AlertTriangle, CheckCircle, Target, Users, Brain,
  Flame, Shield, Eye, Zap, Heart, Star, BookOpen, TrendingUp, Clock
} from 'lucide-react';

const ICON_MAP = {
  lightbulb: Lightbulb, alert: AlertTriangle, check: CheckCircle,
  target: Target, users: Users, brain: Brain, flame: Flame,
  shield: Shield, eye: Eye, zap: Zap, heart: Heart, star: Star,
  book: BookOpen, trending: TrendingUp, clock: Clock,
};

const COLOR_PAIRS = [
  { text: '#818cf8', bg: 'rgba(99,102,241,0.1)',  border: 'rgba(99,102,241,0.2)'  },
  { text: '#34d399', bg: 'rgba(16,185,129,0.1)', border: 'rgba(16,185,129,0.2)'  },
  { text: '#fbbf24', bg: 'rgba(245,158,11,0.1)', border: 'rgba(245,158,11,0.2)'  },
  { text: '#f472b6', bg: 'rgba(236,72,153,0.1)', border: 'rgba(236,72,153,0.2)'  },
  { text: '#60a5fa', bg: 'rgba(59,130,246,0.1)', border: 'rgba(59,130,246,0.2)'  },
  { text: '#a78bfa', bg: 'rgba(139,92,246,0.1)', border: 'rgba(139,92,246,0.2)'  },
];

export default function InsightCards({ cards = [], columns = 3, title }) {
  if (!cards.length) return null;

  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      {title && <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-4">{title}</p>}
      <div className={`grid gap-3 ${columns === 2 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1 sm:grid-cols-2 xl:grid-cols-3'}`}>
        {cards.map((card, i) => {
          const palette = COLOR_PAIRS[i % COLOR_PAIRS.length];
          const Icon = ICON_MAP[card.icon] || Lightbulb;
          return (
            <div
              key={i}
              className="rounded-xl p-4 border transition-all duration-200 hover:scale-[1.02]"
              style={{ background: palette.bg, borderColor: palette.border }}
            >
              <div className="flex items-center gap-2 mb-2">
                <Icon size={13} style={{ color: palette.text }} />
                <span className="text-xs font-semibold" style={{ color: palette.text }}>{card.title}</span>
              </div>
              <p className="text-xs text-white/65 leading-relaxed">{card.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
