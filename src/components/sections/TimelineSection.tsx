import React from 'react';
import { motion } from 'framer-motion';
import { GitBranch, Calendar, GraduationCap, Code2, Cpu, CheckCircle2, Clock } from 'lucide-react';
import { TIMELINE } from '../../data/portfolioData';

export const TimelineSection: React.FC = () => {
  const getTimelineIcon = (index: number) => {
    switch (index) {
      case 0:
        return <GraduationCap className="w-4 h-4 text-purple-400" />;
      case 1:
        return <Code2 className="w-4 h-4 text-sky-400" />;
      case 2:
        return <Cpu className="w-4 h-4 text-emerald-400" />;
      case 3:
        return <Clock className="w-4 h-4 text-amber-400" />;
      default:
        return <CheckCircle2 className="w-4 h-4 text-white" />;
    }
  };

  return (
    <section id="timeline" className="mb-14 scroll-mt-28">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-400 mb-1">
          <GitBranch className="w-3.5 h-3.5" />
          <span>CHRONOLOGY & MILESTONES</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Career & Education Timeline
        </h2>
        <p className="text-sm text-slate-400">
          Chronological progression of academic milestones and production web initiatives
        </p>
      </div>

      {/* Timeline Vertical Track */}
      <div className="relative pl-6 sm:pl-10 space-y-8 before:absolute before:left-2.5 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-purple-500 before:via-sky-400 before:to-emerald-400">
        {TIMELINE.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative group"
          >
            {/* Timeline Node Dot */}
            <div className="absolute -left-6 sm:-left-10 top-1.5 w-5 h-5 sm:w-8 sm:h-8 rounded-full bg-appBg border-2 border-purple-400 shadow-md shadow-purple-500/30 flex items-center justify-center group-hover:scale-110 group-hover:border-sky-400 transition-all duration-200">
              {getTimelineIcon(index)}
            </div>

            {/* Timeline Card */}
            <div className="glass-card glass-card-hover p-5 sm:p-6 border border-white/10 rounded-2xl">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-md bg-purple-600/20 text-purple-300 font-mono text-xs font-bold border border-purple-500/30">
                    {item.year}
                  </span>
                  <span className="text-xs text-sky-400 font-medium">{item.institution}</span>
                </div>
                <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/[0.04] text-slate-400">
                  {item.status}
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-sky-300 transition-colors">
                {item.title}
              </h3>

              <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
