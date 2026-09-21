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
import PatternRefraction from './PatternRefraction.jsx';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Badge,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  Progress,
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
  const [query, setQuery] = useState('');

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

  const normalizedQuery = query.trim().toLowerCase();
  const filteredEmployees = normalizedQuery
    ? employees.filter(employee => [
        employee.name,
        employee.position,
        employee.department,
        employeePiProfile(employee).name,
      ].filter(Boolean).join(' ').toLowerCase().includes(normalizedQuery))
    : employees;

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
    <div className="mx-auto max-w-5xl">
      <Command className="mx-auto mb-6 max-w-2xl">
        <CommandInput
          value={query}
          onChange={event => setQuery(event.target.value)}
          placeholder="Search employee, position, department, or PI profile…"
        />
        {query.trim() && (
          <CommandList>
            <CommandGroup heading="Employee profiles">
              {filteredEmployees.length === 0 && <CommandEmpty>No matching employee profile.</CommandEmpty>}
              {filteredEmployees.slice(0, 10).map(employee => {
                const profile = employeePiProfile(employee);
                return (
                  <CommandItem key={employee.id || employee.name} onSelect={() => onSelect(employee)}>
                    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-semibold text-white/68">
                      {(employee.name || '?').split(/\s+/).map(part => part[0]).join('').slice(0, 2).toUpperCase()}
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate font-medium text-white/74">{employee.name}</span>
                      <span className="block truncate text-[11px] text-white/30">{employee.position || profile.name}</span>
                    </span>
                  </CommandItem>
                );
              })}
            </CommandGroup>
          </CommandList>
        )}
      </Command>

      <div className="relative h-[640px] overflow-hidden rounded-[40px] border border-white/8 bg-black/15">
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
  const refractionSource = useMemo(() => <SignatureBand role={role}/>, [role]);

  return (
    <section>
      <div className="mb-8 max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-fuchsia-200/55">Life experience refraction</p>
        <h3 className="mt-3 text-3xl font-semibold tracking-tight text-white">The person stays the same. The operating conditions do not.</h3>
        <p className="mt-4 text-sm leading-7 text-white/46">
          These lenses do not change the baseline role-interaction model. The visual refraction is an explanatory metaphor for how operating conditions can amplify, suppress, mask, or distort the expression of the same underlying pattern.
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
            <div className="grid gap-7 lg:grid-cols-[1.08fr_.92fr]">
              <PatternRefraction
                source={refractionSource}
                activeCategory={category}
                categoryOrder={CONTEXT_CATEGORY_ORDER}
                strength={42}
                className="min-h-[360px]"
              />

              <div className="rounded-[28px] border border-white/8 bg-white/[0.02] p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="text-lg font-semibold text-white">{CONTEXT_CATEGORIES[category]}</div>
                  <Badge tone="info">Baseline unchanged</Badge>
                </div>

                <p className="mt-4 max-w-3xl text-base leading-8 text-white/58">{LENS_COPY[category]}</p>

                <Accordion type="single" defaultValue="conditions" className="mt-6">
                  <AccordionItem value="conditions">
                    <AccordionTrigger>Relevant operating conditions</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        In <span className="text-white/70">{role.title}</span>, the modeled conditions include
                        volume {role.signature.volume}, interruption {role.signature.interruption}, autonomy {role.signature.autonomy},
                        precision {role.signature.precision}, and boundary rigidity {role.signature.boundedAuthority}.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="use">
                    <AccordionTrigger>How to use this lens</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Treat this as a hypothetical operating-condition test. It does not reveal or assume that the employee has this life experience, and it never changes the baseline person × role calculation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="visual">
                    <AccordionTrigger>What the refraction visual means</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        The same role signature is rendered through Figma's Pattern Refraction effect. The deformation is illustrative only; the underlying role vector, PI factors, compatibility components, evidence confidence, and adjacent-role calculations remain unchanged.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
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
  const [analysisMeta, setAnalysisMeta] = useState(null);
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
          roleId: role.id,
          activeContextCategory: activeCategory,
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
        signal: AbortSignal.timeout(150000),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(data.message || `AI request failed (${response.status})`);
      setMessages(current => [...current, { role: 'assistant', content: data.reply || 'No response was returned.' }]);
      setAnalysisMeta({
        consensusMode: data.consensusMode || null,
        analyzers: Array.isArray(data.analyzers) ? data.analyzers.map(item => item.provider).filter(Boolean) : [],
        synthesizer: data.synthesizer?.provider || null,
        agreement: data.consensus?.agreement || null,
        materialDisagreements: Array.isArray(data.consensus?.materialDisagreements)
          ? data.consensus.materialDisagreements
          : [],
        unsupportedLeaps: Array.isArray(data.consensus?.unsupportedLeaps)
          ? data.consensus.unsupportedLeaps
          : [],
        disagreementCount: Array.isArray(data.consensus?.materialDisagreements)
          ? data.consensus.materialDisagreements.length
          : 0,
        evidenceConfidence: data.roleGrounding?.evidenceConfidence ?? null,
        sourceCount: data.roleGrounding?.sourceCount ?? null,
        webProviders: Array.isArray(data.webResearch?.providers) ? data.webResearch.providers : [],
        webSourceCount: Number(data.webResearch?.sourceCount) || 0,
        webSources: Array.isArray(data.webResearch?.sources) ? data.webResearch.sources : [],
      });
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
        {analysisMeta && (
          <div className="mt-4 flex flex-wrap gap-2">
            {analysisMeta.analyzers.length > 0 && (
              <Badge tone="info">{analysisMeta.analyzers.join(' + ')} analysis</Badge>
            )}
            {analysisMeta.synthesizer && (
              <Badge>{analysisMeta.synthesizer} synthesis</Badge>
            )}
            {analysisMeta.agreement && (
              <Badge tone={analysisMeta.agreement === 'high' ? 'success' : analysisMeta.agreement === 'low' ? 'warning' : 'info'}>
                Model agreement {analysisMeta.agreement}
              </Badge>
            )}
            {analysisMeta.disagreementCount > 0 && (
              <Badge tone="warning">{analysisMeta.disagreementCount} material disagreement{analysisMeta.disagreementCount === 1 ? '' : 's'}</Badge>
            )}
            {Number.isFinite(analysisMeta.sourceCount) && (
              <Badge>{analysisMeta.sourceCount} role sources</Badge>
            )}
            {Number.isFinite(analysisMeta.evidenceConfidence) && (
              <Badge>Evidence {analysisMeta.evidenceConfidence}/100</Badge>
            )}
            {analysisMeta.webSourceCount > 0 && (
              <Badge tone="info">Web · {analysisMeta.webProviders.join(' + ')} · {analysisMeta.webSourceCount}</Badge>
            )}
          </div>
        )}

        {analysisMeta && (
          analysisMeta.materialDisagreements.length > 0 ||
          analysisMeta.unsupportedLeaps.length > 0 ||
          analysisMeta.webSources.length > 0
        ) && (
          <Accordion type="single" className="mt-3">
            {(analysisMeta.materialDisagreements.length > 0 || analysisMeta.unsupportedLeaps.length > 0) && (
              <AccordionItem value="model-review">
                <AccordionTrigger className="py-2 text-xs text-white/45">Model review details</AccordionTrigger>
                <AccordionContent className="pb-2 text-xs leading-5">
                  {analysisMeta.materialDisagreements.length > 0 && (
                    <div>
                      <div className="font-medium text-white/58">Material disagreements</div>
                      <ul className="mt-2 space-y-2">
                        {analysisMeta.materialDisagreements.map((item, index) => (
                          <li key={`disagreement-${index}`} className="border-l border-amber-300/20 pl-3 text-white/38">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {analysisMeta.unsupportedLeaps.length > 0 && (
                    <div className={analysisMeta.materialDisagreements.length > 0 ? 'mt-4' : ''}>
                      <div className="font-medium text-white/58">Unsupported leaps removed</div>
                      <ul className="mt-2 space-y-2">
                        {analysisMeta.unsupportedLeaps.map((item, index) => (
                          <li key={`unsupported-${index}`} className="border-l border-sky-300/20 pl-3 text-white/38">{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            )}
            {analysisMeta.webSources.length > 0 && (
              <AccordionItem value="web-sources">
                <AccordionTrigger className="py-2 text-xs text-white/45">External web sources</AccordionTrigger>
                <AccordionContent className="pb-2 text-xs leading-5">
                  <div className="space-y-2">
                    {analysisMeta.webSources.map(source => (
                      <a
                        key={source.id + source.url}
                        href={source.url}
                        target="_blank"
                        rel="noreferrer"
                        className="block border-l border-sky-300/20 pl-3 text-white/40 transition hover:text-white/65"
                      >
                        <span className="font-medium text-white/56">[{source.id}] {source.title}</span>
                        <span className="ml-2 uppercase tracking-[0.12em] text-white/22">{source.provider}</span>
                      </a>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            )}
          </Accordion>
        )}
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

  const story = [
    {
      eyebrow: 'Role Intelligence',
      title: 'See the person inside the job.',
      description: 'Start with the completed PI pattern, then examine how that same person interacts with the actual operating demands of different company roles.',
      content: (
        <div className="grid h-full place-items-center">
          <div className="relative text-center">
            <SiriOrb size="230px" animationDuration={20}/>
            <div className="absolute inset-0 grid place-items-center">
              <div>
                <div className="text-lg font-semibold text-white">Person × role</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/35">Interaction, not a verdict</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      eyebrow: 'Operating environment',
      title: 'Role demands become the lens.',
      description: 'Volume, depth, exploration, autonomy, precision, external interaction, interruption, and authority boundaries determine where a natural strength is expressed, constrained, or overextended.',
      content: (
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/12 bg-slate-950/70 px-5 py-3 text-center">
            <div className="text-sm font-semibold text-white">Role demands</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.16em] text-white/30">Eight dimensions</div>
          </div>
          <OrbitingCircles radius={160} duration={48} showPath>
            {ROLE_DIMENSIONS.map(([key, label]) => (
              <span key={key} className="rounded-full border border-white/10 bg-slate-950/80 px-3 py-2 text-[10px] uppercase tracking-[0.12em] text-white/48">
                {label}
              </span>
            ))}
          </OrbitingCircles>
        </div>
      ),
    },
    {
      eyebrow: 'Company positions',
      title: 'One profile can meet fourteen very different environments.',
      description: 'The engine models analyst, specialist, manager, director, client, finance, scheduling, provider-relations, network, and fitness-for-duty roles as distinct operating systems.',
      content: (
        <div className="relative h-full w-full">
          <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
            <SiriOrb size="170px" animationDuration={24}/>
            <div className="absolute inset-0 grid place-items-center">
              <div>
                <div className="text-2xl font-semibold text-white">14</div>
                <div className="text-[10px] uppercase tracking-[0.16em] text-white/30">modeled roles</div>
              </div>
            </div>
          </div>
          <OrbitingCircles radius={170} duration={56} reverse showPath>
            {ROLE_INTELLIGENCE_ROLES.slice(0, 8).map(role => (
              <span key={role.id} className="max-w-[118px] rounded-full border border-white/10 bg-slate-950/80 px-3 py-2 text-center text-[10px] font-medium text-white/52">
                {role.shortTitle}
              </span>
            ))}
          </OrbitingCircles>
        </div>
      ),
    },
    {
      eyebrow: 'Context stays separate',
      title: 'Life experience can change conditions without changing baseline compatibility.',
      description: 'Context lenses are treated as operating-condition hypotheses. They can explain strain, support, masking, or expression without silently altering the baseline person × role calculation.',
      content: (
        <div className="grid h-full place-items-center p-8">
          <Tabs defaultValue="baseline" className="w-full max-w-sm">
            <TabsList>
              <TabsTrigger value="baseline">Baseline</TabsTrigger>
              <TabsTrigger value="context">Context lens</TabsTrigger>
            </TabsList>
            <TabsContent value="baseline">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.025] p-6">
                <div className="text-sm font-semibold text-white">Person × role model</div>
                <p className="mt-3 text-sm leading-7 text-white/42">PI factors, role demands, work values, environment, boundaries, sustainability, and evidence confidence.</p>
              </div>
            </TabsContent>
            <TabsContent value="context">
              <div className="rounded-[24px] border border-white/10 bg-white/[0.025] p-6">
                <div className="text-sm font-semibold text-white">Operating-condition lens</div>
                <p className="mt-3 text-sm leading-7 text-white/42">A separate explanation layer for hypothetical context, support, strain, masking, or environmental friction.</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      ),
    },
  ];

  return (
    <div className="overflow-hidden rounded-[36px] border border-white/8 bg-white/[0.018]">
      <section className="px-4 py-8 sm:px-6 sm:py-10">
        <div className="mx-auto mb-8 max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/50">Role Intelligence</p>
          <h1 className="mt-5 text-5xl font-semibold tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">See the person inside the job.</h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/46 sm:text-lg">Scroll through the model first, then enter through a stored employee profile.</p>
        </div>

        <div className="mx-auto max-w-6xl">
          <StickyScrollReveal content={story}/>
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => selectionRef.current?.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' })}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
          >
            Choose an employee <ChevronDown size={16}/>
          </button>
        </div>
      </section>

      <section ref={selectionRef} className="border-t border-white/8 px-6 py-20">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-emerald-200/50">Employee selector</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">Enter through a real profile.</h2>
          <p className="mt-4 text-sm leading-7 text-white/42">Each orbiting profile is linked directly to the stored employee PI record. Select one to open the person × role workspace.</p>
        </div>
        <EmployeeConstellation employees={employees} onSelect={onSelectEmployee} loading={loading} loadError={loadError}/>
      </section>

      <section className="border-t border-white/8 px-6 py-12 text-center text-xs leading-6 text-white/24">
        Role intelligence combines completed PI data with role/workflow evidence and occupational research frameworks including O*NET, BLS occupational requirements, NIOSH work-design research, and organization-specific process evidence. Contextual life-experience lenses remain separate from baseline role-interaction signals. Model-routing benchmark data is provided by Artificial Analysis.
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

  const components = [
    ['Behavioral', interaction.components.behavioralFit],
    ['Task pattern', interaction.components.cognitiveTaskFit],
    ['Work values', interaction.components.workValueFit],
    ['Environment', interaction.components.environmentFit],
    ['Boundaries', interaction.components.boundaryFit],
    ['Sustainability', interaction.components.sustainabilityFit],
  ];

  const assistant = (
    <RoleAssistantRail employee={employee} role={selectedRole} activeCategory={activeCategory}/>
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

      <div className="mb-5 xl:hidden">
        <Sheet>
          <SheetTrigger className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/62">
            <MessageCircleMore size={15}/> Ask Role Intelligence
          </SheetTrigger>
          <SheetContent side="right" className="p-3">
            {assistant}
          </SheetContent>
        </Sheet>
      </div>

      <ResizablePanelGroup className="min-h-[760px]">
        <ResizablePanel defaultSize={72} className="xl:pr-6">
          <main className="min-w-0">
            <RoleOrbit employee={employee} selectedRole={selectedRole} onSelectRole={setSelectedRole}/>

            <section className="mx-auto max-w-5xl px-2 py-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedRole.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                >
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
                </motion.div>
              </AnimatePresence>

              <Tabs defaultValue="interaction" className="mt-10">
                <ScrollArea className="max-w-full pb-2">
                  <TabsList className="w-max flex-nowrap">
                    <TabsTrigger value="interaction">Interaction</TabsTrigger>
                    <TabsTrigger value="interpretation">Interpretation</TabsTrigger>
                    <TabsTrigger value="evidence">Evidence</TabsTrigger>
                    <TabsTrigger value="context">Context lenses</TabsTrigger>
                    <TabsTrigger value="adjacent">Adjacent roles</TabsTrigger>
                  </TabsList>
                </ScrollArea>

                <TabsContent value="interaction">
                  <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr]">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">PI factor signals</div>
                      <div className="mt-4"><FactorSignals interaction={interaction}/></div>

                      <div className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-white/30">Interaction dimensions</div>
                      <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-4">
                        {components.map(([label, value]) => (
                          <div key={label} className="border-b border-white/8 pb-4">
                            <div className="flex items-center justify-between gap-3">
                              <div className="text-xs text-white/34">{label}</div>
                              <div className="text-sm font-semibold tabular-nums text-white/68">{value}</div>
                            </div>
                            <Progress value={value} className="mt-2"/>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">Role signature</div>
                      <SignatureBand role={selectedRole}/>
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="interpretation">
                  <Accordion type="single" defaultValue="alignment">
                    <AccordionItem value="alignment">
                      <AccordionTrigger>Where the role rewards the pattern</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          {selectedRole.alignment.map(item => <p key={item}>{item}</p>)}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="friction">
                      <AccordionTrigger>Where friction can develop</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4">
                          {selectedRole.friction.map(item => <p key={item}>{item}</p>)}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="inversion">
                      <AccordionTrigger>Strength inversion</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-base leading-8 text-white/64">{selectedRole.inversion}</p>
                        {interaction.inversionSignals.length > 0 && (
                          <div className="mt-5 space-y-4">
                            {interaction.inversionSignals.slice(0, 3).map(signal => (
                              <div key={signal.id}>
                                <div className="font-medium text-white/70">{signal.label}</div>
                                <div className="mt-1 text-white/40">{signal.rationale}</div>
                              </div>
                            ))}
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </TabsContent>

                <TabsContent value="evidence">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/30">Evidence bundle</div>
                      <div className="mt-2 text-sm text-white/45">External occupations are analogues, not claims that this Occu-Med role is identical to the source occupation.</div>
                    </div>
                    <Badge>Confidence {interaction.evidenceConfidence}/100</Badge>
                  </div>
                  <Accordion type="multiple">
                    {interaction.evidence.map(source => (
                      <AccordionItem key={source.id} value={source.id}>
                        <AccordionTrigger>{source.label}</AccordionTrigger>
                        <AccordionContent>
                          <p>{source.note}</p>
                          <p className="mt-2 text-xs text-white/28">{source.kind} · authority {source.authority} · directness {source.directness}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </TabsContent>

                <TabsContent value="context">
                  <LifeLensStrip role={selectedRole} activeCategory={activeCategory} onSelect={setActiveCategory}/>
                </TabsContent>

                <TabsContent value="adjacent">
                  <div className="mb-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/30">
                    <Compass size={14}/> Closest modeled role environments
                  </div>
                  <Carousel className="overflow-hidden rounded-[28px] border border-white/8 bg-black/10">
                    <CarouselContent>
                      {adjacentPull.map(item => (
                        <CarouselItem key={item.roleId}>
                          <button
                            type="button"
                            onClick={() => setSelectedRole(item.role)}
                            className="group grid min-h-[220px] w-full place-items-center px-14 py-10 text-center"
                          >
                            <div className="max-w-xl">
                              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-200/45">Adjacent modeled environment</div>
                              <div className="mt-4 text-3xl font-semibold tracking-tight text-white">{item.role.title}</div>
                              <div className="mt-3 text-sm leading-7 text-white/42">{item.role.purpose}</div>
                              <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-white/58 transition group-hover:text-white">
                                Explore this role <ArrowRight size={14} className="transition group-hover:translate-x-1"/>
                              </div>
                            </div>
                          </button>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                  </Carousel>
                  <p className="mt-5 max-w-3xl text-xs leading-6 text-white/28">
                    Adjacent-role pull is calculated from role-environment similarity plus this person × role interaction. It is not a promotion or staffing recommendation.
                  </p>
                </TabsContent>
              </Tabs>
            </section>
          </main>
        </ResizablePanel>

        <ResizableHandle withHandle/>

        <ResizablePanel defaultSize={28} className="hidden xl:block">
          {assistant}
        </ResizablePanel>
      </ResizablePanelGroup>
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
