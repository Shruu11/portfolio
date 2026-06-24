import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        space: "#0F0326",
        violet: "#8B5CF6",
        "cyber-pink": "#EC4899",
        "neon-cyan": "#06B6D4",
        "luminous-blue": "#3B82F6",
      },
      fontFamily: {
        clash: ['"Clash Display"', "sans-serif"],
        outfit: ["Outfit", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        dm: ['"DM Sans"', "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite",
        tilt: "tilt 10s linear infinite",
        "bounce-slow": "bounce 3s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        gradient: "gradient 8s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%, 100%": { opacity: "1", filter: "brightness(1)" },
          "50%": { opacity: "0.8", filter: "brightness(1.2)" },
        },
        tilt: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(1deg)" },
          "75%": { transform: "rotate(-1deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-hero": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-card":
          "linear-gradient(to bottom right, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))",
      },
      boxShadow: {
        glow: "0 0 20px rgba(139, 92, 246, 0.5)",
        "glow-lg": "0 0 40px rgba(139, 92, 246, 0.6)",
        neon: "0 0 10px rgba(236, 72, 153, 0.5), 0 0 20px rgba(139, 92, 246, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
