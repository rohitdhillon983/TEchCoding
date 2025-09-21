"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import image1 from "@/public/Images/Hero4.jpg"
import bg_banner from "@/public/Images/bg-banner.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';

const HeroPage = () => {
  return (
    <div>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 9500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='relative overflow-hidden'> 
            <div className='flex bg-amber-400 min-h-screen relative'>
                <div className='w-full flex items-center bg-[#000000be] z-10'>
                    <div className='w-1/2 p-8 max-[426px]:w-[90%] relative left-12 max-[769px]:p-2 max-[769px]:left-4 top-10'>
                        <h1 className='text-lg Rajdhani font-bold text-white max-[769px]:text-sm max-[426px]:text-xs'><span className='text-[#b91202]'>//</span> We Create Leading Digital Products</h1>
                        <p className='text-7xl Rajdhani font-bold text-white Rajdhani my-2 max-[426px]:text-3xl max-[769px]:text-5xl max-[1025px]:text-6xl '>END-TO-<span className='text-[#b91202] '>END</span> DEVELOPMENT</p>
                        <p className='Rajdhani text-[#ffffffa1] max-[769px]:text-sm'>We are 100+ professional software engineers with more then 10+ years of experience in delivering superior products.</p>
                        <div className='flex gap-4'>
                            <button className=' bg-gradient-to-r from-[#b91202] to-[#f1f1f100] text-white px-4 py-2 max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm cursor-pointer rounded-full border border-[#ffffffa1] text-2xl Rubik mt-4' onClick={() => window.location.href = '/about'}>Learn More +</button>
                            <button className=' text-white px-4 py-2  text-2xl Rubik mt-4 cursor-pointer max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm' onClick={() => window.location.href = '/contact'}>Contact Us</button>
                        </div>
                    </div>
                </div>
                <Image src={image1} alt="hero" className='w-full h-full object-cover absolute scaleAnimate' />
                <Image src={bg_banner} alt="hero" className='z-20 object-cover absolute right-0 max-[769px]:w-1/2 max-[769px]:h-full max-[426px]:hidden' />
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative overflow-hidden'>
            <div className='flex bg-amber-400 min-h-screen relative'>
                <div className='w-full flex  items-center bg-[#000000be] z-10'>
                    <div className='w-1/2 p-8 max-[426px]:w-[90%] relative left-12 top-10 max-[769px]:p-2 max-[769px]:left-4'>
                        <h1 className='text-lg Rajdhani font-bold text-white max-[769px]:text-sm max-[426px]:text-xs'><span className='text-[#b91202]'>//</span> Solve Problems everyday</h1>
                        <p className='text-7xl Rajdhani font-bold text-white Rajdhani my-2 max-[426px]:text-3xl max-[769px]:text-5xl max-[1025px]:text-6xl'>Activating Your<span className='text-[#b91202] '> Success</span> With Expert Solutions </p>
                        <p className='Rajdhani text-[#ffffffa1] max-[769px]:text-sm'>We are 100+ professional software engineers with more then 10+ years of experience in delivering superior products.</p>
                        <div className='flex gap-4'>
                            <button className='bg-gradient-to-r from-[#b91202] to-[#f1f1f100] text-white px-4 py-2 max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm cursor-pointer rounded-full border border-[#ffffffa1] text-2xl Rubik mt-4' onClick={() => window.location.href = '/about'}>Learn More +</button>
                            <button className=' text-white px-4 py-2  text-2xl Rubik mt-4 cursor-pointer max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm' onClick={() => window.location.href = '/contact'}>Contact Us</button>
                        </div>
                    </div>
                </div>
                <Image src={image1} alt="hero" className='w-full h-full object-cover absolute scaleAnimate' />
                <Image src={bg_banner} alt="hero" className='z-20 object-cover absolute right-0 max-[769px]:w-1/2 max-[769px]:h-full max-[426px]:hidden' />
            </div>
        </SwiperSlide>
        <SwiperSlide className='relative overflow-hidden'>
            <div className='flex bg-amber-400 min-h-screen relative'>
                <div className='w-full flex  items-center bg-[#000000be] z-10'>
                    <div className='w-1/2 max-[426px]:w-[90%] p-8 relative left-12 top-10 max-[769px]:p-2 max-[769px]:left-4'>
                        <h1 className='text-lg Rajdhani font-bold text-white max-[769px]:text-sm max-[426px]:text-xs'><span className='text-[#b91202]'>//</span> Only High-Quality Services</h1>
                        <p className='text-7xl Rajdhani font-bold text-white Rajdhani my-2 max-[426px]:text-3xl max-[769px]:text-5xl max-[1025px]:text-6xl'>Find The Perfect<span className='text-[#b91202] '> Design</span> for Your Business</p>
                        <p className='Rajdhani text-[#ffffffa1] max-[769px]:text-sm'>We are 100+ professional software engineers with more then 10+ years of experience in delivering superior products.</p>
                        <div className='flex gap-4'>
                            <button className='bg-gradient-to-r from-[#b91202] to-[#f1f1f100] text-white px-4 py-2 max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm cursor-pointer rounded-full border border-[#ffffffa1] text-2xl Rubik mt-4' onClick={() => window.location.href = '/about'}>Learn More +</button>
                            <button className=' text-white px-4 py-2  text-2xl Rubik mt-4 cursor-pointer max-[769px]:px-2 max-[769px]:py-1 max-[769px]:text-sm' onClick={() => window.location.href = '/contact'}>Contact Us</button>
                        </div>
                    </div>
                </div>
                <Image src={image1} alt="hero" className='w-full h-full object-cover absolute scaleAnimate' />
                <Image src={bg_banner} alt="hero" className='z-20 object-cover absolute right-0 max-[769px]:w-1/2 max-[769px]:h-full max-[426px]:hidden' />
            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default HeroPage
