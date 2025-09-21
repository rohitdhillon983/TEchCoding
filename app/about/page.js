import About from '@/Components/pages/About'
import React from 'react'

export const metadata = {
  title: "About TechCoding | Global Software Development Company",
  description: "TechCoding is a global IT solutions provider specializing in web, mobile, and cloud services. Helping businesses innovate and scale with technology.",
  openGraph: {
    title: "About TechCoding | Global Software Development Company",
    description: "TechCoding is a global IT solutions provider specializing in web, mobile, and cloud services. Helping businesses innovate and scale with technology.",
    url: "https://techcodingsolutions.com/about",
    siteName: "TEch Coding",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "About TechCoding | Global Software Development Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About TechCoding | Global Software Development Company",
    description: "TechCoding is a global IT solutions provider specializing in web, mobile, and cloud services. Helping businesses innovate and scale with technology.",
    images: ["/images/og-about.png"],
  },
};

const Page = () => {
  return (
    <div>
        <About></About>
    </div>
  )
}

export default Page