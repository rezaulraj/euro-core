import React, { useEffect, useRef } from "react";
import { FaHandshake } from "react-icons/fa";
import bgimage from "../../assets/employee/heroemp.jpg";
import client1 from "../../assets/about/cl1.png?url";
import client2 from "../../assets/about/cl2.png?url";
import client3 from "../../assets/about/cl3.png?url";
import client4 from "../../assets/about/cl4.png?url";
import client5 from "../../assets/about/cl5.png?url";
import client6 from "../../assets/about/cl6.png?url";
import client7 from "../../assets/about/cl7.png?url";
import client8 from "../../assets/about/cl8.png?url";

const HeroAbout = () => {
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

  return (
    <div className="relative h-screen min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgimage}
          alt="Professional team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-[#F37F21]/10 text-[#F37F21] text-lg mb-6">
            <FaHandshake className="mr-2" />
            <span>Who We Are</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Connecting Employers, Workers, And Partners With{" "}
            <span className="text-[#F37F21]">Euro Core</span>
          </h1>
        </div>

        <div className="absolute bottom-8 left-0 right-0 bg-white/10 backdrop-blur-sm py-8 overflow-hidden">
          <div
            ref={marqueeRef}
            className="flex items-center w-max will-change-transform"
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="mx-8 flex-shrink-0 transition-all duration-300 hover:scale-110 hover:opacity-100"
                style={{
                  opacity: 0.8,
                  // filter: "grayscale(100%) brightness(0) invert(1)",
                }}
              >
                <img
                  src={client}
                  alt={`Client ${(index % clients.length) + 1}`}
                  className="h-12 object-contain max-w-xs"
                  draggable="false"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAbout;
