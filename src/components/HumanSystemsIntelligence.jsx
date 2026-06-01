import React, { useMemo, useState } from 'react';
import { BookOpen, Grid, Search, Users, X } from 'lucide-react';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';
import { PI_PROFILES } from '../data/profiles.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function cleanText(value) {
  return String(value || '')
    .replace(/\\u2011/g, '‑')
    .replace(/\\u2013/g, '–')
    .replace(/\\u2014/g, '—')
    .replace(/\\u00a0/g, ' ')
    .replace(/\\u00b0/g, '°')
    .replace(/\\u2019/g, '’')
    .replace(/\\u201c/g, '“')
    .replace(/\\u201d/g, '”');
}

const CATEGORY_STYLES = {
  Personality: 'text-indigo-300 bg-indigo-500/10 border-indigo-400/20',
  Cognitive: 'text-sky-300 bg-sky-500/10 border-sky-400/20',
  Motivation: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20',
  Team: 'text-orange-300 bg-orange-500/10 border-orange-400/20',
  Emotional: 'text-pink-300 bg-pink-500/10 border-pink-400/20',
  Leadership: 'text-yellow-300 bg-yellow-500/10 border-yellow-400/20',
  Wellbeing: 'text-purple-300 bg-purple-500/10 border-purple-400/20',
  Neurodiversity: 'text-teal-300 bg-teal-500/10 border-teal-400/20',
  Other: 'text-slate-300 bg-slate-500/10 border-slate-400/20',
};

function categoryStyle(category) {
  return CATEGORY_STYLES[category] || CATEGORY_STYLES.Other;
}

function Card({ children, className = '' }) {
  return <div className={cx('rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/20 backdrop-blur-xl', className)}>{children}</div>;
}

function Badge({ children, className = '' }) {
  return <span className={cx('inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium', className)}>{children}</span>;
}

function CategoryBadge({ category }) {
  return <Badge className={categoryStyle(category)}>{cleanText(category || 'Other')}</Badge>;
}

function EmptyVisualShell({ lens }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/25 p-4">
      <div className="flex min-h-28 items-center justify-center rounded-xl border border-dashed border-white/15 bg-white/[0.025] p-5 text-center">
        <div>
          <div className="text-sm font-semibold text-white/80">{cleanText(lens.visualLabel || lens.visualType || 'Visual shell')}</div>
          <div className="mt-1 font-mono text-xs text-white/35">{cleanText(lens.visualType || 'custom')}</div>
          <div className="mt-4 rounded-xl border border-amber-400/20 bg-amber-500/[0.06] px-4 py-2 text-xs font-semibold text-amber-200">
            Visual type assigned. Data not yet populated.
          </div>
        </div>
      </div>
    </div>
  );
}

function Header({ categoryCounts }) {
  return (
    <Card className="overflow-hidden p-6">
      <div className="grid gap-6 lg:grid-cols-[1fr_280px]">
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge className="border-white/10 bg-white/10 text-white/70">104 lenses</Badge>
            <Badge className="border-white/10 bg-white/10 text-white/70">17 PI profiles</Badge>
            <Badge className="border-emerald-400/20 bg-emerald-500/10 text-emerald-300">No fake data</Badge>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl">Human Systems Intelligence</h1>
          <p className="mt-3 max-w-4xl text-sm leading-6 text-white/55">
            Every lens applies to every PI profile. Visual types come from the lens registry. Empty visuals stay empty until real data is populated.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/40">By category</div>
          <div className="space-y-2">
            {categoryCounts.map(([category, count]) => (
              <div key={category} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-white/55">{cleanText(category)}</span>
                <span className="font-semibold text-white">{count}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

function ProfileSelector({ activeProfileId, setActiveProfileId }) {
  return (
    <Card className="p-5">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><Users size={20} /> PI Profiles</h2>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PI_PROFILES.map((profile) => (
          <button
            key={profile.id}
            type="button"
            onClick={() => setActiveProfileId(profile.id)}
            className={cx(
              'rounded-2xl border p-4 text-left transition',
              activeProfileId === profile.id
                ? 'border-sky-300/40 bg-sky-500/15 text-white'
                : 'border-white/10 bg-white/[0.035] text-white/70 hover:bg-white/[0.07]'
            )}
          >
            <div className="font-bold">{cleanText(profile.name)}</div>
            <div className="mt-1 text-xs text-white/45">{cleanText(profile.group)} · {cleanText(profile.tagline)}</div>
            <p className="mt-3 text-xs leading-5 text-white/50">{cleanText(profile.short)}</p>
          </button>
        ))}
      </div>
    </Card>
  );
}

function LensRegistry({ lenses, onOpen }) {
  return (
    <Card className="p-5">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold text-white"><BookOpen size={20} /> Lens Visual Registry</h2>
      <div className="overflow-x-auto rounded-2xl border border-white/10">
        <table className="w-full min-w-[980px] text-left text-sm">
          <thead className="bg-white/[0.04] text-xs uppercase tracking-[0.16em] text-white/30">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Lens</th>
              <th className="px-4 py-3">Category</th>
              <th className="px-4 py-3">Visual Type</th>
              <th className="px-4 py-3">Visual Label</th>
              <th className="px-4 py-3">Why</th>
            </tr>
          </thead>
          <tbody>
            {lenses.map((lens) => (
              <tr key={lens.id} onClick={() => onOpen(lens)} className="cursor-pointer border-t border-white/5 hover:bg-white/[0.055]">
                <td className="px-4 py-3 text-xs text-white/25">{HSI_LENS_REGISTRY.indexOf(lens) + 1}</td>
                <td className="px-4 py-3">
                  <div className="font-semibold text-white">{cleanText(lens.lens)}</div>
                  <div className="mt-0.5 font-mono text-xs text-white/25">{cleanText(lens.id)}</div>
                </td>
                <td className="px-4 py-3"><CategoryBadge category={lens.category} /></td>
                <td className="px-4 py-3 font-mono text-xs text-white/55">{cleanText(lens.visualType)}</td>
                <td className="px-4 py-3 text-xs text-white/60">{cleanText(lens.visualLabel)}</td>
                <td className="px-4 py-3 text-xs leading-5 text-white/45">{cleanText(lens.why)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  );
}

function VisualGallery({ lenses, profile, onOpen }) {
  return (
    <div className="space-y-4">
      <Card className="p-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="text-xs uppercase tracking-[0.16em] text-white/35">Active profile context</div>
            <div className="mt-1 text-xl font-bold text-white">{cleanText(profile.name)}</div>
            <div className="text-sm text-white/45">{cleanText(profile.tagline)} · {cleanText(profile.group)}</div>
          </div>
          <Badge className="border-sky-400/25 bg-sky-500/10 text-sky-300">{lenses.length} visual shells</Badge>
        </div>
      </Card>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {lenses.map((lens) => (
          <button key={lens.id} type="button" onClick={() => onOpen(lens)} className="rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:bg-white/[0.075]">
            <div className="mb-3 flex items-start justify-between gap-3">
              <CategoryBadge category={lens.category} />
              <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-0.5 font-mono text-xs text-white/35">{cleanText(lens.visualType)}</span>
            </div>
            <EmptyVisualShell lens={lens} />
            <h3 className="mt-4 text-base font-bold leading-snug text-white">{cleanText(lens.lens)}</h3>
            <div className="mt-1 text-sm text-white/50">{cleanText(lens.visualLabel)}</div>
            <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/45">{cleanText(lens.why)}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

function LensModal({ lens, profile, onClose }) {
  if (!lens) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 shadow-2xl">
        <div className="sticky top-0 flex items-start justify-between gap-4 border-b border-white/10 bg-slate-950/95 p-5 backdrop-blur">
          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              <CategoryBadge category={lens.category} />
              <Badge className="border-white/10 bg-white/10 text-white/55">Viewing through {cleanText(profile.name)}</Badge>
            </div>
            <h2 className="text-2xl font-bold text-white">{cleanText(lens.lens)}</h2>
          </div>
          <button type="button" onClick={onClose} className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 text-white/50 hover:text-white"><X size={18} /></button>
        </div>
        <div className="space-y-4 p-5">
          <EmptyVisualShell lens={lens} />
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs uppercase tracking-[0.16em] text-white/30">Visual Type</div>
              <div className="mt-2 font-mono text-sm text-white">{cleanText(lens.visualType)}</div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <div className="text-xs uppercase tracking-[0.16em] text-white/30">Visual Label</div>
              <div className="mt-2 text-sm font-semibold text-white">{cleanText(lens.visualLabel)}</div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="text-xs uppercase tracking-[0.16em] text-white/30">Why this visual</div>
            <p className="mt-2 text-sm leading-6 text-white/65">{cleanText(lens.why)}</p>
          </div>
          <div className="rounded-2xl border border-sky-400/20 bg-sky-500/[0.06] p-4 text-sm leading-6 text-sky-100/80">
            This lens applies to {cleanText(profile.name)} the same way it applies to all 17 PI profiles. No profile-specific data has been populated here yet.
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HumanSystemsIntelligence() {
  const [tab, setTab] = useState('gallery');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('All');
  const [activeProfileId, setActiveProfileId] = useState(PI_PROFILES[0]?.id || '');
  const [openLens, setOpenLens] = useState(null);

  const activeProfile = PI_PROFILES.find((profile) => profile.id === activeProfileId) || PI_PROFILES[0];
  const categories = useMemo(() => ['All', ...Array.from(new Set(HSI_LENS_REGISTRY.map((lens) => lens.category || 'Other')))], []);
  const categoryCounts = useMemo(() => Object.entries(HSI_LENS_REGISTRY.reduce((acc, lens) => {
    const cat = lens.category || 'Other';
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {})).sort((a, b) => b[1] - a[1]), []);

  const filteredLenses = useMemo(() => {
    const q = query.trim().toLowerCase();
    return HSI_LENS_REGISTRY.filter((lens) => {
      if (category !== 'All' && (lens.category || 'Other') !== category) return false;
      return `${lens.lens} ${lens.id} ${lens.category} ${lens.visualType} ${lens.visualLabel} ${lens.why}`.toLowerCase().includes(q);
    });
  }, [query, category]);

  const tabs = [
    { id: 'gallery', label: 'Visual Gallery', icon: Grid },
    { id: 'registry', label: 'Lens Registry', icon: BookOpen },
    { id: 'profiles', label: 'PI Profiles', icon: Users },
  ];

  return (
    <div className="space-y-5">
      <Header categoryCounts={categoryCounts} />

      <div className="flex flex-wrap gap-2">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button key={id} type="button" onClick={() => setTab(id)} className={cx('inline-flex items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition', tab === id ? 'border-sky-300/40 bg-sky-500/15 text-white' : 'border-white/10 bg-white/[0.04] text-white/50 hover:bg-white/10 hover:text-white')}>
            <Icon size={16} /> {label}
          </button>
        ))}
      </div>

      {tab !== 'profiles' && (
        <Card className="p-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/30" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Filter lenses..." className="w-full rounded-2xl border border-white/10 bg-black/30 py-2.5 pl-9 pr-4 text-sm text-white outline-none placeholder:text-white/30" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((item) => (
                <button key={item} type="button" onClick={() => setCategory(item)} className={cx('rounded-xl border px-3 py-1.5 text-xs transition', category === item ? 'border-sky-400/40 bg-sky-500/15 text-sky-300' : 'border-white/10 text-white/45 hover:bg-white/10 hover:text-white')}>{cleanText(item)}</button>
              ))}
            </div>
          </div>
          <div className="mt-3 text-xs text-white/35">{filteredLenses.length} of {HSI_LENS_REGISTRY.length} lenses · active profile: {cleanText(activeProfile.name)}</div>
        </Card>
      )}

      {tab === 'gallery' && <VisualGallery lenses={filteredLenses} profile={activeProfile} onOpen={setOpenLens} />}
      {tab === 'registry' && <LensRegistry lenses={filteredLenses} onOpen={setOpenLens} />}
      {tab === 'profiles' && <ProfileSelector activeProfileId={activeProfileId} setActiveProfileId={(id) => { setActiveProfileId(id); setTab('gallery'); }} />}

      <LensModal lens={openLens} profile={activeProfile} onClose={() => setOpenLens(null)} />
    </div>
  );
}
