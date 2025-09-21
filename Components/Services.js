'use client'
import React from 'react'
import Image from 'next/image'
import img1 from '@/public/Images/img1.png'
import img2 from '@/public/Images/img2.png'
import { LuMoveRight } from "react-icons/lu";
import Link from 'next/link'

const services = [
    { id: 1, name: 'Web Development', discription: "TechCoding builds modern, responsive, and SEO-friendly websites for global businesses. Get tailored web development solutions to grow your brand online.", Image: img1, url: '/service/web-development' },
    { id: 2, name: 'Mobile App Development', discription: 'TechCoding develops scalable Android & iOS mobile apps with seamless UX. Trusted by businesses worldwide for innovative mobile solutions.', Image:img2, url: '/service/mobileapp-development' },
    { id: 3, name: 'UI/UX Design', discription: 'TechCoding provides expert UI/UX design services to help businesses create visually stunning and user-friendly digital experiences.', Image:img1 , url: '/service/ui-ux'},
    { id: 4, name: 'SEO', discription: 'TechCoding provides expert SEO services to help businesses optimize their online presence and reach their target audience.', Image:img2, url: '/service/seo' },
    // { id: 5, name: 'Cyber Security', discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text for decades.', Image:img1 },
    // { id: 6, name: 'Penetration Testing', discription: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text for decades.', Image:img2 },
  ];

const Services = () => {
  return (
    <div className='mx-auto max-w-11/12 text-center mb-10 bg-[#f8cfcf2f] p-10 rounded-4xl'>
      <h5 className="text-[#b91202] text-lg Rajdhani font-bold uppercase tracking-wider max-[769px]:text-sm max-[426px]:text-xs">// Our Services </h5>
      <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani max-[426px]:text-3xl max-[769px]:text-5xl">Inspiring Confidence corporate<br /><span className='text-[#b91202]'>Delivering</span> Solutions</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 mt-10'>
            {services.map((service) => (
                <Link href={service.url} key={service.id} className="shadow-lg rounded-[40px] cursor-pointer group/item bg-white">
                    <div className='flex flex-col gap-2 px-6 py-2 text-left'>
                        {/* <div className='w-20 h-20 bg-[#b91202] rounded-full flex items-center justify-center'>
                            <Image src={service.Image} alt={service.name} className='group-hover/item:scale-90 transition'/>
                        </div>                  */}
                        <h3 className="text-2xl Rajdhani font-bold text-gray-900">{service.name}</h3>
                        <div className='text-[#b91202] w-10 h-0.5 bg-[#b91202]'></div>
                    </div>

                    <div className=" text-left px-6">
                        <p className="text-gray-600 ">{service.discription}</p>
                        <button className="Rubik cursor-pointer text-[#b91202] py-2 flex items-center gap-2 group-hover/item:translate-x-20 transition-all duration-500">
                            LERN MORE <LuMoveRight />
                        </button>
                    </div>             
                </Link>
            ))}
        </div>

    </div>
  )
}

export default Services
