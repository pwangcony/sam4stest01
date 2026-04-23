import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { menuData } from '../../data/mockData';

export const HeaderConcept2 = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [lockedMenu, setLockedMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);

  const activeMenu = hoveredMenu ?? lockedMenu;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setLockedMenu(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMenuClick = (title: string) => {
    setLockedMenu(prev => (prev === title ? null : title));
  };

  return (
    <header ref={navRef} className="absolute top-0 left-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          <div className="font-black text-2xl tracking-widest text-white">SAM4S</div>

          <ul className="flex space-x-12 h-full items-center" onMouseLeave={() => setHoveredMenu(null)}>
            {menuData.map((menu, idx) => (
              <li
                key={idx}
                className="h-full flex items-center"
                onMouseEnter={() => { setHoveredMenu(menu.title); setLockedMenu(null); }}
              >
                <span
                  onClick={() => handleMenuClick(menu.title)}
                  className={`cursor-pointer text-sm font-medium tracking-wide transition-colors select-none ${
                    lockedMenu === menu.title
                      ? 'text-white underline underline-offset-4'
                      : activeMenu === menu.title
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {menu.title}
                </span>

                {activeMenu === menu.title && (
                  <div className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
                    <div className="max-w-7xl mx-auto px-6 py-10 flex gap-12">
                      <div className="w-1/4">
                        <h3 className="text-white font-bold text-lg mb-2">{menu.title} 라인업</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">최고의 성능과 안정성을 자랑하는 SAM4S의 {menu.title} 시스템을 만나보세요.</p>
                      </div>
                      <div className="w-3/4 grid grid-cols-3 gap-8">
                        {menu.models.map(model => (
                          <div key={model.id} className="group cursor-pointer">
                            <div className="flex items-center gap-3 mb-3">
                              <span className="text-2xl opacity-80 group-hover:opacity-100 transition-opacity">{model.img}</span>
                              <h4 className="text-white font-bold group-hover:text-blue-400 transition-colors">{model.name}</h4>
                            </div>
                            <ul className="space-y-2 pl-9">
                              {model.subItems.map((sub, sIdx) => (
                                <li key={sIdx} className="text-gray-500 text-sm hover:text-white transition-colors flex items-center gap-1">
                                  <ChevronRight className="w-3 h-3" /> {sub.name}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="w-24 flex justify-end" />
        </div>
      </div>
    </header>
  );
};
