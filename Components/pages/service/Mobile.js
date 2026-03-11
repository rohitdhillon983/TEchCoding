'use client'
import Image from 'next/image'
import React from 'react'
import ContactImage from '@/public/Images/service.png'
import icon1 from '@/public/Images/icon-1.png'
import icon2 from '@/public/Images/icon-2.png'
import aboutImg1 from '@/public/Images/about/about.png'
import aboutImg2 from '@/public/Images/about/about2.png'
import dotImg from '@/public/Images/about/dots.png'
import { FaAngleDoubleRight } from "react-icons/fa";
import MeetExperts from '@/Components/MeetExperts'
import OurMisson from '@/public/Images/about/our-mission.59796e78.svg'
import OurVision from '@/public/Images/about/our-vision.65d5be3b.svg'
import OurGoal from '@/public/Images/about/our-goal.0d90c0d3.svg'
import ourPatner from '@/public/Images/about/our-partners.670ff3c8.svg'
import { 
  Laptop, Palette, Rocket, Database, 
  ShieldCheck, Zap, BarChart, FileCode, CheckCircle 
} from 'lucide-react';
import FAQs from '@/Components/FAQs'



const faqs = [
  { question: 'How much does a typical app cost?', answer: 'The cost varies widely based on complexity and features. We offer custom quotes after discussing your project.' },
  { question: 'How long will it take to build my app?', answer: 'Simple apps can take a few weeks, while complex applications might take several months.' },
  { question: 'Do you offer app maintenance?', answer: 'Yes, we provide ongoing maintenance to keep your app secure and updated.' },
  { question: 'Will my app be mobile-friendly?', answer: 'Absolutely. Every app is built with a mobile-first approach.' },

];

const serviceFeatures = [
  { icon: Palette, title: 'Custom UI/UX Design', description: 'Apps designed to delight users and reflect your unique brand identity.' },
  { icon: Laptop, title: 'Responsive & Mobile-First', description: 'Perfect user experience across all devices, from desktops to smartphones.' },
  { icon: Rocket, title: 'High Performance & Speed', description: 'We prioritize speed to boost user engagement and search engine rankings.' },
  { icon: FileCode, title: 'SEO-Friendly Structure', description: 'Built with clean code and structured data for maximum visibility in search results.' },
  { icon: ShieldCheck, title: 'Robust Security', description: 'Implementing best practices to protect your app and user data.' },
  { icon: Database, title: 'CMS Integration', description: 'Easily manage your content with powerful systems like Strapi or Custom CMS.' },
];

const Mobile = () => {
  return (
    <div>
      <section className='relative min-h-[80vh] overflow-hidden border w-full flex justify-center bg-[#17161678]'>
        {/* <Image src={icon1} alt="Contact Us" className="absolute left-0 z-0" /> */}
        <Image src={ContactImage} alt="Contact Us" className="w-full max-h-[100%] -z-10" />
        {/* <Image src={icon2} alt="Contact Us" className="absolute right-0 bottom-0 z-10" /> */}
      
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
            <h2 className="text-7xl font-bold border-b-4 border-[#b91202] w-fit mx-auto">App Development</h2>
            <p className="text-2xl mt-2 flex items-center gap-2">Service <FaAngleDoubleRight className='text-[#b91202]'/> App Development</p>
        </div>
      </section>


      <section className="flex flex-col md:flex-row min-h-screen items-center justify-between px-6 md:px-16 py-12">
        <div className="relative w-full md:w-1/2">    
            <div className="relative w-[90%] md:w-[80%] h-auto ">
                <div className='absolute -top-7 -left-7 -z-20 h-full bg-[#b91202] w-[200px] rounded-3xl'>
                </div>
                <Image
                    src={dotImg}
                    alt="Dots"
                    className="absolute -top-20 right-10 -z-10"
                />
                <Image
                    src={aboutImg1}
                    alt="Team Meeting"
                    width={450}
                    height={250}
                    className="rounded-lg"
                />
            </div>
            <div className="absolute bottom-[-80px] right-[70px]  h-auto border-4 border-gray-300 rounded-3xl bg-white shadow-md">
            <Image
                src={aboutImg2}
                alt="Working Man"               
                className="rounded-lg"
            />
            </div>
        </div>

        <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <h5 className="text-[#b91202] text-lg Rajdhani font-bold uppercase tracking-wider">// App Development</h5>
        <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani">Build your App With the Latest Technology </h2>
            <p className="text-gray-600 my-6">
                We specialize in creating high-quality mobile applications that cater to your specific needs. Whether you need a simple app or a complex one, we have the expertise to deliver outstanding results. Our team of skilled developers is proficient in the latest technologies and frameworks, ensuring that your app is not only visually appealing but also performs seamlessly across all devices. We are committed to providing exceptional service and support throughout the development process, making sure your vision is brought to life with precision and excellence.
            </p>
            <p className="text-gray-600 ">
                With a team of skilled developers and a commitment to excellence, we deliver exceptional results that drive business growth and user satisfaction.
            </p>
            <p className="text-gray-600 ">
                Join us on a journey of innovation and success in the world of web & mobile development. Let&apos;s bring your digital vision to life!
            </p>

            <p className="text-gray-600 text-4xl font-bold my-6">
                which Techlogies we Use?
            </p>
            <p className="text-gray-600 my-6">
                We utilize a wide range of technologies to ensure that your mobile application is built with the best tools available. Our expertise includes React Native for cross-platform development, Flutter for high-performance apps, and native development using Swift for iOS and Kotlin for Android. We also integrate powerful backend solutions like Node.js and Firebase to provide robust functionality and seamless user experiences. Our commitment to staying up-to-date with the latest trends and technologies allows us to deliver innovative and efficient mobile applications that meet your specific requirements.
            </p>

        </div>
      </section>


       {/* 2. Services Grid */}
      <section className="bg-[#1a1a1a] py-20 px-6 my-5">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 text-white">
            My <span className="text-red-600">Core</span> Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="bg-[#0f0f0f] p-8 rounded-3xl border border-white/10 hover:border-red-600/50 transition-all">
                  <Icon className="w-10 h-10 text-red-600 mb-4" />
                  <h3 className="text-2xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FAQs title="Web Development" faqsData={faqs}></FAQs>

      {/* <MeetExperts></MeetExperts> */}
    </div>
  )
}

export default Mobile
