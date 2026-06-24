"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { PROJECTS } from "@/lib/constants";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [filter, setFilter] = useState<"all" | "featured">("all");

  const filteredProjects =
    filter === "all" ? PROJECTS : PROJECTS.filter((p) => p.featured);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl" />
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
            Featured <span className="gradient-text-alt">Work</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-8"
          >
            A showcase of my recent projects and creative endeavors
          </motion.p>

          {/* Filter Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4"
          >
            <button
              onClick={() => setFilter("all")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === "all"
                  ? "bg-gradient-to-r from-violet to-cyber-pink text-white shadow-glow"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              All Projects
            </button>
            <button
              onClick={() => setFilter("featured")}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                filter === "featured"
                  ? "bg-gradient-to-r from-violet to-cyber-pink text-white shadow-glow"
                  : "glass text-gray-400 hover:text-white"
              }`}
            >
              Featured
            </button>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={scaleIn}
              custom={index}
              whileHover={{ y: -10 }}
              className="group relative glass rounded-2xl overflow-hidden hover:shadow-glow transition-all duration-300"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-violet/20 to-cyber-pink/20">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Featured Badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-gradient-to-r from-violet to-cyber-pink text-xs font-semibold">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-poppins font-semibold mb-2 group-hover:text-violet transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-white/5 text-gray-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-violet hover:text-cyber-pink transition-colors"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-violet hover:text-cyber-pink transition-colors"
                  >
                    <FaGithub className="w-4 h-4" />
                    Source Code
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-br from-violet/5 to-cyber-pink/5" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/shrutiMore"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full glass border-2 border-violet/50 hover:bg-violet/10 transition-all font-semibold group"
          >
            <span>View All Projects on GitHub</span>
            <FaGithub className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
