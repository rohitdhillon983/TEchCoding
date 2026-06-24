import About from '@/Components/About'
import HeroPage from '@/Components/HeroPage'
import MeetExperts from '@/Components/MeetExperts'
import MessageAndSomeNumbers from '@/Components/MessageAndSomeNumbers'
import RTF from '@/Components/RTF'
import Services from '@/Components/Services'
import { HowWeWork } from '@/Components/HowWeWork'
import Testimonial from '@/Components/Testimonial'
import WhyChoose from '@/Components/WhyChoose'
import React from 'react'
import FAQs from '@/Components/FAQs'
import TrusteedComp from '@/Components/TrusteedComp'

export const metadata = {
  title: "TechCoding | Website, Mobile App & Cloud Solutions",
  description: "TechCoding provides world-class web development, mobile app solutions, and cloud hosting services. Trusted globally for secure, scalable, and innovative digital products.",
  openGraph: {
    title: "TechCoding | Website, Mobile App & Cloud Solutions",
    description: "TechCoding provides world-class web development, mobile app solutions, and cloud hosting services. Trusted globally for secure, scalable, and innovative digital products.",
    url: "https://techcodingsolutions.com",
    siteName: "TEch Coding",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "TechCoding | Website, Mobile App & Cloud Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCoding | Website, Mobile App & Cloud Solutions",
    description: "TechCoding provides world-class web development, mobile app solutions, and cloud hosting services. Trusted globally for secure, scalable, and innovative digital products.",
    images: ["/images/og-about.png"],
  },
};

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

const page = () => {
  return (
    <div className='overflow-hidden'>
      <HeroPage></HeroPage>
      <About></About>  
      <Services></Services>
      <WhyChoose></WhyChoose>
      <HowWeWork></HowWeWork>
      {/* <MeetExperts></MeetExperts> */}
      <MessageAndSomeNumbers></MessageAndSomeNumbers>
      <TrusteedComp></TrusteedComp>
      <MeetExperts></MeetExperts>
      <RTF></RTF>
      <Testimonial></Testimonial>
      <FAQs title="TechCoding" faqsData={faqs}></FAQs>
    </div>
  )
}

export default page
