import React from 'react';

export const AnimatedFogBackground = ({ colors }: { colors: string[] }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-slate-50">
      <div className={`absolute top-[-10%] left-[-20%] w-[80vw] h-[80vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-fog-1 ${colors[0]}`}></div>
      <div className={`absolute top-[20%] right-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-fog-2 ${colors[1]}`}></div>
      <div className={`absolute bottom-[-20%] left-[10%] w-[90vw] h-[90vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-50 animate-fog-3 ${colors[2]}`}></div>
      
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>
    </div>
  );
};
