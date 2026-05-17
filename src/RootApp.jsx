import React, { useState } from 'react';
import { BrainCircuit, ClipboardList, Layers3 } from 'lucide-react';
import FullApp from './FullApp.jsx';
import EmployeeBuilder from './components/EmployeeBuilder.jsx';
import AIScenarioCoach from './components/AIScenarioCoach.jsx';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Pill({ children, className = '' }) {
  return <span className={cx('inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80', className)}>{children}</span>;
}

export default function RootApp() {
  const [mode, setMode] = useState('system');

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[96rem] px-4 py-5 sm:px-6 lg:px-8">
        <div className="mb-5 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Pill>Human Systems Intelligence</Pill>
                <Pill>Transparent Inference</Pill>
                <Pill>Custom Profiles</Pill>
                <Pill>AI Scenario Coach</Pill>
              </div>
              <h1 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-4xl">PI-App Control Center</h1>
              <p className="mt-2 max-w-4xl text-sm leading-6 text-white/60">
                Explore every lens, build a person-specific working profile, or ask the AI Scenario Coach for cautious, nonjudgmental manager guidance using the selected profile context.
              </p>
            </div>

            <div className="grid gap-2 rounded-3xl border border-white/10 bg-black/20 p-2 sm:grid-cols-3">
              <button
                type="button"
                onClick={() => setMode('system')}
                className={cx(
                  'flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition',
                  mode === 'system' ? 'border-sky-300/40 bg-sky-500/15 text-white' : 'border-white/10 bg-white/[0.04] text-white/55 hover:bg-white/10'
                )}
              >
                <Layers3 className="h-5 w-5" />
                <div>
                  <div className="text-sm font-semibold">Full System</div>
                  <div className="text-xs opacity-70">All visible tabs</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMode('builder')}
                className={cx(
                  'flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition',
                  mode === 'builder' ? 'border-fuchsia-300/40 bg-fuchsia-500/15 text-white' : 'border-white/10 bg-white/[0.04] text-white/55 hover:bg-white/10'
                )}
              >
                <ClipboardList className="h-5 w-5" />
                <div>
                  <div className="text-sm font-semibold">Employee Builder</div>
                  <div className="text-xs opacity-70">Create working profile</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setMode('ai')}
                className={cx(
                  'flex items-center gap-3 rounded-2xl border px-4 py-3 text-left transition',
                  mode === 'ai' ? 'border-emerald-300/40 bg-emerald-500/15 text-white' : 'border-white/10 bg-white/[0.04] text-white/55 hover:bg-white/10'
                )}
              >
                <BrainCircuit className="h-5 w-5" />
                <div>
                  <div className="text-sm font-semibold">AI Scenario Coach</div>
                  <div className="text-xs opacity-70">Ask what happened</div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {mode === 'system' && <FullApp />}
        {mode === 'builder' && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-0 shadow-2xl shadow-black/20">
            <EmployeeBuilder />
          </div>
        )}
        {mode === 'ai' && (
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-0 shadow-2xl shadow-black/20">
            <AIScenarioCoach />
          </div>
        )}
      </div>
    </div>
  );
}
