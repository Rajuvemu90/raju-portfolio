import React from 'react';
import { motion } from 'framer-motion';

const expertise = [
  "Microsoft Dynamics 365 CE",
  "Power Platform",
  "Azure Cloud",
  "Solution Architecture",
  "Enterprise Integration",
  "Digital Transformation",
];

// Premium executive deceleration curve (Apple, Stripe style)
const executiveEase = [0.16, 1, 0.3, 1];

// Shared viewport configuration to ensure it animates only once upon scroll entry
const viewportSettings = { once: true, amount: 0.2 };

// Reusable micro fade-up variant
const fadeUpVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: executiveEase,
    },
  },
};

// Container to orchestrate sequential staggered entrance of child blocks
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const ProfessionalOverview = () => {
  return (
    <section
      id="overview"
      className="relative overflow-hidden bg-[#030712] py-28 px-6 md:px-12 xl:px-24"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-amber-500/5 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-slate-700/10 blur-3xl" />
      </div>

      {/* Divider */}
      <div className="relative max-w-7xl mx-auto">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-24" />
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24 items-start">

        {/* ================================================= */}
        {/* LEFT COLUMN */}
        {/* ================================================= */}

        <motion.div 
          className="lg:col-span-7"
          initial="hidden"
          whileInView="visible"
          viewport={viewportSettings}
          variants={staggerContainer}
        >

          {/* Heading */}
          <motion.div variants={fadeUpVariants} className="space-y-4">

            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-amber-500 font-semibold">
              <span className="w-2 h-2 rounded-full bg-amber-500" />
              Professional Overview
            </span>

            <h2 className="text-4xl xl:text-5xl font-black text-white leading-tight tracking-tight max-w-4xl">
              Transforming Enterprise Strategy
              <br />
              into Scalable Technology
            </h2>

          </motion.div>

          {/* Intro Paragraph */}
          <motion.div variants={fadeUpVariants} className="mt-10 space-y-7 text-slate-400 text-[17px] leading-8">

            <p>
              With more than <span className="text-white font-medium">13 years of experience</span> in
              enterprise application architecture, I have designed and delivered
              Microsoft Dynamics 365, Power Platform, and Azure-based solutions that
              enable digital transformation across global organizations. My work focuses
              on translating complex business requirements into secure, scalable, and
              maintainable enterprise platforms that support long-term business growth.
            </p>

          </motion.div>

          {/* CORE EXPERTISE CHIPS CONTAINER */}
          <motion.div variants={fadeUpVariants} className="mt-12">

            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-amber-500/50" />
              <span className="uppercase tracking-[0.22em] text-xs text-slate-500 font-semibold">
                Core Expertise
              </span>
            </div>

            {/* Micro-staggered load for card layout grid */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-2 md:grid-cols-3 gap-4"
            >
              {expertise.map((item) => (
                <motion.div
                  key={item}
                  variants={fadeUpVariants}
                  whileHover={{ 
                    borderColor: "rgba(245, 158, 11, 0.3)",
                    y: -3,
                    backgroundColor: "rgba(15, 23, 42, 0.7)"
                  }}
                  transition={{ duration: 0.3, ease: executiveEase }}
                  className="
                    group
                    rounded-xl
                    border
                    border-white/5
                    bg-slate-900/40
                    backdrop-blur-md
                    px-5
                    py-4
                    cursor-default
                  "
                >
                  <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                    {item}
                  </p>
                </motion.div>
              ))}
            </motion.div>

          </motion.div>

          {/* Remaining Summary Paragraphs */}
          <motion.div variants={fadeUpVariants} className="mt-12 space-y-7 text-slate-400 text-[17px] leading-8">

            <p>
              Throughout my career, I have partnered with business stakeholders,
              enterprise architects, and engineering teams to modernize legacy
              systems, optimize business processes, and implement cloud-first
              architectures that improve operational efficiency while reducing
              long-term maintenance costs. Every solution is designed with a
              strong emphasis on reliability, scalability, and business value.
            </p>

            <p>
              Having delivered enterprise solutions across healthcare, banking,
              retail, and SaaS organizations, I understand the complexity of
              highly regulated environments. My architectural approach emphasizes
              clean design principles, cloud-native development, secure
              integrations, performance optimization, and long-term
              maintainability while ensuring technology investments continue to
              support evolving business objectives.
            </p>

          </motion.div>

        </motion.div>

        {/* ================================================= */}
        {/* RIGHT COLUMN STARTS HERE */}
        {/* ================================================= */}

        <div className="lg:col-span-5 sticky top-32">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewportSettings}
            // Strict 3px elevation control limit with soft color accent transition on frame borders
            whileHover={{ 
              y: -3, 
              borderColor: "rgba(245, 158, 11, 0.2)" 
            }}
            transition={{ 
              initial: { duration: 0.75, ease: executiveEase },
              hover: { duration: 0.4, ease: executiveEase }
            }}
            className="
              relative
              rounded-3xl
              border
              border-white/10
              bg-gradient-to-b
              from-slate-900/70
              to-slate-950/80
              backdrop-blur-2xl
              shadow-[0_30px_80px_rgba(0,0,0,0.45)]
              overflow-hidden
            "
          >
            {/* Decorative Glow */}
            <div className="absolute -top-28 -right-20 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-20 w-64 h-64 bg-slate-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-10">

              {/* Heading */}
              <div className="border-b border-white/10 pb-8">

                <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
                  Executive Snapshot
                </p>

                <div className="mt-6">

                  <h3 className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-amber-500">
                    13+
                  </h3>

                  <p className="mt-2 text-slate-400 leading-relaxed">
                    Years of Enterprise
                    <br />
                    Architecture Experience
                  </p>

                </div>

              </div>

              {/* Information */}
              <div className="mt-8 space-y-8">

                {/* Core Specialization */}
                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                    Core Specialization
                  </p>

                  <div className="space-y-2">
                    <p className="text-white">Microsoft Dynamics 365 CE</p>
                    <p className="text-white">Power Platform</p>
                    <p className="text-white">Azure Cloud Architecture</p>
                  </div>

                </div>

                {/* Industry */}
                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">
                    Industry Experience
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Healthcare",
                      "Banking",
                      "Retail",
                      "SaaS",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                          px-4
                          py-2
                          rounded-full
                          border
                          border-white/10
                          bg-white/5
                          text-sm
                          text-slate-300
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Focus Areas */}
                <div>

                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-4">
                    Focus Areas
                  </p>

                  <div className="flex flex-wrap gap-3">
                    {[
                      "Enterprise Architecture",
                      "Cloud Integration",
                      "Solution Design",
                      "Digital Transformation",
                      "Performance Optimization",
                      "Technical Leadership",
                    ].map((item) => (
                      <span
                        key={item}
                        className="
                          px-4
                          py-2
                          rounded-lg
                          bg-gradient-to-r
                          from-slate-800
                          to-slate-900
                          border
                          border-white/5
                          text-sm
                          text-slate-300
                        "
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                </div>

                {/* Location */}
                <div className="border-t border-white/10 pt-8 flex justify-between items-center">

                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Location
                    </p>
                    <p className="mt-2 text-white">
                      Augusta, GA
                    </p>
                  </div>

                  <div className="w-12 h-12 rounded-full border border-amber-500/20 bg-amber-500/10 flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-amber-400"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default ProfessionalOverview;
