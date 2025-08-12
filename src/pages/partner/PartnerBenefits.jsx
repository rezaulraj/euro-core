import React from "react";
import {
  FaHandshake,
  FaGlobeAmericas,
  FaChartLine,
  FaUsers,
  FaLightbulb,
  FaShieldAlt,
  FaCoins,
  FaHeadset,
} from "react-icons/fa";

const PartnerBenefits = () => {
  const benefits = [
    {
      icon: <FaHandshake className="text-3xl text-blue-500" />,
      title: "Trusted Partnerships",
      description:
        "Build long-term relationships with our network of verified professionals",
    },
    {
      icon: <FaGlobeAmericas className="text-3xl text-green-500" />,
      title: "Global Reach",
      description:
        "Access talent pools across 30+ countries with our international network",
    },
    {
      icon: <FaChartLine className="text-3xl text-purple-500" />,
      title: "Growth Focused",
      description:
        "Scalable solutions designed to grow with your business needs",
    },
    {
      icon: <FaUsers className="text-3xl text-orange-500" />,
      title: "Quality Talent",
      description: "Pre-vetted candidates matching your exact requirements",
    },
    {
      icon: <FaLightbulb className="text-3xl text-yellow-500" />,
      title: "Innovative Solutions",
      description: "Cutting-edge recruitment technologies at your disposal",
    },
    {
      icon: <FaShieldAlt className="text-3xl text-red-500" />,
      title: "Risk Mitigation",
      description: "Compliance and legal support for international hiring",
    },
    {
      icon: <FaCoins className="text-3xl text-amber-600" />,
      title: "Cost Efficiency",
      description: "Competitive pricing with transparent fee structures",
    },
    {
      icon: <FaHeadset className="text-3xl text-teal-500" />,
      title: "Dedicated Support",
      description: "24/7 account management and technical assistance",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <FaHandshake className="text-[#F37F21] text-3xl mr-3" />
            <span className="bg-[#F37F21]/10 text-[#F37F21] font-semibold px-4 py-2 rounded-full">
              PARTNER WITH US
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="text-amber-600">Why Partner</span> With Us?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our recruitment partnership delivers exceptional value through
            collaboration, technology, and global expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 transform hover:-translate-y-2"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-50 rounded-full">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-blue-50 rounded-full px-6 py-3">
            <p className="text-blue-600 font-medium">
              <span className="font-bold">95%</span> of partners see improved
              hiring outcomes within 3 months
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerBenefits;
