import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Copy, Check, MessageSquare } from 'lucide-react';
import { PERSONAL_INFO } from '../../data/portfolioData';
import confetti from 'canvas-confetti';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Please enter a message of at least 10 characters.';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
    });

    // Reset form after short delay
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="mb-14 scroll-mt-28">
      {/* Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-purple-400 mb-1">
          <Mail className="w-3.5 h-3.5" />
          <span>DIRECT INQUIRIES & COLLABORATION</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Get In Touch
        </h2>
        <p className="text-sm text-slate-400">
          Reach out for software engineering opportunities, frontend builds, or business intelligence projects
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Contact Information Cards (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-5 space-y-4"
        >
          {/* Email Card */}
          <div className="glass-card p-5 border border-white/10 flex items-center justify-between group">
            <div className="flex items-center gap-3.5 truncate">
              <div className="p-3 rounded-2xl bg-purple-500/15 border border-purple-500/25 text-purple-400 group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <div className="truncate">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Email Address</div>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="text-white font-semibold text-sm hover:text-sky-300 transition-colors truncate block"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors ml-2 flex-shrink-0"
              title="Copy Email"
            >
              {copiedField === 'email' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Phone Card */}
          <div className="glass-card p-5 border border-white/10 flex items-center justify-between group">
            <div className="flex items-center gap-3.5 truncate">
              <div className="p-3 rounded-2xl bg-sky-500/15 border border-sky-500/25 text-sky-400 group-hover:scale-110 transition-transform">
                <Phone className="w-5 h-5" />
              </div>
              <div className="truncate">
                <div className="text-[10px] text-slate-400 uppercase font-mono">Phone & WhatsApp</div>
                <a
                  href={`tel:${PERSONAL_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-white font-semibold text-sm font-mono hover:text-sky-300 transition-colors truncate block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            <button
              type="button"
              onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 transition-colors ml-2 flex-shrink-0"
              title="Copy Phone"
            >
              {copiedField === 'phone' ? (
                <Check className="w-4 h-4 text-emerald-400" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>

          {/* Location Card */}
          <div className="glass-card p-5 border border-white/10 flex items-center gap-3.5 group">
            <div className="p-3 rounded-2xl bg-emerald-500/15 border border-emerald-500/25 text-emerald-400 group-hover:scale-110 transition-transform">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] text-slate-400 uppercase font-mono">Primary Location</div>
              <div className="text-white font-semibold text-sm">{PERSONAL_INFO.location}</div>
            </div>
          </div>

          {/* Availability Status Card */}
          <div className="p-5 rounded-2xl bg-gradient-to-br from-purple-950/30 to-sky-950/20 border border-purple-500/20 text-xs text-slate-300 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              Available for Opportunities
            </div>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              Seeking opportunities to apply technical knowledge, gain professional experience, and contribute to real-world software engineering and data analytics projects.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Interactive Contact Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-7 glass-card p-6 sm:p-8 border border-white/15 rounded-3xl relative"
        >
          {isSubmitted ? (
            <div className="p-8 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-white">Message Form Handled Successfully!</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you for getting in touch. Your message details have been recorded. You can also reach Mohsin directly at{' '}
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sky-400 underline font-semibold">
                  {PERSONAL_INFO.email}
                </a>.
              </p>
              <button
                type="button"
                onClick={() => setIsSubmitted(false)}
                className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors mt-2"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                    <span>Your Name *</span>
                    {errors.name && <span className="text-rose-400 text-[10px] font-normal">{errors.name}</span>}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.name
                        ? 'border-rose-500/60 focus:ring-rose-400'
                        : 'border-white/10 focus:border-sky-500/60 focus:ring-sky-400/30'
                    }`}
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                    <span>Email Address *</span>
                    {errors.email && <span className="text-rose-400 text-[10px] font-normal">{errors.email}</span>}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                      errors.email
                        ? 'border-rose-500/60 focus:ring-rose-400'
                        : 'border-white/10 focus:border-sky-500/60 focus:ring-sky-400/30'
                    }`}
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>Subject *</span>
                  {errors.subject && <span className="text-rose-400 text-[10px] font-normal">{errors.subject}</span>}
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="Project inquiry / Collaboration opportunity"
                  className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all ${
                    errors.subject
                      ? 'border-rose-500/60 focus:ring-rose-400'
                      : 'border-white/10 focus:border-sky-500/60 focus:ring-sky-400/30'
                  }`}
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-300 flex items-center justify-between">
                  <span>Message *</span>
                  {errors.message && <span className="text-rose-400 text-[10px] font-normal">{errors.message}</span>}
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, timeline, or technical requirements..."
                  className={`w-full px-4 py-2.5 rounded-xl bg-white/[0.04] border text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 transition-all resize-none ${
                    errors.message
                      ? 'border-rose-500/60 focus:ring-rose-400'
                      : 'border-white/10 focus:border-sky-500/60 focus:ring-sky-400/30'
                  }`}
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-sky-500 text-[#FFFFFF] font-bold text-xs tracking-wider uppercase shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50 hover:scale-[1.01] active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 border border-white/20"
              >
                <Send className="w-4 h-4" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
