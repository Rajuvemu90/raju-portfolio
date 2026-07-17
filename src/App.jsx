import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProfessionalOverview from './components/ProfessionalOverview';
import PlexusBackground from './components/PlexusBackground';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-[#090d16] text-white">
      {/* Background radial gradient layer */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-slate-900/50 via-[#030712] to-black -z-50" />

      {/* Live Network Background */}
      <PlexusBackground />

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        {/* Hero */}
        <Hero />

        {/* Professional Ovrview */}
        <ProfessionalOverview />

        {/* Experience */}
        <Experience />

        {/* Case Studies */}
        <Projects />

        {/* Expertise */}
        <Skills />

        {/* Contact */}
        <Contact />
      </div>
    </div>
  );
}

export default App;