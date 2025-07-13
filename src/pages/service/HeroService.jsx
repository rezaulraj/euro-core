import React, { useEffect, useRef } from "react";
import { FaSearch, FaUsers, FaChartLine, FaBriefcase } from "react-icons/fa";
import bgimage from "../../assets/service/heroservices.png?url";
import client1 from "../../assets/about/cl1.png?url";
import client2 from "../../assets/about/cl2.png?url";
import client3 from "../../assets/about/cl3.png?url";
import client4 from "../../assets/about/cl4.png?url";
import client5 from "../../assets/about/cl5.png?url";
import client6 from "../../assets/about/cl6.png?url";
import client7 from "../../assets/about/cl7.png?url";
import client8 from "../../assets/about/cl8.png?url";

const HeroService = () => {
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
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    if (!marquee) return;

    let animationFrame;
    let speed = 1;
    let position = 0;
    const marqueeWidth = marquee.scrollWidth / 2;

    const animate = () => {
      position -= speed;

      if (position <= -marqueeWidth) {
        position = 0;
      }

      marquee.style.transform = `translateX(${position}px)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      speed = 0.2;
    };
    const handleMouseLeave = () => {
      speed = 1;
    };

    marquee.addEventListener("mouseenter", handleMouseEnter);
    marquee.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrame);
      marquee.removeEventListener("mouseenter", handleMouseEnter);
      marquee.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const services = [
    {
      icon: <FaSearch className="text-2xl md:text-3xl text-[#F37F21]" />,
      title: "Talent Acquisition",
      description: "Find the perfect candidates for your open positions",
    },
    {
      icon: <FaUsers className="text-2xl md:text-3xl text-[#F37F21]" />,
      title: "Executive Search",
      description: "Connect with top-tier leadership talent",
    },
    {
      icon: <FaChartLine className="text-2xl md:text-3xl text-[#F37F21]" />,
      title: "Workforce Planning",
      description: "Strategic solutions for your organizational growth",
    },
    {
      icon: <FaBriefcase className="text-2xl md:text-3xl text-[#F37F21]" />,
      title: "Contract Staffing",
      description: "Flexible staffing solutions for project needs",
    },
  ];

  return (
    <div className="relative min-h-screen w-full overflow-hidden py-8 md:py-36">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={bgimage}
          alt="Professional services"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-20 md:py-0">
        <div className="max-w-6xl mx-auto w-full px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Transform Your Workforce with Our{" "}
            <span className="text-[#F37F21]">Euro Core</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-8 md:mb-10 max-w-3xl mx-auto">
            We deliver elite talent solutions customized to your business
            goals—helping you build winning teams that accelerate growth.
          </p>

          {/* Services Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8 md:mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl hover:bg-[#F37F21]/20 transition-all duration-300"
              >
                <div className="flex flex-col items-center">
                  <div className="mb-3 md:mb-4">{service.icon}</div>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-1 md:mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Client Logos Marquee */}
      <div className="absolute bottom-4 left-0 right-0 bg-white/10 backdrop-blur-sm py-4 md:py-8 overflow-hidden">
        <div
          ref={marqueeRef}
          className="flex items-center w-max will-change-transform"
        >
          {[...clients, ...clients].map((client, index) => (
            <div
              key={index}
              className="mx-4 md:mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:opacity-100"
              style={{
                opacity: 0.8,
                // filter: "grayscale(100%) brightness(0) invert(1)",
              }}
            >
              <img
                src={client}
                alt={`Client ${(index % clients.length) + 1}`}
                className="h-8 md:h-12 object-contain max-w-[80px] md:max-w-xs"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroService;
