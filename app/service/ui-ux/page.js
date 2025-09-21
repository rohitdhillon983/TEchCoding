import UIUX from '@/Components/pages/service/UIUX';
import React from 'react'

export const metadata = {
  title: "UI/UX Design Services | TechCoding",
  description: "TechCoding provides expert UI/UX design services to help businesses create visually stunning and user-friendly digital experiences.",
  openGraph: {
    title: "UI/UX Design Services | TechCoding",
    description: "TechCoding provides expert UI/UX design services to help businesses create visually stunning and user-friendly digital experiences.",
    url: "https://techcodingsolutions.com/service/ui-ux",
    siteName: "TEch Coding",
    images: [
      {
        url: "/images/og-about.png",
        width: 1200,
        height: 630,
        alt: "UI/UX Design Services | TechCoding",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UI/UX Design Services | TechCoding",
    description: "TechCoding provides expert UI/UX design services to help businesses create visually stunning and user-friendly digital experiences.",
    images: ["/images/og-about.png"],
  },
};

const Page = () => {
  return (
    <>
        <UIUX />
    </>
  )
}

export default Page