import React, { useMemo, useState } from 'react';
import {
  Brain,
  CheckCircle2,
  Compass,
  Download,
  FileText,
  Gauge,
  Layers3,
  Save,
  Search,
  Sparkles,
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
import { getCanonicalSignalGlassLenses } from '../data/lensVisualRegistry.js';
import { groups, profiles } from '../data/appProfiles.js';
import {
  loadSavedProfiles,
  makeProfileId,
  normalizeSavedProfile,
  saveProfilesToStorage,
  touchSavedProfile,
} from '../data/savedProfiles.js';

const canonicalLenses = getCanonicalSignalGlassLenses(signalGlassStaticLenses);

const LEVEL_MAP = {
  'Very Low': 8,
  Low: 22,
  'Low-Moderate': 38,
  Moderate: 55,
  'Moderate-High': 70,
  High: 83,
  'Very High': 96,
  'Very Low-Moderate': 18,
};

const PROFILE_ALIASES = {
  'Craftsman / Artisan': ['Craftsman / Artisan', 'Craftsman', 'Artisan'],
};

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

function profileNamesForMatch(profileName) {
  return [profileName, ...(PROFILE_ALIASES[profileName] || [])]
    .map((item) => item.toLowerCase().replace(/\*+/g, '').trim());
}

function cleanCell(value = '') {
  return value.replace(/\*+/g, '').replace(/\s+/g, ' ').trim();
}

function parseMarkdownTables(content = '') {
  const lines = content.split('\n');
  const tables = [];
  let title = '';
  let buffer = [];

  function flush() {
    if (buffer.length >= 3) {
      const headers = buffer[0].split('|').map(cleanCell).filter(Boolean);
      const rows = buffer.slice(2)
        .map((line) => line.split('|').map(cleanCell).filter(Boolean))
        .filter((row) => row.length > 0);
      if (headers.length && rows.length) tables.push({ title, headers, rows });
    }
    buffer = [];
  }

  lines.forEach((line) => {
    const trimmed = line.trim();
    if (trimmed.startsWith('##')) {
      flush();
      title = cleanCell(trimmed.replace(/^#+\s*/, ''));
    } else if (trimmed.startsWith('|')) {
      buffer.push(trimmed);
    } else {
      flush();
    }
  });

  flush();
  return tables;
}

function findProfileRows(lens, profileName) {
  const aliases = profileNamesForMatch(profileName);
  const tables = parseMarkdownTables(lens.content);
  const matches = [];

  tables.forEach((table) => {
    const profileColumnIndex = table.headers.findIndex((header) => header.toLowerCase().includes('profile'));
    const searchIndex = profileColumnIndex >= 0 ? profileColumnIndex : 0;
    table.rows.forEach((row) => {
      const candidate = cleanCell(row[searchIndex] || '').toLowerCase();
      if (aliases.includes(candidate)) matches.push({ table, row, profileColumnIndex: searchIndex });
    });
  });

  return matches;
}

function fallbackLensText(lens) {
  return (lens.content || '')
    .split('\n')
    .map(cleanCell)
    .filter((line) => line && !line.match(/^(={3,}|-{3,}|source status|source document|duplicate handling|translation methodology)/i))
    .slice(0, 4)
    .join(' ')
    .slice(0, 420);
}

function levelValue(value) {
  const cleaned = cleanCell(value);
  if (LEVEL_MAP[cleaned] !== undefined) return LEVEL_MAP[cleaned];
  const normalized = cleaned.replace(/[‑–—]/g, '-');
  if (LEVEL_MAP[normalized] !== undefined) return LEVEL_MAP[normalized];
  return null;
}

function isUsefulValue(value) {
  const cleaned = cleanCell(value);
  return cleaned && cleaned !== '—' && cleaned !== '-';
}

function buildLensResult(lens, profileName) {
  const matches = findProfileRows(lens, profileName);
  if (!matches.length) {
    return {
      lens,
      matched: false,
      summary: fallbackLensText(lens) || 'No profile-specific row was found in this lens. Open the raw lens source in the Lens Library for the full source text.',
      fields: [],
      numericFields: [],
    };
  }

  const primary = matches[0];
  const fields = primary.table.headers.map((header, index) => ({
    label: header,
    value: primary.row[index] || '',
  })).filter((field) => isUsefulValue(field.value) && !field.label.toLowerCase().includes('profile'));

  const numericFields = fields
    .map((field) => ({ ...field, score: levelValue(field.value) }))
    .filter((field) => field.score !== null);

  const summary = fields
    .filter((field) => field.score === null)
    .slice(0, 4)
    .map((field) => `${field.label}: ${field.value}`)
    .join(' · ');

  return { lens, matched: true, tableTitle: primary.table.title, fields, numericFields, summary };
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

function ResultBars({ fields }) {
  if (!fields.length) return null;
  return (
    <div className="mt-4 grid gap-2">
      {fields.slice(0, 6).map((field) => (
        <div key={`${field.label}-${field.value}`} className="rounded-2xl border border-white/10 bg-black/20 p-3">
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="text-xs text-white/50">{field.label}</span>
            <span className="text-xs font-semibold text-white/75">{field.value}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full bg-white/60" style={{ width: `${field.score}%` }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function LensResultCard({ result, onOpen }) {
  const { lens, matched, numericFields, fields, summary } = result;
  return (
    <button type="button" onClick={onOpen} className="group rounded-3xl border border-white/10 bg-black/20 p-5 text-left transition hover:border-sky-300/30 hover:bg-white/[0.08]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Pill className={matched ? 'border-emerald-300/20 bg-emerald-500/10 text-emerald-100' : 'border-amber-300/20 bg-amber-500/10 text-amber-100'}>{matched ? 'Profile row found' : 'General lens'}</Pill>
          {lens.duplicateCount > 1 && <Pill className="ml-2 border-sky-300/20 bg-sky-500/10 text-sky-100">Merged {lens.duplicateCount}</Pill>}
          <h3 className="mt-3 text-lg font-bold text-white group-hover:text-sky-100">{lens.lens}</h3>
          <p className="mt-2 text-xs leading-5 text-white/45">{lens.visualLabel} · {lens.category}</p>
        </div>
        <Layers3 className="h-5 w-5 text-white/35 group-hover:text-sky-200" />
      </div>
      <ResultBars fields={numericFields} />
      {summary && <p className="mt-4 line-clamp-4 text-sm leading-6 text-white/58">{summary}</p>}
      {!numericFields.length && fields.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {fields.slice(0, 5).map((field) => <Pill key={`${field.label}-${field.value}`}>{field.label}</Pill>)}
        </div>
      )}
    </button>
  );
}

function EmployeeCard({ item, isActive, onSelect, onDelete }) {
  const profile = profiles.find((candidate) => candidate.name === item.baseProfileName) || profiles[0];
  const group = groups[profile.group] || groups.Analytical;
  return (
    <div className={cx('rounded-3xl border bg-black/20 p-4 transition', isActive ? 'border-sky-300/40 bg-sky-500/10' : 'border-white/10 hover:bg-white/[0.05]')}>
      <button type="button" onClick={onSelect} className="w-full text-left">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-lg font-bold text-white">{item.employee.name}</div>
            <div className="mt-1 text-sm text-white/50">{item.employee.role || 'No role entered'}</div>
            <div className="mt-1 text-xs text-white/35">{item.employee.department || 'No department entered'}</div>
          </div>
          <div className={cx('h-10 w-10 rounded-2xl bg-gradient-to-br', group.color)} />
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <Pill>{profile.name}</Pill>
          <Pill className={cx(group.bg, group.border)}>{profile.group}</Pill>
        </div>
        <div className="mt-3 text-[10px] uppercase tracking-[0.16em] text-white/30">Updated {new Date(item.updatedAt).toLocaleString()}</div>
      </button>
      <button type="button" onClick={onDelete} className="mt-3 inline-flex items-center gap-2 rounded-xl border border-red-300/20 bg-red-500/10 px-3 py-2 text-xs text-red-100 hover:bg-red-500/20">
        <Trash2 className="h-3.5 w-3.5" /> Delete
      </button>
    </div>
  );
}

function InsightBox({ title, icon: Icon, items }) {
  return (
    <Card>
      <div className="p-6">
        <SectionTitle icon={Icon} title={title} />
        <div className="grid gap-2">
          {items.map((item) => <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3 text-sm leading-5 text-white/60">{item}</div>)}
        </div>
      </div>
    </Card>
  );
}

export default function EmployeeBuilder() {
  const [employee, setEmployee] = useState({ name: '', role: '', department: '', notes: '' });
  const [baseProfileName, setBaseProfileName] = useState('Analyzer');
  const [savedProfiles, setSavedProfiles] = useState(loadSavedProfiles);
  const [activeProfileId, setActiveProfileId] = useState(savedProfiles[0]?.id || null);
  const [selectedLensId, setSelectedLensId] = useState(null);
  const [query, setQuery] = useState('');
  const [notice, setNotice] = useState('');

  const activeSavedProfile = savedProfiles.find((item) => item.id === activeProfileId) || savedProfiles[0] || null;
  const activeBaseProfile = profiles.find((item) => item.name === (activeSavedProfile?.baseProfileName || baseProfileName)) || profiles[0];
  const activeGroup = groups[activeBaseProfile.group] || groups.Analytical;

  const results = useMemo(() => {
    const profileName = activeSavedProfile?.baseProfileName || activeBaseProfile.name;
    return canonicalLenses.map((lens) => buildLensResult(lens, profileName));
  }, [activeSavedProfile, activeBaseProfile.name]);

  const filteredResults = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return results;
    return results.filter((result) => `${result.lens.lens} ${result.lens.visualLabel} ${result.lens.category} ${result.summary}`.toLowerCase().includes(term));
  }, [results, query]);

  const selectedResult = results.find((result) => result.lens.id === selectedLensId) || results[0];
  const matchedCount = results.filter((result) => result.matched).length;
  const mergedCount = canonicalLenses.filter((lens) => lens.duplicateCount > 1).length;

  function updateEmployee(field, value) {
    setEmployee((current) => ({ ...current, [field]: value }));
  }

  function saveCurrentProfile() {
    const normalized = touchSavedProfile(normalizeSavedProfile({
      id: activeProfileId && employee.name ? activeProfileId : makeProfileId(),
      employee: {
        name: employee.name || 'Untitled employee profile',
        role: employee.role,
        department: employee.department,
        notes: employee.notes,
      },
      baseProfileName,
    }));
    const next = [normalized, ...savedProfiles.filter((item) => item.id !== normalized.id)];
    setSavedProfiles(next);
    saveProfilesToStorage(next);
    setActiveProfileId(normalized.id);
    setNotice(`Saved ${normalized.employee.name}. ${canonicalLenses.length} cleaned lenses now apply automatically through ${normalized.baseProfileName}.`);
    setEmployee({ name: '', role: '', department: '', notes: '' });
  }

  function deleteProfile(profileId) {
    const next = savedProfiles.filter((item) => item.id !== profileId);
    setSavedProfiles(next);
    saveProfilesToStorage(next);
    if (activeProfileId === profileId) setActiveProfileId(next[0]?.id || null);
    setNotice('Deleted employee profile.');
  }

  function exportProfile(profile) {
    if (!profile) return;
    const payload = {
      ...profile,
      appliedLensCount: canonicalLenses.length,
      rawLensSourceCount: signalGlassStaticLenses.length,
      mergedDuplicateLensGroups: mergedCount,
      lensResults: results.map((result) => ({
        lens: result.lens.lens,
        visualType: result.lens.visualType,
        visualLabel: result.lens.visualLabel,
        matched: result.matched,
        fields: result.fields,
        summary: result.summary,
      })),
    };
    const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${profile.employee.name || 'employee-profile'}-lens-results.json`.replace(/[^a-z0-9._-]+/gi, '_');
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
                <Pill>Employee Profiles</Pill>
                <Pill>{canonicalLenses.length} cleaned lenses</Pill>
                <Pill>{mergedCount} merged duplicate groups</Pill>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Employee Profile Builder</h2>
              <p className="mt-4 max-w-4xl text-sm leading-6 text-white/65">
                Create an employee card with basic info and a connected PI profile. The app now uses the cleaned canonical lens list so duplicate framework entries do not produce mismatched visuals.
              </p>
            </div>
            <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-black/25 p-5">
              <div className="text-sm text-white/50">Active lens coverage</div>
              <div className="mt-2 text-5xl font-bold text-white">{matchedCount}</div>
              <p className="mt-3 text-xs leading-5 text-white/50">Profile-specific rows found across the cleaned lens library for the selected employee card.</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={UserRound} title="Create Employee Card" subtitle="Only basic employee info and the connected PI profile are needed." />
          <div className="grid gap-4">
            <TextInput label="Employee name or alias" value={employee.name} onChange={(value) => updateEmployee('name', value)} placeholder="Employee A" />
            <TextInput label="Role / job title" value={employee.role} onChange={(value) => updateEmployee('role', value)} placeholder="Case Manager, QA Analyst, Supervisor..." />
            <TextInput label="Department / team" value={employee.department} onChange={(value) => updateEmployee('department', value)} placeholder="Team / department" />
            <label className="block">
              <span className="mb-2 block text-sm text-white/60">Connected PI profile</span>
              <select value={baseProfileName} onChange={(event) => setBaseProfileName(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-300/40">
                {profiles.map((profile) => <option key={profile.name} value={profile.name}>{profile.name}</option>)}
              </select>
            </label>
            <TextArea label="Notes" value={employee.notes} onChange={(value) => updateEmployee('notes', value)} placeholder="Optional context or manager notes." />
            <button type="button" onClick={saveCurrentProfile} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300/30 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-500/25">
              <Save className="h-4 w-4" /> Create / Save employee card
            </button>
            {notice && <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white/65">{notice}</div>}
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-8">
        <div className="p-6">
          <SectionTitle icon={FileText} title="Employee Cards" subtitle="Click a card to open that employee's automatic lens results." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {savedProfiles.length === 0 && <div className="rounded-3xl border border-white/10 bg-black/20 p-5 text-sm leading-6 text-white/50 md:col-span-2 xl:col-span-3">No employee cards yet. Create one on the left and it will appear here.</div>}
            {savedProfiles.map((item) => (
              <EmployeeCard
                key={item.id}
                item={item}
                isActive={activeProfileId === item.id}
                onSelect={() => setActiveProfileId(item.id)}
                onDelete={() => deleteProfile(item.id)}
              />
            ))}
          </div>
        </div>
      </Card>

      {activeSavedProfile && (
        <>
          <Card className="lg:col-span-12">
            <div className="p-6">
              <div className="grid gap-6 lg:grid-cols-12">
                <div className="lg:col-span-5">
                  <SectionTitle icon={Brain} title={activeSavedProfile.employee.name} subtitle={`${activeSavedProfile.employee.role || 'No role'} · ${activeSavedProfile.employee.department || 'No department'}`} />
                  <Pill className={cx(activeGroup.bg, activeGroup.border)}>{activeBaseProfile.group}</Pill>
                  <h3 className="mt-3 text-3xl font-bold text-white">{activeBaseProfile.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{activeBaseProfile.short}</p>
                  {activeSavedProfile.employee.notes && <p className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/55">{activeSavedProfile.employee.notes}</p>}
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <button type="button" onClick={() => exportProfile(activeSavedProfile)} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-sky-300/30 bg-sky-500/15 px-4 py-3 text-sm font-semibold text-white hover:bg-sky-500/25">
                      <Download className="h-4 w-4" /> Export results
                    </button>
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/55">{canonicalLenses.length} cleaned lenses applied automatically</div>
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <ProfileRadar profile={activeBaseProfile} />
                </div>
              </div>
            </div>
          </Card>

          <Card className="lg:col-span-12">
            <div className="p-6">
              <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                <SectionTitle icon={Layers3} title="Automatic Lens Results" subtitle="Every cleaned lens is applied to the selected PI profile. Duplicate framework variants are merged into one canonical output." />
                <label className="relative block lg:w-80">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/35" />
                  <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search lens results..." className="w-full rounded-2xl border border-white/10 bg-black/25 py-3 pl-11 pr-4 text-sm text-white outline-none placeholder:text-white/35" />
                </label>
              </div>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {filteredResults.map((result) => (
                  <LensResultCard key={result.lens.id} result={result} onOpen={() => setSelectedLensId(result.lens.id)} />
                ))}
              </div>
            </div>
          </Card>

          {selectedResult && (
            <Card className="lg:col-span-12 border-sky-300/20 bg-sky-500/5">
              <div className="p-6">
                <SectionTitle icon={Sparkles} title={selectedResult.lens.lens} subtitle={`${selectedResult.lens.visualLabel} · ${selectedResult.lens.visualReason}`} />
                <div className="grid gap-5 lg:grid-cols-12">
                  <div className="lg:col-span-5 rounded-3xl border border-white/10 bg-black/20 p-5">
                    <Pill>{selectedResult.matched ? 'Profile-specific match' : 'General lens preview'}</Pill>
                    <Pill className="ml-2">{selectedResult.lens.visualType}</Pill>
                    {selectedResult.lens.duplicateCount > 1 && <Pill className="ml-2 border-sky-300/20 bg-sky-500/10 text-sky-100">Merged {selectedResult.lens.duplicateCount}</Pill>}
                    <p className="mt-4 text-sm leading-6 text-white/62">{selectedResult.summary}</p>
                    <div className="mt-4 text-xs leading-5 text-white/35">Source: {selectedResult.lens.source || 'Uploaded source'} · Category: {selectedResult.lens.category}</div>
                  </div>
                  <div className="lg:col-span-7 rounded-3xl border border-white/10 bg-black/20 p-5">
                    {selectedResult.numericFields.length > 0 ? (
                      <div className="h-72">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart data={selectedResult.numericFields.slice(0, 8)} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
                            <XAxis dataKey="label" tick={{ fill: 'rgba(255,255,255,.55)', fontSize: 10 }} interval={0} angle={-20} textAnchor="end" height={70} />
                            <YAxis domain={[0, 100]} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
                            <Tooltip contentStyle={{ background: 'rgba(15,23,42,.95)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, color: '#fff' }} />
                            <Bar dataKey="score" radius={[10, 10, 4, 4]} fill="rgba(125,211,252,.78)" />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    ) : (
                      <div className="grid gap-3 md:grid-cols-2">
                        {selectedResult.fields.slice(0, 10).map((field) => (
                          <div key={`${field.label}-${field.value}`} className="rounded-2xl border border-white/10 bg-white/[0.05] p-4">
                            <div className="text-xs uppercase tracking-[0.16em] text-white/35">{field.label}</div>
                            <div className="mt-2 text-sm leading-6 text-white/70">{field.value}</div>
                          </div>
                        ))}
                        {!selectedResult.fields.length && <div className="text-sm leading-6 text-white/50">No structured profile row was available for this lens.</div>}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          )}

          <div className="lg:col-span-12 grid gap-5 md:grid-cols-3">
            <InsightBox title="Strengths" icon={CheckCircle2} items={activeBaseProfile.strengths} />
            <InsightBox title="Manager watch-outs" icon={Gauge} items={activeBaseProfile.traps} />
            <InsightBox title="How to work with them" icon={Compass} items={activeBaseProfile.workWith} />
          </div>
        </>
      )}
    </div>
  );
}
