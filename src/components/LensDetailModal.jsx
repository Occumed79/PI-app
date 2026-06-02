/**
 * LensDetailModal.jsx
 * Rich lens detail panel with real profile-specific content from signalGlassStaticLenses.
 * Shows actual data, diverse charts, and meaningful insights — not generic placeholders.
 */
import React, { useMemo } from 'react';
import { X, BookOpen, AlertTriangle, ChevronRight } from 'lucide-react';
import {
  ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Cell,
  LineChart, Line, PieChart, Pie,
  ScatterChart, Scatter, ZAxis,
} from 'recharts';

import LensVisual from './LensVisual.jsx';
import { getLensProfileContent, LENS_PROFILE_CONTENT } from '../data/lensProfileContent.js';
import { BIG_FIVE_DATA, HEXACO_DATA, getDISCData, getInsightsData,
         getKolbeData, getTKIData, ENNEAGRAM_DATA, CLIFTON_DATA, VIA_DATA,
         REISS_DATA, EQI_DATA, LENCIONI_PROFILE, COGNITIVE_LOAD_DATA } from '../data/lensChartData.js';

const DIM = 'rgba(255,255,255,0.07)';
const TX = 'rgba(255,255,255,0.5)';

function cx(...c) { return c.filter(Boolean).join(' '); }

function TT({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800 px-3 py-2 text-xs text-white shadow-xl">
      {label && <p className="mb-1 font-semibold">{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.fill || p.color || '#38bdf8' }}>
          {(p.name || p.dataKey)}: {p.value}
        </p>
      ))}
    </div>
  );
}

// ── Category colors ──────────────────────────────────────────────────────
const CAT_COLORS = {
  Personality: '#818cf8', Cognitive: '#34d399', Emotional: '#f472b6',
  Motivation: '#fbbf24', Interpersonal: '#60a5fa', Team: '#fb923c',
  Leadership: '#a78bfa', Wellbeing: '#4ade80', Other: '#94a3b8',
};
function catColor(cat) { return CAT_COLORS[cat] || '#38bdf8'; }

// ── KV table for numbered-list lenses ────────────────────────────────────
function KVTable({ data, color }) {
  if (!data || Object.keys(data).length === 0) return null;
  const entries = Object.entries(data).filter(([k]) => !['Deep dive','Guided Links'].includes(k));
  return (
    <div className="grid gap-2">
      {entries.map(([k, v]) => (
        <div key={k} className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3">
          <span className="min-w-[140px] text-xs font-semibold uppercase tracking-widest" style={{ color }}>{k}</span>
          <span className="text-sm text-white/80 leading-5">{v}</span>
        </div>
      ))}
    </div>
  );
}

// ── Row comparison: show this profile vs 2-3 contrasting profiles ─────────
function ProfileComparisonTable({ lensId, profileId, color, fields }) {
  const lensData = LENS_PROFILE_CONTENT[lensId];
  if (!lensData || !fields?.length) return null;

  // Pick this profile + 2-3 contrasting ones
  const contrast = {
    analyzer: ['captain', 'maverick', 'collaborator'],
    controller: ['promoter', 'maverick', 'adapter'],
    specialist: ['captain', 'venturer', 'maverick'],
    strategist: ['collaborator', 'promoter', 'adapter'],
    venturer: ['guardian', 'specialist', 'operator'],
    altruist: ['venturer', 'maverick', 'controller'],
    captain: ['analyzer', 'specialist', 'guardian'],
    collaborator: ['venturer', 'controller', 'maverick'],
    maverick: ['analyzer', 'guardian', 'operator'],
    persuader: ['analyzer', 'craftsman', 'guardian'],
    promoter: ['analyzer', 'scholar', 'craftsman'],
    adapter: ['venturer', 'controller', 'maverick'],
    craftsman: ['captain', 'maverick', 'promoter'],
    guardian: ['venturer', 'maverick', 'captain'],
    operator: ['venturer', 'maverick', 'strategist'],
    individualist: ['collaborator', 'guardian', 'operator'],
    scholar: ['captain', 'promoter', 'maverick'],
  };

  const compareIds = [profileId, ...(contrast[profileId] || ['captain', 'collaborator']).slice(0, 2)];
  const profileNames = { analyzer:'Analyzer', controller:'Controller', specialist:'Specialist',
    strategist:'Strategist', venturer:'Venturer', altruist:'Altruist', captain:'Captain',
    collaborator:'Collaborator', maverick:'Maverick', persuader:'Persuader', promoter:'Promoter',
    adapter:'Adapter', craftsman:'Craftsman', guardian:'Guardian', operator:'Operator',
    individualist:'Individualist', scholar:'Scholar' };

  const displayFields = fields.slice(0, 3);

  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm border-collapse">
        <thead>
          <tr>
            <th className="text-left px-3 py-2 text-xs uppercase tracking-widest text-white/30 font-medium">Profile</th>
            {displayFields.map(f => (
              <th key={f} className="text-left px-3 py-2 text-xs uppercase tracking-widest text-white/30 font-medium">{f}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compareIds.map(pid => {
            const pdata = lensData.profiles[pid];
            if (!pdata) return null;
            const isThis = pid === profileId;
            return (
              <tr key={pid} className={cx('border-t border-white/5', isThis && 'bg-white/[0.06]')}>
                <td className="px-3 py-2.5 font-semibold" style={{ color: isThis ? color : 'rgba(255,255,255,0.55)' }}>
                  {isThis && <span className="mr-1" style={{ color }}>▶</span>}
                  {profileNames[pid]}
                </td>
                {displayFields.map(f => (
                  <td key={f} className={cx('px-3 py-2.5 text-sm', isThis ? 'text-white' : 'text-white/50')}>
                    {pdata[f] || pdata.values?.[displayFields.indexOf(f)] || '—'}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

// ── Rich content panel based on what data is available ───────────────────
function LensContentPanel({ lens, profileId, color }) {
  const profileContent = getLensProfileContent(lens.id, profileId);
  const lensData = LENS_PROFILE_CONTENT[lens.id];
  const hasFields = lensData?.fields?.length > 0;
  const hasProfiles = Object.keys(lensData?.profiles || {}).length > 1;

  // Profile name for display
  const PROFILE_NAMES = { analyzer:'Analyzer', controller:'Controller', specialist:'Specialist',
    strategist:'Strategist', venturer:'Venturer', altruist:'Altruist', captain:'Captain',
    collaborator:'Collaborator', maverick:'Maverick', persuader:'Persuader', promoter:'Promoter',
    adapter:'Adapter', craftsman:'Craftsman', guardian:'Guardian', operator:'Operator',
    individualist:'Individualist', scholar:'Scholar' };

  if (!profileContent) {
    // Show the lens's source text excerpt if no structured data
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Lens Description</p>
        <p className="text-sm leading-6 text-white/70">{lens.why}</p>
      </div>
    );
  }

  const isKV = !profileContent.values; // numbered list data
  const isRow = !!profileContent.values; // pipe table row

  return (
    <div className="space-y-4">
      {/* This profile's data */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <p className="text-xs uppercase tracking-widest mb-3" style={{ color }}>
          {PROFILE_NAMES[profileId]} — This Profile
        </p>
        {isKV ? (
          <KVTable data={profileContent} color={color} />
        ) : (
          <div className="flex flex-wrap gap-2">
            {(profileContent.values || []).map((v, i) => (
              <span key={i} className="inline-block rounded-xl border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm text-white/80">{v}</span>
            ))}
          </div>
        )}
      </div>

      {/* Cross-profile comparison table */}
      {hasProfiles && hasFields && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="text-xs uppercase tracking-widest text-white/30 mb-3">Profile Comparison</p>
          <ProfileComparisonTable lensId={lens.id} profileId={profileId} color={color} fields={lensData.fields} />
        </div>
      )}
    </div>
  );
}

// ── What-to-watch insights per lens ─────────────────────────────────────
function LensInsights({ lens, profileId, color }) {
  // Real lens-specific practical insights
  const INSIGHTS = {
    'big-five-ocean': {
      manager: 'Understand their dominant trait drives decisions — match complexity and autonomy accordingly.',
      watchFor: 'High Neuroticism shows as irritability or withdrawal. High Conscientiousness can become perfectionism.',
      tip: 'Match communication depth to Openness level. High O = metaphors welcome. Low O = concrete examples only.',
    },
    'disc-crosswalk': {
      manager: 'Adapt your style to their primary D/I/S/C. D-types want results, I-types want connection, S-types want stability, C-types want accuracy.',
      watchFor: 'DISC mix reveals tension points — high D + high C can be both decisive and perfectionistic.',
      tip: 'In conflict, match their primary mode before trying to shift.',
    },
    'insights-discovery-color-model': {
      manager: 'Color energy shows preferred interaction style — not capability. Blue needs facts, Red needs results, Green needs harmony, Yellow needs enthusiasm.',
      watchFor: 'Opposite color mixes create friction. Red + Green often conflict on pace.',
      tip: 'Use the color language in feedback to make it concrete.',
    },
    'hogan-hpi': {
      manager: 'HPI scales show baseline style when things are going well. Compare to HDS to see stress divergence.',
      watchFor: 'Low Sociability is not disengagement — it is a processing preference.',
      tip: 'Prudence predicts reliability. Ambition predicts leadership drive.',
    },
    'hogan-hds-derailers': {
      manager: 'Derailers emerge under stress, not normal conditions. Do not treat as fixed traits.',
      watchFor: 'Bold derailer: overconfidence when stakes rise. Diligent derailer: perfectionism blocking delivery.',
      tip: 'Name the derailer pattern early in a relationship, not in crisis.',
    },
    'thomas-kilmann-conflict-mode-tki': {
      manager: 'Conflict mode is situational, not fixed. Understand their default and their stress shift.',
      watchFor: 'Avoiding + Competing combinations are common. Avoiding loses ground; Competing can escalate.',
      tip: 'Collaborating is not always best — it takes time. Match mode to stakes.',
    },
    'cliftonstrengths-34-themes': {
      manager: 'Strengths are most powerful when used in context. Misapplied strengths become traps.',
      watchFor: 'Overused Achiever = burnout. Overused Empathy = boundary erosion.',
      tip: 'Ask them what tasks feel effortless — those reveal live strengths.',
    },
    'enneagram-core-types-and-subtypes': {
      manager: 'Core type reveals fundamental motivation and stress pattern. Wing modifies expression.',
      watchFor: 'Stress arrows are reliable predictors. Type 8 disintegrates to 5 (withdrawal). Type 9 to 6 (anxiety).',
      tip: 'Growth direction is more useful than stress. Ask what they look like at their best.',
    },
    'reiss-motivation-profile': {
      manager: 'Top motives are intrinsic — they do not change. Design roles around them.',
      watchFor: 'Mismatch between role demands and top motives = slow disengagement.',
      tip: 'Power motive drives leadership even in individual contributor roles.',
    },
    'eq-i-20-emotional-intelligence': {
      manager: 'EQ-i strengths show reliable emotional resources. Risks show where support is needed.',
      watchFor: 'Low Empathy with high Assertiveness = impact without awareness. Address before team lead roles.',
      tip: 'Emotional Expression risk means they may not signal distress visibly. Check in explicitly.',
    },
    'kolbe-a-index-conation': {
      manager: 'Conation is how someone takes action — not capability or motivation. Kolbe measures natural action mode.',
      watchFor: 'Fact Finder + Quick Start mismatch creates friction in fast-paced environments.',
      tip: 'High Implementor needs hands-on, tactile work. Abstract-only roles drain them.',
    },
    'cognitive-load--working-style': {
      manager: 'Cognitive load threshold determines how much complexity someone can hold at once without degrading.',
      watchFor: 'High structure need + rapid change = overwhelm. Give more lead time and written briefs.',
      tip: 'Social load tells you how much interaction costs them. Introverts need recovery time.',
    },
  };

  const insight = INSIGHTS[lens.id];
  if (!insight) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <p className="text-xs uppercase tracking-widest text-white/30 mb-2">Manager Use</p>
        <p className="text-sm leading-6 text-white/75">{insight.manager}</p>
      </div>
      <div className="rounded-2xl border border-amber-400/20 bg-amber-500/8 p-4">
        <p className="text-xs uppercase tracking-widest text-amber-400/60 mb-2">Watch For</p>
        <p className="text-sm leading-6 text-white/75">{insight.watchFor}</p>
      </div>
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/8 p-4">
        <p className="text-xs uppercase tracking-widest text-emerald-400/60 mb-2">Practical Tip</p>
        <p className="text-sm leading-6 text-white/75">{insight.tip}</p>
      </div>
    </div>
  );
}

// ── Main Modal ───────────────────────────────────────────────────────────
export default function LensDetailModal({ lens, profile, onClose }) {
  if (!lens || !profile) return null;

  const color = catColor(lens.category);
  const profileId = profile.id;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-8">
      <div className="absolute inset-0 bg-black/88 backdrop-blur-sm" onClick={onClose}/>
      <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/15 bg-[#0d1420] shadow-2xl">

        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-3xl border-b border-white/10 bg-[#0d1420] px-6 py-5">
          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              <span className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold text-white/90"
                style={{ background: `${color}22`, border: `1px solid ${color}44`, color }}>
                {lens.category}
              </span>
              <span className="inline-block rounded-full border border-white/10 bg-white/8 px-2.5 py-0.5 text-xs text-white/45">
                {lens.visualLabel}
              </span>
              <span className="inline-block rounded-full border border-white/10 bg-white/8 px-2.5 py-0.5 text-xs text-white/35">
                {lens.status || 'Finished / Done'}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">{lens.lens}</h2>
            <p className="mt-1 text-sm text-white/45">{lens.why}</p>
          </div>
          <button type="button" onClick={onClose}
            className="flex-shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-white/40 hover:text-white transition">
            <X size={18}/>
          </button>
        </div>

        <div className="p-6 space-y-6">

          {/* CHART — full-width, properly sized */}
          <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-6">
            <p className="mb-3 text-xs uppercase tracking-widest text-white/30 px-2">
              Visual — {profile.name} Profile
            </p>
            <LensVisual lensId={lens.id} visualType={lens.visualType} color={color} profileId={profileId} />
          </div>

          {/* REAL PROFILE CONTENT */}
          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-white/30">Profile-Specific Data</p>
            <LensContentPanel lens={lens} profileId={profileId} color={color} />
          </div>

          {/* PRACTICAL INSIGHTS */}
          <LensInsights lens={lens} profileId={profileId} color={color} />

          {/* Applied to profile */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-white/25">Applied to</p>
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full flex-shrink-0" style={{ background: profile.color }}/>
              <span className="font-semibold text-white">{profile.name}</span>
              <span className="text-sm text-white/35">· {profile.tagline}</span>
            </div>
            <p className="mt-2 text-xs text-white/30">
              PI Scores — D: {profile.dominance} · E: {profile.extraversion} · P: {profile.patience} · F: {profile.formality}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
