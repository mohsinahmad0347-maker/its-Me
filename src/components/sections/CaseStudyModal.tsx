import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle2, AlertCircle } from 'lucide-react';
import type { Project } from '../../data/portfolioData';
import { GitHubIcon } from '../icons/TechIcons';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'features' | 'process'>('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/85 backdrop-blur-xl -z-10"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', duration: 0.4, bounce: 0.15 }}
          className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl bg-panel/95 border border-white/20 shadow-2xl shadow-purple-950/50 overflow-hidden"
        >
          {/* Top Bar Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-3">
              <span className="w-9 h-9 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-300 font-mono font-bold flex items-center justify-center text-xs">
                {project.number}
              </span>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  {project.title}
                  <span className="text-xs px-2.5 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30 font-mono">
                    {project.year}
                  </span>
                </h3>
                <p className="text-xs text-slate-400">{project.category}</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-sky-500/20 text-sky-300 hover:bg-sky-500/30 border border-sky-500/30 text-xs font-semibold transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Body - Scrollable */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 scrollbar-thin">
            {/* Banner Preview Image */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-white/15 shadow-xl group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2">
                <div className="flex flex-wrap items-center gap-1.5">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[11px] font-mono text-[#FFFFFF] border border-white/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3">
              {project.caseStudy.keyStats.map((stat, i) => (
                <div key={i} className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-center">
                  <div className="text-[10px] text-slate-400 uppercase font-mono">{stat.label}</div>
                  <div className="text-base sm:text-lg font-bold text-gradient-purple-cyan font-mono mt-0.5">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Tabs for Case Study */}
            <div className="flex border-b border-white/10 gap-4 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab('overview')}
                className={`pb-2.5 transition-colors relative ${
                  activeTab === 'overview' ? 'text-sky-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                Executive Overview
                {activeTab === 'overview' && (
                  <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('features')}
                className={`pb-2.5 transition-colors relative ${
                  activeTab === 'features' ? 'text-sky-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                Architecture & Features
                {activeTab === 'features' && (
                  <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400" />
                )}
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('process')}
                className={`pb-2.5 transition-colors relative ${
                  activeTab === 'process' ? 'text-sky-400' : 'text-slate-400 hover:text-white'
                }`}
              >
                Engineering & Challenges
                {activeTab === 'process' && (
                  <motion.div layoutId="tabLine" className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-400" />
                )}
              </button>
            </div>

            {/* Tab Contents */}
            {activeTab === 'overview' && (
              <div className="space-y-4 text-sm text-slate-300">
                <p className="leading-relaxed bg-white/[0.02] p-4 rounded-xl border border-white/[0.06]">
                  {project.caseStudy.overview}
                </p>

                {/* Problem & Solution */}
                <div className="space-y-2">
                  <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 space-y-1.5">
                    <div className="font-bold text-purple-300 text-xs uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" /> Core Challenge & Problem
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.caseStudy.problem}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1.5">
                    <div className="font-bold text-emerald-300 text-xs uppercase tracking-wider flex items-center gap-1.5 font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Implemented Solution
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.caseStudy.solution}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'features' && (
              <div className="space-y-4">
                <div className="text-xs font-semibold text-white uppercase tracking-wider font-mono">
                  Engineered Features & Capabilities:
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-xs text-white"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-400">
                  <strong className="text-white block mb-1">Design Concept:</strong>
                  {project.caseStudy.designConcept}
                </div>
              </div>
            )}

            {activeTab === 'process' && (
              <div className="space-y-3 text-xs text-slate-300">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                  <div className="font-bold text-white uppercase font-mono text-[11px] text-sky-400">
                    Development Process
                  </div>
                  <p className="leading-relaxed">{project.caseStudy.developmentProcess}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] space-y-1">
                  <div className="font-bold text-white uppercase font-mono text-[11px] text-purple-400">
                    Technical Challenges Addressed
                  </div>
                  <p className="leading-relaxed">{project.caseStudy.challenges}</p>
                </div>

                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 space-y-1">
                  <div className="font-bold text-emerald-300 uppercase font-mono text-[11px]">
                    Outcome & Benchmark Results
                  </div>
                  <p className="leading-relaxed text-slate-200">{project.caseStudy.outcome}</p>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="p-4 sm:p-5 border-t border-white/10 bg-appBg/45 flex items-center justify-between gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/10 text-white text-xs font-semibold transition-colors border border-white/10"
            >
              <GitHubIcon size={16} />
              <span>Source Code</span>
            </a>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 text-xs font-semibold transition-colors"
              >
                Close
              </button>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-sky-500 text-[#FFFFFF] text-xs font-bold shadow-md shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] transition-all"
              >
                <span>Launch Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
