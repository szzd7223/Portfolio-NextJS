import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { Button } from "@/components/ui/button";
import { GitHubIcon, LinkedInIcon, XIcon, MailIcon, DownloadIcon } from "@/components/icons";

const Header = () => {
  const { name, title, tagline, bio, avatar, socials, resumeLink } = portfolioData.personalInfo;

  // Typing animation configuration
  const normalPart = "Software dev, working with Node.js, React.js, Next.js, Python and Java.\nI build whatever I like and it's usually good.\nI can build high quality software that you'd want, ";
  const highlightedPart = "definitely.";
  const fullTextLength = normalPart.length + highlightedPart.length;

  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let interval;
    const startTimeout = setTimeout(() => {
      interval = setInterval(() => {
        setCharCount((prev) => {
          if (prev >= fullTextLength) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 70); // Natural character-by-character typing speed (70ms)
    }, 200);

    return () => {
      clearTimeout(startTimeout);
      if (interval) clearInterval(interval);
    };
  }, [fullTextLength]);

  const typedNormal = normalPart.slice(0, charCount);
  const typedHighlight = charCount > normalPart.length
    ? highlightedPart.slice(0, charCount - normalPart.length)
    : "";

  return (
    <section className="flex flex-col items-center pt-8 text-center sm:pt-14">
      {/* Profile Image with clean border and shadow */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative h-[136px] w-[136px]"
      >
        <Image
          src={avatar}
          alt={name}
          priority
          width={136}
          height={136}
          className="h-full w-full rounded-full border-2 border-border object-cover shadow-[0_8px_24px_rgba(26,26,26,0.06)] dark:shadow-[0_8px_24px_rgba(0,0,0,0.4)]"
        />
      </motion.div>

      {/* Name in Serif */}
      <motion.h1
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="mt-7 font-serif text-5xl font-semibold leading-none tracking-tight text-ink sm:text-7xl"
      >
        {name}
      </motion.h1>

      {/* Tagline / Subtitle */}
      <motion.p
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-5 max-w-none font-sans text-lg font-medium leading-relaxed text-muted sm:text-2xl"
      >
        {title}
      </motion.p>

      {/* Short Bio with Typewriter Animation */}
      <motion.p
        initial={{ y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-4 max-w-[580px] font-sans text-sm leading-relaxed text-muted sm:text-base whitespace-pre-line min-h-[48px]"
      >
        <span>{typedNormal}</span>
        {typedHighlight && (
          <span className="text-coral font-bold transition-colors duration-200">
            {typedHighlight}
          </span>
        )}
        {charCount < fullTextLength && (
          <span className="inline-block w-[3px] h-[1.1em] align-middle bg-coral ml-1 animate-[pulse_0.8s_infinite]" />
        )}
      </motion.p>

      {/* Social Capsule Grid using custom Button components */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-9 flex flex-wrap justify-center gap-4 w-full"
      >
        <Button variant="outline" asChild className="h-14 min-w-[145px] sm:min-w-[160px] justify-center font-semibold text-lg hover:text-coral transition-all apple-glass rounded-xl border border-white/[0.08] hover:border-coral hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(217,78,78,0.2)] shadow-sm px-6">
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon className="h-5 w-5" />
            <span>LinkedIn</span>
          </a>
        </Button>

        <Button variant="outline" asChild className="h-14 min-w-[145px] sm:min-w-[160px] justify-center font-semibold text-lg hover:text-coral transition-all apple-glass rounded-xl border border-white/[0.08] hover:border-coral hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(217,78,78,0.2)] shadow-sm px-6">
          <a href={socials.twitter} target="_blank" rel="noopener noreferrer">
            <XIcon className="h-4 w-4" />
            <span>Twitter</span>
          </a>
        </Button>

        <Button variant="outline" asChild className="h-14 min-w-[145px] sm:min-w-[160px] justify-center font-semibold text-lg hover:text-coral transition-all apple-glass rounded-xl border border-white/[0.08] hover:border-coral hover:scale-105 hover:-translate-y-0.5 hover:shadow-[0_0_12px_rgba(217,78,78,0.2)] shadow-sm px-6">
          <a href={socials.github} target="_blank" rel="noopener noreferrer">
            <GitHubIcon className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </Button>
      </motion.div>

      {/* Direct Resume Download Link */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8"
      >
        <Button variant="ghost" size="sm" asChild>
          <a href={resumeLink} download className="flex items-center gap-2 text-xs font-semibold text-muted hover:text-coral uppercase tracking-wider">
            <DownloadIcon className="h-4 w-4" />
            <span>Download PDF Resume</span>
          </a>
        </Button>
      </motion.div>
    </section>
  );
};

export default Header;
