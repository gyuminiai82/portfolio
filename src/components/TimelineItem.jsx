import React, { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

export default function TimelineItem({ item, index }) {
  const isEven = index % 2 === 0;
  const cardRef = useRef(null);
  const galleryRef = useRef(null);

  // Gallery Drag State
  const [isDraggingGallery, setIsDraggingGallery] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleGalleryMouseDown = (e) => {
    setIsDraggingGallery(true);
    setStartX(e.pageX - e.currentTarget.offsetLeft);
    setScrollLeft(e.currentTarget.scrollLeft);
  };
  const handleGalleryMouseLeave = () => {
    setIsDraggingGallery(false);
    setIsHovered(false);
  };
  const handleGalleryMouseUp = () => setIsDraggingGallery(false);
  const handleGalleryMouseMove = (e) => {
    if (!isDraggingGallery) return;
    e.preventDefault();
    const x = e.pageX - e.currentTarget.offsetLeft;
    const walk = (x - startX) * 2;
    e.currentTarget.scrollLeft = scrollLeft - walk;
  };

  // Continuous Auto-rolling gallery
  useEffect(() => {
    if (!item.projects || item.projects.length <= 1) return;
    if (isDraggingGallery || isHovered) return;

    const interval = setInterval(() => {
      if (galleryRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = galleryRef.current;
        const maxScroll = scrollWidth - clientWidth;
        
        if (maxScroll <= 0) return; // No need to scroll if it fits

        // If reached the end, snap back to start
        if (scrollLeft >= maxScroll - 1) {
          galleryRef.current.scrollLeft = 0;
        } else {
          galleryRef.current.scrollBy({ left: 1 }); // scrollBy is often more reliable than scrollLeft += 1 across different browser scaling settings
        }
      }
    }, 20); // 50 fps

    return () => clearInterval(interval);
  }, [item.projects, isDraggingGallery, isHovered]);

  // 3D Tilt & Spotlight State
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for 3D tilt
  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), springConfig);
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), springConfig);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    
    // For 3D Tilt (-0.5 to 0.5)
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relX);
    y.set(relY);

    // For Spotlight (absolute px)
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const cardEntrance = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
    }
  };

  const galleryEntrance = {
    hidden: { opacity: 0, x: isEven ? -50 : 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }
    }
  };

  const markerEntrance = {
    hidden: { scale: 0, opacity: 0, x: "-50%" },
    visible: { scale: 1, opacity: 1, x: "-50%", transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.4 } }
  };

  const projectGallery = item.projects && item.projects.length > 0 ? (
    <div className="w-full">
      <h5 className="text-[13px] font-bold text-slate-400 mb-4 uppercase tracking-widest flex items-center justify-between px-2">
        <span>주요 프로젝트 화면</span>
        {item.projects.length > 1 && (
          <span className="text-[10px] text-blue-400 font-normal normal-case">좌우로 드래그 해보세요</span>
        )}
      </h5>
      
      <div className="relative w-full -mx-2 px-2">
        {/* Fading Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/0 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/0 to-transparent z-10 pointer-events-none"></div>

        <div 
          ref={galleryRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseDown={handleGalleryMouseDown}
          onMouseLeave={handleGalleryMouseLeave}
          onMouseUp={handleGalleryMouseUp}
          onMouseMove={handleGalleryMouseMove}
          className="flex w-full overflow-x-auto scrollbar-hide py-4 cursor-grab active:cursor-grabbing space-x-4 px-2"
        >
          {item.projects.map((proj, idx) => (
            <div key={idx} className={`relative group/img flex-shrink-0 ${proj.isWide ? 'w-64 md:w-96' : 'w-36 md:w-44'} h-48 md:h-56 rounded-2xl overflow-hidden border border-slate-100 shadow-sm cursor-pointer hover:border-slate-300 transition-colors duration-300 bg-white flex items-center justify-center p-1 hover:shadow-md select-none`}>
              <img 
                src={proj.image} 
                alt={proj.name} 
                className="w-full h-full object-contain opacity-70 group-hover/img:opacity-100 transition-all duration-500 rounded-md pointer-events-none"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />
              <div className="hidden absolute inset-0 flex items-center justify-center text-slate-400 text-xs text-center p-4">
                이미지 필요<br/>({proj.image.split('/').pop()})
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex items-end p-4 pointer-events-none">
                <span className="text-sm font-bold text-white drop-shadow-md transform translate-y-2 group-hover/img:translate-y-0 transition-transform duration-300">
                  {proj.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  ) : null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
      id={`career-${item.id}`}
      className="relative flex items-start justify-between md:odd:flex-row-reverse group mb-20 w-full"
    >
      {/* Central Marker */}
      <motion.div variants={markerEntrance} className="absolute left-[36px] md:left-1/2 top-10 md:top-14 flex items-center justify-center z-20">
        <div className="w-2.5 h-2.5 md:w-3.5 md:h-3.5 rounded-full bg-white shadow-sm border-[3px] border-blue-400"></div>
      </motion.div>

      {/* Opposite Side Content (Project Gallery on Desktop) */}
      <motion.div variants={galleryEntrance} className="hidden md:flex md:w-[45%] relative items-start justify-center">
        {projectGallery && (
          <div className="w-full bg-white/30 backdrop-blur-xl rounded-[2rem] p-6 border border-white/40 shadow-[0_8px_32px_rgba(31,38,135,0.05)]">
            {projectGallery}
          </div>
        )}
      </motion.div>

      {/* 3D Perspective Wrapper */}
      <div className="w-[calc(100%-60px)] ml-[50px] md:ml-0 md:w-[45%] relative z-10" style={{ perspective: "1000px" }}>
        
        <motion.div 
          variants={cardEntrance}
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="relative rounded-[2rem] bg-white/40 backdrop-blur-xl border border-white/40 p-6 md:p-10 shadow-[0_8px_32px_rgba(31,38,135,0.05)] overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(31,38,135,0.08)] hover:bg-white/55 hover:border-white/60"
        >
          {/* Spotlight Gradient */}
          <motion.div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100 z-0"
            style={{
              background: useTransform(
                () => `radial-gradient(400px circle at ${mouseX.get()}px ${mouseY.get()}px, rgba(0, 0, 0, 0.02), transparent 40%)`
              )
            }}
          />

          {/* Glowing Top Accent Line */}
          <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Card Content (translateZ pushes it out in 3D space) */}
          <div style={{ transform: "translateZ(30px)" }} className="relative z-10">
            <div className="flex flex-col xl:flex-row xl:items-start justify-between mb-5 gap-3">
              <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tighter">
                {item.company}
              </h3>
              <div className="flex flex-col items-start xl:items-end">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">
                  {item.duration}
                </span>
                <span className="text-sm font-semibold text-slate-600 bg-slate-50 px-4 py-1.5 rounded-full border border-slate-100 shadow-sm">
                  {item.period}
                </span>
              </div>
            </div>
            
            <h4 className="text-lg font-bold text-blue-500 mb-4 tracking-wide">{item.role}</h4>
            
            <div className="text-slate-600 leading-relaxed mb-8 break-keep text-[15px] space-y-1">
              {item.description.split('<br>').map((line, i) => {
                const trimmed = line.trim();
                const isBullet = trimmed.startsWith('-');
                return (
                  <div key={i} className={`relative ${isBullet ? 'pl-3' : 'pl-0'}`}>
                    {isBullet && (
                      <span className="absolute left-0 top-0">-</span>
                    )}
                    <span className={!isBullet && i > 0 && item.description.split('<br>')[i-1].trim().startsWith('-') ? 'pl-3 block' : ''}>
                      {isBullet ? trimmed.substring(1).trim() : trimmed}
                    </span>
                  </div>
                );
              })}
            </div>
            
            <div className="flex flex-wrap gap-2">
              {item.techStack.map((tech, i) => (
                <span 
                  key={i} 
                  className="text-[13px] font-semibold text-slate-700 bg-slate-100/80 border border-slate-200/50 px-3.5 py-1.5 rounded-full hover:bg-slate-200 transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Project Gallery Area (Mobile Only) */}
            {projectGallery && (
              <div className="md:hidden mt-8 pt-6 border-t border-slate-100/50">
                {projectGallery}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
