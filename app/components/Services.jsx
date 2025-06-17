import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = () => {
  return (
    <div id="services" className='w-full px-[12%] py-10 scroll-mt-20 font-outfit'>
      <h4 className='text-center mb-2 text-lg font-ovo'>What I offer</h4>
      <h2 className='text-center text-5xl font-ovo'>My Services</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I offer full-stack web development services, building responsive and high-performance websites using modern frameworks like React, Next.js, and Node.js. I also help integrate APIs, manage databases, and ensure clean, maintainable code. Whether it's a portfolio, dashboard, or custom web app — I can bring it to life.
      </p>

      <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 my-10'>
        {serviceData.map(({icon, title, description, link}, index)=>(
            <div key={index}
            className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                <Image src={icon} alt='' className='w-10'/>
                <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>
                    {description}
                </p>
                <a href={link} className='flex items-center gap-2 text-sm mt-5'>
                    Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
                </a>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Services
