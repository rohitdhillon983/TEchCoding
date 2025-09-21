
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TEch Coding",
  description: "TechCoding provides world-class web development, mobile app solutions, and cloud hosting services. Trusted globally for secure, scalable, and innovative digital products.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <Header></Header>
          <div className="min-h-screen">
            {children}
          </div>
          
          <Footer></Footer>
        </Providers>
      </body>
    </html>
  );
}
