import React, { useState, useEffect } from 'react';

export default function NavIndicator({ data }) {
  const [activeId, setActiveId] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      let currentId = null;
      
      data.forEach(item => {
        const el = document.getElementById(`career-${item.id}`);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= -windowHeight * 0.2 && rect.top <= windowHeight * 0.7) {
            currentId = item.id;
          }
        }
      });
      
      if (currentId) setActiveId(currentId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [data]);

  const scrollToItem = (id) => {
    const el = document.getElementById(`career-${id}`);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { offset: -100, duration: 1.5 });
      } else {
        const yOffset = -100; 
        const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="fixed top-1/2 right-6 transform -translate-y-1/2 z-50 hidden xl:flex flex-col gap-4">
      {data.map(item => (
        <button
          key={item.id}
          onClick={() => scrollToItem(item.id)}
          className="group relative flex items-center justify-end transition-all duration-300 w-full"
          title={item.company}
        >
          <span className={`mr-6 whitespace-nowrap text-[11px] font-bold tracking-wider transition-all duration-300 
            ${activeId === item.id ? 'text-blue-600 opacity-100 translate-x-0' : 'text-slate-400 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0'}`}>
            {item.company}
          </span>
          <div className={`absolute right-0 w-2.5 h-2.5 rounded-full transition-all duration-500 ease-out ${activeId === item.id ? 'bg-blue-500 scale-[1.5] shadow-sm' : 'bg-slate-200 group-hover:bg-slate-300'}`} />
        </button>
      ))}
    </div>
  );
}
