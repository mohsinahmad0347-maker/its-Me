import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bell, Check, Clock, Sparkles, FolderPlus, Cpu, FileText, X } from 'lucide-react';

interface NotificationDropdownProps {
  isOpen: boolean;
  onClose: () => void;
  onClear: () => void;
}

export const NotificationDropdown: React.FC<NotificationDropdownProps> = ({
  isOpen,
  onClose,
  onClear,
}) => {
  if (!isOpen) return null;

  const notifications = [
    {
      id: '1',
      title: 'Portfolio Updated',
      desc: 'Next-Gen Glassmorphism telemetry and dashboard modules deployed.',
      time: 'Just now',
      icon: Sparkles,
      color: 'text-purple-400 bg-purple-500/10 border-purple-500/20',
    },
    {
      id: '2',
      title: 'New Project Added',
      desc: 'Be Careful, Grand Thief Autos, Vectoria, You Can, and Razdar live.',
      time: '1 hour ago',
      icon: FolderPlus,
      color: 'text-sky-400 bg-sky-500/10 border-sky-500/20',
    },
    {
      id: '3',
      title: 'Technology Added',
      desc: 'Microsoft Power BI and Excel interactive business intelligence pipelines updated.',
      time: '2 hours ago',
      icon: Cpu,
      color: 'text-amber-400 bg-amber-500/10 border-amber-500/20',
    },
    {
      id: '4',
      title: 'CV Updated',
      desc: 'Official 2026 Curriculum Vitae verified and ready for direct download.',
      time: 'Today',
      icon: FileText,
      color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
    },
  ];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-start justify-end p-4 pt-20 md:pr-12 pointer-events-none">
        {/* Click outside backdrop */}
        <div
          onClick={onClose}
          className="fixed inset-0 bg-black/40 backdrop-blur-[2px] pointer-events-auto"
        />

        {/* Dropdown Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-sm rounded-2xl bg-popover/95 border border-white/20 shadow-2xl shadow-black/80 backdrop-blur-2xl overflow-hidden pointer-events-auto z-10"
        >
          {/* Header */}
          <div className="p-4 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <Bell className="w-4 h-4 text-sky-400" />
              <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                System Telemetry Alerts
              </h4>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* List */}
          <div className="p-2 space-y-1.5 max-h-[350px] overflow-y-auto scrollbar-thin">
            {notifications.map((n) => {
              const Icon = n.icon;
              return (
                <div
                  key={n.id}
                  className="p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.04] transition-all text-xs flex items-start gap-3 group"
                >
                  <div className={`p-2 rounded-xl border flex-shrink-0 ${n.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="font-bold text-white truncate">{n.title}</span>
                      <span className="text-[10px] font-mono text-slate-500 flex-shrink-0">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">
                      {n.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer */}
          <div className="p-3 border-t border-white/10 bg-appBg/45 flex items-center justify-between text-[11px]">
            <span className="text-slate-400 font-mono">Demo Activity Feed</span>
            <button
              type="button"
              onClick={onClear}
              className="text-sky-400 hover:underline font-semibold"
            >
              Mark all as read
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
