import React, { useState } from "react";
import {
  FaHandshake,
  FaGlobe,
  FaUserTie,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import heroPartner from "../../assets/partner/heropartner.jpg";

import ContactForm from "../../components/ContactForm";

const HeroPartner = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroPartner}
          alt="Business partners shaking hands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/60"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-white">
            <div className="flex items-center gap-3 mb-6">
              <FaHandshake className="text-[#F37F21] text-3xl" />
              <span className="font-semibold bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
                GLOBAL PARTNERSHIP
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#F37F21]">Join</span> the EuroCore Partners
              Program
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-lg opacity-90">
              We are constantly looking for reliable associates to find
              qualified workforce around the world.
            </p>

            {/* Glassy effect cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
                <div className="flex items-center gap-4">
                  <div className="bg-[#F37F21]/20 p-3 rounded-full">
                    <FaGlobe className="text-[#F37F21] text-2xl" />
                  </div>
                  <h3 className="font-bold text-lg">Global Network</h3>
                </div>
                <p className="mt-3 opacity-80">
                  Access to talent pools across multiple countries and
                  industries
                </p>
              </div>

              <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition">
                <div className="flex items-center gap-4">
                  <div className="bg-[#F37F21]/20 p-3 rounded-full">
                    <FaChartLine className="text-[#F37F21] text-2xl" />
                  </div>
                  <h3 className="font-bold text-lg">Growth Opportunities</h3>
                </div>
                <p className="mt-3 opacity-80">
                  Scalable solutions that grow with your business needs
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => {
                  // const section = document.querySelector("#contact");
                  // section?.scrollIntoView({ behavior: "smooth" });
                  setShowContactForm(true);
                }}
                className="flex items-center gap-2 bg-[#F37F21] hover:bg-[#E5711A] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Become a Partner <FaArrowRight />
              </button>
            </div>
          </div>

          {/* Right side - Stats with glassy effect */}
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 space-y-8">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaUserTie className="text-[#F37F21]" />
                Partnership Benefits
              </h3>

              <div className="space-y-6">
                {[
                  {
                    value: "15+",
                    label: "Countries in our network",
                    icon: <FaGlobe />,
                  },
                  {
                    value: "95%",
                    label: "Client satisfaction rate",
                    icon: <FaHandshake />,
                  },
                  {
                    value: "24/7",
                    label: "Dedicated support",
                    icon: <FaChartLine />,
                  },
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-[#F37F21]/20 p-3 rounded-full text-[#F37F21]">
                      {stat.icon}
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-white">
                        {stat.value}
                      </p>
                      <p className="text-white/80">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#F37F21]/10 p-4 rounded-lg border border-[#F37F21]/30">
                <p className="text-white/90 italic">
                  "Our partnership with Humble has helped us access top talent
                  across 3 continents."
                </p>
                <p className="mt-2 text-white/70 text-sm">
                  - Global Recruitment Agency
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </section>
  );
};

export default HeroPartner;
