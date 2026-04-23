import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../../data/mockData';
import { AnimatedFogBackground } from '../ui/AnimatedFogBackground';

export const HeroConcept3 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  return (
    <div className="relative w-full h-[700px] flex items-center py-10 px-6 overflow-hidden">
      <AnimatedFogBackground colors={heroSlides[current].fogColors} />

      <div className="max-w-7xl mx-auto w-full h-full grid grid-cols-12 gap-6 z-10">
        
        <div className="col-span-8 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-sm relative overflow-hidden flex items-center justify-center p-12 group">
          <div className="absolute top-12 left-12 z-20">
             <h1 className="text-7xl font-black text-gray-900 tracking-tighter mix-blend-color-burn opacity-90 transition-all">
               {heroSlides[current].title}
             </h1>
          </div>
          
          <div className="relative z-10 transform transition-all duration-700 ease-out group-hover:scale-110">
             <span className="text-[200px] filter drop-shadow-2xl">{heroSlides[current].img}</span>
          </div>

          <div className="absolute bottom-10 left-12 z-20 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-sm border border-white">
            <span className={`text-sm font-bold ${heroSlides[current].accent}`}>
              {heroSlides[current].badge}
            </span>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-6">
          
          <div className="flex-1 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-sm p-10 flex flex-col justify-center relative overflow-hidden">
            <div key={current} className="animate-in fade-in slide-in-from-right-4 duration-500">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 whitespace-pre-line leading-tight">
                {heroSlides[current].subtitle}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-8">
                {heroSlides[current].desc}
              </p>
            </div>
            <button className="mt-auto w-full py-4 bg-gray-900 text-white rounded-2xl font-bold hover:bg-black transition-colors flex justify-between items-center px-6 z-10 shadow-lg shadow-gray-900/20">
              자세히 알아보기 <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="h-40 bg-white/60 backdrop-blur-xl border border-white/40 rounded-[40px] shadow-sm p-8 flex flex-col justify-between">
             <div className="flex justify-between items-end">
               <span className="text-sm font-bold text-gray-500">Explore Lineups</span>
               <div className="flex gap-2">
                 <button 
                    onClick={() => setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1))}
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white/50 flex items-center justify-center hover:bg-white transition-colors"
                  >
                   <ChevronLeft className="w-4 h-4 text-gray-700" />
                 </button>
                 <button 
                    onClick={() => setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1))}
                    className="w-10 h-10 rounded-full border border-gray-200 bg-white/50 flex items-center justify-center hover:bg-white transition-colors"
                  >
                   <ChevronRight className="w-4 h-4 text-gray-700" />
                 </button>
               </div>
             </div>
             <div className="flex gap-2 w-full mt-4">
               {heroSlides.map((_, idx) => (
                 <div key={idx} className="h-1 flex-1 bg-gray-200 rounded-full overflow-hidden cursor-pointer relative" onClick={() => setCurrent(idx)}>
                    {current === idx && (
                      <div className="absolute top-0 left-0 h-full bg-gray-900 animate-[progress_5s_linear]"></div>
                    )}
                 </div>
               ))}
             </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};
