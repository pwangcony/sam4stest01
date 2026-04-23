import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { heroSlides } from '../../data/mockData';
import { AnimatedFogBackground } from '../ui/AnimatedFogBackground';

export const HeroConcept1 = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);

  const nextSlide = () => setCurrent((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrent((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));

  return (
    <div className="relative w-full h-[700px] overflow-hidden flex items-center">
      <AnimatedFogBackground colors={heroSlides[current].fogColors} />

      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between z-10">
        
        <div className="w-1/2 pr-12">
          <div className="overflow-hidden">
            <span className={`inline-block px-3 py-1 text-[10px] font-black tracking-widest uppercase rounded-full bg-white/50 backdrop-blur-md text-gray-600 mb-6 transition-all duration-500 transform ${current !== null ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
              {heroSlides[current].badge}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 leading-tight mb-4 tracking-tighter">
             {heroSlides[current].title}
          </h1>
          <h2 className="text-2xl text-gray-700 font-medium whitespace-pre-line leading-snug mb-6">
            {heroSlides[current].subtitle}
          </h2>
          <p className="text-gray-600 text-base leading-relaxed mb-10 max-w-md">
            {heroSlides[current].desc}
          </p>
          <div className="flex items-center gap-4">
            <button className="px-8 py-4 bg-gray-900 text-white text-sm font-bold rounded-full hover:bg-black transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-gray-900/20">
              자세히 보기 <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-8 py-4 bg-white/60 backdrop-blur-md text-gray-900 text-sm font-bold rounded-full hover:bg-white transition-colors border border-white/40">
              문의하기
            </button>
          </div>
        </div>

        <div className="w-1/2 relative h-[500px] flex justify-center items-center">
          {heroSlides.map((slide, idx) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ease-in-out
                ${idx === current ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-20 scale-95 pointer-events-none'}`}
            >
               <div className="relative w-80 h-96 bg-white/40 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl flex items-center justify-center transform group-hover:-translate-y-2 transition-transform duration-500 z-10">
                 <span className="text-[120px] filter drop-shadow-xl animate-pulse-slow">{slide.img}</span>
               </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-12 right-12 flex gap-2 z-20">
        <button onClick={prevSlide} className="w-12 h-12 rounded-full border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-sm text-gray-700">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button onClick={nextSlide} className="w-12 h-12 rounded-full border border-white/60 bg-white/40 backdrop-blur-md flex items-center justify-center hover:bg-white transition-colors shadow-sm text-gray-700">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      <div className="absolute bottom-12 left-12 flex gap-2 z-20 items-center">
        {heroSlides.map((_, idx) => (
          <div 
            key={idx} 
            className={`h-1.5 rounded-full transition-all duration-500 ${current === idx ? 'w-8 bg-gray-900' : 'w-2 bg-gray-300 cursor-pointer'}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
        <span className="ml-4 text-xs font-bold text-gray-500">0{current + 1} / 0{heroSlides.length}</span>
      </div>
    </div>
  );
};
