"use client"
import React, { useState } from 'react'
import Link from 'next/link'

function Hero() {
  const [selectedText, setSelectedText] = useState('');

  const handleClick = (text) => {
    setSelectedText(text);
  };

  return (
    <>
      <section className='container mx-auto px-4'>
        <div className='flex flex-col lg:flex-row lg:gap-4 mt-10 '>
          <div className='lg:mt-[118px]'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[45px] font-[600]'>
              BUILDING CUSTOM AI AGENTS FOR
            </h1>
          </div>
          <div className=''>
            <div className='cursor-pointer hidden lg:block'>
              <h1
                onClick={() => handleClick('Startups')}
                className='text-lg font-[600] text-[#1c1c1c]'
              >
                Startups
              </h1>
              <h1
                onClick={() => handleClick('Agency')}
                className='text-xl font-[600] text-[#2e2e2e]'
              >
                Agency
              </h1>
              <h1
                onClick={() => handleClick('Non-Profit')}
                className='text-2xl font-[600] text-[#363636]'
              >
                Non-Profit
              </h1>
            </div>
            <h1 className='text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-[600] '>
              {selectedText || 'EVERYONE'}
            </h1>
            <div className='cursor-pointer hidden lg:block'>
              <h1
                onClick={() => handleClick('Government')}
                className='text-2xl font-[600] text-[#363636]'
              >
                Government
              </h1>
              <h1
                onClick={() => handleClick('Universities')}
                className='text-xl font-[600] text-[#2e2e2e]'
              >
                Universities
              </h1>
              <h1
                onClick={() => handleClick('SMBs')}
                className='text-lg font-[600] text-[#1c1c1c]'
              >
                SMBs
              </h1>
            </div>
          </div>
        </div>
        <div className='mt-10'>
          <Link href='/' className='bg-white text-black rounded-[8px] py-4 px-8 font-[600] hover:bg-black border hover:text-white'>
            Let’s Discuss
          </Link>
        </div>
      </section>
      <div className='border border-[#262626] mt-20'></div>
    </>
  )
}

export default Hero;
