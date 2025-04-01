'use client'
import React from 'react'
import { useState } from 'react';
import { FaPlus ,FaMinus } from "react-icons/fa6";

const faqs = [
    {
      question: 'What services do you offer in web and mobile development?',
      answer: 'We provide full-stack web and mobile development services, including UI/UX design, front-end and back-end development, API integrations, cloud hosting, and maintenance.',
    },
    {
        question: 'How do you ensure the quality of the project?',
        answer: 'We follow a structured Software Development Lifecycle (SDLC) with rigorous testing and quality assurance at each phase, including functional, performance, and security testing. We also ensure client feedback is incorporated before final deployment.',
      },
    {
      question: 'What technologies do you use for development?',
      answer: 'We use modern technologies like React.js, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, Flutter, and React Native for scalable and efficient applications.',
    },
    {
        question: 'Will my website or app be mobile-friendly and responsive?',
        answer: 'Yes! We use a mobile-first approach to ensure the website/app works smoothly on all devices, including desktops, tablets, and smartphones.',
      },
    {
      question: 'How long does it take to build a project?',
      answer: 'Project timelines vary based on complexity, but a standard web or mobile application takes around 4-8 weeks from planning to deployment.',
    },
    {
      question: 'Do you provide post-launch support?',
      answer: 'Yes, we offer maintenance and support services, including bug fixes, updates, and feature enhancements.',
    },
    {
      question: 'Can you build custom solutions for my business needs?',
      answer: 'Absolutely! We tailor web and mobile solutions based on your specific business requirements and goals.',
    },
    {
      question: 'What is the cost of development?',
      answer: 'The cost depends on project complexity, features, and timeline. Contact us for a detailed quote.',
    },
    {
      question: 'Can you redesign an existing website or mobile app?',
      answer: 'Yes! We can revamp and improve your existing website or app with a modern UI/UX, better performance, and new features.',
    },
    {
      question: 'How do we communicate and track project progress?',
      answer: 'We use Slack, Zoom, or Google Meet for communication and Trello, Jira, or Notion for project management, ensuring transparency and regular updates.',
      },

  ];

const FAQs = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  return (
    <section className='py-16 px-6 bg-white'>
      <div className='max-w-4xl mx-auto text-center'>
      <h5 className="text-[#b91202] text-lg Rajdhani font-bold uppercase tracking-wider max-[426px]:text-sm">// FAQ </h5>
      <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani max-[426px]:text-3xl max-[426px]:mt-0">What would you like to know about<br /><span className='text-[#b91202]'>TEchCoding </span> Solutions</h2>
      </div>
      <div className='mt-8 max-w-10/12 max-[426px]:max-w-full mx-auto flex flex-wrap gap-4'>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg p-4 shadow-sm  cursor-pointer w-[48%] max-[426px]:w-full mx-auto ${
              openIndex === index ? 'bg-[#f8cfcf7f] ' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className='flex justify-between items-center'>
              <h3 className='text-lg font-medium'>{faq.question}</h3>
              {openIndex === index ? <FaMinus size={20} /> : <FaPlus size={20} className='text-[#b91202]'/>}
            </div>
            {openIndex === index && <p className='mt-2 text-gray-600'>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQs
