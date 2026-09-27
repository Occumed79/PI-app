import React, { useEffect, useMemo } from 'react';
import { AlertTriangle, X } from 'lucide-react';
import {
  deriveCanonicalLensProjection,
  projectionToNativeResult,
} from '../data/canonicalLensProjection.js';
import NativeLensVisual from './lens/NativeLensVisual.jsx';
import LensExplainerCard from './LensExplainerCard.jsx';

function glowVars(color = '#38bdf8') {
  return {
    '--glow-color': `${color}24`,
    '--glow-hover': `${color}66`,
    '--glow-solid': color,
  };
}

function FactorStrip({ profile }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {[
        ['D', 'Dominance', profile.dominance],
        ['E', 'Extraversion', profile.extraversion],
        ['P', 'Patience', profile.patience],
        ['F', 'Formality', profile.formality],
      ].map(([abbr, label, value]) => (
        <div key={label} className="pi-color-tile rounded-2xl border border-white/10 bg-black/25 p-4" style={glowVars(profile.color)}>
          <div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold text-white/45">{abbr}</span><span className="text-2xl font-bold text-white">{value}</span></div>
          <p className="mt-1 text-xs text-white/55">{label}</p>
          <div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="pi-luminous-bar h-full rounded-full" style={{ width: `${value}%`, background: profile.color, boxShadow: `0 0 14px ${profile.color}99` }}/></div>
        </div>
      ))}
    </div>
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

      <div className="pi-luminous-card relative z-10 flex h-full w-full max-w-6xl flex-col overflow-hidden bg-[#0b111d] shadow-2xl sm:h-auto sm:max-h-[calc(100vh-4rem)] sm:rounded-3xl sm:border sm:border-sky-300/20" style={glowVars('#38bdf8')}>
        <header className="sticky top-0 z-20 flex flex-shrink-0 items-start justify-between gap-4 border-b border-white/10 bg-[#0b111d]/95 px-4 py-4 backdrop-blur-xl sm:px-6 sm:py-5">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="rounded-full border border-sky-300/25 bg-sky-500/[0.12] px-2.5 py-1 text-xs font-semibold text-sky-100">Exact PI crosswalk</span>
              <span className="rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-1 text-xs text-white/60">{lens.category}</span>
              <span className="rounded-full border border-emerald-300/25 bg-emerald-500/[0.12] px-2.5 py-1 text-xs text-emerald-100">Native visual</span>
            </div>
            <h2 className="break-words text-xl font-bold leading-tight text-white sm:text-2xl">{lens.lens}</h2>
            <p className="mt-1 max-w-3xl text-sm leading-6 text-white/55">{lens.visualReason || lens.why}</p>
          </div>
          <button type="button" onClick={onClose} className="pi-luminous-control flex-shrink-0 rounded-xl border border-white/10 bg-white/[0.07] p-2.5 text-white/60 transition hover:bg-white/[0.12] hover:text-white" style={glowVars('#38bdf8')} aria-label="Close"><X size={18}/></button>
        </header>

        <div className="flex-1 space-y-5 overflow-y-auto p-4 sm:p-6">
          <section className="pi-luminous-card rounded-3xl border border-sky-300/25 bg-sky-500/[0.10] p-4 sm:p-5" style={glowVars('#38bdf8')}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/75">Translation chain</p>
            <p className="mt-2 text-sm leading-6 text-white/75">{profile.name} completed PI profile → exact D/E/P/F pattern → native {lens.visualLabel?.toLowerCase() || 'visual'}.</p>
            <p className="mt-2 text-xs leading-5 text-white/45">The explainer and visual use the same exact PI projection. No separate framework score is implied.</p>
          </section>

          <LensExplainerCard lens={lens} projection={projection}/>
          <NativeLensVisual lens={lens} result={result}/>

          <section className="pi-luminous-card rounded-3xl border border-white/10 bg-white/[0.055] p-4 sm:p-5" style={glowVars(profile.color)}>
            <div className="mb-4 flex items-center gap-2"><span className="h-3 w-3 rounded-full" style={{ background: profile.color, boxShadow: `0 0 12px ${profile.color}` }}/><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Source PI profile</p><p className="text-sm font-semibold text-white">{profile.name} · {profile.tagline}</p></div></div>
            <FactorStrip profile={profile}/>
          </section>

          <section className="pi-luminous-card rounded-3xl border border-amber-300/20 bg-amber-500/[0.09] p-4 text-sm leading-6 text-white/70 sm:p-5" style={glowVars('#f59e0b')}>
            <div className="mb-2 flex items-center gap-2 font-semibold text-amber-100"><AlertTriangle size={16}/> Interpretation boundary</div>
            {projection.boundary}
          </section>
        </div>
      </div>
    </div>
  );
}
