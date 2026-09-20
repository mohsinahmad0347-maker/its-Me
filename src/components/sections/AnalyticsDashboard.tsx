import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip as RechartsTooltip,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  BarChart,
  Bar,
  CartesianGrid,
} from 'recharts';
import { ANALYTICS_DATA } from '../../data/portfolioData';
import { BarChart3, PieChart as PieIcon, Activity, Sparkles } from 'lucide-react';

export const AnalyticsDashboard: React.FC = () => {
  const [activeDonutIndex, setActiveDonutIndex] = useState<number | null>(null);

  // Custom Glass Tooltip for Charts
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 rounded-xl bg-popover/95 border border-white/20 shadow-2xl backdrop-blur-xl text-xs space-y-1">
          <div className="font-bold text-white font-mono">{label || payload[0].name}</div>
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: payload[0].color || payload[0].fill || '#38BDF8' }}
            />
            <span className="text-slate-300">
              {payload[0].name}: <strong className="text-white font-mono">{payload[0].value}%</strong>
            </span>
          </div>
        </div>
      );
    }
    return null;
  };

  const ActivityTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 rounded-xl bg-popover/95 border border-white/20 shadow-2xl backdrop-blur-xl text-xs space-y-1">
          <div className="font-bold text-sky-400 font-mono">{label}</div>
          <div className="text-white">
            Development Velocity: <strong className="font-mono text-purple-300">{payload[0].value} pts</strong>
          </div>
          {payload[1] && (
            <div className="text-slate-400 text-[11px]">
              Coding Intensity: <span className="font-mono text-emerald-400">{payload[1].value} hrs</span>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <section id="analytics" className="mb-14 scroll-mt-28">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-400 mb-1">
            <Activity className="w-3.5 h-3.5" />
            <span>BUSINESS INTELLIGENCE & TELEMETRY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Portfolio Analytics
          </h2>
          <p className="text-sm text-slate-400">
            Quantitative breakdown of technical focus, development velocity, and technology usage
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="px-3 py-1 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            2026 Cycle
          </span>
        </div>
      </div>

      {/* TOP ROW: DONUT & AREA CHART (2 COLUMNS) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-6">
        {/* DONUT CHART: TECHNOLOGY FOCUS (5 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 glass-card p-5 sm:p-6 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <PieIcon className="w-4 h-4 text-purple-400" />
                <span>Technology Focus</span>
              </h3>
              <p className="text-xs text-slate-400">Time allocation across primary domains</p>
            </div>
            <span className="text-[10px] font-mono text-slate-500">DOMAINS</span>
          </div>

          {/* Donut graphic with center label */}
          <div className="relative h-60 w-full flex items-center justify-center my-2">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ANALYTICS_DATA.donut}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={95}
                  paddingAngle={5}
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveDonutIndex(index)}
                  onMouseLeave={() => setActiveDonutIndex(null)}
                >
                  {ANALYTICS_DATA.donut.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={entry.color}
                      stroke="rgba(15, 17, 30, 0.8)"
                      strokeWidth={3}
                      className="cursor-pointer transition-transform duration-200 hover:opacity-90"
                    />
                  ))}
                </Pie>
                <RechartsTooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>

            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-2xl font-black font-mono text-white tracking-tight">100%</span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase">Focus Total</span>
            </div>
          </div>

          {/* Legend Items */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/[0.06]">
            {ANALYTICS_DATA.donut.map((item, index) => (
              <div
                key={item.name}
                className={`flex items-center justify-between p-1.5 rounded-lg transition-colors text-xs ${
                  activeDonutIndex === index ? 'bg-white/10' : ''
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-slate-300 text-[11px] truncate">{item.name}</span>
                </div>
                <span className="font-mono font-bold text-white text-[11px] ml-1">{item.value}%</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* AREA CHART: PORTFOLIO ACTIVITY (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 glass-card p-5 sm:p-6 flex flex-col justify-between"
        >
          <div className="flex items-center justify-between mb-2">
            <div>
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-sky-400" />
                <span>Portfolio Activity</span>
              </h3>
              <p className="text-xs text-slate-400">Monthly engineering velocity across 2026</p>
            </div>
            <div className="flex items-center gap-3 text-[11px] font-mono">
              <span className="flex items-center gap-1.5 text-purple-400">
                <span className="w-2 h-2 rounded-full bg-purple-500" /> Activity
              </span>
              <span className="flex items-center gap-1.5 text-sky-400">
                <span className="w-2 h-2 rounded-full bg-sky-400" /> Dev Hours
              </span>
            </div>
          </div>

          {/* Area Chart Container */}
          <div className="h-64 sm:h-72 w-full pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={ANALYTICS_DATA.area} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="purpleGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#7C3AED" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#7C3AED" stopOpacity={0.0} />
                  </linearGradient>
                  <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#38BDF8" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#38BDF8" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
                <XAxis
                  dataKey="month"
                  stroke="#64748B"
                  fontSize={10}
                  tickLine={false}
                  axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                />
                <YAxis
                  stroke="#64748B"
                  fontSize={10}
                  tickLine={false}
                  axisLine={false}
                  tickFormatter={(val) => `${val}`}
                />
                <RechartsTooltip content={<ActivityTooltip />} />
                <Area
                  type="monotone"
                  dataKey="activity"
                  name="Development Velocity"
                  stroke="#7C3AED"
                  strokeWidth={2.5}
                  fillOpacity={1}
                  fill="url(#purpleGradient)"
                />
                <Area
                  type="monotone"
                  dataKey="hours"
                  name="Development Hours"
                  stroke="#38BDF8"
                  strokeWidth={2}
                  fillOpacity={1}
                  fill="url(#skyGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-white/[0.06] mt-2">
            <span>Peak Activity: August – September 2026</span>
            <span className="font-mono text-sky-400 font-medium">5 Major Production Deployments</span>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM ROW: BAR CHART (TECHNOLOGY USAGE) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-card p-5 sm:p-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-emerald-400" />
              <span>Technology Usage & Proficiency</span>
            </h3>
            <p className="text-xs text-slate-400">
              Verified proficiency ratings across Frontend, Data & BI, and Developer Tooling (Strictly Verified)
            </p>
          </div>
          <div className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-lg border border-emerald-500/20">
            Verified Core Stack
          </div>
        </div>

        <div className="h-64 sm:h-72 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={ANALYTICS_DATA.bar} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.05)" vertical={false} />
              <XAxis
                dataKey="name"
                stroke="#64748B"
                fontSize={10}
                tickLine={false}
                axisLine={{ stroke: 'rgba(255, 255, 255, 0.1)' }}
                interval={0}
                angle={-20}
                textAnchor="end"
              />
              <YAxis
                stroke="#64748B"
                fontSize={10}
                tickLine={false}
                axisLine={false}
                domain={[0, 100]}
                tickFormatter={(val) => `${val}%`}
              />
              <RechartsTooltip content={<CustomTooltip />} />
              <Bar
                dataKey="usage"
                name="Proficiency"
                radius={[8, 8, 0, 0]}
              >
                {ANALYTICS_DATA.bar.map((entry, index) => {
                  let fillColor = '#38BDF8';
                  if (entry.category === 'Frontend') fillColor = '#7C3AED';
                  if (entry.category === 'Data & BI') fillColor = '#10B981';
                  if (entry.category === 'Tools') fillColor = '#38BDF8';
                  return (
                    <Cell
                      key={`bar-${index}`}
                      fill={fillColor}
                      className="transition-all duration-200 hover:opacity-80"
                    />
                  );
                })}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-3 border-t border-white/[0.06] text-xs">
          <span className="flex items-center gap-2 text-slate-300">
            <span className="w-3 h-3 rounded-md bg-[#7C3AED]" /> Frontend Development (HTML5, CSS3, JS, Tailwind, Bootstrap)
          </span>
          <span className="flex items-center gap-2 text-slate-300">
            <span className="w-3 h-3 rounded-md bg-[#10B981]" /> Data & Business Intelligence (Excel, Power BI)
          </span>
          <span className="flex items-center gap-2 text-slate-300">
            <span className="w-3 h-3 rounded-md bg-[#38BDF8]" /> Developer Tools (Git, GitHub, VS Code)
          </span>
        </div>
      </motion.div>
    </section>
  );
};
