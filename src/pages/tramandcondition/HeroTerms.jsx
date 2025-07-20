import React from "react";
import {
  FaFileContract,
  FaShieldAlt,
  FaBalanceScale,
  FaHandshake,
} from "react-icons/fa";
import heroTermsAndCondition from "../../assets/teram/terms-and-condition-banner.webp";

const HeroTerms = () => {
  return (
    <div className="relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>
      <img
        src={heroTermsAndCondition}
        alt="Terms and Conditions"
        className="w-full h-[500px] object-cover object-center"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[500px] flex flex-col justify-center text-center">
        {/* Title */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fadeIn">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Understanding our commitment to transparency and your rights
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {/* Feature 1 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-600 p-3 rounded-full">
                <FaFileContract className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-white font-semibold mb-2">Legal Compliance</h3>
            <p className="text-gray-200 text-sm">
              Fully compliant with international regulations
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-green-600 p-3 rounded-full">
                <FaShieldAlt className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-white font-semibold mb-2">Data Protection</h3>
            <p className="text-gray-200 text-sm">
              Your privacy is our top priority
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-600 p-3 rounded-full">
                <FaBalanceScale className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-white font-semibold mb-2">Fair Practices</h3>
            <p className="text-gray-200 text-sm">
              Transparent and ethical guidelines
            </p>
          </div>

          {/* Feature 4 */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex justify-center mb-4">
              <div className="bg-orange-500 p-3 rounded-full">
                <FaHandshake className="text-white text-2xl" />
              </div>
            </div>
            <h3 className="text-white font-semibold mb-2">Partnership</h3>
            <p className="text-gray-200 text-sm">
              Mutually beneficial relationships
            </p>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
        @keyframes bounce {
          0%,
          20%,
          50%,
          80%,
          100% {
            transform: translateY(0) translateX(-50%);
          }
          40% {
            transform: translateY(-20px) translateX(-50%);
          }
          60% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroTerms;
