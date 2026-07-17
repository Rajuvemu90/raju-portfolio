import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const navItems = [
    "Overview",
    "Experience",
    "Case Studies",
    "Expertise",
    "Contact",
  ];

  const containerVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -8,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
      },
    },
  };

  return (
    <header className="fixed top-6 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-24">
        <motion.nav
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/40 backdrop-blur-2xl px-8 py-4 shadow-[0_20px_60px_rgba(0,0,0,0.30)]"
        >
          {/* Logo */}
          <motion.a
            variants={itemVariants}
            href="#home"
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
            className="flex items-center"
          >
            <div className="w-11 h-11 rounded-xl border border-amber-500/30 bg-amber-500/10 flex items-center justify-center">

              <span className="text-xl font-black tracking-tight text-amber-400">
                RV
              </span>

            </div>
          </motion.a>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-9">
            {navItems.map((item) => (
              <motion.a
                key={item}
                variants={itemVariants}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                whileHover={{
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="group relative text-[15px] font-medium tracking-wide text-slate-300 hover:text-white transition-colors duration-300"
              >
                {item}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-1.5
                    h-[2px]
                    w-0
                    rounded-full
                    bg-amber-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />
              </motion.a>
            ))}
          </div>
        </motion.nav>
      </div>
    </header>
  );
};

export default Navbar;