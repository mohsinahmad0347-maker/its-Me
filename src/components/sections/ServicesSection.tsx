import React from 'react';
import { motion } from 'framer-motion';
import {
  Briefcase,
  Code2,
  Smartphone,
  Sparkles,
  LayoutDashboard,
  BarChart3,
  FileSpreadsheet,
  PieChart,
  TrendingUp,
  Target,
  ArrowRight,
} from 'lucide-react';
import { SERVICES } from '../../data/portfolioData';

export const ServicesSection: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return <Code2 className="w-5 h-5 text-purple-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-sky-400" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-amber-400" />;
      case 'LayoutDashboard':
        return <LayoutDashboard className="w-5 h-5 text-indigo-400" />;
      case 'BarChart3':
        return <BarChart3 className="w-5 h-5 text-emerald-400" />;
      case 'FileSpreadsheet':
        return <FileSpreadsheet className="w-5 h-5 text-emerald-400" />;
      case 'PieChart':
        return <PieChart className="w-5 h-5 text-amber-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-sky-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-purple-400" />;
      default:
        return <Briefcase className="w-5 h-5 text-white" />;
    }
  };

  return (
    <section id="services" className="mb-14 scroll-mt-28">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-400 mb-1">
          <Briefcase className="w-3.5 h-3.5" />
          <span>CAPABILITIES & OFFERINGS</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Specialized Services
        </h2>
        <p className="text-sm text-slate-400">
          Professional technical solutions spanning modern web engineering and data intelligence
        </p>
      </div>

      {/* Services Grid (3 columns on desktop) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="glass-card glass-card-hover p-5 sm:p-6 flex flex-col justify-between group border border-white/[0.08]"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/[0.08] group-hover:scale-110 transition-transform duration-200">
                  {getIcon(service.icon)}
                </div>
                <span className="text-[10px] font-mono text-slate-500">0{index + 1}</span>
              </div>

              <h3 className="text-lg font-bold text-white group-hover:text-sky-300 transition-colors mb-2">
                {service.title}
              </h3>

              <p className="text-xs text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </div>

            <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-[11px] font-mono text-slate-400">
                Tech: <span className="text-purple-300 font-semibold">{service.tech}</span>
              </span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 opacity-60 group-hover:opacity-100" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
