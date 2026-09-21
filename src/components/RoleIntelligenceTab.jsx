import React, { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Compass,
  MessageCircleMore,
  Send,
  UserRound,
} from 'lucide-react';
import SiriOrb from './smoothui/SiriOrb.jsx';
import RoleVoiceWave from './RoleVoiceWave.jsx';
import {
  CONTEXT_CATEGORIES,
  CONTEXT_CATEGORY_ORDER,
} from '../data/contextOverlayCatalog.js';
import {
  ROLE_DIMENSIONS,
  ROLE_INTELLIGENCE_ROLES,
  deriveRoleInteraction,
  employeePiProfile,
} from '../data/roleIntelligence.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

const FACTOR_TONE = {
  aligned: 'text-emerald-200 border-emerald-300/25 bg-emerald-500/10',
  adjacent: 'text-sky-200 border-sky-300/25 bg-sky-500/10',
  contrast: 'text-amber-200 border-amber-300/25 bg-amber-500/10',
};

const LENS_COPY = {
  'economic-material-security': 'Look at how predictability, schedule volatility, and resource pressure interact with the demands of this role.',
  'family-caregiving': 'Look at schedule predictability, after-hours assumptions, interruption recovery, and coverage design rather than treating availability as motivation.',
  'immigration-cultural-transition': 'Look at authority clarity, documentation load, language processing, and whether unwritten norms create avoidable performance drag.',
  'education-access': 'Look at hidden conventions, onboarding quality, tool familiarity, and whether the role confuses prior exposure with learning capacity.',
  'neurodivergence-accessibility': 'Look at interruption load, working-memory demand, task switching, sensory load, and how much the role allows externalized structure.',
  'health-disability': 'Look at pacing, fatigue sensitivity, consistency requirements, recovery time, and whether outcomes can be separated from rigid process assumptions.',
  'trauma-nervous-system': 'Look at ambiguity, surprise confrontation, authority signals, workload spikes, and the degree of environmental predictability.',
  'identity-belonging': 'Look at participation safety, evaluation pressure, inclusion norms, and whether social threat can suppress otherwise useful contribution.',
  'work-history': 'Look at decision rights, escalation clarity, trust, documentation behavior, and whether prior operating environments could shape visible caution.',
  'social-support': 'Look at help-seeking pathways, peer support, recovery resources, and whether the role assumes people can absorb conflict or overload alone.',
  'life-stage-transition': 'Look at temporary bandwidth shifts, schedule stability, near-term priority clarity, and whether a transition state is being mistaken for a permanent trait.',
  'environment-sensory': 'Look at noise, interruptions, workspace control, meeting density, and the amount of sensory or social load built into the role.',
  'culture-communication': 'Look at directness, hierarchy, persuasion expectations, conflict norms, and whether the role relies on implicit communication rules.',
  'legal-administrative': 'Look at deadline density, documentation burden, procedural ambiguity, and the amount of bureaucratic friction the role adds to existing load.',
  'protective-resilience': 'Look at autonomy, support, recovery, meaning, trusted relationships, and other conditions that can buffer high-demand aspects of the role.',
};

function orbColors(profile) {
  const color = profile?.color || '#38bdf8';
  return {
    c1: color,
    c2: '#38bdf8',
    c3: '#c084fc',
    c4: '#34d399',
  };
}

function RoleMarquee() {
  const labels = [...ROLE_INTELLIGENCE_ROLES, ...ROLE_INTELLIGENCE_ROLES];
  return (
    <div className="overflow-hidden border-y border-white/8 py-5">
      <motion.div
        className="flex w-max gap-10 whitespace-nowrap pr-10 text-sm font-medium uppercase tracking-[0.22em] text-white/38"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 34, ease: 'linear', repeat: Infinity }}
      >
        {labels.map((role, index) => <span key={`${role.id}-${index}`}>{role.shortTitle}</span>)}
      </motion.div>
    </div>
  );
}

function EmployeeConstellation({ employees, onSelect, loading, loadError }) {
  if (loading) {
    return <div className="py-24 text-center text-sm text-white/38">Loading employee profiles…</div>;
  }
  if (loadError) {
    return <div className="py-24 text-center text-sm text-amber-200/70">{loadError}</div>;
  }
  if (!employees.length) {
    return (
      <div className="py-24 text-center">
        <UserRound className="mx-auto mb-4 h-8 w-8 text-white/25"/>
        <p className="text-lg font-medium text-white/55">No employee profiles are available yet.</p>
        <p className="mt-2 text-sm text-white/30">Create an employee PI profile first, then return here.</p>
      </div>
    );
  }

  return (
    <div className="relative mx-auto min-h-[560px] max-w-5xl overflow-hidden rounded-[40px] border border-white/8 bg-black/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(56,189,248,.08),transparent_36%),radial-gradient(circle_at_20%_20%,rgba(192,132,252,.08),transparent_28%),radial-gradient(circle_at_80%_76%,rgba(52,211,153,.07),transparent_30%)]"/>
      <div className="relative grid min-h-[560px] grid-cols-2 place-items-center gap-6 p-8 sm:grid-cols-3 lg:grid-cols-4">
        {employees.map((employee, index) => {
          const profile = employeePiProfile(employee);
          return (
            <motion.button
              key={employee.id || employee.name}
              type="button"
              onClick={() => onSelect(employee)}
              className="group relative flex min-h-44 w-full max-w-48 flex-col items-center justify-center text-center"
              initial={{ opacity: 0, scale: 0.86 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.4 }}
              animate={{ y: [0, index % 2 ? -7 : 8, 0] }}
              transition={{ opacity: { duration: 0.5 }, scale: { duration: 0.5 }, y: { duration: 6 + (index % 4), repeat: Infinity, ease: 'easeInOut' } }}
              whileHover={{ scale: 1.06 }}
            >
              <div className="relative">
                <SiriOrb size="116px" colors={orbColors(profile)} animationDuration={22 + index}/>
                <div className="absolute inset-0 grid place-items-center">
                  <span className="grid h-12 w-12 place-items-center rounded-full border border-white/20 bg-slate-950/35 text-sm font-semibold text-white shadow-xl backdrop-blur-md">
                    {(employee.name || '?').split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase()}
                  </span>
                </div>
              </div>
              <div className="mt-4 text-base font-semibold text-white/88 group-hover:text-white">{employee.name}</div>
              <div className="mt-1 max-w-44 truncate text-xs text-white/35">{employee.position || profile.name}</div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}

function RoleOrbit({ employee, selectedRole, onSelectRole }) {
  const profile = employeePiProfile(employee);
  return (
    <div className="relative mx-auto h-[610px] max-w-[830px] overflow-hidden rounded-[44px] border border-white/8 bg-black/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_47%,rgba(56,189,248,.10),transparent_29%),radial-gradient(circle_at_50%_47%,rgba(192,132,252,.06),transparent_47%)]"/>
      <div className="absolute left-1/2 top-[47%] -translate-x-1/2 -translate-y-1/2 text-center">
        <motion.div key={selectedRole.id} initial={{ scale: 0.92, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.45 }}>
          <SiriOrb size="250px" colors={orbColors(profile)} animationDuration={18}/>
        </motion.div>
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <div className="max-w-44 rounded-full border border-white/15 bg-slate-950/45 px-4 py-2 text-center backdrop-blur-xl">
            <div className="text-sm font-semibold text-white">{employee.name}</div>
            <div className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-white/35">{profile.name}</div>
          </div>
        </div>
      </div>

      {ROLE_INTELLIGENCE_ROLES.map((role, index) => {
        const angle = (index / ROLE_INTELLIGENCE_ROLES.length) * Math.PI * 2 - Math.PI / 2;
        const x = 50 + Math.cos(angle) * 38;
        const y = 47 + Math.sin(angle) * 34;
        const active = selectedRole.id === role.id;
        return (
          <motion.button
            key={role.id}
            type="button"
            onClick={() => onSelectRole(role)}
            className={cx(
              'absolute z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border px-3 py-2 text-xs font-medium backdrop-blur-xl transition',
              active
                ? 'border-white/35 bg-white text-slate-950 shadow-[0_0_38px_rgba(255,255,255,.14)]'
                : 'border-white/12 bg-slate-950/55 text-white/58 hover:border-white/24 hover:text-white'
            )}
            style={{ left: `${x}%`, top: `${y}%` }}
            whileHover={{ scale: 1.06 }}
            animate={{ y: [0, index % 2 ? 3 : -3, 0] }}
            transition={{ y: { duration: 4 + (index % 3), repeat: Infinity, ease: 'easeInOut' } }}
          >
            {role.shortTitle}
          </motion.button>
        );
      })}

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
        <div className="text-lg font-semibold text-white">{selectedRole.title}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/28">{selectedRole.family}</div>
      </div>
    </div>
  );
}

function SignatureBand({ role }) {
  return (
    <div className="overflow-x-auto pb-2">
      <div className="flex min-w-max items-end gap-4 px-1">
        {ROLE_DIMENSIONS.map(([key, label]) => (
          <div key={key} className="w-24 text-center">
            <div className="mx-auto flex h-28 w-3 items-end overflow-hidden rounded-full bg-white/8">
              <motion.div
                key={`${role.id}-${key}`}
                initial={{ height: 0 }}
                animate={{ height: `${role.signature[key]}%` }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="w-full rounded-full bg-gradient-to-t from-sky-400 via-violet-400 to-emerald-300"
              />
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.12em] text-white/35">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FactorSignals({ interaction }) {
  return (
    <div className="flex flex-wrap gap-2">
      {interaction.factorSignals.map(signal => (
        <span key={signal.key} className={cx('rounded-full border px-3 py-1.5 text-xs', FACTOR_TONE[signal.state])}>
          {signal.short} {signal.value} · {signal.state === 'aligned' ? 'inside role band' : signal.state === 'adjacent' ? 'near role band' : 'different natural pull'}
        </span>
      ))}
    </div>
  );
}

function LifeLensStrip({ role, activeCategory, onSelect }) {
  return (
    <section className="border-t border-white/8 py-16">
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-200/55">Life experience refraction</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">The person stays the same. The operating conditions do not.</h3>
        <p className="mt-4 text-sm leading-7 text-white/46">These lenses do not change the baseline role-alignment model. They show how context can amplify, suppress, mask, or distort performance inside a specific job environment.</p>
      </div>

      <div className="-mx-2 overflow-x-auto px-2 pb-4">
        <div className="flex min-w-max gap-2">
          {CONTEXT_CATEGORY_ORDER.map(category => (
            <button
              key={category}
              type="button"
              onClick={() => onSelect(category)}
              className={cx(
                'rounded-full border px-4 py-2 text-xs transition',
                activeCategory === category
                  ? 'border-fuchsia-200/35 bg-fuchsia-400/15 text-fuchsia-100'
                  : 'border-white/10 bg-white/[0.025] text-white/38 hover:text-white/70'
              )}
            >
              {CONTEXT_CATEGORIES[category]}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={`${role.id}-${activeCategory}`}
          initial={{ opacity: 0, y: 18, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -10, filter: 'blur(8px)' }}
          transition={{ duration: 0.4 }}
          className="mt-6 grid gap-8 border-l border-fuchsia-300/20 pl-6 lg:grid-cols-[1.2fr_.8fr]"
        >
          <div>
            <div className="text-lg font-semibold text-white">{CONTEXT_CATEGORIES[activeCategory]}</div>
            <p className="mt-3 max-w-3xl text-base leading-8 text-white/58">{LENS_COPY[activeCategory]}</p>
            <p className="mt-4 text-sm leading-7 text-white/38">In <span className="text-white/70">{role.title}</span>, the most relevant role conditions are volume {role.signature.volume}, interruption {role.signature.interruption}, autonomy {role.signature.autonomy}, precision {role.signature.precision}, and boundary rigidity {role.signature.boundedAuthority}.</p>
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">How to use this lens</div>
            <p className="mt-3 text-sm leading-6 text-white/36">Treat the lens as a hypothetical operating-condition test. It does not reveal or assume that the employee has this life experience, and it never changes the baseline person × role model.</p>
            <div className="mt-5 border-l border-white/10 pl-4 text-xs leading-6 text-white/28">Employee-specific private context stays outside this front-end explanation unless a future permissioned workflow explicitly brings it in.</div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function RoleAssistantRail({ employee, role, activeCategory }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const profile = employeePiProfile(employee);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;
    setInput('');
    setError('');
    const next = [...messages, { role: 'user', content: text }];
    setMessages(next);
    setLoading(true);

    const system = `You are the Role Intelligence assistant inside an employee-development workspace.

Selected employee: ${employee.name}.
Stored position: ${employee.position || 'not entered'}.
Completed PI profile: ${profile.name}.
Exact PI factors: D ${employee.dominance ?? profile.dominance}, E ${employee.extraversion ?? profile.extraversion}, P ${employee.patience ?? profile.patience}, F ${employee.formality ?? profile.formality}.
Selected company role: ${role.title}.
Role purpose: ${role.purpose}
Role signature: ${JSON.stringify(role.signature)}
Active life-experience lens: ${CONTEXT_CATEGORIES[activeCategory]}.

Rules:
- Explain person × role interaction; do not make hire, fire, promotion, compensation, or other employment decisions.
- Do not use health, disability, family, immigration, identity, neurodivergence, or other sensitive life-context information to change role compatibility or rank employees.
- Life-experience lenses may only explain environmental conditions, support needs, strain, masking, or how performance may be expressed.
- Keep baseline PI/work-style analysis separate from contextual lenses.
- Distinguish documented role facts, model interpretation, and uncertainty.
- Prefer concrete explanations of volume, autonomy, depth, interruption, precision, boundaries, and role demands.`;

    try {
      const response = await fetch('/api/ai/role-intelligence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system,
          messages: next,
          employees: [{
            id: employee.id,
            name: employee.name,
            position: employee.position || '',
            department: employee.department || '',
            piProfileId: employee.piProfileId || employee.profileId || profile.id,
            dominance: employee.dominance ?? profile.dominance,
            extraversion: employee.extraversion ?? profile.extraversion,
            patience: employee.patience ?? profile.patience,
            formality: employee.formality ?? profile.formality,
          }],
        }),
        signal: AbortSignal.timeout(55000),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || `AI request failed (${response.status})`);
      setMessages(current => [...current, { role: 'assistant', content: data.reply || 'No response was returned.' }]);
    } catch (requestError) {
      setError(requestError?.message || 'The assistant could not complete the request.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <aside className="sticky top-5 flex max-h-[calc(100vh-40px)] min-h-[650px] flex-col overflow-hidden rounded-[32px] border border-white/10 bg-slate-950/70 shadow-2xl shadow-black/25 backdrop-blur-2xl">
      <div className="border-b border-white/8 px-5 pb-4 pt-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
          <MessageCircleMore size={14}/>
          Ask Role Intelligence
        </div>
        <RoleVoiceWave state={loading ? 'thinking' : 'idle'} height={90} className="mt-3"/>
        <p className="mt-1 text-xs leading-5 text-white/35">Ask why a pattern appears, compare roles, test a hypothetical work condition, or interrogate the active lens.</p>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5">
        {messages.length === 0 ? (
          <div className="space-y-3 text-sm text-white/42">
            <button type="button" onClick={() => setInput(`Why does ${employee.name} interact with ${role.title} this way?`)} className="block text-left hover:text-white/72">Why does this interaction look this way?</button>
            <button type="button" onClick={() => setInput(`Compare ${role.title} with ExamQA Analyst for ${employee.name}.`)} className="block text-left hover:text-white/72">Compare this role with another role.</button>
            <button type="button" onClick={() => setInput(`How could the ${CONTEXT_CATEGORIES[activeCategory]} lens affect performance conditions in ${role.title} without changing baseline compatibility?`)} className="block text-left hover:text-white/72">Explain the active life-experience lens.</button>
          </div>
        ) : (
          <div className="space-y-5">
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={message.role === 'user' ? 'ml-8' : 'mr-2'}>
                <div className={cx(
                  'text-sm leading-6',
                  message.role === 'user'
                    ? 'rounded-2xl bg-white px-4 py-3 text-slate-950'
                    : 'text-white/72'
                )}>
                  {message.content}
                </div>
              </div>
            ))}
          </div>
        )}
        {loading && <div className="mt-5 text-xs uppercase tracking-[0.18em] text-white/26">Thinking…</div>}
        {error && <div className="mt-4 text-xs leading-5 text-amber-200/70">{error}</div>}
      </div>

      <div className="border-t border-white/8 p-3">
        <div className="flex items-end gap-2 rounded-[24px] border border-white/10 bg-white/[0.04] p-2 pl-4">
          <textarea
            value={input}
            onChange={event => setInput(event.target.value)}
            onKeyDown={event => {
              if (event.key === 'Enter' && !event.shiftKey) {
                event.preventDefault();
                send();
              }
            }}
            rows={1}
            placeholder="Ask an abstract question…"
            className="max-h-28 min-h-10 flex-1 resize-none bg-transparent py-2 text-sm text-white outline-none placeholder:text-white/22"
          />
          <button type="button" onClick={send} disabled={!input.trim() || loading} className="grid h-10 w-10 flex-none place-items-center rounded-full bg-white text-slate-950 transition disabled:cursor-not-allowed disabled:opacity-25" aria-label="Send role intelligence question">
            <Send size={16}/>
          </button>
        </div>
      </div>
    </aside>
  );
}

function Landing({ employees, loading, loadError, onSelectEmployee }) {
  const selectionRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="overflow-hidden rounded-[36px] border border-white/8 bg-white/[0.018]">
      <section className="relative grid min-h-[76vh] place-items-center overflow-hidden px-6 py-20 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_36%,rgba(56,189,248,.12),transparent_30%),radial-gradient(circle_at_30%_72%,rgba(192,132,252,.08),transparent_32%)]"/>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="relative z-10 max-w-4xl">
          <div className="mx-auto mb-8 w-fit">
            <SiriOrb size="230px" animationDuration={20}/>
          </div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/50">Role Intelligence</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">See the person inside the job.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/46 sm:text-lg">Explore how an employee’s completed PI pattern interacts with the actual operating demands of each role, where strengths are expressed, where boundaries create friction, and how context can change performance without changing the person.</p>
          <button type="button" onClick={() => selectionRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })} className="mt-9 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
            Explore employees <ChevronDown size={16}/>
          </button>
        </motion.div>
      </section>

      <section className="border-t border-white/8 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-white/28">The company role landscape</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">The same person can experience a completely different job depending on the operating environment.</h2>
        </div>
        <div className="mt-12"><RoleMarquee/></div>
      </section>

      <section className="relative min-h-[72vh] border-t border-white/8 px-6 py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-violet-200/55">Not a personality score</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Role demands become the lens.</h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-white/45">Volume, depth, autonomy, interruption, research allowance, precision, external interaction, and authority boundaries shape whether the same strength becomes useful, constrained, or overextended.</p>
          </div>
          <div className="relative mx-auto h-[420px] w-full max-w-[600px]">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"><SiriOrb size="220px" animationDuration={24}/></div>
            {['Volume','Depth','Autonomy','Exploration','Precision','Interruption','Boundaries','Interaction'].map((label, index) => {
              const angle = (index / 8) * Math.PI * 2 - Math.PI / 2;
              const x = 50 + Math.cos(angle) * 40;
              const y = 50 + Math.sin(angle) * 38;
              return <motion.div key={label} className="absolute -translate-x-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.16em] text-white/38" style={{ left: `${x}%`, top: `${y}%` }} animate={{ opacity: [0.35,0.78,0.35] }} transition={{ duration: 4 + index * 0.25, repeat: Infinity }}>{label}</motion.div>;
            })}
          </div>
        </div>
      </section>

      <section ref={selectionRef} className="border-t border-white/8 px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/50">Choose an employee</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Enter through a real profile.</h2>
          <p className="mt-4 text-sm leading-7 text-white/42">Every sphere is linked directly to the stored employee PI record. Select one to transition from the introduction into the role-intelligence workspace.</p>
        </div>
        <EmployeeConstellation employees={employees} onSelect={onSelectEmployee} loading={loading} loadError={loadError}/>
      </section>

      <section className="border-t border-white/8 px-6 py-12 text-center text-xs leading-6 text-white/24">
        Role intelligence combines completed PI data with role/workflow evidence and occupational research frameworks including O*NET, BLS occupational requirements, NIOSH work-design and well-being research, and organization-specific process evidence. Contextual life-experience lenses are kept separate from baseline employment-fit signals.
      </section>
    </div>
  );
}

function Workspace({ employee, onExit }) {
  const [selectedRole, setSelectedRole] = useState(ROLE_INTELLIGENCE_ROLES[0]);
  const [activeCategory, setActiveCategory] = useState('work-history');
  const interaction = useMemo(() => deriveRoleInteraction(employee, selectedRole), [employee, selectedRole]);

  return (
    <div className="rounded-[36px] border border-white/8 bg-white/[0.018] p-4 sm:p-6">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <button type="button" onClick={onExit} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/55 transition hover:text-white">
          <ArrowLeft size={16}/> Employees
        </button>
        <div className="text-right">
          <div className="text-sm font-semibold text-white">{employee.name}</div>
          <div className="mt-0.5 text-xs text-white/30">{employee.position || 'Position not entered'} · {employee.department || 'Department not entered'}</div>
        </div>
      </div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_370px]">
        <main className="min-w-0">
          <RoleOrbit employee={employee} selectedRole={selectedRole} onSelectRole={setSelectedRole}/>

          <section className="mx-auto max-w-5xl px-2 py-16">
            <AnimatePresence mode="wait">
              <motion.div key={selectedRole.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.4 }}>
                <div className="flex flex-wrap items-end justify-between gap-5">
                  <div className="max-w-3xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/50">{interaction.headline}</p>
                    <h2 className="mt-3 text-4xl font-semibold tracking-tight text-white">{selectedRole.title}</h2>
                    <p className="mt-4 text-base leading-8 text-white/48">{selectedRole.purpose}</p>
                  </div>
                  <div className="text-right text-xs text-white/30">
                    <div>{interaction.aligned} PI factors inside role band</div>
                    <div className="mt-1">{interaction.adjacent} near band · {interaction.contrast} contrasting pull</div>
                  </div>
                </div>
                <div className="mt-6"><FactorSignals interaction={interaction}/></div>
                <div className="mt-10"><SignatureBand role={selectedRole}/></div>
              </motion.div>
            </AnimatePresence>
          </section>

          <section className="border-t border-white/8 py-16">
            <div className="grid gap-12 lg:grid-cols-3">
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-200/50">Where the role rewards the pattern</div>
                <div className="mt-5 space-y-5">{selectedRole.alignment.map(item => <p key={item} className="text-sm leading-7 text-white/52">{item}</p>)}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/50">Where friction can develop</div>
                <div className="mt-5 space-y-5">{selectedRole.friction.map(item => <p key={item} className="text-sm leading-7 text-white/52">{item}</p>)}</div>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-fuchsia-200/50">Strength inversion</div>
                <p className="mt-5 text-lg leading-8 text-white/72">{selectedRole.inversion}</p>
              </div>
            </div>
          </section>

          <LifeLensStrip role={selectedRole} activeCategory={activeCategory} onSelect={setActiveCategory}/>

          <section className="border-t border-white/8 py-16">
            <div className="mb-7 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/30"><Compass size={14}/> Adjacent role pull</div>
            <div className="flex flex-wrap gap-3">
              {selectedRole.adjacent.map(id => {
                const role = ROLE_INTELLIGENCE_ROLES.find(item => item.id === id);
                if (!role) return null;
                return (
                  <button key={id} type="button" onClick={() => setSelectedRole(role)} className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white/55 transition hover:border-white/20 hover:text-white">
                    {role.title}<ArrowRight size={14} className="transition group-hover:translate-x-1"/>
                  </button>
                );
              })}
            </div>
          </section>
        </main>

        <RoleAssistantRail employee={employee} role={selectedRole} activeCategory={activeCategory}/>
      </div>
    </div>
  );
}

export default function RoleIntelligenceTab({ employees = [], loading = false, loadError = '' }) {
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (
    <AnimatePresence mode="wait">
      {selectedEmployee ? (
        <motion.div key={`workspace-${selectedEmployee.id || selectedEmployee.name}`} initial={{ opacity: 0, scale: 0.985 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 1.01 }} transition={{ duration: 0.55 }}>
          <Workspace employee={selectedEmployee} onExit={() => setSelectedEmployee(null)}/>
        </motion.div>
      ) : (
        <motion.div key="landing" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
          <Landing employees={employees} loading={loading} loadError={loadError} onSelectEmployee={setSelectedEmployee}/>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
