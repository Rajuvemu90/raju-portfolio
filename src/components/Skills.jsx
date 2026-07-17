import React from 'react';
import { motion } from 'framer-motion';
import { rjData } from '../data/portfolioData';

// Premium executive deceleration curve
const executiveEase = [0.16, 1, 0.3, 1];

// Viewport configuration for precision triggering
const viewportSettings = { once: true, amount: 0.15 };

// Section layout grid stagger orchestrator
const gridContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Parent card entry dynamics
const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: executiveEase,
    },
  },
};

const Skills = () => {
  return (
    <section id="expertise" className="py-24 px-6 md:px-12 xl:px-24 relative overflow-hidden bg-[#030712] border-t border-slate-900/40">
      {/* Subtle background ambient blur */}
      <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-amber-600/[0.02] blur-[160px] rounded-full pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7, ease: executiveEase }}
          className="mb-16 space-y-3"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-500/80 uppercase font-sans">
            Technical Matrix
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white font-sans">
            Expertise & Capabilities
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-slate-500 to-amber-600/40" />
        </motion.div>

        {/* Visually-Structured Capability Cards */}
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {Object.entries(rjData.skills).map(([categoryKey, skillList]) => {
            
            let title = categoryKey;
            let svgIcon = null;

            switch (categoryKey) {
              case 'platforms':
                title = "Core Platforms";
                svgIcon = (
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                );
                break;
              case 'backend':
                title = "Backend & Systems";
                svgIcon = (
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 5h10a2 2 0 012 2v10a2 2 0 01-2 2H7a2 2 0 01-2-2V7a2 2 0 012-2z" />
                  </svg>
                );
                break;
              case 'data':
                title = "Data Systems & Integration";
                svgIcon = (
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
                  </svg>
                );
                break;
              case 'frontend':
                title = "Custom UI/UX";
                svgIcon = (
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                );
                break;
              case 'governance':
                title = "Governance & Compliance";
                svgIcon = (
                  <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                );
                break;
              default:
                break;
            }
            
            return (
              <motion.div 
                key={categoryKey}
                variants={cardVariants}
                whileHover={{ 
                  y: -4,
                  borderColor: "rgba(245, 158, 11, 0.25)",
                  backgroundColor: "rgba(15, 23, 42, 0.4)"
                }}
                transition={{ duration: 0.4, ease: executiveEase }}
                className="p-6 rounded-xl bg-slate-900/20 border border-slate-800/60 backdrop-blur-md flex flex-col justify-between transition-colors duration-300 group select-none"
              >
                <div>
                  {/* Card Header with Icon Container */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-lg bg-slate-950 border border-slate-800 group-hover:border-amber-500/30 transition-colors duration-300">
                      {svgIcon}
                    </div>
                    <h3 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors duration-200 font-sans tracking-wide">
                      {title}
                    </h3>
                  </div>
                  
                  {/* Visual Skill Badges Matrix */}
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1.5 text-xs font-medium bg-slate-950/80 border border-slate-800/80 text-slate-300 rounded-md tracking-wide hover:text-white hover:border-slate-600 transition-all duration-200 font-sans cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;