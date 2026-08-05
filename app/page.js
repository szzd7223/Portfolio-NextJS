'use client'
import { useEffect, useState } from "react";
import About from "./components/About";
import AboutMe from "./components/AboutMe";
import Contact from "./components/Contact";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Work from "./components/Work";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (
      localStorage.theme === 'dark' || 
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
      }
    }
  }, [isDarkMode, mounted]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Prevent hydration mismatch by rendering a clean blank skeleton before mount
  if (!mounted) {
    return <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0C0C0C]" />;
  }

  return (
    <main className="min-h-screen text-ink selection:bg-coral selection:text-white transition-colors duration-200">
      <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
      
      {/* Centered Site Shell Container */}
      <div className="mx-auto flex max-w-[960px] flex-col gap-16 px-6 py-8 sm:py-12 sm:gap-20">
        <Header />
        <Work />
        <About />
        <AboutMe />
        <Contact />
      </div>
    </main>
  );
}
