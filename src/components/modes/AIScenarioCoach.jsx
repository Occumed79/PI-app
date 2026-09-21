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

async function getAIResponse(scenario, profile) {
  const response = await fetch('/api/ai/scenario-analysis', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      scenario,
      analysisGoal: 'Give practical, profile-aware management guidance tied to the completed PI baseline without inventing unprovided context.',
      employeeProfile: {
        name: profile.name,
        profileName: profile.name,
        piProfileId: profile.id,
        profileId: profile.id,
        factors: {
          dominance: profile.dominance,
          extraversion: profile.extraversion,
          patience: profile.patience,
          formality: profile.formality,
        },
        contextOverlays: [],
      },
    }),
  });

  if (!response.ok) {
    const body = await response.json().catch(() => null);
    throw new Error(body?.message || `AI scenario request failed: ${response.status}`);
  }

  const data = await response.json();
  if (!data?.analysis) throw new Error('The AI service returned no usable scenario analysis.');
  return data;
}

function scenarioAnalysisToSections(analysis = {}) {
  const list = value => Array.isArray(value) ? value.filter(Boolean) : [];
  const numbered = value => list(value).map((item, index) => `${index + 1}. ${item}`).join('\n');

  return {
    read: String(analysis.summary || ''),
    why: [
      ...list(analysis.sourcePiSignals),
      ...list(analysis.crosswalkInterpretations),
      ...list(analysis.alternativeExplanations),
    ].join('\n\n'),
    action: numbered(analysis.practicalApplications),
    avoid: list(analysis.limitations).map(item => `• ${item}`).join('\n'),
  };
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function AIScenarioCoach({ profile: initialProfile }) {
  const [scenario, setScenario] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(initialProfile || '');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [provider, setProvider] = useState(null);

  const handleAnalyze = async () => {
    if (!scenario || !selectedProfile) return;
    const profile = PI_PROFILES.find(p => p.id === selectedProfile || p.name.toLowerCase() === selectedProfile.toLowerCase());
    if (!profile) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const result = await getAIResponse(scenario, profile);
      setResponse(scenarioAnalysisToSections(result.analysis));
      setProvider(result.source ? result.source.charAt(0).toUpperCase() + result.source.slice(1) : 'AI');
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
