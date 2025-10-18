import React, { useState } from "react";
import herojoin from "../../assets/join/heroj.webp";
import CareerForm from "../../components/CareerForm";

const HeroJoinUs = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const handleContactSubmit = (formData) => {
    console.log("Form submitted:", formData);
  };
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
   
      <div className="absolute inset-0 z-0">
        <img
          src={herojoin}
          alt="Team collaboration background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-600/70"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32 flex justify-center">
        <div className="w-full max-w-4xl text-center">
       
          <div className="text-white">
            <div className="inline-flex items-center gap-3 bg-white/20 px-4 py-2 rounded-full mb-6 backdrop-blur-sm mx-auto">
              <span className="font-medium">We're Hiring!</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Build Your Future <span className="text-[#F37F21]">With Us</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 opacity-90 mx-auto max-w-2xl">
              Join a global team driving innovation in Euro Core solutions.
              Advance your career while making a real impact.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => {
                  setShowContactForm(true);
                }}
                className="flex items-center gap-2 bg-[#F37F21] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#1e4f80] transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
              >
                Connect With Us
              </button>
              <button
                onClick={() => {
                  const section = document.querySelector("#meet-team");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-all duration-300 hover:shadow-lg cursor-pointer"
              >
                Join our Team
              </button>
            </div>


            <div className="flex flex-wrap gap-6 mt-12 justify-center">
              {[
                { value: "95%", label: "Employee Satisfaction" },
                { value: "4.8/5", label: "Work-Life Balance" },
                { value: "30%", label: "Annual Growth" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-3 rounded-xl backdrop-blur-sm"
                >
                  <p className="text-2xl font-bold text-[#F37F21]">
                    {stat.value}
                  </p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CareerForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
        onSubmit={handleContactSubmit}
      />
    </section>
  );
};

export default HeroJoinUs;
