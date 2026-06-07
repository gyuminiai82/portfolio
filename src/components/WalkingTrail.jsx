import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

function FootprintStep({ index, scrollDir }) {
  const isLeftFoot = index % 2 === 0;
  
  // Base rotation: originally -75/75 was backwards. Adding 180 degrees reverses it exactly.
  const angle = scrollDir === 'down' ? '105deg' : '-105deg';
  // Apply flip for right foot AFTER rotation
  const transformStr = isLeftFoot ? `rotate(${angle})` : `scaleX(-1) rotate(${angle})`;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: [0, 0.8, 0.55] }}
      viewport={{ once: false, margin: "-30% 0px -30% 0px" }}
      transition={{ 
        duration: 0.6, 
        times: [0, 0.3, 1],
        ease: "easeOut"
      }}
      className={`w-6 h-6 md:w-8 md:h-8 my-[40px] flex items-center justify-center ${isLeftFoot ? '-translate-x-3 md:-translate-x-4' : 'translate-x-3 md:translate-x-4'}`}
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 250 512 280" 
        className="w-full h-full text-indigo-300 drop-shadow-[0_2px_4px_rgba(99,102,241,0.25)] transition-transform duration-500" 
        style={{ transform: transformStr }}
      >
        <path fill="currentColor" d="M288 512c96 0 224-48 224-128s-119.6-96-176-96c-48 0-76 16-104 32s-56 32-104 32l0 128s96.3 32 160 32z M0 416c0 35.3 28.7 64 64 64l32 0 0-128-32 0c-35.3 0-64 28.7-64 64z"/>
      </svg>
    </motion.div>
  );
}

export default function WalkingTrail() {
  const [numSteps, setNumSteps] = useState(40);
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
      // Spacing is ~96px per step (40px margin-top + 40px margin-bottom + 16px size)
      // Dividing by 120 ensures the steps fit well.
      const steps = Math.floor((docHeight - 200) / 120);
      setNumSteps(steps > 0 ? steps : 10);
    };
    
    calculateSteps();
    window.addEventListener('resize', calculateSteps);
    return () => window.removeEventListener('resize', calculateSteps);
  }, []);

  return (
    <div className="absolute left-[36px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-12 h-full pointer-events-none z-10">
      <div className="flex flex-col pt-32 pb-32 w-full">
        {Array.from({ length: numSteps }).map((_, i) => (
          <FootprintStep key={i} index={i} scrollDir={scrollDir} />
        ))}
      </div>
    </div>
  );
}
