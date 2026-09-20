import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

interface DownloadCVSectionProps {
  onOpenCVModal: () => void;
}

export const DownloadCVSection: React.FC<DownloadCVSectionProps> = ({ onOpenCVModal }) => {
  const handleDownload = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    const link = document.createElement('a');
    link.href = PERSONAL_INFO.cvPdf;
    link.download = 'Mohsin_Ahmad_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="download-cv" className="mb-14 scroll-mt-28">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="glass-card p-8 sm:p-10 border border-purple-500/30 relative overflow-hidden shadow-2xl shadow-purple-950/40"
      >
        {/* Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 via-sky-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left info */}
          <div className="space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-xs font-mono font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>OFFICIAL VERIFIED CURRICULUM VITAE</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              DOWNLOAD MY CV
            </h2>

            <div className="space-y-1">
              <div className="text-lg sm:text-xl font-bold text-white">
                {PERSONAL_INFO.name}
              </div>
              <div className="text-sm font-semibold text-sky-400">
                {PERSONAL_INFO.title}
              </div>
              <div className="text-xs text-slate-400">
                Software Engineering Student • Islamia College Peshawar • GPA 4.00
              </div>
            </div>

            <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Access the complete curriculum vitae documenting formal education at Islamia College Peshawar, frontend engineering expertise, Microsoft Excel & Power BI analytics workflows, and 2026 production web experiences.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-400 font-mono">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Format: PDF
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Status: 2026 Verified
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Zero Python Verified
              </span>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto flex-shrink-0">
            <button
              type="button"
              onClick={onOpenCVModal}
              className="w-full sm:w-auto px-6 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] text-white font-bold text-sm border border-white/15 hover:border-sky-400/40 transition-all duration-200 flex items-center justify-center gap-2.5 shadow-sm active:scale-95"
            >
              <Eye className="w-4 h-4 text-sky-400" />
              <span>VIEW CV</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="w-full sm:w-auto px-7 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 text-[#FFFFFF] font-bold text-sm shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2.5 border border-white/20"
            >
              <Download className="w-4 h-4" />
              <span>DOWNLOAD CV</span>
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
