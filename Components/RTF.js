import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ApprovalIllustration from '../public/Images/RTF/approval.1b2d00a6.svg'
import HiringIllustration from '../public/Images/RTF/hiring.96bb4145.svg'
import CurveLines from '../public/Images/RTF/curves1.cbdaea22.svg'
import CurveLines2 from '../public/Images/RTF/curves2.9dd8c992.svg'

const RTF = () => {
  return (
    <div className='overflow-hidden'>
     <div className="relative  bg-white my-10">
        <Image alt="Approval Illustration" loading="lazy" width="220" height="220" decoding="async" data-nimg="1" className="absolute w-28 max-[426px]:w-22 -top-4 md:-top-8 -right-4 md:-right-8 md:w-32 lg:w-40" style={{ color: 'transparent' }} src={ApprovalIllustration}/>
        <Image alt="Hiring Illustration" loading="lazy" width="215" height="215" decoding="async" data-nimg="1" className="absolute w-28 -bottom-4 -left-4 md:-bottom-8 md:-left-8 md:w-32 lg:w-40" style={{ color: 'transparent' }} src={HiringIllustration}/>
        <div className="mx-auto border-4 bg-[#b91202] border-red-200 rounded-[28px_128px_28px_128px]">
            <Image alt="curve lines" loading="lazy" width="218" height="166" decoding="async" data-nimg="1" className="absolute w-24 -left-8 -top-2 md:w-32" style={{ color: 'transparent' }} src={CurveLines}/>
            <Image alt="curve lines" loading="lazy" width="218" height="166" decoding="async" data-nimg="1" className="absolute w-24 -bottom-2 -right-8 md:w-32" style={{ color: 'transparent' }} src={CurveLines2}/>
            <div className="max-w-xs py-20 max-[426px]:py-10 mx-auto space-y-6 text-center md:py-10 md:max-w-md max-[426px]:max-w-xs">
                <h2 className="text-4xl font-semibold text-white font-figtree max-[426px]:text-2xl">Ready To Find Your Next Best Website Designer?</h2>
                <Link href="/contact" className="inline-block px-5 py-3 duration-300 bg-white rounded-full shadow-md hover:bg-gray-100 text-red-900">Start Now →</Link>
            </div>
        </div>
     </div>
    </div>
  )
}

export default RTF

