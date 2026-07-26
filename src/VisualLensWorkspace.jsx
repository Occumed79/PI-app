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
import { DISPLAY_LENSES } from './data/displayLensRegistry.js';
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

function glowVars(color = '#38bdf8') {
  return {
    '--glow-color': `${color}24`,
    '--glow-hover': `${color}66`,
    '--glow-solid': color,
  };
}

const CATEGORY_META = {
  Personality: { Icon: Brain, color: '#818cf8', classes: 'border-indigo-300/30 bg-indigo-500/[0.13] text-indigo-100' },
  Cognitive: { Icon: BrainCircuit, color: '#38bdf8', classes: 'border-sky-300/30 bg-sky-500/[0.13] text-sky-100' },
  Emotional: { Icon: Sparkles, color: '#f472b6', classes: 'border-pink-300/30 bg-pink-500/[0.13] text-pink-100' },
  Motivation: { Icon: Sparkles, color: '#34d399', classes: 'border-emerald-300/30 bg-emerald-500/[0.13] text-emerald-100' },
  Team: { Icon: Users, color: '#fb923c', classes: 'border-orange-300/30 bg-orange-500/[0.13] text-orange-100' },
  Leadership: { Icon: Target, color: '#facc15', classes: 'border-yellow-300/30 bg-yellow-500/[0.13] text-yellow-100' },
  Wellbeing: { Icon: Gauge, color: '#a78bfa', classes: 'border-purple-300/30 bg-purple-500/[0.13] text-purple-100' },
  Neurodiversity: { Icon: BrainCircuit, color: '#a3e635', classes: 'border-lime-300/30 bg-lime-500/[0.13] text-lime-100' },
  Interpersonal: { Icon: Network, color: '#2dd4bf', classes: 'border-teal-300/30 bg-teal-500/[0.13] text-teal-100' },
  Other: { Icon: Layers3, color: '#94a3b8', classes: 'border-slate-300/30 bg-slate-500/[0.13] text-slate-100' },
};

function categoryMeta(category) {
  return CATEGORY_META[category] || CATEGORY_META.Other;
}

function GlassCard({ children, className = '', glow = '#38bdf8' }) {
  return (
    <section
      className={cx('pi-luminous-card rounded-3xl border border-white/10 bg-white/[0.05] shadow-xl shadow-black/15 backdrop-blur-xl', className)}
      style={glowVars(glow)}
    >
      {children}
    </section>
  );
}

function ProfileSelector({ profile, onChange, compact = false }) {
  return (
    <div className={cx('flex items-center gap-3', compact && 'min-w-0')}>
      <div
        className="pi-color-tile flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-lg font-black text-slate-950"
        style={{ background: profile.color, ...glowVars(profile.color) }}
      >
        {profile.name[0]}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45">Source PI profile</p>
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
    <aside className="pi-luminous-card hidden h-[calc(100vh-2rem)] min-h-[620px] flex-col overflow-hidden rounded-3xl border border-sky-300/15 bg-[#090d1d]/88 backdrop-blur-xl lg:sticky lg:top-4 lg:flex" style={glowVars('#38bdf8')}>
      <div className="border-b border-white/[0.08] px-5 py-4">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/75">Complete lens library</p>
        <p className="mt-1 text-lg font-bold text-white">{DISPLAY_LENSES.length} source lenses</p>
        <p className="mt-1 text-xs leading-5 text-white/45">Every source entry remains visible. Related entries share a verified native visual family underneath.</p>
      </div>
      <div className="border-b border-white/[0.08] p-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2.5">
          <Search size={15} className="flex-shrink-0 text-white/40" />
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search lenses…" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30" />
          {query && <button type="button" onClick={() => setQuery('')} className="text-white/40 hover:text-white" aria-label="Clear search"><X size={14}/></button>}
        </div>
      </div>
      <div className="flex-1 space-y-5 overflow-y-auto px-3 py-4">
        {Object.entries(grouped).map(([category, items]) => {
          const { Icon, color, classes } = categoryMeta(category);
          return (
            <div key={category}>
              <div className="mb-2 flex items-center gap-2 px-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/45"><Icon size={12}/>{category} · {items.length}</div>
              <div className="space-y-1">
                {items.map(lens => (
                  <button
                    key={lens.id}
                    type="button"
                    onClick={() => onSelect(lens)}
                    style={glowVars(color)}
                    className={cx(
                      'pi-luminous-control w-full rounded-xl border px-3 py-2.5 text-left text-sm leading-5 transition',
                      activeLens?.id === lens.id
                        ? classes
                        : 'border-transparent text-white/60 hover:border-white/15 hover:bg-white/[0.07] hover:text-white'
                    )}
                  >
                    <span className="block break-words">{lens.lens}</span>
                    {lens.canonicalLens !== lens.lens && <span className="mt-1 block text-[10px] text-white/35">Visual family: {lens.canonicalLens}</span>}
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
  const meta = categoryMeta(activeLens.category);
  return (
    <GlassCard className="p-3 lg:hidden" glow={meta.color}>
      <div className="flex items-center gap-3">
        <button type="button" onClick={() => setOpen(value => !value)} className="rounded-xl border border-white/10 bg-white/[0.07] p-2.5 text-white/75" aria-label="Open lens navigation"><Menu size={18}/></button>
        <div className="min-w-0 flex-1"><p className="text-[10px] uppercase tracking-[0.16em] text-white/40">Current lens</p><p className="break-words text-sm font-semibold text-white">{activeLens.lens}</p></div>
        <span className="rounded-full border border-white/10 bg-white/[0.07] px-2.5 py-1 text-xs text-white/55">{lenses.length}</span>
      </div>
      {open && (
        <div className="mt-3 border-t border-white/[0.08] pt-3">
          <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-black/25 px-3 py-2.5"><Search size={14} className="text-white/40"/><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search lenses…" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/30"/></div>
          <div className="mt-3 max-h-[55vh] space-y-1 overflow-y-auto pr-1">
            {lenses.map(lens => {
              const itemMeta = categoryMeta(lens.category);
              return <button key={lens.id} type="button" style={glowVars(itemMeta.color)} onClick={() => { onSelect(lens); setOpen(false); }} className={cx('pi-luminous-control w-full rounded-xl border px-3 py-2.5 text-left text-sm', activeLens.id === lens.id ? itemMeta.classes : 'border-white/[0.06] bg-white/[0.035] text-white/65')}>{lens.lens}</button>;
            })}
          </div>
        </div>
      )}
    </GlassCard>
  );
}

function FactorGrid({ profile }) {
  return (
    <GlassCard className="p-4 sm:p-5" glow={profile.color}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/45">Source PI factor scores</p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          ['D', 'Dominance', profile.dominance],
          ['E', 'Extraversion', profile.extraversion],
          ['P', 'Patience', profile.patience],
          ['F', 'Formality', profile.formality],
        ].map(([abbr, label, value]) => (
          <div key={label} className="pi-color-tile rounded-2xl border border-white/10 bg-black/25 p-4" style={glowVars(profile.color)}>
            <div className="flex items-center justify-between"><span className="text-xs font-semibold text-white/45">{abbr}</span><span className="text-2xl font-bold text-white">{value}</span></div>
            <p className="mt-1 text-xs text-white/55">{label}</p>
            <div className="mt-3 h-1.5 rounded-full bg-white/10"><div className="pi-luminous-bar h-full rounded-full" style={{ width: `${value}%`, background: profile.color, boxShadow: `0 0 14px ${profile.color}99` }}/></div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

export default function VisualLensWorkspace() {
  const [activeLens, setActiveLens] = useState(DISPLAY_LENSES[0]);
  const [profile, setProfile] = useState(PI_PROFILES[0]);
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showModal, setShowModal] = useState(false);

  const categories = useMemo(() => ['All', ...new Set(DISPLAY_LENSES.map(lens => lens.category || 'Other'))], []);
  const filteredLenses = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return DISPLAY_LENSES.filter(lens => {
      const matchesCategory = activeCategory === 'All' || lens.category === activeCategory;
      const haystack = `${lens.lens} ${lens.category} ${lens.visualLabel} ${lens.visualReason} ${lens.canonicalLens} ${(lens.aliases || []).join(' ')}`.toLowerCase();
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
          const categoryMetaValue = category === 'All' ? CATEGORY_META.Other : categoryMeta(category);
          const count = category === 'All' ? DISPLAY_LENSES.length : DISPLAY_LENSES.filter(lens => lens.category === category).length;
          return <button key={category} type="button" style={glowVars(categoryMetaValue.color)} onClick={() => setActiveCategory(category)} className={cx('pi-luminous-control flex-shrink-0 rounded-full border px-3 py-1.5 text-xs transition', activeCategory === category ? 'border-white/25 bg-white/[0.14] text-white' : 'border-white/10 bg-white/[0.045] text-white/55 hover:text-white')}>{category} <span className="ml-1 opacity-60">{count}</span></button>;
        })}
      </div>

      <div className="grid gap-5 lg:grid-cols-[20rem_minmax(0,1fr)]">
        <LensSidebar lenses={filteredLenses} activeLens={activeLens} onSelect={setActiveLens} query={query} setQuery={setQuery}/>

        <main className="min-w-0 space-y-5">
          <GlassCard className="overflow-hidden p-5 sm:p-6" glow={meta.color}>
            <div className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
              <div className="min-w-0 flex-1">
                <div className="mb-3 flex flex-wrap gap-2">
                  <span className={cx('rounded-full border px-3 py-1 text-xs font-semibold', meta.classes)}>{activeLens.category}</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.07] px-3 py-1 text-xs text-white/60">{activeLens.visualLabel}</span>
                  <span className="rounded-full border border-emerald-300/25 bg-emerald-500/[0.12] px-3 py-1 text-xs text-emerald-100">Verified native visual</span>
                </div>
                <h1 className="break-words text-2xl font-bold tracking-tight text-white sm:text-3xl">{activeLens.lens}</h1>
                <p className="mt-2 max-w-3xl text-sm leading-6 text-white/60">{activeLens.visualReason || activeLens.why}</p>
                {activeLens.canonicalLens !== activeLens.lens && <p className="mt-2 text-xs text-sky-200/65">Uses the verified {activeLens.canonicalLens} visual family while preserving this source lens as a separate entry.</p>}
              </div>
              <div className="pi-color-tile w-full rounded-2xl border border-white/10 bg-black/25 p-4 xl:w-[21rem]" style={glowVars(profile.color)}><ProfileSelector profile={profile} onChange={setProfile}/></div>
            </div>
            <div className="mt-5 flex flex-wrap gap-3 border-t border-white/[0.08] pt-4">
              <button type="button" onClick={() => setShowModal(true)} className="pi-luminous-control rounded-xl border border-sky-300/30 bg-sky-500/[0.14] px-4 py-2.5 text-sm font-semibold text-sky-50 hover:bg-sky-500/[0.20]" style={glowVars(meta.color)}>Open full lens detail</button>
              <span className="self-center text-xs text-white/45">Calculated from the selected profile’s exact D/E/P/F scores.</span>
            </div>
          </GlassCard>

          <LensExplainerCard lens={activeLens} projection={projection}/>
          <NativeLensVisual lens={activeLens} result={nativeResult}/>
          <FactorGrid profile={profile}/>
        </main>
      </div>

      {showModal && <LensDetailModal lens={activeLens} profile={profile} onClose={() => setShowModal(false)}/>} 
    </div>
  );
}
