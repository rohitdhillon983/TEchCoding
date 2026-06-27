import Link from "next/link";
import {
  Home,
  Briefcase,
  User,
  FileText,
  Phone,
  ArrowRight,
} from "lucide-react";
const image404 = "@/public/Images/404.png";

export default function NotFound() {
  const cards = [
    {
      icon: <Briefcase size={24} />,
      title: "Services",
      desc: "Explore our services",
      href: "/services",
    },
    {
      icon: <User size={24} />,
      title: "About Us",
      desc: "Learn more about us",
      href: "/about",
    },
    {
      icon: <FileText size={24} />,
      title: "Blogs",
      desc: "Read our latest blogs",
      href: "/blogs",
    },
    {
      icon: <Phone size={24} />,
      title: "Contact Us",
      desc: "Get in touch with us",
      href: "/contact",
    },
  ];

  return (
    <section className="min-h-screen bg-[#ffffff] flex items-center justify-center px-4 py-10">
      <div className="w-full max-w-6xl">

        {/* 404 Image */}
        <div className="flex justify-center">
          <img
            src={image404}
            alt="404"
            className="w-full max-w-3xl"
          />
        </div>

        {/* Content */}
        <div className="text-center mt-4">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900">
            <span className="text-[#b91202]">Oops!</span> Page Not Found
          </h1>

          <p className="mt-5 text-slate-500 text-lg max-w-2xl mx-auto">
            The page you're looking for might have been removed,
            had its name changed, or is temporarily unavailable.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 mt-8 bg-[#b91202] text-white px-8 py-4 rounded-2xl font-medium transition"
          >
            <Home size={18} />
            Back to Home
          </Link>
        </div>

      </div>
    </section>
  );
}