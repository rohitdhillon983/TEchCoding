'use client'
import Image from 'next/image'
import React from 'react'
import ContactImage from '@/public/Images/contact.png'
import icon1 from '@/public/Images/icon-1.png'
import icon2 from '@/public/Images/icon-2.png'
import aboutImg1 from '@/public/Images/about/about.png'
import aboutImg2 from '@/public/Images/about/about2.png'
import dotImg from '@/public/Images/about/dots.png'
import { FaAngleDoubleRight } from "react-icons/fa";
import MeetExperts from '@/Components/MeetExperts'
import OurMisson from '@/public/Images/about/our-mission.59796e78.svg'
import OurVision from '@/public/Images/about/our-vision.65d5be3b.svg'
import OurGoal from '@/public/Images/about/our-goal.0d90c0d3.svg'
import ourPatner from '@/public/Images/about/our-partners.670ff3c8.svg'

const About = () => {
  return (
    <div>
      <section className='relative min-h-[80vh] overflow-hidden border w-full flex justify-center bg-[#171616e3]'>
        <Image src={icon1} alt="Contact Us" className="absolute left-0 z-0" />
        <Image src={ContactImage} alt="Contact Us" className="w-full max-h-[100%] -z-10 scaleAnimate" />
        <Image src={icon2} alt="Contact Us" className="absolute right-0 bottom-0 z-10" />
      
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
            <h2 className="text-7xl font-bold border-b-4 border-[#b91202] w-fit mx-auto">About Us</h2>
            <p className="text-2xl mt-2 flex items-center gap-2">Home <FaAngleDoubleRight className='text-[#b91202]'/> About</p>
        </div>
      </section>
      <section className="flex flex-col md:flex-row min-h-screen items-center justify-between px-6 md:px-16 py-12">
        <div className="relative w-full md:w-1/2">    
            <div className="relative w-[90%] md:w-[80%] h-auto ">
                <div className='absolute -top-7 -left-7 -z-20 h-full bg-[#b91202] w-[200px] rounded-3xl'>
                </div>
                <Image
                    src={dotImg}
                    alt="Dots"
                    className="absolute -top-20 right-10 -z-10"
                />
                <Image
                    src={aboutImg1}
                    alt="Team Meeting"
                    width={450}
                    height={250}
                    className="rounded-lg"
                />
            </div>
            <div className="absolute bottom-[-80px] right-[70px]  h-auto border-4 border-gray-300 rounded-3xl bg-white shadow-md">
            <Image
                src={aboutImg2}
                alt="Working Man"               
                className="rounded-lg"
            />
            </div>
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <h5 className="text-[#b91202] text-lg Rajdhani font-bold uppercase tracking-wider">// About Us</h5>
        <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani">Crafting Success Stories<br />One Client at a Time</h2>
            <p className="text-gray-600 my-6">
            At TechCoding.in, we transform ideas into reality with cutting-edge web & mobile development solutions. From startups to enterprises, we craft scalable, secure, and high-performance digital experiences.
            </p>
            <p className="text-gray-600 ">
                With a team of skilled developers and a commitment to excellence, we deliver exceptional results that drive business growth and user satisfaction.
            </p>
            <p className="text-gray-600 ">
                Join us on a journey of innovation and success in the world of web & mobile development. Let&apos;s bring your digital vision to life!
            </p>

            <p className="text-gray-600 text-4xl font-bold my-6">
                Who we are ?
            </p>
            <p className="text-gray-600 my-6">
                We are a team of passionate developers, designers, and cloud experts dedicated to delivering top-tier IT solutions. With years of experience in web & mobile development, we specialize in custom software development, cloud hosting, and AI-driven applications.
            </p>

        </div>
      </section>

      <section className="max-w-6xl mx-auto mt-20" >
        <div className="mb-12 text-center">
            <h2 className="text-5xl font-medium text-center md:text-4xl font-figtree">
                What We Stand For
            </h2>
            <p className="mt-2 font-normal text-md text-[#b91202]0 opacity-100">
                Discover our mission, vision, goals, and the partnerships that drive us to redefine global hiring.
            </p>
        </div>
        <div className="flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0" >
            <div className="flex flex-col justify-between space-y-4" >
                <div className="px-5 overflow-hidden bg-[#b91202] rounded-2xl py-5" >
                    <div >
                        <div >
                            <Image alt="Our Mission" loading="lazy" width="100" height="101" decoding="async" data-nimg="1" className="object-fill mb-6" src={OurMisson} />
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-white font-figtree" >
                            Our Mission
                        </h3>
                        <p className="font-normal text-gray-300 text-md" >
                            At TechCoding.in, our mission is to redefine technology solutions by delivering cutting-edge, scalable, and user-centric digital products. We believe that every business, whether a startup or an enterprise, deserves access to high-quality IT solutions that drive efficiency, enhance user experiences, and accelerate growth.
                        </p>
                    </div>
                </div>
                <div className="px-5 overflow-hidden bg-[#b91202] rounded-2xl py-12" >
                    <div>
                        <div>
                            <Image alt="Our Goals" loading="lazy" width="150" height="150" decoding="async" data-nimg="1" className="object-fill mb-6" src={OurGoal} />
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-white font-figtree" >Our Goals</h3>
                        <p className="font-normal text-gray-300 text-md" >
                            At TechCoding.in, our goal is simple yet powerful: to revolutionize the digital landscape by providing innovative, scalable, and high-performing IT solutions that empower businesses to thrive in a competitive world.                        
                            <br />
                            We are committed to delivering exceptional results that drive business growth and user satisfaction.
                            <br />                          
                        </p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col justify-between space-y-4">
                <div className="px-5 overflow-hidden bg-[#b91202] rounded-2xl py-12" >
                    <div ><div >
                        <Image alt="Our Vision" loading="lazy" width="150" height="151" decoding="async" data-nimg="1" className="object-fill mb-6" src={OurVision} />
                    </div>
                    <h3 className="mb-3 text-2xl font-bold text-white font-figtree" >Our Vision</h3>
                    <p className="font-normal text-gray-300 text-md">
                        We envision a future where technology is accessible, efficient, and transformative for businesses of all sizes. TechCoding.in is committed to being a leader in the IT industry, driving innovation, digital transformation, and business automation.                    
                    </p>
                </div>
                </div>
                <div className="px-5 overflow-hidden bg-[#b91202] rounded-2xl py-8" >
                    <div >
                        <div>
                            <Image alt="Our Partners" loading="lazy" width="100" height="101" decoding="async" data-nimg="1" className="object-fill mb-6" src={ourPatner} />
                        </div>
                        <h3 className="mb-3 text-2xl font-bold text-white font-figtree" >Our Partners</h3>
                        <p className="font-normal text-white text-md" >
                            Our vision is strengthened through our partnership with Persist Ventures, a recognized leader in startup resources and growth. Together, we&apos;re creating a broader network of opportunities, enabling companies to access not only top talent but also strategic support for a sustainable future.
                            </p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <MeetExperts></MeetExperts>
    </div>
  )
}

export default About
