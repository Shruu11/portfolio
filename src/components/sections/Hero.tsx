"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, letterAnimation } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";
import { FaArrowDown } from "react-icons/fa";

export default function Hero() {
  const nameLetters = SITE_CONFIG.name.split("");

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-space via-space to-violet/20" />

      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-pink/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 50, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-6 text-center"
      >
        {/* Greeting */}
        <motion.div
          variants={fadeInUp}
          className="mb-4 flex items-center justify-center gap-2"
        >
          <span className="text-2xl animate-float">👋</span>
          <p className="text-xl md:text-2xl text-gray-300 font-dm">Hi, I'm</p>
        </motion.div>

        {/* Animated Name */}
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-clash font-bold">
            {nameLetters.map((letter, index) => (
              <motion.span
                key={index}
                custom={index}
                variants={letterAnimation}
                className="inline-block gradient-text-alt"
                style={{ display: letter === " " ? "inline" : "inline-block" }}
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Tagline */}
        <motion.div variants={fadeInUp} className="mb-8">
          <h2 className="text-2xl md:text-4xl font-outfit font-bold text-white mb-4">
            ✨ {SITE_CONFIG.tagline} ✨
          </h2>
          <p className="text-lg md:text-xl text-gray-300 font-inter max-w-2xl mx-auto">
            {SITE_CONFIG.title}
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={fadeInUp}
          className="text-base md:text-lg text-gray-400 max-w-3xl mx-auto mb-12 font-dm leading-relaxed"
        >
          {SITE_CONFIG.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <motion.a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 rounded-full bg-gradient-to-r from-violet to-cyber-pink text-white font-semibold text-lg shadow-glow hover:shadow-glow-lg transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View My Work
            <span className="group-hover:translate-x-1 transition-transform">
              🚀
            </span>
          </motion.a>

          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group px-8 py-4 rounded-full glass border-2 border-violet/50 text-white font-semibold text-lg hover:bg-violet/10 transition-all flex items-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Let's Collaborate
            <span className="group-hover:rotate-12 transition-transform">
              💬
            </span>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
          className="group flex flex-col items-center gap-2 cursor-pointer hover:text-violet transition-colors"
          aria-label="Scroll down"
        >
          <span className="text-sm text-gray-400 font-dm group-hover:text-violet transition-colors">
            Scroll to explore
          </span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <FaArrowDown className="w-5 h-5 text-violet" />
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-space to-transparent" />
    </section>
  );
}
