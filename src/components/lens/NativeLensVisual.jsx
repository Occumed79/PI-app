import React from 'react';
import {
  getNativeBarLimit,
  getNativeVisualFamily,
  getNativeWheelSides,
} from '../../data/nativeVisualTypes.js';

const COLORS = ['#38bdf8', '#818cf8', '#34d399', '#f59e0b', '#f472b6', '#a78bfa', '#22d3ee', '#fb7185', '#4ade80', '#facc15', '#60a5fa', '#c084fc'];

const FALLBACK_FIELDS = [
  { label: 'Primary signal', value: 'High', score: 83 },
  { label: 'Secondary signal', value: 'Moderate', score: 55 },
  { label: 'Watch-out', value: 'Low-Moderate', score: 38 },
  { label: 'Support need', value: 'Moderate', score: 55 },
];

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, Number(value) || 0));
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

function cleanLabel(value = '', max = 30) {
  const cleaned = String(value)
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned.length > max ? `${cleaned.slice(0, max - 1)}…` : cleaned;
}

function getData(result) {
  const source = result?.numericFields?.length
    ? result.numericFields
    : result?.fields?.length
      ? result.fields
      : FALLBACK_FIELDS;

  return source.map((field, index) => ({
    name: cleanLabel(field.label || field.name || `Signal ${index + 1}`),
    shortName: cleanLabel(field.label || field.name || `Signal ${index + 1}`, 14),
    raw: field.value || field.raw || '',
    value: clamp(field.score ?? scoreFromValue(field.value, index)),
    color: field.color || COLORS[index % COLORS.length],
    basis: field.basis || '',
  }));
}

function Panel({ title, subtitle, children, className = '' }) {
  return (
    <section className={`rounded-3xl border border-white/10 bg-black/20 p-4 sm:p-5 ${className}`}>
      <div className="mb-4">
        <div className="text-sm font-semibold text-white">{title}</div>
        {subtitle && <div className="mt-1 text-xs leading-5 text-white/50">{subtitle}</div>}
      </div>
      {children}
    </section>
  );
}

function Bars({ data, limit = 10 }) {
  return (
    <div className="space-y-2.5">
      {data.slice(0, limit).map(item => (
        <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
          <div className="mb-2 flex items-start justify-between gap-3 text-xs">
            <span className="min-w-0 leading-5 text-white/70">{item.name}</span>
            <span className="shrink-0 font-semibold text-white/60">{Math.round(item.value)}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full" style={{ width: `${Math.max(3, item.value)}%`, background: item.color }} />
          </div>
          {item.basis && <p className="mt-2 text-[11px] leading-4 text-white/35">{item.basis}</p>}
        </div>
      ))}
    </div>
  );
}

function Radar({ data, lens }) {
  const items = data.slice(0, 8);
  const center = 50;
  const count = Math.max(items.length, 3);
  const points = items.map((item, index) => {
    const angle = (-90 + index * (360 / count)) * Math.PI / 180;
    const radius = 8 + (item.value / 100) * 31;
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
        <div className="overflow-x-auto xl:col-span-3">
          <svg viewBox="0 0 100 100" className="mx-auto h-auto min-h-[280px] w-full min-w-[300px] max-w-[560px] rounded-3xl border border-white/10 bg-white/[0.03] p-2">
            {[12, 24, 36].map(radius => <circle key={radius} cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,.10)" />)}
            {points.map(point => <line key={`line-${point.name}`} x1="50" y1="50" x2={point.lx} y2={point.ly} stroke="rgba(255,255,255,.10)" />)}
            <polygon points={points.map(point => `${point.x},${point.y}`).join(' ')} fill="rgba(56,189,248,.24)" stroke="#38bdf8" strokeWidth="1.2" />
            {points.map(point => <text key={point.name} x={point.lx} y={point.ly} textAnchor="middle" fontSize="3.1" fill="rgba(255,255,255,.68)">{point.shortName}</text>)}
          </svg>
        </div>
        <div className="self-center xl:col-span-2"><Bars data={data} limit={6} /></div>
      </div>
    </Panel>
  );
}

function Quadrant({ data, lens }) {
  const x = clamp((data[0]?.value ?? 55) - 50, -42, 42);
  const y = clamp((data[1]?.value ?? 60) - 50, -42, 42);
  const labels = data.slice(0, 4).map(item => item.shortName);
  return (
    <Panel title="Quadrant map" subtitle={lens.visualLabel}>
      <div className="relative h-72 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] sm:h-80">
        <div className="absolute left-1/2 top-0 h-full w-px bg-white/15" />
        <div className="absolute left-0 top-1/2 h-px w-full bg-white/15" />
        <div className="absolute left-3 top-3 max-w-[42%] text-xs text-white/50">{labels[0] || 'Direct'}</div>
        <div className="absolute right-3 top-3 max-w-[42%] text-right text-xs text-white/50">{labels[1] || 'Expressive'}</div>
        <div className="absolute bottom-3 left-3 max-w-[42%] text-xs text-white/50">{labels[2] || 'Steady'}</div>
        <div className="absolute bottom-3 right-3 max-w-[42%] text-right text-xs text-white/50">{labels[3] || 'Precise'}</div>
        <div className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-sky-400 shadow-lg shadow-sky-500/30" style={{ left: `${50 + x}%`, top: `${50 - y}%` }} />
      </div>
      <div className="mt-4"><Bars data={data} limit={4} /></div>
    </Panel>
  );
}

function Gauge({ data, lens }) {
  const value = Math.round(data[0]?.value ?? 55);
  return (
    <Panel title="Directional index" subtitle={lens.visualLabel}>
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-center">
        <div className="text-5xl font-bold text-white sm:text-6xl">{value}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/40">projected index</div>
        <div className="mx-auto mt-5 h-3 max-w-md overflow-hidden rounded-full bg-white/10">
          <div className="h-full rounded-full bg-sky-400" style={{ width: `${value}%` }} />
        </div>
      </div>
      {data.length > 1 && <div className="mt-4"><Bars data={data.slice(1)} limit={5} /></div>}
    </Panel>
  );
}

function ColorWheel({ data, lens, title = 'Color energy wheel' }) {
  const values = data.slice(0, 8);
  const total = values.reduce((sum, item) => sum + item.value, 0) || 1;
  let cursor = 0;
  const gradient = values.map(item => {
    const start = cursor;
    cursor += (item.value / total) * 100;
    return `${item.color} ${start}% ${cursor}%`;
  }).join(', ');

  return (
    <Panel title={title} subtitle={lens.visualLabel}>
      <div className="grid items-center gap-5 md:grid-cols-2">
        <div className="relative mx-auto h-56 w-56 rounded-full border border-white/10 sm:h-64 sm:w-64" style={{ background: `conic-gradient(${gradient})` }}>
          <div className="absolute inset-10 rounded-full border border-white/10 bg-slate-950/90" />
          <div className="absolute inset-0 flex items-center justify-center px-10 text-center text-sm font-bold text-white">{lens.lens}</div>
        </div>
        <Bars data={values} limit={8} />
      </div>
    </Panel>
  );
}

function ShapeMap({ data, lens, title, sides }) {
  const items = data.slice(0, sides);
  const count = Math.max(items.length, 3);
  const points = items.map((item, index) => {
    const angle = (-90 + index * (360 / count)) * Math.PI / 180;
    const radius = 21 + (item.value / 100) * 18;
    return {
      ...item,
      x: 50 + radius * Math.cos(angle),
      y: 50 + radius * Math.sin(angle),
      lx: 50 + 45 * Math.cos(angle),
      ly: 50 + 45 * Math.sin(angle),
    };
  });

  return (
    <Panel title={title} subtitle={lens.visualLabel}>
      <div className="overflow-x-auto">
        <svg viewBox="0 0 100 100" className="mx-auto min-h-[280px] min-w-[300px] max-w-[560px] rounded-3xl border border-white/10 bg-white/[0.03] p-2">
          <polygon points={points.map(point => `${point.x},${point.y}`).join(' ')} fill="rgba(56,189,248,.12)" stroke="rgba(56,189,248,.85)" strokeWidth="1.2" />
          {points.map(point => (
            <g key={point.name}>
              <circle cx={point.x} cy={point.y} r="3.8" fill={point.color} />
              <text x={point.lx} y={point.ly} textAnchor="middle" fontSize="3.2" fill="rgba(255,255,255,.70)">{point.shortName}</text>
            </g>
          ))}
        </svg>
      </div>
      <div className="mt-4"><Bars data={data} limit={sides} /></div>
    </Panel>
  );
}

function Pyramid({ data, lens }) {
  const layers = data.slice(0, 6);
  return (
    <Panel title="Layered pyramid" subtitle={lens.visualLabel}>
      <div className="mx-auto flex max-w-xl flex-col-reverse gap-2">
        {layers.map((item, index) => (
          <div key={item.name} className="mx-auto rounded-xl border border-white/10 px-3 py-3 text-center text-sm text-white/75" style={{ width: `${48 + index * 9}%`, background: `${item.color}20`, borderColor: `${item.color}55` }}>
            {item.name} · {Math.round(item.value)}
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Matrix({ data, lens }) {
  return (
    <Panel title="Matrix view" subtitle={lens.visualLabel}>
      <div className="grid gap-3 sm:grid-cols-2">
        {data.slice(0, 8).map((item, index) => (
          <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/40">Dimension {index + 1}</div>
            <div className="mt-2 text-sm font-semibold text-white/80">{item.name}</div>
            <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${item.value}%`, background: item.color }} /></div>
            <div className="mt-2 text-xs text-white/45">{Math.round(item.value)}</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Checklist({ data, lens }) {
  return (
    <Panel title="Support matrix" subtitle={lens.visualLabel}>
      <div className="grid gap-3 md:grid-cols-2">
        {data.slice(0, 10).map(item => (
          <div key={item.name} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="flex items-start justify-between gap-3">
              <div className="text-sm font-semibold text-white/80">{item.name}</div>
              <div className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/55">{Math.round(item.value)}</div>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-full rounded-full" style={{ width: `${item.value}%`, background: item.color }} /></div>
            <div className="mt-2 text-xs leading-5 text-white/45">{item.basis || 'Review as a possible support or accessibility consideration.'}</div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Continuum({ data, lens }) {
  const left = data[0]?.name || 'Left pole';
  const right = data[1]?.name || 'Right pole';
  const value = clamp(data[0]?.value ?? 55);
  return (
    <Panel title="Continuum" subtitle={lens.visualLabel}>
      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 sm:p-5">
        <div className="mb-3 flex justify-between gap-4 text-xs text-white/50"><span>{left}</span><span className="text-right">{right}</span></div>
        <div className="relative h-4 rounded-full bg-gradient-to-r from-sky-400/70 via-white/25 to-fuchsia-400/70"><div className="absolute top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-slate-950 shadow-lg" style={{ left: `${value}%` }} /></div>
        <div className="mt-4 text-center text-4xl font-bold text-white">{Math.round(value)}</div>
      </div>
      <div className="mt-4"><Bars data={data} limit={6} /></div>
    </Panel>
  );
}

function Spiral({ data, lens }) {
  return (
    <Panel title="Spiral / stage bands" subtitle={lens.visualLabel}>
      <div className="relative mx-auto h-64 w-64 rounded-full border border-white/10 bg-white/[0.03] sm:h-72 sm:w-72">
        {data.slice(0, 8).map((item, index) => <div key={item.name} className="absolute rounded-full border-2" style={{ inset: `${index * 14}px`, borderColor: item.color, opacity: 0.8 }} />)}
        <div className="absolute inset-0 flex items-center justify-center px-16 text-center text-sm font-semibold text-white/75">{lens.lens}</div>
      </div>
      <div className="mt-4"><Bars data={data} limit={8} /></div>
    </Panel>
  );
}

function Curve({ data, lens }) {
  const value = clamp(data[0]?.value ?? 58);
  return (
    <Panel title="Directional curve" subtitle={lens.visualLabel}>
      <div className="relative h-64 rounded-3xl border border-white/10 bg-white/[0.03] p-4 sm:p-5">
        <svg viewBox="0 0 100 50" className="h-full w-full">
          <path d="M4 43 C18 43, 20 32, 30 29 C39 26, 39 7, 50 7 C61 7, 61 26, 70 29 C80 32, 82 43, 96 43" fill="rgba(56,189,248,.16)" stroke="rgba(56,189,248,.8)" strokeWidth="1.5" />
          <line x1={value} y1="6" x2={value} y2="45" stroke="#facc15" strokeWidth="1.5" />
          <circle cx={value} cy="22" r="3" fill="#facc15" />
        </svg>
        <div className="absolute bottom-5 left-0 right-0 text-center text-sm text-white/60">Directional placement: <span className="font-bold text-white">{Math.round(value)}</span></div>
      </div>
      <div className="mt-4 rounded-2xl border border-amber-300/15 bg-amber-500/[0.06] p-3 text-xs leading-5 text-white/55">This is not a true percentile unless a separate normed assessment was administered.</div>
    </Panel>
  );
}

function Trend({ data, lens }) {
  const items = data.slice(0, 8);
  const points = items.map((item, index) => `${8 + index * (84 / Math.max(items.length - 1, 1))},${88 - item.value * 0.72}`).join(' ');
  return (
    <Panel title="Pattern trend" subtitle={lens.visualLabel}>
      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.03] p-3">
        <svg viewBox="0 0 100 100" className="min-h-[260px] min-w-[420px] w-full">
          {[20, 40, 60, 80].map(y => <line key={y} x1="5" x2="95" y1={y} y2={y} stroke="rgba(255,255,255,.08)" />)}
          <polyline points={points} fill="none" stroke="#38bdf8" strokeWidth="2" />
          {items.map((item, index) => {
            const x = 8 + index * (84 / Math.max(items.length - 1, 1));
            const y = 88 - item.value * 0.72;
            return <g key={item.name}><circle cx={x} cy={y} r="2.5" fill={item.color} /><text x={x} y="96" textAnchor="middle" fontSize="3" fill="rgba(255,255,255,.58)">{item.shortName}</text></g>;
          })}
        </svg>
      </div>
      <div className="mt-4"><Bars data={data} limit={8} /></div>
    </Panel>
  );
}

function Timeline({ data, lens }) {
  return (
    <Panel title="Context timeline and themes" subtitle={lens.visualLabel}>
      <div className="space-y-3">
        {data.slice(0, 10).map((item, index) => (
          <div key={item.name} className="grid gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-4 sm:grid-cols-[5rem_minmax(0,1fr)]">
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-200/60">Theme {index + 1}</div>
            <div><div className="text-sm font-semibold text-white/80">{item.name}</div><p className="mt-1 text-xs leading-5 text-white/45">{item.basis || `Projected visibility ${Math.round(item.value)}.`}</p></div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Placeholder({ lens }) {
  return (
    <Panel title="Source detail unavailable" subtitle={lens.visualLabel}>
      <div className="rounded-2xl border border-amber-300/15 bg-amber-500/[0.06] p-5 text-sm leading-6 text-white/65">
        This framework was referenced in the source material, but there is not enough structured information to present a reliable native visualization. No substitute framework chart is shown.
      </div>
    </Panel>
  );
}

export default function NativeLensVisual({ lens, result }) {
  const targetLens = lens || result?.lens || { lens: 'Lens', visualLabel: 'Structured visual', visualType: 'structuredCards' };
  const data = getData(result);
  const family = getNativeVisualFamily(targetLens.visualType);

  if (family === 'radar') return <Radar data={data} lens={targetLens} />;
  if (family === 'trend') return <Trend data={data} lens={targetLens} />;
  if (family === 'quadrant') return <Quadrant data={data} lens={targetLens} />;
  if (family === 'colorWheel') return <ColorWheel data={data} lens={targetLens} />;
  if (family === 'donut') return <ColorWheel data={data} lens={targetLens} title="Motivator proportions" />;
  if (family === 'gauge') return <Gauge data={data} lens={targetLens} />;
  if (family === 'enneagram') return <ShapeMap data={data} lens={targetLens} title="Nine-point map" sides={9} />;
  if (family === 'pyramid') return <Pyramid data={data} lens={targetLens} />;
  if (family === 'timeline') return <Timeline data={data} lens={targetLens} />;
  if (family === 'matrix') return <Matrix data={data} lens={targetLens} />;
  if (family === 'spiral') return <Spiral data={data} lens={targetLens} />;
  if (family === 'checklist') return <Checklist data={data} lens={targetLens} />;
  if (family === 'continuum') return <Continuum data={data} lens={targetLens} />;
  if (family === 'circumplex') return <ShapeMap data={data} lens={targetLens} title="Circumplex map" sides={8} />;
  if (family === 'triangle') return <ShapeMap data={data} lens={targetLens} title="Triangle map" sides={3} />;
  if (family === 'wheel') return <ShapeMap data={data} lens={targetLens} title="Wheel map" sides={getNativeWheelSides(targetLens.visualType)} />;
  if (family === 'curve') return <Curve data={data} lens={targetLens} />;
  if (family === 'bars') return <Panel title="Native dimension profile" subtitle={targetLens.visualLabel}><Bars data={data} limit={getNativeBarLimit(targetLens.visualType)} /></Panel>;
  if (family === 'placeholder') return <Placeholder lens={targetLens} />;

  return (
    <Panel title="Unsupported visual type" subtitle={targetLens.visualLabel}>
      <div className="rounded-2xl border border-red-300/20 bg-red-500/[0.08] p-5 text-sm leading-6 text-white/70">
        The visual type <code className="rounded bg-black/30 px-1.5 py-0.5">{String(targetLens.visualType)}</code> has no assigned native renderer. This defect is shown explicitly instead of substituting another framework’s chart.
      </div>
    </Panel>
  );
}
