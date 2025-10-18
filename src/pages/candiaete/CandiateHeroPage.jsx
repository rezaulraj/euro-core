import React, { useState } from "react";
import heroImage from "../../assets/candidate/candiate.webp?url";
import {
  FiUser,
  FiBriefcase,
  FiAward,
  FiMapPin,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";
import Calendly from "../../components/Calendly";

const CandidateHeroPage = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional candidate"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-800/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-36 md:py-40 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center items-center mb-6">
            <div className="w-16 h-1 bg-[#F37F21] mr-4"></div>
            <span className="uppercase tracking-wider text-white font-semibold text-sm">
              For Ambitious Professionals
            </span>
            <div className="w-16 h-1 bg-[#F37F21] ml-4"></div>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 text-white">
            <span className="text-[#F37F21]">Ignite</span> Your Career Potential
            <HiOutlineLightningBolt className="inline-block ml-2 text-[#F37F21] animate-pulse" />
          </h1>

          <p className="text-xl md:text-2xl mb-12 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Discover your perfect role with our personalized matching and access
            to top employers worldwide.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 max-w-5xl mx-auto">
            {[
              {
                icon: <FiBriefcase className="text-2xl" />,
                text: "Diverse Opportunities",
              },
              {
                icon: <FiUser className="text-2xl" />,
                text: "Personalized Career Matches",
              },
              {
                icon: <FiAward className="text-2xl" />,
                text: "Premium Employers",
              },
              {
                icon: <FiMapPin className="text-2xl" />,
                text: "Global Positions",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:border-[#F37F21]/50 transition-all group"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3 p-3 bg-[#F37F21]/20 rounded-full text-[#F37F21] group-hover:bg-[#F37F21]/30 transition">
                    {item.icon}
                  </div>
                  <span className="font-medium text-white group-hover:text-[#F37F21] transition">
                    {item.text}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 flex flex-wrap justify-center items-center gap-6 text-sm text-white/90">
            <div className="flex items-center gap-2 bg-white/30 px-4 py-2 rounded-full text-[15px] font-medium">
              <FiCheckCircle className="text-[#F37F21]" />
              <span>95% Candidate Satisfaction</span>
            </div>
            <div className="h-4 w-px bg-white/30"></div>
            <div className="flex items-center gap-2 bg-white/30 px-4 py-2 rounded-full text-[15px] font-medium">
              <FiCheckCircle className="text-[#F37F21]" />
              <span>1,000+ Successful Placements</span>
            </div>
            <div className="h-4 w-px bg-white/30"></div>
            <div className="flex items-center gap-2 bg-white/30 px-4 py-2 rounded-full text-[15px] font-medium">
              <FiCheckCircle className="text-[#F37F21]" />
              <span>30 Countries Worldwide</span>
            </div>
          </div>

          <button
            onClick={() => setShowContactForm(true)}
            className="flex items-center justify-center mt-16 gap-2 bg-[#F37F21] hover:bg-[#1e4f80] cursor-pointer text-white px-8 py-4 rounded-lg font-bold mx-auto transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#F37F21]/30"
          >
            Start Your Journey <FiArrowRight className="animate-pulse" />
          </button>
        </div>
      </div>
      <Calendly
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </div>
  );
};

export default CandidateHeroPage;
