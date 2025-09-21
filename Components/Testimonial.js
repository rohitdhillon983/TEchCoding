'use client';
import Image from 'next/image';
import React from 'react'
import { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar, FaWhatsapp,FaQuoteRight  } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRef } from 'react';
// import { Controller } from 'swiper';

// Swiper.use([Controller]);

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const testimonials = [
  {
    id: 1,
    name: 'Laura McAlister',
    role: 'Tech Startup Founder',
    image: 'https://vatech-html-demo.vercel.app/assets/imgs/pages/home11/expert4.png',
    rating: 5,
    feedback: 'TEchCoding completely transformed our IT infrastructure. Their team was knowledgeable, responsive, and provided solutions that significantly improved our efficiency. Highly recommended!'
  },
  {
    id: 2,
    name: 'Sarah Johnson',
    role: 'SSO Specialist',
    image: 'https://vatech-html-demo.vercel.app/assets/imgs/pages/home11/expert3.png',
    rating: 5,
    feedback: 'The best IT service I have ever used! The team is professional and extremely efficient. I highly recommend TEchCoding for any IT-related needs.'
  },{
    id: 3,
    name: 'Amanda Smith',
    role: 'ASP.NET Developer',
    image: 'https://vatech-html-demo.vercel.app/assets/imgs/pages/home1/expert2.png',
    rating: 5,
    feedback: 'TechCoding is a game-changer! Their team is knowledgeable, responsive, and provided solutions that significantly improved our efficiency. Highly recommended!'
  },
  {
    id: 4,
    name: 'Robert Brown',
    role: 'Administrator',
    image: 'https://vatech-html-demo.vercel.app/assets/imgs/pages/home1/expert3.png',
    rating: 5,
    feedback: 'I was skeptical at first, but TechCoding exceeded my expectations. Their team was knowledgeable, responsive, and provided solutions that significantly improved our efficiency. Highly recommended!'
  }
];

const Testimonial = () => {
  const swiperRef = useRef(null);
    
  return (
    <div>
      <section className="relative flex max-[426px]:flex-col justify-center items-center mx-8 py-12 gap-8"> 
        <div className='min-w-[35%] '>
          <h5 className="text-[#b91202] text-lg Rajdhani font-bold uppercase tracking-wider">// testimonials</h5>
          <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani">What's our<br /><span className='text-[#b91202]'>client's</span> words</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            At TEchCoding, we are dedicated to delivering innovative IT solutions and services that empower businesses to thrive in the digital age.
          </p>
          <div className='relative -left-10 flex justify-center gap-10 mt-8'>
            <button className=" bg-white p-2 rounded-full shadow-lg hover:bg-gray-200" onClick={() => swiperRef.current.swiper.slidePrev()}>
              <FaArrowLeft className="text-[#b91202] text-2xl" />
            </button>
            <button className=" bg-white p-2 rounded-full shadow-lg hover:bg-gray-200" onClick={() => swiperRef.current.swiper.slideNext()}>
              <FaArrowRight className="text-[#b91202] text-2xl" />
            </button>
          </div>
        </div>
        <Swiper
               ref={swiperRef}
               breakpoints={{
                769: {
                  slidesPerView: 1,                
                },
                426: {
                  slidesPerView: 1,
                },
                1024: {
                  slidesPerView: 1.2,
                },
                1440: {
                  slidesPerView: 2,
                },
              }}           
               spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                modules={[ Pagination, Navigation]}
                className="mySwiper overflow-hidden max-[426px]:w-full"
          > 
              <div className="relative flex justify-center gap-8 mt-8 overflow-hidden ">
                {testimonials.map((users)=>(
                   <SwiperSlide className=' max-w-[400px] min-h-[350px] max-[769px]:ml-5 max-[426px]:ml-0 max-[426px]:max-w-[350px] overflow-hidden'> 
                      <div key={users.id} className=" p-8 py-12 clipPath max-[426px]:p-4 max-[426px]:py-8">
                        <h1 className='text-2xl font-extra`bold'>{users.name}</h1>
                        <p>{users.role}</p>
                        <Image width={100} height={100} className="absolute right-6 top-0 w-30 h-30 border-5 border-[#b91202] rounded-[50%_50%_50%_10px] overflow-hidden bg-cover bg-white" src={users.image} alt='' />
                        <div className="flex items-center my-3">
                          {[...Array(users.rating)].map((_, index) => (
                            <FaStar key={index} className="text-yellow-500" />
                          ))}
                        </div>
                        <p className="mt-4 ">{users.feedback}</p>
                        <FaQuoteRight className='absolute bottom-0 right-6 text-6xl text-[#b91202]'/>
                      </div>
                  </SwiperSlide> 
                ))} 
              </div>
                   
          </Swiper>    
        
    </section>
      <a
        href="https://wa.me/+917355841453" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-white text-green-500 rounded-full shadow-lg flex items-center justify-center z-50"
      >
        <FaWhatsapp className="text-5xl" />
      </a>
    </div>
  )
}

export default Testimonial
