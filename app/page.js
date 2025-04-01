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
