'use client';

import { Activity, ArrowRight, Box, FileText, Hash, Layers, Type, Zap } from 'lucide-react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import type { StatsData } from './stats-utils';

interface StatsOverviewProps {
  stats: StatsData;
  format: string;
}

export function StatsOverview({ stats, format }: StatsOverviewProps) {
  // Data for donut chart
  const donutData = [
    {
      name: 'Input',
      value: stats.input.chars,
      percentage: stats.ratios.inputPercentage,
    },
    {
      name: format.toUpperCase(),
      value: stats.output.chars,
      percentage: stats.ratios.outputPercentage,
    },
  ];

  // Consolidated data for comparison
  const comparisonData = [
    {
      name: 'Lines',
      Input: stats.input.lines,
      Output: stats.output.lines,
      ratio: stats.expansion.lines,
    },
    {
      name: 'Chars',
      Input: stats.input.chars,
      Output: stats.output.chars,
      ratio: stats.expansion.chars,
    },
    {
      name: 'Tokens',
      Input: stats.input.tokens,
      Output: stats.output.tokens,
      ratio: stats.expansion.tokens,
    },
  ];

  const COLORS = {
    input: '#444444',
    output: '#10b981',
    grid: '#111111',
    text: '#666666',
  };

  const CustomTooltip = ({
    active,
    payload,
    label,
  }: {
    active?: boolean;
    payload?: readonly { name: string; value: number; color: string }[];
    label?: string | number;
  }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-none border border-border bg-background p-4 shadow-xl">
          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-3">
            {label}
          </p>
          {payload.map((entry, index) => (
            <div
              key={`${entry.name}-${index}`}
              className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest mb-1.5 last:mb-0"
            >
              <div className="h-1.5 w-1.5" style={{ backgroundColor: entry.color }} />
              <span className="text-muted-foreground/60">{entry.name}:</span>
              <span className="font-mono text-foreground">{entry.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-8 p-8 max-h-[80vh] overflow-y-auto">
      {/* Header Section */}
      <div className="flex items-center justify-between border-b dashed-separator pb-8">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold uppercase tracking-tight flex items-center gap-3">
            <Activity className="h-5 w-5 text-emerald-500" />
            Optimization Metrics
          </h2>
          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground/60">
            Real-time analysis of JSSON transpilation footprint
          </p>
        </div>
        {stats.expansion.lines > 1 && (
          <div className="hidden sm:flex items-center gap-3 border border-emerald-500/30 bg-emerald-500/5 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-emerald-500">
            <Zap className="h-3 w-3 fill-current" />
            <span>{stats.expansion.lines.toFixed(1)}x Efficiency Boost</span>
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-none border border-border bg-muted/5 p-6 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-5">
            <FileText className="h-12 w-12" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Input Load
          </p>
          <div className="space-y-1">
            <div className="text-4xl font-bold font-mono tracking-tighter">{stats.input.lines}</div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/40">
              Lines of Code
            </p>
          </div>
          <div className="mt-6 pt-6 border-t dashed-separator flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">
            <div className="flex items-center gap-1.5">
              <Type className="h-3 w-3" /> {stats.input.chars}
            </div>
            <div className="flex items-center gap-1.5">
              <Hash className="h-3 w-3" /> ~{stats.input.tokens}
            </div>
          </div>
        </div>

        <div className="rounded-none border border-border bg-muted/5 p-6 relative group overflow-hidden">
          <div className="absolute top-0 right-0 p-2 opacity-5 text-emerald-500">
            <Box className="h-12 w-12" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            {format.toUpperCase()} Output
          </p>
          <div className="space-y-1">
            <div className="text-4xl font-bold font-mono tracking-tighter text-emerald-500">
              {stats.output.lines}
            </div>
            <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/40">
              Lines Generated
            </p>
          </div>
          <div className="mt-6 pt-6 border-t dashed-separator flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest text-muted-foreground/60">
            <div className="flex items-center gap-1.5">
              <Type className="h-3 w-3" /> {stats.output.chars}
            </div>
            <div className="flex items-center gap-1.5">
              <Hash className="h-3 w-3" /> ~{stats.output.tokens}
            </div>
          </div>
        </div>

        <div className="rounded-none border border-border bg-foreground text-background p-6 relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-2 opacity-10">
            <Layers className="h-12 w-12" />
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4">
            Expansion Ratio
          </p>
          <div className="space-y-1">
            <div className="text-4xl font-bold font-mono tracking-tighter">
              {stats.expansion.lines.toFixed(1)}x
            </div>
            <p className="text-[9px] font-bold uppercase tracking-widest opacity-60">
              Multiplication Factor
            </p>
          </div>
          <div className="mt-6 pt-6 border-t border-background/20 text-[9px] font-bold uppercase tracking-widest opacity-60">
            {stats.input.lines} L <ArrowRight className="inline h-2 w-2 mx-1" />{' '}
            {stats.output.lines} L
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-7">
        <div className="col-span-4 rounded-none border border-border p-8 bg-muted/2">
          <div className="mb-10">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em]">Growth Metrics</h3>
            <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/40 mt-1">
              Structure Size Comparison
            </p>
          </div>
          <div className="h-[250px] w-full bg-grid/30">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={comparisonData}
                margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
                barSize={24}
              >
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke={COLORS.grid}
                  opacity={0.8}
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={{
                    fill: COLORS.text,
                    fontSize: 9,
                    fontWeight: 900,
                  }}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fill: COLORS.text, fontSize: 9, fontWeight: 900 }}
                  dy={10}
                />
                <Tooltip cursor={{ fill: 'rgba(255,255,255,0.02)' }} content={CustomTooltip} />
                <Legend
                  wrapperStyle={{
                    paddingTop: '30px',
                    fontSize: '9px',
                    fontWeight: 900,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                  iconType="rect"
                  iconSize={6}
                />
                <Bar dataKey="Input" fill="#444444" radius={0} animationDuration={0} />
                <Bar dataKey="Output" fill="#ffffff" radius={0} animationDuration={0} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-span-3 rounded-none border border-border p-8 bg-muted/2">
          <div className="mb-10">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em]">Payload Density</h3>
            <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground/40 mt-1">
              Character Distribution
            </p>
          </div>
          <div className="h-[250px] w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={donutData}
                  cx="50%"
                  cy="42%"
                  innerRadius={55}
                  outerRadius={80}
                  paddingAngle={0}
                  dataKey="value"
                  stroke="#000"
                  strokeWidth={2}
                  animationDuration={0}
                >
                  <Cell fill="#222222" />
                  <Cell fill="#10b981" />
                </Pie>
                <Tooltip content={CustomTooltip} />
                <Legend
                  verticalAlign="bottom"
                  height={36}
                  iconType="rect"
                  iconSize={6}
                  wrapperStyle={{
                    fontSize: '9px',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>

            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none pb-12">
              <span className="text-2xl font-bold font-mono">
                {stats.expansion.chars.toFixed(1)}x
              </span>
              <span className="text-[8px] font-bold uppercase tracking-widest text-muted-foreground/60">
                Growth
              </span>
            </div>
          </div>
        </div>
      </div>

      {stats.expansion.lines > 1 && (
        <div className="mt-4 border border-emerald-500/20 bg-emerald-500/5 p-6 flex items-start gap-4">
          <div className="border border-emerald-500/30 p-2">
            <Zap className="h-4 w-4 text-emerald-500 fill-current" />
          </div>
          <div className="space-y-2">
            <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-500">
              High-Efficiency JSSON Profile
            </p>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 leading-relaxed">
              Synthesized <span className="text-foreground">{stats.output.lines} lines</span> of
              configuration from{' '}
              <span className="text-foreground">{stats.input.lines} input points</span>. Output
              density is{' '}
              <span className="text-emerald-500">{stats.expansion.lines.toFixed(1)}x</span> higher
              than standard {format.toUpperCase()} entry.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
