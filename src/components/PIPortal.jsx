import React, { useState } from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { PI_PROFILES } from '../data/profiles.js';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';
import LensVisual from './LensVisual.jsx';

function cx(...c) { return c.filter(Boolean).join(' '); }

const CAT_STYLE = {
  Personality:'bg-indigo-500/15 text-indigo-300 border-indigo-400/20',
  Cognitive:'bg-sky-500/15 text-sky-300 border-sky-400/20',
  Motivation:'bg-emerald-500/15 text-emerald-300 border-emerald-400/20',
  Team:'bg-orange-500/15 text-orange-300 border-orange-400/20',
  Emotional:'bg-pink-500/15 text-pink-300 border-pink-400/20',
  Leadership:'bg-yellow-500/15 text-yellow-300 border-yellow-400/20',
  Wellbeing:'bg-purple-500/15 text-purple-300 border-purple-400/20',
  Neurodiversity:'bg-teal-500/15 text-teal-300 border-teal-400/20',
  Other:'bg-slate-500/15 text-slate-300 border-slate-400/20',
};
function CatBadge({ cat }) {
  return <span className={cx('inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium', CAT_STYLE[cat]||CAT_STYLE.Other)}>{cat||'Other'}</span>;
}

// ── Lens Detail Modal ─────────────────────────────────────────────────────
function LensModal({ lens, profile, onClose }) {
  if (!lens) return null;
  const color = profile?.color || '#38bdf8';

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-10">
      <div className="absolute inset-0 bg-black/85 backdrop-blur-sm" onClick={onClose}/>
      <div className="relative z-10 w-full max-w-2xl rounded-3xl border border-white/15 bg-slate-900 shadow-2xl">

        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5">
          <div>
            <div className="mb-2 flex flex-wrap gap-2">
              <CatBadge cat={lens.category}/>
              <span className="inline-block rounded-full border border-white/10 bg-white/8 px-2.5 py-0.5 text-xs text-white/50">{lens.visualLabel}</span>
            </div>
            <h2 className="text-2xl font-bold text-white">{lens.lens}</h2>
            <p className="mt-1 text-sm text-white/50">{lens.why}</p>
          </div>
          <button type="button" onClick={onClose}
            className="flex-shrink-0 rounded-xl border border-white/10 p-2 text-white/40 hover:text-white transition">
            <X size={18}/>
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* THE ACTUAL CHART */}
          <div className="rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-6">
            <LensVisual visualType={lens.visualType} color={color}/>
          </div>

          {/* Details */}
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="mb-1 text-xs uppercase tracking-widest text-white/25">Category</p>
              <CatBadge cat={lens.category}/>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="mb-1 text-xs uppercase tracking-widest text-white/25">Visual Type</p>
              <p className="font-mono text-sm text-white">{lens.visualType}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="mb-1 text-xs uppercase tracking-widest text-white/25">Status</p>
              <p className="text-sm text-white/70">{lens.status || '—'}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <p className="mb-2 text-xs uppercase tracking-widest text-white/25">What this lens measures</p>
            <p className="text-sm leading-6 text-white/75">{lens.why}</p>
          </div>

          {profile && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
              <p className="mb-2 text-xs uppercase tracking-widest text-white/25">Applied to profile</p>
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full" style={{background:profile.color}}/>
                <span className="font-semibold text-white">{profile.name}</span>
                <span className="text-sm text-white/40">— {profile.tagline}</span>
              </div>
              <p className="mt-2 text-xs text-white/40">
                This lens applies to all 17 PI profiles. The chart above shows the visual structure assigned to this lens type.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// ── Lens Grid ─────────────────────────────────────────────────────────────
function LensGrid({ profile, onBack, onSelectLens }) {
  const color = profile.color;

  return (
    <div>
      {/* Profile header */}
      <div className="mb-6 rounded-3xl border border-white/10 bg-white/[0.05] p-6">
        <button type="button" onClick={onBack}
          className="mb-4 flex items-center gap-2 text-sm text-white/45 hover:text-white transition">
          <ArrowLeft size={16}/> All profiles
        </button>
        <div className="flex items-start gap-4">
          <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl text-2xl font-black text-slate-900"
            style={{background:color}}>
            {profile.name[0]}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
            <p className="text-sm text-white/45">{profile.tagline} · {profile.group}</p>
            <p className="mt-1 max-w-2xl text-sm leading-6 text-white/55">{profile.short}</p>
          </div>
        </div>
        <div className="mt-5 grid gap-4 border-t border-white/8 pt-5 sm:grid-cols-3">
          <div>
            <p className="mb-1.5 text-xs uppercase tracking-widest text-white/25">Strengths</p>
            {profile.strengths.map(s=><p key={s} className="text-xs text-emerald-300">↑ {s}</p>)}
          </div>
          <div>
            <p className="mb-1.5 text-xs uppercase tracking-widest text-white/25">Watch outs</p>
            {profile.traps.map(t=><p key={t} className="text-xs text-amber-300">△ {t}</p>)}
          </div>
          <div>
            <p className="mb-1.5 text-xs uppercase tracking-widest text-white/25">Needs</p>
            {profile.needs.map(n=><p key={n} className="text-xs text-sky-300">◇ {n}</p>)}
          </div>
        </div>
      </div>

      <p className="mb-4 text-sm text-white/35">{HSI_LENS_REGISTRY.length} lenses — click any to expand</p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {HSI_LENS_REGISTRY.map(lens => (
          <button key={lens.id} type="button" onClick={() => onSelectLens(lens)}
            className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-left transition hover:border-white/25 hover:bg-white/[0.08] overflow-hidden">
            {/* Category */}
            <div className="mb-3">
              <CatBadge cat={lens.category}/>
            </div>
            {/* Chart preview — small, clipped */}
            <div className="pointer-events-none mb-3 overflow-hidden rounded-xl bg-slate-950/50" style={{height:100}}>
              <div className="scale-[0.55] origin-top-left" style={{width:'182%', height:'182%'}}>
                <LensVisual visualType={lens.visualType} color={color}/>
              </div>
            </div>
            <p className="text-sm font-semibold leading-snug text-white">{lens.lens}</p>
            <p className="mt-1 text-xs text-white/35">{lens.visualLabel}</p>
            <p className="mt-1 text-[11px] leading-4 text-white/22 line-clamp-2">{lens.why}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

// ── 17 Profile Cards ──────────────────────────────────────────────────────
export default function PIPortal() {
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [selectedLens, setSelectedLens] = useState(null);

  if (selectedProfile) {
    return (
      <>
        <LensGrid profile={selectedProfile} onBack={() => setSelectedProfile(null)} onSelectLens={setSelectedLens}/>
        {selectedLens && <LensModal lens={selectedLens} profile={selectedProfile} onClose={() => setSelectedLens(null)}/>}
      </>
    );
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-white">PI Profiles</h1>
        <p className="mt-1 text-sm text-white/40">Select a profile to explore all 104 lenses</p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {PI_PROFILES.map(profile => (
          <button key={profile.id} type="button" onClick={() => setSelectedProfile(profile)}
            className="group rounded-3xl border border-white/10 bg-white/[0.04] p-5 text-left transition hover:border-white/25 hover:bg-white/[0.08]">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl text-xl font-black text-slate-900 flex-shrink-0"
                style={{background:profile.color}}>
                {profile.name[0]}
              </div>
              <div>
                <p className="font-bold text-white">{profile.name}</p>
                <p className="text-xs text-white/40">{profile.group}</p>
              </div>
            </div>
            <p className="mb-2 text-xs font-medium" style={{color:profile.color}}>{profile.tagline}</p>
            <p className="text-xs leading-5 text-white/50">{profile.short}</p>
            <div className="mt-4 border-t border-white/8 pt-3">
              <p className="text-xs text-white/25 group-hover:text-white/50 transition">104 lenses →</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
