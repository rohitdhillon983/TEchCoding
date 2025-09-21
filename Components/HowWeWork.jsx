"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import sideImg from "@/public/Images/naviate-brainstorming.svg";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { id: 1, title: "Requirement Gathering & Analysis", discription: "The first step involves understanding the client's needs and project objectives. This includes discussions about required features, target audience, platform preferences (web, Android, iOS), and business goals. A Requirement Specification Document is created to outline the project scope, ensuring both parties have a clear understanding before proceeding." },
  { id: 2, title: "Planning & Proposal", discription: "Once requirements are gathered, the next step is project planning. This involves defining a detailed timeline, selecting the appropriate technology stack (e.g., React, Next.js, Node.js, MongoDB), and estimating costs. A structured Project Proposal is provided to the client, including deliverables, pricing, and milestones. Once agreed upon, a formal contract is signed before development begins." },
  { id: 3, title: "UI/UX Design", discription: "User experience plays a crucial role in web and mobile development. Designers create wireframes and prototypes using tools like Figma or Adobe XD to visualize the project. A mobile-first approach ensures responsiveness across all devices. The design phase includes multiple revisions based on client feedback to finalize the best user interface before development starts." },
  { id: 4, title: "Development (Coding Phase)", discription: "During this phase, developers write code for both the frontend and backend. The frontend is developed using technologies like React.js, Next.js, and Tailwind CSS, while the backend is built using Node.js, Express.js, and MongoDB. If it's a mobile app, technologies like React Native or Flutter are used. API integration, authentication (JWT), and cloud services are implemented to ensure full functionality. The project is developed in a modular way to make future enhancements easier." },
  { id: 5, title: "Testing & Quality Assurance", discription: "Before launching, thorough testing is conducted to ensure the application is bug-free and performs smoothly. Different types of testing such as functional, security, performance, and usability testing are performed. Any issues found during testing are fixed immediately. The client is given a demo for final approval before deployment." },
  { id: 6, title: "Deployment & Launch", discription: "Once testing is completed, the project is deployed to a live environment. For websites, the frontend is deployed on platforms like Vercel or Netlify, while the backend is hosted on Railway, Render, or AWS. Mobile applications are published on Google Play Store and Apple App Store. A final round of testing is done post-deployment to ensure smooth operation." },
  { id: 7, title: "Maintenance & Support", discription: "After the project goes live, ongoing maintenance and support are provided to keep it updated and running efficiently. Regular updates, bug fixes, performance monitoring, and security patches are implemented. Additionally, new features can be added based on user feedback, ensuring the product remains competitive and scalable over time." },

];

export const HowWeWork = () => {
  const appContainerRef = useRef(null);
  const skillsTitleRef = useRef(null);

  useGSAP(() => {
    if (appContainerRef.current) {
      gsap.to(appContainerRef.current, {
        y: "-2300px",
        duration: 15,
        scrollTrigger: {
          trigger: skillsTitleRef.current,
          scroller: "body",
          start: "top top",
          end: "bottom 0%",
          scrub: 2,
          pin: true,
        },
      });
    }
  }, []);

  return (
    <div className="relative min-h-screen ">
      <h5 className="text-[#b91202] text-lg Rajdhani font-bold uppercase tracking-wider text-center max-[769px]:text-sm max-[426px]:text-xs">// how we work</h5>
      <h2 className="text-5xl font-bold text-gray-900 mt-2 Rajdhani text-center max-[426px]:text-3xl max-[769px]:text-5xl">How TechCoding Work</h2>
      <div ref={skillsTitleRef} id="Skills_Title" className="relative min-h-screen w-full flex flex-col gap-8 sm:gap-12">
        <div className="relative flex justify-center gap-9 items-center w-11/12 overflow-hidden mx-auto">
          <div className="flex flex-col w-[60%] border border-[#b91202] rounded-3xl px-10">
              <Image src={sideImg} alt="" width={500} height={500}>
              </Image>
          </div>
          <div className="relative top-40 w-[60%] flex flex-col gap-40 z-10 mx-auto max-h-screen" ref={appContainerRef} id="AppContainer">
            {skills.map((process) => (
              <div key={process.id} className="w-full relative">
                <h2 className="text-3xl text-[#b91202] border border-[#b91202] rounded-full w-12 h-12 flex justify-center items-center bg-[#f9958c61] font-bold mb-4">{process.id}</h2>
                <div className="flex flex-col justify-center filter backdrop-blur-sm bg-[#ffffff60]">               
                    <h1 className="text-3xl font-bold text-left text-[#b91202]">{process.title}</h1>
                    <p>{process.discription}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
