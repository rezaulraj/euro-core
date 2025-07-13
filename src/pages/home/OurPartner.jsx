import React, { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaPause, FaPlay } from "react-icons/fa";
import partner1 from "../../assets/home/pat1.avif";
import partner2 from "../../assets/home/pat2.avif";
import partner3 from "../../assets/home/pat3.avif";
import partner4 from "../../assets/home/pat4.avif";
import partner5 from "../../assets/home/pat5.avif";

const OurPartner = () => {
  const testimonials = [
    {
      id: 1,
      quote:
        "Cloud Konektion played a key role in helping us secure outstanding leadership talent across financial services and other sectors. Their consultative approach enabled us to fill critical roles like Chief Product Officer and Chief Operating Officer, bringing fresh strategic perspective to our leadership team.",
      name: "Ivonny Liemantika",
      position: "Executive Head of Talent Acquisition at Sinarmas BCE",
      image: partner1,
    },
    {
      id: 2,
      quote:
        "Partnering with Cloud Konektion transformed our leadership recruitment. From sourcing top-tier candidates to ensuring alignment with our business strategy, their precision and dedication have fueled our continued growth.",
      name: "William Twining",
      position: "Director, Talent Resources at Charoen Pokphand Group (CP)",
      image: partner2,
    },
    {
      id: 3,
      quote:
        "Their team helped us build a high-performing division by delivering exceptional professionals for key roles. Cloud Konektion’s commitment to quality has been instrumental in driving our growth and success.",
      name: "Frederick Loy",
      position: "Group Recruitment Manager at Foodpanda",
      image: partner3,
    },
    {
      id: 4,
      quote:
        "Finding the right talent is critical. Cloud Konektion took the time to understand our goals and delivered candidates who not only met the role requirements but also fit seamlessly with our culture. They've become a trusted hiring partner.",
      name: "Yassine Bel Mamoun",
      position: "Chief Operating Officer at Manatal",
      image: partner4,
    },
    {
      id: 5,
      quote:
        "Our experience has been nothing short of exceptional. Cloud Konektion delivered high-caliber candidates for specialized roles, enabling us to scale with confidence and clarity.",
      name: "Juliette Gimenez",
      position: "Founder & CEO at Goxip",
      image: partner5,
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isPaused) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, testimonials.length]);

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const toggleAutoPlay = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#F37F21] animate-float"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 30 + 20}s`,
              animationDelay: `${Math.random() * 10}s`,
              filter: "blur(60px)",
            }}
          ></div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What our <span className="text-[#F37F21]">partners say</span>
          </h2>
          <div className="w-20 h-1 bg-[#F37F21] mx-auto mb-6"></div>
        </div>

        {/* Testimonials Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          ref={scrollRef}
        >
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                <div className="bg-white p-8 md:p-10 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row gap-8">
                    {/* Testimonial Content */}
                    <div className="md:w-2/3">
                      <FaQuoteLeft className="text-3xl text-[#F37F21] mb-6 opacity-30" />
                      <p className="text-lg text-gray-600 italic mb-8">
                        "{testimonial.quote}"
                      </p>

                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-gray-900">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-500">
                            {testimonial.position}
                          </p>
                        </div>
                        <button
                          onClick={toggleAutoPlay}
                          className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                          aria-label={isPaused ? "Play" : "Pause"}
                        >
                          {isPaused ? (
                            <FaPlay className="text-[#F37F21]" />
                          ) : (
                            <FaPause className="text-[#F37F21]" />
                          )}
                        </button>
                      </div>
                    </div>

                    {/* Partner Image */}
                    <div className="md:w-1/3 flex items-center justify-center">
                      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-b-full rounded-tl-full overflow-hidden border-4 border-[#F37F21]/20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-10 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-[#F37F21] w-6" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Animation styles */}
      <style jsx="true" global="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          25% {
            transform: translateY(-20px) translateX(10px) scale(1.05);
          }
          50% {
            transform: translateY(0) translateX(20px) scale(1);
          }
          75% {
            transform: translateY(20px) translateX(10px) scale(0.95);
          }
        }
      `}</style>
    </div>
  );
};

export default OurPartner;
