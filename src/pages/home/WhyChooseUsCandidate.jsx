import React, { useState } from "react";
import {
  FaHandshake,
  FaChartLine,
  FaGlobeEurope,
  FaUserShield,
  FaLightbulb,
  FaBalanceScale,
  FaArrowRight,
} from "react-icons/fa";
import ContactForm from "../../components/ContactForm";
import { motion } from "framer-motion";
const WhyChooseUsCandidate = () => {
  const [showContactForm, setShowContactForm] = useState(false);
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
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <img
                className="h-full w-full object-cover md:w-36"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="Happy candidate"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-[#F37F21] font-semibold">
                Success Story
              </div>
              <blockquote className="mt-2 text-gray-600">
                <p className="text-xl italic">
                  "EuroCore didn't just find me a job - they found me the right
                  career path. Their understanding of both my skills and
                  personality led me to a role where I've thrived and grown
                  beyond my expectations."
                </p>
              </blockquote>
              <div className="mt-4 flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://randomuser.me/api/portraits/women/43.jpg"
                    alt="Testimonial author"
                  />
                </div>
                <div className="ml-4">
                  <div className="text-base font-medium text-gray-900">
                    Anna Kowalski
                  </div>
                  <div className="text-base text-gray-500">
                    Senior Product Manager, Berlin
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-[#153E67] to-[#1e4f80] rounded-xl shadow-xl overflow-hidden">
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
                  <FaArrowRight className="transition-transform translate-x-2 duration-500" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </div>
  );
};

export default WhyChooseUsCandidate;
