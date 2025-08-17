import React, { useState } from "react";
import {
  FaHandshake,
  FaGlobe,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import heroPartner from "../../assets/partner/heropartner.jpg";
import ContactForm from "../../components/ContactForm";

const HeroPartner = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
     
      <div className="absolute inset-0 z-0">
        <img
          src={heroPartner}
          alt="Business partners shaking hands"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/60"></div>
      </div>

     
      <div className="relative z-10 container mx-auto px-6 py-32 lg:py-38 max-w-4xl">
        <div className="text-center">
         
          <div className="flex justify-center items-center gap-3 mb-6">
            <FaHandshake className="text-[#F37F21] text-3xl" />
            <span className="font-semibold bg-white/10 px-4 text-white py-1 rounded-full backdrop-blur-sm">
              GLOBAL PARTNERSHIP
            </span>
          </div>

         
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-6">
            <span className="text-[#F37F21]">Join</span> the EuroCore Partners
            Program
          </h1>

       
          <p className="text-xl md:text-2xl mb-12 opacity-90 text-white/90 max-w-3xl mx-auto">
            We are constantly looking for reliable associates to find qualified
            workforce around the world.
          </p>

         
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto">
            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition transform hover:scale-[1.02]">
              <div className="flex flex-col items-center text-center gap-2 text-white" >
                <div className="flex items-center gap-2">
                  <FaGlobe className="text-[#F37F21] text-2xl" />
                  <h3 className="font-bold text-lg text-white">
                    Global Network
                  </h3>
                </div>
                <p className="mt-2 opacity-80">
                  Access to talent pools across multiple countries and
                  industries
                </p>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition transform hover:scale-[1.02] text-white">
              <div className="flex flex-col items-center text-center gap-4">
                <div className="flex items-center gap-2 ">
                  <FaChartLine className="text-[#F37F21] text-2xl" />
                  <h3 className="font-bold text-lg text-white">Growth Opportunities</h3>
                </div>
                <p className="mt-2 opacity-80">
                  Scalable solutions that grow with your business needs
                </p>
              </div>
            </div>
          </div>

        
          <div className="flex justify-center">
            <button
              onClick={() => setShowContactForm(true)}
              className="flex items-center gap-2 bg-[#F37F21] hover:bg-[#E5711A] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
            >
              Become a Partner <FaArrowRight />
            </button>
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
