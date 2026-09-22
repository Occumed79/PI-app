import React, { useMemo } from 'react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const PALETTE = ['#38bdf8', '#a78bfa', '#34d399', '#f472b6', '#fbbf24', '#60a5fa', '#fb7185', '#2dd4bf'];

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function finite(value, fallback = 0) {
  const number = Number(value);
  return Number.isFinite(number) ? number : fallback;
}

function asArray(value) {
  return Array.isArray(value) ? value : [];
}

function chartType(spec) {
  return String(spec?.type || '').toLowerCase().trim();
}

function configFor(spec) {
  return spec?.config && typeof spec.config === 'object' ? spec.config : {};
}

function seriesFor(spec) {
  const config = configFor(spec);
  if (Array.isArray(config.series) && config.series.length) {
    return config.series
      .map((item, index) => typeof item === 'string'
        ? { key: item, label: item, color: PALETTE[index % PALETTE.length] }
        : {
            key: item?.key,
            label: item?.label || item?.key,
            color: item?.color || PALETTE[index % PALETTE.length],
          })
      .filter(item => item.key);
  }
  const first = asArray(spec?.data)[0] || {};
  const xKey = config.xKey || 'label';
  return Object.keys(first)
    .filter(key => key !== xKey && typeof first[key] === 'number')
    .slice(0, 6)
    .map((key, index) => ({ key, label: key, color: PALETTE[index % PALETTE.length] }));
}

const tooltipStyle = {
  background: 'rgba(5, 10, 24, .96)',
  border: '1px solid rgba(255,255,255,.14)',
  borderRadius: 16,
  color: '#fff',
  boxShadow: '0 18px 45px rgba(0,0,0,.35)',
};

function EmptyViz({ message = 'The AI did not provide enough structured data to render this visualization.' }) {
  return (
    <div className="flex h-52 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-black/15 px-6 text-center text-xs text-white/35">
      {message}
    </div>
  );
}

function StandardCartesian({ spec, mode }) {
  const data = asArray(spec?.data);
  const config = configFor(spec);
  const xKey = config.xKey || 'label';
  const series = seriesFor(spec);
  if (!data.length || !series.length) return <EmptyViz />;

  const common = (
    <>
      <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.07)" vertical={false} />
      <XAxis dataKey={xKey} tick={{ fill: 'rgba(255,255,255,.48)', fontSize: 11 }} axisLine={false} tickLine={false} />
      <YAxis domain={config.domain || ['auto', 'auto']} tick={{ fill: 'rgba(255,255,255,.38)', fontSize: 11 }} axisLine={false} tickLine={false} />
      <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(255,255,255,.035)' }} />
      {series.length > 1 && <Legend wrapperStyle={{ fontSize: 11, opacity: .72 }} />}
    </>
  );

  if (mode === 'bar' || mode === 'histogram') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} barCategoryGap="24%">
          {common}
          {series.map((item, index) => (
            <Bar
              key={item.key}
              dataKey={item.key}
              name={item.label}
              fill={item.color}
              radius={[8, 8, 2, 2]}
              stackId={config.stacked ? 'stack' : undefined}
              isAnimationActive
              animationDuration={700 + index * 120}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    );
  }

  if (mode === 'area' || mode === 'stream') {
    return (
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          {common}
          {series.map((item, index) => (
            <Area
              key={item.key}
              type={config.curve || 'monotone'}
              dataKey={item.key}
              name={item.label}
              stroke={item.color}
              fill={item.color}
              fillOpacity={mode === 'stream' ? .23 : .15}
              strokeWidth={2.5}
              stackId={mode === 'stream' || config.stacked ? 'stack' : undefined}
              isAnimationActive
              animationDuration={850 + index * 120}
            />
          ))}
        </AreaChart>
      </ResponsiveContainer>
    );
  }

  if (mode === 'allocation-performance') {
    const [primary, secondary, ...rest] = series;
    return (
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={data}>
          {common}
          {primary && <Bar dataKey={primary.key} name={primary.label} fill={primary.color} radius={[8, 8, 2, 2]} />}
          {secondary && <Line type="monotone" dataKey={secondary.key} name={secondary.label} stroke={secondary.color} strokeWidth={3} dot={{ r: 3 }} />}
          {rest.map(item => <Line key={item.key} type="monotone" dataKey={item.key} name={item.label} stroke={item.color} strokeWidth={2} dot={false} />)}
        </ComposedChart>
      </ResponsiveContainer>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        {common}
        {series.map((item, index) => (
          <Line
            key={item.key}
            type={config.curve || 'monotone'}
            dataKey={item.key}
            name={item.label}
            stroke={item.color}
            strokeWidth={mode === 'waveform' ? 2 : 3}
            dot={mode === 'waveform' ? false : { r: 3 }}
            activeDot={{ r: 5 }}
            isAnimationActive
            animationDuration={750 + index * 120}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
}

function RadarViz({ spec }) {
  const data = asArray(spec?.data);
  const config = configFor(spec);
  const labelKey = config.labelKey || config.xKey || 'label';
  const series = seriesFor(spec);
  if (!data.length || !series.length) return <EmptyViz />;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart data={data} outerRadius="72%">
        <PolarGrid stroke="rgba(255,255,255,.12)" />
        <PolarAngleAxis dataKey={labelKey} tick={{ fill: 'rgba(255,255,255,.62)', fontSize: 11 }} />
        <PolarRadiusAxis angle={30} domain={config.domain || [0, 100]} tick={{ fill: 'rgba(255,255,255,.22)', fontSize: 9 }} axisLine={false} />
        <Tooltip contentStyle={tooltipStyle} />
        {series.map((item, index) => (
          <Radar
            key={item.key}
            dataKey={item.key}
            name={item.label}
            stroke={item.color}
            fill={item.color}
            fillOpacity={index === 0 ? .24 : .08}
            strokeWidth={2.5}
            isAnimationActive
            animationDuration={900 + index * 120}
          />
        ))}
        {series.length > 1 && <Legend wrapperStyle={{ fontSize: 11, opacity: .72 }} />}
      </RadarChart>
    </ResponsiveContainer>
  );
}

function GaugeViz({ spec }) {
  const config = configFor(spec);
  const value = finite(config.value ?? spec?.value ?? asArray(spec?.data)[0]?.value);
  const min = finite(config.min, 0);
  const max = finite(config.max, 100);
  const clamped = Math.max(min, Math.min(max, value));
  const normalized = max === min ? 0 : ((clamped - min) / (max - min)) * 100;
  const data = [{ name: config.label || 'Score', value: normalized, fill: config.color || '#38bdf8' }];

  return (
    <div className="relative h-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="66%"
          outerRadius="96%"
          startAngle={210}
          endAngle={-30}
          data={data}
          barSize={18}
        >
          <RadialBar background={{ fill: 'rgba(255,255,255,.07)' }} dataKey="value" cornerRadius={12} isAnimationActive animationDuration={1100} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center pt-10">
        <div className="text-4xl font-black tracking-tight text-white">{Math.round(value)}{config.suffix || ''}</div>
        <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/38">{config.label || 'Score'}</div>
      </div>
    </div>
  );
}

function RadialViz({ spec, circular = false }) {
  const data = asArray(spec?.data).map((item, index) => ({
    ...item,
    fill: item.color || PALETTE[index % PALETTE.length],
  }));
  const config = configFor(spec);
  const valueKey = config.valueKey || 'value';
  const labelKey = config.labelKey || 'label';
  if (!data.length) return <EmptyViz />;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadialBarChart
        innerRadius={circular ? '25%' : '38%'}
        outerRadius="92%"
        data={data}
        startAngle={90}
        endAngle={circular ? -270 : -270}
        barSize={circular ? 11 : 16}
      >
        <RadialBar dataKey={valueKey} nameKey={labelKey} cornerRadius={10} background={{ fill: 'rgba(255,255,255,.045)' }} isAnimationActive animationDuration={900} />
        <Tooltip contentStyle={tooltipStyle} />
        <Legend iconSize={8} wrapperStyle={{ fontSize: 10, opacity: .7 }} />
      </RadialBarChart>
    </ResponsiveContainer>
  );
}

function PieViz({ spec, donut = false }) {
  const data = asArray(spec?.data);
  const config = configFor(spec);
  const valueKey = config.valueKey || 'value';
  const labelKey = config.labelKey || 'label';
  if (!data.length) return <EmptyViz />;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          dataKey={valueKey}
          nameKey={labelKey}
          cx="50%"
          cy="50%"
          outerRadius="80%"
          innerRadius={donut ? '55%' : 0}
          paddingAngle={donut ? 3 : 1}
          isAnimationActive
          animationDuration={900}
        >
          {data.map((entry, index) => <Cell key={index} fill={entry.color || PALETTE[index % PALETTE.length]} />)}
        </Pie>
        <Tooltip contentStyle={tooltipStyle} />
        <Legend iconSize={8} wrapperStyle={{ fontSize: 10, opacity: .7 }} />
      </PieChart>
    </ResponsiveContainer>
  );
}

function ScatterViz({ spec, bubbles = false }) {
  const data = asArray(spec?.data);
  const config = configFor(spec);
  const xKey = config.xKey || 'x';
  const yKey = config.yKey || 'y';
  const zKey = config.zKey || 'z';
  if (!data.length) return <EmptyViz />;

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 12, right: 18, bottom: 12, left: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.07)" />
        <XAxis type="number" dataKey={xKey} name={config.xLabel || xKey} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 10 }} axisLine={false} tickLine={false} />
        <YAxis type="number" dataKey={yKey} name={config.yLabel || yKey} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 10 }} axisLine={false} tickLine={false} />
        {bubbles && <Scatter data={data} fill="#38bdf8" shape={(props) => {
          const radius = Math.max(4, Math.min(28, Math.sqrt(Math.abs(finite(props?.payload?.[zKey], 10))) * 2.4));
          return <circle cx={props.cx} cy={props.cy} r={radius} fill={props?.payload?.color || '#38bdf8'} fillOpacity=".56" stroke={props?.payload?.color || '#38bdf8'} strokeOpacity=".95" />;
        }} />}
        {!bubbles && <Scatter data={data} fill="#38bdf8" />}
        <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={tooltipStyle} />
      </ScatterChart>
    </ResponsiveContainer>
  );
}

function HeatmapViz({ spec }) {
  const data = asArray(spec?.data);
  const config = configFor(spec);
  if (!data.length) return <EmptyViz />;
  const xKey = config.xKey || 'x';
  const yKey = config.yKey || 'y';
  const valueKey = config.valueKey || 'value';
  const xs = [...new Set(data.map(item => String(item[xKey] ?? '')))];
  const ys = [...new Set(data.map(item => String(item[yKey] ?? '')))];
  const max = Math.max(1, ...data.map(item => Math.abs(finite(item[valueKey]))));
  const lookup = new Map(data.map(item => [`${String(item[yKey] ?? '')}__${String(item[xKey] ?? '')}`, item]));

  return (
    <div className="h-full overflow-auto">
      <div className="grid min-w-[520px] gap-1" style={{ gridTemplateColumns: `110px repeat(${xs.length}, minmax(46px, 1fr))` }}>
        <div />
        {xs.map(x => <div key={x} className="truncate px-1 py-1 text-center text-[10px] text-white/38">{x}</div>)}
        {ys.flatMap(y => {
          const row = [<div key={`${y}-label`} className="truncate py-2 pr-2 text-right text-[10px] text-white/42">{y}</div>];
          for (const x of xs) {
            const item = lookup.get(`${y}__${x}`) || {};
            const value = finite(item[valueKey]);
            const opacity = .08 + .78 * Math.min(1, Math.abs(value) / max);
            row.push(
              <div
                key={`${y}-${x}`}
                title={`${y} · ${x}: ${value}`}
                className="flex min-h-[34px] items-center justify-center rounded-md border border-white/[0.04] text-[10px] font-semibold text-white/75"
                style={{ background: `rgba(56,189,248,${opacity})` }}
              >
                {config.showValues === false ? '' : value}
              </div>
            );
          }
          return row;
        })}
      </div>
    </div>
  );
}

function NetworkViz({ spec, arcOnly = false }) {
  const nodes = asArray(spec?.nodes);
  const links = asArray(spec?.links);
  if (!nodes.length) return <EmptyViz />;

  const width = 720;
  const height = 320;
  const centerX = width / 2;
  const centerY = height / 2;
  const positioned = nodes.map((node, index) => {
    if (Number.isFinite(Number(node.x)) && Number.isFinite(Number(node.y))) {
      return { ...node, px: finite(node.x), py: finite(node.y) };
    }
    const angle = (Math.PI * 2 * index) / nodes.length - Math.PI / 2;
    const radius = Math.min(width, height) * .34;
    return { ...node, px: centerX + Math.cos(angle) * radius, py: centerY + Math.sin(angle) * radius };
  });
  const byId = new Map(positioned.map(node => [String(node.id ?? node.label), node]));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full overflow-visible">
      <defs>
        <filter id="sg-glow"><feGaussianBlur stdDeviation="3.5" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      {links.map((link, index) => {
        const source = byId.get(String(link.source));
        const target = byId.get(String(link.target));
        if (!source || !target) return null;
        if (arcOnly) {
          const mx = (source.px + target.px) / 2;
          const my = Math.min(source.py, target.py) - 80 - Math.abs(target.px - source.px) * .08;
          return <path key={index} d={`M ${source.px} ${source.py} Q ${mx} ${my} ${target.px} ${target.py}`} fill="none" stroke={link.color || '#38bdf8'} strokeOpacity=".38" strokeWidth={1.2 + Math.min(5, finite(link.value, 1))} />;
        }
        return <line key={index} x1={source.px} y1={source.py} x2={target.px} y2={target.py} stroke={link.color || '#38bdf8'} strokeOpacity=".28" strokeWidth={1 + Math.min(5, finite(link.value, 1))} />;
      })}
      {positioned.map((node, index) => {
        const radius = 8 + Math.min(22, Math.sqrt(Math.abs(finite(node.value, 8))) * 2);
        const color = node.color || PALETTE[index % PALETTE.length];
        return (
          <g key={String(node.id ?? index)} transform={`translate(${node.px},${node.py})`}>
            <circle r={radius + 5} fill={color} fillOpacity=".08" filter="url(#sg-glow)" />
            <circle r={radius} fill={color} fillOpacity=".72" stroke={color} strokeWidth="1.5" />
            <text y={radius + 17} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.65)">{String(node.label ?? node.id ?? '')}</text>
          </g>
        );
      })}
    </svg>
  );
}

function ChordViz({ spec }) {
  const nodes = asArray(spec?.nodes);
  const links = asArray(spec?.links);
  if (!nodes.length) return <EmptyViz />;
  const width = 720;
  const height = 330;
  const centerX = width / 2;
  const centerY = height / 2;
  const radius = 120;
  const positioned = nodes.map((node, index) => {
    const angle = (Math.PI * 2 * index) / nodes.length - Math.PI / 2;
    return { ...node, px: centerX + Math.cos(angle) * radius, py: centerY + Math.sin(angle) * radius };
  });
  const byId = new Map(positioned.map(node => [String(node.id ?? node.label), node]));

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full">
      {links.map((link, index) => {
        const source = byId.get(String(link.source));
        const target = byId.get(String(link.target));
        if (!source || !target) return null;
        const color = link.color || PALETTE[index % PALETTE.length];
        return <path key={index} d={`M ${source.px} ${source.py} Q ${centerX} ${centerY} ${target.px} ${target.py}`} fill="none" stroke={color} strokeOpacity=".24" strokeWidth={1.5 + Math.min(10, finite(link.value, 1) * .9)} />;
      })}
      {positioned.map((node, index) => {
        const color = node.color || PALETTE[index % PALETTE.length];
        return (
          <g key={String(node.id ?? index)}>
            <circle cx={node.px} cy={node.py} r="9" fill={color} />
            <text x={node.px} y={node.py + (node.py < centerY ? -15 : 22)} textAnchor="middle" fontSize="10" fill="rgba(255,255,255,.65)">{String(node.label ?? node.id ?? '')}</text>
          </g>
        );
      })}
    </svg>
  );
}

function GeoViz({ spec, mode }) {
  const points = asArray(spec?.points).length ? asArray(spec.points) : asArray(spec?.data);
  const connections = asArray(spec?.connections);
  if (!points.length) return <EmptyViz message="This map visualization needs points with latitude and longitude." />;

  const width = 720;
  const height = 320;
  const project = point => ({
    x: ((finite(point.lon ?? point.lng) + 180) / 360) * width,
    y: ((90 - finite(point.lat)) / 180) * height,
  });
  const projected = points.filter(p => Number.isFinite(Number(p.lat)) && Number.isFinite(Number(p.lon ?? p.lng))).map((point, index) => ({ ...point, ...project(point), index }));
  const byId = new Map(projected.map(point => [String(point.id ?? point.label ?? point.index), point]));

  if (!projected.length) return <EmptyViz message="This map visualization needs valid latitude/longitude coordinates." />;

  return (
    <svg viewBox={`0 0 ${width} ${height}`} className="h-full w-full rounded-2xl bg-[radial-gradient(circle_at_50%_45%,rgba(56,189,248,.08),transparent_58%)]">
      <g opacity=".15">
        {[0, 60, 120, 180, 240, 300].map(y => <line key={`y${y}`} x1="0" y1={y} x2={width} y2={y} stroke="white" strokeDasharray="3 7"/>)}
        {[0, 120, 240, 360, 480, 600, 720].map(x => <line key={`x${x}`} x1={x} y1="0" x2={x} y2={height} stroke="white" strokeDasharray="3 7"/>)}
      </g>
      {mode === 'connection-map' && connections.map((link, index) => {
        const source = byId.get(String(link.source));
        const target = byId.get(String(link.target));
        if (!source || !target) return null;
        const mx = (source.x + target.x) / 2;
        const my = Math.min(source.y, target.y) - 34;
        return <path key={index} d={`M ${source.x} ${source.y} Q ${mx} ${my} ${target.x} ${target.y}`} fill="none" stroke={link.color || '#38bdf8'} strokeOpacity=".5" strokeWidth={1 + Math.min(4, finite(link.value, 1))} />;
      })}
      {projected.map((point, index) => {
        const value = Math.abs(finite(point.value, 1));
        const radius = mode === 'bubble-map' ? 4 + Math.min(22, Math.sqrt(value) * 2.1) : mode === 'hexbin-map' ? 7 + Math.min(13, Math.sqrt(value)) : 5;
        const color = point.color || PALETTE[index % PALETTE.length];
        return (
          <g key={String(point.id ?? index)}>
            {mode === 'hexbin-map'
              ? <polygon points={Array.from({length:6},(_,i)=>{const a=Math.PI/3*i; return `${point.x+Math.cos(a)*radius},${point.y+Math.sin(a)*radius}`;}).join(' ')} fill={color} fillOpacity=".42" stroke={color} strokeOpacity=".8" />
              : <circle cx={point.x} cy={point.y} r={radius} fill={color} fillOpacity=".58" stroke={color} strokeOpacity=".9" />}
            {point.label && <text x={point.x} y={point.y - radius - 5} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,.55)">{String(point.label)}</text>}
          </g>
        );
      })}
    </svg>
  );
}

function TileCartogram({ spec }) {
  const data = asArray(spec?.data);
  const config = configFor(spec);
  const valueKey = config.valueKey || 'value';
  const labelKey = config.labelKey || 'label';
  if (!data.length) return <EmptyViz />;
  const max = Math.max(1, ...data.map(item => Math.abs(finite(item[valueKey]))));

  return (
    <div className="grid h-full auto-rows-fr grid-cols-3 gap-2 sm:grid-cols-4">
      {data.map((item, index) => {
        const value = finite(item[valueKey]);
        const intensity = .1 + .7 * Math.min(1, Math.abs(value) / max);
        const color = item.color || PALETTE[index % PALETTE.length];
        return (
          <div key={index} className="flex min-h-[58px] flex-col justify-center rounded-xl border border-white/8 px-3 py-2" style={{ backgroundColor: color + Math.round(intensity * 255).toString(16).padStart(2, '0') }}>
            <div className="truncate text-[10px] text-white/70">{String(item[labelKey] ?? '')}</div>
            <div className="text-lg font-bold text-white">{value}</div>
          </div>
        );
      })}
    </div>
  );
}

export default function SignalGlassVisualization({ spec }) {
  const type = chartType(spec);
  const config = configFor(spec);
  const content = useMemo(() => {
    if (['score-radar', 'radar', 'radar-chart'].includes(type)) return <RadarViz spec={spec} />;
    if (['risk-gauge', 'gauge', 'risk-score-gauge'].includes(type)) return <GaugeViz spec={spec} />;
    if (['radial', 'radial-chart'].includes(type)) return <RadialViz spec={spec} />;
    if (['circular-bar', 'circular-barplot'].includes(type)) return <RadialViz spec={spec} circular />;
    if (['pie', 'pie-chart', 'pie-plot'].includes(type)) return <PieViz spec={spec} />;
    if (['donut', 'donut-chart'].includes(type)) return <PieViz spec={spec} donut />;
    if (['scatter', 'scatter-plot'].includes(type)) return <ScatterViz spec={spec} />;
    if (['bubble', 'bubble-chart', 'bubble-plot'].includes(type)) return <ScatterViz spec={spec} bubbles />;
    if (type === 'heatmap') return <HeatmapViz spec={spec} />;
    if (['network', 'network-chart'].includes(type)) return <NetworkViz spec={spec} />;
    if (['arc', 'arc-diagram'].includes(type)) return <NetworkViz spec={spec} arcOnly />;
    if (['chord', 'chord-diagram'].includes(type)) return <ChordViz spec={spec} />;
    if (['map', 'bubble-map', 'connection-map', 'hexbin-map'].includes(type)) return <GeoViz spec={spec} mode={type} />;
    if (['choropleth-map', 'cartogram'].includes(type)) return <TileCartogram spec={spec} />;
    if (['bar', 'bar-chart', 'barplot'].includes(type)) return <StandardCartesian spec={spec} mode="bar" />;
    if (type === 'histogram') return <StandardCartesian spec={spec} mode="histogram" />;
    if (['area', 'area-chart', 'area-plot', 'animated-area', 'animated-area-chart'].includes(type)) return <StandardCartesian spec={spec} mode="area" />;
    if (['stream', 'streamchart'].includes(type)) return <StandardCartesian spec={spec} mode="stream" />;
    if (['allocation-performance', 'allocation-performance-chart'].includes(type)) return <StandardCartesian spec={spec} mode="allocation-performance" />;
    if (['waveform', 'activity-waveform', 'activity-waveform-chart'].includes(type)) return <StandardCartesian spec={spec} mode="waveform" />;
    if (['line', 'line-chart', 'timeseries', 'time-series', 'connected-scatter', 'connected-scatter-plot'].includes(type)) return <StandardCartesian spec={spec} mode="line" />;
    return <EmptyViz message={`Unsupported visualization type: ${type || 'unknown'}`} />;
  }, [spec, type]);

  return (
    <div className="sg-viz-card relative my-4 overflow-hidden rounded-[22px] border border-sky-300/15 bg-[linear-gradient(145deg,rgba(8,15,31,.94),rgba(5,10,24,.82))] p-4 shadow-[0_18px_55px_rgba(0,0,0,.28)]">
      <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-sky-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-1/3 h-48 w-48 rounded-full bg-fuchsia-500/8 blur-3xl" />
      <div className="relative">
        {(spec?.title || spec?.subtitle) && (
          <div className="mb-3">
            {spec?.title && <div className="text-sm font-semibold tracking-tight text-white">{spec.title}</div>}
            {spec?.subtitle && <div className="mt-1 text-[11px] leading-4 text-white/40">{spec.subtitle}</div>}
          </div>
        )}
        <div className={cx('w-full', config.height === 'tall' ? 'h-[420px]' : 'h-[300px]')}>
          {content}
        </div>
        {spec?.caption && <div className="mt-3 border-t border-white/7 pt-2 text-[10px] leading-4 text-white/30">{spec.caption}</div>}
      </div>
    </div>
  );
}
