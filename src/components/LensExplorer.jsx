import React, { useMemo } from 'react';
import {
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from 'recharts';
import { Activity, AlertTriangle, BookOpen, Brain, CheckCircle2, Compass, Info, Layers3, Lightbulb, ShieldCheck, Sparkles, Target } from 'lucide-react';
import { evidenceFoundation, livedExperienceCategories } from '../data/lenses.js';

function cx(...classes) {
  return classes.filter(Boolean).join(' ');
}

function Card({ children, className = '' }) {
  return (
    <div className={cx('rounded-3xl border border-white/10 bg-white/[0.07] shadow-2xl shadow-black/20 backdrop-blur-xl', className)}>
      {children}
    </div>
  );
}

function Pill({ children, className = '' }) {
  return (
    <span className={cx('inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80', className)}>
      {children}
    </span>
  );
}

function SectionTitle({ icon: Icon, title, subtitle }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      <div className="rounded-2xl border border-white/10 bg-white/10 p-2 text-white shadow-lg">
        <Icon size={20} />
      </div>
      <div>
        <h2 className="text-xl font-semibold tracking-tight text-white">{title}</h2>
        {subtitle && <p className="mt-1 max-w-4xl text-sm leading-6 text-white/60">{subtitle}</p>}
      </div>
    </div>
  );
}

function scoreLabel(value) {
  if (value >= 76) return 'High';
  if (value >= 45) return 'Moderate';
  return 'Low';
}

function weightedBridge(profile, lens) {
  const weights = lens.factorWeights || {};
  return Object.entries(profile.scores).map(([factor, score]) => {
    const weight = weights[factor] ?? 0.5;
    const contribution = Math.round(score * weight);
    return { factor, score, weight: Math.round(weight * 100), contribution };
  });
}

function confidenceFromBridge(bridge) {
  const avg = bridge.reduce((sum, item) => sum + item.contribution, 0) / bridge.length;
  return Math.max(42, Math.min(88, Math.round(avg)));
}

function LensRadar({ bridge }) {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={bridge}>
          <PolarGrid stroke="rgba(255,255,255,.14)" />
          <PolarAngleAxis dataKey="factor" tick={{ fill: 'rgba(255,255,255,.62)', fontSize: 12 }} />
          <Radar name="PI score" dataKey="score" stroke="rgba(125,211,252,.95)" fill="rgba(125,211,252,.18)" fillOpacity={0.8} />
          <Radar name="Lens contribution" dataKey="contribution" stroke="rgba(217,70,239,.95)" fill="rgba(217,70,239,.20)" fillOpacity={0.75} />
          <Tooltip contentStyle={{ background: 'rgba(15,23,42,.95)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, color: '#fff' }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function LensBars({ bridge }) {
  return (
    <div className="h-60 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={bridge} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
          <XAxis dataKey="factor" tick={{ fill: 'rgba(255,255,255,.55)', fontSize: 11 }} />
          <YAxis domain={[0, 100]} tick={{ fill: 'rgba(255,255,255,.45)', fontSize: 11 }} />
          <Tooltip contentStyle={{ background: 'rgba(15,23,42,.95)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 16, color: '#fff' }} cursor={{ fill: 'rgba(255,255,255,.04)' }} />
          <Bar dataKey="contribution" radius={[10, 10, 4, 4]} fill="rgba(196,181,253,.82)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function InsightCard({ title, icon: Icon, children, tone = 'default' }) {
  const toneClass = tone === 'warning' ? 'border-amber-300/25 bg-amber-500/10' : tone === 'safe' ? 'border-emerald-300/25 bg-emerald-500/10' : 'border-white/10 bg-white/[0.055]';
  return (
    <div className={cx('rounded-3xl border p-5', toneClass)}>
      <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-white/90">
        <Icon size={18} /> {title}
      </div>
      <div className="text-sm leading-6 text-white/68">{children}</div>
    </div>
  );
}

function ItemGrid({ items }) {
  return (
    <div className="grid gap-2 sm:grid-cols-2">
      {(items || []).map((item) => (
        <div key={item} className="rounded-2xl border border-white/10 bg-black/20 p-3 text-sm leading-5 text-white/70">
          {item}
        </div>
      ))}
    </div>
  );
}

function LivedExperiencePanel() {
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-12 overflow-hidden border-fuchsia-300/20">
        <div className="relative p-6">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
          <div className="absolute -bottom-20 left-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" />
          <div className="relative">
            <SectionTitle
              icon={ShieldCheck}
              title="Lived Experience Context Library"
              subtitle="This tab exists to prevent exclusion. It shows how social context, culture, resources, neurotype, health, family systems, trauma exposure, and environmental demands can bend how someone presents at work. It must never be used to infer protected traits or score people by identity."
            />
            <div className="grid gap-3 md:grid-cols-3">
              <InsightCard title="Evidence-informed" icon={BookOpen} tone="safe">Grounded in established research areas, not invented workplace vibes.</InsightCard>
              <InsightCard title="Not diagnostic" icon={AlertTriangle} tone="warning">This does not diagnose trauma, disability, mental health, immigration stress, or socioeconomic status.</InsightCard>
              <InsightCard title="Support-first" icon={Lightbulb}>The goal is safer interpretation and better support, not judgment or surveillance.</InsightCard>
            </div>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-7">
        <div className="p-6">
          <SectionTitle icon={Layers3} title="Context Modifier Categories" subtitle="A broad inclusion-oriented library of lived-experience categories that may shape workplace presentation." />
          <div className="grid gap-2 sm:grid-cols-2">
            {livedExperienceCategories.map((category) => (
              <div key={category} className="rounded-2xl border border-white/10 bg-white/[0.055] p-3 text-sm text-white/72">
                {category}
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-5">
        <div className="p-6">
          <SectionTitle icon={Activity} title="Trait-Bending Examples" subtitle="The same PI baseline can look different under pressure or context load." />
          <div className="grid gap-3">
            {[
              ['Dominance', 'May be suppressed by unsafe authority history, cultural deference norms, low belonging, or fear of retaliation.'],
              ['Extraversion', 'May be suppressed by grief, burnout, language load, masking fatigue, or social threat.'],
              ['Patience', 'May appear lower under chronic uncertainty, sleep disruption, financial pressure, or hypervigilance.'],
              ['Formality', 'May appear lower under cognitive overload, time scarcity, unclear instructions, or survival pressure.'],
            ].map(([factor, text]) => (
              <div key={factor} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <div className="font-semibold text-white">{factor}</div>
                <p className="mt-2 text-sm leading-6 text-white/62">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-12">
        <div className="p-6">
          <SectionTitle icon={BookOpen} title="Research Foundation" subtitle="Citations support broad research concepts. They do not prove that PI scores can infer lived experience." />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {evidenceFoundation.map((item) => (
              <div key={item.area} className="rounded-3xl border border-white/10 bg-black/20 p-5">
                <h3 className="font-semibold text-white">{item.area}</h3>
                <p className="mt-2 text-sm leading-6 text-white/62">{item.use}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.sources.map((source) => <Pill key={source}>{source}</Pill>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default function LensExplorer({ lens, selectedProfile }) {
  const bridge = useMemo(() => weightedBridge(selectedProfile, lens), [selectedProfile, lens]);
  const confidence = confidenceFromBridge(bridge);

  if (lens.id === 'lived-experience') {
    return <LivedExperiencePanel />;
  }

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-12 overflow-hidden">
        <div className="relative p-6">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-fuchsia-500/10 blur-3xl" />
          <div className="relative">
            <div className="mb-3 flex flex-wrap gap-2">
              <Pill>{lens.category}</Pill>
              <Pill>{selectedProfile.name}</Pill>
              <Pill>Confidence: {confidence}%</Pill>
            </div>
            <SectionTitle icon={Sparkles} title={`${lens.label} Lens`} subtitle={lens.summary} />
            <div className="grid gap-3 md:grid-cols-5">
              {(lens.outputs || []).map((output) => (
                <div key={output} className="rounded-2xl border border-white/10 bg-black/20 p-4 text-sm text-white/72">
                  {output}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-7">
        <div className="p-6">
          <SectionTitle icon={Brain} title="PI-to-Lens Bridge" subtitle="Transparent view of which PI-style factors influenced this inference lens." />
          <LensRadar bridge={bridge} />
        </div>
      </Card>

      <Card className="lg:col-span-5">
        <div className="p-6">
          <SectionTitle icon={Activity} title="Factor Contribution" subtitle="Higher contribution means this factor has more influence in this lens." />
          <LensBars bridge={bridge} />
        </div>
      </Card>

      <div className="lg:col-span-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <InsightCard title="What it means" icon={Info}>{lens.means}</InsightCard>
        <InsightCard title="What it does not mean" icon={AlertTriangle} tone="warning">{lens.doesNotMean}</InsightCard>
        <InsightCard title="Manager use" icon={Target}><ItemGrid items={lens.managerUse} /></InsightCard>
        <InsightCard title="Misread risks" icon={Compass}><ItemGrid items={lens.misreadRisks} /></InsightCard>
      </div>

      <Card className="lg:col-span-12">
        <div className="p-6">
          <SectionTitle icon={BookOpen} title="Evidence and Limitations" subtitle="This section shows the research families that make the lens credible while making clear that the app is heuristic, not diagnostic." />
          <div className="grid gap-3 md:grid-cols-3">
            {(lens.citations || []).map((citation) => (
              <div key={citation} className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 text-sm leading-6 text-white/68">
                {citation}
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-3xl border border-amber-300/20 bg-amber-500/10 p-4 text-sm leading-6 text-amber-100/85">
            Evidence-informed, not diagnostic. This lens translates PI-style workplace drives into manager education language. It should not be used as a formal assessment, employment decision rule, clinical conclusion, or substitute for direct conversation.
          </div>
        </div>
      </Card>
    </div>
  );
}
