import React, { useState } from "react";
import {
  FaChevronDown,
  FaChevronUp,
  FaGlobeAmericas,
  FaTrophy,
  FaSearch,
  FaUserFriends,
  FaIndustry,
  FaClock,
  FaMoneyBillWave,
  FaShieldAlt,
} from "react-icons/fa";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Where do you recruit?",
      answer:
        "We have placed candidates globally, Our European market expertise enables us to deliver recruitment solutions tailored to local regulations and culture.",
      icon: <FaGlobeAmericas className="text-[#F37F21] text-xl" />,
    },
    {
      question: "What makes you a leading headhunting agency?",
      answer:
        "Our niche focus, proven placements of senior and C-level executives, and a fast, data-driven process set us apart. We help you hire top talent faster than the competition.",
      icon: <FaTrophy className="text-[#F37F21] text-xl" />,
    },
    {
      question: "How do you find candidates?",
      answer:
        "We combine our global talent database with proactive headhunting, precision profiling, and candidate evaluation to ensure the best fit for your business.",
      icon: <FaSearch className="text-[#F37F21] text-xl" />,
    },
    {
      question: "Where do your candidates come from?",
      answer:
        "Our talent pool spans across the world, including local professionals and international candidates. Each is carefully selected to align with your company’s culture, goals, and hiring needs.",
      icon: <FaUserFriends className="text-[#F37F21] text-xl" />,
    },
    {
      question: "What are your core industries?",
      answer:
        "We’re flexible across industries. From emerging startups to established enterprises, we’ve successfully built high-performing teams across a wide range of sectors.",
      icon: <FaIndustry className="text-[#F37F21] text-xl" />,
    },
    {
      question: "How fast is your time to fill?",
      answer:
        "Our time to fill positions is among the fastest in the industry. We understand the urgency of your hiring needs and are dedicated to finding and placing the best candidates quickly and efficiently.\n\nOn average, we fill urgent roles within 10 days—from the initial contact to the final offer. This speed is made possible through our extensive candidate network, proactive sourcing, and thorough screening processes.\n\nAdditionally, our streamlined hiring approach ensures smooth and efficient communication between you, our team, and the candidates, making the entire recruitment experience seamless.",
      icon: <FaClock className="text-[#F37F21] text-xl" />,
    },
    {
      question: "What’s your pricing model?",
      answer:
        "We work on a contingency basis meaning you only pay when we deliver. No upfront costs, no hidden fees",
      icon: <FaMoneyBillWave className="text-[#F37F21] text-xl" />,
    },
    {
      question: "What guarantees do you offer?",
      answer:
        "Yes. If a hire doesn’t work out within a set timeframe, we offer a refund or replacement with no questions asked.",
      icon: <FaShieldAlt className="text-[#F37F21] text-xl" />,
    },
  ];

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            <span className="text-[#F37F21]">FAQ</span>
          </h2>
          <div className="w-20 h-1 bg-[#F37F21] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Things people often ask about our services
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all duration-300"
            >
              <button
                className={`w-full flex items-center justify-between p-6 text-left ${
                  activeIndex === index ? "bg-gray-50" : ""
                }`}
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">{faq.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                </div>
                {activeIndex === index ? (
                  <FaChevronUp className="text-[#F37F21] text-lg" />
                ) : (
                  <FaChevronDown className="text-gray-400 text-lg" />
                )}
              </button>

              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="p-6 pt-0">
                  {faq.answer.split("\n").map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-4 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
