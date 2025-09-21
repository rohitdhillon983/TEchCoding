'use client'
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaAngleDown  } from "react-icons/fa";
import { CgMenuRight } from "react-icons/cg";
import { LuLogIn } from "react-icons/lu";
import { MdEventNote } from "react-icons/md";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const router = useRouter;

    const isActive = (path) => {
        return router.pathname === path;
      };

    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
    
        if (currentScrollY > lastScrollY) {
            // Scrolling down
          setIsNavbarVisible(false);
        } else {
            // Scrolling up
          setIsNavbarVisible(true);
        }   
          setLastScrollY(currentScrollY);
      };
    
      window.addEventListener("scroll", handleScroll);
    
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]);
  return (
      <nav
      className={`bg-[#0f0e0e]  text-white  flex justify-between  items-center fixed top-0 left-0 right-0 z-50 rounded-full mx-16 mt-3 transition-transform duration-300 ${
        isNavbarVisible ? "translate-y-0" : "-translate-y-[117%]"
      }`}
    >
      <div className="w-full mx-auto flex justify-between items-center">
        <Link href="/">
          <h1 className="text-3xl font-bold relative left-4 max-[769px]:text-xl max-[769px]:text-[#b91202] ">TEchCoding</h1>
        </Link>
        <div className="relative hidden md:flex gap-4 max-[769px]:gap-1 justify-center p-4 max-[769px]:p-1 items-center font-semibold">
          <Link
            href="/"
            className={` font-bold borderflex justify-center items-center gap-1 p-2 px-3 max-[769px]:px-1 transition-all duration-500 border-b border-transparent hover:border-[#b91202] ${
              isActive("/") ? "text-[#b91202]" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={` font-bold flex justify-center items-center gap-1 p-2 transition-all duration-500 border-transparent hover:border-[#b91202] border-b px-3 max-[769px]:px-1 ${
              isActive("/about") ? "text-[#b91202]" : ""
            }`}
          >
            About
          </Link>

          <div
            className={` font-bold flex group/services justify-center items-center gap-1 p-2 transition-all duration-500 border-transparent hover:border-[#b91202] border-b px-3 max-[769px]:px-1`}
            >
            Services
            <FaAngleDown className="group-hover/services:rotate-180 transition-all duration-500" />
             <div className="group/services:flex group-hover/services:h-[250px] transition-all h-0 overflow-hidden duration-500 z-50 absolute top-15 left-35 flex-col bg-[#0f0e0e] text-white opacity-0 group-hover/services:opacity-100">
                <Link
                  href="/service/web-development"
                  className={` font-bold flex justify-center items-center gap-1 p-2 transition-all duration-500 border-transparent hover:border-[#b91202] border-b px-3 max-[769px]:px-1 `}
                >
                  Web Development
                </Link>
                <Link 
                  href="/service/mobileapp-development"
                  className={` font-bold flex justify-center items-center gap-1 p-2 transition-all duration-500 border-transparent hover:border-[#b91202] border-b px-3 max-[769px]:px-1 `}>
                  Mobile App Development
                </Link>
                <Link 
                  href="/services/SEO"
                  className={` font-bold flex justify-center items-center gap-1 p-2 transition-all duration-500 border-transparent hover:border-[#b91202] border-b px-3 max-[769px]:px-1 `}>
                  SEO
                </Link>
                <Link 
                  href="/service/ui-ux"
                  className={` font-bold flex justify-center items-center gap-1 p-2 transition-all duration-500 border-transparent hover:border-[#b91202] border-b px-3 max-[769px]:px-1 `}>
                  UI/UX Design
                </Link>
                {/* <Link 
                  href="/services/penetration testing"
                  className={` font-bold flex justify-center items-center gap-1 p-2 transition-all duration-500 border-transparent hover:border-[#b91202] border-b px-3 max-[769px]:px-1 `}>
                  Penetration Testing
                </Link>
                <Link 
                  href="/services/cyber security"
                  className={` font-bold flex justify-center items-center gap-1 p-2 transition-all duration-500 border-transparent hover:border-[#b91202] border-b px-3 max-[769px]:px-1 `}>
                  Cyber Security
                </Link> */}
            
          </div>
          </div>

          <Link
                href="/blog"
                className={` font-bold flex justify-center items-center gap-1 p-2 transition-all duration-500 border-transparent hover:border-[#b91202] border-b px-3 max-[769px]:px-1 ${
                  isActive("/blog") ? "text-[#b91202]" : ""
                }`}
              >
                Blogs
          </Link>
          <Link
                href="/contact"
                className={` font-bold flex justify-center items-center gap-1 p-2 transition-all duration-500 border-transparent hover:border-[#b91202] border-b px-3 max-[769px]:px-1 ${
                  isActive("/contact") ? "text-[#b91202]" : ""
                }`}
              >
                Contact Us
          </Link>            
        </div>

        <div>
            <Link
                href="/"
                    className={`font-bold flex justify-center items-center relative min-h-[72px] max-[769px]:min-h-[50px] rounded-[0_100px_100px_0] text-5xl max-[769px]:text-3xl w-20 bg-gradient-to-r from-[#b9110200] to-[#b91202] text-white`}>
                    <CgMenuRight />
            </Link>
        </div>
      </div>

      {/* Mobile Menu */}
    </nav>
  )
}

export default Header
