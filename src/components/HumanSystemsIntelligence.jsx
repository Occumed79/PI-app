import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, Radar,
  PieChart, Pie, Cell,
} from 'recharts';
import {
  Brain, Layers3, Search, Filter, Eye, Edit3, ChevronDown, ChevronRight,
  CheckCircle2, AlertCircle, Grid, List, X, Save, Plus, BarChart3,
  Sparkles, Users, Target, Zap, BookOpen, Settings
} from 'lucide-react';
import { CANONICAL_LENS_VISUALS } from '../data/lensVisualRegistry.js';
import { PI_PROFILES } from '../data/profiles.js';

// ─── helpers ───────────────────────────────────────────────────────────────
function cx(...c) { return c.filter(Boolean).join(' '); }

const STORAGE_KEY = 'hsi_lens_profile_mappings';

function loadMappings() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); }
  catch { return {}; }
}
function saveMappings(m) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(m)); } catch {}
}
function mappingKey(lensId, profileId) { return `${lensId}__${profileId}`; }

// ─── colour palette ────────────────────────────────────────────────────────
const CAT_COLORS = {
  Personality: '#818cf8',
  Cognitive:   '#38bdf8',
  Motivation:  '#34d399',
  Team:        '#fb923c',
  Emotional:   '#f472b6',
  Wellbeing:   '#a78bfa',
  Leadership:  '#fbbf24',
  Other:       '#94a3b8',
};
const CHART_COLORS = ['#818cf8','#38bdf8','#34d399','#fb923c','#f472b6','#a78bfa','#fbbf24','#94a3b8'];

// ─── visual placeholder renderers ─────────────────────────────────────────
function VisualPlaceholder({ visualType, visualLabel, profile, mapping }) {
  const hasMapping = mapping?.outputText;
  const p = profile;

  const barData = [
    { name: 'Dominance',    value: p.dominance },
    { name: 'Extraversion', value: p.extraversion },
    { name: 'Patience',     value: p.patience },
    { name: 'Formality',    value: p.formality },
  ];
  const radarData = barData.map(d => ({ subject: d.name, A: d.value }));

  const needsMapping = !hasMapping;

  const wrapper = (children) => (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="mb-3 flex items-center justify-between">
        <span className="text-xs font-medium text-white/40 uppercase tracking-wider">{visualLabel}</span>
        {needsMapping && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
            Needs profile mapping
          </span>
        )}
        {hasMapping && (
          <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
            Mapped
          </span>
        )}
      </div>
      {children}
    </div>
  );

  // Show profile-specific output text if mapped
  if (hasMapping) {
    return wrapper(
      <div>
        <p className="text-sm text-white/80 leading-6 mb-4">{mapping.outputText}</p>
        {mapping.fields && Object.keys(mapping.fields).length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-2">
            {Object.entries(mapping.fields).map(([k, v]) => (
              <div key={k} className="rounded-xl bg-white/5 p-2">
                <div className="text-xs text-white/40">{k}</div>
                <div className="text-sm font-semibold text-white">{v}</div>
              </div>
            ))}
          </div>
        )}
        {renderChartForType(visualType, radarData, barData)}
      </div>
    );
  }

  // Generic placeholder based on visual type
  const placeholder = getPlaceholderForType(visualType, visualLabel, p, radarData, barData);
  return wrapper(placeholder);
}

function renderChartForType(type, radarData, barData) {
  if (['radar','radarBars','hexagonRadar','lineRadar','spiderTrend','layeredRadar','radarSubscaleBars'].includes(type)) {
    return (
      <div className="h-44 mt-3">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData}>
            <PolarGrid stroke="rgba(255,255,255,.1)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,.5)', fontSize: 11 }} />
            <Radar dataKey="A" stroke="#818cf8" fill="#818cf8" fillOpacity={0.3} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  }
  return null;
}

function getPlaceholderForType(type, label, profile, radarData, barData) {
  const opacity = 'opacity-40';

  if (['radar','radarBars','hexagonRadar','lineRadar','spiderTrend','layeredRadar','radarSubscaleBars','fourAxisRadial'].includes(type)) {
    return (
      <div className={cx('h-44', opacity)}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={radarData}>
            <PolarGrid stroke="rgba(255,255,255,.15)" />
            <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,.4)', fontSize: 11 }} />
            <Radar dataKey="A" stroke="#818cf8" fill="#818cf8" fillOpacity={0.2} strokeDasharray="4 2" />
          </RadarChart>
        </ResponsiveContainer>
        <p className="text-center text-xs text-white/25 -mt-2">Profile axes — add mapping to populate</p>
      </div>
    );
  }

  if (['profileBars','riskBars','multiBarProfile','rankedBars','rankedBarsRadar','motiveBars',
       'threeBars','fiveModeBars','continuumBars','multiAxisBars','stackedWorkloadBars'].includes(type)) {
    return (
      <div className={cx('h-36', opacity)}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData} barSize={18}>
            <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,.35)', fontSize: 10 }} />
            <YAxis domain={[0,100]} tick={{ fill: 'rgba(255,255,255,.25)', fontSize: 10 }} />
            <Bar dataKey="value" fill="#38bdf8" fillOpacity={0.4} radius={[4,4,0,0]} />
          </BarChart>
        </ResponsiveContainer>
        <p className="text-center text-xs text-white/25 -mt-1">Bars represent PI drives — awaiting lens-specific mapping</p>
      </div>
    );
  }

  if (['quadrantPlot','scatterQuadrant','temperamentQuadrant','matrix','brainQuadrantWheel'].includes(type)) {
    return (
      <div className={cx('relative h-40 rounded-xl border border-white/10 bg-white/[0.03]', opacity)}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-px h-full bg-white/10 absolute left-1/2" />
          <div className="h-px w-full bg-white/10 absolute top-1/2" />
          <div className="w-3 h-3 rounded-full bg-sky-400/60 absolute"
            style={{ left: `${profile.dominance}%`, top: `${100-profile.extraversion}%` }} />
        </div>
        <span className="absolute bottom-2 left-0 right-0 text-center text-xs text-white/25">2-axis plot — awaiting lens mapping</span>
      </div>
    );
  }

  if (['colorWheel','segmentedWheel','pieStackedBars','enneagramWheel','circumplex','valuesCircumplex',
       'triangleCircumplex','gaugeHeatmap','threeBarsCircumplex'].includes(type)) {
    const data = [
      { name:'D', value: profile.dominance },
      { name:'E', value: profile.extraversion },
      { name:'P', value: profile.patience },
      { name:'F', value: profile.formality },
    ];
    return (
      <div className={cx('h-40', opacity)}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} strokeWidth={0}>
              {data.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} fillOpacity={0.4} />)}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <p className="text-center text-xs text-white/25 -mt-2">Wheel placeholder — awaiting lens mapping</p>
      </div>
    );
  }

  if (['scoreGauge','gaugeDistribution'].includes(type)) {
    const pct = Math.round((profile.dominance + profile.formality) / 2);
    return (
      <div className={cx('flex flex-col items-center gap-2 py-4', opacity)}>
        <div className="relative w-24 h-12 overflow-hidden">
          <div className="absolute inset-0 rounded-t-full border-[6px] border-white/10" />
          <div className="absolute inset-0 rounded-t-full border-[6px] border-sky-400/40"
            style={{ clipPath:`inset(0 ${100-pct}% 0 0)` }} />
        </div>
        <span className="text-2xl font-bold text-white/30">{pct}</span>
        <span className="text-xs text-white/25">Gauge placeholder</span>
      </div>
    );
  }

  if (['typeGrid','itemTablePassRate'].includes(type)) {
    return (
      <div className={cx('rounded-xl overflow-hidden border border-white/10', opacity)}>
        <table className="w-full text-xs">
          <thead><tr className="bg-white/5">
            {['Dim 1','Dim 2','Dim 3','Dim 4'].map(h => (
              <th key={h} className="px-3 py-2 text-white/30 font-medium">{h}</th>
            ))}
          </tr></thead>
          <tbody><tr className="text-center">
            {['—','—','—','—'].map((v,i) => (
              <td key={i} className="px-3 py-2 text-white/20">{v}</td>
            ))}
          </tr></tbody>
        </table>
        <p className="text-center text-xs text-white/25 py-2">Table — awaiting lens mapping</p>
      </div>
    );
  }

  // Default: structured card placeholder
  return (
    <div className={cx('rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center', opacity)}>
      <div className="text-3xl mb-2 opacity-30">⬡</div>
      <p className="text-xs text-white/30">{label} — awaiting lens-profile mapping</p>
    </div>
  );
}

// ─── sub-components ───────────────────────────────────────────────────────

function Card({ children, className = '' }) {
  return (
    <div className={cx('rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/20 backdrop-blur-xl', className)}>
      {children}
    </div>
  );
}

function StatusBadge({ mapped }) {
  if (mapped) return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
      <CheckCircle2 size={10} /> Mapped
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25">
      <AlertCircle size={10} /> Needs mapping
    </span>
  );
}

// ─── 1. Lens Visual Registry Tab ─────────────────────────────────────────
function LensRegistryTab({ mappings }) {
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('All');
  const cats = useMemo(() => ['All', ...Array.from(new Set(CANONICAL_LENS_VISUALS.map(l => l.category)))], []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return CANONICAL_LENS_VISUALS.filter(l =>
      (catFilter === 'All' || l.category === catFilter) &&
      (l.lens.toLowerCase().includes(q) || l.visualLabel.toLowerCase().includes(q) || l.category.toLowerCase().includes(q))
    );
  }, [search, catFilter]);

  // how many profiles are mapped for each lens
  const profileCount = useMemo(() => {
    const counts = {};
    CANONICAL_LENS_VISUALS.forEach(l => {
      counts[l.id] = PI_PROFILES.filter(p => mappings[mappingKey(l.id, p.id)]?.outputText).length;
    });
    return counts;
  }, [mappings]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-5">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={16} />
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search lenses…"
            className="w-full rounded-2xl border border-white/10 bg-black/30 pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-sky-400/40"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {cats.map(c => (
            <button key={c} onClick={() => setCatFilter(c)}
              className={cx('px-3 py-2 rounded-xl text-xs border transition',
                catFilter === c
                  ? 'bg-sky-500/20 border-sky-400/40 text-sky-300'
                  : 'border-white/10 text-white/50 hover:text-white hover:bg-white/10'
              )}>
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-white/40 mb-3">{filtered.length} of {CANONICAL_LENS_VISUALS.length} lenses</div>

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-sm border-separate border-spacing-y-0">
          <thead>
            <tr className="text-left text-xs uppercase tracking-widest text-white/30 bg-white/[0.03]">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Lens</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Visual Type</th>
              <th className="px-4 py-3">Visual Label</th>
              <th className="px-4 py-3">Why This Visual</th>
              <th className="px-4 py-3 text-center">Profiles Mapped</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lens, i) => (
              <tr key={lens.id} className={cx('transition', i % 2 === 0 ? 'bg-white/[0.02]' : 'bg-transparent')}>
                <td className="px-4 py-3 text-white/30 text-xs">{CANONICAL_LENS_VISUALS.indexOf(lens) + 1}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-white">{lens.lens}</div>
                  <div className="text-xs text-white/30 mt-0.5">{lens.id}</div>
                </td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                    style={{ background: `${CAT_COLORS[lens.category]}20`, color: CAT_COLORS[lens.category] }}>
                    {lens.category}
                  </span>
                </td>
                <td className="px-4 py-3 text-white/60 text-xs font-mono">{lens.visualType}</td>
                <td className="px-4 py-3 text-white/70">{lens.visualLabel}</td>
                <td className="px-4 py-3 text-white/50 text-xs max-w-xs">{lens.why}</td>
                <td className="px-4 py-3 text-center">
                  <div className="flex items-center justify-center gap-1">
                    <div className="w-16 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-emerald-400"
                        style={{ width: `${(profileCount[lens.id] / 17) * 100}%` }} />
                    </div>
                    <span className="text-xs text-white/40">{profileCount[lens.id]}/17</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ─── 2. PI Profile Selector Tab ────────────────────────────────────────────
function ProfileSelectorTab({ selectedProfileId, setSelectedProfileId, mappings, onViewLenses }) {
  const GROUP_COLORS = {
    Analytical:  { bg: 'bg-sky-500/10',      border: 'border-sky-400/30',      text: 'text-sky-300',      dot: 'bg-sky-400' },
    Social:      { bg: 'bg-fuchsia-500/10',  border: 'border-fuchsia-400/30',  text: 'text-fuchsia-300',  dot: 'bg-fuchsia-400' },
    Stabilizing: { bg: 'bg-emerald-500/10',  border: 'border-emerald-400/30',  text: 'text-emerald-300',  dot: 'bg-emerald-400' },
    Persistent:  { bg: 'bg-amber-500/10',    border: 'border-amber-400/30',    text: 'text-amber-300',    dot: 'bg-amber-400' },
  };

  const groups = useMemo(() => {
    const g = {};
    PI_PROFILES.forEach(p => {
      if (!g[p.group]) g[p.group] = [];
      g[p.group].push(p);
    });
    return g;
  }, []);

  const mappedCount = (profileId) =>
    CANONICAL_LENS_VISUALS.filter(l => mappings[mappingKey(l.id, profileId)]?.outputText).length;

  return (
    <div className="space-y-6">
      {Object.entries(groups).map(([group, profiles]) => {
        const gc = GROUP_COLORS[group] || GROUP_COLORS.Analytical;
        return (
          <div key={group}>
            <h3 className={cx('text-sm font-semibold uppercase tracking-widest mb-3', gc.text)}>{group}</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {profiles.map(p => {
                const mc = mappedCount(p.id);
                const isSelected = selectedProfileId === p.id;
                return (
                  <button
                    key={p.id}
                    onClick={() => { setSelectedProfileId(p.id); onViewLenses(); }}
                    className={cx(
                      'rounded-2xl border p-4 text-left transition group',
                      gc.bg, gc.border,
                      isSelected ? 'ring-2 ring-white/30 scale-[1.02]' : 'hover:scale-[1.01] hover:brightness-110'
                    )}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-bold text-white">{p.name}</div>
                        <div className="text-xs text-white/50">{p.tagline}</div>
                      </div>
                      <div className={cx('w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0', gc.dot)} />
                    </div>
                    <p className="text-xs text-white/50 leading-5 mb-3">{p.short}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full bg-emerald-400 transition-all"
                          style={{ width: `${(mc / CANONICAL_LENS_VISUALS.length) * 100}%` }} />
                      </div>
                      <span className="text-xs text-white/40 flex-shrink-0">{mc}/{CANONICAL_LENS_VISUALS.length} lenses</span>
                    </div>
                    {isSelected && (
                      <div className="mt-2 text-xs text-white/70 font-medium">✓ Selected — view lens results →</div>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ─── 3. Lens-by-Profile Results Tab ────────────────────────────────────────
function LensByProfileTab({ selectedProfileId, setSelectedProfileId, mappings, onOpenDetail }) {
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState('cards'); // 'cards' | 'list'

  const profile = PI_PROFILES.find(p => p.id === selectedProfileId) || PI_PROFILES[0];
  const cats = useMemo(() => ['All', ...Array.from(new Set(CANONICAL_LENS_VISUALS.map(l => l.category)))], []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return CANONICAL_LENS_VISUALS.filter(l => {
      const hasMapped = !!mappings[mappingKey(l.id, profile.id)]?.outputText;
      if (statusFilter === 'Mapped' && !hasMapped) return false;
      if (statusFilter === 'Unmapped' && hasMapped) return false;
      if (catFilter !== 'All' && l.category !== catFilter) return false;
      return l.lens.toLowerCase().includes(q) || l.category.toLowerCase().includes(q);
    });
  }, [search, catFilter, statusFilter, profile, mappings]);

  const mappedCount = CANONICAL_LENS_VISUALS.filter(l => mappings[mappingKey(l.id, profile.id)]?.outputText).length;

  return (
    <div>
      {/* Profile selector strip */}
      <div className="mb-5 flex flex-wrap gap-2 items-center">
        <span className="text-xs text-white/40 mr-1">Profile:</span>
        {PI_PROFILES.map(p => (
          <button key={p.id} onClick={() => setSelectedProfileId(p.id)}
            className={cx('px-3 py-1.5 rounded-xl text-xs border transition',
              p.id === profile.id
                ? 'border-white/30 bg-white/15 text-white'
                : 'border-white/10 text-white/40 hover:text-white hover:bg-white/10'
            )}>
            {p.name}
          </button>
        ))}
      </div>

      {/* Profile banner */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 mb-5 flex items-center gap-4">
        <div className="w-3 h-14 rounded-full flex-shrink-0" style={{ background: profile.color }} />
        <div>
          <div className="text-lg font-bold text-white">{profile.name}</div>
          <div className="text-sm text-white/50">{profile.tagline} · {profile.group}</div>
          <div className="text-xs text-white/30 mt-1">{profile.short}</div>
        </div>
        <div className="ml-auto text-right">
          <div className="text-2xl font-bold text-white">{mappedCount}</div>
          <div className="text-xs text-white/40">of {CANONICAL_LENS_VISUALS.length} lenses mapped</div>
          <div className="mt-1 w-24 h-1.5 rounded-full bg-white/10 overflow-hidden ml-auto">
            <div className="h-full rounded-full bg-emerald-400" style={{ width: `${(mappedCount/CANONICAL_LENS_VISUALS.length)*100}%` }} />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative flex-1 min-w-[180px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={14} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Filter lenses…"
            className="w-full rounded-xl border border-white/10 bg-black/30 pl-8 pr-3 py-2 text-sm text-white placeholder:text-white/30 outline-none focus:border-sky-400/40" />
        </div>
        {['All','Mapped','Unmapped'].map(s => (
          <button key={s} onClick={() => setStatusFilter(s)}
            className={cx('px-3 py-2 rounded-xl text-xs border transition',
              statusFilter === s ? 'bg-sky-500/20 border-sky-400/40 text-sky-300' : 'border-white/10 text-white/40 hover:text-white'
            )}>{s}</button>
        ))}
        <div className="ml-auto flex gap-1">
          <button onClick={() => setViewMode('cards')}
            className={cx('p-2 rounded-xl border transition', viewMode==='cards' ? 'border-white/30 bg-white/15' : 'border-white/10 hover:bg-white/10')}>
            <Grid size={14} className="text-white/60" />
          </button>
          <button onClick={() => setViewMode('list')}
            className={cx('p-2 rounded-xl border transition', viewMode==='list' ? 'border-white/30 bg-white/15' : 'border-white/10 hover:bg-white/10')}>
            <List size={14} className="text-white/60" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 mb-5">
        {cats.map(c => (
          <button key={c} onClick={() => setCatFilter(c)}
            className={cx('px-2.5 py-1 rounded-lg text-xs border transition',
              catFilter === c ? 'border-sky-400/40 text-sky-300 bg-sky-500/15' : 'border-white/10 text-white/40 hover:text-white'
            )}>{c}</button>
        ))}
      </div>

      <div className="text-xs text-white/30 mb-3">{filtered.length} lenses shown</div>

      {viewMode === 'cards' ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map(lens => {
            const mk = mappingKey(lens.id, profile.id);
            const mapping = mappings[mk];
            const isMapped = !!mapping?.outputText;
            return (
              <button key={lens.id} onClick={() => onOpenDetail(lens, profile)}
                className={cx(
                  'text-left rounded-2xl border p-4 transition group hover:scale-[1.01]',
                  isMapped ? 'border-emerald-500/25 bg-emerald-500/5 hover:bg-emerald-500/10' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07]'
                )}>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1 mr-2">
                    <div className="font-semibold text-white text-sm leading-snug">{lens.lens}</div>
                    <div className="text-xs text-white/40 mt-0.5">{lens.visualLabel}</div>
                  </div>
                  <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
                    style={{ background: `${CAT_COLORS[lens.category]}20`, color: CAT_COLORS[lens.category] }}>
                    {lens.category}
                  </span>
                </div>
                <div className="mb-3">
                  <StatusBadge mapped={isMapped} />
                </div>
                {isMapped ? (
                  <p className="text-xs text-white/60 leading-5 line-clamp-2">{mapping.outputText}</p>
                ) : (
                  <p className="text-xs text-white/25 leading-5">{lens.why}</p>
                )}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/25">{lens.visualType}</span>
                  <span className="text-xs text-sky-400/70 opacity-0 group-hover:opacity-100 transition">Open →</span>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="space-y-1">
          {filtered.map(lens => {
            const mk = mappingKey(lens.id, profile.id);
            const mapping = mappings[mk];
            const isMapped = !!mapping?.outputText;
            return (
              <button key={lens.id} onClick={() => onOpenDetail(lens, profile)}
                className={cx(
                  'w-full text-left rounded-xl border px-4 py-3 flex items-center gap-4 transition group hover:bg-white/[0.06]',
                  isMapped ? 'border-emerald-500/20' : 'border-white/8'
                )}>
                <div className="w-6 text-xs text-white/25 flex-shrink-0">
                  {CANONICAL_LENS_VISUALS.indexOf(lens) + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <span className="font-medium text-white text-sm">{lens.lens}</span>
                </div>
                <span className="text-xs hidden sm:block" style={{ color: CAT_COLORS[lens.category] }}>{lens.category}</span>
                <span className="text-xs text-white/30 hidden md:block">{lens.visualLabel}</span>
                <StatusBadge mapped={isMapped} />
                <ChevronRight size={14} className="text-white/20 group-hover:text-white/50 transition flex-shrink-0" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── 4. Visual Preview / Detail Modal ─────────────────────────────────────
function VisualDetailModal({ lens, profile, mappings, onClose, onSaveMapping }) {
  const mk = mappingKey(lens.id, profile.id);
  const existing = mappings[mk] || {};
  const [outputText, setOutputText] = useState(existing.outputText || '');
  const [fieldsRaw, setFieldsRaw] = useState(existing.fieldsRaw || '');
  const [notes, setNotes] = useState(existing.notes || '');
  const [status, setStatus] = useState(existing.status || 'unmapped');
  const [saved, setSaved] = useState(false);

  function handleSave() {
    let fields = {};
    try {
      fieldsRaw.split('\n').filter(Boolean).forEach(line => {
        const [k, ...rest] = line.split(':');
        if (k && rest.length) fields[k.trim()] = rest.join(':').trim();
      });
    } catch {}
    onSaveMapping(mk, { outputText, fieldsRaw, fields, notes, status });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-slate-900 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 bg-slate-900 border-b border-white/10 p-5 flex items-start justify-between z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs px-2 py-0.5 rounded-full"
                style={{ background: `${CAT_COLORS[lens.category]}20`, color: CAT_COLORS[lens.category] }}>
                {lens.category}
              </span>
              <span className="text-xs text-white/30 font-mono">{lens.visualType}</span>
            </div>
            <h2 className="text-xl font-bold text-white">{lens.lens}</h2>
            <div className="text-sm text-white/50 mt-0.5">Viewing through: <span className="text-white font-medium">{profile.name}</span></div>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition p-1">
            <X size={20} />
          </button>
        </div>

        <div className="p-5 grid gap-5 lg:grid-cols-2">
          {/* Left: visual preview */}
          <div>
            <div className="text-xs uppercase tracking-widest text-white/30 mb-3">Visual Preview</div>
            <VisualPlaceholder
              visualType={lens.visualType}
              visualLabel={lens.visualLabel}
              profile={profile}
              mapping={existing}
            />
            <div className="mt-4 rounded-xl bg-white/[0.04] border border-white/10 p-3">
              <div className="text-xs text-white/40 mb-1">Why this visual</div>
              <p className="text-sm text-white/70 leading-5">{lens.why}</p>
            </div>
          </div>

          {/* Right: editor */}
          <div>
            <div className="text-xs uppercase tracking-widest text-white/30 mb-3 flex items-center gap-1">
              <Edit3 size={12} /> Profile Mapping Editor
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs text-white/50 mb-1">Profile-specific output text</label>
                <textarea
                  value={outputText}
                  onChange={e => setOutputText(e.target.value)}
                  rows={4}
                  placeholder="Describe how this lens applies to the selected PI profile…"
                  className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-sky-400/40 resize-none"
                />
              </div>

              <div>
                <label className="block text-xs text-white/50 mb-1">
                  Visual fields <span className="text-white/25">(key: value, one per line)</span>
                </label>
                <textarea
                  value={fieldsRaw}
                  onChange={e => setFieldsRaw(e.target.value)}
                  rows={3}
                  placeholder={`e.g.\nOpenness: High\nConscientiousness: Very High`}
                  className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm text-white placeholder:text-white/25 outline-none focus:border-sky-400/40 resize-none font-mono"
                />
              </div>

              <div>
                <label className="block text-xs text-white/50 mb-1">Notes / cleanup status</label>
                <input
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Any internal notes…"
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/25 outline-none focus:border-sky-400/40"
                />
              </div>

              <div>
                <label className="block text-xs text-white/50 mb-1">Mapping status</label>
                <select value={status} onChange={e => setStatus(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-sky-400/40">
                  <option value="unmapped">Unmapped</option>
                  <option value="draft">Draft</option>
                  <option value="complete">Complete</option>
                  <option value="review">Needs Review</option>
                </select>
              </div>

              <button onClick={handleSave}
                className={cx(
                  'w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition',
                  saved
                    ? 'bg-emerald-500/30 border border-emerald-500/40 text-emerald-300'
                    : 'bg-sky-500/20 border border-sky-400/40 text-sky-300 hover:bg-sky-500/30'
                )}>
                <Save size={14} />
                {saved ? 'Saved!' : 'Save Mapping'}
              </button>
            </div>

            {/* Profile scores */}
            <div className="mt-5 rounded-xl bg-white/[0.04] border border-white/10 p-3">
              <div className="text-xs text-white/40 mb-2">PI Drives — {profile.name}</div>
              <div className="grid grid-cols-2 gap-2">
                {[['Dominance', profile.dominance], ['Extraversion', profile.extraversion],
                  ['Patience', profile.patience], ['Formality', profile.formality]].map(([k, v]) => (
                  <div key={k} className="text-xs">
                    <div className="flex justify-between mb-0.5">
                      <span className="text-white/50">{k}</span>
                      <span className="text-white/70 font-semibold">{v}</span>
                    </div>
                    <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-sky-400/60" style={{ width: `${v}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 5. Mapping Editor Tab ────────────────────────────────────────────────
function MappingEditorTab({ mappings, onSaveMapping }) {
  const [lensId, setLensId] = useState(CANONICAL_LENS_VISUALS[0].id);
  const [profileId, setProfileId] = useState(PI_PROFILES[0].id);

  const lens = CANONICAL_LENS_VISUALS.find(l => l.id === lensId) || CANONICAL_LENS_VISUALS[0];
  const profile = PI_PROFILES.find(p => p.id === profileId) || PI_PROFILES[0];
  const mk = mappingKey(lensId, profileId);
  const existing = mappings[mk] || {};

  const [outputText, setOutputText] = useState(existing.outputText || '');
  const [fieldsRaw, setFieldsRaw] = useState(existing.fieldsRaw || '');
  const [notes, setNotes] = useState(existing.notes || '');
  const [status, setStatus] = useState(existing.status || 'unmapped');
  const [saved, setSaved] = useState(false);

  // reload form when lens/profile changes
  React.useEffect(() => {
    const m = mappings[mappingKey(lensId, profileId)] || {};
    setOutputText(m.outputText || '');
    setFieldsRaw(m.fieldsRaw || '');
    setNotes(m.notes || '');
    setStatus(m.status || 'unmapped');
    setSaved(false);
  }, [lensId, profileId]);

  function handleSave() {
    let fields = {};
    try {
      fieldsRaw.split('\n').filter(Boolean).forEach(line => {
        const [k, ...rest] = line.split(':');
        if (k && rest.length) fields[k.trim()] = rest.join(':').trim();
      });
    } catch {}
    onSaveMapping(mk, { outputText, fieldsRaw, fields, notes, status });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }

  // Summary stats
  const totalMapped = Object.values(mappings).filter(m => m.outputText).length;
  const totalPossible = CANONICAL_LENS_VISUALS.length * PI_PROFILES.length;

  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Stats */}
      <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-4 gap-3">
        {[
          { label: 'Total Lenses', value: CANONICAL_LENS_VISUALS.length, color: 'text-sky-400' },
          { label: 'PI Profiles', value: PI_PROFILES.length, color: 'text-fuchsia-400' },
          { label: 'Possible Outputs', value: totalPossible.toLocaleString(), color: 'text-amber-400' },
          { label: 'Mapped', value: totalMapped, color: 'text-emerald-400' },
        ].map(s => (
          <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-xs text-white/40">{s.label}</div>
            <div className={cx('text-3xl font-bold mt-1', s.color)}>{s.value}</div>
          </div>
        ))}
      </div>

      {/* Selectors */}
      <div className="lg:col-span-1 space-y-4">
        <div>
          <label className="block text-xs text-white/40 mb-2">Select Lens</label>
          <select value={lensId} onChange={e => setLensId(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-sky-400/40">
            {CANONICAL_LENS_VISUALS.map(l => (
              <option key={l.id} value={l.id}>{l.lens}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs text-white/40 mb-2">Select PI Profile</label>
          <select value={profileId} onChange={e => setProfileId(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-sky-400/40">
            {PI_PROFILES.map(p => (
              <option key={p.id} value={p.id}>{p.name} ({p.group})</option>
            ))}
          </select>
        </div>

        {/* Current lens info */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 space-y-2">
          <div className="text-xs text-white/40">Lens Info</div>
          <div className="text-sm font-medium text-white">{lens.lens}</div>
          <div className="text-xs text-white/50">{lens.visualLabel}</div>
          <div className="text-xs text-white/35 leading-4">{lens.why}</div>
          <div className="flex gap-2 mt-2">
            <span className="text-xs px-2 py-0.5 rounded-full"
              style={{ background: `${CAT_COLORS[lens.category]}20`, color: CAT_COLORS[lens.category] }}>
              {lens.category}
            </span>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50 font-mono">
              {lens.visualType}
            </span>
          </div>
        </div>

        {/* Profile info */}
        <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
          <div className="text-xs text-white/40 mb-2">Profile: {profile.name}</div>
          <div className="text-xs text-white/50 mb-2">{profile.short}</div>
          <div className="grid grid-cols-2 gap-1.5">
            {[['D', profile.dominance], ['E', profile.extraversion], ['P', profile.patience], ['F', profile.formality]].map(([k, v]) => (
              <div key={k} className="flex justify-between text-xs">
                <span className="text-white/40">{k}</span>
                <span className="text-white/70">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Editor */}
      <div className="lg:col-span-2">
        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Edit3 size={16} className="text-sky-400" />
            <span className="font-semibold text-white">Mapping Editor</span>
            <StatusBadge mapped={!!existing.outputText} />
          </div>

          <div className="space-y-4">
            <div>
              <label className="block text-xs text-white/50 mb-1.5">
                Profile-specific output text <span className="text-red-400">*</span>
              </label>
              <textarea value={outputText} onChange={e => setOutputText(e.target.value)} rows={5}
                placeholder={`How does the ${lens.lens} lens apply to the ${profile.name} profile? Describe what this framework reveals about this specific behavioral type…`}
                className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40 resize-none" />
            </div>

            <div>
              <label className="block text-xs text-white/50 mb-1.5">
                Real visual fields <span className="text-white/25">(key: value, one per line — used to render the chart)</span>
              </label>
              <textarea value={fieldsRaw} onChange={e => setFieldsRaw(e.target.value)} rows={4}
                placeholder={`Dimension 1: High\nDimension 2: Moderate\nDimension 3: Low`}
                className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40 resize-none font-mono" />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-white/50 mb-1.5">Notes / cleanup status</label>
                <input value={notes} onChange={e => setNotes(e.target.value)}
                  placeholder="Internal notes…"
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40" />
              </div>
              <div>
                <label className="block text-xs text-white/50 mb-1.5">Mapping status</label>
                <select value={status} onChange={e => setStatus(e.target.value)}
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white outline-none focus:border-sky-400/40">
                  <option value="unmapped">Unmapped</option>
                  <option value="draft">Draft</option>
                  <option value="complete">Complete</option>
                  <option value="review">Needs Review</option>
                </select>
              </div>
            </div>

            <button onClick={handleSave}
              className={cx(
                'w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition',
                saved
                  ? 'bg-emerald-500/25 border border-emerald-400/40 text-emerald-300'
                  : 'bg-sky-500/20 border border-sky-400/40 text-sky-300 hover:bg-sky-500/30'
              )}>
              <Save size={15} />
              {saved ? 'Mapping Saved!' : 'Save Mapping'}
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
}

// ─── ROOT COMPONENT ────────────────────────────────────────────────────────
export default function HumanSystemsIntelligence() {
  const [tab, setTab] = useState('registry');
  const [selectedProfileId, setSelectedProfileId] = useState(PI_PROFILES[0].id);
  const [mappings, setMappings] = useState(loadMappings);
  const [detailLens, setDetailLens] = useState(null);
  const [detailProfile, setDetailProfile] = useState(null);

  const saveMapping = useCallback((key, data) => {
    setMappings(prev => {
      const next = { ...prev, [key]: { ...prev[key], ...data } };
      saveMappings(next);
      return next;
    });
  }, []);

  const openDetail = useCallback((lens, profile) => {
    setDetailLens(lens);
    setDetailProfile(profile);
  }, []);

  const closeDetail = useCallback(() => {
    setDetailLens(null);
    setDetailProfile(null);
  }, []);

  const TABS = [
    { id: 'registry',  label: 'Lens Visual Registry',   icon: BookOpen },
    { id: 'profiles',  label: 'PI Profile Selector',    icon: Users },
    { id: 'results',   label: 'Lens-by-Profile Results', icon: Layers3 },
    { id: 'editor',    label: 'Mapping Editor',          icon: Edit3 },
  ];

  const totalMapped = Object.values(mappings).filter(m => m.outputText).length;
  const totalPossible = CANONICAL_LENS_VISUALS.length * PI_PROFILES.length;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-sky-500/15 blur-3xl" />
        <div className="absolute right-0 top-60 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 rounded-full bg-emerald-500/8 blur-3xl" />
      </div>

      <div className="relative max-w-[96rem] mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 rounded-3xl border border-white/10 bg-white/[0.05] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-2">
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                  <Brain size={10} /> Human Systems Intelligence
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                  {CANONICAL_LENS_VISUALS.length} Lenses
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80">
                  {PI_PROFILES.length} PI Profiles
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                  {totalMapped}/{totalPossible} mapped
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                Human Systems Intelligence
              </h1>
              <p className="mt-1.5 max-w-3xl text-sm text-white/50 leading-6">
                A full {CANONICAL_LENS_VISUALS.length} × {PI_PROFILES.length} lens-profile intelligence system.
                Every lens applies to every PI profile. Map outputs, render visuals, and build the complete
                {' '}{(CANONICAL_LENS_VISUALS.length * PI_PROFILES.length).toLocaleString()}-output dataset.
              </p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-white">{Math.round((totalMapped / totalPossible) * 100)}%</div>
              <div className="text-xs text-white/40">completion</div>
              <div className="mt-2 w-32 h-1.5 rounded-full bg-white/10 overflow-hidden ml-auto">
                <div className="h-full rounded-full bg-emerald-400 transition-all"
                  style={{ width: `${(totalMapped / totalPossible) * 100}%` }} />
              </div>
            </div>
          </div>
        </div>

        {/* Tab nav */}
        <div className="mb-5 flex flex-wrap gap-2">
          {TABS.map(t => {
            const Icon = t.icon;
            return (
              <button key={t.id} onClick={() => setTab(t.id)}
                className={cx(
                  'flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm transition',
                  tab === t.id
                    ? 'border-sky-300/40 bg-sky-500/15 text-white shadow-lg'
                    : 'border-white/10 bg-white/[0.04] text-white/50 hover:bg-white/10 hover:text-white'
                )}>
                <Icon size={15} /> {t.label}
              </button>
            );
          })}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div key={tab}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}>
            {tab === 'registry' && (
              <Card className="p-5">
                <LensRegistryTab mappings={mappings} />
              </Card>
            )}
            {tab === 'profiles' && (
              <Card className="p-5">
                <ProfileSelectorTab
                  selectedProfileId={selectedProfileId}
                  setSelectedProfileId={setSelectedProfileId}
                  mappings={mappings}
                  onViewLenses={() => setTab('results')}
                />
              </Card>
            )}
            {tab === 'results' && (
              <Card className="p-5">
                <LensByProfileTab
                  selectedProfileId={selectedProfileId}
                  setSelectedProfileId={setSelectedProfileId}
                  mappings={mappings}
                  onOpenDetail={openDetail}
                />
              </Card>
            )}
            {tab === 'editor' && (
              <MappingEditorTab mappings={mappings} onSaveMapping={saveMapping} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Detail modal */}
      {detailLens && detailProfile && (
        <VisualDetailModal
          lens={detailLens}
          profile={detailProfile}
          mappings={mappings}
          onClose={closeDetail}
          onSaveMapping={saveMapping}
        />
      )}
    </div>
  );
}
