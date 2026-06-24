"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SKILLS } from "@/lib/constants";
import { useInView } from "react-intersection-observer";

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    { title: "Frontend Core", skills: SKILLS.frontend, color: "violet" },
    { title: "Styling & Design", skills: SKILLS.styling, color: "cyber-pink" },
    { title: "Animation & 3D", skills: SKILLS.animation, color: "neon-cyan" },
    { title: "Tools & Workflow", skills: SKILLS.tools, color: "luminous-blue" },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
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
            Tech Stack & <span className="gradient-text-alt">Expertise</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Tools and technologies I use to bring ideas to life
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{ delay: categoryIndex * 0.2 }}
              className="glass rounded-2xl p-6 md:p-8 hover:shadow-glow transition-all duration-300"
            >
              <h3 className="text-2xl font-poppins font-semibold mb-6 flex items-center gap-3">
                <span className="text-3xl">💻</span>
                {category.title}
              </h3>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={
                      inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                    }
                    transition={{
                      delay: categoryIndex * 0.2 + skillIndex * 0.1,
                    }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-gray-300 font-medium flex items-center gap-2">
                        <span>{skill.icon}</span>
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-400">
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={
                          inView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.2,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className={`h-full bg-gradient-to-r from-${category.color} to-cyber-pink rounded-full relative`}
                        style={{
                          background: `linear-gradient(to right, var(--${category.color}), var(--cyber-pink))`,
                        }}
                      >
                        <div className="absolute right-0 top-0 bottom-0 w-2 bg-white/50 blur-sm animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "REST APIs",
              "GraphQL",
              "Firebase",
              "MongoDB",
              "PostgreSQL",
              "Docker",
              "CI/CD",
              "Jest",
              "Testing Library",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={
                  inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
                }
                transition={{ delay: 1.2 + index * 0.05 }}
                className="px-4 py-2 rounded-full glass text-sm text-gray-300 hover:bg-violet/10 hover:text-violet transition-all cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
