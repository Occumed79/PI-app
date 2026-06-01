import React, { useState } from 'react';
import PIPortal from './components/PIPortal.jsx';
import EmployeeTab from './components/EmployeeTab.jsx';
import AITab from './components/AITab.jsx';

function cx(...c) { return c.filter(Boolean).join(' '); }

const TABS = [
  { id: 'portal',   label: 'PI Profiles' },
  { id: 'employee', label: 'Employee Profiles' },
  { id: 'ai',       label: 'AI Assistant' },
];

export default function RootApp() {
  const [tab, setTab] = useState('portal');

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-16 h-[500px] w-[500px] rounded-full bg-sky-600/10 blur-3xl" />
        <div className="absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/8 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] rounded-full bg-emerald-600/7 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 py-6 sm:px-8">
        {/* Top nav */}
        <div className="mb-8 flex items-center gap-1 rounded-2xl border border-white/10 bg-white/[0.05] p-1.5 backdrop-blur">
          {TABS.map(t => (
            <button key={t.id} type="button" onClick={() => setTab(t.id)}
              className={cx(
                'flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition',
                tab === t.id
                  ? 'bg-white text-slate-900 shadow'
                  : 'text-white/50 hover:text-white'
              )}>
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'portal'   && <PIPortal />}
        {tab === 'employee' && <EmployeeTab />}
        {tab === 'ai'       && <AITab />}
      </div>
    </div>
  );
}
