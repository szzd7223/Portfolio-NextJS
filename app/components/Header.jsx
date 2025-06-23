import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center mx-auto min-h-screen pt-30 flex flex-col items-center justify-center gap-4'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      >
        <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
      </motion.div>

      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo'>Hi! I'm Saad <Image src={assets.hand_icon} alt='' className='w-6'/></motion.h3>

      <motion.h1
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.5}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>Software Developer based in Bangalore</motion.h1>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.7}}
      className='max-w-2xl mx-auto font-ovo'>
        I am a software developer who enjoys building web applications and working on interesting projects. Always curious and learning, I like turning ideas into functional, clean code.
      </motion.p>

      <div className='flex flex-col sm:flex-row items-center gap-4 mt-4 font-outfit'>
        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1}}
        href="#contact" className='px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>Contact me<Image src={assets.right_arrow_white} alt='' className='w-4'/></motion.a>

        <motion.a
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 1}}
        href="/sample-resume.pdf" download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>My Resume<Image src={assets.download_icon} alt='' className='w-4'/></motion.a>
      </div>

      <motion.div
  initial={{ y: 30, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, delay: 1.2 }}
  className='flex items-center gap-10 mt-6'>

  {/* GitHub */}
  <motion.a
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.5, delay: 0.1, type: 'spring', stiffness: 120 }}
    href="https://github.com/szzd7223"
    target="_blank"
    rel="noopener noreferrer"
    className='w-20 h-20 flex items-center justify-center rounded-full overflow-hidden hover:scale-105 transition-transform duration-200'>
    <Image src={assets.github_icon} alt='GitHub' className='w-full h-full object-contain' />
  </motion.a>

  {/* LinkedIn */}
  <motion.a
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.5, delay: 0.2, type: 'spring', stiffness: 120 }}
    href="https://www.linkedin.com/in/ssaaaaddshaikh/"
    target="_blank"
    rel="noopener noreferrer"
    className='w-20 h-20 flex items-center justify-center rounded-full overflow-hidden hover:scale-105 transition-transform duration-200'>
    <Image src={assets.linkedin_icon} alt='LinkedIn' className='w-full h-full object-contain' />
  </motion.a>

  {/* Twitter */}
  <motion.a
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 0.5, delay: 0.3, type: 'spring', stiffness: 120 }}
    href="https://x.com/ssaaaadd_sh"
    target="_blank"
    rel="noopener noreferrer"
    className='w-20 h-20 flex items-center justify-center rounded-full overflow-hidden hover:scale-105 transition-transform duration-200'>
    <Image src={assets.twitter_icon} alt='Twitter' className='w-full h-full object-contain' />
  </motion.a>

</motion.div>



    </div>
  )
}

export default Header
