"use client"; // Ensures useEffect can be used

import { useEffect, useState } from "react";
import About from "@/components/About/About";
import Skills from "@/components/About/Skills";
import Contact from "@/components/Contact/Section";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects/Section";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div className="animate-spin h-12 w-12 border-4 border-white border-t-transparent rounded-full">SHAIK.MUHAMMAD.USMAN</div>
      </div>
    );
  }

  return (
    <div id="home" className="min-h-screen w-full bg-black bg-grid-white/[0.2] relative">
      {/* Gradient overlay */}
      <div className="absolute pointer-events-none inset-0 bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      {/* Content container */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
