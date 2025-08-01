import React from "react";
import {
  FaUserEdit,
  FaSearch,
  FaHandshake,
  FaBriefcase,
  FaRocket,
} from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { GiProgression } from "react-icons/gi";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserEdit className="text-4xl" />,
      title: "Create Your Profile",
      description:
        "Build your professional profile in minutes with our easy wizard",
      accentColor: "from-blue-400 to-blue-600",
    },
    {
      icon: <FaSearch className="text-4xl" />,
      title: "Intelligent Matching",
      description:
        "Our AI matches you with ideal jobs based on your skills and preferences",
      accentColor: "from-purple-400 to-purple-600",
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Receive Interview Requests",
      description:
        "Hiring managers reach out directly when your profile fits their role.",
      accentColor: "from-green-400 to-green-600",
    },
    {
      icon: <FaBriefcase className="text-4xl" />,
      title: "Secure the Right Offer",
      description:
        "Accept job offers from top-tier companies with competitive pay and clear growth paths.",
      accentColor: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <section
      id="how-it-work"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full mb-4">
            <FaRocket className="animate-pulse" />
            <span className="font-medium">Get Hired Faster</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How Our <span className="text-blue-600">Process Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple steps to transform your career with our powerful platform
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Progress line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-200 to-green-200 transform -translate-x-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative z-10">
                {/* Step Card */}
                <div className="h-full bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 group">
                  {/* Icon with gradient background */}
                  <div
                    className={`mb-6 w-20 h-20 rounded-2xl bg-gradient-to-br ${step.accentColor} flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform duration-500`}
                  >
                    {step.icon}
                  </div>

                  {/* Step number */}
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 bg-white border-4 border-blue-50 w-10 h-10 rounded-full flex items-center justify-center text-blue-600 font-bold shadow-sm">
                    {index + 1}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{step.description}</p>

                  {/* Checkmark (appears on hover) */}
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <IoMdCheckmarkCircle className="text-3xl text-green-500 animate-bounce" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Success CTA */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white shadow-2xl overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="lg:w-1/2">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to accelerate your career?
                </h3>
                <p className="text-lg opacity-90">
                  Join thousands of professionals who found better jobs faster
                  with our platform
                </p>
              </div>
              <div className="lg:w-1/2 flex justify-center lg:justify-end">
                <button
                  onClick={() => {
                    const section = document.querySelector("#get-in-touch");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex items-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg cursor-pointer"
                >
                  <GiProgression className="text-xl" />
                  <span>Start Your Journey Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
