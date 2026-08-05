import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { GraduationCapIcon, LaptopIcon } from "@/components/icons";

// Helper function to return a clean lightweight custom SVG logo for each technology
const getTechIcon = (techName) => {
  const name = techName.toLowerCase();
  
  // Custom styled brand icons
  if (name.includes("react")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <g transform="translate(12, 12)">
          <ellipse rx="8" ry="3.1" transform="rotate(0)" />
          <ellipse rx="8" ry="3.1" transform="rotate(60)" />
          <ellipse rx="8" ry="3.1" transform="rotate(120)" />
          <circle cx="0" cy="0" r="1.5" fill="currentColor" />
        </g>
      </svg>
    );
  }
  if (name.includes("next.js")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 17V7l7 10V7" />
      </svg>
    );
  }
  if (name.includes("node.js") || name.includes("express")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z M12 2v20 M4 7l8 5 8-5" />
      </svg>
    );
  }
  if (name.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 12h20M4 12V9h3v3M8 12V9h3v3M12 12V9h3v3M6 9V6h3v3M10 9V6h3v3" />
      </svg>
    );
  }
  if (name.includes("python")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2A4 4 0 0 0 8 6v2h4v1H6a4 4 0 0 0-4 4v3a4 4 0 0 0 4 4h2v-2a2 2 0 0 1 2-2h4a2 2 0 0 0 2-2v-4a4 4 0 0 0-4-4h-2V6a2 2 0 0 1 2-2h2a2 2 0 0 0-2-2z" />
      </svg>
    );
  }
  if (name.includes("typescript") || name.includes("javascript")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17h3 M16 11v6" />
      </svg>
    );
  }
  if (name.includes("postgres") || name.includes("sql") || name.includes("db") || name.includes("mongo") || name.includes("redis") || name.includes("prisma") || name.includes("mongoose")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="8" ry="3" />
        <path d="M4 5v6c0 1.66 4 3 8 3s8-1.34 8-3V5" />
        <path d="M4 11v6c0 1.66 4 3 8 3s8-1.34 8-3v-6" />
      </svg>
    );
  }
  if (name.includes("git") || name.includes("ci/cd")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6M9 9h9" strokeLinecap="round" />
      </svg>
    );
  }
  if (name.includes("aws") || name.includes("gcp") || name.includes("cloud") || name.includes("google")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17.5 19A5.5 5.5 0 0 0 17 8H15.5A7.5 7.5 0 0 0 1 12.5A7.5 7.5 0 0 0 8.5 20h9" />
      </svg>
    );
  }
  if (name.includes("ros") || name.includes("tensor") || name.includes("torch") || name.includes("learn") || name.includes("ai")) {
    return (
      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <circle cx="6" cy="6" r="2" />
        <circle cx="18" cy="6" r="2" />
        <circle cx="6" cy="18" r="2" />
        <circle cx="18" cy="18" r="2" />
        <line x1="8" y1="8" x2="10" y2="10" />
        <line x1="16" y1="8" x2="14" y2="10" />
        <line x1="8" y1="16" x2="10" y2="14" />
        <line x1="16" y1="16" x2="14" y2="14" />
      </svg>
    );
  }
  
  // Default code brackets icon
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

const About = () => {
  const { skillsCategories, experiences, education } = portfolioData;

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.6
      }
    }
  };

  return (
    <section id="about" className="scroll-mt-24 flex flex-col gap-12">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="border-b border-border pb-6"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral font-sans">
          Profile & Stack
        </span>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Experience & Credentials
        </h2>
      </motion.div>

      {/* Experience & Education Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid gap-8 md:grid-cols-2 items-stretch"
      >
        {/* Experience Card */}
        <motion.div variants={cardVariants}>
          <Card className="apple-glass border border-white/[0.08] hover:border-coral hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 p-6 rounded-xl flex flex-col gap-6 h-full">
            <h3 className="text-lg font-bold font-sans uppercase tracking-wider text-ink flex items-center gap-2">
              <LaptopIcon className="h-5 w-5 text-coral" />
              <span>Experience</span>
            </h3>

            <div className="flex flex-col gap-6 border-l border-border/80 pl-4 ml-1">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex flex-col gap-1.5">
                  {/* Node point marker */}
                  <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-coral border border-background"></span>

                  <div className="flex flex-col gap-0.5 font-sans">
                    <h4 className="text-base font-bold text-ink leading-tight">
                      {exp.role}
                    </h4>
                    <div className="text-xs font-semibold text-muted/95">
                      {exp.company} <span className="text-border">|</span> {exp.location}
                    </div>
                    <div className="text-[10px] font-mono font-bold text-coral uppercase mt-1">
                      {exp.period}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>

        {/* Big Education Card */}
        <motion.div variants={cardVariants}>
          <Card className="apple-glass border border-white/[0.08] hover:border-coral hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 p-6 rounded-xl flex flex-col gap-6 h-full">
            <h3 className="text-lg font-bold font-sans uppercase tracking-wider text-ink flex items-center gap-2">
              <GraduationCapIcon className="h-5 w-5 text-coral" />
              <span>Education</span>
            </h3>

            <div className="flex flex-col gap-6 border-l border-border/80 pl-4 ml-1">
              <div className="relative flex flex-col gap-1.5">
                {/* Node point marker */}
                <span className="absolute -left-[21px] top-1.5 h-2 w-2 rounded-full bg-coral border border-background"></span>

                <div className="flex flex-col gap-0.5 font-sans">
                  <h4 className="text-base font-bold text-ink leading-tight">
                    {education.degree}
                  </h4>
                  <div className="text-xs font-semibold text-muted/95">
                    {education.institute} <span className="text-border">|</span> {education.location}
                  </div>
                  <div className="text-[10px] font-mono font-bold text-coral uppercase mt-1">
                    {education.year}
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>

      {/* Overhauled Tech Stack Card (All Visible, Dynamic Vector Logos on Hover) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardVariants}
      >
        <Card id="tech-stack" className="scroll-mt-24 apple-glass border border-white/[0.08] hover:border-coral hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 p-6 rounded-xl flex flex-col gap-6 font-sans">
          <h3 className="text-lg font-bold uppercase tracking-wider text-ink font-mono">
            [ Technical Stack ]
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillsCategories.map((cat) => (
              <div key={cat.id} className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-wider text-sage border-b border-border/40 pb-1.5 font-mono">
                  {`[ ${cat.name} ]`}
                </span>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 rounded-xl border border-border/70 bg-background/50 px-3 py-2 text-xs font-semibold text-muted/90 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:border-coral hover:text-coral hover:bg-surface hover:shadow-[0_0_12px_rgba(255,46,85,0.15)] select-none cursor-default group"
                    >
                      <span className="text-muted/65 group-hover:text-coral transition-colors duration-300">
                        {getTechIcon(skill.name)}
                      </span>
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </section>
  );
};

export default About;
