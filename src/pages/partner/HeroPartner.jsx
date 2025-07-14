import React, { useEffect } from "react";
import {
  FaHandshake,
  FaGlobe,
  FaUserTie,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";
import heroPartner from "../../assets/partner/heropartner.jpg";

// Import all client images
import client1 from "../../assets/about/cl1.png?url";
import client2 from "../../assets/about/cl2.png?url";
import client3 from "../../assets/about/cl3.png?url";
import client4 from "../../assets/about/cl4.png?url";
import client5 from "../../assets/about/cl5.png?url";
import client6 from "../../assets/about/cl6.png?url";
import client7 from "../../assets/about/cl7.png?url";
import client8 from "../../assets/about/cl8.png?url";

const HeroPartner = () => {
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

  useEffect(() => {
    const scrollContainer = document.querySelector(".client-scroll");
    if (scrollContainer) {
      let scrollAmount = 0;
      const scrollSpeed = 1;

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
              <span className="text-[#F37F21]">Join</span> the Humble Partners
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
              <button className="flex items-center gap-2 bg-[#F37F21] hover:bg-[#E5711A] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Become a Partner <FaArrowRight />
              </button>
              <button className="flex items-center gap-2 bg-transparent hover:bg-white/10 text-white px-8 py-4 rounded-lg font-bold border border-white/30 transition-all duration-300">
                Learn More
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

        {/* Auto-scrolling clients */}
        <div className="mt-24 lg:mt-32 relative">
          <h3 className="text-center text-white text-xl mb-8 font-medium">
            Trusted by industry leaders worldwide
          </h3>

          <div className="relative overflow-hidden py-4">
            {/* Gradient fade effect */}
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-900/70 to-transparent z-20"></div>
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-900/70 to-transparent z-20"></div>

            {/* Infinite scrolling clients */}
            <div className="client-scroll flex items-center gap-12 w-max">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="w-40 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-110 bg-white/5 backdrop-blur-sm p-4 rounded-lg"
                >
                  <img
                    src={client}
                    alt={`Client ${(index % clients.length) + 1}`}
                    className="max-h-12 max-w-[140px] object-contain"
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

export default HeroPartner;
