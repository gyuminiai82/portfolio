import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TimelineItem from './TimelineItem';
import WalkingTrail from './WalkingTrail';

export default function Timeline({ data }) {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div id="timeline-container" ref={containerRef} className="relative max-w-6xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Vertical Timeline Line */}
      <div className="absolute left-[36px] md:left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-slate-100"></div>
      
      {/* Neon Line -> Bright Blue Line */}
      <motion.div 
        className="absolute left-[36px] md:left-1/2 -translate-x-1/2 top-0 w-[3px] bg-gradient-to-b from-blue-300 to-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.2)] origin-top z-0"
        style={{ height: lineHeight }}
      ></motion.div>

      {/* Dynamic Walking Footprint Trail */}
      <WalkingTrail />
      
      <div className="relative z-10 flex flex-col pt-10 pb-20 overflow-hidden">
        {data.map((item, index) => (
          <TimelineItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
