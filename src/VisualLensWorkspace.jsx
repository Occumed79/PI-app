import React, { useMemo, useState } from 'react';
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Brain,
  BrainCircuit,
  CheckCircle2,
  Compass,
  Gauge,
  GitCompare,
  Layers3,
  Lightbulb,
  MessageSquareText,
  Network,
  Radar,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  UserRound,
} from 'lucide-react';
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar as RadarShape,
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
import { allLenses } from './data/lenses.js';
import { groups, profiles } from './data/profiles.js';

const palette = {
  navy: '#090D1D',
  blue: '#195899',
  periwinkle: '#8597C6',
  stone: '#BCB6BC',
  silver: '#D7D7D7',
};

const categoryIcons = {
  Personality: Brain,
  Strengths: Sparkles,
  Cognition: BrainCircuit,
  Interpersonal: Network,
  Wellbeing: Activity,
  Context: Compass,
  'Manager Tools': Target,
  'Platform Lens': Layers3,
};

const lensStates = ['Included', 'Estimated', 'Unknown', 'Excluded'];

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Card({ children, className = '' }) {
  return <div className={cx('rounded-[1.75rem] border border-white/10 bg-white/[0.065] shadow-2xl shadow-black/25 backdrop-blur-xl', className)}>{children}</div>;
}

function Pill({ children, className = '' }) {
  return <span className={cx('inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-medium text-white/75', className)}>{children}</span>;
}

function chartTooltip() {
  return {
    background: 'rgba(9,13,29,.96)',
    border: '1px solid rgba(255,255,255,.14)',
    borderRadius: 14,
    color: '#fff',
  };
}

function scoreLabel(value) {
  if (value >= 76) return 'High';
  if (value >= 45) return 'Moderate';
  return 'Low';
}

function lensScore(profile, lens) {
  const weights = lens.factorWeights || {};
  const factors = Object.keys(profile.scores);
  const weighted = factors.reduce((sum, factor) => sum + profile.scores[factor] * (weights[factor] ?? 0.5), 0);
  const total = factors.reduce((sum, factor) => sum + (weights[factor] ?? 0.5), 0);
  return Math.round(weighted / Math.max(total, 0.1));
}

function useLensData(profile, lens) {
  return useMemo(() => {
    const factors = Object.entries(profile.scores).map(([factor, value]) => ({
      factor,
      profile: value,
      lens: Math.round((lens.factorWeights?.[factor] ?? 0.5) * 100),
      combined: Math.round((value + (lens.factorWeights?.[factor] ?? 0.5) * 100) / 2),
    }));

    const signal = lensScore(profile, lens);
    const states = [
      { name: 'Known', value: Math.max(18, Math.round(signal * 0.42)) },
      { name: 'Estimated', value: Math.max(12, Math.round((100 - signal) * 0.36)) },
      { name: 'Unknown', value: Math.max(8, Math.round((lens.outputs?.length || 4) * 6)) },
      { name: 'Excluded', value: Math.max(3, lens.category === 'Platform Lens' ? 30 : 8) },
    ];

    const flow = [
      { name: 'Observe', value: 30 + signal * 0.25 },
      { name: 'Interpret', value: 36 + signal * 0.32 },
      { name: 'Check', value: 28 + signal * 0.28 },
      { name: 'Support', value: 42 + signal * 0.35 },
    ].map((item) => ({ ...item, value: Math.round(item.value) }));

    const scatter = factors.map((item, index) => ({
      x: item.profile,
      y: item.lens,
      z: item.combined,
      name: item.factor,
      fill: index % 2 ? palette.periwinkle : palette.blue,
    }));

    return { factors, signal, states, flow, scatter };
  }, [profile, lens]);
}

function GlowingBrain({ activeLens }) {
  return (
    <div className="relative flex h-[21rem] items-center justify-center overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_center,rgba(25,88,153,.30),rgba(9,13,29,.24)_45%,rgba(9,13,29,.85)_100%)]">
      <div className="absolute h-80 w-80 rounded-full border border-[#8597C6]/20 blur-[1px]" />
      <div className="absolute h-64 w-[34rem] rounded-full border border-[#195899]/25" />
      <div className="absolute h-40 w-[27rem] rotate-12 rounded-full border border-[#8597C6]/20" />
      <svg viewBox="0 0 620 360" className="relative z-10 h-[19rem] w-full max-w-[42rem] drop-shadow-[0_0_38px_rgba(133,151,198,.45)]">
        <defs>
          <linearGradient id="brainLine" x1="0" x2="1"><stop offset="0%" stopColor="#D7D7D7"/><stop offset="45%" stopColor="#8597C6"/><stop offset="100%" stopColor="#195899"/></linearGradient>
          <radialGradient id="brainFill"><stop offset="0%" stopColor="#8597C6" stopOpacity=".34"/><stop offset="100%" stopColor="#195899" stopOpacity=".10"/></radialGradient>
        </defs>
        <path d="M160 185C110 176 88 132 111 94c19-31 56-31 76-21 17-39 71-47 105-24 25-31 91-27 115 7 36-3 75 17 87 54 15 46-18 91-68 94-14 28-55 43-91 31-31 32-91 28-117-8-28 12-54 1-58-42Z" fill="url(#brainFill)" stroke="url(#brainLine)" strokeWidth="4" />
        <path d="M183 78c6 31-7 50-31 63m73-93c-11 39 7 66 47 81m31-98c-21 35-12 75 19 98m89-77c-45 14-64 49-55 91m101-37c-43 4-71 32-72 74m-221-2c31-17 66-16 94 4m-17-74c40 2 70 19 91 51m-10 75c11-33 33-53 70-61" fill="none" stroke="#D7D7D7" strokeOpacity=".8" strokeWidth="3" strokeLinecap="round" />
        <path d="M195 205c27-28 56-37 92-26m64-36c29 14 53 34 72 62M288 67c27 41 24 83-8 125" fill="none" stroke="#8597C6" strokeOpacity=".82" strokeWidth="3" strokeLinecap="round" />
        {[[170,92],[230,49],[307,61],[413,62],[470,124],[397,206],[316,161],[221,183],[120,136],[358,127]].map(([cx, cy], i) => <circle key={i} cx={cx} cy={cy} r="5" fill="#D7D7D7" opacity=".9" />)}
        <path d="M305 236v47m-46 18c33-22 71-23 105 0" stroke="#8597C6" strokeWidth="4" fill="none" strokeLinecap="round" />
        <ellipse cx="311" cy="313" rx="126" ry="22" fill="none" stroke="#8597C6" strokeOpacity=".55" strokeWidth="2" />
        <text x="310" y="342" textAnchor="middle" fill="#D7D7D7" opacity=".72" fontSize="15">{activeLens.label}</text>
      </svg>
    </div>
  );
}

function LensSidebar({ activeLens, setActiveLens }) {
  const [query, setQuery] = useState('');
  const grouped = useMemo(() => {
    const filtered = allLenses.filter((lens) => `${lens.label} ${lens.category}`.toLowerCase().includes(query.toLowerCase()));
    return filtered.reduce((acc, lens) => {
      const group = lens.category || 'Other';
      if (!acc[group]) acc[group] = [];
      acc[group].push(lens);
      return acc;
    }, {});
  }, [query]);

  return (
    <aside className="h-[calc(100vh-2rem)] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
      <div className="flex items-center gap-3 rounded-3xl bg-white/[0.06] p-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#195899]/40 text-[#D7D7D7]"><Brain size={24} /></div>
        <div><div className="text-lg font-bold text-white">PI-App</div><div className="text-xs text-white/45">Lens Workspace</div></div>
      </div>
      <div className="relative mt-4">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search lenses" className="w-full rounded-2xl border border-white/10 bg-[#090D1D]/60 py-3 pl-10 pr-3 text-sm text-white outline-none placeholder:text-white/30" />
      </div>
      <div className="mt-4 h-[calc(100%-8.5rem)] overflow-y-auto pr-1">
        {Object.entries(grouped).map(([category, lenses]) => {
          const Icon = categoryIcons[category] || Layers3;
          return (
            <div key={category} className="mb-5">
              <div className="mb-2 flex items-center gap-2 px-1 text-[11px] uppercase tracking-[0.18em] text-white/35"><Icon size={13} /> {category}</div>
              <div className="grid gap-2">
                {lenses.map((lens) => {
                  const active = activeLens.id === lens.id;
                  return (
                    <button key={lens.id} onClick={() => setActiveLens(lens)} className={cx('rounded-2xl border px-3 py-3 text-left transition', active ? 'border-[#8597C6]/55 bg-[#195899]/30 shadow-[0_0_28px_rgba(25,88,153,.22)]' : 'border-white/10 bg-white/[0.035] hover:bg-white/[0.075]')}>
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-white/88">{lens.label}</span>
                        {active && <span className="h-2 w-2 rounded-full bg-[#D7D7D7] shadow-[0_0_14px_rgba(215,215,215,.75)]" />}
                      </div>
                      <div className="mt-1 line-clamp-1 text-xs text-white/38">{lens.outputs?.slice(0, 2).join(' · ')}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function ProfileHeader({ profile, setProfile }) {
  return (
    <Card className="p-4">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <div className="flex flex-wrap gap-2"><Pill>Visual-first</Pill><Pill>Lenses on side panel</Pill><Pill>More charts per lens</Pill></div>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-white md:text-5xl">Human Systems Intelligence</h1>
          <p className="mt-2 max-w-3xl text-sm leading-6 text-white/55">Select a lens on the left. The main workspace turns that lens into charts, signal maps, manager guidance, and visual reasoning.</p>
        </div>
        <div className="min-w-[18rem] rounded-3xl border border-white/10 bg-[#090D1D]/45 p-4">
          <label className="text-xs uppercase tracking-[0.16em] text-white/35">Selected profile</label>
          <select value={profile.name} onChange={(event) => setProfile(profiles.find((item) => item.name === event.target.value) || profile)} className="mt-2 w-full rounded-2xl border border-white/10 bg-[#090D1D]/70 px-3 py-3 text-sm text-white outline-none">
            {profiles.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
          </select>
        </div>
      </div>
    </Card>
  );
}

function MetricTile({ icon: Icon, label, value, note }) {
  return (
    <Card className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#195899]/25 text-[#D7D7D7]"><Icon size={21} /></div>
        <div className="text-right"><div className="text-3xl font-bold text-white">{value}</div><div className="text-xs text-white/40">{label}</div></div>
      </div>
      <p className="mt-4 text-xs leading-5 text-white/48">{note}</p>
    </Card>
  );
}

function FactorRadar({ data }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(215,215,215,.15)" />
          <PolarAngleAxis dataKey="factor" tick={{ fill: 'rgba(215,215,215,.65)', fontSize: 12 }} />
          <RadarShape name="Profile" dataKey="profile" stroke={palette.periwinkle} fill={palette.periwinkle} fillOpacity={0.18} />
          <RadarShape name="Lens emphasis" dataKey="lens" stroke={palette.blue} fill={palette.blue} fillOpacity={0.20} />
          <Tooltip contentStyle={chartTooltip()} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function FactorBars({ data }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 8, right: 10, left: -22, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
          <XAxis dataKey="factor" tick={{ fill: 'rgba(215,215,215,.58)', fontSize: 11 }} />
          <YAxis domain={[0, 100]} tick={{ fill: 'rgba(215,215,215,.38)', fontSize: 10 }} />
          <Tooltip contentStyle={chartTooltip()} />
          <Bar dataKey="profile" name="Profile" radius={[8, 8, 3, 3]} fill={palette.periwinkle} />
          <Bar dataKey="lens" name="Lens" radius={[8, 8, 3, 3]} fill={palette.blue} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function ConfidenceRing({ signal }) {
  const data = [{ name: 'Signal', value: signal, fill: palette.periwinkle }];
  return (
    <div className="relative h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart innerRadius="64%" outerRadius="88%" data={data} startAngle={90} endAngle={-270}>
          <RadialBar dataKey="value" cornerRadius={16} background={{ fill: 'rgba(255,255,255,.08)' }} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-5xl font-bold text-white">{signal}%</div>
        <div className="mt-1 text-sm text-white/45">lens signal</div>
      </div>
    </div>
  );
}

function StateDonut({ data }) {
  const colors = [palette.blue, palette.periwinkle, palette.stone, 'rgba(215,215,215,.30)'];
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} dataKey="value" innerRadius={58} outerRadius={92} paddingAngle={3}>
            {data.map((entry, index) => <Cell key={entry.name} fill={colors[index % colors.length]} />)}
          </Pie>
          <Tooltip contentStyle={chartTooltip()} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

function FlowChart({ data }) {
  return (
    <div className="h-56 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
          <defs><linearGradient id="flowFill" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={palette.periwinkle} stopOpacity={0.48}/><stop offset="95%" stopColor={palette.blue} stopOpacity={0.04}/></linearGradient></defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
          <XAxis dataKey="name" tick={{ fill: 'rgba(215,215,215,.58)', fontSize: 11 }} />
          <YAxis domain={[0, 100]} tick={{ fill: 'rgba(215,215,215,.38)', fontSize: 10 }} />
          <Tooltip contentStyle={chartTooltip()} />
          <Area type="monotone" dataKey="value" stroke={palette.periwinkle} fill="url(#flowFill)" strokeWidth={3} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

function ScatterMap({ data }) {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ScatterChart margin={{ top: 12, right: 12, bottom: 8, left: -12 }}>
          <CartesianGrid stroke="rgba(255,255,255,.08)" />
          <XAxis type="number" dataKey="x" name="Profile" domain={[0, 100]} tick={{ fill: 'rgba(215,215,215,.42)', fontSize: 10 }} />
          <YAxis type="number" dataKey="y" name="Lens" domain={[0, 100]} tick={{ fill: 'rgba(215,215,215,.42)', fontSize: 10 }} />
          <Tooltip cursor={{ strokeDasharray: '3 3' }} contentStyle={chartTooltip()} />
          <Scatter data={data} name="Signal map">
            {data.map((entry) => <Cell key={entry.name} fill={entry.fill} />)}
          </Scatter>
        </ScatterChart>
      </ResponsiveContainer>
    </div>
  );
}

function LensVisualWorkspace({ lens, profile }) {
  const { factors, signal, states, flow, scatter } = useLensData(profile, lens);
  const group = groups[profile.group] || groups.Analytical;
  const outputs = lens.outputs || [];
  const managerUse = lens.managerUse || [];
  const misreads = lens.misreadRisks || [];

  return (
    <main className="grid gap-5 pb-6">
      <ProfileHeader profile={profile} setProfile={() => {}} />
      <div className="grid gap-5 xl:grid-cols-12">
        <Card className="xl:col-span-8 overflow-hidden p-5">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <div className="mb-2 flex flex-wrap gap-2"><Pill>{lens.category}</Pill><Pill className={group.bg}>{profile.name}</Pill><Pill>{scoreLabel(signal)} signal</Pill></div>
              <h2 className="text-3xl font-bold tracking-tight text-white md:text-5xl">{lens.label}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-white/55">{lens.summary}</p>
            </div>
          </div>
          <GlowingBrain activeLens={lens} />
        </Card>
        <div className="grid gap-5 xl:col-span-4">
          <MetricTile icon={Gauge} label="Interpretation signal" value={`${signal}%`} note="How strongly the selected profile shape aligns with this lens emphasis." />
          <MetricTile icon={Radar} label="Dominant profile factor" value={Object.entries(profile.scores).sort((a,b)=>b[1]-a[1])[0][0]} note="Highest PI-style factor currently shaping the selected profile." />
        </div>
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <Card className="p-5 xl:col-span-4"><h3 className="mb-2 flex items-center gap-2 font-semibold text-white"><Gauge size={18}/> Confidence ring</h3><ConfidenceRing signal={signal} /></Card>
        <Card className="p-5 xl:col-span-4"><h3 className="mb-2 flex items-center gap-2 font-semibold text-white"><Activity size={18}/> Known / estimated / unknown</h3><StateDonut data={states} /><div className="flex flex-wrap justify-center gap-2">{states.map((item)=><Pill key={item.name}>{item.name}: {item.value}</Pill>)}</div></Card>
        <Card className="p-5 xl:col-span-4"><h3 className="mb-2 flex items-center gap-2 font-semibold text-white"><WorkflowIcon/> Reasoning flow</h3><FlowChart data={flow} /></Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <Card className="p-5 xl:col-span-6"><h3 className="mb-2 flex items-center gap-2 font-semibold text-white"><Radar size={18}/> Profile vs lens shape</h3><FactorRadar data={factors} /></Card>
        <Card className="p-5 xl:col-span-6"><h3 className="mb-2 flex items-center gap-2 font-semibold text-white"><GitCompare size={18}/> Factor bridge</h3><FactorBars data={factors} /></Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-12">
        <Card className="p-5 xl:col-span-5"><h3 className="mb-2 flex items-center gap-2 font-semibold text-white"><Network size={18}/> Signal map</h3><ScatterMap data={scatter} /></Card>
        <Card className="p-5 xl:col-span-7">
          <h3 className="mb-4 flex items-center gap-2 font-semibold text-white"><Layers3 size={18}/> Lens output map</h3>
          <div className="grid gap-3 md:grid-cols-2">
            {outputs.map((output, index) => (
              <div key={output} className="rounded-2xl border border-white/10 bg-[#090D1D]/45 p-4">
                <div className="flex items-center justify-between gap-2"><span className="text-sm font-semibold text-white">{output}</span><span className="text-xs text-white/38">#{index + 1}</span></div>
                <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-[#8597C6]" style={{ width: `${Math.min(94, 42 + index * 11 + signal * 0.2)}%` }} /></div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid gap-5 xl:grid-cols-3">
        <GuidanceCard title="Manager use" icon={Compass} items={managerUse} />
        <GuidanceCard title="Misread risks" icon={AlertTriangle} items={misreads} />
        <GuidanceCard title="What it means" icon={Lightbulb} items={[lens.means, lens.doesNotMean].filter(Boolean)} />
      </div>
    </main>
  );
}

function WorkflowIcon() { return <ArrowRight size={18} />; }

function GuidanceCard({ title, icon: Icon, items }) {
  return (
    <Card className="p-5">
      <h3 className="mb-4 flex items-center gap-2 font-semibold text-white"><Icon size={18} /> {title}</h3>
      <div className="grid gap-2">
        {(items || []).map((item, index) => (
          <div key={`${title}-${index}`} className="rounded-2xl border border-white/10 bg-[#090D1D]/45 p-3 text-sm leading-5 text-white/62">{item}</div>
        ))}
      </div>
    </Card>
  );
}

export default function VisualLensWorkspace() {
  const [activeLens, setActiveLens] = useState(allLenses[0]);
  const [profile, setProfile] = useState(profiles[0]);

  return (
    <div className="min-h-screen bg-[#090D1D] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[-8rem] top-0 h-[28rem] w-[28rem] rounded-full bg-[#195899]/30 blur-3xl" />
        <div className="absolute right-[-6rem] top-[12rem] h-[34rem] w-[34rem] rounded-full bg-[#8597C6]/18 blur-3xl" />
        <div className="absolute bottom-[-12rem] left-1/3 h-[30rem] w-[30rem] rounded-full bg-[#BCB6BC]/10 blur-3xl" />
      </div>
      <div className="relative grid gap-5 p-4 lg:grid-cols-[21rem_minmax(0,1fr)]">
        <LensSidebar activeLens={activeLens} setActiveLens={setActiveLens} />
        <div className="min-w-0">
          <div className="mb-5"><ProfileHeader profile={profile} setProfile={setProfile} /></div>
          <LensVisualWorkspace lens={activeLens} profile={profile} />
        </div>
      </div>
    </div>
  );
}
