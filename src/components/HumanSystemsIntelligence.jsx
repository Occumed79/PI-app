import React, { useMemo, useState } from 'react';
import {
  BookOpen, Eye, Grid, List, Search, Users, X,
} from 'lucide-react';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';
import { PI_PROFILES, PROFILE_GROUPS } from '../data/profiles.js';

// ─── helpers ──────────────────────────────────────────────────────────────

function cx(...classes) { return classes.filter(Boolean).join(' '); }

const CATEGORY_STYLES = {
  Personality:    'text-indigo-300  bg-indigo-500/10  border-indigo-400/20',
  Cognitive:      'text-sky-300     bg-sky-500/10     border-sky-400/20',
  Motivation:     'text-emerald-300 bg-emerald-500/10 border-emerald-400/20',
  Team:           'text-orange-300  bg-orange-500/10  border-orange-400/20',
  Emotional:      'text-pink-300    bg-pink-500/10    border-pink-400/20',
  Leadership:     'text-yellow-300  bg-yellow-500/10  border-yellow-400/20',
  Wellbeing:      'text-purple-300  bg-purple-500/10  border-purple-400/20',
  Neurodiversity: 'text-teal-300    bg-teal-500/10    border-teal-400/20',
  Other:          'text-slate-300   bg-slate-500/10   border-slate-400/20',
};

function catStyle(cat) { return CATEGORY_STYLES[cat] || CATEGORY_STYLES.Other; }

function statusVariant(s) {
  const low = (s || '').toLowerCase();
  if (low.includes('finished') || low.includes('done') || low.includes('complete')) return 'done';
  if (low.includes('partial') || low.includes('completing')) return 'partial';
  if (low.includes('not done')) return 'todo';
  return 'unknown';
}

const STATUS_STYLES = {
  done:    'text-emerald-300 bg-emerald-500/10 border-emerald-400/20',
  partial: 'text-amber-300   bg-amber-500/10   border-amber-400/20',
  todo:    'text-slate-400   bg-slate-500/10   border-slate-400/20',
  unknown: 'text-slate-400   bg-slate-500/10   border-slate-400/20',
};
const STATUS_LABELS = { done:'Done', partial:'Partial', todo:'Not yet', unknown:'—' };

function StatusBadge({ status }) {
  const v = statusVariant(status);
  return (
    <span className={cx('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', STATUS_STYLES[v])}>
      {STATUS_LABELS[v]}
    </span>
  );
}

function CatBadge({ category }) {
  return (
    <span className={cx('inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium', catStyle(category))}>
      {category || 'Other'}
    </span>
  );
}

function Card({ children, className }) {
  return (
    <div className={cx('rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/20 backdrop-blur-xl', className)}>
      {children}
    </div>
  );
}

// ─── SVG shape primitives (decorative only, no data) ─────────────────────

function RadarShape() {
  const pts = [0,60,120,180,240,300].map((deg,i) => {
    const r = [44,36,42,38,44,34][i];
    return `${50+r*Math.sin(deg*Math.PI/180)},${50-r*Math.cos(deg*Math.PI/180)}`;
  }).join(' ');
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      {[20,32,44].map(r=>(
        <polygon key={r} points={[0,60,120,180,240,300].map(d=>`${50+r*Math.sin(d*Math.PI/180)},${50-r*Math.cos(d*Math.PI/180)}`).join(' ')} stroke="rgba(255,255,255,.10)" strokeWidth="1" fill="none"/>
      ))}
      {[0,60,120,180,240,300].map(d=>(
        <line key={d} x1="50" y1="50" x2={50+44*Math.sin(d*Math.PI/180)} y2={50-44*Math.cos(d*Math.PI/180)} stroke="rgba(255,255,255,.06)" strokeWidth="1"/>
      ))}
      <polygon points={pts} fill="rgba(99,102,241,.22)" stroke="rgba(99,102,241,.65)" strokeWidth="1.5"/>
    </svg>
  );
}

function WheelShape() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
      <circle cx="50" cy="50" r="26" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
      {[0,90,180,270].map((d,i)=>(
        <path key={d}
          d={`M50,50 L${50+42*Math.sin(d*Math.PI/180)},${50-42*Math.cos(d*Math.PI/180)} A42,42 0 0,1 ${50+42*Math.sin((d+90)*Math.PI/180)},${50-42*Math.cos((d+90)*Math.PI/180)} Z`}
          fill={['rgba(99,102,241,.22)','rgba(56,189,248,.22)','rgba(52,211,153,.22)','rgba(251,146,60,.22)'][i]}
          stroke="rgba(255,255,255,.07)" strokeWidth="0.5"/>
      ))}
    </svg>
  );
}

function QuadrantShape() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <rect x="8" y="8" width="84" height="84" rx="4" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
      <line x1="50" y1="8" x2="50" y2="92" stroke="rgba(255,255,255,.12)" strokeWidth="1"/>
      <line x1="8" y1="50" x2="92" y2="50" stroke="rgba(255,255,255,.12)" strokeWidth="1"/>
      <circle cx="68" cy="28" r="7" fill="rgba(56,189,248,.45)"/>
      <circle cx="30" cy="72" r="7" fill="rgba(52,211,153,.45)"/>
      <circle cx="72" cy="68" r="5" fill="rgba(251,146,60,.45)"/>
      <circle cx="28" cy="30" r="5" fill="rgba(99,102,241,.45)"/>
    </svg>
  );
}

function GridShape() {
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      {[0,1,2,3].map(r=>[0,1,2,3].map(c=>(
        <rect key={`${r}-${c}`} x={8+c*22} y={8+r*22} width="19" height="19" rx="3"
          fill={`rgba(99,102,241,${0.08+((r+c)%3)*0.12})`}
          stroke="rgba(255,255,255,.06)" strokeWidth="0.5"/>
      )))}
    </svg>
  );
}

function BarsShape() {
  const heights = [62,48,72,36,56,44,68,30];
  return (
    <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
      {heights.map((h,i)=>(
        <rect key={i} x={4+i*12} y={80-h} width="9" height={h} rx="2"
          fill={`rgba(56,189,248,${0.22+i*0.05})`}/>
      ))}
    </svg>
  );
}

function GaugeShape() {
  return (
    <svg width="100" height="60" viewBox="0 0 100 60" fill="none">
      <path d="M10,55 A40,40 0 0,1 90,55" stroke="rgba(255,255,255,.10)" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <path d="M10,55 A40,40 0 0,1 62,19" stroke="rgba(56,189,248,.55)" strokeWidth="8" fill="none" strokeLinecap="round"/>
      <line x1="50" y1="55" x2="62" y2="19" stroke="rgba(255,255,255,.7)" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="50" cy="55" r="4" fill="rgba(255,255,255,.6)"/>
    </svg>
  );
}

function HexShape() {
  const pts = [0,60,120,180,240,300].map((deg,i)=>{
    const r=[44,36,42,38,44,34][i];
    return `${50+r*Math.sin(deg*Math.PI/180)},${50-r*Math.cos(deg*Math.PI/180)}`;
  }).join(' ');
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <polygon points={[0,60,120,180,240,300].map(d=>`${50+44*Math.sin(d*Math.PI/180)},${50-44*Math.cos(d*Math.PI/180)}`).join(' ')} stroke="rgba(255,255,255,.08)" strokeWidth="1" fill="none"/>
      <polygon points={pts} fill="rgba(56,189,248,.18)" stroke="rgba(56,189,248,.55)" strokeWidth="1.5"/>
    </svg>
  );
}

function EnneagramShape() {
  const pts = Array.from({length:9},(_,i)=>{
    const deg=(i*40-90)*Math.PI/180;
    return [50+42*Math.cos(deg), 50+42*Math.sin(deg)];
  });
  return (
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,.08)" strokeWidth="1"/>
      {pts.map((p,i)=><circle key={i} cx={p[0]} cy={p[1]} r="3" fill="rgba(168,85,247,.65)"/>)}
      {[0,3,6,1,4,7,2,5,8].map((idx,j,arr)=>(
        <line key={idx} x1={pts[idx][0]} y1={pts[idx][1]}
          x2={pts[arr[(j+1)%arr.length]][0]} y2={pts[arr[(j+1)%arr.length]][1]}
          stroke="rgba(168,85,247,.20)" strokeWidth="0.8"/>
      ))}
    </svg>
  );
}

function TriangleShape() {
  return (
    <svg width="100" height="90" viewBox="0 0 100 90" fill="none">
      <polygon points="50,8 92,82 8,82" fill="rgba(52,211,153,.09)" stroke="rgba(52,211,153,.28)" strokeWidth="1.5"/>
      <polygon points="50,28 76,72 24,72" fill="rgba(52,211,153,.16)" stroke="rgba(52,211,153,.38)" strokeWidth="1"/>
      <circle cx="50" cy="52" r="6" fill="rgba(52,211,153,.6)"/>
    </svg>
  );
}

function CardsShape() {
  return (
    <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
      {[0,1,2].map(i=>(
        <rect key={i} x={6+i*30} y={i%2===0?10:20} width="26" height="52" rx="4"
          fill="rgba(99,102,241,.09)" stroke="rgba(99,102,241,.22)" strokeWidth="1"/>
      ))}
    </svg>
  );
}

const SHAPE_MAP = {
  radar: RadarShape, radarBars: RadarShape, hexagonRadar: HexShape, lineRadar: RadarShape,
  spiderTrend: RadarShape, layeredRadar: RadarShape, radarSubscaleBars: RadarShape,
  fourAxisRadial: RadarShape, radarBarsRadar: RadarShape,
  colorWheel: WheelShape, segmentedWheel: WheelShape, pieStackedBars: WheelShape,
  enneagramWheel: EnneagramShape, circumplex: WheelShape, valuesCircumplex: WheelShape,
  triangleCircumplex: TriangleShape, gaugeHeatmap: GaugeShape, threeBarsCircumplex: WheelShape,
  networkHeatmap: GridShape,
  quadrantPlot: QuadrantShape, scatterQuadrant: QuadrantShape, temperamentQuadrant: QuadrantShape,
  matrix: GridShape, brainQuadrantWheel: QuadrantShape, brainQuadrant: QuadrantShape,
  structuredCards: CardsShape, typeGrid: GridShape, typeGridBars: GridShape, typeGridBarsMBTI: GridShape,
  profileBars: BarsShape, riskBars: BarsShape, multiBarProfile: BarsShape, rankedBars: BarsShape,
  rankedBarsRadar: BarsShape, motiveBars: BarsShape, threeBars: BarsShape, fiveModeBars: BarsShape,
  continuumBars: BarsShape, multiAxisBars: BarsShape, stackedWorkloadBars: BarsShape,
  multiDomainBars: BarsShape,
  scoreGauge: GaugeShape, gaugeDistribution: GaugeShape, itemTablePassRate: GridShape,
};

function VisualShell({ lens, compact = false }) {
  const ShapeComp = SHAPE_MAP[lens.visualType] || CardsShape;

  if (compact) {
    return (
      <div className="relative flex items-center justify-center overflow-hidden rounded-2xl bg-black/30" style={{height:90}}>
        <div className="opacity-35 scale-[0.8]"><ShapeComp/></div>
        <span className="absolute bottom-1.5 left-2 rounded bg-black/50 px-1.5 py-0.5 font-mono text-[9px] text-white/30">
          {lens.visualType}
        </span>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-black/30 p-6">
      <div className="flex flex-col items-center gap-4">
        <div className="opacity-55"><ShapeComp/></div>
        <div className="text-center">
          <p className="text-sm font-semibold text-white/80">{lens.visualLabel}</p>
          <p className="mt-1 font-mono text-xs text-white/30">{lens.visualType}</p>
        </div>
        <div className="w-full rounded-xl border border-dashed border-amber-300/22 bg-amber-500/[0.04] px-4 py-3 text-center">
          <p className="text-xs leading-5 text-amber-200/75">
            Visual type assigned. Data not yet populated.
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── 1. Lens Registry ─────────────────────────────────────────────────────

function LensRegistryTab({ onPreview }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...Array.from(new Set(HSI_LENS_REGISTRY.map(l => l.category || 'Other')))],
    []
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return HSI_LENS_REGISTRY.filter(l => {
      if (category !== 'All' && (l.category || 'Other') !== category) return false;
      return `${l.lens} ${l.id} ${l.visualType} ${l.visualLabel} ${l.why}`.toLowerCase().includes(q);
    });
  }, [query, category]);

  return (
    <Card className="p-5">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-white">
            <BookOpen size={20} className="text-sky-400"/>
            Lens Visual Registry
          </h2>
          <p className="mt-1 text-sm text-white/45">
            {HSI_LENS_REGISTRY.length} lenses · visual type is the source of truth · click any row to preview
          </p>
        </div>
        <div className="relative min-w-[260px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"/>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search lenses…"
            className="w-full rounded-2xl border border-white/10 bg-black/30 py-2.5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/30 focus:border-sky-400/40"/>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map(cat=>(
          <button key={cat} type="button" onClick={()=>setCategory(cat)}
            className={cx('rounded-xl border px-3 py-1.5 text-xs transition',
              category===cat ? 'border-sky-400/40 bg-sky-500/15 text-sky-300' : 'border-white/10 text-white/45 hover:bg-white/10 hover:text-white')}>
            {cat}
          </button>
        ))}
      </div>

      <p className="mb-3 text-xs text-white/30">{filtered.length} of {HSI_LENS_REGISTRY.length} lenses</p>

      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[860px] text-left text-sm">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-widest text-white/25">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Lens</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Visual Type</th>
              <th className="px-4 py-3">Visual Label</th>
              <th className="px-4 py-3">Why this visual</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(lens=>(
              <tr key={lens.id} onClick={()=>onPreview(lens)}
                className="cursor-pointer border-t border-white/5 transition hover:bg-white/[0.05]">
                <td className="px-4 py-3 text-xs text-white/20">{HSI_LENS_REGISTRY.indexOf(lens)+1}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-white">{lens.lens}</div>
                  <div className="mt-0.5 font-mono text-[10px] text-white/20">{lens.id}</div>
                </td>
                <td className="px-4 py-3"><CatBadge category={lens.category}/></td>
                <td className="px-4 py-3 font-mono text-xs text-white/50">{lens.visualType}</td>
                <td className="px-4 py-3 text-xs text-white/55">{lens.visualLabel}</td>
                <td className="max-w-[260px] px-4 py-3 text-xs leading-5 text-white/40">{lens.why}</td>
                <td className="px-4 py-3"><StatusBadge status={lens.status}/></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

// ─── 2. PI Profile Selector ───────────────────────────────────────────────

function ProfileSelectorTab({ selectedProfileId, onSelect }) {
  const groups = useMemo(()=>{
    const g={};
    PI_PROFILES.forEach(p=>{ if(!g[p.group]) g[p.group]=[]; g[p.group].push(p); });
    return g;
  },[]);

  return (
    <Card className="p-5">
      <h2 className="mb-1 flex items-center gap-2 text-xl font-bold text-white">
        <Users size={20} className="text-fuchsia-400"/>
        PI Profile Selector
      </h2>
      <p className="mb-5 text-sm text-white/45">Select a profile — all {HSI_LENS_REGISTRY.length} lenses apply to every profile.</p>

      <div className="space-y-6">
        {Object.entries(groups).map(([group, profiles])=>{
          const gs = PROFILE_GROUPS[group] || {};
          return (
            <div key={group}>
              <div className={cx('mb-3 inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest text-white/80', gs.bg||'bg-white/10')}>
                {group}
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {profiles.map(profile=>{
                  const isSel = profile.id === selectedProfileId;
                  return (
                    <button key={profile.id} type="button" onClick={()=>onSelect(profile.id)}
                      className={cx('rounded-2xl border p-4 text-left transition',
                        isSel ? 'border-sky-300/40 bg-sky-500/15 ring-1 ring-sky-400/20' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07]')}>
                      <div className="mb-2 flex items-center gap-2">
                        <span className="inline-block h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{background:profile.color}}/>
                        <span className="font-bold text-white">{profile.name}</span>
                      </div>
                      <div className="text-xs text-white/40">{profile.tagline}</div>
                      <p className="mt-2 text-xs leading-5 text-white/50">{profile.short}</p>
                      {isSel && <div className="mt-3 text-xs font-semibold text-sky-300">✓ Active — view gallery →</div>}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

// ─── 3. Visual Gallery ────────────────────────────────────────────────────

function VisualGalleryTab({ selectedProfileId, onSelectProfile, onPreview }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const profile = PI_PROFILES.find(p=>p.id===selectedProfileId) || PI_PROFILES[0];

  const categories = useMemo(
    ()=>['All', ...Array.from(new Set(HSI_LENS_REGISTRY.map(l=>l.category||'Other')))],
    []
  );

  const filtered = useMemo(()=>{
    const q = query.trim().toLowerCase();
    return HSI_LENS_REGISTRY.filter(l=>{
      if (category!=='All' && (l.category||'Other')!==category) return false;
      return `${l.lens} ${l.visualType} ${l.visualLabel} ${l.category}`.toLowerCase().includes(q);
    });
  },[query, category]);

  return (
    <div className="space-y-4">
      {/* Profile bar */}
      <Card className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 flex-shrink-0 rounded-full" style={{background:profile.color}}/>
            <span className="font-bold text-white">{profile.name}</span>
            <span className="text-sm text-white/40">{profile.tagline}</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {PI_PROFILES.map(p=>(
              <button key={p.id} type="button" onClick={()=>onSelectProfile(p.id)} title={p.name}
                className={cx('h-7 w-7 rounded-full border-2 transition',
                  p.id===selectedProfileId ? 'border-white/60 scale-110' : 'border-transparent hover:border-white/30')}
                style={{background: p.id===selectedProfileId ? p.color : `${p.color}44`}}/>
            ))}
          </div>
        </div>
      </Card>

      {/* Controls */}
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30"/>
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Filter lenses…"
            className="w-full rounded-2xl border border-white/10 bg-white/[0.05] py-2.5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/25 focus:border-sky-400/40"/>
        </div>
        <div className="flex overflow-hidden rounded-2xl border border-white/10">
          <button type="button" onClick={()=>setViewMode('grid')}
            className={cx('px-3 py-2 transition', viewMode==='grid' ? 'bg-sky-500/20 text-sky-300' : 'text-white/40 hover:text-white')}>
            <Grid size={15}/>
          </button>
          <button type="button" onClick={()=>setViewMode('list')}
            className={cx('px-3 py-2 transition', viewMode==='list' ? 'bg-sky-500/20 text-sky-300' : 'text-white/40 hover:text-white')}>
            <List size={15}/>
          </button>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {categories.map(cat=>(
          <button key={cat} type="button" onClick={()=>setCategory(cat)}
            className={cx('rounded-xl border px-3 py-1.5 text-xs transition',
              category===cat ? 'border-sky-400/40 bg-sky-500/15 text-sky-300' : 'border-white/10 text-white/40 hover:bg-white/10 hover:text-white')}>
            {cat}
          </button>
        ))}
      </div>

      <p className="text-xs text-white/25">{filtered.length} lenses · {profile.name}</p>

      {viewMode==='grid' ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map(lens=>(
            <button key={lens.id} type="button" onClick={()=>onPreview(lens)}
              className="group rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:border-white/20 hover:bg-white/[0.08]">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <CatBadge category={lens.category}/>
                <StatusBadge status={lens.status}/>
              </div>
              <div className="mb-3"><VisualShell lens={lens} compact/></div>
              <div className="font-semibold leading-snug text-white">{lens.lens}</div>
              <div className="mt-1 text-xs text-white/40">{lens.visualLabel}</div>
              <div className="mt-2 line-clamp-2 text-xs leading-5 text-white/30">{lens.why}</div>
              <div className="mt-3 flex items-center gap-1 text-xs text-sky-400/60 opacity-0 transition group-hover:opacity-100">
                <Eye size={11}/> Preview
              </div>
            </button>
          ))}
        </div>
      ) : (
        <Card>
          <div className="divide-y divide-white/5">
            {filtered.map((lens,i)=>(
              <button key={lens.id} type="button" onClick={()=>onPreview(lens)}
                className="group flex w-full items-center gap-4 px-5 py-3.5 text-left transition hover:bg-white/[0.05]">
                <span className="w-7 flex-shrink-0 text-xs text-white/20">{i+1}</span>
                <span className="min-w-0 flex-1 truncate font-semibold text-white">{lens.lens}</span>
                <span className="hidden sm:block flex-shrink-0"><CatBadge category={lens.category}/></span>
                <span className="hidden md:block flex-shrink-0 text-xs text-white/40">{lens.visualLabel}</span>
                <StatusBadge status={lens.status}/>
                <Eye size={13} className="flex-shrink-0 text-white/20 transition group-hover:text-sky-400"/>
              </button>
            ))}
          </div>
        </Card>
      )}
    </div>
  );
}

// ─── 4. Visual Preview Modal ──────────────────────────────────────────────

function VisualPreviewModal({ lens, profile, onClose }) {
  if (!lens) return null;
  const idx = HSI_LENS_REGISTRY.findIndex(l=>l.id===lens.id);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/78 backdrop-blur-sm" onClick={onClose}/>
      <div className="relative z-10 max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/15 bg-slate-900 shadow-2xl">
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 border-b border-white/10 bg-slate-900/95 px-6 py-5 backdrop-blur">
          <div className="min-w-0">
            <div className="mb-2 flex flex-wrap items-center gap-2">
              <CatBadge category={lens.category}/>
              <StatusBadge status={lens.status}/>
              <span className="font-mono text-xs text-white/22">#{idx+1}</span>
            </div>
            <h2 className="text-lg font-bold leading-tight text-white">{lens.lens}</h2>
            {profile && (
              <p className="mt-1 text-sm text-white/45">
                Viewing through <span className="font-semibold text-white">{profile.name}</span>
              </p>
            )}
          </div>
          <button type="button" onClick={onClose}
            className="flex-shrink-0 rounded-xl border border-white/10 p-2 text-white/40 transition hover:bg-white/10 hover:text-white">
            <X size={18}/>
          </button>
        </div>

        <div className="space-y-5 p-6">
          {/* Visual shell */}
          <VisualShell lens={lens} compact={false}/>

          {/* Metadata grid */}
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-1 text-xs uppercase tracking-widest text-white/25">Visual Type</div>
              <div className="font-mono text-sm text-white">{lens.visualType}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-1 text-xs uppercase tracking-widest text-white/25">Visual Label</div>
              <div className="text-sm text-white">{lens.visualLabel}</div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-2 text-xs uppercase tracking-widest text-white/25">Why this visual</div>
            <p className="text-sm leading-6 text-white/70">{lens.why}</p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="mb-1 text-xs uppercase tracking-widest text-white/25">Lens ID</div>
            <div className="font-mono text-xs text-white/50">{lens.id}</div>
          </div>

          {profile && (
            <div className="rounded-2xl border border-dashed border-white/10 bg-white/[0.02] p-4">
              <div className="flex items-start gap-2 text-xs text-white/40">
                <span className="mt-0.5 inline-block h-2 w-2 flex-shrink-0 rounded-full" style={{background:profile.color}}/>
                <span>
                  This lens applies to <strong className="text-white/60">{profile.name}</strong> exactly as it does to
                  all 17 PI profiles. No profile-specific data is populated yet.
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────

const TABS = [
  { id:'registry', label:'Lens Registry',  Icon: BookOpen },
  { id:'profiles', label:'PI Profiles',    Icon: Users    },
  { id:'gallery',  label:'Visual Gallery', Icon: Grid     },
];

export default function HumanSystemsIntelligence() {
  const [tab, setTab] = useState('registry');
  const [selectedProfileId, setSelectedProfileId] = useState(PI_PROFILES[0]?.id||'');
  const [previewLens, setPreviewLens] = useState(null);

  const selectedProfile = PI_PROFILES.find(p=>p.id===selectedProfileId) || PI_PROFILES[0];

  const catCounts = useMemo(()=>{
    const c={};
    HSI_LENS_REGISTRY.forEach(l=>{ c[l.category||'Other']=(c[l.category||'Other']||0)+1; });
    return c;
  },[]);

  function handleSelectProfile(id) {
    setSelectedProfileId(id);
    setTab('gallery');
  }

  return (
    <div className="space-y-5">

      {/* Header */}
      <Card className="p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <div className="mb-3 flex flex-wrap gap-2">
              {[
                `${HSI_LENS_REGISTRY.length} lenses`,
                `${PI_PROFILES.length} PI profiles`,
                `${(HSI_LENS_REGISTRY.length*PI_PROFILES.length).toLocaleString()} combinations`,
                'No fake data',
              ].map(label=>(
                <span key={label} className="inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/70">
                  {label}
                </span>
              ))}
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Human Systems Intelligence</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
              Every lens applies to every PI profile. Visual types are from the registry.
              Charts only render when real data is populated — nothing is invented.
            </p>
          </div>

          {/* Category breakdown */}
          <div className="flex-shrink-0 rounded-2xl border border-white/10 bg-black/25 p-4 min-w-[200px]">
            <div className="mb-3 text-xs uppercase tracking-widest text-white/28">By category</div>
            <div className="space-y-2">
              {Object.entries(catCounts).sort((a,b)=>b[1]-a[1]).map(([cat,count])=>(
                <div key={cat} className="flex items-center gap-2">
                  <div className="flex-1 h-1.5 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full rounded-full bg-sky-400/55" style={{width:`${(count/HSI_LENS_REGISTRY.length)*100}%`}}/>
                  </div>
                  <span className="w-5 flex-shrink-0 text-right text-xs text-white/35">{count}</span>
                  <span className="w-24 flex-shrink-0 truncate text-xs text-white/50">{cat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Tab bar */}
      <div className="flex flex-wrap gap-2">
        {TABS.map(({id,label,Icon})=>(
          <button key={id} type="button" onClick={()=>setTab(id)}
            className={cx('inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition',
              tab===id ? 'border-sky-300/40 bg-sky-500/15 text-white' : 'border-white/10 bg-white/[0.04] text-white/50 hover:bg-white/10 hover:text-white')}>
            <Icon size={15}/> {label}
          </button>
        ))}
      </div>

      {/* Tab content */}
      {tab==='registry' && <LensRegistryTab onPreview={setPreviewLens}/>}
      {tab==='profiles' && <ProfileSelectorTab selectedProfileId={selectedProfileId} onSelect={handleSelectProfile}/>}
      {tab==='gallery'  && <VisualGalleryTab selectedProfileId={selectedProfileId} onSelectProfile={setSelectedProfileId} onPreview={setPreviewLens}/>}

      {/* Preview modal */}
      {previewLens && (
        <VisualPreviewModal
          lens={previewLens}
          profile={tab==='gallery' ? selectedProfile : null}
          onClose={()=>setPreviewLens(null)}
        />
      )}
    </div>
  );
}
