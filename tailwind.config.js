/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        /* ==================================================================
           THEME-AWARE PALETTE
           ------------------------------------------------------------------
           The UI is authored with plain utilities (text-white, bg-white/10,
           border-white/[0.08], text-slate-400, ...). Routing Tailwind's
           built-in `white` + `slate` scale through CSS variables makes every
           one of those usages follow the active theme -- including all
           hover / focus / group-hover / placeholder variants -- without
           duplicating a single class with a `dark:` prefix.

           Values live in src/index.css:
             :root           -> dark theme
             html:not(.dark) -> light theme
           ================================================================== */
        white: 'rgb(var(--c-white) / <alpha-value>)',
        slate: {
          100: 'rgb(var(--c-slate-100) / <alpha-value>)',
          200: 'rgb(var(--c-slate-200) / <alpha-value>)',
          300: 'rgb(var(--c-slate-300) / <alpha-value>)',
          400: 'rgb(var(--c-slate-400) / <alpha-value>)',
          500: 'rgb(var(--c-slate-500) / <alpha-value>)',
          600: 'rgb(var(--c-slate-600) / <alpha-value>)',
          700: 'rgb(var(--c-slate-700) / <alpha-value>)',
          800: 'rgb(var(--c-slate-800) / <alpha-value>)',
          900: 'rgb(var(--c-slate-900) / <alpha-value>)',
        },

        /* Theme-aware surfaces for modals, panels and popovers */
        appBg: 'rgb(var(--c-app-bg) / <alpha-value>)',
        surface: 'rgb(var(--c-surface) / <alpha-value>)',
        panel: 'rgb(var(--c-panel) / <alpha-value>)',
        panelAlt: 'rgb(var(--c-panel-alt) / <alpha-value>)',
        popover: 'rgb(var(--c-popover) / <alpha-value>)',

        /* ------------------------------------------------------------------
           Accent 300/400 shades are tuned for a dark canvas and only reach
           ~2:1 contrast on a light one, which is what made the interface look
           washed out and hard to read in light mode. Routing just these two
           shades per colour through variables lets the light theme substitute
           the 600/700 equivalent, so accents stay vivid and legible AND
           gradient-clipped text (bg-clip-text) is corrected too.

           The 500/600/700 shades are deliberately left untouched so the
           signature purple->indigo->sky CTAs keep their exact look.
           ------------------------------------------------------------------ */
        sky: {
          300: 'rgb(var(--c-sky-300) / <alpha-value>)',
          400: 'rgb(var(--c-sky-400) / <alpha-value>)',
        },
        purple: {
          300: 'rgb(var(--c-purple-300) / <alpha-value>)',
          400: 'rgb(var(--c-purple-400) / <alpha-value>)',
        },
        emerald: {
          300: 'rgb(var(--c-emerald-300) / <alpha-value>)',
          400: 'rgb(var(--c-emerald-400) / <alpha-value>)',
        },
        amber: {
          300: 'rgb(var(--c-amber-300) / <alpha-value>)',
          400: 'rgb(var(--c-amber-400) / <alpha-value>)',
        },
        rose: {
          300: 'rgb(var(--c-rose-300) / <alpha-value>)',
          400: 'rgb(var(--c-rose-400) / <alpha-value>)',
        },
        indigo: {
          300: 'rgb(var(--c-indigo-300) / <alpha-value>)',
          400: 'rgb(var(--c-indigo-400) / <alpha-value>)',
        },
        violet: {
          300: 'rgb(var(--c-violet-300) / <alpha-value>)',
          400: 'rgb(var(--c-violet-400) / <alpha-value>)',
        },
        blue: {
          400: 'rgb(var(--c-blue-400) / <alpha-value>)',
        },
        orange: {
          400: 'rgb(var(--c-orange-400) / <alpha-value>)',
        },
        teal: {
          300: 'rgb(var(--c-teal-300) / <alpha-value>)',
        },

        darkBg: '#080A12',
        darkSurface: '#0B1220',
        cardBg: 'rgba(255, 255, 255, 0.035)',
        cardBorder: 'rgba(255, 255, 255, 0.08)',
        accentPurple: '#7C3AED',
        accentCyan: '#38BDF8',
        brandBlue: '#2563EB',
        brandSuccess: '#22C55E',
        brandWarning: '#FACC15',
        textMain: '#F8FAFC',
        textMuted: '#94A3B8',
        glassBg: 'rgba(15, 17, 30, 0.72)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      boxShadow: {
        'glass-glow': '0 0 25px -5px rgba(124, 58, 237, 0.25), 0 0 15px -5px rgba(56, 189, 248, 0.2)',
        'cyan-glow': '0 0 30px -5px rgba(56, 189, 248, 0.3)',
        'purple-glow': '0 0 30px -5px rgba(124, 58, 237, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
