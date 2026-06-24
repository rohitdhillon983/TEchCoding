import Service from '@/Components/pages/Service';
import Web from '@/Components/pages/service/Web'
import React from 'react'

export const metadata = {
  title: "TechCoding | Best IT Solutions Company in India",
  description: "TechCoding builds modern, responsive, and SEO-friendly websites for global businesses. Get tailored web development solutions to grow your brand online.",
  openGraph: {
    title: "Web Development Services – Custom Websites by TechCoding",
    description: "TechCoding builds modern, responsive, and SEO-friendly websites for global businesses. Get tailored web development solutions to grow your brand online.",
    url: "https://techcoding.in/services",
    siteName: "Tech Coding",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "Web Development Services – Custom Websites by TechCoding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Development Services – Custom Websites by TechCoding",
    description: "TechCoding builds modern, responsive, and SEO-friendly websites for global businesses. Get tailored web development solutions to grow your brand online.",
    images: ["/images/og-about.png"],
  },
};

const Page = () => {
  return (
    <>
        <Service />
    </>
  )
}

export default Page