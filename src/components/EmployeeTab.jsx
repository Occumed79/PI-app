import React, { Component, useMemo, useState } from 'react';
import {
  ArrowLeft,
  CalendarDays,
  ChevronRight,
  Database,
  Pencil,
  Plus,
  RefreshCw,
  Save,
  Search,
  Trash2,
  User,
  X,
} from 'lucide-react';
import { PI_PROFILES } from '../data/profiles.js';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';
import {
  deriveFrameworkSummaries,
  factorDistance,
  normalizePiFactors,
} from '../data/piCrosswalkEngine.js';
import LensVisual from './LensVisual.jsx';

const FACTORS = [
  ['dominance', 'Dominance', 'D'],
  ['extraversion', 'Extraversion', 'E'],
  ['patience', 'Patience', 'P'],
  ['formality', 'Formality', 'F'],
];

const CAT_STYLE = {
  Personality: 'bg-indigo-500/15 text-indigo-300 border-indigo-400/20',
  Cognitive: 'bg-sky-500/15 text-sky-300 border-sky-400/20',
  Motivation: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/20',
  Team: 'bg-orange-500/15 text-orange-300 border-orange-400/20',
  Emotional: 'bg-pink-500/15 text-pink-300 border-pink-400/20',
  Leadership: 'bg-yellow-500/15 text-yellow-300 border-yellow-400/20',
  Wellbeing: 'bg-purple-500/15 text-purple-300 border-purple-400/20',
  Interpersonal: 'bg-teal-500/15 text-teal-300 border-teal-400/20',
  Other: 'bg-slate-500/15 text-slate-300 border-slate-400/20',
};

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function profileFor(employee) {
  return PI_PROFILES.find(profile => profile.id === (employee?.piProfileId || employee?.profileId)) || PI_PROFILES[0];
}

function employeeFactors(employee, profile = profileFor(employee)) {
  return normalizePiFactors({
    dominance: employee?.dominance ?? profile.dominance,
    extraversion: employee?.extraversion ?? profile.extraversion,
    patience: employee?.patience ?? profile.patience,
    formality: employee?.formality ?? profile.formality,
  });
}

function CatBadge({ category }) {
  return (
    <span className={cx('inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium', CAT_STYLE[category] || CAT_STYLE.Other)}>
      {category || 'Other'}
    </span>
  );
}

class LensVisualBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error) {
    console.error('Lens visual failed to render:', error);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[180px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-3 text-center text-xs text-white/35">
          Chart unavailable for this lens
        </div>
      );
    }
    return this.props.children;
  }
}

function FactorGrid({ factors, referenceProfile }) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {FACTORS.map(([key, label, abbreviation]) => {
        const value = factors[key];
        const reference = referenceProfile[key];
        const difference = Math.round(value - reference);
        return (
          <div key={key} className="rounded-2xl border border-white/10 bg-black/20 p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-white/35">{abbreviation}</span>
              <span className={cx('text-[10px]', difference === 0 ? 'text-white/25' : difference > 0 ? 'text-emerald-300' : 'text-amber-300')}>
                {difference === 0 ? 'reference' : `${difference > 0 ? '+' : ''}${difference}`}
              </span>
            </div>
            <div className="mt-1 text-3xl font-bold text-white">{value}</div>
            <div className="mt-1 text-xs text-white/45">{label}</div>
            <div className="mt-3 h-1.5 rounded-full bg-white/10">
              <div className="h-1.5 rounded-full bg-sky-400" style={{ width: `${value}%` }}/>
            </div>
          </div>
        );
      })}
    </div>
  );
}

function LensModal({ lens, employee, onClose }) {
  const profile = profileFor(employee);
  const factors = employeeFactors(employee, profile);
  const color = profile.color || '#38bdf8';

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-8" role="dialog" aria-modal="true" aria-label={`${lens.lens} crosswalk detail`}>
      <button className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose} aria-label="Close lens detail"/>
      <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/15 bg-slate-900 shadow-2xl">
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              <CatBadge category={lens.category}/>
              <span className="rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-0.5 text-xs text-sky-200">PI-derived crosswalk</span>
            </div>
            <h2 className="text-2xl font-bold text-white">{lens.lens}</h2>
            <p className="mt-1 text-sm leading-6 text-white/50">{lens.why}</p>
          </div>
          <button type="button" onClick={onClose} className="rounded-xl border border-white/10 p-2 text-white/40 transition hover:text-white" aria-label="Close lens detail">
            <X size={18}/>
          </button>
        </div>

        <div className="space-y-5 p-6">
          <div className="rounded-2xl border border-sky-400/20 bg-sky-500/10 p-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-sky-200/70">Translation chain</p>
            <p className="mt-1 text-sm leading-6 text-white/75">
              {employee.name} completed PI result → exact D/E/P/F values → {lens.lens} reference translation
            </p>
          </div>

          <FactorGrid factors={factors} referenceProfile={profile}/>

          <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-6">
            <p className="mb-3 px-2 text-xs uppercase tracking-widest text-white/30">
              {profile.name} reference-profile visualization
            </p>
            <LensVisualBoundary>
              <LensVisual lensId={lens.id} visualType={lens.visualType} color={color} profileId={profile.id}/>
            </LensVisualBoundary>
          </div>

          <p className="text-xs leading-5 text-white/35">
            This chart currently uses the selected PI reference-profile mapping. The exact employee factors above are the source record; the framework summaries on the employee page are calculated from those exact values.
          </p>
        </div>
      </div>
    </div>
  );
}

function FrameworkCard({ framework }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="font-semibold text-white">{framework.label}</h3>
        <span className="text-[10px] uppercase tracking-widest text-sky-300/60">exact-factor crosswalk</span>
      </div>
      <div className="mt-4 space-y-3">
        {framework.strongest.map(item => (
          <div key={item.label}>
            <div className="mb-1 flex items-center justify-between gap-3 text-xs">
              <span className="text-white/65">{item.label}</span>
              <span className="font-semibold text-white">{item.value}</span>
            </div>
            <div className="h-1.5 rounded-full bg-white/10">
              <div className="h-1.5 rounded-full bg-sky-400" style={{ width: `${item.value}%` }}/>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmployeeDetail({ employee, onBack, onEdit, onDelete }) {
  const [selectedLens, setSelectedLens] = useState(null);
  const [lensQuery, setLensQuery] = useState('');
  const [visibleLensCount, setVisibleLensCount] = useState(18);
  const profile = profileFor(employee);
  const factors = employeeFactors(employee, profile);
  const frameworkSummaries = useMemo(() => deriveFrameworkSummaries(factors), [factors.dominance, factors.extraversion, factors.patience, factors.formality]);
  const distance = factorDistance(factors, profile);

  const filteredLenses = useMemo(() => {
    const query = lensQuery.trim().toLowerCase();
    if (!query) return HSI_LENS_REGISTRY;
    return HSI_LENS_REGISTRY.filter(lens => `${lens.lens} ${lens.category} ${lens.why}`.toLowerCase().includes(query));
  }, [lensQuery]);

  return (
    <div className="p-5 sm:p-6">
      <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
        <button type="button" onClick={onBack} className="flex items-center gap-2 text-sm text-white/45 transition hover:text-white">
          <ArrowLeft size={16}/> All employee PI profiles
        </button>
        <div className="flex gap-2">
          <button type="button" onClick={() => onEdit(employee)} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/70 hover:bg-white/10">
            <Pencil size={14}/> Edit
          </button>
          <button type="button" onClick={() => onDelete(employee)} className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-500/10 px-3 py-2 text-sm text-red-200 hover:bg-red-500/15">
            <Trash2 size={14}/> Delete
          </button>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="flex items-start gap-4">
            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-2xl font-black text-slate-900" style={{ background: profile.color }}>
              {(employee.name || 'U')[0].toUpperCase()}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{employee.name}</h2>
              <p className="text-sm text-white/45">
                {[employee.position, employee.department].filter(Boolean).join(' · ') || 'Position and department not entered'}
              </p>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/65">Completed PI: {profile.name}</span>
                <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/45">Average variance from reference: {distance}</span>
                {employee.assessmentDate && (
                  <span className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-white/45">
                    <CalendarDays size={12}/> {String(employee.assessmentDate).slice(0, 10)}
                  </span>
                )}
              </div>
            </div>
          </div>
          <div className="max-w-md rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3 text-xs leading-5 text-white/60">
            <strong className="text-sky-200">Source assessment:</strong> exact employee PI factors. Other frameworks below are calculated directional crosswalks.
          </div>
        </div>

        <div className="mt-6 border-t border-white/8 pt-5">
          <FactorGrid factors={factors} referenceProfile={profile}/>
        </div>

        {employee.notes && (
          <div className="mt-5 rounded-2xl border border-white/8 bg-black/20 p-4">
            <p className="text-xs uppercase tracking-widest text-white/30">Notes</p>
            <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white/70">{employee.notes}</p>
          </div>
        )}
      </div>

      <div className="mt-6">
        <div className="mb-4">
          <h2 className="text-xl font-bold text-white">Exact-factor crosswalk snapshot</h2>
          <p className="mt-1 text-sm text-white/40">Calculated directly from this employee’s entered D/E/P/F values.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {frameworkSummaries.map(framework => <FrameworkCard key={framework.id} framework={framework}/>) }
        </div>
      </div>

      <div className="mt-7 rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">Crosswalk lens library</h2>
            <p className="mt-1 text-sm text-white/40">Lightweight list view—charts mount only after a lens is opened.</p>
          </div>
          <div className="flex min-w-[260px] items-center gap-2 rounded-xl border border-white/10 bg-black/20 px-3 py-2">
            <Search size={14} className="text-white/30"/>
            <input value={lensQuery} onChange={event => { setLensQuery(event.target.value); setVisibleLensCount(18); }} placeholder="Search lenses…" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25"/>
          </div>
        </div>

        <div className="mt-5 grid gap-2 md:grid-cols-2 xl:grid-cols-3">
          {filteredLenses.slice(0, visibleLensCount).map(lens => (
            <button key={lens.id} type="button" onClick={() => setSelectedLens(lens)} className="flex items-center justify-between gap-3 rounded-2xl border border-white/8 bg-white/[0.035] p-3 text-left transition hover:border-white/20 hover:bg-white/[0.07]">
              <div className="min-w-0">
                <div className="mb-1"><CatBadge category={lens.category}/></div>
                <p className="truncate text-sm font-semibold text-white">{lens.lens}</p>
                <p className="truncate text-xs text-white/35">{lens.visualLabel}</p>
              </div>
              <ChevronRight size={16} className="flex-shrink-0 text-white/25"/>
            </button>
          ))}
        </div>

        {visibleLensCount < filteredLenses.length && (
          <button type="button" onClick={() => setVisibleLensCount(count => count + 18)} className="mt-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/60 hover:bg-white/10 hover:text-white">
            Show 18 more ({filteredLenses.length - visibleLensCount} remaining)
          </button>
        )}
      </div>

      {selectedLens && <LensModal lens={selectedLens} employee={employee} onClose={() => setSelectedLens(null)}/>} 
    </div>
  );
}

function EmployeeForm({ initialEmployee, onSave, onCancel }) {
  const initialProfile = profileFor(initialEmployee);
  const initialFactors = employeeFactors(initialEmployee, initialProfile);
  const [form, setForm] = useState({
    name: initialEmployee?.name || '',
    position: initialEmployee?.position || '',
    department: initialEmployee?.department || '',
    piProfileId: initialEmployee?.piProfileId || initialEmployee?.profileId || initialProfile.id,
    dominance: initialFactors.dominance,
    extraversion: initialFactors.extraversion,
    patience: initialFactors.patience,
    formality: initialFactors.formality,
    assessmentDate: initialEmployee?.assessmentDate ? String(initialEmployee.assessmentDate).slice(0, 10) : '',
    notes: initialEmployee?.notes || '',
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const valid = form.name.trim() && form.piProfileId && FACTORS.every(([key]) => Number.isFinite(Number(form[key])) && Number(form[key]) >= 0 && Number(form[key]) <= 100);

  function update(key, value) {
    setForm(current => ({ ...current, [key]: value }));
  }

  function selectProfile(profile) {
    setForm(current => ({
      ...current,
      piProfileId: profile.id,
      dominance: profile.dominance,
      extraversion: profile.extraversion,
      patience: profile.patience,
      formality: profile.formality,
    }));
  }

  async function submit() {
    if (!valid || saving) return;
    setSaving(true);
    setError('');
    try {
      await onSave({
        ...form,
        dominance: Number(form.dominance),
        extraversion: Number(form.extraversion),
        patience: Number(form.patience),
        formality: Number(form.formality),
      });
    } catch (saveError) {
      setError(saveError?.message || 'Unable to save the employee PI profile.');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-8" role="dialog" aria-modal="true" aria-label={initialEmployee ? 'Edit employee PI profile' : 'Add employee PI profile'}>
      <button className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onCancel} aria-label="Cancel"/>
      <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/15 bg-slate-900 p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white">{initialEmployee ? 'Edit Employee PI Result' : 'Add Completed Employee PI Result'}</h2>
            <p className="mt-1 text-sm text-white/40">Enter the actual profile and exact PI factor values from the completed assessment.</p>
          </div>
          <button type="button" onClick={onCancel} className="rounded-xl border border-white/10 p-2 text-white/40 hover:text-white" aria-label="Close form"><X size={18}/></button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">Employee name</span>
            <input value={form.name} onChange={event => update('name', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-400/40"/>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">Position</span>
            <input value={form.position} onChange={event => update('position', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-400/40"/>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">Department / team</span>
            <input value={form.department} onChange={event => update('department', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-400/40"/>
          </label>
          <label className="block">
            <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">Assessment date</span>
            <input type="date" value={form.assessmentDate} onChange={event => update('assessmentDate', event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-400/40"/>
          </label>
        </div>

        <div className="mt-5">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">Completed PI reference profile</p>
          <div className="grid max-h-56 grid-cols-2 gap-2 overflow-y-auto sm:grid-cols-3">
            {PI_PROFILES.map(profile => (
              <button key={profile.id} type="button" onClick={() => selectProfile(profile)} className={cx('flex items-center gap-2 rounded-xl border px-3 py-2 text-left transition', form.piProfileId === profile.id ? 'border-sky-400/40 bg-sky-500/15 text-white' : 'border-white/10 text-white/55 hover:bg-white/8')}>
                <span className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: profile.color }}/>
                <span className="truncate text-sm font-medium">{profile.name}</span>
              </button>
            ))}
          </div>
          <p className="mt-2 text-xs text-white/30">Selecting a profile loads its reference values. Replace them below with the employee’s actual PI scores.</p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {FACTORS.map(([key, label, abbreviation]) => (
            <label key={key} className="rounded-2xl border border-white/10 bg-black/20 p-3">
              <span className="block text-[10px] font-semibold uppercase tracking-widest text-white/35">{abbreviation} · {label}</span>
              <input type="number" min="0" max="100" step="1" value={form[key]} onChange={event => update(key, event.target.value)} className="mt-2 w-full bg-transparent text-2xl font-bold text-white outline-none"/>
              <div className="mt-2 h-1 rounded-full bg-white/10"><div className="h-1 rounded-full bg-sky-400" style={{ width: `${Math.max(0, Math.min(100, Number(form[key]) || 0))}%` }}/></div>
            </label>
          ))}
        </div>

        <label className="mt-5 block">
          <span className="mb-1.5 block text-xs font-semibold uppercase tracking-widest text-white/40">Notes</span>
          <textarea rows={4} value={form.notes} onChange={event => update('notes', event.target.value)} className="w-full resize-y rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-400/40" placeholder="Optional context about the source PI result…"/>
        </label>

        {error && <div className="mt-4 rounded-xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</div>}

        <div className="mt-5 flex justify-end gap-3">
          <button type="button" onClick={onCancel} className="rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/55 hover:bg-white/5">Cancel</button>
          <button type="button" onClick={submit} disabled={!valid || saving} className={cx('flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition', valid && !saving ? 'border-sky-400/40 bg-sky-500/20 text-white hover:bg-sky-500/30' : 'cursor-not-allowed border-white/10 bg-white/5 text-white/25')}>
            <Save size={15}/> {saving ? 'Saving…' : initialEmployee ? 'Save Changes' : 'Save Employee PI Result'}
          </button>
        </div>
      </div>
    </div>
  );
}

async function readResponse(response) {
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || `Request failed with ${response.status}`);
  return data;
}

export default function EmployeeTab({ employees = [], setEmployees, loading, loadError, reloadEmployees }) {
  const [formEmployee, setFormEmployee] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [viewingId, setViewingId] = useState(null);
  const [query, setQuery] = useState('');
  const [actionError, setActionError] = useState('');

  const viewing = employees.find(employee => employee.id === viewingId) || null;
  const filteredEmployees = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return employees;
    return employees.filter(employee => `${employee.name} ${employee.position} ${employee.department} ${profileFor(employee).name}`.toLowerCase().includes(normalized));
  }, [employees, query]);

  async function saveEmployee(payload) {
    const editing = Boolean(formEmployee?.id);
    const response = await fetch(editing ? `/api/employees/${formEmployee.id}` : '/api/employees', {
      method: editing ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      signal: AbortSignal.timeout(15000),
    });
    const data = await readResponse(response);
    setEmployees(current => editing ? current.map(employee => employee.id === data.employee.id ? data.employee : employee) : [...current, data.employee].sort((a, b) => a.name.localeCompare(b.name)));
    setShowForm(false);
    setFormEmployee(null);
    setActionError('');
  }

  async function deleteEmployee(employee) {
    if (!window.confirm(`Delete ${employee.name}'s stored PI result?`)) return;
    setActionError('');
    try {
      const response = await fetch(`/api/employees/${employee.id}`, { method: 'DELETE', signal: AbortSignal.timeout(15000) });
      await readResponse(response);
      setEmployees(current => current.filter(item => item.id !== employee.id));
      if (viewingId === employee.id) setViewingId(null);
    } catch (error) {
      setActionError(error?.message || 'Unable to delete the employee PI profile.');
    }
  }

  function openCreate() {
    setFormEmployee(null);
    setShowForm(true);
  }

  function openEdit(employee) {
    setFormEmployee(employee);
    setShowForm(true);
  }

  if (viewing) {
    return <EmployeeDetail employee={viewing} onBack={() => setViewingId(null)} onEdit={openEdit} onDelete={deleteEmployee}/>;
  }

  return (
    <div className="p-5 sm:p-6">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white">Employee PI Profiles</h1>
          <p className="mt-1 text-sm text-white/40">Persist completed PI profile names and exact D/E/P/F values in Neon.</p>
        </div>
        <div className="flex gap-2">
          <button type="button" onClick={reloadEmployees} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white/55 hover:bg-white/10 hover:text-white" disabled={loading}>
            <RefreshCw size={15} className={loading ? 'animate-spin' : ''}/> Refresh
          </button>
          <button type="button" onClick={openCreate} className="flex items-center gap-2 rounded-2xl border border-sky-400/40 bg-sky-500/20 px-4 py-2.5 text-sm font-semibold text-white hover:bg-sky-500/30">
            <Plus size={16}/> Add PI Result
          </button>
        </div>
      </div>

      <div className="mb-5 grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto]">
        <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
          <Search size={16} className="text-white/30"/>
          <input value={query} onChange={event => setQuery(event.target.value)} placeholder="Search employee, position, department, or PI profile…" className="w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25"/>
        </div>
        <div className="flex items-center gap-2 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
          <Database size={16}/> {employees.length} stored record{employees.length === 1 ? '' : 's'}
        </div>
      </div>

      {(loadError || actionError) && (
        <div className="mb-5 rounded-2xl border border-red-400/20 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {actionError || loadError}
        </div>
      )}

      {loading ? (
        <div className="flex min-h-[320px] items-center justify-center rounded-3xl border border-white/10 bg-white/[0.025] text-sm text-white/40">
          <RefreshCw size={18} className="mr-2 animate-spin"/> Loading employee PI records…
        </div>
      ) : filteredEmployees.length === 0 ? (
        <div className="flex min-h-[320px] flex-col items-center justify-center rounded-3xl border border-dashed border-white/15 text-center">
          <User size={40} className="mb-4 text-white/15"/>
          <p className="text-lg font-semibold text-white/40">{employees.length ? 'No matching employees' : 'No employee PI results stored yet'}</p>
          <p className="mt-1 max-w-md text-sm text-white/25">Add the completed PI profile and exact factor values. The app will calculate directional crosswalk summaries from those source scores.</p>
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredEmployees.map(employee => {
            const profile = profileFor(employee);
            const factors = employeeFactors(employee, profile);
            return (
              <button key={employee.id} type="button" onClick={() => setViewingId(employee.id)} className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-white/25 hover:bg-white/[0.08]">
                <div className="mb-4 flex items-center gap-3">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl text-xl font-black text-slate-900" style={{ background: profile.color }}>
                    {(employee.name || 'U')[0].toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="truncate font-bold text-white">{employee.name}</p>
                    <p className="truncate text-xs text-white/40">{employee.position || 'Position not entered'}</p>
                  </div>
                </div>
                <p className="mb-2 truncate text-xs text-white/30">{employee.department || 'Department not entered'}</p>
                <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: profile.color }}/><span className="text-xs font-medium text-white/60">{profile.name}</span></div>
                <div className="mt-4 grid grid-cols-4 gap-1">
                  {FACTORS.map(([key, , abbreviation]) => (
                    <div key={key} className="rounded-lg bg-black/20 px-1.5 py-2 text-center"><div className="text-[9px] text-white/25">{abbreviation}</div><div className="text-xs font-semibold text-white/70">{factors[key]}</div></div>
                  ))}
                </div>
                <p className="mt-3 flex items-center justify-end gap-1 text-xs text-white/25 transition group-hover:text-white/45">Open crosswalk <ChevronRight size={13}/></p>
              </button>
            );
          })}
        </div>
      )}

      {showForm && <EmployeeForm initialEmployee={formEmployee} onSave={saveEmployee} onCancel={() => { setShowForm(false); setFormEmployee(null); }}/>} 
    </div>
  );
}
