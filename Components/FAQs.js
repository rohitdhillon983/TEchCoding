'use client'
import React from 'react'
import { useState } from 'react';
import { FaPlus ,FaMinus } from "react-icons/fa6";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const FAQs = ({ title, faqsData }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };


    useGSAP(() => {
      gsap.from('.faq-section', {
        y: 80,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'top 80%',
          scroller:"body",
          // markers:true,
              // start:"top 85%",
          end:"top 70%",             
          scrub:2,
          // toggleActions: 'play none none none',
        }
      });

      gsap.from('.faq-item', {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'top 75%',
          end: 'top 40%',
          scroller:"body",
          scrub:2,
        }
      });
      
    }, []);
  return (
    <section className='py-16 px-6 bg-white faq-section'>
      <div className='max-w-4xl mx-auto text-center'>
        <h5 className="text-[#b91202] text-lg Rajdhani font-bold uppercase tracking-wider max-[426px]:text-sm">// FAQ </h5>
        <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani max-[426px]:text-3xl max-[426px]:mt-0">What would you like to know about<br /><span className='text-[#b91202]'>{title}</span></h2>
      </div>
      <div className='mt-8 max-w-10/12 max-[426px]:max-w-full mx-auto flex flex-wrap gap-4'>
        {faqsData && faqsData.map((faq, index) => (
          <div
            key={index}
            className={`border faq-item rounded-lg p-4 shadow-sm cursor-pointer w-[48%] max-[426px]:w-full mx-auto ${
              openIndex === index ? 'bg-[#f8cfcf7f]' : ''
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <FaMinus size={20} />
              ) : (
                <FaPlus size={20} className="text-[#b91202]" />
              )}
            </div>

            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? "max-h-40 mt-2" : "max-h-0"
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQs
