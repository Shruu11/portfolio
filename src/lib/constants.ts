// Site configuration and content
export const SITE_CONFIG = {
  name: "Shruti More",
  title: "Frontend Developer & Creative Technologist",
  tagline: "Crafting pixels with purpose",
  description:
    "Creative frontend developer passionate about building immersive digital experiences",
  email: "shruti.more@example.com",
  github: "https://github.com/shrutiMore",
  linkedin: "https://linkedin.com/in/shrutiMore",
  twitter: "https://twitter.com/shrutiMore",
};

// Navigation links
export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

// About section content
export const ABOUT_CONTENT = {
  bio: "Hey there! 👋 I'm a creative frontend developer who loves turning ideas into beautiful, interactive web experiences. With a passion for clean code and stunning design, I specialize in building modern web applications that don't just work—they wow.",
  highlights: [
    "Advanced React Patterns & Performance Optimization",
    "3D Web Experiences with Three.js",
    "Motion Design & Smooth Animations",
    "Responsive & Accessible UI Development",
  ],
  stats: [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "25+" },
    { label: "Happy Clients", value: "15+" },
    { label: "Code Commits", value: "2000+" },
  ],
};

// Projects data
export const PROJECTS = [
  {
    id: 1,
    title: "AI-Powered Dashboard",
    description:
      "A real-time analytics dashboard with AI-driven insights and beautiful data visualizations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    tags: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/shrutiMore/project1",
    featured: true,
  },
  {
    id: 2,
    title: "3D Product Showcase",
    description:
      "Interactive 3D product configurator with real-time rendering and smooth animations.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
    tags: ["Three.js", "React", "Framer Motion", "WebGL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/shrutiMore/project2",
    featured: true,
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce platform with seamless checkout flow and beautiful product galleries.",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&h=600&fit=crop",
    tags: ["Next.js", "Stripe", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/shrutiMore/project3",
    featured: true,
  },
  {
    id: 4,
    title: "Social Media App",
    description:
      "Real-time social networking platform with chat, stories, and content sharing features.",
    image:
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    tags: ["React", "Firebase", "Socket.io", "Material-UI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/shrutiMore/project4",
    featured: false,
  },
  {
    id: 5,
    title: "Portfolio Generator",
    description:
      "AI-powered portfolio generator that creates personalized websites in minutes.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    tags: ["Next.js", "OpenAI", "Prisma", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/shrutiMore/project5",
    featured: false,
  },
  {
    id: 6,
    title: "Weather Visualization",
    description:
      "Beautiful weather app with 3D globe visualization and real-time weather data.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop",
    tags: ["Three.js", "React", "Weather API", "GSAP"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/shrutiMore/project6",
    featured: false,
  },
];

// Skills data
export const SKILLS = {
  frontend: [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "TypeScript", level: 88, icon: "📘" },
    { name: "JavaScript", level: 95, icon: "🟨" },
    { name: "HTML5", level: 98, icon: "🌐" },
    { name: "CSS3", level: 95, icon: "🎨" },
  ],
  styling: [
    { name: "Tailwind CSS", level: 95, icon: "💨" },
    { name: "Sass/SCSS", level: 85, icon: "💅" },
    { name: "Styled Components", level: 80, icon: "💄" },
    { name: "CSS Modules", level: 85, icon: "📦" },
  ],
  animation: [
    { name: "Framer Motion", level: 90, icon: "🎬" },
    { name: "GSAP", level: 85, icon: "⚡" },
    { name: "Three.js", level: 80, icon: "🎮" },
    { name: "React Spring", level: 75, icon: "🌸" },
  ],
  tools: [
    { name: "Git & GitHub", level: 90, icon: "🔧" },
    { name: "Figma", level: 88, icon: "🎨" },
    { name: "VS Code", level: 95, icon: "💻" },
    { name: "Vite", level: 85, icon: "⚡" },
    { name: "Webpack", level: 80, icon: "📦" },
  ],
};

// Experience data
export const EXPERIENCE = [
  {
    id: 1,
    year: "2024 - Present",
    title: "Senior Frontend Developer",
    company: "Creative Tech Solutions",
    description:
      "Leading frontend development for enterprise-scale applications. Mentoring junior developers and establishing best practices for the team.",
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Implemented 3D interactive features using Three.js",
      "Led migration to TypeScript and modern React patterns",
    ],
    current: true,
  },
  {
    id: 2,
    year: "2023 - 2024",
    title: "Frontend Developer",
    company: "Digital Innovations Inc.",
    description:
      "Developed and maintained multiple client-facing web applications with focus on user experience and performance.",
    achievements: [
      "Built 10+ responsive web applications",
      "Integrated advanced animation libraries",
      "Collaborated with design team to implement pixel-perfect UIs",
    ],
    current: false,
  },
  {
    id: 3,
    year: "2022 - 2023",
    title: "Junior Frontend Developer",
    company: "StartUp Studio",
    description:
      "Worked on various web projects, learning modern frontend technologies and contributing to team success.",
    achievements: [
      "Rapidly learned React and modern JavaScript",
      "Contributed to 5+ successful product launches",
      "Improved code quality through peer reviews",
    ],
    current: false,
  },
  {
    id: 4,
    year: "2021 - 2022",
    title: "Computer Science Degree",
    company: "University of Technology",
    description:
      "Completed Bachelor of Science in Computer Science with focus on web technologies and software engineering.",
    achievements: [
      "GPA: 3.8/4.0",
      "Specialized in Web Development & UI/UX",
      "Led university tech club and hackathons",
    ],
    current: false,
  },
];

// Loading messages
export const LOADING_MESSAGES = [
  "Brewing pixels... ☕",
  "Summoning creativity... ✨",
  "Loading awesomeness... 🚀",
  "Crafting magic... 🎨",
  "Initializing wonder... 🌟",
];
