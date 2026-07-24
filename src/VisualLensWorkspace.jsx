/**
 * Main PI crosswalk workspace.
 * A completed Predictive Index profile is the source assessment.
 * Each lens renders a PI-derived translation into a related framework.
 */
import React, { useMemo, useState } from 'react';
import {
  Activity,
  Brain,
  BrainCircuit,
  Gauge,
  Layers3,
  Network,
  Search,
  Sparkles,
  Target,
  Users,
} from 'lucide-react';
import { HSI_LENS_REGISTRY } from './data/hsiLensRegistry.js';
import { PI_PROFILES } from './data/profiles.js';
import { CROSSWALK_MODEL } from './data/crosswalkModel.js';
import LensVisual from './components/LensVisual.jsx';
import LensDetailModal from './components/LensDetailModal.jsx';
import { getLensProfileContent } from './data/lensProfileContent.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

const CAT_ICONS = {
  Personality: Brain,
  Cognitive: BrainCircuit,
  Motivation: Sparkles,
  Team: Users,
  Emotional: Activity,
  Leadership: Target,
  Wellbeing: Gauge,
  Interpersonal: Network,
  Other: Layers3,
};

const CAT_COLORS = {
  Personality: 'text-indigo-300 bg-indigo-500/10 border-indigo-400/20',
  Cognitive: 'text-sky-300 bg-sky-500/10 border-sky-400/20',
  Motivation: 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20',
  Team: 'text-orange-300 bg-orange-500/10 border-orange-400/20',
  Emotional: 'text-pink-300 bg-pink-500/10 border-pink-400/20',
  Leadership: 'text-yellow-300 bg-yellow-500/10 border-yellow-400/20',
  Wellbeing: 'text-purple-300 bg-purple-500/10 border-purple-400/20',
  Interpersonal: 'text-teal-300 bg-teal-500/10 border-teal-400/20',
  Other: 'text-slate-300 bg-slate-500/10 border-slate-400/20',
};

const CAT_CHART_COLORS = {
  Personality: '#818cf8',
  Cognitive: '#38bdf8',
  Motivation: '#34d399',
  Team: '#fb923c',
  Emotional: '#f472b6',
  Leadership: '#fbbf24',
  Wellbeing: '#a78bfa',
  Interpersonal: '#2dd4bf',
  Other: '#94a3b8',
};

function catColor(category) {
  return CAT_CHART_COLORS[category] || '#38bdf8';
}

function catStyle(category) {
  return CAT_COLORS[category] || CAT_COLORS.Other;
}

function Card({ children, className = '' }) {
  return (
    <div
      className={cx(
        'rounded-3xl border border-white/10 bg-white/[0.05] shadow-2xl shadow-black/20 backdrop-blur-xl',
        className
      )}
    >
      {children}
    </div>
  );
}

function LensSidebar({ activeLens, setActiveLens }) {
  const [query, setQuery] = useState('');

  const grouped = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    const filtered = HSI_LENS_REGISTRY.filter(lens =>
      `${lens.lens} ${lens.category}`.toLowerCase().includes(normalized)
    );

    return filtered.reduce((groups, lens) => {
      const category = lens.category || 'Other';
      if (!groups[category]) groups[category] = [];
      groups[category].push(lens);
      return groups;
    }, {});
  }, [query]);

  return (
    <aside className="flex max-h-[72vh] flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#090D1D]/70 backdrop-blur-xl lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)] lg:max-h-none">
      <div className="border-b border-white/8 px-5 py-4">
        <div className="mb-1 text-xs uppercase tracking-widest text-white/30">
          PI Crosswalk Intelligence
        </div>
        <div className="text-base font-bold text-white">
          {HSI_LENS_REGISTRY.length} Translation Lenses
        </div>
      </div>

      <div className="border-b border-white/8 px-4 py-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-2">
          <Search size={14} className="flex-shrink-0 text-white/30" />
          <input
            className="w-full bg-transparent text-sm text-white placeholder-white/25 outline-none"
            placeholder="Search crosswalk lenses…"
            value={query}
            onChange={event => setQuery(event.target.value)}
          />
        </div>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto px-3 py-3">
        {Object.entries(grouped).map(([category, lenses]) => {
          const Icon = CAT_ICONS[category] || Layers3;

          return (
            <div key={category}>
              <div className="mb-1.5 flex items-center gap-1.5 px-1 text-[10px] uppercase tracking-[0.18em] text-white/30">
                <Icon size={11} /> {category}
              </div>
              {lenses.map(lens => (
                <button
                  key={lens.id}
                  type="button"
                  onClick={() => setActiveLens(lens)}
                  className={cx(
                    'w-full rounded-xl px-3 py-2 text-left text-sm transition',
                    activeLens?.id === lens.id
                      ? 'bg-white/12 font-semibold text-white'
                      : 'text-white/55 hover:bg-white/6 hover:text-white/90'
                  )}
                >
                  {lens.lens}
                </button>
              ))}
            </div>
          );
        })}
      </div>
    </aside>
  );
}

function ProfileSelector({ profile, setProfile }) {
  return (
    <div className="flex items-center gap-3">
      <div
        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl text-lg font-black text-slate-900"
        style={{ background: profile.color }}
      >
        {profile.name[0]}
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-xs uppercase tracking-widest text-white/35">
          Source PI Profile
        </div>
        <select
          value={profile.id}
          onChange={event =>
            setProfile(
              PI_PROFILES.find(candidate => candidate.id === event.target.value) ||
                PI_PROFILES[0]
            )
          }
          className="w-full cursor-pointer bg-transparent text-sm font-semibold text-white outline-none"
        >
          {PI_PROFILES.map(candidate => (
            <option
              key={candidate.id}
              value={candidate.id}
              style={{ background: '#0f172a' }}
            >
              {candidate.name} — {candidate.tagline}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

function KVContent({ data, color }) {
  if (!data) return null;

  const entries = Object.entries(data).filter(
    ([key]) => !key.includes('Deep dive') && !key.includes('Guided')
  );

  if (!entries.length) return null;

  return (
    <div className="grid gap-2">
      {entries.slice(0, 6).map(([key, value]) => (
        <div
          key={key}
          className="flex items-start gap-3 rounded-xl border border-white/8 bg-white/[0.04] px-4 py-3"
        >
          <span
            className="w-36 flex-shrink-0 text-xs font-semibold uppercase tracking-wider"
            style={{ color }}
          >
            {key}
          </span>
          <span className="text-sm leading-5 text-white/75">{value}</span>
        </div>
      ))}
    </div>
  );
}

function TranslationBasis({ lens, profile }) {
  return (
    <Card className="p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-sky-400/25 bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-200">
          {CROSSWALK_MODEL.title}
        </span>
        <span className="text-xs text-white/35">
          The PI result is the source; this lens is the translated view.
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            {CROSSWALK_MODEL.sourceLabel}
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            {profile.name} PI profile
          </p>
        </div>
        <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            {CROSSWALK_MODEL.methodLabel}
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            {CROSSWALK_MODEL.methodValue}
          </p>
        </div>
        <div className="rounded-2xl border border-white/8 bg-black/20 p-4">
          <p className="text-[10px] uppercase tracking-widest text-white/30">
            {CROSSWALK_MODEL.outputLabel}
          </p>
          <p className="mt-1 text-sm font-semibold text-white">
            {lens.lens} projection
          </p>
        </div>
      </div>

      <p className="mt-3 text-xs leading-5 text-white/40">
        {CROSSWALK_MODEL.boundary}
      </p>
    </Card>
  );
}

function LensContentPanel({ lens, profile, setProfile, onOpenModal }) {
  const color = catColor(lens.category);
  const profileContent = getLensProfileContent(lens.id, profile.id);
  const categoryClass = catStyle(lens.category);

  return (
    <div className="space-y-5">
      <TranslationBasis lens={lens} profile={profile} />

      <Card className="overflow-hidden">
        <div className="relative p-6">
          <div
            className="absolute -right-16 -top-16 h-64 w-64 rounded-full blur-3xl"
            style={{ background: `${color}18` }}
          />
          <div className="relative">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span
                className={cx(
                  'inline-block rounded-full border px-2.5 py-0.5 text-xs font-semibold',
                  categoryClass
                )}
              >
                {lens.category}
              </span>
              <span className="inline-block rounded-full border border-white/10 bg-white/8 px-2.5 py-0.5 text-xs text-white/45">
                {lens.visualLabel}
              </span>
              <span className="inline-block rounded-full border border-white/10 bg-white/8 px-2.5 py-0.5 text-xs text-white/30">
                PI-derived
              </span>
            </div>

            <h2 className="text-3xl font-bold tracking-tight text-white">
              {lens.lens}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-white/50">
              {lens.why}
            </p>

            <div className="mt-4 flex items-center justify-between gap-4 border-t border-white/8 pt-4">
              <ProfileSelector profile={profile} setProfile={setProfile} />
              <button
                type="button"
                onClick={onOpenModal}
                className="flex-shrink-0 rounded-xl border border-white/15 bg-white/8 px-4 py-2 text-xs font-semibold text-white/70 transition hover:bg-white/15 hover:text-white"
              >
                Full Crosswalk Detail →
              </button>
            </div>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <div className="mb-3 text-xs uppercase tracking-widest text-white/30">
          {lens.visualLabel} — {profile.name} PI crosswalk
        </div>
        <LensVisual
          lensId={lens.id}
          visualType={lens.visualType}
          color={color}
          profileId={profile.id}
        />
      </Card>

      {profileContent && (
        <Card className="p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/30">
              {profile.name} — Derived {lens.lens} interpretation
            </span>
            <span
              className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
              style={{ background: profile.color }}
            />
          </div>
          <KVContent data={profileContent} color={color} />
        </Card>
      )}

      <Card className="p-5">
        <div className="mb-3 text-xs uppercase tracking-widest text-white/30">
          Source PI Factor Scores — {profile.name}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            ['Dominance', profile.dominance],
            ['Extraversion', profile.extraversion],
            ['Patience', profile.patience],
            ['Formality', profile.formality],
          ].map(([label, value]) => (
            <div
              key={label}
              className="rounded-xl border border-white/8 bg-white/[0.04] p-3 text-center"
            >
              <div className="text-2xl font-bold text-white">{value}</div>
              <div className="mt-0.5 text-[10px] uppercase tracking-widest text-white/35">
                {label}
              </div>
              <div className="mt-2 h-1 w-full rounded-full bg-white/10">
                <div
                  className="h-1 rounded-full"
                  style={{ width: `${value}%`, background: color }}
                />
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

export default function VisualLensWorkspace() {
  const [activeLens, setActiveLens] = useState(HSI_LENS_REGISTRY[0]);
  const [profile, setProfile] = useState(PI_PROFILES[0]);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="text-white">
      <div className="grid gap-5 lg:grid-cols-[21rem_minmax(0,1fr)]">
        <LensSidebar activeLens={activeLens} setActiveLens={setActiveLens} />

        <div className="min-w-0">
          <div className="mb-4 flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-white/30">
                Current crosswalk
              </span>
              <div className="mt-0.5 text-base font-bold text-white">
                {activeLens?.lens}
              </div>
              <div className="text-xs text-white/35">
                Source PI profile: {profile.name}
              </div>
            </div>
            <div className="flex-shrink-0">
              <select
                value={profile.id}
                onChange={event =>
                  setProfile(
                    PI_PROFILES.find(
                      candidate => candidate.id === event.target.value
                    ) || PI_PROFILES[0]
                  )
                }
                className="cursor-pointer rounded-xl border border-white/15 bg-white/8 px-3 py-2 text-sm text-white outline-none"
              >
                {PI_PROFILES.map(candidate => (
                  <option
                    key={candidate.id}
                    value={candidate.id}
                    style={{ background: '#0f172a' }}
                  >
                    {candidate.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {activeLens && (
            <LensContentPanel
              lens={activeLens}
              profile={profile}
              setProfile={setProfile}
              onOpenModal={() => setShowModal(true)}
            />
          )}
        </div>
      </div>

      {showModal && activeLens && (
        <LensDetailModal
          lens={activeLens}
          profile={profile}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}
