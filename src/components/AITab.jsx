import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, AlertTriangle } from 'lucide-react';
import { PI_PROFILES } from '../data/profiles.js';
import { HSI_LENS_REGISTRY } from '../data/hsiLensRegistry.js';

function cx(...c) { return c.filter(Boolean).join(' '); }

// Build system context from raw data
function buildContext(employees) {
  const profileSummaries = PI_PROFILES.map(p =>
    `Profile: ${p.name} (${p.group}) — "${p.tagline}"\n  Short: ${p.short}\n  Strengths: ${p.strengths.join(', ')}\n  Watch outs: ${p.traps.join(', ')}\n  Needs: ${p.needs.join(', ')}`
  ).join('\n\n');

  const lensSummaries = HSI_LENS_REGISTRY.map(l =>
    `Lens: ${l.lens} | Category: ${l.category} | Visual: ${l.visualLabel} | Measures: ${l.why}`
  ).join('\n');

  const employeeSummaries = employees.length > 0
    ? employees.map(e => {
        const profile = PI_PROFILES.find(p => p.id === e.profileId);
        return `Employee: ${e.name} | Position: ${e.position} | Depot: ${e.depot} | PI Profile: ${profile?.name || 'Unknown'} (${profile?.tagline || ''})`;
      }).join('\n')
    : 'No employees have been added yet.';

  return `You are an expert in the Predictive Index (PI) behavioral assessment system and human performance psychology. You have full access to the following data:

=== 17 PI PROFILES ===
${profileSummaries}

=== 104 ASSESSMENT LENSES ===
${lensSummaries}

=== EMPLOYEE PROFILES ===
${employeeSummaries}

When asked about an employee by name, use their PI profile data to answer. Be direct, insightful, and practical. Do not make up data that hasn't been provided.`;
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
    { role: 'assistant', text: "Ask me anything about PI profiles, lenses, or your employees. I have full access to all 17 profiles and 104 assessment lenses." }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [aiConfigured, setAiConfigured] = useState(true);
  const [checkingConfig, setCheckingConfig] = useState(true);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Check if AI is configured on mount
  useEffect(() => {
    async function checkAiConfig() {
      try {
        const res = await fetch('/api/health', { signal: AbortSignal.timeout(5000) });
        if (res.ok) {
          const data = await res.json();
          setAiConfigured(!!data.aiConfigured);
        }
      } catch (err) {
        console.warn('Could not check AI configuration:', err);
        setAiConfigured(false);
      } finally {
        setCheckingConfig(false);
      }
    }
    checkAiConfig();
  }, []);

  async function send() {
    const text = input.trim();
    if (!text || loading) return;

    setInput('');
    setMessages(m => [...m, { role: 'user', text }]);
    setLoading(true);

    const systemCtx = buildContext(employees);
    const history = messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.text }));
    const body = JSON.stringify({ system: systemCtx, messages: [...history, { role: 'user', content: text }] });

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
      setMessages(m => [...m, { role: 'assistant', text: `${data.reply || 'No reply returned.'}${providerNote}` }]);
    } catch (err) {
      const message = err?.name === 'TimeoutError'
        ? 'The AI request timed out after 35 seconds. The app is reachable, but the provider call is taking too long.'
        : `AI request failed: ${err?.message || 'Unknown error'}`;
      // Restore user input if request failed
      setInput(text);
      setMessages(m => [...m, { role: 'assistant', text: message }]);
    } finally {
      setLoading(false);
    }
  }

  function onKey(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }

  if (checkingConfig) {
    return (
      <div className="flex h-[calc(100vh-200px)] min-h-[500px] flex-col items-center justify-center">
        <div className="text-center">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/20 mb-4">
            <Bot size={18} className="text-sky-300 animate-pulse"/>
          </div>
          <p className="text-white/60">Initializing AI assistant...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-[calc(100vh-200px)] min-h-[500px] flex-col">
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-white">AI Assistant</h1>
        <p className="mt-1 text-sm text-white/40">
          Full access to all PI profiles, 104 lenses, and your employee data
        </p>
      </div>

      {/* Context pills */}
      <div className="mb-4 flex flex-wrap gap-2">
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/50">
          {PI_PROFILES.length} PI profiles
        </span>
        <span className="rounded-full border border-white/10 bg-white/8 px-3 py-1 text-xs text-white/50">
          {HSI_LENS_REGISTRY.length} lenses
        </span>
        {employees.length > 0 && (
          <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
            {employees.length} employee{employees.length !== 1 ? 's' : ''} loaded
          </span>
        )}
        {!aiConfigured && (
          <span className="rounded-full border border-amber-400/20 bg-amber-500/10 px-3 py-1 text-xs text-amber-300 flex items-center gap-1">
            <AlertTriangle size={12}/>AI not configured
          </span>
        )}
      </div>

      {/* AI Not Configured Banner */}
      {!aiConfigured && (
        <div className="mb-4 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4">
          <div className="flex gap-3">
            <AlertTriangle size={20} className="flex-shrink-0 text-amber-300 mt-0.5"/>
            <div>
              <p className="font-semibold text-amber-200 text-sm">AI is not configured in this environment.</p>
              <p className="text-xs text-amber-200/70 mt-1">To enable AI features, add GEMINI_API_KEY or GROQ_API_KEY to Render environment variables.</p>
            </div>
          </div>
        </div>
      )}

      {/* Messages */}
      <div className="flex-1 overflow-y-auto rounded-3xl border border-white/10 bg-white/[0.03] p-5 space-y-4">
        {messages.map((msg, i) => (
          <div key={i} className={cx('flex gap-3', msg.role === 'user' ? 'justify-end' : 'justify-start')}>
            {msg.role === 'assistant' && (
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-2xl bg-sky-500/20 mt-0.5">
                <Bot size={15} className="text-sky-300"/>
              </div>
            )}
            <div className={cx(
              'max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-6',
              msg.role === 'user'
                ? 'bg-sky-500/20 text-white'
                : 'border border-white/10 bg-white/[0.05] text-white/85'
            )}>
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
                <span className="h-2 w-2 rounded-full bg-white/30 animate-bounce" style={{animationDelay:'0ms'}}/>
                <span className="h-2 w-2 rounded-full bg-white/30 animate-bounce" style={{animationDelay:'150ms'}}/>
                <span className="h-2 w-2 rounded-full bg-white/30 animate-bounce" style={{animationDelay:'300ms'}}/>
              </div>
            </div>
          </div>
        )}
        <div ref={bottomRef}/>
      </div>

      {/* Input */}
      <div className="mt-4 flex gap-3">
        <textarea
          value={input}
          onChange={e=>setInput(e.target.value)}
          onKeyDown={onKey}
          disabled={!aiConfigured}
          placeholder={aiConfigured ? "Ask about any PI profile, lens, or employee…" : "AI is not configured. Cannot send messages."}
          rows={1}
          className={cx("flex-1 resize-none rounded-2xl border bg-white/[0.05] px-4 py-3 text-sm outline-none placeholder:text-white/25 focus:border-sky-400/40",
            aiConfigured 
              ? "border-white/10 text-white cursor-auto" 
              : "border-white/10 text-white/40 cursor-not-allowed")}
        />
        <button type="button" onClick={send} disabled={!input.trim() || loading || !aiConfigured}
          className={cx('flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition',
            input.trim() && !loading && aiConfigured
              ? 'border-sky-400/40 bg-sky-500/20 text-white hover:bg-sky-500/30'
              : 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed')}>
          <Send size={16}/>
        </button>
      </div>
    </div>
  );
}
