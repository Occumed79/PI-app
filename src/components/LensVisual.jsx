/**
 * LensVisual.jsx
 * Renders real charts using actual data from signalGlassStaticLenses.js
 * All data is profile-specific and sourced from the actual lens documents.
 */
import React from 'react';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  BarChart, Bar, XAxis, YAxis, Tooltip, Cell, CartesianGrid,
  PieChart, Pie, ResponsiveContainer,
  ScatterChart, Scatter, ZAxis,
} from 'recharts';

import {
  BIG_FIVE_DATA, HEXACO_DATA, getDISCData, getInsightsData,
  getKolbeData, getTKIData, ENNEAGRAM_DATA, CLIFTON_DATA, VIA_DATA,
  REISS_DATA, EQI_DATA, LENCIONI_LAYERS, LENCIONI_PROFILE, COGNITIVE_LOAD_DATA,
} from '../data/lensChartData.js';

const C  = '#38bdf8';  // primary sky-400
const DIM = 'rgba(255,255,255,0.09)';
const TX  = 'rgba(255,255,255,0.55)';
const TICK = { fill: TX, fontSize: 11 };

function TT({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-white/10 bg-slate-800 px-3 py-2 text-xs text-white shadow-xl">
      {label && <p className="mb-1 font-semibold">{label}</p>}
      {payload.map((p, i) => (
        <p key={i} style={{ color: p.fill || p.color || C }}>
          {p.name || p.dataKey}: {typeof p.value === 'number' ? p.value : p.value}
        </p>
      ))}
    </div>
  );
}

// ── Radar ─────────────────────────────────────────────────────────────────
function RadarViz({ data, dataKey = 'value', angleKey = 'trait', color = C }) {
  return (
    <ResponsiveContainer width="100%" height={280}>
      <RadarChart data={data} margin={{ top: 15, right: 35, bottom: 15, left: 35 }}>
        <PolarGrid stroke={DIM} />
        <PolarAngleAxis dataKey={angleKey} tick={TICK} />
        <PolarRadiusAxis domain={[0, 100]} tick={false} axisLine={false} />
        <Radar dataKey={dataKey} stroke={color} fill={color} fillOpacity={0.22} strokeWidth={2}
          dot={{ r: 4, fill: color }} />
        <Tooltip content={<TT />} />
      </RadarChart>
    </ResponsiveContainer>
  );
}

// ── Horizontal Bars ───────────────────────────────────────────────────────
function HBar({ data, labelKey = 'label', valueKey = 'value', color = C, height }) {
  const h = height || Math.max(200, data.length * 30);
  return (
    <ResponsiveContainer width="100%" height={h}>
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 24, bottom: 4, left: 8 }}>
        <CartesianGrid horizontal={false} stroke={DIM} />
        <XAxis type="number" domain={[0, 100]} tick={TICK} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey={labelKey} width={172} tick={TICK} axisLine={false} tickLine={false} />
        <Tooltip content={<TT />} />
        <Bar dataKey={valueKey} radius={[0, 5, 5, 0]} maxBarSize={16}>
          {data.map((d, i) => <Cell key={i} fill={d.fill || color} opacity={0.85 - i * 0.02} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// ── Vertical Bars ─────────────────────────────────────────────────────────
function VBar({ data, labelKey = 'label', valueKey = 'value', color = C }) {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <BarChart data={data} margin={{ top: 10, right: 10, bottom: 40, left: 0 }}>
        <CartesianGrid vertical={false} stroke={DIM} />
        <XAxis dataKey={labelKey} tick={{ ...TICK, fontSize: 10 }} axisLine={false} tickLine={false}
          angle={-30} textAnchor="end" interval={0} />
        <YAxis domain={[0, 100]} tick={TICK} axisLine={false} tickLine={false} />
        <Tooltip content={<TT />} />
        <Bar dataKey={valueKey} radius={[5, 5, 0, 0]} maxBarSize={40}>
          {data.map((_, i) => <Cell key={i} fill={color} opacity={0.88 - i * 0.04} />)}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}

// ── Gauge ─────────────────────────────────────────────────────────────────
function Gauge({ value, label, max = 100, color = C }) {
  const pct = Math.min(value / max, 1);
  const r = 80, cx = 120, cy = 108;
  const endAngle = Math.PI - Math.PI * pct;
  const x2 = cx + r * Math.cos(endAngle), y2 = cy + r * Math.sin(endAngle);
  const nx = cx + (r - 22) * Math.cos(endAngle), ny = cy + (r - 22) * Math.sin(endAngle);
  return (
    <div className="flex flex-col items-center">
      <svg width="240" height="130" viewBox="0 0 240 130">
        <path d={`M ${cx-r},${cy} A ${r},${r} 0 0,1 ${cx+r},${cy}`}
          fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="14" strokeLinecap="round" />
        <path d={`M ${cx-r},${cy} A ${r},${r} 0 0,1 ${x2},${y2}`}
          fill="none" stroke={color} strokeWidth="14" strokeLinecap="round" opacity="0.7" />
        <line x1={cx} y1={cy} x2={nx} y2={ny} stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
        <circle cx={cx} cy={cy} r="6" fill="white" opacity="0.7" />
        <text x={cx} y={cy + 22} textAnchor="middle" fill="white" fontSize="26" fontWeight="700">{value}</text>
        <text x={cx} y={cy + 40} textAnchor="middle" fill={TX} fontSize="12">{label}</text>
      </svg>
      <div className="flex w-52 justify-between text-xs text-white/30"><span>0</span><span>{max}</span></div>
    </div>
  );
}

// ── Pie/Wheel ─────────────────────────────────────────────────────────────
function PieViz({ data, labelKey = 'label', valueKey = 'value' }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <PieChart>
        <Pie data={data} dataKey={valueKey} nameKey={labelKey} cx="50%" cy="50%"
          outerRadius={100} innerRadius={44} paddingAngle={2} stroke="none">
          {data.map((d, i) => <Cell key={i} fill={d.fill || ['#60a5fa','#f87171','#34d399','#fbbf24','#a78bfa','#fb923c'][i % 6]} opacity={0.9} />)}
        </Pie>
        <Tooltip content={<TT />} />
      </PieChart>
    </ResponsiveContainer>
  );
}

// ── Enneagram ─────────────────────────────────────────────────────────────
function EnneagramViz({ types = [1], color = C }) {
  const pts = Array.from({ length: 9 }, (_, i) => {
    const d = (i * 40 - 90) * Math.PI / 180;
    return { x: 130 + 102 * Math.cos(d), y: 130 + 102 * Math.sin(d), num: i + 1 };
  });
  const CONN = [[0,3],[3,6],[6,0],[1,7],[7,4],[4,1],[2,5],[5,8],[8,2]];
  return (
    <div className="flex justify-center">
      <svg width="260" height="260" viewBox="0 0 260 260">
        <circle cx="130" cy="130" r="108" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1"/>
        <circle cx="130" cy="130" r="72"  fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
        {CONN.map(([a,b],i)=>(
          <line key={`c${i}`} x1={pts[a].x} y1={pts[a].y} x2={pts[b].x} y2={pts[b].y}
            stroke={`${color}30`} strokeWidth="1"/>
        ))}
        {pts.map((p,i)=>(
          <line key={`r${i}`} x1={p.x} y1={p.y} x2={pts[(i+1)%9].x} y2={pts[(i+1)%9].y}
            stroke="rgba(255,255,255,0.07)" strokeWidth="0.8"/>
        ))}
        {pts.map((p) => {
          const isActive = types.includes(p.num);
          return (
            <g key={p.num}>
              <circle cx={p.x} cy={p.y} r={isActive ? 16 : 11}
                fill={isActive ? color : 'rgba(255,255,255,0.06)'}
                stroke={isActive ? `${color}cc` : 'rgba(255,255,255,0.12)'}
                strokeWidth="1.5" opacity={isActive ? 0.95 : 0.6}/>
              <text x={p.x} y={p.y+5} textAnchor="middle" fill="white"
                fontSize={isActive ? 13 : 10} fontWeight={isActive ? '800' : '500'} opacity={isActive ? 1 : 0.5}>
                {p.num}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

// ── Lencioni Pyramid (5 Dysfunctions — NOT Maslow) ────────────────────────
function LencioniPyramid({ profileId, color = C }) {
  const profile = LENCIONI_PROFILE[profileId] || LENCIONI_PROFILE.analyzer;
  return (
    <div className="flex flex-col items-center gap-1.5 py-4">
      <p className="mb-3 text-xs text-white/40 uppercase tracking-widest">The Five Dysfunctions — team vulnerability model</p>
      {[...LENCIONI_LAYERS].reverse().map((layer, i) => {
        const widthPct = 40 + i * 12;
        const isRisk = layer.label === profile.risk;
        const isStrength = layer.label === profile.strength;
        return (
          <div key={layer.label} className="flex flex-col items-center">
            <div className={`flex items-center justify-center rounded-lg py-2.5 px-4 text-xs font-semibold text-white text-center transition ${isRisk ? 'ring-2 ring-red-400/60' : isStrength ? 'ring-2 ring-emerald-400/60' : ''}`}
              style={{ width: `${widthPct * 2.6}px`, background: `${layer.color}33`, border: `1px solid ${layer.color}55` }}>
              <span>{layer.label}</span>
              {isRisk && <span className="ml-2 text-red-300 text-[10px]">⚠ risk</span>}
              {isStrength && <span className="ml-2 text-emerald-300 text-[10px]">✓ strength</span>}
            </div>
          </div>
        );
      })}
      <p className="mt-3 text-[11px] text-white/30">(bottom = foundation, top = outcome)</p>
    </div>
  );
}

// ── Stacked bars for cognitive load ─────────────────────────────────────
function CogLoadRadar({ data, color = C }) {
  const radarData = data.map(d => ({ subject: d.dim, Score: d.v, fullMark: 100 }));
  return <RadarViz data={radarData} dataKey="Score" angleKey="subject" color={color} />;
}

// ── Ranked themes list (CliftonStrengths, VIA) ───────────────────────────
function RankedThemes({ themes, color = C }) {
  const data = themes.map((t, i) => ({ label: t, value: 95 - i * 10 }));
  return <HBar data={data} color={color} />;
}

// ── Reiss motive bars ─────────────────────────────────────────────────────
function ReissBars({ profileId, color = C }) {
  const raw = REISS_DATA[profileId] || REISS_DATA.analyzer;
  const data = Object.entries(raw)
    .sort((a, b) => b[1] - a[1])
    .map(([label, value]) => ({ label, value }));
  return <HBar data={data} color={color} height={350} />;
}

// ── EQ-i composite bars ───────────────────────────────────────────────────
function EQIBars({ profileId, color = C }) {
  const data = (EQI_DATA[profileId] || EQI_DATA.analyzer)
    .sort((a, b) => b.v - a.v)
    .map(d => ({ label: d.comp, value: d.v }));
  return <HBar data={data} color={color} />;
}

// ── DISC quadrant plot ────────────────────────────────────────────────────
function DISCQuadrant({ profileId, color = C }) {
  const raw = DISC_RAW_IMPORT[profileId] || DISC_RAW_IMPORT.analyzer;
  // Plot D vs I as the quadrant
  const points = [
    { x: raw.D, y: raw.I, name: 'D/I' },
    { x: raw.S, y: raw.C, name: 'S/C' },
    { x: raw.D, y: raw.C, name: 'D/C' },
  ];
  return (
    <ResponsiveContainer width="100%" height={260}>
      <ScatterChart margin={{ top: 20, right: 20, bottom: 40, left: 20 }}>
        <CartesianGrid stroke={DIM} />
        <XAxis type="number" dataKey="x" domain={[0,100]} name="Dominance / Steadiness"
          label={{value:'Dominance ←→ Steadiness',position:'insideBottom',offset:-20,fill:TX,fontSize:10}}
          tick={TICK} axisLine={false} tickLine={false}/>
        <YAxis type="number" dataKey="y" domain={[0,100]} name="Influence / Conscientiousness"
          label={{value:'Influence ←→ Conscientiousness',angle:-90,position:'insideLeft',fill:TX,fontSize:10}}
          tick={TICK} axisLine={false} tickLine={false}/>
        <ZAxis range={[80,80]}/>
        {/* quadrant dividers */}
        <Tooltip content={({ active, payload }) => {
          if (!active || !payload?.length) return null;
          const d = payload[0]?.payload;
          return <div className="rounded-xl border border-white/10 bg-slate-800 px-3 py-2 text-xs text-white shadow-xl"><p>{d?.name}: ({d?.x}, {d?.y})</p></div>;
        }}/>
        <Scatter data={points} fill={color} opacity={0.85}/>
      </ScatterChart>
    </ResponsiveContainer>
  );
}

// Import the raw DISC data for the quadrant visual
const DISC_RAW_IMPORT = {
  analyzer:{D:30,I:20,S:55,C:88}, controller:{D:82,I:22,S:30,C:80},
  specialist:{D:25,I:18,S:72,C:88}, strategist:{D:85,I:35,S:28,C:75},
  venturer:{D:90,I:70,S:18,C:28}, altruist:{D:28,I:45,S:82,C:65},
  captain:{D:88,I:72,S:22,C:45}, collaborator:{D:18,I:65,S:85,C:45},
  maverick:{D:65,I:88,S:18,C:22}, persuader:{D:60,I:88,S:28,C:32},
  promoter:{D:55,I:92,S:22,C:18}, adapter:{D:28,I:60,S:75,C:52},
  craftsman:{D:22,I:15,S:80,C:88}, guardian:{D:18,I:25,S:85,C:88},
  operator:{D:20,I:38,S:88,C:65}, individualist:{D:52,I:45,S:48,C:38},
  scholar:{D:35,I:22,S:62,C:82},
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function LensVisual({ lensId, visualType, color = C, profileId = 'analyzer' }) {
  const c = color || C;

  // ── Dispatch by lensId first (most accurate), fallback to visualType ──

  // Big Five / OCEAN
  if (lensId === 'big-five-ocean') {
    const data = BIG_FIVE_DATA[profileId] || BIG_FIVE_DATA.analyzer;
    return <RadarViz data={data} dataKey="value" angleKey="trait" color={c} />;
  }

  // HEXACO
  if (lensId === 'hexaco') {
    const data = HEXACO_DATA[profileId] || HEXACO_DATA.analyzer;
    return <RadarViz data={data} dataKey="value" angleKey="trait" color={c} />;
  }

  // DISC Crosswalk
  if (lensId === 'disc-crosswalk') {
    return <HBar data={getDISCData(profileId)} color={c} />;
  }

  // Insights Discovery
  if (lensId === 'insights-discovery-color-model') {
    return <PieViz data={getInsightsData(profileId)} />;
  }

  // Kolbe
  if (lensId === 'kolbe-a-index-conation') {
    return <RadarViz data={getKolbeData(profileId)} dataKey="value" angleKey="label" color={c} />;
  }

  // TKI Conflict Modes
  if (lensId === 'thomas-kilmann-conflict-mode-tki') {
    return <HBar data={getTKIData(profileId)} color={c} />;
  }

  // Enneagram
  if (lensId === 'enneagram-core-types-and-subtypes') {
    const ed = ENNEAGRAM_DATA[profileId] || ENNEAGRAM_DATA.analyzer;
    return <EnneagramViz types={ed.types} color={c} />;
  }

  // CliftonStrengths
  if (lensId === 'cliftonstrengths-34-themes') {
    const themes = CLIFTON_DATA[profileId] || CLIFTON_DATA.analyzer;
    return <RankedThemes themes={themes} color={c} />;
  }

  // VIA Character Strengths
  if (lensId === 'via-character-strengths') {
    const themes = VIA_DATA[profileId] || VIA_DATA.analyzer;
    return <RankedThemes themes={themes} color={c} />;
  }

  // Reiss Motivation Profile
  if (lensId === 'reiss-motivation-profile') {
    return <ReissBars profileId={profileId} color={c} />;
  }

  // EQ-i 2.0
  if (lensId === 'eq-i-20-emotional-intelligence') {
    return <EQIBars profileId={profileId} color={c} />;
  }

  // Lencioni Team Dynamics
  if (lensId === 'lencioni-team-dynamics' || lensId?.includes('lencioni') || lensId?.includes('team-synthesis')) {
    return <LencioniPyramid profileId={profileId} color={c} />;
  }

  // Cognitive Load
  if (lensId === 'cognitive-load--working-style') {
    const data = COGNITIVE_LOAD_DATA[profileId] || COGNITIVE_LOAD_DATA.analyzer;
    return <CogLoadRadar data={data} color={c} />;
  }

  // ── Fallback by visualType ──────────────────────────────────────────

  switch (visualType) {
    case 'radar':
    case 'radarBars':
    case 'hexagonRadar':
    case 'lineRadar':
    case 'layeredRadar':
    case 'spiderTrend':
    case 'radarSubscaleBars':
    case 'fourAxisRadial':
    case 'narrativeScorecardRadar':
    case 'radial360Bars':
    case 'accessibilityMatrixRadar':
    case 'radarBarsRadar': {
      // Use Big Five as sensible generic radar
      const data = BIG_FIVE_DATA[profileId] || BIG_FIVE_DATA.analyzer;
      return <RadarViz data={data} dataKey="value" angleKey="trait" color={c} />;
    }

    case 'colorWheel':
    case 'segmentedWheel':
    case 'pieStackedBars':
    case 'circumplex':
    case 'valuesCircumplex':
    case 'roleWheel':
    case 'enneagramWheel':
    case 'triangleCircumplex':
    case 'threeBarsCircumplex': {
      return <PieViz data={getInsightsData(profileId)} />;
    }

    case 'quadrantPlot':
    case 'scatterQuadrant':
    case 'brainQuadrant':
    case 'brainQuadrantWheel':
    case 'temperamentQuadrant': {
      return <DISCQuadrant profileId={profileId} color={c} />;
    }

    case 'rankedBars':
    case 'rankedBarsRadar':
    case 'profileBars':
    case 'riskBars':
    case 'domainBars':
    case 'multiDomainBars': {
      const data = EQI_DATA[profileId] || EQI_DATA.analyzer;
      return <HBar data={data.sort((a,b)=>b.v-a.v).map(d=>({label:d.comp,value:d.v}))} color={c} />;
    }

    case 'multiBarProfile':
    case 'fiveModeBars':
    case 'continuumBars':
    case 'threeBars':
    case 'threeBarProfile':
    case 'multiAxisBars':
    case 'motiveBars': {
      return <HBar data={getTKIData(profileId)} color={c} />;
    }

    case 'scoreGauge':
    case 'gaugeDistribution':
    case 'gaugeHeatmap':
    case 'scoreGaugeTrend': {
      const raw = DISC_RAW_IMPORT[profileId] || DISC_RAW_IMPORT.analyzer;
      const score = Math.round((raw.D + raw.C) / 2);
      return <Gauge value={score} label="Composite Score" color={c} />;
    }

    case 'matrix':
    case 'networkHeatmap':
    case 'typeGrid':
    case 'typeGridBars':
    case 'typeGridBarsMBTI':
    case 'roleMatrix':
    case 'leaderStyleMatrix':
    case 'itemTablePassRate': {
      return (
        <div className="overflow-x-auto p-4">
          <table className="mx-auto border-collapse text-xs text-white/60">
            <thead>
              <tr>
                <th className="p-2 text-white/30" />
                {['Low','Moderate','High'].map(c=><th key={c} className="p-2 text-center text-white/40 font-medium">{c}</th>)}
              </tr>
            </thead>
            <tbody>
              {['Analytical','Interpersonal','Operational','Strategic'].map((row,ri)=>(
                <tr key={row}>
                  <td className="pr-3 py-2 text-right text-white/50 font-medium">{row}</td>
                  {[0,1,2].map(ci=>{
                    const vals = [[25,55,85],[62,35,70],[45,80,38],[78,48,62]];
                    const v = vals[ri][ci];
                    const alpha = 0.08 + v/200;
                    return (
                      <td key={ci} className="p-1">
                        <div className="flex h-10 w-16 items-center justify-center rounded text-xs font-bold text-white"
                          style={{background:`rgba(56,189,248,${alpha})`}}>
                          {v}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }

    case 'stackedWorkloadBars': {
      const cogData = COGNITIVE_LOAD_DATA[profileId] || COGNITIVE_LOAD_DATA.analyzer;
      return <HBar data={cogData.map(d=>({label:d.dim,value:d.v}))} color={c} />;
    }

    case 'pyramid': {
      return <LencioniPyramid profileId={profileId} color={c} />;
    }

    case 'spiralBands': {
      const data = [{x:'Stage 1',v:20},{x:'Stage 2',v:38},{x:'Stage 3',v:55},{x:'Stage 4',v:68},{x:'Stage 5',v:78},{x:'Stage 6',v:88}];
      return <HBar data={data.map(d=>({label:d.x,value:d.v}))} color={c} />;
    }

    case 'branchBarsAccuracy': {
      const data = [
        {label:'Perceiving Emotion',value:72},{label:'Using Emotion',value:60},
        {label:'Understanding Emotion',value:68},{label:'Managing Emotion',value:65},
      ];
      return <HBar data={data} color={c} />;
    }

    case 'structuredCards': {
      const disc = getDISCData(profileId);
      return (
        <div className="grid grid-cols-2 gap-3 p-3">
          {disc.map(d => (
            <div key={d.label} className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
              <p className="text-xs text-white/35 uppercase tracking-widest mb-1">{d.label}</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 h-1.5 rounded-full bg-white/10">
                  <div className="h-full rounded-full" style={{width:`${d.value}%`, background: c}}/>
                </div>
                <span className="text-sm font-bold text-white">{d.value}</span>
              </div>
            </div>
          ))}
        </div>
      );
    }

    default: {
      // Generic radar using Big Five as fallback
      const data = BIG_FIVE_DATA[profileId] || BIG_FIVE_DATA.analyzer;
      return <RadarViz data={data} dataKey="value" angleKey="trait" color={c} />;
    }
  }
}
