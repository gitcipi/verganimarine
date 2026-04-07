"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { NavBar } from "@/components/NavBar";
import { FlipCard } from "@/components/FlipCard";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Hero animations
  const heroOpacity = useTransform(smoothProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 0.15], [1, 0.95]);
  const heroY = useTransform(smoothProgress, [0, 0.15], ["0%", "-10%"]);

  // Intro text "Silence, perfected" style but for Vergani
  const introOpacity = useTransform(smoothProgress, [0.1, 0.2, 0.3, 0.4], [0, 1, 1, 0]);
  const introY = useTransform(smoothProgress, [0.1, 0.2, 0.4], ["10%", "0%", "-10%"]);

  // Cards layout logic - we want them to feel like they emerge from the void
  const cardsOpacity = useTransform(smoothProgress, [0.35, 0.45], [0, 1]);
  const cardsY = useTransform(smoothProgress, [0.35, 0.45], ["10%", "0%"]);

  return (
    <main className="bg-honeycomb min-h-screen relative" ref={containerRef}>
      <NavBar />

      {/* Very subtle ambient radial gradient */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-[#0050FF] opacity-[0.03] blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-[40rem] h-[40rem] bg-white opacity-[0.02] blur-[100px] rounded-full" />
      </div>

      {/* Sticky Scroll Container: ~400vh to give plenty of scroll space */}
      <div className="h-[400vh] w-full relative z-10">
        <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
          
          {/* HERO SECTION */}
          <motion.div 
            className="absolute inset-0 flex flex-col items-center justify-center w-full h-full text-center px-4"
            style={{ opacity: heroOpacity, scale: heroScale, y: heroY }}
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="text-4xl md:text-6xl lg:text-8xl font-thin tracking-[0.2em] md:tracking-[0.3em] uppercase silvery-text mb-4"
            >
              VERGANI MARINE
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="text-sm md:text-lg font-light tracking-[0.4em] text-white/50 uppercase"
            >
              by Joseph Vergani
            </motion.p>
          </motion.div>

          {/* INTRO STORY BEAT */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center w-full h-full text-center px-4 max-w-4xl mx-auto"
            style={{ opacity: introOpacity, y: introY }}
          >
            <h2 className="text-3xl md:text-5xl font-light tracking-[0.1em] silvery-text mb-6">
              Precision. Craft. Vision.
            </h2>
            <p className="text-lg md:text-xl font-light text-white/60 leading-relaxed max-w-2xl">
              An intersection of luxury marine expertise and bespoke design. 
              Elevating experiences across oceans and artistic boundaries.
            </p>
          </motion.div>

          {/* FLIP CARDS SECTION */}
          <motion.div
            className="absolute inset-0 flex flex-col items-center pt-32 pb-16 px-4 md:px-12 w-full h-full"
            style={{ opacity: cardsOpacity, y: cardsY }}
          >
            <div className="w-full max-w-7xl mx-auto flex flex-row md:grid md:grid-cols-3 gap-6 md:gap-12 mt-auto mb-auto overflow-x-auto md:overflow-visible snap-x snap-mandatory px-4 md:px-0 pb-8 md:pb-0">
              
              {/* BRAND 1: MARINE */}
              <div id="marine" className="min-w-[85vw] md:min-w-0 snap-center">
                <FlipCard 
                  title="VERGANI MARINE"
                  frontContent={
                    <div className="flex flex-col items-center gap-2 uppercase tracking-[0.2em]">
                      <span>Yacht Delivery</span>
                      <span className="text-white/20">&bull;</span>
                      <span>Own Boat Tuition</span>
                    </div>
                  }
                  backContent={
                    <>
                      <div className="mb-4">
                        <strong className="block text-white/90 mb-1 font-normal tracking-widest uppercase text-xs">Services</strong>
                        <p>Global Yacht Delivery<br/>Own Boat Tuition</p>
                      </div>
                      <div className="mb-6">
                        <strong className="block text-white/90 mb-1 font-normal tracking-widest uppercase text-xs">Partnerships</strong>
                        <p>Proudly partnered with RONA</p>
                      </div>
                      <a href="#" className="mt-auto px-6 py-3 border border-white/20 rounded-full text-xs uppercase tracking-widest hover:bg-white/10 transition-colors">
                        Book a Consultation
                      </a>
                    </>
                  }
                />
              </div>

              {/* BRAND 2: DESIGN */}
              <div id="design" className="min-w-[85vw] md:min-w-0 snap-center">
                <FlipCard 
                  title="VERGANI DESIGN"
                  frontContent={
                    <div className="flex flex-col items-center gap-2 uppercase tracking-[0.2em]">
                      <span>Freelance Design</span>
                      <span className="text-white/20">&bull;</span>
                      <span>Business Aesthetics</span>
                    </div>
                  }
                  backContent={
                    <>
                      <div className="mb-4">
                        <strong className="block text-white/90 mb-1 font-normal tracking-widest uppercase text-xs">Expertise</strong>
                        <p>Book Cover Design<br/>Menus & Brand Aesthetics</p>
                      </div>
                      <div className="mb-4">
                        <strong className="block text-white/90 mb-1 font-normal tracking-widest uppercase text-xs">Client Examples</strong>
                        <ul className="space-y-1">
                          <li>Livia Devi Book Launch</li>
                          <li>Merlin's Oracle Book & Stand</li>
                          <li>Merlin's Statue</li>
                          <li>The Larder - Restaurant Design</li>
                        </ul>
                      </div>
                    </>
                  }
                />
              </div>

              {/* BRAND 3: STUDIO */}
              <div id="studio" className="min-w-[85vw] md:min-w-0 snap-center">
               <FlipCard 
                  title="VERGANI STUDIO"
                  frontContent={
                    <div className="flex flex-col items-center gap-2 uppercase tracking-[0.2em]">
                      <span>VR Modelling</span>
                      <span className="text-white/20">&bull;</span>
                      <span>Concept Design</span>
                    </div>
                  }
                  backContent={
                    <>
                      <div className="mb-4 w-full">
                        <strong className="block text-white/90 mb-1 font-normal tracking-widest uppercase text-xs">Super Yacht Renders</strong>
                        <p className="text-xs">Ancient Egypt / Arcturian based designs:<br/>Ankh, Thoth, Osiris, Djed</p>
                      </div>
                      <div className="mb-4">
                        <strong className="block text-white/90 mb-1 font-normal tracking-widest uppercase text-xs">Fine Arts & Crafts</strong>
                        <p>Jewellery Design<br/>Oil Painting</p>
                      </div>
                    </>
                  }
                />
              </div>

            </div>
          </motion.div>
          
        </div>
      </div>

      {/* FOOTER SECTION: Last 50vh to 100vh of space that scrolls normally */}
      <div className="h-screen flex flex-col items-center justify-center relative z-20 bg-gradient-to-b from-transparent to-[#020202]">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-light tracking-[0.2em] silvery-text mb-8">
            Connect with Vergani
          </h2>
          <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-sm md:text-base font-light tracking-wider text-white/60">
            <a href="mailto:joseph@verganimarine.com" className="hover:text-white transition-colors flex flex-col items-center gap-2">
              <span className="uppercase text-xs tracking-[0.2em] text-white/30">Email</span>
              joseph@verganimarine.com
            </a>
            <div className="hidden md:block w-px h-12 bg-white/10" />
            <a href="https://wa.me/447432366686" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex flex-col items-center gap-2">
              <span className="uppercase text-xs tracking-[0.2em] text-white/30">WhatsApp</span>
              +44 7432 366686
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-12 text-xs font-light tracking-[0.2em] text-white/20 uppercase">
          &copy; {new Date().getFullYear()} Vergani by Joseph Vergani. All rights reserved.
        </div>
      </div>

    </main>
  );
}
