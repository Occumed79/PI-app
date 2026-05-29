import React from 'react';
import { TrendingUp, AlertCircle, Zap, Target } from 'lucide-react';
import { PI_PROFILES, PROFILE_GROUPS } from '../data/profiles';

export default function ProfileDetail({ profileId, onSelectLens }) {
  const profile = PI_PROFILES.find(p => p.id === profileId);
  if (!profile) return (
    <div className="flex items-center justify-center h-full text-slate-600">
      <p className="text-sm">Select a profile to view details</p>
    </div>
  );

  const grp = PROFILE_GROUPS[profile.group];

  return (
    <div className="fade-in space-y-4">
      {/* Hero card */}
      <div className="glass rounded-2xl p-6 border border-white/5">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold text-white"
            style={{background:`linear-gradient(135deg, ${profile.color}40, ${profile.color}20)`, border:`1px solid ${profile.color}40`}}>
            {profile.name[0]}
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <h2 className="text-2xl font-bold text-white">{profile.name}</h2>
              <span className="text-xs px-2 py-0.5 rounded-full text-slate-400" style={{backgroundColor:`${profile.color}20`, color:profile.color}}>
                {profile.group}
              </span>
            </div>
            <p className="text-slate-400 text-sm italic mb-1">{profile.tagline}</p>
            <p className="text-slate-500 text-sm">{profile.short}</p>
          </div>
        </div>

        {/* Drive Scores */}
        <div className="mt-5 grid grid-cols-4 gap-3">
          {[
            {k:'Dominance',   v:profile.dominance,   label:'D', desc:'Task / Results focus'},
            {k:'Extraversion',v:profile.extraversion, label:'E', desc:'Social / People focus'},
            {k:'Patience',    v:profile.patience,     label:'P', desc:'Pace / Stability'},
            {k:'Formality',   v:profile.formality,    label:'F', desc:'Rules / Structure'},
          ].map(s => (
            <div key={s.k} className="text-center">
              <div className="text-2xl font-bold mb-1" style={{color: profile.color}}>{s.v}</div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden mb-1">
                <div className="h-full rounded-full score-bar" style={{width:`${s.v}%`, backgroundColor: profile.color}} />
              </div>
              <div className="text-xs text-slate-500">{s.k}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Strengths + Traps */}
      <div className="grid grid-cols-2 gap-4">
        <div className="glass rounded-xl p-4 border border-emerald-400/10">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp size={14} className="text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">Strengths</span>
          </div>
          <ul className="space-y-1.5">
            {profile.strengths.map((s,i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                <span className="text-emerald-400 mt-0.5">•</span>{s}
              </li>
            ))}
          </ul>
        </div>
        <div className="glass rounded-xl p-4 border border-amber-400/10">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle size={14} className="text-amber-400" />
            <span className="text-sm font-semibold text-amber-400">Traps & Risks</span>
          </div>
          <ul className="space-y-1.5">
            {profile.traps.map((t,i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-slate-400">
                <span className="text-amber-400 mt-0.5">•</span>{t}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Needs */}
      <div className="glass rounded-xl p-4 border border-white/5">
        <div className="flex items-center gap-2 mb-3">
          <Zap size={14} className="text-purple-400" />
          <span className="text-sm font-semibold text-purple-400">What This Profile Needs</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {profile.needs.map((n,i) => (
            <span key={i} className="text-xs px-3 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-400/20">{n}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
