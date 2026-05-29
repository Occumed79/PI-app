import React, { useState } from 'react';
import { Plus, X, User, Download, ToggleLeft, ToggleRight } from 'lucide-react';
import { PI_PROFILES } from '../../data/profiles';
import { LENS_CATEGORIES, LENS_META } from '../../data/lensData';

export default function EmployeeBuilder() {
  const [employeeName, setEmployeeName] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [enabledLenses, setEnabledLenses] = useState({});
  const [notes, setNotes] = useState('');

  const toggleLens = (id) => setEnabledLenses(p => ({...p, [id]: !p[id]}));
  const enabledCount = Object.values(enabledLenses).filter(Boolean).length;

  const profile = PI_PROFILES.find(p => p.id === selectedProfile);

  return (
    <div className="h-full overflow-y-auto px-8 py-8 fade-in">
      <div className="max-w-5xl mx-auto">

        <div className="mb-6">
          <h1 className="text-2xl font-bold text-white mb-1">Employee Builder</h1>
          <p className="text-slate-400 text-sm">Build a custom intelligence profile for any team member — toggle which lenses and sub-factors apply to their specific context.</p>
        </div>

        {/* Employee Info */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <label className="text-xs text-slate-500 block mb-1.5">Employee Name</label>
            <div className="relative">
              <User size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input value={employeeName} onChange={e => setEmployeeName(e.target.value)}
                placeholder="Enter name..."
                className="w-full bg-white/5 border border-white/10 rounded-lg pl-8 pr-3 py-2.5 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-indigo-400/40" />
            </div>
          </div>
          <div>
            <label className="text-xs text-slate-500 block mb-1.5">PI Profile</label>
            <select value={selectedProfile || ''} onChange={e => setSelectedProfile(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-2.5 text-sm text-slate-300 focus:outline-none focus:border-indigo-400/40">
              <option value="">Select a PI profile...</option>
              {PI_PROFILES.map(p => <option key={p.id} value={p.id}>{p.name} — {p.tagline}</option>)}
            </select>
          </div>
        </div>

        {profile && (
          <div className="glass rounded-xl p-4 border mb-6 flex items-center gap-4"
            style={{borderColor: `${profile.color}30`, backgroundColor: `${profile.color}08`}}>
            <span className="w-3 h-3 rounded-full flex-shrink-0" style={{backgroundColor: profile.color}} />
            <div>
              <span className="text-sm font-semibold text-white">{profile.name}</span>
              <span className="text-xs text-slate-400 ml-2">{profile.short}</span>
            </div>
            <div className="ml-auto flex gap-4">
              {[
                {k:'D', v:profile.dominance},
                {k:'E', v:profile.extraversion},
                {k:'P', v:profile.patience},
                {k:'F', v:profile.formality},
              ].map(s => (
                <div key={s.k} className="text-center">
                  <div className="text-sm font-bold" style={{color: profile.color}}>{s.v}</div>
                  <div className="text-xs text-slate-600">{s.k}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Lens Toggles by Category */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-white">Active Lenses <span className="text-slate-500 font-normal">({enabledCount} selected)</span></h2>
          <div className="flex gap-2">
            <button onClick={() => setEnabledLenses(Object.fromEntries(Object.keys(LENS_META).map(id => [id, true])))}
              className="text-xs px-3 py-1.5 rounded-lg bg-indigo-500/20 text-indigo-300 hover:bg-indigo-500/30 transition-colors">Enable All</button>
            <button onClick={() => setEnabledLenses({})}
              className="text-xs px-3 py-1.5 rounded-lg bg-white/5 text-slate-400 hover:bg-white/10 transition-colors">Clear All</button>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          {LENS_CATEGORIES.map(cat => {
            const catLenses = Object.entries(LENS_META).filter(([,v]) => v.category === cat.id);
            const catEnabled = catLenses.filter(([id]) => enabledLenses[id]).length;
            return (
              <div key={cat.id} className={`${cat.bg} border ${cat.border} rounded-xl p-4`}>
                <div className="flex items-center justify-between mb-3">
                  <h3 className={`text-sm font-semibold bg-gradient-to-r ${cat.color} bg-clip-text text-transparent`}>{cat.label}</h3>
                  <span className="text-xs text-slate-500">{catEnabled}/{catLenses.length} active</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {catLenses.map(([id, meta]) => {
                    const on = !!enabledLenses[id];
                    return (
                      <button key={id} onClick={() => toggleLens(id)}
                        className={`flex items-center justify-between px-3 py-2 rounded-lg text-xs border transition-all ${on ? 'bg-white/8 border-white/15 text-white' : 'bg-white/2 border-white/5 text-slate-500 hover:text-slate-300'}`}>
                        <span className="truncate mr-2">{meta.name}</span>
                        {on ? <ToggleRight size={14} className="text-indigo-400 flex-shrink-0" /> : <ToggleLeft size={14} className="text-slate-600 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Notes */}
        <div className="mb-6">
          <label className="text-xs text-slate-500 block mb-1.5">Context Notes</label>
          <textarea value={notes} onChange={e => setNotes(e.target.value)}
            placeholder="Add situational context, known stressors, team dynamics, or developmental goals..."
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-indigo-400/40 resize-none" />
        </div>

        {/* Summary */}
        {enabledCount > 0 && employeeName && selectedProfile && (
          <div className="glass rounded-xl p-5 border border-indigo-400/20">
            <h3 className="text-sm font-semibold text-white mb-3">Profile Summary: {employeeName}</h3>
            <p className="text-xs text-slate-400 mb-3">
              <span className="text-indigo-400 font-medium">{profile?.name}</span> — {enabledCount} lenses active across {LENS_CATEGORIES.filter(c => Object.entries(LENS_META).filter(([id,v]) => v.category===c.id && enabledLenses[id]).length > 0).length} categories.
            </p>
            {notes && <p className="text-xs text-slate-500 italic border-t border-white/5 pt-3 mt-3">{notes}</p>}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {Object.entries(enabledLenses).filter(([,v]) => v).map(([id]) => (
                <span key={id} className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/15 text-indigo-400 border border-indigo-400/20">
                  {LENS_META[id]?.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
