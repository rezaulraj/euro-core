import React from "react";
import {
  FaRocket,
  FaLock,
  FaUserTie,
  FaChartLine,
  FaHandshake,
  FaAward,
} from "react-icons/fa";
import { GiSkills, GiMoneyStack } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <FaRocket className="text-4xl text-[#F37F21]" />,
      title: "Fast-Track Hiring",
      description:
        "Skip the queue with direct access to hiring managers and quick interview scheduling.",
    },
    {
      icon: <FaLock className="text-4xl text-purple-500" />,
      title: "Exclusive Roles",
      description:
        "Access high-paying jobs that aren't advertised on public job boards.",
    },
    {
      icon: <GiSkills className="text-4xl text-green-500" />,
      title: "Skill Matching",
      description:
        "Our AI matches you with roles that fit your exact skill set and career goals.",
    },
    {
      icon: <GiMoneyStack className="text-4xl text-yellow-500" />,
      title: "Salary Boost",
      description:
        "Candidates using our platform earn 15-30% higher salaries on average.",
    },
    {
      icon: <IoMdTime className="text-4xl text-red-500" />,
      title: "Time Savings",
      description:
        "Reduce job search time by 70% with our targeted matching system.",
    },
    {
      icon: <FaUserTie className="text-4xl text-indigo-500" />,
      title: "Career Coaching",
      description:
        "Free 1:1 sessions with industry experts to polish your interview skills.",
    },
    {
      icon: <FaChartLine className="text-4xl text-teal-500" />,
      title: "Career Growth",
      description:
        "Access to upskilling resources and promotion-track positions.",
    },
    {
      icon: <FaHandshake className="text-4xl text-orange-500" />,
      title: "Better Culture Fit",
      description:
        "We match you with companies that align with your values and work style.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why <span className="text-[#F37F21]">Workers</span> Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've redefined the job search experience with candidate-first
            features that deliver real results.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-100 group"
            >
              {/* Icon Container with Gradient Background */}
              <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-white flex items-center justify-center group-hover:rotate-6 transition-transform duration-500">
                {benefit.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#F37F21] transition-colors">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Animated Arrow (Appears on Hover) */}
              <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-6 h-6 text-[#F37F21] animate-bounce-horizontal"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-[#F37F21] rounded-2xl p-8 md:p-12 text-white shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "3x", label: "Faster Hiring Process" },
              { value: "80%", label: "Interview Success Rate" },
              { value: "25%", label: "Higher Salaries" },
              { value: "10K+", label: "Candidates Placed" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <p className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </p>
                <p className="text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
