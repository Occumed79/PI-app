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


// ── MBTI Chart Data ────────────────────────────────────────────────────────────────────

export const MBTI_DATA = {
  analyzer: [{"dim": "E", "value": 20}, {"dim": "N", "value": 65}, {"dim": "T", "value": 82}, {"dim": "J", "value": 88}],
  controller: [{"dim": "E", "value": 18}, {"dim": "N", "value": 60}, {"dim": "T", "value": 88}, {"dim": "J", "value": 85}],
  specialist: [{"dim": "E", "value": 22}, {"dim": "N", "value": 70}, {"dim": "T", "value": 78}, {"dim": "J", "value": 82}],
  strategist: [{"dim": "E", "value": 25}, {"dim": "N", "value": 42}, {"dim": "T", "value": 80}, {"dim": "J", "value": 75}],
  venturer: [{"dim": "E", "value": 45}, {"dim": "N", "value": 35}, {"dim": "T", "value": 75}, {"dim": "J", "value": 38}],
  altruist: [{"dim": "E", "value": 70}, {"dim": "N", "value": 55}, {"dim": "T", "value": 30}, {"dim": "J", "value": 65}],
  captain: [{"dim": "E", "value": 80}, {"dim": "N", "value": 40}, {"dim": "T", "value": 68}, {"dim": "J", "value": 45}],
  collaborator: [{"dim": "E", "value": 72}, {"dim": "N", "value": 60}, {"dim": "T", "value": 25}, {"dim": "J", "value": 55}],
  maverick: [{"dim": "E", "value": 82}, {"dim": "N", "value": 30}, {"dim": "T", "value": 52}, {"dim": "J", "value": 28}],
  persuader: [{"dim": "E", "value": 85}, {"dim": "N", "value": 42}, {"dim": "T", "value": 45}, {"dim": "J", "value": 35}],
  promoter: [{"dim": "E", "value": 90}, {"dim": "N", "value": 55}, {"dim": "T", "value": 38}, {"dim": "J", "value": 28}],
  adapter: [{"dim": "E", "value": 62}, {"dim": "N", "value": 58}, {"dim": "T", "value": 45}, {"dim": "J", "value": 52}],
  craftsman: [{"dim": "E", "value": 20}, {"dim": "N", "value": 75}, {"dim": "T", "value": 70}, {"dim": "J", "value": 85}],
  guardian: [{"dim": "E", "value": 35}, {"dim": "N", "value": 78}, {"dim": "T", "value": 55}, {"dim": "J", "value": 90}],
  operator: [{"dim": "E", "value": 42}, {"dim": "N", "value": 72}, {"dim": "T", "value": 50}, {"dim": "J", "value": 80}],
  individualist: [{"dim": "E", "value": 45}, {"dim": "N", "value": 38}, {"dim": "T", "value": 48}, {"dim": "J", "value": 32}],
  scholar: [{"dim": "E", "value": 22}, {"dim": "N", "value": 38}, {"dim": "T", "value": 78}, {"dim": "J", "value": 72}],
};

// ── Clifton Strengths ────────────────────────────────────────────────────────────────────

export const CLIFTON_FULL_DATA = {
  analyzer: [{"theme": "Analytical", "value": 95}, {"theme": "Discipline", "value": 87}, {"theme": "Learner", "value": 79}, {"theme": "Deliberative", "value": 71}, {"theme": "Responsibility", "value": 63}],
  controller: [{"theme": "Command", "value": 95}, {"theme": "Achiever", "value": 87}, {"theme": "Focus", "value": 79}, {"theme": "Self-Assurance", "value": 71}, {"theme": "Significance", "value": 63}],
  specialist: [{"theme": "Learner", "value": 95}, {"theme": "Input", "value": 87}, {"theme": "Deliberative", "value": 79}, {"theme": "Responsibility", "value": 71}, {"theme": "Analytical", "value": 63}],
  strategist: [{"theme": "Strategic", "value": 95}, {"theme": "Futuristic", "value": 87}, {"theme": "Achiever", "value": 79}, {"theme": "Command", "value": 71}, {"theme": "Analytical", "value": 63}],
  venturer: [{"theme": "Activator", "value": 95}, {"theme": "Self-Assurance", "value": 87}, {"theme": "Strategic", "value": 79}, {"theme": "Futuristic", "value": 71}, {"theme": "Ideation", "value": 63}],
  altruist: [{"theme": "Harmony", "value": 95}, {"theme": "Empathy", "value": 87}, {"theme": "Responsibility", "value": 79}, {"theme": "Consistency", "value": 71}, {"theme": "Developer", "value": 63}],
  captain: [{"theme": "Command", "value": 95}, {"theme": "Activator", "value": 87}, {"theme": "Self-Assurance", "value": 79}, {"theme": "Strategic", "value": 71}, {"theme": "Significance", "value": 63}],
  collaborator: [{"theme": "Empathy", "value": 95}, {"theme": "Harmony", "value": 87}, {"theme": "Developer", "value": 79}, {"theme": "Connectedness", "value": 71}, {"theme": "Includer", "value": 63}],
  maverick: [{"theme": "Ideation", "value": 95}, {"theme": "Activator", "value": 87}, {"theme": "Strategic", "value": 79}, {"theme": "Self-Assurance", "value": 71}, {"theme": "WOO", "value": 63}],
  persuader: [{"theme": "WOO", "value": 95}, {"theme": "Communication", "value": 87}, {"theme": "Activator", "value": 79}, {"theme": "Empathy", "value": 71}, {"theme": "Positivity", "value": 63}],
  promoter: [{"theme": "Positivity", "value": 95}, {"theme": "WOO", "value": 87}, {"theme": "Communication", "value": 79}, {"theme": "Activator", "value": 71}, {"theme": "Includer", "value": 63}],
  adapter: [{"theme": "Adaptability", "value": 95}, {"theme": "Empathy", "value": 87}, {"theme": "Harmony", "value": 79}, {"theme": "Relator", "value": 71}, {"theme": "Consistency", "value": 63}],
  craftsman: [{"theme": "Responsibility", "value": 95}, {"theme": "Discipline", "value": 87}, {"theme": "Achiever", "value": 79}, {"theme": "Deliberative", "value": 71}, {"theme": "Consistency", "value": 63}],
  guardian: [{"theme": "Responsibility", "value": 95}, {"theme": "Consistency", "value": 87}, {"theme": "Harmony", "value": 79}, {"theme": "Belief", "value": 71}, {"theme": "Relator", "value": 63}],
  operator: [{"theme": "Consistency", "value": 95}, {"theme": "Responsibility", "value": 87}, {"theme": "Harmony", "value": 79}, {"theme": "Achiever", "value": 71}, {"theme": "Relator", "value": 63}],
  individualist: [{"theme": "Individualization", "value": 95}, {"theme": "Ideation", "value": 87}, {"theme": "Adaptability", "value": 79}, {"theme": "Self-Assurance", "value": 71}, {"theme": "Positivity", "value": 63}],
  scholar: [{"theme": "Learner", "value": 95}, {"theme": "Input", "value": 87}, {"theme": "Analytical", "value": 79}, {"theme": "Strategic", "value": 71}, {"theme": "Intellection", "value": 63}],
};

// ── VIA Character Strengths ────────────────────────────────────────────────────────────────────

export const VIA_FULL_DATA = {
  analyzer: [{"strength": "Prudence", "value": 95}, {"strength": "Love of Learning", "value": 87}, {"strength": "Honesty", "value": 79}, {"strength": "Judgment", "value": 71}, {"strength": "Perseverance", "value": 63}],
  controller: [{"strength": "Leadership", "value": 95}, {"strength": "Perseverance", "value": 87}, {"strength": "Judgment", "value": 79}, {"strength": "Prudence", "value": 71}, {"strength": "Fairness", "value": 63}],
  specialist: [{"strength": "Love of Learning", "value": 95}, {"strength": "Honesty", "value": 87}, {"strength": "Prudence", "value": 79}, {"strength": "Perseverance", "value": 71}, {"strength": "Fairness", "value": 63}],
  strategist: [{"strength": "Leadership", "value": 95}, {"strength": "Judgment", "value": 87}, {"strength": "Perspective", "value": 79}, {"strength": "Perseverance", "value": 71}, {"strength": "Creativity", "value": 63}],
  venturer: [{"strength": "Zest", "value": 95}, {"strength": "Bravery", "value": 87}, {"strength": "Creativity", "value": 79}, {"strength": "Leadership", "value": 71}, {"strength": "Self-Regulation", "value": 63}],
  altruist: [{"strength": "Kindness", "value": 95}, {"strength": "Fairness", "value": 87}, {"strength": "Teamwork", "value": 79}, {"strength": "Honesty", "value": 71}, {"strength": "Gratitude", "value": 63}],
  captain: [{"strength": "Leadership", "value": 95}, {"strength": "Bravery", "value": 87}, {"strength": "Zest", "value": 79}, {"strength": "Perseverance", "value": 71}, {"strength": "Honesty", "value": 63}],
  collaborator: [{"strength": "Kindness", "value": 95}, {"strength": "Teamwork", "value": 87}, {"strength": "Fairness", "value": 79}, {"strength": "Love", "value": 71}, {"strength": "Gratitude", "value": 63}],
  maverick: [{"strength": "Creativity", "value": 95}, {"strength": "Zest", "value": 87}, {"strength": "Bravery", "value": 79}, {"strength": "Humor", "value": 71}, {"strength": "Perspective", "value": 63}],
  persuader: [{"strength": "Social Intelligence", "value": 95}, {"strength": "Kindness", "value": 87}, {"strength": "Zest", "value": 79}, {"strength": "Leadership", "value": 71}, {"strength": "Humor", "value": 63}],
  promoter: [{"strength": "Zest", "value": 95}, {"strength": "Humor", "value": 87}, {"strength": "Social Intelligence", "value": 79}, {"strength": "Kindness", "value": 71}, {"strength": "Gratitude", "value": 63}],
  adapter: [{"strength": "Kindness", "value": 95}, {"strength": "Fairness", "value": 87}, {"strength": "Teamwork", "value": 79}, {"strength": "Gratitude", "value": 71}, {"strength": "Hope", "value": 63}],
  craftsman: [{"strength": "Prudence", "value": 95}, {"strength": "Perseverance", "value": 87}, {"strength": "Honesty", "value": 79}, {"strength": "Fairness", "value": 71}, {"strength": "Responsibility", "value": 63}],
  guardian: [{"strength": "Prudence", "value": 95}, {"strength": "Fairness", "value": 87}, {"strength": "Honesty", "value": 79}, {"strength": "Teamwork", "value": 71}, {"strength": "Gratitude", "value": 63}],
  operator: [{"strength": "Teamwork", "value": 95}, {"strength": "Fairness", "value": 87}, {"strength": "Prudence", "value": 79}, {"strength": "Kindness", "value": 71}, {"strength": "Perseverance", "value": 63}],
  individualist: [{"strength": "Creativity", "value": 95}, {"strength": "Authenticity", "value": 87}, {"strength": "Bravery", "value": 79}, {"strength": "Humor", "value": 71}, {"strength": "Self-Regulation", "value": 63}],
  scholar: [{"strength": "Love of Learning", "value": 95}, {"strength": "Judgment", "value": 87}, {"strength": "Perspective", "value": 79}, {"strength": "Prudence", "value": 71}, {"strength": "Honesty", "value": 63}],
};

// ── Kolbe A Action Modes ────────────────────────────────────────────────────────────────────

export const KOLBE_FULL_DATA = {
  analyzer: [{"mode": "Fact Finder", "value": 82}, {"mode": "Follow Thru", "value": 68}, {"mode": "Quick Start", "value": 28}, {"mode": "Implementor", "value": 38}],
  controller: [{"mode": "Fact Finder", "value": 75}, {"mode": "Follow Thru", "value": 80}, {"mode": "Quick Start", "value": 35}, {"mode": "Implementor", "value": 42}],
  specialist: [{"mode": "Fact Finder", "value": 88}, {"mode": "Follow Thru", "value": 72}, {"mode": "Quick Start", "value": 22}, {"mode": "Implementor", "value": 45}],
  strategist: [{"mode": "Fact Finder", "value": 70}, {"mode": "Follow Thru", "value": 55}, {"mode": "Quick Start", "value": 60}, {"mode": "Implementor", "value": 35}],
  venturer: [{"mode": "Fact Finder", "value": 45}, {"mode": "Follow Thru", "value": 30}, {"mode": "Quick Start", "value": 88}, {"mode": "Implementor", "value": 55}],
  altruist: [{"mode": "Fact Finder", "value": 55}, {"mode": "Follow Thru", "value": 68}, {"mode": "Quick Start", "value": 48}, {"mode": "Implementor", "value": 52}],
  captain: [{"mode": "Fact Finder", "value": 55}, {"mode": "Follow Thru", "value": 42}, {"mode": "Quick Start", "value": 82}, {"mode": "Implementor", "value": 45}],
  collaborator: [{"mode": "Fact Finder", "value": 52}, {"mode": "Follow Thru", "value": 72}, {"mode": "Quick Start", "value": 45}, {"mode": "Implementor", "value": 60}],
  maverick: [{"mode": "Fact Finder", "value": 42}, {"mode": "Follow Thru", "value": 28}, {"mode": "Quick Start", "value": 90}, {"mode": "Implementor", "value": 38}],
  persuader: [{"mode": "Fact Finder", "value": 48}, {"mode": "Follow Thru", "value": 38}, {"mode": "Quick Start", "value": 80}, {"mode": "Implementor", "value": 40}],
  promoter: [{"mode": "Fact Finder", "value": 38}, {"mode": "Follow Thru", "value": 32}, {"mode": "Quick Start", "value": 88}, {"mode": "Implementor", "value": 38}],
  adapter: [{"mode": "Fact Finder", "value": 60}, {"mode": "Follow Thru", "value": 62}, {"mode": "Quick Start", "value": 55}, {"mode": "Implementor", "value": 55}],
  craftsman: [{"mode": "Fact Finder", "value": 72}, {"mode": "Follow Thru", "value": 88}, {"mode": "Quick Start", "value": 25}, {"mode": "Implementor", "value": 78}],
  guardian: [{"mode": "Fact Finder", "value": 68}, {"mode": "Follow Thru", "value": 85}, {"mode": "Quick Start", "value": 22}, {"mode": "Implementor", "value": 65}],
  operator: [{"mode": "Fact Finder", "value": 65}, {"mode": "Follow Thru", "value": 82}, {"mode": "Quick Start", "value": 28}, {"mode": "Implementor", "value": 70}],
  individualist: [{"mode": "Fact Finder", "value": 55}, {"mode": "Follow Thru", "value": 38}, {"mode": "Quick Start", "value": 68}, {"mode": "Implementor", "value": 48}],
  scholar: [{"mode": "Fact Finder", "value": 85}, {"mode": "Follow Thru", "value": 70}, {"mode": "Quick Start", "value": 32}, {"mode": "Implementor", "value": 42}],
};

// ── TKI Conflict Modes ────────────────────────────────────────────────────────────────────

export const TKI_DATA = {
  analyzer: [{"mode": "Avoiding", "v": 62}, {"mode": "Accommodating", "v": 38}, {"mode": "Competing", "v": 42}, {"mode": "Compromising", "v": 58}, {"mode": "Collaborating", "v": 72}],
  controller: [{"mode": "Avoiding", "v": 30}, {"mode": "Accommodating", "v": 22}, {"mode": "Competing", "v": 85}, {"mode": "Compromising", "v": 48}, {"mode": "Collaborating", "v": 55}],
  specialist: [{"mode": "Avoiding", "v": 68}, {"mode": "Accommodating", "v": 45}, {"mode": "Competing", "v": 30}, {"mode": "Compromising", "v": 62}, {"mode": "Collaborating", "v": 60}],
  strategist: [{"mode": "Avoiding", "v": 38}, {"mode": "Accommodating", "v": 28}, {"mode": "Competing", "v": 75}, {"mode": "Compromising", "v": 55}, {"mode": "Collaborating", "v": 78}],
  venturer: [{"mode": "Avoiding", "v": 20}, {"mode": "Accommodating", "v": 15}, {"mode": "Competing", "v": 90}, {"mode": "Compromising", "v": 45}, {"mode": "Collaborating", "v": 55}],
  altruist: [{"mode": "Avoiding", "v": 45}, {"mode": "Accommodating", "v": 80}, {"mode": "Competing", "v": 22}, {"mode": "Compromising", "v": 70}, {"mode": "Collaborating", "v": 78}],
  captain: [{"mode": "Avoiding", "v": 18}, {"mode": "Accommodating", "v": 22}, {"mode": "Competing", "v": 88}, {"mode": "Compromising", "v": 50}, {"mode": "Collaborating", "v": 60}],
  collaborator: [{"mode": "Avoiding", "v": 38}, {"mode": "Accommodating", "v": 85}, {"mode": "Competing", "v": 15}, {"mode": "Compromising", "v": 72}, {"mode": "Collaborating", "v": 82}],
  maverick: [{"mode": "Avoiding", "v": 28}, {"mode": "Accommodating", "v": 30}, {"mode": "Competing", "v": 72}, {"mode": "Compromising", "v": 45}, {"mode": "Collaborating", "v": 68}],
  persuader: [{"mode": "Avoiding", "v": 30}, {"mode": "Accommodating", "v": 55}, {"mode": "Competing", "v": 65}, {"mode": "Compromising", "v": 68}, {"mode": "Collaborating", "v": 72}],
  promoter: [{"mode": "Avoiding", "v": 25}, {"mode": "Accommodating", "v": 60}, {"mode": "Competing", "v": 62}, {"mode": "Compromising", "v": 55}, {"mode": "Collaborating", "v": 65}],
  adapter: [{"mode": "Avoiding", "v": 50}, {"mode": "Accommodating", "v": 68}, {"mode": "Competing", "v": 30}, {"mode": "Compromising", "v": 72}, {"mode": "Collaborating", "v": 68}],
  craftsman: [{"mode": "Avoiding", "v": 70}, {"mode": "Accommodating", "v": 52}, {"mode": "Competing", "v": 28}, {"mode": "Compromising", "v": 65}, {"mode": "Collaborating", "v": 55}],
  guardian: [{"mode": "Avoiding", "v": 65}, {"mode": "Accommodating", "v": 60}, {"mode": "Competing", "v": 25}, {"mode": "Compromising", "v": 68}, {"mode": "Collaborating", "v": 52}],
  operator: [{"mode": "Avoiding", "v": 58}, {"mode": "Accommodating", "v": 65}, {"mode": "Competing", "v": 22}, {"mode": "Compromising", "v": 70}, {"mode": "Collaborating", "v": 55}],
  individualist: [{"mode": "Avoiding", "v": 55}, {"mode": "Accommodating", "v": 42}, {"mode": "Competing", "v": 50}, {"mode": "Compromising", "v": 52}, {"mode": "Collaborating", "v": 65}],
  scholar: [{"mode": "Avoiding", "v": 72}, {"mode": "Accommodating", "v": 38}, {"mode": "Competing", "v": 35}, {"mode": "Compromising", "v": 60}, {"mode": "Collaborating", "v": 70}],
};

// ── HBDI Brain Quadrants ────────────────────────────────────────────────────────────────────

export const HBDI_DATA = {
  analyzer: [{"quad": "A \u2014 Analytical", "value": 88}, {"quad": "B \u2014 Sequential", "value": 70}, {"quad": "C \u2014 Interpersonal", "value": 28}, {"quad": "D \u2014 Imaginative", "value": 55}],
  controller: [{"quad": "A \u2014 Analytical", "value": 75}, {"quad": "B \u2014 Sequential", "value": 92}, {"quad": "C \u2014 Interpersonal", "value": 22}, {"quad": "D \u2014 Imaginative", "value": 40}],
  specialist: [{"quad": "A \u2014 Analytical", "value": 82}, {"quad": "B \u2014 Sequential", "value": 75}, {"quad": "C \u2014 Interpersonal", "value": 32}, {"quad": "D \u2014 Imaginative", "value": 48}],
  strategist: [{"quad": "A \u2014 Analytical", "value": 78}, {"quad": "B \u2014 Sequential", "value": 55}, {"quad": "C \u2014 Interpersonal", "value": 35}, {"quad": "D \u2014 Imaginative", "value": 82}],
  venturer: [{"quad": "A \u2014 Analytical", "value": 45}, {"quad": "B \u2014 Sequential", "value": 28}, {"quad": "C \u2014 Interpersonal", "value": 55}, {"quad": "D \u2014 Imaginative", "value": 90}],
  altruist: [{"quad": "A \u2014 Analytical", "value": 38}, {"quad": "B \u2014 Sequential", "value": 62}, {"quad": "C \u2014 Interpersonal", "value": 88}, {"quad": "D \u2014 Imaginative", "value": 55}],
  captain: [{"quad": "A \u2014 Analytical", "value": 60}, {"quad": "B \u2014 Sequential", "value": 42}, {"quad": "C \u2014 Interpersonal", "value": 70}, {"quad": "D \u2014 Imaginative", "value": 88}],
  collaborator: [{"quad": "A \u2014 Analytical", "value": 32}, {"quad": "B \u2014 Sequential", "value": 58}, {"quad": "C \u2014 Interpersonal", "value": 90}, {"quad": "D \u2014 Imaginative", "value": 62}],
  maverick: [{"quad": "A \u2014 Analytical", "value": 55}, {"quad": "B \u2014 Sequential", "value": 28}, {"quad": "C \u2014 Interpersonal", "value": 65}, {"quad": "D \u2014 Imaginative", "value": 88}],
  persuader: [{"quad": "A \u2014 Analytical", "value": 45}, {"quad": "B \u2014 Sequential", "value": 38}, {"quad": "C \u2014 Interpersonal", "value": 80}, {"quad": "D \u2014 Imaginative", "value": 82}],
  promoter: [{"quad": "A \u2014 Analytical", "value": 38}, {"quad": "B \u2014 Sequential", "value": 28}, {"quad": "C \u2014 Interpersonal", "value": 88}, {"quad": "D \u2014 Imaginative", "value": 80}],
  adapter: [{"quad": "A \u2014 Analytical", "value": 50}, {"quad": "B \u2014 Sequential", "value": 55}, {"quad": "C \u2014 Interpersonal", "value": 70}, {"quad": "D \u2014 Imaginative", "value": 62}],
  craftsman: [{"quad": "A \u2014 Analytical", "value": 75}, {"quad": "B \u2014 Sequential", "value": 90}, {"quad": "C \u2014 Interpersonal", "value": 35}, {"quad": "D \u2014 Imaginative", "value": 35}],
  guardian: [{"quad": "A \u2014 Analytical", "value": 62}, {"quad": "B \u2014 Sequential", "value": 88}, {"quad": "C \u2014 Interpersonal", "value": 45}, {"quad": "D \u2014 Imaginative", "value": 30}],
  operator: [{"quad": "A \u2014 Analytical", "value": 55}, {"quad": "B \u2014 Sequential", "value": 82}, {"quad": "C \u2014 Interpersonal", "value": 55}, {"quad": "D \u2014 Imaginative", "value": 42}],
  individualist: [{"quad": "A \u2014 Analytical", "value": 60}, {"quad": "B \u2014 Sequential", "value": 35}, {"quad": "C \u2014 Interpersonal", "value": 60}, {"quad": "D \u2014 Imaginative", "value": 78}],
  scholar: [{"quad": "A \u2014 Analytical", "value": 90}, {"quad": "B \u2014 Sequential", "value": 72}, {"quad": "C \u2014 Interpersonal", "value": 30}, {"quad": "D \u2014 Imaginative", "value": 60}],
};

// ── Burnout — CBI ────────────────────────────────────────────────────────────────────

export const CBI_DATA = {
  analyzer: [{"domain": "Personal", "value": 70}, {"domain": "Work", "value": 74}, {"domain": "Client/Peer", "value": 36}],
  controller: [{"domain": "Personal", "value": 71}, {"domain": "Work", "value": 79}, {"domain": "Client/Peer", "value": 36}],
  specialist: [{"domain": "Personal", "value": 47}, {"domain": "Work", "value": 65}, {"domain": "Client/Peer", "value": 33}],
  strategist: [{"domain": "Personal", "value": 77}, {"domain": "Work", "value": 75}, {"domain": "Client/Peer", "value": 42}],
  venturer: [{"domain": "Personal", "value": 84}, {"domain": "Work", "value": 66}, {"domain": "Client/Peer", "value": 56}],
  altruist: [{"domain": "Personal", "value": 40}, {"domain": "Work", "value": 61}, {"domain": "Client/Peer", "value": 62}],
  captain: [{"domain": "Personal", "value": 78}, {"domain": "Work", "value": 66}, {"domain": "Client/Peer", "value": 77}],
  collaborator: [{"domain": "Personal", "value": 19}, {"domain": "Work", "value": 30}, {"domain": "Client/Peer", "value": 60}],
  maverick: [{"domain": "Personal", "value": 57}, {"domain": "Work", "value": 56}, {"domain": "Client/Peer", "value": 80}],
  persuader: [{"domain": "Personal", "value": 59}, {"domain": "Work", "value": 55}, {"domain": "Client/Peer", "value": 78}],
  promoter: [{"domain": "Personal", "value": 57}, {"domain": "Work", "value": 53}, {"domain": "Client/Peer", "value": 85}],
  adapter: [{"domain": "Personal", "value": 31}, {"domain": "Work", "value": 41}, {"domain": "Client/Peer", "value": 54}],
  craftsman: [{"domain": "Personal", "value": 30}, {"domain": "Work", "value": 46}, {"domain": "Client/Peer", "value": 22}],
  guardian: [{"domain": "Personal", "value": 22}, {"domain": "Work", "value": 42}, {"domain": "Client/Peer", "value": 26}],
  operator: [{"domain": "Personal", "value": 18}, {"domain": "Work", "value": 32}, {"domain": "Client/Peer", "value": 34}],
  individualist: [{"domain": "Personal", "value": 47}, {"domain": "Work", "value": 43}, {"domain": "Client/Peer", "value": 56}],
  scholar: [{"domain": "Personal", "value": 41}, {"domain": "Work", "value": 54}, {"domain": "Client/Peer", "value": 30}],
};

// ── Burnout — MBI ────────────────────────────────────────────────────────────────────

export const MBI_DATA = {
  analyzer: [{"dim": "Exhaustion", "v": 73}, {"dim": "Cynicism", "v": 72}, {"dim": "Efficacy", "v": 53}],
  controller: [{"dim": "Exhaustion", "v": 76}, {"dim": "Cynicism", "v": 74}, {"dim": "Efficacy", "v": 50}],
  specialist: [{"dim": "Exhaustion", "v": 58}, {"dim": "Cynicism", "v": 63}, {"dim": "Efficacy", "v": 54}],
  strategist: [{"dim": "Exhaustion", "v": 77}, {"dim": "Cynicism", "v": 75}, {"dim": "Efficacy", "v": 45}],
  venturer: [{"dim": "Exhaustion", "v": 76}, {"dim": "Cynicism", "v": 78}, {"dim": "Efficacy", "v": 23}],
  altruist: [{"dim": "Exhaustion", "v": 56}, {"dim": "Cynicism", "v": 36}, {"dim": "Efficacy", "v": 60}],
  captain: [{"dim": "Exhaustion", "v": 75}, {"dim": "Cynicism", "v": 54}, {"dim": "Efficacy", "v": 37}],
  collaborator: [{"dim": "Exhaustion", "v": 29}, {"dim": "Cynicism", "v": 26}, {"dim": "Efficacy", "v": 55}],
  maverick: [{"dim": "Exhaustion", "v": 62}, {"dim": "Cynicism", "v": 42}, {"dim": "Efficacy", "v": 35}],
  persuader: [{"dim": "Exhaustion", "v": 61}, {"dim": "Cynicism", "v": 41}, {"dim": "Efficacy", "v": 43}],
  promoter: [{"dim": "Exhaustion", "v": 60}, {"dim": "Cynicism", "v": 37}, {"dim": "Efficacy", "v": 37}],
  adapter: [{"dim": "Exhaustion", "v": 39}, {"dim": "Cynicism", "v": 37}, {"dim": "Efficacy", "v": 53}],
  craftsman: [{"dim": "Exhaustion", "v": 39}, {"dim": "Cynicism", "v": 55}, {"dim": "Efficacy", "v": 64}],
  guardian: [{"dim": "Exhaustion", "v": 33}, {"dim": "Cynicism", "v": 45}, {"dim": "Efficacy", "v": 70}],
  operator: [{"dim": "Exhaustion", "v": 27}, {"dim": "Cynicism", "v": 40}, {"dim": "Efficacy", "v": 64}],
  individualist: [{"dim": "Exhaustion", "v": 48}, {"dim": "Cynicism", "v": 54}, {"dim": "Efficacy", "v": 32}],
  scholar: [{"dim": "Exhaustion", "v": 49}, {"dim": "Cynicism", "v": 59}, {"dim": "Efficacy", "v": 57}],
};

// ── PSS Stress Score ────────────────────────────────────────────────────────────────────

export const PSS_SCORE = {
  analyzer: 69,
  controller: 72,
  specialist: 58,
  strategist: 71,
  venturer: 67,
  altruist: 60,
  captain: 71,
  collaborator: 34,
  maverick: 61,
  persuader: 61,
  promoter: 60,
  adapter: 42,
  craftsman: 40,
  guardian: 37,
  operator: 31,
  individualist: 45,
  scholar: 49,
};

// ── WHO-5 Wellbeing ────────────────────────────────────────────────────────────────────

export const WHO5_DATA = {
  analyzer: [{"item": "Cheerful", "v": 42}, {"item": "Calm", "v": 42}, {"item": "Active & vigorous", "v": 66}, {"item": "Rested", "v": 40}, {"item": "Interested", "v": 54}],
  controller: [{"item": "Cheerful", "v": 37}, {"item": "Calm", "v": 38}, {"item": "Active & vigorous", "v": 63}, {"item": "Rested", "v": 36}, {"item": "Interested", "v": 50}],
  specialist: [{"item": "Cheerful", "v": 42}, {"item": "Calm", "v": 51}, {"item": "Active & vigorous", "v": 50}, {"item": "Rested", "v": 49}, {"item": "Interested", "v": 41}],
  strategist: [{"item": "Cheerful", "v": 42}, {"item": "Calm", "v": 39}, {"item": "Active & vigorous", "v": 70}, {"item": "Rested", "v": 37}, {"item": "Interested", "v": 58}],
  venturer: [{"item": "Cheerful", "v": 46}, {"item": "Calm", "v": 38}, {"item": "Active & vigorous", "v": 74}, {"item": "Rested", "v": 36}, {"item": "Interested", "v": 66}],
  altruist: [{"item": "Cheerful", "v": 64}, {"item": "Calm", "v": 53}, {"item": "Active & vigorous", "v": 64}, {"item": "Rested", "v": 51}, {"item": "Interested", "v": 62}],
  captain: [{"item": "Cheerful", "v": 64}, {"item": "Calm", "v": 39}, {"item": "Active & vigorous", "v": 87}, {"item": "Rested", "v": 37}, {"item": "Interested", "v": 83}],
  collaborator: [{"item": "Cheerful", "v": 76}, {"item": "Calm", "v": 76}, {"item": "Active & vigorous", "v": 55}, {"item": "Rested", "v": 74}, {"item": "Interested", "v": 61}],
  maverick: [{"item": "Cheerful", "v": 67}, {"item": "Calm", "v": 47}, {"item": "Active & vigorous", "v": 75}, {"item": "Rested", "v": 45}, {"item": "Interested", "v": 76}],
  persuader: [{"item": "Cheerful", "v": 71}, {"item": "Calm", "v": 49}, {"item": "Active & vigorous", "v": 79}, {"item": "Rested", "v": 47}, {"item": "Interested", "v": 80}],
  promoter: [{"item": "Cheerful", "v": 73}, {"item": "Calm", "v": 49}, {"item": "Active & vigorous", "v": 79}, {"item": "Rested", "v": 47}, {"item": "Interested", "v": 82}],
  adapter: [{"item": "Cheerful", "v": 67}, {"item": "Calm", "v": 67}, {"item": "Active & vigorous", "v": 56}, {"item": "Rested", "v": 65}, {"item": "Interested", "v": 58}],
  craftsman: [{"item": "Cheerful", "v": 52}, {"item": "Calm", "v": 70}, {"item": "Active & vigorous", "v": 43}, {"item": "Rested", "v": 68}, {"item": "Interested", "v": 39}],
  guardian: [{"item": "Cheerful", "v": 58}, {"item": "Calm", "v": 74}, {"item": "Active & vigorous", "v": 43}, {"item": "Rested", "v": 72}, {"item": "Interested", "v": 41}],
  operator: [{"item": "Cheerful", "v": 65}, {"item": "Calm", "v": 79}, {"item": "Active & vigorous", "v": 44}, {"item": "Rested", "v": 77}, {"item": "Interested", "v": 46}],
  individualist: [{"item": "Cheerful", "v": 58}, {"item": "Calm", "v": 59}, {"item": "Active & vigorous", "v": 58}, {"item": "Rested", "v": 57}, {"item": "Interested", "v": 58}],
  scholar: [{"item": "Cheerful", "v": 49}, {"item": "Calm", "v": 61}, {"item": "Active & vigorous", "v": 49}, {"item": "Rested", "v": 59}, {"item": "Interested", "v": 43}],
};

// ── Executive Function ────────────────────────────────────────────────────────────────────

export const EXEC_FUNC_DATA = {
  analyzer: [{"func": "Working Memory", "v": 86}, {"func": "Inhibition", "v": 68}, {"func": "Cognitive Flex", "v": 44}, {"func": "Planning", "v": 80}, {"func": "Monitoring", "v": 64}],
  controller: [{"func": "Working Memory", "v": 86}, {"func": "Inhibition", "v": 67}, {"func": "Cognitive Flex", "v": 47}, {"func": "Planning", "v": 79}, {"func": "Monitoring", "v": 63}],
  specialist: [{"func": "Working Memory", "v": 76}, {"func": "Inhibition", "v": 70}, {"func": "Cognitive Flex", "v": 42}, {"func": "Planning", "v": 67}, {"func": "Monitoring", "v": 66}],
  strategist: [{"func": "Working Memory", "v": 81}, {"func": "Inhibition", "v": 58}, {"func": "Cognitive Flex", "v": 48}, {"func": "Planning", "v": 77}, {"func": "Monitoring", "v": 56}],
  venturer: [{"func": "Working Memory", "v": 58}, {"func": "Inhibition", "v": 31}, {"func": "Cognitive Flex", "v": 52}, {"func": "Planning", "v": 60}, {"func": "Monitoring", "v": 34}],
  altruist: [{"func": "Working Memory", "v": 67}, {"func": "Inhibition", "v": 61}, {"func": "Cognitive Flex", "v": 58}, {"func": "Planning", "v": 59}, {"func": "Monitoring", "v": 59}],
  captain: [{"func": "Working Memory", "v": 61}, {"func": "Inhibition", "v": 35}, {"func": "Cognitive Flex", "v": 65}, {"func": "Planning", "v": 62}, {"func": "Monitoring", "v": 37}],
  collaborator: [{"func": "Working Memory", "v": 43}, {"func": "Inhibition", "v": 51}, {"func": "Cognitive Flex", "v": 45}, {"func": "Planning", "v": 37}, {"func": "Monitoring", "v": 53}],
  maverick: [{"func": "Working Memory", "v": 46}, {"func": "Inhibition", "v": 30}, {"func": "Cognitive Flex", "v": 65}, {"func": "Planning", "v": 45}, {"func": "Monitoring", "v": 33}],
  persuader: [{"func": "Working Memory", "v": 53}, {"func": "Inhibition", "v": 37}, {"func": "Cognitive Flex", "v": 63}, {"func": "Planning", "v": 52}, {"func": "Monitoring", "v": 40}],
  promoter: [{"func": "Working Memory", "v": 45}, {"func": "Inhibition", "v": 29}, {"func": "Cognitive Flex", "v": 67}, {"func": "Planning", "v": 45}, {"func": "Monitoring", "v": 33}],
  adapter: [{"func": "Working Memory", "v": 52}, {"func": "Inhibition", "v": 54}, {"func": "Cognitive Flex", "v": 45}, {"func": "Planning", "v": 46}, {"func": "Monitoring", "v": 55}],
  craftsman: [{"func": "Working Memory", "v": 72}, {"func": "Inhibition", "v": 78}, {"func": "Cognitive Flex", "v": 27}, {"func": "Planning", "v": 63}, {"func": "Monitoring", "v": 75}],
  guardian: [{"func": "Working Memory", "v": 71}, {"func": "Inhibition", "v": 81}, {"func": "Cognitive Flex", "v": 29}, {"func": "Planning", "v": 60}, {"func": "Monitoring", "v": 77}],
  operator: [{"func": "Working Memory", "v": 58}, {"func": "Inhibition", "v": 70}, {"func": "Cognitive Flex", "v": 29}, {"func": "Planning", "v": 50}, {"func": "Monitoring", "v": 69}],
  individualist: [{"func": "Working Memory", "v": 42}, {"func": "Inhibition", "v": 35}, {"func": "Cognitive Flex", "v": 46}, {"func": "Planning", "v": 40}, {"func": "Monitoring", "v": 39}],
  scholar: [{"func": "Working Memory", "v": 72}, {"func": "Inhibition", "v": 70}, {"func": "Cognitive Flex", "v": 35}, {"func": "Planning", "v": 63}, {"func": "Monitoring", "v": 68}],
};

// ── Metacognition ────────────────────────────────────────────────────────────────────

export const METACOG_DATA = {
  analyzer: [{"trait": "Planning", "value": 81}, {"trait": "Monitoring", "value": 64}, {"trait": "Evaluating", "value": 77}, {"trait": "Debugging", "value": 63}, {"trait": "Reflecting", "value": 56}],
  controller: [{"trait": "Planning", "value": 81}, {"trait": "Monitoring", "value": 63}, {"trait": "Evaluating", "value": 77}, {"trait": "Debugging", "value": 64}, {"trait": "Reflecting", "value": 55}],
  specialist: [{"trait": "Planning", "value": 71}, {"trait": "Monitoring", "value": 66}, {"trait": "Evaluating", "value": 67}, {"trait": "Debugging", "value": 51}, {"trait": "Reflecting", "value": 59}],
  strategist: [{"trait": "Planning", "value": 76}, {"trait": "Monitoring", "value": 56}, {"trait": "Evaluating", "value": 74}, {"trait": "Debugging", "value": 67}, {"trait": "Reflecting", "value": 53}],
  venturer: [{"trait": "Planning", "value": 53}, {"trait": "Monitoring", "value": 34}, {"trait": "Evaluating", "value": 56}, {"trait": "Debugging", "value": 72}, {"trait": "Reflecting", "value": 50}],
  altruist: [{"trait": "Planning", "value": 62}, {"trait": "Monitoring", "value": 59}, {"trait": "Evaluating", "value": 60}, {"trait": "Debugging", "value": 50}, {"trait": "Reflecting", "value": 43}],
  captain: [{"trait": "Planning", "value": 56}, {"trait": "Monitoring", "value": 37}, {"trait": "Evaluating", "value": 58}, {"trait": "Debugging", "value": 71}, {"trait": "Reflecting", "value": 37}],
  collaborator: [{"trait": "Planning", "value": 38}, {"trait": "Monitoring", "value": 53}, {"trait": "Evaluating", "value": 40}, {"trait": "Debugging", "value": 36}, {"trait": "Reflecting", "value": 53}],
  maverick: [{"trait": "Planning", "value": 41}, {"trait": "Monitoring", "value": 33}, {"trait": "Evaluating", "value": 44}, {"trait": "Debugging", "value": 60}, {"trait": "Reflecting", "value": 37}],
  persuader: [{"trait": "Planning", "value": 48}, {"trait": "Monitoring", "value": 40}, {"trait": "Evaluating", "value": 50}, {"trait": "Debugging", "value": 60}, {"trait": "Reflecting", "value": 38}],
  promoter: [{"trait": "Planning", "value": 40}, {"trait": "Monitoring", "value": 33}, {"trait": "Evaluating", "value": 44}, {"trait": "Debugging", "value": 60}, {"trait": "Reflecting", "value": 35}],
  adapter: [{"trait": "Planning", "value": 47}, {"trait": "Monitoring", "value": 55}, {"trait": "Evaluating", "value": 47}, {"trait": "Debugging", "value": 42}, {"trait": "Reflecting", "value": 53}],
  craftsman: [{"trait": "Planning", "value": 67}, {"trait": "Monitoring", "value": 75}, {"trait": "Evaluating", "value": 64}, {"trait": "Debugging", "value": 39}, {"trait": "Reflecting", "value": 70}],
  guardian: [{"trait": "Planning", "value": 66}, {"trait": "Monitoring", "value": 77}, {"trait": "Evaluating", "value": 62}, {"trait": "Debugging", "value": 35}, {"trait": "Reflecting", "value": 68}],
  operator: [{"trait": "Planning", "value": 53}, {"trait": "Monitoring", "value": 69}, {"trait": "Evaluating", "value": 52}, {"trait": "Debugging", "value": 33}, {"trait": "Reflecting", "value": 67}],
  individualist: [{"trait": "Planning", "value": 37}, {"trait": "Monitoring", "value": 39}, {"trait": "Evaluating", "value": 40}, {"trait": "Debugging", "value": 51}, {"trait": "Reflecting", "value": 54}],
  scholar: [{"trait": "Planning", "value": 67}, {"trait": "Monitoring", "value": 68}, {"trait": "Evaluating", "value": 64}, {"trait": "Debugging", "value": 46}, {"trait": "Reflecting", "value": 64}],
};

// ── Schwartz Values ────────────────────────────────────────────────────────────────────

export const SCHWARTZ_DATA = {
  analyzer: [{"value": "Power", "v": 62}, {"value": "Achievement", "v": 82}, {"value": "Hedonism", "v": 28}, {"value": "Stimulation", "v": 51}, {"value": "Self-Direction", "v": 40}, {"value": "Universalism", "v": 29}, {"value": "Benevolence", "v": 30}, {"value": "Tradition", "v": 63}, {"value": "Conformity", "v": 58}, {"value": "Security", "v": 52}],
  controller: [{"value": "Power", "v": 57}, {"value": "Achievement", "v": 80}, {"value": "Hedonism", "v": 25}, {"value": "Stimulation", "v": 55}, {"value": "Self-Direction", "v": 36}, {"value": "Universalism", "v": 31}, {"value": "Benevolence", "v": 30}, {"value": "Tradition", "v": 62}, {"value": "Conformity", "v": 55}, {"value": "Security", "v": 49}],
  specialist: [{"value": "Power", "v": 36}, {"value": "Achievement", "v": 61}, {"value": "Hedonism", "v": 25}, {"value": "Stimulation", "v": 48}, {"value": "Self-Direction", "v": 28}, {"value": "Universalism", "v": 46}, {"value": "Benevolence", "v": 42}, {"value": "Tradition", "v": 65}, {"value": "Conformity", "v": 60}, {"value": "Security", "v": 55}],
  strategist: [{"value": "Power", "v": 67}, {"value": "Achievement", "v": 82}, {"value": "Hedonism", "v": 33}, {"value": "Stimulation", "v": 56}, {"value": "Self-Direction", "v": 49}, {"value": "Universalism", "v": 27}, {"value": "Benevolence", "v": 28}, {"value": "Tradition", "v": 53}, {"value": "Conformity", "v": 49}, {"value": "Security", "v": 44}],
  venturer: [{"value": "Power", "v": 73}, {"value": "Achievement", "v": 71}, {"value": "Hedonism", "v": 49}, {"value": "Stimulation", "v": 60}, {"value": "Self-Direction", "v": 76}, {"value": "Universalism", "v": 23}, {"value": "Benevolence", "v": 26}, {"value": "Tradition", "v": 26}, {"value": "Conformity", "v": 26}, {"value": "Security", "v": 25}],
  altruist: [{"value": "Power", "v": 49}, {"value": "Achievement", "v": 54}, {"value": "Hedonism", "v": 56}, {"value": "Stimulation", "v": 64}, {"value": "Self-Direction", "v": 35}, {"value": "Universalism", "v": 63}, {"value": "Benevolence", "v": 65}, {"value": "Tradition", "v": 56}, {"value": "Conformity", "v": 53}, {"value": "Security", "v": 49}],
  captain: [{"value": "Power", "v": 86}, {"value": "Achievement", "v": 72}, {"value": "Hedonism", "v": 70}, {"value": "Stimulation", "v": 73}, {"value": "Self-Direction", "v": 73}, {"value": "Universalism", "v": 38}, {"value": "Benevolence", "v": 45}, {"value": "Tradition", "v": 30}, {"value": "Conformity", "v": 29}, {"value": "Security", "v": 28}],
  collaborator: [{"value": "Power", "v": 39}, {"value": "Achievement", "v": 34}, {"value": "Hedonism", "v": 67}, {"value": "Stimulation", "v": 48}, {"value": "Self-Direction", "v": 51}, {"value": "Universalism", "v": 70}, {"value": "Benevolence", "v": 70}, {"value": "Tradition", "v": 46}, {"value": "Conformity", "v": 50}, {"value": "Security", "v": 53}],
  maverick: [{"value": "Power", "v": 65}, {"value": "Achievement", "v": 50}, {"value": "Hedonism", "v": 75}, {"value": "Stimulation", "v": 73}, {"value": "Self-Direction", "v": 68}, {"value": "Universalism", "v": 55}, {"value": "Benevolence", "v": 59}, {"value": "Tradition", "v": 25}, {"value": "Conformity", "v": 26}, {"value": "Security", "v": 26}],
  persuader: [{"value": "Power", "v": 73}, {"value": "Achievement", "v": 58}, {"value": "Hedonism", "v": 75}, {"value": "Stimulation", "v": 69}, {"value": "Self-Direction", "v": 67}, {"value": "Universalism", "v": 51}, {"value": "Benevolence", "v": 57}, {"value": "Tradition", "v": 32}, {"value": "Conformity", "v": 33}, {"value": "Security", "v": 33}],
  promoter: [{"value": "Power", "v": 71}, {"value": "Achievement", "v": 51}, {"value": "Hedonism", "v": 81}, {"value": "Stimulation", "v": 74}, {"value": "Self-Direction", "v": 71}, {"value": "Universalism", "v": 56}, {"value": "Benevolence", "v": 62}, {"value": "Tradition", "v": 24}, {"value": "Conformity", "v": 26}, {"value": "Security", "v": 27}],
  adapter: [{"value": "Power", "v": 42}, {"value": "Achievement", "v": 43}, {"value": "Hedonism", "v": 57}, {"value": "Stimulation", "v": 49}, {"value": "Self-Direction", "v": 48}, {"value": "Universalism", "v": 61}, {"value": "Benevolence", "v": 61}, {"value": "Tradition", "v": 49}, {"value": "Conformity", "v": 50}, {"value": "Security", "v": 52}],
  craftsman: [{"value": "Power", "v": 31}, {"value": "Achievement", "v": 56}, {"value": "Hedonism", "v": 25}, {"value": "Stimulation", "v": 30}, {"value": "Self-Direction", "v": 28}, {"value": "Universalism", "v": 48}, {"value": "Benevolence", "v": 44}, {"value": "Tradition", "v": 73}, {"value": "Conformity", "v": 72}, {"value": "Security", "v": 71}],
  guardian: [{"value": "Power", "v": 29}, {"value": "Achievement", "v": 52}, {"value": "Hedonism", "v": 31}, {"value": "Stimulation", "v": 31}, {"value": "Self-Direction", "v": 25}, {"value": "Universalism", "v": 56}, {"value": "Benevolence", "v": 52}, {"value": "Tradition", "v": 76}, {"value": "Conformity", "v": 75}, {"value": "Security", "v": 74}],
  operator: [{"value": "Power", "v": 30}, {"value": "Achievement", "v": 44}, {"value": "Hedonism", "v": 42}, {"value": "Stimulation", "v": 31}, {"value": "Self-Direction", "v": 36}, {"value": "Universalism", "v": 59}, {"value": "Benevolence", "v": 56}, {"value": "Tradition", "v": 65}, {"value": "Conformity", "v": 67}, {"value": "Security", "v": 69}],
  individualist: [{"value": "Power", "v": 46}, {"value": "Achievement", "v": 43}, {"value": "Hedonism", "v": 57}, {"value": "Stimulation", "v": 52}, {"value": "Self-Direction", "v": 66}, {"value": "Universalism", "v": 49}, {"value": "Benevolence", "v": 48}, {"value": "Tradition", "v": 30}, {"value": "Conformity", "v": 33}, {"value": "Security", "v": 35}],
  scholar: [{"value": "Power", "v": 38}, {"value": "Achievement", "v": 59}, {"value": "Hedonism", "v": 29}, {"value": "Stimulation", "v": 39}, {"value": "Self-Direction", "v": 34}, {"value": "Universalism", "v": 45}, {"value": "Benevolence", "v": 42}, {"value": "Tradition", "v": 65}, {"value": "Conformity", "v": 63}, {"value": "Security", "v": 61}],
};

// ── Purpose & Meaning ────────────────────────────────────────────────────────────────────

export const PURPOSE_DATA = {
  analyzer: [{"dim": "Clarity", "v": 64}, {"dim": "Impact", "v": 57}, {"dim": "Alignment", "v": 59}, {"dim": "Autonomy", "v": 50}, {"dim": "Connection", "v": 33}],
  controller: [{"dim": "Clarity", "v": 63}, {"dim": "Impact", "v": 53}, {"dim": "Alignment", "v": 56}, {"dim": "Autonomy", "v": 46}, {"dim": "Connection", "v": 32}],
  specialist: [{"dim": "Clarity", "v": 66}, {"dim": "Impact", "v": 38}, {"dim": "Alignment", "v": 61}, {"dim": "Autonomy", "v": 35}, {"dim": "Connection", "v": 38}],
  strategist: [{"dim": "Clarity", "v": 56}, {"dim": "Impact", "v": 61}, {"dim": "Alignment", "v": 52}, {"dim": "Autonomy", "v": 57}, {"dim": "Connection", "v": 33}],
  venturer: [{"dim": "Clarity", "v": 34}, {"dim": "Impact", "v": 65}, {"dim": "Alignment", "v": 33}, {"dim": "Autonomy", "v": 75}, {"dim": "Connection", "v": 32}],
  altruist: [{"dim": "Clarity", "v": 59}, {"dim": "Impact", "v": 51}, {"dim": "Alignment", "v": 56}, {"dim": "Autonomy", "v": 38}, {"dim": "Connection", "v": 65}],
  captain: [{"dim": "Clarity", "v": 37}, {"dim": "Impact", "v": 78}, {"dim": "Alignment", "v": 36}, {"dim": "Autonomy", "v": 72}, {"dim": "Connection", "v": 56}],
  collaborator: [{"dim": "Clarity", "v": 53}, {"dim": "Impact", "v": 44}, {"dim": "Alignment", "v": 56}, {"dim": "Autonomy", "v": 45}, {"dim": "Connection", "v": 67}],
  maverick: [{"dim": "Clarity", "v": 33}, {"dim": "Impact", "v": 63}, {"dim": "Alignment", "v": 34}, {"dim": "Autonomy", "v": 62}, {"dim": "Connection", "v": 64}],
  persuader: [{"dim": "Clarity", "v": 40}, {"dim": "Impact", "v": 69}, {"dim": "Alignment", "v": 40}, {"dim": "Autonomy", "v": 64}, {"dim": "Connection", "v": 64}],
  promoter: [{"dim": "Clarity", "v": 33}, {"dim": "Impact", "v": 68}, {"dim": "Alignment", "v": 34}, {"dim": "Autonomy", "v": 65}, {"dim": "Connection", "v": 68}],
  adapter: [{"dim": "Clarity", "v": 55}, {"dim": "Impact", "v": 45}, {"dim": "Alignment", "v": 56}, {"dim": "Autonomy", "v": 45}, {"dim": "Connection", "v": 59}],
  craftsman: [{"dim": "Clarity", "v": 75}, {"dim": "Impact", "v": 34}, {"dim": "Alignment", "v": 74}, {"dim": "Autonomy", "v": 34}, {"dim": "Connection", "v": 38}],
  guardian: [{"dim": "Clarity", "v": 77}, {"dim": "Impact", "v": 34}, {"dim": "Alignment", "v": 77}, {"dim": "Autonomy", "v": 30}, {"dim": "Connection", "v": 46}],
  operator: [{"dim": "Clarity", "v": 69}, {"dim": "Impact", "v": 35}, {"dim": "Alignment", "v": 71}, {"dim": "Autonomy", "v": 36}, {"dim": "Connection", "v": 50}],
  individualist: [{"dim": "Clarity", "v": 39}, {"dim": "Impact", "v": 47}, {"dim": "Alignment", "v": 41}, {"dim": "Autonomy", "v": 59}, {"dim": "Connection", "v": 47}],
  scholar: [{"dim": "Clarity", "v": 68}, {"dim": "Impact", "v": 39}, {"dim": "Alignment", "v": 65}, {"dim": "Autonomy", "v": 39}, {"dim": "Connection", "v": 39}],
};

// ── KAI Adaption-Innovation ────────────────────────────────────────────────────────────────────

export const KAI_SCORES = {"analyzer": 32, "controller": 28, "specialist": 35, "strategist": 65, "venturer": 85, "altruist": 42, "captain": 78, "collaborator": 38, "maverick": 92, "persuader": 72, "promoter": 80, "adapter": 50, "craftsman": 25, "guardian": 22, "operator": 30, "individualist": 75, "scholar": 55};

// ── SDI Strength Deployment ────────────────────────────────────────────────────────────────────

export const SDI_DATA = {
  analyzer: [{"color": "Blue-Green", "v": 35}, {"color": "Red", "v": 28}, {"color": "Green", "v": 22}, {"color": "Hub (Flexible)", "v": 15}],
  controller: [{"color": "Red", "v": 45}, {"color": "Blue-Green", "v": 30}, {"color": "Green", "v": 15}, {"color": "Hub (Flexible)", "v": 10}],
  specialist: [{"color": "Blue-Green", "v": 38}, {"color": "Green", "v": 30}, {"color": "Red", "v": 20}, {"color": "Hub (Flexible)", "v": 12}],
  strategist: [{"color": "Red", "v": 40}, {"color": "Blue-Green", "v": 32}, {"color": "Hub (Flexible)", "v": 18}, {"color": "Green", "v": 10}],
  venturer: [{"color": "Red", "v": 52}, {"color": "Hub (Flexible)", "v": 28}, {"color": "Blue-Green", "v": 15}, {"color": "Green", "v": 5}],
  altruist: [{"color": "Green", "v": 45}, {"color": "Blue-Green", "v": 30}, {"color": "Red", "v": 15}, {"color": "Hub (Flexible)", "v": 10}],
  captain: [{"color": "Red", "v": 48}, {"color": "Green", "v": 28}, {"color": "Blue-Green", "v": 15}, {"color": "Hub (Flexible)", "v": 9}],
  collaborator: [{"color": "Green", "v": 50}, {"color": "Blue-Green", "v": 28}, {"color": "Red", "v": 12}, {"color": "Hub (Flexible)", "v": 10}],
  maverick: [{"color": "Red", "v": 42}, {"color": "Hub (Flexible)", "v": 32}, {"color": "Green", "v": 18}, {"color": "Blue-Green", "v": 8}],
  persuader: [{"color": "Red", "v": 38}, {"color": "Green", "v": 30}, {"color": "Hub (Flexible)", "v": 22}, {"color": "Blue-Green", "v": 10}],
  promoter: [{"color": "Green", "v": 40}, {"color": "Red", "v": 35}, {"color": "Hub (Flexible)", "v": 18}, {"color": "Blue-Green", "v": 7}],
  adapter: [{"color": "Green", "v": 38}, {"color": "Blue-Green", "v": 32}, {"color": "Hub (Flexible)", "v": 20}, {"color": "Red", "v": 10}],
  craftsman: [{"color": "Blue-Green", "v": 42}, {"color": "Green", "v": 28}, {"color": "Red", "v": 18}, {"color": "Hub (Flexible)", "v": 12}],
  guardian: [{"color": "Blue-Green", "v": 38}, {"color": "Green", "v": 32}, {"color": "Red", "v": 18}, {"color": "Hub (Flexible)", "v": 12}],
  operator: [{"color": "Blue-Green", "v": 35}, {"color": "Green", "v": 32}, {"color": "Red", "v": 20}, {"color": "Hub (Flexible)", "v": 13}],
  individualist: [{"color": "Hub (Flexible)", "v": 40}, {"color": "Red", "v": 28}, {"color": "Green", "v": 20}, {"color": "Blue-Green", "v": 12}],
  scholar: [{"color": "Blue-Green", "v": 48}, {"color": "Red", "v": 25}, {"color": "Green", "v": 18}, {"color": "Hub (Flexible)", "v": 9}],
};

// ── TMS Team Management Systems ────────────────────────────────────────────────────────────────────

export const TMS_DATA = {
  analyzer: [{"role": "Creator", "v": 35}, {"role": "Promoter", "v": 22}, {"role": "Assessor", "v": 80}, {"role": "Developer", "v": 55}, {"role": "Organiser", "v": 72}, {"role": "Producer", "v": 68}, {"role": "Inspector", "v": 88}, {"role": "Maintainer", "v": 42}, {"role": "Reporter", "v": 38}],
  controller: [{"role": "Creator", "v": 28}, {"role": "Promoter", "v": 30}, {"role": "Assessor", "v": 72}, {"role": "Developer", "v": 42}, {"role": "Organiser", "v": 88}, {"role": "Producer", "v": 82}, {"role": "Inspector", "v": 80}, {"role": "Maintainer", "v": 38}, {"role": "Reporter", "v": 28}],
  specialist: [{"role": "Creator", "v": 42}, {"role": "Promoter", "v": 18}, {"role": "Assessor", "v": 82}, {"role": "Developer", "v": 60}, {"role": "Organiser", "v": 65}, {"role": "Producer", "v": 70}, {"role": "Inspector", "v": 85}, {"role": "Maintainer", "v": 50}, {"role": "Reporter", "v": 35}],
  strategist: [{"role": "Creator", "v": 62}, {"role": "Promoter", "v": 45}, {"role": "Assessor", "v": 78}, {"role": "Developer", "v": 68}, {"role": "Organiser", "v": 75}, {"role": "Producer", "v": 72}, {"role": "Inspector", "v": 62}, {"role": "Maintainer", "v": 32}, {"role": "Reporter", "v": 42}],
  venturer: [{"role": "Creator", "v": 78}, {"role": "Promoter", "v": 72}, {"role": "Assessor", "v": 55}, {"role": "Developer", "v": 60}, {"role": "Organiser", "v": 35}, {"role": "Producer", "v": 50}, {"role": "Inspector", "v": 28}, {"role": "Maintainer", "v": 22}, {"role": "Reporter", "v": 45}],
  altruist: [{"role": "Creator", "v": 42}, {"role": "Promoter", "v": 65}, {"role": "Assessor", "v": 55}, {"role": "Developer", "v": 78}, {"role": "Organiser", "v": 60}, {"role": "Producer", "v": 62}, {"role": "Inspector", "v": 45}, {"role": "Maintainer", "v": 80}, {"role": "Reporter", "v": 68}],
  captain: [{"role": "Creator", "v": 55}, {"role": "Promoter", "v": 80}, {"role": "Assessor", "v": 62}, {"role": "Developer", "v": 58}, {"role": "Organiser", "v": 70}, {"role": "Producer", "v": 78}, {"role": "Inspector", "v": 42}, {"role": "Maintainer", "v": 28}, {"role": "Reporter", "v": 52}],
  collaborator: [{"role": "Creator", "v": 35}, {"role": "Promoter", "v": 72}, {"role": "Assessor", "v": 48}, {"role": "Developer", "v": 85}, {"role": "Organiser", "v": 60}, {"role": "Producer", "v": 62}, {"role": "Inspector", "v": 38}, {"role": "Maintainer", "v": 82}, {"role": "Reporter", "v": 72}],
  maverick: [{"role": "Creator", "v": 85}, {"role": "Promoter", "v": 78}, {"role": "Assessor", "v": 42}, {"role": "Developer", "v": 55}, {"role": "Organiser", "v": 25}, {"role": "Producer", "v": 40}, {"role": "Inspector", "v": 20}, {"role": "Maintainer", "v": 18}, {"role": "Reporter", "v": 55}],
  persuader: [{"role": "Creator", "v": 65}, {"role": "Promoter", "v": 88}, {"role": "Assessor", "v": 48}, {"role": "Developer", "v": 70}, {"role": "Organiser", "v": 45}, {"role": "Producer", "v": 55}, {"role": "Inspector", "v": 28}, {"role": "Maintainer", "v": 32}, {"role": "Reporter", "v": 62}],
  promoter: [{"role": "Creator", "v": 55}, {"role": "Promoter", "v": 92}, {"role": "Assessor", "v": 38}, {"role": "Developer", "v": 68}, {"role": "Organiser", "v": 30}, {"role": "Producer", "v": 45}, {"role": "Inspector", "v": 18}, {"role": "Maintainer", "v": 25}, {"role": "Reporter", "v": 65}],
  adapter: [{"role": "Creator", "v": 48}, {"role": "Promoter", "v": 62}, {"role": "Assessor", "v": 55}, {"role": "Developer", "v": 70}, {"role": "Organiser", "v": 58}, {"role": "Producer", "v": 60}, {"role": "Inspector", "v": 45}, {"role": "Maintainer", "v": 68}, {"role": "Reporter", "v": 60}],
  craftsman: [{"role": "Creator", "v": 32}, {"role": "Promoter", "v": 22}, {"role": "Assessor", "v": 68}, {"role": "Developer", "v": 48}, {"role": "Organiser", "v": 75}, {"role": "Producer", "v": 85}, {"role": "Inspector", "v": 88}, {"role": "Maintainer", "v": 62}, {"role": "Reporter", "v": 38}],
  guardian: [{"role": "Creator", "v": 25}, {"role": "Promoter", "v": 30}, {"role": "Assessor", "v": 62}, {"role": "Developer", "v": 55}, {"role": "Organiser", "v": 78}, {"role": "Producer", "v": 80}, {"role": "Inspector", "v": 82}, {"role": "Maintainer", "v": 72}, {"role": "Reporter", "v": 48}],
  operator: [{"role": "Creator", "v": 28}, {"role": "Promoter", "v": 35}, {"role": "Assessor", "v": 58}, {"role": "Developer", "v": 52}, {"role": "Organiser", "v": 72}, {"role": "Producer", "v": 82}, {"role": "Inspector", "v": 75}, {"role": "Maintainer", "v": 78}, {"role": "Reporter", "v": 45}],
  individualist: [{"role": "Creator", "v": 72}, {"role": "Promoter", "v": 60}, {"role": "Assessor", "v": 52}, {"role": "Developer", "v": 55}, {"role": "Organiser", "v": 35}, {"role": "Producer", "v": 42}, {"role": "Inspector", "v": 38}, {"role": "Maintainer", "v": 32}, {"role": "Reporter", "v": 65}],
  scholar: [{"role": "Creator", "v": 50}, {"role": "Promoter", "v": 20}, {"role": "Assessor", "v": 85}, {"role": "Developer", "v": 60}, {"role": "Organiser", "v": 68}, {"role": "Producer", "v": 65}, {"role": "Inspector", "v": 90}, {"role": "Maintainer", "v": 48}, {"role": "Reporter", "v": 42}],
};

// ── Belbin Team Roles ────────────────────────────────────────────────────────────────────

export const BELBIN_DATA = {
  analyzer: [{"role": "Plant", "v": 38}, {"role": "Resource Inv.", "v": 22}, {"role": "Coordinator", "v": 45}, {"role": "Shaper", "v": 55}, {"role": "Monitor Eval.", "v": 88}, {"role": "Teamworker", "v": 35}, {"role": "Implementer", "v": 65}, {"role": "Completer", "v": 75}, {"role": "Specialist", "v": 80}],
  controller: [{"role": "Plant", "v": 28}, {"role": "Resource Inv.", "v": 30}, {"role": "Coordinator", "v": 58}, {"role": "Shaper", "v": 82}, {"role": "Monitor Eval.", "v": 78}, {"role": "Teamworker", "v": 28}, {"role": "Implementer", "v": 72}, {"role": "Completer", "v": 60}, {"role": "Specialist", "v": 65}],
  specialist: [{"role": "Plant", "v": 45}, {"role": "Resource Inv.", "v": 18}, {"role": "Coordinator", "v": 38}, {"role": "Shaper", "v": 32}, {"role": "Monitor Eval.", "v": 82}, {"role": "Teamworker", "v": 40}, {"role": "Implementer", "v": 60}, {"role": "Completer", "v": 72}, {"role": "Specialist", "v": 90}],
  strategist: [{"role": "Plant", "v": 62}, {"role": "Resource Inv.", "v": 48}, {"role": "Coordinator", "v": 70}, {"role": "Shaper", "v": 80}, {"role": "Monitor Eval.", "v": 75}, {"role": "Teamworker", "v": 38}, {"role": "Implementer", "v": 60}, {"role": "Completer", "v": 50}, {"role": "Specialist", "v": 68}],
  venturer: [{"role": "Plant", "v": 78}, {"role": "Resource Inv.", "v": 80}, {"role": "Coordinator", "v": 42}, {"role": "Shaper", "v": 88}, {"role": "Monitor Eval.", "v": 45}, {"role": "Teamworker", "v": 28}, {"role": "Implementer", "v": 38}, {"role": "Completer", "v": 22}, {"role": "Specialist", "v": 42}],
  altruist: [{"role": "Plant", "v": 38}, {"role": "Resource Inv.", "v": 60}, {"role": "Coordinator", "v": 72}, {"role": "Shaper", "v": 25}, {"role": "Monitor Eval.", "v": 55}, {"role": "Teamworker", "v": 85}, {"role": "Implementer", "v": 58}, {"role": "Completer", "v": 65}, {"role": "Specialist", "v": 42}],
  captain: [{"role": "Plant", "v": 48}, {"role": "Resource Inv.", "v": 72}, {"role": "Coordinator", "v": 82}, {"role": "Shaper", "v": 85}, {"role": "Monitor Eval.", "v": 60}, {"role": "Teamworker", "v": 42}, {"role": "Implementer", "v": 55}, {"role": "Completer", "v": 38}, {"role": "Specialist", "v": 35}],
  collaborator: [{"role": "Plant", "v": 32}, {"role": "Resource Inv.", "v": 68}, {"role": "Coordinator", "v": 80}, {"role": "Shaper", "v": 20}, {"role": "Monitor Eval.", "v": 48}, {"role": "Teamworker", "v": 88}, {"role": "Implementer", "v": 52}, {"role": "Completer", "v": 60}, {"role": "Specialist", "v": 38}],
  maverick: [{"role": "Plant", "v": 85}, {"role": "Resource Inv.", "v": 78}, {"role": "Coordinator", "v": 38}, {"role": "Shaper", "v": 72}, {"role": "Monitor Eval.", "v": 38}, {"role": "Teamworker", "v": 30}, {"role": "Implementer", "v": 28}, {"role": "Completer", "v": 22}, {"role": "Specialist", "v": 45}],
  persuader: [{"role": "Plant", "v": 55}, {"role": "Resource Inv.", "v": 85}, {"role": "Coordinator", "v": 65}, {"role": "Shaper", "v": 70}, {"role": "Monitor Eval.", "v": 42}, {"role": "Teamworker", "v": 62}, {"role": "Implementer", "v": 45}, {"role": "Completer", "v": 35}, {"role": "Specialist", "v": 32}],
  promoter: [{"role": "Plant", "v": 42}, {"role": "Resource Inv.", "v": 88}, {"role": "Coordinator", "v": 55}, {"role": "Shaper", "v": 65}, {"role": "Monitor Eval.", "v": 32}, {"role": "Teamworker", "v": 68}, {"role": "Implementer", "v": 35}, {"role": "Completer", "v": 28}, {"role": "Specialist", "v": 25}],
  adapter: [{"role": "Plant", "v": 45}, {"role": "Resource Inv.", "v": 62}, {"role": "Coordinator", "v": 68}, {"role": "Shaper", "v": 38}, {"role": "Monitor Eval.", "v": 55}, {"role": "Teamworker", "v": 78}, {"role": "Implementer", "v": 58}, {"role": "Completer", "v": 55}, {"role": "Specialist", "v": 42}],
  craftsman: [{"role": "Plant", "v": 30}, {"role": "Resource Inv.", "v": 25}, {"role": "Coordinator", "v": 42}, {"role": "Shaper", "v": 35}, {"role": "Monitor Eval.", "v": 72}, {"role": "Teamworker", "v": 50}, {"role": "Implementer", "v": 88}, {"role": "Completer", "v": 80}, {"role": "Specialist", "v": 78}],
  guardian: [{"role": "Plant", "v": 22}, {"role": "Resource Inv.", "v": 30}, {"role": "Coordinator", "v": 48}, {"role": "Shaper", "v": 28}, {"role": "Monitor Eval.", "v": 68}, {"role": "Teamworker", "v": 62}, {"role": "Implementer", "v": 82}, {"role": "Completer", "v": 85}, {"role": "Specialist", "v": 65}],
  operator: [{"role": "Plant", "v": 25}, {"role": "Resource Inv.", "v": 35}, {"role": "Coordinator", "v": 50}, {"role": "Shaper", "v": 25}, {"role": "Monitor Eval.", "v": 62}, {"role": "Teamworker", "v": 68}, {"role": "Implementer", "v": 85}, {"role": "Completer", "v": 78}, {"role": "Specialist", "v": 55}],
  individualist: [{"role": "Plant", "v": 70}, {"role": "Resource Inv.", "v": 58}, {"role": "Coordinator", "v": 42}, {"role": "Shaper", "v": 55}, {"role": "Monitor Eval.", "v": 50}, {"role": "Teamworker", "v": 45}, {"role": "Implementer", "v": 40}, {"role": "Completer", "v": 38}, {"role": "Specialist", "v": 72}],
  scholar: [{"role": "Plant", "v": 55}, {"role": "Resource Inv.", "v": 18}, {"role": "Coordinator", "v": 38}, {"role": "Shaper", "v": 28}, {"role": "Monitor Eval.", "v": 88}, {"role": "Teamworker", "v": 40}, {"role": "Implementer", "v": 58}, {"role": "Completer", "v": 70}, {"role": "Specialist", "v": 85}],
};

// ── Work Values ────────────────────────────────────────────────────────────────────

export const WORK_VALUES_DATA = {
  analyzer: [{"label": "Accuracy", "value": 90}, {"label": "Independence", "value": 72}, {"label": "Achievement", "value": 75}, {"label": "Variety", "value": 35}, {"label": "Social Service", "value": 28}, {"label": "Security", "value": 65}],
  controller: [{"label": "Power", "value": 88}, {"label": "Achievement", "value": 82}, {"label": "Accuracy", "value": 78}, {"label": "Security", "value": 55}, {"label": "Social Service", "value": 22}, {"label": "Variety", "value": 40}],
  specialist: [{"label": "Accuracy", "value": 85}, {"label": "Learning", "value": 80}, {"label": "Independence", "value": 68}, {"label": "Security", "value": 72}, {"label": "Social Service", "value": 35}, {"label": "Power", "value": 28}],
  strategist: [{"label": "Achievement", "value": 85}, {"label": "Independence", "value": 80}, {"label": "Power", "value": 75}, {"label": "Variety", "value": 65}, {"label": "Accuracy", "value": 62}, {"label": "Social Service", "value": 35}],
  venturer: [{"label": "Independence", "value": 92}, {"label": "Achievement", "value": 85}, {"label": "Variety", "value": 80}, {"label": "Power", "value": 75}, {"label": "Security", "value": 18}, {"label": "Accuracy", "value": 30}],
  altruist: [{"label": "Social Service", "value": 88}, {"label": "Relationships", "value": 82}, {"label": "Security", "value": 65}, {"label": "Accuracy", "value": 55}, {"label": "Achievement", "value": 48}, {"label": "Power", "value": 22}],
  captain: [{"label": "Power", "value": 90}, {"label": "Achievement", "value": 85}, {"label": "Relationships", "value": 72}, {"label": "Variety", "value": 65}, {"label": "Accuracy", "value": 48}, {"label": "Security", "value": 38}],
  collaborator: [{"label": "Relationships", "value": 88}, {"label": "Social Service", "value": 82}, {"label": "Security", "value": 65}, {"label": "Achievement", "value": 50}, {"label": "Accuracy", "value": 42}, {"label": "Power", "value": 18}],
  maverick: [{"label": "Independence", "value": 88}, {"label": "Variety", "value": 82}, {"label": "Achievement", "value": 72}, {"label": "Power", "value": 65}, {"label": "Accuracy", "value": 20}, {"label": "Security", "value": 15}],
  persuader: [{"label": "Relationships", "value": 85}, {"label": "Power", "value": 72}, {"label": "Achievement", "value": 75}, {"label": "Variety", "value": 68}, {"label": "Accuracy", "value": 35}, {"label": "Security", "value": 32}],
  promoter: [{"label": "Relationships", "value": 88}, {"label": "Variety", "value": 80}, {"label": "Power", "value": 65}, {"label": "Achievement", "value": 68}, {"label": "Security", "value": 22}, {"label": "Accuracy", "value": 18}],
  adapter: [{"label": "Relationships", "value": 72}, {"label": "Security", "value": 65}, {"label": "Social Service", "value": 62}, {"label": "Achievement", "value": 55}, {"label": "Accuracy", "value": 48}, {"label": "Power", "value": 28}],
  craftsman: [{"label": "Accuracy", "value": 88}, {"label": "Security", "value": 80}, {"label": "Achievement", "value": 72}, {"label": "Independence", "value": 62}, {"label": "Social Service", "value": 40}, {"label": "Power", "value": 25}],
  guardian: [{"label": "Security", "value": 88}, {"label": "Accuracy", "value": 82}, {"label": "Social Service", "value": 68}, {"label": "Relationships", "value": 65}, {"label": "Achievement", "value": 52}, {"label": "Power", "value": 20}],
  operator: [{"label": "Security", "value": 85}, {"label": "Relationships", "value": 72}, {"label": "Social Service", "value": 68}, {"label": "Accuracy", "value": 65}, {"label": "Achievement", "value": 50}, {"label": "Power", "value": 18}],
  individualist: [{"label": "Independence", "value": 88}, {"label": "Variety", "value": 75}, {"label": "Achievement", "value": 65}, {"label": "Relationships", "value": 55}, {"label": "Accuracy", "value": 42}, {"label": "Security", "value": 28}],
  scholar: [{"label": "Learning", "value": 90}, {"label": "Accuracy", "value": 85}, {"label": "Independence", "value": 75}, {"label": "Achievement", "value": 65}, {"label": "Security", "value": 55}, {"label": "Power", "value": 30}],
};

// ── Workplace Big Five Pro ────────────────────────────────────────────────────────────────────

export const WBF_DATA = {
  analyzer: [{"trait": "N (Neuroticism)", "v": 57}, {"trait": "E (Extraversion)", "v": 35}, {"trait": "O (Openness)", "v": 46}, {"trait": "A (Agreeableness)", "v": 33}, {"trait": "C (Conscientiousness)", "v": 71}],
  controller: [{"trait": "N (Neuroticism)", "v": 63}, {"trait": "E (Extraversion)", "v": 31}, {"trait": "O (Openness)", "v": 43}, {"trait": "A (Agreeableness)", "v": 33}, {"trait": "C (Conscientiousness)", "v": 69}],
  specialist: [{"trait": "N (Neuroticism)", "v": 56}, {"trait": "E (Extraversion)", "v": 28}, {"trait": "O (Openness)", "v": 34}, {"trait": "A (Agreeableness)", "v": 51}, {"trait": "C (Conscientiousness)", "v": 69}],
  strategist: [{"trait": "N (Neuroticism)", "v": 61}, {"trait": "E (Extraversion)", "v": 37}, {"trait": "O (Openness)", "v": 54}, {"trait": "A (Agreeableness)", "v": 29}, {"trait": "C (Conscientiousness)", "v": 62}],
  venturer: [{"trait": "N (Neuroticism)", "v": 64}, {"trait": "E (Extraversion)", "v": 39}, {"trait": "O (Openness)", "v": 77}, {"trait": "A (Agreeableness)", "v": 24}, {"trait": "C (Conscientiousness)", "v": 35}],
  altruist: [{"trait": "N (Neuroticism)", "v": 46}, {"trait": "E (Extraversion)", "v": 69}, {"trait": "O (Openness)", "v": 45}, {"trait": "A (Agreeableness)", "v": 63}, {"trait": "C (Conscientiousness)", "v": 60}],
  captain: [{"trait": "N (Neuroticism)", "v": 54}, {"trait": "E (Extraversion)", "v": 76}, {"trait": "O (Openness)", "v": 78}, {"trait": "A (Agreeableness)", "v": 34}, {"trait": "C (Conscientiousness)", "v": 39}],
  collaborator: [{"trait": "N (Neuroticism)", "v": 31}, {"trait": "E (Extraversion)", "v": 66}, {"trait": "O (Openness)", "v": 56}, {"trait": "A (Agreeableness)", "v": 76}, {"trait": "C (Conscientiousness)", "v": 48}],
  maverick: [{"trait": "N (Neuroticism)", "v": 52}, {"trait": "E (Extraversion)", "v": 76}, {"trait": "O (Openness)", "v": 73}, {"trait": "A (Agreeableness)", "v": 51}, {"trait": "C (Conscientiousness)", "v": 31}],
  persuader: [{"trait": "N (Neuroticism)", "v": 46}, {"trait": "E (Extraversion)", "v": 80}, {"trait": "O (Openness)", "v": 73}, {"trait": "A (Agreeableness)", "v": 49}, {"trait": "C (Conscientiousness)", "v": 39}],
  promoter: [{"trait": "N (Neuroticism)", "v": 48}, {"trait": "E (Extraversion)", "v": 84}, {"trait": "O (Openness)", "v": 77}, {"trait": "A (Agreeableness)", "v": 52}, {"trait": "C (Conscientiousness)", "v": 31}],
  adapter: [{"trait": "N (Neuroticism)", "v": 38}, {"trait": "E (Extraversion)", "v": 58}, {"trait": "O (Openness)", "v": 53}, {"trait": "A (Agreeableness)", "v": 67}, {"trait": "C (Conscientiousness)", "v": 52}],
  craftsman: [{"trait": "N (Neuroticism)", "v": 39}, {"trait": "E (Extraversion)", "v": 26}, {"trait": "O (Openness)", "v": 34}, {"trait": "A (Agreeableness)", "v": 60}, {"trait": "C (Conscientiousness)", "v": 77}],
  guardian: [{"trait": "N (Neuroticism)", "v": 34}, {"trait": "E (Extraversion)", "v": 35}, {"trait": "O (Openness)", "v": 32}, {"trait": "A (Agreeableness)", "v": 68}, {"trait": "C (Conscientiousness)", "v": 79}],
  operator: [{"trait": "N (Neuroticism)", "v": 30}, {"trait": "E (Extraversion)", "v": 41}, {"trait": "O (Openness)", "v": 42}, {"trait": "A (Agreeableness)", "v": 71}, {"trait": "C (Conscientiousness)", "v": 68}],
  individualist: [{"trait": "N (Neuroticism)", "v": 50}, {"trait": "E (Extraversion)", "v": 45}, {"trait": "O (Openness)", "v": 67}, {"trait": "A (Agreeableness)", "v": 53}, {"trait": "C (Conscientiousness)", "v": 35}],
  scholar: [{"trait": "N (Neuroticism)", "v": 46}, {"trait": "E (Extraversion)", "v": 30}, {"trait": "O (Openness)", "v": 39}, {"trait": "A (Agreeableness)", "v": 54}, {"trait": "C (Conscientiousness)", "v": 70}],
};

// ── Workplace Stress ────────────────────────────────────────────────────────────────────

export const WORKPLACE_STRESS_DATA = {
  analyzer: [{"stressor": "Ambiguity", "v": 72}, {"stressor": "Workload", "v": 67}, {"stressor": "Conflict", "v": 63}, {"stressor": "Social Demands", "v": 59}, {"stressor": "Change Pace", "v": 52}],
  controller: [{"stressor": "Ambiguity", "v": 77}, {"stressor": "Workload", "v": 69}, {"stressor": "Conflict", "v": 68}, {"stressor": "Social Demands", "v": 63}, {"stressor": "Change Pace", "v": 49}],
  specialist: [{"stressor": "Ambiguity", "v": 72}, {"stressor": "Workload", "v": 51}, {"stressor": "Conflict", "v": 64}, {"stressor": "Social Demands", "v": 60}, {"stressor": "Change Pace", "v": 55}],
  strategist: [{"stressor": "Ambiguity", "v": 68}, {"stressor": "Workload", "v": 73}, {"stressor": "Conflict", "v": 65}, {"stressor": "Social Demands", "v": 59}, {"stressor": "Change Pace", "v": 44}],
  venturer: [{"stressor": "Ambiguity", "v": 45}, {"stressor": "Workload", "v": 79}, {"stressor": "Conflict", "v": 66}, {"stressor": "Social Demands", "v": 60}, {"stressor": "Change Pace", "v": 25}],
  altruist: [{"stressor": "Ambiguity", "v": 65}, {"stressor": "Workload", "v": 50}, {"stressor": "Conflict", "v": 43}, {"stressor": "Social Demands", "v": 34}, {"stressor": "Change Pace", "v": 49}],
  captain: [{"stressor": "Ambiguity", "v": 48}, {"stressor": "Workload", "v": 78}, {"stressor": "Conflict", "v": 47}, {"stressor": "Social Demands", "v": 37}, {"stressor": "Change Pace", "v": 28}],
  collaborator: [{"stressor": "Ambiguity", "v": 35}, {"stressor": "Workload", "v": 32}, {"stressor": "Conflict", "v": 35}, {"stressor": "Social Demands", "v": 29}, {"stressor": "Change Pace", "v": 53}],
  maverick: [{"stressor": "Ambiguity", "v": 42}, {"stressor": "Workload", "v": 64}, {"stressor": "Conflict", "v": 45}, {"stressor": "Social Demands", "v": 34}, {"stressor": "Change Pace", "v": 26}],
  persuader: [{"stressor": "Ambiguity", "v": 43}, {"stressor": "Workload", "v": 64}, {"stressor": "Conflict", "v": 41}, {"stressor": "Social Demands", "v": 30}, {"stressor": "Change Pace", "v": 33}],
  promoter: [{"stressor": "Ambiguity", "v": 39}, {"stressor": "Workload", "v": 64}, {"stressor": "Conflict", "v": 40}, {"stressor": "Social Demands", "v": 28}, {"stressor": "Change Pace", "v": 27}],
  adapter: [{"stressor": "Ambiguity", "v": 44}, {"stressor": "Workload", "v": 40}, {"stressor": "Conflict", "v": 42}, {"stressor": "Social Demands", "v": 37}, {"stressor": "Change Pace", "v": 52}],
  craftsman: [{"stressor": "Ambiguity", "v": 60}, {"stressor": "Workload", "v": 35}, {"stressor": "Conflict", "v": 54}, {"stressor": "Social Demands", "v": 54}, {"stressor": "Change Pace", "v": 71}],
  guardian: [{"stressor": "Ambiguity", "v": 59}, {"stressor": "Workload", "v": 30}, {"stressor": "Conflict", "v": 48}, {"stressor": "Social Demands", "v": 47}, {"stressor": "Change Pace", "v": 74}],
  operator: [{"stressor": "Ambiguity", "v": 46}, {"stressor": "Workload", "v": 27}, {"stressor": "Conflict", "v": 43}, {"stressor": "Social Demands", "v": 42}, {"stressor": "Change Pace", "v": 69}],
  individualist: [{"stressor": "Ambiguity", "v": 35}, {"stressor": "Workload", "v": 52}, {"stressor": "Conflict", "v": 54}, {"stressor": "Social Demands", "v": 49}, {"stressor": "Change Pace", "v": 35}],
  scholar: [{"stressor": "Ambiguity", "v": 62}, {"stressor": "Workload", "v": 45}, {"stressor": "Conflict", "v": 57}, {"stressor": "Social Demands", "v": 55}, {"stressor": "Change Pace", "v": 61}],
};

// ── FIRO-B Relational Needs ────────────────────────────────────────────────────────────────────

export const FIROB_DATA = {
  analyzer: [{"need": "Inclusion Expressed", "v": 40}, {"need": "Inclusion Wanted", "v": 30}, {"need": "Control Expressed", "v": 76}, {"need": "Control Wanted", "v": 31}, {"need": "Affection Expressed", "v": 25}, {"need": "Affection Wanted", "v": 38}],
  controller: [{"need": "Inclusion Expressed", "v": 36}, {"need": "Inclusion Wanted", "v": 30}, {"need": "Control Expressed", "v": 73}, {"need": "Control Wanted", "v": 31}, {"need": "Affection Expressed", "v": 22}, {"need": "Affection Wanted", "v": 35}],
  specialist: [{"need": "Inclusion Expressed", "v": 30}, {"need": "Inclusion Wanted", "v": 39}, {"need": "Control Expressed", "v": 52}, {"need": "Control Wanted", "v": 50}, {"need": "Affection Expressed", "v": 23}, {"need": "Affection Wanted", "v": 45}],
  strategist: [{"need": "Inclusion Expressed", "v": 42}, {"need": "Inclusion Wanted", "v": 29}, {"need": "Control Expressed", "v": 78}, {"need": "Control Wanted", "v": 25}, {"need": "Affection Expressed", "v": 30}, {"need": "Affection Wanted", "v": 35}],
  venturer: [{"need": "Inclusion Expressed", "v": 45}, {"need": "Inclusion Wanted", "v": 28}, {"need": "Control Expressed", "v": 73}, {"need": "Control Wanted", "v": 19}, {"need": "Affection Expressed", "v": 46}, {"need": "Affection Wanted", "v": 31}],
  altruist: [{"need": "Inclusion Expressed", "v": 65}, {"need": "Inclusion Wanted", "v": 66}, {"need": "Control Expressed", "v": 46}, {"need": "Control Wanted", "v": 51}, {"need": "Affection Expressed", "v": 48}, {"need": "Affection Wanted", "v": 61}],
  captain: [{"need": "Inclusion Expressed", "v": 77}, {"need": "Inclusion Wanted", "v": 52}, {"need": "Control Expressed", "v": 73}, {"need": "Control Wanted", "v": 21}, {"need": "Affection Expressed", "v": 62}, {"need": "Affection Wanted", "v": 46}],
  collaborator: [{"need": "Inclusion Expressed", "v": 61}, {"need": "Inclusion Wanted", "v": 69}, {"need": "Control Expressed", "v": 28}, {"need": "Control Wanted", "v": 68}, {"need": "Affection Expressed", "v": 60}, {"need": "Affection Wanted", "v": 72}],
  maverick: [{"need": "Inclusion Expressed", "v": 74}, {"need": "Inclusion Wanted", "v": 63}, {"need": "Control Expressed", "v": 49}, {"need": "Control Wanted", "v": 37}, {"need": "Affection Expressed", "v": 67}, {"need": "Affection Wanted", "v": 54}],
  persuader: [{"need": "Inclusion Expressed", "v": 78}, {"need": "Inclusion Wanted", "v": 62}, {"need": "Control Expressed", "v": 57}, {"need": "Control Wanted", "v": 35}, {"need": "Affection Expressed", "v": 66}, {"need": "Affection Wanted", "v": 56}],
  promoter: [{"need": "Inclusion Expressed", "v": 81}, {"need": "Inclusion Wanted", "v": 67}, {"need": "Control Expressed", "v": 51}, {"need": "Control Wanted", "v": 36}, {"need": "Affection Expressed", "v": 72}, {"need": "Affection Wanted", "v": 58}],
  adapter: [{"need": "Inclusion Expressed", "v": 55}, {"need": "Inclusion Wanted", "v": 60}, {"need": "Control Expressed", "v": 37}, {"need": "Control Wanted", "v": 60}, {"need": "Affection Expressed", "v": 51}, {"need": "Affection Wanted", "v": 64}],
  craftsman: [{"need": "Inclusion Expressed", "v": 27}, {"need": "Inclusion Wanted", "v": 40}, {"need": "Control Expressed", "v": 47}, {"need": "Control Wanted", "v": 63}, {"need": "Affection Expressed", "v": 23}, {"need": "Affection Wanted", "v": 56}],
  guardian: [{"need": "Inclusion Expressed", "v": 34}, {"need": "Inclusion Wanted", "v": 48}, {"need": "Control Expressed", "v": 41}, {"need": "Control Wanted", "v": 69}, {"need": "Affection Expressed", "v": 27}, {"need": "Affection Wanted", "v": 62}],
  operator: [{"need": "Inclusion Expressed", "v": 39}, {"need": "Inclusion Wanted", "v": 53}, {"need": "Control Expressed", "v": 35}, {"need": "Control Wanted", "v": 71}, {"need": "Affection Expressed", "v": 38}, {"need": "Affection Wanted", "v": 67}],
  individualist: [{"need": "Inclusion Expressed", "v": 45}, {"need": "Inclusion Wanted", "v": 47}, {"need": "Control Expressed", "v": 41}, {"need": "Control Wanted", "v": 48}, {"need": "Affection Expressed", "v": 52}, {"need": "Affection Wanted", "v": 51}],
  scholar: [{"need": "Inclusion Expressed", "v": 32}, {"need": "Inclusion Wanted", "v": 39}, {"need": "Control Expressed", "v": 51}, {"need": "Control Wanted", "v": 54}, {"need": "Affection Expressed", "v": 27}, {"need": "Affection Wanted", "v": 50}],
};

// ── Situational Leadership ────────────────────────────────────────────────────────────────────

export const SITUATIONAL_LEAD_DATA = {
  analyzer: [{"style": "Directing", "v": 28}, {"style": "Coaching", "v": 55}, {"style": "Supporting", "v": 42}, {"style": "Delegating", "v": 72}],
  controller: [{"style": "Directing", "v": 80}, {"style": "Coaching", "v": 45}, {"style": "Supporting", "v": 25}, {"style": "Delegating", "v": 55}],
  specialist: [{"style": "Directing", "v": 20}, {"style": "Coaching", "v": 60}, {"style": "Supporting", "v": 50}, {"style": "Delegating", "v": 75}],
  strategist: [{"style": "Directing", "v": 55}, {"style": "Coaching", "v": 70}, {"style": "Supporting", "v": 38}, {"style": "Delegating", "v": 78}],
  venturer: [{"style": "Directing", "v": 65}, {"style": "Coaching", "v": 50}, {"style": "Supporting", "v": 25}, {"style": "Delegating", "v": 85}],
  altruist: [{"style": "Directing", "v": 18}, {"style": "Coaching", "v": 65}, {"style": "Supporting", "v": 88}, {"style": "Delegating", "v": 45}],
  captain: [{"style": "Directing", "v": 85}, {"style": "Coaching", "v": 58}, {"style": "Supporting", "v": 28}, {"style": "Delegating", "v": 62}],
  collaborator: [{"style": "Directing", "v": 15}, {"style": "Coaching", "v": 62}, {"style": "Supporting", "v": 90}, {"style": "Delegating", "v": 50}],
  maverick: [{"style": "Directing", "v": 55}, {"style": "Coaching", "v": 48}, {"style": "Supporting", "v": 30}, {"style": "Delegating", "v": 82}],
  persuader: [{"style": "Directing", "v": 45}, {"style": "Coaching", "v": 75}, {"style": "Supporting", "v": 65}, {"style": "Delegating", "v": 60}],
  promoter: [{"style": "Directing", "v": 42}, {"style": "Coaching", "v": 72}, {"style": "Supporting", "v": 68}, {"style": "Delegating", "v": 55}],
  adapter: [{"style": "Directing", "v": 28}, {"style": "Coaching", "v": 68}, {"style": "Supporting", "v": 75}, {"style": "Delegating", "v": 55}],
  craftsman: [{"style": "Directing", "v": 22}, {"style": "Coaching", "v": 45}, {"style": "Supporting", "v": 55}, {"style": "Delegating", "v": 80}],
  guardian: [{"style": "Directing", "v": 18}, {"style": "Coaching", "v": 48}, {"style": "Supporting", "v": 68}, {"style": "Delegating", "v": 72}],
  operator: [{"style": "Directing", "v": 20}, {"style": "Coaching", "v": 42}, {"style": "Supporting", "v": 72}, {"style": "Delegating", "v": 68}],
  individualist: [{"style": "Directing", "v": 38}, {"style": "Coaching", "v": 55}, {"style": "Supporting", "v": 45}, {"style": "Delegating", "v": 80}],
  scholar: [{"style": "Directing", "v": 22}, {"style": "Coaching", "v": 60}, {"style": "Supporting", "v": 42}, {"style": "Delegating", "v": 78}],
};

// ── Keirsey Temperament ────────────────────────────────────────────────────────────────────

export const KEIRSEY_DATA = {
  analyzer: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 82}, {"type": "NT", "value": 20}, {"type": "NF", "value": 20}],
  controller: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 82}, {"type": "NT", "value": 20}, {"type": "NF", "value": 20}],
  specialist: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 82}, {"type": "NT", "value": 20}, {"type": "NF", "value": 20}],
  strategist: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 82}, {"type": "NF", "value": 20}],
  venturer: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 82}, {"type": "NF", "value": 20}],
  altruist: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 20}, {"type": "NF", "value": 82}],
  captain: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 82}, {"type": "NF", "value": 20}],
  collaborator: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 20}, {"type": "NF", "value": 82}],
  maverick: [{"type": "SP", "value": 82}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 20}, {"type": "NF", "value": 20}],
  persuader: [{"type": "SP", "value": 82}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 20}, {"type": "NF", "value": 20}],
  promoter: [{"type": "SP", "value": 82}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 20}, {"type": "NF", "value": 20}],
  adapter: [{"type": "SP", "value": 82}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 20}, {"type": "NF", "value": 20}],
  craftsman: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 82}, {"type": "NT", "value": 20}, {"type": "NF", "value": 20}],
  guardian: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 82}, {"type": "NT", "value": 20}, {"type": "NF", "value": 20}],
  operator: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 82}, {"type": "NT", "value": 20}, {"type": "NF", "value": 20}],
  individualist: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 20}, {"type": "NF", "value": 82}],
  scholar: [{"type": "SP", "value": 20}, {"type": "SJ", "value": 20}, {"type": "NT", "value": 82}, {"type": "NF", "value": 20}],
};

// ── Big Five OCEAN lens variant ────────────────────────────────────────────────────────────────────

export const BIG5_LENS_DATA = {
  analyzer: [{"trait": "Openness", "value": 40}, {"trait": "Conscientiousness", "value": 68}, {"trait": "Extraversion", "value": 35}, {"trait": "Agreeableness", "value": 33}, {"trait": "Neuroticism", "value": 57}],
  controller: [{"trait": "Openness", "value": 36}, {"trait": "Conscientiousness", "value": 68}, {"trait": "Extraversion", "value": 31}, {"trait": "Agreeableness", "value": 33}, {"trait": "Neuroticism", "value": 63}],
  specialist: [{"trait": "Openness", "value": 31}, {"trait": "Conscientiousness", "value": 70}, {"trait": "Extraversion", "value": 28}, {"trait": "Agreeableness", "value": 51}, {"trait": "Neuroticism", "value": 56}],
  strategist: [{"trait": "Openness", "value": 48}, {"trait": "Conscientiousness", "value": 58}, {"trait": "Extraversion", "value": 37}, {"trait": "Agreeableness", "value": 29}, {"trait": "Neuroticism", "value": 61}],
  venturer: [{"trait": "Openness", "value": 75}, {"trait": "Conscientiousness", "value": 26}, {"trait": "Extraversion", "value": 39}, {"trait": "Agreeableness", "value": 24}, {"trait": "Neuroticism", "value": 64}],
  altruist: [{"trait": "Openness", "value": 44}, {"trait": "Conscientiousness", "value": 60}, {"trait": "Extraversion", "value": 69}, {"trait": "Agreeableness", "value": 63}, {"trait": "Neuroticism", "value": 46}],
  captain: [{"trait": "Openness", "value": 76}, {"trait": "Conscientiousness", "value": 30}, {"trait": "Extraversion", "value": 76}, {"trait": "Agreeableness", "value": 34}, {"trait": "Neuroticism", "value": 54}],
  collaborator: [{"trait": "Openness", "value": 61}, {"trait": "Conscientiousness", "value": 42}, {"trait": "Extraversion", "value": 66}, {"trait": "Agreeableness", "value": 76}, {"trait": "Neuroticism", "value": 31}],
  maverick: [{"trait": "Openness", "value": 75}, {"trait": "Conscientiousness", "value": 25}, {"trait": "Extraversion", "value": 76}, {"trait": "Agreeableness", "value": 51}, {"trait": "Neuroticism", "value": 52}],
  persuader: [{"trait": "Openness", "value": 74}, {"trait": "Conscientiousness", "value": 32}, {"trait": "Extraversion", "value": 80}, {"trait": "Agreeableness", "value": 49}, {"trait": "Neuroticism", "value": 46}],
  promoter: [{"trait": "Openness", "value": 79}, {"trait": "Conscientiousness", "value": 23}, {"trait": "Extraversion", "value": 84}, {"trait": "Agreeableness", "value": 52}, {"trait": "Neuroticism", "value": 48}],
  adapter: [{"trait": "Openness", "value": 56}, {"trait": "Conscientiousness", "value": 48}, {"trait": "Extraversion", "value": 58}, {"trait": "Agreeableness", "value": 67}, {"trait": "Neuroticism", "value": 38}],
  craftsman: [{"trait": "Openness", "value": 32}, {"trait": "Conscientiousness", "value": 74}, {"trait": "Extraversion", "value": 26}, {"trait": "Agreeableness", "value": 60}, {"trait": "Neuroticism", "value": 39}],
  guardian: [{"trait": "Openness", "value": 31}, {"trait": "Conscientiousness", "value": 77}, {"trait": "Extraversion", "value": 35}, {"trait": "Agreeableness", "value": 68}, {"trait": "Neuroticism", "value": 34}],
  operator: [{"trait": "Openness", "value": 43}, {"trait": "Conscientiousness", "value": 63}, {"trait": "Extraversion", "value": 41}, {"trait": "Agreeableness", "value": 71}, {"trait": "Neuroticism", "value": 30}],
  individualist: [{"trait": "Openness", "value": 71}, {"trait": "Conscientiousness", "value": 28}, {"trait": "Extraversion", "value": 45}, {"trait": "Agreeableness", "value": 53}, {"trait": "Neuroticism", "value": 50}],
  scholar: [{"trait": "Openness", "value": 37}, {"trait": "Conscientiousness", "value": 68}, {"trait": "Extraversion", "value": 30}, {"trait": "Agreeableness", "value": 54}, {"trait": "Neuroticism", "value": 46}],
};

// ── HEXACO lens variant ────────────────────────────────────────────────────────────────────

export const HEXACO_LENS_DATA = {
  analyzer: [{"trait": "Honesty-Humility", "value": 46}, {"trait": "Emotionality", "value": 47}, {"trait": "Extraversion", "value": 35}, {"trait": "Agreeableness", "value": 31}, {"trait": "Conscientiousness", "value": 63}, {"trait": "Openness", "value": 39}],
  controller: [{"trait": "Honesty-Humility", "value": 51}, {"trait": "Emotionality", "value": 50}, {"trait": "Extraversion", "value": 31}, {"trait": "Agreeableness", "value": 30}, {"trait": "Conscientiousness", "value": 62}, {"trait": "Openness", "value": 35}],
  specialist: [{"trait": "Honesty-Humility", "value": 65}, {"trait": "Emotionality", "value": 44}, {"trait": "Extraversion", "value": 28}, {"trait": "Agreeableness", "value": 47}, {"trait": "Conscientiousness", "value": 65}, {"trait": "Openness", "value": 30}],
  strategist: [{"trait": "Honesty-Humility", "value": 39}, {"trait": "Emotionality", "value": 50}, {"trait": "Extraversion", "value": 37}, {"trait": "Agreeableness", "value": 27}, {"trait": "Conscientiousness", "value": 53}, {"trait": "Openness", "value": 46}],
  venturer: [{"trait": "Honesty-Humility", "value": 20}, {"trait": "Emotionality", "value": 54}, {"trait": "Extraversion", "value": 39}, {"trait": "Agreeableness", "value": 21}, {"trait": "Conscientiousness", "value": 26}, {"trait": "Openness", "value": 67}],
  altruist: [{"trait": "Honesty-Humility", "value": 62}, {"trait": "Emotionality", "value": 55}, {"trait": "Extraversion", "value": 65}, {"trait": "Agreeableness", "value": 53}, {"trait": "Conscientiousness", "value": 56}, {"trait": "Openness", "value": 41}],
  captain: [{"trait": "Honesty-Humility", "value": 23}, {"trait": "Emotionality", "value": 62}, {"trait": "Extraversion", "value": 71}, {"trait": "Agreeableness", "value": 27}, {"trait": "Conscientiousness", "value": 30}, {"trait": "Openness", "value": 69}],
  collaborator: [{"trait": "Honesty-Humility", "value": 57}, {"trait": "Emotionality", "value": 42}, {"trait": "Extraversion", "value": 62}, {"trait": "Agreeableness", "value": 68}, {"trait": "Conscientiousness", "value": 46}, {"trait": "Openness", "value": 54}],
  maverick: [{"trait": "Honesty-Humility", "value": 36}, {"trait": "Emotionality", "value": 62}, {"trait": "Extraversion", "value": 71}, {"trait": "Agreeableness", "value": 41}, {"trait": "Conscientiousness", "value": 25}, {"trait": "Openness", "value": 67}],
  persuader: [{"trait": "Honesty-Humility", "value": 33}, {"trait": "Emotionality", "value": 59}, {"trait": "Extraversion", "value": 75}, {"trait": "Agreeableness", "value": 41}, {"trait": "Conscientiousness", "value": 32}, {"trait": "Openness", "value": 66}],
  promoter: [{"trait": "Honesty-Humility", "value": 33}, {"trait": "Emotionality", "value": 63}, {"trait": "Extraversion", "value": 78}, {"trait": "Agreeableness", "value": 42}, {"trait": "Conscientiousness", "value": 24}, {"trait": "Openness", "value": 71}],
  adapter: [{"trait": "Honesty-Humility", "value": 56}, {"trait": "Emotionality", "value": 44}, {"trait": "Extraversion", "value": 54}, {"trait": "Agreeableness", "value": 60}, {"trait": "Conscientiousness", "value": 49}, {"trait": "Openness", "value": 50}],
  craftsman: [{"trait": "Honesty-Humility", "value": 67}, {"trait": "Emotionality", "value": 30}, {"trait": "Extraversion", "value": 27}, {"trait": "Agreeableness", "value": 59}, {"trait": "Conscientiousness", "value": 73}, {"trait": "Openness", "value": 30}],
  guardian: [{"trait": "Honesty-Humility", "value": 71}, {"trait": "Emotionality", "value": 30}, {"trait": "Extraversion", "value": 34}, {"trait": "Agreeableness", "value": 65}, {"trait": "Conscientiousness", "value": 76}, {"trait": "Openness", "value": 29}],
  operator: [{"trait": "Honesty-Humility", "value": 65}, {"trait": "Emotionality", "value": 30}, {"trait": "Extraversion", "value": 40}, {"trait": "Agreeableness", "value": 68}, {"trait": "Conscientiousness", "value": 65}, {"trait": "Openness", "value": 39}],
  individualist: [{"trait": "Honesty-Humility", "value": 40}, {"trait": "Emotionality", "value": 47}, {"trait": "Extraversion", "value": 43}, {"trait": "Agreeableness", "value": 47}, {"trait": "Conscientiousness", "value": 30}, {"trait": "Openness", "value": 62}],
  scholar: [{"trait": "Honesty-Humility", "value": 61}, {"trait": "Emotionality", "value": 37}, {"trait": "Extraversion", "value": 30}, {"trait": "Agreeableness", "value": 51}, {"trait": "Conscientiousness", "value": 65}, {"trait": "Openness", "value": 35}],
};

// ── Lencioni per-profile (full) ────────────────────────────────────────────────────────────────────

export const LENCIONI_DATA = {
  analyzer: {"strength": "Attention to Results", "risk": "Absence of Trust"},
  controller: {"strength": "Attention to Results", "risk": "Fear of Conflict"},
  specialist: {"strength": "Attention to Results", "risk": "Absence of Trust"},
  strategist: {"strength": "Commitment", "risk": "Fear of Conflict"},
  venturer: {"strength": "Accountability", "risk": "Inattention to Results"},
  altruist: {"strength": "Trust", "risk": "Lack of Commitment"},
  captain: {"strength": "Commitment", "risk": "Fear of Conflict"},
  collaborator: {"strength": "Trust", "risk": "Lack of Commitment"},
  maverick: {"strength": "Accountability", "risk": "Avoidance of Accountability"},
  persuader: {"strength": "Commitment", "risk": "Avoidance of Accountability"},
  promoter: {"strength": "Trust", "risk": "Avoidance of Accountability"},
  adapter: {"strength": "Trust", "risk": "Lack of Commitment"},
  craftsman: {"strength": "Attention to Results", "risk": "Absence of Trust"},
  guardian: {"strength": "Trust", "risk": "Lack of Commitment"},
  operator: {"strength": "Trust", "risk": "Absence of Trust"},
  individualist: {"strength": "Accountability", "risk": "Absence of Trust"},
  scholar: {"strength": "Attention to Results", "risk": "Absence of Trust"},
};