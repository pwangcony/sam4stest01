import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { menuData } from '../../data/mockData';

export const HeaderSlideDrillDown = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [lockedIdx, setLockedIdx] = useState<number | null>(null);
  const [activeModelId, setActiveModelId] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setLockedIdx(null);
        setActiveModelId(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = (idx: number) => {
    if (lockedIdx === idx) {
      setLockedIdx(null);
      setActiveModelId(null);
    } else {
      setLockedIdx(idx);
      setActiveModelId(null);
    }
  };

  const handleMouseEnter = (idx: number) => {
    setHoveredIdx(idx);
    if (lockedIdx !== null) {
      setLockedIdx(null);
      setActiveModelId(null);
    }
  };

  const handleNavMouseLeave = () => {
    setHoveredIdx(null);
  };

  return (
    <header ref={navRef} className="relative w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="font-black text-2xl tracking-tighter text-gray-900">SAM4S</div>

          <ul className="flex space-x-10 h-16 items-center" onMouseLeave={handleNavMouseLeave}>
            {menuData.map((menu, idx) => {
              const isOpen = hoveredIdx === idx || lockedIdx === idx;
              const isLocked = lockedIdx === idx;
              const activeModel = menu.models.find(m => m.id === activeModelId);

              return (
                <li
                  key={idx}
                  className="relative h-full flex items-center"
                  onMouseEnter={() => handleMouseEnter(idx)}
                >
                  <span
                    onClick={() => handleMenuClick(idx)}
                    className={`cursor-pointer font-bold text-sm transition-colors select-none ${
                      isLocked ? 'text-black underline underline-offset-4' : isOpen ? 'text-black' : 'text-gray-600 hover:text-black'
                    }`}
                  >
                    {menu.title}
                  </span>

                  <div
                    className={`absolute top-16 -left-20 w-[650px] bg-white shadow-[0_20px_40px_rgba(0,0,0,0.12)] rounded-2xl transition-all duration-300 overflow-hidden flex border border-gray-100 ${
                      isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="w-[35%] bg-[#f8fafc] p-6 flex flex-col items-center justify-center text-center border-r border-gray-100 shrink-0 z-10 relative overflow-hidden">
                      <div className="text-7xl mb-4 relative z-10 hover:scale-110 transition-transform duration-500 cursor-pointer">{menu.models[0].img}</div>
                      <h5 className="font-extrabold text-sm text-gray-900 relative z-10">Best Choice</h5>
                      <p className="text-[11px] text-gray-500 mt-2 relative z-10">가장 사랑받는 <br />{menu.title} 라인업</p>
                    </div>

                    <div className="w-[65%] relative h-[360px] overflow-hidden bg-white">
                      <div className={`absolute top-0 left-0 w-full h-full flex flex-col transition-transform duration-300 ease-in-out ${activeModelId ? '-translate-x-full' : 'translate-x-0'}`}>
                        <div className="p-4 pb-2 shrink-0 bg-white z-10">
                          <h6 className="text-[10px] font-black text-gray-400 uppercase tracking-widest">라인업 선택</h6>
                        </div>
                        <div className="px-3 pb-3 flex-1 overflow-y-auto custom-scrollbar">
                          {menu.models.map((model) => (
                            <div
                              key={model.id}
                              onClick={() => setActiveModelId(model.id)}
                              className="px-4 py-3.5 mb-1 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors flex justify-between items-center group/item"
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-xl opacity-70 group-hover/item:opacity-100 group-hover/item:scale-110 transition-all">{model.img}</span>
                                <div>
                                  <h4 className="font-bold text-sm text-gray-800">{model.name}</h4>
                                  <p className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{model.desc}</p>
                                </div>
                              </div>
                              <ChevronRight className="w-4 h-4 text-gray-300 group-hover/item:text-black group-hover/item:translate-x-1 transition-all" />
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className={`absolute top-0 left-0 w-full h-full bg-white flex flex-col transition-transform duration-300 ease-in-out ${activeModelId ? 'translate-x-0' : 'translate-x-full'}`}>
                        <div
                          className="p-4 border-b border-gray-100 flex items-center gap-2 cursor-pointer hover:bg-gray-50 transition-colors shrink-0"
                          onClick={() => setActiveModelId(null)}
                        >
                          <ChevronLeft className="w-5 h-5 text-gray-500" />
                          <span className="text-sm font-bold text-gray-900">{activeModel?.name}</span>
                        </div>
                        <div className="px-3 py-2 flex-1 overflow-y-auto custom-scrollbar">
                          <p className="text-[10px] font-semibold text-gray-400 px-3 mt-2 mb-3">세부 옵션</p>
                          {activeModel?.subItems.map((sub, sIdx) => (
                            <div key={sIdx} className="px-4 py-3.5 mb-1 hover:bg-gray-50 rounded-xl cursor-pointer transition-colors flex justify-between items-center group/sub">
                              <span className="text-sm font-medium text-gray-700 group-hover/sub:text-black">{sub.name}</span>
                              <span className="text-[11px] font-bold text-gray-400 group-hover/sub:text-black border border-gray-200 px-2 py-1 rounded-md">{sub.price}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="w-24 flex justify-end" />
        </div>
      </div>
    </header>
  );
};
