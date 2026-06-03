import React from 'react';
import { motion } from 'framer-motion';

export default function Footprint({ direction }) {
  const isLeftFoot = direction === 'left';
  
  // Cyberpunk Glitch Effect for the Massive Background Human Footprint
  const glitchVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.5,
      filter: "blur(30px) hue-rotate(-90deg)",
      y: 100 // fly up to simulate backstep stamping
    },
    visible: { 
      opacity: [0, 0.8, 0, 1, 0.2, 0.5, 0.2], // Settles at 0.2 for background
      scale: [1.5, 1, 1.1, 1], // Stomping scale
      filter: ["blur(30px) hue-rotate(-90deg)", "blur(0px) hue-rotate(90deg)", "blur(5px) hue-rotate(0deg)", "blur(0px) hue-rotate(0deg)"],
      y: [100, -20, 10, 0],
      x: [0, 20, -20, 10, -10, 0], // Glitch shake
      skewX: [0, 30, -30, 10, -10, 0], // Screen tearing
      transition: { 
        duration: 0.6, 
        ease: "easeInOut",
        times: [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1]
      }
    }
  };

  return (
    <motion.div 
      variants={glitchVariants}
      className={`absolute top-1/2 -translate-y-1/2 pointer-events-none z-0 flex justify-center items-center overflow-hidden
      ${isLeftFoot ? 'right-[5%] md:right-[5%]' : 'right-[-10%] md:right-[-10%]'}
      w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-20
      `}
    >
      {/* Human Footprint SVG (Backstep: toes pointing UP) */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
        className={`w-full h-full drop-shadow-[0_0_30px_rgba(56,189,248,1)] text-slate-100 mix-blend-overlay ${isLeftFoot ? '-rotate-12' : 'scale-x-[-1] rotate-12'}`}>
        <path 
          fill="currentColor"
          d="M192 136a40 40 0 1 0 -80 0 40 40 0 1 0 80 0zm64-40a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm88 40a24 24 0 1 0 -48 0 24 24 0 1 0 48 0zm64 64a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm-84-48c-3.1-9.4-11.4-16-21.2-16c-3.2 0-6.4 .7-9.3 2c-39.7 18-97.1 27-142.5 13.5C136 146.9 119.5 144 104 144c-21.6 0-42.5 6-61 17.1c-13.7 8.3-25.5 19.3-34.4 32.2c-5.8 8.4-9.3 18.6-8.5 29.2S4.8 243 11 251.2l20.4 26.6C44 294.2 60 307.7 78.4 316c48 21.6 94.7 64 125.6 113.6c5.8 9.4 14.8 16.5 25.5 20s22.4 2.4 32.5-3c12-6.5 21-17 26-29.6c13.7-34.6 17.5-67.9 14-99.7C295.3 255.8 317 202.9 324 152z"
        />
      </svg>
    </motion.div>
  );
}
