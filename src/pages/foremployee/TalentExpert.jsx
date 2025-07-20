import React, { useState } from "react";
import {
  FaUserTie,
  FaGlobe,
  FaClock,
  FaSearch,
  FaUser,
  FaEnvelope,
  FaComment,
  FaBriefcase,
  FaChartLine,
  FaHandshake,
  FaCheck,
  FaTimes,
  FaUsers,
} from "react-icons/fa";

const TalentExperts = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    email: "",
    "hiring-needs": "",
    "number-needed": 1, // New field for number of workers needed
    "selected-industry": "", // New field for selected industry
    message: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleNumberChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value)); // Ensure minimum value is 1
    setFormData((prev) => ({
      ...prev,
      "number-needed": value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopup(true);
    setFormData({
      company: "",
      name: "",
      email: "",
      "hiring-needs": "",
      "number-needed": 1,
      "selected-industry": "",
      message: "",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const categories = [
    {
      title: "Agriculture",
    },
    {
      title: "Automotive / Car / Mechanic",
    },
    {
      title: "Bakery",
    },
    {
      title: "Base Metal / Metal Industry",
    },
    {
      title: "Care Homes / Elderly Care",
    },
    {
      title: "Food Production",
    },
    {
      title: "Food Shop / Restaurant",
    },
    {
      title: "Textile / Garment / Leather Industry",
    },
    {
      title: "Car Wash & Servicing",
    },
    {
      title: "Fruit Picking / Harvesting",
    },
    {
      title: "Furniture / Wood Industry",
    },
    {
      title: "Garage / Auto Workshop",
    },
    {
      title: "Hotel / Resort / Hospitality",
    },
    {
      title: "Cleaning Services",
    },
    {
      title: "Construction",
    },
    {
      title: "Machinery / Mechanical Industry",
    },
    {
      title: "Forestry / Timber Industry",
    },
    {
      title: "Manufacturing",
    },
    {
      title: "Hairdressing / Salon",
    },
    {
      title: "Oil Refinery",
    },
    {
      title: "Packaging",
    },
    {
      title: "Plastic Industry",
    },
    {
      title: "Pet Care",
    },
    {
      title: "Retail",
    },
    {
      title: "Shipping / Shipyard / Marine",
    },
    {
      title: "Warehouse / Logistics",
    },
    {
      title: "Turnkey / Installation / Maintenance / Repair",
    },
    {
      title: "Transport / Driver / Delivery / Logistics",
    },
    {
      title: "Wellness & Spa Industry",
    },
  ];

  return (
    <div className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative">
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="text-xl" />
            </button>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                <svg
                  className="h-6 w-6 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Successful submission!
              </h3>
              <p className="text-gray-600 mb-6">We will connect you shortly.</p>
              <div className="flex justify-center space-x-4">
                <button
                  onClick={closePopup}
                  className="px-4 py-2 bg-[#F37F21] text-white rounded-lg hover:bg-[#f38021e7] transition"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    console.log("Cancelled");
                    closePopup();
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-12">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                <span className="text-[#F37F21]">Talent</span> Acquisition
                Experts
              </h2>
              <div className="w-20 h-1 bg-[#F37F21] mx-auto lg:mx-0 mb-8"></div>
              <p className="text-lg text-gray-600 mb-6">
                We bridge the gap between exceptional talent and
                forward-thinking companies, creating perfect matches that drive
                business success.
              </p>
            </div>

            {/* Expertise Cards */}
            <div className="space-y-8">
              {/* Card 1 */}
              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#F37F21] rounded-full flex items-center justify-center text-white">
                  <FaUserTie className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pl-8">
                  Executive & Specialized Hiring
                </h3>
                <p className="text-gray-600 mb-4">
                  Our proprietary methodology identifies top-tier candidates for
                  leadership and hard-to-fill technical roles through
                  comprehensive vetting and competency-based assessments.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F37F21]/10 text-[#F37F21] rounded-full text-sm">
                    C-level placements
                  </span>
                  <span className="px-3 py-1 bg-[#F37F21]/10 text-[#F37F21] rounded-full text-sm">
                    Technical specialists
                  </span>
                  <span className="px-3 py-1 bg-[#F37F21]/10 text-[#F37F21] rounded-full text-sm">
                    Cultural alignment
                  </span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#F37F21] rounded-full flex items-center justify-center text-white">
                  <FaGlobe className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pl-8">
                  Global Talent Network
                </h3>
                <p className="text-gray-600 mb-4">
                  Access our curated database of pre-vetted professionals across
                  20+ countries, with specialized knowledge of regional markets
                  and compliance requirements.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F37F21]/10 text-[#F37F21] rounded-full text-sm">
                    International hiring
                  </span>
                  <span className="px-3 py-1 bg-[#F37F21]/10 text-[#F37F21] rounded-full text-sm">
                    Local market expertise
                  </span>
                  <span className="px-3 py-1 bg-[#F37F21]/10 text-[#F37F21] rounded-full text-sm">
                    Visa/immigration support
                  </span>
                </div>
              </div>

              {/* Card 3 */}
              <div className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-[#F37F21] rounded-full flex items-center justify-center text-white">
                  <FaClock className="text-xl" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 pl-8">
                  Rapid Placement Solutions
                </h3>
                <p className="text-gray-600 mb-4">
                  Our expedited recruitment process delivers qualified
                  candidates in as little as 72 hours for urgent roles, with a
                  90-day replacement guarantee.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-[#F37F21]/10 text-[#F37F21] rounded-full text-sm">
                    Time-to-fill: 10 days avg.
                  </span>
                  <span className="px-3 py-1 bg-[#F37F21]/10 text-[#F37F21] rounded-full text-sm">
                    Temp-to-perm options
                  </span>
                  <span className="px-3 py-1 bg-[#F37F21]/10 text-[#F37F21] rounded-full text-sm">
                    Guaranteed placements
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="p-8 md:p-10">
              <div className="text-center mb-8">
                <div className="inline-flex items-center px-6 py-2 rounded-full bg-[#F37F21]/10 text-[#F37F21] text-sm font-medium mb-4">
                  <FaHandshake className="mr-2" />
                  Talent Solutions
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Build Your Dream Team
                </h3>
                <p className="text-gray-600">
                  Complete this form to access our exclusive talent pool and
                  receive:
                </p>
                <ul className="mt-4 space-y-2 text-left text-gray-600">
                  <li className="flex items-start">
                    <FaCheck className="text-[#F37F21] mt-1 mr-2 flex-shrink-0" />
                    <span>Customized candidate shortlists within 48 hours</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#F37F21] mt-1 mr-2 flex-shrink-0" />
                    <span>Market salary benchmarking</span>
                  </li>
                  <li className="flex items-start">
                    <FaCheck className="text-[#F37F21] mt-1 mr-2 flex-shrink-0" />
                    <span>Dedicated recruitment consultant</span>
                  </li>
                </ul>
              </div>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-1">
                  <label
                    htmlFor="company"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaBriefcase className="text-gray-400 mr-2 text-sm" />
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                    placeholder="Your organization"
                    required
                    value={formData.company}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaUser className="text-gray-400 mr-2 text-sm" />
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                    placeholder="John Doe"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-1">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaEnvelope className="text-gray-400 mr-2 text-sm" />
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                    placeholder="john@company.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                {/* New Industry Selection Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="selected-industry"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaChartLine className="text-gray-400 mr-2 text-sm" />
                    Select Industry
                  </label>
                  <select
                    id="selected-industry"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition bg-white"
                    value={formData["selected-industry"]}
                    onChange={handleChange}
                  >
                    <option value="">Select an industry</option>
                    {categories.map((category, index) => (
                      <option key={index} value={category.title}>
                        {category.title}
                      </option>
                    ))}
                    <option value="custom-recruitment">
                      Custom Recruitment
                    </option>
                  </select>
                </div>

                {/* New Number of Workers Needed Field */}
                <div className="space-y-1">
                  <label
                    htmlFor="number-needed"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaUsers className="text-gray-400 mr-2 text-sm" />
                    Number of Workers Needed
                  </label>
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="bg-gray-200 px-3 py-2 rounded-l-lg"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          "number-needed": Math.max(
                            1,
                            prev["number-needed"] - 1
                          ),
                        }))
                      }
                    >
                      -
                    </button>
                    <input
                      type="number"
                      id="number-needed"
                      min="1"
                      className="block w-full px-4 py-2 border-t border-b border-gray-300 text-center outline-none"
                      value={formData["number-needed"]}
                      onChange={handleNumberChange}
                    />
                    <button
                      type="button"
                      className="bg-gray-200 px-3 py-2 rounded-r-lg"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          "number-needed": prev["number-needed"] + 1,
                        }))
                      }
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Hiring Needs - modified to show job types */}
                <div className="space-y-1">
                  <label
                    htmlFor="hiring-needs"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaChartLine className="text-gray-400 mr-2 text-sm" />
                    Position Type
                  </label>
                  <select
                    id="hiring-needs"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00BCFF] focus:border-[#00BCFF] outline-none transition bg-white"
                    required
                    value={formData["hiring-needs"]}
                    onChange={handleChange}
                  >
                    <option value="">Select position type</option>
                    <option value="full-time">Full-time</option>
                    <option value="part-time">Part-time</option>
                    <option value="contract">Contract/Temporary</option>
                    <option value="seasonal">Seasonal</option>
                  </select>
                </div>

                {/* Message field - same as before */}
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 font-medium flex items-center"
                  >
                    <FaComment className="text-gray-400 mr-2 text-sm" />
                    Specific Requirements
                  </label>
                  <textarea
                    id="message"
                    rows="4"
                    className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                    placeholder="Tell us about your ideal candidates, required skills, timeline, etc."
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#F37F21] to-[#F37F21] text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center"
                >
                  <span>Request Talent Consultation</span>
                  <FaSearch className="ml-2" />
                </button>
              </form>
            </div>
          </div>
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

export default TalentExperts;
