import React from "react";
import {
  FiCheckCircle,
  FiUsers,
  FiShield,
  FiClock,
  FiBarChart2,
  FiGlobe,
} from "react-icons/fi";
import { MdOutlineWorkspacePremium, MdOutlineHandshake } from "react-icons/md";

const WhyChoseCandidateEurocore = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose{" "}
            <span className="text-[#F37F21]">Candidate Eurocore</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We revolutionize recruitment with a candidate-first approach that
            delivers exceptional results for both job seekers and employers.
          </p>
        </div>

        {/* Recruitment Process */}
        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Our <span className="text-[#F37F21]">Recruitment Process</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FiUsers className="text-[#F37F21] text-xl" />
              </div>
              <h4 className="font-bold text-lg mb-2">1. Profile Assessment</h4>
              <p className="text-gray-600">
                Comprehensive evaluation of your skills, experience, and career
                aspirations.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FiBarChart2 className="text-[#F37F21] text-xl" />
              </div>
              <h4 className="font-bold text-lg mb-2">2. Career Matching</h4>
              <p className="text-gray-600">
                Advanced algorithms match you with ideal opportunities based on
                multiple factors.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <MdOutlineHandshake className="text-[#F37F21] text-xl" />
              </div>
              <h4 className="font-bold text-lg mb-2">
                3. Interview Preparation
              </h4>
              <p className="text-gray-600">
                Personalized coaching and resources to help you shine in
                interviews.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <FiCheckCircle className="text-[#F37F21] text-xl" />
              </div>
              <h4 className="font-bold text-lg mb-2">4. Job Placement</h4>
              <p className="text-gray-600">
                We negotiate on your behalf to secure the best possible offer.
              </p>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Our <span className="text-[#F37F21]">Candidate Advantages</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FiGlobe className="text-[#F37F21]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Global Opportunities</h4>
                  <p className="text-gray-600 mt-1">
                    Access to exclusive positions with leading companies
                    worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <MdOutlineWorkspacePremium className="text-[#F37F21]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Premium Network</h4>
                  <p className="text-gray-600 mt-1">
                    Direct connections to decision-makers at top-tier
                    organizations.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FiShield className="text-[#F37F21]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Confidentiality</h4>
                  <p className="text-gray-600 mt-1">
                    Discreet job search with complete privacy protection.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 4 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FiClock className="text-[#F37F21]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Time Efficiency</h4>
                  <p className="text-gray-600 mt-1">
                    Reduced hiring timeline through our streamlined process.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 5 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FiUsers className="text-[#F37F21]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Career Advocacy</h4>
                  <p className="text-gray-600 mt-1">
                    Dedicated consultants who champion your career goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Benefit 6 */}
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-start mb-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                  <FiCheckCircle className="text-[#F37F21]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg">Post-Placement Support</h4>
                  <p className="text-gray-600 mt-1">
                    Ongoing career guidance even after you've secured your role.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoseCandidateEurocore;
