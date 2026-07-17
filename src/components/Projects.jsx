import React from 'react';
import { motion } from 'framer-motion';
import { rjData } from '../data/portfolioData';

// Premium executive deceleration curve
const executiveEase = [0.16, 1, 0.3, 1];

// Viewport layout animation configurations
const viewportSettings = { once: true, amount: 0.15 };

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: executiveEase,
    },
  },
};

const Projects = () => {
  return (
    <section id="case-studies" className="py-24 px-6 md:px-12 xl:px-24 relative overflow-hidden bg-[#030712] border-t border-slate-900/40">
      {/* Structural ambient light element */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-amber-600/[0.015] blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportSettings}
          transition={{ duration: 0.7, ease: executiveEase }}
          className="mb-16 space-y-3"
        >
          <p className="text-xs font-semibold tracking-[0.2em] text-amber-500/80 uppercase font-sans">
            Case Studies
          </p>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white font-sans">
            Enterprise Deployments
          </h2>
          <div className="h-[2px] w-12 bg-gradient-to-r from-slate-500 to-amber-600/40" />
        </motion.div>

        {/* Project Track Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          className="space-y-12"
        >
          {rjData.projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={cardVariants}
              whileHover={{ 
                y: -4,
                borderColor: "rgba(51, 65, 85, 0.5)"
              }}
              transition={{ duration: 0.4, ease: executiveEase }}
              className="group relative p-8 rounded-2xl bg-slate-900/10 border border-slate-900/80 hover:bg-slate-900/20 transition-all duration-300 backdrop-blur-md"
            >
              {/* Contextual Accent Edge Indicator */}
              <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-slate-800 rounded-l-2xl group-hover:bg-amber-500/80 transition-colors duration-300" />
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Block: Meta & Strategic Scope */}
                <div className="lg:col-span-2 space-y-4">
                  <div className="flex flex-wrap items-center gap-3 text-xs">
                    <span className="font-semibold text-amber-500 uppercase tracking-wider">
                      {project.client}
                    </span>
                    <span className="text-slate-600">•</span>
                    <span className="text-slate-400 font-medium">
                      {project.role}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold tracking-tight text-slate-100 group-hover:text-white transition-colors duration-200">
                    {project.title}
                  </h3>

                  <p className="text-sm leading-relaxed text-slate-400 font-sans max-w-3xl">
                    {project.description}
                  </p>

                  {/* Architecture Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((techItem, index) => (
                      <span 
                        key={index}
                        className="px-2.5 py-1 text-[11px] font-mono bg-slate-950/60 text-slate-400 border border-slate-800/40 rounded"
                      >
                        {techItem}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Block: Quantifiable Hard Metrics */}
                <div className="flex flex-col justify-center lg:border-l lg:border-slate-900/60 lg:pl-8 space-y-4 bg-slate-950/20 lg:bg-transparent p-4 lg:p-0 rounded-xl">
                  <div className="text-xs font-mono text-slate-500 uppercase tracking-widest">
                    Key Deliverables
                  </div>
                  
                  <div className="space-y-3">
                    {project.metrics.map((metric, index) => (
                      <div key={index} className="flex items-start gap-2.5">
                        <svg className="w-4 h-4 text-amber-500/80 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm font-medium text-slate-300 tracking-wide">
                          {metric}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;