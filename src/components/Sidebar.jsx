import React, { useState } from 'react';
import { Brain, Users, Sparkles, ChevronLeft, ChevronRight, LayoutDashboard, ChevronDown, ChevronUp } from 'lucide-react';
import { PI_PROFILES, PROFILE_GROUPS } from '../data/profiles';
import { LENS_CATEGORIES, LENS_META } from '../data/lensData';

const MODES = [
  { id:'home',    label:'Dashboard',       icon: LayoutDashboard },
  { id:'full',    label:'Full System',     icon: Brain },
  { id:'builder', label:'Employee Builder',icon: Users },
  { id:'coach',   label:'AI Scenario Coach',icon: Sparkles },
];

export default function Sidebar({ open, onToggle, mode, onSelectMode, selectedProfile, onSelectProfile, activeLens, onSelectLens }) {
  const [expandedCat, setExpandedCat] = useState(null);

  if (!open) return (
    <div className="fixed left-0 top-0 h-full z-50 flex flex-col items-center py-4 gap-3"
      style={{width:60, background:'rgba(10,10,20,0.95)', borderRight:'1px solid rgba(255,255,255,0.06)'}}>
      <button onClick={onToggle} className="p-2 rounded-lg hover:bg-white/10 transition-colors">
        <ChevronRight size={18} className="text-slate-400" />
      </button>
      {MODES.map(m => {
        const Icon = m.icon;
        return (
          <button key={m.id} onClick={() => onSelectMode(m.id)}
            className={`p-2 rounded-lg transition-colors ${mode===m.id ? 'bg-indigo-500/20 text-indigo-400' : 'hover:bg-white/10 text-slate-400'}`}
            title={m.label}>
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="fixed left-0 top-0 h-full z-50 flex flex-col overflow-hidden"
      style={{width:280, background:'rgba(10,10,20,0.97)', borderRight:'1px solid rgba(255,255,255,0.06)'}}>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-md bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <Brain size={13} className="text-white" />
            </div>
            <span className="text-sm font-bold text-white tracking-wide">PI Looking Glass</span>
          </div>
          <p className="text-xs text-slate-500 mt-0.5 ml-8">C-Suite Intelligence Platform</p>
        </div>
        <button onClick={onToggle} className="p-1.5 rounded-lg hover:bg-white/10 transition-colors">
          <ChevronLeft size={16} className="text-slate-400" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-3 space-y-1">

        {/* Mode Nav */}
        <div className="space-y-0.5">
          {MODES.map(m => {
            const Icon = m.icon;
            return (
              <button key={m.id} onClick={() => onSelectMode(m.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all sidebar-lens-btn ${mode===m.id ? 'bg-indigo-500/20 text-indigo-300 font-medium' : 'text-slate-400 hover:text-slate-200'}`}>
                <Icon size={15} />
                {m.label}
              </button>
            );
          })}
        </div>

        <div className="h-px bg-white/5 my-2" />

        {/* Profile Selector */}
        <div className="px-1">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-2 mb-2">Select Profile</p>
          <div className="grid grid-cols-2 gap-1">
            {PI_PROFILES.map(p => {
              const grp = PROFILE_GROUPS[p.group];
              const active = selectedProfile === p.id;
              return (
                <button key={p.id} onClick={() => onSelectProfile(p.id)}
                  style={{borderColor: active ? p.color : 'transparent', backgroundColor: active ? `${p.color}20` : 'rgba(255,255,255,0.03)'}}
                  className={`flex items-center gap-1.5 px-2 py-1.5 rounded-md text-xs border transition-all profile-pill text-left ${active ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{backgroundColor: p.color}} />
                  <span className="truncate">{p.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="h-px bg-white/5 my-2" />

        {/* Lens Navigator */}
        <div className="px-1">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest px-2 mb-2">63 Lenses</p>
          {LENS_CATEGORIES.map(cat => {
            const catLenses = Object.entries(LENS_META).filter(([,v]) => v.category === cat.id);
            const isExp = expandedCat === cat.id;
            return (
              <div key={cat.id} className="mb-0.5">
                <button onClick={() => setExpandedCat(isExp ? null : cat.id)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all">
                  <span className="font-medium">{cat.label}</span>
                  <span className="flex items-center gap-1">
                    <span className="text-slate-600">{catLenses.length}</span>
                    {isExp ? <ChevronUp size={12}/> : <ChevronDown size={12}/>}
                  </span>
                </button>
                {isExp && (
                  <div className="ml-2 space-y-0.5">
                    {catLenses.map(([id, meta]) => (
                      <button key={id} onClick={() => onSelectLens(id)}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-all sidebar-lens-btn ${activeLens===id ? 'active text-indigo-300' : 'text-slate-500 hover:text-slate-300'}`}>
                        {meta.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/5">
        <p className="text-xs text-slate-600">PI Looking Glass • Andy's Intelligence Suite</p>
      </div>
    </div>
  );
}
