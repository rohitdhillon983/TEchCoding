'use client'
import Image from 'next/image'
import React from 'react'
import AboutImage from '@/public/Images/img-about.png'

const About = () => {
  return (
    <div>
       <section className="flex min-h-screen flex-col lg:flex-row items-center justify-between px-10 py-16 bg-white relative">
        {/* Left Side - Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image src={AboutImage} alt="About Us" className="w-[90%] object-cover" />
        </div>

        {/* Right Side - Text Content */}
        <div className="w-full lg:w-1/2 text-left lg:pl-12">
          <h5 className="text-[#b91202] text-lg Rajdhani font-bold uppercase tracking-wider max-[769px]:text-sm max-[426px]:text-xs">// About Us</h5>
          <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani max-[426px]:text-3xl max-[769px]:text-5xl">Crafting Success Stories<br />One Client at a Time</h2>
          <p className="text-gray-600 mt-4 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
            the industry’s standard dummy text for decades.
          </p>
          <p className="text-gray-600 mt-3 leading-relaxed">
            Been the industry’s standard dummy text of the printing and typesetting industry.
          </p>
          <button className="mt-6 bg-[#b91202] Rubik text-white px-6 py-3 rounded-full font-semibold flex items-center hover:bg-red-700 transition cursor-pointer" onClick={() => window.location.href = '/about'}>
            DISCOVER MORE +
          </button>
        </div>
    </section>
    </div>
  )
}

export default About
