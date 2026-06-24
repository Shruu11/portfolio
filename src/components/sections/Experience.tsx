"use client";

import { motion } from "framer-motion";
import { fadeInUp, fadeInLeft, staggerContainer } from "@/lib/animations";
import { EXPERIENCE } from "@/lib/constants";
import { useInView } from "react-intersection-observer";

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
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
            Journey <span className="gradient-text-alt">Timeline</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            My professional path and learning milestones
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet via-cyber-pink to-neon-cyan opacity-30" />

            {/* Timeline Items */}
            <div className="space-y-12">
              {EXPERIENCE.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={
                    inView
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }
                  }
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : { scale: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      className={`w-6 h-6 rounded-full ${
                        exp.current
                          ? "bg-gradient-to-br from-violet to-cyber-pink animate-pulse"
                          : "bg-white/20"
                      } border-4 border-space`}
                    />
                  </div>

                  {/* Content Card */}
                  <div
                    className={`w-full md:w-5/12 ml-20 md:ml-0 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    }`}
                  >
                    <motion.div
                      whileHover={{ scale: 1.02, y: -5 }}
                      className="glass rounded-2xl p-6 hover:shadow-glow transition-all duration-300"
                    >
                      {/* Year Badge */}
                      <div className="inline-block px-4 py-1 rounded-full bg-gradient-to-r from-violet/20 to-cyber-pink/20 text-sm font-semibold mb-3">
                        {exp.year}
                        {exp.current && <span className="ml-2">• Current</span>}
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl md:text-2xl font-poppins font-semibold mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-violet font-medium mb-3">
                        {exp.company}
                      </p>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="space-y-2">
                          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                            Key Achievements
                          </p>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, i) => (
                              <li
                                key={i}
                                className="text-sm text-gray-400 flex items-start gap-2"
                              >
                                <span className="text-violet mt-1 flex-shrink-0">
                                  ▸
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </motion.div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-5/12" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
