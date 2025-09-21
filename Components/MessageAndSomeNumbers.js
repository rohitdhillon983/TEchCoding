'use client'
import Image from 'next/image'
import React from 'react'
import leftSideImage from '@/public/Images/bg-number-left.png'
import rightSideImage from '@/public/Images/bg-banner.png'
import ImageContect from '@/public/Images/img-contact.png'
import { FaTrophy, FaUsers, FaTasks, FaStar } from 'react-icons/fa';
import { MdOutlinePhone } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { IoIosSend } from "react-icons/io";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { id: 1, value: '10+', label: 'Clients Review', icon: <FaStar className="text-red-600 text-3xl" /> },
    { id: 2, value: '10+', label: 'Team Member', icon: <FaUsers className="text-red-600 text-3xl" /> },
    { id: 3, value: '20+', label: 'Winning Award', icon: <FaTrophy className="text-red-600 text-3xl" /> },
    { id: 4, value: '10+', label: 'Projects Done', icon: <FaTasks className="text-red-600 text-3xl" /> }
  ];
  
const MessageAndSomeNumbers = () => {
    const [formData, setFormData] = useState({
        name: "",
        contact: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            setFormData({
                name: "",
                contact: "",
                email: "",
                message: ""
            });
            setResponse(data.message);
            setLoading(false);
            
        } catch (error) {
            console.log(error);
        }       
    };
    // console.log(response);

    useGSAP(() => {
      gsap.from(".MessageGsaP", {
        x: -600,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: ".MessageGsaP",
          scroller: "body",
          start: "top 70%",
        //   end: "bottom 70%",
        //   scrub: 2,
        //   markers: true
        },
      });
    })
  return (
    <div className='w-full overflow-hidden relative'>
      <div className='absolute flex w-full max-h-[120vh] border bg-[#0f0e0e] overflow-hidden'>
        <Image src={leftSideImage} alt='' className='relative -top-4'></Image>
        <Image src={rightSideImage} alt='' className='relative -top-4 -right-15'></Image>
      </div>

      <div className='relative flex flex-col items-center justify-center max-w-10/12 mx-auto '>
            <section className=" my-24 max-[769px]:my-10 max-[426px]:flex-wrap relative w-full flex justify-center items-center">
                <div className="relative flex justify-between w-full max-[769px]:justify-center max-[426px]:flex-wrap gap-4">
                    {stats.map((stat) => (
                    <div key={stat.id} className="flex items-center justify-center bg-[#181818bb] rounded-[50px_0_0_50px] shadow-lg ">
                        <div className="flex items-center justify-center max-[769px]:w-16 max-[769px]:h-16 max-[426px]:w-12 max-[426px]:h-12 w-23 h-23 border border-gray-700 rounded-full">
                            {stat.icon}
                        </div>
                        <div className='mx-5 max-[769px]:mx-2 max-[769px]:max-w-[40%]'>
                            <h2 className="text-white text-5xl font-bold Rajdhani max-[1025px]:text-4xl max-[769px]:text-3xl max-[426px]:text-2xl">{stat.value}</h2>
                            <p className="text-white text-lg Rajdhani mt-1 max-[1025px]:text-[16px] max-[769px]:text-sm max-[769px]:mt-0 max-[426px]:text-xs">{stat.label}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </section>

            <div className='relative flex items-center max-[769px]:my-8 mt-18 max-[1025px]:mt-0 w-full max-[426px]:mt-0'>
                <div className='bg-white absolute max-[769px]:relative max-[769px]:max-w-full left-0 z-20 shadow-2xl p-14 max-[1025px]:p-8 max-[426px]:p-6 rounded-3xl max-w-[57%] MessageGsaP'>
                    <p className="text-[#b91202] text-lg Rajdhani font-bold tracking-wider max-[426px]:text-sm">
                        // Message
                    </p>
                    <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani max-[1025px]:text-4xl max-[426px]:text-3xl max-[426px]:mt-0">
                    your business to growth please touch ?
                    </h2>
                    <div className='flex flex-col gap-7 mt-12 max-[1025px]:mt-6 max-[426px]:mt-4 max-[426px]:gap-3 '>
                        <div className='flex justify-between items-center gap-7 max-[426px]:gap-3'>
                            <div className='w-1/2 border border-gray-400 px-4 py-4 rounded-3xl flex items-center justify-between'>
                                <input placeholder='Name here' value={formData.name} className='w-full outline-none' type='text' name='name' onChange={handleChange} required/>
                                <RiUserLine className='text-2xl text-[#b91202]'/>
                            </div>
                            <div className='w-1/2 border border-gray-400 px-4 py-4 rounded-3xl flex items-center justify-between'>
                                <input placeholder='Contact here' value={formData.contact} className='w-full outline-none' type='text' name='contact' onChange={handleChange} required/>
                                <MdOutlinePhone  className='text-2xl text-[#b91202]'/>
                            </div>                          
                        </div>
                        <div className='border border-gray-400 px-4 py-4 rounded-3xl flex items-center justify-between'>
                            <input placeholder='Email Address here' className='w-full outline-none' value={formData.email} type='email' name='email' onChange={handleChange} required/>
                            <IoIosSend  className='text-2xl text-[#b91202]'/>
                        </div>
                        <div className='border border-gray-400 px-4 py-4 rounded-3xl flex items-center justify-between'>
                            <textarea placeholder='Message here ...' className='w-full outline-none' value={formData.message} rows={4} type='text' name='message' onChange={handleChange} required/>
                        </div>
                        <div className='bg-[#b91202] text-white Rajdhani font-bold px-4 py-4 rounded-3xl flex text-center justify-center cursor-pointer' type='submit' onClick={handleSubmit} disabled={loading}>
                            {loading ? "Sending..." : "CONTACT US"}
                        </div>
                    </div>
                </div>
                <Image src={ImageContect} alt='' className='relative left-[32%] max-[769px]:hidden'></Image>
            </div>        
      </div>
    </div>
  )
}

export default MessageAndSomeNumbers
