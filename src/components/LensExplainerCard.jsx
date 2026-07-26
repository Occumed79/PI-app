import React from 'react';
import { BookOpen, Eye, Lightbulb, ShieldAlert, Waypoints } from 'lucide-react';
import { getLensExplainer } from '../data/lensExplainers.js';

const ITEMS = [
  ['whatItIs', 'What this lens is', BookOpen, 'text-sky-200 border-sky-300/15 bg-sky-500/[0.06]'],
  ['whatItShows', 'What it shows', Eye, 'text-indigo-200 border-indigo-300/15 bg-indigo-500/[0.06]'],
  ['howToRead', 'How to read it', Waypoints, 'text-fuchsia-200 border-fuchsia-300/15 bg-fuchsia-500/[0.06]'],
  ['bestUse', 'Best use', Lightbulb, 'text-emerald-200 border-emerald-300/15 bg-emerald-500/[0.06]'],
  ['boundary', 'Interpretation boundary', ShieldAlert, 'text-amber-200 border-amber-300/15 bg-amber-500/[0.06]'],
];

export default function LensExplainerCard({ lens, projection, compact = false }) {
  if (!lens) return null;
  const explainer = getLensExplainer(lens, projection);

  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.045] p-4 shadow-xl shadow-black/15 backdrop-blur-xl sm:p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/70">Lens explainer</p>
          <h3 className="mt-1 text-lg font-semibold text-white">How to understand {lens.lens}</h3>
        </div>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/50">
          {lens.visualLabel || 'Native visual'}
        </span>
      </div>

      <div className={compact ? 'grid gap-3 md:grid-cols-2' : 'grid gap-3 lg:grid-cols-2'}>
        {ITEMS.map(([key, label, Icon, style], index) => (
          <article
            key={key}
            className={`rounded-2xl border p-4 ${style} ${!compact && index === ITEMS.length - 1 ? 'lg:col-span-2' : ''}`}
          >
            <div className="flex items-center gap-2">
              <Icon size={15} className="flex-shrink-0" />
              <p className="text-xs font-semibold uppercase tracking-[0.14em]">{label}</p>
            </div>
            <p className="mt-2 text-sm leading-6 text-white/70">{explainer[key]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
