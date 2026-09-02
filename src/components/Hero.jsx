// src/components/Hero.jsx
import React from 'react';
import { rjData } from '../data/portfolioData';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center relative px-6 md:px-12 xl:px-24 overflow-hidden pt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 w-full max-w-7xl mx-auto items-center gap-12 z-10">
        
        {/* Left Typography Block */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* REFINED: Titanium Charcoal to Matte Bronze Gradient */}
          <h1 className="text-6xl sm:text-8xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-200 via-slate-400 to-amber-600/80 font-sans tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
            {rjData?.profile?.name || "RAJU V"}
          </h1>

          {/* Subtitle Role Descriptor - Muted Slate/White Contrast */}
          <h2 className="text-2xl sm:text-4xl font-bold tracking-wide uppercase text-slate-100 leading-tight font-sans max-w-2xl">
            PRINCIPAL CRM ARCHITECT & <br />ENTERPRISE SOLUTIONS ENGINEER
          </h2>

          {/* Core Body Paragraph */}
          <p className="text-slate-400 text-base sm:text-lg font-light leading-relaxed max-w-2xl">
            With 13+ years of expert engineering, designing and architecting Microsoft 
            Dynamics 365 CE, Power Platform, and Azure-based enterprise ecosystems 
            across highly regulated domains including Healthcare, Fintech, and Global Retail.
          </p>

          {/* Buttons tweaked to match the deep metallic palette */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a 
              href="#experience" 
              className="px-6 py-3 border-2 border-slate-700/80 rounded-lg text-xs uppercase font-bold tracking-wider text-slate-300 hover:text-amber-500 hover:border-amber-600/50 transition-all duration-200"
            >
              View Experience
            </a>
          </div>
        </div>

        {/* Right Side Matrix Area */}
        <div className="hidden lg:block lg:col-span-5 relative w-full h-[500px]">
          {/* Muted warm amber ambient glow behind the right side */}
          <div className="absolute inset-0 bg-amber-600/5 blur-[140px] rounded-full pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default Hero;