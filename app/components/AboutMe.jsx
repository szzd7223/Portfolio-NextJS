import React from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";

const AboutMe = () => {
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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
    <section id="about-me" className="scroll-mt-24 flex flex-col gap-12">
      {/* Section Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={headerVariants}
        className="border-b border-border pb-6"
      >
        <span className="text-xs font-bold uppercase tracking-[0.2em] text-coral font-sans">
          Introduction
        </span>
        <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-4xl">
          About me
        </h2>
      </motion.div>

      {/* Video Player Card (Desktop) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardVariants}
        className="w-full hidden sm:block"
      >
        <Card className="apple-glass border border-white/[0.08] hover:border-coral hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 p-6 rounded-2xl shadow-lg w-full aspect-[1.7] overflow-hidden">
          <div className="relative w-full aspect-video rounded-xl bg-black/20 overflow-hidden">
            <iframe
              src="https://drive.google.com/file/d/11TMrd4frXanmorTCRwiGftLWRlap8IQs/preview"
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </Card>
      </motion.div>

      {/* Mobile Video Link */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={cardVariants}
        className="w-full sm:hidden"
      >
        <Card className="apple-glass border border-white/[0.08] hover:border-coral hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 p-6 rounded-2xl shadow-lg w-full text-center">
          <p className="text-muted-foreground">
            Watch my intro video{" "}
            <a
              href="https://drive.google.com/file/d/11TMrd4frXanmorTCRwiGftLWRlap8IQs/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-coral font-medium underline hover:opacity-80 transition-opacity"
            >
              here
            </a>.
          </p>
        </Card>
      </motion.div>
    </section>
  );
};

export default AboutMe;
