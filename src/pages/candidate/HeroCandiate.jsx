import React, { useEffect } from "react";
import heroImage from "../../assets/candidate/heroc.jpg";
import candidateImage from "../../assets/candidate/candidiate.jpg";
import { FaHandshake, FaArrowRight } from "react-icons/fa";

// Import all client images
import client1 from "../../assets/about/cl1.png?url";
import client2 from "../../assets/about/cl2.png?url";
import client3 from "../../assets/about/cl3.png?url";
import client4 from "../../assets/about/cl4.png?url";
import client5 from "../../assets/about/cl5.png?url";
import client6 from "../../assets/about/cl6.png?url";
import client7 from "../../assets/about/cl7.png?url";
import client8 from "../../assets/about/cl8.png?url";

const HeroCandidate = () => {
  const clients = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6,
    client7,
    client8,
  ];

  // Auto-scrolling effect for clients
  useEffect(() => {
    const scrollContainer = document.querySelector(".client-scroll");
    if (scrollContainer) {
      let scrollAmount = 0;
      const scrollSpeed = 1; // Adjust speed here

      const scroll = () => {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
        scrollContainer.scrollLeft = scrollAmount;
      };

      const scrollInterval = setInterval(scroll, 20);
      return () => clearInterval(scrollInterval);
    }
  }, []);

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/90 to-gray-600/60"></div>
      </div>

      {/* Content container */}
      <div className="relative z-10 container mx-auto px-6 py-24 lg:py-32">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left side - Text content */}
          <div className="lg:w-1/2 text-white">
            <div className="flex items-center gap-3 mb-6">
              <FaHandshake className="text-[#F37F21] text-3xl" />
              <span className="font-semibold bg-white/10 px-4 py-1 rounded-full">
                Trusted by High-Growth Companies
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-[#F37F21]">Elevate</span> Your Career with
              Confidence
            </h1>

            <p className="text-xl md:text-2xl mb-8 max-w-lg opacity-90">
              Connect with leading employers and secure your next opportunity
              faster, with expert support.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => {
                  const section = document.querySelector("#how-it-work");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 bg-[#F37F21] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#F37F21] transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                How It Works <FaArrowRight />
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-md">
              {[
                { value: "10,000+", label: "Candidates Hired" },
                { value: "80%", label: "Interview Success" },
                { value: "4/5", label: "Candidate Satisfaction" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-4 rounded-xl backdrop-blur-sm space-y-2 hover:bg-white/20 transition"
                >
                  <p className="text-2xl font-bold text-[#F37F21]">
                    {stat.value}
                  </p>
                  <p className="text-sm opacity-80">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Image with hover effect */}
          <div className="lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative w-full max-w-xl mx-auto overflow-hidden">
              <img
                src={candidateImage}
                alt="Successful candidate"
                className="rounded-2xl border-4 border-white shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500"
              />

              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#F37F21] rounded-full opacity-10 -z-10"></div>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#F37F21] rounded-full opacity-10 -z-10"></div>
            </div>
          </div>
        </div>

        {/* Auto-scrolling clients */}
        <div className="mt-24 lg:mt-32 relative">
          <h3 className="text-center text-white text-xl mb-8 font-medium">
            Trusted by leading companies worldwide
          </h3>

          <div className="relative overflow-hidden py-4">
            {/* Gradient fade effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900/70 to-transparent z-20"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900/70 to-transparent z-20"></div>

            {/* Infinite scrolling clients */}
            <div className="client-scroll flex items-center gap-12 w-max bg-[#F37F21]/20">
              {/* Double the array for seamless looping */}
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110"
                >
                  <img
                    src={client}
                    alt={`Client ${(index % clients.length) + 1}`}
                    className="max-h-12 max-w-[120px] object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroCandidate;
