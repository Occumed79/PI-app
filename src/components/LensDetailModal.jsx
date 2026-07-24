/**
 * Detailed PI-to-framework crosswalk view.
 * The selected PI profile is the source assessment; lens content is derived.
 */
import React from 'react';
import { X } from 'lucide-react';
import LensVisual from './LensVisual.jsx';
import {
  getLensProfileContent,
  LENS_PROFILE_CONTENT,
} from '../data/lensProfileContent.js';
import { CROSSWALK_MODEL } from '../data/crosswalkModel.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CAT_COLORS = {
  Personality: '#818cf8',
  Cognitive: '#34d399',
  Emotional: '#f472b6',
  Motivation: '#fbbf24',
  Interpersonal: '#60a5fa',
  Team: '#fb923c',
  Leadership: '#a78bfa',
  Wellbeing: '#4ade80',
  Other: '#94a3b8',
};

function catColor(category) {
  return CAT_COLORS[category] || '#38bdf8';
}

function KVTable({ data, color }) {
  if (!data || Object.keys(data).length === 0) return null;

  const entries = Object.entries(data).filter(
    ([key]) => !['Deep dive', 'Guided Links'].includes(key)
  );

  return (
    <div className="grid gap-2">
      {entries.map(([key, value]) => (
        <div
          key={key}
          className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3"
        >
          <span
            className="min-w-[140px] text-xs font-semibold uppercase tracking-widest"
            style={{ color }}
          >
            {key}
          </span>
          <span className="text-sm leading-5 text-white/80">{value}</span>
        </div>
      ))}
    </div>
  );
}

function ProfileComparisonTable({ lensId, profileId, color, fields }) {
  const lensData = LENS_PROFILE_CONTENT[lensId];
  if (!lensData || !fields?.length) return null;

  const contrast = {
    analyzer: ['captain', 'maverick'],
    controller: ['promoter', 'adapter'],
    specialist: ['captain', 'venturer'],
    strategist: ['collaborator', 'promoter'],
    venturer: ['guardian', 'specialist'],
    altruist: ['venturer', 'controller'],
    captain: ['analyzer', 'guardian'],
    collaborator: ['venturer', 'controller'],
    maverick: ['analyzer', 'guardian'],
    persuader: ['analyzer', 'craftsman'],
    promoter: ['analyzer', 'scholar'],
    adapter: ['venturer', 'controller'],
    craftsman: ['captain', 'maverick'],
    guardian: ['venturer', 'captain'],
    operator: ['venturer', 'strategist'],
    individualist: ['collaborator', 'guardian'],
    scholar: ['captain', 'promoter'],
  };

  const profileNames = {
    analyzer: 'Analyzer',
    controller: 'Controller',
    specialist: 'Specialist',
    strategist: 'Strategist',
    venturer: 'Venturer',
    altruist: 'Altruist',
    captain: 'Captain',
    collaborator: 'Collaborator',
    maverick: 'Maverick',
    persuader: 'Persuader',
    promoter: 'Promoter',
    adapter: 'Adapter',
    craftsman: 'Craftsman',
    guardian: 'Guardian',
    operator: 'Operator',
    individualist: 'Individualist',
    scholar: 'Scholar',
  };

  const compareIds = [
    profileId,
    ...(contrast[profileId] || ['captain', 'collaborator']),
  ];
  const displayFields = fields.slice(0, 3);

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            <th className="px-3 py-2 text-left text-xs font-medium uppercase tracking-widest text-white/30">
              PI profile
            </th>
            {displayFields.map(field => (
              <th
                key={field}
                className="px-3 py-2 text-left text-xs font-medium uppercase tracking-widest text-white/30"
              >
                {field}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {compareIds.map(candidateId => {
            const profileData = lensData.profiles[candidateId];
            if (!profileData) return null;

            const selected = candidateId === profileId;

            return (
              <tr
                key={candidateId}
                className={cx(
                  'border-t border-white/5',
                  selected && 'bg-white/[0.06]'
                )}
              >
                <td
                  className="px-3 py-2.5 font-semibold"
                  style={{
                    color: selected ? color : 'rgba(255,255,255,0.55)',
                  }}
                >
                  {selected && <span className="mr-1">▶</span>}
                  {profileNames[candidateId]}
                </td>
                {displayFields.map((field, index) => (
                  <td
                    key={field}
                    className={cx(
                      'px-3 py-2.5 text-sm',
                      selected ? 'text-white' : 'text-white/50'
                    )}
                  >
                    {profileData[field] ||
                      profileData.values?.[index] ||
                      '—'}
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

function CrosswalkContent({ lens, profileId, color }) {
  const profileContent = getLensProfileContent(lens.id, profileId);
  const lensData = LENS_PROFILE_CONTENT[lens.id];
  const hasFields = lensData?.fields?.length > 0;
  const hasProfiles = Object.keys(lensData?.profiles || {}).length > 1;

  const profileNames = {
    analyzer: 'Analyzer',
    controller: 'Controller',
    specialist: 'Specialist',
    strategist: 'Strategist',
    venturer: 'Venturer',
    altruist: 'Altruist',
    captain: 'Captain',
    collaborator: 'Collaborator',
    maverick: 'Maverick',
    persuader: 'Persuader',
    promoter: 'Promoter',
    adapter: 'Adapter',
    craftsman: 'Craftsman',
    guardian: 'Guardian',
    operator: 'Operator',
    individualist: 'Individualist',
    scholar: 'Scholar',
  };

  if (!profileContent) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <p className="mb-3 text-xs uppercase tracking-widest text-white/30">
          Crosswalk description
        </p>
        <p className="text-sm leading-6 text-white/70">{lens.why}</p>
      </div>
    );
  }

  const isKeyValue = !profileContent.values;

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
        <p
          className="mb-3 text-xs uppercase tracking-widest"
          style={{ color }}
        >
          {profileNames[profileId]} PI → {lens.lens}
        </p>

        {isKeyValue ? (
          <KVTable data={profileContent} color={color} />
        ) : (
          <div className="flex flex-wrap gap-2">
            {(profileContent.values || []).map((value, index) => (
              <span
                key={`${value}-${index}`}
                className="inline-block rounded-xl border border-white/10 bg-white/[0.06] px-3 py-1.5 text-sm text-white/80"
              >
                {value}
              </span>
            ))}
          </div>
        )}
      </div>

      {hasProfiles && hasFields && (
        <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
          <p className="mb-3 text-xs uppercase tracking-widest text-white/30">
            Cross-profile comparison
          </p>
          <ProfileComparisonTable
            lensId={lens.id}
            profileId={profileId}
            color={color}
            fields={lensData.fields}
          />
        </div>
      )}
    </div>
  );
}

const INSIGHTS = {
  'big-five-ocean': {
    use:
      'Read the translated Big Five pattern as a trait-level explanation of the source PI drives, especially pace, sociability, structure, and independence.',
    watchFor:
      'Strong conscientiousness or emotional-stability translations are directional crosswalk signals, not separately measured Big Five scores.',
    tip:
      'Trace each Big Five result back to the PI factors that produced it before applying the interpretation.',
  },
  'disc-crosswalk': {
    use:
      'Use the D/I/S/C translation to restate the same source PI pattern in familiar DISC language.',
    watchFor:
      'A DISC mix can simplify the profile, so retain the underlying PI factor spread when two translated styles appear close.',
    tip:
      'Show both the PI source factors and the translated DISC pattern together.',
  },
  'insights-discovery-color-model': {
    use:
      'Use the color-energy translation as a communication shorthand for the PI profile, not as a separate color assessment.',
    watchFor:
      'Opposite color energies can highlight pace or communication tension, but they remain derived from the PI source.',
    tip:
      'Use color labels to clarify interaction preferences while keeping the PI profile visible.',
  },
  'hogan-hpi': {
    use:
      'Use the HPI translation to describe how the PI profile may resemble bright-side Hogan tendencies during normal work conditions.',
    watchFor:
      'Translated Hogan scales are expected alignments from PI traits and should not be treated as administered Hogan scores.',
    tip:
      'Explain which PI factors drive each translated Hogan tendency.',
  },
  'hogan-hds-derailers': {
    use:
      'Use the HDS translation as a hypothesis about how an existing PI pattern could become overextended under pressure.',
    watchFor:
      'A possible derailer is not a fixed trait and is not confirmed without direct HDS data or observed behavior.',
    tip:
      'Frame derailers as overused strengths or stress hypotheses tied back to the source PI pattern.',
  },
  'thomas-kilmann-conflict-mode-tki': {
    use:
      'Use the TKI translation to estimate likely conflict preferences from the PI pattern.',
    watchFor:
      'Conflict mode is situational; the crosswalk shows a likely default rather than a permanent style.',
    tip:
      'Compare the translated default with actual behavior in low-stakes and high-stakes conflict.',
  },
  'cliftonstrengths-34-themes': {
    use:
      'Use the translated themes as likely strength expressions associated with the PI profile.',
    watchFor:
      'The ordering is a crosswalk projection and not a completed CliftonStrengths ranking.',
    tip:
      'Validate projected themes against repeated examples of work that feels natural or energizing.',
  },
  'enneagram-core-types-and-subtypes': {
    use:
      'Use the Enneagram translation as a possible motivational analogy for the PI profile.',
    watchFor:
      'Enneagram type and stress-arrow interpretations are directional hypotheses, not confirmed type results.',
    tip:
      'Keep the PI drives primary and use Enneagram language only when it adds useful context.',
  },
  'reiss-motivation-profile': {
    use:
      'Use the Reiss translation to describe likely motivational priorities associated with the PI drives.',
    watchFor:
      'Projected motives are not independently measured and may be shaped by role, context, and personal history.',
    tip:
      'Connect each projected motive to the PI factors and confirm it through actual preferences.',
  },
  'eq-i-20-emotional-intelligence': {
    use:
      'Use the EQ-i translation to explore how the PI pattern may shape emotional expression, assertiveness, and interpersonal behavior.',
    watchFor:
      'Do not use a translated EQ-i pattern as an independent emotional-intelligence score or role-readiness decision.',
    tip:
      'Treat translated EQ-i dimensions as development hypotheses to verify with direct evidence.',
  },
  'kolbe-a-index-conation': {
    use:
      'Use the Kolbe translation to estimate likely action preferences from the PI pattern.',
    watchFor:
      'Conative action modes are related to, but not identical with, PI behavioral drives.',
    tip:
      'Compare the translated action mode with how the person actually starts, structures, and completes work.',
  },
  'cognitive-load--working-style': {
    use:
      'Use this crosswalk to estimate how the PI pattern may interact with structure, pace, complexity, and social load.',
    watchFor:
      'This is a work-style translation and not a measured cognitive-capacity result.',
    tip:
      'Validate the projection against observed workload preferences and actual performance conditions.',
  },
};

function LensInsights({ lens }) {
  const insight = INSIGHTS[lens.id];
  if (!insight) return null;

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
        <p className="mb-2 text-xs uppercase tracking-widest text-white/30">
          Crosswalk use
        </p>
        <p className="text-sm leading-6 text-white/75">{insight.use}</p>
      </div>
      <div className="rounded-2xl border border-amber-400/20 bg-amber-500/8 p-4">
        <p className="mb-2 text-xs uppercase tracking-widest text-amber-400/60">
          Interpretation boundary
        </p>
        <p className="text-sm leading-6 text-white/75">
          {insight.watchFor}
        </p>
      </div>
      <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/8 p-4">
        <p className="mb-2 text-xs uppercase tracking-widest text-emerald-400/60">
          Validation step
        </p>
        <p className="text-sm leading-6 text-white/75">{insight.tip}</p>
      </div>
    </div>
  );
}

export default function LensDetailModal({ lens, profile, onClose }) {
  if (!lens || !profile) return null;

  const color = catColor(lens.category);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${lens.lens} crosswalk detail`}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/88 backdrop-blur-sm"
        onClick={onClose}
        aria-label="Close crosswalk detail"
      />

      <div className="relative z-10 w-full max-w-3xl rounded-3xl border border-white/15 bg-[#0d1420] shadow-2xl">
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 rounded-t-3xl border-b border-white/10 bg-[#0d1420] px-6 py-5">
          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              <span
                className="inline-block rounded-full px-2.5 py-0.5 text-xs font-semibold"
                style={{
                  background: `${color}22`,
                  border: `1px solid ${color}44`,
                  color,
                }}
              >
                {lens.category}
              </span>
              <span className="inline-block rounded-full border border-white/10 bg-white/8 px-2.5 py-0.5 text-xs text-white/45">
                {lens.visualLabel}
              </span>
              <span className="inline-block rounded-full border border-sky-400/20 bg-sky-500/10 px-2.5 py-0.5 text-xs text-sky-200/80">
                {CROSSWALK_MODEL.title}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">{lens.lens}</h2>
            <p className="mt-1 text-sm text-white/45">{lens.why}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex-shrink-0 rounded-xl border border-white/10 bg-white/5 p-2 text-white/40 transition hover:text-white"
            aria-label="Close"
          >
            <X size={18}/>
          </button>
        </div>

        <div className="space-y-6 p-6">
          <div className="rounded-2xl border border-sky-400/20 bg-sky-500/8 p-5">
            <div className="grid gap-3 sm:grid-cols-3">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-sky-200/50">
                  Source
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {profile.name} PI profile
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-sky-200/50">
                  Method
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {CROSSWALK_MODEL.methodValue}
                </p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-widest text-sky-200/50">
                  Output
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  {lens.lens} projection
                </p>
              </div>
            </div>
            <p className="mt-3 text-xs leading-5 text-white/45">
              {CROSSWALK_MODEL.boundary}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-950/70 px-4 py-6">
            <p className="mb-3 px-2 text-xs uppercase tracking-widest text-white/30">
              Visual translation — {profile.name} PI profile
            </p>
            <LensVisual
              lensId={lens.id}
              visualType={lens.visualType}
              color={color}
              profileId={profile.id}
            />
          </div>

          <div>
            <p className="mb-3 text-xs uppercase tracking-widest text-white/30">
              PI-derived crosswalk data
            </p>
            <CrosswalkContent
              lens={lens}
              profileId={profile.id}
              color={color}
            />
          </div>

          <LensInsights lens={lens} />

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-white/25">
              Source PI profile
            </p>
            <div className="flex items-center gap-2">
              <span
                className="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                style={{ background: profile.color }}
              />
              <span className="font-semibold text-white">{profile.name}</span>
              <span className="text-sm text-white/35">
                · {profile.tagline}
              </span>
            </div>
            <p className="mt-2 text-xs text-white/30">
              PI Factors — D: {profile.dominance} · E: {profile.extraversion} ·
              P: {profile.patience} · F: {profile.formality}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
