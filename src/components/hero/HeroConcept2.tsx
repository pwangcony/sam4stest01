import React, { useState, useEffect } from 'react';
import { heroSlides } from '../../data/mockData';

export const HeroConcept2 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[700px] overflow-hidden flex items-center justify-center">
      {heroSlides.map((slide, idx) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 ${slide.darkBg} transition-opacity duration-1000 ease-in-out ${idx === current ? 'opacity-100 z-0' : 'opacity-0 z-0'}`}
        />
      ))}
      
      <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-10" style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")'}}></div>

      <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center z-20 text-center mt-10">
         <span className="px-4 py-1.5 text-xs font-bold tracking-[0.2em] text-white/70 border border-white/20 rounded-full bg-white/5 backdrop-blur-md mb-8">
           {heroSlides[current].badge}
         </span>
         
         <div className="relative mb-10 w-48 h-48 flex justify-center items-center">
            <div className="absolute inset-0 bg-white/20 blur-[80px] rounded-full mix-blend-screen animate-pulse"></div>
            <span className="text-[120px] relative z-10 transform scale-110 drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">{heroSlides[current].img}</span>
         </div>

         <h1 className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60 tracking-tight mb-4 transition-all duration-500">
           {heroSlides[current].title}
         </h1>
         <p className="text-xl text-white/60 font-light max-w-xl mx-auto leading-relaxed mb-10">
           {heroSlides[current].desc}
         </p>

         <div className="flex gap-4">
            <button className="px-10 py-4 bg-white text-black text-sm font-bold rounded-full hover:bg-gray-100 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]">
              지금 구매하기
            </button>
         </div>
      </div>

      <div className="absolute right-10 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-20">
        {heroSlides.map((_, idx) => (
           <button 
             key={idx}
             onClick={() => setCurrent(idx)}
             className={`w-3 transition-all duration-300 rounded-full border border-white/20 flex items-center justify-center relative overflow-hidden backdrop-blur-md
               ${current === idx ? 'h-16 bg-white/20' : 'h-10 bg-white/5 hover:bg-white/10'}`}
           >
             {current === idx && <div className="absolute top-0 left-0 w-full bg-white rounded-full animate-[progress-vertical-down_5s_linear]"></div>}
           </button>
        ))}
      </div>
    </div>
  );
};
