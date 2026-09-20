import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Languages, CheckCircle2, Globe2 } from 'lucide-react';
import { KEY_STRENGTHS, CAREER_INTERESTS, LANGUAGES } from '../../data/portfolioData';

export const StrengthsAndInterests: React.FC = () => {
  return (
    <section id="strengths" className="mb-14 scroll-mt-28 space-y-12">
      {/* 1. KEY STRENGTHS */}
      <div>
        <div className="mb-6">
          <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-400 mb-1">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CORE PROFESSIONAL ATTRIBUTES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Key Strengths
          </h2>
          <p className="text-sm text-slate-400">
            Methodological disciplines driving software reliability, learning speed, and problem resolution
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {KEY_STRENGTHS.map((strength, index) => (
            <motion.div
              key={strength.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="glass-card glass-card-hover p-4 sm:p-5 flex flex-col justify-between group border border-white/[0.08]"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-300 flex items-center justify-center text-xs font-mono font-bold">
                    0{index + 1}
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="font-bold text-sm text-white group-hover:text-sky-300 transition-colors">
                  {strength.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                  {strength.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 2. CAREER INTERESTS & LANGUAGES SPLIT SECTION */}
      <div id="career-interests" className="grid grid-cols-1 lg:grid-cols-12 gap-6 scroll-mt-28">
        {/* Career Interests (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-7 glass-card p-6 sm:p-7 border border-white/10"
        >
          <div className="flex items-center gap-2 text-purple-400 mb-2">
            <Target className="w-4 h-4" />
            <span className="text-xs font-mono uppercase font-bold tracking-wider">STRATEGIC ALIGNMENT</span>
          </div>
          <h3 className="text-xl font-bold text-white mb-2">
            Career Interests & Aspirations
          </h3>
          <p className="text-xs text-slate-400 mb-5 leading-relaxed">
            Target development tracks where Mohsin Ahmad seeks to apply rigorous engineering and business intelligence expertise:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {CAREER_INTERESTS.map((interest, i) => (
              <div
                key={interest}
                className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/30 transition-all group"
              >
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-500 to-sky-400 group-hover:scale-125 transition-transform" />
                <span className="text-xs font-semibold text-slate-200 group-hover:text-white transition-colors">
                  {interest}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Languages (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-5 glass-card p-6 sm:p-7 border border-white/10 flex flex-col justify-between"
        >
          <div>
            <div className="flex items-center gap-2 text-sky-400 mb-2">
              <Languages className="w-4 h-4" />
              <span className="text-xs font-mono uppercase font-bold tracking-wider">LINGUISTIC FLUENCY</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">
              Languages
            </h3>
            <p className="text-xs text-slate-400 mb-4 leading-relaxed">
              Professional and native linguistic capabilities for effective cross-cultural collaboration:
            </p>

            <div className="space-y-3">
              {LANGUAGES.map((lang) => (
                <div
                  key={lang.name}
                  className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between"
                >
                  <div className="flex items-center gap-2.5">
                    <Globe2 className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-xs font-bold text-white">{lang.name}</div>
                      <div className="text-[10px] text-slate-400">{lang.level}</div>
                    </div>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/10 text-sky-300 text-[11px] font-mono border border-sky-500/20 font-semibold">
                    {lang.proficiency}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/[0.06] text-[11px] text-slate-400 text-center font-mono">
            Clear technical communication in academic & professional environments
          </div>
        </motion.div>
      </div>
    </section>
  );
};
