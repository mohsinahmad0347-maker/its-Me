import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, X, Moon, Sun, Sidebar, Zap, Sliders, Eye, MousePointer } from 'lucide-react';

interface SettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
  isSidebarCollapsed: boolean;
  toggleSidebar: () => void;
  customCursorEnabled: boolean;
  setCustomCursorEnabled: (enabled: boolean) => void;
  reducedMotion: boolean;
  setReducedMotion: (reduced: boolean) => void;
  glassBlurLevel: string;
  setGlassBlurLevel: (level: string) => void;
}

export const SettingsDrawer: React.FC<SettingsDrawerProps> = ({
  isOpen,
  onClose,
  isDark,
  toggleTheme,
  setTheme,
  isSidebarCollapsed,
  toggleSidebar,
  customCursorEnabled,
  setCustomCursorEnabled,
  reducedMotion,
  setReducedMotion,
  glassBlurLevel,
  setGlassBlurLevel,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Drawer Panel */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 250 }}
          className="relative w-full max-w-sm h-full bg-popover/95 border-l border-white/15 shadow-2xl backdrop-blur-2xl flex flex-col z-10"
        >
          {/* Header */}
          <div className="p-5 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-purple-600/20 text-purple-300 border border-purple-500/30">
                <Settings className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">System Preferences</h3>
                <p className="text-[11px] text-slate-400 font-mono">Portfolio OS Configuration</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Controls Body */}
          <div className="flex-1 overflow-y-auto p-5 space-y-6 scrollbar-thin text-xs">
            {/* 1. Theme Setting */}
            <div className="space-y-2">
              <label className="font-semibold text-white uppercase font-mono tracking-wider text-[11px] flex items-center gap-1.5">
                <Sun className="w-3.5 h-3.5 text-amber-400" />
                <span>Display Theme</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => setTheme(true)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    isDark
                      ? 'bg-purple-600/20 border-purple-500 text-white font-bold'
                      : 'bg-white/[0.03] border-white/10 text-slate-400'
                  }`}
                >
                  Dark Cyber
                </button>
                <button
                  type="button"
                  onClick={() => setTheme(false)}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    !isDark
                      ? 'bg-purple-600/20 border-purple-500 text-white font-bold'
                      : 'bg-white/[0.03] border-white/10 text-slate-400'
                  }`}
                >
                  Light Daylight
                </button>
              </div>
            </div>

            {/* 2. Sidebar Default State */}
            <div className="space-y-2">
              <label className="font-semibold text-white uppercase font-mono tracking-wider text-[11px] flex items-center gap-1.5">
                <Sidebar className="w-3.5 h-3.5 text-sky-400" />
                <span>Floating Sidebar State</span>
              </label>
              <div className="grid grid-cols-2 gap-2">
                <button
                  type="button"
                  onClick={() => isSidebarCollapsed && toggleSidebar()}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    !isSidebarCollapsed
                      ? 'bg-sky-500/20 border-sky-500 text-white font-bold'
                      : 'bg-white/[0.03] border-white/10 text-slate-400'
                  }`}
                >
                  Expanded (260px)
                </button>
                <button
                  type="button"
                  onClick={() => !isSidebarCollapsed && toggleSidebar()}
                  className={`p-2.5 rounded-xl border text-center transition-all ${
                    isSidebarCollapsed
                      ? 'bg-sky-500/20 border-sky-500 text-white font-bold'
                      : 'bg-white/[0.03] border-white/10 text-slate-400'
                  }`}
                >
                  Collapsed (78px)
                </button>
              </div>
            </div>

            {/* 3. Custom Cursor Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <MousePointer className="w-4 h-4 text-purple-400" />
                <div>
                  <div className="font-bold text-white">Custom Glowing Cursor</div>
                  <div className="text-[10px] text-slate-400">Desktop interactive ring dot</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setCustomCursorEnabled(!customCursorEnabled)}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  customCursorEnabled ? 'bg-sky-500' : 'bg-slate-600'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-[#FFFFFF] transition-transform ${
                    customCursorEnabled ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* 4. Reduced Motion Toggle */}
            <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-amber-400" />
                <div>
                  <div className="font-bold text-white">Reduced Motion</div>
                  <div className="text-[10px] text-slate-400">Minimize animations and transitions</div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setReducedMotion(!reducedMotion)}
                className={`w-11 h-6 rounded-full transition-colors relative ${
                  reducedMotion ? 'bg-sky-500' : 'bg-slate-600'
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-[#FFFFFF] transition-transform ${
                    reducedMotion ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </button>
            </div>

            {/* 5. Glass Blur Intensity */}
            <div className="space-y-2">
              <label className="font-semibold text-white uppercase font-mono tracking-wider text-[11px] flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-emerald-400" />
                <span>Glassmorphism Blur Filter</span>
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['16px', '24px', '32px'].map((blur) => (
                  <button
                    key={blur}
                    type="button"
                    onClick={() => setGlassBlurLevel(blur)}
                    className={`p-2 rounded-xl border text-center transition-all ${
                      glassBlurLevel === blur
                        ? 'bg-emerald-500/20 border-emerald-500 text-white font-bold'
                        : 'bg-white/[0.03] border-white/10 text-slate-400'
                    }`}
                  >
                    {blur}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 bg-appBg/60 text-center">
            <span className="text-[10px] font-mono text-slate-500">
              Preferences automatically saved in localStorage
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
