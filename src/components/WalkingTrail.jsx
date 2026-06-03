import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function FootprintStep({ index, scrollDir }) {
  const isLeftFoot = index % 2 === 0;
  
  // Base rotation: originally -75/75 was backwards. Adding 180 degrees reverses it exactly.
  // -75 + 180 = 105, 75 - 180 = -105
  const angle = scrollDir === 'down' ? '105deg' : '-105deg';
  // Apply flip for right foot AFTER rotation
  const transformStr = isLeftFoot ? `rotate(${angle})` : `scaleX(-1) rotate(${angle})`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.8, 0.15] }}
      viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
      transition={{ 
        duration: 0.6, 
        times: [0, 0.3, 1],
        ease: "easeOut"
      }}
      className={`w-12 h-12 md:w-16 md:h-16 my-[80px] flex items-center justify-center ${isLeftFoot ? 'self-start ml-2 sm:-ml-4 md:-ml-12 lg:-ml-24 xl:-ml-32' : 'self-end mr-2 sm:-mr-4 md:-mr-12 lg:-mr-24 xl:-mr-32'} opacity-40`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 250 512 280" 
        className="w-full h-full text-slate-200 transition-transform duration-500" 
        style={{ transform: transformStr }}
      >
        <path fill="currentColor" d="M288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32l0 128s96.3 32 160 32z M0 416c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64z"/>
      </svg>
    </motion.div>
  );
}

export default function WalkingTrail() {
  const [numSteps, setNumSteps] = useState(30);
  const [scrollDir, setScrollDir] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) < 5) return;
      
      if (currentScrollY > lastScrollY.current) {
        setScrollDir('down');
      } else {
        setScrollDir('up');
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const calculateSteps = () => {
      const container = document.getElementById('timeline-container');
      const docHeight = container ? container.clientHeight : document.documentElement.scrollHeight;
      // In flexbox, margins do NOT collapse!
      // Each step takes: 80px (mt) + 64px (h) + 80px (mb) = 224px.
      // So dividing by 150 created way too many steps, which overflowed and stretched the page.
      // Dividing by 250 ensures the footprints fit perfectly without stretching the page height.
      const steps = Math.floor((docHeight - 250) / 250);
      setNumSteps(steps > 0 ? steps : 5);
    };
    
    calculateSteps();
    window.addEventListener('resize', calculateSteps);
    return () => window.removeEventListener('resize', calculateSteps);
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" style={{ clipPath: 'inset(0 -50vw 0 -50vw)' }}>
      <div className="flex flex-col pt-32 pb-32 w-full">
        {Array.from({ length: numSteps }).map((_, i) => (
          <FootprintStep key={i} index={i} scrollDir={scrollDir} />
        ))}
      </div>
    </div>
  );
}
