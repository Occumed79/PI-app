import React, { useMemo, useState } from 'react';
import { BookOpen, Edit3, Layers3, Search, Users, Save, AlertCircle, CheckCircle2 } from 'lucide-react';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';
import { HSI_MAPPINGS as SEED_MAPPINGS } from '../data/hsiMappings.js';
import { PI_PROFILES } from '../data/profiles.js';

const LOCAL_KEY = 'hsi_mapping_overrides_v1';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function keyFor(lensId, profileId) {
  return `${lensId}__${profileId}`;
}

function loadLocalMappings() {
  try {
    return JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}') || {};
  } catch {
    return {};
  }
}

function saveLocalMappings(mappings) {
  try {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(mappings));
  } catch {}
}

function parseFields(raw = '') {
  return String(raw)
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .reduce((acc, line) => {
      const [label, ...rest] = line.split(':');
      if (!label || !rest.length) return acc;
      acc[label.trim()] = rest.join(':').trim();
      return acc;
    }, {});
}

function fieldsToText(fields = {}) {
  return Object.entries(fields || {}).map(([label, value]) => `${label}: ${value}`).join('\n');
}

function isMapped(mapping) {
  return Boolean(mapping?.outputText || Object.keys(mapping?.fields || {}).length);
}

function Card({ children, className = '' }) {
  return <div className={cx('rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/20 backdrop-blur-xl', className)}>{children}</div>;
}

function Pill({ children, className = '' }) {
  return <span className={cx('inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/75', className)}>{children}</span>;
}

function StatusBadge({ mapped }) {
  return mapped ? (
    <Pill className="border-emerald-400/25 bg-emerald-500/10 text-emerald-300"><CheckCircle2 size={12} />&nbsp;Mapped</Pill>
  ) : (
    <Pill className="border-amber-400/25 bg-amber-500/10 text-amber-300"><AlertCircle size={12} />&nbsp;Needs mapping</Pill>
  );
}

function categoryColor(category) {
  const colors = {
    Personality: 'text-indigo-300 bg-indigo-500/10 border-indigo-400/20',
    Cognitive: 'text-sky-300 bg-sky-500/10 border-sky-400/20',
    Motivation: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20',
    Team: 'text-orange-300 bg-orange-500/10 border-orange-400/20',
    Emotional: 'text-pink-300 bg-pink-500/10 border-pink-400/20',
    Leadership: 'text-yellow-300 bg-yellow-500/10 border-yellow-400/20',
    Wellbeing: 'text-purple-300 bg-purple-500/10 border-purple-400/20',
    Neurodiversity: 'text-teal-300 bg-teal-500/10 border-teal-400/20',
  };
  return colors[category] || 'text-slate-300 bg-slate-500/10 border-slate-400/20';
}

function VisualShell({ lens, mapping }) {
  const mapped = isMapped(mapping);
  const fields = Object.entries(mapping?.fields || {});

  return (
    <div className="rounded-3xl border border-white/10 bg-black/25 p-5">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="text-sm font-semibold text-white">{lens.visualLabel || lens.visualType}</div>
          <div className="mt-1 font-mono text-xs text-white/35">{lens.visualType}</div>
        </div>
        <StatusBadge mapped={mapped} />
      </div>

      {!mapped && (
        <div className="rounded-2xl border border-dashed border-amber-300/25 bg-amber-500/[0.04] p-6 text-center">
          <div className="text-sm font-semibold text-amber-200">Needs profile mapping</div>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-white/45">
            This lens is assigned the visual type above, but no real fields have been mapped for this PI profile yet. No fake chart is rendered.
          </p>
        </div>
      )}

      {mapped && (
        <div className="space-y-4">
          {mapping.outputText && <p className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-white/70">{mapping.outputText}</p>}
          {fields.length > 0 && (
            <div className="grid gap-3 md:grid-cols-2">
              {fields.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-xs uppercase tracking-[0.16em] text-white/35">{label}</div>
                  <div className="mt-2 text-sm font-semibold text-white">{String(value)}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function RegistryTable({ mappings, onSelect }) {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const categories = useMemo(() => ['All', ...Array.from(new Set(HSI_LENS_REGISTRY.map((lens) => lens.category || 'Other')))], []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return HSI_LENS_REGISTRY.filter((lens) => {
      if (category !== 'All' && (lens.category || 'Other') !== category) return false;
      return `${lens.lens} ${lens.id} ${lens.visualType} ${lens.visualLabel} ${lens.why}`.toLowerCase().includes(q);
    });
  }, [query, category]);

  function countMappedProfiles(lens) {
    return PI_PROFILES.filter((profile) => isMapped(mappings[keyFor(lens.id, profile.id)])).length;
  }

  return (
    <Card className="p-5">
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-white"><BookOpen size={20} /> Lens Visual Registry</h2>
          <p className="mt-1 text-sm text-white/45">The visual registry is the source of truth for the 104 lens visual types.</p>
        </div>
        <div className="relative min-w-[260px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search lenses..." className="w-full rounded-2xl border border-white/10 bg-black/30 py-2.5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/30" />
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {categories.map((item) => (
          <button key={item} type="button" onClick={() => setCategory(item)} className={cx('rounded-xl border px-3 py-1.5 text-xs transition', category === item ? 'border-sky-400/40 bg-sky-500/15 text-sky-300' : 'border-white/10 text-white/45 hover:bg-white/10 hover:text-white')}>{item}</button>
        ))}
      </div>

      <div className="mb-3 text-xs text-white/35">{filtered.length} of {HSI_LENS_REGISTRY.length} lenses</div>
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.16em] text-white/30">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Lens</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Visual Type</th>
              <th className="px-4 py-3">Visual Label</th>
              <th className="px-4 py-3">Profile Maps</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lens) => {
              const mappedCount = countMappedProfiles(lens);
              return (
                <tr key={lens.id} onClick={() => onSelect(lens)} className="cursor-pointer border-t border-white/5 hover:bg-white/[0.05]">
                  <td className="px-4 py-3 text-xs text-white/25">{HSI_LENS_REGISTRY.indexOf(lens) + 1}</td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-white">{lens.lens}</div>
                    <div className="mt-0.5 font-mono text-xs text-white/25">{lens.id}</div>
                  </td>
                  <td className="px-4 py-3"><Pill className={categoryColor(lens.category)}>{lens.category || 'Other'}</Pill></td>
                  <td className="px-4 py-3 font-mono text-xs text-white/55">{lens.visualType}</td>
                  <td className="px-4 py-3 text-xs text-white/55">{lens.visualLabel}</td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-20 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-emerald-400" style={{ width: `${(mappedCount / PI_PROFILES.length) * 100}%` }} /></div>
                      <span className="text-xs text-white/35">{mappedCount}/{PI_PROFILES.length}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function ProfileSelector({ selectedProfileId, setSelectedProfileId }) {
  return (
    <Card className="p-5">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><Users size={20} /> PI Profile Selector</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PI_PROFILES.map((profile) => (
          <button key={profile.id} type="button" onClick={() => setSelectedProfileId(profile.id)} className={cx('rounded-2xl border p-4 text-left transition', selectedProfileId === profile.id ? 'border-sky-300/40 bg-sky-500/15' : 'border-white/10 bg-white/[0.03] hover:bg-white/[0.07]')}>
            <div className="font-bold text-white">{profile.name}</div>
            <div className="mt-1 text-xs text-white/45">{profile.group}</div>
            <p className="mt-3 text-xs leading-5 text-white/50">{profile.short}</p>
          </button>
        ))}
      </div>
    </Card>
  );
}

function LensByProfile({ profile, mappings, onOpen }) {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return HSI_LENS_REGISTRY.filter((lens) => `${lens.lens} ${lens.category} ${lens.visualType} ${lens.visualLabel}`.toLowerCase().includes(q));
  }, [query]);

  return (
    <Card className="p-5">
      <div className="mb-4 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <h2 className="flex items-center gap-2 text-xl font-bold text-white"><Layers3 size={20} /> Lens-by-Profile Results</h2>
          <p className="mt-1 text-sm text-white/45">Showing all 104 lenses for the selected profile: <span className="font-semibold text-white">{profile.name}</span>.</p>
        </div>
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search this profile's lenses..." className="rounded-2xl border border-white/10 bg-black/30 px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/30 lg:w-80" />
      </div>
      <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((lens) => {
          const mapping = mappings[keyFor(lens.id, profile.id)];
          const mapped = isMapped(mapping);
          return (
            <button key={lens.id} type="button" onClick={() => onOpen(lens, profile)} className={cx('rounded-2xl border p-4 text-left transition hover:bg-white/[0.07]', mapped ? 'border-emerald-400/20 bg-emerald-500/[0.04]' : 'border-white/10 bg-white/[0.03]')}>
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <div className="font-semibold leading-snug text-white">{lens.lens}</div>
                  <div className="mt-1 font-mono text-xs text-white/30">{lens.visualType}</div>
                </div>
                <StatusBadge mapped={mapped} />
              </div>
              {mapped ? <p className="line-clamp-3 text-sm leading-6 text-white/60">{mapping.outputText || 'Mapped fields added.'}</p> : <p className="text-sm leading-6 text-white/35">Needs profile mapping for {profile.name}. No fake chart is shown.</p>}
            </button>
          );
        })}
      </div>
    </Card>
  );
}

function MappingEditor({ selectedLens, selectedProfile, mapping, onSave }) {
  const [outputText, setOutputText] = useState(mapping?.outputText || '');
  const [fieldsRaw, setFieldsRaw] = useState(fieldsToText(mapping?.fields || {}));
  const [notes, setNotes] = useState(mapping?.notes || '');

  React.useEffect(() => {
    setOutputText(mapping?.outputText || '');
    setFieldsRaw(fieldsToText(mapping?.fields || {}));
    setNotes(mapping?.notes || '');
  }, [selectedLens?.id, selectedProfile?.id, mapping]);

  if (!selectedLens || !selectedProfile) return null;

  function save() {
    onSave(keyFor(selectedLens.id, selectedProfile.id), {
      outputText: outputText.trim(),
      fields: parseFields(fieldsRaw),
      notes: notes.trim(),
      updatedAt: new Date().toISOString(),
    });
  }

  return (
    <Card className="p-5">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><Edit3 size={20} /> Mapping Editor</h2>
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
            <div className="mb-3 flex flex-wrap gap-2">
              <Pill>{selectedProfile.name}</Pill>
              <Pill className={categoryColor(selectedLens.category)}>{selectedLens.category}</Pill>
              <StatusBadge mapped={isMapped(mapping)} />
            </div>
            <h3 className="text-2xl font-bold text-white">{selectedLens.lens}</h3>
            <p className="mt-2 text-sm leading-6 text-white/50">{selectedLens.why}</p>
            <div className="mt-4 font-mono text-xs text-white/35">{selectedLens.visualType} · {selectedLens.visualLabel}</div>
          </div>
          <div className="mt-4"><VisualShell lens={selectedLens} mapping={{ outputText, fields: parseFields(fieldsRaw), notes }} /></div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-white/70">Profile-specific output text</span>
            <textarea value={outputText} onChange={(event) => setOutputText(event.target.value)} rows={8} placeholder={`How does ${selectedLens.lens} apply to the ${selectedProfile.name} profile?`} className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 text-sm leading-6 text-white outline-none placeholder:text-white/25" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-white/70">Real visual fields only</span>
            <textarea value={fieldsRaw} onChange={(event) => setFieldsRaw(event.target.value)} rows={6} placeholder={'Field label: Real value\nAnother field: Real value'} className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 font-mono text-sm leading-6 text-white outline-none placeholder:text-white/25" />
            <p className="mt-2 text-xs leading-5 text-white/35">Do not add fields unless they are real for this lens-profile combination.</p>
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-white/70">Notes</span>
            <input value={notes} onChange={(event) => setNotes(event.target.value)} placeholder="Review notes..." className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none placeholder:text-white/25" />
          </label>
          <button type="button" onClick={save} className="inline-flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-500/15 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-500/25"><Save size={16} /> Save mapping</button>
        </div>
      </div>
    </Card>
  );
}

export default function HumanSystemsIntelligence() {
  const [tab, setTab] = useState('registry');
  const [selectedProfileId, setSelectedProfileId] = useState(PI_PROFILES[0]?.id || '');
  const [selectedLensId, setSelectedLensId] = useState(HSI_LENS_REGISTRY[0]?.id || '');
  const [overrides, setOverrides] = useState(loadLocalMappings);

  const mappings = useMemo(() => ({ ...SEED_MAPPINGS, ...overrides }), [overrides]);
  const selectedProfile = PI_PROFILES.find((profile) => profile.id === selectedProfileId) || PI_PROFILES[0];
  const selectedLens = HSI_LENS_REGISTRY.find((lens) => lens.id === selectedLensId) || HSI_LENS_REGISTRY[0];
  const selectedMapping = mappings[keyFor(selectedLens?.id, selectedProfile?.id)] || {};

  const totalPossible = HSI_LENS_REGISTRY.length * PI_PROFILES.length;
  const totalMapped = useMemo(() => HSI_LENS_REGISTRY.reduce((sum, lens) => sum + PI_PROFILES.filter((profile) => isMapped(mappings[keyFor(lens.id, profile.id)])).length, 0), [mappings]);
  const pct = totalPossible ? Math.round((totalMapped / totalPossible) * 100) : 0;

  function saveMapping(key, data) {
    const next = { ...overrides, [key]: data };
    setOverrides(next);
    saveLocalMappings(next);
  }

  function openEditor(lens, profile = selectedProfile) {
    setSelectedLensId(lens.id);
    setSelectedProfileId(profile.id);
    setTab('editor');
  }

  const tabs = [
    { id: 'registry', label: 'Lens Registry', icon: BookOpen },
    { id: 'profiles', label: 'PI Profiles', icon: Users },
    { id: 'results', label: 'Lens-by-Profile', icon: Layers3 },
    { id: 'editor', label: 'Mapping Editor', icon: Edit3 },
  ];

  return (
    <div className="space-y-5">
      <Card className="overflow-hidden p-5">
        <div className="grid gap-5 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-3 flex flex-wrap gap-2">
              <Pill>{HSI_LENS_REGISTRY.length} lenses</Pill>
              <Pill>{PI_PROFILES.length} PI profiles</Pill>
              <Pill>{totalPossible.toLocaleString()} possible outputs</Pill>
              <Pill className="border-amber-400/25 bg-amber-500/10 text-amber-300">No fake fields</Pill>
            </div>
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Human Systems Intelligence</h1>
            <p className="mt-3 max-w-4xl text-sm leading-6 text-white/55">Every lens applies to every PI profile. Visual types come from the registry. Charts only appear when real lens-profile fields are mapped.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-black/25 p-5 lg:col-span-4">
            <div className="text-sm text-white/45">Mapped outputs</div>
            <div className="mt-2 text-4xl font-bold text-white">{pct}%</div>
            <div className="mt-1 text-sm text-white/45">{totalMapped.toLocaleString()} / {totalPossible.toLocaleString()}</div>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10"><div className="h-full rounded-full bg-emerald-400" style={{ width: `${pct}%` }} /></div>
          </div>
        </div>
      </Card>

      <div className="flex flex-wrap gap-2">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button key={id} type="button" onClick={() => setTab(id)} className={cx('inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition', tab === id ? 'border-sky-300/40 bg-sky-500/15 text-white' : 'border-white/10 bg-white/[0.04] text-white/50 hover:bg-white/10 hover:text-white')}>
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>

      {tab === 'registry' && <RegistryTable mappings={mappings} onSelect={(lens) => openEditor(lens)} />}
      {tab === 'profiles' && <ProfileSelector selectedProfileId={selectedProfileId} setSelectedProfileId={(id) => { setSelectedProfileId(id); setTab('results'); }} />}
      {tab === 'results' && <LensByProfile profile={selectedProfile} mappings={mappings} onOpen={openEditor} />}
      {tab === 'editor' && <MappingEditor selectedLens={selectedLens} selectedProfile={selectedProfile} mapping={selectedMapping} onSave={saveMapping} />}
    </div>
  );
}
