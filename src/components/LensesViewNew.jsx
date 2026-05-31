/**
 * LensesView — canonical cleaned lens browser.
 * Raw uploaded lenses stay preserved in signalGlassStaticLenses, but this view
 * displays the deduped canonical lens layer so visual mappings do not mismatch.
 */
import React, { useMemo, useState } from 'react';
import { Search, Layers3, SlidersHorizontal, X, ChevronDown, ChevronUp, FileText, Table2 } from 'lucide-react';
import { signalGlassStaticLenses } from '../data/signalGlassStaticLenses.js';
import { getCanonicalSignalGlassLenses, getLensVisualTableRows } from '../data/lensVisualRegistry.js';

function cx(...classes) { return classes.filter(Boolean).join(' '); }

function Card({ children, className = '' }) {
  return (
    <div className={cx('rounded-3xl border border-white/10 bg-white/[0.07] shadow-xl shadow-black/20 backdrop-blur-xl', className)}>
      {children}
    </div>
  );
}

const PROFILE_COLORS = {
  analyzer: '#38bdf8', controller: '#818cf8', specialist: '#a78bfa',
  strategist: '#60a5fa', venturer: '#f472b6', altruist: '#34d399',
  captain: '#fb923c', collaborator: '#4ade80', maverick: '#e879f9',
  persuader: '#f59e0b', promoter: '#f87171', adapter: '#2dd4bf',
  'craftsman / artisan': '#a3e635', craftsman: '#a3e635',
  guardian: '#86efac', operator: '#67e8f9', individualist: '#c084fc', scholar: '#93c5fd',
};

const GROUPS = {
  Analytical: 'from-sky-400 to-indigo-500',
  Social: 'from-fuchsia-400 to-rose-500',
  Stabilizing: 'from-emerald-400 to-teal-500',
  Persistent: 'from-amber-400 to-orange-400',
};

const LENS_CATS = [
  { id: 'All', label: 'All', color: 'from-white/50 to-white/30', bg: 'bg-white/5', border: 'border-white/10' },
  { id: 'Personality', label: 'Personality', color: 'from-sky-400 to-indigo-500', bg: 'bg-sky-500/10', border: 'border-sky-400/20' },
  { id: 'Cognitive', label: 'Cognitive', color: 'from-violet-400 to-purple-500', bg: 'bg-violet-500/10', border: 'border-violet-400/20' },
  { id: 'Emotional', label: 'Emotional', color: 'from-rose-400 to-pink-500', bg: 'bg-rose-500/10', border: 'border-rose-400/20' },
  { id: 'Leadership', label: 'Leadership', color: 'from-amber-400 to-orange-500', bg: 'bg-amber-500/10', border: 'border-amber-400/20' },
  { id: 'Team', label: 'Team', color: 'from-emerald-400 to-teal-500', bg: 'bg-emerald-500/10', border: 'border-emerald-400/20' },
  { id: 'Motivation', label: 'Motivation', color: 'from-fuchsia-400 to-pink-400', bg: 'bg-fuchsia-500/10', border: 'border-fuchsia-400/20' },
  { id: 'Neurodiversity', label: 'Neuro', color: 'from-lime-400 to-green-500', bg: 'bg-lime-500/10', border: 'border-lime-400/20' },
  { id: 'Other', label: 'Other', color: 'from-slate-300 to-slate-500', bg: 'bg-slate-500/10', border: 'border-slate-400/20' },
];

const canonicalLenses = getCanonicalSignalGlassLenses(signalGlassStaticLenses);
const visualTableRows = getLensVisualTableRows();

function parseMarkdownTables(content = '') {
  const lines = content.split('\n');
  const tables = [];
  let tableLines = [];
  let currentTitle = '';

  function flush() {
    if (tableLines.length >= 3) {
      const headers = tableLines[0].split('|').map((h) => h.trim()).filter(Boolean);
      const rows = tableLines.slice(2)
        .map((line) => line.split('|').map((c) => c.trim()).filter(Boolean))
        .filter((row) => row.length > 0);
      if (headers.length && rows.length) tables.push({ title: currentTitle, headers, rows });
    }
    tableLines = [];
  }

  lines.forEach((line) => {
    if (line.startsWith('### ') || line.startsWith('## ')) {
      flush();
      currentTitle = line.replace(/^#+\s*/, '').trim();
    } else if (line.trim().startsWith('|')) {
      tableLines.push(line);
    } else {
      flush();
    }
  });

  flush();
  return tables;
}

const LEVELS = ['Very Low','Low','Low-Moderate','Moderate','Moderate-High','High','Very High'];
const LEVEL_TO_PCT = { 'Very Low':6,'Low':22,'Low-Moderate':38,'Moderate':55,'Moderate-High':70,'High':83,'Very High':96 };
const LEVEL_COLOR = (pct) => pct >= 75 ? '#818cf8' : pct >= 50 ? '#34d399' : pct >= 30 ? '#f59e0b' : '#64748b';
function isLevel(v) { return LEVELS.includes(v); }
function levelPct(v) { return LEVEL_TO_PCT[v] ?? 50; }

function RenderedTable({ table }) {
  const { title, headers, rows } = table;
  const isProfileCol0 = headers[0] && (
    headers[0].toLowerCase().includes('profile') ||
    rows.slice(0, 3).some((row) => PROFILE_COLORS[(row[0] || '').toLowerCase()])
  );

  return (
    <div className="overflow-hidden rounded-2xl border border-white/8" style={{ background: 'rgba(15,23,42,0.6)' }}>
      {title && <div className="border-b border-white/6 px-5 py-3" style={{ background: 'rgba(255,255,255,0.03)' }}><p className="text-xs font-semibold uppercase tracking-wider text-white/60">{title}</p></div>}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/8">
              {headers.map((header, index) => <th key={index} className="whitespace-nowrap px-4 py-3 text-left font-semibold text-white/40">{header}</th>)}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, rowIndex) => {
              const profileName = isProfileCol0 ? (row[0] || '') : '';
              const color = PROFILE_COLORS[profileName.toLowerCase()] || '#818cf8';
              return (
                <tr key={rowIndex} className="border-b border-white/[0.04] transition-colors hover:bg-white/[0.03]">
                  {headers.map((_, columnIndex) => {
                    const val = row[columnIndex] || '—';
                    const pct = isLevel(val) ? levelPct(val) : null;
                    return (
                      <td key={columnIndex} className="px-4 py-3 align-top leading-relaxed">
                        {columnIndex === 0 && isProfileCol0 ? (
                          <div className="flex items-center gap-2">
                            <div className="h-2.5 w-2.5 flex-shrink-0 rounded-full" style={{ background: color }} />
                            <span className="whitespace-nowrap font-semibold text-white/85">{val}</span>
                          </div>
                        ) : pct !== null ? (
                          <div className="flex min-w-[100px] items-center gap-2">
                            <div className="h-1.5 flex-1 overflow-hidden rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                              <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: LEVEL_COLOR(pct) }} />
                            </div>
                            <span className="whitespace-nowrap text-[10px] text-white/50">{val}</span>
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

function ProseBlock({ lines }) {
  const text = lines
    .filter((line) => !line.match(/^(LENS:|STATUS:|SOURCE:|IMPLEMENTATION NOTES|Primary output|Dedup|Translation method|SOURCE-DERIVED|---)/i))
    .join('\n')
    .trim()
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1');

  if (!text || text.length < 10) return null;
  return <div className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(15,23,42,0.5)' }}><p className="whitespace-pre-wrap text-sm leading-relaxed text-white/55">{text}</p></div>;
}

function LensContent({ content }) {
  const [showRaw, setShowRaw] = useState(false);
  const { tables, proseSections } = useMemo(() => {
    const tables = parseMarkdownTables(content);
    const lines = content.split('\n');
    const proseSections = [];
    let currentBlock = [];
    let inTable = false;

    lines.forEach((line) => {
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
    });

    if (currentBlock.length > 0) proseSections.push(currentBlock);
    return { tables, proseSections };
  }, [content]);

  if (!content) return null;
  const introProse = proseSections.find((block) => {
    const joined = block.join(' ').trim();
    return joined.length > 80 && !joined.match(/^(LENS:|STATUS:|SOURCE:|DEDUP|SignalGlass Lens|Source status|Source document|Duplicate handling|Translation method)/i);
  });

  return (
    <div className="space-y-4">
      {introProse && <ProseBlock lines={introProse} />}
      {tables.length > 0 ? tables.map((table, index) => <RenderedTable key={index} table={table} />) : proseSections.map((block, index) => <ProseBlock key={index} lines={block} />)}
      <div className="overflow-hidden rounded-xl border border-white/6">
        <button onClick={() => setShowRaw((value) => !value)} className="flex w-full items-center justify-between px-4 py-3 text-xs text-white/30 transition-all hover:bg-white/[0.02] hover:text-white/50">
          <div className="flex items-center gap-2"><FileText size={11} /><span>Raw source · {content.length.toLocaleString()} chars</span></div>
          {showRaw ? <ChevronUp size={11} /> : <ChevronDown size={11} />}
        </button>
        {showRaw && <pre className="max-h-80 overflow-y-auto border-t border-white/6 px-4 pb-4 text-[10px] leading-relaxed text-white/25 whitespace-pre-wrap font-mono">{content}</pre>}
      </div>
    </div>
  );
}

function VisualRegistryTable() {
  return (
    <div className="overflow-hidden rounded-2xl border border-white/8" style={{ background: 'rgba(15,23,42,0.6)' }}>
      <div className="border-b border-white/6 px-5 py-3" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <p className="text-xs font-semibold uppercase tracking-wider text-white/60">Canonical visual table · {visualTableRows.length} cleaned entries</p>
      </div>
      <div className="max-h-[65vh] overflow-auto">
        <table className="w-full text-xs">
          <thead className="sticky top-0 bg-slate-950/95">
            <tr className="border-b border-white/8">
              <th className="px-4 py-3 text-left text-white/40">#</th>
              <th className="px-4 py-3 text-left text-white/40">Lens</th>
              <th className="px-4 py-3 text-left text-white/40">Typical visual</th>
              <th className="px-4 py-3 text-left text-white/40">Why this visual</th>
              <th className="px-4 py-3 text-left text-white/40">Category</th>
            </tr>
          </thead>
          <tbody>
            {visualTableRows.map((row) => (
              <tr key={row.number} className="border-b border-white/[0.04]">
                <td className="px-4 py-3 text-white/35">{row.number}</td>
                <td className="px-4 py-3 font-semibold text-white/80">{row.lens}</td>
                <td className="px-4 py-3 text-sky-100/80">{row.typicalVisualRepresentation}</td>
                <td className="px-4 py-3 leading-5 text-white/55">{row.whyThisVisual}</td>
                <td className="px-4 py-3 text-white/40">{row.category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function LensesView({ profiles, selectedProfile, setSelectedProfile }) {
  const [activeLensId, setActiveLensId] = useState(null);
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [showProfilePicker, setShowProfilePicker] = useState(false);
  const [showVisualTable, setShowVisualTable] = useState(false);

  const filtered = useMemo(() => canonicalLenses.filter((lens) => {
    const haystack = `${lens.lens} ${lens.category} ${lens.visualLabel} ${lens.visualReason} ${(lens.duplicateSourceNames || []).join(' ')}`.toLowerCase();
    const matchSearch = !search || haystack.includes(search.toLowerCase());
    const matchCat = activeCategory === 'All' || lens.category === activeCategory;
    return matchSearch && matchCat;
  }), [search, activeCategory]);

  const activeLens = canonicalLenses.find((lens) => lens.id === activeLensId) || null;
  const activeCatObj = LENS_CATS.find((cat) => cat.id === (activeLens ? activeLens.category : activeCategory));
  const profColor = selectedProfile ? (PROFILE_COLORS[selectedProfile.name.toLowerCase()] || '#818cf8') : '#818cf8';
  const profGroup = selectedProfile?.group || '';
  const mergedGroups = canonicalLenses.filter((lens) => lens.duplicateCount > 1).length;

  return (
    <div style={{ display: 'flex', gap: '16px', minHeight: '80vh', alignItems: 'flex-start' }}>
      <div style={{ width: '280px', flexShrink: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <Card className="p-4">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-white/50">Viewing as</span>
            <button onClick={() => setShowProfilePicker((value) => !value)} className="flex items-center gap-1 text-[10px] text-indigo-400 transition-colors hover:text-indigo-300">
              <SlidersHorizontal size={10} />{showProfilePicker ? 'Done' : 'Switch'}
            </button>
          </div>
          {selectedProfile && <div className="mb-1 flex items-center gap-2"><div className="h-3 w-3 rounded-full" style={{ background: profColor }} /><span className="text-sm font-bold text-white">{selectedProfile.name}</span><span className={cx('ml-auto bg-gradient-to-r bg-clip-text text-[10px] font-medium text-transparent', GROUPS[profGroup] || 'from-white/40 to-white/20')}>{profGroup}</span></div>}
          {selectedProfile?.short && <p className="text-[10px] leading-relaxed text-white/35">{selectedProfile.short}</p>}
          {showProfilePicker && <div className="mt-3 grid max-h-64 grid-cols-2 gap-1 overflow-y-auto">{profiles.map((profile, index) => {
            const pcolor = PROFILE_COLORS[profile.name.toLowerCase()] || '#818cf8';
            return <button key={index} onClick={() => { setSelectedProfile(profile); setShowProfilePicker(false); }} className={cx('flex items-center gap-1.5 rounded-lg border px-2 py-1.5 text-left text-[11px] transition', selectedProfile?.name === profile.name ? 'border-white/25 text-white' : 'border-white/8 text-white/50 hover:text-white')} style={selectedProfile?.name === profile.name ? { background: `${pcolor}20`, borderColor: `${pcolor}40` } : {}}><div className="h-2 w-2 flex-shrink-0 rounded-full" style={{ background: pcolor }} /><span className="truncate">{profile.name.replace(' / Artisan','')}</span></button>;
          })}</div>}
        </Card>

        <Card className="p-4" style={{ flex: 1 }}>
          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-white/30" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder={`Search ${canonicalLenses.length} cleaned lenses…`} className="w-full rounded-xl border border-white/10 bg-black/25 py-2 pl-8 pr-7 text-xs text-white outline-none placeholder:text-white/30 focus:border-indigo-400/40" />
            {search && <button onClick={() => setSearch('')} className="absolute right-2.5 top-1/2 -translate-y-1/2"><X size={11} className="text-white/30 hover:text-white/60" /></button>}
          </div>

          <button onClick={() => { setShowVisualTable((value) => !value); setActiveLensId(null); }} className={cx('mb-3 flex w-full items-center justify-center gap-2 rounded-xl border px-3 py-2 text-xs transition', showVisualTable ? 'border-sky-300/30 bg-sky-500/15 text-white' : 'border-white/10 bg-white/[0.04] text-white/50 hover:text-white')}>
            <Table2 size={13} /> Visual table
          </button>

          <div className="mb-3 flex flex-wrap gap-1">
            {LENS_CATS.map((cat) => {
              const count = cat.id === 'All' ? canonicalLenses.length : canonicalLenses.filter((lens) => lens.category === cat.id).length;
              return <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={cx('rounded-full border px-2 py-0.5 text-[10px] font-medium transition', activeCategory === cat.id ? 'border-white/25 bg-white/20 text-white' : 'border-white/10 bg-white/5 text-white/40 hover:bg-white/10 hover:text-white/70')}>{cat.label} <span className="opacity-40">{count}</span></button>;
            })}
          </div>

          <div style={{ maxHeight: '55vh', overflowY: 'auto' }} className="space-y-0.5 pr-1">
            {filtered.length === 0 ? <p className="py-6 text-center text-xs text-white/25">No lenses match</p> : LENS_CATS.filter((cat) => cat.id !== 'All').map((cat) => {
              const items = filtered.filter((lens) => lens.category === cat.id);
              if (!items.length) return null;
              if (activeCategory !== 'All' && activeCategory !== cat.id) return null;
              return <div key={cat.id} className="mb-4"><p className={cx('mb-1.5 bg-gradient-to-r bg-clip-text px-1 text-[10px] font-bold uppercase tracking-wider text-transparent', cat.color)}>{cat.label} · {items.length}</p>{items.map((lens) => <button key={lens.id} onClick={() => { setActiveLensId(lens.id); setShowVisualTable(false); }} className={cx('w-full rounded-lg px-3 py-1.5 text-left text-xs leading-snug transition', activeLensId === lens.id ? 'border border-white/15 bg-white/15 font-medium text-white' : 'text-white/45 hover:bg-white/[0.05] hover:text-white')}><span>{lens.lens}</span>{lens.duplicateCount > 1 && <span className="ml-2 text-[9px] text-sky-200/70">merged</span>}</button>)}</div>;
            })}
          </div>
        </Card>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        {showVisualTable ? <VisualRegistryTable /> : activeLens ? (
          <div className="space-y-4">
            <div className="rounded-2xl border border-white/8 p-5" style={{ background: 'rgba(15,23,42,0.7)', backdropFilter: 'blur(12px)' }}>
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    {activeCatObj && activeCatObj.id !== 'All' && <span className={cx('rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide', activeCatObj.bg, activeCatObj.border)}><span className={cx('bg-gradient-to-r bg-clip-text text-transparent', activeCatObj.color)}>{activeCatObj.label}</span></span>}
                    <span className="rounded-full border px-2 py-0.5 text-[10px] font-medium" style={{ background: 'rgba(52,211,153,0.1)', borderColor: 'rgba(52,211,153,0.25)', color: '#34d399' }}>✓ Canonical lens</span>
                    {activeLens.duplicateCount > 1 && <span className="rounded-full border border-sky-300/20 bg-sky-500/10 px-2 py-0.5 text-[10px] font-medium text-sky-100">Merged {activeLens.duplicateCount} raw entries</span>}
                  </div>
                  <h1 className="text-xl font-bold leading-tight text-white">{activeLens.lens}</h1>
                  <p className="mt-2 text-sm leading-6 text-white/55"><strong className="text-white/75">Visual:</strong> {activeLens.visualLabel}. {activeLens.visualReason}</p>
                </div>
                {selectedProfile && <button onClick={() => setShowProfilePicker((value) => !value)} className="flex flex-shrink-0 items-center gap-2 rounded-xl border border-white/10 px-3 py-2 transition-colors hover:bg-white/[0.06]" style={{ background: `${profColor}12`, borderColor: `${profColor}30` }} title="Switch profile"><div className="h-2.5 w-2.5 rounded-full" style={{ background: profColor }} /><span className="text-xs font-medium text-white/75">{selectedProfile.name.replace(' / Artisan','')}</span><SlidersHorizontal size={10} className="ml-1 text-white/30" /></button>}
              </div>
            </div>
            <LensContent content={activeLens.content} />
          </div>
        ) : (
          <Card>
            <div className="p-10 text-center">
              <Layers3 className="mx-auto mb-4 h-12 w-12 text-white/10" />
              <h3 className="mb-2 text-xl font-semibold text-white">{canonicalLenses.length} cleaned lenses loaded</h3>
              <p className="mx-auto mb-8 max-w-sm text-sm text-white/35">Raw source contains {signalGlassStaticLenses.length} entries. {mergedGroups} duplicate framework groups are merged for display and visual mapping.</p>
              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                {LENS_CATS.filter((cat) => cat.id !== 'All').map((cat) => {
                  const count = canonicalLenses.filter((lens) => lens.category === cat.id).length;
                  if (!count) return null;
                  return <button key={cat.id} onClick={() => setActiveCategory(cat.id)} className={cx('rounded-2xl border p-4 text-left transition hover:bg-white/[0.08]', cat.bg, cat.border)}><div className={cx('mb-1 bg-gradient-to-r bg-clip-text text-xs font-semibold text-transparent', cat.color)}>{cat.label}</div><div className="text-2xl font-bold text-white">{count}</div><div className="text-xs text-white/30">cleaned lenses</div></button>;
                })}
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
}
