'use client';
import Image from 'next/image'
import React from "react";
import ContactImage from '@/public/Images/service.png'
import { FaAngleDoubleRight } from "react-icons/fa";
// import { services, processSteps, features } from "@/data";
import {
  Monitor,
  Smartphone,
  PenTool,
  Cloud,
  MessageSquare,
  FileText,
  CircleDashed,
  CheckCircle2,
  Rocket,
  Users,
  ShieldCheck,
  Headphones,
  Clock3,
  ArrowRight,
  Mail
} from "lucide-react";
import Link from 'next/link';
import { link } from 'framer-motion/client';


const services = [
  {
    icon: Monitor,
    title: "Web Development",
    description:
      "We build fast, secure and responsive websites tailored to your business goals.",
      link: "/service/web-development"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile apps with seamless user experience.",
      link: "/service/mobileapp-development"
  },
  {
    icon: PenTool,
    title: "UI-UX",
    description:
      "Modern and user-centric designs that convert visitors into customers.",
        link: "/service/ui-ux-design"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure to improve performance and reliability.",
        link: "/service/cloud-solutions"
  },
];

const features = [
  {
    icon: Users,
    title: "Experienced Team",
    desc: "Skilled professionals with hands-on experience.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    desc: "Reliable and bug-free solutions.",
  },
  {
    icon: Clock3,
    title: "On-Time Delivery",
    desc: "Projects delivered according to schedule.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    desc: "Always available whenever needed.",
  },
];

const processSteps = [
  {
    icon: MessageSquare,
    title: "Consultation",
    desc: "Understanding your requirements and goals.",
  },
  {
    icon: FileText,
    title: "Planning",
    desc: "Creating a roadmap for success.",
  },
  {
    icon: PenTool,
    title: "Design & Development",
    desc: "Building scalable digital solutions.",
  },
  {
    icon: CheckCircle2,
    title: "Testing",
    desc: "Ensuring performance and reliability.",
  },
  {
    icon: Rocket,
    title: "Launch & Support",
    desc: "Deployment and continuous support.",
  },
];

export default function Service() {
  return (
    <div className="">
        <section className='relative min-h-[80vh] overflow-hidden border w-full flex justify-center bg-[#17161678]'>
                {/* <Image src={icon1} alt="Contact Us" className="absolute left-0 z-0" /> */}
            <Image src='/images/contact.png' width={1920} height={1080} alt="Service" className="w-full max-h-[100%] -z-10" />
                {/* <Image src={icon2} alt="Contact Us" className="absolute right-0 bottom-0 z-10" /> */}
              
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-white text-center">
                <h2 className="text-7xl font-bold border-b-4 border-[#b91202] w-fit mx-auto">Services</h2>
                <p className="text-2xl mt-2 flex items-center gap-2">Home <FaAngleDoubleRight className='text-[#b91202]'/> Services</p>
            </div>
        </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[#b91202] font-semibold tracking-widest uppercase">
            Our Services
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mt-2">
            Services We Offer
          </h2>

          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            We deliver innovative and future-ready digital solutions tailored
            to your business needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2  gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="bg-gray-100 border border-slate-100 rounded-3xl p-8 text-center shadow-sm hover:shadow-xl transition"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 ${index === 0 || index === 2 ? 'bg-[#b91202]/10' : 'bg-blue-50'}`}>
                  <Icon className={`w-10 h-10 ${index === 0 || index === 2 ? 'text-[#b91202]' : 'text-blue-600'}`} />
                </div>

                <h3 className="font-bold text-xl mb-4">
                  {service.title}
                </h3>

                <p className="text-slate-500">
                  {service.description}
                </p>

                <Link href={service.link} className={`mt-6 font-semibold inline-flex items-center gap-2 ${index === 0 || index === 2 ? 'text-[#b91202]' : 'text-blue-600'}`}>
                  Learn More <ArrowRight size={18} />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <p className="text-[#b91202] font-semibold uppercase tracking-widest">
            Our Process
          </p>

          <h2 className="text-4xl font-bold text-slate-900">
            Our Simple Process
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="text-center">
                <div className="text-[#b91202] font-bold mb-3">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <div className="w-20 h-20 rounded-full bg-[#b91202]/10 flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-9 h-9 text-[#b91202]" />
                </div>

                <h3 className="font-bold mb-2">
                  {step.title}
                </h3>

                <p className="text-slate-500 text-sm">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-20 border-t">
        <div className="grid lg:grid-cols-2 gap-12">

          <div>
            <p className="text-[#b91202] font-semibold uppercase tracking-widest">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold text-slate-900 mt-4">
              We Combine Creativity With Technology
            </h2>

            <p className="text-slate-500 my-6 leading-8">
              We don't just build solutions — we build partnerships focused on
              innovation, growth and long-term success.
            </p>

            <Link href="/contact" className=" px-7 py-4 rounded-xl text-white bg-[#b91202]">
              Work With Us
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="p-6 rounded-2xl border border-slate-100 bg-gray-50"
                >
                  <Icon className="w-10 h-10 text-[#b91202] mb-4" />

                  <h3 className="font-bold text-lg">
                    {item.title}
                  </h3>

                  <p className="text-slate-500 mt-2">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-[#b91202] p-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-5">
            <div className="w-14 h-14 rounded-full bg-white/20 flex items-center justify-center">
              <Mail className="text-white" />
            </div>

            <div>
              <h3 className="text-3xl font-bold text-white">
                Have a Project in Mind?
              </h3>

              <p className="text-white/90">
                Let's build something amazing together.
              </p>
            </div>
          </div>

          <Link href="/contact" className="bg-white text-[#b91202] px-8 py-4 rounded-xl font-semibold">
            Get In Touch
          </Link>
        </div>
      </section>

    </div>
  );
}