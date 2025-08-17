import React, { useState } from "react";
import heroImage from "../../assets/candidate/heroc.jpg";
import {
  FaHandshake,
  FaUsers,
  FaSearch,
  FaLightbulb,
  FaArrowRight,
  FaUserTie,
  FaGlobe,
  FaChartLine,
} from "react-icons/fa";
import ContactForm from "../../components/ContactForm";
import { FaUsersBetweenLines } from "react-icons/fa6";

const WorkersPartners = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/90 to-gray-600/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-32 lg:py-36 text-center max-w-4xl">
        <div className="flex justify-center items-center gap-3 mb-6">
          <FaHandshake className="text-[#F37F21] text-3xl" />
          <span className="font-semibold bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm text-white">
            WORKERS & PARTNERS
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
          <span className="text-[#F37F21]">Supporting</span> Workers & Building
          Partnerships
        </h1>

        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
          We provide comprehensive support to workers and collaborate with
          agencies to create meaningful opportunities worldwide.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16 max-w-4xl mx-auto">
          {/* <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition transform hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-[#F37F21]/20 p-3 rounded-full">
                <FaSearch className="text-[#F37F21] text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-white">
                Job Search Assistance
              </h3>
              <p className="text-white/80">
                Comprehensive support with job search through multiple
                assistance models
              </p>
            </div>
          </div> */}

          {/* Partnership Card */}
          {/* <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition transform hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-[#F37F21]/20 p-3 rounded-full">
                <FaLightbulb className="text-[#F37F21] text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-white">
                Partnership Opportunities
              </h3>
              <p className="text-white/80">
                Open to innovative partnerships and business collaborations
              </p>
            </div>
          </div> */}

          {/* Global Network Card */}
          {/* <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition transform hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-[#F37F21]/20 p-3 rounded-full">
                <FaGlobe className="text-[#F37F21] text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-white">Global Network</h3>
              <p className="text-white/80">
                Access to international talent pools and opportunities
              </p>
            </div>
          </div> */}

          {/* Growth Card */}
          {/* <div className="bg-white/10 p-6 rounded-xl backdrop-blur-sm border border-white/20 hover:bg-white/20 transition transform hover:scale-[1.02]">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="bg-[#F37F21]/20 p-3 rounded-full">
                <FaChartLine className="text-[#F37F21] text-2xl" />
              </div>
              <h3 className="font-bold text-lg text-white">Growth Support</h3>
              <p className="text-white/80">
                Career development and business expansion resources
              </p>
            </div>
          </div> */}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/candidate"
            className="flex items-center justify-center gap-2 bg-[#F37F21] hover:bg-[#E5711A] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Candidate Support <FaUsersBetweenLines />
          </a>
          <a
            href="/partnership"
            className="flex items-center justify-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold border-2 border-white transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
          >
            Partner With Us <FaHandshake />
          </a>
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm p-4 rounded-full inline-flex items-center gap-8 px-8 border border-white/20">
          <div className="text-center">
            <p className="text-2xl font-bold text-white">15+</p>
            <p className="text-sm text-white/80">Countries</p>
          </div>
          <div className="h-8 w-px bg-white/30"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">95%</p>
            <p className="text-sm text-white/80">Satisfaction</p>
          </div>
          <div className="h-8 w-px bg-white/30"></div>
          <div className="text-center">
            <p className="text-2xl font-bold text-white">24/7</p>
            <p className="text-sm text-white/80">Support</p>
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

export default WorkersPartners;
