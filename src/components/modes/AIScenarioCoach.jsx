import React, { useState } from 'react';
import { Sparkles, Send, ChevronDown, RotateCcw, Lightbulb, AlertTriangle, CheckCircle } from 'lucide-react';
import { PI_PROFILES } from '../../data/profiles';

const SCENARIO_TEMPLATES = [
  "My employee missed a deadline and seemed distant in our last check-in.",
  "Two team members are in open conflict and it's affecting the whole team.",
  "A high performer has gone quiet and seems disengaged.",
  "Someone is resisting a major org change and becoming vocal about it.",
  "A new hire is struggling to integrate with the team's working style.",
  "My direct report is brilliant but keeps creating interpersonal friction.",
];

function getCoachResponse(scenario, profileId) {
  const profile = PI_PROFILES.find(p => p.id === profileId);
  if (!profile) return null;

  const responses = {
    analyzer: {
      read: `An Analyzer going quiet after a missed deadline is almost certainly in a self-critical loop. They set high internal standards — missing a deadline feels like a personal failure of discipline, not just a scheduling issue. The distance isn't about you; it's about them processing the gap between their standards and their performance.`,
      approach: [
        "Lead with facts, not feelings. Open with the objective situation: 'I noticed the deadline was missed and I want to understand what happened.'",
        "Give them time to explain their reasoning. Analyzers need to walk you through their logic — let them.",
        "Avoid praise-first openers. They'll feel managed. Be direct and treat them as a peer solving a problem.",
        "Ask what they'd change next time before offering your own input. Their self-diagnosis is usually accurate."
      ],
      avoid: [
        "Don't use emotional language or try to reassure them about feelings first.",
        "Don't skip to solutions before they've fully explained their analysis.",
        "Don't hover or check in too frequently afterwards — it signals distrust."
      ],
      signal: "If they're still distant after a direct conversation, there may be a larger problem they haven't surfaced. Ask: 'Is there something about the work or the environment that's getting in the way?'"
    },
    captain: {
      read: `A Captain going quiet after a deadline miss is a yellow flag. They normally lead loudly — silence usually means either they feel their authority was undermined somewhere in the project, or they're already mentally moving on to the next thing and have written this off. The risk: they won't flag the root cause unless directly asked.`,
      approach: [
        "Be direct and match their energy. Don't soft-pedal the conversation.",
        "Open with the outcome, not the process: 'The deadline was missed — I want to understand what happened from your side.'",
        "Give them room to lead the debrief. They'll have a strong POV on what went wrong — usually pointing outward.",
        "If they're right about an obstacle, acknowledge it. They need to know you see what they see."
      ],
      avoid: [
        "Don't micromanage the debrief or walk in with a prepared list of everything they did wrong.",
        "Don't let the conversation become about compliance. They'll shut down.",
        "Don't assign blame in a group setting — handle it directly and privately."
      ],
      signal: "Continued silence from a Captain after a direct conversation = deeper disengagement. Check whether their authority or impact in the role has been quietly eroded."
    },
    collaborator: {
      read: `A Collaborator who misses a deadline and goes distant is almost certainly absorbing team stress and feeling like they've let people down. The distance isn't defensiveness — it's shame-based withdrawal. They're likely aware of the impact and already struggling with it internally.`,
      approach: [
        "Open by acknowledging the relationship, not the failure: 'I wanted to check in — I know you care a lot about delivering for the team.'",
        "Create safety explicitly: 'I'm not here to assign blame. I want to understand what happened so we can fix the conditions.'",
        "Ask about obstacles, not excuses: 'What got in the way?' not 'Why didn't you deliver?'",
        "Close by affirming your confidence in them: they need to hear it's not a verdict on their value."
      ],
      avoid: [
        "Don't lead with the business impact — they already feel it. It will deepen the shame.",
        "Don't use performance language ('accountability', 'deliverables') in the first half of the conversation.",
        "Don't end without a clear next step — ambiguity will create more anxiety."
      ],
      signal: "If they're still withdrawn after a warm conversation, there's likely a team dynamic or interpersonal conflict that's draining them. Ask: 'How are things feeling with the team right now?'"
    },
    default: {
      read: `A ${profile.name} (${profile.tagline}) missing a deadline and going quiet reflects their core behavioral pattern under stress: ${profile.traps[0]?.toLowerCase()}. Understanding this is the first step to navigating the conversation correctly.`,
      approach: [
        `Calibrate your opening to their drive scores. ${profile.dominance > 60 ? 'Be direct — they respect directness.' : 'Be warm first — they need to feel safe.'}`,
        `${profile.formality > 60 ? 'Reference the process and what the expectations were.' : 'Keep it conversational and human — avoid corporate language.'}`,
        `${profile.patience < 35 ? 'Keep it concise — they get frustrated with long process-heavy conversations.' : 'Give them time to respond — they think before they speak.'}`,
        "Ask about obstacles before drawing conclusions. Get their read first."
      ],
      avoid: [
        `${profile.extraversion < 35 ? "Don't hold this conversation in a group or public setting." : "Don't address this purely by text — they process better in conversation."}`,
        `${profile.dominance > 65 ? "Don't come in with a predetermined conclusion — they'll resist it." : "Don't be ambiguous about what you need from them."}`,
        "Don't skip to solutions before they've had space to explain."
      ],
      signal: `Watch for ${profile.traps[0]?.toLowerCase()} as a stress signal that the conversation isn't landing. Adjust your approach if you see it.`
    }
  };

  return responses[profileId] || responses.default;
}

export default function AIScenarioCoach({ profile: initialProfile }) {
  const [scenario, setScenario] = useState('');
  const [selectedProfile, setSelectedProfile] = useState(initialProfile || '');
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleAnalyze = () => {
    if (!scenario || !selectedProfile) return;
    setLoading(true);
    setTimeout(() => {
      setResponse(getCoachResponse(scenario, selectedProfile));
      setLoading(false);
    }, 900);
  };

  const reset = () => { setResponse(null); setScenario(''); };

  const profileObj = PI_PROFILES.find(p => p.id === selectedProfile);

  return (
    <div className="h-full overflow-y-auto px-8 py-8 fade-in">
      <div className="max-w-4xl mx-auto">

        <div className="mb-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center">
              <Sparkles size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">AI Scenario Coach</h1>
              <p className="text-slate-400 text-sm">Describe a situation — get profile-aware intelligence for Andy</p>
            </div>
          </div>
        </div>

        {!response ? (
          <>
            {/* Profile Selector */}
            <div className="mb-4">
              <label className="text-xs text-slate-500 block mb-2">Who is this about?</label>
              <div className="grid grid-cols-4 gap-2">
                {PI_PROFILES.map(p => (
                  <button key={p.id} onClick={() => setSelectedProfile(p.id)}
                    style={{borderColor: selectedProfile===p.id ? p.color : 'transparent', backgroundColor: selectedProfile===p.id ? `${p.color}15` : 'rgba(255,255,255,0.03)'}}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs border transition-all text-left">
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{backgroundColor: p.color}} />
                    <span className={selectedProfile===p.id ? 'text-white' : 'text-slate-500'}>{p.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scenario Input */}
            <div className="mb-4">
              <label className="text-xs text-slate-500 block mb-2">Describe the situation</label>
              <textarea value={scenario} onChange={e => setScenario(e.target.value)}
                placeholder="e.g. My employee missed a deadline and seemed distant in our last check-in..."
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-slate-300 placeholder-slate-600 focus:outline-none focus:border-amber-400/40 resize-none" />
            </div>

            {/* Templates */}
            <div className="mb-6">
              <p className="text-xs text-slate-600 mb-2">Quick scenarios</p>
              <div className="flex flex-wrap gap-2">
                {SCENARIO_TEMPLATES.map((t, i) => (
                  <button key={i} onClick={() => setScenario(t)}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-slate-500 hover:text-slate-300 hover:bg-white/10 border border-white/5 transition-all">
                    {t.length > 50 ? t.slice(0,50)+'…' : t}
                  </button>
                ))}
              </div>
            </div>

            <button onClick={handleAnalyze} disabled={!scenario || !selectedProfile || loading}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 text-white font-medium text-sm hover:opacity-90 transition-all disabled:opacity-40 disabled:cursor-not-allowed">
              {loading ? (
                <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />Analyzing...</>
              ) : (
                <><Send size={16} />Get Profile-Aware Guidance</>
              )}
            </button>
          </>
        ) : (
          <div className="fade-in space-y-4">

            {/* Context bar */}
            {profileObj && (
              <div className="glass rounded-xl p-4 border border-white/5 flex items-center gap-3">
                <span className="w-3 h-3 rounded-full" style={{backgroundColor: profileObj.color}} />
                <div>
                  <span className="text-sm font-semibold text-white">{profileObj.name}</span>
                  <span className="text-slate-500 text-xs ml-2">— {profileObj.tagline}</span>
                </div>
                <button onClick={reset} className="ml-auto flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors">
                  <RotateCcw size={12} />New scenario
                </button>
              </div>
            )}

            {/* Scenario echo */}
            <div className="glass rounded-xl p-4 border border-amber-400/15">
              <p className="text-xs text-amber-400 font-medium mb-1">Situation</p>
              <p className="text-sm text-slate-300 italic">"{scenario}"</p>
            </div>

            {/* How to read this */}
            <div className="glass rounded-xl p-5 border border-indigo-400/20">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={15} className="text-indigo-400" />
                <span className="text-sm font-semibold text-indigo-400">How to Read This</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{response.read}</p>
            </div>

            {/* Approach */}
            <div className="glass rounded-xl p-5 border border-emerald-400/20">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle size={15} className="text-emerald-400" />
                <span className="text-sm font-semibold text-emerald-400">How to Approach It</span>
              </div>
              <ol className="space-y-2">
                {response.approach.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm text-slate-300">
                    <span className="text-emerald-400 font-bold flex-shrink-0">{i+1}.</span>
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Avoid */}
            <div className="glass rounded-xl p-5 border border-amber-400/15">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle size={15} className="text-amber-400" />
                <span className="text-sm font-semibold text-amber-400">What to Avoid</span>
              </div>
              <ul className="space-y-2">
                {response.avoid.map((a, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-400">
                    <span className="text-amber-400 flex-shrink-0">•</span>
                    <span className="leading-relaxed">{a}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Signal */}
            <div className="glass rounded-xl p-5 border border-purple-400/20">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={15} className="text-purple-400" />
                <span className="text-sm font-semibold text-purple-400">Watch For This Signal</span>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed">{response.signal}</p>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}
