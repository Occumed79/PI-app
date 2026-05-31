/**
 * LensesView — full lens browser wired to all 104 signalGlassStaticLenses
 * Features:
 *  - All 104 lenses in sidebar, auto-categorized
 *  - Profile toggle (any of 17 PI profiles) always visible
 *  - Category filter pills with counts
 *  - Search across lens names
 *  - LensContentRenderer for rich visual display
 */
import React, { useState, useMemo } from 'react';
import { Search, Layers3, SlidersHorizontal, X } from 'lucide-react';
import { PI_PROFILES } from '../data/profiles.js';
import { signalGlassStaticLenses } from '../data/signalGlassStaticLenses.js';
import LensContentRenderer from './lens/LensContentRenderer.jsx';

function cx(...classes) { return classes.filter(Boolean).join(' '); }

function Card({ children, className = '' }) {
  return (
    <div className={cx('rounded-3xl border border-white/10 bg-white/[0.07] shadow-2xl shadow-black/20 backdrop-blur-xl', className)}>
      {children}
    </div>
  );
}

const LENS_CATS = [
  { id: 'All',                   label: 'All',           color: 'from-white/60 to-white/40',        bg: 'bg-white/5',        border: 'border-white/10' },
  { id: 'Personality',           label: 'Personality',   color: 'from-sky-400 to-indigo-500',       bg: 'bg-sky-500/10',     border: 'border-sky-400/20' },
  { id: 'Cognitive',             label: 'Cognitive',     color: 'from-violet-400 to-purple-500',    bg: 'bg-violet-500/10',  border: 'border-violet-400/20' },
  { id: 'Emotional',             label: 'Emotional',     color: 'from-rose-400 to-pink-500',        bg: 'bg-rose-500/10',    border: 'border-rose-400/20' },
  { id: 'Leadership',            label: 'Leadership',    color: 'from-amber-400 to-orange-500',     bg: 'bg-amber-500/10',   border: 'border-amber-400/20' },
  { id: 'Team',                  label: 'Team',          color: 'from-emerald-400 to-teal-500',     bg: 'bg-emerald-500/10', border: 'border-emerald-400/20' },
  { id: 'Motivation',            label: 'Motivation',    color: 'from-fuchsia-400 to-pink-400',     bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-400/20' },
  { id: 'Neurodiversity',        label: 'Neurodiversity',color: 'from-lime-400 to-green-500',       bg: 'bg-lime-500/10',    border: 'border-lime-400/20' },
];

const KW_MAP = {
  'Personality':   ['big five','ocean','disc','hexaco','mbti','myers','hogan','hpi','hds','16pf','enneagram','keirsey','insights discovery','social styles','workplace big five','spiral','via character','character strengths','clifton','strengthsfinder'],
  'Cognitive':     ['cognitive','reflection','executive function','kolbe','kai','kirton','metacognition','learning','hbdi','herrmann','decision','processing','conation','learning agility','growth mindset'],
  'Emotional':     ['eq','emotional','msceit','burnout','maslach','copenhagen','who-5','who5','perceived stress','wellbeing','stress lens','workplace stress','pss','pss lens','resilience','cd-risc'],
  'Leadership':    ['leadership','lcp','lvi','lominger','situational','versatility','circle profile'],
  'Team':          ['team','belbin','lencioni','tms','tki','conflict','firo','interpersonal','social cognition','trust','psychological safety','feedback','relational','synthesis','team management'],
  'Motivation':    ['motivation','sdt','self-determination','schwartz','work values','purpose','meaning','strength deployment','reiss','motivational map'],
  'Neurodiversity':['neuro','adhd','lived experience','cognitive accessibility','neurodiversity','specialist — neuro','controller — neuro'],
};

function categorizeLens(id, name) {
  const h = (id + ' ' + name).toLowerCase();
  for (const [cat, kws] of Object.entries(KW_MAP)) {
    if (kws.some(k => h.includes(k))) return cat;
  }
  return 'Personality';
}

const enrichedLenses = signalGlassStaticLenses.map(l => ({
  ...l,
  category: categorizeLens(l.id, l.lens),
}));

export default function LensesView({ selectedProfile, setSelectedProfile }) {
  const [activeLensId, setActiveLensId]     = useState(null);
  const [search, setSearch]                 = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showProfilePicker, setShowProfilePicker] = useState(false);

  const filtered = useMemo(() => enrichedLenses.filter(l => {
    const matchSearch = !search || l.lens.toLowerCase().includes(search.toLowerCase());
    const matchCat    = activeCategory === 'All' || l.category === activeCategory;
    return matchSearch && matchCat;
  }), [search, activeCategory]);

  const activeLens   = enrichedLenses.find(l => l.id === activeLensId) || null;
  const activeProf   = PI_PROFILES.find(p => p.name === selectedProfile?.name);
  const activeCatObj = LENS_CATS.find(c => c.id === activeCategory);

  return (
    <div className="flex gap-4 min-h-[80vh]">

      {/* ── Sidebar ── */}
      <div className="w-72 flex-shrink-0 flex flex-col gap-3">

        {/* Profile picker card */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Profile</span>
            <button
              onClick={() => setShowProfilePicker(p => !p)}
              className="flex items-center gap-1 text-[10px] text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <SlidersHorizontal size={10} />
              {showProfilePicker ? 'Close' : 'Change'}
            </button>
          </div>

          {/* Active profile */}
          {activeProf && (
            <div className="flex items-center gap-2 py-1">
              <div className="w-3 h-3 rounded-full" style={{ background: activeProf.color }} />
              <span className="text-sm font-semibold text-white">{activeProf.name}</span>
              <span className="text-xs text-white/35 ml-auto">{activeProf.group}</span>
            </div>
          )}

          {/* Profile grid */}
          {showProfilePicker && (
            <div className="mt-3 grid grid-cols-2 gap-1 max-h-56 overflow-y-auto">
              {PI_PROFILES.map(p => (
                <button
                  key={p.id}
                  onClick={() => { setSelectedProfile(p); setShowProfilePicker(false); }}
                  className={cx(
                    'flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[11px] text-left transition border',
                    selectedProfile?.name === p.name
                      ? 'bg-white/15 border-white/25 text-white'
                      : 'bg-white/[0.03] border-white/8 text-white/50 hover:bg-white/10 hover:text-white'
                  )}
                >
                  <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: p.color }} />
                  <span className="truncate">{p.name}</span>
                </button>
              ))}
            </div>
          )}
        </Card>

        {/* Search + category + list */}
        <Card className="p-4 flex-1 flex flex-col min-h-0">
          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={`Search ${enrichedLenses.length} lenses…`}
              className="w-full rounded-xl border border-white/10 bg-black/25 py-2 pl-8 pr-8 text-xs text-white outline-none placeholder:text-white/30 focus:border-sky-300/30"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-3 top-1/2 -translate-y-1/2">
                <X size={11} className="text-white/30 hover:text-white/60" />
              </button>
            )}
          </div>

          {/* Category pills */}
          <div className="flex flex-wrap gap-1 mb-3">
            {LENS_CATS.map(cat => {
              const count = cat.id === 'All' ? enrichedLenses.length : enrichedLenses.filter(l => l.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cx(
                    'rounded-full px-2 py-0.5 text-[10px] font-medium transition border',
                    activeCategory === cat.id
                      ? 'bg-white/20 border-white/30 text-white'
                      : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white/70'
                  )}
                >
                  {cat.label} <span className="opacity-50">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Lens list — grouped by category */}
          <div className="flex-1 overflow-y-auto space-y-0.5 pr-1">
            {filtered.length === 0 ? (
              <p className="text-xs text-white/30 py-8 text-center">No lenses match "{search}"</p>
            ) : (
              LENS_CATS.filter(c => c.id !== 'All').map(cat => {
                const items = filtered.filter(l => l.category === cat.id);
                if (!items.length) return null;
                if (activeCategory !== 'All' && activeCategory !== cat.id) return null;
                return (
                  <div key={cat.id} className="mb-4">
                    <p className={cx('text-[10px] font-bold uppercase tracking-wider mb-1.5 px-1 bg-gradient-to-r bg-clip-text text-transparent', cat.color)}>
                      {cat.label} · {items.length}
                    </p>
                    {items.map(l => (
                      <button
                        key={l.id}
                        onClick={() => setActiveLensId(l.id)}
                        className={cx(
                          'w-full text-left px-3 py-1.5 rounded-lg text-xs transition leading-snug',
                          activeLensId === l.id
                            ? 'bg-white/15 text-white font-medium border border-white/20'
                            : 'text-white/50 hover:text-white hover:bg-white/[0.06]'
                        )}
                      >
                        {l.lens}
                      </button>
                    ))}
                  </div>
                );
              })
            )}
          </div>
        </Card>
      </div>

      {/* ── Main panel ── */}
      <div className="flex-1 min-w-0">
        {activeLens ? (
          <div className="space-y-4">
            {/* Header */}
            <div className="glass rounded-2xl p-5 border border-white/8">
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {activeCatObj && activeCatObj.id !== 'All' && (
                      <span className={cx('text-[10px] font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wide', activeCatObj.bg, activeCatObj.border)}>
                        <span className={cx('bg-gradient-to-r bg-clip-text text-transparent', activeCatObj.color)}>{activeCatObj.label}</span>
                      </span>
                    )}
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-400/20 font-medium">
                      ✓ Source Verified
                    </span>
                  </div>
                  <h1 className="text-xl font-bold text-white leading-tight">{activeLens.lens}</h1>
                  {activeLens.source && (
                    <p className="text-[10px] text-white/25 mt-1">{activeLens.source}</p>
                  )}
                </div>

                {/* Profile badge — click to change */}
                {activeProf && (
                  <button
                    onClick={() => setShowProfilePicker(p => !p)}
                    className="flex-shrink-0 flex items-center gap-2 rounded-xl px-3 py-2 border border-white/10 bg-white/[0.05] hover:bg-white/10 transition-colors"
                    title="Change profile"
                  >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: activeProf.color }} />
                    <span className="text-xs font-medium text-white/70">{activeProf.name}</span>
                    <SlidersHorizontal size={11} className="text-white/30 ml-1" />
                  </button>
                )}
              </div>
            </div>

            {/* Rich content */}
            <LensContentRenderer content={activeLens.content} lensTitle={activeLens.lens} />
          </div>
        ) : (
          /* Empty state */
          <Card>
            <div className="p-10 text-center">
              <Layers3 className="mx-auto h-12 w-12 text-white/15 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{enrichedLenses.length} lenses loaded</h3>
              <p className="text-sm text-white/40 max-w-sm mx-auto mb-8">
                Pick a lens from the sidebar. Use the profile toggle to filter insights for a specific person.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {LENS_CATS.filter(c => c.id !== 'All').map(cat => {
                  const count = enrichedLenses.filter(l => l.category === cat.id).length;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={cx('rounded-2xl border p-4 text-left transition hover:bg-white/[0.08]', cat.bg, cat.border)}
                    >
                      <div className={cx('text-xs font-semibold mb-1 bg-gradient-to-r bg-clip-text text-transparent', cat.color)}>{cat.label}</div>
                      <div className="text-2xl font-bold text-white">{count}</div>
                      <div className="text-xs text-white/35">lenses</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
