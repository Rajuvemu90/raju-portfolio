import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const executiveEase = [0.22, 1, 0.36, 1];

const viewport = {
  once: true,
  amount: 0.15,
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: executiveEase,
    },
  },
};

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    scope: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/5 bg-[#030712] py-28 px-6 md:px-12 xl:px-24"
    >
      {/* Background */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.03, 0.06, 0.03],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-32 right-0 h-[520px] w-[520px] rounded-full bg-amber-500/10 blur-[180px]"
        />

        <motion.div
          animate={{
            scale: [1.05, 1, 1.05],
            opacity: [0.02, 0.05, 0.02],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -bottom-24 left-0 h-[420px] w-[420px] rounded-full bg-slate-600/20 blur-[180px]"
        />

      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative z-10 mx-auto max-w-4xl"
      >

        {/* Header */}

        <div className="text-center">

          <motion.p
            variants={fadeUp}
            className="text-xs uppercase tracking-[0.28em] text-amber-500 font-semibold"
          >
            Engagement
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl font-black tracking-tight text-white"
          >
            Let's Build Something
            <br />
            Exceptional Together
          </motion.h2>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-8 h-[2px] w-20 rounded-full bg-gradient-to-r from-transparent via-amber-500 to-transparent"
          />

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-8 max-w-xl text-slate-400 leading-8"
          >
            Whether you're modernizing enterprise platforms,
            designing Microsoft Dynamics ecosystems, or planning
            cloud transformation initiatives, I'd be happy to
            discuss how we can create long-term business value.
          </motion.p>

        </div>

        {/* Contact Form */}

        <motion.form
          variants={fadeUp}
          whileHover={{
            y: -4,
          }}
          transition={{
            duration: .35,
          }}
          onSubmit={handleSubmit}
          className="
            mt-16
            rounded-3xl
            border
            border-white/10
            bg-slate-900/30
            backdrop-blur-2xl
            p-8
            md:p-10
            shadow-[0_30px_80px_rgba(0,0,0,.35)]
          "
        >
                      {/* Name & Email */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={fadeUp}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.25 }}
              className="space-y-2"
            >
              <label className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                Full Name
              </label>

              <input
                type="text"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.target.value,
                  })
                }
                placeholder="Alexander Wright"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-slate-950/70
                  px-5
                  py-4
                  text-sm
                  text-slate-200
                  placeholder:text-slate-600
                  transition-all
                  duration-300
                  focus:border-amber-500/60
                  focus:ring-2
                  focus:ring-amber-500/20
                  outline-none
                "
              />
            </motion.div>

            <motion.div
              variants={fadeUp}
              whileHover={{ y: -2 }}
              transition={{ duration: .25 }}
              className="space-y-2"
            >
              <label className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
                Corporate Email
              </label>

              <input
                type="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.target.value,
                  })
                }
                placeholder="alex@enterprise.com"
                className="
                  w-full
                  rounded-xl
                  border
                  border-white/10
                  bg-slate-950/70
                  px-5
                  py-4
                  text-sm
                  text-slate-200
                  placeholder:text-slate-600
                  transition-all
                  duration-300
                  focus:border-amber-500/60
                  focus:ring-2
                  focus:ring-amber-500/20
                  outline-none
                "
              />
            </motion.div>
          </motion.div>

          {/* Scope */}

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -2 }}
            transition={{ duration: .25 }}
            className="mt-7 space-y-2"
          >
            <label className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
              Engagement Type
            </label>

            <select
              value={formState.scope}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  scope: e.target.value,
                })
              }
              className="
                w-full
                rounded-xl
                border
                border-white/10
                bg-slate-950/70
                px-5
                py-4
                text-sm
                text-slate-300
                outline-none
                transition-all
                duration-300
                focus:border-amber-500/60
                focus:ring-2
                focus:ring-amber-500/20
              "
            >
              <option value="">Select engagement...</option>

              <option value="migration">
                Enterprise Cloud Migration
              </option>

              <option value="integration">
                CRM Integration Architecture
              </option>

              <option value="consulting">
                Enterprise Consulting
              </option>

              <option value="solution">
                Solution Architecture
              </option>
            </select>
          </motion.div>

          {/* Message */}

          <motion.div
            variants={fadeUp}
            whileHover={{ y: -2 }}
            transition={{ duration: .25 }}
            className="mt-7 space-y-2"
          >
            <label className="text-xs uppercase tracking-[0.18em] text-slate-400 font-semibold">
              Project Details
            </label>

            <textarea
              rows={6}
              required
              value={formState.message}
              onChange={(e) =>
                setFormState({
                  ...formState,
                  message: e.target.value,
                })
              }
              placeholder="Tell me about your project, current infrastructure, business goals, or technical challenges..."
              className="
                w-full
                resize-none
                rounded-xl
                border
                border-white/10
                bg-slate-950/70
                px-5
                py-4
                text-sm
                text-slate-200
                placeholder:text-slate-600
                outline-none
                transition-all
                duration-300
                focus:border-amber-500/60
                focus:ring-2
                focus:ring-amber-500/20
              "
            />
          </motion.div>

          {/* Submit Button */}

          <motion.div
            variants={fadeUp}
            className="mt-10"
          >
            <motion.button
              type="submit"
              whileHover={{
                scale: 1.03,
                y: -2,
                boxShadow: "0 20px 45px rgba(245,158,11,.30)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              transition={{
                duration: .25,
              }}
              className="
                inline-flex
                h-12
                min-w-[220px]
                items-center
                justify-center
                rounded-xl
                bg-amber-500
                px-8
                font-semibold
                text-slate-950
                transition-colors
                hover:bg-amber-400
              "
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.span
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: .25 }}
                    className="flex items-center gap-2"
                  >
                    ✓ Request Sent Successfully
                  </motion.span>
                ) : (
                  <motion.span
                    key="default"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: .25 }}
                    className="flex items-center gap-3"
                  >
                    Start the Conversation

                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12h14M13 5l7 7-7 7"
                      />
                    </svg>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </motion.div>

        </motion.form>
                {/* Footer */}

        <motion.footer
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-24 border-t border-white/5 pt-12"
        >
          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center"
          >
            <h3 className="text-2xl font-bold tracking-tight text-white">
              Raju V
            </h3>

            <p className="mt-3 text-sm text-slate-400 text-center max-w-xl leading-7">
              Principal CRM Architect specializing in Microsoft Dynamics,
              enterprise integrations, cloud modernization, and scalable
              business solutions.
            </p>
          </motion.div>

          {/* Contact Information */}

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400"
          >
            <a
              href="mailto:vemu90raju@gmail.com"
              className="transition-colors duration-300 hover:text-amber-400"
            >
              vemu90raju@gmail.com
            </a>

            <span className="hidden md:block text-slate-700">•</span>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-amber-400"
            >
              LinkedIn
            </a>

            <span className="hidden md:block text-slate-700">•</span>

            <a
              href="https://github.com/Rajuvemu90"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 hover:text-amber-400"
            >
              GitHub
            </a>
          </motion.div>

          {/* Divider */}

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-10 h-px w-36 bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"
          />

          {/* Copyright */}

          <motion.div
            variants={fadeUp}
            className="mt-8 text-center"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
              Enterprise Solutions • Microsoft Dynamics • Cloud Architecture
            </p>

            <p className="mt-5 text-sm text-slate-600">
              © {new Date().getFullYear()} Raju V. All rights reserved.
            </p>
          </motion.div>
        </motion.footer>

      </motion.div>
    </section>
  );
};

export default Contact;