'use client'
import Image from 'next/image'
import React from 'react'
import { FaFacebookF, FaPinterestP, FaLinkedinIn ,FaChevronRight,FaInstagram,FaTwitter, FaArrowUp, FaGithub  } from 'react-icons/fa';
import { IoMdSend } from 'react-icons/io';
import { MdOutlineMail, MdLocationOn, MdPhone } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { HiCode } from "react-icons/hi";
import BgFooter from '@/public/Images/bg-footer.png'
import Link from 'next/link';

const Footer = () => {
    const [showButton, setShowButton] = useState(false);
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res =await fetch('/api/footerMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            })
            const data = await res.json();
            setEmail('');
            setLoading(false);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
        
    };

    useEffect(() => {
        const handleScroll = () => {
        setShowButton(window.scrollY > 300);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

  return (
    <div className=" relative pt-20 overflow-hidden">
      <div className="relative">
        <div className="overflow-hidden w-full z-20 bg-[#b91202] py-5 rotate-3 absolute -top-9 -left-2 min-w-[calc(100%+20px)]">
            <div className="whitespace-nowrap animate-scroll flex gap-10">
                <span className=" font-bold text-6xl text-white"><HiCode /></span>
                <span className=" font-bold text-6xl textStyle">TEchCoding</span>
                <span className=" font-bold text-6xl text-white"><HiCode /></span>
                <span className=" font-bold text-6xl textStyle">TEchCoding</span>
                <span className=" font-bold text-6xl text-white"><HiCode /></span>
                <span className=" font-bold text-6xl textStyle">TEchCoding</span>
                <span className=" font-bold text-6xl text-white"><HiCode /></span>
                <span className=" font-bold text-6xl textStyle">TEchCoding</span>
                <span className=" font-bold text-6xl text-white"><HiCode /></span>
                <span className=" font-bold text-6xl textStyle">TEchCoding</span>
                <span className=" font-bold text-6xl text-white"><HiCode /></span>
                <span className=" font-bold text-6xl textStyle">TEchCoding</span>             
            </div>    
        </div>
      </div>
      <footer className={`bg-[#0f0e0e] pt-30 text-white py-10 px-5 md:px-20`}>
        {/* <Image src={BgFooter} alt="bg-footer" className="absolute top-0 left-0 w-full h-full object-cover z-0" /> */}
        <div className="max-w-7xl mx-auto py-10 border-b border-gray-600 pt-5 flex flex-col md:flex-row justify-between items-center">
            <p className="text-white Rajdhani text-5xl font-bold max-w-1/2 max-[426px]:max-w-full max-[426px]:text-3xl mt-4 md:mt-0">Have an idea lets work together ?</p>
            <div className="relative w-full max-w-sm max-[426px]:mt-4">
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}  
                    placeholder="Email Address" 
                    className="w-full p-3 bg-gray-800 text-white rounded-full border-r-2 border-[#b91202] focus:outline-none"
                />
                <button className="absolute flex justify-center items-center right-2 top-1/2 transform -translate-y-1/2 bg-[#b91202] p-2 rounded-full" onClick={handleSubmit}>
                    {loading ? (
                        <span className="loader"></span>
                    ) : (
                        <IoMdSend className="text-white text-lg" />

                    )}
                </button>
            </div>
        </div>   

        <div className="max-w-7xl mt-7 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 z-50">
            {/* Company Info */}
            <div>
            <h2 className="text-2xl font-bold flex items-center gap-2 text-[#b91202] ">
            TEchCoding
            </h2>
            <p className="mt-4 text-gray-400 text-sm">
                We denounce with righteous indignation and dislike men who are so beguiled demoralized by the charms.
            </p>
            <div className="flex gap-4 mt-4">
                <Link className='cursor-pointer' href={'https://www.facebook.com'}><FaFacebookF className="cursor-pointer text-xl hover:text-[#b91202]" /></Link>
                <Link className='cursor-pointer' href={'https://github.com/rohitdhillon983'}><FaGithub className="cursor-pointer text-xl hover:text-[#b91202]" /></Link>
                <Link className='cursor-pointer' href={'https://www.linkedin.com/in/rohit-dhillon-a86008243'}><FaLinkedinIn className="cursor-pointer text-xl hover:text-[#b91202]" /></Link>
                <Link className='cursor-pointer' href={'https://x.com/_rohit_dhillon_'}><FaTwitter className="cursor-pointer text-xl hover:text-[#b91202]" /></Link>
                <Link className='cursor-pointer' href={'https://www.instagram.com/rohit__dhillon__001/'}><FaInstagram  className="cursor-pointer text-xl hover:text-[#b91202]" /></Link>
            </div>
            </div>
            
            {/* Services */}
            <div>
            <h3 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-4">Services</h3>
            <ul className="text-gray-400 text-sm space-y-2">
                <li className="hover:text-[#b91202] cursor-pointer flex items-center gap-1"><span><FaChevronRight className="text-[#b91202]" /></span> UI/UX Design</li>
                <li className="hover:text-[#b91202] cursor-pointer flex items-center gap-1"><span><FaChevronRight className="text-[#b91202]" /></span> Web Development</li>
                <li className="hover:text-[#b91202] cursor-pointer flex items-center gap-1"><span><FaChevronRight className="text-[#b91202]" /></span> Mobile App Development</li>
                {/* <li className="hover:text-[#b91202] cursor-pointer flex items-center gap-1"><span><FaChevronRight className="text-[#b91202]" /></span>IOS App Development</li> */}
                <li className="hover:text-[#b91202] cursor-pointer flex items-center gap-1"><span><FaChevronRight className="text-[#b91202]" /></span> SEO</li>
                {/* <li className="hover:text-[#b91202] cursor-pointer flex items-center gap-1"><span><FaChevronRight className="text-[#b91202]" /></span> Cyber Security</li> */}
            </ul>
            </div>
            
            {/* Contact */}
            <div>
            <h3 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-4">Contact</h3>
            <ul className="text-gray-400 text-sm space-y-3">
                <li className="flex items-center gap-2">
                <MdOutlineMail className="text-[#b91202]" /> rohitdhillon983@gmail.com
                </li>
                <li className="flex items-center gap-2">
                <MdLocationOn className="text-[#b91202]" /> 1901 Thornridge Cir. Cyber City,Gurugram 81063
                </li>
                <li className="flex items-center gap-2">
                <MdPhone className="text-[#b91202]" /> +91 7355841453
                </li>
            </ul>
            </div>
            
            {/* Recent News */}
            <div>
            <h3 className="text-xl font-semibold border-b border-gray-600 pb-2 mb-4">Recent News</h3>
            <div className="text-gray-400 text-sm space-y-3">
                <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-700"></div>
                <div>
                    <p className="text-xs text-gray-500">17 Oct 23</p>
                    <p className="hover:text-[#b91202] cursor-pointer">Market research helps businesses understand</p>
                </div>
                </div>
                <div className="flex items-center gap-3">
                <div className="w-16 h-16 bg-gray-700"></div>
                <div>
                    <p className="text-xs text-gray-500">17 Oct 23</p>
                    <p className="hover:text-[#b91202] cursor-pointer">Common types of business structure</p>
                </div>
                </div>
            </div>
            </div>
        </div>
      
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto mt-10 pt-5 flex flex-col md:flex-row justify-between items-center z-10">
        <p className="text-gray-400 text-sm mt-4 md:mt-0">Copyright © TEchCoding.in 2025. All Rights Reserved.</p>
        
        {/* Scroll to Top Button */}
        {showButton && (
            <button 
            onClick={scrollToTop} 
            className="absolute bottom-10 right-[50%] bg-[#b91202] text-white p-3 rounded-full shadow-lg hover:bg-red-700 transition-all">
            <FaArrowUp className="text-xl" />
            </button>
        )}
        {/* Footer Links */}
        <div className="flex text-center text-gray-400 text-sm">
            <a href="#" className="hover:text-[#b91202] mx-2">Terms & Conditions</a>
            <a href="#" className="hover:text-[#b91202] mx-2">Privacy Policy</a>
            <a href="#" className="hover:text-[#b91202] mx-2">Contact Us</a>
        </div>
      </div>   
    </footer>
    </div>
  )
}

export default Footer
