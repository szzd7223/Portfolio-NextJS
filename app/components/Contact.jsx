import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'

const Contact = () => {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "9b1210b0-604f-45a1-8480-3706a65ae9ac");

        const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
        });

        const data = await response.json();

        if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        } else {
        console.log("Error", data);
        setResult(data.message);
        }
    };

  return (
    <div id='contact' className='w-full px-[12%] py-10 scroll-mt-20 font-outfit bg-[url("/footer-bg-color.png") bg-no-repeat bg-center bg-[length:90%_auto] dark:bg-none'>
      <h4 className='text-center mb-2 text-lg font-ovo'>Contact with me</h4>
      <h2 className='text-center text-5xl font-ovo'>Get in touch</h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>
        I’m currently open to full-time roles, internships, or freelance opportunities. If you’re hiring or have something exciting in mind, feel free to reach out — I’d love to connect and explore how I can contribute.
      </p>

      <form className='max-w-2xl mx-auto' onSubmit={onSubmit}>
        <div className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-6 mt-10 mb-8'>
            <input type="text" placeholder='Enter your name' required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='name'/>
            <input type="email" placeholder='Enter your email' required 
            className='flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/90' name='email'/>
        </div>
        <textarea rows="6" placeholder='Enter your message' required 
        className='w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/90' name='message'></textarea>

        <button type='submit' className='py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500 cursor-pointer dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover'>Submit <Image src={assets.right_arrow_white} alt='' className='w-4'/></button>

        <p className='mt-4'>{result}</p>
      </form>
    </div>
  )
}

export default Contact
