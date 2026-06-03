/**
 * VisualLensWorkspace.jsx
 * HSI main view — grouped lens sidebar + real chart content panel.
 * Uses signalGlassStaticLenses registry (101 lenses) and PI_PROFILES (17 profiles).
 */
import React, { useMemo, useState } from 'react';
import {
  Activity, AlertTriangle, Brain, BrainCircuit, Compass,
  Gauge, GitCompare, Layers3, Lightbulb, Network,
  Radar, Search, Sparkles, Target, Users,
} from 'lucide-react';
import { HSI_LENS_REGISTRY } from './data/hsiLensRegistry.js';
import { PI_PROFILES } from './data/profiles.js';
import LensVisual from './components/LensVisual.jsx';
import LensDetailModal from './components/LensDetailModal.jsx';
import { getLensProfileContent } from './data/lensProfileContent.js';

function cx(...c) { return c.filter(Boolean).join(' '); }

// ── Category config ─────────────────────────────────────────────────────
const CAT_ICONS = {
  Personality: Brain, Cognitive: BrainCircuit, Motivation: Sparkles,
  Team: Users, Emotional: Activity, Leadership: Target,
  Wellbeing: Gauge, Interpersonal: Network, Other: Layers3,
};
const CAT_COLORS = {
  Personality:'text-indigo-300 bg-indigo-500/10 border-indigo-400/20',
  Cognitive:  'text-sky-300 bg-sky-500/10 border-sky-400/20',
  Motivation: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20',
  Team:       'text-orange-300 bg-orange-500/10 border-orange-400/20',
  Emotional:  'text-pink-300 bg-pink-500/10 border-pink-400/20',
  Leadership: 'text-yellow-300 bg-yellow-500/10 border-yellow-400/20',
  Wellbeing:  'text-purple-300 bg-purple-500/10 border-purple-400/20',
  Interpersonal:'text-teal-300 bg-teal-500/10 border-teal-400/20',
  Other:      'text-slate-300 bg-slate-500/10 border-slate-400/20',
};
const CAT_CHART_COLORS = {
  Personality:'#818cf8', Cognitive:'#38bdf8', Motivation:'#34d399',
  Team:'#fb923c', Emotional:'#f472b6', Leadership:'#fbbf24',
  Wellbeing:'#a78bfa', Interpersonal:'#2dd4bf', Other:'#94a3b8',
};
function catColor(cat) { return CAT_CHART_COLORS[cat] || '#38bdf8'; }
function catStyle(cat) { return CAT_COLORS[cat] || CAT_COLORS.Other; }

// ── Profile group colors ─────────────────────────────────────────────────
const GROUP_COLORS = {
  Analytical:'from-sky-500 to-indigo-600',
  Social:'from-fuchsia-500 to-rose-500',
  Stabilizing:'from-emerald-500 to-teal-500',
  Persistent:'from-amber-500 to-orange-500',
};

function Card({ children, className = '' }) {
  return <div className={cx('rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/20 backdrop-blur-xl', className)}>{children}</div>;
}
function Pill({ children, className = '' }) {
  return <span className={cx('inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/80', className)}>{children}</span>;
}

// ── Sidebar ──────────────────────────────────────────────────────────────
function LensSidebar({ activeLens, setActiveLens }) {
  const [query, setQuery] = useState('');

  const grouped = useMemo(() => {
    const filtered = HSI_LENS_REGISTRY.filter(l =>
      `${l.lens} ${l.category}`.toLowerCase().includes(query.toLowerCase())
    );
    const groups = {};
    for (const lens of filtered) {
      const cat = lens.category || 'Other';
      if (!groups[cat]) groups[cat] = [];
      groups[cat].push(lens);
    }
    return groups;
  }, [query]);

  const total = HSI_LENS_REGISTRY.length;

  return (
    <aside className="sticky top-4 flex h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#090D1D]/70 backdrop-blur-xl">
      {/* Header */}
      <div className="border-b border-white/8 px-5 py-4">
        <div className="mb-1 text-xs uppercase tracking-widest text-white/30">Human Systems Intelligence</div>
        <div className="text-base font-bold text-white">{total} Assessment Lenses</div>
      </div>

      {/* Search */}
      <div className="border-b border-white/8 px-4 py-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <Search size={14} className="flex-shrink-0 text-white/30" />
          <input
            className="w-full bg-transparent text-sm text-white placeholder-white/25 outline-none"
            placeholder="Search lenses…"
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Grouped list */}
      <div className="flex-1 overflow-y-auto px-3 py-3 space-y-4">
        {Object.entries(grouped).map(([cat, lenses]) => {
          const Icon = CAT_ICONS[cat] || Layers3;
          return (
            <div key={cat}>
              <div className="mb-1.5 flex items-center gap-1.5 px-1 text-[10px] uppercase tracking-[0.18em] text-white/30">
                <Icon size={11} /> {cat}
              </div>
              {lenses.map(lens => (
                <button key={lens.id} type="button"
                  onClick={() => setActiveLens(lens)}
                  className={cx(
                    'w-full rounded-xl px-3 py-2 text-left text-sm transition',
                    activeLens?.id === lens.id
                      ? 'bg-white/12 font-semibold text-white'
                      : 'text-white/55 hover:bg-white/6 hover:text-white/90'
                  )}>
                  {lens.lens}
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

// ── Profile selector ─────────────────────────────────────────────────────
function ProfileSelector({ profile, setProfile }) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-9 w-9 flex-shrink-0 flex items-center justify-center rounded-xl font-black text-slate-900 text-lg"
        style={{ background: profile.color }}>
        {profile.name[0]}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs text-white/35 uppercase tracking-widest">Selected Profile</div>
        <select
          value={profile.id}
          onChange={e => setProfile(PI_PROFILES.find(p => p.id === e.target.value) || PI_PROFILES[0])}
          className="w-full bg-transparent text-sm font-semibold text-white outline-none cursor-pointer"
        >
          {PI_PROFILES.map(p => (
            <option key={p.id} value={p.id} style={{ background: '#0f172a' }}>{p.name} — {p.tagline}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

// ── KV content block ─────────────────────────────────────────────────────
function KVContent({ data, color }) {
  if (!data) return null;
  const entries = Object.entries(data).filter(([k]) => !k.includes('Deep dive') && !k.includes('Guided'));
  if (!entries.length) return null;
  return (
    <div className="grid gap-2">
      {entries.slice(0, 6).map(([k, v]) => (
        <div key={k} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3">
          <span className="w-36 flex-shrink-0 text-xs font-semibold uppercase tracking-wider" style={{ color }}>{k}</span>
          <span className="text-sm text-white/75 leading-5">{v}</span>
        </div>
      ))}
    </div>
  );
}

// ── Main content panel ────────────────────────────────────────────────────
function LensContentPanel({ lens, profile, setProfile, onOpenModal }) {
  const color = catColor(lens.category);
  const profileContent = getLensProfileContent(lens.id, profile.id);
  const catCls = catStyle(lens.category);

  return (
    <div className="space-y-5">
      {/* Header */}
      <Card className="overflow-hidden">
        <div className="relative p-6">
          <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl" style={{ background: `${color}18` }} />
          <div className="relative">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className={cx('inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold', catCls)}>{lens.category}</span>
              <span className="inline-block rounded-full border border-white/10 bg-white/8 px-2.5 py-0.5 text-xs text-white/45">{lens.visualLabel}</span>
              <span className="inline-block rounded-full border border-white/10 bg-white/8 px-2.5 py-0.5 text-xs text-white/30">{lens.status || 'Finished / Done'}</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-white">{lens.lens}</h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">{lens.why}</p>

            <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/8 pt-4">
              <ProfileSelector profile={profile} setProfile={setProfile} />
              <button type="button" onClick={onOpenModal}
                className="flex-shrink-0 rounded-xl border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold text-white/70 hover:bg-white/15 hover:text-white transition">
                Full Detail →
              </button>
            </div>
          </div>
        </div>
      </Card>

      {/* Chart */}
      <Card className="p-6">
        <div className="mb-3 text-xs uppercase tracking-widest text-white/30">
          {lens.visualLabel} — {profile.name}
        </div>
        <LensVisual lensId={lens.id} visualType={lens.visualType} color={color} profileId={profile.id} />
      </Card>

      {/* Real profile content */}
      {profileContent && (
        <Card className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/30">
              {profile.name} — Profile Data
            </span>
            <span className="h-1.5 w-1.5 rounded-full flex-shrink-0" style={{ background: profile.color }} />
          </div>
          <KVContent data={profileContent} color={color} />
        </Card>
      )}

      {/* PI factor scores */}
      <Card className="p-5">
        <div className="mb-3 text-xs uppercase tracking-widest text-white/30">PI Factor Scores — {profile.name}</div>
        <div className="grid grid-cols-4 gap-3">
          {[["Dominance", profile.dominance],["Extraversion", profile.extraversion],["Patience", profile.patience],["Formality", profile.formality]].map(([label, val]) => (
            <div key={label} className="rounded-xl border border-white/8 bg-white/[0.04] p-3 text-center">
              <div className="text-2xl font-bold text-white">{val}</div>
              <div className="mt-0.5 text-[10px] text-white/35 uppercase tracking-widest">{label[0]}</div>
              <div className="mt-1 h-1 w-full rounded-full bg-white/10">
                <div className="h-1 rounded-full" style={{ width: `${val}%`, background: color }} />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ── Root export ───────────────────────────────────────────────────────────
export default function VisualLensWorkspace() {
  const [activeLens, setActiveLens] = useState(HSI_LENS_REGISTRY[0]);
  const [profile, setProfile] = useState(PI_PROFILES[0]);
  const [showModal, setShowModal] = useState(false);

  // Profile setter that works from child
  function handleSetProfile(p) { setProfile(p); }
  function handleSetLens(l) { setActiveLens(l); }

  return (
    <div className="text-white">
      <div className="grid gap-5 lg:grid-cols-[21rem_minmax(0,1fr)]">
        {/* Sidebar */}
        <LensSidebar activeLens={activeLens} setActiveLens={handleSetLens} />

        {/* Content */}
        <div className="min-w-0">
          {/* Profile selector at top right */}
          <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/30">Current View</span>
              <div className="text-base font-bold text-white mt-0.5">{activeLens?.lens}</div>
              <div className="text-xs text-white/35">Selected profile: {profile.name}</div>
            </div>
            <div className="flex-shrink-0">
              <select
                value={profile.id}
                onChange={e => setProfile(PI_PROFILES.find(p => p.id === e.target.value) || PI_PROFILES[0])}
                className="rounded-xl border border-white/15 bg-white/8 px-3 py-2 text-sm text-white outline-none cursor-pointer"
              >
                {PI_PROFILES.map(p => (
                  <option key={p.id} value={p.id} style={{ background: '#0f172a' }}>{p.name}</option>
                ))}
              </select>
            </div>
          </div>

          {activeLens && (
            <LensContentPanel
              lens={activeLens}
              profile={profile}
              setProfile={handleSetProfile}
              onOpenModal={() => setShowModal(true)}
            />
          )}
        </div>
      </div>

      {/* Detail modal */}
      {showModal && activeLens && (
        <LensDetailModal
          lens={activeLens}
          profile={profile}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
