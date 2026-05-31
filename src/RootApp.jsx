// v3.0 — full HSI integration
import React, { useState } from 'react';
import { BrainCircuit, ClipboardList, Layers3, Brain } from 'lucide-react';
import FullApp from './FullApp.jsx';
import EmployeeBuilder from './components/EmployeeBuilder.jsx';
import AIScenarioCoach from './components/AIScenarioCoach.jsx';
import HumanSystemsIntelligence from './components/HumanSystemsIntelligence.jsx';

function cx(...classes) { return classes.filter(Boolean).join(' '); }

const MODES = [
  { id:'system',  label:'Full System',       sub:'All lens tabs',       Icon: Layers3,      active:'border-sky-300/40 bg-sky-500/15'      },
  { id:'builder', label:'Employee Builder',  sub:'Create profile',      Icon: ClipboardList, active:'border-fuchsia-300/40 bg-fuchsia-500/15'},
  { id:'ai',      label:'AI Scenario Coach', sub:'Ask what happened',   Icon: BrainCircuit,  active:'border-emerald-300/40 bg-emerald-500/15'},
  { id:'hsi',     label:'HSI Dashboard',     sub:'104 × 17 system',     Icon: Brain,         active:'border-amber-300/40 bg-amber-500/15'  },
];

export default function RootApp() {
  const [mode, setMode] = useState('system');

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Background glows */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[96rem] px-4 py-5 sm:px-6 lg:px-8">

        {/* ─── Top nav bar — always visible ─── */}
        <div className="mb-5 rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="mb-4">
            <h1 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">PI-App Control Center</h1>
            <p className="mt-1 text-sm text-white/50">Human Systems Intelligence · Transparent Inference · Custom Profiles · AI Scenario Coach</p>
          </div>

          {/* Mode buttons — 2 per row on mobile, 4 on large screens */}
          <div className="grid grid-cols-2 gap-2 lg:grid-cols-4">
            {MODES.map(({ id, label, sub, Icon, active }) => (
              <button
                key={id}
                type="button"
                onClick={() => setMode(id)}
                className={cx(
                  'flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition',
                  mode === id
                    ? `${active} text-white`
                    : 'border-white/10 bg-white/[0.04] text-white/55 hover:bg-white/10 hover:text-white'
                )}
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <div className="min-w-0">
                  <div className="text-sm font-semibold truncate">{label}</div>
                  <div className="text-xs opacity-70 truncate">{sub}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* ─── Mode content ─── */}
        {mode === 'system' && <FullApp />}

        {mode === 'builder' && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
            <EmployeeBuilder />
          </div>
        )}

        {mode === 'ai' && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
            <AIScenarioCoach />
          </div>
        )}

        {mode === 'hsi' && <HumanSystemsIntelligence />}
      </div>
    </div>
  );
}
