import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { menuData } from '../../data/mockData';

export const HeaderConcept2 = () => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const leaveTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (title: string) => {
    if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    if (isLocked && activeMenu !== title) setIsLocked(false);
    setActiveMenu(title);
  };

  const handleMouseLeave = () => {
    if (isLocked) return;
    leaveTimeoutRef.current = setTimeout(() => {
      setActiveMenu(null);
    }, 300);
  };

  const handleMenuClick = (title: string) => {
    if (isLocked && activeMenu === title) {
      setIsLocked(false);
      setActiveMenu(null);
    } else {
      setIsLocked(true);
      setActiveMenu(title);
    }
  };

  useEffect(() => {
    return () => {
      if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
    };
  }, []);

  const getActiveMenuData = () => {
    return menuData.find(m => m.title === activeMenu);
  };

  const activeMenuData = getActiveMenuData();

  return (
    <header 
      className="absolute top-0 left-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="flex justify-between items-center h-20">
          <div className="font-black text-2xl tracking-widest text-white">SAM4S</div>
          
          <ul className="flex space-x-12 h-full items-center">
            {menuData.map((menu, idx) => (
              <li 
                key={idx} 
                className="h-full flex items-center relative cursor-pointer" 
                onMouseEnter={() => handleMouseEnter(menu.title)}
                onClick={() => handleMenuClick(menu.title)}
              >
                <span className={`text-sm font-medium tracking-wide transition-colors ${activeMenu === menu.title ? 'text-white' : 'text-gray-400 hover:text-white'}`}>
                  {menu.title}
                </span>
                {activeMenu === menu.title && isLocked && (
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full" />
                )}
              </li>
            ))}
          </ul>
          <div className="w-24"></div>
        </div>
      </div>

      <AnimatePresence>
        {activeMenuData && (
          <motion.div 
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20, transition: { duration: 0.2 } }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute top-20 left-0 w-full bg-black/90 backdrop-blur-2xl border-b border-white/10 shadow-2xl"
            onMouseEnter={() => {
              if (leaveTimeoutRef.current) clearTimeout(leaveTimeoutRef.current);
            }}
          >
            <div className="max-w-7xl mx-auto px-6 py-10 flex gap-12">
              <div className="w-1/4">
                <h3 className="text-white font-bold text-lg mb-2">{activeMenuData.title} 라인업</h3>
                <p className="text-gray-400 text-sm leading-relaxed">최고의 성능과 안정성을 자랑하는 SAM4S의 {activeMenuData.title} 시스템을 만나보세요.</p>
              </div>
              <div className="w-3/4 grid grid-cols-3 gap-8">
                {activeMenuData.models.map(model => (
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
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
