'use client'
import Image from 'next/image'
import React from 'react'
import AboutImage from '@/public/Images/img-about.png'

const About = () => {
  return (
    <div>
       <section className="flex min-h-screen flex-col lg:flex-row items-center justify-between px-10 py-16 bg-white relative">

        <div className="relative w-full lg:w-1/2 flex justify-center">
          <Image src={AboutImage} alt="About Us" className="w-[90%] object-cover" />
        </div>

        <div className="w-full lg:w-1/2 text-left lg:pl-12">
          <h5 className="text-[#b91202] text-lg Rajdhani font-bold uppercase tracking-wider max-[769px]:text-sm max-[426px]:text-xs">// About Us</h5>
          <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani max-[426px]:text-3xl max-[769px]:text-5xl">Crafting Success Stories<br />One Client at a Time</h2>
          <p className="text-gray-600 my-6">
            At TechCoding.in, we transform ideas into reality with cutting-edge web & mobile development solutions. From startups to enterprises, we craft scalable, secure, and high-performance digital experiences.
            </p>
            <p className="text-gray-600 ">
                With a team of skilled developers and a commitment to excellence, we deliver exceptional results that drive business growth and user satisfaction.
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
