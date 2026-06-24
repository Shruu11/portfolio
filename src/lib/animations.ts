import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Fade in with slide up
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade in with slide down
export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade in with slide from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade in with slide from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger container
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Letter animation for text reveal
export const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

// Rotate in animation
export const rotateIn: Variants = {
  hidden: { opacity: 0, rotate: -180, scale: 0 },
  visible: {
    opacity: 1,
    rotate: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Blur reveal animation
export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// Card hover effect
export const cardHover = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -10,
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

// Button hover effect
export const buttonHover = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

// Magnetic effect
export const magneticEffect = {
  x: 0,
  y: 0,
  transition: { type: "spring", stiffness: 300, damping: 20 },
};

// Page transition
export const pageTransition = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
};

// Glow pulse animation
export const glowPulse: Variants = {
  initial: {
    boxShadow: "0 0 20px rgba(139, 92, 246, 0.4)",
  },
  animate: {
    boxShadow: [
      "0 0 20px rgba(139, 92, 246, 0.4)",
      "0 0 40px rgba(139, 92, 246, 0.8)",
      "0 0 20px rgba(139, 92, 246, 0.4)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
