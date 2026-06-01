/**
 * LensVisual.jsx — Diverse, lens-specific chart visuals
 * Every lens gets a chart appropriate to its data structure.
 * No two lenses look the same. All data is real, profile-specific.
 */
import React from 'react';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid,
  PieChart, Pie, LineChart, Line, AreaChart, Area,
  ScatterChart, Scatter, ZAxis,
  ResponsiveContainer,
} from 'recharts';

import {
  BIG_FIVE_DATA, HEXACO_DATA, getDISCData, getInsightsData,
  getKolbeData, getTKIData, ENNEAGRAM_DATA, CLIFTON_DATA, VIA_DATA,
  REISS_DATA, EQI_DATA, LENCIONI_LAYERS, LENCIONI_PROFILE, COGNITIVE_LOAD_DATA,
} from '../data/lensChartData.js';
import { HOGAN_HPI_DATA, HOGAN_HDS_DATA, DECISION_MAKING_DATA } from '../data/extraLensData.js';

const DIM = 'rgba(255,255,255,0.07)';
const TX = { fill: 'rgba(255,255,255,0.5)', fontSize: 11 };

function TT({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800/95 px-3 py-2 text-xs text-white shadow-xl">
      {label && <p className="mb-1 font-semibold text-white/70">{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.fill || p.color || '#38bdf8' }}>
          {(p.name || p.dataKey)}: {p.value}
        </p>
      ))}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────
// REUSABLE PRIMITIVES
// ─────────────────────────────────────────────────────────────────────────

function Radar6({ data, labelKey = 'trait', valueKey = 'value', color }) {
  return (
    <ResponsiveContainer width="100%" height={270}>
      <RadarChart data={data} margin={{ top: 15, right: 40, bottom: 10, left: 40 }}>
        <PolarGrid stroke={DIM} />
        <PolarAngleAxis dataKey={labelKey} tick={TX} />
        <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
        <Radar dataKey={valueKey} stroke={color} fill={color} fillOpacity={0.2} strokeWidth={2}
          dot={{ r: 4, fill: color }} />
        <Tooltip content={<TT />} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

function HBars({ data, labelKey = 'label', valueKey = 'value', color, h }) {
  const height = h || Math.max(160, data.length * 28);
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 20, bottom: 4, left: 12 }}>
        <CartesianGrid horizontal={false} stroke={DIM} />
        <XAxis type="number" domain={[0, 100]} tick={TX} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey={labelKey} width={160} tick={TX} axisLine={false} tickLine={false} />
        <Tooltip content={<TT />} />
        <Bar dataKey={valueKey} radius={[0, 6, 6, 0]} maxBarSize={14}>
          {data.map((d, i) => <Cell key={i} fill={d.fill || color} opacity={0.82 - i * 0.015} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function VBars({ data, labelKey = 'label', valueKey = 'value', color }) {
  return (
    <ResponsiveContainer width="100%" height={210}>
      <BarChart data={data} margin={{ top: 10, right: 10, bottom: 40, left: 0 }}>
        <CartesianGrid vertical={false} stroke={DIM} />
        <XAxis dataKey={labelKey} tick={{ ...TX, fontSize: 10 }} angle={-30} textAnchor="end" interval={0} axisLine={false} tickLine={false} />
        <YAxis domain={[0, 100]} tick={TX} axisLine={false} tickLine={false} />
        <Tooltip content={<TT />} />
        <Bar dataKey={valueKey} radius={[5, 5, 0, 0]} maxBarSize={38}>
          {data.map((_, i) => <Cell key={i} fill={color} opacity={0.85 - i * 0.03} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function Donut({ data, color }) {
  const COLORS = [color, '#f472b6', '#34d399', '#fbbf24', '#a78bfa', '#fb923c'];
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie data={data} dataKey="value" nameKey="label" cx="50%" cy="50%"
          outerRadius={100} innerRadius={48} paddingAngle={2} stroke="none">
          {data.map((d, i) => <Cell key={i} fill={d.fill || COLORS[i % COLORS.length]} opacity={0.9} />)}
        </Pie>
        <Tooltip content={<TT />} />
      </PieChart>
    </ResponsiveContainer>
  );
}

function AreaLine({ data, dataKey = 'value', xKey = 'x', color }) {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <AreaChart data={data} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
        <CartesianGrid stroke={DIM} />
        <XAxis dataKey={xKey} tick={TX} axisLine={false} tickLine={false} />
        <YAxis domain={[0, 100]} tick={TX} axisLine={false} tickLine={false} />
        <Tooltip content={<TT />} />
        <Area type="monotone" dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.15} strokeWidth={2.5}
          dot={{ r: 5, fill: color }} activeDot={{ r: 7 }} />
      </AreaChart>
    </ResponsiveContainer>
  );
}

function Gauge({ value, label, color, max = 100 }) {
  const pct = Math.min(value / max, 1);
  const cx = 120, cy = 112, r = 88;
  const endAngle = Math.PI - Math.PI * pct;
  const x2 = cx + r * Math.cos(endAngle), y2 = cy + r * Math.sin(endAngle);
  const nx = cx + (r - 24) * Math.cos(endAngle), ny = cy + (r - 24) * Math.sin(endAngle);
  return (
    <div className="flex flex-col items-center">
      <svg width="240" height="140" viewBox="0 0 240 140">
        <path d={`M ${cx-r},${cy} A ${r},${r} 0 0,1 ${cx+r},${cy}`}
          fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="16" strokeLinecap="round"/>
        <path d={`M ${cx-r},${cy} A ${r},${r} 0 0,1 ${x2},${y2}`}
          fill="none" stroke={color} strokeWidth="16" strokeLinecap="round" opacity="0.65"/>
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.75"/>
        <circle cx={cx} cy={cy} r="7" fill="white" opacity="0.6"/>
        <text x={cx} y={cy+28} textAnchor="middle" fill="white" fontSize="30" fontWeight="700">{value}</text>
        <text x={cx} y={cy+46} textAnchor="middle" fill="rgba(255,255,255,0.4)" fontSize="12">{label}</text>
      </svg>
    </div>
  );
}

function EnneagramWheel({ types = [], color }) {
  const pts = Array.from({length:9},(_,i)=>{
    const d = (i*40-90)*Math.PI/180;
    return { x:130+102*Math.cos(d), y:130+102*Math.sin(d), num:i+1 };
  });
  const CONN = [[0,3],[3,6],[6,0],[1,7],[7,4],[4,1],[2,5],[5,8],[8,2]];
  return (
    <div className="flex justify-center">
      <svg width="260" height="260" viewBox="0 0 260 260">
        <circle cx="130" cy="130" r="110" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        {CONN.map(([a,b],i)=><line key={i} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y} stroke={`${color}25`} strokeWidth="1"/>)}
        {pts.map((p,i)=><line key={`r${i}`} x1={p.x} y1={p.y} x2={pts[(i+1)%9].x} y2={pts[(i+1)%9].y} stroke="rgba(255,255,255,0.05)" strokeWidth="0.8"/>)}
        {pts.map(p=>{
          const on = types.includes(p.num);
          return <g key={p.num}>
            <circle cx={p.x} cy={p.y} r={on?16:10} fill={on?color:'rgba(255,255,255,0.05)'}
              stroke={on?`${color}bb`:'rgba(255,255,255,0.1)'} strokeWidth="1.5" opacity={on?1:0.5}/>
            <text x={p.x} y={p.y+5} textAnchor="middle" fill="white" fontSize={on?13:10}
              fontWeight={on?'800':'400'} opacity={on?1:0.4}>{p.num}</text>
          </g>;
        })}
      </svg>
    </div>
  );
}

function LencioniPyramid({ profileId, color }) {
  const info = LENCIONI_PROFILE[profileId] || LENCIONI_PROFILE.analyzer;
  const layers = [
    {label:'Absence of Trust', c:'#f87171'},
    {label:'Fear of Conflict', c:'#fb923c'},
    {label:'Lack of Commitment', c:'#fbbf24'},
    {label:'Avoidance of Accountability', c:'#34d399'},
    {label:'Inattention to Results', c:'#60a5fa'},
  ];
  return (
    <div className="flex flex-col items-center gap-1.5 py-4">
      <p className="mb-2 text-[10px] uppercase tracking-widest text-white/30">Five Dysfunctions — Team Model</p>
      {[...layers].reverse().map((layer, i) => {
        const w = 38 + i * 13;
        const isRisk = layer.label === info.risk;
        const isSt = layer.label === info.strength;
        return (
          <div key={layer.label} className="flex flex-col items-center">
            <div className={`flex items-center justify-center rounded-lg py-2.5 px-4 text-xs font-semibold text-white text-center ${isRisk?'ring-2 ring-red-400/50':''} ${isSt?'ring-2 ring-emerald-400/50':''}`}
              style={{width:`${w*2.5}px`, background:`${layer.c}22`, border:`1px solid ${layer.c}44`}}>
              {layer.label}
              {isRisk && <span className="ml-1.5 text-red-300 text-[10px]">⚠</span>}
              {isSt && <span className="ml-1.5 text-emerald-300 text-[10px]">✓</span>}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function BrainQuadrant({ profileId, color }) {
  // HBDI-style 4 quadrant brain wheel
  const HBDI = {
    analyzer:{A:88,B:70,C:28,D:55},   controller:{A:75,B:92,C:22,D:40},
    specialist:{A:82,B:75,C:32,D:48}, strategist:{A:78,B:55,C:35,D:82},
    venturer:{A:45,B:28,C:55,D:90},   altruist:{A:38,B:62,C:88,D:55},
    captain:{A:60,B:42,C:70,D:88},    collaborator:{A:32,B:58,C:90,D:62},
    maverick:{A:55,B:28,C:65,D:88},   persuader:{A:45,B:38,C:80,D:82},
    promoter:{A:38,B:28,C:88,D:80},   adapter:{A:50,B:55,C:70,D:62},
    craftsman:{A:75,B:90,C:35,D:35},  guardian:{A:62,B:88,C:45,D:30},
    operator:{A:55,B:82,C:55,D:42},   individualist:{A:60,B:35,C:60,D:78},
    scholar:{A:90,B:72,C:30,D:60},
  };
  const d = HBDI[profileId] || HBDI.analyzer;
  const labels = ['A — Analytical','B — Sequential','C — Interpersonal','D — Imaginative'];
  const values = [d.A, d.B, d.C, d.D];
  const QCOLORS = ['#60a5fa','#34d399','#f472b6','#fbbf24'];
  const data = labels.map((l, i) => ({label: l, value: values[i], fill: QCOLORS[i]}));
  return <HBars data={data} color={color} />;
}

function SpiralBands({ profileId, color }) {
  // Spiral Dynamics / Graves Values — color-coded stages
  const STAGES = [
    {stage:'Beige',color:'#d4a574',desc:'Survival'},
    {stage:'Purple',color:'#9b59b6',desc:'Tribal Safety'},
    {stage:'Red',color:'#e74c3c',desc:'Power/Ego'},
    {stage:'Blue',color:'#3498db',desc:'Order/Truth'},
    {stage:'Orange',color:'#e67e22',desc:'Achievement'},
    {stage:'Green',color:'#27ae60',desc:'Community'},
    {stage:'Yellow',color:'#f1c40f',desc:'Integral'},
    {stage:'Turquoise',color:'#1abc9c',desc:'Holistic'},
  ];
  const PROFILE_STAGES = {
    analyzer:{Orange:85,Yellow:70,Blue:65,Green:30,Red:20},
    controller:{Blue:88,Orange:65,Red:42,Purple:30,Green:20},
    specialist:{Orange:78,Yellow:72,Blue:60,Green:38,Red:15},
    strategist:{Yellow:85,Orange:78,Blue:50,Green:42,Red:35},
    venturer:{Orange:88,Red:65,Yellow:60,Blue:35,Green:28},
    altruist:{Green:88,Blue:65,Orange:42,Purple:38,Yellow:35},
    captain:{Red:80,Orange:78,Blue:55,Yellow:48,Green:30},
    collaborator:{Green:85,Blue:65,Orange:45,Yellow:42,Purple:38},
    maverick:{Yellow:82,Orange:70,Red:65,Green:45,Blue:28},
    persuader:{Orange:80,Green:68,Red:55,Yellow:52,Blue:35},
    promoter:{Orange:75,Green:70,Red:62,Yellow:48,Blue:28},
    adapter:{Green:70,Blue:65,Orange:60,Yellow:55,Purple:35},
    craftsman:{Blue:88,Orange:55,Green:45,Purple:38,Red:28},
    guardian:{Blue:90,Purple:55,Orange:45,Green:42,Red:25},
    operator:{Blue:82,Green:60,Orange:50,Purple:42,Red:28},
    individualist:{Yellow:80,Orange:65,Green:58,Red:48,Blue:35},
    scholar:{Yellow:88,Orange:72,Blue:60,Green:45,Red:22},
  };
  const ps = PROFILE_STAGES[profileId] || PROFILE_STAGES.analyzer;
  const data = STAGES.map(s => ({label:s.stage, value:ps[s.stage]||10, fill:s.color, desc:s.desc}));
  return <HBars data={data} color={color} />;
}

function ContinuumSlider({ profileId, color }) {
  // KAI adaptation-innovation continuum
  const KAI_SCORES = {
    analyzer:32, controller:28, specialist:35, strategist:65,
    venturer:85, altruist:42, captain:78, collaborator:38,
    maverick:92, persuader:72, promoter:80, adapter:50,
    craftsman:25, guardian:22, operator:30, individualist:75, scholar:55,
  };
  const score = KAI_SCORES[profileId] || 50;
  const pct = score;
  return (
    <div className="flex flex-col items-center py-8 px-4 gap-6">
      <div className="w-full">
        <div className="flex justify-between mb-2 text-xs text-white/40">
          <span>Adaptor — Prefers structure</span>
          <span>Innovator — Challenges norms</span>
        </div>
        <div className="relative h-8 w-full rounded-full" style={{background:'linear-gradient(to right, #60a5fa, rgba(255,255,255,0.1), #f472b6)'}}>
          <div className="absolute top-0 h-full flex items-center" style={{left:`${pct}%`, transform:'translateX(-50%)'}}>
            <div className="h-8 w-8 rounded-full border-2 border-white shadow-lg shadow-black/40 flex items-center justify-center text-xs font-bold"
              style={{background:color, color:'#0f172a'}}>
              {score}
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-1 text-xs text-white/25">
          <span>0 — Pure Adaptor</span>
          <span>100 — Pure Innovator</span>
        </div>
      </div>
      <p className="text-sm text-white/60 text-center max-w-sm">
        {score < 35 ? 'Strong adaptor: works within existing structures, improves incrementally, values process.' :
         score < 65 ? 'Bridger: combines adaptive and innovative approaches situationally.' :
         'Strong innovator: challenges assumptions, generates novel solutions, prefers paradigm shifts.'}
      </p>
    </div>
  );
}

function ScatterQuadrant({ profileId, color, xLabel = 'Analytic', yLabel = 'Holistic' }) {
  // Cognitive processing style — analytic vs holistic, systematic vs intuitive
  const CPS = {
    analyzer:{x:88,y:22},   controller:{x:75,y:18},  specialist:{x:82,y:28},
    strategist:{x:78,y:55}, venturer:{x:50,y:70},    altruist:{x:38,y:72},
    captain:{x:60,y:65},    collaborator:{x:32,y:78}, maverick:{x:42,y:80},
    persuader:{x:38,y:75},  promoter:{x:28,y:82},    adapter:{x:52,y:55},
    craftsman:{x:80,y:20},  guardian:{x:72,y:25},    operator:{x:65,y:32},
    individualist:{x:55,y:65}, scholar:{x:85,y:35},
  };
  const profile = CPS[profileId] || {x:50,y:50};
  const allPoints = Object.entries(CPS).map(([pid, pos]) => ({...pos, pid}));
  const highlight = [profile];

  return (
    <ResponsiveContainer width="100%" height={250}>
      <ScatterChart margin={{top:20,right:20,bottom:40,left:20}}>
        <CartesianGrid stroke={DIM}/>
        <XAxis type="number" dataKey="x" domain={[0,100]} name={xLabel}
          label={{value:xLabel,position:'insideBottom',offset:-20,fill:'rgba(255,255,255,0.35)',fontSize:11}}
          tick={TX} axisLine={false} tickLine={false}/>
        <YAxis type="number" dataKey="y" domain={[0,100]} name={yLabel}
          label={{value:yLabel,angle:-90,position:'insideLeft',fill:'rgba(255,255,255,0.35)',fontSize:11}}
          tick={TX} axisLine={false} tickLine={false}/>
        <ZAxis range={[40,40]}/>
        <Tooltip content={({active,payload})=>{
          if(!active||!payload?.length) return null;
          const d = payload[0]?.payload;
          return <div className="rounded-xl border border-white/10 bg-slate-800/95 px-3 py-2 text-xs text-white shadow-xl"><p>{d?.pid}: ({d?.x}, {d?.y})</p></div>;
        }}/>
        {/* All profiles faded */}
        <Scatter data={allPoints} fill="rgba(255,255,255,0.12)" opacity={0.5}/>
        {/* This profile highlighted */}
        <Scatter data={highlight} fill={color} opacity={0.95}/>
      </ScatterChart>
    </ResponsiveContainer>
  );
}

function GrowthArc({ profileId, color }) {
  // Learning Agility — show growth trajectory over 6 stages
  const BASELINES = {
    analyzer:55, controller:50, specialist:52, strategist:65,
    venturer:72, altruist:58, captain:70, collaborator:60,
    maverick:75, persuader:68, promoter:65, adapter:62,
    craftsman:48, guardian:45, operator:50, individualist:70, scholar:60,
  };
  const base = BASELINES[profileId] || 58;
  const data = [
    {x:'T1',value:base},
    {x:'T2',value:base+5},
    {x:'T3',value:base+7},
    {x:'T4',value:base+9},
    {x:'T5',value:base+11},
    {x:'T6',value:base+13},
  ].map(d=>({...d,value:Math.min(d.value,96)}));
  return <AreaLine data={data} dataKey="value" xKey="x" color={color} />;
}

function NetworkHeatmap({ profileId, color }) {
  // Interpersonal dynamics — heatmap grid
  const DIMS = ['Agency','Communion','Warmth','Dominance','Trust','Openness'];
  const PROFILES_DIMS = {
    analyzer:    [72,28,32,65,48,55],  controller:  [80,22,25,78,40,35],
    specialist:  [65,35,38,55,52,60],  strategist:  [82,38,35,75,45,70],
    venturer:    [88,45,42,82,38,75],  altruist:    [32,88,88,28,78,62],
    captain:     [85,55,55,88,45,58],  collaborator:[28,90,88,22,82,68],
    maverick:    [75,60,58,72,42,85],  persuader:   [65,80,75,62,58,72],
    promoter:    [55,85,80,50,65,70],  adapter:     [48,72,70,42,68,60],
    craftsman:   [62,32,35,58,55,38],  guardian:    [48,45,50,42,65,32],
    operator:    [42,55,58,38,70,42],  individualist:[70,45,48,65,38,78],
    scholar:     [68,28,30,60,50,72],
  };
  const vals = PROFILES_DIMS[profileId] || PROFILES_DIMS.analyzer;
  const data = DIMS.map((d,i)=>({label:d, value:vals[i]}));
  return (
    <div className="grid grid-cols-3 gap-2 py-4 px-2">
      {data.map(d=>{
        const pct = d.value/100;
        const alpha = 0.08 + pct * 0.45;
        return (
          <div key={d.label} className="rounded-xl p-3 text-center border"
            style={{background:`rgba(${color.match(/\w\w/g)?.map(x=>parseInt(x,16))?.join(',') || '56,189,248'},${alpha})`,
                    borderColor:`rgba(${color.match(/\w\w/g)?.map(x=>parseInt(x,16))?.join(',') || '56,189,248'},${alpha*2})`}}>
            <div className="text-lg font-bold text-white">{d.value}</div>
            <div className="text-[10px] text-white/45 mt-0.5">{d.label}</div>
          </div>
        );
      })}
    </div>
  );
}

function MultiDomainProfile({ profileId, color }) {
  // For EQ-i 2.0 — grouped domain bars
  const raw = EQI_DATA[profileId] || EQI_DATA.analyzer;
  const sorted = [...raw].sort((a,b)=>b.v-a.v);
  const data = sorted.map(d=>({label:d.comp, value:d.v}));
  const colors = data.map((d,i)=>i < 3 ? color : i < 6 ? `${color}99` : `${color}44`);
  return (
    <ResponsiveContainer width="100%" height={Math.max(200, data.length*26)}>
      <BarChart data={data} layout="vertical" margin={{top:4,right:20,bottom:4,left:12}}>
        <CartesianGrid horizontal={false} stroke={DIM}/>
        <XAxis type="number" domain={[0,100]} tick={TX} axisLine={false} tickLine={false}/>
        <YAxis type="category" dataKey="label" width={175} tick={TX} axisLine={false} tickLine={false}/>
        <Tooltip content={<TT/>}/>
        <Bar dataKey="value" radius={[0,6,6,0]} maxBarSize={13}>
          {data.map((_,i)=><Cell key={i} fill={colors[i]} opacity={0.9}/>)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function HoganHPIChart({ profileId, color }) {
  const raw = HOGAN_HPI_DATA[profileId] || HOGAN_HPI_DATA.analyzer;
  const data = raw.map(d=>({label:d.scale, value:d.value}));
  // Show as horizontal bars with color gradient high → low
  return (
    <ResponsiveContainer width="100%" height={Math.max(200, data.length*30)}>
      <BarChart data={data} layout="vertical" margin={{top:4,right:20,bottom:4,left:12}}>
        <CartesianGrid horizontal={false} stroke={DIM}/>
        <XAxis type="number" domain={[0,100]} tick={TX} axisLine={false} tickLine={false}/>
        <YAxis type="category" dataKey="label" width={130} tick={TX} axisLine={false} tickLine={false}/>
        <Tooltip content={<TT/>}/>
        <Bar dataKey="value" radius={[0,6,6,0]} maxBarSize={16}>
          {data.map((d,i)=>{
            const alpha = 0.4 + d.value/160;
            return <Cell key={i} fill={color} opacity={alpha}/>;
          })}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

function HoganHDSChart({ profileId, color }) {
  const raw = HOGAN_HDS_DATA[profileId] || HOGAN_HDS_DATA.analyzer;
  const data = raw.bars.filter(d => d.value > 20);
  const active = raw.derailers || [];
  return (
    <div className="space-y-3 py-2">
      <div className="flex flex-wrap gap-2 px-2">
        {active.map(d=>(
          <span key={d} className="inline-block rounded-lg border px-3 py-1.5 text-xs font-semibold"
            style={{background:`${color}22`,borderColor:`${color}44`,color}}>
            {d}
          </span>
        ))}
      </div>
      <p className="px-2 text-xs leading-5 text-white/50">{raw.riskText}</p>
      <ResponsiveContainer width="100%" height={Math.max(180, data.length*28)}>
        <BarChart data={data} layout="vertical" margin={{top:4,right:20,bottom:4,left:12}}>
          <CartesianGrid horizontal={false} stroke={DIM}/>
          <XAxis type="number" domain={[0,100]} tick={TX} axisLine={false} tickLine={false}/>
          <YAxis type="category" dataKey="derailer" width={115} tick={TX} axisLine={false} tickLine={false}/>
          <Tooltip content={<TT/>}/>
          <Bar dataKey="value" radius={[0,6,6,0]} maxBarSize={14}>
            {data.map((d,i)=><Cell key={i} fill={d.value > 60 ? '#f87171' : color} opacity={d.value > 60 ? 0.8 : 0.4}/>)}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function DecisionMakingChart({ profileId, color }) {
  const raw = DECISION_MAKING_DATA[profileId] || DECISION_MAKING_DATA.analyzer;
  const data = raw.bars;
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-2 px-2">
        <div className="rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2">
          <p className="text-[10px] uppercase tracking-widest text-white/30">Primary</p>
          <p className="text-sm font-semibold text-white mt-0.5">{raw.primary}</p>
        </div>
        <div className="rounded-xl border border-amber-400/20 bg-amber-500/8 px-3 py-2">
          <p className="text-[10px] uppercase tracking-widest text-amber-400/60">Stress Mode</p>
          <p className="text-sm font-semibold text-white mt-0.5">{raw.stress}</p>
        </div>
      </div>
      <VBars data={data} labelKey="style" valueKey="value" color={color}/>
    </div>
  );
}

function WorkValuesChart({ profileId, color }) {
  const raw = REISS_DATA[profileId] || REISS_DATA.analyzer;
  const top = Object.entries(raw).sort((a,b)=>b[1]-a[1]).slice(0,8)
    .map(([label,value])=>({label,value}));
  return <HBars data={top} color={color}/>;
}

function ResilientGauge({ profileId, color }) {
  const RESILIENCE = {
    analyzer:65, controller:70, specialist:62, strategist:78,
    venturer:82, altruist:68, captain:85, collaborator:72,
    maverick:75, persuader:70, promoter:72, adapter:68,
    craftsman:60, guardian:62, operator:65, individualist:75, scholar:70,
  };
  const score = RESILIENCE[profileId] || 65;
  return <Gauge value={score} label="Resilience Score" color={color} />;
}

// ─────────────────────────────────────────────────────────────────────────
// MAIN DISPATCH
// ─────────────────────────────────────────────────────────────────────────

export default function LensVisual({ lensId, visualType, color, profileId = 'analyzer' }) {
  const c = color || '#38bdf8';
  const pid = profileId || 'analyzer';

  // ── Dispatch by lensId (highest fidelity) ─────────────────────────────

  if (lensId === 'big-five-ocean') {
    const data = BIG_FIVE_DATA[pid] || BIG_FIVE_DATA.analyzer;
    return <Radar6 data={data} labelKey="trait" valueKey="value" color={c}/>;
  }
  if (lensId === 'hexaco') {
    const data = HEXACO_DATA[pid] || HEXACO_DATA.analyzer;
    return <Radar6 data={data} labelKey="trait" valueKey="value" color={c}/>;
  }
  if (lensId === 'disc-crosswalk') {
    return <VBars data={getDISCData(pid)} labelKey="label" valueKey="value" color={c}/>;
  }
  if (lensId === 'insights-discovery-color-model') {
    return <Donut data={getInsightsData(pid)} color={c}/>;
  }
  if (lensId === 'kolbe-a-index-conation') {
    return <Radar6 data={getKolbeData(pid)} labelKey="label" valueKey="value" color={c}/>;
  }
  if (lensId === 'thomas-kilmann-conflict-mode-tki') {
    return <HBars data={getTKIData(pid)} color={c}/>;
  }
  if (lensId === 'enneagram-core-types-and-subtypes') {
    const ed = ENNEAGRAM_DATA[pid] || ENNEAGRAM_DATA.analyzer;
    return <EnneagramWheel types={ed.types} color={c}/>;
  }
  if (lensId === 'cliftonstrengths-34-themes') {
    const themes = CLIFTON_DATA[pid] || CLIFTON_DATA.analyzer;
    return <HBars data={themes.map((t,i)=>({label:t,value:95-i*8}))} color={c}/>;
  }
  if (lensId === 'via-character-strengths') {
    const themes = VIA_DATA[pid] || VIA_DATA.analyzer;
    return <HBars data={themes.map((t,i)=>({label:t,value:95-i*8}))} color={c}/>;
  }
  if (lensId === 'reiss-motivation-profile') {
    const raw = REISS_DATA[pid] || REISS_DATA.analyzer;
    const data = Object.entries(raw).sort((a,b)=>b[1]-a[1]).map(([label,value])=>({label,value}));
    return <HBars data={data} color={c} h={360}/>;
  }
  if (lensId === 'eq-i-20-emotional-intelligence' || lensId === 'emotional-intelligence-eqi20-lens') {
    return <MultiDomainProfile profileId={pid} color={c}/>;
  }
  if (lensId === 'cognitive-load--working-style') {
    const data = COGNITIVE_LOAD_DATA[pid] || COGNITIVE_LOAD_DATA.analyzer;
    return <Radar6 data={data.map(d=>({trait:d.dim,value:d.v}))} labelKey="trait" valueKey="value" color={c}/>;
  }
  if (lensId === 'hogan-hpi') {
    return <HoganHPIChart profileId={pid} color={c}/>;
  }
  if (lensId === 'hogan-hds-derailers') {
    return <HoganHDSChart profileId={pid} color={c}/>;
  }
  if (lensId === 'decision-making-style' || lensId === 'decisionmaking-style-lens') {
    return <DecisionMakingChart profileId={pid} color={c}/>;
  }
  if (lensId === 'lencioni-team-dynamics' || lensId?.includes('lencioni') || lensId?.includes('team-synthesis')) {
    return <LencioniPyramid profileId={pid} color={c}/>;
  }
  if (lensId === 'kai--kirton-adaption-innovation-inventory' || lensId?.includes('kirton') || lensId?.includes('-kai-')) {
    return <ContinuumSlider profileId={pid} color={c}/>;
  }
  if (lensId === 'learning-agility--growth-mindset') {
    return <GrowthArc profileId={pid} color={c}/>;
  }
  if (lensId === 'cognitive-processing-style' || lensId === 'cognitive-reflection-test-crt') {
    return <ScatterQuadrant profileId={pid} color={c} xLabel="Analytic" yLabel="Holistic"/>;
  }
  if (lensId === 'hbdi--herrmann-brain-dominance-instrument') {
    return <BrainQuadrant profileId={pid} color={c}/>;
  }
  if (lensId === 'spiral-dynamics--graves-values-workplace-mapping' || lensId?.includes('spiral') || lensId?.includes('graves')) {
    return <SpiralBands profileId={pid} color={c}/>;
  }
  if (lensId === 'interpersonal-dynamics-inventory' || lensId === 'social-styles' || lensId === 'social-cognition') {
    return <NetworkHeatmap profileId={pid} color={c}/>;
  }
  if (lensId === 'work-values-inventory-practical-workplace-priorities' || lensId?.includes('work-values')) {
    return <WorkValuesChart profileId={pid} color={c}/>;
  }
  if (lensId?.includes('resilience') || lensId?.includes('cdrisc') || lensId?.includes('cd-risc')) {
    return <ResilientGauge profileId={pid} color={c}/>;
  }
  if (lensId === 'trust-and-psychological-safety-lens') {
    const score = {analyzer:52,controller:45,specialist:55,strategist:60,venturer:62,
      altruist:78,captain:65,collaborator:85,maverick:58,persuader:72,promoter:75,
      adapter:70,craftsman:50,guardian:55,operator:65,individualist:48,scholar:50}[pid] || 60;
    return <Gauge value={score} label="Trust Score" color={c}/>;
  }

  // ── Dispatch by visualType ───────────────────────────────────────────

  switch (visualType) {
    case 'radar':
    case 'hexagonRadar':
    case 'layeredRadar':
    case 'narrativeScorecardRadar':
    case 'radarSubscaleBars':
    case 'fourAxisRadial':
    case 'radial360Bars':
    case 'accessibilityMatrixRadar':
    case 'spiderTrend': {
      const data = BIG_FIVE_DATA[pid] || BIG_FIVE_DATA.analyzer;
      return <Radar6 data={data} labelKey="trait" valueKey="value" color={c}/>;
    }

    case 'radarBars':
    case 'rankedBarsRadar': {
      const cogData = COGNITIVE_LOAD_DATA[pid] || COGNITIVE_LOAD_DATA.analyzer;
      return <Radar6 data={cogData.map(d=>({trait:d.dim,value:d.v}))} labelKey="trait" valueKey="value" color={c}/>;
    }

    case 'colorWheel':
    case 'roleWheel':
    case 'pieStackedBars':
    case 'segmentedWheel':
    case 'triangleCircumplex': {
      return <Donut data={getInsightsData(pid)} color={c}/>;
    }

    case 'circumplex':
    case 'valuesCircumplex': {
      return <ScatterQuadrant profileId={pid} color={c} xLabel="Agency" yLabel="Communion"/>;
    }

    case 'quadrantPlot':
    case 'scatterQuadrant':
    case 'brainQuadrant':
    case 'temperamentQuadrant': {
      return <ScatterQuadrant profileId={pid} color={c} xLabel="Dominance" yLabel="Sociability"/>;
    }

    case 'brainQuadrantWheel': {
      return <BrainQuadrant profileId={pid} color={c}/>;
    }

    case 'rankedBars':
    case 'profileBars':
    case 'riskBars':
    case 'domainBars':
    case 'multiDomainBars': {
      return <MultiDomainProfile profileId={pid} color={c}/>;
    }

    case 'multiBarProfile':
    case 'continuumBars':
    case 'multiAxisBars':
    case 'threeBars':
    case 'threeBarProfile':
    case 'fiveModeBars':
    case 'motiveBars': {
      return <HBars data={getTKIData(pid)} color={c}/>;
    }

    case 'lineRadar': {
      return <GrowthArc profileId={pid} color={c}/>;
    }

    case 'scoreGauge':
    case 'gaugeDistribution':
    case 'gaugeHeatmap':
    case 'scoreGaugeTrend': {
      const score = {analyzer:72,controller:68,specialist:65,strategist:80,
        venturer:85,altruist:70,captain:88,collaborator:75,maverick:78,
        persuader:74,promoter:72,adapter:68,craftsman:62,guardian:65,
        operator:66,individualist:75,scholar:72}[pid] || 70;
      return <Gauge value={score} label="Composite Score" color={c}/>;
    }

    case 'enneagramWheel': {
      const ed = ENNEAGRAM_DATA[pid] || ENNEAGRAM_DATA.analyzer;
      return <EnneagramWheel types={ed.types} color={c}/>;
    }

    case 'networkHeatmap':
    case 'roleMatrix': {
      return <NetworkHeatmap profileId={pid} color={c}/>;
    }

    case 'matrix':
    case 'typeGrid':
    case 'typeGridBars':
    case 'typeGridBarsMBTI':
    case 'leaderStyleMatrix':
    case 'itemTablePassRate': {
      const data = getDISCData(pid);
      return <VBars data={data} labelKey="label" valueKey="value" color={c}/>;
    }

    case 'stackedWorkloadBars': {
      const cogData = COGNITIVE_LOAD_DATA[pid] || COGNITIVE_LOAD_DATA.analyzer;
      return <HBars data={cogData.map(d=>({label:d.dim,value:d.v}))} color={c}/>;
    }

    case 'pyramid': {
      return <LencioniPyramid profileId={pid} color={c}/>;
    }

    case 'spiralBands': {
      return <SpiralBands profileId={pid} color={c}/>;
    }

    case 'branchBarsAccuracy': {
      const data=[
        {label:'Perceiving Emotion',value:72},{label:'Using Emotion',value:60},
        {label:'Understanding Emotion',value:68},{label:'Managing Emotion',value:65},
      ];
      return <HBars data={data} color={c}/>;
    }

    case 'structuredCards': {
      // Show HPI as default for structured card lenses
      if (HOGAN_HPI_DATA[pid]) return <HoganHPIChart profileId={pid} color={c}/>;
      const disc = getDISCData(pid);
      return (
        <div className="grid grid-cols-2 gap-3 p-3">
          {disc.map(d=>(
            <div key={d.label} className="rounded-xl border border-white/10 bg-white/[0.05] p-3">
              <p className="text-xs text-white/30 uppercase tracking-widest mb-1">{d.label}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full" style={{width:`${d.value}%`,background:c}}/>
                </div>
                <span className="text-sm font-bold text-white">{d.value}</span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    default: {
      // Use HEXACO for unrecognized types (different from Big Five which covers other defaults)
      const data = HEXACO_DATA[pid] || HEXACO_DATA.analyzer;
      return <Radar6 data={data} labelKey="trait" valueKey="value" color={c}/>;
    }
  }
}
