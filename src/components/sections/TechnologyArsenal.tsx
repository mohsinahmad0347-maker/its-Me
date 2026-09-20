import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Sparkles, Filter, Network, CheckCircle2, ArrowRight } from 'lucide-react';
import { TECHNOLOGIES, TechnologyItem } from '../../data/portfolioData';
import { TechIcon } from '../icons/TechIcons';

export const TechnologyArsenal: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'ALL' | 'FRONTEND' | 'DATA & BI' | 'TOOLS'>('ALL');
  const [selectedTech, setSelectedTech] = useState<TechnologyItem | null>(null);

  const filterOptions: ('ALL' | 'FRONTEND' | 'DATA & BI' | 'TOOLS')[] = [
    'ALL',
    'FRONTEND',
    'DATA & BI',
    'TOOLS',
  ];

  const filteredTechnologies = TECHNOLOGIES.filter((tech) => {
    if (activeFilter === 'ALL') return true;
    return tech.category === activeFilter;
  });

  return (
    <section id="skills" className="mb-14 scroll-mt-28">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-400 mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span>SPECIALIZED TOOLING & MASTERY</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Technology Arsenal & Skills
          </h2>
          <p className="text-sm text-slate-400">
            Validated toolchain across modern frontend engineering and business intelligence
          </p>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-md self-start sm:self-center overflow-x-auto max-w-full">
          {filterOptions.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                activeFilter === filter
                  ? 'bg-gradient-to-r from-purple-600 to-sky-500 text-[#FFFFFF] shadow-md shadow-purple-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.06]'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* SECTION 38: TECHNOLOGY ARSENAL CARDS GRID */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10"
      >
        <AnimatePresence>
          {filteredTechnologies.map((tech) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              key={tech.name}
              onClick={() => setSelectedTech(tech)}
              className="glass-card glass-card-hover p-4 sm:p-5 flex flex-col justify-between group cursor-pointer border border-white/[0.08] relative overflow-hidden"
            >
              {/* Subtle accent line on top */}
              <div
                className="absolute top-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: tech.color }}
              />

              <div>
                <div className="flex items-center justify-between mb-3">
                  {/* Official SVG Logo */}
                  <div className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 group-hover:scale-110 group-hover:shadow-lg transition-transform duration-200">
                    <TechIcon name={tech.name} size={26} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.06]">
                    {tech.category}
                  </span>
                </div>

                <h3 className="font-bold text-base text-white group-hover:text-sky-300 transition-colors">
                  {tech.name}
                </h3>
                <div className="text-[11px] text-purple-400 font-semibold mb-2">
                  {tech.badge}
                </div>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {tech.description}
                </p>
              </div>

              <div className="pt-4 mt-3 border-t border-white/[0.06]">
                <div className="flex items-center justify-between text-[11px] mb-1.5 font-mono">
                  <span className="text-slate-400">Proficiency</span>
                  <span className="text-sky-400 font-bold">{tech.level}</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-500 group-hover:brightness-125"
                    style={{
                      width: tech.level,
                      backgroundColor: tech.color || '#38BDF8',
                    }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* SECTION 41: INTERACTIVE TECHNOLOGY ECOSYSTEM GRAPH */}
      <div id="technology" className="glass-card p-6 sm:p-8 border border-white/15 relative overflow-hidden scroll-mt-28">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-400 mb-1">
              <Network className="w-3.5 h-3.5" />
              <span>VISUAL GRAPH ARCHITECTURE</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              Technology Ecosystem
            </h3>
            <p className="text-xs text-slate-400">
              Interactive relationship mapping connecting Mohsin Ahmad's core competencies
            </p>
          </div>
          <span className="text-xs text-purple-400 font-mono bg-purple-500/10 px-3 py-1 rounded-lg border border-purple-500/20 self-start">
            Zero Python Architecture
          </span>
        </div>

        {/* Ecosystem Nodes Tree */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          {/* Branch 1: Frontend */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-purple-500/25">
            <div className="flex items-center gap-2 text-purple-400 font-bold text-sm border-b border-purple-500/20 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-sm shadow-purple-500" />
              <span>FRONTEND</span>
            </div>
            <div className="space-y-2">
              {['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'Tailwind CSS'].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-semibold text-white transition-all group"
                >
                  <TechIcon name={tech} size={18} />
                  <span className="group-hover:text-purple-300 transition-colors">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Branch 2: Data */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-emerald-500/25">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm border-b border-emerald-500/20 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500" />
              <span>DATA</span>
            </div>
            <div className="space-y-2">
              {['Microsoft Excel', 'Data Analysis', 'Data Visualization', 'Data Reporting'].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-semibold text-white transition-all group"
                >
                  <TechIcon name="excel" size={18} />
                  <span className="group-hover:text-emerald-300 transition-colors">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Branch 3: Business Intelligence */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-amber-500/25">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm border-b border-amber-500/20 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 shadow-sm shadow-amber-500" />
              <span>BUSINESS INTELLIGENCE</span>
            </div>
            <div className="space-y-2">
              {['Microsoft Power BI', 'Dashboard Development', 'DAX Measures', 'KPI Modeling'].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-semibold text-white transition-all group"
                >
                  <TechIcon name="powerbi" size={18} />
                  <span className="group-hover:text-amber-300 transition-colors">{tech}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Branch 4: Developer Tools */}
          <div className="space-y-3 p-4 rounded-2xl bg-white/[0.02] border border-sky-500/25">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm border-b border-sky-500/20 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400 shadow-sm shadow-sky-400" />
              <span>TOOLS</span>
            </div>
            <div className="space-y-2">
              {['Git', 'GitHub', 'VS Code'].map((tech) => (
                <div
                  key={tech}
                  className="flex items-center gap-2.5 p-2 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.06] text-xs font-semibold text-white transition-all group"
                >
                  <TechIcon name={tech} size={18} />
                  <span className="group-hover:text-sky-300 transition-colors">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Center Monogram Nexus Bar */}
        <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-sky-500 flex items-center justify-center font-mono font-extrabold text-[#FFFFFF] text-sm shadow-md">
              MA
            </div>
            <div>
              <div className="text-white font-bold text-sm">MOHSIN AHMAD</div>
              <div className="text-xs text-slate-400">Integrated Frontend & Data Specialization</div>
            </div>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            Islamia College Peshawar • Software Engineering (2025–2029)
          </div>
        </div>
      </div>
    </section>
  );
};
