import SEO from '@/Components/pages/service/SEO';
import React from 'react'

export const metadata = {
    title: "SEO Services | TechCoding",
    description: "TechCoding provides expert SEO services to help businesses optimize their online presence and reach their target audience.",
    openGraph: {
        title: "SEO Services | TechCoding",
        description: "TechCoding provides expert SEO services to help businesses optimize their online presence and reach their target audience.",
        url: "https://techcodingsolutions.com/service/seo", 
        siteName: "TEch Coding",
        images: [
            {
                url: "/images/og-about.png",
                width: 1200,
                height: 630,
                alt: "SEO Services | TechCoding",
            },
        ],
        locale: "en_US",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "SEO Services | TechCoding",
        description: "TechCoding provides expert SEO services to help businesses optimize their online presence and reach their target audience.",
        images: ["/images/og-about.png"],
    },
  };

const page = () => {
  return (
    <>
        <SEO />
    </>
  )
}

export default page