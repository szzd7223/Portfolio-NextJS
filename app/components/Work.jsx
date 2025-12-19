import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20 font-outfit"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center mb-2 text-lg font-ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        My latest work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo"
      >
        Here are some of the projects I’ve built using modern web technologies.
        Each project reflects my skills in design, development, and
        problem-solving.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="
    grid
    grid-cols-1
    sm:grid-cols-2
    my-10
    gap-6
  "
      >
        {workData.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="
        aspect-[16/9]
        rounded-lg
        relative
        cursor-pointer
        group
        overflow-hidden
        bg-center
        bg-cover
      "
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="
          absolute
          inset-x-6
          bottom-6
          h-32
          bg-white
          rounded-md
          px-5
          py-4
          flex
          items-start
          justify-between
          gap-4
          transition-all
          duration-500
          group-hover:bottom-8
          no-underline
        "
            >
              <div className="flex flex-col gap-1 overflow-hidden">
                <h2
                  className="
            font-semibold
            text-black
            leading-snug
            line-clamp-2
          "
                >
                  {project.title}
                </h2>

                <p
                  className="
            text-sm
            text-gray-600
            leading-snug
            line-clamp-2
          "
                >
                  {project.description}
                </p>
              </div>

              <div
                className="
          shrink-0
          border
          border-black
          rounded-full
          w-9
          aspect-square
          flex
          items-center
          justify-center
          shadow-[2px_2px_0_#000]
          transition
          group-hover:bg-lime-300
        "
              >
                <Image src={assets.send_icon} alt="send icon" className="w-5" />
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
