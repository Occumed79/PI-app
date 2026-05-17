import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Brain,
  CheckCircle2,
  ClipboardList,
  Compass,
  Eye,
  FileText,
  Gauge,
  Layers3,
  Lock,
  ShieldCheck,
  Target,
  UserRound,
} from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { allLenses } from '../data/lenses.js';
import { groups, profiles } from '../data/profiles.js';

const lensStateOptions = [
  { id: 'include', label: 'Include', short: 'Used', tone: 'border-emerald-300/30 bg-emerald-500/10 text-emerald-100' },
  { id: 'estimated', label: 'Estimated', short: 'Est.', tone: 'border-sky-300/30 bg-sky-500/10 text-sky-100' },
  { id: 'unknown', label: 'Unknown', short: 'Unknown', tone: 'border-amber-300/30 bg-amber-500/10 text-amber-100' },
  { id: 'exclude', label: 'Exclude', short: 'Off', tone: 'border-white/10 bg-white/[0.04] text-white/45' },
];

const subFactorStates = [
  { id: 'known', label: 'Known', tone: 'border-emerald-300/30 bg-emerald-500/10 text-emerald-100' },
  { id: 'estimated', label: 'Estimated', tone: 'border-sky-300/30 bg-sky-500/10 text-sky-100' },
  { id: 'unknown', label: 'Unknown', tone: 'border-amber-300/30 bg-amber-500/10 text-amber-100' },
  { id: 'na', label: 'N/A', tone: 'border-violet-300/25 bg-violet-500/10 text-violet-100' },
  { id: 'exclude', label: 'Exclude', tone: 'border-white/10 bg-white/[0.04] text-white/45' },
];

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
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

function statusTone(status) {
  return lensStateOptions.find((option) => option.id === status)?.tone || lensStateOptions[2].tone;
}

function subTone(status) {
  return subFactorStates.find((option) => option.id === status)?.tone || subFactorStates[2].tone;
}

function makeInitialLensStates() {
  return allLenses.reduce((acc, lens, index) => {
    if (['big-five', 'disc', 'communication', 'management', 'stress', 'role-fit', 'team-fit'].includes(lens.id)) acc[lens.id] = 'include';
    else if (['cognitive-processing', 'executive-function', 'motivation', 'learning-style', 'neurodiversity'].includes(lens.id)) acc[lens.id] = 'estimated';
    else if (index < 14) acc[lens.id] = 'unknown';
    else acc[lens.id] = 'exclude';
    return acc;
  }, {});
}

function makeInitialSubFactors() {
  const state = {};
  allLenses.forEach((lens) => {
    (lens.outputs || []).forEach((output, index) => {
      state[`${lens.id}::${output}`] = index < 2 ? 'estimated' : 'unknown';
    });
  });
  return state;
}

function countValues(values, keys) {
  return keys.map((key) => ({ name: key, value: values.filter((value) => value === key).length }));
}

function ProfileRadar({ profile }) {
  const data = Object.entries(profile.scores).map(([factor, value]) => ({ factor, value }));
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data}>
          <PolarGrid stroke="rgba(255,255,255,.14)" />
          <PolarAngleAxis dataKey="factor" tick={{ fill: 'rgba(255,255,255,.62)', fontSize: 12 }} />
          <Radar dataKey="value" stroke="rgba(125,211,252,.95)" fill="rgba(125,211,252,.2)" fillOpacity={0.85} />
          <Tooltip contentStyle={{ background: 'rgba(15,23,42,.95)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, color: '#fff' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function StatusBars({ lensStates, factorStates }) {
  const lensData = countValues(Object.values(lensStates), ['include', 'estimated', 'unknown', 'exclude']);
  const factorData = countValues(Object.values(factorStates), ['known', 'estimated', 'unknown', 'na', 'exclude']);
  const data = [...lensData.map((item) => ({ type: 'Lens', ...item })), ...factorData.map((item) => ({ type: 'Sub-factor', ...item }))];
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
          <XAxis dataKey="name" tick={{ fill: 'rgba(255,255,255,.58)', fontSize: 11 }} />
          <YAxis allowDecimals={false} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
          <Tooltip contentStyle={{ background: 'rgba(15,23,42,.95)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, color: '#fff' }} />
          <Bar dataKey="value" radius={[10, 10, 4, 4]} fill="rgba(217,70,239,.78)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function TextInput({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/60">{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-sky-300/40" />
    </label>
  );
}

export default function EmployeeBuilder() {
  const [employee, setEmployee] = useState({ name: 'Working Profile A', role: 'Operations / leadership role', department: 'Team or department', notes: '' });
  const [baseProfileName, setBaseProfileName] = useState('Analyzer');
  const [lensStates, setLensStates] = useState(makeInitialLensStates);
  const [factorStates, setFactorStates] = useState(makeInitialSubFactors);
  const [activeLensId, setActiveLensId] = useState('big-five');

  const baseProfile = profiles.find((profile) => profile.name === baseProfileName) || profiles[0];
  const activeLens = allLenses.find((lens) => lens.id === activeLensId) || allLenses[0];
  const group = groups[baseProfile.group];

  const stats = useMemo(() => {
    const lensValues = Object.values(lensStates);
    const factorValues = Object.values(factorStates);
    const included = lensValues.filter((value) => value === 'include').length;
    const estimated = lensValues.filter((value) => value === 'estimated').length;
    const unknown = lensValues.filter((value) => value === 'unknown').length;
    const knownFactors = factorValues.filter((value) => value === 'known').length;
    const estimatedFactors = factorValues.filter((value) => value === 'estimated').length;
    const unknownFactors = factorValues.filter((value) => value === 'unknown').length;
    const usableSignals = included + estimated * 0.65 + knownFactors * 0.15 + estimatedFactors * 0.08;
    const uncertaintyLoad = unknown + unknownFactors * 0.08;
    const confidence = Math.max(12, Math.min(92, Math.round(35 + usableSignals * 2.5 - uncertaintyLoad * 1.2)));
    return { included, estimated, unknown, knownFactors, estimatedFactors, unknownFactors, confidence };
  }, [lensStates, factorStates]);

  const selectedLenses = allLenses.filter((lens) => ['include', 'estimated'].includes(lensStates[lens.id]));
  const unknownLenses = allLenses.filter((lens) => lensStates[lens.id] === 'unknown');
  const excludedLenses = allLenses.filter((lens) => lensStates[lens.id] === 'exclude');

  function updateEmployee(field, value) {
    setEmployee((current) => ({ ...current, [field]: value }));
  }

  function updateLensState(lensId, value) {
    setLensStates((current) => ({ ...current, [lensId]: value }));
  }

  function updateFactorState(output, value) {
    setFactorStates((current) => ({ ...current, [`${activeLens.id}::${output}`]: value }));
  }

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-12 overflow-hidden">
        <div className="relative p-6">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-3 flex flex-wrap gap-2">
                <Pill>Custom Employee Profile</Pill>
                <Pill>Known / Estimated / Unknown</Pill>
                <Pill>Support-first</Pill>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Employee Profile Builder</h2>
              <p className="mt-4 max-w-4xl text-sm leading-6 text-white/65">
                Build a working employee profile by selecting which inference lenses apply, which sub-factors are known or estimated, and which information should remain unknown or excluded.
              </p>
            </div>
            <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-black/25 p-5">
              <div className="text-sm text-white/50">Profile confidence</div>
              <div className="mt-2 text-5xl font-bold text-white">{stats.confidence}%</div>
              <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-white/70" style={{ width: `${stats.confidence}%` }} /></div>
              <p className="mt-3 text-xs leading-5 text-white/50">Confidence rises with known and included inputs. Unknowns stay visible instead of being silently guessed.</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-5">
        <div className="p-6">
          <SectionTitle icon={UserRound} title="1. Employee Basics" subtitle="Use an alias if this is exploratory. Sensitive context should never be forced." />
          <div className="grid gap-4">
            <TextInput label="Employee name or alias" value={employee.name} onChange={(value) => updateEmployee('name', value)} placeholder="Employee A" />
            <TextInput label="Role / job title" value={employee.role} onChange={(value) => updateEmployee('role', value)} placeholder="Role" />
            <TextInput label="Department / team" value={employee.department} onChange={(value) => updateEmployee('department', value)} placeholder="Team" />
            <label className="block">
              <span className="mb-2 block text-sm text-white/60">Base PI-style profile</span>
              <select value={baseProfileName} onChange={(event) => setBaseProfileName(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-300/40">
                {profiles.map((profile) => <option key={profile.name} value={profile.name}>{profile.name}</option>)}
              </select>
            </label>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-7">
        <div className="p-6">
          <SectionTitle icon={Brain} title="Base Profile Signal" subtitle="The selected PI-style profile remains the center of the working profile." />
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <Pill className={cx(group.bg, group.border)}>{baseProfile.group}</Pill>
              <h3 className="mt-3 text-3xl font-bold text-white">{baseProfile.name}</h3>
              <p className="mt-3 text-sm leading-6 text-white/60">{baseProfile.short}</p>
              <div className="mt-4 grid grid-cols-2 gap-2">
                {Object.entries(baseProfile.scores).map(([factor, score]) => (
                  <div key={factor} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                    <div className="text-xs text-white/45">{factor}</div>
                    <div className="mt-1 text-lg font-semibold text-white">{score}</div>
                  </div>
                ))}
              </div>
            </div>
            <ProfileRadar profile={baseProfile} />
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-12">
        <div className="p-6">
          <SectionTitle icon={Layers3} title="2. Lens Inclusion Matrix" subtitle="Every lens is visible. Choose whether it is included, estimated, unknown, or excluded for this specific employee profile." />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {allLenses.map((lens) => {
              const state = lensStates[lens.id] || 'unknown';
              const active = activeLens.id === lens.id;
              return (
                <div key={lens.id} className={cx('rounded-3xl border p-4 transition', active ? 'border-sky-300/40 bg-sky-500/10' : 'border-white/10 bg-black/20')}>
                  <button type="button" onClick={() => setActiveLensId(lens.id)} className="block w-full text-left">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-sm font-semibold text-white">{lens.label}</div>
                        <div className="mt-1 text-xs text-white/45">{lens.category}</div>
                      </div>
                      <Pill className={statusTone(state)}>{lensStateOptions.find((option) => option.id === state)?.short || state}</Pill>
                    </div>
                    <p className="mt-3 line-clamp-2 text-xs leading-5 text-white/55">{lens.summary}</p>
                  </button>
                  <div className="mt-3 grid grid-cols-4 gap-1">
                    {lensStateOptions.map((option) => (
                      <button key={option.id} type="button" onClick={() => updateLensState(lens.id, option.id)} className={cx('rounded-xl border px-2 py-1.5 text-[11px] transition', state === option.id ? option.tone : 'border-white/10 bg-white/[0.03] text-white/35 hover:bg-white/10')}>
                        {option.short}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-7">
        <div className="p-6">
          <SectionTitle icon={ClipboardList} title={`3. Sub-Factors: ${activeLens.label}`} subtitle="Mark each output as known, estimated, unknown, not applicable, or excluded. Unknown remains a valid answer." />
          <div className="grid gap-3">
            {(activeLens.outputs || []).map((output) => {
              const state = factorStates[`${activeLens.id}::${output}`] || 'unknown';
              return (
                <div key={output} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <div className="font-semibold text-white">{output}</div>
                      <div className="mt-1 text-xs text-white/45">Current state: {state}</div>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {subFactorStates.map((option) => (
                        <button key={option.id} type="button" onClick={() => updateFactorState(output, option.id)} className={cx('rounded-xl border px-2.5 py-1.5 text-xs transition', state === option.id ? option.tone : 'border-white/10 bg-white/[0.03] text-white/35 hover:bg-white/10')}>
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-5">
        <div className="p-6">
          <SectionTitle icon={Gauge} title="Known / Estimated / Unknown Breakdown" subtitle="A visual audit trail of how complete this working profile is." />
          <StatusBars lensStates={lensStates} factorStates={factorStates} />
        </div>
      </Card>

      <Card className="lg:col-span-12">
        <div className="p-6">
          <SectionTitle icon={FileText} title="4. Generated Working Profile" subtitle="The output separates included, estimated, unknown, and excluded information so the user can see exactly what the app is using." />
          <div className="grid gap-4 lg:grid-cols-4">
            <div className="rounded-3xl border border-white/10 bg-white/[0.055] p-5"><div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/35"><CheckCircle2 size={14} /> Included</div><div className="text-3xl font-bold text-white">{selectedLenses.length}</div><p className="mt-2 text-sm leading-6 text-white/60">Lenses directly used in the working profile.</p></div>
            <div className="rounded-3xl border border-sky-300/20 bg-sky-500/10 p-5"><div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/45"><Eye size={14} /> Estimated</div><div className="text-3xl font-bold text-white">{stats.estimated}</div><p className="mt-2 text-sm leading-6 text-white/60">Lenses used cautiously as estimates.</p></div>
            <div className="rounded-3xl border border-amber-300/20 bg-amber-500/10 p-5"><div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/45"><AlertTriangle size={14} /> Unknown</div><div className="text-3xl font-bold text-white">{unknownLenses.length}</div><p className="mt-2 text-sm leading-6 text-white/60">Unknowns stay visible instead of being invented.</p></div>
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5"><div className="mb-2 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-white/35"><Lock size={14} /> Excluded</div><div className="text-3xl font-bold text-white">{excludedLenses.length}</div><p className="mt-2 text-sm leading-6 text-white/60">Excluded lenses are not factored in.</p></div>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5"><h3 className="font-semibold text-white">Profile narrative</h3><p className="mt-2 text-sm leading-6 text-white/62">{employee.name || 'This employee'} is modeled as a {baseProfile.name} base profile in {employee.role || 'the selected role'}. The working profile includes {selectedLenses.length} lenses, estimates {stats.estimated} lenses, and preserves {unknownLenses.length} unknown lens areas.</p></div>
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5"><h3 className="font-semibold text-white">Manager guidance</h3><p className="mt-2 text-sm leading-6 text-white/62">Start with the base profile needs: {baseProfile.needs.join(', ').toLowerCase()}. Use included lenses for stronger guidance. Treat estimated lenses as conversation starters only.</p></div>
            <div className="rounded-3xl border border-white/10 bg-black/20 p-5"><h3 className="font-semibold text-white">Ethical limitation</h3><p className="mt-2 text-sm leading-6 text-white/62">This is a support-first working profile. It is not a formal assessment, diagnosis, or automated decision rule.</p></div>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-12 border-amber-300/20 bg-amber-500/5">
        <div className="p-6">
          <SectionTitle icon={ShieldCheck} title="Guardrail: Estimates Must Stay Visible" subtitle="The builder is designed so unknowns and estimates remain explicit. This prevents the profile from pretending to know things it does not know." />
          <div className="grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm leading-6 text-white/65"><Target className="mb-2 h-5 w-5 text-white/70" />Use this to organize support, communication, role fit, and manager guidance.</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm leading-6 text-white/65"><AlertTriangle className="mb-2 h-5 w-5 text-white/70" />Do not force sensitive personal context into the profile. Unknown is a legitimate state.</div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm leading-6 text-white/65"><Compass className="mb-2 h-5 w-5 text-white/70" />Use the profile as a conversation and support tool, not as a final judgment.</div>
          </div>
        </div>
      </Card>
    </div>
  );
}
