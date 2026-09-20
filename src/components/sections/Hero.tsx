import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Mail, Sparkles, MapPin, GraduationCap, Award, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { TechIcon } from '../icons/TechIcons';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const floatingBadges = [
    { name: 'HTML5', label: 'HTML5', pos: 'top-4 -left-4', delay: 0 },
    { name: 'CSS3', label: 'CSS3', pos: 'top-20 -right-6', delay: 0.2 },
    { name: 'JavaScript', label: 'JavaScript', pos: 'bottom-24 -left-8', delay: 0.4 },
    { name: 'Tailwind CSS', label: 'Tailwind CSS', pos: 'bottom-6 -right-4', delay: 0.6 },
    { name: 'Bootstrap', label: 'Bootstrap', pos: '-top-6 right-16', delay: 0.8 },
    { name: 'Microsoft Excel', label: 'Excel', pos: 'top-1/2 -left-10', delay: 1.0 },
    { name: 'Microsoft Power BI', label: 'Power BI', pos: 'bottom-36 -right-8', delay: 1.2 },
  ];

  return (
    <section id="dashboard" className="relative pt-2 pb-14 scroll-mt-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* LEFT COLUMN: HERO HEADINGS & CTA (7 cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-purple-500/30 backdrop-blur-md shadow-sm shadow-purple-500/10"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold tracking-wider uppercase text-purple-300">
              SOFTWARE ENGINEERING STUDENT
            </span>
            <span className="text-slate-500 font-mono">•</span>
            <span className="text-[11px] font-mono text-sky-400 font-semibold">Islamia College Peshawar</span>
          </motion.div>

          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              MOHSIN <span className="text-gradient-purple-cyan">AHMAD</span>
            </h1>
            <div className="text-lg sm:text-xl md:text-2xl font-semibold text-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-sky-400">Frontend Developer</span>
              <span className="text-slate-600 font-light">•</span>
              <span className="text-emerald-400">MS Excel</span>
              <span className="text-slate-600 font-light">•</span>
              <span className="text-amber-400">Microsoft Power BI</span>
            </div>
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed pt-1">
              "{PERSONAL_INFO.tagline}"
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center gap-3.5 pt-2"
          >
            <Link
              to="/projects"
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 text-[#FFFFFF] font-bold text-sm tracking-wide shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.03] active:scale-95 transition-all duration-200 flex items-center gap-2.5 border border-white/20 group"
            >
              <span>EXPLORE MY WORK</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <button
              type="button"
              onClick={onOpenCVModal}
              className="px-6 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-bold text-sm tracking-wide border border-white/15 hover:border-sky-400/40 shadow-sm transition-all duration-200 flex items-center gap-2.5 active:scale-95"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>DOWNLOAD CV</span>
            </button>

            <Link
              to="/contact"
              className="px-5 py-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.07] text-slate-300 hover:text-white font-semibold text-sm border border-white/10 hover:border-white/20 transition-all duration-200 flex items-center gap-2"
            >
              <Mail className="w-4 h-4 text-purple-400" />
              <span>CONTACT ME</span>
            </Link>
          </motion.div>

          {/* SECTION 29: HERO PROFILE CARD */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-4 sm:p-5 border border-white/[0.1] mt-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/15 text-purple-400 border border-purple-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Academic Institution</div>
                  <div className="text-white font-semibold">{PERSONAL_INFO.institution}</div>
                  <div className="text-sky-400/90 text-[11px]">{PERSONAL_INFO.degree} (2025 – 2029)</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Academic Standing</div>
                  <div className="text-white font-bold text-sm text-gradient-purple-cyan">GPA: {PERSONAL_INFO.gpa}</div>
                  <div className="text-emerald-400 text-[11px] font-medium flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Perfect Academic Record
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-sky-500/15 text-sky-400 border border-sky-500/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Location</div>
                  <div className="text-white font-medium">{PERSONAL_INFO.location}</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">Current Status</div>
                  <div className="text-white font-medium">{PERSONAL_INFO.role}</div>
                  <div className="text-slate-400 text-[11px]">Active in Peshawar, KP</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: OFFICIAL PROFILE PORTRAIT WITH FLOATING BADGES (5 cols) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="lg:col-span-5 flex justify-center relative mt-8 lg:mt-0"
        >
          {/* Glowing Aura Rings behind photo */}
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-600/30 via-indigo-600/20 to-sky-500/30 blur-2xl -z-10 opacity-70 animate-pulse-slow" />

          {/* Portrait Container */}
          <div className="relative group">
            {/* Glass frame */}
            <div className="relative w-[280px] sm:w-[330px] md:w-[360px] aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2.5 border border-white/20 shadow-2xl shadow-purple-950/50 transition-all duration-300 group-hover:border-sky-400/50">
              {/* Profile Image */}
              <img
                src={PERSONAL_INFO.photo}
                alt="Mohsin Ahmad - Official Professional Portrait"
                className="w-full h-full object-cover rounded-2xl shadow-inner transition-transform duration-500 group-hover:scale-[1.02]"
              />

              {/* Subtle glass overlay highlight on bottom */}
              <div className="absolute inset-x-2.5 bottom-2.5 p-3.5 rounded-b-2xl bg-gradient-to-t from-appBg/90 via-appBg/50 to-transparent backdrop-blur-[2px] flex items-center justify-between">
                <div>
                  <div className="text-white font-bold text-sm tracking-wide">MOHSIN AHMAD</div>
                  <div className="text-[11px] text-sky-400 font-medium">Islamia College Peshawar</div>
                </div>
                <div className="px-2 py-0.5 rounded-full bg-purple-600/40 border border-purple-400/30 text-[10px] font-mono text-purple-200 font-bold">
                  BSE '29
                </div>
              </div>
            </div>

            {/* Floating Technology Badges */}
            {floatingBadges.map((badge) => (
              <motion.div
                key={badge.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: badge.delay }}
                className={`hidden sm:flex absolute ${badge.pos} items-center gap-2 px-3 py-1.5 rounded-xl glass-panel text-xs font-semibold text-white border border-white/20 shadow-xl shadow-black/60 hover:scale-110 transition-transform duration-200 select-none z-20`}
              >
                <TechIcon name={badge.name} size={16} />
                <span className="text-[11px] tracking-tight">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
