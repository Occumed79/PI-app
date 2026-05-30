import React, { useState } from 'react';
import { Sparkles, Send, RotateCcw, Lightbulb, AlertTriangle, CheckCircle, Loader } from 'lucide-react';
import { PI_PROFILES } from '../../data/profiles';

const SCENARIO_TEMPLATES = [
  "My employee missed a deadline and seemed distant in our last check-in.",
  "Two team members are in open conflict and it's affecting the whole team.",
  "A high performer has gone quiet and seems disengaged.",
  "Someone is resisting a major org change and becoming vocal about it.",
  "A new hire is struggling to integrate with the team's working style.",
  "My direct report is brilliant but keeps creating interpersonal friction.",
];

// ── API helpers ───────────────────────────────────────────────────────────────

async function callGemini(prompt) {
  const key = import.meta.env.VITE_GEMINI_API_KEY;
  if (!key) throw new Error('No Gemini key');
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    }
  );
  if (!res.ok) throw new Error(`Gemini ${res.status}`);
  const data = await res.json();
  return data.candidates?.[0]?.content?.parts?.[0]?.text || '';
}

async function callGroq(prompt) {
  const key = import.meta.env.VITE_GROQ_API_KEY;
  if (!key) throw new Error('No Groq key');
  const res = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: 'llama-3.3-70b-versatile',
      messages: [{ role: 'user', content: prompt }],
      temperature: 0.7,
      max_tokens: 1200,
    }),
  });
  if (!res.ok) throw new Error(`Groq ${res.status}`);
  const data = await res.json();
  return data.choices?.[0]?.message?.content || '';
}

async function getAIResponse(prompt) {
  // Try Gemini first, fall back to Groq
  try {
    const text = await callGemini(prompt);
    if (text) return { text, provider: 'Gemini' };
  } catch (e) {
    console.warn('Gemini failed, trying Groq:', e.message);
  }
  try {
    const text = await callGroq(prompt);
    if (text) return { text, provider: 'Groq' };
  } catch (e) {
    console.warn('Groq also failed:', e.message);
  }
  return null;
}

function buildPrompt(scenario, profile) {
  return `You are a thoughtful, evidence-informed management coach specializing in behavioral psychology and workplace dynamics. You are helping a manager understand and navigate a situation involving a team member.

TEAM MEMBER PROFILE — ${profile.name} (${profile.group} group):
- Tagline: ${profile.tagline}
- Summary: ${profile.short}
- Behavioral drives: Dominance ${profile.dominance}/100, Extraversion ${profile.extraversion}/100, Patience ${profile.patience}/100, Formality ${profile.formality}/100
- Core needs: ${profile.needs.join(', ')}
- Strengths: ${profile.strengths.join(', ')}
- Common traps/misreads: ${profile.traps.join(', ')}

MANAGER'S SITUATION:
"${scenario}"

Please provide a structured, practical response with these four sections. Be direct, specific, and avoid generic advice — everything should connect back to this person's specific profile pattern.

**How to Read This Person Right Now**
(2-3 sentences explaining what's likely happening internally for this profile type given this situation. What lens should the manager use?)

**Why This Happens With This Profile**
(2-3 sentences on the behavioral logic — why someone with these specific drives reacts this way to this type of situation)

**Best Manager Move**
(3-4 concrete, actionable steps the manager should take. Be specific — what to say, when, how)

**What NOT to Do**
(2-3 things that would likely backfire with this profile type in this situation)

Keep each section tight and practical. No vague motivational language. Write like a smart colleague who knows this person well, not a textbook.`;
}

function parseAIResponse(text) {
  // Parse structured sections from AI response
  const sections = {
    read: '',
    why: '',
    action: '',
    avoid: '',
  };

  const readMatch = text.match(/\*\*How to Read.*?\*\*\s*([\s\S]*?)(?=\*\*Why|\*\*Best|\*\*What|$)/i);
  const whyMatch = text.match(/\*\*Why This Happens.*?\*\*\s*([\s\S]*?)(?=\*\*Best|\*\*What|$)/i);
  const actionMatch = text.match(/\*\*Best Manager Move.*?\*\*\s*([\s\S]*?)(?=\*\*What|$)/i);
  const avoidMatch = text.match(/\*\*What NOT.*?\*\*\s*([\s\S]*?)(?=$)/i);

  sections.read = readMatch?.[1]?.trim() || text.split('\n\n')[0] || text.slice(0, 300);
  sections.why = whyMatch?.[1]?.trim() || '';
  sections.action = actionMatch?.[1]?.trim() || '';
  sections.avoid = avoidMatch?.[1]?.trim() || '';

  return sections;
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function AIScenarioCoach({ profile: initialProfile }) {
  const [scenario, setScenario] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(initialProfile || '');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [provider, setProvider] = useState(null);

  const hasKeys = !!(import.meta.env.VITE_GEMINI_API_KEY || import.meta.env.VITE_GROQ_API_KEY);

  const handleAnalyze = async () => {
    if (!scenario || !selectedProfile) return;
    const profile = PI_PROFILES.find(p => p.id === selectedProfile || p.name.toLowerCase() === selectedProfile.toLowerCase());
    if (!profile) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      if (hasKeys) {
        const result = await getAIResponse(buildPrompt(scenario, profile));
        if (result) {
          setResponse(parseAIResponse(result.text));
          setProvider(result.provider);
        } else {
          setError('Both AI providers failed to respond. Check your API keys in settings.');
        }
      } else {
        // Fallback: show configuration prompt
        setError('API keys not configured. Add VITE_GEMINI_API_KEY and/or VITE_GROQ_API_KEY to your .env file to enable real AI responses.');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => { setResponse(null); setScenario(''); setError(null); setProvider(null); };

  const profileObj = PI_PROFILES.find(p => p.id === selectedProfile || p.name.toLowerCase() === selectedProfile.toLowerCase());

  return (
    <div className="fade-in">
      <div className="max-w-4xl mx-auto px-2 py-2">

        <div className="mb-6 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center flex-shrink-0">
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">AI Scenario Coach</h1>
            <p className="text-white/50 text-sm">Describe a situation — get profile-aware intelligence</p>
          </div>
          {provider && (
            <span className="ml-auto text-xs px-2.5 py-1 rounded-full bg-white/10 text-white/60 border border-white/10">
              Powered by {provider}
            </span>
          )}
        </div>

        {!hasKeys && !response && (
          <div className="mb-5 rounded-2xl border border-amber-400/30 bg-amber-500/10 p-4">
            <div className="flex items-start gap-2">
              <AlertTriangle size={15} className="text-amber-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-amber-400 mb-1">API keys not configured</p>
                <p className="text-xs text-amber-300/70">Add <code className="bg-black/30 px-1 rounded">VITE_GEMINI_API_KEY</code> and/or <code className="bg-black/30 px-1 rounded">VITE_GROQ_API_KEY</code> to your <code className="bg-black/30 px-1 rounded">.env</code> file to enable real AI responses. Both APIs are free.</p>
              </div>
            </div>
          </div>
        )}

        {!response ? (
          <>
            {/* Profile Selector */}
            <div className="mb-5">
              <label className="text-xs text-white/40 block mb-2 uppercase tracking-wide">Who is this about?</label>
              <div className="grid grid-cols-4 gap-2">
                {PI_PROFILES.map(p => (
                  <button key={p.id} onClick={() => setSelectedProfile(p.id)}
                    style={{
                      borderColor: selectedProfile === p.id ? p.color : 'rgba(255,255,255,0.08)',
                      backgroundColor: selectedProfile === p.id ? `${p.color}18` : 'rgba(255,255,255,0.03)'
                    }}
                    className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs border transition-all text-left hover:bg-white/[0.06]">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
                    <span className={selectedProfile === p.id ? 'text-white font-medium' : 'text-white/50'}>{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scenario Input */}
            <div className="mb-4">
              <label className="text-xs text-white/40 block mb-2 uppercase tracking-wide">Describe the situation</label>
              <textarea
                value={scenario} onChange={e => setScenario(e.target.value)}
                placeholder="e.g. My employee missed a deadline and seemed distant in our last check-in..."
                rows={4}
                className="w-full rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-amber-400/40 resize-none"
              />
            </div>

            {/* Templates */}
            <div className="mb-6">
              <p className="text-xs text-white/30 mb-2">Quick scenarios</p>
              <div className="flex flex-wrap gap-2">
                {SCENARIO_TEMPLATES.map((t, i) => (
                  <button key={i} onClick={() => setScenario(t)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/45 hover:text-white/80 hover:bg-white/10 border border-white/8 transition-all">
                    {t.length > 52 ? t.slice(0, 52) + '…' : t}
                  </button>
                ))}
              </div>
            </div>

            {error && (
              <div className="mb-4 rounded-2xl border border-red-400/30 bg-red-500/10 p-4">
                <div className="flex items-start gap-2">
                  <AlertTriangle size={14} className="text-red-400 mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-red-300">{error}</p>
                </div>
              </div>
            )}

            <button
              onClick={handleAnalyze}
              disabled={!scenario || !selectedProfile || loading}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium text-sm hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {loading ? (
                <><Loader size={16} className="animate-spin" />Analyzing with AI...</>
              ) : (
                <><Send size={16} />Get Profile-Aware Guidance</>
              )}
            </button>
          </>
        ) : (
          <div className="fade-in space-y-4">
            {/* Context bar */}
            {profileObj && (
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ backgroundColor: profileObj.color }} />
                <div>
                  <span className="text-sm font-semibold text-white">{profileObj.name}</span>
                  <span className="text-white/40 text-xs ml-2">— {profileObj.tagline}</span>
                </div>
                <button onClick={reset} className="ml-auto flex items-center gap-1.5 text-xs text-white/40 hover:text-white/70 transition-colors">
                  <RotateCcw size={12} />New scenario
                </button>
              </div>
            )}

            {/* Scenario echo */}
            <div className="rounded-2xl border border-amber-400/20 bg-amber-500/[0.07] p-4">
              <p className="text-xs text-amber-400 font-medium mb-1 uppercase tracking-wide">Situation</p>
              <p className="text-sm text-white/75 italic">"{scenario}"</p>
            </div>

            {/* How to Read */}
            {response.read && (
              <div className="rounded-2xl border border-indigo-400/25 bg-indigo-500/[0.07] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Lightbulb size={15} className="text-indigo-400" />
                  <span className="text-sm font-semibold text-indigo-400">How to Read This Person Right Now</span>
                </div>
                <p className="text-sm text-white/75 leading-relaxed whitespace-pre-wrap">{response.read}</p>
              </div>
            )}

            {/* Why */}
            {response.why && (
              <div className="rounded-2xl border border-violet-400/25 bg-violet-500/[0.07] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles size={15} className="text-violet-400" />
                  <span className="text-sm font-semibold text-violet-400">Why This Happens With This Profile</span>
                </div>
                <p className="text-sm text-white/75 leading-relaxed whitespace-pre-wrap">{response.why}</p>
              </div>
            )}

            {/* Best move */}
            {response.action && (
              <div className="rounded-2xl border border-emerald-400/25 bg-emerald-500/[0.07] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle size={15} className="text-emerald-400" />
                  <span className="text-sm font-semibold text-emerald-400">Best Manager Move</span>
                </div>
                <p className="text-sm text-white/75 leading-relaxed whitespace-pre-wrap">{response.action}</p>
              </div>
            )}

            {/* What NOT to do */}
            {response.avoid && (
              <div className="rounded-2xl border border-red-400/25 bg-red-500/[0.07] p-5">
                <div className="flex items-center gap-2 mb-3">
                  <AlertTriangle size={15} className="text-red-400" />
                  <span className="text-sm font-semibold text-red-400">What NOT to Do</span>
                </div>
                <p className="text-sm text-white/75 leading-relaxed whitespace-pre-wrap">{response.avoid}</p>
              </div>
            )}

            <button onClick={reset}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/10 bg-white/[0.04] text-sm text-white/60 hover:bg-white/[0.08] transition-all">
              <RotateCcw size={14} />New scenario
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
