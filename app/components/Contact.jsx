import React from "react";
import { motion } from "motion/react";
import { portfolioData } from "@/data/portfolio";
import { Card } from "@/components/ui/card";
import { MailIcon, LinkedInIcon, XIcon } from "@/components/icons";

const Contact = () => {
  const { contact } = portfolioData;

  // Contact points configuration
  const contactLinks = [
    {
      id: "email",
      label: "[ email ]",
      value: "mohdsaadshaikh17@gmail.com",
      url: "mailto:mohdsaadshaikh17@gmail.com",
      icon: <MailIcon className="h-5 w-5" />
    },
    {
      id: "linkedin",
      label: "[ linkedin ]",
      value: "linkedin.com/in/ssaaaaddshaikh",
      url: "https://www.linkedin.com/in/ssaaaaddshaikh/",
      icon: <LinkedInIcon className="h-5 w-5" />
    },
    {
      id: "twitter",
      label: "[ twitter ]",
      value: "x.com/ssaaaadd_sh",
      url: "https://x.com/ssaaaadd_sh",
      icon: <XIcon className="h-4.5 w-4.5" />
    }
  ];

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
    <section id="contact" className="scroll-mt-24 flex flex-col gap-12">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="border-b border-border pb-6"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral font-sans">
          Contact
        </span>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          Get in touch
        </h2>
      </motion.div>

      {/* Grid of Contact Cards */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 font-sans"
      >
        {contactLinks.map((link) => {
          const cardContent = (
            <Card
              onClick={() => {
                const selection = window.getSelection().toString();
                if (!selection) {
                  if (link.id === "email") {
                    window.location.href = link.url;
                  } else {
                    window.open(link.url, "_blank", "noopener,noreferrer");
                  }
                }
              }}
              className="flex flex-col items-center text-center gap-4 apple-glass border border-white/[0.08] p-6 rounded-xl transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:border-coral hover:shadow-[0_0_12px_rgba(255,46,85,0.15)] h-full cursor-pointer select-text"
            >
              {/* Icon Container */}
              <div className="h-12 w-12 rounded-xl bg-background flex items-center justify-center text-muted group-hover:text-coral transition-colors duration-300 border border-border/60 select-none">
                {link.icon}
              </div>

              {/* Text Container */}
              <div className="flex flex-col gap-1 w-full min-w-0">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider transition-colors duration-200 text-sage select-none">
                  {link.label}
                </span>
                <span className="text-sm font-semibold text-ink break-words block select-text">
                  {link.value}
                </span>
              </div>
            </Card>
          );

          return (
            <motion.div
              key={link.id}
              variants={cardVariants}
              className="group h-full"
            >
              {cardContent}
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Contact;
