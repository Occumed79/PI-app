import React, { useMemo, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer } from 'recharts';
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
import StickyScrollReveal from './StickyScrollReveal.jsx';
import OrbitingCircles from './OrbitingCircles.jsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  Sheet,
  SheetContent,
  SheetTrigger,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from './SourcedRoleUI.jsx';
import {
  CONTEXT_CATEGORIES,
  CONTEXT_CATEGORY_ORDER,
} from '../data/contextOverlayCatalog.js';
import {
  ROLE_DIMENSIONS,
  ROLE_INTELLIGENCE_ROLES,
  deriveAdjacentRolePull,
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

  const inner = employees.slice(0, 8);
  const outer = employees.slice(8);

  const employeeNode = employee => {
    const profile = employeePiProfile(employee);
    const initials = (employee.name || '?')
      .split(/\s+/)
      .map(part => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

    return (
      <button
        key={employee.id || employee.name}
        type="button"
        onClick={() => onSelect(employee)}
        className="group flex min-w-[132px] flex-col items-center text-center"
      >
        <div className="relative">
          <SiriOrb size="76px" colors={orbColors(profile)} animationDuration={24}/>
          <span className="absolute inset-0 grid place-items-center text-xs font-semibold text-white">{initials}</span>
        </div>
        <span className="mt-2 max-w-[132px] truncate text-xs font-semibold text-white/76 group-hover:text-white">
          {employee.name}
        </span>
        <span className="mt-0.5 max-w-[132px] truncate text-[10px] text-white/30">
          {employee.position || profile.name}
        </span>
      </button>
    );
  };

  return (
    <div className="relative mx-auto h-[640px] max-w-5xl overflow-hidden rounded-[40px] border border-white/8 bg-black/15">
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
        <SiriOrb size="190px" animationDuration={20}/>
        <div className="absolute inset-0 grid place-items-center">
          <div>
            <div className="text-sm font-semibold text-white">Employees</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/34">Choose a profile</div>
          </div>
        </div>
      </div>

      <OrbitingCircles radius={210} duration={44} showPath>
        {inner.map(employeeNode)}
      </OrbitingCircles>

      {outer.length > 0 && (
        <OrbitingCircles radius={290} duration={58} reverse showPath>
          {outer.map(employeeNode)}
        </OrbitingCircles>
      )}
    </div>
  );
}

function RoleOrbit({ employee, selectedRole, onSelectRole }) {
  const profile = employeePiProfile(employee);
  const landscape = useMemo(
    () => ROLE_INTELLIGENCE_ROLES.map(role => ({
      role,
      interaction: deriveRoleInteraction(employee, role),
    })),
    [employee]
  );

  const roleNodes = landscape.map(({ role, interaction }) => {
    const normalized = Math.max(0, Math.min(1, (interaction.orbitRadius - 112) / 135));
    const displayRadius = 165 + normalized * 120;
    const active = selectedRole.id === role.id;

    return (
      <motion.button
        key={role.id}
        data-radius={displayRadius}
        type="button"
        onClick={() => onSelectRole(role)}
        whileHover={{ scale: 1.06 }}
        className={cx(
          'max-w-[150px] rounded-full border px-3 py-2 text-xs font-medium backdrop-blur-xl transition',
          active
            ? 'border-white/40 bg-white text-slate-950 shadow-xl'
            : 'border-white/12 bg-slate-950/80 text-white/58 hover:border-white/24 hover:text-white'
        )}
      >
        {role.shortTitle}
      </motion.button>
    );
  });

  return (
    <div className="relative mx-auto h-[650px] max-w-[880px] overflow-hidden rounded-[44px] border border-white/8 bg-black/15">
      <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
        <SiriOrb size="240px" colors={orbColors(profile)} animationDuration={18}/>
        <div className="pointer-events-none absolute inset-0 grid place-items-center">
          <div className="max-w-44 rounded-full border border-white/15 bg-slate-950/60 px-4 py-2 backdrop-blur-xl">
            <div className="text-sm font-semibold text-white">{employee.name}</div>
            <div className="mt-0.5 text-[10px] uppercase tracking-[0.16em] text-white/35">{profile.name}</div>
          </div>
        </div>
      </div>

      <OrbitingCircles
        radius={220}
        duration={82}
        showPath={false}
        radiusForChild={child => Number(child.props['data-radius']) || 220}
      >
        {roleNodes}
      </OrbitingCircles>

      <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-center">
        <div className="text-lg font-semibold text-white">{selectedRole.title}</div>
        <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/28">{selectedRole.family}</div>
      </div>
    </div>
  );
}

function SignatureBand({ role }) {
  const data = ROLE_DIMENSIONS.map(([key, label]) => ({
    dimension: label,
    value: role.signature[key],
  }));

  return (
    <div className="h-[330px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="72%">
          <PolarGrid stroke="rgba(255,255,255,0.10)" />
          <PolarAngleAxis
            dataKey="dimension"
            tick={{ fill: 'rgba(255,255,255,0.42)', fontSize: 10 }}
          />
          <Radar
            dataKey="value"
            stroke="rgba(186,230,253,0.88)"
            fill="rgba(139,92,246,0.20)"
            strokeWidth={2}
            dot={{ r: 2.5, fill: 'rgba(255,255,255,0.9)' }}
            isAnimationActive
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function FactorSignals({ interaction }) {
  const toneFor = state => (
    state === 'aligned' ? 'success' : state === 'adjacent' ? 'info' : 'warning'
  );
  return (
    <div className="flex flex-wrap gap-2">
      {interaction.factorSignals.map(signal => (
        <Badge key={signal.key} tone={toneFor(signal.state)}>
          {signal.short} {signal.value} · {signal.state === 'aligned' ? 'inside role band' : signal.state === 'adjacent' ? 'near role band' : 'different natural pull'}
        </Badge>
      ))}
    </div>
  );
}

function LifeLensStrip({ role, activeCategory, onSelect }) {
  return (
    <section>
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-200/55">Life experience refraction</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">The person stays the same. The operating conditions do not.</h3>
        <p className="mt-4 text-sm leading-7 text-white/46">
          These lenses do not change the baseline role-alignment model. They show how context can amplify, suppress, mask, or distort performance inside a specific job environment.
        </p>
      </div>

      <Tabs value={activeCategory} onValueChange={onSelect}>
        <ScrollArea className="max-w-full pb-2">
          <TabsList className="w-max flex-nowrap">
            {CONTEXT_CATEGORY_ORDER.map(category => (
              <TabsTrigger key={category} value={category}>
                {CONTEXT_CATEGORIES[category]}
              </TabsTrigger>
            ))}
          </TabsList>
        </ScrollArea>

        {CONTEXT_CATEGORY_ORDER.map(category => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-8 rounded-[28px] border border-white/8 bg-white/[0.02] p-6 lg:grid-cols-[1.2fr_.8fr]">
              <div>
                <div className="text-lg font-semibold text-white">{CONTEXT_CATEGORIES[category]}</div>
                <p className="mt-3 max-w-3xl text-base leading-8 text-white/58">{LENS_COPY[category]}</p>
                <p className="mt-4 text-sm leading-7 text-white/38">
                  In <span className="text-white/70">{role.title}</span>, the most relevant operating conditions include
                  volume {role.signature.volume}, interruption {role.signature.interruption}, autonomy {role.signature.autonomy},
                  precision {role.signature.precision}, and boundary rigidity {role.signature.boundedAuthority}.
                </p>
              </div>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">How to use this lens</div>
                <p className="mt-3 text-sm leading-6 text-white/36">
                  Treat the lens as a hypothetical operating-condition test. It does not reveal or assume that the employee has this life experience, and it never changes the baseline person × role model.
                </p>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}

function RoleAssistantRail({ employee, role, activeCategory }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const profile = employeePiProfile(employee);
  const roleInteraction = useMemo(() => deriveRoleInteraction(employee, role), [employee, role]);

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
Deterministic interaction components: ${JSON.stringify(roleInteraction.components)}
Evidence confidence: ${roleInteraction.evidenceConfidence}/100.
Strength-inversion risk signal: ${roleInteraction.inversionRisk}/100.
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
        Role intelligence combines completed PI data with role/workflow evidence and occupational research frameworks including O*NET, BLS occupational requirements, NIOSH work-design and well-being research, and organization-specific process evidence. Contextual life-experience lenses are kept separate from baseline employment-fit signals. Model-routing benchmark data is provided by Artificial Analysis.
      </section>
    </div>
  );
}

function Workspace({ employee, onExit }) {
  const [selectedRole, setSelectedRole] = useState(ROLE_INTELLIGENCE_ROLES[0]);
  const [activeCategory, setActiveCategory] = useState('work-history');
  const interaction = useMemo(() => deriveRoleInteraction(employee, selectedRole), [employee, selectedRole]);
  const adjacentPull = useMemo(
    () => deriveAdjacentRolePull(employee, selectedRole, 4),
    [employee, selectedRole]
  );

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
                    <div className="mt-1">Evidence confidence {interaction.evidenceConfidence}/100</div>
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
              {adjacentPull.map(item => (
                <button key={item.roleId} type="button" onClick={() => setSelectedRole(item.role)} className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.025] px-4 py-3 text-sm text-white/55 transition hover:border-white/20 hover:text-white">
                  {item.role.title}<ArrowRight size={14} className="transition group-hover:translate-x-1"/>
                </button>
              ))}
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
