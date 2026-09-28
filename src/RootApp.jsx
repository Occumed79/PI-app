import React, { useCallback, useEffect, useState } from 'react';
import { BrainCircuit, ClipboardList, Layers3, LibraryBig } from 'lucide-react';
import VisualLensWorkspace from './VisualLensWorkspace.jsx';
import EmployeeTab from './components/EmployeeTab.jsx';
import AITab from './components/AITab.jsx';
import ChatLibraryFrame from './components/ChatLibraryFrame.jsx';
import BorderGlow from './components/effects/BorderGlow.jsx';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

const MODES = [
  {
    id: 'hsi',
    label: 'PI Crosswalk Intelligence',
    sub: 'PI source profiles · cross-framework lenses',
    Icon: Layers3,
    active: 'bg-sky-500/15',
    colors: ['#38bdf8', '#a78bfa', '#f472b6'],
    glow: '200 90 70',
  },
  {
    id: 'builder',
    label: 'Employee PI Profiles',
    sub: 'Store completed Predictive Index results',
    Icon: ClipboardList,
    active: 'bg-fuchsia-500/15',
    colors: ['#f472b6', '#c084fc', '#38bdf8'],
    glow: '315 85 72',
  },
  {
    id: 'ai',
    label: 'Crosswalk Assistant',
    sub: 'Analyze PI-derived framework translations',
    Icon: BrainCircuit,
    active: 'bg-emerald-500/15',
    colors: ['#34d399', '#38bdf8', '#a78bfa'],
    glow: '160 80 65',
  },
  {
    id: 'library',
    label: 'Chat Library',
    sub: 'Saved conversations · chat archive',
    Icon: LibraryBig,
    active: 'bg-violet-500/15',
    colors: ['#a78bfa', '#f472b6', '#38bdf8'],
    glow: '265 85 72',
  },
];

export default function RootApp() {
  const [mode, setMode] = useState('hsi');
  const [employees, setEmployees] = useState([]);
  const [employeesLoading, setEmployeesLoading] = useState(true);
  const [employeesError, setEmployeesError] = useState('');

  const loadEmployees = useCallback(async () => {
    setEmployeesLoading(true);
    setEmployeesError('');
    try {
      const response = await fetch('/api/employees', {
        headers: { Accept: 'application/json' },
        signal: AbortSignal.timeout(15000),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || `Employee API returned ${response.status}`);
      setEmployees(Array.isArray(data.employees) ? data.employees : []);
    } catch (error) {
      setEmployeesError(error?.message || 'Unable to load employee PI profiles.');
    } finally {
      setEmployeesLoading(false);
    }
  }, []);

  useEffect(() => {
    loadEmployees();
  }, [loadEmployees]);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 70000);
    fetch('/api/chat-library/ready', {
      headers: { Accept: 'application/json' },
      cache: 'no-store',
      signal: controller.signal,
    }).catch(() => undefined).finally(() => window.clearTimeout(timeout));
    return () => {
      window.clearTimeout(timeout);
      controller.abort();
    };
  }, []);

  return (
    <div className="pi-shell min-h-screen bg-slate-950 text-white">
      <video
        className={cx(
          'pointer-events-none fixed inset-0 z-0 h-screen w-screen object-cover transition-opacity duration-200',
          mode === 'builder' ? 'opacity-100' : 'opacity-0'
        )}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        tabIndex={-1}
        aria-hidden="true"
      >
        <source
          src="https://pi-chat-library-assets.floot.app/_cdn/static/e1801261-b7ac-4232-8dc9-681c76872fdf-pi-tab2-user-background.mp4"
          type="video/mp4"
        />
      </video>

      <div className="pi-ambient pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="pi-orb pi-orb-a absolute -left-28 top-0 h-96 w-96 rounded-full bg-sky-500/10 blur-3xl"/>
        <div className="pi-orb pi-orb-b absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-500/8 blur-3xl"/>
        <div className="pi-orb pi-orb-c absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-500/6 blur-3xl"/>
        <div className="pi-light-wave"/>
        <div className="pi-refraction-noise"/>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1760px] px-3 pb-6 pt-4 sm:px-4 lg:px-5">
        <div className="pi-glass-panel pi-nav-panel mb-5 rounded-3xl border border-white/10 bg-white/[0.06] p-3 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-4">
            {MODES.map(({ id, label, sub, Icon, active, colors, glow }) => (
              <BorderGlow
                key={id}
                className="min-w-0 overflow-hidden"
                backgroundColor="#0d111c"
                borderRadius={16}
                colors={colors}
                glowColor={glow}
                glowRadius={26}
                fillOpacity={0}
                animated={mode === id}
                contentClassName="z-[1] relative min-w-0"
              >
                <button
                  type="button"
                  onClick={() => setMode(id)}
                  className={cx(
                    'pi-glass-control flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition',
                    mode === id
                      ? `${active} text-white`
                      : 'bg-white/[0.025] text-white/60 hover:bg-white/[0.07] hover:text-white'
                  )}
                >
                  <Icon className="h-5 w-5 flex-shrink-0"/>
                  <div className="min-w-0">
                    <div className="truncate text-sm font-semibold">{label}</div>
                    <div className="truncate text-xs opacity-65">{sub}</div>
                  </div>
                </button>
              </BorderGlow>
            ))}
          </div>
        </div>

        {mode === 'hsi' && <VisualLensWorkspace />}
        {mode === 'builder' && (
          <div className="relative min-h-[calc(100dvh-8rem)]">
            <div className="pi-glass-panel relative rounded-3xl border border-white/10 bg-slate-950/55 shadow-2xl shadow-black/20 backdrop-blur-xl">
              <EmployeeTab
                employees={employees}
                setEmployees={setEmployees}
                loading={employeesLoading}
                loadError={employeesError}
                reloadEmployees={loadEmployees}
              />
            </div>
          </div>
        )}
        {mode === 'ai' && (
          <div className="pi-glass-panel rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20">
            <AITab employees={employees} />
          </div>
        )}
        <div
          className={cx(
            'pi-glass-panel overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/20',
            mode === 'library' ? 'block' : 'hidden'
          )}
          aria-hidden={mode !== 'library'}
        >
          <ChatLibraryFrame />
        </div>
      </div>
    </div>
  );
}
