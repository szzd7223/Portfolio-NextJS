import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { ExternalLinkIcon, GitHubIcon } from "@/components/icons";

const Work = () => {
  const { featuredProjects } = portfolioData;

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
    <section id="work" className="scroll-mt-24 flex flex-col gap-12">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="border-b border-border pb-6"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral font-sans">
          Projects
        </span>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Featured Projects
        </h2>
      </motion.div>

      {/* Grid of Featured Projects */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid gap-6 md:grid-cols-2"
      >
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={cardVariants}
            className="h-full"
          >
            <Card className="flex flex-col h-full apple-glass border border-white/[0.08] hover:border-coral p-6 rounded-xl hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_8px_30px_rgba(217,78,78,0.15)] transition-all duration-300 group">
              {/* Top Tag line */}
              <div className="text-[10px] font-bold uppercase tracking-[0.15em] text-sage mb-2.5">
                {project.tag}
              </div>

              {/* Title & Description */}
              <div className="flex flex-col gap-2 mb-5">
                <h3 className="font-sans text-lg font-semibold tracking-tight text-ink group-hover:text-coral transition-colors duration-200 min-h-[56px] flex items-center">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <p className="text-sm leading-relaxed text-muted font-sans min-h-[110px]">
                  {project.description}
                </p>
              </div>

              {/* Card Footer: Tech pills and consistent Links */}
              <div className="flex items-center justify-between border-t border-border/40 mt-auto pt-4 gap-4 font-sans font-medium">
                <div className="flex flex-wrap gap-1 h-12 overflow-hidden">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="rounded-full px-2.5 py-0.5 text-[10px] font-semibold text-muted bg-border/40 border border-border/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-3 text-xs font-mono text-muted select-none">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-coral transition-colors duration-200 flex items-center gap-1"
                  >
                    <GitHubIcon className="h-3.5 w-3.5" />
                    <span>github</span>
                  </a>
                  {project.liveUrl && (
                    <>
                      <span className="text-border/60">/</span>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-coral transition-colors duration-200 flex items-center gap-1"
                      >
                        <ExternalLinkIcon className="h-3.5 w-3.5" />
                        <span>live</span>
                      </a>
                    </>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Work;
