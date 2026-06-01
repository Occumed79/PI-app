/**
 * LensVisual.jsx
 * Renders a real chart for every visual type using Recharts.
 * Data is representative/illustrative — shaped correctly for the lens type.
 * No PI drive scores used as fake chart data.
 */
import React from 'react';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid,
  PieChart, Pie, ResponsiveContainer,
  ScatterChart, Scatter, ZAxis,
  LineChart, Line,
} from 'recharts';

const CHART_COLOR = '#38bdf8'; // sky-400
const DIM_COLOR   = 'rgba(255,255,255,0.12)';
const TEXT_COLOR  = 'rgba(255,255,255,0.55)';
const TICK_STYLE  = { fill: TEXT_COLOR, fontSize: 11 };

// ── shared tooltip ──────────────────────────────────────────────────────
function TT({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800 px-3 py-2 text-xs text-white shadow-xl">
      {label && <p className="mb-1 font-semibold">{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.color || CHART_COLOR }}>{p.name}: {typeof p.value === 'number' ? p.value.toFixed(1) : p.value}</p>
      ))}
    </div>
  );
}

// ── Radar / Spider ───────────────────────────────────────────────────────
function RadarViz({ axes, label = 'Score' }) {
  const data = axes.map(a => ({ subject: a.label, [label]: a.value, fullMark: 100 }));
  return (
    <ResponsiveContainer width="100%" height={260}>
      <RadarChart data={data} margin={{ top: 10, right: 30, bottom: 10, left: 30 }}>
        <PolarGrid stroke={DIM_COLOR} />
        <PolarAngleAxis dataKey="subject" tick={TICK_STYLE} />
        <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
        <Radar name={label} dataKey={label} stroke={CHART_COLOR} fill={CHART_COLOR} fillOpacity={0.25} strokeWidth={2} dot={{ r: 3, fill: CHART_COLOR }} />
        <Tooltip content={<TT />} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

// ── Horizontal Bar list ─────────────────────────────────────────────────
function HBarViz({ items, color = CHART_COLOR }) {
  const data = [...items].sort((a, b) => b.value - a.value);
  return (
    <ResponsiveContainer width="100%" height={Math.max(200, data.length * 28)}>
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 20, bottom: 4, left: 4 }}>
        <CartesianGrid horizontal={false} stroke={DIM_COLOR} />
        <XAxis type="number" domain={[0, 100]} tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="label" width={160} tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <Tooltip content={<TT />} />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={14}>
          {data.map((_, i) => <Cell key={i} fill={color} opacity={0.9 - i * 0.03} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// ── Vertical Bar ────────────────────────────────────────────────────────
function VBarViz({ items, color = CHART_COLOR }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={items} margin={{ top: 10, right: 10, bottom: 30, left: 0 }}>
        <CartesianGrid vertical={false} stroke={DIM_COLOR} />
        <XAxis dataKey="label" tick={{ ...TICK_STYLE, fontSize: 10 }} axisLine={false} tickLine={false} angle={-30} textAnchor="end" interval={0} />
        <YAxis domain={[0, 100]} tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <Tooltip content={<TT />} />
        <Bar dataKey="value" fill={color} radius={[4, 4, 0, 0]} maxBarSize={32}>
          {items.map((_, i) => <Cell key={i} fill={color} opacity={0.9 - i * 0.04} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// ── Gauge (arc) ─────────────────────────────────────────────────────────
function GaugeViz({ value = 68, label = 'Score', max = 100 }) {
  const pct = Math.min(value / max, 1);
  const r = 80, cx = 110, cy = 100;
  const startAngle = Math.PI, sweep = Math.PI * pct;
  const endAngle = Math.PI - sweep;
  const x1 = cx + r * Math.cos(startAngle), y1 = cy + r * Math.sin(startAngle);
  const x2 = cx + r * Math.cos(endAngle),   y2 = cy + r * Math.sin(endAngle);
  const nx = cx + (r - 22) * Math.cos(endAngle), ny = cy + (r - 22) * Math.sin(endAngle);

  return (
    <div className="flex flex-col items-center">
      <svg width="220" height="120" viewBox="0 0 220 120">
        {/* Track */}
        <path d={`M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy}`}
          fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" strokeLinecap="round" />
        {/* Fill */}
        {pct > 0 && (
          <path d={`M ${x1},${y1} A ${r},${r} 0 ${pct > 0.5 ? 1 : 0},1 ${x2},${y2}`}
            fill="none" stroke={CHART_COLOR} strokeWidth="14" strokeLinecap="round" />
        )}
        {/* Needle */}
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="white" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
        <circle cx={cx} cy={cy} r="5" fill="white" opacity="0.7" />
        {/* Value */}
        <text x={cx} y={cy + 20} textAnchor="middle" fill="white" fontSize="22" fontWeight="700">{value}</text>
        <text x={cx} y={cy + 36} textAnchor="middle" fill={TEXT_COLOR} fontSize="11">{label}</text>
      </svg>
      <div className="mt-1 flex w-full max-w-[220px] justify-between text-xs text-white/30">
        <span>0</span><span>{max}</span>
      </div>
    </div>
  );
}

// ── Quadrant scatter ─────────────────────────────────────────────────────
function QuadrantViz({ xLabel = 'X Axis', yLabel = 'Y Axis', points = [] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 30, left: 30 }}>
        <CartesianGrid stroke={DIM_COLOR} />
        <XAxis type="number" dataKey="x" domain={[0, 100]} name={xLabel}
          label={{ value: xLabel, position: 'insideBottom', offset: -10, fill: TEXT_COLOR, fontSize: 11 }}
          tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <YAxis type="number" dataKey="y" domain={[0, 100]} name={yLabel}
          label={{ value: yLabel, angle: -90, position: 'insideLeft', fill: TEXT_COLOR, fontSize: 11 }}
          tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <ZAxis range={[60, 60]} />
        {/* Quadrant lines */}
        <Tooltip content={({ active, payload }) => {
          if (!active || !payload?.length) return null;
          const d = payload[0]?.payload;
          return (
            <div className="rounded-xl border border-white/10 bg-slate-800 px-3 py-2 text-xs text-white shadow-xl">
              {d?.name && <p className="font-semibold">{d.name}</p>}
              <p>{xLabel}: {d?.x}</p><p>{yLabel}: {d?.y}</p>
            </div>
          );
        }} />
        <Scatter data={points} fill={CHART_COLOR} opacity={0.8} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

// ── Pie / Wheel ──────────────────────────────────────────────────────────
function PieViz({ slices }) {
  const COLORS = ['#38bdf8', '#818cf8', '#34d399', '#fb923c', '#f472b6', '#a78bfa', '#60a5fa', '#4ade80'];
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie data={slices} dataKey="value" nameKey="label" cx="50%" cy="50%" outerRadius={90}
          innerRadius={40} paddingAngle={2} stroke="none">
          {slices.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} opacity={0.85} />)}
        </Pie>
        <Tooltip content={<TT />} />
      </PieChart>
    </ResponsiveContainer>
  );
}

// ── Line / Trend ─────────────────────────────────────────────────────────
function LineViz({ points, xKey = 'x', yKey = 'y', label = 'Value' }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <LineChart data={points} margin={{ top: 10, right: 20, bottom: 10, left: 0 }}>
        <CartesianGrid stroke={DIM_COLOR} />
        <XAxis dataKey={xKey} tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <YAxis domain={[0, 100]} tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <Tooltip content={<TT />} />
        <Line type="monotone" dataKey={yKey} name={label} stroke={CHART_COLOR} strokeWidth={2.5}
          dot={{ r: 4, fill: CHART_COLOR }} activeDot={{ r: 6 }} />
      </LineChart>
    </ResponsiveContainer>
  );
}

// ── Matrix grid heatmap ──────────────────────────────────────────────────
function MatrixViz({ rows, cols, cells }) {
  const COLORS = ['#0f172a','#1e3a5f','#1d4ed8','#38bdf8','#7dd3fc'];
  return (
    <div className="overflow-x-auto">
      <table className="mx-auto border-collapse text-xs text-white/60">
        <thead>
          <tr>
            <th className="p-1" />
            {cols.map(c => <th key={c} className="p-1.5 font-medium text-white/40 text-center">{c}</th>)}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr key={row}>
              <td className="pr-3 py-1 font-medium text-right text-white/50 whitespace-nowrap">{row}</td>
              {cols.map((col, ci) => {
                const val = cells[ri][ci];
                const idx = Math.min(Math.floor(val / 25), 4);
                return (
                  <td key={col} className="p-0.5">
                    <div className="flex h-9 w-12 items-center justify-center rounded text-xs font-bold text-white"
                      style={{ background: COLORS[idx], opacity: 0.7 + val / 400 }}>
                      {val}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── Enneagram ────────────────────────────────────────────────────────────
function EnneagramViz({ active = [1, 4, 7] }) {
  const types = ['1','2','3','4','5','6','7','8','9'];
  const pts = types.map((_, i) => {
    const deg = (i * 40 - 90) * Math.PI / 180;
    return { x: 130 + 100 * Math.cos(deg), y: 130 + 100 * Math.sin(deg), label: types[i] };
  });
  const CONNECTIONS = [[0,3],[3,6],[6,0],[1,7],[7,4],[4,1],[2,5],[5,8],[8,2]];
  return (
    <div className="flex justify-center">
      <svg width="260" height="260" viewBox="0 0 260 260">
        <circle cx="130" cy="130" r="105" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
        <circle cx="130" cy="130" r="70" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        {/* All connections */}
        {CONNECTIONS.map(([a, b], i) => (
          <line key={i} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y}
            stroke="rgba(56,189,248,0.18)" strokeWidth="1"/>
        ))}
        {/* Outer ring connections */}
        {pts.map((p, i) => (
          <line key={`ring-${i}`} x1={p.x} y1={p.y} x2={pts[(i+1)%9].x} y2={pts[(i+1)%9].y}
            stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
        ))}
        {/* Nodes */}
        {pts.map((p, i) => {
          const isActive = active.includes(i + 1);
          return (
            <g key={i}>
              <circle cx={p.x} cy={p.y} r={isActive ? 14 : 10}
                fill={isActive ? '#38bdf8' : 'rgba(255,255,255,0.08)'}
                stroke={isActive ? '#7dd3fc' : 'rgba(255,255,255,0.15)'}
                strokeWidth="1.5" opacity={isActive ? 0.9 : 0.6}/>
              <text x={p.x} y={p.y + 4} textAnchor="middle" fill="white"
                fontSize={isActive ? 12 : 10} fontWeight="700" opacity={isActive ? 1 : 0.5}>
                {p.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ── Circumplex ───────────────────────────────────────────────────────────
function CircumplexViz({ point = { x: 65, y: 72 }, xLabel = 'Agency', yLabel = 'Communion' }) {
  const cx = 130, cy = 130, r = 100;
  const px = cx + (point.x - 50) / 50 * r;
  const py = cy - (point.y - 50) / 50 * r;
  const rings = [30, 60, 100];
  return (
    <div className="flex justify-center">
      <svg width="260" height="260" viewBox="0 0 260 260">
        {rings.map(rr => <circle key={rr} cx={cx} cy={cy} r={rr} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>)}
        <line x1={cx - r - 10} y1={cy} x2={cx + r + 10} y2={cy} stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <line x1={cx} y1={cy - r - 10} x2={cx} y2={cy + r + 10} stroke="rgba(255,255,255,0.15)" strokeWidth="1"/>
        <text x={cx + r + 14} y={cy + 4} fill={TEXT_COLOR} fontSize="10" textAnchor="start">{xLabel} ↑</text>
        <text x={cx - r - 14} y={cy + 4} fill={TEXT_COLOR} fontSize="10" textAnchor="end">↓</text>
        <text x={cx} y={cy - r - 14} fill={TEXT_COLOR} fontSize="10" textAnchor="middle">{yLabel}</text>
        <circle cx={px} cy={py} r="10" fill="#38bdf8" opacity="0.85" stroke="#7dd3fc" strokeWidth="2"/>
        <line x1={cx} y1={cy} x2={px} y2={py} stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5"/>
      </svg>
    </div>
  );
}

// ── 16-bar profile (16PF) ────────────────────────────────────────────────
function SixteenBarViz({ factors }) {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={factors} layout="vertical" margin={{ top: 4, right: 16, bottom: 4, left: 8 }}>
        <CartesianGrid horizontal={false} stroke={DIM_COLOR} />
        <XAxis type="number" domain={[1, 10]} ticks={[1,2,3,4,5,6,7,8,9,10]} tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="label" width={28} tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <Tooltip content={<TT />} />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={12}>
          {factors.map((f, i) => <Cell key={i} fill={CHART_COLOR} opacity={0.7 + (f.value / 10) * 0.25} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// ── Type Grid (MBTI) ─────────────────────────────────────────────────────
function TypeGridViz({ types, highlighted = ['INTJ'] }) {
  return (
    <div className="flex flex-wrap justify-center gap-1.5 p-4">
      {types.map(t => {
        const isHL = highlighted.includes(t);
        return (
          <div key={t} className={`flex h-11 w-14 items-center justify-center rounded-xl text-xs font-bold transition
            ${isHL ? 'bg-sky-500/40 text-sky-200 ring-1 ring-sky-400/60' : 'bg-white/8 text-white/40'}`}>
            {t}
          </div>
        );
      })}
    </div>
  );
}

// ── Stacked / segmented wheel ────────────────────────────────────────────
function SegmentedWheelViz({ segments }) {
  const COLORS = ['#38bdf8','#818cf8','#34d399','#fb923c','#f472b6','#a78bfa'];
  return (
    <ResponsiveContainer width="100%" height={240}>
      <PieChart>
        <Pie data={segments} dataKey="value" nameKey="label" cx="50%" cy="50%"
          outerRadius={95} paddingAngle={3} stroke="none" label={({ name, percent }) => `${name} ${(percent*100).toFixed(0)}%`}
          labelLine={{ stroke: 'rgba(255,255,255,0.2)' }}>
          {segments.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} opacity={0.8} />)}
        </Pie>
        <Tooltip content={<TT />} />
      </PieChart>
    </ResponsiveContainer>
  );
}

// ── Stacked Workload Bars ────────────────────────────────────────────────
function StackedBarViz({ data, keys, colors }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 10, right: 10, bottom: 30, left: 0 }}>
        <CartesianGrid vertical={false} stroke={DIM_COLOR} />
        <XAxis dataKey="label" tick={{ ...TICK_STYLE, fontSize: 10 }} axisLine={false} tickLine={false} angle={-25} textAnchor="end" />
        <YAxis tick={TICK_STYLE} axisLine={false} tickLine={false} />
        <Tooltip content={<TT />} />
        {keys.map((k, i) => <Bar key={k} dataKey={k} stackId="a" fill={colors[i % colors.length]} opacity={0.8} radius={i === keys.length - 1 ? [4,4,0,0] : [0,0,0,0]} />)}
      </BarChart>
    </ResponsiveContainer>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// LENS DATA — representative shapes for every visual type
// These are ILLUSTRATIVE — no real PI drive scores, no fake personal data
// ═══════════════════════════════════════════════════════════════════════════

const LENS_VISUALS = {

  // ── Personality ──────────────────────────────────────────────────────

  radar: () => <RadarViz axes={[
    {label:'Openness',value:72},{label:'Conscientiousness',value:85},{label:'Extraversion',value:32},
    {label:'Agreeableness',value:58},{label:'Neuroticism',value:28}
  ]} label="Score"/>,

  radarBars: () => <RadarViz axes={[
    {label:'Extraversion',value:30},{label:'Emotional Stability',value:75},{label:'Agreeableness',value:62},
    {label:'Conscientiousness',value:88},{label:'Openness',value:66},{label:'Accommodation',value:55}
  ]} label="Score"/>,

  hexagonRadar: () => <RadarViz axes={[
    {label:'Honesty',value:82},{label:'Emotionality',value:45},{label:'Extraversion',value:35},
    {label:'Agreeableness',value:68},{label:'Conscientiousness',value:90},{label:'Openness',value:74}
  ]} label="Score"/>,

  colorWheel: () => <PieViz slices={[
    {label:'Cool Blue',value:35},{label:'Earth Green',value:20},
    {label:'Sunshine Yellow',value:18},{label:'Fiery Red',value:27}
  ]}/>,

  quadrantPlot: () => <QuadrantViz xLabel="Dominance" yLabel="Influence"
    points={[{x:72,y:28,name:'D'},{x:28,y:74,name:'I'},{x:30,y:62,name:'S'},{x:68,y:72,name:'C'}]}/>,

  temperamentQuadrant: () => <QuadrantViz xLabel="Concrete ← Abstract" yLabel="Cooperative ← Directive"
    points={[{x:30,y:72,name:'Guardian'},{x:70,y:72,name:'Artisan'},{x:30,y:28,name:'Idealist'},{x:70,y:28,name:'Rational'}]}/>,

  typeGrid: () => <TypeGridViz
    types={['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP','ESTP','ESFP','ENFP','ENTP','ESTJ','ESFJ','ENFJ','ENTJ']}
    highlighted={['INTJ','INTP']}/>,

  enneagramWheel: () => <EnneagramViz active={[1,5,6]}/>,

  multiBarProfile: () => <SixteenBarViz factors={[
    {label:'A',value:4},{label:'B',value:8},{label:'C',value:7},{label:'E',value:6},
    {label:'F',value:3},{label:'G',value:8},{label:'H',value:4},{label:'I',value:5},
    {label:'L',value:6},{label:'M',value:7},{label:'N',value:5},{label:'O',value:4},
    {label:'Q1',value:7},{label:'Q2',value:5},{label:'Q3',value:8},{label:'Q4',value:3}
  ]}/>,

  structuredCards: () => (
    <div className="grid grid-cols-2 gap-3 p-2">
      {[['Adjustment','72 / Normal'],['Ambition','85 / High'],['Sociability','34 / Low'],
        ['Interpersonal','62'],['Prudence','88'],['Inquisitive','74']].map(([k,v])=>(
        <div key={k} className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-1">{k}</p>
          <p className="text-sm font-semibold text-white">{v}</p>
        </div>
      ))}
    </div>
  ),

  // ── Cognitive ────────────────────────────────────────────────────────

  scoreGauge: () => <GaugeViz value={72} label="Score" max={100}/>,
  scoreGaugeTrend: () => <GaugeViz value={78} label="Score" max={100}/>,
  gaugeDistribution: () => <GaugeViz value={65} label="Sensitivity Index" max={100}/>,

  scatterQuadrant: () => <QuadrantViz xLabel="Analytic" yLabel="Holistic"
    points={[{x:80,y:35,name:'This profile'},{x:45,y:60,name:'Reference'},{x:62,y:48,name:'Average'}]}/>,

  matrix: () => <MatrixViz
    rows={['Speed','Thoroughness']} cols={['Intuitive','Analytical']}
    cells={[[85,40],[30,90]]}/>,

  networkHeatmap: () => <MatrixViz
    rows={['Self-Awareness','Perspective','Attribution','Empathy']}
    cols={['Score']}
    cells={[[78],[65],[72],[80]]}/>,

  lineRadar: () => <LineViz
    points={[{x:'T1',y:55},{x:'T2',y:62},{x:'T3',y:70},{x:'T4',y:67},{x:'T5',y:78},{x:'T6',y:82}]}
    xKey="x" yKey="y" label="Learning Agility"/>,

  layeredRadar: () => <RadarViz axes={[
    {label:'Planning',value:78},{label:'Monitoring',value:65},{label:'Evaluating',value:72},
    {label:'Knowledge',value:85},{label:'Regulation',value:60}
  ]} label="Metacog Score"/>,

  fourAxisRadial: () => <RadarViz axes={[
    {label:'Fact Finder',value:82},{label:'Follow Thru',value:55},
    {label:'Quick Start',value:38},{label:'Implementor',value:24}
  ]} label="Conation"/>,

  brainQuadrantWheel: () => <PieViz slices={[
    {label:'Analytical (A)',value:35},{label:'Sequential (B)',value:28},
    {label:'Interpersonal (C)',value:20},{label:'Imaginative (D)',value:17}
  ]}/>,

  brainQuadrant: () => <QuadrantViz xLabel="Logical ← Creative" yLabel="Sequential ← Holistic"
    points={[{x:25,y:28,name:'A'},{ x:25,y:72,name:'B'},{x:75,y:72,name:'C'},{x:75,y:28,name:'D'},{x:35,y:42,name:'Profile'}]}/>,

  itemTablePassRate: () => <VBarViz items={[
    {label:'Q1',value:93},{label:'Q2',value:40},{label:'Q3',value:62},{label:'Q4',value:28}
  ]} color="#818cf8"/>,

  multiAxisBars: () => <HBarViz items={[
    {label:'Working Memory',value:82},{label:'Inhibition',value:74},{label:'Shifting',value:68},
    {label:'Planning',value:88},{label:'Fluency',value:71}
  ]}/>,

  continuumBars: () => (
    <div className="space-y-4 p-4">
      {[{label:'Adaption ←',value:30,right:'→ Innovation'},{label:'Low KAI',value:38,right:'High KAI'}].map(({label,value,right})=>(
        <div key={label}>
          <div className="mb-1.5 flex justify-between text-xs text-white/45">
            <span>{label}</span><span>{right}</span>
          </div>
          <div className="relative h-3 rounded-full bg-white/10">
            <div className="absolute left-0 top-0 h-full rounded-full bg-sky-400/60" style={{width:`${value}%`}}/>
            <div className="absolute -top-1 h-5 w-1 rounded bg-sky-300" style={{left:`${value}%`, transform:'translateX(-50%)'}}/>
          </div>
          <p className="mt-1 text-right text-xs font-semibold text-sky-300">{value}/100</p>
        </div>
      ))}
    </div>
  ),

  segmentedWheel: () => <SegmentedWheelViz segments={[
    {label:'Visual',value:30},{label:'Auditory',value:20},{label:'Kinesthetic',value:25},
    {label:'Reading',value:15},{label:'Social',value:10}
  ]}/>,

  spiderTrend: () => <RadarViz axes={[
    {label:'Mental Flexibility',value:75},{label:'People Agility',value:68},{label:'Change Agility',value:82},
    {label:'Results Agility',value:78},{label:'Self-Awareness',value:70}
  ]} label="Agility"/>,

  // ── Motivation ───────────────────────────────────────────────────────

  threeBars: () => <VBarViz items={[
    {label:'Autonomy',value:78},{label:'Competence',value:85},{label:'Relatedness',value:55}
  ]}/>,

  rankedBars: () => <HBarViz items={[
    {label:'Achiever',value:92},{label:'Learner',value:88},{label:'Relator',value:75},
    {label:'Responsibility',value:82},{label:'Strategic',value:79},{label:'Intellection',value:76},
    {label:'Futuristic',value:71},{label:'Deliberative',value:68}
  ]}/>,

  rankedBarsRadar: () => <HBarViz items={[
    {label:'Creativity',value:85},{label:'Love of Learning',value:82},{label:'Judgment',value:78},
    {label:'Perspective',value:74},{label:'Bravery',value:70},{label:'Perseverance',value:88},
    {label:'Honesty',value:92},{label:'Kindness',value:75}
  ]}/>,

  motiveBars: () => <HBarViz items={[
    {label:'Power',value:35},{label:'Independence',value:82},{label:'Curiosity',value:88},
    {label:'Acceptance',value:52},{label:'Order',value:76},{label:'Saving',value:40},
    {label:'Honor',value:65},{label:'Idealism',value:70},{label:'Social Contact',value:38},
    {label:'Family',value:55},{label:'Status',value:42},{label:'Vengeance',value:28},
    {label:'Romance',value:44},{label:'Eating',value:50},{label:'Exercise',value:60},
    {label:'Tranquility',value:72}
  ]}/>,

  pieStackedBars: () => <PieViz slices={[
    {label:'Achievement',value:35},{label:'Recognition',value:22},{label:'Affiliation',value:18},
    {label:'Growth',value:15},{label:'Security',value:10}
  ]}/>,

  // ── Emotional ────────────────────────────────────────────────────────

  radarSubscaleBars: () => <RadarViz axes={[
    {label:'Self-Perception',value:82},{label:'Self-Expression',value:70},{label:'Interpersonal',value:75},
    {label:'Decision Making',value:68},{label:'Stress Mgmt',value:60}
  ]} label="EI Score"/>,

  circumplex: () => <CircumplexViz point={{x:68,y:72}} xLabel="Agency" yLabel="Communion"/>,
  valuesCircumplex: () => <CircumplexViz point={{x:55,y:80}} xLabel="Self-Enhancement" yLabel="Self-Transcendence"/>,
  triangleCircumplex: () => <CircumplexViz point={{x:62,y:60}} xLabel="Power" yLabel="Love"/>,
  threeBarsCircumplex: () => <VBarViz items={[
    {label:'Inclusion',value:68},{label:'Control',value:52},{label:'Affection',value:78}
  ]}/>,
  gaugeHeatmap: () => <GaugeViz value={74} label="Safety Score" max={100}/>,

  // ── Team ─────────────────────────────────────────────────────────────

  fiveModeBars: () => <HBarViz items={[
    {label:'Competing',value:35},{label:'Collaborating',value:72},{label:'Compromising',value:58},
    {label:'Avoiding',value:28},{label:'Accommodating',value:65}
  ]}/>,

  // ── Multi-domain / Leadership ────────────────────────────────────────

  multiDomainBars: () => <HBarViz items={[
    {label:'Cognitive',value:82},{label:'Emotional',value:74},{label:'Social',value:68},
    {label:'Behavioral',value:77},{label:'Motivational',value:80}
  ]}/>,

  stackedWorkloadBars: () => <StackedBarViz
    data={[{label:'Week 1',Task:40,Admin:20,Collab:15},{label:'Week 2',Task:35,Admin:25,Collab:20},
           {label:'Week 3',Task:50,Admin:15,Collab:18},{label:'Week 4',Task:38,Admin:22,Collab:25}]}
    keys={['Task','Admin','Collab']}
    colors={['#38bdf8','#818cf8','#34d399']}/>,

  profileBars: () => <HBarViz items={[
    {label:'Initiative',value:78},{label:'Structure',value:85},{label:'Stability',value:72},
    {label:'Social Drive',value:45},{label:'Influence',value:55}
  ]}/>,

  riskBars: () => <HBarViz items={[
    {label:'Excitable',value:62},{label:'Skeptical',value:55},{label:'Cautious',value:38},
    {label:'Reserved',value:70},{label:'Leisurely',value:45},{label:'Bold',value:72},
    {label:'Mischievous',value:48},{label:'Colorful',value:58},{label:'Imaginative',value:65},
    {label:'Diligent',value:82},{label:'Dutiful',value:74}
  ]}/>,

  domainBars: () => <VBarViz items={[
    {label:'Cognitive',value:82},{label:'Emotional',value:74},{label:'Social',value:68},
    {label:'Conative',value:77}
  ]}/>,

  dualAxisBalance: () => (
    <div className="space-y-4 p-4">
      {[{label:'Task Focus',value:72,opp:'People Focus'},{label:'Structure',value:85,opp:'Flexibility'},{label:'Pace',value:38,opp:'Reflection'}].map(({label,value,opp})=>(
        <div key={label}>
          <div className="mb-1 flex justify-between text-xs text-white/50"><span>{label}</span><span>{opp}</span></div>
          <div className="relative h-2.5 rounded-full bg-white/10">
            <div className="absolute left-0 top-0 h-full rounded-l-full bg-sky-400/65" style={{width:`${value}%`}}/>
            <div className="absolute right-0 top-0 h-full rounded-r-full bg-violet-400/55" style={{width:`${100-value}%`}}/>
          </div>
        </div>
      ))}
    </div>
  ),

  threeBarProfile: () => <VBarViz items={[
    {label:'Adaptive',value:72},{label:'Assertive',value:58},{label:'Analytical',value:84}
  ]}/>,

  leaderStyleMatrix: () => <MatrixViz
    rows={['Telling','Selling','Participating','Delegating']}
    cols={['Low Task','High Task']}
    cells={[[30,15],[45,70],[80,55],[60,35]]}/>,

  typeGridBars: () => <TypeGridViz
    types={['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP','ESTP','ESFP','ENFP','ENTP','ESTJ','ESFJ','ENFJ','ENTJ']}
    highlighted={['ENTJ','ENTP','ESTJ']}/>,

  typeGridBarsMBTI: () => <TypeGridViz
    types={['ISTJ','ISFJ','INFJ','INTJ','ISTP','ISFP','INFP','INTP','ESTP','ESFP','ENFP','ENTP','ESTJ','ESFJ','ENFJ','ENTJ']}
    highlighted={['INTJ']}/>,

  // newer / exotic types
  narrativeScorecardRadar: () => <RadarViz axes={[
    {label:'Clarity',value:78},{label:'Accuracy',value:85},{label:'Depth',value:72},
    {label:'Relevance',value:80},{label:'Impact',value:68}
  ]} label="Score"/>,

  spiralBands: () => <LineViz
    points={[{x:'Stage 1',y:20},{x:'Stage 2',y:38},{x:'Stage 3',y:55},{x:'Stage 4',y:68},{x:'Stage 5',y:78},{x:'Stage 6',y:88}]}
    xKey="x" yKey="y" label="Development"/>,

  roleWheel: () => <PieViz slices={[
    {label:'Creator',value:30},{label:'Advancer',value:22},{label:'Refiner',value:18},
    {label:'Executor',value:20},{label:'Flexer',value:10}
  ]}/>,

  roleMatrix: () => <MatrixViz
    rows={['Creator','Advancer','Refiner','Executor']}
    cols={['Fit']}
    cells={[[85],[72],[65],[78]]}/>,

  pyramid: () => (
    <div className="flex flex-col items-center gap-1.5 py-4">
      {[{label:'Self-Actualization',w:40,color:'#818cf8'},{label:'Esteem',w:60,color:'#60a5fa'},
        {label:'Love / Belonging',w:75,color:'#38bdf8'},{label:'Safety',w:88,color:'#34d399'},
        {label:'Physiological',w:100,color:'#4ade80'}].map(({label,w,color})=>(
        <div key={label} className="flex items-center gap-3">
          <div className="rounded py-2 px-3 text-xs font-medium text-white text-center"
            style={{width:`${w * 2.4}px`, background:`${color}33`, border:`1px solid ${color}44`}}>
            {label}
          </div>
        </div>
      ))}
    </div>
  ),

  radial360Bars: () => <RadarViz axes={[
    {label:'Self',value:72},{label:'Manager',value:68},{label:'Peers',value:75},
    {label:'Reports',value:80},{label:'Customers',value:65}
  ]} label="360° Score"/>,

  accessibilityMatrixRadar: () => <RadarViz axes={[
    {label:'Sensory',value:85},{label:'Cognitive',value:72},{label:'Motor',value:78},
    {label:'Communication',value:68},{label:'Social',value:74}
  ]} label="Score"/>,

  branchBarsAccuracy: () => <HBarViz items={[
    {label:'Perceiving Emotion',value:78},{label:'Using Emotion',value:65},
    {label:'Understanding Emotion',value:72},{label:'Managing Emotion',value:68}
  ]}/>,

  timelineTagCloud: () => (
    <div className="flex flex-wrap gap-2 p-4 justify-center">
      {[['Patterns',88,'#38bdf8'],['Identity',72,'#818cf8'],['Meaning',65,'#34d399'],
        ['Growth',80,'#fb923c'],['Connection',58,'#f472b6'],['Purpose',74,'#a78bfa'],
        ['Values',82,'#60a5fa'],['Role',55,'#4ade80']].map(([label,size,color])=>(
        <span key={label} className="rounded-full px-3 py-1 font-medium"
          style={{fontSize:`${8+size/14}px`, background:`${color}22`, color, border:`1px solid ${color}44`}}>
          {label}
        </span>
      ))}
    </div>
  ),

  placeholder: () => (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <p className="text-sm text-white/40">Visual not yet defined for this lens type.</p>
    </div>
  ),
};

// ─── Public component ───────────────────────────────────────────────────
export default function LensVisual({ visualType, color }) {
  const renderer = LENS_VISUALS[visualType];
  if (!renderer) {
    // Fallback to bars for unknown types
    return <HBarViz items={[{label:'Dimension A',value:72},{label:'Dimension B',value:58},{label:'Dimension C',value:84},{label:'Dimension D',value:66}]}/>;
  }
  return (
    <div className="w-full">
      {renderer(color)}
    </div>
  );
}
