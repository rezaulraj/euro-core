import React from "react";
import heroImage from "../../assets/candidate/herocandiate.png?url";
import {
  FiUser,
  FiBriefcase,
  FiAward,
  FiMapPin,
  FiArrowRight,
} from "react-icons/fi";
import { HiOutlineLightningBolt } from "react-icons/hi";

const CandiateHeroPage = () => {
  return (
    <div className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with gradient overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/60"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 container mx-auto px-6 text-white">
        <div className="max-w-2xl">
          <div className="flex items-center mb-4">
            <div className="w-12 h-1 bg-[#F37F21] mr-4"></div>
            <span className="uppercase tracking-wider text-[#F37F21] font-medium">
              For Candidates
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Your <span className="text-[#F37F21]">Career</span> Journey Starts
            Here
            <HiOutlineLightningBolt className="inline-block ml-2 text-[#F37F21]" />
          </h1>

          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Discover opportunities that align with your skills, values, and
            professional aspirations.
          </p>

          {/* Features with icons */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <FiBriefcase className="text-2xl mr-3 text-[#F37F21]" />
              <span>Diverse Opportunities</span>
            </div>
            <div className="flex items-center">
              <FiUser className="text-2xl mr-3 text-[#F37F21]" />
              <span>Personalized Matches</span>
            </div>
            <div className="flex items-center">
              <FiAward className="text-2xl mr-3 text-[#F37F21]" />
              <span>Top Employers</span>
            </div>
            <div className="flex items-center">
              <FiMapPin className="text-2xl mr-3 text-[#F37F21]" />
              <span>Global Reach</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandiateHeroPage;
