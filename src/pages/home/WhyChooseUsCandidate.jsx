import React, { useState, useEffect } from "react";
import {
  FaHandshake,
  FaChartLine,
  FaGlobeEurope,
  FaUserShield,
  FaLightbulb,
  FaBalanceScale,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import ContactForm from "../../components/ContactForm";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

const WhyChooseUsCandidate = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  // Default testimonials in case API fails
  const defaultTestimonials = [
    {
      _id: "default-1",
      author: "Anna Kowalski",
      role: "candidate",
      text: "EuroCore didn't just find me a job - they found me the right career path. Their understanding of both my skills and personality led me to a role where I've thrived and grown beyond my expectations.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tags: ["Career Growth", "Croatia"],
      rating: 5,
      isFeatured: true,
    },
    {
      _id: "default-2",
      author: "Mark Johnson",
      role: "candidate",
      text: "The support I received from EuroCore was exceptional. They helped me navigate the entire relocation process and found me a perfect role in Germany.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tags: ["Relocation", "Germany"],
      rating: 5,
      isFeatured: true,
    },
    {
      _id: "default-3",
      author: "Sarah Chen",
      role: "candidate",
      text: "Moving to Europe was a dream come true thanks to EuroCore. They matched me with a company that values work-life balance and professional growth.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      tags: ["Work-Life Balance", "Netherlands"],
      rating: 5,
      isFeatured: true,
    },
  ];

  useEffect(() => {
    fetchTestimonials();
  }, []);

  useEffect(() => {
    if (testimonials.length > 0) {
      const interval = setInterval(() => {
        nextTestimonial();
      }, 5000); // Change every 5 seconds

      return () => clearInterval(interval);
    }
  }, [testimonials.length, currentTestimonialIndex]);

  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:5000/api/testimonials"
      );

      // Filter only candidate testimonials and ensure they are featured
      const candidateTestimonials = response.data.filter(
        (testimonial) =>
          testimonial.role === "candidate" && testimonial.isFeatured
      );

      setTestimonials(
        candidateTestimonials.length > 0
          ? candidateTestimonials
          : defaultTestimonials
      );
      setError(null);
    } catch (err) {
      console.error("Error fetching testimonials:", err);
      setError("Failed to load testimonials");
      setTestimonials(defaultTestimonials);
    } finally {
      setLoading(false);
    }
  };

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToTestimonial = (index) => {
    setCurrentTestimonialIndex(index);
  };

  const benefits = [
    {
      icon: <FaHandshake className="w-8 h-8 text-[#F37F21]" />,
      title: "Personalized Approach",
      description:
        "We take time to understand your career goals and match you with opportunities that truly fit your aspirations and skills.",
    },
    {
      icon: <FaChartLine className="w-8 h-8 text-[#F37F21]" />,
      title: "Career Growth",
      description:
        "Access to exclusive roles with clear progression paths in Europe's most dynamic companies and industries.",
    },
    {
      icon: <FaGlobeEurope className="w-8 h-8 text-[#F37F21]" />,
      title: "European Network",
      description:
        "Strong connections with top employers across Europe, giving you access to opportunities you won't find elsewhere.",
    },
    {
      icon: <FaUserShield className="w-8 h-8 text-[#F37F21]" />,
      title: "Candidate Protection",
      description:
        "We prioritize your interests, ensuring fair processes, transparent communication, and support throughout your journey.",
    },
    {
      icon: <FaLightbulb className="w-8 h-8 text-[#F37F21]" />,
      title: "Industry Insights",
      description:
        "Receive valuable market intelligence, salary benchmarks, and interview preparation tailored to your field.",
    },
    {
      icon: <FaBalanceScale className="w-8 h-8 text-[#F37F21]" />,
      title: "Cultural Fit Matching",
      description:
        "We go beyond skills to ensure the company culture aligns with your values and work style for long-term success.",
    },
  ];

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

  const currentTestimonial = testimonials[currentTestimonialIndex];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Why <span className="text-[#F37F21]">Choose EuroCore</span> for Your
            Career Journey
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
            We're not just recruiters - we're your career partners in building a
            successful future in Europe's most exciting markets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-50 mx-auto">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Candidate Success Stories */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Success <span className="text-[#F37F21]">Stories</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from candidates who found their dream careers through
              EuroCore
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#F37F21]"></div>
            </div>
          ) : error ? (
            <div className="text-center text-red-500 py-4">
              {error} - Showing default testimonials
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Testimonial Carousel */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
                <div className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTestimonialIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8"
                    >
                      {/* Image Section */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img
                            className="h-32 w-32 rounded-full object-cover border-4 border-[#F37F21] shadow-lg"
                            src={currentTestimonial.image}
                            alt={currentTestimonial.author}
                            onError={(e) => {
                              e.target.src =
                                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80";
                            }}
                          />
                          <div className="absolute -bottom-2 -right-2 bg-[#F37F21] text-white rounded-full p-2 shadow-lg">
                            <FaQuoteLeft className="w-4 h-4" />
                          </div>
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {currentTestimonial.author}
                          </h3>
                          <div className="flex items-center justify-center md:justify-start space-x-1 mt-2 md:mt-0">
                            {renderStars(currentTestimonial.rating)}
                          </div>
                        </div>

                        <blockquote className="mb-6">
                          <p className="text-lg text-gray-600 italic leading-relaxed">
                            "{currentTestimonial.text}"
                          </p>
                        </blockquote>

                        <div className="flex flex-wrap justify-center md:justify-start gap-2">
                          {currentTestimonial.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
                            >
                              {tag.replace(/^#/, "")}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Navigation Arrows */}
                <button
                  onClick={prevTestimonial}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <FaChevronLeft className="w-5 h-5 text-[#F37F21] hover:text-[#153E67]" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                >
                  <FaChevronRight className="w-5 h-5 text-[#F37F21] hover:text-[#153E67]" />
                </button>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 pb-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonialIndex
                          ? "bg-[#F37F21] w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-[#153E67] to-[#1e4f80] rounded-xl shadow-xl overflow-hidden"
        >
          <div className="px-6 py-12 sm:p-16">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  Ready to take the next step in your career?
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-blue-100">
                  Join thousands of professionals who found their ideal roles
                  through EuroCore's personalized approach.
                </p>
              </div>
              <div className="mt-8 flex md:mt-0 md:flex-shrink-0">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="/candidate"
                  className="inline-flex items-center justify-center gap-3 px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#F37F21] hover:bg-[#f7770f] md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:-translate-y-1"
                >
                  More info
                  <FaArrowRight className="transition-transform group-hover:translate-x-2 duration-500" />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <ContactForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </div>
  );
};

export default WhyChooseUsCandidate;
