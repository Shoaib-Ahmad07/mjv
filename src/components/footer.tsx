import React from 'react'
import Link from 'next/link'
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

function footer() {
  return (
    <section className='bg-white py-10 mt-10 text-[#151515]'>
     <div className='container mx-auto px-4 '>
       <div className='max-w-[75%] mx-auto items-center mt-10 border border-none'>
         <h2 className='lg:text-5xl md:text-3xl text-2xl font-[600] text-center uppercase lg:leading-[67px]'>MJ VENTURES IS a company THAT IS inspired by the future</h2>
         <div className='mx-auto flex items-center text-center justify-center mt-10'>
            <Link href='/' className='text-[14px] py-3 w-48 px-8 bg-[#292929] font-[400] text-white rounded-[8px] hover:bg-white hover:text-[#292929] hover:border-[#292929] border border-[#292929] '>Get in Touch</Link>
         </div>
       </div>
     </div>
     <div className='mt-10 text-center overflow-hidden'>
        <h1 className='inline-block whitespace-nowrap animate-slide lg:text-6xl md:text-4xl text-2xl font-[700]'>
          Software Development + Generative AI Solutions + Web App Development + Mobile App Development + Product Strategy + UI/UX Design + Product Management + Data Science
        </h1>
      </div>

      <div className='container mx-auto px-4  mt-20'>
         <div className='flex flex-wrap justify-between items-center  gap-2'>
            <div className='font-[700] flex gap-5 flex-wrap'>
                <p>+1 (773) 710-6387</p>
                <p>support@mjventures.org</p>
            </div>
            <div className='flex lg:gap-5 gap-2 text-2xl '>
             <Link href=''>
               <FaLinkedin className='hover:text-blue-600'   />
             </Link>
             <Link href='https://www.youtube.com/@Mr.chatni07'>
               <FaYoutube className='hover:text-blue-600'  />
             </Link>
             <Link href=''>
               <RiInstagramFill className='hover:text-blue-600' /> 
             </Link>
            </div>
            
        </div>   
      </div>
    </section>
  )
}

export default footer