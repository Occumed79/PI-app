// Motivation & Values Lenses
export const reiss = {
  id: "reiss", name: "Reiss Motivation Profile",
  category: "motivation",
  what: "The Reiss Motivation Profile identifies 16 basic desires: Power, Independence, Curiosity, Acceptance, Order, Saving, Honor, Idealism, Social Contact, Family, Status, Vengeance, Romance, Eating, Physical Activity, and Tranquility.",
  why: "PI drives map to Reiss motives. Dominance maps to Power and Independence. Formality maps to Order and Honor. Extraversion maps to Social Contact. Patience maps to Tranquility.",
  how: "Each PI profile was matched to its top 3 Reiss motives based on behavioral alignment between PI drives and fundamental motivational desires.",
  profiles: {
    analyzer:    { primary: "Order, Curiosity, Honor",           secondary: "Mastery orientation",                   stress: "Over-checks, resists ambiguity",          insight: "Driven by accuracy and intellectual precision. Recognition must come through demonstrated competence." },
    captain:     { primary: "Power, Independence, Status",       secondary: "Results and authority",                 stress: "Impatient, controlling",                 insight: "Needs visible authority and impact. Blocked power triggers aggression or exit." },
    collaborator:{ primary: "Acceptance, Social Contact, Idealism", secondary: "Belonging and harmony",             stress: "Withdraws from conflict",                insight: "Team harmony is not optional — it's the fuel. Exclusion is the deepest threat." },
    controller:  { primary: "Order, Power, Honor",               secondary: "Control and correctness",               stress: "Rigid enforcement",                      insight: "Needs authority over process and standards. Chaos is felt as a personal failure." },
    craftsman:   { primary: "Tranquility, Order, Honor",         secondary: "Stability and craft",                   stress: "Quality anxiety",                        insight: "Values routine and mastery. Change must be justified by quality improvement." },
    individualist:{ primary: "Independence, Curiosity, Idealism",secondary: "Authenticity and exploration",         stress: "Withdraws when controlled",              insight: "Must work on own terms. External direction feels like a threat to identity." },
    maverick:    { primary: "Power, Curiosity, Independence",    secondary: "Innovation and disruption",             stress: "Provocative rule-breaking",              insight: "Needs creative impact with maximum freedom. Constraints are the enemy." },
    operator:    { primary: "Order, Tranquility, Family",        secondary: "Stability and belonging",               stress: "Rigidity under chaos",                   insight: "Values team loyalty and process stability. Consistency is the deepest motivator." },
    persuader:   { primary: "Social Contact, Status, Power",     secondary: "Influence and visibility",              stress: "Over-sells, emotional reactivity",        insight: "Energized by people and recognition. Social rejection triggers performance or exit." },
    promoter:    { primary: "Social Contact, Status, Adventure", secondary: "Energy and excitement",                 stress: "Over-promises, seeks new stage",          insight: "Needs audience and stimulation. Being ignored or bored triggers chaotic behavior." },
    scholar:     { primary: "Curiosity, Order, Independence",    secondary: "Knowledge and rigor",                   stress: "Over-analysis, resists action",           insight: "Driven by truth and mastery. Shallow work is demotivating at a fundamental level." },
    specialist:  { primary: "Curiosity, Order, Independence",    secondary: "Domain mastery",                        stress: "Narrow focus, withdrawal",               insight: "Domain expertise is identity. Being pushed outside it creates anxiety and retreat." },
    strategist:  { primary: "Power, Curiosity, Independence",    secondary: "Strategic impact",                      stress: "Over-controls, dismisses dissent",        insight: "Needs to shape systems. Bureaucracy that blocks vision is deeply frustrating." },
    altruist:    { primary: "Acceptance, Idealism, Social Contact", secondary: "Service and purpose",               stress: "Burnout from over-giving",               insight: "Meaning comes from helping. Recognition for contribution is essential to sustain giving." },
    guardian:    { primary: "Order, Tranquility, Honor",         secondary: "Safety and continuity",                 stress: "Defensive rigidity",                     insight: "Protects what works. Change without justification triggers anxiety and resistance." },
    venturer:    { primary: "Power, Adventure, Independence",    secondary: "Bold action and frontiers",             stress: "Impulsive risk-taking",                  insight: "Needs new territory and decisive action. Stagnation is felt as death." },
    adapter:     { primary: "Acceptance, Tranquility, Social Contact", secondary: "Belonging and flexibility",      stress: "Identity loss, over-accommodation",       insight: "Needs inclusion and harmony. Competing demands without prioritization triggers burnout." }
  }
};

export const schwartz = {
  id: "schwartz", name: "Schwartz Values Inventory",
  category: "motivation",
  what: "Schwartz's theory identifies 10 universal values: Power, Achievement, Hedonism, Stimulation, Self-Direction, Universalism, Benevolence, Tradition, Conformity, Security — organized across Self-Enhancement vs. Self-Transcendence and Openness vs. Conservation axes.",
  why: "PI Dominance → Self-Enhancement (Power, Achievement). PI Patience + Formality → Conservation (Security, Conformity, Tradition). Low Formality + high Dominance → Openness (Stimulation, Self-Direction). PI Extraversion → Benevolence.",
  how: "Each PI profile was mapped to its dominant Schwartz value cluster based on PI drive patterns and the behavioral expressions corresponding to Schwartz value dimensions.",
  profiles: {
    analyzer:    { primary: "Conformity, Security",          secondary: "Rules and accuracy",                    stress: "Frustrated by ambiguity",                insight: "Needs predictability and correctness. Violations of process or quality feel like ethical failures." },
    captain:     { primary: "Power, Achievement",            secondary: "Leadership and results",                stress: "Reacts to disloyalty",                   insight: "Driven to achieve and lead. Being undermined triggers power assertion or exit." },
    collaborator:{ primary: "Benevolence, Tradition",        secondary: "Team and fairness",                     stress: "Distressed by conflict",                 insight: "Values cooperative harmony and team continuity. Disruption to community cohesion is deeply stressful." },
    controller:  { primary: "Security, Power",               secondary: "Control and governance",                stress: "Resists loss of authority",              insight: "Authority and order are primary needs. Loss of control triggers punitive behavior." },
    craftsman:   { primary: "Conformity, Achievement",       secondary: "Quality and standards",                 stress: "Distressed by sloppy work",              insight: "Quality is an expression of values. Compromised standards feel like an ethical violation." },
    individualist:{ primary: "Self-Direction, Stimulation",  secondary: "Autonomy and challenge",               stress: "Withdraws under control",                insight: "Freedom and originality are core values. Control feels like an existential constraint." },
    maverick:    { primary: "Stimulation, Self-Direction",   secondary: "Disruption and novelty",                stress: "Frustrated by constraints",              insight: "Lives for novelty and creative challenge. Routine is felt as imprisonment." },
    operator:    { primary: "Conformity, Security",          secondary: "Reliability and order",                 stress: "Frustrated by chaos",                   insight: "Stability and process are core values. Chaos is not just frustrating — it's threatening." },
    persuader:   { primary: "Self-Direction, Stimulation",   secondary: "Influence and visibility",              stress: "Sensitive to rejection",                 insight: "Driven by influence and social impact. Being ignored or rejected triggers strong emotional response." },
    promoter:    { primary: "Stimulation, Hedonism",         secondary: "Energy and excitement",                 stress: "Seeks new stage after rejection",         insight: "Excitement and visibility are values in themselves. Boredom is felt as deprivation." },
    scholar:     { primary: "Self-Direction, Universalism",  secondary: "Knowledge and truth",                   stress: "Overwhelmed by triviality",              insight: "Truth and understanding are the ultimate values. Being asked to do shallow work violates core purpose." },
    specialist:  { primary: "Achievement, Security",         secondary: "Mastery and competence",                stress: "Threatened by incompetence",             insight: "Domain mastery is an achievement value. Incompetence in the work environment is deeply threatening." },
    strategist:  { primary: "Self-Direction, Achievement",   secondary: "Vision and impact",                     stress: "Stifled by bureaucracy",                 insight: "Needs strategic autonomy and impact. Bureaucracy that blocks vision violates core values." },
    altruist:    { primary: "Benevolence, Universalism",     secondary: "Service and inclusion",                 stress: "Hurt by exclusion",                      insight: "Service to others is the primary value. Exclusion or ingratitude triggers deep hurt." },
    guardian:    { primary: "Security, Tradition",           secondary: "Continuity and protection",             stress: "Resists rapid change",                   insight: "Security and continuity are core values. Rapid change feels like a threat to everything that matters." },
    venturer:    { primary: "Stimulation, Self-Direction",   secondary: "Risk and adventure",                    stress: "Chafes under rules",                     insight: "Stimulation and autonomy are fundamental needs. Rules are perceived as obstacles to living fully." },
    adapter:     { primary: "Benevolence, Conformity",       secondary: "Belonging and flexibility",             stress: "Over-extends to belong",                 insight: "Belonging is a core need. Will compromise own needs to maintain group inclusion." }
  }
};

export const motivationalMaps = {
  id: "motivational-maps", name: "Motivational Maps",
  category: "motivation",
  what: "Motivational Maps identifies nine workplace motivators: Friend (belonging), Star (recognition), Expert (mastery), Director (power), Builder (achievement), Creator (creativity), Searcher (meaning), Spirit (freedom), Guardian (stability).",
  why: "PI Dominance drives Achievement motivators (Director, Builder). PI Extraversion drives Relationship motivators (Star, Friend). PI Patience maps to Guardian. PI Formality maps to Expert. The combination creates predictable motivational signatures.",
  how: "Each PI profile's top 1-2 Motivational Maps themes were identified based on behavioral and motivational alignment between PI drives and the nine motivator descriptions.",
  profiles: {
    analyzer:    { primary: "Expert",    secondary: "Defender",   stress: "Withdraws when expertise is questioned",   insight: "Motivated by mastery and being the technical authority. Recognition must come through competence." },
    captain:     { primary: "Director",  secondary: "Builder",    stress: "Reacts strongly to blocked authority",     insight: "Motivated by leadership and visible results. Needs authority to deliver impact." },
    collaborator:{ primary: "Friend",    secondary: "Star",       stress: "Withdraws when excluded",                 insight: "Motivated by team belonging and appreciation. Harmony is the fuel." },
    controller:  { primary: "Defender",  secondary: "Builder",    stress: "Becomes rigid and punitive",              insight: "Motivated by control and reliable systems. Process integrity is the deepest driver." },
    craftsman:   { primary: "Expert",    secondary: "Defender",   stress: "Perfectionism and quality anxiety",       insight: "Motivated by craft mastery and consistent quality. Recognition for precision." },
    individualist:{ primary: "Creator",  secondary: "Searcher",   stress: "Withdraws when creativity is suppressed", insight: "Motivated by originality and authentic purpose. Must express unique perspective." },
    maverick:    { primary: "Creator",   secondary: "Star",       stress: "Provokes when constrained",               insight: "Motivated by disruptive innovation and visibility. Needs to challenge conventions." },
    operator:    { primary: "Defender",  secondary: "Builder",    stress: "Rigidity under chaos",                    insight: "Motivated by process stability and dependable delivery. Consistency is the goal." },
    persuader:   { primary: "Star",      secondary: "Director",   stress: "Seeks recognition when ignored",          insight: "Motivated by influence and recognition. Visibility and social impact drive engagement." },
    promoter:    { primary: "Star",      secondary: "Creator",    stress: "Seeks new stage when invisible",          insight: "Motivated by audience and excitement. Being seen and energizing others is the purpose." },
    scholar:     { primary: "Expert",    secondary: "Searcher",   stress: "Over-analyzes, resists action",           insight: "Motivated by knowledge and truth. Intellectual mastery is the deepest need." },
    specialist:  { primary: "Expert",    secondary: "Defender",   stress: "Withdraws when expertise ignored",        insight: "Motivated by domain mastery and stability. Recognition for technical depth." },
    strategist:  { primary: "Builder",   secondary: "Expert",     stress: "Over-controls when vision is blocked",    insight: "Motivated by strategic impact and systems creation. Needs authority to shape outcomes." },
    altruist:    { primary: "Friend",    secondary: "Spirit",     stress: "Burnout from over-giving",               insight: "Motivated by serving others and purpose. Needs to see human impact of their work." },
    guardian:    { primary: "Defender",  secondary: "Searcher",   stress: "Defensive rigidity",                     insight: "Motivated by safety and continuity. Protecting what works is a core purpose." },
    venturer:    { primary: "Builder",   secondary: "Creator",    stress: "Impulsive when constrained",              insight: "Motivated by bold creation and adventure. Needs new frontiers to maintain engagement." },
    adapter:     { primary: "Friend",    secondary: "Searcher",   stress: "Over-accommodates, loses identity",       insight: "Motivated by belonging and contributing across contexts. Flexibility is the strength." }
  }
};

export const sdi = {
  id: "sdi", name: "SDI (Strength Deployment Inventory)",
  category: "motivation",
  what: "The SDI maps motivational values into three primary systems: Blue-Green (People-focused, cooperative), Red (Results-focused, assertive), and Hub (Flexible). It maps how strengths become liabilities under conflict.",
  why: "PI Extraversion + low Dominance → Blue-Green. PI Dominance → Red. Balanced → Hub. The conflict-shift model reveals how each profile's strength becomes a liability under pressure.",
  how: "Each PI profile was mapped to its primary SDI Motivational Value System and conflict-stage shift based on PI drives and behavioral stress expressions.",
  profiles: {
    analyzer:    { primary: "Blue (Task-focused)",   secondary: "Withdraws into critique",          stress: "Overcritical, seeks process perfection",  insight: "Strength in analytical rigor becomes obsessive perfectionism under stress." },
    captain:     { primary: "Red (Results-focused)", secondary: "Competes aggressively",            stress: "Dominates, demands loyalty",              insight: "Drive for results becomes domination and loyalty testing under pressure." },
    collaborator:{ primary: "Green (People-focused)",secondary: "Accommodates, yields",             stress: "Avoids conflict, loses self",              insight: "Harmony-seeking becomes conflict-avoidant self-erasure under stress." },
    controller:  { primary: "Blue (Task-focused)",   secondary: "Enforces rules, punishes",         stress: "Controlling, punitive, rigid",             insight: "Process orientation becomes punitive compliance enforcement under stress." },
    craftsman:   { primary: "Blue (Task-focused)",   secondary: "Retreats into quality",            stress: "Perfectionism, withdrawal",               insight: "Quality focus becomes withdrawal and perfectionist paralysis under stress." },
    individualist:{ primary: "Red (Self-focused)",   secondary: "Detaches, challenges",             stress: "Isolates, dismisses others",              insight: "Independent thinking becomes stubborn isolation and dismissal of input under stress." },
    maverick:    { primary: "Red (Self-focused)",    secondary: "Provokes boundaries",              stress: "Tests limits, creates disruption",         insight: "Creative disruption becomes reckless boundary-pushing under stress." },
    operator:    { primary: "Blue (Task-focused)",   secondary: "Enforces routine rigidly",         stress: "Process rigidity",                        insight: "Process reliability becomes inflexible routine enforcement under stress." },
    persuader:   { primary: "Green (People-focused)",secondary: "Personalizes, over-emotionalizes", stress: "Takes conflict personally",               insight: "Social influence becomes emotional reactivity and over-personalization under stress." },
    promoter:    { primary: "Red (Self-focused)",    secondary: "Seeks new stage",                  stress: "Dramatic reactions, abandons tasks",       insight: "Activation energy becomes dramatic self-promotion and task abandonment under stress." },
    scholar:     { primary: "Blue (Task-focused)",   secondary: "Over-analyzes, delays",            stress: "Retreats into research",                  insight: "Intellectual rigor becomes endless re-analysis and action avoidance under stress." },
    specialist:  { primary: "Blue (Task-focused)",   secondary: "Defends domain expertise",         stress: "Withdraws, guards knowledge",             insight: "Technical mastery becomes guarded siloism and withdrawal under stress." },
    strategist:  { primary: "Blue (Task-focused)",   secondary: "Overasserts vision, dismisses",    stress: "Logic steamrolls people",                 insight: "Strategic clarity becomes over-assertion and dismissal of dissent under stress." },
    altruist:    { primary: "Green (People-focused)",secondary: "Over-accommodates, martyrs",       stress: "Self-sacrifice, resentment",              insight: "Service orientation becomes self-martyrdom and silent resentment under stress." },
    guardian:    { primary: "Blue (Task-focused)",   secondary: "Defends norms, resists change",    stress: "Defensive caution",                       insight: "Stewardship becomes defensive rigidity and progress-blocking under stress." },
    venturer:    { primary: "Red (Self-focused)",    secondary: "Escalates risk-taking",            stress: "Impulsive, ignores team impact",           insight: "Boldness becomes reckless risk-taking and team impact blindness under stress." },
    adapter:     { primary: "Green (People-focused)",secondary: "Over-adjusts to fit in",           stress: "Loses identity, hidden resentment",        insight: "Flexibility becomes self-erasure and invisible resentment under stress." }
  }
};

export const spiralDynamics = {
  id: "spiral-dynamics", name: "Spiral Dynamics / Graves Values",
  category: "motivation",
  what: "Spiral Dynamics maps worldview stages from survival (Beige) through tribal (Purple), power (Red), order (Blue), achievement (Orange), relational (Green), integrative (Yellow), to holistic (Turquoise).",
  why: "PI drives map to value tiers: High Formality + Patience → Blue (order). High Dominance + Low Patience → Red/Orange (power/achievement). High Extraversion → Green (relational). High strategic thinking → Yellow.",
  how: "Each PI profile was mapped to its primary Spiral Dynamics tier and stress-shift pattern based on PI drive combinations.",
  profiles: {
    analyzer:    { primary: "Blue (Order)",           secondary: "Rule-based precision",              stress: "Tightens rules, becomes rigid",           insight: "Lives in Blue — rules, procedures, and correctness are the foundation of order." },
    captain:     { primary: "Red → Orange",           secondary: "Power and achievement",             stress: "More forceful, less collaborative",       insight: "Operates in Red-Orange — command, results, and visible impact are the primary drives." },
    collaborator:{ primary: "Green",                  secondary: "Team cohesion and inclusion",       stress: "Over-sacrifices for harmony",             insight: "Lives in Green — community, fairness, and consensus are the operating system." },
    controller:  { primary: "Blue (Order)",           secondary: "Governance and compliance",         stress: "More authoritarian",                      insight: "Deep Blue — rules are the infrastructure of reality. Violations are personal affronts." },
    craftsman:   { primary: "Blue",                   secondary: "Craft and duty",                    stress: "Tightens standards, delays delivery",     insight: "Blue duty orientation expressed through craft mastery and reliability." },
    individualist:{ primary: "Yellow / Orange",       secondary: "Autonomy and uniqueness",           stress: "Withdraws into idiosyncrasy",             insight: "Yellow independence — self-directed systems thinker with Orange achievement orientation." },
    maverick:    { primary: "Yellow / Orange",        secondary: "Innovation and challenge",          stress: "Provokes chaos under constraint",          insight: "Orange-Yellow innovator — achievement through disruption and creative challenge." },
    operator:    { primary: "Blue",                   secondary: "Process and reliability",           stress: "Procedural and blunt",                   insight: "Blue operational reliability — process adherence and consistency are core values." },
    persuader:   { primary: "Orange → Green",         secondary: "Influence and social leverage",     stress: "Personalizes setbacks",                  insight: "Orange achievement through Green social influence — status and belonging combined." },
    promoter:    { primary: "Red → Orange",           secondary: "Visibility and activation",         stress: "Seeks new stage after rejection",         insight: "Red energy through Orange achievement lens — visibility and activation are the goals." },
    scholar:     { primary: "Yellow / Blue",          secondary: "Knowledge and systems",             stress: "Over-refines, delays action",             insight: "Yellow integrative thinking with Blue methodological rigor." },
    specialist:  { primary: "Blue → Orange",          secondary: "Expertise and standards",           stress: "Retreats to technical silo",              insight: "Blue standards orientation evolving toward Orange achievement through technical mastery." },
    strategist:  { primary: "Yellow / Turquoise",     secondary: "Systems and purpose",               stress: "Over-complex framing",                   insight: "Yellow integrative systems thinker — sees the whole system and acts at its level." },
    altruist:    { primary: "Green",                  secondary: "Community and care",                stress: "Over-sacrifices when threatened",          insight: "Pure Green — community care, inclusion, and collective wellbeing are the operating system." },
    guardian:    { primary: "Blue",                   secondary: "Safety and preservation",           stress: "Strong resistance to change",             insight: "Deepest Blue — protecting existing structures and norms is the primary purpose." },
    venturer:    { primary: "Orange → Red",           secondary: "Competitive and entrepreneurial",   stress: "Escalates risk-taking",                  insight: "Orange entrepreneurial drive with Red power orientation — achievement through bold action." },
    adapter:     { primary: "Green → Blue",           secondary: "Harmony and adaptation",            stress: "Over-adjusts to group norms",             insight: "Green belonging with Blue structure — adaptive harmony-seeker." }
  }
};

export const workValues = {
  id: "work-values", name: "Work Values Inventory",
  category: "motivation",
  what: "The Work Values Inventory identifies practical workplace priorities: Achievement, Independence, Recognition, Relationships, Support, Working Conditions, and Security — predicting what someone needs to stay engaged.",
  why: "PI drives directly predict work values. Dominance → Achievement, Independence. Extraversion → Recognition, Relationships. Patience → Working Conditions, Security. Formality → Achievement (quality), Support.",
  how: "Each PI profile's top work values were identified based on behavioral alignment between PI drives and the work conditions that enable maximum performance.",
  profiles: {
    analyzer:    { primary: "Accuracy, Security",         secondary: "Detailed procedures",               stress: "Blames ambiguity, disengages",           insight: "Work only has meaning when accuracy is possible and standards are high." },
    captain:     { primary: "Achievement, Power",         secondary: "Leadership and outcomes",           stress: "Reacts to disloyalty or undermining",    insight: "Work has meaning when impact and authority are visible." },
    collaborator:{ primary: "Cooperation, Fairness",      secondary: "Team harmony",                      stress: "Withdraws if excluded",                  insight: "Work has meaning when relationships are healthy and fairness is evident." },
    controller:  { primary: "Authority, Order",           secondary: "Clear roles and rules",             stress: "Tightens control, becomes punitive",     insight: "Work has meaning when authority is clear and process is followed." },
    craftsman:   { primary: "Quality, Pride",             secondary: "High standards and mastery",        stress: "Paralysis when quality is threatened",   insight: "Work has meaning when craftsmanship is possible and recognized." },
    individualist:{ primary: "Autonomy, Originality",     secondary: "Independent contribution",          stress: "Withdraws under micromanagement",        insight: "Work has meaning when original thinking is possible and autonomous." },
    maverick:    { primary: "Creativity, Freedom",        secondary: "Innovation and disruption",         stress: "Provokes to regain autonomy",            insight: "Work has meaning when creative disruption is possible and valued." },
    operator:    { primary: "Reliability, Orderliness",   secondary: "Consistent execution",              stress: "Frustrated by chaos",                   insight: "Work has meaning when processes are stable and outputs are reliable." },
    persuader:   { primary: "Recognition, Influence",     secondary: "Social impact",                     stress: "Over-emotional when ignored",            insight: "Work has meaning when influence is felt and recognition is visible." },
    promoter:    { primary: "Excitement, Visibility",     secondary: "Energy and audience",               stress: "Moves on quickly after slights",          insight: "Work has meaning when excitement is present and contributions are visible." },
    scholar:     { primary: "Knowledge, Truth",           secondary: "Intellectual rigor",                stress: "Disengages from trivial work",           insight: "Work has meaning when truth-seeking and deep analysis are possible." },
    specialist:  { primary: "Mastery, Competence",        secondary: "Technical ownership",               stress: "Withdraws from non-expert tasks",        insight: "Work has meaning when domain expertise is applied and recognized." },
    strategist:  { primary: "Autonomy, Impact",           secondary: "Strategic ownership",               stress: "Frustrated by bureaucracy",              insight: "Work has meaning when strategic autonomy is available and impact is visible." },
    altruist:    { primary: "Relatedness, Service",       secondary: "Helping and purpose",               stress: "Takes criticism personally",             insight: "Work has meaning when helping others and human impact are central." },
    guardian:    { primary: "Stability, Tradition",       secondary: "Process and continuity",            stress: "Resists rapid change",                   insight: "Work has meaning when familiar structures are preserved and continuity protected." },
    venturer:    { primary: "Autonomy, Stimulation",      secondary: "Adventure and bold action",         stress: "Breaks rules, seeks new outlets",        insight: "Work has meaning when autonomous risk-taking and stimulation are possible." },
    adapter:     { primary: "Belonging, Flexibility",     secondary: "Collaborative support",             stress: "Over-extends to fit in",                 insight: "Work has meaning when belonging is secure and flexibility is recognized." }
  }
};

export const purposeMeaning = {
  id: "purpose-meaning", name: "Purpose & Meaning Lens",
  category: "motivation",
  what: "The Purpose & Meaning Lens examines what gives each profile sustained engagement, contribution, and significance at work — beyond task completion.",
  why: "PI drives predict what constitutes meaningful work. Dominance → meaning through impact. Formality → meaning through excellence. Extraversion → meaning through connection. Patience → meaning through stability.",
  how: "Each PI profile was analyzed for its primary source of meaning, best-fit roles, and signals of meaning-loss based on PI drives.",
  profiles: {
    analyzer:    { primary: "Mastery and correctness",              secondary: "QA, analytics, compliance",           stress: "Feels pointless, disengages",           insight: "Meaning comes from precision and preventing errors. Sloppy work is existentially draining." },
    captain:     { primary: "Leading impact and results",           secondary: "Executive, mission lead",             stress: "Feels undermined, reacts strongly",      insight: "Meaning comes from command and visible results. Authority erosion is deeply threatening." },
    collaborator:{ primary: "Building belonging and harmony",       secondary: "Team lead, community builder",        stress: "Withdraws when team fractures",          insight: "Meaning comes from relational harmony. Team dysfunction is a direct loss of purpose." },
    controller:  { primary: "Order and system integrity",           secondary: "Governance, ops leadership",          stress: "Sees chaos, becomes punitive",           insight: "Meaning comes from maintaining order and system integrity." },
    craftsman:   { primary: "Pride in workmanship",                 secondary: "Engineering, craft roles",            stress: "Disillusioned by sloppy outcomes",       insight: "Meaning comes from craft mastery and the pride of excellent work." },
    individualist:{ primary: "Expressing unique identity",          secondary: "Creative lead, solo contributor",     stress: "Feels constrained, withdraws",          insight: "Meaning comes from authentic expression of unique perspective." },
    maverick:    { primary: "Challenging the status quo",           secondary: "Innovation labs, skunkworks",         stress: "Boredom leads to provocation",          insight: "Meaning comes from disruption and creative challenge. Routine is meaningless." },
    operator:    { primary: "Delivering dependable results",        secondary: "Operations, logistics",               stress: "Frustrated by unpredictability",         insight: "Meaning comes from reliable delivery and operational excellence." },
    persuader:   { primary: "Moving people to action",             secondary: "Sales, advocacy, evangelism",         stress: "Feels invisible, loses drive",           insight: "Meaning comes from influence and moving others. Being blocked from impact is devastating." },
    promoter:    { primary: "Sparking energy and attention",        secondary: "Events, launches, growth",            stress: "Seeks new stages, abandons tasks",       insight: "Meaning comes from activation and visibility. Invisibility kills engagement." },
    scholar:     { primary: "Advancing understanding",             secondary: "Research, analytics, policy",         stress: "Loses interest in surface work",         insight: "Meaning comes from contributing to knowledge. Shallow work is personally offensive." },
    specialist:  { primary: "Deep expertise impact",               secondary: "R&D, specialist contributor",         stress: "Alienated by broad tasks",              insight: "Meaning comes from deep domain contribution. Generalist demands feel meaningless." },
    strategist:  { primary: "Shaping systems and legacy",          secondary: "Strategy, transformation lead",       stress: "Bureaucracy drains motivation",          insight: "Meaning comes from shaping systems that outlast the individual." },
    altruist:    { primary: "Helping others grow",                 secondary: "People ops, coaching, care",          stress: "Hurt by exclusion or coldness",          insight: "Meaning comes from human impact. Environments that don't value people are deeply draining." },
    guardian:    { primary: "Preserving continuity",               secondary: "Risk, compliance, stewardship",       stress: "Anxiety when norms erode",              insight: "Meaning comes from protecting what matters. Change without justification feels like loss of purpose." },
    venturer:    { primary: "Creating new possibilities",          secondary: "Founder, product explorer",           stress: "Stifled by rules, seeks exit",          insight: "Meaning comes from frontier-making. Constraints destroy the source of meaning." },
    adapter:     { primary: "Being useful and included",           secondary: "Program coordinator, support",        stress: "Over-giving, loses identity",            insight: "Meaning comes from being needed and contributing across contexts." }
  }
};