"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "@/public/Images/Hero4.jpg"
import bg_banner from "@/public/Images/bg-banner.png"
import { FaArrowRightLong } from "react-icons/fa6";
import { IoCallOutline } from "react-icons/io5";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const HeroPage = () => {
  return (
    // <div>
    //   <Swiper
    //     spaceBetween={0}
    //     centeredSlides={true}
    //     autoplay={{
    //       delay: 9500,
    //       disableOnInteraction: false,
    //     }}
    //     pagination={{
    //       clickable: true,
    //     }}
    //     modules={[Autoplay, Pagination]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide className='relative overflow-hidden'> 
    //         <div className='flex bg-amber-400 min-h-screen relative'>
    //             <div className='w-full flex items-center bg-[#000000be] z-10'>
    //                 <div className='w-1/2 p-8 max-[426px]:w-[90%] relative left-12 max-[769px]:p-2 max-[769px]:left-4 top-10'>
    //                     <h1 className='text-lg Rajdhani font-bold text-white max-[769px]:text-sm max-[426px]:text-xs'><span className='text-[#b91202]'>//</span> We Create Leading Digital Products</h1>
    //                     <p className='text-7xl Rajdhani font-bold text-white Rajdhani my-2 max-[426px]:text-3xl max-[769px]:text-5xl max-[1025px]:text-6xl '>END-TO-<span className='text-[#b91202] '>END</span> DEVELOPMENT</p>
    //                     <p className='Rajdhani text-[#ffffffa1] max-[769px]:text-sm'>We are 100+ professional software engineers with more then 10+ years of experience in delivering superior products.</p>
    //                     <div className='flex gap-4'>
    //                         <button className=' bg-gradient-to-r from-[#b91202] to-[#f1f1f100] text-white px-4 py-2 max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm cursor-pointer rounded-full border border-[#ffffffa1] text-2xl Rubik mt-4' onClick={() => window.location.href = '/about'}>Learn More +</button>
    //                         <button className=' text-white px-4 py-2  text-2xl Rubik mt-4 cursor-pointer max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm' onClick={() => window.location.href = '/contact'}>Contact Us</button>
    //                     </div>
    //                 </div>
    //             </div>
    //             <Image src={image1} alt="hero" className='w-full h-full object-cover absolute scaleAnimate' />
    //             <Image src={bg_banner} alt="hero" className='z-20 object-cover absolute right-0 max-[769px]:w-1/2 max-[769px]:h-full max-[426px]:hidden' />
    //         </div>
    //     </SwiperSlide>
    //     <SwiperSlide className='relative overflow-hidden'>
    //         <div className='flex bg-amber-400 min-h-screen relative'>
    //             <div className='w-full flex  items-center bg-[#000000be] z-10'>
    //                 <div className='w-1/2 p-8 max-[426px]:w-[90%] relative left-12 top-10 max-[769px]:p-2 max-[769px]:left-4'>
    //                     <h1 className='text-lg Rajdhani font-bold text-white max-[769px]:text-sm max-[426px]:text-xs'><span className='text-[#b91202]'>//</span> Solve Problems everyday</h1>
    //                     <p className='text-7xl Rajdhani font-bold text-white Rajdhani my-2 max-[426px]:text-3xl max-[769px]:text-5xl max-[1025px]:text-6xl'>Activating Your<span className='text-[#b91202] '> Success</span> With Expert Solutions </p>
    //                     <p className='Rajdhani text-[#ffffffa1] max-[769px]:text-sm'>We are 100+ professional software engineers with more then 10+ years of experience in delivering superior products.</p>
    //                     <div className='flex gap-4'>
    //                         <button className='bg-gradient-to-r from-[#b91202] to-[#f1f1f100] text-white px-4 py-2 max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm cursor-pointer rounded-full border border-[#ffffffa1] text-2xl Rubik mt-4' onClick={() => window.location.href = '/about'}>Learn More +</button>
    //                         <button className=' text-white px-4 py-2  text-2xl Rubik mt-4 cursor-pointer max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm' onClick={() => window.location.href = '/contact'}>Contact Us</button>
    //                     </div>
    //                 </div>
    //             </div>
    //             <Image src={image1} alt="hero" className='w-full h-full object-cover absolute scaleAnimate' />
    //             <Image src={bg_banner} alt="hero" className='z-20 object-cover absolute right-0 max-[769px]:w-1/2 max-[769px]:h-full max-[426px]:hidden' />
    //         </div>
    //     </SwiperSlide>
    //     <SwiperSlide className='relative overflow-hidden'>
    //         <div className='flex bg-amber-400 min-h-screen relative'>
    //             <div className='w-full flex  items-center bg-[#000000be] z-10'>
    //                 <div className='w-1/2 max-[426px]:w-[90%] p-8 relative left-12 top-10 max-[769px]:p-2 max-[769px]:left-4'>
    //                     <h1 className='text-lg Rajdhani font-bold text-white max-[769px]:text-sm max-[426px]:text-xs'><span className='text-[#b91202]'>//</span> Only High-Quality Services</h1>
    //                     <p className='text-7xl Rajdhani font-bold text-white Rajdhani my-2 max-[426px]:text-3xl max-[769px]:text-5xl max-[1025px]:text-6xl'>Find The Perfect<span className='text-[#b91202] '> Design</span> for Your Business</p>
    //                     <p className='Rajdhani text-[#ffffffa1] max-[769px]:text-sm'>We are 100+ professional software engineers with more then 10+ years of experience in delivering superior products.</p>
    //                     <div className='flex gap-4'>
    //                         <button className='bg-gradient-to-r from-[#b91202] to-[#f1f1f100] text-white px-4 py-2 max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm cursor-pointer rounded-full border border-[#ffffffa1] text-2xl Rubik mt-4' onClick={() => window.location.href = '/about'}>Learn More +</button>
    //                         <button className=' text-white px-4 py-2  text-2xl Rubik mt-4 cursor-pointer max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm' onClick={() => window.location.href = '/contact'}>Contact Us</button>
    //                     </div>
    //                 </div>
    //             </div>
    //             <Image src={image1} alt="hero" className='w-full h-full object-cover absolute scaleAnimate' />
    //             <Image src={bg_banner} alt="hero" className='z-20 object-cover absolute right-0 max-[769px]:w-1/2 max-[769px]:h-full max-[426px]:hidden' />
    //         </div>
    //     </SwiperSlide>
        
    //   </Swiper>
    // </div>
    <section className="relative overflow-hidden bg-[#f8f7fb] py-12 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center gap-12  max-[769px]:flex-col max-[769px]:gap-8">

          {/* Left Content */}
          <div className=" mt-10 max-w-2xl">
            <div className="inline-flex items-center rounded-full bg-gradient-to-r from-red-500/10 via-pink-500/20 to-purple-600/10 px-4 py-2 text-sm font-medium shadow-sm">
              <p className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">Building Digital Solutions That Drive Real Impact</p>
            </div>

            <h1 className="mt-6 text-4xl font-bold text-[#0a0f2c] md:text-4xl xl:text-6xl">
              We Build Powerful
              <br />
              Digital Solutions
              <br />
              <span className="bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                That Scale
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-gray-600">
              TechCoding is a leading software development company delivering
              custom web, mobile, and enterprise solutions that help
              businesses innovate, grow, and succeed in the digital world.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-xl flex justify-center items-center gap-2 bg-[#b91202] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105">
                Explore Services <FaArrowRightLong className="text-lg" />
              </button>

              <button className="rounded-xl flex justify-center items-center gap-2 border border-purple-300 bg-white px-8 py-4 font-semibold text-purple-600 transition hover:bg-purple-50">
               <IoCallOutline className="text-xl" /> Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-3xl font-bold">100+</h3>
                <p className="text-gray-500">Happy Clients</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">250+</h3>
                <p className="text-gray-500">Projects Delivered</p>
              </div>

              <div>
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-gray-500">Years Experience</p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">

            {/* Background Circle */}
            <div className="absolute h-[450px] w-[450px] rounded-full bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 opacity-20 blur-3xl"></div>

            {/* Main Image */}
            <div className="relative z-10">
              <Image
                src="/Images/hero-dev.png"
                alt="Developer"
                width={550}
                height={600}
                className="object-contain"
              />
            </div>

            
          </div>
        </div>

        {/* Brands */}
        <div className="mt-20 border-t border-gray-300 pt-10">
          <p className="mb-8 text-center text-lg font-semibold text-gray-500">
            Trusted By Forward-Thinking Brands
          </p>

          <div className="flex flex-wrap items-center justify-center gap-10 opacity-70">
            <span className="text-3xl font-bold">Google</span>
            <span className="text-3xl font-bold">Microsoft</span>
            <span className="text-3xl font-bold">Slack</span>
            <span className="text-3xl font-bold">Shopify</span>
            <span className="text-3xl font-bold">AWS</span>
            <span className="text-3xl font-bold">Adobe</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroPage
