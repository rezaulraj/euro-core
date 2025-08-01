import React from "react";
import { FaBuilding, FaHandshake, FaSearch } from "react-icons/fa";
import rosaliePhoto from "../../assets/about/about1.webp?url";
import maximePhoto from "../../assets/about/about2.webp?url";
import location from "../../assets/about/office2.jpg?url";

const AboutStory = () => {
  return (
    <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Section 1 - Text Left / Image Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">
              A Proven Approach to Talent Matching
            </h3>
            <div className="w-20 h-1 bg-[#F37F21]"></div>
            <p className="text-lg text-gray-600">
              Our founders identified a critical gap in how organizations
              sourced top-tier professionals for strategic roles—and created a
              solution that continues to lead the market. Today, Euro Core
              is a trusted partner for companies across Europe, APAC, and MENA,
              helping them build high-impact teams that drive growth,
              innovation, and long-term success.
            </p>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden">
            <img
              src={rosaliePhoto}
              alt="Rosalie Thompson"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">Rosalie Thompson</p>
              <p className="text-gray-300 text-sm">Co-Founder & CEO</p>
            </div> */}
          </div>
        </div>

        {/* Section 2 - Image Left / Text Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden lg:order-1 order-2">
            <img
              src={maximePhoto}
              alt="Maxime Ferreira"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium">Maxime Ferreira</p>
              <p className="text-gray-300 text-sm">Head of Recruitment</p>
            </div> */}
          </div>

          {/* Right Column - Text */}
          <div className="space-y-6 lg:order-2 order-1">
            <h3 className="text-3xl font-bold text-gray-900">
              Trusted by Industry Leaders
            </h3>
            <div className="w-20 h-1 bg-[#F37F21]"></div>
            <p className="text-lg text-gray-600">
              From C-suite placements to building entire innovation teams, we’ve
              placed hundreds of senior professionals across sectors. Our impact
              is measured not just in hires, but in long-term business growth.
              We bring together strategy, speed, and precision ensuring the
              right fit every time.
            </p>
            <button
              onClick={() => {
                const section = document.querySelector("#contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center px-6 py-3 bg-[#F37F21] text-white rounded-lg font-semibold hover:bg-[#123B65] transition-colors mt-4 cursor-pointer"
            >
              <FaSearch className="mr-3" />
              Learn more about our processes
            </button>
          </div>
        </div>

        {/* Section 3 - Office Location */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Office</h3>
            <div className="w-20 h-1 bg-[#F37F21]"></div>
            <div className="flex items-start space-x-4">
              <FaBuilding className="text-2xl text-[#F37F21] mt-1" />
              <div>
                <p className="text-lg font-medium text-gray-900">
                  Cloud Konektion Hired Malta
                </p>
                <p className="text-gray-600">60, ST. JOSEPH STREET, ISLA</p>
                {/* <p className="text-gray-600">
                  Spore Business Federation Centre
                </p> */}
                <p className="text-gray-600">Malta</p>
              </div>
            </div>
          </div>

          {/* Right Column - Map Placeholder */}
          <div className="relative h-80 bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gray-900/20"></div>
            <div className="absolute bottom-0 right-0 bg-gray-900/40 text-center p-6">
              <FaBuilding className="text-5xl text-[#F37F21] mx-auto mb-4" />
              <p className="text-white font-semibold">Office Location</p>
            </div>
            <img src={location} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutStory;
