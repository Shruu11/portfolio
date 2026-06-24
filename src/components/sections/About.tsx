"use client";

import { motion } from "framer-motion";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/animations";
import { ABOUT_CONTENT } from "@/lib/constants";
import { useInView } from "react-intersection-observer";

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold mb-4"
          >
            About <span className="gradient-text-alt">Me</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Get to know the person behind the code
          </motion.p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: 3D Card with Image */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInLeft}
            className="relative"
          >
            <div className="relative group">
              {/* Card */}
              <div className="relative glass rounded-3xl p-8 transform transition-all duration-500 hover:scale-105">
                {/* Avatar/Image Placeholder */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-violet/20 to-cyber-pink/20 mb-6 flex items-center justify-center overflow-hidden">
                  <div className="text-9xl">👩‍💻</div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {ABOUT_CONTENT.stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={
                        inView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0.8 }
                      }
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="glass rounded-xl p-4 text-center hover:bg-violet/10 transition-colors"
                    >
                      <div className="text-2xl md:text-3xl font-bold gradient-text-alt mb-1">
                        {stat.value}
                      </div>
                      <div className="text-xs md:text-sm text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-violet to-cyber-pink rounded-2xl opacity-50 blur-sm"
              />
              <motion.div
                animate={{
                  y: [0, 20, 0],
                  rotate: [0, -5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-neon-cyan to-luminous-blue rounded-2xl opacity-50 blur-sm"
              />
            </div>
          </motion.div>

          {/* Right: Bio and Highlights */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeInRight}
            className="space-y-8"
          >
            {/* Bio */}
            <div>
              <h3 className="text-2xl md:text-3xl font-poppins font-semibold mb-4">
                Creative Frontend Developer
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                {ABOUT_CONTENT.bio}
              </p>
            </div>

            {/* Currently Mastering */}
            <div>
              <h4 className="text-xl font-poppins font-semibold mb-4 flex items-center gap-2">
                <span className="text-2xl">🎯</span> Currently mastering:
              </h4>
              <ul className="space-y-3">
                {ABOUT_CONTENT.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <span className="text-violet mt-1">▸</span>
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border-2 border-violet/50 hover:bg-violet/10 transition-all font-semibold group"
            >
              <span>Download Resume</span>
              <span className="text-xl group-hover:translate-y-1 transition-transform">
                📄
              </span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
