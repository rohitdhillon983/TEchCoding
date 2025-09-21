'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import ContactImage from '@/public/Images/contact.png'
import icon1 from '@/public/Images/icon-1.png'
import icon2 from '@/public/Images/icon-2.png'
import { HiOutlineMail } from "react-icons/hi";
import { GrLocation } from "react-icons/gr";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { LuUserRound } from "react-icons/lu";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FaFacebookF, FaLinkedinIn ,FaInstagram,FaTwitter ,FaAngleDoubleRight  } from 'react-icons/fa';


const Contact = () => {
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
  return (
    <div>
        <section className='relative min-h-[80vh] overflow-hidden border w-full flex justify-center bg-[#171616e3]'>
            <Image src={icon1} alt="Contact Us" className="absolute left-0 z-0" />
            <Image src={ContactImage} alt="Contact Us" className="w-full max-h-[100%] -z-10 scaleAnimate" />
            <Image src={icon2} alt="Contact Us" className="absolute right-0 bottom-0 z-10" />

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
                <h2 className="text-7xl font-bold border-b-4 border-[#b91202] w-fit mx-auto">Contact Us</h2>
                <p className="text-2xl mt-2 flex items-center gap-2">Home <FaAngleDoubleRight className='text-[#b91202]'/> Contact</p>
            </div>
        </section>

        <section className="py-16 px-6 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-5xl font-bold text-black">
                    Have Questions? <br /> Get in touch!
                </h2>

                <div className="mt-10 flex flex-col lg:flex-row gap-10">
                    {/* Left Side - Company Info */}
                    <div className="bg-[#b91202] text-white p-8 rounded-2xl min-w-96 shadow-lg">
                        <h3 className="text-3xl Rubik font-bold">Company info</h3>
                        <p className="text-lg mt-2 ">
                            Ignissimos ducimus qui blanditiis prae
                        </p>

                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-4xl bg-white text-[#b91202] p-2 rounded-full"><HiOutlineMail /></span>
                                <p className="text-xl font-medium">rohitdhillon983@email.com</p>
                            </div>
                            <div className="flex items-center gap-4">
                                <span className="text-4xl bg-white text-[#b91202] p-2 rounded-full"><MdOutlinePhoneInTalk /></span>
                                <p className="text-xl font-medium">+91 7355841453</p>
                            </div>
                            <div className="flex items-start gap-4">
                                <span className="text-4xl bg-white text-[#b91202] p-2 rounded-full"><GrLocation /></span>
                                <p className="text-xl font-medium">
                                    Germany – 785 15h Street, <br />
                                    Gurugram, IN 81566
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form */}
                    <div className="flex-1 bg-white shadow-lg p-8 rounded-2xl">
                        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="relative">
                                <span className="absolute left-3 top-4 text-red-500"><LuUserRound /></span>
                                <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={formData.name}
                                    placeholder="Your name"
                                    className="border border-gray-300 w-full pl-10 py-3 rounded-lg focus-none outline-none"
                                />
                            </div>

                            <div className="relative">
                                <span className="absolute left-3 top-4 text-red-500"><MdOutlinePhoneInTalk /></span>
                                <input
                                    type="number"
                                    name="contact"
                                    onChange={handleChange}
                                    value={formData.contact}
                                    placeholder="Your phone"
                                    className="border border-gray-300 w-full pl-10 py-3 rounded-lg focus-none outline-none"
                                />
                            </div>

                            <div className="relative sm:col-span-2">
                                <span className="absolute left-3 top-4 text-red-500"><HiOutlineMail /></span>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={formData.email}
                                    placeholder="Your email"
                                    className="border border-gray-300 w-full pl-10 py-3 rounded-lg focus-none outline-none"
                                />
                            </div>

                            <div className="sm:col-span-2 relative">
                                <span className="absolute left-3 top-4 text-red-500"><BiMessageRoundedDetail /></span>
                                <textarea
                                    rows="4"
                                    name="message"
                                    onChange={handleChange}
                                    value={formData.message}
                                    placeholder="Your message"
                                    className="border border-gray-300 w-full pl-10 py-3 rounded-lg focus-none outline-none"
                                ></textarea>
                            </div>

                            <div className="sm:col-span-2">
                                <button
                                    type="submit"
                                    onClick={handleSubmit}
                                    className="bg-[#b91202] uppercase text-white px-6 py-3 rounded-lg w-full flex items-center justify-center gap-2 font-semibold"
                                >
                                    {loading ? "Sending..." : "Get in touch"}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>

        <section className="py-16 px-6 lg:px-20 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                
                {/* Open Hours */}
                <div className="flex flex-col hover:bg-[#b91202] group/time hover:text-white p-8 rounded-2xl items-left text-left transition-all duration-700">
                    <span className="text-red-500  text-5xl">🕒</span>
                    <h3 className="text-lg font-bold mt-4">Open Hours</h3>
                    <p className="text-gray-600 group-hover/time:text-gray-400 mt-2">MON-FRI: 9 AM - 22 PM</p>
                    <p className="text-gray-600 group-hover/time:text-gray-400 mt-2">SATURDAY: 9 AM - 20 PM</p>
                    <p className="text-gray-600 group-hover/time:text-gray-400 mt-2">Sunday: Closed</p>
                </div>

                {/* Address */}
                <div className="hover:bg-[#b91202] group/address hover:text-white p-8 rounded-2xl items-left text-left transition-all duration-700">
                    <span className="text-5xl"><GrLocation /></span>
                    <h3 className="text-lg font-bold mt-4">Address</h3>
                    <p className="mt-2 text-gray-600 group-hover/address:text-gray-400">Germany – 785 15h Street, Office 478</p>
                    <p className=" text-gray-600 group-hover/address:text-gray-400">Gurugram, In 81566</p>
                    <a href="#" className="mt-4 inline-block underline">Check Location →</a>
                </div>

                {/* Get In Touch */}
                <div className="flex flex-col hover:bg-[#b91202] group/contact hover:text-white p-8 rounded-2xl items-left text-left transition-all duration-700">
                    <span className="text-red-500 text-5xl">💬</span>
                    <h3 className="text-lg font-bold mt-4 ">Get In Touch</h3>
                    <p className="text-gray-600 mt-2 group-hover/contact:text-gray-400">Telephone: +91 7355841453</p>
                    <p className="text-gray-600 group-hover/contact:text-gray-400">Email: rohitdhillon983@gmail.com</p>
                    <a href="#" className="mt-4 inline-block underline">Contact form →</a>
                </div>

                {/* New Section - Social Media Links */}
                <div className="flex flex-col hover:bg-[#b91202] group/media hover:text-white p-8 rounded-2xl items-left text-left transition-all duration-700">
                    <span className="text-red-500 text-5xl">🌍</span>
                    <h3 className="text-lg font-bold mt-4">Follow Us</h3>
                    <p className="text-gray-600 mt-2 group-hover/media:text-gray-400">Stay connected on social media</p>
                    <div className="flex gap-4 mt-4">
                        <a href="#" className=""><FaFacebookF className="cursor-pointer text-xl" /></a>
                        <a href="https://www.linkedin.com/in/rohit-dhillon-a86008243" className=""><FaLinkedinIn className="cursor-pointer text-xl" /></a>
                        <a href="https://www.instagram.com/rohit__dhillon__001/" className=""><FaInstagram className="cursor-pointer text-xl" /></a>
                        <a href="https://x.com/_rohit_dhillon_" className=""><FaTwitter className="cursor-pointer text-xl" /></a>
                    </div>
                </div>

            </div>
        </section>

        <section>
            <section className="bg-white pb-16">
                <div className=" mx-auto">
                    <div className="mt-12">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3508.101155333333!2d77.32014451484478!3d28.45953418234577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1f4e9f9b7e3d%3A0x4bf3f5f63b1bb9e7!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1669905555555!5m2!1sen!2sin&zoom=0" width="100%" height="550" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </section>
        </section>
    </div>
  )
}

export default Contact
