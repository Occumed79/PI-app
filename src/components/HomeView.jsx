import React from 'react';
import { Brain, Users, Sparkles, Activity, TrendingUp, Eye } from 'lucide-react';
import { PI_PROFILES, PROFILE_GROUPS } from '../data/profiles';
import { LENS_CATEGORIES } from '../data/lensData';

export default function HomeView({ onSelectMode, onSelectProfile }) {
  return (
    <div className="h-full overflow-y-auto px-8 py-10 fade-in">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Brain size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-white">PI Looking Glass</h1>
              <p className="text-slate-400 text-sm">C-Suite Behavioral Intelligence Platform</p>
            </div>
          </div>
          <p className="text-slate-400 max-w-2xl leading-relaxed">
            Map any of the <span className="text-indigo-400 font-semibold">17 PI behavioral profiles</span> across <span className="text-purple-400 font-semibold">63 psychological and leadership lenses</span>. 
            Built for executive-level insight — not HR checklists.
          </p>
        </div>

        {/* Mode Cards */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          {[
            { id:'full',    icon: Eye,      label:'Full System',      desc:'Explore all 63 lenses for any PI profile',              color:'from-indigo-500 to-purple-600', bg:'bg-indigo-500/10', border:'border-indigo-400/20' },
            { id:'builder', icon: Users,    label:'Employee Builder', desc:'Build a custom profile by toggling lenses and factors',  color:'from-emerald-500 to-teal-600',  bg:'bg-emerald-500/10',border:'border-emerald-400/20' },
            { id:'coach',   icon: Sparkles, label:'AI Scenario Coach',desc:'Describe a situation — get profile-aware guidance',      color:'from-amber-500 to-orange-600',  bg:'bg-amber-500/10',  border:'border-amber-400/20' },
          ].map(m => {
            const Icon = m.icon;
            return (
              <button key={m.id} onClick={() => onSelectMode(m.id)}
                className={`${m.bg} border ${m.border} rounded-2xl p-6 text-left hover:scale-[1.02] transition-all group`}>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center mb-4`}>
                  <Icon size={20} className="text-white" />
                </div>
                <h3 className="text-white font-semibold mb-1">{m.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{m.desc}</p>
              </button>
            );
          })}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-4 gap-4 mb-10">
          {[
            { label:'PI Profiles', value:'17', icon: Brain, color:'text-indigo-400' },
            { label:'Total Lenses', value:'63', icon: Eye, color:'text-purple-400' },
            { label:'Data Points', value:'1,000+', icon: Activity, color:'text-emerald-400' },
            { label:'Lens Categories', value:'8', icon: TrendingUp, color:'text-amber-400' },
          ].map(s => {
            const Icon = s.icon;
            return (
              <div key={s.label} className="glass rounded-xl p-4">
                <Icon size={16} className={`${s.color} mb-2`} />
                <div className={`text-2xl font-bold ${s.color}`}>{s.value}</div>
                <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
              </div>
            );
          })}
        </div>

        {/* Profile Grid */}
        <div className="mb-10">
          <h2 className="text-lg font-semibold text-white mb-4">Select a Profile to Begin</h2>
          <div className="grid grid-cols-4 gap-3">
            {PI_PROFILES.map(p => (
              <button key={p.id} onClick={() => { onSelectProfile(p.id); onSelectMode('full'); }}
                className="glass rounded-xl p-4 text-left hover:scale-[1.02] transition-all group border border-white/5 hover:border-white/15">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-3 rounded-full" style={{backgroundColor: p.color}} />
                  <span className="text-xs text-slate-500 font-medium">{p.group}</span>
                </div>
                <h3 className="text-white font-semibold text-sm">{p.name}</h3>
                <p className="text-slate-500 text-xs mt-1 leading-relaxed">{p.tagline}</p>
                <div className="mt-3 grid grid-cols-2 gap-1">
                  {Object.entries(p).filter(([k]) => ['dominance','extraversion','patience','formality'].includes(k)).map(([k,v]) => (
                    <div key={k}>
                      <div className="flex justify-between text-xs mb-0.5">
                        <span className="text-slate-600 capitalize">{k[0].toUpperCase()}</span>
                        <span className="text-slate-500">{v}</span>
                      </div>
                      <div className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full rounded-full score-bar" style={{width:`${v}%`, backgroundColor: p.color, opacity:0.7}} />
                      </div>
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Lens Categories */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">63 Lens Categories</h2>
          <div className="grid grid-cols-4 gap-3">
            {LENS_CATEGORIES.map(cat => {
              const count = Object.values({}).length;
              return (
                <div key={cat.id} className={`${cat.bg} border ${cat.border} rounded-xl p-4`}>
                  <div className={`text-xs font-semibold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent mb-1`}>{cat.label}</div>
                  <div className="text-xs text-slate-500">8 frameworks</div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
