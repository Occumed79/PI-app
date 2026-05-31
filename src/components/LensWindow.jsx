import React, { useState, useMemo } from 'react';
import { Info, Lightbulb, AlertTriangle, TrendingUp, BookOpen, FileText, ChevronDown, ChevronUp } from 'lucide-react';
import { LENSES, LENS_META } from '../data/lensData';
import { PI_PROFILES } from '../data/profiles';
import { signalGlassStaticLenses, signalGlassLensIndex } from '../data/signalGlassStaticLenses';
import { LensRadar, DimensionBars, StressHeatmap, DevelopmentArc, InsightCards, SpectrumSlider } from './lens/index.js';

// ── helpers ──────────────────────────────────────────────────────────────────

function ScoreChip({ label, value, color }) {
  const levels = { 'Very Low':10,'Low':25,'Low-Moderate':40,'Moderate':55,'Moderate-High':65,'High':78,'Very High':92 };
  const pct = levels[value] || 55;
  return (
    <div className="flex flex-col gap-1">
      <div className="flex justify-between items-center">
        <span className="text-xs text-slate-500">{label}</span>
        <span className="text-xs font-medium" style={{color}}>{value}</span>
      </div>
      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
        <div className="h-full rounded-full" style={{width:`${pct}%`, backgroundColor:color, transition:'width 0.8s ease'}} />
      </div>
    </div>
  );
}

function ProfileLensCard({ profile, data }) {
  if (!data) return null;
  return (
    <div className="glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{backgroundColor: profile.color}} />
        <span className="text-sm font-semibold text-white">{profile.name}</span>
        <span className="text-xs text-slate-500 ml-auto">{profile.tagline}</span>
      </div>
      <div className="space-y-2 mb-3">
        {data.primary && (
          <div className="flex gap-2">
            <span className="text-xs font-medium text-indigo-400 min-w-16 flex-shrink-0">Primary</span>
            <span className="text-xs text-slate-300">{data.primary}</span>
          </div>
        )}
        {data.secondary && (
          <div className="flex gap-2">
            <span className="text-xs font-medium text-slate-500 min-w-16 flex-shrink-0">Secondary</span>
            <span className="text-xs text-slate-400">{data.secondary}</span>
          </div>
        )}
        {data.stress && (
          <div className="flex gap-2 items-start">
            <span className="text-xs font-medium text-amber-400 min-w-16 flex-shrink-0">Under stress</span>
            <span className="text-xs text-amber-300/80">{data.stress}</span>
          </div>
        )}
      </div>
      {data.insight && (
        <div className="pt-2 border-t border-white/5">
          <div className="flex gap-1.5 items-start">
            <Lightbulb size={11} className="text-purple-400 mt-0.5 flex-shrink-0" />
            <p className="text-xs text-slate-400 leading-relaxed italic">{data.insight}</p>
          </div>
        </div>
      )}
    </div>
  );
}

// Renders the raw source content in a clean, readable glassy card
function SourceContentPanel({ content, lensTitle }) {
  const [expanded, setExpanded] = useState(false);
  if (!content) return null;

  const preview = content.slice(0, 800);
  const hasMore = content.length > 800;

  return (
    <div className="glass rounded-2xl border border-white/8 overflow-hidden">
      <div className="flex items-center justify-between px-5 py-3 border-b border-white/6 bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <FileText size={13} className="text-indigo-400" />
          <span className="text-xs font-semibold text-white/70 uppercase tracking-wider">Source Content</span>
        </div>
        <span className="text-[10px] text-white/30">{content.length.toLocaleString()} characters</span>
      </div>
      <div className="px-5 py-4">
        <pre className="text-xs text-slate-400 leading-relaxed whitespace-pre-wrap font-mono">
          {expanded ? content : preview}
          {hasMore && !expanded && '…'}
        </pre>
        {hasMore && (
          <button
            onClick={() => setExpanded(e => !e)}
            className="mt-3 flex items-center gap-1.5 text-xs text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
            {expanded ? 'Show less' : `Show full content (${content.length.toLocaleString()} chars)`}
          </button>
        )}
      </div>
    </div>
  );
}

// Find signalGlass entry for a given lens id or name
function findStaticLens(lensId, lensName) {
  // Try direct id match
  if (signalGlassLensIndex[lensId]) return signalGlassLensIndex[lensId];
  // Try fuzzy match on lens name
  const nameLower = (lensName || '').toLowerCase();
  return signalGlassStaticLenses.find(l =>
    l.lens.toLowerCase() === nameLower ||
    l.id === lensId ||
    l.lens.toLowerCase().includes(nameLower) ||
    nameLower.includes(l.lens.toLowerCase())
  ) || null;
}

// ── Main component ────────────────────────────────────────────────────────────

export default function LensWindow({ lensId, profileId }) {
  const lens = LENSES.find(l => l.id === lensId);
  const meta = LENS_META[lensId];
  const staticLens = findStaticLens(lensId, lens?.name || meta?.name);
  const activeProfile = PI_PROFILES.find(p => p.id === profileId);

  const profilesToShow = profileId
    ? [PI_PROFILES.find(p => p.id === profileId)].filter(Boolean)
    : PI_PROFILES;

  // Nothing to show
  if (!lens && !meta && !staticLens) {
    return (
      <div className="h-full flex items-center justify-center text-slate-600">
        <div className="text-center">
          <BookOpen size={32} className="mx-auto mb-3 opacity-30" />
          <p className="text-sm">Select a lens from the sidebar</p>
        </div>
      </div>
    );
  }

  const lensName = staticLens?.lens || lens?.name || meta?.name || lensId;
  const category = lens?.category || meta?.category || '';
  const hasStructuredData = !!lens;
  const hasStaticContent = !!staticLens?.content;

  return (
    <div className="h-full overflow-y-auto px-6 py-6 fade-in">

      {/* ── Header ── */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          {category && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-medium capitalize">
              {category}
            </span>
          )}
          {staticLens && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-medium">
              Source Verified
            </span>
          )}
        </div>
        <h1 className="text-2xl font-bold text-white mb-1">{lensName}</h1>
        {staticLens && (
          <p className="text-xs text-white/30">
            {staticLens.source} · {staticLens.status}
          </p>
        )}
      </div>

      {/* ── What / Why / How (structured lenses only) ── */}
      {hasStructuredData && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          {[
            { icon: Info,       label:'What it is',     text: lens.what,  color:'text-sky-400',    bg:'bg-sky-500/10',    border:'border-sky-400/20'    },
            { icon: TrendingUp, label:'Why it matters', text: lens.why,   color:'text-emerald-400',bg:'bg-emerald-500/10',border:'border-emerald-400/20' },
            { icon: BookOpen,   label:'How we mapped',  text: lens.how,   color:'text-violet-400', bg:'bg-violet-500/10', border:'border-violet-400/20'  },
          ].map(item => {
            const Icon = item.icon;
            return (
              <div key={item.label} className={`${item.bg} border ${item.border} rounded-xl p-4`}>
                <div className="flex items-center gap-2 mb-2">
                  <Icon size={14} className={item.color} />
                  <span className={`text-xs font-semibold ${item.color}`}>{item.label}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{item.text}</p>
              </div>
            );
          })}
        </div>
      )}

      {/* ── Visual Components (structured lenses with visuals defined) ── */}
      {hasStructuredData && lens.visuals && (
        <div className="space-y-5 mb-6">
          {lens.visuals.radar && (
            <LensRadar dimensions={lens.visuals.radar.dimensions} title={lens.visuals.radar.title} />
          )}
          {lens.visuals.spectra && (
            <SpectrumSlider spectra={lens.visuals.spectra} title="Dimension Spectra" />
          )}
          {lens.visuals.dimensionBars && (
            <DimensionBars dimensions={lens.visuals.dimensionBars} title="Dimension Breakdown" />
          )}
          {activeProfile && lens.visuals.developmentArc?.[activeProfile.id] && (
            <DevelopmentArc
              natural={lens.visuals.developmentArc[activeProfile.id].natural}
              stress={lens.visuals.developmentArc[activeProfile.id].stress}
              growth={lens.visuals.developmentArc[activeProfile.id].growth}
              color={activeProfile.color}
            />
          )}
          {lens.visuals.insightCards && (
            <InsightCards cards={lens.visuals.insightCards} title="Key Takeaways" columns={3} />
          )}
          {lens.visuals.stressHeatmap && (
            <StressHeatmap profiles={lens.visuals.stressHeatmap} title="Stress Risk by Profile" />
          )}
        </div>
      )}

      {/* ── Source Content (always shown if we have it — the real data) ── */}
      {hasStaticContent && (
        <div className="mb-6">
          <SourceContentPanel content={staticLens.content} lensTitle={lensName} />
        </div>
      )}

      {/* ── Profile Cards (structured lenses only) ── */}
      {hasStructuredData && lens.profiles && (
        <>
          {!profileId && (
            <div className="mb-3 flex items-center gap-2">
              <span className="text-xs text-slate-500">All 17 PI profiles</span>
            </div>
          )}
          <div className={`grid gap-3 ${profileId ? 'grid-cols-1 max-w-2xl' : 'grid-cols-2 xl:grid-cols-3'}`}>
            {profilesToShow.map(profile => (
              <ProfileLensCard
                key={profile.id}
                profile={profile}
                data={lens.profiles[profile.id]}
              />
            ))}
          </div>
        </>
      )}

      {/* ── Fallback for meta-only lenses with no static content yet ── */}
      {!hasStructuredData && !hasStaticContent && meta && (
        <div className="glass rounded-xl p-6 border border-white/5 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-indigo-400" />
            <span className="text-sm font-medium text-slate-300">Framework Overview</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            This lens is part of the <span className="text-indigo-400 capitalize font-medium">{meta.category}</span> category.
            Upload source content to populate this lens with full profile mappings.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {PI_PROFILES.map(p => (
              <div key={p.id} className="flex items-center gap-2 p-2 rounded-lg bg-white/3">
                <span className="w-2 h-2 rounded-full" style={{backgroundColor: p.color}} />
                <span className="text-xs text-slate-400">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
