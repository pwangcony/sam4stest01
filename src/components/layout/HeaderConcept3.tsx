import React, { useState, useRef, useEffect } from 'react';
import { Search } from 'lucide-react';
import { menuData } from '../../data/mockData';

export const HeaderConcept3 = () => {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [lockedMenu, setLockedMenu] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const activeMenu = hoveredMenu ?? lockedMenu;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
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
    <div className="absolute -top-8 left-0 w-full z-50 flex justify-center px-6 pointer-events-none">
      <header
        ref={headerRef}
        className="w-full max-w-5xl bg-white/80 backdrop-blur-xl border border-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.08)] rounded-full pointer-events-auto transition-all duration-300"
        onMouseLeave={() => setHoveredMenu(null)}
      >
        <div className="flex justify-between items-center h-16 px-8 relative">
          <div className="font-black text-xl tracking-tighter text-gray-900">SAM4S</div>

          <ul className="flex space-x-8 h-full items-center">
            {menuData.map((menu, idx) => (
              <li
                key={idx}
                className="h-full flex items-center"
                onMouseEnter={() => { setHoveredMenu(menu.title); setLockedMenu(null); }}
              >
                <span
                  onClick={() => handleMenuClick(menu.title)}
                  className={`cursor-pointer text-sm font-bold transition-colors select-none ${
                    lockedMenu === menu.title
                      ? 'text-black underline underline-offset-4'
                      : activeMenu === menu.title
                      ? 'text-black'
                      : 'text-gray-700 hover:text-black'
                  }`}
                >
                  {menu.title}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <Search className="w-4 h-4 text-gray-600 cursor-pointer hover:text-black" />
          </div>

          {activeMenu && (
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] bg-white/[0.98] backdrop-blur-2xl border border-gray-100 shadow-[0_30px_60px_rgb(0,0,0,0.12)] rounded-3xl p-8 animate-in fade-in zoom-in-95 duration-200">
              <div className="grid grid-cols-3 gap-6">
                {menuData.find(m => m.title === activeMenu)?.models.map(model => (
                  <div key={model.id} className="bg-white/50 rounded-2xl p-4 hover:bg-white transition-colors cursor-pointer border border-transparent hover:border-gray-100 shadow-sm hover:shadow-md">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl bg-gray-50 p-2 rounded-xl">{model.img}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 text-sm">{model.name}</h4>
                        <p className="text-[10px] text-gray-500 line-clamp-1">{model.desc}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {model.subItems.slice(0, 3).map((sub, sIdx) => (
                        <span key={sIdx} className="text-[10px] font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded-md">
                          {sub.name}
                        </span>
                      ))}
                      {model.subItems.length > 3 && (
                        <span className="text-[10px] font-medium bg-gray-50 text-gray-400 px-2 py-1 rounded-md">
                          +{model.subItems.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};
