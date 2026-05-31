import React from 'react';

const COLORS = ['#38bdf8', '#818cf8', '#34d399', '#f59e0b', '#f472b6', '#a78bfa', '#22d3ee', '#fb7185'];

const FALLBACK_FIELDS = [
  { label: 'Primary signal', value: 'High', score: 83 },
  { label: 'Secondary signal', value: 'Moderate', score: 55 },
  { label: 'Watch-out', value: 'Low-Moderate', score: 38 },
  { label: 'Support need', value: 'Moderate', score: 55 },
];

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

function label(value = '', max = 22) {
  const cleaned = String(value)
    .replace(/_/g, ' ')
    .replace(/Dominant /i, '')
    .replace(/Secondary /i, 'Second ')
    .replace(/Development /i, 'Growth ')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned.length > max ? `${cleaned.slice(0, max - 1)}…` : cleaned;
}

function getData(result) {
  const source = result?.numericFields?.length ? result.numericFields : result?.fields?.length ? result.fields : FALLBACK_FIELDS;
  return source.slice(0, 12).map((field, index) => ({
    name: label(field.label || field.name || `Signal ${index + 1}`, 28),
    shortName: label(field.label || field.name || `Signal ${index + 1}`, 14),
    raw: field.value || field.raw || '',
    value: clamp(field.score ?? scoreFromValue(field.value, index)),
    color: COLORS[index % COLORS.length],
  }));
}

function visualFamily(type = '') {
  if (['radar', 'radarBars', 'hexagonRadar', 'layeredRadar', 'radarSubscaleBars', 'rankedBarsRadar', 'narrativeScorecardRadar', 'spiderTrend'].includes(type)) return 'radar';
  if (['quadrantPlot', 'scatterQuadrant', 'typeGrid', 'temperamentQuadrant', 'leaderStyleMatrix', 'dualAxisBalance'].includes(type)) return 'quadrant';
  if (type === 'colorWheel') return 'colorWheel';
  if (['scoreGauge', 'gaugeSubscaleBars', 'scoreGaugeTrend', 'gaugeHeatmap', 'gaugeDistribution'].includes(type)) return 'gauge';
  if (type === 'enneagramWheel') return 'enneagram';
  if (type === 'pyramid') return 'pyramid';
  if (type === 'timelineTagCloud') return 'timeline';
  if (['matrix', 'roleMatrix', 'competencyMatrix', 'itemTablePassRate'].includes(type)) return 'matrix';
  if (type === 'spiralBands') return 'spiral';
  if (['accessibilityMatrixRadar', 'profileBarsChecklist', 'profileChecklist'].includes(type)) return 'checklist';
  if (['continuumBars', 'threeBars', 'threeBarsCircumplex'].includes(type)) return 'continuum';
  if (['circumplex', 'valuesCircumplex'].includes(type)) return 'circumplex';
  if (type === 'triangleCircumplex') return 'triangle';
  if (['roleWheel', 'brainQuadrantWheel', 'segmentedWheel', 'fourAxisRadial'].includes(type)) return 'wheel';
  if (type === 'normalCurve') return 'curve';
  return 'bars';
}

function Panel({ title, subtitle, children }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
      <div className="mb-4">
        <div className="text-sm font-semibold text-white">{title}</div>
        {subtitle && <div className="mt-1 text-xs leading-5 text-white/45">{subtitle}</div>}
      </div>
      {children}
    </div>
  );
}

function Bars({ data, limit = 6 }) {
  return (
    <div className="space-y-2">
      {data.slice(0, limit).map((item) => (
        <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <div className="mb-2 flex items-start justify-between gap-3 text-xs">
            <span className="leading-4 text-white/65">{item.name}</span>
            <span className="shrink-0 text-white/40">{item.raw || `${Math.round(item.value)}%`}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full" style={{ width: `${Math.max(5, item.value)}%`, background: item.color }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Radar({ data, lens }) {
  const items = data.slice(0, 6);
  const center = 50;
  const points = items.map((item, index) => {
    const angle = (-90 + index * (360 / items.length)) * Math.PI / 180;
    const radius = 9 + (item.value / 100) * 31;
    return {
      ...item,
      x: center + radius * Math.cos(angle),
      y: center + radius * Math.sin(angle),
      lx: center + 45 * Math.cos(angle),
      ly: center + 45 * Math.sin(angle),
    };
  });
  return (
    <Panel title="Trait shape" subtitle={lens.visualLabel}>
      <div className="grid gap-5 xl:grid-cols-5">
        <svg viewBox="0 0 100 100" className="h-80 w-full rounded-3xl border border-white/10 bg-white/[0.03] xl:col-span-3">
          {[12, 24, 36].map((r) => <circle key={r} cx="50" cy="50" r={r} fill="none" stroke="rgba(255,255,255,.10)" />)}
          {points.map((p) => <line key={`line-${p.name}`} x1="50" y1="50" x2={p.lx} y2={p.ly} stroke="rgba(255,255,255,.10)" />)}
          <polygon points={points.map((p) => `${p.x},${p.y}`).join(' ')} fill="rgba(56,189,248,.24)" stroke="#38bdf8" strokeWidth="1.2" />
          {points.map((p) => <text key={p.name} x={p.lx} y={p.ly} textAnchor="middle" fontSize="3.4" fill="rgba(255,255,255,.62)">{p.shortName}</text>)}
        </svg>
        <div className="self-center xl:col-span-2"><Bars data={data} limit={5} /></div>
      </div>
    </Panel>
  );
}

function Quadrant({ data, lens }) {
  const x = clamp((data[0]?.value ?? 55) - 50, -42, 42);
  const y = clamp((data[1]?.value ?? 60) - 50, -42, 42);
  return (
    <Panel title="Quadrant map" subtitle={lens.visualLabel}>
      <div className="relative h-72 rounded-3xl border border-white/10 bg-white/[0.04]">
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/15" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/15" />
        <div className="absolute left-4 top-4 text-xs text-white/45">Fast / direct</div>
        <div className="absolute right-4 top-4 text-xs text-white/45">Expressive</div>
        <div className="absolute bottom-4 left-4 text-xs text-white/45">Steady</div>
        <div className="absolute bottom-4 right-4 text-xs text-white/45">Precise</div>
        <div className="absolute h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-sky-400 shadow-lg shadow-sky-500/30" style={{ left: `${50 + x}%`, top: `${50 - y}%` }} />
      </div>
    </Panel>
  );
}

function Gauge({ data, lens }) {
  const value = Math.round(data[0]?.value ?? 55);
  return (
    <Panel title="Score gauge" subtitle={lens.visualLabel}>
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center">
        <div className="text-6xl font-bold text-white">{value}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/35">index</div>
        <div className="mx-auto mt-5 h-3 max-w-md overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-sky-400" style={{ width: `${value}%` }} />
        </div>
      </div>
      {data.length > 1 && <div className="mt-4"><Bars data={data.slice(1)} limit={4} /></div>}
    </Panel>
  );
}

function ColorWheel({ data, lens }) {
  const values = ['Cool Blue', 'Fiery Red', 'Sunshine Yellow', 'Earth Green'].map((name, index) => ({
    name,
    raw: `${Math.round(data[index]?.value || [76, 58, 41, 64][index])}%`,
    value: data[index]?.value || [76, 58, 41, 64][index],
    color: ['#38bdf8', '#ef4444', '#facc15', '#22c55e'][index],
  }));
  const total = values.reduce((sum, item) => sum + item.value, 0) || 1;
  let cursor = 0;
  const gradient = values.map((item) => {
    const start = cursor;
    cursor += (item.value / total) * 100;
    return `${item.color} ${start}% ${cursor}%`;
  }).join(', ');
  return (
    <Panel title="Color energy wheel" subtitle={lens.visualLabel}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="relative mx-auto h-60 w-60 rounded-full border border-white/10" style={{ background: `conic-gradient(${gradient})` }}>
          <div className="absolute inset-10 rounded-full border border-white/10 bg-slate-950/90" />
          <div className="absolute inset-0 flex items-center justify-center text-center text-sm font-bold text-white">Color<br />profile</div>
        </div>
        <Bars data={values.map((item) => ({ ...item, shortName: item.name }))} limit={4} />
      </div>
    </Panel>
  );
}

function ShapeMap({ data, lens, title = 'Native map', sides = 6 }) {
  const items = data.slice(0, sides);
  const points = items.map((item, index) => {
    const angle = (-90 + index * (360 / sides)) * Math.PI / 180;
    const radius = 28 + (item.value / 100) * 15;
    return { ...item, x: 50 + radius * Math.cos(angle), y: 50 + radius * Math.sin(angle), lx: 50 + 45 * Math.cos(angle), ly: 50 + 45 * Math.sin(angle) };
  });
  return (
    <Panel title={title} subtitle={lens.visualLabel}>
      <svg viewBox="0 0 100 100" className="h-80 w-full rounded-3xl border border-white/10 bg-white/[0.03]">
        <polygon points={points.map((p) => `${p.x},${p.y}`).join(' ')} fill="rgba(56,189,248,.10)" stroke="rgba(56,189,248,.8)" strokeWidth="1.2" />
        {points.map((p) => <g key={p.name}><circle cx={p.x} cy={p.y} r="4.5" fill={p.color} /><text x={p.lx} y={p.ly} textAnchor="middle" fontSize="3.5" fill="rgba(255,255,255,.66)">{p.shortName}</text></g>)}
      </svg>
    </Panel>
  );
}

function Pyramid({ lens }) {
  const layers = ['Results', 'Accountability', 'Commitment', 'Conflict', 'Trust'];
  return (
    <Panel title="Layered pyramid" subtitle={lens.visualLabel}>
      <div className="mx-auto flex max-w-md flex-col-reverse gap-2">
        {layers.map((layer, index) => <div key={layer} className="mx-auto rounded-xl border border-white/10 bg-white/[0.06] py-3 text-center text-sm text-white/70" style={{ width: `${44 + index * 13}%` }}>{layer}</div>)}
      </div>
    </Panel>
  );
}

function Matrix({ data, lens }) {
  return (
    <Panel title="Matrix view" subtitle={lens.visualLabel}>
      <div className="grid grid-cols-2 gap-3">
        {data.slice(0, 4).map((item, index) => <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><div className="text-xs uppercase tracking-[0.16em] text-white/35">Cell {index + 1}</div><div className="mt-2 text-sm font-semibold text-white/80">{item.name}</div><div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${item.value}%`, background: item.color }} /></div></div>)}
      </div>
    </Panel>
  );
}

function Checklist({ data, lens }) {
  return (
    <Panel title="Support matrix" subtitle={lens.visualLabel}>
      <div className="grid gap-3 md:grid-cols-2">
        {data.slice(0, 8).map((item) => <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"><div className="text-sm font-semibold text-white/80">{item.name}</div><div className="mt-2 text-xs leading-5 text-white/45">{item.raw || 'Recommended support / consideration'}</div></div>)}
      </div>
    </Panel>
  );
}

function Continuum({ data, lens }) {
  const left = data[0]?.name || 'Left side';
  const right = data[1]?.name || 'Right side';
  const value = clamp(data[0]?.value ?? 55);
  return (
    <Panel title="Continuum" subtitle={lens.visualLabel}>
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5">
        <div className="mb-3 flex justify-between gap-3 text-xs text-white/45"><span>{left}</span><span>{right}</span></div>
        <div className="relative h-4 rounded-full bg-gradient-to-r from-sky-400/70 via-white/25 to-fuchsia-400/70"><div className="absolute top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-slate-950 shadow-lg" style={{ left: `${value}%` }} /></div>
        <div className="mt-4 text-center text-4xl font-bold text-white">{Math.round(value)}</div>
      </div>
    </Panel>
  );
}

function Spiral({ data, lens }) {
  return (
    <Panel title="Spiral / stage bands" subtitle={lens.visualLabel}>
      <div className="relative mx-auto h-72 w-72 rounded-full border border-white/10 bg-white/[0.03]">
        {data.slice(0, 8).map((item, index) => <div key={item.name} className="absolute rounded-full border-2" style={{ inset: `${index * 15}px`, borderColor: COLORS[index % COLORS.length], opacity: 0.75 }} />)}
        <div className="absolute inset-0 flex items-center justify-center text-center text-sm font-semibold text-white/75">Stage<br />profile</div>
      </div>
    </Panel>
  );
}

function Curve({ data, lens }) {
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

function Trend({ data, lens }) {
  return (
    <Panel title="Trend line" subtitle={lens.visualLabel}>
      <div className="grid grid-cols-6 items-end gap-2 rounded-3xl border border-white/10 bg-white/[0.03] p-5" style={{ height: 260 }}>
        {data.slice(0, 6).map((item) => <div key={item.name} className="flex h-full flex-col justify-end gap-2"><div className="rounded-t-xl" style={{ height: `${Math.max(8, item.value)}%`, background: item.color }} /><div className="text-center text-[10px] text-white/45">{item.shortName}</div></div>)}
      </div>
    </Panel>
  );
}

export default function NativeLensVisual({ lens, result }) {
  const data = getData(result);
  const targetLens = lens || result?.lens || { lens: 'Lens', visualLabel: 'Structured visual', visualType: 'ranked' };
  const family = visualFamily(targetLens.visualType);

  if (family === 'radar') return <Radar data={data} lens={targetLens} />;
  if (family === 'quadrant') return <Quadrant data={data} lens={targetLens} />;
  if (family === 'colorWheel') return <ColorWheel data={data} lens={targetLens} />;
  if (family === 'gauge') return <Gauge data={data} lens={targetLens} />;
  if (family === 'enneagram') return <ShapeMap data={data} lens={targetLens} title="Nine-point map" sides={9} />;
  if (family === 'pyramid') return <Pyramid lens={targetLens} />;
  if (family === 'matrix') return <Matrix data={data} lens={targetLens} />;
  if (family === 'spiral') return <Spiral data={data} lens={targetLens} />;
  if (family === 'checklist') return <Checklist data={data} lens={targetLens} />;
  if (family === 'continuum') return <Continuum data={data} lens={targetLens} />;
  if (family === 'circumplex') return <ShapeMap data={data} lens={targetLens} title="Circumplex map" sides={8} />;
  if (family === 'triangle') return <ShapeMap data={data} lens={targetLens} title="Triangle map" sides={3} />;
  if (family === 'wheel') return <ShapeMap data={data} lens={targetLens} title="Wheel map" sides={8} />;
  if (family === 'curve') return <Curve data={data} lens={targetLens} />;
  if (family === 'timeline') return <Checklist data={data} lens={targetLens} />;
  if (family === 'trend') return <Trend data={data} lens={targetLens} />;
  return <Panel title="Native bar profile" subtitle={targetLens.visualLabel}><Bars data={data} limit={8} /></Panel>;
}
