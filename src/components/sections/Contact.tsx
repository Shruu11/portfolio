"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SITE_CONFIG } from "@/lib/constants";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 1500);
  };

  const socialLinks = [
    {
      icon: FaGithub,
      href: SITE_CONFIG.github,
      label: "GitHub",
      color: "hover:text-violet",
    },
    {
      icon: FaLinkedin,
      href: SITE_CONFIG.linkedin,
      label: "LinkedIn",
      color: "hover:text-cyber-pink",
    },
    {
      icon: FaTwitter,
      href: SITE_CONFIG.twitter,
      label: "Twitter",
      color: "hover:text-neon-cyan",
    },
    {
      icon: FaEnvelope,
      href: `mailto:${SITE_CONFIG.email}`,
      label: "Email",
      color: "hover:text-luminous-blue",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-pink/10 rounded-full blur-3xl"
        />
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
            {"Let's Build"}{" "}
            <span className="gradient-text-alt">Something</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-400 text-lg max-w-2xl mx-auto"
          >
            Have a project in mind? {"Let's"} collaborate and create something
            amazing together!
          </motion.p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-5 gap-8">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ delay: 0.2 }}
              className="md:col-span-3"
            >
              <form
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-8 space-y-6"
              >
                {/* Name Input */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet transition-all"
                    placeholder="Your name"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Message Textarea */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-violet focus:ring-1 focus:ring-violet transition-all resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting || submitStatus === "success"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-full font-semibold text-lg transition-all ${
                    submitStatus === "success"
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-violet to-cyber-pink text-white shadow-glow hover:shadow-glow-lg"
                  } disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2`}
                >
                  {isSubmitting && (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  )}
                  {submitStatus === "success" ? (
                    <>Success! Message sent 🎉</>
                  ) : isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <span className="text-xl">✨</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: 0.4 }}
              className="md:col-span-2 space-y-6"
            >
              {/* Social Links */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-poppins font-semibold mb-6">
                  Connect With Me
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, x: 20 }}
                      animate={
                        inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                      }
                      transition={{ delay: 0.6 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className={`flex items-center gap-4 text-gray-300 ${social.color} transition-colors group`}
                    >
                      <div className="w-12 h-12 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-all">
                        <social.icon className="w-5 h-5" />
                      </div>
                      <span className="font-medium">{social.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="glass rounded-2xl p-8">
                <h3 className="text-xl font-poppins font-semibold mb-4">
                  Quick Response
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  I typically respond within 24-48 hours. For urgent inquiries,
                  feel free to reach out via email directly.
                </p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-sm text-gray-500">
                    <span className="text-violet font-semibold">📍</span> Open
                    to remote opportunities worldwide
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
