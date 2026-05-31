import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  RadarChart, PolarGrid, PolarAngleAxis, Radar,
  PieChart, Pie, Cell,
} from 'recharts';
import {
  Brain, Layers3, Search, Eye, Edit3, Grid, List,
  X, Save, CheckCircle2, AlertCircle, BookOpen, Users,
  Database, RefreshCw, Upload, ChevronRight, BarChart3,
} from 'lucide-react';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';
import { HSI_MAPPINGS as SEED_MAPPINGS } from '../data/hsiMappings.js';
import { PI_PROFILES } from '../data/profiles.js';

// ─── helpers ───────────────────────────────────────────────────────────────
function cx(...c) { return c.filter(Boolean).join(' '); }

const LOCAL_KEY = 'hsi_mappings_v2';
const API_BASE = '/api/hsi';

function loadLocal() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || 'null') || null; }
  catch { return null; }
}
function saveLocal(m) {
  try { localStorage.setItem(LOCAL_KEY, JSON.stringify(m)); } catch {}
}
function mk(lensId, profileId) { return `${lensId}__${profileId}`; }

const CAT_COLORS = {
  Personality:   '#818cf8',
  Cognitive:     '#38bdf8',
  Motivation:    '#34d399',
  Team:          '#fb923c',
  Emotional:     '#f472b6',
  Wellbeing:     '#a78bfa',
  Leadership:    '#fbbf24',
  Neurodiversity:'#86efac',
  Other:         '#94a3b8',
};
const CHART_COLORS = ['#818cf8','#38bdf8','#34d399','#fb923c','#f472b6','#a78bfa','#fbbf24','#86efac'];

// ─── shared sub-components ────────────────────────────────────────────────
function Card({ children, className = '' }) {
  return (
    <div className={cx('rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/20 backdrop-blur-xl', className)}>
      {children}
    </div>
  );
}

function StatusBadge({ mapped }) {
  return mapped ? (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/25 whitespace-nowrap">
      <CheckCircle2 size={10} /> Mapped
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-400 border border-amber-500/25 whitespace-nowrap">
      <AlertCircle size={10} /> Needs mapping
    </span>
  );
}

function CatBadge({ category }) {
  const color = CAT_COLORS[category] || CAT_COLORS.Other;
  return (
    <span className="text-xs px-2 py-0.5 rounded-full font-medium whitespace-nowrap flex-shrink-0"
      style={{ background: `${color}20`, color }}>
      {category}
    </span>
  );
}

// ─── visual placeholder ───────────────────────────────────────────────────
function VisualPlaceholder({ lens, profile, mapping }) {
  const hasMapping = !!(mapping?.outputText);
  const { visualType, visualLabel } = lens;

  const barData = [
    { name: 'Dom',  value: profile.dominance },
    { name: 'Ext',  value: profile.extraversion },
    { name: 'Pat',  value: profile.patience },
    { name: 'Form', value: profile.formality },
  ];
  const radarData = [
    { subject: 'Dominance',    A: profile.dominance },
    { subject: 'Extraversion', A: profile.extraversion },
    { subject: 'Patience',     A: profile.patience },
    { subject: 'Formality',    A: profile.formality },
  ];

  const RADAR_TYPES = ['radar','radarBars','hexagonRadar','lineRadar','spiderTrend',
    'layeredRadar','radarSubscaleBars','fourAxisRadial','radarBarsRadar'];
  const BAR_TYPES = ['profileBars','riskBars','multiBarProfile','rankedBars','rankedBarsRadar',
    'motiveBars','threeBars','fiveModeBars','continuumBars','multiAxisBars','stackedWorkloadBars',
    'multiDomainBars','itemTablePassRate','scoreGauge','gaugeDistribution'];
  const QUAD_TYPES = ['quadrantPlot','scatterQuadrant','temperamentQuadrant','matrix',
    'brainQuadrantWheel','brainQuadrant'];
  const WHEEL_TYPES = ['colorWheel','segmentedWheel','pieStackedBars','enneagramWheel',
    'circumplex','valuesCircumplex','triangleCircumplex','gaugeHeatmap','threeBarsCircumplex',
    'networkHeatmap'];

  const renderChart = () => {
    if (RADAR_TYPES.includes(visualType)) {
      return (
        <div className="h-44">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={radarData}>
              <PolarGrid stroke="rgba(255,255,255,.12)" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 10 }} />
              <Radar dataKey="A" stroke="#818cf8" fill="#818cf8" fillOpacity={hasMapping ? 0.35 : 0.15} strokeDasharray={hasMapping ? '0' : '4 2'} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
      );
    }
    if (BAR_TYPES.includes(visualType)) {
      return (
        <div className="h-36">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={barData} barSize={20}>
              <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,.4)', fontSize: 10 }} />
              <YAxis domain={[0,100]} tick={{ fill: 'rgba(255,255,255,.25)', fontSize: 10 }} />
              <Bar dataKey="value" fill="#38bdf8" fillOpacity={hasMapping ? 0.7 : 0.3} radius={[4,4,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      );
    }
    if (QUAD_TYPES.includes(visualType)) {
      return (
        <div className="relative h-40 rounded-xl border border-white/10 bg-white/[0.03]">
          <div className="absolute inset-0">
            <div className="w-px h-full bg-white/10 absolute left-1/2" />
            <div className="h-px w-full bg-white/10 absolute top-1/2" />
          </div>
          <div className="absolute w-3 h-3 rounded-full bg-sky-400 shadow-lg shadow-sky-400/50 transition-all"
            style={{ left: `calc(${profile.dominance}% - 6px)`, top: `calc(${100-profile.extraversion}% - 6px)`, opacity: hasMapping ? 1 : 0.4 }} />
          <span className="absolute bottom-2 left-0 right-0 text-center text-xs text-white/30">
            {hasMapping ? `D:${profile.dominance} E:${profile.extraversion}` : 'Quadrant placeholder'}
          </span>
        </div>
      );
    }
    if (WHEEL_TYPES.includes(visualType)) {
      const pieData = [
        { name:'D', value: profile.dominance },
        { name:'E', value: profile.extraversion },
        { name:'P', value: profile.patience },
        { name:'F', value: profile.formality },
      ];
      return (
        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={60} strokeWidth={0}>
                {pieData.map((_, i) => <Cell key={i} fill={CHART_COLORS[i]} fillOpacity={hasMapping ? 0.7 : 0.3} />)}
              </Pie>
              <Tooltip contentStyle={{ background:'rgba(15,23,42,.95)', border:'1px solid rgba(255,255,255,.12)', borderRadius:12, fontSize:11 }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    }
    // Default structured card
    return (
      <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center">
        <div className="text-3xl mb-2 opacity-20">⬡</div>
        <p className="text-xs text-white/30">{visualLabel}</p>
      </div>
    );
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
      <div className="mb-3 flex items-center justify-between gap-2">
        <span className="text-xs font-medium text-white/40 uppercase tracking-wider truncate">{visualLabel}</span>
        <StatusBadge mapped={hasMapping} />
      </div>
      {hasMapping && (
        <p className="text-sm text-white/80 leading-5 mb-3">{mapping.outputText}</p>
      )}
      {mapping?.fields && Object.keys(mapping.fields).length > 0 && (
        <div className="grid grid-cols-2 gap-1.5 mb-3">
          {Object.entries(mapping.fields).slice(0,6).map(([k,v]) => (
            <div key={k} className="rounded-lg bg-white/5 px-2.5 py-1.5">
              <div className="text-xs text-white/35">{k}</div>
              <div className="text-sm font-semibold text-white leading-tight">{v}</div>
            </div>
          ))}
        </div>
      )}
      {renderChart()}
      {!hasMapping && (
        <p className="text-center text-xs text-white/20 mt-2">Needs profile mapping</p>
      )}
    </div>
  );
}

// ─── 1. Lens Visual Registry ──────────────────────────────────────────────
function LensRegistryTab({ mappings }) {
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('All');
  const cats = useMemo(() => ['All', ...Array.from(new Set(HSI_LENS_REGISTRY.map(l => l.category)))], []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return HSI_LENS_REGISTRY.filter(l =>
      (catFilter === 'All' || l.category === catFilter) &&
      (l.lens.toLowerCase().includes(q) || l.visualType.toLowerCase().includes(q) || l.category.toLowerCase().includes(q))
    );
  }, [search, catFilter]);

  const profileCount = useMemo(() => {
    const counts = {};
    HSI_LENS_REGISTRY.forEach(l => {
      counts[l.id] = PI_PROFILES.filter(p => mappings[mk(l.id, p.id)]?.outputText).length;
    });
    return counts;
  }, [mappings]);

  return (
    <div>
      <div className="flex flex-wrap gap-3 mb-4">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={15} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search lenses…"
            className="w-full rounded-2xl border border-white/10 bg-black/30 pl-9 pr-4 py-2.5 text-sm text-white placeholder:text-white/30 outline-none focus:border-sky-400/40" />
        </div>
        <div className="flex flex-wrap gap-1.5">
          {cats.map(c => (
            <button key={c} onClick={() => setCatFilter(c)}
              className={cx('px-3 py-1.5 rounded-xl text-xs border transition',
                catFilter === c ? 'bg-sky-500/20 border-sky-400/40 text-sky-300' : 'border-white/10 text-white/40 hover:text-white hover:bg-white/10'
              )}>{c}</button>
          ))}
        </div>
      </div>
      <div className="text-xs text-white/35 mb-3">{filtered.length} of {HSI_LENS_REGISTRY.length} lenses</div>
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-xs uppercase tracking-widest text-white/25 bg-white/[0.04]">
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Lens</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Visual Type</th>
              <th className="px-4 py-3 hidden lg:table-cell">Visual Label</th>
              <th className="px-4 py-3 hidden xl:table-cell">Why</th>
              <th className="px-4 py-3">Profiles</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lens, i) => (
              <tr key={lens.id} className={cx('border-t border-white/5', i % 2 === 0 ? 'bg-white/[0.015]' : '')}>
                <td className="px-4 py-3 text-white/25 text-xs">{HSI_LENS_REGISTRY.indexOf(lens) + 1}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-white text-sm">{lens.lens}</div>
                  <div className="text-xs text-white/25 font-mono mt-0.5 truncate max-w-[200px]">{lens.id}</div>
                </td>
                <td className="px-4 py-3"><CatBadge category={lens.category} /></td>
                <td className="px-4 py-3 text-white/50 text-xs font-mono">{lens.visualType}</td>
                <td className="px-4 py-3 text-white/55 text-xs hidden lg:table-cell">{lens.visualLabel}</td>
                <td className="px-4 py-3 text-white/35 text-xs hidden xl:table-cell max-w-xs truncate">{lens.why}</td>
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="w-14 h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div className="h-full rounded-full bg-emerald-400 transition-all"
                        style={{ width: `${(profileCount[lens.id] / 17) * 100}%` }} />
                    </div>
                    <span className="text-xs text-white/35">{profileCount[lens.id]}/17</span>
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

// ─── 2. PI Profile Selector ───────────────────────────────────────────────
function ProfileSelectorTab({ selectedProfileId, setSelectedProfileId, mappings, onViewLenses }) {
  const GC = {
    Analytical:  { bg:'bg-sky-500/10',     border:'border-sky-400/30',     text:'text-sky-300',     dot:'bg-sky-400'    },
    Social:      { bg:'bg-fuchsia-500/10', border:'border-fuchsia-400/30', text:'text-fuchsia-300', dot:'bg-fuchsia-400' },
    Stabilizing: { bg:'bg-emerald-500/10', border:'border-emerald-400/30', text:'text-emerald-300', dot:'bg-emerald-400' },
    Persistent:  { bg:'bg-amber-500/10',   border:'border-amber-400/30',   text:'text-amber-300',   dot:'bg-amber-400'  },
  };
  const groups = useMemo(() => {
    const g = {};
    PI_PROFILES.forEach(p => { if (!g[p.group]) g[p.group] = []; g[p.group].push(p); });
    return g;
  }, []);

  const mappedCount = pid => HSI_LENS_REGISTRY.filter(l => mappings[mk(l.id, pid)]?.outputText).length;

  return (
    <div className="space-y-6">
      {Object.entries(groups).map(([group, profiles]) => {
        const gc = GC[group] || GC.Analytical;
        return (
          <div key={group}>
            <h3 className={cx('text-xs font-bold uppercase tracking-widest mb-3', gc.text)}>{group}</h3>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {profiles.map(p => {
                const mc = mappedCount(p.id);
                const isSel = selectedProfileId === p.id;
                return (
                  <button key={p.id} onClick={() => { setSelectedProfileId(p.id); onViewLenses(); }}
                    className={cx('rounded-2xl border p-4 text-left transition group',
                      gc.bg, gc.border,
                      isSel ? 'ring-2 ring-white/30 scale-[1.02]' : 'hover:scale-[1.01] hover:brightness-110'
                    )}>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-bold text-white">{p.name}</div>
                        <div className="text-xs text-white/45">{p.tagline}</div>
                      </div>
                      <div className={cx('w-2.5 h-2.5 rounded-full mt-1 flex-shrink-0', gc.dot)} />
                    </div>
                    <p className="text-xs text-white/45 leading-5 mb-3">{p.short}</p>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-1.5 rounded-full bg-white/10 overflow-hidden">
                        <div className="h-full rounded-full bg-emerald-400 transition-all"
                          style={{ width: `${(mc / HSI_LENS_REGISTRY.length) * 100}%` }} />
                      </div>
                      <span className="text-xs text-white/35 flex-shrink-0">{mc}/{HSI_LENS_REGISTRY.length}</span>
                    </div>
                    {isSel && <div className="mt-2 text-xs text-white/60">✓ Selected — view lenses →</div>}
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

// ─── 3. Lens-by-Profile Results ────────────────────────────────────────────
function LensByProfileTab({ selectedProfileId, setSelectedProfileId, mappings, onOpenDetail }) {
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState('cards');

  const profile = PI_PROFILES.find(p => p.id === selectedProfileId) || PI_PROFILES[0];
  const cats = useMemo(() => ['All', ...Array.from(new Set(HSI_LENS_REGISTRY.map(l => l.category)))], []);

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return HSI_LENS_REGISTRY.filter(l => {
      const isMapped = !!mappings[mk(l.id, profile.id)]?.outputText;
      if (statusFilter === 'Mapped' && !isMapped) return false;
      if (statusFilter === 'Unmapped' && isMapped) return false;
      if (catFilter !== 'All' && l.category !== catFilter) return false;
      return l.lens.toLowerCase().includes(q) || l.category.toLowerCase().includes(q);
    });
  }, [search, catFilter, statusFilter, profile, mappings]);

  const totalMapped = HSI_LENS_REGISTRY.filter(l => mappings[mk(l.id, profile.id)]?.outputText).length;

  return (
    <div>
      {/* Profile strip */}
      <div className="mb-4 flex flex-wrap gap-1.5 items-center">
        <span className="text-xs text-white/35 mr-1 flex-shrink-0">Profile:</span>
        {PI_PROFILES.map(p => (
          <button key={p.id} onClick={() => setSelectedProfileId(p.id)}
            className={cx('px-2.5 py-1 rounded-lg text-xs border transition',
              p.id === profile.id ? 'border-white/30 bg-white/15 text-white' : 'border-white/10 text-white/35 hover:text-white hover:bg-white/10'
            )}>{p.name}</button>
        ))}
      </div>

      {/* Profile banner */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 mb-4 flex items-center gap-4">
        <div className="w-2.5 h-14 rounded-full flex-shrink-0" style={{ background: profile.color }} />
        <div className="min-w-0">
          <div className="text-base font-bold text-white">{profile.name}</div>
          <div className="text-sm text-white/45">{profile.tagline} · {profile.group}</div>
          <div className="text-xs text-white/30 mt-0.5 truncate">{profile.short}</div>
        </div>
        <div className="ml-auto text-right flex-shrink-0">
          <div className="text-2xl font-bold text-white">{totalMapped}</div>
          <div className="text-xs text-white/35">of {HSI_LENS_REGISTRY.length} mapped</div>
          <div className="mt-1.5 w-24 h-1.5 rounded-full bg-white/10 overflow-hidden ml-auto">
            <div className="h-full rounded-full bg-emerald-400" style={{ width: `${(totalMapped/HSI_LENS_REGISTRY.length)*100}%` }} />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-2 mb-3">
        <div className="relative flex-1 min-w-[160px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/30" size={13} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Filter lenses…"
            className="w-full rounded-xl border border-white/10 bg-black/30 pl-8 pr-3 py-2 text-sm text-white placeholder:text-white/25 outline-none focus:border-sky-400/40" />
        </div>
        <div className="flex gap-1">
          {['All','Mapped','Unmapped'].map(s => (
            <button key={s} onClick={() => setStatusFilter(s)}
              className={cx('px-3 py-2 rounded-xl text-xs border transition',
                statusFilter === s ? 'bg-sky-500/20 border-sky-400/40 text-sky-300' : 'border-white/10 text-white/35 hover:text-white'
              )}>{s}</button>
          ))}
        </div>
        <div className="ml-auto flex gap-1">
          <button onClick={() => setViewMode('cards')}
            className={cx('p-2 rounded-xl border transition', viewMode==='cards'?'border-white/30 bg-white/15':'border-white/10 hover:bg-white/10')}>
            <Grid size={13} className="text-white/60" />
          </button>
          <button onClick={() => setViewMode('list')}
            className={cx('p-2 rounded-xl border transition', viewMode==='list'?'border-white/30 bg-white/15':'border-white/10 hover:bg-white/10')}>
            <List size={13} className="text-white/60" />
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-1.5 mb-4">
        {cats.map(c => (
          <button key={c} onClick={() => setCatFilter(c)}
            className={cx('px-2.5 py-1 rounded-lg text-xs border transition',
              catFilter === c ? 'border-sky-400/40 text-sky-300 bg-sky-500/15' : 'border-white/10 text-white/35 hover:text-white'
            )}>{c}</button>
        ))}
      </div>
      <div className="text-xs text-white/25 mb-3">{filtered.length} lenses shown</div>

      {viewMode === 'cards' ? (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map(lens => {
            const mapping = mappings[mk(lens.id, profile.id)];
            const isMapped = !!mapping?.outputText;
            return (
              <button key={lens.id} onClick={() => onOpenDetail(lens, profile)}
                className={cx('text-left rounded-2xl border p-4 transition group hover:scale-[1.01]',
                  isMapped ? 'border-emerald-500/25 bg-emerald-500/5 hover:bg-emerald-500/10' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07]'
                )}>
                <div className="flex items-start justify-between mb-2 gap-2">
                  <div className="font-semibold text-white text-sm leading-snug flex-1 min-w-0">{lens.lens}</div>
                  <CatBadge category={lens.category} />
                </div>
                <div className="mb-2 text-xs text-white/35">{lens.visualLabel}</div>
                <div className="mb-3"><StatusBadge mapped={isMapped} /></div>
                {isMapped ? (
                  <p className="text-xs text-white/55 leading-5 line-clamp-2">{mapping.outputText}</p>
                ) : (
                  <p className="text-xs text-white/25 leading-5 line-clamp-2">{lens.why}</p>
                )}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs font-mono text-white/20">{lens.visualType}</span>
                  <span className="text-xs text-sky-400/70 opacity-0 group-hover:opacity-100 transition">Open →</span>
                </div>
              </button>
            );
          })}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 overflow-hidden">
          {filtered.map((lens, i) => {
            const mapping = mappings[mk(lens.id, profile.id)];
            const isMapped = !!mapping?.outputText;
            return (
              <button key={lens.id} onClick={() => onOpenDetail(lens, profile)}
                className={cx('w-full text-left px-4 py-3 flex items-center gap-3 transition group hover:bg-white/[0.05]',
                  i > 0 ? 'border-t border-white/5' : ''
                )}>
                <span className="text-xs text-white/20 w-7 flex-shrink-0">{HSI_LENS_REGISTRY.indexOf(lens)+1}</span>
                <span className="flex-1 font-medium text-white text-sm truncate min-w-0">{lens.lens}</span>
                <span className="hidden sm:block flex-shrink-0"><CatBadge category={lens.category} /></span>
                <span className="hidden md:block text-xs text-white/30 flex-shrink-0">{lens.visualLabel}</span>
                <StatusBadge mapped={isMapped} />
                <ChevronRight size={13} className="text-white/20 group-hover:text-white/50 transition flex-shrink-0" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─── 4. Visual Preview Modal ──────────────────────────────────────────────
function VisualDetailModal({ lens, profile, mappings, onClose, onSaveMapping }) {
  const mkey = mk(lens.id, profile.id);
  const existing = mappings[mkey] || {};
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
    onSaveMapping(mkey, { outputText, fieldsRaw, fields, notes, status });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onClose} />
      <div className="relative z-10 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-white/15 bg-slate-900 shadow-2xl">
        <div className="sticky top-0 bg-slate-900/95 backdrop-blur border-b border-white/10 p-5 flex items-start justify-between z-10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <CatBadge category={lens.category} />
              <span className="text-xs text-white/30 font-mono">{lens.visualType}</span>
            </div>
            <h2 className="text-lg font-bold text-white leading-tight">{lens.lens}</h2>
            <div className="text-sm text-white/45 mt-0.5">
              Viewing through: <span className="text-white font-medium">{profile.name}</span>
            </div>
          </div>
          <button onClick={onClose} className="text-white/35 hover:text-white transition p-1 flex-shrink-0"><X size={20} /></button>
        </div>

        <div className="p-5 grid gap-5 lg:grid-cols-2">
          <div>
            <div className="text-xs uppercase tracking-widest text-white/25 mb-3">Visual Preview</div>
            <VisualPlaceholder lens={lens} profile={profile} mapping={existing} />
            <div className="mt-3 rounded-xl bg-white/[0.04] border border-white/10 p-3">
              <div className="text-xs text-white/35 mb-1">Why this visual</div>
              <p className="text-xs text-white/60 leading-5">{lens.why}</p>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1.5">
              {[['D',profile.dominance,'sky'],['E',profile.extraversion,'fuchsia'],['P',profile.patience,'emerald'],['F',profile.formality,'amber']].map(([k,v,c]) => (
                <div key={k} className="rounded-xl bg-white/[0.04] p-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-white/40">{k==='D'?'Dominance':k==='E'?'Extraversion':k==='P'?'Patience':'Formality'}</span>
                    <span className="text-white/70 font-semibold">{v}</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className={`h-full rounded-full bg-${c}-400`} style={{ width:`${v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-widest text-white/25 mb-3 flex items-center gap-1">
              <Edit3 size={11} /> Mapping Editor
            </div>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-white/45 mb-1">Profile-specific output text</label>
                <textarea value={outputText} onChange={e => setOutputText(e.target.value)} rows={5}
                  placeholder={`How does the ${lens.lens} lens apply to the ${profile.name} profile?`}
                  className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40 resize-none" />
              </div>
              <div>
                <label className="block text-xs text-white/45 mb-1">Visual fields <span className="text-white/20">(key: value per line)</span></label>
                <textarea value={fieldsRaw} onChange={e => setFieldsRaw(e.target.value)} rows={3}
                  placeholder={"Dimension 1: High\nDimension 2: Moderate"}
                  className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40 resize-none font-mono" />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-xs text-white/45 mb-1">Notes</label>
                  <input value={notes} onChange={e => setNotes(e.target.value)} placeholder="Internal notes…"
                    className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40" />
                </div>
                <div>
                  <label className="block text-xs text-white/45 mb-1">Status</label>
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
                className={cx('w-full flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition',
                  saved ? 'bg-emerald-500/25 border border-emerald-400/40 text-emerald-300' : 'bg-sky-500/20 border border-sky-400/40 text-sky-300 hover:bg-sky-500/30'
                )}>
                <Save size={14} /> {saved ? 'Saved!' : 'Save Mapping'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── 5. Mapping Editor Tab ────────────────────────────────────────────────
function MappingEditorTab({ mappings, onSaveMapping, dbStatus }) {
  const [lensId, setLensId] = useState(HSI_LENS_REGISTRY[0].id);
  const [profileId, setProfileId] = useState(PI_PROFILES[0].id);
  const lens = HSI_LENS_REGISTRY.find(l => l.id === lensId) || HSI_LENS_REGISTRY[0];
  const profile = PI_PROFILES.find(p => p.id === profileId) || PI_PROFILES[0];
  const mkey = mk(lensId, profileId);
  const existing = mappings[mkey] || {};

  const [outputText, setOutputText] = useState(existing.outputText || '');
  const [fieldsRaw, setFieldsRaw] = useState(existing.fieldsRaw || '');
  const [notes, setNotes] = useState(existing.notes || '');
  const [status, setStatus] = useState(existing.status || 'unmapped');
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const m = mappings[mk(lensId, profileId)] || {};
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
    onSaveMapping(mkey, { outputText, fieldsRaw, fields, notes, status });
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  }

  const totalMapped = Object.values(mappings).filter(m => m.outputText).length;
  const total = HSI_LENS_REGISTRY.length * PI_PROFILES.length;
  const pct = Math.round((totalMapped / total) * 100);

  return (
    <div>
      {/* Stats row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
        {[
          { label: 'Lenses',   value: HSI_LENS_REGISTRY.length, color: 'text-sky-400' },
          { label: 'Profiles', value: PI_PROFILES.length, color: 'text-fuchsia-400' },
          { label: 'Possible', value: total.toLocaleString(), color: 'text-amber-400' },
          { label: 'Mapped',   value: `${totalMapped} (${pct}%)`, color: 'text-emerald-400' },
        ].map(s => (
          <div key={s.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-xs text-white/35">{s.label}</div>
            <div className={cx('text-2xl font-bold mt-1', s.color)}>{s.value}</div>
          </div>
        ))}
      </div>
      {dbStatus === 'connected' && (
        <div className="mb-4 flex items-center gap-2 text-xs text-emerald-400">
          <Database size={12} /> Synced to database
        </div>
      )}

      <div className="grid gap-5 lg:grid-cols-[280px_1fr]">
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-white/40 mb-1.5">Lens ({HSI_LENS_REGISTRY.length})</label>
            <select value={lensId} onChange={e => setLensId(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-sky-400/40">
              {HSI_LENS_REGISTRY.map(l => (
                <option key={l.id} value={l.id}>{l.lens}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs text-white/40 mb-1.5">PI Profile (17)</label>
            <select value={profileId} onChange={e => setProfileId(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-black/40 px-3 py-2.5 text-sm text-white outline-none focus:border-sky-400/40">
              {PI_PROFILES.map(p => (
                <option key={p.id} value={p.id}>{p.name} ({p.group})</option>
              ))}
            </select>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3 space-y-2">
            <div className="text-xs text-white/35">Lens</div>
            <div className="text-sm font-medium text-white leading-snug">{lens.lens}</div>
            <div className="text-xs text-white/45">{lens.visualLabel}</div>
            <CatBadge category={lens.category} />
            <div className="text-xs text-white/30 leading-4 pt-1">{lens.why}</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.04] p-3">
            <div className="text-xs text-white/35 mb-2">Profile: {profile.name}</div>
            <div className="text-xs text-white/45 mb-2">{profile.short}</div>
            <div className="grid grid-cols-2 gap-1.5">
              {[['Dominance',profile.dominance],['Extraversion',profile.extraversion],['Patience',profile.patience],['Formality',profile.formality]].map(([k,v]) => (
                <div key={k}>
                  <div className="flex justify-between text-xs mb-0.5">
                    <span className="text-white/35">{k}</span><span className="text-white/60">{v}</span>
                  </div>
                  <div className="h-1 rounded-full bg-white/10 overflow-hidden">
                    <div className="h-full rounded-full bg-sky-400/60" style={{width:`${v}%`}} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Card className="p-5">
          <div className="flex items-center gap-2 mb-4">
            <Edit3 size={15} className="text-sky-400" />
            <span className="font-semibold text-white">Mapping Editor</span>
            <StatusBadge mapped={!!existing.outputText} />
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-xs text-white/45 mb-1.5">Profile-specific output text <span className="text-red-400">*</span></label>
              <textarea value={outputText} onChange={e => setOutputText(e.target.value)} rows={6}
                placeholder={`How does the ${lens.lens} lens apply to the ${profile.name} profile? What does this framework reveal about this behavioral type?`}
                className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40 resize-none" />
            </div>
            <div>
              <label className="block text-xs text-white/45 mb-1.5">Visual fields <span className="text-white/20">(key: value — one per line, used to render charts)</span></label>
              <textarea value={fieldsRaw} onChange={e => setFieldsRaw(e.target.value)} rows={4}
                placeholder={"Dim 1: High\nDim 2: Moderate\nDim 3: Low"}
                className="w-full rounded-xl border border-white/15 bg-black/30 p-3 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40 resize-none font-mono" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs text-white/45 mb-1.5">Notes / cleanup status</label>
                <input value={notes} onChange={e => setNotes(e.target.value)} placeholder="Internal notes…"
                  className="w-full rounded-xl border border-white/15 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/20 outline-none focus:border-sky-400/40" />
              </div>
              <div>
                <label className="block text-xs text-white/45 mb-1.5">Mapping status</label>
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
              className={cx('w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-semibold transition',
                saved ? 'bg-emerald-500/25 border border-emerald-400/40 text-emerald-300' : 'bg-sky-500/20 border border-sky-400/40 text-sky-300 hover:bg-sky-500/30'
              )}>
              <Save size={15} /> {saved ? 'Mapping Saved!' : 'Save Mapping'}
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
  const [mappings, setMappings] = useState(() => {
    // Start with seed mappings, then overlay any local saves
    const local = loadLocal();
    return local ? { ...SEED_MAPPINGS, ...local } : { ...SEED_MAPPINGS };
  });
  const [detailLens, setDetailLens] = useState(null);
  const [detailProfile, setDetailProfile] = useState(null);
  const [dbStatus, setDbStatus] = useState('unknown'); // 'unknown'|'connected'|'error'|'seeding'
  const [dbMessage, setDbMessage] = useState('');
  const seededRef = useRef(false);

  // Try to load from DB on mount, seed if needed
  useEffect(() => {
    async function init() {
      try {
        const res = await fetch(`${API_BASE}/mappings`);
        if (!res.ok) { setDbStatus('error'); setDbMessage('DB not available — using local storage'); return; }
        const data = await res.json();
        if (data.ok) {
          const dbCount = Object.keys(data.mappings).length;
          if (dbCount > 0) {
            // Merge DB mappings (DB wins for overlaps)
            setMappings(prev => ({ ...SEED_MAPPINGS, ...prev, ...data.mappings }));
            setDbStatus('connected');
            setDbMessage(`${dbCount} mappings loaded from database`);
          } else if (!seededRef.current) {
            // Seed DB with auto-extracted mappings
            seededRef.current = true;
            setDbStatus('seeding');
            setDbMessage('Seeding database with auto-extracted mappings…');
            try {
              const seedRes = await fetch(`${API_BASE}/mappings/bulk`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ mappings: SEED_MAPPINGS }),
              });
              const seedData = await seedRes.json();
              if (seedData.ok) {
                setDbStatus('connected');
                setDbMessage(`${seedData.inserted} mappings seeded to database`);
              }
            } catch { setDbStatus('error'); setDbMessage('Seeding failed — using local data'); }
          }
        }
      } catch {
        setDbStatus('error');
        setDbMessage('No DB connection — using local storage + seed data');
      }
    }
    init();
  }, []);

  const saveMapping = useCallback(async (key, data) => {
    // Update state + local immediately
    setMappings(prev => {
      const next = { ...prev, [key]: { ...prev[key], ...data } };
      // Save local overrides only (not the seed data)
      const local = loadLocal() || {};
      local[key] = next[key];
      saveLocal(local);
      return next;
    });
    // Also try to sync to DB
    if (dbStatus === 'connected' || dbStatus === 'seeding') {
      try {
        const [lensId, profileId] = key.split('__');
        await fetch(`${API_BASE}/mappings/${lensId}/${profileId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
      } catch {}
    }
  }, [dbStatus]);

  const openDetail = useCallback((lens, profile) => {
    setDetailLens(lens);
    setDetailProfile(profile);
  }, []);

  const totalMapped = Object.values(mappings).filter(m => m.outputText).length;
  const totalPossible = HSI_LENS_REGISTRY.length * PI_PROFILES.length;
  const pct = Math.round((totalMapped / totalPossible) * 100);

  const TABS = [
    { id:'registry', label:'Lens Registry',       icon: BookOpen },
    { id:'profiles', label:'PI Profile Selector', icon: Users },
    { id:'results',  label:'Lens-by-Profile',      icon: Layers3 },
    { id:'editor',   label:'Mapping Editor',       icon: Edit3 },
  ];

  return (
    <div>
      {/* Header */}
      <div className="mb-5 rounded-3xl border border-white/10 bg-white/[0.05] p-5 shadow-xl shadow-black/20 backdrop-blur-xl">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap gap-2 mb-2">
              {[
                `${HSI_LENS_REGISTRY.length} Lenses`,
                `${PI_PROFILES.length} PI Profiles`,
                `${totalPossible.toLocaleString()} Possible Outputs`,
              ].map(l => (
                <span key={l} className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">{l}</span>
              ))}
              <span className={cx('inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs',
                dbStatus==='connected' ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300' :
                dbStatus==='error' ? 'border-amber-500/30 bg-amber-500/10 text-amber-300' :
                'border-white/10 bg-white/10 text-white/50'
              )}>
                <Database size={10} />
                {dbStatus === 'connected' ? 'DB connected' : dbStatus === 'seeding' ? 'Seeding…' : dbStatus === 'error' ? 'Local mode' : 'Connecting…'}
              </span>
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Human Systems Intelligence</h1>
            <p className="mt-1 text-sm text-white/45 max-w-2xl leading-5">
              {HSI_LENS_REGISTRY.length} × {PI_PROFILES.length} lens-profile system. Every lens applies to every PI profile.
              {dbMessage && <span className="ml-1 text-white/30">{dbMessage}</span>}
            </p>
          </div>
          <div className="text-right flex-shrink-0">
            <div className="text-4xl font-bold text-white">{pct}%</div>
            <div className="text-xs text-white/35">mapped</div>
            <div className="text-sm font-semibold text-white mt-1">{totalMapped.toLocaleString()}/{totalPossible.toLocaleString()}</div>
            <div className="mt-2 w-28 h-2 rounded-full bg-white/10 overflow-hidden ml-auto">
              <div className="h-full rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 transition-all"
                style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>
      </div>

      {/* Tab nav */}
      <div className="flex flex-wrap gap-2 mb-5">
        {TABS.map(t => {
          const Icon = t.icon;
          return (
            <button key={t.id} onClick={() => setTab(t.id)}
              className={cx('flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm transition',
                tab===t.id ? 'border-sky-300/40 bg-sky-500/15 text-white shadow-lg' : 'border-white/10 bg-white/[0.04] text-white/45 hover:bg-white/10 hover:text-white'
              )}>
              <Icon size={14} /> {t.label}
            </button>
          );
        })}
      </div>

      {/* Tab content */}
      <AnimatePresence mode="wait">
        <motion.div key={tab} initial={{ opacity:0, y:8 }} animate={{ opacity:1, y:0 }} exit={{ opacity:0, y:-8 }} transition={{ duration:0.15 }}>
          {tab === 'registry' && <Card className="p-5"><LensRegistryTab mappings={mappings} /></Card>}
          {tab === 'profiles' && <Card className="p-5"><ProfileSelectorTab selectedProfileId={selectedProfileId} setSelectedProfileId={setSelectedProfileId} mappings={mappings} onViewLenses={() => setTab('results')} /></Card>}
          {tab === 'results' && <Card className="p-5"><LensByProfileTab selectedProfileId={selectedProfileId} setSelectedProfileId={setSelectedProfileId} mappings={mappings} onOpenDetail={openDetail} /></Card>}
          {tab === 'editor' && <MappingEditorTab mappings={mappings} onSaveMapping={saveMapping} dbStatus={dbStatus} />}
        </motion.div>
      </AnimatePresence>

      {detailLens && detailProfile && (
        <VisualDetailModal lens={detailLens} profile={detailProfile} mappings={mappings} onClose={() => { setDetailLens(null); setDetailProfile(null); }} onSaveMapping={saveMapping} />
      )}
    </div>
  );
}
