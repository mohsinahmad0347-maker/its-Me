import React from 'react';
import { motion } from 'framer-motion';
import { Share2, ArrowUpRight } from 'lucide-react';
import { SOCIAL_PROFILES } from '../../data/portfolioData';
import { GitHubIcon, LinkedInIcon, FacebookIcon } from '../icons/TechIcons';

export const SocialProfiles: React.FC = () => {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'GitHub':
        return <GitHubIcon size={24} className="text-white" />;
      case 'LinkedIn':
        return <LinkedInIcon size={24} className="text-[#0A66C2]" />;
      case 'Facebook':
        return <FacebookIcon size={24} className="text-[#1877F2]" />;
      default:
        return <Share2 className="w-6 h-6 text-white" />;
    }
  };

  return (
    <section id="social-links" className="mb-14 scroll-mt-28">
      {/* Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold uppercase tracking-wider text-sky-400 mb-1">
          <Share2 className="w-3.5 h-3.5" />
          <span>OFFICIAL CHANNELS & PROFILES</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Social Profiles & Networks
        </h2>
        <p className="text-sm text-slate-400">
          Connect with Mohsin Ahmad across verified developer, professional, and social platforms
        </p>
      </div>

      {/* 3 Dedicated Social Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SOCIAL_PROFILES.map((profile, index) => (
          <motion.div
            key={profile.platform}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="glass-card glass-card-hover p-6 rounded-3xl flex flex-col justify-between group border border-white/10"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-2xl bg-white/[0.05] border border-white/10 group-hover:scale-110 transition-transform duration-200">
                  {getSocialIcon(profile.platform)}
                </div>
                <span className="text-xs font-mono text-slate-400">{profile.handle}</span>
              </div>

              <h3 className="text-xl font-bold text-white group-hover:text-sky-300 transition-colors">
                {profile.platform}
              </h3>

              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                "{profile.title}"
              </p>
            </div>

            <div className="pt-6 mt-4 border-t border-white/[0.06]">
              <a
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-gradient-to-r hover:from-purple-600 hover:to-sky-500 text-white hover:text-[#FFFFFF] text-xs font-bold transition-all duration-200 flex items-center justify-center gap-2 border border-white/10 group-hover:border-transparent group-hover:shadow-md group-hover:shadow-purple-600/30"
              >
                <span>Visit {profile.platform} Profile</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
