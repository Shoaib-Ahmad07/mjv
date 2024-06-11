"use client"
import React, { useState } from 'react';


function navbar () {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <header className=" text-white">
    <div className="container mx-auto flex justify-between items-center p-5 ">
      <img src="/image/logo.svg" alt="Logo" />
      <nav className="hidden md:flex space-x-6  font-[500]">
        <a href="/services" className="hover:text-gray-300 mt-2">About Us</a>
        <a href="/why-choose-us" className="hover:text-gray-300 mt-2">Services</a>
        <a href="/faq" className="hover:text-gray-300 mt-2">Our Team</a>
        <a href="/about-us" className="hover:text-gray-300 mt-2">Projects</a>
        <a href="/about-us" className="hover:text-gray-300 mt-2">Blog</a>
      </nav>
      <button className="rounded-[8px] py-2 px-5 bg-[#292929] hidden md:block hover:bg-black hover:border-white border border-[#292929]">Contact Us</button>
      <div className="md:hidden">
        <button
          className="focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>
    </div>
    {isMenuOpen && (
      <nav className="md:hidden bg-white text-black p-4 space-y-2">
        <a href="/services" className="block px-4 py-2 hover:bg-gray-600">Services</a>
        <a href="/why-choose-us" className="block px-4 py-2 hover:bg-gray-600">Why Choose Us?</a>
        <a href="/faq" className="block px-4 py-2 hover:bg-gray-600">FAQ</a>
        <a href="/about-us" className="block px-4 py-2 hover:bg-gray-600">About Us</a>
        <button className="w-full border py-2 px-5 hover:bg-gray-600">Contact Us</button>
      </nav>
    )
    }
  </header>
  )
}

export default navbar