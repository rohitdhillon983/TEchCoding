import Mobile from '@/Components/pages/service/Mobile';
import React from 'react'

export const metadata = {
  title: "Mobile App Development – Android & iOS Solutions | TechCoding",
  description: "TechCoding develops scalable Android & iOS mobile apps with seamless UX. Trusted by businesses worldwide for innovative mobile solutions.",
  openGraph: {
    title: "Mobile App Development – Android & iOS Solutions | TechCoding",
    description: "TechCoding develops scalable Android & iOS mobile apps with seamless UX. Trusted by businesses worldwide for innovative mobile solutions.",
    url: "https://techcodingsolutions.com/service/mobileapp-development",
    siteName: "TEch Coding",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "Mobile App Development – Android & iOS Solutions | TechCoding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development – Android & iOS Solutions | TechCoding",
    description: "TechCoding develops scalable Android & iOS mobile apps with seamless UX. Trusted by businesses worldwide for innovative mobile solutions.",
    images: ["/images/og-about.png"],
  },
};

const Page = () => {
  return (
    <>
        <Mobile></Mobile>
    </>
  )
}

export default Page