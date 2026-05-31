/**
 * LensContentRenderer
 * Parses the raw markdown content from signalGlassStaticLenses and renders
 * it as rich, interactive visuals using the full visual toolkit.
 *
 * Pipeline:
 *  1. Parse markdown tables → structured rows
 *  2. Detect column types (profile, score/level, text)
 *  3. Render: ProfileScoreMatrix for level columns, DimensionBars for numeric,
 *             DevelopmentArc if natural/stress/growth, InsightCards for text,
 *             StrengthMap if strengths/blind spots, raw prose in glassy cards
 */
import React, { useMemo, useState } from 'react';
import { ChevronDown, ChevronUp, FileText, Table2 } from 'lucide-react';
import {
  DimensionBars, InsightCards, DevelopmentArc, StressHeatmap,
  ProfileScoreMatrix, StrengthMap, LensRadar,
} from './index.js';

// ── Markdown table parser ────────────────────────────────────────────────────

function parseMarkdownTable(lines) {
  const tableLines = lines.filter(l => l.trim().startsWith('|'));
  if (tableLines.length < 3) return null;

  const headers = tableLines[0]
    .split('|').map(h => h.trim()).filter(Boolean);
  // skip separator row (tableLines[1])
  const rows = tableLines.slice(2).map(line =>
    line.split('|').map(c => c.trim()).filter(Boolean)
  ).filter(r => r.length >= headers.length - 1);

  return { headers, rows };
}

// ── Level detection ──────────────────────────────────────────────────────────

const LEVELS = ['Very Low','Low','Low-Moderate','Moderate','Moderate-High','High','Very High'];
const LEVEL_MAP = { 'Very Low':8,'Low':22,'Low-Moderate':38,'Moderate':55,'Moderate-High':68,'High':80,'Very High':96 };

function isLevelValue(v) {
  return LEVELS.includes(v);
}
function levelToNum(v) {
  if (typeof v === 'number') return v;
  return LEVEL_MAP[v] ?? null;
}

// ── Column classification ────────────────────────────────────────────────────

function classifyColumn(header, rows, colIdx) {
  const h = header.toLowerCase();
  const vals = rows.map(r => r[colIdx]).filter(Boolean);

  if (colIdx === 0 && (h.includes('profile') || h.includes('pi profile'))) return 'profile';

  const levelCount = vals.filter(v => isLevelValue(v)).length;
  if (levelCount > vals.length * 0.5) return 'level';

  const numCount = vals.filter(v => !isNaN(parseFloat(v))).length;
  if (numCount > vals.length * 0.5) return 'number';

  // stress/growth detection
  if (h.includes('stress') || h.includes('derailer') || h.includes('risk')) return 'stress';
  if (h.includes('growth') || h.includes('development') || h.includes('edge')) return 'growth';
  if (h.includes('strength') || h.includes('natural') || h.includes('primary')) return 'primary';

  return 'text';
}

// ── Profile color map ────────────────────────────────────────────────────────

const PROFILE_COLORS = {
  analyzer: '#818cf8', controller: '#f472b6', specialist: '#34d399',
  strategist: '#60a5fa', venturer: '#f59e0b', altruist: '#4ade80',
  captain: '#f87171', collaborator: '#a78bfa', maverick: '#fb923c',
  persuader: '#e879f9', promoter: '#38bdf8', adapter: '#fbbf24',
  craftsman: '#6ee7b7', guardian: '#c084fc', operator: '#93c5fd',
  individualist: '#fda4af', scholar: '#86efac',
};

function profileColor(name) {
  const key = (name || '').toLowerCase().trim();
  return PROFILE_COLORS[key] || '#818cf8';
}

// ── Prose section parser ─────────────────────────────────────────────────────

function parseSections(content) {
  const lines = content.split('\n');
  const sections = [];
  let current = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip header/meta lines
    if (line.startsWith('LENS:') || line.startsWith('STATUS:') ||
        line.startsWith('SOURCE:') || line.startsWith('DEDUP') ||
        line.match(/^={5,}/) || line.match(/^-{5,}/)) continue;

    // Section header (### or **)
    if (line.startsWith('### ') || line.startsWith('## ')) {
      if (current) sections.push(current);
      current = { title: line.replace(/^#+\s*/, '').trim(), lines: [] };
      continue;
    }

    // Detect table blocks
    if (line.trim().startsWith('|')) {
      if (!current) current = { title: '', lines: [] };
      current.lines.push(line);
      continue;
    }

    if (current) {
      current.lines.push(line);
    } else if (line.trim()) {
      current = { title: '', lines: [line] };
    }
  }
  if (current) sections.push(current);

  return sections.filter(s => s.lines.some(l => l.trim()));
}

// ── Table renderer ───────────────────────────────────────────────────────────

function RichTable({ table, sectionTitle }) {
  const { headers, rows } = table;

  // Classify columns
  const colTypes = headers.map((h, ci) => classifyColumn(h, rows, ci));
  const profileCol = colTypes.indexOf('profile');
  const levelCols = colTypes.map((t, i) => t === 'level' ? i : -1).filter(i => i >= 0);
  const stressCols = colTypes.map((t, i) => t === 'stress' ? i : -1).filter(i => i >= 0);
  const textCols = colTypes.map((t, i) => t === 'text' ? i : -1).filter(i => i >= 0);

  // Build ProfileScoreMatrix data if we have level columns
  if (levelCols.length >= 2 && profileCol >= 0) {
    const dimensions = levelCols.map(ci => ({ key: `col${ci}`, label: headers[ci] }));
    const profiles = rows.map(r => ({
      name: r[profileCol] || '?',
      scores: Object.fromEntries(levelCols.map(ci => [`col${ci}`, r[ci]])),
    }));
    return <ProfileScoreMatrix profiles={profiles} dimensions={dimensions} title={sectionTitle} />;
  }

  // Build DimensionBars if single profile selected or level cols present
  if (levelCols.length >= 1 && profileCol < 0) {
    const dims = rows.map((r, i) => ({
      label: r[0] || `Dim ${i+1}`,
      value: r[levelCols[0]] || 'Moderate',
      description: r[textCols[0]] || '',
    }));
    return <DimensionBars dimensions={dims} title={sectionTitle} />;
  }

  // Build DevelopmentArc if we detect natural/stress/growth pattern
  const naturalCol = colTypes.findIndex(t => t === 'primary');
  const stressCol  = stressCols[0] ?? -1;
  const growthCol  = colTypes.findIndex(t => t === 'growth');
  if (naturalCol >= 0 && stressCol >= 0 && rows.length === 1) {
    return (
      <DevelopmentArc
        natural={rows[0][naturalCol]}
        stress={rows[0][stressCol]}
        growth={growthCol >= 0 ? rows[0][growthCol] : undefined}
      />
    );
  }

  // Build InsightCards for text-heavy tables
  if (textCols.length >= 1 && rows.length <= 10) {
    const cards = rows.map(r => ({
      icon: stressCol >= 0 ? 'alert' : 'lightbulb',
      title: r[profileCol >= 0 ? profileCol : 0] || '',
      text: textCols.map(ci => r[ci]).filter(Boolean).join(' · '),
    }));
    return <InsightCards cards={cards} title={sectionTitle} columns={2} />;
  }

  // Fallback: plain glassy table
  return (
    <div className="glass rounded-2xl border border-white/8 overflow-hidden">
      {sectionTitle && (
        <div className="px-5 py-3 border-b border-white/6 bg-white/[0.02]">
          <p className="text-xs font-semibold text-white/60 uppercase tracking-wider">{sectionTitle}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/6">
              {headers.map((h, i) => (
                <th key={i} className="text-left px-4 py-2.5 text-white/40 font-medium whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri} className="border-b border-white/[0.04] hover:bg-white/[0.02] transition-colors">
                {headers.map((_, ci) => (
                  <td key={ci} className={`px-4 py-2.5 ${ci === 0 ? 'font-medium text-white/80' : 'text-white/55'} leading-relaxed`}>
                    {row[ci] || '—'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// ── Per-profile table renderer (all-profiles view) ───────────────────────────

function AllProfilesTable({ table, sectionTitle }) {
  const { headers, rows } = table;
  const profileCol = 0;

  return (
    <div className="glass rounded-2xl border border-white/8 overflow-hidden">
      {sectionTitle && (
        <div className="flex items-center gap-2 px-5 py-3 border-b border-white/6 bg-white/[0.02]">
          <Table2 size={13} className="text-indigo-400" />
          <p className="text-xs font-semibold text-white/70 uppercase tracking-wider">{sectionTitle}</p>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="border-b border-white/6">
              {headers.map((h, i) => (
                <th key={i} className="text-left px-4 py-2.5 text-white/40 font-medium whitespace-nowrap">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const profileName = row[profileCol] || '';
              const color = profileColor(profileName);
              return (
                <tr key={ri} className="border-b border-white/[0.04] hover:bg-white/[0.025] transition-colors group">
                  {headers.map((h, ci) => {
                    const val = row[ci] || '—';
                    const isProfile = ci === profileCol;
                    const isLevel = isLevelValue(val);
                    const num = isLevel ? levelToNum(val) : null;
                    return (
                      <td key={ci} className="px-4 py-2.5 leading-relaxed">
                        {isProfile ? (
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ background: color }} />
                            <span className="font-semibold text-white/85">{val}</span>
                          </div>
                        ) : isLevel ? (
                          <div className="flex items-center gap-2">
                            <div className="flex-1 max-w-[60px] h-1.5 bg-white/8 rounded-full overflow-hidden">
                              <div className="h-full rounded-full" style={{
                                width: `${num}%`,
                                background: num >= 70 ? '#818cf8' : num >= 45 ? '#34d399' : '#f59e0b',
                              }} />
                            </div>
                            <span className="text-white/55 text-[10px]">{val}</span>
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

// ── Prose block renderer ─────────────────────────────────────────────────────

function ProseBlock({ text, title }) {
  if (!text.trim()) return null;
  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      {title && <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">{title}</p>}
      <p className="text-sm text-white/60 leading-relaxed whitespace-pre-wrap">{text}</p>
    </div>
  );
}

// ── Main export ──────────────────────────────────────────────────────────────

export default function LensContentRenderer({ content, lensTitle }) {
  const [showRaw, setShowRaw] = useState(false);

  const sections = useMemo(() => {
    if (!content) return [];
    return parseSections(content);
  }, [content]);

  if (!content) return null;

  return (
    <div className="space-y-5">
      {sections.map((section, si) => {
        const tableLines = section.lines.filter(l => l.trim().startsWith('|'));
        const proseLines = section.lines.filter(l => !l.trim().startsWith('|'));
        const proseText = proseLines.join('\n').trim();

        const table = tableLines.length >= 3 ? parseMarkdownTable(tableLines) : null;
        const { headers = [], rows = [] } = table || {};

        // Determine render strategy
        const hasProfiles = headers[0] && (
          headers[0].toLowerCase().includes('profile') ||
          rows.some(r => Object.values(PROFILE_COLORS).some(() =>
            r[0] && PROFILE_COLORS[r[0].toLowerCase().trim()]
          ))
        );

        return (
          <React.Fragment key={si}>
            {proseText && !proseText.match(/^(LENS:|STATUS:|SOURCE:|DEDUP)/) && (
              <ProseBlock text={proseText} title={si === 0 ? '' : section.title} />
            )}
            {table && (
              hasProfiles
                ? <AllProfilesTable table={table} sectionTitle={section.title} />
                : <RichTable table={table} sectionTitle={section.title} />
            )}
          </React.Fragment>
        );
      })}

      {/* Raw toggle */}
      <div className="border border-white/6 rounded-xl overflow-hidden">
        <button
          onClick={() => setShowRaw(r => !r)}
          className="w-full flex items-center justify-between px-4 py-3 text-xs text-white/35 hover:text-white/55 hover:bg-white/[0.02] transition-all"
        >
          <div className="flex items-center gap-2">
            <FileText size={12} />
            <span>Raw source · {content.length.toLocaleString()} chars</span>
          </div>
          {showRaw ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        </button>
        {showRaw && (
          <pre className="px-4 pb-4 text-[10px] text-white/30 leading-relaxed whitespace-pre-wrap font-mono max-h-96 overflow-y-auto">
            {content}
          </pre>
        )}
      </div>
    </div>
  );
}
