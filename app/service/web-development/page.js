import Web from '@/Components/pages/service/Web'
import React from 'react'

export const metadata = {
  title: "Web Development Services – Custom Websites by TechCoding",
  description: "TechCoding builds modern, responsive, and SEO-friendly websites for global businesses. Get tailored web development solutions to grow your brand online.",
  openGraph: {
    title: "Web Development Services – Custom Websites by TechCoding",
    description: "TechCoding builds modern, responsive, and SEO-friendly websites for global businesses. Get tailored web development solutions to grow your brand online.",
    url: "https://techcodingsolutions.com/service/web-development",
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
        <Web></Web>
    </>
  )
}

export default Page










// src/app/services/web-development/page.tsx
// import Image from 'next/image';
// import FramerWrapper from '@/Components/FramerWrapper';
// import { 
//   Laptop, Palette, Rocket, Database, 
//   ShieldCheck, Zap, BarChart, FileCode, CheckCircle 
// } from 'lucide-react';

// export const metadata = {
//   title: 'Expert Web Development Services | Rohit Dhillon',
//   description: 'Professional web development services focusing on SEO, performance, and responsive design. Get a high-performance website built with Next.js and React.',
// };

// const serviceFeatures = [
//   { icon: Palette, title: 'Custom UI/UX Design', description: 'Websites designed to delight users and reflect your unique brand identity.' },
//   { icon: Laptop, title: 'Responsive & Mobile-First', description: 'Perfect user experience across all devices, from desktops to smartphones.' },
//   { icon: Rocket, title: 'High Performance & Speed', description: 'We prioritize speed to boost user engagement and search engine rankings.' },
//   { icon: FileCode, title: 'SEO-Friendly Structure', description: 'Built with clean code and structured data for maximum visibility in search results.' },
//   { icon: ShieldCheck, title: 'Robust Security', description: 'Implementing best practices to protect your website and user data.' },
//   { icon: Database, title: 'CMS Integration', description: 'Easily manage your content with powerful systems like Strapi or Custom CMS.' },
// ];

// const faqs = [
//   { question: 'How much does a typical website cost?', answer: 'The cost varies widely based on complexity and features. We offer custom quotes after discussing your project.' },
//   { question: 'How long will it take to build my website?', answer: 'Simple websites can take a few weeks, while complex web applications might take several months.' },
//   { question: 'Do you offer website maintenance?', answer: 'Yes, we provide ongoing maintenance to keep your website secure and updated.' },
//   { question: 'Will my website be mobile-friendly?', answer: 'Absolutely. Every site is built with a mobile-first approach.' },
// ];

// // Animation Variants
// const staggerContainer = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2 },
//   },
// };

// const fadeIn = {
//   hidden: { opacity: 0, y: 30 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
// };

// export default function WebDevelopmentPage() {
//   return (
//     <div className="bg-[#0f0f0f] text-white font-sans min-h-screen">
      
//       {/* 1. Hero Section */}
//       <FramerWrapper>
//         <section className="container mx-auto px-6 py-16 md:py-24 text-center">
//           <div className="initial-fade-in">
//             <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
//               Expert <span className="text-red-600">Web Development</span> To <span className="text-red-600">Grow Your Business</span>
//             </h1>
//             <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
//               I build modern, high-performance web applications using **Next.js** and **Strapi**. Focus on speed, SEO, and seamless user experiences.
//             </p>
//             <div className="flex flex-col sm:flex-row justify-center gap-4">
//               <button className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
//                 Start a Project
//               </button>
//               <button className="bg-[#1a1a1a] text-white px-8 py-3 rounded-full font-semibold border border-white/10 hover:bg-[#252525]">
//                 View Portfolio
//               </button>
//             </div>
//           </div>
//         </section>
//       </FramerWrapper>

//       {/* 2. Services Grid */}
//       <section className="bg-[#1a1a1a] py-20 px-6">
//         <div className="container mx-auto">
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
//             My <span className="text-red-600">Core</span> Services
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {serviceFeatures.map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div key={index} className="bg-[#0f0f0f] p-8 rounded-3xl border border-white/10 hover:border-red-600/50 transition-all">
//                   <Icon className="w-10 h-10 text-red-600 mb-4" />
//                   <h3 className="text-2xl font-semibold mb-2">{feature.title}</h3>
//                   <p className="text-gray-400">{feature.description}</p>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* 3. Tech Stack / Info Section */}
//       <section className="container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center gap-12">
//         <div className="w-full lg:w-1/2">
//           {/* Use the banner image we generated earlier */}
//           <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
//             <Image 
//               src="/service-banner.jpg" 
//               alt="Web Development Services" 
//               width={800} 
//               height={450}
//               className="w-full object-cover"
//             />
//           </div>
//         </div>
//         <div className="w-full lg:w-1/2">
//           <h2 className="text-3xl md:text-5xl font-bold mb-6">
//             Built with the <span className="text-red-600">Latest Tech</span>
//           </h2>
//           <p className="text-lg text-gray-400 mb-6">
//             I specialize in full-stack development using modern tools that ensure your site is fast and scalable.
//           </p>
//           <ul className="space-y-4 text-gray-300">
//             <li className="flex items-center gap-3"><Zap className="text-red-600" /> Fast Page Loads</li>
//             <li className="flex items-center gap-3"><BarChart className="text-red-600" /> SEO Optimized Structure</li>
//             <li className="flex items-center gap-3"><CheckCircle className="text-red-600" /> Custom React Components</li>
//           </ul>
//         </div>
//       </section>

//       {/* 4. FAQ Section */}
//       <section className="bg-[#1a1a1a] py-20 px-6">
//         <div className="container mx-auto max-w-4xl">
//           <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">FAQs</h2>
//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <details key={index} className="group border border-white/10 rounded-2xl p-6 bg-[#0f0f0f] cursor-pointer">
//                 <summary className="flex justify-between items-center font-semibold text-xl group-open:text-red-600 transition-colors">
//                   {faq.question}
//                   <span className="transition-transform group-open:rotate-180">▼</span>
//                 </summary>
//                 <p className="text-gray-400 mt-4 pt-4 border-t border-white/5">{faq.answer}</p>
//               </details>
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   );
// }