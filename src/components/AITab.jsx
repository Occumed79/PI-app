import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { PI_PROFILES } from '../data/profiles.js';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';
import { CROSSWALK_AI_RULES, CROSSWALK_MODEL } from '../data/crosswalkModel.js';
import { normalizePiFactors } from '../data/piCrosswalkEngine.js';
import {
  applyContextOverlays,
  deriveLensProjection,
  summarizeProjectionForAi,
} from '../data/lensProjectionEngine.js';
import {
  CONTEXT_OVERLAY_BY_ID,
  normalizeContextOverlayIds,
} from '../data/contextOverlayCatalog.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function profileFor(employee) {
  return PI_PROFILES.find(profile => profile.id === (employee?.piProfileId || employee?.profileId)) || PI_PROFILES[0];
}

function factorsFor(employee, profile = profileFor(employee)) {
  return normalizePiFactors({
    dominance: employee?.dominance ?? profile.dominance,
    extraversion: employee?.extraversion ?? profile.extraversion,
    patience: employee?.patience ?? profile.patience,
    formality: employee?.formality ?? profile.formality,
  });
}

function normalized(value) {
  return String(value || '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
}

const LENS_ALIASES = {
  'big five': ['big-five-ocean', 'workplace-big-five-pro'],
  ocean: ['big-five-ocean'],
  hexaco: ['hexaco'],
  disc: ['disc-crosswalk'],
  hpi: ['hogan-hpi'],
  hds: ['hogan-hds-derailers'],
  hogan: ['hogan-hpi', 'hogan-hds-derailers'],
  'eq i': ['eq-i-20-emotional-intelligence'],
  'emotional intelligence': ['eq-i-20-emotional-intelligence'],
  mbti: ['mbti-crosswalk'],
  stress: ['workplace-stress-lens', 'perceived-stress-scale-pss-lens'],
  burnout: ['maslach-burnout-inventory-mbi-lens', 'copenhagen-burnout-inventory-cbi-lens'],
  adhd: ['neurodiversity-support-lens', 'executive-function-model'],
  neurodiversity: ['neurodiversity-support-lens'],
};

function findRelevantLenses(question) {
  const q = normalized(question);
  const ids = new Set();

  for (const lens of HSI_LENS_REGISTRY) {
    const lensName = normalized(lens.lens);
    const lensId = normalized(lens.id);
    if ((lensName.length > 3 && q.includes(lensName)) || (lensId.length > 3 && q.includes(lensId))) ids.add(lens.id);
  }

  for (const [alias, lensIds] of Object.entries(LENS_ALIASES)) {
    if (q.includes(alias)) lensIds.forEach(id => ids.add(id));
  }

  const resolved = [...ids]
    .map(id => HSI_LENS_REGISTRY.find(lens => lens.id === id))
    .filter(Boolean);

  if (resolved.length) return resolved.slice(0, 8);

  return ['big-five-ocean', 'hexaco', 'disc-crosswalk', 'hogan-hpi', 'hogan-hds-derailers', 'eq-i-20-emotional-intelligence']
    .map(id => HSI_LENS_REGISTRY.find(lens => lens.id === id))
    .filter(Boolean);
}

function findRelevantEmployees(question, employees) {
  const q = normalized(question);
  const matches = employees.filter(employee => {
    const full = normalized(employee.name);
    const parts = full.split(' ').filter(part => part.length > 2);
    return (full && q.includes(full)) || parts.some(part => q.includes(part));
  });
  if (matches.length) return matches;
  if (employees.length === 1) return employees;
  return employees.slice(0, 20);
}

function buildEmployeeContext(employee, relevantLenses) {
  const profile = profileFor(employee);
  const factors = factorsFor(employee, profile);
  const overlayIds = normalizeContextOverlayIds(employee?.contextOverlays);
  const context = applyContextOverlays(factors, overlayIds);
  const overlayLabels = overlayIds.map(id => CONTEXT_OVERLAY_BY_ID[id]?.label).filter(Boolean);
  const projectionLines = relevantLenses
    .map(lens => summarizeProjectionForAi(deriveLensProjection(lens, factors, overlayIds)))
    .join('\n    ');

  return [
    `Employee: ${employee.name}`,
    `Position: ${employee.position || 'not entered'}`,
    `Department: ${employee.department || 'not entered'}`,
    `Completed PI profile: ${profile.name} (${profile.tagline})`,
    `Exact PI baseline: D ${factors.dominance}, E ${factors.extraversion}, P ${factors.patience}, F ${factors.formality}`,
    overlayIds.length
      ? `Explicitly selected context overlays: ${overlayLabels.join('; ')}`
      : 'Explicitly selected context overlays: none',
    overlayIds.length
      ? `Context-bent apparent PI: D ${context.apparentFactors.dominance}, E ${context.apparentFactors.extraversion}, P ${context.apparentFactors.patience}, F ${context.apparentFactors.formality}`
      : 'Context-bent apparent PI: same as baseline because no overlay is selected',
    `Assessment date: ${employee.assessmentDate || 'not entered'}`,
    `PI notes: ${employee.notes || 'none'}`,
    `Context notes: ${employee.contextNotes || 'none'}`,
    `Relevant calculated lens projections:\n    ${projectionLines}`,
  ].join('\n  ');
}

function buildContext(employees, question) {
  const relevantLenses = findRelevantLenses(question);
  const relevantEmployees = findRelevantEmployees(question, employees);

  const profileSummaries = PI_PROFILES.map(profile =>
    `Profile: ${profile.name} (${profile.group}) — ${profile.tagline} | Reference D ${profile.dominance}, E ${profile.extraversion}, P ${profile.patience}, F ${profile.formality}`
  ).join('\n');

  const lensSummaries = HSI_LENS_REGISTRY.map(lens =>
    `${lens.id}: ${lens.lens} [${lens.category}]`
  ).join('\n');

  const employeeSummaries = relevantEmployees.length
    ? relevantEmployees.map(employee => buildEmployeeContext(employee, relevantLenses)).join('\n\n')
    : 'No employee PI profiles have been added yet.';

  return `You are the PI Crosswalk Assistant for a single-user internal behavioral translation workspace.

The completed Predictive Index result and exact Dominance, Extraversion, Patience, and Formality values are the baseline source assessment.

A life, health, family, immigration, neurodiversity, stress, trauma, financial, cultural, or environmental variable is an overlay. It may amplify, suppress, mask, or bend visible PI behavior. It never replaces the completed PI baseline.

=== CROSSWALK MODEL ===
Source: ${CROSSWALK_MODEL.sourceValue}
Method: ${CROSSWALK_MODEL.methodValue}
Output: ${CROSSWALK_MODEL.outputValue}
Boundary: ${CROSSWALK_MODEL.boundary}

Rules:
${CROSSWALK_AI_RULES.map(rule => `- ${rule}`).join('\n')}
- Always separate baseline PI, selected context overlays, apparent PI presentation, and lens projection.
- Never infer a life variable, health condition, disability, neurotype, immigration situation, family issue, trauma history, or protected characteristic.
- Use an overlay only when it is explicitly stored or the user explicitly asks a hypothetical question.
- When exact employee factors are present, prioritize them over blanket reference-profile values.
- Name the PI factors and overlays driving each interpretation.
- Distinguish direct correspondences from weaker directional estimates.
- Do not invent employee facts or separately administered assessment results.
- Be direct, practical, and specific.

=== 17 PI REFERENCE PROFILES ===
${profileSummaries}

=== ${HSI_LENS_REGISTRY.length} AVAILABLE LENSES ===
${lensSummaries}

=== LENSES CALCULATED FOR THIS QUESTION ===
${relevantLenses.map(lens => `${lens.id}: ${lens.lens}`).join('\n')}

=== RELEVANT STORED EMPLOYEE PI RESULTS ===
${employeeSummaries}`;
}

async function readApiError(response) {
  try {
    const data = await response.json();
    return data?.message || data?.error || JSON.stringify(data);
  } catch {
    return await response.text();
  }
}

export default function AITab({ employees = [] }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Ask me to translate an employee’s exact PI baseline into any lens, or ask how a life/environment variable—such as stress, ADHD, immigration uncertainty, family strain, health load, grief, or sensory overload—could bend that baseline.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const employeeCountLabel = useMemo(() => `${employees.length} exact employee PI record${employees.length === 1 ? '' : 's'}`, [employees.length]);
  const overlayCount = useMemo(() => employees.reduce((sum, employee) => sum + normalizeContextOverlayIds(employee.contextOverlays).length, 0), [employees]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    setInput('');
    setMessages(current => [...current, { role: 'user', text }]);
    setLoading(true);

    const history = messages.map(message => ({
      role: message.role === 'assistant' ? 'assistant' : 'user',
      content: message.text,
    }));

    try {
      const response = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          system: buildContext(employees, text),
          messages: [...history, { role: 'user', content: text }],
        }),
        signal: AbortSignal.timeout(35000),
      });

      if (!response.ok) throw new Error((await readApiError(response)) || `API error ${response.status}`);

      const data = await response.json();
      const providerNote = data.source === 'fallback' && data.providerErrors?.length
        ? `\n\nProvider errors:\n${data.providerErrors.map(error => `- ${error}`).join('\n')}`
        : '';

      setMessages(current => [...current, { role: 'assistant', text: `${data.reply || 'No reply returned.'}${providerNote}` }]);
    } catch (error) {
      const message = error?.name === 'TimeoutError'
        ? 'The AI request timed out after 35 seconds.'
        : `AI request failed: ${error?.message || 'Unknown error'}`;
      setMessages(current => [...current, { role: 'assistant', text: message }]);
    } finally {
      setLoading(false);
    }
  }

  function onKeyDown(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      send();
    }
  }

  return (
    <div className="flex h-[calc(100vh-200px)] min-h-[500px] flex-col p-5 sm:p-6">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-white">PI Crosswalk Assistant</h1>
        <p className="mt-1 text-sm text-white/40">Uses exact PI baselines, explicit life/environment overlays, and registry-wide lens calculations.</p>
      </div>

      <div className="mb-4 rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-200/70">Interpretation chain</p>
        <p className="mt-1 text-sm leading-6 text-white/70">Completed PI baseline → explicitly selected life/environment variable → apparent PI shift → cross-framework lens projection</p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/50">{PI_PROFILES.length} PI reference profiles</span>
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/50">{HSI_LENS_REGISTRY.length} calculated lenses</span>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{employeeCountLabel}</span>
        <span className="rounded-full border border-fuchsia-300/20 bg-fuchsia-500/10 px-3 py-1 text-xs text-fuchsia-200">{overlayCount} saved context variable{overlayCount === 1 ? '' : 's'}</span>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className={cx('flex gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}>
            {message.role === 'assistant' && <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/20"><Bot size={15} className="text-sky-300"/></div>}
            <div className={cx('max-w-[84%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6', message.role === 'user' ? 'bg-sky-500/20 text-white' : 'border border-white/10 bg-white/[0.05] text-white/85')}>{message.text}</div>
            {message.role === 'user' && <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10"><User size={15} className="text-white/60"/></div>}
          </div>
        ))}
        {loading && <div className="flex gap-3"><div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/20"><Bot size={15} className="text-sky-300"/></div><div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3"><div className="flex gap-1">{[0, 150, 300].map(delay => <span key={delay} className="h-2 w-2 animate-bounce rounded-full bg-white/30" style={{ animationDelay: `${delay}ms` }}/>)}</div></div></div>}
        <div ref={bottomRef}/>
      </div>

      <div className="mt-4 flex gap-3">
        <textarea value={input} onChange={event => setInput(event.target.value)} onKeyDown={onKeyDown} placeholder="Example: How might ADHD-related executive load change Alex’s Analyzer PI presentation in the Hogan lens?" rows={1} className="flex-1 resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-sky-400/40"/>
        <button type="button" onClick={send} disabled={!input.trim() || loading} className={cx('flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition', input.trim() && !loading ? 'border-sky-400/40 bg-sky-500/20 text-white hover:bg-sky-500/30' : 'cursor-not-allowed border-white/10 bg-white/5 text-white/30')} aria-label="Send crosswalk question"><Send size={16}/></button>
      </div>
    </div>
  );
}
