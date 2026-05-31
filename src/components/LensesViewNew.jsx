/**
 * LensesView — full lens browser wired to all 104 signalGlassStaticLenses
 * Uses the same local profiles array as the rest of App.jsx
 */
import React, { useState, useMemo } from 'react';
import { Search, Layers3, SlidersHorizontal, X, ChevronDown, ChevronUp, FileText } from 'lucide-react';
import { signalGlassStaticLenses } from '../data/signalGlassStaticLenses.js';

function cx(...classes) { return classes.filter(Boolean).join(' '); }

function Card({ children, className = '' }) {
  return (
    <div className={cx('rounded-3xl border border-white/10 bg-white/[0.07] shadow-xl shadow-black/20 backdrop-blur-xl', className)}>
      {children}
    </div>
  );
}

// ── Profile colors (keyed by lowercase name) ─────────────────────────────────
const PROFILE_COLORS = {
  analyzer: '#38bdf8', controller: '#818cf8', specialist: '#a78bfa',
  strategist: '#60a5fa', venturer: '#f472b6', altruist: '#34d399',
  captain: '#fb923c', collaborator: '#4ade80', maverick: '#e879f9',
  persuader: '#f59e0b', promoter: '#f87171', adapter: '#2dd4bf',
  'craftsman / artisan': '#a3e635', craftsman: '#a3e635',
  guardian: '#86efac', operator: '#67e8f9',
  individualist: '#c084fc', scholar: '#93c5fd',
};
const GROUPS = {
  Analytical: 'from-sky-400 to-indigo-500',
  Social: 'from-fuchsia-400 to-rose-500',
  Stabilizing: 'from-emerald-400 to-teal-500',
  Persistent: 'from-amber-400 to-orange-400',
};

// ── Lens categories ───────────────────────────────────────────────────────────
const LENS_CATS = [
  { id: 'All',            label: 'All',           color: 'from-white/50 to-white/30',        bg: 'bg-white/5',        border: 'border-white/10' },
  { id: 'Personality',    label: 'Personality',   color: 'from-sky-400 to-indigo-500',       bg: 'bg-sky-500/10',     border: 'border-sky-400/20' },
  { id: 'Cognitive',      label: 'Cognitive',     color: 'from-violet-400 to-purple-500',    bg: 'bg-violet-500/10',  border: 'border-violet-400/20' },
  { id: 'Emotional',      label: 'Emotional',     color: 'from-rose-400 to-pink-500',        bg: 'bg-rose-500/10',    border: 'border-rose-400/20' },
  { id: 'Leadership',     label: 'Leadership',    color: 'from-amber-400 to-orange-500',     bg: 'bg-amber-500/10',   border: 'border-amber-400/20' },
  { id: 'Team',           label: 'Team',          color: 'from-emerald-400 to-teal-500',     bg: 'bg-emerald-500/10', border: 'border-emerald-400/20' },
  { id: 'Motivation',     label: 'Motivation',    color: 'from-fuchsia-400 to-pink-400',     bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-400/20' },
  { id: 'Neurodiversity', label: 'Neuro',         color: 'from-lime-400 to-green-500',       bg: 'bg-lime-500/10',    border: 'border-lime-400/20' },
];

const KW_MAP = {
  Personality:    ['big five','ocean','disc','hexaco','mbti','myers','hogan','hpi','hds','16pf','enneagram','keirsey','insights discovery','social styles','workplace big five','spiral','character strengths','clifton'],
  Cognitive:      ['cognitive','reflection','executive function','kolbe','kai','kirton','metacognition','learning','hbdi','herrmann','decision','processing','conation','growth mindset'],
  Emotional:      ['eq','emotional','msceit','burnout','maslach','copenhagen','who-5','who5','perceived stress','wellbeing','stress lens','workplace stress','pss','resilience','cd-risc'],
  Leadership:     ['leadership','lcp','lvi','lominger','situational','versatility','circle profile'],
  Team:           ['team','belbin','lencioni','tms','tki','conflict','firo','interpersonal','social cognition','trust','psychological safety','feedback','relational','synthesis'],
  Motivation:     ['motivation','sdt','self-determination','schwartz','work values','purpose','meaning','strength deployment','reiss','motivational map','via'],
  Neurodiversity: ['neuro','adhd','lived experience','cognitive accessibility'],
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

// ── Markdown table parser ─────────────────────────────────────────────────────
function parseMarkdownTables(content) {
  const lines = content.split('\n');
  const tables = [];
  let tableLines = [];
  let currentTitle = '';

  for (const line of lines) {
    if (line.startsWith('### ') || line.startsWith('## ')) {
      if (tableLines.length >= 3) tables.push({ title: currentTitle, lines: tableLines });
      tableLines = [];
      currentTitle = line.replace(/^#+\s*/, '').trim();
    } else if (line.trim().startsWith('|')) {
      tableLines.push(line);
    } else {
      if (tableLines.length >= 3) tables.push({ title: currentTitle, lines: tableLines });
      tableLines = [];
    }
  }
  if (tableLines.length >= 3) tables.push({ title: currentTitle, lines: tableLines });

  return tables.map(t => {
    const headers = t.lines[0].split('|').map(h => h.trim()).filter(Boolean);
    const rows = t.lines.slice(2)
      .map(line => line.split('|').map(c => c.trim()).filter(Boolean))
      .filter(r => r.length > 0);
    return { title: t.title, headers, rows };
  }).filter(t => t.rows.length > 0);
}

// ── Level value helpers ───────────────────────────────────────────────────────
const LEVELS = ['Very Low','Low','Low-Moderate','Moderate','Moderate-High','High','Very High'];
const LEVEL_TO_PCT = { 'Very Low':6,'Low':22,'Low-Moderate':38,'Moderate':55,'Moderate-High':70,'High':83,'Very High':96 };
const LEVEL_COLOR = (pct) => pct >= 75 ? '#818cf8' : pct >= 50 ? '#34d399' : pct >= 30 ? '#f59e0b' : '#64748b';

function isLevel(v) { return LEVELS.includes(v); }
function levelPct(v) { return LEVEL_TO_PCT[v] ?? 50; }

// ── Rendered Table component ──────────────────────────────────────────────────
function RenderedTable({ table }) {
  const { title, headers, rows } = table;
  const isProfileCol0 = headers[0] && (
    headers[0].toLowerCase().includes('profile') ||
    rows.slice(0,3).some(r => PROFILE_COLORS[(r[0] || '').toLowerCase()])
  );

  return (
    <div className="rounded-2xl border border-white/8 overflow-hidden" style={{ background: 'rgba(15,23,42,0.6)' }}>
      {title && (
        <div className="px-5 py-3 border-b border-white/6" style={{ background: 'rgba(255,255,255,0.03)' }}>
          <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">{title}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/8">
              {headers.map((h, i) => (
                <th key={i} className="text-left px-4 py-3 text-white/40 font-semibold whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const profileName = isProfileCol0 ? (row[0] || '') : '';
              const color = PROFILE_COLORS[profileName.toLowerCase()] || '#818cf8';
              return (
                <tr key={ri} className="border-b border-white/[0.04] hover:bg-white/[0.03] transition-colors">
                  {headers.map((_, ci) => {
                    const val = row[ci] || '—';
                    const pct = isLevel(val) ? levelPct(val) : null;
                    return (
                      <td key={ci} className="px-4 py-3 leading-relaxed align-top">
                        {ci === 0 && isProfileCol0 ? (
                          <div className="flex items-center gap-2">
                            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: color }} />
                            <span className="font-semibold text-white/85 whitespace-nowrap">{val}</span>
                          </div>
                        ) : pct !== null ? (
                          <div className="flex items-center gap-2 min-w-[100px]">
                            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
                              <div
                                className="h-full rounded-full transition-all duration-700"
                                style={{ width: `${pct}%`, background: LEVEL_COLOR(pct) }}
                              />
                            </div>
                            <span className="text-[10px] text-white/50 whitespace-nowrap">{val}</span>
                          </div>
                        ) : (
                          <span className="text-white/55">{val}</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Prose block ───────────────────────────────────────────────────────────────
function ProseBlock({ lines }) {
  const text = lines
    .filter(l => !l.match(/^(LENS:|STATUS:|SOURCE:|IMPLEMENTATION NOTES|Primary output|Dedup|Translation method|SOURCE-DERIVED|---)/i))
    .join('\n')
    .trim()
    .replace(/\*\*([^*]+)\*\*/g, '$1') // strip bold
    .replace(/\*([^*]+)\*/g, '$1');    // strip italic

  if (!text || text.length < 10) return null;

  return (
    <div className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(15,23,42,0.5)' }}>
      <p className="text-sm text-white/55 leading-relaxed whitespace-pre-wrap">{text}</p>
    </div>
  );
}

// ── Main content renderer ─────────────────────────────────────────────────────
function LensContent({ content }) {
  const [showRaw, setShowRaw] = useState(false);

  const { tables, proseSections } = useMemo(() => {
    const tables = parseMarkdownTables(content);
    
    // Extract prose sections (non-table content)
    const lines = content.split('\n');
    const proseSections = [];
    let currentBlock = [];
    let inTable = false;

    for (const line of lines) {
      if (line.trim().startsWith('|')) {
        if (currentBlock.length > 0) {
          proseSections.push([...currentBlock]);
          currentBlock = [];
        }
        inTable = true;
      } else {
        if (inTable) inTable = false;
        currentBlock.push(line);
      }
    }
    if (currentBlock.length > 0) proseSections.push(currentBlock);

    return { tables, proseSections };
  }, [content]);

  if (!content) return null;

  // Find first meaningful prose section
  const introProse = proseSections.find(block => {
    const joined = block.join(' ').trim();
    return joined.length > 80 && !joined.match(/^(LENS:|STATUS:|SOURCE:|DEDUP|SignalGlass Lens|Source status|Source document|Duplicate handling|Translation method)/i);
  });

  return (
    <div className="space-y-4">
      {/* Intro prose if meaningful */}
      {introProse && <ProseBlock lines={introProse} />}

      {/* All parsed tables */}
      {tables.length > 0 ? (
        tables.map((table, i) => <RenderedTable key={i} table={table} />)
      ) : (
        /* No tables — show full prose */
        proseSections.map((block, i) => <ProseBlock key={i} lines={block} />)
      )}

      {/* Raw source toggle */}
      <div className="rounded-xl border border-white/6 overflow-hidden">
        <button
          onClick={() => setShowRaw(r => !r)}
          className="w-full flex items-center justify-between px-4 py-3 text-xs text-white/30 hover:text-white/50 hover:bg-white/[0.02] transition-all"
        >
          <div className="flex items-center gap-2">
            <FileText size={11} />
            <span>Raw source · {content.length.toLocaleString()} chars</span>
          </div>
          {showRaw ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
        </button>
        {showRaw && (
          <pre className="px-4 pb-4 text-[10px] text-white/25 leading-relaxed whitespace-pre-wrap font-mono max-h-80 overflow-y-auto border-t border-white/6">
            {content}
          </pre>
        )}
      </div>
    </div>
  );
}

// ── Main LensesView export ────────────────────────────────────────────────────
export default function LensesView({ profiles, selectedProfile, setSelectedProfile }) {
  const [activeLensId, setActiveLensId]         = useState(null);
  const [search, setSearch]                     = useState('');
  const [activeCategory, setActiveCategory]     = useState('All');
  const [showProfilePicker, setShowProfilePicker] = useState(false);

  const filtered = useMemo(() => enrichedLenses.filter(l => {
    const matchSearch = !search || l.lens.toLowerCase().includes(search.toLowerCase());
    const matchCat    = activeCategory === 'All' || l.category === activeCategory;
    return matchSearch && matchCat;
  }), [search, activeCategory]);

  const activeLens   = enrichedLenses.find(l => l.id === activeLensId) || null;
  const activeCatObj = LENS_CATS.find(c => c.id === (activeLens ? activeLens.category : activeCategory));
  const profColor    = selectedProfile ? (PROFILE_COLORS[selectedProfile.name.toLowerCase()] || '#818cf8') : '#818cf8';
  const profGroup    = selectedProfile?.group || '';

  return (
    <div style={{ display: 'flex', gap: '16px', minHeight: '80vh', alignItems: 'flex-start' }}>

      {/* ── Sidebar ── */}
      <div style={{ width: '280px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>

        {/* Profile selector */}
        <Card className="p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-[10px] font-semibold text-white/50 uppercase tracking-wider">Viewing as</span>
            <button
              onClick={() => setShowProfilePicker(p => !p)}
              className="flex items-center gap-1 text-[10px] text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <SlidersHorizontal size={10} />
              {showProfilePicker ? 'Done' : 'Switch'}
            </button>
          </div>

          {selectedProfile && (
            <div className="flex items-center gap-2 mb-1">
              <div className="w-3 h-3 rounded-full" style={{ background: profColor }} />
              <span className="text-sm font-bold text-white">{selectedProfile.name}</span>
              <span className={cx('ml-auto text-[10px] font-medium bg-gradient-to-r bg-clip-text text-transparent', GROUPS[profGroup] || 'from-white/40 to-white/20')}>
                {profGroup}
              </span>
            </div>
          )}
          {selectedProfile?.short && (
            <p className="text-[10px] text-white/35 leading-relaxed">{selectedProfile.short}</p>
          )}

          {/* Profile grid */}
          {showProfilePicker && (
            <div className="mt-3 grid grid-cols-2 gap-1 max-h-64 overflow-y-auto">
              {profiles.map((p, i) => {
                const pcolor = PROFILE_COLORS[p.name.toLowerCase()] || '#818cf8';
                return (
                  <button
                    key={i}
                    onClick={() => { setSelectedProfile(p); setShowProfilePicker(false); }}
                    className={cx(
                      'flex items-center gap-1.5 px-2 py-1.5 rounded-lg text-[11px] text-left transition border',
                      selectedProfile?.name === p.name
                        ? 'border-white/25 text-white'
                        : 'border-white/8 text-white/50 hover:text-white'
                    )}
                    style={selectedProfile?.name === p.name ? { background: `${pcolor}20`, borderColor: `${pcolor}40` } : {}}
                  >
                    <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: pcolor }} />
                    <span className="truncate">{p.name.replace(' / Artisan','')}</span>
                  </button>
                );
              })}
            </div>
          )}
        </Card>

        {/* Search + filters + list */}
        <Card className="p-4" style={{ flex: 1 }}>
          {/* Search */}
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-white/30" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder={`Search ${enrichedLenses.length} lenses…`}
              className="w-full rounded-xl border border-white/10 bg-black/25 py-2 pl-8 pr-7 text-xs text-white outline-none placeholder:text-white/30 focus:border-indigo-400/40"
            />
            {search && (
              <button onClick={() => setSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2">
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
                      ? 'bg-white/20 border-white/25 text-white'
                      : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white/70'
                  )}
                >
                  {cat.label} <span className="opacity-40">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Lens list */}
          <div style={{ maxHeight: '55vh', overflowY: 'auto' }} className="space-y-0.5 pr-1">
            {filtered.length === 0 ? (
              <p className="text-xs text-white/25 py-6 text-center">No lenses match</p>
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
                            ? 'bg-white/15 text-white font-medium border border-white/15'
                            : 'text-white/45 hover:text-white hover:bg-white/[0.05]'
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
      <div style={{ flex: 1, minWidth: 0 }}>
        {activeLens ? (
          <div className="space-y-4">
            {/* Lens header */}
            <div className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(12px)' }}>
              <div className="flex items-start justify-between gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    {activeCatObj && activeCatObj.id !== 'All' && (
                      <span className={cx('text-[10px] font-semibold px-2.5 py-0.5 rounded-full border uppercase tracking-wide', activeCatObj.bg, activeCatObj.border)}>
                        <span className={cx('bg-gradient-to-r bg-clip-text text-transparent', activeCatObj.color)}>{activeCatObj.label}</span>
                      </span>
                    )}
                    <span className="text-[10px] px-2 py-0.5 rounded-full border font-medium" style={{ background: 'rgba(52,211,153,0.1)', borderColor: 'rgba(52,211,153,0.25)', color: '#34d399' }}>
                      ✓ Source Verified
                    </span>
                  </div>
                  <h1 className="text-xl font-bold text-white leading-tight">{activeLens.lens}</h1>
                </div>

                {/* Profile badge — click to switch */}
                {selectedProfile && (
                  <button
                    onClick={() => setShowProfilePicker(p => !p)}
                    className="flex-shrink-0 flex items-center gap-2 rounded-xl px-3 py-2 border border-white/10 hover:bg-white/[0.06] transition-colors"
                    style={{ background: `${profColor}12`, borderColor: `${profColor}30` }}
                    title="Switch profile"
                  >
                    <div className="w-2.5 h-2.5 rounded-full" style={{ background: profColor }} />
                    <span className="text-xs font-medium text-white/75">{selectedProfile.name.replace(' / Artisan','')}</span>
                    <SlidersHorizontal size={10} className="text-white/30 ml-1" />
                  </button>
                )}
              </div>
            </div>

            {/* Content */}
            <LensContent content={activeLens.content} />
          </div>
        ) : (
          /* Empty state */
          <Card>
            <div className="p-10 text-center">
              <Layers3 className="mx-auto h-12 w-12 text-white/10 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">{enrichedLenses.length} lenses loaded</h3>
              <p className="text-sm text-white/35 max-w-sm mx-auto mb-8">
                Select a lens from the sidebar. Use the profile picker to focus on one person's signal.
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
                      <div className="text-xs text-white/30">lenses</div>
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
