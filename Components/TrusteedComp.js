import Image from 'next/image';
import React from 'react'
import google from '@/public/Images/companyLogos/google.png'
import instagram from '@/public/Images/companyLogos/Instagram.png'

const clients = [
    { name: 'Google', src: google },
    { name: 'Microsoft', src: instagram },
    { name: 'Amazon', src: google },
    { name: 'Facebook', src: instagram },
    { name: 'Netflix', src: google },
  ];
const TrusteedComp = () => {

  return (
    <div className="bg-gray-50 py-10 max-[769px]:py-5 mt-10">
      <div className="max-w-6xl mx-auto px-6 max-[426px]:px-4 max-[769px]:px-6">
        <div className="flex flex-wrap items-center justify-center gap-15 max-[1025px]:gap-10 max-[769px]:gap-5 max-[426px]:gap-3">
          {clients.map((client, index) => (
            <div key={index} className="relative w-40 h-16 max-[1025px]:w-32 max-[1025px]:h-12 max-[769px]:w-28 max-[769px]:h-10">
              <Image src={client.src} alt={client.name} layout="fill" objectFit="contain" className="grayscale hover:grayscale-0 transition duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TrusteedComp
