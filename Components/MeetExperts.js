'use client'
import React from 'react'
import { FaShareAlt ,FaLinkedin,FaInstagram ,FaTwitter,FaFacebook   } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Rohit Dhillon',
    role: 'CO-FOUNDER',
    image: 'https://vatech-html-demo.vercel.app/assets/imgs/pages/home11/expert2.png',
  },
  {
    name: 'Amandeep Dhillon',
    role: 'Chief executive officer',
    image: 'https://vatech-html-demo.vercel.app/assets/imgs/pages/home11/expert2.png',
  },
  {
    name: 'Ronald Richards',
    role: 'Finance Advisor',
    image: 'https://vatech-html-demo.vercel.app/assets/imgs/pages/home11/expert2.png',
  },
  {
    name: 'Marnin Mckinney',
    role: 'Finance Advisor',
    image: 'https://vatech-html-demo.vercel.app/assets/imgs/pages/home11/expert2.png',
  },
];
const MeetExperts = () => {
  return (
    <section className="py-16 max-[426px]:py-8 bg-white">
      <div className="max-w-10/12 mx-auto text-center max-[426px]:max-w-full">
      <h5 className="text-[#b91202] text-lg Rajdhani font-bold uppercase tracking-wider max-[769px]:text-sm max-[426px]:text-xs">// meet our experts</h5>
      <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani max-[426px]:text-3xl max-[769px]:text-5xl">Empowering Connections <br /> Empowering <span className='text-[#b91202]'>Growth</span></h2>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
        We provide technical support to assist you with any issues orai questions you may have regarding our services Yes, we offerm customizable solutions tailored
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 max-[426px]:px-4 overflow-x-scroll">
          {teamMembers.map((member, index) => (
            <div key={index} className="relative p-6 max-[426px]:p-4 bg-gray-100 rounded-xl shadow-lg BeforeSec overflow-hidden min-w-60">
              <div className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md flex items-center justify-center gap-2 max-[426px]:flex-col">
                <FaTwitter  className="text-red-700 cursor-pointer" />
                <FaLinkedin className="text-red-700 cursor-pointer" />
                <FaInstagram className="text-red-700 cursor-pointer" />
                <FaFacebook className="text-red-700 cursor-pointer" />
              </div>
              <div className="flex flex-col text-left">
                <img src={member.image} alt={member.name} className="rounded-[0_0_140px_0] z-10" />
                <h3 className="mt-4 text-xl Rajdhani font-bold text-gray-900 max-[426px]:text-lg">{member.name}</h3>
                <p className="text-[#b91202] text-lg max-[1025px]:text-sm uppercase max-[426px]:text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MeetExperts
