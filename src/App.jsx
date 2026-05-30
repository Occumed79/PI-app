import React, { useMemo, useState } from "react";
import LensExplorer from "./components/LensExplorer.jsx";
import EmployeeBuilderMode from "./components/modes/EmployeeBuilder.jsx";
import AIScenarioCoachMode from "./components/modes/AIScenarioCoach.jsx";
import { motion, AnimatePresence } from "framer-motion";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  CartesianGrid,
  LineChart,
  Line,
} from "recharts";
import {
  Brain,
  Users,
  Sparkles,
  Search,
  GitCompare,
  MessageSquareText,
  Gauge,
  Target,
  ShieldCheck,
  AlertTriangle,
  Compass,
  Puzzle,
  Layers3,
  SlidersHorizontal,
  BookOpen,
  Network,
  Lightbulb,
  Workflow,
  CheckCircle2,
  Info,
  ArrowRight,
  Activity,
  BrainCircuit,
  ClipboardList,
} from "lucide-react";

const groups = {
  Analytical: {
    label: "Analytical",
    color: "from-sky-500 to-indigo-500",
    bg: "bg-sky-500/10",
    border: "border-sky-300/30",
    summary:
      "Task-focused, fast-paced profiles that tend to prefer facts, autonomy, problem solving, and clear standards.",
  },
  Social: {
    label: "Social",
    color: "from-fuchsia-500 to-rose-500",
    bg: "bg-fuchsia-500/10",
    border: "border-fuchsia-300/30",
    summary:
      "Relationship-focused profiles that tend to communicate, persuade, collaborate, and influence through people.",
  },
  Stabilizing: {
    label: "Stabilizing",
    color: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-500/10",
    border: "border-emerald-300/30",
    summary:
      "Steady, careful, process-oriented profiles that usually do well with structure, clarity, and stable expectations.",
  },
  Persistent: {
    label: "Persistent",
    color: "from-amber-500 to-orange-500",
    bg: "bg-amber-500/10",
    border: "border-amber-300/30",
    summary:
      "Independent, deliberate profiles that tend to value control over their work, mastery, and thoughtful execution.",
  },
};

const profiles = [
  {
    name: "Analyzer",
    group: "Analytical",
    short: "High standards, disciplined, reserved, analytical.",
    scores: { Dominance: 78, Extraversion: 28, Patience: 34, Formality: 86 },
    needs: ["Big-picture context", "Room for introspection", "Fast pace", "Low risk of errors"],
    behaviors: ["Assertive", "Pensive", "Intense", "Thorough"],
    strengths: ["Disciplined execution", "Data-driven problem solving", "Creative technical thinking"],
    traps: ["May delay decisions while seeking complete information", "Can appear skeptical or overly exacting", "May struggle when rushed into risk"],
    workWith: ["Give context and standards", "Avoid forcing instant decisions", "Bring them complex problems worth solving"],
    bestFor: ["Quality analysis", "Technical review", "Risk evaluation", "Process improvement"],
  },
  {
    name: "Controller",
    group: "Analytical",
    short: "Detail-oriented, conservative, precise, fast-moving.",
    scores: { Dominance: 72, Extraversion: 24, Patience: 24, Formality: 90 },
    needs: ["Autonomy", "Clear rules", "Fast pace", "Specific responsibilities"],
    behaviors: ["Autonomous", "Matter-of-fact", "Impatient", "Precise"],
    strengths: ["Builds structure", "Anticipates problems", "Runs tight processes"],
    traps: ["May resist abrupt change", "Can struggle with ambiguity", "May delegate too tightly"],
    workWith: ["Be specific", "Define authority clearly", "Stay on track and on time"],
    bestFor: ["Compliance", "Operations control", "Technical documentation", "Deadline-sensitive execution"],
  },
  {
    name: "Specialist",
    group: "Analytical",
    short: "Precise, factual, careful, respects expertise and authority.",
    scores: { Dominance: 42, Extraversion: 24, Patience: 38, Formality: 88 },
    needs: ["Encouragement", "Facts", "Clear rules", "Specialized knowledge"],
    behaviors: ["Policy-aware", "Matter-of-fact", "Fast-paced", "Precise"],
    strengths: ["Reliable technical work", "Disciplined execution", "Careful communication"],
    traps: ["May be overly cautious", "May communicate sparsely", "Can freeze in unclear situations"],
    workWith: ["Provide training and clarity", "Recognize expertise", "Reduce mistake risk with clear expectations"],
    bestFor: ["Specialized review", "Data accuracy", "Controlled procedures", "Detailed support"],
  },
  {
    name: "Strategist",
    group: "Analytical",
    short: "Big-picture, analytical, organized, change-oriented.",
    scores: { Dominance: 84, Extraversion: 30, Patience: 26, Formality: 72 },
    needs: ["Big-picture understanding", "Facts", "Variety", "Time to build expertise"],
    behaviors: ["Independent", "Reflective", "Intense", "Organized"],
    strengths: ["Anticipates problems", "Handles pressure", "Connects strategy to execution"],
    traps: ["May appear tough-minded", "Can be impatient with delays", "May be perfectionistic"],
    workWith: ["Keep things moving", "Give facts and decision logic", "Respect their need for expertise"],
    bestFor: ["Strategic planning", "Systems design", "Change leadership", "Executive analysis"],
  },
  {
    name: "Venturer",
    group: "Analytical",
    short: "Independent, goal-oriented, risk-tolerant, self-starting.",
    scores: { Dominance: 92, Extraversion: 32, Patience: 18, Formality: 22 },
    needs: ["Independence", "Reflection", "Variety", "Freedom from rigid structure"],
    behaviors: ["Assertive", "Analytical", "Driving", "Non-conforming"],
    strengths: ["Challenges the status quo", "Moves quickly", "Big-picture goal pursuit"],
    traps: ["May reject structure", "Can dislike close supervision", "May overlook details"],
    workWith: ["Keep it high-level", "Do not micromanage", "Avoid slowing them with unnecessary process"],
    bestFor: ["New initiatives", "Growth strategy", "Problem escalation", "Innovation pushes"],
  },
  {
    name: "Altruist",
    group: "Social",
    short: "Cooperative, precise, helpful, team-oriented.",
    scores: { Dominance: 38, Extraversion: 76, Patience: 36, Formality: 72 },
    needs: ["Harmony", "Collaboration", "Multiple priorities", "Clear expectations"],
    behaviors: ["Cooperative", "Sociable", "Fast-paced", "Organized"],
    strengths: ["Team cohesion", "Follow-through", "Multitasking"],
    traps: ["May be too cautious", "Can be overly trusting", "May get frustrated by stagnation"],
    workWith: ["Give guidelines", "Let them collaborate", "Offer variety"],
    bestFor: ["Client support", "Team coordination", "Training support", "Cross-functional communication"],
  },
  {
    name: "Captain",
    group: "Social",
    short: "Assertive leader, change-oriented, people-connected.",
    scores: { Dominance: 90, Extraversion: 78, Patience: 20, Formality: 28 },
    needs: ["Independence", "Connection", "Variety", "Flexibility"],
    behaviors: ["Competitive", "Enthusiastic", "Driving", "Non-conforming"],
    strengths: ["Leads under pressure", "Moves change forward", "Motivates through confidence"],
    traps: ["May seem brusque", "Can resist structure", "May overpower quieter voices"],
    workWith: ["Give room", "Challenge them", "Offer responsibility and growth"],
    bestFor: ["Crisis leadership", "Business development", "Team mobilization", "Hard decisions"],
  },
  {
    name: "Collaborator",
    group: "Social",
    short: "Patient, empathetic, team-first, supportive.",
    scores: { Dominance: 24, Extraversion: 74, Patience: 76, Formality: 30 },
    needs: ["Low competition", "Working with others", "Supportive team", "Expression"],
    behaviors: ["Cooperative", "Empathetic", "Patient", "Casual"],
    strengths: ["Builds trust", "Listens well", "Keeps teams aligned"],
    traps: ["May avoid unpopular decisions", "Can under-track details", "May appear too casual"],
    workWith: ["Keep it friendly", "Give steady support", "Invite them into decisions"],
    bestFor: ["Team facilitation", "Onboarding", "Conflict prevention", "People support"],
  },
  {
    name: "Maverick",
    group: "Social",
    short: "Visionary, risk-tolerant, persuasive, fast-moving.",
    scores: { Dominance: 94, Extraversion: 84, Patience: 16, Formality: 18 },
    needs: ["Challenge", "Influence", "Variety", "Freedom from controls"],
    behaviors: ["Venturesome", "Enthusiastic", "Driving", "Tolerant of uncertainty"],
    strengths: ["Visionary change", "High initiative", "Rallies people around ideas"],
    traps: ["May overlook details", "Can be impatient with delays", "May need reminders to listen"],
    workWith: ["Hand them ownership", "Give freedom", "Add a detail partner or checkpoint"],
    bestFor: ["Bold initiatives", "Entrepreneurial roles", "Vision casting", "New market strategy"],
  },
  {
    name: "Persuader",
    group: "Social",
    short: "Socially poised, risk-taking, motivating team builder.",
    scores: { Dominance: 78, Extraversion: 92, Patience: 28, Formality: 24 },
    needs: ["Independence", "Interaction", "Variety", "Low rigid structure"],
    behaviors: ["Self-confident", "Persuasive", "Fast-paced", "Informal"],
    strengths: ["Motivating communicator", "Drives change", "Works through people"],
    traps: ["May miss detail follow-up", "Can appear superficial", "May be too casual"],
    workWith: ["Interact often", "Give variety", "Let them influence and develop people"],
    bestFor: ["Sales", "Partnerships", "Influence work", "Team motivation"],
  },
  {
    name: "Promoter",
    group: "Social",
    short: "Charismatic, casual, persuasive, informal.",
    scores: { Dominance: 32, Extraversion: 94, Patience: 74, Formality: 18 },
    needs: ["Harmony", "Social acceptance", "Supportive team", "Loose structure"],
    behaviors: ["Collaborative", "Outgoing", "Patient", "Flexible"],
    strengths: ["Engaging communicator", "Flexible with people", "Persistent in persuasion"],
    traps: ["May prioritize being liked", "Can be too talkative", "May under-focus on results"],
    workWith: ["Let them be social", "Recognize persuasion wins", "Pair with detail structure"],
    bestFor: ["Outreach", "Public-facing roles", "Culture building", "Relationship management"],
  },
  {
    name: "Adapter",
    group: "Stabilizing",
    short: "Flexible bridge-builder, situationally adaptive.",
    scores: { Dominance: 50, Extraversion: 50, Patience: 50, Formality: 50 },
    needs: ["Needs vary by situation", "Clear conversation", "Context", "Balanced expectations"],
    behaviors: ["Flexible", "Empathetic", "Balanced", "Situational"],
    strengths: ["Bridge-building", "Flexibility", "Reads multiple sides"],
    traps: ["Can be hard to read", "May surprise people if thinking is not communicated", "May need role clarity"],
    workWith: ["Ask what motivates them", "Clarify what the situation needs", "Do not assume a fixed style"],
    bestFor: ["Team glue", "Coordination", "Change support", "Generalist roles"],
  },
  {
    name: "Craftsman / Artisan",
    group: "Stabilizing",
    short: "Accommodating, analytical, precise, careful.",
    scores: { Dominance: 26, Extraversion: 22, Patience: 72, Formality: 88 },
    needs: ["Understanding", "Introspection", "Stable environment", "Specific job knowledge"],
    behaviors: ["Accommodating", "Analytical", "Deliberate", "Precise"],
    strengths: ["High accuracy", "Thoughtful communication", "Respect for structure"],
    traps: ["May struggle under time pressure", "Can be sensitive to criticism", "May dislike ambiguity"],
    workWith: ["Use positive constructive feedback", "Provide technical details", "Recognize skilled work"],
    bestFor: ["Precision work", "Documentation", "Technical production", "Quality control"],
  },
  {
    name: "Guardian",
    group: "Stabilizing",
    short: "Helpful, steady, diligent, detail-focused.",
    scores: { Dominance: 22, Extraversion: 28, Patience: 82, Formality: 90 },
    needs: ["Reassurance", "Time to trust", "Stable priorities", "Low error risk"],
    behaviors: ["Helpful", "Pensive", "Steady", "Diligent"],
    strengths: ["Strong execution", "Careful details", "Reliable structure"],
    traps: ["May avoid conflict", "Can struggle with ambiguity", "May be sensitive to criticism"],
    workWith: ["Train step-by-step", "Keep priorities steady", "Be supportive and calm"],
    bestFor: ["Administrative accuracy", "Records", "Standardized workflows", "Compliance support"],
  },
  {
    name: "Operator",
    group: "Stabilizing",
    short: "Patient, cooperative, relaxed, conscientious.",
    scores: { Dominance: 24, Extraversion: 36, Patience: 88, Formality: 70 },
    needs: ["Reassurance", "Facts", "Stable priorities", "Rules and structure"],
    behaviors: ["Cooperative", "Pragmatic", "Stable", "Thorough"],
    strengths: ["Calm consistency", "Cooperative reliability", "Methodical execution"],
    traps: ["May seem overly task-focused", "Can be cautious", "May struggle in ambiguous changes"],
    workWith: ["Do not pressure with artificial urgency", "Give time for methodical work", "Reassure and clarify"],
    bestFor: ["Repeatable operations", "Service delivery", "Task completion", "Workflow stability"],
  },
  {
    name: "Individualist",
    group: "Persistent",
    short: "Independent, analytical, methodical, unconventional.",
    scores: { Dominance: 84, Extraversion: 28, Patience: 76, Formality: 24 },
    needs: ["Independence", "Facts", "Stable priorities", "Flexibility"],
    behaviors: ["Self-confident", "Analytical", "Methodical", "Non-conforming"],
    strengths: ["Creative problem solving", "Change orientation", "Independent ownership"],
    traps: ["May appear stubborn", "Can dislike too much direction", "May be tough-minded"],
    workWith: ["Give space", "Challenge them", "Be receptive to unconventional ideas"],
    bestFor: ["Complex problem solving", "Process redesign", "Independent projects", "Strategic troubleshooting"],
  },
  {
    name: "Scholar",
    group: "Persistent",
    short: "Accurate, reserved, imaginative, technical expert.",
    scores: { Dominance: 68, Extraversion: 18, Patience: 78, Formality: 86 },
    needs: ["Independence", "Reflection", "Stable environment", "Low error risk"],
    behaviors: ["Autonomous", "Introspective", "Deliberate", "Reserved"],
    strengths: ["Deep analysis", "Thorough follow-up", "Technical mastery"],
    traps: ["May avoid controversial action", "Can be uncomfortable in new social settings", "May find delegation difficult"],
    workWith: ["Give time for analysis", "Let them build expertise", "Avoid micromanagement"],
    bestFor: ["Research", "Technical expertise", "Evidence review", "Specialized analysis"],
  },
];

const roleTypes = [
  "Quality control",
  "Operations",
  "Leadership",
  "Client outreach",
  "Compliance",
  "Innovation",
  "Training",
  "Case management",
];

const scenarios = [
  {
    id: "instruction-change",
    title: "Verbal-only instruction change",
    plain: "A process changes suddenly, but the update is only explained verbally during a busy day.",
    riskLogic: { Formality: 0.55, Patience: 0.25, Dominance: -0.1, Extraversion: -0.05 },
    why: "Profiles with higher formality and patience usually benefit from written standards, stable expectations, and lower ambiguity. Verbal-only changes can create rework loops unless the update is documented.",
    action: "Convert the verbal change into a written mini-SOP, add examples, and confirm what changed versus what stayed the same.",
  },
  {
    id: "cross-team-floating",
    title: "Cross-team floating assignment",
    plain: "Someone is pulled from their normal workflow to cover another team with different expectations.",
    riskLogic: { Formality: 0.25, Patience: 0.45, Dominance: -0.05, Extraversion: -0.1 },
    why: "High patience profiles may experience strain from changing priorities. High formality profiles may need clearer rules before switching workflows.",
    action: "Give a tight scope, define who answers questions, and separate must-do tasks from nice-to-have tasks.",
  },
  {
    id: "urgent-ambiguous",
    title: "Urgent but ambiguous deadline",
    plain: "A manager asks for something fast without defining what success looks like.",
    riskLogic: { Formality: 0.45, Patience: -0.2, Dominance: -0.2, Extraversion: -0.05 },
    why: "People who need structure may stall or over-check when the target is unclear. More dominant fast-paced profiles may move anyway but risk misalignment.",
    action: "Provide a clear output format, deadline, reviewer, and one example of a good finished product.",
  },
  {
    id: "client-conflict",
    title: "Client conflict or pushback",
    plain: "A client is unhappy, direct, or pushing back against the process.",
    riskLogic: { Extraversion: -0.25, Dominance: -0.15, Patience: 0.15, Formality: 0.15 },
    why: "Social and assertive profiles may be more comfortable engaging directly. Reserved, conflict-avoidant, or high-structure profiles may need talking points and escalation rules.",
    action: "Give scripted language, define escalation criteria, and separate empathy from policy explanation.",
  },
  {
    id: "new-project",
    title: "New project with no playbook",
    plain: "A new initiative is assigned before the process is fully defined.",
    riskLogic: { Formality: 0.5, Patience: 0.15, Dominance: -0.25, Extraversion: -0.05 },
    why: "Innovation-friendly profiles may enjoy the open space. High-formality or stability-oriented profiles may need a basic framework before they can contribute confidently.",
    action: "Start with a one-page charter: goal, non-goals, owner, timeline, inputs, outputs, and first three decisions needed.",
  },
];

const groupMeaningGuide = [
  {
    name: "Analytical",
    plain: "Task-first, problem-first profiles. They usually focus on facts, standards, speed, autonomy, and solving the issue correctly.",
    doesNotMean: "It does not mean cold, smarter, emotionless, or better. It means their workplace energy is usually aimed at the task before the social layer.",
    managerTranslation: "Give the goal, the facts, the standard, the risk, and the decision authority. Do not bury them in vague motivational language.",
    likelyFriction: "Too much ambiguity, too many meetings without decisions, rushed choices without enough data, or micromanagement.",
    profiles: ["Analyzer", "Controller", "Specialist", "Strategist", "Venturer"],
  },
  {
    name: "Social",
    plain: "People-first, influence-first profiles. They usually process work through conversation, collaboration, persuasion, motivation, and relationship context.",
    doesNotMean: "It does not mean unserious, shallow, or less precise. Some Social profiles are very structured. It means interaction is a major source of energy and movement.",
    managerTranslation: "Talk things through, let them connect the work to people, and use them where buy-in, morale, outreach, or team movement matters.",
    likelyFriction: "Isolation, cold communication, unclear social expectations, lack of recognition, or work that removes the people side entirely.",
    profiles: ["Altruist", "Captain", "Collaborator", "Maverick", "Persuader", "Promoter"],
  },
  {
    name: "Stabilizing",
    plain: "Steady, process-first profiles. They usually prefer clarity, consistency, stable expectations, careful execution, and a predictable workflow.",
    doesNotMean: "It does not mean slow, weak, boring, or resistant to all change. It means sudden change lands better when it is explained, documented, and stabilized.",
    managerTranslation: "Give clear steps, written expectations, reassurance, and enough time to do the work correctly. Do not create chaos and call it flexibility.",
    likelyFriction: "Constant priority changes, vague handoffs, conflict-heavy environments, surprise deadlines, or unclear quality standards.",
    profiles: ["Adapter", "Craftsman / Artisan", "Guardian", "Operator"],
  },
  {
    name: "Persistent",
    plain: "Independent, deliberate, mastery-first profiles. They usually like control over their work, thoughtful problem solving, stability, expertise, and ownership.",
    doesNotMean: "It does not mean stubborn by default. It means they may push back when direction feels unnecessary, poorly reasoned, or disruptive to deep work.",
    managerTranslation: "Give them room, define the outcome, respect their expertise, and avoid pointless check-ins. Challenge them with real problems.",
    likelyFriction: "Over-management, shifting priorities, shallow instructions, unnecessary group pressure, or being forced to move before the logic is clear.",
    profiles: ["Individualist", "Scholar"],
  },
];

const factorMeaningGuide = [
  {
    name: "Dominance",
    plain: "How strongly someone is driven to influence outcomes, make decisions, solve problems, or push events forward.",
    high: "More likely to want ownership, authority, challenge, and room to act. They may push for decisions instead of waiting for consensus.",
    low: "More likely to prefer collaboration, support, shared decisions, or a less forceful role in directing people or events.",
    managerTranslation: "Clarify decision rights. Tell them what they own, what they can decide, and where they need approval.",
    watchOut: "High dominance can feel forceful. Low dominance can be misread as lacking initiative when they may simply prefer cooperation.",
  },
  {
    name: "Extraversion",
    plain: "How strongly someone is driven toward social interaction, verbal processing, persuasion, and relationship energy.",
    high: "More likely to think out loud, involve people, persuade, communicate frequently, and gain energy from interaction.",
    low: "More likely to think privately, prefer fewer interruptions, communicate more selectively, and need time before responding.",
    managerTranslation: "Match the communication style. Some people need discussion to align. Others need written context and time to process.",
    watchOut: "High extraversion can be mistaken for lack of depth. Low extraversion can be mistaken for disengagement.",
  },
  {
    name: "Patience",
    plain: "How strongly someone is driven toward consistency, stability, steady pace, and predictable priorities.",
    high: "More likely to prefer stable work, repeatable processes, careful pacing, and fewer sudden priority changes.",
    low: "More likely to prefer urgency, variety, faster movement, change, and a less repetitive work rhythm.",
    managerTranslation: "Be honest about pace. If change is coming, explain what is changing, why, when, and what stays the same.",
    watchOut: "High patience can be mistaken for slowness. Low patience can be mistaken for chaos when it may be a need for movement.",
  },
  {
    name: "Formality",
    plain: "How strongly someone is driven toward rules, structure, accuracy, standards, and doing things the right way.",
    high: "More likely to want instructions, documentation, defined expectations, quality standards, and protection from preventable errors.",
    low: "More likely to prefer flexibility, informal problem solving, fewer rules, and freedom to adapt the process.",
    managerTranslation: "Define the standard of done. For high formality, document it. For low formality, avoid overloading them with unnecessary procedure.",
    watchOut: "High formality can be mistaken for rigidity. Low formality can be mistaken for carelessness.",
  },
];

const tabs = [
  { id: "dashboard", label: "Dashboard", icon: Gauge },
  { id: "profiles", label: "Profiles", icon: Users },
  { id: "compare", label: "Compare", icon: GitCompare },
  { id: "whatif", label: "What-if", icon: MessageSquareText },
  { id: "meaning", label: "What It Means", icon: Info },
  { id: "matrix", label: "Score Matrix", icon: SlidersHorizontal },
  { id: "brain", label: "Strength Map", icon: Brain },
  { id: "lenses", label: "Lenses", icon: Layers3 },
  { id: "builder", label: "Employee Builder", icon: ClipboardList },
  { id: "coach", label: "AI Coach", icon: BrainCircuit },
];

const factorDescriptions = factorMeaningGuide.map(({ name, plain }) => ({ factor: name, meaning: plain }));

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function scoreLabel(value) {
  if (value >= 76) return "High";
  if (value >= 45) return "Moderate";
  return "Low";
}

function getScenarioRisk(profile, scenario) {
  const s = profile.scores;
  const logic = scenario.riskLogic;
  const raw =
    45 +
    ((s.Dominance - 50) / 50) * 28 * (logic.Dominance || 0) +
    ((s.Extraversion - 50) / 50) * 28 * (logic.Extraversion || 0) +
    ((s.Patience - 50) / 50) * 28 * (logic.Patience || 0) +
    ((s.Formality - 50) / 50) * 28 * (logic.Formality || 0);
  return Math.max(8, Math.min(92, Math.round(raw)));
}

function compatibility(a, b) {
  const factors = ["Dominance", "Extraversion", "Patience", "Formality"];
  const avgDiff = factors.reduce((sum, f) => sum + Math.abs(a.scores[f] - b.scores[f]), 0) / factors.length;
  return Math.round(100 - avgDiff * 0.75);
}

function Card({ children, className = "" }) {
  return (
    <div className={cx("rounded-3xl border border-white/10 bg-white/[0.07] shadow-2xl shadow-black/20 backdrop-blur-xl", className)}>
      {children}
    </div>
  );
}

function Pill({ children, className = "" }) {
  return (
    <span className={cx("inline-flex items-center rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-white/80", className)}>
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
        {subtitle && <p className="mt-1 max-w-3xl text-sm leading-6 text-white/60">{subtitle}</p>}
      </div>
    </div>
  );
}

function FactorBars({ profile }) {
  const data = Object.entries(profile.scores).map(([name, value]) => ({ name, value }));
  return (
    <div className="h-52 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
          <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,.62)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis domain={[0, 100]} tick={{ fill: "rgba(255,255,255,.45)", fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip cursor={{ fill: "rgba(255,255,255,.05)" }} contentStyle={{ background: "rgba(10,14,30,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, color: "white" }} />
          <Bar dataKey="value" radius={[12, 12, 4, 4]} fill="rgba(125,211,252,.9)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

function RadarBlock({ profile }) {
  const data = Object.entries(profile.scores).map(([factor, value]) => ({ factor, value }));
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={data} outerRadius="72%">
          <PolarGrid stroke="rgba(255,255,255,.12)" />
          <PolarAngleAxis dataKey="factor" tick={{ fill: "rgba(255,255,255,.62)", fontSize: 11 }} />
          <Radar dataKey="value" stroke="rgba(196,181,253,.95)" fill="rgba(196,181,253,.22)" strokeWidth={2} />
          <Tooltip contentStyle={{ background: "rgba(10,14,30,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, color: "white" }} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}

function InsightList({ title, icon: Icon, items, horizontal = false }) {
  return (
    <Card className="bg-black/15">
      <div className="p-5">
        <h3 className="mb-4 flex items-center gap-2 font-semibold text-white"><Icon size={18} /> {title}</h3>
        <div className={cx("grid gap-2", horizontal && "md:grid-cols-3")}>
          {items.map((item) => (
            <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.06] p-3 text-sm leading-5 text-white/70">
              {item}
            </div>
          ))}
        </div>
      </div>
    </Card>
  );
}

function Dashboard({ selectedProfile, setSelectedProfile }) {
  const groupCounts = useMemo(() => Object.keys(groups).map((g) => ({ name: g, value: profiles.filter((p) => p.group === g).length })), []);

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-8">
        <div className="p-6">
          <SectionTitle icon={Sparkles} title="Human Systems Intelligence" subtitle="A practical manager-facing tool for translating profile patterns into communication guidance, workflow risk, support needs, and what-if coaching." />
          <div className="grid gap-3 md:grid-cols-4">
            {Object.entries(groups).map(([key, group]) => (
              <button key={key} onClick={() => setSelectedProfile(profiles.find((p) => p.group === key))} className={cx("rounded-2xl border p-4 text-left transition hover:-translate-y-0.5 hover:bg-white/10", group.border, group.bg)}>
                <div className={cx("mb-3 h-1.5 w-16 rounded-full bg-gradient-to-r", group.color)} />
                <div className="font-semibold text-white">{group.label}</div>
                <p className="mt-2 text-xs leading-5 text-white/60">{group.summary}</p>
              </button>
            ))}
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={BookOpen} title="Reference Set" subtitle="17 profiles organized into practical workplace views." />
          <div className="space-y-3">
            <StatRow label="Profiles" value="17" />
            <StatRow label="Factors" value="4" />
            <StatRow label="Scenario modes" value="5" />
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={Target} title="Selected Profile" subtitle={selectedProfile.short} />
          <div className={cx("rounded-3xl border p-5", groups[selectedProfile.group].border, groups[selectedProfile.group].bg)}>
            <Pill>{selectedProfile.group}</Pill>
            <h3 className="mt-4 text-3xl font-bold text-white">{selectedProfile.name}</h3>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {Object.entries(selectedProfile.scores).map(([k, v]) => (
                <div key={k} className="rounded-2xl bg-black/20 p-3">
                  <div className="text-xs text-white/50">{k}</div>
                  <div className="mt-1 text-lg font-semibold text-white">{scoreLabel(v)}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={Activity} title="Factor Shape" subtitle="Approximate behavioral drive pattern for the selected profile." />
          <RadarBlock profile={selectedProfile} />
        </div>
      </Card>

      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={Layers3} title="Profile Families" subtitle="Distribution across the reference profiles." />
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={groupCounts} margin={{ top: 10, right: 10, left: -25, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
                <XAxis dataKey="name" tick={{ fill: "rgba(255,255,255,.62)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: "rgba(255,255,255,.45)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(10,14,30,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, color: "white" }} />
                <Bar dataKey="value" radius={[12, 12, 4, 4]} fill="rgba(52,211,153,.88)" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-12">
        <div className="grid gap-4 p-6 md:grid-cols-4">
          {factorDescriptions.map((item) => (
            <div key={item.factor} className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <div className="text-sm font-semibold text-white">{item.factor}</div>
              <p className="mt-2 text-xs leading-5 text-white/55">{item.meaning}</p>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function StatRow({ label, value }) {
  return (
    <div className="flex items-center justify-between rounded-2xl bg-white/10 p-3">
      <span className="text-sm text-white/70">{label}</span>
      <span className="text-2xl font-semibold text-white">{value}</span>
    </div>
  );
}

function Profiles({ selectedProfile, setSelectedProfile }) {
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("All");

  const visible = profiles.filter((p) => {
    const matchesGroup = group === "All" || p.group === group;
    const haystack = [p.name, p.group, p.short, ...p.needs, ...p.strengths, ...p.traps, ...p.workWith, ...p.bestFor].join(" ").toLowerCase();
    return matchesGroup && haystack.includes(query.toLowerCase());
  });

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={Search} title="Profile Library" subtitle="Search by profile, strength, risk, need, or work style." />
          <div className="relative flex-1">
            <Search className="absolute left-3 top-3 h-4 w-4 text-white/40" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search profiles..." className="w-full rounded-2xl border border-white/10 bg-black/25 py-2.5 pl-9 pr-3 text-sm text-white outline-none placeholder:text-white/35 focus:border-sky-300/40" />
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {["All", ...Object.keys(groups)].map((g) => (
              <button key={g} onClick={() => setGroup(g)} className={cx("rounded-full border px-3 py-1.5 text-xs transition", group === g ? "border-white/30 bg-white/20 text-white" : "border-white/10 bg-white/5 text-white/60 hover:bg-white/10")}>
                {g}
              </button>
            ))}
          </div>
          <div className="mt-5 max-h-[520px] space-y-2 overflow-auto pr-1">
            {visible.map((p) => (
              <button key={p.name} onClick={() => setSelectedProfile(p)} className={cx("w-full rounded-2xl border p-3 text-left transition hover:bg-white/10", selectedProfile.name === p.name ? "border-white/30 bg-white/15" : "border-white/10 bg-white/5")}>
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="font-semibold text-white">{p.name}</div>
                    <div className="text-xs text-white/45">{p.group}</div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-white/35" />
                </div>
                <p className="mt-2 line-clamp-2 text-xs leading-5 text-white/55">{p.short}</p>
              </button>
            ))}
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-8">
        <div className="p-6">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
            <div>
              <Pill className={cx(groups[selectedProfile.group].bg, groups[selectedProfile.group].border)}>{selectedProfile.group}</Pill>
              <h2 className="mt-4 text-4xl font-bold tracking-tight text-white">{selectedProfile.name}</h2>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-white/65">{selectedProfile.short}</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-sm text-white/70">
              <div className="flex items-center gap-2"><Info size={16} /> Profile view</div>
            </div>
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <Card className="bg-black/15">
              <div className="p-5">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-white"><Gauge size={18} /> Behavioral Factors</h3>
                <FactorBars profile={selectedProfile} />
              </div>
            </Card>
            <Card className="bg-black/15">
              <div className="p-5">
                <h3 className="mb-3 flex items-center gap-2 font-semibold text-white"><CheckCircle2 size={18} /> Best-fit Work</h3>
                <div className="grid gap-2 sm:grid-cols-2">
                  {selectedProfile.bestFor.map((x) => <div key={x} className="rounded-2xl bg-white/[0.08] p-3 text-sm text-white/75">{x}</div>)}
                </div>
              </div>
            </Card>
          </div>

          <div className="mt-5 grid gap-5 lg:grid-cols-3">
            <InsightList title="Needs" icon={Puzzle} items={selectedProfile.needs} />
            <InsightList title="Strengths" icon={ShieldCheck} items={selectedProfile.strengths} />
            <InsightList title="Common Traps" icon={AlertTriangle} items={selectedProfile.traps} />
          </div>
          <div className="mt-5">
            <InsightList title="How to Work Well With This Profile" icon={Compass} items={selectedProfile.workWith} horizontal />
          </div>
        </div>
      </Card>
    </div>
  );
}

function SelectProfile({ label, value, onChange }) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm text-white/60">{label}</span>
      <select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-300/40">
        {profiles.map((p) => <option key={p.name} value={p.name}>{p.name}</option>)}
      </select>
    </label>
  );
}


function MeaningGuide() {
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-12 overflow-hidden">
        <div className="relative p-6">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-sky-400/20 blur-3xl" />
          <div className="absolute -bottom-24 left-1/3 h-64 w-64 rounded-full bg-fuchsia-400/10 blur-3xl" />
          <div className="relative">
            <SectionTitle
              icon={Info}
              title="What It Means"
              subtitle="Plain-English translations for the four profile groups and the four behavioral factors, written for managers who need practical guidance instead of vague personality labels."
            />
            <div className="grid gap-3 md:grid-cols-4">
              {factorMeaningGuide.map((factor) => (
                <div key={factor.name} className="rounded-3xl border border-white/10 bg-black/20 p-4">
                  <div className="text-sm font-semibold text-white">{factor.name}</div>
                  <p className="mt-2 text-xs leading-5 text-white/60">{factor.plain}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-12">
        <div className="p-6">
          <SectionTitle
            icon={Layers3}
            title="Profile Group Translations"
            subtitle="Each group is a workplace pattern, not a value judgment. This section explains what the label means, what it does not mean, and how a manager should translate it into action."
          />
          <div className="grid gap-5 xl:grid-cols-2">
            {groupMeaningGuide.map((group) => {
              const groupStyle = groups[group.name];
              return (
                <Card key={group.name} className={cx("bg-black/15", groupStyle.border)}>
                  <div className="p-5">
                    <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                      <div>
                        <Pill className={cx(groupStyle.bg, groupStyle.border)}>{group.name}</Pill>
                        <h3 className="mt-3 text-2xl font-bold text-white">{group.name} means...</h3>
                      </div>
                      <div className={cx("h-2 w-28 rounded-full bg-gradient-to-r", groupStyle.color)} />
                    </div>

                    <div className="mt-5 grid gap-3">
                      <MeaningCard title="Plain meaning" text={group.plain} />
                      <MeaningCard title="Does not mean" text={group.doesNotMean} />
                      <MeaningCard title="Manager translation" text={group.managerTranslation} />
                      <MeaningCard title="Likely friction" text={group.likelyFriction} />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {group.profiles.map((profile) => (
                        <Pill key={profile}>{profile}</Pill>
                      ))}
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-12">
        <div className="p-6">
          <SectionTitle
            icon={SlidersHorizontal}
            title="Score Factor Translations"
            subtitle="Use these as the decoding key for Dominance, Extraversion, Patience, and Formality. High and low scores are both useful. They just need different management conditions."
          />
          <div className="grid gap-5 xl:grid-cols-2">
            {factorMeaningGuide.map((factor) => (
              <Card key={factor.name} className="bg-black/15">
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-2xl font-bold text-white">{factor.name}</h3>
                    <Pill>Factor</Pill>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/65">{factor.plain}</p>
                  <div className="mt-5 grid gap-3 md:grid-cols-2">
                    <MeaningCard title="High score" text={factor.high} />
                    <MeaningCard title="Low score" text={factor.low} />
                  </div>
                  <div className="mt-3 grid gap-3 md:grid-cols-2">
                    <MeaningCard title="Manager translation" text={factor.managerTranslation} />
                    <MeaningCard title="Watch out" text={factor.watchOut} />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}

function MeaningCard({ title, text }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-4">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-white/45">{title}</div>
      <p className="mt-2 text-sm leading-6 text-white/70">{text}</p>
    </div>
  );
}

function Compare() {
  const [leftName, setLeftName] = useState("Analyzer");
  const [rightName, setRightName] = useState("Promoter");
  const left = profiles.find((p) => p.name === leftName) || profiles[0];
  const right = profiles.find((p) => p.name === rightName) || profiles[1];
  const factors = ["Dominance", "Extraversion", "Patience", "Formality"];
  const chartData = factors.map((factor) => ({
    factor,
    profileA: left.scores[factor],
    profileB: right.scores[factor],
  }));
  const match = compatibility(left, right);
  const friction = factors
    .map((factor) => ({ factor, diff: Math.abs(left.scores[factor] - right.scores[factor]) }))
    .sort((a, b) => b.diff - a.diff)[0];

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={GitCompare} title="Compare Profiles" subtitle="Translate differences into manager guidance instead of personality labels." />
          <SelectProfile label="Profile A" value={leftName} onChange={setLeftName} />
          <div className="mt-4">
            <SelectProfile label="Profile B" value={rightName} onChange={setRightName} />
          </div>
          <div className="mt-6 rounded-3xl border border-white/10 bg-white/10 p-5">
            <div className="text-sm text-white/55">Working compatibility</div>
            <div className="mt-2 text-5xl font-bold text-white">{match}%</div>
            <p className="mt-3 text-sm leading-6 text-white/60">
              Biggest difference: <span className="font-semibold text-white">{friction.factor}</span>. That means expectation-setting matters more.
            </p>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-8">
        <div className="p-6">
          <SectionTitle icon={Activity} title="Factor Difference" subtitle="Side-by-side behavioral drive shape." />
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,.08)" />
                <XAxis dataKey="factor" tick={{ fill: "rgba(255,255,255,.62)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis domain={[0, 100]} tick={{ fill: "rgba(255,255,255,.45)", fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "rgba(10,14,30,.92)", border: "1px solid rgba(255,255,255,.12)", borderRadius: 16, color: "white" }} />
                <Line name={left.name} type="monotone" dataKey="profileA" stroke="rgba(125,211,252,.95)" strokeWidth={3} dot={{ r: 4 }} />
                <Line name={right.name} type="monotone" dataKey="profileB" stroke="rgba(244,114,182,.95)" strokeWidth={3} dot={{ r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>

      <Card className="lg:col-span-6">
        <div className="p-6">
          <SectionTitle icon={Puzzle} title={left.name} subtitle={left.short} />
          <ProfileMiniSummary profile={left} />
        </div>
      </Card>

      <Card className="lg:col-span-6">
        <div className="p-6">
          <SectionTitle icon={Puzzle} title={right.name} subtitle={right.short} />
          <ProfileMiniSummary profile={right} />
        </div>
      </Card>

      <Card className="lg:col-span-12">
        <div className="p-6">
          <SectionTitle icon={Lightbulb} title="How to Manage the Difference" subtitle="The goal is not to decide who is better. The goal is to create a shared operating agreement." />
          <div className="grid gap-3 md:grid-cols-3">
            <MeaningCard title="Likely friction point" text={`${friction.factor} is the biggest spread. This is where pace, communication, detail, or decision-right expectations may diverge.`} />
            <MeaningCard title="Best first move" text="Make the working rules explicit: what needs to be written, what can be verbal, who decides, and when escalation is appropriate." />
            <MeaningCard title="Manager reminder" text="Do not treat profile contrast as conflict. Treat it as a design problem for communication, handoffs, and quality control." />
          </div>
        </div>
      </Card>
    </div>
  );
}

function ProfileMiniSummary({ profile }) {
  return (
    <div className="grid gap-4">
      <div className="grid gap-2 sm:grid-cols-4">
        {Object.entries(profile.scores).map(([factor, score]) => (
          <div key={factor} className="rounded-2xl border border-white/10 bg-black/20 p-3">
            <div className="text-xs text-white/45">{factor}</div>
            <div className="mt-1 text-lg font-semibold text-white">{scoreLabel(score)}</div>
          </div>
        ))}
      </div>
      <div className="grid gap-3 md:grid-cols-3">
        <InsightList title="Strengths" icon={ShieldCheck} items={profile.strengths} />
        <InsightList title="Traps" icon={AlertTriangle} items={profile.traps} />
        <InsightList title="Work With" icon={Compass} items={profile.workWith} />
      </div>
    </div>
  );
}

function WhatIf({ selectedProfile, setSelectedProfile }) {
  const [scenarioId, setScenarioId] = useState(scenarios[0].id);
  const scenario = scenarios.find((item) => item.id === scenarioId) || scenarios[0];
  const risk = getScenarioRisk(selectedProfile, scenario);
  const riskLabel = risk >= 66 ? "High friction risk" : risk >= 40 ? "Moderate friction risk" : "Lower friction risk";

  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-4">
        <div className="p-6">
          <SectionTitle icon={MessageSquareText} title="What-if Scenario Coach" subtitle="Pick a profile and a workplace situation. The app translates the likely friction and the best support move." />
          <SelectProfile label="Profile" value={selectedProfile.name} onChange={(name) => setSelectedProfile(profiles.find((p) => p.name === name) || selectedProfile)} />
          <label className="mt-4 block">
            <span className="mb-2 block text-sm text-white/60">Scenario</span>
            <select value={scenarioId} onChange={(event) => setScenarioId(event.target.value)} className="w-full rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none focus:border-sky-300/40">
              {scenarios.map((item) => (
                <option key={item.id} value={item.id}>{item.title}</option>
              ))}
            </select>
          </label>
        </div>
      </Card>

      <Card className="lg:col-span-8">
        <div className="p-6">
          <SectionTitle icon={Workflow} title={scenario.title} subtitle={scenario.plain} />
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-white/10 p-5">
              <div className="text-sm text-white/55">Predicted friction</div>
              <div className="mt-2 text-5xl font-bold text-white">{risk}%</div>
              <Pill className="mt-3">{riskLabel}</Pill>
            </div>
            <MeaningCard title="Why this happens" text={scenario.why} />
            <MeaningCard title="Best manager move" text={scenario.action} />
          </div>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <InsightList title={`${selectedProfile.name} needs`} icon={Puzzle} items={selectedProfile.needs} />
            <InsightList title="Work-with guidance" icon={Compass} items={selectedProfile.workWith} />
          </div>
        </div>
      </Card>
    </div>
  );
}

function ScoreMatrix() {
  const factors = ["Dominance", "Extraversion", "Patience", "Formality"];

  return (
    <Card>
      <div className="p-6">
        <SectionTitle icon={SlidersHorizontal} title="Score Matrix" subtitle="A fast visual reference for every profile and every score factor." />
        <div className="overflow-x-auto rounded-3xl border border-white/10">
          <table className="min-w-full divide-y divide-white/10 text-left text-sm">
            <thead className="bg-white/[0.06] text-white/60">
              <tr>
                <th className="px-4 py-3 font-medium">Profile</th>
                <th className="px-4 py-3 font-medium">Group</th>
                {factors.map((factor) => (
                  <th key={factor} className="px-4 py-3 font-medium">{factor}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {profiles.map((profile) => (
                <tr key={profile.name} className="bg-black/10 hover:bg-white/[0.05]">
                  <td className="px-4 py-3 font-semibold text-white">{profile.name}</td>
                  <td className="px-4 py-3 text-white/65">{profile.group}</td>
                  {factors.map((factor) => (
                    <td key={factor} className="px-4 py-3">
                      <div className="flex items-center gap-3">
                        <span className="w-9 font-semibold text-white">{profile.scores[factor]}</span>
                        <div className="h-2 w-24 overflow-hidden rounded-full bg-white/10">
                          <div className="h-full rounded-full bg-white/50" style={{ width: `${profile.scores[factor]}%` }} />
                        </div>
                        <span className="text-xs text-white/45">{scoreLabel(profile.scores[factor])}</span>
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Card>
  );
}

function StrengthMap() {
  return (
    <div className="grid gap-5 lg:grid-cols-12">
      <Card className="lg:col-span-12 overflow-hidden">
        <div className="relative p-6">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-400/15 blur-3xl" />
          <div className="relative">
            <SectionTitle icon={Brain} title="Strength Map" subtitle="A digital-brain style view of how the profile families contribute different strengths to a team system." />
            <div className="grid gap-4 md:grid-cols-4">
              {Object.entries(groups).map(([groupName, group]) => (
                <div key={groupName} className={cx("rounded-3xl border p-5", group.bg, group.border)}>
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-white">{groupName}</h3>
                    <Network className="h-5 w-5 text-white/60" />
                  </div>
                  <p className="mt-3 text-xs leading-5 text-white/60">{group.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {Object.entries(groups).map(([groupName, group]) => (
        <Card key={groupName} className="lg:col-span-6">
          <div className="p-6">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <Pill className={cx(group.bg, group.border)}>{groupName}</Pill>
                <h3 className="mt-3 text-2xl font-bold text-white">{groupName} strengths</h3>
              </div>
              <div className={cx("h-2 w-24 rounded-full bg-gradient-to-r", group.color)} />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              {profiles.filter((profile) => profile.group === groupName).map((profile) => (
                <div key={profile.name} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="font-semibold text-white">{profile.name}</div>
                  <p className="mt-2 text-xs leading-5 text-white/55">{profile.short}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.strengths.map((strength) => (
                      <Pill key={strength}>{strength}</Pill>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function HumanSystemsIntelligenceApp() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [selectedProfile, setSelectedProfile] = useState(profiles[0]);
  const activeTabMeta = tabs.find((tab) => tab.id === activeTab) || tabs[0];
  const ActiveIcon = activeTabMeta.icon;

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-28 top-0 h-96 w-96 rounded-full bg-sky-500/20 blur-3xl" />
        <div className="absolute right-0 top-40 h-96 w-96 rounded-full bg-fuchsia-500/15 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <header className="mb-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.07] p-5 shadow-2xl shadow-black/20 backdrop-blur-xl">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-white/10 p-2">
                  <ActiveIcon className="h-6 w-6" />
                </div>
                <Pill>Manager Intelligence Tool</Pill>
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Human Systems Intelligence</h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-white/62">
                A practical visual app for understanding profiles, comparing styles, testing workplace what-if scenarios, and translating scores into clear management guidance.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-black/20 p-4">
              <div className="text-xs uppercase tracking-[0.2em] text-white/40">Current view</div>
              <div className="mt-2 text-2xl font-bold text-white">{activeTabMeta.label}</div>
              <div className="mt-2 text-sm text-white/50">Selected profile: {selectedProfile.name}</div>
            </div>
          </div>

          <nav className="mt-6 flex gap-2 overflow-x-auto pb-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={cx(
                    "flex shrink-0 items-center gap-2 rounded-2xl border px-4 py-2.5 text-sm transition",
                    isActive
                      ? "border-white/30 bg-white/20 text-white shadow-lg shadow-black/20"
                      : "border-white/10 bg-white/[0.04] text-white/60 hover:bg-white/10 hover:text-white"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </nav>
        </header>

        <AnimatePresence mode="wait">
          <motion.main
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.18 }}
          >
            {activeTab === "dashboard" && <Dashboard selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} />}
            {activeTab === "profiles" && <Profiles selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} />}
            {activeTab === "compare" && <Compare />}
            {activeTab === "whatif" && <WhatIf selectedProfile={selectedProfile} setSelectedProfile={setSelectedProfile} />}
            {activeTab === "meaning" && <MeaningGuide />}
            {activeTab === "matrix" && <ScoreMatrix />}
            {activeTab === "brain" && <StrengthMap />}
            {activeTab === "lenses" && <LensExplorer profile={selectedProfile.name} />}
            {activeTab === "builder" && <EmployeeBuilderMode />}
            {activeTab === "coach" && <AIScenarioCoachMode profile={selectedProfile.name} />}
          </motion.main>
        </AnimatePresence>
      </div>
    </div>
  );
}
