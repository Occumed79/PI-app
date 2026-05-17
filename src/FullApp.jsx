import React, { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Activity,
  AlertTriangle,
  BarChart3,
  Brain,
  Compass,
  FileText,
  Gauge,
  GitCompare,
  Info,
  Layers3,
  Lightbulb,
  Network,
  Puzzle,
  Search,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import LensExplorer from './components/LensExplorer.jsx';
import { allLenses } from './data/lenses.js';
import { groups, profiles } from './data/profiles.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function scoreLabel(value) {
  if (value >= 76) return 'High';
  if (value >= 45) return 'Moderate';
  return 'Low';
}

function Card({ children, className = '' }) {
  return <div className={cx('rounded-3xl border border-white/10 bg-white/[0.07] shadow-2xl shadow-black/20 backdrop-blur-xl', className)}>{children}</div>;
}

function Pill({ children, className = '' }) {
  return <span className={cx('inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80', className)}>{children}</span>;
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-2 text-white shadow-lg"><Icon size={20} /></div>
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
        {subtitle && <p className="mt-1 max-w-4xl text-sm leading-6 text-white/60">{subtitle}</p>}
      </div>
    </div>
  );
}

function SelectProfile({ selectedProfile, setSelectedProfile }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/60">Selected profile</span>
      <select
        value={selectedProfile.name}
        onChange={(event) => setSelectedProfile(profiles.find((profile) => profile.name === event.target.value) || selectedProfile)}
        className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-300/40"
      >
        {profiles.map((profile) => <option key={profile.name} value={profile.name}>{profile.name}</option>)}
      </select>
    </label>
  );
}

function FactorRadar({ profile }) {
  const data = Object.entries(profile.scores).map(([factor, value]) => ({ factor, value }));
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(255,255,255,.14)" />
          <PolarAngleAxis dataKey="factor" tick={{ fill: 'rgba(255,255,255,.62)', fontSize: 12 }} />
          <Radar name={profile.name} dataKey="value" stroke="rgba(217,70,239,.95)" fill="rgba(217,70,239,.23)" fillOpacity={0.8} />
          <Tooltip contentStyle={{ background: 'rgba(15,23,42,.95)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, color: '#fff' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function InsightList({ title, icon: Icon, items }) {
  return (
    <Card className="h-full bg-black/15">
      <div className="p-5">
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/90"><Icon size={18} /> {title}</h3>
        <div className="grid gap-2">
          {(items || []).map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-sm leading-5 text-white/70">{item}</div>)}
        </div>
      </div>
    </Card>
  );
}

function Dashboard({ selectedProfile, setSelectedProfile }) {
  const group = groups[selectedProfile.group];
  const lensCount = allLenses.length;
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-8 overflow-hidden">
        <div className="relative p-6">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-24 h-52 w-52 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative">
            <SectionTitle icon={Sparkles} title="Human Systems Intelligence" subtitle="A transparent multi-lens workforce interpretation system. PI-style profile data sits at the center, and each tab explains a different inference lens visually and ethically." />
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <Pill className={cx(group.bg, group.border)}>{selectedProfile.group}</Pill>
                <h3 className="mt-3 text-4xl font-bold tracking-tight text-white">{selectedProfile.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">{selectedProfile.short}</p>
                <div className="mt-5"><SelectProfile selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} /></div>
              </div>
              <FactorRadar profile={selectedProfile} />
            </div>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={Gauge} title="System Status" subtitle="The live version is now structured for visible, separate inference tabs." />
          <div className="grid gap-3">
            <div className="rounded-2xl bg-white/[0.06] p-4"><div className="text-sm text-white/50">Visible lens tabs</div><div className="mt-1 text-4xl font-bold text-white">{lensCount}</div></div>
            <div className="rounded-2xl bg-white/[0.06] p-4"><div className="text-sm text-white/50">Profile base</div><div className="mt-1 text-4xl font-bold text-white">17</div></div>
            <div className="rounded-2xl bg-white/[0.06] p-4"><div className="text-sm text-white/50">Framework</div><div className="mt-1 text-lg font-semibold text-white">Evidence-informed, not diagnostic</div></div>
          </div>
        </div>
      </Card>

      <div className="lg:col-span-12 grid gap-5 md:grid-cols-3">
        <InsightList title="Needs" icon={Puzzle} items={selectedProfile.needs} />
        <InsightList title="Strengths" icon={ShieldCheck} items={selectedProfile.strengths} />
        <InsightList title="Common Misreads" icon={AlertTriangle} items={selectedProfile.traps} />
      </div>
    </div>
  );
}

function ProfilesTab({ selectedProfile, setSelectedProfile }) {
  const [query, setQuery] = useState('');
  const filtered = profiles.filter((profile) => [profile.name, profile.group, profile.short, ...profile.needs, ...profile.strengths, ...profile.traps].join(' ').toLowerCase().includes(query.toLowerCase()));
  return (
    <Card>
      <div className="p-6">
        <SectionTitle icon={Search} title="Profile Library" subtitle="All 17 profiles remain visible as the core profile base for the inference lenses." />
        <div className="relative mb-5">
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search profile, need, strength, or risk..." className="w-full rounded-2xl border border-white/10 bg-black/25 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/35 focus:border-sky-300/40" />
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((profile) => {
            const group = groups[profile.group];
            const active = profile.name === selectedProfile.name;
            return (
              <button key={profile.name} onClick={() => setSelectedProfile(profile)} className={cx('text-left rounded-3xl border p-5 transition hover:-translate-y-0.5 hover:bg-white/[0.09]', active ? cx(group.bg, group.border) : 'border-white/10 bg-white/[0.04]')}>
                <Pill className={cx(group.bg, group.border)}>{profile.group}</Pill>
                <h3 className="mt-3 text-xl font-bold text-white">{profile.name}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{profile.short}</p>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  {Object.entries(profile.scores).map(([factor, value]) => <div key={factor} className="rounded-2xl bg-black/20 p-3"><div className="text-[11px] text-white/40">{factor}</div><div className="text-sm font-semibold text-white">{scoreLabel(value)} · {value}</div></div>)}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Card>
  );
}

function CompareTab() {
  const [leftName, setLeftName] = useState('Analyzer');
  const [rightName, setRightName] = useState('Promoter');
  const left = profiles.find((profile) => profile.name === leftName) || profiles[0];
  const right = profiles.find((profile) => profile.name === rightName) || profiles[1];
  const factors = ['Dominance', 'Extraversion', 'Patience', 'Formality'];
  const data = factors.map((factor) => ({ factor, left: left.scores[factor], right: right.scores[factor] }));
  const compatibility = Math.round(100 - factors.reduce((sum, factor) => sum + Math.abs(left.scores[factor] - right.scores[factor]), 0) / factors.length * 0.75);
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-4"><div className="p-6"><SectionTitle icon={GitCompare} title="Compare" subtitle="Compare two profiles and translate differences into manager guidance." />
        <label className="block"><span className="mb-2 block text-sm text-white/60">Profile A</span><select value={leftName} onChange={(event) => setLeftName(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white">{profiles.map((p) => <option key={p.name}>{p.name}</option>)}</select></label>
        <label className="mt-4 block"><span className="mb-2 block text-sm text-white/60">Profile B</span><select value={rightName} onChange={(event) => setRightName(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white">{profiles.map((p) => <option key={p.name}>{p.name}</option>)}</select></label>
        <div className="mt-5 rounded-3xl border border-white/10 bg-white/[0.06] p-5"><div className="text-sm text-white/50">Compatibility estimate</div><div className="mt-2 text-5xl font-bold text-white">{compatibility}%</div><p className="mt-3 text-sm leading-6 text-white/60">This is not a judgment. It shows how much management translation may be required.</p></div>
      </div></Card>
      <Card className="lg:col-span-8"><div className="p-6"><SectionTitle icon={Activity} title="Behavioral Factor Overlay" subtitle="Where the two profiles differ most, expectations must be made more explicit." /><div className="h-72"><ResponsiveContainer width="100%" height="100%"><LineChart data={data}><CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" /><XAxis dataKey="factor" tick={{ fill: 'rgba(255,255,255,.55)', fontSize: 12 }} /><YAxis domain={[0, 100]} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} /><Tooltip contentStyle={{ background: 'rgba(15,23,42,.95)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, color: '#fff' }} /><Line type="monotone" dataKey="left" name={left.name} stroke="rgba(125,211,252,.95)" strokeWidth={3} /><Line type="monotone" dataKey="right" name={right.name} stroke="rgba(217,70,239,.95)" strokeWidth={3} /></LineChart></ResponsiveContainer></div></div></Card>
    </div>
  );
}

function WhatItMeansTab() {
  const factors = [
    ['Dominance', 'Drive to influence outcomes, solve problems, make decisions, or push events forward.'],
    ['Extraversion', 'Drive for interaction, verbal processing, persuasion, and relationship energy.'],
    ['Patience', 'Drive toward consistency, stable pace, repeatability, and predictable priorities.'],
    ['Formality', 'Drive toward rules, accuracy, standards, structure, and doing things correctly.'],
  ];
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-12"><div className="p-6"><SectionTitle icon={Info} title="What It Means" subtitle="Plain-language translations for the four factors and profile groups." /><div className="grid gap-4 md:grid-cols-4">{factors.map(([name, text]) => <div key={name} className="rounded-3xl border border-white/10 bg-black/20 p-5"><h3 className="font-bold text-white">{name}</h3><p className="mt-2 text-sm leading-6 text-white/60">{text}</p></div>)}</div></div></Card>
      {Object.entries(groups).map(([name, group]) => <Card key={name} className="lg:col-span-6"><div className="p-6"><Pill className={cx(group.bg, group.border)}>{name}</Pill><h3 className="mt-3 text-2xl font-bold text-white">{name}</h3><p className="mt-3 text-sm leading-6 text-white/60">{group.summary}</p></div></Card>)}
    </div>
  );
}

function MatrixTab() {
  const factors = ['Dominance', 'Extraversion', 'Patience', 'Formality'];
  return <Card><div className="p-6"><SectionTitle icon={BarChart3} title="Score Matrix" subtitle="Compact view of all profile factor scores." /><div className="overflow-x-auto"><table className="w-full min-w-[760px] border-separate border-spacing-y-2 text-sm"><thead><tr className="text-left text-xs uppercase tracking-[0.18em] text-white/35"><th className="px-4 py-2">Profile</th><th className="px-4 py-2">Group</th>{factors.map((f) => <th key={f} className="px-4 py-2">{f}</th>)}</tr></thead><tbody>{profiles.map((profile) => <tr key={profile.name} className="bg-white/[0.04] text-white/70"><td className="rounded-l-2xl px-4 py-3 font-semibold text-white">{profile.name}</td><td className="px-4 py-3">{profile.group}</td>{factors.map((f) => <td key={f} className="px-4 py-3"><div className="font-semibold text-white">{profile.scores[f]}</div><div className="text-xs text-white/40">{scoreLabel(profile.scores[f])}</div></td>)}<td className="rounded-r-2xl" /></tr>)}</tbody></table></div></div></Card>;
}

function StrengthMapTab() {
  return <div className="grid gap-5 md:grid-cols-2">{Object.entries(groups).map(([name, group]) => <Card key={name}><div className="p-6"><Pill className={cx(group.bg, group.border)}>{name}</Pill><h3 className="mt-3 text-2xl font-bold text-white">{name} Strength Map</h3><p className="mt-2 text-sm leading-6 text-white/60">{group.summary}</p><div className="mt-4 grid gap-2">{profiles.filter((p) => p.group === name).map((p) => <div key={p.name} className="rounded-2xl border border-white/10 bg-black/20 p-3"><div className="font-semibold text-white">{p.name}</div><div className="text-xs text-white/50">{p.strengths.join(' · ')}</div></div>)}</div></div></Card>)}</div>;
}

function SummaryTab() {
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-12"><div className="p-6"><SectionTitle icon={FileText} title="Executive Summary" subtitle="This is the transparent overview Andy can scan quickly before opening the detailed lens tabs." /><div className="grid gap-4 md:grid-cols-4"><div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"><div className="text-sm text-white/50">Profiles</div><div className="text-4xl font-bold text-white">17</div></div><div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"><div className="text-sm text-white/50">Lens tabs</div><div className="text-4xl font-bold text-white">{allLenses.length}</div></div><div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"><div className="text-sm text-white/50">Architecture</div><div className="text-lg font-bold text-white">PI-centered</div></div><div className="rounded-3xl border border-white/10 bg-white/[0.06] p-5"><div className="text-sm text-white/50">Ethics</div><div className="text-lg font-bold text-white">Support-first</div></div></div></div></Card>
      <Card className="lg:col-span-12"><div className="p-6"><SectionTitle icon={ShieldCheck} title="Core Guardrail" subtitle="The system shows transparent inference logic. It does not diagnose, score protected traits, or replace direct employee conversation." /></div></Card>
    </div>
  );
}

const baseTabs = [
  { id: 'dashboard', label: 'Dashboard', icon: Gauge, type: 'core' },
  { id: 'profiles', label: 'Profiles', icon: Users, type: 'core' },
  { id: 'compare', label: 'Compare', icon: GitCompare, type: 'core' },
  { id: 'whatif', label: 'What-if', icon: Lightbulb, type: 'core' },
  { id: 'meaning', label: 'What It Means', icon: Info, type: 'core' },
  { id: 'summary', label: 'Summary', icon: FileText, type: 'executive' },
  { id: 'matrix', label: 'Score Matrix', icon: BarChart3, type: 'executive' },
  { id: 'brain', label: 'Strength Map', icon: Brain, type: 'executive' },
];

const lensTabs = allLenses.map((lens) => ({ id: `lens-${lens.id}`, label: lens.label, icon: Layers3, type: lens.category, lens }));
const tabs = [...baseTabs, ...lensTabs];

export default function FullApp() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
  const activeTabMeta = tabs.find((tab) => tab.id === activeTab) || tabs[0];
  const ActiveIcon = activeTabMeta.icon;
  const groupedTabs = useMemo(() => {
    return tabs.reduce((acc, tab) => {
      const group = tab.type || 'Other';
      if (!acc[group]) acc[group] = [];
      acc[group].push(tab);
      return acc;
    }, {});
  }, []);

  function renderActiveTab() {
    if (activeTab === 'dashboard') return <Dashboard selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} />;
    if (activeTab === 'profiles') return <ProfilesTab selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} />;
    if (activeTab === 'compare') return <CompareTab />;
    if (activeTab === 'whatif') return <LensExplorer lens={allLenses.find((lens) => lens.id === 'stress') || allLenses[0]} selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} profiles={profiles} />;
    if (activeTab === 'meaning') return <WhatItMeansTab />;
    if (activeTab === 'summary') return <SummaryTab />;
    if (activeTab === 'matrix') return <MatrixTab />;
    if (activeTab === 'brain') return <StrengthMapTab />;
    if (activeTabMeta.lens) return <LensExplorer lens={activeTabMeta.lens} selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} profiles={profiles} />;
    return <Dashboard selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} />;
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-[96rem] px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3"><div className="rounded-2xl border border-white/10 bg-white/10 p-2"><ActiveIcon className="h-6 w-6" /></div><Pill>Transparent Multi-Lens Intelligence Tool</Pill></div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Human Systems Intelligence</h1>
              <p className="mt-3 max-w-4xl text-sm leading-6 text-white/62">Every inference system is visible as its own tab. Each lens explains what is inferred, why it is inferred, what it means, what it does not mean, and how a manager should use it supportively.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-black/20 p-4"><div className="text-xs uppercase tracking-[0.2em] text-white/40">Current view</div><div className="mt-2 text-2xl font-bold text-white">{activeTabMeta.label}</div><div className="mt-2 text-sm text-white/50">Selected profile: {selectedProfile.name}</div></div>
          </div>
          <div className="mt-6 grid gap-4">
            {Object.entries(groupedTabs).map(([group, groupTabs]) => (
              <div key={group}>
                <div className="mb-2 text-xs uppercase tracking-[0.18em] text-white/35">{group}</div>
                <nav className="flex gap-2 overflow-x-auto pb-1">
                  {groupTabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return <button key={tab.id} type="button" onClick={() => setActiveTab(tab.id)} className={cx('flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm transition', isActive ? 'border-white/30 bg-white/20 text-white shadow-lg shadow-black/20' : 'border-white/10 bg-white/[0.04] text-white/60 hover:bg-white/10 hover:text-white')}><Icon className="h-4 w-4" />{tab.label}</button>;
                  })}
                </nav>
              </div>
            ))}
          </div>
        </header>
        <AnimatePresence mode="wait">
          <motion.main key={activeTab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.18 }}>
            {renderActiveTab()}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
