"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaHeart,
} from "react-icons/fa";
import { SITE_CONFIG } from "@/lib/constants";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FaGithub, href: SITE_CONFIG.github, label: "GitHub" },
    { icon: FaLinkedin, href: SITE_CONFIG.linkedin, label: "LinkedIn" },
    { icon: FaTwitter, href: SITE_CONFIG.twitter, label: "Twitter" },
    { icon: FaEnvelope, href: `mailto:${SITE_CONFIG.email}`, label: "Email" },
  ];

  return (
    <footer className="relative py-12 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-clash font-bold gradient-text-alt mb-2">
              {SITE_CONFIG.name}
            </h3>
            <p className="text-gray-400 italic">
              &quot;Brewing pixels, one line at a time&quot;
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-violet/20 transition-colors group"
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5 text-gray-400 group-hover:text-violet transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-sm text-gray-400"
          >
            <p className="flex items-center justify-center gap-2">
              Made with <FaHeart className="text-cyber-pink animate-pulse" /> by{" "}
              {SITE_CONFIG.name} • {currentYear}
            </p>
            <p className="mt-2 text-xs">
              Designed & Developed with React, Next.js, Three.js & Framer Motion
            </p>
          </motion.div>

          {/* Tiny 3D Logo Animation Placeholder */}
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet to-cyber-pink opacity-50"
          />
        </div>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-violet/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-pink/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
