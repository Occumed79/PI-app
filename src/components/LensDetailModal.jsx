import React, { useEffect, useMemo } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import {
  deriveCanonicalLensProjection,
  projectionToNativeResult,
} from '../data/canonicalLensProjection.js';
import NativeLensVisual from './lens/NativeLensVisual.jsx';
import LensExplainerCard from './LensExplainerCard.jsx';

function FactorStrip({ profile }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        ['D', 'Dominance', profile.dominance],
        ['E', 'Extraversion', profile.extraversion],
        ['P', 'Patience', profile.patience],
        ['F', 'Formality', profile.formality],
      ].map(([abbr, label, value]) => (
        <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold text-white/40">{abbr}</span><span className="text-2xl font-bold text-white">{value}</span></div>
          <p className="mt-1 text-xs text-white/50">{label}</p>
          <div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${value}%`, background: profile.color }}/></div>
        </div>
      ))}
    </div>
  );
}

function ProjectionDimensions({ projection }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/65">PI-derived lens dimensions</p><p className="mt-1 text-sm leading-6 text-white/50">Each score below comes from the selected profile’s exact D/E/P/F pattern.</p></div>
        <span className="rounded-full border border-sky-300/20 bg-sky-500/[0.08] px-3 py-1 text-xs text-sky-100">{projection.dimensions.length} dimensions</span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {projection.dimensions.map(item => (
          <article key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-3.5">
            <div className="flex items-start justify-between gap-3"><span className="text-sm font-medium leading-5 text-white/75">{item.label}</span><span className="text-sm font-bold text-white">{item.value}</span></div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-sky-400" style={{ width: `${item.value}%` }}/></div>
            <p className="mt-2 text-[11px] leading-5 text-white/40">{item.basis}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function LensDetailModal({ lens, profile, onClose }) {
  const projection = useMemo(() => deriveCanonicalLensProjection(lens, profile), [lens, profile]);
  const result = useMemo(() => projectionToNativeResult(lens, projection), [lens, projection]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    function onKeyDown(event) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [onClose]);

  if (!lens || !profile) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/85 backdrop-blur-md sm:items-start sm:overflow-y-auto sm:p-4 sm:py-8" role="dialog" aria-modal="true" aria-label={`${lens.lens} crosswalk detail`}>
      <button type="button" className="absolute inset-0" onClick={onClose} aria-label="Close lens detail" />

      <div className="relative z-10 flex h-full w-full max-w-6xl flex-col overflow-hidden bg-[#0b111d] shadow-2xl sm:h-auto sm:max-h-[calc(100vh-4rem)] sm:rounded-3xl sm:border sm:border-white/15">
        <header className="sticky top-0 z-20 flex flex-shrink-0 items-start justify-between gap-4 border-b border-white/10 bg-[#0b111d]/95 px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="rounded-full border border-sky-300/20 bg-sky-500/[0.08] px-2.5 py-1 text-xs font-semibold text-sky-100">Exact PI crosswalk</span>
              <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs text-white/50">{lens.category}</span>
              <span className="rounded-full border border-emerald-300/20 bg-emerald-500/[0.08] px-2.5 py-1 text-xs text-emerald-200">Native visual</span>
            </div>
            <h2 className="text-xl font-bold leading-tight text-white sm:text-2xl">{lens.lens}</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-white/50">{lens.visualReason || lens.why}</p>
          </div>
          <button type="button" onClick={onClose} className="flex-shrink-0 rounded-xl border border-white/10 bg-white/[0.05] p-2.5 text-white/55 transition hover:bg-white/[0.10] hover:text-white" aria-label="Close"><X size={18}/></button>
        </header>

        <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-6">
          <section className="rounded-3xl border border-sky-300/20 bg-sky-500/[0.07] p-4 sm:p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/65">Translation chain</p>
            <p className="mt-2 text-sm leading-6 text-white/70">{profile.name} completed PI profile → exact D/E/P/F pattern → {lens.lens} dimensions → native {lens.visualLabel?.toLowerCase() || 'visual'}.</p>
            <p className="mt-2 text-xs leading-5 text-white/40">The explainer, visual, and dimension list all use this same projection. No separate framework score is implied.</p>
          </section>

          <LensExplainerCard lens={lens} projection={projection}/>
          <NativeLensVisual lens={lens} result={result}/>
          <ProjectionDimensions projection={projection}/>

          <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
            <div className="mb-4 flex items-center gap-2"><span className="h-3 w-3 rounded-full" style={{ background: profile.color }}/><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Source PI profile</p><p className="text-sm font-semibold text-white">{profile.name} · {profile.tagline}</p></div></div>
            <FactorStrip profile={profile}/>
          </section>

          <section className="rounded-3xl border border-amber-300/15 bg-amber-500/[0.06] p-4 text-sm leading-6 text-white/65 sm:p-5">
            <div className="mb-2 flex items-center gap-2 font-semibold text-amber-200"><AlertTriangle size={16}/> Interpretation boundary</div>
            {projection.boundary}
          </section>
        </div>
      </div>
    </div>
  );
}
