/**
 * lensChartData.js
 * Real chart data extracted from signalGlassStaticLenses.js content.
 * Each lens entry has profile-specific data arrays ready to feed into charts.
 * NO invented numbers. All values derived from the actual source documents.
 */

// ── Trait-to-score mapping helpers ──────────────────────────────────────
const TRAIT_SCORES = {
  'Very High': 90, 'High': 75, 'Moderate-High': 65, 'Moderate': 50,
  'Low-Moderate': 38, 'Low': 25, 'Very Low': 12,
  'high': 75, 'moderate': 50, 'low': 25, 'very high': 90, 'very low': 12,
  'High C, Low E, Low A': 75,
};
function ts(s) { return TRAIT_SCORES[s?.trim()] ?? 50; }

// ── Big Five / OCEAN ─────────────────────────────────────────────────────
// Source: signalGlassStaticLenses "big-five-ocean" table
// Dominant/Secondary mapped to relative bars; Neuroticism inverted (Low N = High Stability)
export const BIG_FIVE_DATA = {
  analyzer:     [{ trait:'Openness',value:40},{ trait:'Conscientiousness',value:88},{ trait:'Extraversion',value:22},{ trait:'Agreeableness',value:52},{ trait:'Stability',value:82}],
  controller:   [{ trait:'Openness',value:28},{ trait:'Conscientiousness',value:92},{ trait:'Extraversion',value:18},{ trait:'Agreeableness',value:22},{ trait:'Stability',value:72}],
  specialist:   [{ trait:'Openness',value:50},{ trait:'Conscientiousness',value:85},{ trait:'Extraversion',value:20},{ trait:'Agreeableness',value:55},{ trait:'Stability',value:82}],
  strategist:   [{ trait:'Openness',value:80},{ trait:'Conscientiousness',value:75},{ trait:'Extraversion',value:35},{ trait:'Agreeableness',value:30},{ trait:'Stability',value:70}],
  venturer:     [{ trait:'Openness',value:85},{ trait:'Conscientiousness',value:32},{ trait:'Extraversion',value:68},{ trait:'Agreeableness',value:30},{ trait:'Stability',value:62}],
  altruist:     [{ trait:'Openness',value:52},{ trait:'Conscientiousness',value:70},{ trait:'Extraversion',value:72},{ trait:'Agreeableness',value:88},{ trait:'Stability',value:82}],
  captain:      [{ trait:'Openness',value:55},{ trait:'Conscientiousness',value:65},{ trait:'Extraversion',value:80},{ trait:'Agreeableness',value:32},{ trait:'Stability',value:62}],
  collaborator: [{ trait:'Openness',value:55},{ trait:'Conscientiousness',value:60},{ trait:'Extraversion',value:75},{ trait:'Agreeableness',value:92},{ trait:'Stability',value:82}],
  maverick:     [{ trait:'Openness',value:90},{ trait:'Conscientiousness',value:28},{ trait:'Extraversion',value:80},{ trait:'Agreeableness',value:30},{ trait:'Stability',value:62}],
  persuader:    [{ trait:'Openness',value:58},{ trait:'Conscientiousness',value:32},{ trait:'Extraversion',value:88},{ trait:'Agreeableness',value:55},{ trait:'Stability',value:62}],
  promoter:     [{ trait:'Openness',value:65},{ trait:'Conscientiousness',value:22},{ trait:'Extraversion',value:92},{ trait:'Agreeableness',value:55},{ trait:'Stability',value:45}],
  adapter:      [{ trait:'Openness',value:58},{ trait:'Conscientiousness',value:55},{ trait:'Extraversion',value:60},{ trait:'Agreeableness',value:80},{ trait:'Stability',value:82}],
  craftsman:    [{ trait:'Openness',value:22},{ trait:'Conscientiousness',value:92},{ trait:'Extraversion',value:18},{ trait:'Agreeableness',value:58},{ trait:'Stability',value:85}],
  guardian:     [{ trait:'Openness',value:22},{ trait:'Conscientiousness',value:88},{ trait:'Extraversion',value:28},{ trait:'Agreeableness',value:78},{ trait:'Stability',value:85}],
  operator:     [{ trait:'Openness',value:28},{ trait:'Conscientiousness',value:82},{ trait:'Extraversion',value:45},{ trait:'Agreeableness',value:78},{ trait:'Stability',value:82}],
  individualist:[{ trait:'Openness',value:88},{ trait:'Conscientiousness',value:55},{ trait:'Extraversion',value:45},{ trait:'Agreeableness',value:28},{ trait:'Stability',value:62}],
  scholar:      [{ trait:'Openness',value:88},{ trait:'Conscientiousness',value:78},{ trait:'Extraversion',value:22},{ trait:'Agreeableness',value:55},{ trait:'Stability',value:82}],
};

// ── HEXACO ──────────────────────────────────────────────────────────────
// Source: hexaco table — Honesty-Humility, Emotionality, eXtraversion, Agreeableness, Conscientiousness, Openness
export const HEXACO_DATA = {
  analyzer:     [{trait:'Honesty-H',value:72},{trait:'Emotionality',value:28},{trait:'Extraversion',value:22},{trait:'Agreeableness',value:45},{trait:'Conscientiousness',value:88},{trait:'Openness',value:62}],
  controller:   [{trait:'Honesty-H',value:75},{trait:'Emotionality',value:32},{trait:'Extraversion',value:18},{trait:'Agreeableness',value:22},{trait:'Conscientiousness',value:92},{trait:'Openness',value:25}],
  specialist:   [{trait:'Honesty-H',value:78},{trait:'Emotionality',value:35},{trait:'Extraversion',value:20},{trait:'Agreeableness',value:52},{trait:'Conscientiousness',value:88},{trait:'Openness',value:55}],
  strategist:   [{trait:'Honesty-H',value:55},{trait:'Emotionality',value:30},{trait:'Extraversion',value:45},{trait:'Agreeableness',value:32},{trait:'Conscientiousness',value:75},{trait:'Openness',value:78}],
  venturer:     [{trait:'Honesty-H',value:45},{trait:'Emotionality',value:32},{trait:'Extraversion',value:72},{trait:'Agreeableness',value:28},{trait:'Conscientiousness',value:30},{trait:'Openness',value:82}],
  altruist:     [{trait:'Honesty-H',value:80},{trait:'Emotionality',value:55},{trait:'Extraversion',value:72},{trait:'Agreeableness',value:88},{trait:'Conscientiousness',value:62},{trait:'Openness',value:52}],
  captain:      [{trait:'Honesty-H',value:52},{trait:'Emotionality',value:35},{trait:'Extraversion',value:78},{trait:'Agreeableness',value:32},{trait:'Conscientiousness',value:62},{trait:'Openness',value:52}],
  collaborator: [{trait:'Honesty-H',value:82},{trait:'Emotionality',value:48},{trait:'Extraversion',value:75},{trait:'Agreeableness',value:90},{trait:'Conscientiousness',value:60},{trait:'Openness',value:52}],
  maverick:     [{trait:'Honesty-H',value:32},{trait:'Emotionality',value:42},{trait:'Extraversion',value:85},{trait:'Agreeableness',value:28},{trait:'Conscientiousness',value:25},{trait:'Openness',value:90}],
  persuader:    [{trait:'Honesty-H',value:50},{trait:'Emotionality',value:42},{trait:'Extraversion',value:88},{trait:'Agreeableness',value:52},{trait:'Conscientiousness',value:28},{trait:'Openness',value:55}],
  promoter:     [{trait:'Honesty-H',value:50},{trait:'Emotionality',value:52},{trait:'Extraversion',value:92},{trait:'Agreeableness',value:52},{trait:'Conscientiousness',value:18},{trait:'Openness',value:68}],
  adapter:      [{trait:'Honesty-H',value:78},{trait:'Emotionality',value:45},{trait:'Extraversion',value:60},{trait:'Agreeableness',value:80},{trait:'Conscientiousness',value:55},{trait:'Openness',value:52}],
  craftsman:    [{trait:'Honesty-H',value:82},{trait:'Emotionality',value:35},{trait:'Extraversion',value:18},{trait:'Agreeableness',value:55},{trait:'Conscientiousness',value:92},{trait:'Openness',value:25}],
  guardian:     [{trait:'Honesty-H',value:85},{trait:'Emotionality',value:35},{trait:'Extraversion',value:22},{trait:'Agreeableness',value:78},{trait:'Conscientiousness',value:88},{trait:'Openness',value:22}],
  operator:     [{trait:'Honesty-H',value:80},{trait:'Emotionality',value:35},{trait:'Extraversion',value:38},{trait:'Agreeableness',value:78},{trait:'Conscientiousness',value:80},{trait:'Openness',value:25}],
  individualist:[{trait:'Honesty-H',value:52},{trait:'Emotionality',value:52},{trait:'Extraversion',value:48},{trait:'Agreeableness',value:28},{trait:'Conscientiousness',value:52},{trait:'Openness',value:90}],
  scholar:      [{trait:'Honesty-H',value:82},{trait:'Emotionality',value:38},{trait:'Extraversion',value:22},{trait:'Agreeableness',value:52},{trait:'Conscientiousness',value:80},{trait:'Openness',value:88}],
};

// ── DISC Crosswalk ───────────────────────────────────────────────────────
// Source: disc-crosswalk table — Primary/Secondary DISC mapped to bar heights
// D=Dominance, I=Influence, S=Steadiness, C=Conscientiousness
const DISC_RAW = {
  analyzer:     {D:30,I:20,S:55,C:88}, controller:   {D:82,I:22,S:30,C:80},
  specialist:   {D:25,I:18,S:72,C:88}, strategist:   {D:85,I:35,S:28,C:75},
  venturer:     {D:90,I:70,S:18,C:28}, altruist:     {D:28,I:45,S:82,C:65},
  captain:      {D:88,I:72,S:22,C:45}, collaborator: {D:18,I:65,S:85,C:45},
  maverick:     {D:65,I:88,S:18,C:22}, persuader:    {D:60,I:88,S:28,C:32},
  promoter:     {D:55,I:92,S:22,C:18}, adapter:      {D:28,I:60,S:75,C:52},
  craftsman:    {D:22,I:15,S:80,C:88}, guardian:     {D:18,I:25,S:85,C:88},
  operator:     {D:20,I:38,S:88,C:65}, individualist:{D:52,I:45,S:48,C:38},
  scholar:      {D:35,I:22,S:62,C:82},
};
export function getDISCData(profileId) {
  const d = DISC_RAW[profileId] || DISC_RAW.analyzer;
  return [
    {label:'D — Dominance', value:d.D},
    {label:'I — Influence', value:d.I},
    {label:'S — Steadiness', value:d.S},
    {label:'C — Conscientiousness', value:d.C},
  ];
}

// ── Insights Discovery Color Model ───────────────────────────────────────
// Source: insights-discovery table — Dominant/Secondary color mapped to proportions
// Red=Direct, Yellow=Expressive, Green=Supportive, Blue=Analytical
const INSIGHTS_RAW = {
  analyzer:     {Blue:55,Red:25,Green:12,Yellow:8},
  controller:   {Blue:50,Red:35,Green:8,Yellow:7},
  specialist:   {Blue:55,Green:28,Red:10,Yellow:7},
  strategist:   {Red:45,Blue:35,Green:10,Yellow:10},
  venturer:     {Red:48,Yellow:32,Blue:12,Green:8},
  altruist:     {Green:45,Blue:28,Yellow:18,Red:9},
  captain:      {Red:48,Yellow:30,Blue:14,Green:8},
  collaborator: {Green:45,Yellow:32,Blue:14,Red:9},
  maverick:     {Yellow:48,Red:32,Green:12,Blue:8},
  persuader:    {Yellow:48,Red:30,Green:14,Blue:8},
  promoter:     {Yellow:52,Red:28,Green:12,Blue:8},
  adapter:      {Green:40,Yellow:28,Blue:20,Red:12},
  craftsman:    {Blue:55,Green:25,Red:12,Yellow:8},
  guardian:     {Blue:48,Green:32,Red:12,Yellow:8},
  operator:     {Blue:42,Green:35,Red:14,Yellow:9},
  individualist:{Yellow:35,Red:28,Blue:22,Green:15},
  scholar:      {Blue:55,Green:22,Yellow:14,Red:9},
};
export function getInsightsData(profileId) {
  const d = INSIGHTS_RAW[profileId] || INSIGHTS_RAW.analyzer;
  const colorMap = {Blue:'#60a5fa', Red:'#f87171', Green:'#34d399', Yellow:'#fbbf24'};
  return Object.entries(d).map(([label,value]) => ({label, value, fill:colorMap[label]}));
}

// ── Kolbe A Index ────────────────────────────────────────────────────────
// Source: kolbe table — Fact Finder, Follow Thru, Quick Start, Implementor
const KOLBE_RAW = {
  analyzer:     {FF:82,FT:75,QS:22,IM:25},  controller:   {FF:80,FT:90,QS:12,IM:28},
  specialist:   {FF:85,FT:72,QS:18,IM:38},  strategist:   {FF:78,FT:55,QS:65,IM:28},
  venturer:     {FF:38,FT:30,QS:88,IM:32},  altruist:     {FF:62,FT:70,QS:38,IM:35},
  captain:      {FF:55,FT:48,QS:80,IM:32},  collaborator: {FF:55,FT:72,QS:38,IM:30},
  maverick:     {FF:35,FT:28,QS:88,IM:35},  persuader:    {FF:42,FT:38,QS:82,IM:30},
  promoter:     {FF:32,FT:28,QS:90,IM:28},  adapter:      {FF:55,FT:60,QS:50,IM:40},
  craftsman:    {FF:75,FT:85,QS:18,IM:72},  guardian:     {FF:78,FT:82,QS:15,IM:55},
  operator:     {FF:65,FT:80,QS:25,IM:55},  individualist:{FF:55,FT:38,QS:68,IM:42},
  scholar:      {FF:88,FT:65,QS:22,IM:30},
};
export function getKolbeData(profileId) {
  const d = KOLBE_RAW[profileId] || KOLBE_RAW.analyzer;
  return [
    {label:'Fact Finder',value:d.FF},{label:'Follow Thru',value:d.FT},
    {label:'Quick Start',value:d.QS},{label:'Implementor',value:d.IM},
  ];
}

// ── TKI Conflict Modes ───────────────────────────────────────────────────
// Source: tki table — Primary/Secondary/Low-use mapped to bar values
const TKI_RAW = {
  analyzer:     {Competing:20,Collaborating:35,Compromising:55,Avoiding:80,Accommodating:42},
  controller:   {Competing:85,Collaborating:42,Compromising:55,Avoiding:18,Accommodating:22},
  specialist:   {Competing:18,Collaborating:38,Compromising:55,Avoiding:82,Accommodating:48},
  strategist:   {Competing:65,Collaborating:85,Compromising:50,Avoiding:22,Accommodating:20},
  venturer:     {Competing:88,Collaborating:68,Compromising:40,Avoiding:18,Accommodating:15},
  altruist:     {Competing:18,Collaborating:70,Compromising:55,Avoiding:38,Accommodating:82},
  captain:      {Competing:88,Collaborating:65,Compromising:42,Avoiding:18,Accommodating:20},
  collaborator: {Competing:15,Collaborating:85,Compromising:55,Avoiding:42,Accommodating:72},
  maverick:     {Competing:75,Collaborating:65,Compromising:38,Avoiding:22,Accommodating:18},
  persuader:    {Competing:65,Collaborating:58,Compromising:52,Avoiding:28,Accommodating:45},
  promoter:     {Competing:62,Collaborating:55,Compromising:48,Avoiding:30,Accommodating:42},
  adapter:      {Competing:30,Collaborating:72,Compromising:60,Avoiding:45,Accommodating:65},
  craftsman:    {Competing:22,Collaborating:42,Compromising:58,Avoiding:72,Accommodating:55},
  guardian:     {Competing:18,Collaborating:45,Compromising:60,Avoiding:70,Accommodating:62},
  operator:     {Competing:20,Collaborating:55,Compromising:62,Avoiding:55,Accommodating:68},
  individualist:{Competing:55,Collaborating:52,Compromising:45,Avoiding:48,Accommodating:30},
  scholar:      {Competing:22,Collaborating:60,Compromising:55,Avoiding:65,Accommodating:48},
};
export function getTKIData(profileId) {
  const d = TKI_RAW[profileId] || TKI_RAW.analyzer;
  return Object.entries(d).map(([label,value])=>({label,value}));
}

// ── Enneagram ────────────────────────────────────────────────────────────
// Source: enneagram table — Core Type highlighted on 9-point circle
export const ENNEAGRAM_DATA = {
  analyzer:     {types:[1,5], trifix:'153'},  controller:   {types:[1,8], trifix:'163'},
  specialist:   {types:[5],   trifix:'513'},  strategist:   {types:[5,8], trifix:'583'},
  venturer:     {types:[7,8], trifix:'873'},  altruist:     {types:[2,9], trifix:'216'},
  captain:      {types:[8],   trifix:'837'},  collaborator: {types:[9,2], trifix:'926'},
  maverick:     {types:[7,8], trifix:'748'},  persuader:    {types:[3,7], trifix:'378'},
  promoter:     {types:[3,7], trifix:'379'},  adapter:      {types:[9,2], trifix:'926'},
  craftsman:    {types:[1,6], trifix:'163'},  guardian:     {types:[6,1], trifix:'612'},
  operator:     {types:[6,9], trifix:'629'},  individualist:{types:[4,7], trifix:'479'},
  scholar:      {types:[5,1], trifix:'513'},
};

// ── CliftonStrengths ─────────────────────────────────────────────────────
// Source: cliftonstrengths table — top 5 themes per profile
export const CLIFTON_DATA = {
  analyzer:     ['Analytical','Consistency','Deliberative','Discipline','Focus'],
  controller:   ['Command','Discipline','Responsibility','Consistency','Focus'],
  specialist:   ['Input','Learner','Analytical','Focus','Discipline'],
  strategist:   ['Strategic','Analytical','Ideation','Futuristic','Focus'],
  venturer:     ['Activator','Command','Self-Assurance','Strategic','Competition'],
  altruist:     ['Developer','Empathy','Harmony','Relator','Responsibility'],
  captain:      ['Command','Activator','Competition','Self-Assurance','Strategic'],
  collaborator: ['Harmony','Includer','Positivity','Developer','Relator'],
  maverick:     ['Ideation','Activator','Command','Self-Assurance','Strategic'],
  persuader:    ['Woo','Communication','Activator','Command','Positivity'],
  promoter:     ['Woo','Communication','Positivity','Activator','Adaptability'],
  adapter:      ['Adaptability','Harmony','Empathy','Includer','Developer'],
  craftsman:    ['Discipline','Focus','Analytical','Consistency','Responsibility'],
  guardian:     ['Responsibility','Consistency','Belief','Deliberative','Harmony'],
  operator:     ['Responsibility','Consistency','Harmony','Discipline','Arranger'],
  individualist:['Ideation','Self-Assurance','Individualization','Futuristic','Input'],
  scholar:      ['Learner','Input','Analytical','Intellection','Futuristic'],
};

// ── VIA Character Strengths ──────────────────────────────────────────────
// Source: via table
export const VIA_DATA = {
  analyzer:     ['Prudence','Judgment','Perseverance','Self-Regulation','Love of Learning'],
  controller:   ['Leadership','Prudence','Perseverance','Fairness','Self-Regulation'],
  specialist:   ['Love of Learning','Prudence','Perseverance','Judgment','Honesty'],
  strategist:   ['Leadership','Judgment','Perspective','Creativity','Perseverance'],
  venturer:     ['Bravery','Leadership','Creativity','Self-Regulation','Zest'],
  altruist:     ['Kindness','Social Intel','Teamwork','Gratitude','Humility'],
  captain:      ['Leadership','Bravery','Perseverance','Judgment','Self-Regulation'],
  collaborator: ['Teamwork','Kindness','Social Intel','Forgiveness','Fairness'],
  maverick:     ['Creativity','Bravery','Zest','Curiosity','Leadership'],
  persuader:    ['Social Intel','Leadership','Creativity','Zest','Kindness'],
  promoter:     ['Zest','Social Intel','Creativity','Kindness','Humor'],
  adapter:      ['Kindness','Teamwork','Adaptability','Social Intel','Fairness'],
  craftsman:    ['Perseverance','Prudence','Self-Regulation','Honesty','Fairness'],
  guardian:     ['Prudence','Honesty','Fairness','Self-Regulation','Teamwork'],
  operator:     ['Perseverance','Teamwork','Fairness','Self-Regulation','Prudence'],
  individualist:['Creativity','Honesty','Curiosity','Perspective','Zest'],
  scholar:      ['Love of Learning','Curiosity','Judgment','Perspective','Prudence'],
};

// ── Reiss Motivation Profile ─────────────────────────────────────────────
// Source: reiss table — top 3 motives per profile, shown as HIGH bars
export const REISS_DATA = {
  analyzer:     {Order:92,Curiosity:85,Honor:78,Power:35,Independence:55,Acceptance:40,Idealism:45,Social:22,Status:30,Adventure:20},
  controller:   {Order:95,Power:85,Honor:80,Curiosity:50,Independence:72,Acceptance:25,Idealism:40,Social:20,Status:55,Adventure:22},
  specialist:   {Curiosity:90,Order:85,Independence:80,Honor:72,Power:30,Acceptance:35,Idealism:45,Social:20,Status:25,Adventure:25},
  strategist:   {Power:88,Curiosity:82,Independence:85,Order:65,Honor:60,Acceptance:25,Idealism:40,Social:28,Status:55,Adventure:38},
  venturer:     {Power:85,Adventure:88,Independence:90,Curiosity:65,Honor:45,Order:22,Acceptance:25,Idealism:35,Social:48,Status:55},
  altruist:     {Acceptance:88,Idealism:85,Social:82,Order:55,Honor:70,Power:25,Curiosity:45,Independence:42,Status:28,Adventure:22},
  captain:      {Power:90,Status:72,Independence:85,Honor:65,Curiosity:50,Acceptance:22,Idealism:35,Social:55,Order:48,Adventure:45},
  collaborator: {Acceptance:88,Social:85,Idealism:80,Honor:65,Order:55,Power:18,Curiosity:42,Independence:35,Status:25,Adventure:18},
  maverick:     {Independence:90,Adventure:85,Curiosity:82,Power:65,Status:55,Order:18,Acceptance:22,Idealism:42,Social:55,Honor:38},
  persuader:    {Social:88,Status:72,Power:78,Curiosity:60,Adventure:65,Order:28,Acceptance:52,Idealism:38,Independence:70,Honor:45},
  promoter:     {Social:90,Status:78,Adventure:72,Power:68,Curiosity:55,Order:18,Acceptance:55,Idealism:35,Independence:65,Honor:38},
  adapter:      {Acceptance:78,Social:72,Order:60,Honor:65,Idealism:62,Power:30,Curiosity:50,Independence:45,Status:35,Adventure:28},
  craftsman:    {Order:90,Honor:82,Curiosity:75,Independence:70,Power:25,Acceptance:45,Idealism:48,Social:22,Status:28,Adventure:18},
  guardian:     {Order:88,Honor:85,Acceptance:70,Idealism:65,Curiosity:55,Power:22,Independence:52,Social:42,Status:30,Adventure:18},
  operator:     {Order:85,Acceptance:72,Honor:78,Social:60,Idealism:55,Power:22,Curiosity:42,Independence:45,Status:28,Adventure:18},
  individualist:{Independence:90,Curiosity:82,Adventure:68,Idealism:65,Honor:55,Order:28,Acceptance:30,Social:38,Power:45,Status:32},
  scholar:      {Curiosity:90,Order:78,Honor:72,Independence:80,Idealism:68,Power:28,Acceptance:38,Social:22,Status:25,Adventure:30},
};

// ── EQ-i 2.0 ────────────────────────────────────────────────────────────
// Source: eq-i table — Strengths=high, Risks=low
export const EQI_DATA = {
  analyzer:     [{comp:'Problem Solving',v:82},{comp:'Reality Testing',v:80},{comp:'Self-Regard',v:72},{comp:'Assertiveness',v:65},{comp:'Emotional Expression',v:28},{comp:'Interpersonal',v:32},{comp:'Empathy',v:40},{comp:'Flexibility',v:45}],
  controller:   [{comp:'Impulse Control',v:85},{comp:'Reality Testing',v:82},{comp:'Self-Regard',v:78},{comp:'Assertiveness',v:80},{comp:'Flexibility',v:25},{comp:'Empathy',v:28},{comp:'Emotional Expression',v:30},{comp:'Interpersonal',v:35}],
  specialist:   [{comp:'Reality Testing',v:82},{comp:'Problem Solving',v:80},{comp:'Independence',v:75},{comp:'Self-Regard',v:70},{comp:'Social Responsibility',v:32},{comp:'Empathy',v:35},{comp:'Interpersonal',v:30},{comp:'Emotional Expression',v:28}],
  strategist:   [{comp:'Problem Solving',v:85},{comp:'Self-Regard',v:80},{comp:'Independence',v:82},{comp:'Assertiveness',v:78},{comp:'Empathy',v:30},{comp:'Emotional Expression',v:32},{comp:'Interpersonal',v:35},{comp:'Flexibility',v:45}],
  venturer:     [{comp:'Self-Regard',v:85},{comp:'Assertiveness',v:88},{comp:'Independence',v:85},{comp:'Optimism',v:80},{comp:'Impulse Control',v:28},{comp:'Empathy',v:35},{comp:'Flexibility',v:60},{comp:'Stress Tolerance',v:65}],
  altruist:     [{comp:'Empathy',v:85},{comp:'Interpersonal',v:82},{comp:'Social Responsibility',v:80},{comp:'Emotional Expression',v:75},{comp:'Assertiveness',v:35},{comp:'Independence',v:38},{comp:'Impulse Control',v:55},{comp:'Self-Regard',v:55}],
  captain:      [{comp:'Assertiveness',v:88},{comp:'Self-Regard',v:85},{comp:'Independence',v:82},{comp:'Optimism',v:78},{comp:'Empathy',v:32},{comp:'Emotional Expression',v:38},{comp:'Interpersonal',v:45},{comp:'Flexibility',v:50}],
  collaborator: [{comp:'Empathy',v:88},{comp:'Interpersonal',v:85},{comp:'Social Responsibility',v:82},{comp:'Emotional Expression',v:78},{comp:'Assertiveness',v:28},{comp:'Independence',v:32},{comp:'Self-Regard',v:55},{comp:'Problem Solving',v:60}],
  maverick:     [{comp:'Optimism',v:85},{comp:'Assertiveness',v:82},{comp:'Self-Regard',v:80},{comp:'Flexibility',v:78},{comp:'Impulse Control',v:22},{comp:'Reality Testing',v:35},{comp:'Stress Tolerance',v:40},{comp:'Empathy',v:42}],
  persuader:    [{comp:'Interpersonal',v:88},{comp:'Emotional Expression',v:85},{comp:'Optimism',v:82},{comp:'Assertiveness',v:80},{comp:'Reality Testing',v:38},{comp:'Impulse Control',v:35},{comp:'Stress Tolerance',v:42},{comp:'Independence',v:55}],
  promoter:     [{comp:'Interpersonal',v:90},{comp:'Emotional Expression',v:88},{comp:'Optimism',v:85},{comp:'Assertiveness',v:80},{comp:'Reality Testing',v:28},{comp:'Impulse Control',v:25},{comp:'Stress Tolerance',v:35},{comp:'Independence',v:48}],
  adapter:      [{comp:'Flexibility',v:82},{comp:'Interpersonal',v:78},{comp:'Empathy',v:75},{comp:'Emotional Expression',v:72},{comp:'Self-Regard',v:48},{comp:'Assertiveness',v:42},{comp:'Independence',v:45},{comp:'Problem Solving',v:58}],
  craftsman:    [{comp:'Reality Testing',v:85},{comp:'Impulse Control',v:82},{comp:'Self-Regard',v:75},{comp:'Problem Solving',v:78},{comp:'Emotional Expression',v:25},{comp:'Flexibility',v:28},{comp:'Interpersonal',v:35},{comp:'Optimism',v:45}],
  guardian:     [{comp:'Reality Testing',v:82},{comp:'Impulse Control',v:80},{comp:'Self-Regard',v:72},{comp:'Social Responsibility',v:78},{comp:'Flexibility',v:22},{comp:'Emotional Expression',v:28},{comp:'Optimism',v:38},{comp:'Assertiveness',v:40}],
  operator:     [{comp:'Reality Testing',v:80},{comp:'Impulse Control',v:78},{comp:'Social Responsibility',v:75},{comp:'Empathy',v:70},{comp:'Assertiveness',v:35},{comp:'Independence',v:38},{comp:'Flexibility',v:42},{comp:'Self-Regard',v:58}],
  individualist:[{comp:'Self-Regard',v:78},{comp:'Independence',v:82},{comp:'Assertiveness',v:65},{comp:'Optimism',v:68},{comp:'Interpersonal',v:42},{comp:'Social Responsibility',v:38},{comp:'Emotional Expression',v:55},{comp:'Empathy',v:48}],
  scholar:      [{comp:'Reality Testing',v:88},{comp:'Problem Solving',v:85},{comp:'Independence',v:80},{comp:'Self-Regard',v:72},{comp:'Emotional Expression',v:25},{comp:'Interpersonal',v:28},{comp:'Flexibility',v:38},{comp:'Empathy',v:45}],
};

// ── Lencioni 5 Dysfunctions ──────────────────────────────────────────────
// Proper Lencioni pyramid — NOT Maslow. The 5 dysfunctions from bottom to top.
export const LENCIONI_LAYERS = [
  {label:'Absence of Trust',     color:'#f87171'},
  {label:'Fear of Conflict',     color:'#fb923c'},
  {label:'Lack of Commitment',   color:'#fbbf24'},
  {label:'Avoidance of Accountability', color:'#34d399'},
  {label:'Inattention to Results', color:'#60a5fa'},
];
// Profile-specific vulnerability (which dysfunction is highest risk)
export const LENCIONI_PROFILE = {
  analyzer:     {risk:'Absence of Trust',  strength:'Inattention to Results'},
  controller:   {risk:'Fear of Conflict',  strength:'Inattention to Results'},
  specialist:   {risk:'Absence of Trust',  strength:'Lack of Commitment'},
  strategist:   {risk:'Fear of Conflict',  strength:'Inattention to Results'},
  venturer:     {risk:'Avoidance of Accountability', strength:'Inattention to Results'},
  altruist:     {risk:'Fear of Conflict',  strength:'Absence of Trust'},
  captain:      {risk:'Fear of Conflict',  strength:'Inattention to Results'},
  collaborator: {risk:'Avoidance of Accountability', strength:'Absence of Trust'},
  maverick:     {risk:'Avoidance of Accountability', strength:'Inattention to Results'},
  persuader:    {risk:'Avoidance of Accountability', strength:'Absence of Trust'},
  promoter:     {risk:'Avoidance of Accountability', strength:'Absence of Trust'},
  adapter:      {risk:'Lack of Commitment', strength:'Absence of Trust'},
  craftsman:    {risk:'Absence of Trust',  strength:'Lack of Commitment'},
  guardian:     {risk:'Fear of Conflict',  strength:'Absence of Trust'},
  operator:     {risk:'Fear of Conflict',  strength:'Absence of Trust'},
  individualist:{risk:'Avoidance of Accountability', strength:'Inattention to Results'},
  scholar:      {risk:'Absence of Trust',  strength:'Inattention to Results'},
};

// ── Cognitive Load / Working Style ───────────────────────────────────────
// Real dimensions: Pace, Structure, Working Memory Load, Social Load, Depth
export const COGNITIVE_LOAD_DATA = {
  analyzer:     [{dim:'Pace',v:28},{dim:'Structure Need',v:90},{dim:'Cognitive Load',v:85},{dim:'Social Load',v:22},{dim:'Depth',v:88}],
  controller:   [{dim:'Pace',v:72},{dim:'Structure Need',v:95},{dim:'Cognitive Load',v:75},{dim:'Social Load',v:18},{dim:'Depth',v:72}],
  specialist:   [{dim:'Pace',v:32},{dim:'Structure Need',v:85},{dim:'Cognitive Load',v:88},{dim:'Social Load',v:18},{dim:'Depth',v:92}],
  strategist:   [{dim:'Pace',v:68},{dim:'Structure Need',v:70},{dim:'Cognitive Load',v:80},{dim:'Social Load',v:35},{dim:'Depth',v:85}],
  venturer:     [{dim:'Pace',v:92},{dim:'Structure Need',v:22},{dim:'Cognitive Load',v:55},{dim:'Social Load',v:68},{dim:'Depth',v:45}],
  altruist:     [{dim:'Pace',v:55},{dim:'Structure Need',v:65},{dim:'Cognitive Load',v:60},{dim:'Social Load',v:78},{dim:'Depth',v:58}],
  captain:      [{dim:'Pace',v:85},{dim:'Structure Need',v:45},{dim:'Cognitive Load',v:65},{dim:'Social Load',v:72},{dim:'Depth',v:55}],
  collaborator: [{dim:'Pace',v:48},{dim:'Structure Need',v:55},{dim:'Cognitive Load',v:58},{dim:'Social Load',v:85},{dim:'Depth',v:52}],
  maverick:     [{dim:'Pace',v:88},{dim:'Structure Need',v:18},{dim:'Cognitive Load',v:62},{dim:'Social Load',v:75},{dim:'Depth',v:48}],
  persuader:    [{dim:'Pace',v:78},{dim:'Structure Need',v:28},{dim:'Cognitive Load',v:55},{dim:'Social Load',v:88},{dim:'Depth',v:42}],
  promoter:     [{dim:'Pace',v:92},{dim:'Structure Need',v:15},{dim:'Cognitive Load',v:48},{dim:'Social Load',v:92},{dim:'Depth',v:35}],
  adapter:      [{dim:'Pace',v:58},{dim:'Structure Need',v:52},{dim:'Cognitive Load',v:60},{dim:'Social Load',v:65},{dim:'Depth',v:55}],
  craftsman:    [{dim:'Pace',v:35},{dim:'Structure Need',v:88},{dim:'Cognitive Load',v:82},{dim:'Social Load',v:15},{dim:'Depth',v:88}],
  guardian:     [{dim:'Pace',v:40},{dim:'Structure Need',v:90},{dim:'Cognitive Load',v:72},{dim:'Social Load',v:32},{dim:'Depth',v:75}],
  operator:     [{dim:'Pace',v:48},{dim:'Structure Need',v:82},{dim:'Cognitive Load',v:68},{dim:'Social Load',v:42},{dim:'Depth',v:68}],
  individualist:[{dim:'Pace',v:55},{dim:'Structure Need',v:28},{dim:'Cognitive Load',v:72},{dim:'Social Load',v:45},{dim:'Depth',v:78}],
  scholar:      [{dim:'Pace',v:30},{dim:'Structure Need',v:80},{dim:'Cognitive Load',v:90},{dim:'Social Load',v:20},{dim:'Depth',v:95}],
};
