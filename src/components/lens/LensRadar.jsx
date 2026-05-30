/**
 * LensRadar — animated spider/radar chart for lens dimensions
 * Props:
 *   dimensions: [{ label, value (0-100), color? }]
 *   profiles: optional [{ name, color, values: [0-100 per dimension] }] for comparison
 *   title: string
 */
import React, { useState } from 'react';
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
  ResponsiveContainer, Tooltip, Legend
} from 'recharts';

const DEFAULT_COLORS = ['#818cf8','#34d399','#f59e0b','#f472b6','#60a5fa','#a78bfa'];

export default function LensRadar({ dimensions = [], profiles = [], title, compact = false }) {
  if (!dimensions.length) return null;

  // Build recharts data: one object per dimension with a key per profile
  const data = dimensions.map((dim, i) => {
    const entry = { subject: dim.label };
    if (profiles.length > 0) {
      profiles.forEach(p => { entry[p.name] = p.values?.[i] ?? 0; });
    } else {
      entry['Score'] = dim.value ?? 0;
    }
    return entry;
  });

  const keys = profiles.length > 0 ? profiles.map(p => p.name) : ['Score'];
  const colors = profiles.length > 0 ? profiles.map((p, i) => p.color || DEFAULT_COLORS[i % DEFAULT_COLORS.length]) : ['#818cf8'];

  return (
    <div className="glass rounded-2xl p-5 border border-white/8">
      {title && <p className="text-xs font-semibold text-white/60 uppercase tracking-wider mb-3">{title}</p>}
      <ResponsiveContainer width="100%" height={compact ? 200 : 280}>
        <RadarChart cx="50%" cy="50%" outerRadius={compact ? 70 : 100} data={data}>
          <PolarGrid stroke="rgba(255,255,255,0.08)" />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: compact ? 9 : 11 }}
          />
          <PolarRadiusAxis
            angle={30} domain={[0, 100]}
            tick={{ fill: 'rgba(255,255,255,0.25)', fontSize: 9 }}
            stroke="rgba(255,255,255,0.05)"
          />
          {keys.map((key, i) => (
            <Radar
              key={key}
              name={key}
              dataKey={key}
              stroke={colors[i]}
              fill={colors[i]}
              fillOpacity={0.15}
              strokeWidth={2}
              dot={{ r: 3, fill: colors[i], strokeWidth: 0 }}
              animationBegin={i * 100}
              animationDuration={800}
            />
          ))}
          <Tooltip
            contentStyle={{
              background: 'rgba(10,10,20,0.92)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 10,
              fontSize: 12,
              color: '#e2e8f0',
            }}
          />
          {keys.length > 1 && (
            <Legend
              wrapperStyle={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', paddingTop: 8 }}
            />
          )}
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
