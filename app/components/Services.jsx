import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {
  return (
    <motion.div
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id="services" className='w-full px-[12%] py-10 scroll-mt-20 font-outfit'>
      <motion.h4
      initial={{y: -20, opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{delay:0.3, duration: 0.5}}
      className='text-center mb-2 text-lg font-ovo'>What I offer</motion.h4>
      <motion.h2
      initial={{y: -20, opacity: 0}}
    whileInView={{y:0, opacity: 1}}
    transition={{delay:0.3, duration: 0.5}}
      className='text-center text-5xl font-ovo'>My Services</motion.h2>

      <motion.p
      initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay:0.7, duration: 0.5}}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I offer full-stack web development services, building responsive and high-performance websites using modern frameworks like React, Next.js, and Node.js. I also help integrate APIs, manage databases, and ensure clean, maintainable code. Whether it's a portfolio, dashboard, or custom web app — I can bring it to life.
      </motion.p>

      <motion.div
      initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{delay:0.9, duration: 0.6}}
      className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index)=>(
            <motion.div
            whileHover={{scale: 1.05}}
            key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                    {description}
                </p>
                {/* <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
                </a> */}
            </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Services
