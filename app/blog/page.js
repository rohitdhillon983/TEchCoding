import Blog from '@/Components/pages/Blog'
import React from 'react'

export const metadata = {
  title: "TechCoding | Blog – Web, Mobile & Cloud Technology Insights",
  description: "Explore TechCoding blog for insights, tutorials, and trends in web development, mobile applications, and cloud hosting for a global audience.",
  openGraph: {
    title: "TechCoding | Blog – Web, Mobile & Cloud Technology Insights",
    description: "Explore TechCoding blog for insights, tutorials, and trends in web development, mobile applications, and cloud hosting for a global audience.",
    url: "https://techcodingsolutions.com/blog",
    siteName: "TEch Coding",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "TechCoding | Blog – Web, Mobile & Cloud Technology Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechCoding | Blog – Web, Mobile & Cloud Technology Insights",
    description: "Explore TechCoding blog for insights, tutorials, and trends in web development, mobile applications, and cloud hosting for a global audience.",
    images: ["/images/og-about.png"],
  },
};

const Page = () => {
  return (
    <>
      <Blog />
    </>
  )
}

export default Page