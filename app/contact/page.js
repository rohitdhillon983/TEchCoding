import Contact from '@/Components/pages/Contact'
import React from 'react'

export const metadata = {
  title: "Contact us | TechCoding",
  description: "Contact TechCoding for web development, mobile app, or hosting solutions. Let’s discuss your project and build something amazing together.",
  openGraph: {
    title: "Contact us | TechCoding",
    description: "Contact TechCoding for web development, mobile app, or hosting solutions. Let’s discuss your project and build something amazing together.",
    url: "https://techcodingsolutions.com/contact",
    siteName: "TEch Coding",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "Contact us | TechCoding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact us | TechCoding",
    description: "Contact TechCoding for web development, mobile app, or hosting solutions. Let’s discuss your project and build something amazing together.",
    images: ["/images/og-about.png"],
  },
};

const Page = () => {
  return (
    <div>
        <Contact></Contact>
    </div>
  )
}

export default Page