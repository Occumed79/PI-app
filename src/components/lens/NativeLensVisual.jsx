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
];

const COLOR_SET = ['#38bdf8', '#818cf8', '#34d399', '#f59e0b', '#f472b6', '#a78bfa', '#22d3ee', '#fb7185'];

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function scoreFromValue(value, index = 0) {
  if (typeof value === 'number') return value;
  const text = String(value || '').toLowerCase();
  if (text.includes('very high')) return 96;
  if (text.includes('moderate-high')) return 70;
  if (text.includes('high')) return 83;
  if (text.includes('low-moderate')) return 38;
  if (text.includes('moderate')) return 55;
  if (text.includes('very low')) return 8;
  if (text.includes('low')) return 22;
  return [72, 58, 44, 63, 36, 82][index % 6];
}

function getVisualData(result) {
  const numeric = result?.numericFields || [];
  const fields = result?.fields || [];
  const source = numeric.length ? numeric : fields.length ? fields : FALLBACK_FIELDS;
  return source.slice(0, 12).map((field, index) => ({
    name: String(field.label || field.name || `Signal ${index + 1}`).replace(/_/g, ' '),
    value: field.score ?? scoreFromValue(field.value, index),
    raw: field.value || field.raw || '',
    color: COLOR_SET[index % COLOR_SET.length],
  }));
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

function RadarVisual({ data, lens }) {
  return (
    <Panel title="Trait shape" subtitle={lens.visualLabel}>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart data={data.slice(0, 8)}>
            <PolarGrid stroke="rgba(255,255,255,.13)" />
            <PolarAngleAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,.58)', fontSize: 10 }} />
            <Radar dataKey="value" stroke="#38bdf8" fill="#38bdf8" fillOpacity={0.28} />
            <Tooltip contentStyle={{ background: 'rgba(15,23,42,.96)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, color: '#fff' }} />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

function BarProfileVisual({ data, lens }) {
  return (
    <Panel title="Profile bars" subtitle={lens.visualLabel}>
      <div className="space-y-3">
        {data.slice(0, 12).map((item) => (
          <div key={item.name}>
            <div className="mb-1 flex justify-between gap-3 text-xs"><span className="truncate text-white/55">{item.name}</span><span className="text-white/35">{item.raw || `${Math.round(item.value)}%`}</span></div>
            <div className="h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${Math.max(6, Math.min(100, item.value))}%`, background: item.color }} /></div>
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
    </Panel>
  );
}

function QuadrantVisual({ data, lens }) {
  const x = (data[0]?.value ?? 55) - 50;
  const y = (data[1]?.value ?? 60) - 50;
  return (
    <Panel title="Quadrant map" subtitle={lens.visualLabel}>
      <div className="relative h-72 rounded-3xl border border-white/10 bg-white/[0.04]">
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/15" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/15" />
        <div className="absolute left-4 top-4 text-xs text-white/40">Direct / Fast</div>
        <div className="absolute right-4 top-4 text-xs text-white/40">Expressive</div>
        <div className="absolute bottom-4 left-4 text-xs text-white/40">Steady</div>
        <div className="absolute bottom-4 right-4 text-xs text-white/40">Precise</div>
        <div className="absolute h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-sky-400 shadow-lg shadow-sky-500/30" style={{ left: `${50 + x}%`, top: `${50 - y}%` }} />
      </div>
    </Panel>
  );
}

function ColorWheelVisual({ data, lens }) {
  const values = ['Cool Blue', 'Fiery Red', 'Sunshine Yellow', 'Earth Green'].map((name, index) => ({ name, value: data[index]?.value || [76, 58, 41, 64][index], color: ['#38bdf8', '#ef4444', '#facc15', '#22c55e'][index] }));
  return (
    <Panel title="Color energy wheel" subtitle={lens.visualLabel}>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="relative mx-auto h-60 w-60 rounded-full border border-white/10" style={{ background: `conic-gradient(${values.map((v, i) => `${v.color} ${i * 25}% ${(i + 1) * 25}%`).join(',')})` }}>
          <div className="absolute inset-10 rounded-full border border-white/10 bg-slate-950/90" />
          <div className="absolute inset-0 flex items-center justify-center text-center"><div><div className="text-lg font-bold text-white">{values[0].name}</div><div className="text-xs text-white/45">dominant signal</div></div></div>
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
  return (
    <Panel title="Nine-point map" subtitle={lens.visualLabel}>
      <svg viewBox="0 0 100 100" className="h-72 w-full">
        <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,.16)" strokeWidth="1" />
        <polyline points="50,12 83,69 17,69 50,12" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
        <polyline points="74,21 26,21 88,50 26,79 74,79" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="1" />
        {points.map((p) => <g key={p.n}><circle cx={p.x} cy={p.y} r={4 + p.value / 28} fill="#38bdf8" opacity="0.75" /><text x={p.x} y={p.y + 1.5} textAnchor="middle" fontSize="5" fill="white">{p.n}</text></g>)}
      </svg>
    </Panel>
  );
}

function PyramidVisual({ data, lens }) {
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
        {data.slice(0, 5).map((item, index) => <div key={item.name} className="relative"><div className="absolute -left-[27px] top-1 h-3 w-3 rounded-full bg-sky-400" /><div className="text-sm font-semibold text-white/80">{item.name}</div><div className="text-xs leading-5 text-white/45">{item.raw || `Signal strength ${Math.round(item.value)}%`}</div></div>)}
      </div>
    </Panel>
  );
}

function MatrixVisual({ data, lens }) {
  return (
    <Panel title="Matrix view" subtitle={lens.visualLabel}>
      <div className="grid grid-cols-2 gap-3">
        {data.slice(0, 4).map((item, index) => <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><div className="text-xs uppercase tracking-[0.16em] text-white/35">Quadrant {index + 1}</div><div className="mt-2 text-sm font-semibold text-white/80">{item.name}</div><div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${item.value}%`, background: item.color }} /></div></div>)}
      </div>
    </Panel>
  );
}

function SpiralVisual({ data, lens }) {
  const rings = data.slice(0, 7);
  return (
    <Panel title="Spiral / stage bands" subtitle={lens.visualLabel}>
      <div className="relative mx-auto h-72 w-72 rounded-full border border-white/10 bg-white/[0.03]">
        {rings.map((item, index) => <div key={item.name} className="absolute rounded-full border" style={{ inset: `${index * 16}px`, borderColor: item.color, opacity: 0.85 }} />)}
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

function BarChartVisual({ data, lens }) {
  return (
    <Panel title="Native bar profile" subtitle={lens.visualLabel}>
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data.slice(0, 10)} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
            <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,.5)', fontSize: 10 }} interval={0} angle={-20} textAnchor="end" height={70} />
            <YAxis domain={[0, 100]} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
            <Tooltip contentStyle={{ background: 'rgba(15,23,42,.96)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 14, color: '#fff' }} />
            <Bar dataKey="value" radius={[10, 10, 4, 4]}>{data.slice(0, 10).map((entry) => <Cell key={entry.name} fill={entry.color} />)}</Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Panel>
  );
}

export default function NativeLensVisual({ lens, result, profile }) {
  const data = getVisualData(result);
  const visualType = lens?.visualType || result?.lens?.visualType || 'structuredCards';
  const targetLens = lens || result?.lens || { lens: 'Lens', visualLabel: 'Structured visual' };

  if (['radar', 'radarBars', 'hexagonRadar', 'layeredRadar', 'radarSubscaleBars', 'rankedBarsRadar', 'narrativeScorecardRadar', 'spiderTrend'].includes(visualType)) return <RadarVisual data={data} lens={targetLens} />;
  if (['quadrantPlot', 'scatterQuadrant', 'typeGrid', 'temperamentQuadrant', 'leaderStyleMatrix', 'dualAxisBalance'].includes(visualType)) return <QuadrantVisual data={data} lens={targetLens} />;
  if (['colorWheel'].includes(visualType)) return <ColorWheelVisual data={data} lens={targetLens} />;
  if (['scoreGauge', 'gaugeSubscaleBars', 'scoreGaugeTrend', 'gaugeHeatmap', 'gaugeDistribution'].includes(visualType)) return <GaugeVisual data={data} lens={targetLens} />;
  if (['enneagramWheel'].includes(visualType)) return <EnneagramVisual data={data} lens={targetLens} />;
  if (['pyramid'].includes(visualType)) return <PyramidVisual data={data} lens={targetLens} />;
  if (['timelineTagCloud'].includes(visualType)) return <TimelineVisual data={data} lens={targetLens} />;
  if (['matrix', 'roleMatrix', 'competencyMatrix', 'itemTablePassRate'].includes(visualType)) return <MatrixVisual data={data} lens={targetLens} />;
  if (['spiralBands'].includes(visualType)) return <SpiralVisual data={data} lens={targetLens} />;
  if (['accessibilityMatrixRadar', 'profileBarsChecklist', 'profileChecklist'].includes(visualType)) return <ChecklistVisual data={data} lens={targetLens} />;
  if (['lineRadar'].includes(visualType)) return <TrendVisual data={data} lens={targetLens} />;
  return <BarChartVisual data={data} lens={targetLens} />;
}
