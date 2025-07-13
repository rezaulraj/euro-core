import React from "react";
import {
  FaSearch,
  FaUserFriends,
  FaComments,
  FaHandshake,
} from "react-icons/fa";

const HowWeWork = () => {
  const steps = [
    {
      icon: <FaSearch className="text-2xl text-[#F37F21]" />,
      title: "Discover",
      description: "We align with your goals, culture, and hiring needs.",
    },
    {
      icon: <FaUserFriends className="text-2xl text-[#F37F21]" />,
      title: "Source",
      description: "We identify top talent through targeted outreach and our global network.",
    },
    {
      icon: <FaComments className="text-2xl text-[#F37F21]" />,
      title: "Interview",
      description: "We manage the entire interview process for speed and efficiency.",
    },
    {
      icon: <FaHandshake className="text-2xl text-[#F37F21]" />,
      title: "Hire & Support",
      description: "We assist with offer negotiation and ensure smooth onboarding and retention.",
    },
  ];

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            How we <span className="text-[#F37F21]">Work</span>
          </h2>
          <div className="w-20 h-1 bg-[#F37F21] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about our working process
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Text */}
          <div className="lg:pt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Our Expertise
            </h3>
            <p className="text-gray-600 mb-4">
              We are team of experienced recruiters, researchers, and account
              managers with extensive experience in HR and Tech consulting, and
              an impressive track record of successful placements.
            </p>
            <p className="text-gray-600">
              Our process begins with a thorough understanding of your business
              goals, vision, and culture, as well as an analysis of your current
              and future tech talent needs and challenges.
            </p>
          </div>

          {/* Center Steps with Connecting Dots */}
          <div className="relative my-8 lg:my-0">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#F37F21] transform -translate-x-1/2"></div>

            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connecting Dot */}
                  <div className="hidden lg:block absolute left-1/2 top-5 w-4 h-4 rounded-full bg-[#F37F21] transform -translate-x-1/2 -translate-y-1/2 z-10"></div>

                  {/* Step Card */}
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 lg:ml-10 lg:mr-10">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-[#F37F21]/10 flex items-center justify-center mb-4">
                        {step.icon}
                      </div>
                      <h4 className="text-lg font-bold text-gray-900 mb-2">
                        {step.title}
                      </h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Text */}
          <div className="lg:pt-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Personalized Approach
            </h3>
            <p className="text-gray-600 mb-4">
              Based on our analysis, we create a personalized recruitment plan
              that aligns with your objectives and budget.
            </p>
            <p className="text-gray-600 mb-4">
              After identifying top candidates, we present their profiles,
              resumes, and notes to you, along with our expert insights and
              recommendations.
            </p>
            <p className="text-gray-600">
              We assist with offer negotiation and provide post-hire support to
              ensure smooth onboarding and long-term retention.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
