import React, { useMemo, useState } from 'react';
import {
  AlertTriangle,
  BrainCircuit,
  CheckCircle2,
  ClipboardList,
  Compass,
  HelpCircle,
  Lightbulb,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';
import { signalGlassStaticLenses } from '../data/signalGlassStaticLenses.js';
import { profiles } from '../data/appProfiles.js';
import { loadSavedProfiles } from '../data/savedProfiles.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Card({ children, className = '' }) {
  return <div className={cx('rounded-3xl border border-white/10 bg-white/[0.07] shadow-2xl shadow-black/20 backdrop-blur-xl', className)}>{children}</div>;
}

function Pill({ children, className = '' }) {
  return <span className={cx('inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80', className)}>{children}</span>;
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-2 text-white shadow-lg"><Icon size={20} /></div>
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
        {subtitle && <p className="mt-1 max-w-4xl text-sm leading-6 text-white/60">{subtitle}</p>}
      </div>
    </div>
  );
}

function InsightList({ title, icon: Icon, items, tone = '' }) {
  return (
    <Card className={cx('h-full bg-black/15', tone)}>
      <div className="p-5">
        <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white/90"><Icon size={18} /> {title}</h3>
        <div className="grid gap-2">
          {(items || []).map((item, index) => (
            <div key={`${item}-${index}`} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-sm leading-5 text-white/70">
              {item}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function makeDefaultLensState() {
  return signalGlassStaticLenses.reduce((acc, lens, index) => {
    if (index < 12) acc[lens.id] = 'include';
    else if (index < 32) acc[lens.id] = 'estimated';
    else acc[lens.id] = 'unknown';
    return acc;
  }, {});
}

function statusTone(state) {
  if (state === 'include') return 'border-emerald-300/30 bg-emerald-500/10';
  if (state === 'estimated') return 'border-sky-300/30 bg-sky-500/10';
  if (state === 'unknown') return 'border-amber-300/30 bg-amber-500/10';
  return 'border-white/10 bg-white/[0.04] text-white/35';
}

export default function AIScenarioCoach({ profile }) {
  const [savedProfiles, setSavedProfiles] = useState(loadSavedProfiles);
  const [selectedSavedId, setSelectedSavedId] = useState('manual');
  const [employeeName, setEmployeeName] = useState('Working Profile A');
  const [role, setRole] = useState('Operations / leadership role');
  const incomingProfileName = profile ? profiles.find((item) => item.name.toLowerCase() === profile)?.name : null;
  const [baseProfileName, setBaseProfileName] = useState(incomingProfileName || 'Analyzer');
  const [managerGoal, setManagerGoal] = useState('Understand the behavior without judging the employee and identify a supportive next step.');
  const [scenario, setScenario] = useState('The employee seems frustrated when a process changes suddenly and asks for written clarification before moving forward. What might be happening, and how should a manager respond?');
  const [lensStates, setLensStates] = useState(makeDefaultLensState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [result, setResult] = useState(null);

  const baseProfile = profiles.find((item) => item.name === baseProfileName) || profiles[0];

  const profilePayload = useMemo(() => {
    const includedLenses = signalGlassStaticLenses.filter((lens) => lensStates[lens.id] === 'include').map((lens) => lens.lens);
    const estimatedLenses = signalGlassStaticLenses.filter((lens) => lensStates[lens.id] === 'estimated').map((lens) => lens.lens);
    const unknownLenses = signalGlassStaticLenses.filter((lens) => lensStates[lens.id] === 'unknown').map((lens) => lens.lens);
    const excludedLenses = signalGlassStaticLenses.filter((lens) => lensStates[lens.id] === 'exclude').map((lens) => lens.lens);

    return {
      employeeName,
      role,
      baseProfile,
      includedLenses,
      estimatedLenses,
      unknownLenses,
      excludedLenses,
      source: 'signalGlassStaticLenses.js uploaded lens library plus saved Employee Builder profile when selected',
      guardrail: 'Use as a support-first working profile. Do not diagnose, judge, or infer sensitive private context.',
    };
  }, [employeeName, role, baseProfile, lensStates]);

  function refreshSavedProfiles() {
    setSavedProfiles(loadSavedProfiles());
  }

  function loadSavedProfile(profileId) {
    setSelectedSavedId(profileId);
    if (profileId === 'manual') return;
    const saved = savedProfiles.find((item) => item.id === profileId);
    if (!saved) return;
    setEmployeeName(saved.employee?.name || 'Working Profile A');
    setRole(saved.employee?.role || 'Operations / leadership role');
    setBaseProfileName(saved.baseProfileName || 'Analyzer');
    setLensStates({ ...makeDefaultLensState(), ...(saved.lensStates || {}) });
    setResult(null);
    setError('');
  }

  async function analyzeScenario() {
    setLoading(true);
    setError('');
    setResult(null);

    try {
      const response = await fetch('/api/ai/scenario-analysis', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ scenario, managerGoal, employeeProfile: profilePayload }),
      });
      const data = await response.json();
      if (!response.ok || !data.ok) throw new Error(data.message || 'Scenario analysis failed.');
      setResult(data.analysis);
    } catch (err) {
      setError(err.message || 'Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  function updateLens(lensId, value) {
    setLensStates((current) => ({ ...current, [lensId]: value }));
  }

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-12 overflow-hidden">
        <div className="relative p-6">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="mb-3 flex flex-wrap gap-2">
                <Pill>AI Scenario Coach</Pill>
                <Pill>Can load saved profiles</Pill>
                <Pill>{signalGlassStaticLenses.length} uploaded lenses</Pill>
              </div>
              <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">Ask About a Workplace Scenario</h2>
              <p className="mt-4 max-w-4xl text-sm leading-6 text-white/65">
                Ask a question about a situation the app could not manually predict. The coach uses the saved working profile, included lenses, estimated lenses, and unknowns to provide cautious, supportive manager guidance.
              </p>
            </div>
            <div className="lg:col-span-4 rounded-3xl border border-white/10 bg-black/25 p-5">
              <div className="text-sm text-white/50">Selected base profile</div>
              <div className="mt-2 text-3xl font-bold text-white">{baseProfile.name}</div>
              <p className="mt-3 text-sm leading-6 text-white/55">{baseProfile.short}</p>
            </div>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={ClipboardList} title="Working Profile Context" subtitle="Load a saved profile from Employee Builder, or edit manually." />
          <label className="block">
            <span className="mb-2 block text-sm text-white/60">Saved employee profile</span>
            <div className="grid gap-2 sm:grid-cols-[1fr_auto]">
              <select value={selectedSavedId} onChange={(event) => loadSavedProfile(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none">
                <option value="manual">Manual / current profile</option>
                {savedProfiles.map((item) => <option key={item.id} value={item.id}>{item.employee?.name || 'Untitled'} — {item.baseProfileName}</option>)}
              </select>
              <button type="button" onClick={refreshSavedProfiles} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-semibold text-white/70 hover:bg-white/10">Refresh</button>
            </div>
          </label>
          <div className="mt-4 grid gap-4">
            <label className="block">
              <span className="mb-2 block text-sm text-white/60">Employee name or alias</span>
              <input value={employeeName} onChange={(event) => setEmployeeName(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-white/60">Role / context</span>
              <input value={role} onChange={(event) => setRole(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm text-white/60">Base PI-style profile</span>
              <select value={baseProfileName} onChange={(event) => setBaseProfileName(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none">
                {profiles.map((item) => <option key={item.name} value={item.name}>{item.name}</option>)}
              </select>
            </label>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-8">
        <div className="p-6">
          <SectionTitle icon={MessageSquareText} title="Scenario Question" subtitle="Describe the workplace behavior or situation. The coach will separate possible explanations from assumptions." />
          <label className="block">
            <span className="mb-2 block text-sm text-white/60">Scenario</span>
            <textarea value={scenario} onChange={(event) => setScenario(event.target.value)} rows={7} className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm leading-6 text-white outline-none placeholder:text-white/35" />
          </label>
          <label className="mt-4 block">
            <span className="mb-2 block text-sm text-white/60">Manager goal</span>
            <input value={managerGoal} onChange={(event) => setManagerGoal(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-white outline-none" />
          </label>
          <button type="button" onClick={analyzeScenario} disabled={loading} className="mt-5 inline-flex items-center gap-2 rounded-2xl border border-sky-300/30 bg-sky-500/15 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500/25 disabled:cursor-not-allowed disabled:opacity-50">
            <BrainCircuit className="h-4 w-4" />
            {loading ? 'Analyzing...' : 'Analyze Scenario'}
          </button>
          {error && <div className="mt-4 rounded-2xl border border-red-300/20 bg-red-500/10 p-4 text-sm text-red-100">{error}</div>}
        </div>
      </Card>

      <Card className="lg:col-span-12">
        <div className="p-6">
          <SectionTitle icon={Sparkles} title="Lens Signal Controls" subtitle="These controls now use your uploaded SignalGlass static lens library, not the old placeholder catalog." />
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {signalGlassStaticLenses.map((lens) => {
              const state = lensStates[lens.id] || 'unknown';
              return (
                <div key={lens.id} className="rounded-2xl border border-white/10 bg-black/20 p-3">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-semibold text-white">{lens.lens}</div>
                      <div className="mt-1 text-xs text-white/40">{lens.source || 'Uploaded source'}</div>
                    </div>
                    <Pill className={statusTone(state)}>{state}</Pill>
                  </div>
                  <div className="mt-3 grid grid-cols-4 gap-1">
                    {['include', 'estimated', 'unknown', 'exclude'].map((option) => (
                      <button key={option} type="button" onClick={() => updateLens(lens.id, option)} className={cx('rounded-lg border px-2 py-1 text-[10px]', state === option ? 'border-white/30 bg-white/20 text-white' : 'border-white/10 bg-white/[0.03] text-white/35')}>
                        {option.slice(0, 4)}
                      </button>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Card>

      {result && (
        <>
          <Card className="lg:col-span-12 border-emerald-300/20 bg-emerald-500/5">
            <div className="p-6">
              <SectionTitle icon={Lightbulb} title="Scenario Analysis" subtitle="Structured, cautious, support-first answer." />
              <p className="text-sm leading-6 text-white/72">{result.summary}</p>
              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-sm leading-6 text-white/62">
                <strong className="text-white">Conversation script: </strong>{result.conversationScript}
              </div>
              <div className="mt-3 text-xs text-white/45">{result.confidenceNote}</div>
            </div>
          </Card>

          <div className="lg:col-span-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            <InsightList title="Possible nonjudgmental explanations" icon={Lightbulb} items={result.possibleExplanations} />
            <InsightList title="Strongest profile signals" icon={CheckCircle2} items={result.strongestProfileSignals} />
            <InsightList title="Estimated or unknown factors" icon={HelpCircle} items={result.estimatedOrUnknownFactors} />
            <InsightList title="What not to assume" icon={AlertTriangle} items={result.whatNotToAssume} tone="border-amber-300/20 bg-amber-500/5" />
            <InsightList title="Supportive manager response" icon={Compass} items={result.supportiveManagerResponse} />
            <InsightList title="Follow-up questions" icon={MessageSquareText} items={result.followUpQuestions} />
          </div>
        </>
      )}

      {!result && (
        <div className="lg:col-span-12 grid gap-5 md:grid-cols-3">
          <InsightList title="What the coach receives" icon={ShieldCheck} items={[`${employeeName} / ${role}`, `Base profile: ${baseProfile.name}`, `${profilePayload.includedLenses.length} included lenses`, `${profilePayload.estimatedLenses.length} estimated lenses`]} />
          <InsightList title="Guardrails" icon={AlertTriangle} items={['Do not diagnose.', 'Do not treat lens inferences as facts.', 'Name unknowns instead of filling gaps.', 'Focus on manager support and work design.']} tone="border-amber-300/20 bg-amber-500/5" />
          <InsightList title="Best questions" icon={MessageSquareText} items={['What might explain this behavior without blaming the employee?', 'What support would reduce friction?', 'What should the manager not assume?', 'What follow-up questions should be asked?']} />
        </div>
      )}
    </div>
  );
}
