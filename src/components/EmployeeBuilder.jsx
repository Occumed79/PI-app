import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  Brain,
  CheckCircle2,
  ClipboardList,
  Compass,
  Download,
  FileText,
  Gauge,
  Layers3,
  Save,
  ShieldCheck,
  Trash2,
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
import { signalGlassStaticLenses } from '../data/signalGlassStaticLenses.js';
import { groups, profiles } from '../data/appProfiles.js';
import {
  loadSavedProfiles,
  makeProfileId,
  normalizeSavedProfile,
  saveProfilesToStorage,
} from '../data/savedProfiles.js';

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
  return signalGlassStaticLenses.reduce((acc, lens, index) => {
    if (index < 12) acc[lens.id] = 'include';
    else if (index < 32) acc[lens.id] = 'estimated';
    else if (index < 72) acc[lens.id] = 'unknown';
    else acc[lens.id] = 'exclude';
    return acc;
  }, {});
}

function makeInitialSubFactors() {
  const state = {};
  const defaultOutputs = ['Profile mapping', 'Stress signal', 'Manager guidance', 'Development note'];
  signalGlassStaticLenses.forEach((lens) => {
    defaultOutputs.forEach((output, index) => {
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

function TextArea({ label, value, onChange, placeholder }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/60">{label}</span>
      <textarea value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} rows={4} className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/35 focus:border-sky-300/40" />
    </label>
  );
}

function lensSummary(lens) {
  const source = lens.source ? `Source: ${lens.source}` : 'Uploaded source lens';
  const status = lens.status ? `Status: ${lens.status}` : 'Status not specified';
  return `${source} · ${status}`;
}

export default function EmployeeBuilder() {
  const [employee, setEmployee] = useState({ name: 'Working Profile A', role: 'Operations / leadership role', department: 'Team or department', notes: '' });
  const [baseProfileName, setBaseProfileName] = useState('Analyzer');
  const [lensStates, setLensStates] = useState(makeInitialLensStates);
  const [factorStates, setFactorStates] = useState(makeInitialSubFactors);
  const [activeLensId, setActiveLensId] = useState(signalGlassStaticLenses[0]?.id || '');
  const [savedProfiles, setSavedProfiles] = useState(loadSavedProfiles);
  const [activeSavedId, setActiveSavedId] = useState(null);
  const [saveNotice, setSaveNotice] = useState('');

  const baseProfile = profiles.find((profile) => profile.name === baseProfileName) || profiles[0];
  const activeLens = signalGlassStaticLenses.find((lens) => lens.id === activeLensId) || signalGlassStaticLenses[0];
  const group = groups[baseProfile.group] || groups.Analytical;

  const stats = useMemo(() => {
    const lensValues = Object.values(lensStates);
    const factorValues = Object.values(factorStates);
    const included = lensValues.filter((value) => value === 'include').length;
    const estimated = lensValues.filter((value) => value === 'estimated').length;
    const unknown = lensValues.filter((value) => value === 'unknown').length;
    const excluded = lensValues.filter((value) => value === 'exclude').length;
    const knownFactors = factorValues.filter((value) => value === 'known').length;
    const estimatedFactors = factorValues.filter((value) => value === 'estimated').length;
    const unknownFactors = factorValues.filter((value) => value === 'unknown').length;
    const usableSignals = included + estimated * 0.65 + knownFactors * 0.15 + estimatedFactors * 0.08;
    const uncertaintyLoad = unknown + unknownFactors * 0.08;
    const confidence = Math.max(12, Math.min(92, Math.round(35 + usableSignals * 1.2 - uncertaintyLoad * 0.35)));
    return { included, estimated, unknown, excluded, knownFactors, estimatedFactors, unknownFactors, confidence };
  }, [lensStates, factorStates]);

  const selectedLenses = signalGlassStaticLenses.filter((lens) => ['include', 'estimated'].includes(lensStates[lens.id]));
  const unknownLenses = signalGlassStaticLenses.filter((lens) => lensStates[lens.id] === 'unknown');
  const excludedLenses = signalGlassStaticLenses.filter((lens) => lensStates[lens.id] === 'exclude');
  const activeLensSubFactors = ['Profile mapping', 'Stress signal', 'Manager guidance', 'Development note'];

  function updateEmployee(field, value) {
    setEmployee((current) => ({ ...current, [field]: value }));
  }

  function updateLensState(lensId, value) {
    setLensStates((current) => ({ ...current, [lensId]: value }));
  }

  function updateFactorState(output, value) {
    setFactorStates((current) => ({ ...current, [`${activeLens.id}::${output}`]: value }));
  }

  function saveCurrentProfile() {
    const normalized = normalizeSavedProfile({
      id: activeSavedId || makeProfileId(),
      employee,
      baseProfileName,
      lensStates,
      factorStates,
    });
    const next = [normalized, ...savedProfiles.filter((profile) => profile.id !== normalized.id)];
    setSavedProfiles(next);
    saveProfilesToStorage(next);
    setActiveSavedId(normalized.id);
    setSaveNotice(`Saved ${normalized.employee.name}`);
  }

  function loadProfile(profile) {
    setEmployee(profile.employee);
    setBaseProfileName(profile.baseProfileName);
    setLensStates({ ...makeInitialLensStates(), ...(profile.lensStates || {}) });
    setFactorStates({ ...makeInitialSubFactors(), ...(profile.factorStates || {}) });
    setActiveSavedId(profile.id);
    setSaveNotice(`Loaded ${profile.employee.name}`);
  }

  function deleteProfile(profileId) {
    const next = savedProfiles.filter((profile) => profile.id !== profileId);
    setSavedProfiles(next);
    saveProfilesToStorage(next);
    if (activeSavedId === profileId) setActiveSavedId(null);
    setSaveNotice('Deleted saved profile');
  }

  function exportCurrentProfile() {
    const payload = normalizeSavedProfile({ employee, baseProfileName, lensStates, factorStates });
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${employee.name || 'employee-profile'}.json`.replace(/[^a-z0-9._-]+/gi, '_');
    a.click();
    URL.revokeObjectURL(url);
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
                <Pill>Saved Employee Profiles</Pill>
                <Pill>{signalGlassStaticLenses.length} uploaded lenses</Pill>
                <Pill>Known / Estimated / Unknown</Pill>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Employee Profile Builder</h2>
              <p className="mt-4 max-w-4xl text-sm leading-6 text-white/65">
                Build, save, reload, and export a working employee profile using the uploaded SignalGlass lens library. This no longer uses the old placeholder lens catalog.
              </p>
            </div>
            <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-black/25 p-5">
              <div className="text-sm text-white/50">Profile confidence</div>
              <div className="mt-2 text-5xl font-bold text-white">{stats.confidence}%</div>
              <div className="mt-3 h-2 rounded-full bg-white/10"><div className="h-2 rounded-full bg-white/70" style={{ width: `${stats.confidence}%` }} /></div>
              <p className="mt-3 text-xs leading-5 text-white/50">Confidence rises with included and estimated inputs. Unknowns remain visible instead of being silently guessed.</p>
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
            <TextArea label="Notes" value={employee.notes} onChange={(value) => updateEmployee('notes', value)} placeholder="Optional notes, observations, role context, or manager concerns." />
            <div className="grid gap-3 sm:grid-cols-2">
              <button type="button" onClick={saveCurrentProfile} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300/30 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-500/25">
                <Save className="h-4 w-4" /> Save profile
              </button>
              <button type="button" onClick={exportCurrentProfile} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-300/30 bg-sky-500/15 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-500/25">
                <Download className="h-4 w-4" /> Export JSON
              </button>
            </div>
            {saveNotice && <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/65">{saveNotice}</div>}
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
              <div className="mt-4 grid gap-2">
                {baseProfile.needs.map((need) => <div key={need} className="rounded-2xl border border-white/10 bg-black/20 p-3 text-sm text-white/65">{need}</div>)}
              </div>
            </div>
            <ProfileRadar profile={baseProfile} />
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={FileText} title="Saved Profiles" subtitle="Profiles are saved in this browser using local storage." />
          <div className="grid gap-3">
            {savedProfiles.length === 0 && <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/45">No saved profiles yet. Fill out the builder and click Save profile.</div>}
            {savedProfiles.map((profile) => (
              <div key={profile.id} className={cx('rounded-2xl border bg-black/20 p-4', activeSavedId === profile.id ? 'border-emerald-300/30' : 'border-white/10')}>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="font-semibold text-white">{profile.employee.name}</div>
                    <div className="mt-1 text-xs text-white/45">{profile.baseProfileName} · {profile.employee.role || 'No role'}</div>
                    <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/30">Updated {new Date(profile.updatedAt).toLocaleString()}</div>
                  </div>
                  <button type="button" onClick={() => deleteProfile(profile.id)} className="rounded-xl border border-red-300/20 bg-red-500/10 p-2 text-red-100 hover:bg-red-500/20" title="Delete saved profile">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <button type="button" onClick={() => loadProfile(profile)} className="mt-3 w-full rounded-xl border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-semibold text-white/75 hover:bg-white/10">Load this profile</button>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-8">
        <div className="p-6">
          <SectionTitle icon={Gauge} title="Profile Signal Dashboard" subtitle="A visual snapshot of what is known, estimated, unknown, and excluded." />
          <div className="grid gap-4 md:grid-cols-4">
            <Metric label="Included lenses" value={stats.included} tone="border-emerald-300/20 bg-emerald-500/10" />
            <Metric label="Estimated lenses" value={stats.estimated} tone="border-sky-300/20 bg-sky-500/10" />
            <Metric label="Unknown lenses" value={stats.unknown} tone="border-amber-300/20 bg-amber-500/10" />
            <Metric label="Excluded lenses" value={stats.excluded} tone="border-white/10 bg-white/[0.04]" />
          </div>
          <div className="mt-5">
            <StatusBars lensStates={lensStates} factorStates={factorStates} />
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-12">
        <div className="p-6">
          <SectionTitle icon={Layers3} title="2. Lens Controls" subtitle="These are your uploaded lenses. Choose how each lens should be treated for this saved employee profile." />
          <div className="grid gap-5 lg:grid-cols-12">
            <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-black/20 p-4">
              <div className="mb-3 text-sm font-semibold text-white/80">All uploaded lenses</div>
              <div className="max-h-[34rem] overflow-y-auto pr-1 grid gap-2">
                {signalGlassStaticLenses.map((lens) => {
                  const state = lensStates[lens.id] || 'unknown';
                  const isActive = activeLens.id === lens.id;
                  return (
                    <button key={lens.id} type="button" onClick={() => setActiveLensId(lens.id)} className={cx('rounded-2xl border p-3 text-left transition', isActive ? 'border-sky-300/35 bg-sky-500/10' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.06]')}>
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-sm font-semibold text-white/85">{lens.lens}</div>
                          <div className="mt-1 text-xs leading-5 text-white/40">{lensSummary(lens)}</div>
                        </div>
                        <Pill className={statusTone(state)}>{state}</Pill>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-black/20 p-5">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <Pill>{activeLens.status || 'Uploaded lens'}</Pill>
                  <h3 className="mt-3 text-2xl font-bold text-white">{activeLens.lens}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/50">{lensSummary(activeLens)}</p>
                </div>
                <Pill className={statusTone(lensStates[activeLens.id] || 'unknown')}>{lensStates[activeLens.id] || 'unknown'}</Pill>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2 md:grid-cols-4">
                {lensStateOptions.map((option) => (
                  <button key={option.id} type="button" onClick={() => updateLensState(activeLens.id, option.id)} className={cx('rounded-2xl border px-3 py-3 text-sm font-semibold transition', (lensStates[activeLens.id] || 'unknown') === option.id ? option.tone : 'border-white/10 bg-white/[0.03] text-white/45 hover:bg-white/[0.07]')}>
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="mt-6">
                <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/80"><ClipboardList className="h-4 w-4" /> Sub-factor status for this lens</div>
                <div className="grid gap-3 md:grid-cols-2">
                  {activeLensSubFactors.map((output) => {
                    const key = `${activeLens.id}::${output}`;
                    const value = factorStates[key] || 'unknown';
                    return (
                      <div key={output} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                        <div className="mb-2 flex items-center justify-between gap-2">
                          <div className="text-sm font-semibold text-white/75">{output}</div>
                          <Pill className={subTone(value)}>{value}</Pill>
                        </div>
                        <div className="grid grid-cols-5 gap-1">
                          {subFactorStates.map((option) => (
                            <button key={option.id} type="button" onClick={() => updateFactorState(output, option.id)} className={cx('rounded-lg border px-1.5 py-1 text-[10px]', value === option.id ? option.tone : 'border-white/10 bg-black/20 text-white/35 hover:bg-white/[0.06]')}>
                              {option.label.split(' ')[0]}
                            </button>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-black/25 p-4">
                <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/40"><FileText className="h-3.5 w-3.5" /> Source preview</div>
                <p className="max-h-36 overflow-y-auto whitespace-pre-wrap text-xs leading-5 text-white/45">{activeLens.content?.slice(0, 1200)}{activeLens.content?.length > 1200 ? '…' : ''}</p>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <SummaryCard title="Included / estimated lenses" icon={CheckCircle2} lenses={selectedLenses} lensStates={lensStates} tone="border-emerald-300/20 bg-emerald-500/5" />
      <SummaryCard title="Unknown lenses" icon={AlertTriangle} lenses={unknownLenses} lensStates={lensStates} tone="border-amber-300/20 bg-amber-500/5" />
      <SummaryCard title="Excluded lenses" icon={ShieldCheck} lenses={excludedLenses} lensStates={lensStates} tone="border-white/10 bg-white/[0.03]" />

      <Card className="lg:col-span-12">
        <div className="p-6">
          <SectionTitle icon={Compass} title="Manager Translation" subtitle="What this saved profile means operationally." />
          <div className="grid gap-3 md:grid-cols-3">
            <InsightBox title="Strengths to design around" items={baseProfile.strengths} />
            <InsightBox title="Watch-outs" items={baseProfile.traps} />
            <InsightBox title="How to work with them" items={baseProfile.workWith} />
          </div>
        </div>
      </Card>
    </div>
  );
}

function Metric({ label, value, tone }) {
  return (
    <div className={cx('rounded-3xl border p-4', tone)}>
      <div className="text-xs uppercase tracking-[0.16em] text-white/40">{label}</div>
      <div className="mt-2 text-3xl font-bold text-white">{value}</div>
    </div>
  );
}

function SummaryCard({ title, icon: Icon, lenses, lensStates, tone }) {
  return (
    <Card className={cx('lg:col-span-4', tone)}>
      <div className="p-6">
        <SectionTitle icon={Icon} title={title} subtitle={`${lenses.length} lenses`} />
        <div className="max-h-96 overflow-y-auto pr-1 grid gap-2">
          {lenses.slice(0, 40).map((lens) => (
            <div key={lens.id} className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <div className="text-sm font-semibold text-white/80">{lens.lens}</div>
              <div className="mt-1 text-xs text-white/40">{lens.source || 'Uploaded source'} · {lensStates[lens.id] || 'unknown'}</div>
            </div>
          ))}
          {lenses.length > 40 && <div className="text-xs text-white/35">+ {lenses.length - 40} more</div>}
        </div>
      </div>
    </Card>
  );
}

function InsightBox({ title, items }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
      <div className="mb-3 text-sm font-semibold text-white/80">{title}</div>
      <div className="grid gap-2">
        {items.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-sm leading-5 text-white/60">{item}</div>)}
      </div>
    </div>
  );
}
