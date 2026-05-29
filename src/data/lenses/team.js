// Team, Role & Collaboration Lenses
export const belbin = {
  id: "belbin", name: "Belbin Team Roles",
  category: "team",
  what: "Belbin identifies 9 team role contributions: Plant (creative), Resource Investigator (networker), Coordinator (facilitator), Shaper (driver), Monitor Evaluator (critic), Teamworker (supporter), Implementer (executor), Completer Finisher (quality), Specialist (expert).",
  why: "PI Dominance → Shaper, Coordinator. PI Formality → Monitor Evaluator, Implementer, Completer Finisher. PI Extraversion → Resource Investigator, Teamworker. Low Formality + high creativity → Plant.",
  how: "Each PI profile was mapped to primary and secondary Belbin roles based on behavioral alignment between PI drives and Belbin's observable team contribution styles.",
  profiles: {
    analyzer:    { primary: "Monitor Evaluator",    secondary: "Specialist",           stress: "Over-critical, stalls decisions",         insight: "Critical analytical eye prevents poor decisions. Risk: perfectionism delays action." },
    captain:     { primary: "Shaper",               secondary: "Coordinator",           stress: "Dominates, reduces buy-in",              insight: "Drives team to results under pressure. Risk: may bulldoze quieter voices." },
    collaborator:{ primary: "Teamworker",           secondary: "Coordinator",           stress: "Avoids confrontation, delays closure",   insight: "Maintains team harmony through difficult periods. Risk: avoids necessary hard calls." },
    controller:  { primary: "Implementer",          secondary: "Shaper",                stress: "Overly rigid, suppresses ideas",         insight: "Turns strategy into workable plans. Risk: rigidity can suppress innovation." },
    craftsman:   { primary: "Implementer",          secondary: "Completer Finisher",    stress: "Perfectionism causes bottlenecks",       insight: "Delivers reliable, quality work. Risk: perfectionism creates delivery delays." },
    individualist:{ primary: "Plant",               secondary: "Specialist",            stress: "Detached, undermines team norms",        insight: "Generates original solutions to complex problems. Risk: can disconnect from team." },
    maverick:    { primary: "Plant",                secondary: "Resource Investigator", stress: "Idea chaos, poor follow-through",        insight: "Creative spark and bold ideas. Risk: lacks follow-through on commitments." },
    operator:    { primary: "Implementer",          secondary: "Completer Finisher",    stress: "Rigid routines block innovation",        insight: "Reliable execution and process adherence. Risk: resists innovation when needed." },
    persuader:   { primary: "Resource Investigator",secondary: "Teamworker",            stress: "Over-optimistic, glosses risks",         insight: "Network builder and external connector. Risk: over-promises and glosses over challenges." },
    promoter:    { primary: "Resource Investigator",secondary: "Shaper",                stress: "Over-promises, inconsistent delivery",   insight: "Activation energy and team enthusiasm. Risk: momentum without sustained delivery." },
    scholar:     { primary: "Monitor Evaluator",    secondary: "Specialist",            stress: "Over-analysis delays action",            insight: "Strategic impartial judgement. Risk: analysis paralysis delays team decisions." },
    specialist:  { primary: "Specialist",           secondary: "Monitor Evaluator",     stress: "Siloed knowledge, poor handoffs",        insight: "Rare expertise and dedicated competence. Risk: knowledge siloism." },
    strategist:  { primary: "Plant",                secondary: "Monitor Evaluator",     stress: "Over-theorizes, misses detail",          insight: "Systems thinking and innovative strategy. Risk: over-theorizes at expense of execution." },
    altruist:    { primary: "Teamworker",           secondary: "Resource Investigator", stress: "Over-accommodates, avoids hard calls",   insight: "Diplomatic team supporter. Risk: over-accommodates and avoids necessary confrontation." },
    guardian:    { primary: "Completer Finisher",   secondary: "Implementer",           stress: "Excess caution, resists change",         insight: "Conscientious quality checker. Risk: excess caution and change resistance." },
    venturer:    { primary: "Shaper",               secondary: "Plant",                 stress: "Pushes risk, provokes conflict",         insight: "Bold challenger and risk-taker. Risk: pushes risk too aggressively." },
    adapter:     { primary: "Teamworker",           secondary: "Implementer",           stress: "Over-adjusts, loses direction",          insight: "Flexible team contributor. Risk: over-adjusts to others and loses own direction." }
  }
};

export const lencioni = {
  id: "lencioni", name: "Lencioni Team Dynamics",
  category: "team",
  what: "Lencioni's Five Dysfunctions model: Absence of Trust (fear of vulnerability), Fear of Conflict (artificial harmony), Lack of Commitment (ambiguity), Avoidance of Accountability, and Inattention to Results.",
  why: "PI drives predict which dysfunction each profile creates or amplifies. Dominance creates strong accountability or fear of conflict. High Extraversion with low Dominance avoids conflict.",
  how: "Each PI profile was mapped to its likely strength and weakness within the Lencioni model based on how PI drives interact with each dysfunction dimension.",
  profiles: {
    analyzer:    { primary: "Strong on accountability through standards", secondary: "Avoids vulnerability, hides doubts",  stress: "Criticism of competence",               insight: "Analytical rigor supports results focus. Perfectionism creates guarded reliability that blocks trust." },
    captain:     { primary: "Strong on results focus",                    secondary: "Intimidates, reduces debate",         stress: "Public challenge to decisions",          insight: "Decisive leadership drives results. Intimidation creates fear of conflict that blocks candor." },
    collaborator:{ primary: "Strong on trust building",                   secondary: "Avoids accountability for harmony",   stress: "Exclusion from decisions",              insight: "Fosters inclusion and trust. Conflict avoidance creates accountability gaps." },
    controller:  { primary: "Strong on accountability",                   secondary: "Suppresses debate, enforces compliance", stress: "Challenges to authority",             insight: "Enforces standards and results. Suppresses debate which creates artificial harmony." },
    craftsman:   { primary: "Reliable but reserved",                      secondary: "Perfectionism stalls progress",       stress: "Rushed timelines",                      insight: "Reliable quality contributor. Perfectionism creates delivery delays that frustrate team." },
    individualist:{ primary: "Authentic individual contributor",          secondary: "Withdraws, undermines cohesion",      stress: "Micromanagement",                       insight: "Values autonomy over team cohesion. Withdrawal creates trust deficits." },
    maverick:    { primary: "Results focus through innovation",           secondary: "Disrupts execution, seeks novelty",   stress: "Process constraints",                   insight: "Drives creative results. Disruption of execution creates commitment failures." },
    operator:    { primary: "Strong on commitment to process",            secondary: "Avoids ambiguity, delays buy-in",     stress: "Vague goals",                           insight: "Needs clarity to commit. Ambiguity creates cautious rather than bold commitment." },
    persuader:   { primary: "Strong conflict mediator",                   secondary: "Personalizes disagreements",          stress: "Public rejection",                      insight: "Skilled at reducing team conflict. Personalizing disagreements creates emotional escalation." },
    promoter:    { primary: "Creates team energy and momentum",           secondary: "Prioritizes visibility over outcomes",stress: "Ignored contributions",                 insight: "Activation energy for team. Visibility focus creates results inattention." },
    scholar:     { primary: "Strong on evidence-based commitment",        secondary: "Over-analysis prevents decisions",    stress: "Pressure for quick answers",            insight: "Evidence ensures quality commitment. Over-analysis creates decision paralysis." },
    specialist:  { primary: "Strong technical commitment",                secondary: "Withdraws from ambiguous goals",      stress: "Asked outside expertise",               insight: "Deep commitment within domain. Withdrawal outside domain creates team gaps." },
    strategist:  { primary: "Systems-level vision and results",          secondary: "Skips operational follow-through",    stress: "Micromanagement of vision",             insight: "Long-horizon accountability. Detail-skipping creates execution gaps." },
    altruist:    { primary: "Builds vulnerability-based trust",          secondary: "Over-accommodates, avoids hard truths",stress: "Interpersonal tension",                insight: "Creates psychological safety through warmth. Over-accommodation enables dysfunction." },
    guardian:    { primary: "Protects team norms and continuity",        secondary: "Resists change, avoids debate",       stress: "Radical proposals",                     insight: "Maintains institutional standards. Change resistance creates commitment to wrong direction." },
    venturer:    { primary: "Bold results orientation",                  secondary: "Moves on before delivery",            stress: "Slow decision cycles",                  insight: "Drives toward new results. Premature exit creates commitment and delivery failures." },
    adapter:     { primary: "Flexible consensus builder",               secondary: "Over-adjusts, dilutes decisions",     stress: "Forced rapid choices",                  insight: "Seeks consensus before commitment. Over-adjustment dilutes strategic direction." }
  }
};

export const roleFit = {
  id: "role-fit", name: "Role Fit",
  category: "team",
  what: "Role Fit examines how well PI profile behavioral drives align with different role demands across five dimensions: Pace, Structure, Autonomy, Social Load, and Change Load.",
  why: "PI drives map directly to role requirement dimensions. High Patience → thrives with steady pace. High Formality → needs high structure. High Dominance → needs high autonomy. High Extraversion → tolerates social load.",
  how: "Each PI profile was assessed across role dimensions based on how PI drives align with different environmental demands.",
  profiles: {
    analyzer:    { primary: "QA, Compliance, Process Design, Analytics",        secondary: "Moderate pace, high structure",      stress: "Ambiguous roles, high social demand",    insight: "Thrives in structured, quality-focused roles. Performance degrades rapidly in ambiguous or high-change environments." },
    captain:     { primary: "Executive, Crisis Lead, Sales Leadership",         secondary: "Fast pace, high autonomy",           stress: "Bureaucratic constraint, micromanagement",insight: "Thrives with clear mandate and visible impact. Micromanagement is the primary performance disabler." },
    collaborator:{ primary: "Team Lead, Community, Internal Communications",    secondary: "Moderate pace, high social",         stress: "Confrontational or individualistic roles",insight: "Thrives in team-centric, harmonious roles. Roles requiring constant confrontation drain performance." },
    controller:  { primary: "Governance, Risk Management, Compliance",          secondary: "Maximum structure, low change",      stress: "Fast-change, ambiguous environments",    insight: "Thrives with clear authority and rule structure. Fast change and ambiguity are the primary disablers." },
    craftsman:   { primary: "Engineering, Skilled Operations, QA",              secondary: "Deep work, high structure",          stress: "High-change, high-social roles",          insight: "Thrives in protected craft environments. Constant change and social demands destroy quality output." },
    individualist:{ primary: "R&D, Design Lead, Thought Leadership",            secondary: "Maximum autonomy, low social",       stress: "Team-dependent, consensus-building roles",insight: "Thrives with creative independence. Team-dependent roles create identity conflict and disengagement." },
    maverick:    { primary: "Innovation Lead, Creative Director, Startup",      secondary: "Very fast, very low structure",      stress: "Compliance-heavy, bureaucratic roles",   insight: "Thrives on disruption and speed. Process-heavy environments extinguish the creative drive." },
    operator:    { primary: "Operations, Scheduling, Customer Service",         secondary: "Steady pace, high structure",        stress: "Chaotic, ambiguous environments",        insight: "Thrives in stable, process-clear operational roles. Chaos is the primary performance disabler." },
    persuader:   { primary: "Sales Lead, Marketing, Change Management",         secondary: "Fast, high social, high influence",  stress: "Detail-intensive, solo roles",           insight: "Thrives in social, influence-rich roles. Isolated or detail-heavy roles deplete performance." },
    promoter:    { primary: "Events, Brand, Community Growth",                  secondary: "Very fast, very high social",        stress: "Sustained deep work, compliance roles",  insight: "Thrives on energy and visibility. Sustained analytical work or compliance roles destroy motivation." },
    scholar:     { primary: "Research Lead, Analytics, Policy",                 secondary: "Slow pace, high autonomy",           stress: "Fast-decision, high-social roles",       insight: "Thrives in evidence-based, analytical roles. Time pressure and social demands degrade performance." },
    specialist:  { primary: "SME, R&D, Technical Lead",                         secondary: "Deep domain, low social",            stress: "Broad generalist, high-change roles",    insight: "Thrives in domain-protected expert roles. Generalist demands are the primary disabler." },
    strategist:  { primary: "Strategy Lead, Program Lead, C-Suite",             secondary: "High autonomy, complex problems",    stress: "Operational micromanagement",            insight: "Thrives with strategic authority. Operational micromanagement destroys the conditions for strategic thinking." },
    altruist:    { primary: "HR, Client Success, Coaching, People Ops",         secondary: "Moderate pace, high social",         stress: "Confrontational, competitive roles",     insight: "Thrives in human-centered, supportive roles. Constant confrontation or competition depletes performance." },
    guardian:    { primary: "Benefits, Facilities, Compliance Operations",      secondary: "Maximum structure, minimum change",  stress: "High-change, innovation roles",          insight: "Thrives with stable structures and clear rules. High-change environments trigger defensive resistance." },
    venturer:    { primary: "Business Development, Growth, Startup PM",         secondary: "Very fast, high autonomy",           stress: "Process-heavy, compliance-driven roles",  insight: "Thrives on bold action and new opportunities. Process-heavy environments kill the drive." },
    adapter:     { primary: "Program Coordinator, PMO Liaison, Cross-functional",secondary: "Flexible, varied contribution",    stress: "Roles requiring strong fixed identity",  insight: "Thrives on varied contribution and cross-team impact. Roles demanding strong consistent identity create strain." }
  }
};