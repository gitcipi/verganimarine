"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FlipCardProps {
  title: string;
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
}

export function FlipCard({ title, frontContent, backContent }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative w-full h-[32rem] sm:h-[36rem] perspective-1000 cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full transform-style-3d transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
      >
        {/* Front */}
        <div className="absolute inset-0 backface-hidden glass-panel rounded-2xl flex flex-col items-center justify-center p-8 bg-gradient-to-b from-[#0a0a0c]/80 to-[#050505]/95 shadow-2xl overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent pointer-events-none" />
          
          <h2 className="text-3xl md:text-4xl font-light tracking-[0.2em] silvery-text mb-6 text-center z-10">
            {title}
          </h2>
          <div className="text-white/50 font-light tracking-wide text-sm z-10">
            {frontContent}
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden rotate-y-180 glass-panel rounded-2xl p-8 bg-[#0a0a0c] border border-white/10 shadow-2xl overflow-y-auto custom-scrollbar flex flex-col justify-center items-center text-center">
           <h3 className="text-xl tracking-[0.1em] silvery-text mb-8">{title}</h3>
           <div className="w-full text-white/70 font-light text-sm md:text-base leading-relaxed tracking-wide flex flex-col gap-4">
             {backContent}
           </div>
        </div>
      </motion.div>
    </div>
  );
}
