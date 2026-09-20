import React from 'react';
import { motion } from 'framer-motion';
import { FolderKanban, Globe, Calendar, Cpu, Award, ArrowUpRight } from 'lucide-react';
import { METRICS } from '../../data/portfolioData';

export const DashboardOverview: React.FC = () => {
  const getMetricIcon = (id: string) => {
    switch (id) {
      case 'projects':
        return <FolderKanban className="w-5 h-5 text-purple-400" />;
      case 'experiences':
        return <Globe className="w-5 h-5 text-sky-400" />;
      case 'year':
        return <Calendar className="w-5 h-5 text-amber-400" />;
      case 'tech':
        return <Cpu className="w-5 h-5 text-indigo-400" />;
      case 'gpa':
        return <Award className="w-5 h-5 text-emerald-400" />;
      default:
        return <ArrowUpRight className="w-5 h-5 text-white" />;
    }
  };

  const getMetricGradient = (id: string) => {
    switch (id) {
      case 'projects':
        return 'from-purple-500 to-indigo-400';
      case 'experiences':
        return 'from-sky-400 to-blue-500';
      case 'year':
        return 'from-amber-400 to-orange-400';
      case 'tech':
        return 'from-indigo-400 to-purple-400';
      case 'gpa':
        return 'from-emerald-400 to-teal-300';
      default:
        return 'from-white to-slate-300';
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-bold text-white tracking-tight flex items-center gap-2">
            <span>COMMAND CENTER TELEMETRY</span>
            <span className="text-xs px-2 py-0.5 rounded-md bg-purple-500/20 text-purple-300 border border-purple-500/30 font-mono font-normal">
              LIVE METRICS
            </span>
          </h2>
          <p className="text-xs text-slate-400">Core operational indicators across academic & development initiatives</p>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {METRICS.map((metric, index) => {
          return (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="glass-card glass-card-hover p-4 sm:p-5 flex flex-col justify-between group cursor-default"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform duration-200">
                  {getMetricIcon(metric.id)}
                </div>
                <span className="text-[10px] font-mono text-slate-500 tracking-wider">#{metric.id.toUpperCase()}</span>
              </div>

              <div>
                <div className={`text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r ${getMetricGradient(metric.id)} bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left font-mono`}>
                  {metric.value}
                </div>
                <div className="text-[11px] font-bold text-slate-200 tracking-wider uppercase mt-1">
                  {metric.label}
                </div>
                <div className="text-[10px] text-slate-400 line-clamp-2 mt-1 font-normal">
                  {metric.desc}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
