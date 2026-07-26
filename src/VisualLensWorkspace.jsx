import React, { useEffect, useMemo, useState } from 'react';
import {
  Brain,
  BrainCircuit,
  Gauge,
  Layers3,
  Menu,
  Network,
  Search,
  Sparkles,
  Target,
  Users,
  X,
} from 'lucide-react';
import { PI_PROFILES } from './data/profiles.js';
import { signalGlassStaticLenses } from './data/signalGlassStaticLenses.js';
import { getCanonicalSignalGlassLenses } from './data/lensVisualRegistry.js';
import {
  deriveCanonicalLensProjection,
  projectionToNativeResult,
} from './data/canonicalLensProjection.js';
import NativeLensVisual from './components/lens/NativeLensVisual.jsx';
import LensExplainerCard from './components/LensExplainerCard.jsx';
import LensDetailModal from './components/LensDetailModal.jsx';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CANONICAL_LENSES = getCanonicalSignalGlassLenses(signalGlassStaticLenses);

const CATEGORY_META = {
  Personality: { Icon: Brain, classes: 'border-indigo-300/20 bg-indigo-500/[0.08] text-indigo-200' },
  Cognitive: { Icon: BrainCircuit, classes: 'border-sky-300/20 bg-sky-500/[0.08] text-sky-200' },
  Emotional: { Icon: Sparkles, classes: 'border-pink-300/20 bg-pink-500/[0.08] text-pink-200' },
  Motivation: { Icon: Sparkles, classes: 'border-emerald-300/20 bg-emerald-500/[0.08] text-emerald-200' },
  Team: { Icon: Users, classes: 'border-orange-300/20 bg-orange-500/[0.08] text-orange-200' },
  Leadership: { Icon: Target, classes: 'border-yellow-300/20 bg-yellow-500/[0.08] text-yellow-200' },
  Wellbeing: { Icon: Gauge, classes: 'border-purple-300/20 bg-purple-500/[0.08] text-purple-200' },
  Neurodiversity: { Icon: BrainCircuit, classes: 'border-lime-300/20 bg-lime-500/[0.08] text-lime-200' },
  Interpersonal: { Icon: Network, classes: 'border-teal-300/20 bg-teal-500/[0.08] text-teal-200' },
  Other: { Icon: Layers3, classes: 'border-slate-300/20 bg-slate-500/[0.08] text-slate-200' },
};

function categoryMeta(category) {
  return CATEGORY_META[category] || CATEGORY_META.Other;
}

function GlassCard({ children, className = '' }) {
  return <section className={cx('rounded-3xl border border-white/10 bg-white/[0.045] shadow-xl shadow-black/15 backdrop-blur-xl', className)}>{children}</section>;
}

function ProfileSelector({ profile, onChange, compact = false }) {
  return (
    <div className={cx('flex items-center gap-3', compact && 'min-w-0')}>
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg font-black text-slate-950" style={{ background: profile.color }}>
        {profile.name[0]}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40">Source PI profile</p>
        <select
          value={profile.id}
          onChange={event => onChange(PI_PROFILES.find(item => item.id === event.target.value) || PI_PROFILES[0])}
          className="mt-0.5 w-full cursor-pointer bg-transparent text-sm font-semibold text-white outline-none"
        >
          {PI_PROFILES.map(item => <option key={item.id} value={item.id} style={{ background: '#0f172a' }}>{item.name} — {item.tagline}</option>)}
        </select>
      </div>
    </div>
  );
}

function LensSidebar({ lenses, activeLens, onSelect, query, setQuery }) {
  const grouped = useMemo(() => lenses.reduce((groups, lens) => {
    const category = lens.category || 'Other';
    if (!groups[category]) groups[category] = [];
    groups[category].push(lens);
    return groups;
  }, {}), [lenses]);

  return (
    <aside className="hidden h-[calc(100vh-2rem)] min-h-[620px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#090d1d]/80 backdrop-blur-xl lg:sticky lg:top-4 lg:flex">
      <div className="border-b border-white/[0.08] px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/65">Canonical lens library</p>
        <p className="mt-1 text-lg font-bold text-white">{CANONICAL_LENSES.length} cleaned lenses</p>
        <p className="mt-1 text-xs leading-5 text-white/40">Duplicates are merged before display and visual routing.</p>
      </div>
      <div className="border-b border-white/[0.08] p-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5">
          <Search size={15} className="flex-shrink-0 text-white/35" />
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search lenses…" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30" />
          {query && <button type="button" onClick={() => setQuery('')} className="text-white/35 hover:text-white" aria-label="Clear search"><X size={14}/></button>}
        </div>
      </div>
      <div className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
        {Object.entries(grouped).map(([category, items]) => {
          const { Icon, classes } = categoryMeta(category);
          return (
            <div key={category}>
              <div className="mb-2 flex items-center gap-2 px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/40"><Icon size={12}/>{category} · {items.length}</div>
              <div className="space-y-1">
                {items.map(lens => (
                  <button
                    key={lens.id}
                    type="button"
                    onClick={() => onSelect(lens)}
                    className={cx('w-full rounded-xl border px-3 py-2.5 text-left text-sm leading-5 transition', activeLens?.id === lens.id ? classes : 'border-transparent text-white/55 hover:border-white/10 hover:bg-white/[0.05] hover:text-white')}
                  >
                    <span className="block">{lens.lens}</span>
                    {lens.duplicateCount > 1 && <span className="mt-1 block text-[10px] text-sky-200/55">Merged {lens.duplicateCount} source entries</span>}
                  </button>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function MobileLensControl({ lenses, activeLens, onSelect, query, setQuery }) {
  const [open, setOpen] = useState(false);
  return (
    <GlassCard className="p-3 lg:hidden">
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setOpen(value => !value)} className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5 text-white/70" aria-label="Open lens navigation"><Menu size={18}/></button>
        <div className="min-w-0 flex-1"><p className="text-[10px] uppercase tracking-[0.16em] text-white/35">Current lens</p><p className="truncate text-sm font-semibold text-white">{activeLens.lens}</p></div>
        <span className="rounded-full border border-white/10 bg-white/[0.05] px-2.5 py-1 text-xs text-white/45">{lenses.length}</span>
      </div>
      {open && (
        <div className="mt-3 border-t border-white/[0.08] pt-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2.5"><Search size={14} className="text-white/35"/><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search lenses…" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"/></div>
          <div className="mt-3 max-h-[55vh] space-y-1 overflow-y-auto pr-1">
            {lenses.map(lens => <button key={lens.id} type="button" onClick={() => { onSelect(lens); setOpen(false); }} className={cx('w-full rounded-xl border px-3 py-2.5 text-left text-sm', activeLens.id === lens.id ? 'border-sky-300/25 bg-sky-500/[0.10] text-white' : 'border-white/[0.06] bg-white/[0.025] text-white/60')}>{lens.lens}</button>)}
          </div>
        </div>
      )}
    </GlassCard>
  );
}

function ProjectionSummary({ projection }) {
  return (
    <GlassCard className="p-4 sm:p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/65">Exact PI projection</p><p className="mt-1 text-sm leading-6 text-white/55">{projection.summary}</p></div>
        <span className="rounded-full border border-sky-300/20 bg-sky-500/[0.08] px-3 py-1 text-xs text-sky-100">{projection.dimensions.length} dimensions</span>
      </div>
      <div className="grid gap-3 md:grid-cols-2">
        {projection.dimensions.map(item => (
          <div key={item.label} className="rounded-2xl border border-white/10 bg-black/20 p-3.5">
            <div className="flex items-start justify-between gap-3"><span className="text-sm font-medium leading-5 text-white/75">{item.label}</span><span className="text-sm font-bold text-white">{item.value}</span></div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-sky-400" style={{ width: `${item.value}%` }}/></div>
            <p className="mt-2 text-[11px] leading-5 text-white/40">{item.basis}</p>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

function FactorGrid({ profile }) {
  return (
    <GlassCard className="p-4 sm:p-5">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/40">Source PI factor scores</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ['D', 'Dominance', profile.dominance],
          ['E', 'Extraversion', profile.extraversion],
          ['P', 'Patience', profile.patience],
          ['F', 'Formality', profile.formality],
        ].map(([abbr, label, value]) => (
          <div key={label} className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between"><span className="text-xs font-semibold text-white/40">{abbr}</span><span className="text-2xl font-bold text-white">{value}</span></div>
            <p className="mt-1 text-xs text-white/50">{label}</p>
            <div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${value}%`, background: profile.color }}/></div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default function VisualLensWorkspace() {
  const [activeLens, setActiveLens] = useState(CANONICAL_LENSES[0]);
  const [profile, setProfile] = useState(PI_PROFILES[0]);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);

  const categories = useMemo(() => ['All', ...new Set(CANONICAL_LENSES.map(lens => lens.category || 'Other'))], []);
  const filteredLenses = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return CANONICAL_LENSES.filter(lens => {
      const matchesCategory = activeCategory === 'All' || lens.category === activeCategory;
      const haystack = `${lens.lens} ${lens.category} ${lens.visualLabel} ${lens.visualReason} ${(lens.duplicateSourceNames || []).join(' ')}`.toLowerCase();
      return matchesCategory && (!normalized || haystack.includes(normalized));
    });
  }, [query, activeCategory]);

  useEffect(() => {
    if (!filteredLenses.some(lens => lens.id === activeLens.id) && filteredLenses[0]) setActiveLens(filteredLenses[0]);
  }, [filteredLenses, activeLens.id]);

  const projection = useMemo(() => deriveCanonicalLensProjection(activeLens, profile), [activeLens, profile]);
  const nativeResult = useMemo(() => projectionToNativeResult(activeLens, projection), [activeLens, projection]);
  const meta = categoryMeta(activeLens.category);

  return (
    <div className="space-y-4 text-white">
      <MobileLensControl lenses={filteredLenses} activeLens={activeLens} onSelect={setActiveLens} query={query} setQuery={setQuery}/>

      <div className="flex gap-2 overflow-x-auto pb-1 lg:pl-[21rem]">
        {categories.map(category => {
          const count = category === 'All' ? CANONICAL_LENSES.length : CANONICAL_LENSES.filter(lens => lens.category === category).length;
          return <button key={category} type="button" onClick={() => setActiveCategory(category)} className={cx('flex-shrink-0 rounded-full border px-3 py-1.5 text-xs transition', activeCategory === category ? 'border-white/20 bg-white/[0.12] text-white' : 'border-white/10 bg-white/[0.035] text-white/50 hover:text-white')}>{category} <span className="ml-1 opacity-50">{count}</span></button>;
        })}
      </div>

      <div className="grid gap-5 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <LensSidebar lenses={filteredLenses} activeLens={activeLens} onSelect={setActiveLens} query={query} setQuery={setQuery}/>

        <main className="min-w-0 space-y-5">
          <GlassCard className="overflow-hidden p-5 sm:p-6">
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div className="min-w-0 flex-1">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className={cx('rounded-full border px-3 py-1 text-xs font-semibold', meta.classes)}>{activeLens.category}</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-white/50">{activeLens.visualLabel}</span>
                  <span className="rounded-full border border-emerald-300/20 bg-emerald-500/[0.08] px-3 py-1 text-xs text-emerald-200">Canonical native visual</span>
                </div>
                <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">{activeLens.lens}</h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/55">{activeLens.visualReason || activeLens.why}</p>
                {activeLens.duplicateCount > 1 && <p className="mt-2 text-xs text-sky-200/55">Merged from {activeLens.duplicateCount} duplicate source records.</p>}
              </div>
              <div className="w-full rounded-2xl border border-white/10 bg-black/20 p-4 xl:w-[21rem]"><ProfileSelector profile={profile} onChange={setProfile}/></div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 border-t border-white/[0.08] pt-4">
              <button type="button" onClick={() => setShowModal(true)} className="rounded-xl border border-sky-300/25 bg-sky-500/[0.10] px-4 py-2.5 text-sm font-semibold text-sky-100 hover:bg-sky-500/[0.16]">Open full lens detail</button>
              <span className="self-center text-xs text-white/40">Visual, explainer, and dimensions all use the same exact PI projection.</span>
            </div>
          </GlassCard>

          <LensExplainerCard lens={activeLens} projection={projection}/>
          <NativeLensVisual lens={activeLens} result={nativeResult}/>
          <ProjectionSummary projection={projection}/>
          <FactorGrid profile={profile}/>
        </main>
      </div>

      {showModal && <LensDetailModal lens={activeLens} profile={profile} onClose={() => setShowModal(false)}/>} 
    </div>
  );
}
