import React, { useState } from 'react';
import { BrainCircuit, ClipboardList, Layers3 } from 'lucide-react';
import VisualLensWorkspace from './VisualLensWorkspace.jsx';
import EmployeeTab from './components/EmployeeTab.jsx';
import AITab from './components/AITab.jsx';

function cx(...c) { return c.filter(Boolean).join(' '); }

const MODES = [
  { id:'hsi',     label:'Human Systems Intelligence', sub:'Dashboard · Profiles · Compare · Lenses', Icon:Layers3,      active:'border-sky-300/40 bg-sky-500/15'        },
  { id:'builder', label:'Employee Builder',           sub:'Create & view employee profiles',          Icon:ClipboardList, active:'border-fuchsia-300/40 bg-fuchsia-500/15' },
  { id:'ai',      label:'AI Assistant',               sub:'Ask about any profile or employee',        Icon:BrainCircuit,  active:'border-emerald-300/40 bg-emerald-500/15' },
];

export default function RootApp() {
  const [mode, setMode] = useState('hsi');

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"/>
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-500/8 blur-3xl"/>
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-500/6 blur-3xl"/>
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 pt-5 pb-10 sm:px-6 lg:px-8">
        {/* Top nav */}
        <div className="mb-5 rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {MODES.map(({ id, label, sub, Icon, active }) => (
              <button key={id} type="button" onClick={() => setMode(id)}
                className={cx('flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition',
                  mode===id ? `${active} text-white` : 'border-white/10 bg-white/[0.03] text-white/55 hover:bg-white/10 hover:text-white')}>
                <Icon className="h-5 w-5 flex-shrink-0"/>
                <div className="min-w-0">
                  <div className="truncate text-sm font-semibold">{label}</div>
                  <div className="truncate text-xs opacity-65">{sub}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {mode === 'hsi'     && <VisualLensWorkspace />}
        {mode === 'builder' && <div className="rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20"><EmployeeTab /></div>}
        {mode === 'ai'      && <div className="rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20"><AITab /></div>}
      </div>
    </div>
  );
}
