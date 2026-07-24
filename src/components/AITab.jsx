import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Bot, Send, User } from 'lucide-react';
import { PI_PROFILES } from '../data/profiles.js';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';
import { CROSSWALK_AI_RULES, CROSSWALK_MODEL } from '../data/crosswalkModel.js';
import { deriveFrameworkSummaries, normalizePiFactors } from '../data/piCrosswalkEngine.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function profileFor(employee) {
  return PI_PROFILES.find(profile => profile.id === (employee?.piProfileId || employee?.profileId)) || PI_PROFILES[0];
}

function buildEmployeeContext(employee) {
  const profile = profileFor(employee);
  const factors = normalizePiFactors({
    dominance: employee?.dominance ?? profile.dominance,
    extraversion: employee?.extraversion ?? profile.extraversion,
    patience: employee?.patience ?? profile.patience,
    formality: employee?.formality ?? profile.formality,
  });
  const derived = deriveFrameworkSummaries(factors)
    .map(framework => `${framework.label}: ${framework.strongest.map(item => `${item.label} ${item.value}`).join(', ')}`)
    .join(' | ');

  return [
    `Employee: ${employee.name}`,
    `Position: ${employee.position || 'not entered'}`,
    `Department: ${employee.department || 'not entered'}`,
    `Completed PI profile: ${profile.name} (${profile.tagline})`,
    `Exact PI factors: D ${factors.dominance}, E ${factors.extraversion}, P ${factors.patience}, F ${factors.formality}`,
    `Assessment date: ${employee.assessmentDate || 'not entered'}`,
    `Notes: ${employee.notes || 'none'}`,
    `Calculated crosswalk snapshot: ${derived}`,
  ].join('\n  ');
}

function buildContext(employees) {
  const profileSummaries = PI_PROFILES.map(profile =>
    `Profile: ${profile.name} (${profile.group}) — "${profile.tagline}"
  Short: ${profile.short}
  Strengths: ${profile.strengths.join(', ')}
  Watch outs: ${profile.traps.join(', ')}
  Needs: ${profile.needs.join(', ')}
  Reference PI factors: D ${profile.dominance}, E ${profile.extraversion}, P ${profile.patience}, F ${profile.formality}`
  ).join('\n\n');

  const lensSummaries = HSI_LENS_REGISTRY.map(lens =>
    `Lens: ${lens.lens} | Category: ${lens.category} | Visual: ${lens.visualLabel} | Purpose: ${lens.why}`
  ).join('\n');

  const employeeSummaries = employees.length
    ? employees.map(buildEmployeeContext).join('\n\n')
    : 'No employee PI profiles have been added yet.';

  return `You are the PI Crosswalk Assistant for a single-user internal behavioral translation workspace.

The completed Predictive Index result and exact Dominance, Extraversion, Patience, and Formality values are the source assessment. Other framework outputs are directional translations calculated from that source.

=== CROSSWALK MODEL ===
Source: ${CROSSWALK_MODEL.sourceValue}
Method: ${CROSSWALK_MODEL.methodValue}
Output: ${CROSSWALK_MODEL.outputValue}
Boundary: ${CROSSWALK_MODEL.boundary}

Rules:
${CROSSWALK_AI_RULES.map(rule => `- ${rule}`).join('\n')}
- When exact employee factors are present, prioritize them over the blanket reference-profile values.
- Explicitly name the PI factors driving each translated interpretation.
- Distinguish direct correspondences from weaker directional estimates.
- Do not invent employee facts or separately administered assessment results.
- Be direct, practical, and specific.

=== 17 PI REFERENCE PROFILES ===
${profileSummaries}

=== ${HSI_LENS_REGISTRY.length} CROSSWALK LENSES ===
${lensSummaries}

=== STORED EMPLOYEE PI RESULTS ===
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
      text: 'Ask me to translate a completed employee PI result into Big Five, HEXACO, Hogan, EQ-i, DISC, or another lens. When exact D/E/P/F values are stored, I use those values before the blanket reference profile.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const employeeCountLabel = useMemo(() => `${employees.length} exact employee PI record${employees.length === 1 ? '' : 's'}`, [employees.length]);

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
          system: buildContext(employees),
          messages: [...history, { role: 'user', content: text }],
        }),
        signal: AbortSignal.timeout(35000),
      });

      if (!response.ok) {
        throw new Error((await readApiError(response)) || `API error ${response.status}`);
      }

      const data = await response.json();
      const providerNote = data.source === 'fallback' && data.providerErrors?.length
        ? `\n\nProvider errors:\n${data.providerErrors.map(error => `- ${error}`).join('\n')}`
        : '';

      setMessages(current => [
        ...current,
        { role: 'assistant', text: `${data.reply || 'No reply returned.'}${providerNote}` },
      ]);
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
        <p className="mt-1 text-sm text-white/40">Uses exact stored PI factors first, then translates them across related frameworks.</p>
      </div>

      <div className="mb-4 rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-200/70">Translation basis</p>
        <p className="mt-1 text-sm leading-6 text-white/70">Completed PI result → exact D/E/P/F values → trait correspondence → cross-framework interpretation</p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/50">{PI_PROFILES.length} PI reference profiles</span>
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/50">{HSI_LENS_REGISTRY.length} crosswalk lenses</span>
        <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">{employeeCountLabel}</span>
      </div>

      <div className="flex-1 space-y-4 overflow-y-auto rounded-3xl border border-white/10 bg-white/[0.03] p-5">
        {messages.map((message, index) => (
          <div key={`${message.role}-${index}`} className={cx('flex gap-3', message.role === 'user' ? 'justify-end' : 'justify-start')}>
            {message.role === 'assistant' && (
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/20"><Bot size={15} className="text-sky-300"/></div>
            )}
            <div className={cx('max-w-[84%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6', message.role === 'user' ? 'bg-sky-500/20 text-white' : 'border border-white/10 bg-white/[0.05] text-white/85')}>
              {message.text}
            </div>
            {message.role === 'user' && (
              <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10"><User size={15} className="text-white/60"/></div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/20"><Bot size={15} className="text-sky-300"/></div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
              <div className="flex gap-1">
                {[0, 150, 300].map(delay => <span key={delay} className="h-2 w-2 animate-bounce rounded-full bg-white/30" style={{ animationDelay: `${delay}ms` }}/>) }
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef}/>
      </div>

      <div className="mt-4 flex gap-3">
        <textarea
          value={input}
          onChange={event => setInput(event.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Ask how an employee’s exact PI factors translate into another framework…"
          rows={1}
          className="flex-1 resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-sky-400/40"
        />
        <button type="button" onClick={send} disabled={!input.trim() || loading} className={cx('flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition', input.trim() && !loading ? 'border-sky-400/40 bg-sky-500/20 text-white hover:bg-sky-500/30' : 'cursor-not-allowed border-white/10 bg-white/5 text-white/30')} aria-label="Send crosswalk question">
          <Send size={16}/>
        </button>
      </div>
    </div>
  );
}
