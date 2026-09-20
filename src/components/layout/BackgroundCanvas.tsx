import React from 'react';

export const BackgroundCanvas: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Deep Cyber Grid */}
      <div className="absolute inset-0 cyber-grid opacity-60" />

      {/* Primary Ambient Glow Orbs */}
      <div 
        className="orb w-[550px] h-[550px] bg-purple-700/25 top-[-10%] left-[15%] animate-pulse-slow" 
        style={{ animationDuration: '8s' }}
      />
      <div 
        className="orb w-[650px] h-[650px] bg-sky-500/20 top-[35%] right-[-10%] animate-pulse-slow" 
        style={{ animationDuration: '10s' }}
      />
      <div 
        className="orb w-[500px] h-[500px] bg-indigo-600/20 bottom-[-10%] left-[30%] animate-pulse-slow" 
        style={{ animationDuration: '12s' }}
      />

      {/* Top Subtle Radial Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-appBg/60 to-appBg" />
    </div>
  );
};
