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
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
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
import NativeLensVisual from './lens/NativeLensVisual.jsx';

const canonicalLenses = getCanonicalSignalGlassLenses(signalGlassStaticLenses);

const VISUAL_COLORS = ['#38bdf8', '#818cf8', '#34d399', '#f59e0b'];

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

function cleanLabel(value = '') {
  return String(value)
    .replace(/[_*]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function shortLabel(value = '', max = 28) {
  const cleaned = cleanLabel(value)
    .replace(/^dominant\s+/i, '')
    .replace(/^secondary\s+/i, 'Second ')
    .replace(/^development\s+/i, 'Growth ')
    .replace(/^likely\s+/i, '');
  return cleaned.length > max ? `${cleaned.slice(0, max - 1)}…` : cleaned;
}

function extractLensLabels(lens) {
  const fromContent = String(lens.content || '')
    .split('\n')
    .map((line) => cleanLabel(line))
    .filter((line) => line && !line.match(/^(lens:|status:|source:|deduplication|cleanup note|complete source|partial|output:)/i))
    .flatMap((line) => {
      if (line.includes('|')) return line.split('|').map(cleanLabel);
      if (line.includes('→')) return line.split('→').map(cleanLabel);
      if (line.includes('-')) return line.split('-').map(cleanLabel);
      return [];
    })
    .filter((part) => part.length > 2 && part.length < 44)
    .filter((part) => !part.match(/^(for each pi profile|output|primary|secondary)$/i));

  const defaultsByType = {
    radar: ['Primary trait', 'Secondary trait', 'Stress response', 'Development focus'],
    radarBars: ['Primary trait', 'Secondary trait', 'Stress response', 'Development focus'],
    hexagonRadar: ['Primary trait', 'Secondary trait', 'Cautions', 'Growth suggestions'],
    colorWheel: ['Dominant color', 'Secondary color', 'Stress shift', 'Communication tip'],
    quadrantPlot: ['Primary style', 'Secondary style', 'Stress behavior', 'Communication tip'],
    scatterQuadrant: ['Dominant style', 'Secondary style', 'Decision pace', 'Watch-out'],
    scoreGauge: ['Score signal', 'Rationale', 'Recommendation', 'Quick lever'],
    riskBars: ['Likely risk', 'Trigger situation', 'Development strategy', 'Watch-out'],
    profileBars: ['Adjustment', 'Ambition', 'Sociability', 'Interpersonal sensitivity'],
    multiBarProfile: ['Strengths', 'Watchouts', 'Primary factor', 'Secondary factor'],
    threeBars: ['Autonomy need', 'Competence need', 'Relatedness need', 'Support lever'],
    matrix: ['Best role fit', 'Conflict hotspot', 'Complementary pairing', 'Quick management tip'],
    roleMatrix: ['Primary role', 'Secondary role', 'Contribution style', 'Failure mode'],
    pyramid: ['Likely strength', 'Potential dysfunction risk', 'Team trust signal', 'Suggested action'],
    accessibilityMatrixRadar: ['Manifestation', 'Behavior impact', 'Work support', 'Accommodation cue'],
    profileBarsChecklist: ['Pattern', 'Support need', 'Risk point', 'Useful structure'],
    timelineTagCloud: ['Context theme', 'Experience signal', 'Support cue', 'Manager note'],
  };

  const defaults = defaultsByType[lens.visualType] || ['Primary signal', 'Secondary signal', 'Stress pattern', 'Development focus'];
  return Array.from(new Set([...fromContent, ...defaults])).slice(0, 4);
}

function profileScoreSeed(profile, lens, index) {
  const scores = Object.values(profile?.scores || {});
  const base = scores.length ? scores[index % scores.length] : 55;
  const lensOffset = String(lens.id || lens.lens || '').split('').reduce((sum, char) => sum + char.charCodeAt(0), 0) % 23;
  return Math.max(12, Math.min(96, Math.round((base * 0.72) + lensOffset + 8)));
}

function buildPreviewFields(lens, profile) {
  return extractLensLabels(lens).map((label, index) => {
    const score = profileScoreSeed(profile, lens, index);
    const value = score >= 78 ? 'High' : score >= 58 ? 'Moderate-High' : score >= 42 ? 'Moderate' : 'Low-Moderate';
    return { label: shortLabel(label), value, score };
  });
}

function buildLensResult(lens, profile) {
  const previewFields = buildPreviewFields(lens, profile);
  const summary = lens.visualReason || `${lens.visualLabel} preview for ${profile.name}.`;
  return {
    lens,
    matched: true,
    fields: previewFields,
    numericFields: previewFields,
    summary,
  };
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
  return (
    <div className="mt-4 grid gap-2">
      {fields.slice(0, 4).map((field, index) => (
        <div key={`${field.label}-${index}`} className="rounded-2xl border border-white/10 bg-black/20 p-3">
          <div className="mb-2 flex items-start justify-between gap-3">
            <span className="min-w-0 flex-1 text-xs leading-4 text-white/56">{field.label}</span>
            <span className="shrink-0 text-xs font-semibold text-white/75">{field.value}</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full rounded-full" style={{ width: `${field.score}%`, background: VISUAL_COLORS[index % VISUAL_COLORS.length] }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function LensResultCard({ result, onOpen }) {
  const { lens, numericFields } = result;
  return (
    <button type="button" onClick={onOpen} className="group rounded-3xl border border-white/10 bg-black/20 p-5 text-left transition hover:border-sky-300/30 hover:bg-white/[0.08]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <Pill className="border-sky-300/20 bg-sky-500/10 text-sky-100">Visual profile</Pill>
          {lens.duplicateCount > 1 && <Pill className="ml-2 border-sky-300/20 bg-sky-500/10 text-sky-100">Merged {lens.duplicateCount}</Pill>}
          <h3 className="mt-3 text-lg font-bold text-white group-hover:text-sky-100">{lens.lens}</h3>
          <p className="mt-2 text-xs leading-5 text-white/45">{lens.visualLabel} · {lens.category}</p>
        </div>
        <Layers3 className="h-5 w-5 text-white/35 group-hover:text-sky-200" />
      </div>
      <ResultBars fields={numericFields} />
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

  const results = useMemo(() => canonicalLenses.map((lens) => buildLensResult(lens, activeBaseProfile)), [activeBaseProfile]);

  const filteredResults = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return results;
    return results.filter((result) => `${result.lens.lens} ${result.lens.visualLabel} ${result.lens.category} ${result.summary}`.toLowerCase().includes(term));
  }, [results, query]);

  const selectedResult = results.find((result) => result.lens.id === selectedLensId) || results[0];
  const mergedCount = canonicalLenses.filter((lens) => lens.duplicateCount > 1).length;

  function updateEmployee(field, value) {
    setEmployee((current) => ({ ...current, [field]: value }));
  }

  function createCurrentProfile() {
    const normalized = touchSavedProfile(normalizeSavedProfile({
      id: makeProfileId(),
      employee: {
        name: employee.name || 'Untitled employee profile',
        role: employee.role,
        department: employee.department,
        notes: employee.notes,
      },
      baseProfileName,
    }));
    const next = [normalized, ...savedProfiles];
    setSavedProfiles(next);
    saveProfilesToStorage(next);
    setActiveProfileId(normalized.id);
    setSelectedLensId(null);
    setNotice(`Created ${normalized.employee.name}. ${canonicalLenses.length} cleaned lenses now display as visual cards.`);
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
                Create an employee card with basic info and a connected PI profile. Each cleaned lens now displays as a visual profile card instead of plain text.
              </p>
            </div>
            <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-black/25 p-5">
              <div className="text-sm text-white/50">Visualized lenses</div>
              <div className="mt-2 text-5xl font-bold text-white">{canonicalLenses.length}</div>
              <p className="mt-3 text-xs leading-5 text-white/50">Every cleaned lens receives a generated visual preview for the selected employee card.</p>
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
            <button type="button" onClick={createCurrentProfile} className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300/30 bg-emerald-500/15 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-500/25">
              <Save className="h-4 w-4" /> Create employee card
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
                    <div className="rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm text-white/55">{canonicalLenses.length} visual lens cards</div>
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
                <SectionTitle icon={Layers3} title="Automatic Lens Results" subtitle="Every cleaned lens is displayed as a visual card for the selected PI profile." />
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
                    <Pill>Visual profile</Pill>
                    <Pill className="ml-2">{selectedResult.lens.visualType}</Pill>
                    {selectedResult.lens.duplicateCount > 1 && <Pill className="ml-2 border-sky-300/20 bg-sky-500/10 text-sky-100">Merged {selectedResult.lens.duplicateCount}</Pill>}
                    <p className="mt-4 text-sm leading-6 text-white/62">{selectedResult.summary}</p>
                    <div className="mt-4 text-xs leading-5 text-white/35">Source: {selectedResult.lens.source || 'Uploaded source'} · Category: {selectedResult.lens.category}</div>
                  </div>
                  <div className="lg:col-span-7">
                    <NativeLensVisual lens={selectedResult.lens} result={selectedResult} profile={activeBaseProfile} />
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
