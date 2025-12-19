import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion, scale } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="w-full px-[8%] lg:px-[12%] py-16 scroll-mt-20 font-outfit"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-base font-ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-ovo"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mt-20 grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-14 items-start"
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center lg:justify-start"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-60 sm:w-72 rounded-3xl"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col"
        >
          <p className="mb-8 max-w-2xl font-ovo text-sm leading-relaxed text-center lg:text-left">
            I’m a software developer who builds reliable full-stack web
            applications using modern technologies. I enjoy working with React,
            Next.js, Node.js, and Python to create clean, efficient, and
            user-friendly solutions while continuously learning and improving.
          </p>

          {/* Info cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-3xl auto-rows-fr"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.04 }}
                key={index}
                className="h-full border border-gray-400 rounded-xl px-4 py-5 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-300 dark:border-white dark:hover:bg-darkHover/50 flex flex-col"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt={title}
                  className="w-6 mb-3"
                />
                <h3 className="mb-1 text-sm font-semibold text-gray-700 leading-snug dark:text-white">
                  {title}
                </h3>
                <p className="text-xs leading-snug text-gray-600 dark:text-white/80">
                  {description.split("\n").map((line, i) => (
                    <span key={i}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          {/* Tools */}
          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="mt-8 mb-3 text-sm text-gray-700 font-ovo text-center lg:text-left dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileHover={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-11 sm:w-12 aspect-square border border-gray-400 rounded-md cursor-pointer hover:-translate-y-1 duration-300"
              >
                <Image src={tool} alt="Tool" className="w-4 sm:w-5" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
