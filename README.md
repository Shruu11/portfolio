# 🎨 Shruti More - Portfolio Website

A stunning, 3D-powered portfolio website built with Next.js, React, Three.js, and Framer Motion. This portfolio showcases modern web development techniques with immersive animations and interactive 3D elements.

![Portfolio Preview](https://via.placeholder.com/1200x600/0F0326/8B5CF6?text=Shruti+More+Portfolio)

## ✨ Features

- 🎭 **3D Interactive Elements** - Powered by Three.js and React Three Fiber
- 🎬 **Smooth Animations** - Using Framer Motion and GSAP
- 🎨 **Modern UI/UX** - Glassmorphism, gradient effects, and neon accents
- 📱 **Fully Responsive** - Mobile-first design approach
- ⚡ **Optimized Performance** - Built with Next.js 14 and TypeScript
- 🌐 **SEO Friendly** - Meta tags and semantic HTML
- ♿ **Accessible** - WCAG compliant

## 🚀 Tech Stack

### Core

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **React 18** - UI library

### Styling

- **Tailwind CSS** - Utility-first CSS framework
- **Custom CSS** - Advanced animations and effects

### Animation & 3D

- **Framer Motion** - Animation library for React
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for React Three Fiber
- **Three.js** - 3D graphics library
- **GSAP** - Professional-grade animation

### Additional Libraries

- **react-intersection-observer** - Scroll-based animations
- **react-icons** - Icon library
- **canvas-confetti** - Confetti effects
- **react-hot-toast** - Toast notifications

## 📦 Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/Web-Dev-portfolio.git
   cd Web-Dev-portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
shruti-portfolio/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js app directory
│   │   ├── globals.css # Global styles
│   │   ├── layout.tsx  # Root layout
│   │   └── page.tsx    # Home page
│   ├── components/
│   │   ├── layout/     # Layout components (Navbar, Footer)
│   │   └── sections/   # Page sections (Hero, About, etc.)
│   └── lib/
│       ├── animations.ts  # Framer Motion variants
│       ├── constants.ts   # Site content and config
│       └── utils.ts       # Utility functions
├── tailwind.config.ts  # Tailwind configuration
├── tsconfig.json       # TypeScript configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Update Personal Information

Edit `src/lib/constants.ts` to update:

- Name and title
- Bio and description
- Projects
- Skills
- Experience
- Social media links

### Modify Colors

Update `tailwind.config.ts` to change the color scheme:

```typescript
colors: {
  space: '#0F0326',      // Background
  violet: '#8B5CF6',     // Primary
  'cyber-pink': '#EC4899', // Secondary
  'neon-cyan': '#06B6D4',  // Accent
}
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Click Deploy - Vercel will automatically detect Next.js

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

---

Made with 💜 by Shruti More • 2025
