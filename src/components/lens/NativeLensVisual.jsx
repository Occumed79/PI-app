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

function glowVars(color = '#38bdf8') {
  return {
    '--glow-color': `${color}24`,
    '--glow-hover': `${color}66`,
    '--glow-solid': color,
  };
}

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

function cleanLabel(value = '') {
  return String(value)
    .replace(/_/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function splitLabel(value = '', maxCharacters = 18) {
  const text = cleanLabel(value);
  if (!text) return [''];
  const words = text.split(' ');
  const lines = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length <= maxCharacters || !current) {
      current = candidate;
    } else {
      lines.push(current);
      current = word;
    }
  }
  if (current) lines.push(current);
  return lines;
}

function SvgLabel({ x, y, label, fontSize = 3, fill = 'rgba(255,255,255,.72)' }) {
  const lines = splitLabel(label);
  const lineHeight = fontSize * 1.15;
  const firstOffset = -((lines.length - 1) * lineHeight) / 2;

  return (
    <text x={x} y={y} textAnchor="middle" fontSize={fontSize} fill={fill}>
      {lines.map((line, index) => (
        <tspan key={`${line}-${index}`} x={x} dy={index === 0 ? firstOffset : lineHeight}>{line}</tspan>
      ))}
    </text>
  );
}

function getData(result) {
  const source = result?.numericFields?.length
    ? result.numericFields
    : result?.fields?.length
      ? result.fields
      : FALLBACK_FIELDS;

  return source.map((field, index) => ({
    name: cleanLabel(field.label || field.name || `Signal ${index + 1}`),
    raw: field.value || field.raw || '',
    value: clamp(field.score ?? scoreFromValue(field.value, index)),
    color: field.color || COLORS[index % COLORS.length],
    basis: field.basis || '',
  }));
}

function Panel({ title, subtitle, children, className = '' }) {
  return (
    <section className={`pi-luminous-card rounded-3xl border border-sky-300/15 bg-black/25 p-4 sm:p-5 ${className}`} style={glowVars('#38bdf8')}>
      <div className="mb-4">
        <div className="text-sm font-semibold text-white">{title}</div>
        {subtitle && <div className="mt-1 break-words text-xs leading-5 text-white/55">{subtitle}</div>}
      </div>
      {children}
    </section>
  );
}

function Bars({ data, limit = 10 }) {
  return (
    <div className="space-y-2.5">
      {data.slice(0, limit).map(item => (
        <div key={item.name} className="pi-color-tile rounded-2xl border border-white/10 bg-white/[0.05] p-3" style={glowVars(item.color)}>
          <div className="mb-2 flex items-start justify-between gap-3 text-xs">
            <span className="min-w-0 break-words leading-5 text-white/75">{item.name}</span>
            <span className="shrink-0 font-semibold text-white/70">{Math.round(item.value)}</span>
          </div>
          <div className="h-2 overflow-visible rounded-full bg-white/10">
            <div className="pi-luminous-bar h-full rounded-full" style={{ width: `${Math.max(3, item.value)}%`, background: item.color, boxShadow: `0 0 7px ${item.color}, 0 0 18px ${item.color}bb, 0 0 30px ${item.color}55` }} />
          </div>
          {item.basis && <p className="mt-2 text-[11px] leading-4 text-white/40">{item.basis}</p>}
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
      lx: center + 50 * Math.cos(angle),
      ly: center + 50 * Math.sin(angle),
    };
  });

  return (
    <Panel title="Trait shape" subtitle={lens.visualLabel}>
      <div className="grid gap-5 xl:grid-cols-5">
        <div className="pi-chart-stage px-3 py-5 xl:col-span-3">
          <svg viewBox="-18 -18 136 136" className="mx-auto h-auto min-h-[300px] w-full max-w-[600px] overflow-visible" aria-label={`${lens.lens} trait-shape chart`}>
            {[12, 24, 36].map(radius => <circle key={radius} cx="50" cy="50" r={radius} fill="none" stroke="rgba(255,255,255,.12)" />)}
            {points.map(point => <line key={`line-${point.name}`} x1="50" y1="50" x2={point.lx} y2={point.ly} stroke="rgba(255,255,255,.11)" />)}
            <polygon
              points={points.map(point => `${point.x},${point.y}`).join(' ')}
              fill="rgba(56,189,248,.34)"
              stroke="#38bdf8"
              strokeWidth="1.7"
              style={{ filter: 'drop-shadow(0 0 2px rgba(56,189,248,1)) drop-shadow(0 0 7px rgba(56,189,248,.95)) drop-shadow(0 0 15px rgba(56,189,248,.62))' }}
            />
            {points.map(point => (
              <circle
                key={`vertex-${point.name}`}
                cx={point.x}
                cy={point.y}
                r="1.35"
                fill="#7dd3fc"
                stroke="#e0f2fe"
                strokeWidth="0.35"
                style={{ filter: 'drop-shadow(0 0 3px rgba(56,189,248,1)) drop-shadow(0 0 7px rgba(56,189,248,.9))' }}
              />
            ))}
            {points.map(point => <SvgLabel key={point.name} x={point.lx} y={point.ly} label={point.name} fontSize={3.05} />)}
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
  const labels = data.slice(0, 4).map(item => item.name);
  return (
    <Panel title="Quadrant map" subtitle={lens.visualLabel}>
      <div className="pi-chart-stage relative min-h-80 rounded-3xl p-4 sm:min-h-[22rem]">
        <div className="absolute left-1/2 top-4 bottom-4 w-px bg-white/15" />
        <div className="absolute left-4 right-4 top-1/2 h-px bg-white/15" />
        <div className="absolute left-4 top-4 max-w-[43%] break-words text-xs leading-5 text-white/60">{labels[0] || 'Direct'}</div>
        <div className="absolute right-4 top-4 max-w-[43%] break-words text-right text-xs leading-5 text-white/60">{labels[1] || 'Expressive'}</div>
        <div className="absolute bottom-4 left-4 max-w-[43%] break-words text-xs leading-5 text-white/60">{labels[2] || 'Steady'}</div>
        <div className="absolute bottom-4 right-4 max-w-[43%] break-words text-right text-xs leading-5 text-white/60">{labels[3] || 'Precise'}</div>
        <div className="absolute h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-sky-400" style={{ left: `${50 + x}%`, top: `${50 - y}%`, boxShadow: '0 0 8px rgba(56,189,248,1), 0 0 24px rgba(56,189,248,.9), 0 0 42px rgba(56,189,248,.45)' }} />
      </div>
      <div className="mt-4"><Bars data={data} limit={4} /></div>
    </Panel>
  );
}

function Gauge({ data, lens }) {
  const value = Math.round(data[0]?.value ?? 55);
  return (
    <Panel title="Directional index" subtitle={lens.visualLabel}>
      <div className="pi-chart-stage rounded-3xl p-5 text-center">
        <div className="text-5xl font-bold text-white drop-shadow-[0_0_14px_rgba(56,189,248,0.45)] sm:text-6xl">{value}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">projected index</div>
        <div className="mx-auto mt-5 h-3 max-w-md overflow-visible rounded-full bg-white/10">
          <div className="pi-luminous-bar h-full rounded-full bg-sky-400" style={{ width: `${value}%`, boxShadow: '0 0 8px rgba(56,189,248,1), 0 0 22px rgba(56,189,248,.9), 0 0 38px rgba(56,189,248,.45)' }} />
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
        <div className="relative mx-auto h-56 w-56 rounded-full sm:h-64 sm:w-64" style={{ background: `conic-gradient(${gradient})`, filter: 'saturate(1.18) brightness(1.06)', boxShadow: '0 0 12px rgba(56,189,248,.38), 0 0 34px rgba(129,140,248,.30), 0 0 56px rgba(244,114,182,.17), inset 0 0 24px rgba(255,255,255,.15)' }}>
          <div className="absolute inset-10 rounded-full border border-white/15 bg-slate-950/90 shadow-[inset_0_0_22px_rgba(255,255,255,0.06)]" />
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
      lx: 50 + 50 * Math.cos(angle),
      ly: 50 + 50 * Math.sin(angle),
    };
  });

  return (
    <Panel title={title} subtitle={lens.visualLabel}>
      <div className="pi-chart-stage px-3 py-5">
        <svg viewBox="-18 -18 136 136" className="mx-auto min-h-[300px] w-full max-w-[600px] overflow-visible" aria-label={`${lens.lens} ${title}`}>
          <polygon points={points.map(point => `${point.x},${point.y}`).join(' ')} fill="rgba(56,189,248,.24)" stroke="rgba(56,189,248,1)" strokeWidth="1.55" style={{ filter: 'drop-shadow(0 0 3px rgba(56,189,248,1)) drop-shadow(0 0 9px rgba(56,189,248,.85)) drop-shadow(0 0 17px rgba(56,189,248,.5))' }} />
          {points.map(point => (
            <g key={point.name}>
              <circle cx={point.x} cy={point.y} r="4" fill={point.color} stroke="rgba(255,255,255,.85)" strokeWidth="0.45" style={{ filter: `drop-shadow(0 0 4px ${point.color}) drop-shadow(0 0 10px ${point.color})` }} />
              <SvgLabel x={point.lx} y={point.ly} label={point.name} fontSize={3.05} />
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
          <div key={item.name} className="pi-color-tile mx-auto rounded-xl border px-3 py-3 text-center text-sm text-white/80" style={{ width: `${48 + index * 9}%`, background: `${item.color}30`, borderColor: `${item.color}80`, boxShadow: `0 0 8px ${item.color}66, 0 0 22px ${item.color}3d`, ...glowVars(item.color) }}>
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
          <div key={item.name} className="pi-color-tile rounded-2xl border border-white/10 bg-white/[0.05] p-4" style={glowVars(item.color)}>
            <div className="text-[10px] uppercase tracking-[0.16em] text-white/45">Dimension {index + 1}</div>
            <div className="mt-2 break-words text-sm font-semibold text-white/85">{item.name}</div>
            <div className="mt-3 h-2 rounded-full bg-white/10"><div className="pi-luminous-bar h-full rounded-full" style={{ width: `${item.value}%`, background: item.color, boxShadow: `0 0 7px ${item.color}, 0 0 18px ${item.color}bb, 0 0 30px ${item.color}55` }} /></div>
            <div className="mt-2 text-xs text-white/50">{Math.round(item.value)}</div>
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
          <div key={item.name} className="pi-color-tile rounded-2xl border border-white/10 bg-white/[0.05] p-4" style={glowVars(item.color)}>
            <div className="flex items-start justify-between gap-3">
              <div className="break-words text-sm font-semibold text-white/85">{item.name}</div>
              <div className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-white/60">{Math.round(item.value)}</div>
            </div>
            <div className="mt-3 h-2 rounded-full bg-white/10"><div className="pi-luminous-bar h-full rounded-full" style={{ width: `${item.value}%`, background: item.color, boxShadow: `0 0 7px ${item.color}, 0 0 18px ${item.color}bb, 0 0 30px ${item.color}55` }} /></div>
            <div className="mt-2 text-xs leading-5 text-white/50">{item.basis || 'Review as a possible support or accessibility consideration.'}</div>
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
      <div className="pi-chart-stage rounded-3xl p-4 sm:p-5">
        <div className="mb-3 flex justify-between gap-4 text-xs text-white/60"><span className="max-w-[45%] break-words">{left}</span><span className="max-w-[45%] break-words text-right">{right}</span></div>
        <div className="relative h-4 rounded-full bg-gradient-to-r from-sky-400/90 via-white/35 to-fuchsia-400/90" style={{ boxShadow: '0 0 9px rgba(56,189,248,.65), 0 0 24px rgba(217,70,239,.35)' }}><div className="absolute top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-slate-950" style={{ left: `${value}%`, boxShadow: '0 0 8px rgba(255,255,255,.9), 0 0 24px rgba(56,189,248,.75)' }} /></div>
        <div className="mt-4 text-center text-4xl font-bold text-white">{Math.round(value)}</div>
      </div>
      <div className="mt-4"><Bars data={data} limit={6} /></div>
    </Panel>
  );
}

function Spiral({ data, lens }) {
  return (
    <Panel title="Spiral / stage bands" subtitle={lens.visualLabel}>
      <div className="pi-chart-stage relative mx-auto h-64 w-64 rounded-full sm:h-72 sm:w-72">
        {data.slice(0, 8).map((item, index) => <div key={item.name} className="absolute rounded-full border-2" style={{ inset: `${index * 14}px`, borderColor: item.color, opacity: 0.95, boxShadow: `0 0 5px ${item.color}, 0 0 15px ${item.color}99, inset 0 0 12px ${item.color}44` }} />)}
        <div className="absolute inset-0 flex items-center justify-center px-16 text-center text-sm font-semibold text-white/80">{lens.lens}</div>
      </div>
      <div className="mt-4"><Bars data={data} limit={8} /></div>
    </Panel>
  );
}

function Curve({ data, lens }) {
  const value = clamp(data[0]?.value ?? 58);
  return (
    <Panel title="Directional curve" subtitle={lens.visualLabel}>
      <div className="pi-chart-stage relative h-64 rounded-3xl p-4 sm:p-5">
        <svg viewBox="0 0 100 50" className="h-full w-full overflow-visible">
          <path d="M4 43 C18 43, 20 32, 30 29 C39 26, 39 7, 50 7 C61 7, 61 26, 70 29 C80 32, 82 43, 96 43" fill="rgba(56,189,248,.25)" stroke="rgba(56,189,248,1)" strokeWidth="1.7" style={{ filter: 'drop-shadow(0 0 3px rgba(56,189,248,1)) drop-shadow(0 0 10px rgba(56,189,248,.75))' }} />
          <line x1={value} y1="6" x2={value} y2="45" stroke="#facc15" strokeWidth="1.8" style={{ filter: 'drop-shadow(0 0 3px rgba(250,204,21,1)) drop-shadow(0 0 9px rgba(250,204,21,.9))' }} />
          <circle cx={value} cy="22" r="3.2" fill="#facc15" stroke="#fef9c3" strokeWidth="0.4" style={{ filter: 'drop-shadow(0 0 4px rgba(250,204,21,1)) drop-shadow(0 0 11px rgba(250,204,21,.9))' }} />
        </svg>
        <div className="absolute bottom-5 left-0 right-0 text-center text-sm text-white/65">Directional placement: <span className="font-bold text-white">{Math.round(value)}</span></div>
      </div>
      <div className="pi-color-tile mt-4 rounded-2xl border border-amber-300/20 bg-amber-500/[0.09] p-3 text-xs leading-5 text-white/60" style={glowVars('#f59e0b')}>This is not a true percentile unless a separate normed assessment was administered.</div>
    </Panel>
  );
}

function Trend({ data, lens }) {
  const items = data.slice(0, 8);
  const points = items.map((item, index) => `${10 + index * (80 / Math.max(items.length - 1, 1))},${82 - item.value * 0.68}`).join(' ');
  return (
    <Panel title="Pattern trend" subtitle={lens.visualLabel}>
      <div className="pi-chart-stage px-2 py-4">
        <svg viewBox="-5 0 110 118" className="min-h-[285px] w-full overflow-visible" aria-label={`${lens.lens} pattern trend`}>
          {[20, 40, 60, 80].map(y => <line key={y} x1="5" x2="95" y1={y} y2={y} stroke="rgba(255,255,255,.09)" />)}
          <polyline points={points} fill="none" stroke="#38bdf8" strokeWidth="2.25" style={{ filter: 'drop-shadow(0 0 3px rgba(56,189,248,1)) drop-shadow(0 0 9px rgba(56,189,248,.9)) drop-shadow(0 0 16px rgba(56,189,248,.48))' }} />
          {items.map((item, index) => {
            const x = 10 + index * (80 / Math.max(items.length - 1, 1));
            const y = 82 - item.value * 0.68;
            return <g key={item.name}><circle cx={x} cy={y} r="2.8" fill={item.color} stroke="rgba(255,255,255,.85)" strokeWidth="0.35" style={{ filter: `drop-shadow(0 0 4px ${item.color}) drop-shadow(0 0 9px ${item.color})` }} /><SvgLabel x={x} y="104" label={item.name} fontSize={2.75} fill="rgba(255,255,255,.66)" /></g>;
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
          <div key={item.name} className="pi-color-tile grid gap-2 rounded-2xl border border-white/10 bg-white/[0.05] p-4 sm:grid-cols-[5rem_minmax(0,1fr)]" style={glowVars(item.color)}>
            <div className="text-xs font-semibold uppercase tracking-widest text-sky-200/70">Theme {index + 1}</div>
            <div><div className="break-words text-sm font-semibold text-white/85">{item.name}</div><p className="mt-1 text-xs leading-5 text-white/50">{item.basis || `Projected visibility ${Math.round(item.value)}.`}</p></div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Placeholder({ lens }) {
  return (
    <Panel title="Source detail unavailable" subtitle={lens.visualLabel}>
      <div className="pi-color-tile rounded-2xl border border-amber-300/20 bg-amber-500/[0.09] p-5 text-sm leading-6 text-white/70" style={glowVars('#f59e0b')}>
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
      <div className="pi-color-tile rounded-2xl border border-red-300/25 bg-red-500/[0.10] p-5 text-sm leading-6 text-white/75" style={glowVars('#fb7185')}>
        The visual type <code className="rounded bg-black/30 px-1.5 py-0.5">{String(targetLens.visualType)}</code> has no assigned native renderer. This defect is shown explicitly instead of substituting another framework’s chart.
      </div>
    </Panel>
  );
}
