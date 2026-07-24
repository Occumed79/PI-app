import React, { useEffect, useRef, useState } from 'react';
import { Send, Bot, User } from 'lucide-react';
import { PI_PROFILES } from '../data/profiles.js';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';
import { CROSSWALK_AI_RULES, CROSSWALK_MODEL } from '../data/crosswalkModel.js';

function cx(...c) { return c.filter(Boolean).join(' '); }

function buildContext(employees) {
  const profileSummaries = PI_PROFILES.map(p =>
    `Profile: ${p.name} (${p.group}) — "${p.tagline}"\n  Short: ${p.short}\n  Strengths: ${p.strengths.join(', ')}\n  Watch outs: ${p.traps.join(', ')}\n  Needs: ${p.needs.join(', ')}\n  PI factors: Dominance ${p.dominance}, Extraversion ${p.extraversion}, Patience ${p.patience}, Formality ${p.formality}`
  ).join('\n\n');

  const lensSummaries = HSI_LENS_REGISTRY.map(l =>
    `Lens: ${l.lens} | Category: ${l.category} | Visual: ${l.visualLabel} | Measures: ${l.why}`
  ).join('\n');

  const employeeSummaries = employees.length > 0
    ? employees.map(e => {
        const profile = PI_PROFILES.find(p => p.id === e.profileId);
        return `Employee: ${e.name} | Position: ${e.position} | Depot: ${e.depot} | Completed PI Profile: ${profile?.name || 'Unknown'} (${profile?.tagline || ''})`;
      }).join('\n')
    : 'No employee PI profiles have been added yet.';

  return `You are the PI Crosswalk Assistant for a single-user internal behavioral translation workspace.

The employee's completed Predictive Index result is the source assessment. The application translates that PI profile and its Dominance, Extraversion, Patience, and Formality pattern into directional interpretations across related frameworks.

=== CROSSWALK MODEL ===
Source: ${CROSSWALK_MODEL.sourceValue}
Method: ${CROSSWALK_MODEL.methodValue}
Output: ${CROSSWALK_MODEL.outputValue}
Boundary: ${CROSSWALK_MODEL.boundary}

Rules:
${CROSSWALK_AI_RULES.map(rule => `- ${rule}`).join('\n')}
- Be direct, practical, and specific.
- Do not invent employee facts that were not provided.
- Where a translation is directional or approximate, explain the strongest PI traits driving it.
- Separate the source PI result from the derived framework interpretation.

=== 17 PI SOURCE PROFILES ===
${profileSummaries}

=== ${HSI_LENS_REGISTRY.length} CROSSWALK LENSES ===
${lensSummaries}

=== EMPLOYEE PI PROFILES ===
${employeeSummaries}`;
}

async function readApiError(res) {
  try {
    const data = await res.json();
    return data?.message || data?.error || JSON.stringify(data);
  } catch {
    return await res.text();
  }
}

export default function AITab({ employees = [] }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Ask me to translate a completed PI profile into Big Five, HEXACO, Hogan, EQ-i, DISC, or another lens. I will keep the PI result separate from the derived crosswalk interpretation.',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    setInput('');
    setMessages(m => [...m, { role: 'user', text }]);
    setLoading(true);

    const systemCtx = buildContext(employees);
    const history = messages.map(m => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: m.text,
    }));
    const body = JSON.stringify({
      system: systemCtx,
      messages: [...history, { role: 'user', content: text }],
    });

    try {
      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body,
        signal: AbortSignal.timeout(35000),
      });

      if (!res.ok) {
        const apiError = await readApiError(res);
        throw new Error(apiError || `API error ${res.status}`);
      }

      const data = await res.json();
      const providerNote = data.source === 'fallback' && data.providerErrors?.length
        ? `\n\nProvider errors:\n${data.providerErrors.map(error => `- ${error}`).join('\n')}`
        : '';

      setMessages(m => [
        ...m,
        {
          role: 'assistant',
          text: `${data.reply || 'No reply returned.'}${providerNote}`,
        },
      ]);
    } catch (err) {
      const message = err?.name === 'TimeoutError'
        ? 'The AI request timed out after 35 seconds. The app is reachable, but the provider call is taking too long.'
        : `AI request failed: ${err?.message || 'Unknown error'}`;
      setMessages(m => [...m, { role: 'assistant', text: message }]);
    } finally {
      setLoading(false);
    }
  }

  function onKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <div className="flex h-[calc(100vh-200px)] min-h-[500px] flex-col">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-white">PI Crosswalk Assistant</h1>
        <p className="mt-1 text-sm text-white/40">
          Uses completed PI profiles as the source for cross-framework behavioral translations
        </p>
      </div>

      <div className="mb-4 rounded-2xl border border-sky-400/20 bg-sky-500/10 px-4 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-sky-200/70">
          Translation basis
        </p>
        <p className="mt-1 text-sm leading-6 text-white/70">
          Completed PI result → PI factor pattern → trait correspondence → cross-framework interpretation
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/50">
          {PI_PROFILES.length} PI source profiles
        </span>
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/50">
          {HSI_LENS_REGISTRY.length} crosswalk lenses
        </span>
        {employees.length > 0 && (
          <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            {employees.length} employee PI profile{employees.length !== 1 ? 's' : ''} loaded
          </span>
        )}
      </div>

      <div className="flex-1 overflow-y-auto rounded-3xl border border-white/10 bg-white/[0.03] p-5 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={cx('flex gap-3', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
            {msg.role === 'assistant' && (
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/20 mt-0.5">
                <Bot size={15} className="text-sky-300"/>
              </div>
            )}
            <div
              className={cx(
                'max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6',
                msg.role === 'user'
                  ? 'bg-sky-500/20 text-white'
                  : 'border border-white/10 bg-white/[0.05] text-white/85'
              )}
            >
              {msg.text}
            </div>
            {msg.role === 'user' && (
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 mt-0.5">
                <User size={15} className="text-white/60"/>
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="flex gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/20">
              <Bot size={15} className="text-sky-300"/>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3">
              <div className="flex gap-1">
                <span className="h-2 w-2 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '0ms' }}/>
                <span className="h-2 w-2 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '150ms' }}/>
                <span className="h-2 w-2 rounded-full bg-white/30 animate-bounce" style={{ animationDelay: '300ms' }}/>
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef}/>
      </div>

      <div className="mt-4 flex gap-3">
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={onKey}
          placeholder="Ask how a PI profile translates into another framework…"
          rows={1}
          className="flex-1 resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-sky-400/40"
        />
        <button
          type="button"
          onClick={send}
          disabled={!input.trim() || loading}
          className={cx(
            'flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition',
            input.trim() && !loading
              ? 'border-sky-400/40 bg-sky-500/20 text-white hover:bg-sky-500/30'
              : 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed'
          )}
          aria-label="Send crosswalk question"
        >
          <Send size={16}/>
        </button>
      </div>
    </div>
  );
}
