'use client'
import React from 'react';
import symbol from "@/public/Images/whyChoose/Symbol-4.png";
import symbol1 from "@/public/Images/whyChoose/Symbol-4.png";
import symbol2 from "@/public/Images/whyChoose/Symbol-4.png";
import symbol3 from "@/public/Images/whyChoose/Symbol-4.png";
import symbol4 from "@/public/Images/whyChoose/Symbol-4.png";

const WhyChoose = () => {
 
  return (
    <div className="bg-white py-1 px-6 md:px-12 my-15">
      <div className="mx-auto text-center">       
        {/* Features Section */}
        <div className="flex flex-wrap gap-6 justify-end pr-10">
          <div className="w-[558px] text-left flex flex-col justify-center">
            <p className="text-[#b91202] text-lg Rajdhani font-bold tracking-wider max-[769px]:text-sm max-[426px]:text-xs">
              // Why TEchCoding
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 Rajdhani">
               Why Choose <span className="text-[#b91202]">TechCoding</span>
            </h2>
            <p className="text-[#0d1216ef] text-[15px] Rajdhani">
              It is with consistent services and results that build trust with the
              people and that in turn help us to serve the business better.
            </p>
          </div>

          {/* Feature 1 */}
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 text-center w-[288px]">
            <div className="flex items-center justify-center mb-4">
              <div className=" text-white w-12 h-12 flex items-center justify-center rounded-full">
               <img src={symbol} alt="" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Confidential & Safe</h3>
            <p className="text-gray-500">
              All your private information is safe with us.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center w-[288px]">
            <div className="flex items-center justify-center mb-4">
              <div className="text-white w-12 h-12 flex items-center justify-center rounded-full">
               <img src={symbol1} alt="" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">No Hidden Fee</h3>
            <p className="text-gray-500">
              Everything is put before you with no hidden charges or conditions.
            </p>
          </div>
          {/* <br /> */}

          {/* Feature 3 */}
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-6 text-center w-[288px]">
            <div className="flex items-center justify-center mb-4">
              <div className=" text-white w-12 h-12 flex items-center justify-center rounded-full">
                <img src={symbol2} alt="" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Guaranteed Satisfaction</h3>
            <p className="text-gray-500">
              We ensure that you stay 100% satisfied with our offered services.
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-pink-50 border border-pink-100 rounded-lg p-6 text-center w-[288px]">
            <div className="flex items-center justify-center mb-4">
              <div className=" text-white w-12 h-12 flex items-center justify-center rounded-full">
                <img src={symbol3} alt="" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Expert CA/CS Assistance</h3>
            <p className="text-gray-500">
              Prompt support from our in-house expert professionals.
            </p>
          </div>

          {/* Feature 5 */}
          <div className="bg-red-50 border border-red-100 rounded-lg p-6 text-center w-[288px]">
            <div className="flex items-center justify-center mb-4">
              <div className=" text-white w-12 h-12 flex items-center justify-center rounded-full">
                <img src={symbol4} alt="" />
              </div>
            </div>
            <h3 className="text-lg font-semibold">Best UI/UX Design</h3>
            <p className="text-gray-500">
              our UI/UX designers create engaging and user-friendly interfaces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;