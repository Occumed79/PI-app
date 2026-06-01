import React, { useState } from 'react';
import { ArrowLeft, X, Plus, User } from 'lucide-react';
import { PI_PROFILES } from '../data/profiles.js';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';

function cx(...c) { return c.filter(Boolean).join(' '); }

const CAT_STYLE = {
  Personality:    'bg-indigo-500/15 text-indigo-300 border-indigo-400/20',
  Cognitive:      'bg-sky-500/15    text-sky-300    border-sky-400/20',
  Motivation:     'bg-emerald-500/15 text-emerald-300 border-emerald-400/20',
  Team:           'bg-orange-500/15 text-orange-300  border-orange-400/20',
  Emotional:      'bg-pink-500/15   text-pink-300    border-pink-400/20',
  Leadership:     'bg-yellow-500/15 text-yellow-300  border-yellow-400/20',
  Wellbeing:      'bg-purple-500/15 text-purple-300  border-purple-400/20',
  Neurodiversity: 'bg-teal-500/15   text-teal-300    border-teal-400/20',
  Other:          'bg-slate-500/15  text-slate-300   border-slate-400/20',
};

function CatBadge({ cat }) {
  return (
    <span className={cx('inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium', CAT_STYLE[cat]||CAT_STYLE.Other)}>
      {cat||'Other'}
    </span>
  );
}

// Shape visuals (same as PIPortal — reusable inline)
function RadarSVG({color}) {
  const pts=[0,60,120,180,240,300].map((deg,i)=>{const r=[44,36,42,38,44,34][i];return `${50+r*Math.sin(deg*Math.PI/180)},${50-r*Math.cos(deg*Math.PI/180)}`;}).join(' ');
  return (<svg width="100" height="100" viewBox="0 0 100 100" fill="none">{[20,32,44].map(r=>(<polygon key={r} points={[0,60,120,180,240,300].map(d=>`${50+r*Math.sin(d*Math.PI/180)},${50-r*Math.cos(d*Math.PI/180)}`).join(' ')} stroke="rgba(255,255,255,.07)" strokeWidth="1" fill="none"/>))}<polygon points={pts} fill={`${color}33`} stroke={color} strokeWidth="1.5" opacity="0.7"/></svg>);
}
function WheelSVG({color}) {
  return (<svg width="100" height="100" viewBox="0 0 100 100" fill="none"><circle cx="50" cy="50" r="42" stroke="rgba(255,255,255,.07)" strokeWidth="1"/>{[0,90,180,270].map((d,i)=>(<path key={d} d={`M50,50 L${50+42*Math.sin(d*Math.PI/180)},${50-42*Math.cos(d*Math.PI/180)} A42,42 0 0,1 ${50+42*Math.sin((d+90)*Math.PI/180)},${50-42*Math.cos((d+90)*Math.PI/180)} Z`} fill={`${color}${['33','22','2a','1a'][i]}`} stroke="rgba(255,255,255,.05)" strokeWidth="0.5"/>))}</svg>);
}
function BarsSVG({color}) {
  const h=[62,48,72,36,56,44,68,30,58,42];
  return (<svg width="100" height="70" viewBox="0 0 100 70" fill="none">{h.map((v,i)=>(<rect key={i} x={3+i*10} y={70-v} width="7" height={v} rx="2" fill={`${color}88`} opacity={0.4+i*0.04}/>))}</svg>);
}
function GaugeSVG({color}) {
  return (<svg width="100" height="60" viewBox="0 0 100 60" fill="none"><path d="M10,55 A40,40 0 0,1 90,55" stroke="rgba(255,255,255,.08)" strokeWidth="9" fill="none" strokeLinecap="round"/><path d="M10,55 A40,40 0 0,1 62,19" stroke={color} strokeWidth="9" fill="none" strokeLinecap="round" opacity="0.6"/><circle cx="50" cy="55" r="4" fill="white" opacity="0.6"/></svg>);
}
function GridSVG({color}) {
  return (<svg width="100" height="100" viewBox="0 0 100 100" fill="none">{[0,1,2,3].map(r=>[0,1,2,3].map(c=>(<rect key={`${r}-${c}`} x={8+c*22} y={8+r*22} width="19" height="19" rx="3" fill={`${color}${((r+c)%3===0?'44':(r+c)%3===1?'22':'11')}`} stroke="rgba(255,255,255,.05)" strokeWidth="0.5"/>)))}</svg>);
}
function CardsSVG({color}) {
  return (<svg width="100" height="80" viewBox="0 0 110 80" fill="none">{[0,1,2].map(i=>(<rect key={i} x={6+i*34} y={i%2===0?8:18} width="28" height="52" rx="5" fill={`${color}22`} stroke={color} strokeWidth="0.8" opacity="0.6"/>))}</svg>);
}
function QuadrantSVG({color}) {
  return (<svg width="100" height="100" viewBox="0 0 100 100" fill="none"><rect x="8" y="8" width="84" height="84" rx="6" stroke="rgba(255,255,255,.07)" strokeWidth="1"/><line x1="50" y1="8" x2="50" y2="92" stroke="rgba(255,255,255,.09)" strokeWidth="1"/><line x1="8" y1="50" x2="92" y2="50" stroke="rgba(255,255,255,.09)" strokeWidth="1"/><circle cx="68" cy="28" r="8" fill={`${color}77`}/><circle cx="30" cy="72" r="6" fill={`${color}55`}/></svg>);
}
const SHAPE_MAP = {
  radar:RadarSVG,radarBars:RadarSVG,lineRadar:RadarSVG,spiderTrend:RadarSVG,layeredRadar:RadarSVG,radarSubscaleBars:RadarSVG,fourAxisRadial:RadarSVG,radarBarsRadar:RadarSVG,
  hexagonRadar:RadarSVG,
  colorWheel:WheelSVG,segmentedWheel:WheelSVG,pieStackedBars:WheelSVG,circumplex:WheelSVG,valuesCircumplex:WheelSVG,threeBarsCircumplex:WheelSVG,enneagramWheel:WheelSVG,
  quadrantPlot:QuadrantSVG,scatterQuadrant:QuadrantSVG,temperamentQuadrant:QuadrantSVG,brainQuadrantWheel:QuadrantSVG,brainQuadrant:QuadrantSVG,triangleCircumplex:QuadrantSVG,
  matrix:GridSVG,networkHeatmap:GridSVG,typeGrid:GridSVG,typeGridBars:GridSVG,typeGridBarsMBTI:GridSVG,itemTablePassRate:GridSVG,
  profileBars:BarsSVG,riskBars:BarsSVG,multiBarProfile:BarsSVG,rankedBars:BarsSVG,rankedBarsRadar:BarsSVG,motiveBars:BarsSVG,threeBars:BarsSVG,fiveModeBars:BarsSVG,continuumBars:BarsSVG,multiAxisBars:BarsSVG,stackedWorkloadBars:BarsSVG,multiDomainBars:BarsSVG,
  scoreGauge:GaugeSVG,gaugeDistribution:GaugeSVG,gaugeHeatmap:GaugeSVG,
  structuredCards:CardsSVG,
};
function VisualShape({visualType, color}) { const C=SHAPE_MAP[visualType]||CardsSVG; return <C color={color}/>; }

// ── Lens Detail Modal ────────────────────────────────────────────────────
function LensModal({ lens, profile, onClose }) {
  if (!lens) return null;
  const color = profile?.color || '#60a5fa';
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-10">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose}/>
      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/15 bg-slate-900 shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
          <div>
            <div className="mb-2 flex flex-wrap gap-2"><CatBadge cat={lens.category}/><span className="inline-block rounded-full border border-white/10 bg-white/8 px-2.5 py-0.5 text-xs text-white/50">{lens.visualLabel}</span></div>
            <h2 className="text-xl font-bold text-white">{lens.lens}</h2>
          </div>
          <button type="button" onClick={onClose} className="flex-shrink-0 rounded-xl border border-white/10 p-2 text-white/40 hover:text-white transition"><X size={18}/></button>
        </div>
        <div className="space-y-5 p-6">
          <div className="flex flex-col items-center gap-4 rounded-2xl border border-white/10 bg-black/30 py-8 px-6">
            <VisualShape visualType={lens.visualType} color={color}/>
            <p className="font-semibold text-white">{lens.visualLabel}</p>
            <div className="w-full rounded-xl border border-dashed border-amber-300/20 bg-amber-500/[0.04] px-4 py-3 text-center">
              <p className="text-xs text-amber-200/70">Visual type assigned. Data not yet populated.</p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p className="mb-1 text-xs uppercase tracking-widest text-white/30">Category</p><CatBadge cat={lens.category}/></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><p className="mb-1 text-xs uppercase tracking-widest text-white/30">Visual Type</p><p className="font-mono text-sm text-white">{lens.visualType}</p></div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-white/30">What this lens measures</p>
            <p className="text-sm leading-6 text-white/75">{lens.why}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Employee Detail View ─────────────────────────────────────────────────
function EmployeeDetail({ employee, onBack }) {
  const profile = PI_PROFILES.find(p => p.id === employee.profileId);
  const [selectedLens, setSelectedLens] = useState(null);
  const color = profile?.color || '#60a5fa';

  return (
    <div>
      <button type="button" onClick={onBack} className="mb-5 flex items-center gap-2 text-sm text-white/45 hover:text-white transition">
        <ArrowLeft size={16}/> All employees
      </button>

      {/* Employee card */}
      <div className="mb-6 rounded-3xl border border-white/10 bg-white/[0.05] p-6">
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-slate-900 flex-shrink-0"
            style={{background: color}}>
            {employee.name[0].toUpperCase()}
          </div>
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-white">{employee.name}</h2>
            <p className="text-sm text-white/45">{employee.position} · {employee.depot}</p>
            {profile && (
              <div className="mt-2 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full" style={{background: color}}/>
                <span className="text-sm font-medium text-white">{profile.name}</span>
                <span className="text-sm text-white/40">— {profile.tagline}</span>
              </div>
            )}
          </div>
        </div>
        {profile && (
          <div className="mt-5 grid gap-4 sm:grid-cols-3 border-t border-white/8 pt-5">
            <div>
              <p className="mb-1.5 text-xs uppercase tracking-widest text-white/25">Strengths</p>
              {profile.strengths.map(s=><p key={s} className="text-xs text-emerald-300">↑ {s}</p>)}
            </div>
            <div>
              <p className="mb-1.5 text-xs uppercase tracking-widest text-white/25">Watch outs</p>
              {profile.traps.map(t=><p key={t} className="text-xs text-amber-300">△ {t}</p>)}
            </div>
            <div>
              <p className="mb-1.5 text-xs uppercase tracking-widest text-white/25">Needs</p>
              {profile.needs.map(n=><p key={n} className="text-xs text-sky-300">◇ {n}</p>)}
            </div>
          </div>
        )}
      </div>

      <p className="mb-4 text-sm text-white/35">{HSI_LENS_REGISTRY.length} lenses — click any to expand</p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {HSI_LENS_REGISTRY.map(lens => (
          <button key={lens.id} type="button" onClick={() => setSelectedLens(lens)}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:border-white/25 hover:bg-white/[0.08]">
            <div className="mb-2"><CatBadge cat={lens.category}/></div>
            <div className="mb-3 flex justify-center opacity-45 group-hover:opacity-70 transition">
              <VisualShape visualType={lens.visualType} color={color}/>
            </div>
            <p className="text-sm font-semibold leading-snug text-white">{lens.lens}</p>
            <p className="mt-1 text-xs text-white/35">{lens.visualLabel}</p>
          </button>
        ))}
      </div>

      {selectedLens && <LensModal lens={selectedLens} profile={profile} onClose={() => setSelectedLens(null)}/>}
    </div>
  );
}

// ── Create Employee Form ──────────────────────────────────────────────────
function CreateForm({ onCreate, onCancel }) {
  const [form, setForm] = useState({ name:'', position:'', depot:'', profileId:'' });
  const valid = form.name.trim() && form.position.trim() && form.depot.trim() && form.profileId;

  function set(k,v) { setForm(f=>({...f,[k]:v})); }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" onClick={onCancel}/>
      <div className="relative z-10 w-full max-w-lg rounded-3xl border border-white/15 bg-slate-900 shadow-2xl p-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">New Employee</h2>
          <button type="button" onClick={onCancel} className="rounded-xl border border-white/10 p-2 text-white/40 hover:text-white transition"><X size={18}/></button>
        </div>
        <div className="space-y-4">
          {[
            {k:'name',     label:'Full Name',   placeholder:'e.g. Sarah Mitchell'},
            {k:'position', label:'Position',    placeholder:'e.g. Shift Supervisor'},
            {k:'depot',    label:'Depot',       placeholder:'e.g. Depot 4 — East'},
          ].map(({k,label,placeholder})=>(
            <div key={k}>
              <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">{label}</label>
              <input value={form[k]} onChange={e=>set(k,e.target.value)} placeholder={placeholder}
                className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-sky-400/40"/>
            </div>
          ))}
          <div>
            <label className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">PI Profile</label>
            <div className="grid grid-cols-2 gap-2 max-h-60 overflow-y-auto">
              {PI_PROFILES.map(p=>(
                <button key={p.id} type="button" onClick={()=>set('profileId',p.id)}
                  className={cx('flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition',
                    form.profileId===p.id ? 'border-sky-400/40 bg-sky-500/15 text-white' : 'border-white/10 text-white/55 hover:bg-white/8')}>
                  <span className="h-2 w-2 rounded-full flex-shrink-0" style={{background:p.color}}/>
                  <span className="text-sm font-medium truncate">{p.name}</span>
                </button>
              ))}
            </div>
          </div>
          <button type="button" onClick={()=>{ if(valid) onCreate(form); }} disabled={!valid}
            className={cx('w-full rounded-2xl border px-4 py-3 text-sm font-bold transition',
              valid ? 'border-sky-400/40 bg-sky-500/20 text-white hover:bg-sky-500/30' : 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed')}>
            Create Employee Profile
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────
export default function EmployeeTab() {
  const [employees, setEmployees] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [viewing, setViewing] = useState(null);

  if (viewing) {
    return <EmployeeDetail employee={viewing} onBack={()=>setViewing(null)}/>;
  }

  return (
    <div>
      <div className="mb-6 flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">Employee Profiles</h1>
          <p className="mt-1 text-sm text-white/40">Click a name to see their full lens profile</p>
        </div>
        <button type="button" onClick={()=>setShowForm(true)}
          className="flex items-center gap-2 rounded-2xl border border-sky-400/40 bg-sky-500/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-500/30 transition">
          <Plus size={16}/> Add Employee
        </button>
      </div>

      {employees.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 py-20 text-center">
          <User size={40} className="mb-4 text-white/15"/>
          <p className="text-lg font-semibold text-white/40">No employees yet</p>
          <p className="mt-1 text-sm text-white/25">Click Add Employee to create the first profile</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {employees.map((emp, i) => {
            const profile = PI_PROFILES.find(p=>p.id===emp.profileId);
            const color = profile?.color || '#60a5fa';
            return (
              <button key={i} type="button" onClick={()=>setViewing(emp)}
                className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-white/25 hover:bg-white/[0.08]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-black text-slate-900 flex-shrink-0"
                    style={{background: color}}>
                    {emp.name[0].toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-white">{emp.name}</p>
                    <p className="truncate text-xs text-white/40">{emp.position}</p>
                  </div>
                </div>
                <p className="mb-1 text-xs text-white/30">{emp.depot}</p>
                {profile && (
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full flex-shrink-0" style={{background:color}}/>
                    <span className="text-xs font-medium text-white/60">{profile.name}</span>
                  </div>
                )}
                <p className="mt-3 text-xs text-white/25 group-hover:text-white/45 transition">View 104 lenses →</p>
              </button>
            );
          })}
        </div>
      )}

      {showForm && (
        <CreateForm
          onCreate={emp=>{ setEmployees(e=>[...e,emp]); setShowForm(false); }}
          onCancel={()=>setShowForm(false)}
        />
      )}
    </div>
  );
}
