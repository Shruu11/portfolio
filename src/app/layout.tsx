import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shruti More | Frontend Developer & Creative Technologist",
  description:
    "Portfolio of Shruti More - A creative frontend developer crafting immersive digital experiences with React, Three.js, and modern web technologies.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Three.js",
    "Web Developer",
    "Creative Developer",
    "UI/UX",
  ],
  authors: [{ name: "Shruti More" }],
  openGraph: {
    title: "Shruti More | Frontend Developer",
    description:
      "Crafting pixels with purpose - Portfolio of a creative frontend developer",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="antialiased">
        <div className="noise-overlay">{children}</div>
      </body>
    </html>
  );
}
