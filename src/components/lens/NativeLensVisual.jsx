import React from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const FALLBACK_FIELDS = [
  { label: 'Primary signal', value: 'High', score: 83 },
  { label: 'Secondary signal', value: 'Moderate', score: 55 },
  { label: 'Watch-out', value: 'Low-Moderate', score: 38 },
  { label: 'Support need', value: 'Moderate', score: 55 },
  { label: 'Adaptability', value: 'High', score: 76 },
  { label: 'Structure need', value: 'Moderate', score: 52 },
];

const COLOR_SET = ['#38bdf8', '#818cf8', '#34d399', '#f59e0b', '#f472b6', '#a78bfa', '#22d3ee', '#fb7185', '#facc15', '#4ade80', '#fb923c', '#c084fc'];
const DISC_COLORS = ['#ef4444', '#facc15', '#22c55e', '#38bdf8'];
const SPIRAL_COLORS = ['#a855f7', '#ef4444', '#2563eb', '#f97316', '#22c55e', '#facc15', '#06b6d4', '#84cc16'];

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function scoreFromValue(value, index = 0) {
  if (typeof value === 'number') return clamp(value);
  const text = String(value || '').toLowerCase();
  if (text.includes('very high')) return 96;
  if (text.includes('moderate-high')) return 70;
  if (text.includes('high')) return 83;
  if (text.includes('low-moderate')) return 38;
  if (text.includes('moderate')) return 55;
  if (text.includes('very low')) return 8;
  if (text.includes('low')) return 22;
  const percent = text.match(/(\d{1,3})\s*%/);
  if (percent) return clamp(Number(percent[1]));
  return [72, 58, 44, 63, 36, 82, 49, 91][index % 8];
}

function getVisualData(result) {
  const numeric = result?.numericFields || [];
  const fields = result?.fields || [];
  const source = numeric.length ? numeric : fields.length ? fields : FALLBACK_FIELDS;
  return source.slice(0, 16).map((field, index) => ({
    name: String(field.label || field.name || `Signal ${index + 1}`).replace(/_/g, ' '),
    value: clamp(field.score ?? scoreFromValue(field.value, index)),
    raw: field.value || field.raw || '',
    color: COLOR_SET[index % COLOR_SET.length],
  }));
}

function getVisualKind(visualType = '') {
  const groups = {
    radar: ['radar', 'radarBars', 'hexagonRadar', 'layeredRadar', 'radarSubscaleBars', 'rankedBarsRadar', 'narrativeScorecardRadar', 'spiderTrend'],
    quadrant: ['quadrantPlot', 'scatterQuadrant', 'typeGrid', 'temperamentQuadrant', 'leaderStyleMatrix', 'dualAxisBalance'],
    colorWheel: ['colorWheel'],
    gauge: ['scoreGauge', 'gaugeSubscaleBars', 'scoreGaugeTrend', 'gaugeHeatmap', 'gaugeDistribution'],
    enneagram: ['enneagramWheel'],
    pyramid: ['pyramid'],
    timeline: ['timelineTagCloud'],
    matrix: ['matrix', 'roleMatrix', 'competencyMatrix', 'itemTablePassRate'],
    spiral: ['spiralBands'],
    checklist: ['accessibilityMatrixRadar', 'profileBarsChecklist', 'profileChecklist'],
    trend: ['lineRadar'],
    continuum: ['continuumBars', 'threeBars', 'threeBarsCircumplex'],
    circumplex: ['circumplex', 'valuesCircumplex'],
    triangle: ['triangleCircumplex'],
    wheel: ['roleWheel', 'brainQuadrantWheel', 'segmentedWheel', 'fourAxisRadial'],
    normalCurve: ['normalCurve'],
    risk: ['riskBars', 'domainBars', 'threeBarProfile', 'multiDomainBars', 'stackedWorkloadBars'],
    ranked: ['rankedBars', 'motiveBars', 'pieStackedBars', 'fiveModeBars', 'multiAxisBars', 'multiBarProfile', 'profileBars', 'branchBarsAccuracy'],
  };

  for (const [kind, values] of Object.entries(groups)) {
    if (values.includes(visualType)) return kind;
  }
  return 'ranked';
}

function Panel({ title, subtitle, children, className = '' }) {
  return (
    <div className={cx('rounded-3xl border border-white/10 bg-black/20 p-5', className)}>
      <div className="mb-4">
        <div className="text-sm font-semibold text-white">{title}</div>
        {subtitle && <div className="mt-1 text-xs leading-5 text-white/45">{subtitle}</div>}
      </div>
      {children}
    </div>
  );
}

function MiniBars({ data, limit = 6 }) {
  return (
    <div className="space-y-2">
      {data.slice(0, limit).map((item) => (
        <div key={item.name}>
          <div className="mb-1 flex justify-between gap-3 text-xs">
            <span className="truncate text-white/55">{item.name}</span>
            <span className="text-white/35">{item.raw || `${Math.round(item.value)}%`}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full" style={{ width: `${Math.max(5, item.value)}%`, background: item.color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function RadarVisual({ data, lens }) {
  return (
    <Panel title="Trait shape" subtitle={lens.visualLabel}>
      <div className="grid gap-4 lg:grid-cols-5">
        <div className="h-72 lg:col-span-3">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart data={data.slice(0, 8)}>
              <PolarGrid stroke="rgba(255,255,255,.13)" />
              <PolarAngleAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,.58)', fontSize: 10 }} />
              <Radar dataKey="value" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.28} />
              <Tooltip contentStyle={{ background: 'rgba(15,23,42,.96)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, color: '#fff' }} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
        <div className="self-center lg:col-span-2"><MiniBars data={data} limit={6} /></div>
      </div>
    </Panel>
  );
}

function BarProfileVisual({ data, lens, title = 'Profile bars' }) {
  return (
    <Panel title={title} subtitle={lens.visualLabel}>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.slice(0, 12)} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
            <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,.5)', fontSize: 10 }} interval={0} angle={-22} textAnchor="end" height={76} />
            <YAxis domain={[0, 100]} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'rgba(15,23,42,.96)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, color: '#fff' }} />
            <Bar dataKey="value" radius={[10, 10, 4, 4]}>{data.slice(0, 12).map((entry) => <Cell key={entry.name} fill={entry.color} />)}</Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

function RiskBandsVisual({ data, lens }) {
  return (
    <Panel title="Risk / domain bands" subtitle={lens.visualLabel}>
      <div className="space-y-3">
        {data.slice(0, 10).map((item) => (
          <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
            <div className="mb-2 flex justify-between gap-3 text-xs"><span className="truncate text-white/70">{item.name}</span><span className="text-white/40">{item.raw || `${Math.round(item.value)}%`}</span></div>
            <div className="grid grid-cols-3 overflow-hidden rounded-full border border-white/10 bg-white/10">
              <div className="h-2 bg-emerald-400/45" /><div className="h-2 bg-amber-400/55" /><div className="h-2 bg-rose-400/60" />
            </div>
            <div className="relative mt-[-10px] h-3"><div className="absolute top-0 h-3 w-3 -translate-x-1/2 rounded-full border border-white bg-white" style={{ left: `${item.value}%` }} /></div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function GaugeVisual({ data, lens }) {
  const value = Math.round(data[0]?.value ?? 55);
  const gaugeData = [{ name: lens.lens, value, fill: value >= 75 ? '#34d399' : value >= 45 ? '#f59e0b' : '#fb7185' }];
  return (
    <Panel title="Score gauge" subtitle={lens.visualLabel}>
      <div className="relative h-64">
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart innerRadius="68%" outerRadius="95%" data={gaugeData} startAngle={180} endAngle={0}>
            <RadialBar dataKey="value" cornerRadius={16} background={{ fill: 'rgba(255,255,255,.08)' }} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="absolute inset-x-0 top-24 text-center"><div className="text-5xl font-bold text-white">{value}</div><div className="text-xs uppercase tracking-[0.2em] text-white/35">index</div></div>
      </div>
      {data.length > 1 && <MiniBars data={data.slice(1)} limit={4} />}
    </Panel>
  );
}

function QuadrantVisual({ data, lens }) {
  const x = clamp((data[0]?.value ?? 55) - 50, -42, 42);
  const y = clamp((data[1]?.value ?? 60) - 50, -42, 42);
  const labels = lens.visualType === 'quadrantPlot' ? ['Dominance', 'Influence', 'Steadiness', 'Conscientiousness'] : ['Direct / Fast', 'Expressive', 'Steady', 'Precise'];
  return (
    <Panel title="Quadrant map" subtitle={lens.visualLabel}>
      <div className="relative h-72 rounded-3xl border border-white/10 bg-white/[0.04]">
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/15" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/15" />
        <div className="absolute left-4 top-4 text-xs text-white/45">{labels[0]}</div>
        <div className="absolute right-4 top-4 text-xs text-white/45">{labels[1]}</div>
        <div className="absolute bottom-4 left-4 text-xs text-white/45">{labels[2]}</div>
        <div className="absolute bottom-4 right-4 text-xs text-white/45">{labels[3]}</div>
        <div className="absolute h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-sky-400 shadow-lg shadow-sky-500/30" style={{ left: `${50 + x}%`, top: `${50 - y}%` }} />
      </div>
    </Panel>
  );
}

function ColorWheelVisual({ data, lens }) {
  const values = ['Cool Blue', 'Fiery Red', 'Sunshine Yellow', 'Earth Green'].map((name, index) => ({ name, value: data[index]?.value || [76, 58, 41, 64][index], color: ['#38bdf8', '#ef4444', '#facc15', '#22c55e'][index] }));
  const total = values.reduce((sum, item) => sum + item.value, 0) || 1;
  let cursor = 0;
  const gradient = values.map((item) => {
    const start = cursor;
    cursor += (item.value / total) * 100;
    return `${item.color} ${start}% ${cursor}%`;
  }).join(', ');
  const dominant = [...values].sort((a, b) => b.value - a.value)[0];
  return (
    <Panel title="Color energy wheel" subtitle={lens.visualLabel}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative mx-auto h-60 w-60 rounded-full border border-white/10 shadow-2xl shadow-black/30" style={{ background: `conic-gradient(${gradient})` }}>
          <div className="absolute inset-10 rounded-full border border-white/10 bg-slate-950/90" />
          <div className="absolute inset-0 flex items-center justify-center text-center"><div><div className="text-lg font-bold text-white">{dominant.name}</div><div className="text-xs text-white/45">dominant signal</div></div></div>
        </div>
        <div className="space-y-3 self-center">{values.map((v) => <div key={v.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"><div className="flex justify-between text-xs"><span className="text-white/70">{v.name}</span><span className="text-white/40">{Math.round(v.value)}%</span></div><div className="mt-2 h-2 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${v.value}%`, background: v.color }} /></div></div>)}</div>
      </div>
    </Panel>
  );
}

function EnneagramVisual({ data, lens }) {
  const points = Array.from({ length: 9 }, (_, index) => {
    const angle = (-90 + index * 40) * Math.PI / 180;
    return { n: index + 1, x: 50 + 38 * Math.cos(angle), y: 50 + 38 * Math.sin(angle), value: data[index]?.value || 45 + ((index * 7) % 45) };
  });
  const top = [...points].sort((a, b) => b.value - a.value)[0];
  return (
    <Panel title="Nine-point map" subtitle={lens.visualLabel}>
      <svg viewBox="0 0 100 100" className="h-72 w-full">
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="1" />
        <polyline points="50,12 83,69 17,69 50,12" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
        <polyline points="74,21 26,21 88,50 26,79 74,79" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
        {points.map((p) => <g key={p.n}><circle cx={p.x} cy={p.y} r={p.n === top.n ? 9 : 6} fill={p.n === top.n ? '#facc15' : '#38bdf8'} opacity="0.82" /><text x={p.x} y={p.y + 1.7} textAnchor="middle" fontSize="5" fill="white">{p.n}</text></g>)}
      </svg>
    </Panel>
  );
}

function PyramidVisual({ lens }) {
  const layers = ['Results', 'Accountability', 'Commitment', 'Conflict', 'Trust'];
  return (
    <Panel title="Layered pyramid" subtitle={lens.visualLabel}>
      <div className="mx-auto flex max-w-md flex-col-reverse gap-2">
        {layers.map((layer, index) => <div key={layer} className="mx-auto rounded-xl border border-white/10 bg-white/[0.06] py-3 text-center text-sm text-white/70" style={{ width: `${44 + index * 13}%` }}>{layer}</div>)}
      </div>
    </Panel>
  );
}

function TimelineVisual({ data, lens }) {
  return (
    <Panel title="Narrative timeline" subtitle={lens.visualLabel}>
      <div className="space-y-4 border-l border-white/15 pl-5">
        {data.slice(0, 6).map((item) => <div key={item.name} className="relative"><div className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-sky-400" /><div className="text-sm font-semibold text-white/80">{item.name}</div><div className="text-xs leading-5 text-white/45">{item.raw || `Signal strength ${Math.round(item.value)}%`}</div></div>)}
      </div>
    </Panel>
  );
}

function MatrixVisual({ data, lens }) {
  return (
    <Panel title="Matrix view" subtitle={lens.visualLabel}>
      <div className="grid grid-cols-2 gap-3">
        {data.slice(0, 4).map((item, index) => <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><div className="text-xs uppercase tracking-[0.16em] text-white/35">Cell {index + 1}</div><div className="mt-2 text-sm font-semibold text-white/80">{item.name}</div><div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${item.value}%`, background: item.color }} /></div></div>)}
      </div>
    </Panel>
  );
}

function SpiralVisual({ data, lens }) {
  const rings = data.slice(0, 8);
  return (
    <Panel title="Spiral / stage bands" subtitle={lens.visualLabel}>
      <div className="relative mx-auto h-72 w-72 rounded-full border border-white/10 bg-white/[0.03]">
        {rings.map((item, index) => <div key={item.name} className="absolute rounded-full border-2" style={{ inset: `${index * 15}px`, borderColor: SPIRAL_COLORS[index % SPIRAL_COLORS.length], opacity: 0.8 }} />)}
        <div className="absolute inset-0 flex items-center justify-center text-center text-sm font-semibold text-white/75">Value stage<br />profile</div>
      </div>
    </Panel>
  );
}

function ChecklistVisual({ data, lens }) {
  return (
    <Panel title="Support matrix" subtitle={lens.visualLabel}>
      <div className="grid gap-3 md:grid-cols-2">
        {data.slice(0, 8).map((item) => <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><div className="text-sm font-semibold text-white/80">{item.name}</div><div className="mt-2 text-xs leading-5 text-white/45">{item.raw || 'Recommended support / consideration'}</div></div>)}
      </div>
    </Panel>
  );
}

function TrendVisual({ data, lens }) {
  const trend = data.slice(0, 6).map((item, index) => ({ name: `T${index + 1}`, value: item.value }));
  return (
    <Panel title="Trend line" subtitle={lens.visualLabel}>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={trend}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
            <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
            <YAxis domain={[0, 100]} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'rgba(15,23,42,.96)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, color: '#fff' }} />
            <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={3} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

function ContinuumVisual({ data, lens }) {
  const left = data[0]?.name || 'Adaptive';
  const right = data[1]?.name || 'Innovative';
  const value = clamp(data[0]?.value ?? 55);
  return (
    <Panel title="Continuum" subtitle={lens.visualLabel}>
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <div className="mb-3 flex justify-between text-xs text-white/45"><span>{left}</span><span>{right}</span></div>
        <div className="relative h-4 rounded-full bg-gradient-to-r from-sky-400/70 via-white/25 to-fuchsia-400/70"><div className="absolute top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-slate-950 shadow-lg" style={{ left: `${value}%` }} /></div>
        <div className="mt-4 text-center text-4xl font-bold text-white">{Math.round(value)}</div>
      </div>
      {data.length > 2 && <div className="mt-5"><MiniBars data={data.slice(2)} limit={5} /></div>}
    </Panel>
  );
}

function CircumplexVisual({ data, lens }) {
  const dots = data.slice(0, 8).map((item, index) => {
    const angle = (-90 + index * 45) * Math.PI / 180;
    const radius = 18 + (item.value / 100) * 28;
    return { ...item, x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle) };
  });
  return (
    <Panel title="Circumplex map" subtitle={lens.visualLabel}>
      <svg viewBox="0 0 100 100" className="h-72 w-full rounded-3xl border border-white/10 bg-white/[0.03]">
        {[18, 32, 45].map((r) => <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,.10)" />)}
        <line x1="50" y1="5" x2="50" y2="95" stroke="rgba(255,255,255,.12)" />
        <line x1="5" y1="50" x2="95" y2="50" stroke="rgba(255,255,255,.12)" />
        {dots.map((dot) => <g key={dot.name}><circle cx={dot.x} cy={dot.y} r="4.5" fill={dot.color} /><text x={dot.x} y={dot.y - 6} textAnchor="middle" fontSize="3.5" fill="rgba(255,255,255,.68)">{dot.name.slice(0, 10)}</text></g>)}
      </svg>
    </Panel>
  );
}

function TriangleVisual({ data, lens }) {
  const points = [{ x: 50, y: 10, label: 'Assertive' }, { x: 13, y: 78, label: 'Relational' }, { x: 87, y: 78, label: 'Analytical' }];
  const x = 50 + ((data[0]?.value ?? 55) - 50) * 0.45;
  const y = 50 + ((data[1]?.value ?? 45) - 50) * 0.45;
  return (
    <Panel title="Triangle map" subtitle={lens.visualLabel}>
      <svg viewBox="0 0 100 90" className="h-72 w-full rounded-3xl border border-white/10 bg-white/[0.03]">
        <polygon points="50,10 13,78 87,78" fill="rgba(56,189,248,.08)" stroke="rgba(255,255,255,.18)" />
        {points.map((p) => <text key={p.label} x={p.x} y={p.y + 6} textAnchor="middle" fontSize="4" fill="rgba(255,255,255,.55)">{p.label}</text>)}
        <circle cx={x} cy={y} r="6" fill="#38bdf8" stroke="white" strokeWidth="1.5" />
      </svg>
    </Panel>
  );
}

function WheelVisual({ data, lens }) {
  const items = data.slice(0, 8);
  return (
    <Panel title="Wheel map" subtitle={lens.visualLabel}>
      <div className="relative mx-auto h-72 w-72 rounded-full border border-white/10 bg-white/[0.03]">
        {items.map((item, index) => {
          const angle = (-90 + index * (360 / items.length));
          const x = 50 + 38 * Math.cos(angle * Math.PI / 180);
          const y = 50 + 38 * Math.sin(angle * Math.PI / 180);
          return <div key={item.name} className="absolute flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-white/10 bg-black/50 p-2 text-center text-[10px] leading-3 text-white/70" style={{ left: `${x}%`, top: `${y}%` }}>{item.name.slice(0, 18)}</div>;
        })}
        <div className="absolute inset-24 rounded-full border border-white/10 bg-slate-950/90" />
      </div>
    </Panel>
  );
}

function NormalCurveVisual({ data, lens }) {
  const value = clamp(data[0]?.value ?? 58);
  return (
    <Panel title="Percentile curve" subtitle={lens.visualLabel}>
      <div className="relative h-64 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <svg viewBox="0 0 100 50" className="h-full w-full">
          <path d="M4 43 C18 43, 20 32, 30 29 C39 26, 39 7, 50 7 C61 7, 61 26, 70 29 C80 32, 82 43, 96 43" fill="rgba(56,189,248,.16)" stroke="rgba(56,189,248,.8)" strokeWidth="1.5" />
          <line x1={value} y1="6" x2={value} y2="45" stroke="#facc15" strokeWidth="1.5" />
          <circle cx={value} cy="22" r="3" fill="#facc15" />
        </svg>
        <div className="absolute bottom-5 left-0 right-0 text-center text-sm text-white/55">Percentile placement: <span className="font-bold text-white">{Math.round(value)}</span></div>
      </div>
    </Panel>
  );
}

export default function NativeLensVisual({ lens, result }) {
  const data = getVisualData(result);
  const targetLens = lens || result?.lens || { lens: 'Lens', visualLabel: 'Structured visual', visualType: 'ranked' };
  const kind = getVisualKind(targetLens.visualType);

  if (kind === 'radar') return <RadarVisual data={data} lens={targetLens} />;
  if (kind === 'quadrant') return <QuadrantVisual data={data} lens={targetLens} />;
  if (kind === 'colorWheel') return <ColorWheelVisual data={data} lens={targetLens} />;
  if (kind === 'gauge') return <GaugeVisual data={data} lens={targetLens} />;
  if (kind === 'enneagram') return <EnneagramVisual data={data} lens={targetLens} />;
  if (kind === 'pyramid') return <PyramidVisual data={data} lens={targetLens} />;
  if (kind === 'timeline') return <TimelineVisual data={data} lens={targetLens} />;
  if (kind === 'matrix') return <MatrixVisual data={data} lens={targetLens} />;
  if (kind === 'spiral') return <SpiralVisual data={data} lens={targetLens} />;
  if (kind === 'checklist') return <ChecklistVisual data={data} lens={targetLens} />;
  if (kind === 'trend') return <TrendVisual data={data} lens={targetLens} />;
  if (kind === 'continuum') return <ContinuumVisual data={data} lens={targetLens} />;
  if (kind === 'circumplex') return <CircumplexVisual data={data} lens={targetLens} />;
  if (kind === 'triangle') return <TriangleVisual data={data} lens={targetLens} />;
  if (kind === 'wheel') return <WheelVisual data={data} lens={targetLens} />;
  if (kind === 'normalCurve') return <NormalCurveVisual data={data} lens={targetLens} />;
  if (kind === 'risk') return <RiskBandsVisual data={data} lens={targetLens} />;
  return <BarProfileVisual data={data} lens={targetLens} title="Native bar profile" />;
}
