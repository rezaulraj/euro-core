import React, { useState, useEffect, useRef } from "react";
import { FaQuoteLeft, FaPause, FaPlay, FaStar } from "react-icons/fa";
import axios from "axios";
import partner1 from "../../assets/home/pat1.avif";
import partner2 from "../../assets/home/pat2.avif";
import partner3 from "../../assets/home/pat3.avif";
import partner4 from "../../assets/home/pat4.avif";
import partner5 from "../../assets/home/pat5.avif";

const OurPartner = () => {
  // Default partner testimonials in case API fails
  const defaultTestimonials = [
    {
      id: 1,
      quote:
        "We struggled to find skilled factory workers locally. The partnership helped us fill key positions quickly with qualified, motivated staff.",
      name: "Tomas Novak",
      position: "Manufacturing Partner",
      image: partner1,
      rating: 5,
      tags: ["CzechRepublic", "Manufacturing", "WorkforceSolutions"],
    },
    {
      id: 2,
      quote:
        "We've hired several housekeeping and maintenance staff through this agency. Every candidate met our standards, and communication was always professional and efficient.",
      name: "Sofia Martins",
      position: "Facility Management Partner",
      image: partner2,
      rating: 5,
      tags: ["Portugal", "FacilityManagement", "ReliableService"],
    },
    {
      id: 3,
      quote:
        "Partnering with EuroCore transformed our recruitment process. Their understanding of our industry needs and quick response time has been invaluable.",
      name: "Marco Rossi",
      position: "HR Director",
      image: partner3,
      rating: 5,
      tags: ["Italy", "Efficient", "QualityStaff"],
    },
    {
      id: 4,
      quote:
        "The quality of candidates provided by EuroCore consistently exceeds our expectations. They've become an essential partner for our staffing needs.",
      name: "Elena Petrova",
      position: "Operations Manager",
      image: partner4,
      rating: 5,
      tags: ["Poland", "Quality", "Reliable"],
    },
    {
      id: 5,
      quote:
        "Outstanding service and exceptional candidates. EuroCore understands our business needs and delivers top-tier talent every time.",
      name: "James Wilson",
      position: "CEO",
      image: partner5,
      rating: 5,
      tags: ["Germany", "Excellence", "Partnership"],
    },
  ];

  const [testimonials, setTestimonials] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    fetchPartnerTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        if (!isPaused) {
          setActiveIndex((prev) => (prev + 1) % testimonials.length);
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

  const fetchPartnerTestimonials = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/testimonials"
      );

      // Filter only partner testimonials and ensure they are featured
      const partnerTestimonials = response.data.filter(
        (testimonial) =>
          testimonial.role === "partner" && testimonial.isFeatured
      );

      // Map API data to our component structure
      const mappedTestimonials =
        partnerTestimonials.length > 0
          ? partnerTestimonials.map((testimonial, index) => ({
              id: testimonial._id,
              quote: testimonial.text,
              name: testimonial.author,
              position: getPositionFromTags(testimonial.tags),
              image: testimonial.image,
              rating: testimonial.rating,
              tags: testimonial.tags,
              apiData: testimonial,
            }))
          : defaultTestimonials;

      setTestimonials(mappedTestimonials);
      setError(null);
    } catch (err) {
      console.error("Error fetching partner testimonials:", err);
      setError("Failed to load partner testimonials");
      setTestimonials(defaultTestimonials);
    } finally {
      setLoading(false);
    }
  };

  // Helper function to derive position from tags
  const getPositionFromTags = (tags) => {
    if (tags.includes("#Manufacturing")) return "Manufacturing Partner";
    if (tags.includes("#FacilityManagement"))
      return "Facility Management Partner";
    if (tags.includes("#Hospitality")) return "Hospitality Partner";
    return "Business Partner";
  };

  const handleDotClick = (index) => {
    setActiveIndex(index);
    setIsPaused(true);
  };

  const toggleAutoPlay = () => {
    setIsPaused(!isPaused);
  };

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <FaStar
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              What our <span className="text-[#F37F21]">partners say</span>
            </h2>
            <div className="w-20 h-1 bg-[#F37F21] mx-auto mb-6"></div>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#F37F21]"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What our <span className="text-[#F37F21]">partners say</span>
          </h2>
          <div className="w-20 h-1 bg-[#F37F21] mx-auto mb-6"></div>
          {error && (
            <p className="text-orange-600 text-sm mt-2">
              {error} - Showing default testimonials
            </p>
          )}
        </div>

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
                    <div className="md:w-2/3">
                      <div className="flex items-center justify-between mb-4">
                        <FaQuoteLeft className="text-3xl text-[#F37F21] opacity-30" />
                        <div className="flex items-center space-x-1">
                          {renderStars(testimonial.rating)}
                        </div>
                      </div>

                      <p className="text-lg text-gray-600 italic mb-8 leading-relaxed">
                        "{testimonial.quote}"
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {testimonial.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {tag.replace(/^#/, "")}
                          </span>
                        ))}
                      </div>

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

                    <div className="md:w-1/3 flex items-center justify-center">
                      <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-b-full rounded-tl-full overflow-hidden border-4 border-[#F37F21]/20">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to default images if API image fails
                            const fallbackImages = [
                              partner1,
                              partner2,
                              partner3,
                              partner4,
                              partner5,
                            ];
                            e.target.src =
                              fallbackImages[index % fallbackImages.length];
                          }}
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

        {/* Navigation Arrows */}
        <div className="flex justify-center mt-6 space-x-4">
          <button
            onClick={prevTestimonial}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50 cupsor-pointer"
            aria-label="Previous testimonial"
          >
            <svg
              className="w-6 h-6 text-[#F37F21] hover:text-[#153E67]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50 cursor-pointer"
            aria-label="Next testimonial"
          >
            <svg
              className="w-6 h-6 text-[#F37F21] hover:text-[#153E67]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>

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
        .animate-float {
          animation: float linear infinite;
        }
      `}</style>
    </div>
  );
};

export default OurPartner;
