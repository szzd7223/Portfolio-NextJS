import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MailIcon, ChevronIcon } from "@/components/icons";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 w-full z-50 h-16 flex items-center transition-all duration-300 ${
          isScrolled
            ? "md:bg-background/70 md:backdrop-blur-md md:border-b md:border-border/50 md:shadow-[0_2px_8px_rgba(26,26,26,0.02)] bg-transparent border-b-0 shadow-none"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto w-full max-w-[960px] px-6 flex items-center">
          {/* Center Links (Desktop) */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold text-muted">
            <li>
              <a href="#top" className="hover:text-ink transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#work" className="hover:text-ink transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-ink transition-colors">
                Background
              </a>
            </li>
            <li>
              <a href="#tech-stack" className="hover:text-ink transition-colors">
                Tech stack
              </a>
            </li>
            <li>
              <a href="#about-me" className="hover:text-ink transition-colors">
                About me
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-ink transition-colors">
                Contact
              </a>
            </li>
          </ul>

          {/* Right Controls */}
          <div className="flex items-center gap-3 ml-auto">
            {/* CTA button (Desktop) */}
            <Button variant="outline" size="sm" asChild className="hidden md:inline-flex h-9 text-xs font-semibold hover:text-coral transition-all apple-glass rounded-lg border border-white/[0.08] hover:border-coral hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(217,78,78,0.2)] shadow-sm px-4">
              <a href="#contact">
                <span>Hire Me</span>
                <ChevronIcon direction="right" className="h-3 w-3" />
              </a>
            </Button>

            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
              className="md:hidden h-9 w-9 rounded-full flex items-center justify-center apple-glass border border-white/[0.08] hover:border-coral text-ink hover:text-coral transition-all active:scale-95 cursor-pointer shadow-sm"
            >
              {mobileMenuOpen ? (
                // Close Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              ) : (
                // Menu Icon
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.8"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <div
          className={`md:hidden fixed left-4 right-4 top-[68px] bg-background/95 backdrop-blur-xl border border-white/[0.08] p-6 rounded-2xl flex flex-col gap-4 shadow-lg transition-all duration-300 ease-out origin-top ${
            mobileMenuOpen ? "scale-y-100 opacity-100 visible" : "scale-y-0 opacity-0 invisible"
          }`}
        >
          <ul className="flex flex-col gap-4 text-base font-semibold text-muted">
            <li>
              <a
                href="#top"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-ink block py-1.5 transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#work"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-ink block py-1.5 transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-ink block py-1.5 transition-colors"
              >
                Background
              </a>
            </li>
            <li>
              <a
                href="#tech-stack"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-ink block py-1.5 transition-colors"
              >
                Tech stack
              </a>
            </li>
            <li>
              <a
                href="#about-me"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-ink block py-1.5 transition-colors"
              >
                About me
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-ink block py-1.5 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
