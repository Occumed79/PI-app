import React from 'react';
import { Info, Lightbulb, AlertTriangle, TrendingUp, BookOpen } from 'lucide-react';
import { LENSES, LENS_META } from '../data/lensData';
import { PI_PROFILES } from '../data/profiles';

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
        <div className="h-full rounded-full score-bar" style={{width:`${pct}%`, backgroundColor:color}} />
      </div>
    </div>
  );
}

function ProfileLensCard({ profile, data, lensId }) {
  if (!data) return null;
  return (
    <div className="glass rounded-xl p-4 border border-white/5 hover:border-white/10 transition-all">
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: profile.color}} />
        <span className="text-sm font-semibold text-white">{profile.name}</span>
        <span className="text-xs text-slate-500 ml-auto">{profile.tagline}</span>
      </div>
      
      <div className="space-y-2 mb-3">
        <div className="flex gap-2">
          <span className="text-xs font-medium text-indigo-400 min-w-16">Primary</span>
          <span className="text-xs text-slate-300">{data.primary}</span>
        </div>
        {data.secondary && (
          <div className="flex gap-2">
            <span className="text-xs font-medium text-slate-500 min-w-16">Secondary</span>
            <span className="text-xs text-slate-400">{data.secondary}</span>
          </div>
        )}
        {data.stress && (
          <div className="flex gap-2 items-start">
            <span className="text-xs font-medium text-amber-400 min-w-16">Under stress</span>
            <span className="text-xs text-amber-300/80">{data.stress}</span>
          </div>
        )}
      </div>

      <div className="pt-2 border-t border-white/5">
        <div className="flex gap-1.5 items-start">
          <Lightbulb size={11} className="text-purple-400 mt-0.5 flex-shrink-0" />
          <p className="text-xs text-slate-400 leading-relaxed italic">{data.insight}</p>
        </div>
      </div>
    </div>
  );
}

export default function LensWindow({ lensId, profileId }) {
  const lens = LENSES.find(l => l.id === lensId);
  const meta = LENS_META[lensId];
  
  if (!lens && !meta) return (
    <div className="h-full flex items-center justify-center text-slate-600">
      <div className="text-center">
        <BookOpen size={32} className="mx-auto mb-3 opacity-30" />
        <p className="text-sm">Select a lens from the sidebar</p>
      </div>
    </div>
  );

  // If lens has full data
  if (lens) {
    const activeProfile = PI_PROFILES.find(p => p.id === profileId);
    const profilesToShow = profileId
      ? [PI_PROFILES.find(p => p.id === profileId)].filter(Boolean)
      : PI_PROFILES;

    return (
      <div className="h-full overflow-y-auto px-6 py-6 fade-in">
        
        {/* Lens Header */}
        <div className="mb-6">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-400 font-medium capitalize">{lens.category}</span>
              </div>
              <h1 className="text-2xl font-bold text-white mb-2">{lens.name}</h1>
              
              {/* What / Why / How */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                {[
                  { icon: Info,          label:'What it is',   text: lens.what,  color:'text-sky-400',    bg:'bg-sky-500/10',    border:'border-sky-400/20'    },
                  { icon: TrendingUp,    label:'Why it matters',text: lens.why,  color:'text-emerald-400',bg:'bg-emerald-500/10',border:'border-emerald-400/20' },
                  { icon: BookOpen,      label:'How we inferred',text: lens.how, color:'text-violet-400', bg:'bg-violet-500/10', border:'border-violet-400/20'  },
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
            </div>
          </div>
        </div>

        {/* Profile Filter Pills */}
        {!profileId && (
          <div className="mb-4 flex items-center gap-2 flex-wrap">
            <span className="text-xs text-slate-500">Showing all 17 profiles</span>
          </div>
        )}

        {/* Profile Cards Grid */}
        <div className={`grid gap-3 ${profileId ? 'grid-cols-1 max-w-2xl' : 'grid-cols-2 xl:grid-cols-3'}`}>
          {profilesToShow.map(profile => (
            <ProfileLensCard
              key={profile.id}
              profile={profile}
              data={lens.profiles[profile.id]}
              lensId={lensId}
            />
          ))}
        </div>
      </div>
    );
  }

  // Lens exists in meta but no full data yet — show summary card
  return (
    <div className="h-full overflow-y-auto px-6 py-6 fade-in">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-white mb-2">{meta.name}</h1>
        <div className="glass rounded-xl p-6 border border-white/5 max-w-2xl">
          <div className="flex items-center gap-2 mb-4">
            <BookOpen size={16} className="text-indigo-400" />
            <span className="text-sm font-medium text-slate-300">Framework Overview</span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            This lens is part of the <span className="text-indigo-400 capitalize font-medium">{meta.category}</span> category. 
            Select a profile from the sidebar to explore how PI behavioral drives map to {meta.name} across all 17 profiles.
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
      </div>
    </div>
  );
}
