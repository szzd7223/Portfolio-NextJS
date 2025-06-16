import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20 font-outfit'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Introduction</h4>
      <h2 className='text-center text-5xl font-ovo'>About Me</h2>

      <div className='max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-20 my-20'>
        <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
            <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
        </div>
        <div className='flex-1'>
            <p className='mb-10 max-w-2xl font-ovo'>I’m a passionate developer with experience building full-stack web applications. I enjoy working with modern technologies like React, Next.js, Node.js, and Python to create clean, efficient, and user-friendly solutions. I’m always exploring new tools and learning to improve my skills.</p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon, iconDark, title, description}, index)=>(
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black' key={index}>
                        <Image src={icon} alt={title} className='w-7 mt-3'/>
                        <h3 className='my-4 font-semibold text-gray-700 leading-tight'>{title}</h3>
                        <p className='text-gray-600 text-sm leading-tight'>{description.split('\n').map((line, index) => (
                                            <span key={index}>
                                            {line}
                                            <br />
                                            </span>
                                        ))}</p>
                    </li>
                ))}
            </ul>

            <h4 className='my-6 text-gray-700 font-ovo'>Tools I use</h4>

            <ul className='flex items-center gap-3 sm:gap-5'>
                {console.log(toolsData)}

                {toolsData.map((tool,index)=>(
                    <li className='flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500' key={index}>
                        <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                    </li>
                ))}
            </ul>
        </div>
      </div>
    </div>
  )
}

export default About
