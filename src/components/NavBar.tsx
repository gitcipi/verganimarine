"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function NavBar() {
  const { scrollY } = useScroll();
  
  // Fade in nav background and text opacity a bit as we scroll down
  const bgOpacity = useTransform(scrollY, [0, 100], [0, 0.75]);
  const backdropBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(12px)"]);
  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.05]);

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4"
      style={{
        backgroundColor: `rgba(5, 5, 5, ${bgOpacity.get()})`,
        backdropFilter: backdropBlur,
        WebkitBackdropFilter: backdropBlur,
        borderBottom: `1px solid rgba(255, 255, 255, ${borderOpacity.get()})`,
      }}
    >
      <div className="text-xl md:text-2xl font-light tracking-widest silvery-text">
        VERGANI MARINE
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wider text-white/70">
        <a href="#marine" className="hover:text-white transition-colors duration-300">Marine</a>
        <a href="#design" className="hover:text-white transition-colors duration-300">Design</a>
        <a href="#studio" className="hover:text-white transition-colors duration-300">Studio</a>
      </div>

      <div className="flex items-center gap-4">
        <a 
          href="https://wa.me/447432366686" 
          target="_blank" 
          rel="noreferrer"
          className="hidden md:block text-xs font-light text-white/50 hover:text-white/80 transition-colors"
        >
          WhatsApp +44 7432 366686
        </a>
        <a 
          href="mailto:joseph@verganimarine.com"
          className="px-5 py-2 text-xs md:text-sm tracking-wider font-light rounded-full border border-white/20 hover:border-white/50 hover:bg-white/5 transition-all duration-300"
        >
          Enquiries
        </a>
      </div>
    </motion.nav>
  );
}
