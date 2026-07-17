import React from 'react';
import { motion } from 'framer-motion';
import { rjData } from '../data/portfolioData';

// Premium executive deceleration curve
const executiveEase = [0.16, 1, 0.3, 1];

// Shared viewport activation settings
const viewportSettings = { once: true, amount: 0.15 };

// Section parent stagger layout
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Target animation structure for individual timeline blocks
const itemVariants = {
  hidden: { opacity: 0, x: -15 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: executiveEase,
    },
  },
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 xl:px-24 relative overflow-hidden bg-[#030712]">
      {/* Decorative ambient background blur */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] bg-amber-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7, ease: executiveEase }}
          className="mb-16 space-y-2"
        >
          <p className="text-xs font-bold tracking-widest text-amber-500/80 uppercase">
            Proven Track Record
          </p>
          <h2 className="text-4xl font-black tracking-tight text-white font-sans">
            Enterprise Leadership Architecture
          </h2>
          <div className="h-1 w-12 bg-gradient-to-r from-slate-400 to-amber-600/60 rounded" />
        </motion.div>

        {/* Timeline Core Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-12"
        >
          {rjData.experience.map((exp, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="relative pl-8 md:pl-10 group"
            >
              
              {/* Timeline Indicator Dot with smooth background morphing */}
              <motion.div 
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-slate-900 border-2 border-slate-700 group-hover:border-amber-500 transition-colors duration-300 z-10" 
              />
              
              {/* Glassmorphic Project Card with 3px subtle shift boundary */}
              <motion.div 
                whileHover={{ 
                  y: -3, 
                  borderColor: "rgba(51, 65, 85, 0.6)"
                }}
                transition={{ duration: 0.4, ease: executiveEase }}
                className="p-6 md:p-8 rounded-xl bg-slate-900/40 border border-slate-800/80 backdrop-blur-md transition-colors duration-300"
              >
                
                {/* Header Meta Info */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <span className="text-xs font-mono tracking-wider text-amber-500/80 font-semibold block uppercase">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-slate-100 group-hover:text-white transition-colors duration-200">
                      {exp.role}
                    </h3>
                    <div className="text-sm font-medium text-slate-400 mt-0.5">
                      {exp.company} <span className="text-slate-600">|</span> {exp.location}
                    </div>
                  </div>
                </div>

                {/* Brief Strategy Summary */}
                <p className="text-slate-400 text-sm font-light leading-relaxed mb-6 border-l-2 border-slate-800 pl-4 italic">
                  {exp.description}
                </p>

                {/* High-Impact Accomplishment Bullets */}
                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-slate-300 text-sm font-light leading-relaxed">
                      <span className="text-amber-600/80 mt-1.5 text-xs">▪</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;