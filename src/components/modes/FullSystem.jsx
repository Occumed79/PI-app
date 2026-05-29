import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { PI_PROFILES } from '../../data/profiles';
import { LENSES, LENS_META, LENS_CATEGORIES } from '../../data/lensData';
import LensWindow from '../LensWindow';
import ProfileDetail from '../ProfileDetail';

export default function FullSystem({ profile, activeLens, onSelectLens, onSelectProfile }) {
  const [search, setSearch] = useState('');

  const filteredLenses = search
    ? Object.entries(LENS_META).filter(([id, m]) => m.name.toLowerCase().includes(search.toLowerCase()))
    : null;

  const selectedProfile = PI_PROFILES.find(p => p.id === profile);

  return (
    <div className="flex h-full overflow-hidden">

      {/* Left: profile summary + lens grid */}
      <div className="w-72 flex-shrink-0 border-r border-white/5 overflow-y-auto px-4 py-4 space-y-4">

        {/* Profile Summary */}
        {selectedProfile ? (
          <div className="glass rounded-xl p-4 border border-white/5">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-3 h-3 rounded-full" style={{backgroundColor: selectedProfile.color}} />
              <span className="text-sm font-bold text-white">{selectedProfile.name}</span>
              <span className="text-xs text-slate-500 ml-auto">{selectedProfile.group}</span>
            </div>
            <p className="text-xs text-slate-400 italic mb-3">{selectedProfile.tagline}</p>
            <div className="space-y-1.5">
              {[
                {k:'Dominance',    v:selectedProfile.dominance},
                {k:'Extraversion', v:selectedProfile.extraversion},
                {k:'Patience',     v:selectedProfile.patience},
                {k:'Formality',    v:selectedProfile.formality},
              ].map(s => (
                <div key={s.k}>
                  <div className="flex justify-between text-xs mb-0.5">
                    <span className="text-slate-500">{s.k}</span>
                    <span className="text-slate-400">{s.v}</span>
                  </div>
                  <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{width:`${s.v}%`, backgroundColor: selectedProfile.color, opacity:0.8}} />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-3 pt-3 border-t border-white/5">
              <p className="text-xs text-slate-500 leading-relaxed">{selectedProfile.short}</p>
            </div>
          </div>
        ) : (
          <div className="glass rounded-xl p-4 border border-white/5 text-center">
            <p className="text-xs text-slate-500">Select a profile from the sidebar to begin exploring lenses</p>
          </div>
        )}

        {/* Search */}
        <div className="relative">
          <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search lenses..."
            className="w-full bg-white/5 border border-white/10 rounded-lg pl-8 pr-3 py-2 text-xs text-slate-300 placeholder-slate-600 focus:outline-none focus:border-indigo-400/40"
          />
          {search && <button onClick={() => setSearch('')} className="absolute right-2 top-1/2 -translate-y-1/2"><X size={12} className="text-slate-500" /></button>}
        </div>

        {/* Lens List */}
        {filteredLenses ? (
          <div className="space-y-0.5">
            {filteredLenses.map(([id, m]) => (
              <button key={id} onClick={() => onSelectLens(id)}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs transition-all sidebar-lens-btn ${activeLens===id ? 'active text-indigo-300' : 'text-slate-400 hover:text-slate-200'}`}>
                {m.name}
              </button>
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {LENS_CATEGORIES.map(cat => {
              const catLenses = Object.entries(LENS_META).filter(([,v]) => v.category === cat.id);
              return (
                <div key={cat.id}>
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-1.5 bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>
                    {cat.label}
                  </p>
                  <div className="space-y-0.5">
                    {catLenses.map(([id, m]) => (
                      <button key={id} onClick={() => onSelectLens(id)}
                        className={`w-full text-left px-3 py-1.5 rounded-lg text-xs transition-all sidebar-lens-btn ${activeLens===id ? 'active text-indigo-300' : 'text-slate-400 hover:text-slate-200'}`}>
                        {m.name}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Right: lens content */}
      <div className="flex-1 overflow-hidden">
        {activeLens ? (
          <LensWindow lensId={activeLens} profileId={profile} />
        ) : profile ? (
          <div className="h-full overflow-y-auto px-6 py-6">
            <ProfileDetail profileId={profile} onSelectLens={onSelectLens} />
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <div className="text-center max-w-sm">
              <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-400/20 flex items-center justify-center mx-auto mb-4">
                <Search size={24} className="text-indigo-400" />
              </div>
              <h3 className="text-white font-semibold mb-2">Start Exploring</h3>
              <p className="text-slate-500 text-sm">Select a profile and a lens to see the full behavioral intelligence breakdown.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
