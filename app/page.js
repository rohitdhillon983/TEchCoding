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

const page = () => {
  return (
    <div>
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
      <FAQs></FAQs>
    </div>
  )
}

export default page
