import React, { useState, useMemo } from 'react';
import { Brain, Users, Sparkles, ChevronLeft, ChevronRight, LayoutDashboard, ChevronDown, ChevronUp, CheckCircle, Circle } from 'lucide-react';
import { PI_PROFILES, PROFILE_GROUPS } from '../data/profiles';
import { LENS_CATEGORIES, LENS_META } from '../data/lensData';
import { signalGlassStaticLenses } from '../data/signalGlassStaticLenses';

const MODES = [
  { id:'home',    label:'Dashboard',        icon: LayoutDashboard },
  { id:'full',    label:'Full System',      icon: Brain },
  { id:'builder', label:'Employee Builder', icon: Users },
  { id:'coach',   label:'AI Scenario Coach',icon: Sparkles },
];

// Build a set of lens IDs that have source-verified content
const verifiedLensNames = new Set(signalGlassStaticLenses.map(l => l.lens.toLowerCase()));

function isVerified(metaName) {
  if (!metaName) return false;
  const n = metaName.toLowerCase();
  return verifiedLensNames.has(n) ||
    [...verifiedLensNames].some(v => v.includes(n) || n.includes(v));
}

export default function Sidebar({ open, onToggle, mode, onSelectMode, selectedProfile, onSelectProfile, activeLens, onSelectLens }) {
  const [expandedCat, setExpandedCat] = useState(null);

  const verifiedCount = useMemo(() =>
    Object.values(LENS_META).filter(m => isVerified(m.name)).length,
    []
  );

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
          <div className="flex items-center justify-between px-2 mb-2">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Lenses</p>
            <span className="text-[10px] text-emerald-400/70">
              {signalGlassStaticLenses.length} verified
            </span>
          </div>

          {LENS_CATEGORIES.map(cat => {
            const catLenses = Object.entries(LENS_META).filter(([,v]) => v.category === cat.id);
            const isExp = expandedCat === cat.id;
            const catVerified = catLenses.filter(([,v]) => isVerified(v.name)).length;

            return (
              <div key={cat.id} className="mb-0.5">
                <button onClick={() => setExpandedCat(isExp ? null : cat.id)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all">
                  <span className="font-medium">{cat.label}</span>
                  <span className="flex items-center gap-2">
                    {catVerified > 0 && (
                      <span className="text-emerald-400/60 text-[10px]">{catVerified}✓</span>
                    )}
                    <span className="text-slate-600">{catLenses.length}</span>
                    {isExp ? <ChevronUp size={12}/> : <ChevronDown size={12}/>}
                  </span>
                </button>
                {isExp && (
                  <div className="ml-2 space-y-0.5">
                    {catLenses.map(([id, meta]) => {
                      const verified = isVerified(meta.name);
                      return (
                        <button key={id} onClick={() => onSelectLens(id)}
                          className={`w-full text-left px-3 py-1.5 rounded text-xs transition-all sidebar-lens-btn flex items-center gap-1.5 ${activeLens===id ? 'active text-indigo-300' : 'text-slate-500 hover:text-slate-300'}`}>
                          {verified
                            ? <CheckCircle size={9} className="text-emerald-400/70 flex-shrink-0" />
                            : <Circle size={9} className="text-slate-700 flex-shrink-0" />
                          }
                          <span>{meta.name}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}

          {/* Also list static lenses not in LENS_META */}
          {(() => {
            const metaNames = new Set(Object.values(LENS_META).map(m => m.name.toLowerCase()));
            const orphans = signalGlassStaticLenses.filter(l =>
              !metaNames.has(l.lens.toLowerCase()) &&
              ![...metaNames].some(m => m.includes(l.lens.toLowerCase()) || l.lens.toLowerCase().includes(m))
            );
            if (!orphans.length) return null;
            const isExp = expandedCat === '__static__';
            return (
              <div className="mb-0.5">
                <button onClick={() => setExpandedCat(isExp ? null : '__static__')}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs text-slate-400 hover:text-slate-200 hover:bg-white/5 transition-all">
                  <span className="font-medium">Additional Lenses</span>
                  <span className="flex items-center gap-2">
                    <span className="text-emerald-400/60 text-[10px]">{orphans.length}✓</span>
                    {isExp ? <ChevronUp size={12}/> : <ChevronDown size={12}/>}
                  </span>
                </button>
                {isExp && (
                  <div className="ml-2 space-y-0.5">
                    {orphans.map(l => (
                      <button key={l.id} onClick={() => onSelectLens(l.id)}
                        className={`w-full text-left px-3 py-1.5 rounded text-xs transition-all sidebar-lens-btn flex items-center gap-1.5 ${activeLens===l.id ? 'active text-indigo-300' : 'text-slate-500 hover:text-slate-300'}`}>
                        <CheckCircle size={9} className="text-emerald-400/70 flex-shrink-0" />
                        <span>{l.lens}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })()}
        </div>
      </div>

      {/* Footer */}
      <div className="px-4 py-3 border-t border-white/5">
        <div className="flex items-center justify-between">
          <p className="text-xs text-slate-600">PI Looking Glass</p>
          <p className="text-[10px] text-emerald-400/50">{signalGlassStaticLenses.length} lenses loaded</p>
        </div>
      </div>
    </div>
  );
}
