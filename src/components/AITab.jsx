import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User } from 'lucide-react';
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

export default function AITab({ employees = [] }) {
  const [messages, setMessages] = useState([
    { role: 'assistant', text: "Ask me anything about PI profiles, lenses, or your employees. I have full access to all 17 profiles and 104 assessment lenses." }
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

    try {
      const systemCtx = buildContext(employees);
      const history = messages.map(m => ({ role: m.role === 'assistant' ? 'assistant' : 'user', content: m.text }));

      const res = await fetch('/api/ai-chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ system: systemCtx, messages: [...history, { role: 'user', content: text }] }),
      });

      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      setMessages(m => [...m, { role: 'assistant', text: data.reply }]);
    } catch (err) {
      setMessages(m => [...m, { role: 'assistant', text: "Sorry, I couldn't reach the AI right now. Make sure the backend is running." }]);
    }
    setLoading(false);
  }

  function onKey(e) { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send(); } }

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
      </div>

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
              'max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-6',
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
          placeholder="Ask about any PI profile, lens, or employee…"
          rows={1}
          className="flex-1 resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-sm text-white outline-none placeholder:text-white/25 focus:border-sky-400/40"
        />
        <button type="button" onClick={send} disabled={!input.trim() || loading}
          className={cx('flex items-center gap-2 rounded-2xl border px-4 py-3 text-sm font-semibold transition',
            input.trim() && !loading
              ? 'border-sky-400/40 bg-sky-500/20 text-white hover:bg-sky-500/30'
              : 'border-white/10 bg-white/5 text-white/30 cursor-not-allowed')}>
          <Send size={16}/>
        </button>
      </div>
    </div>
  );
}
