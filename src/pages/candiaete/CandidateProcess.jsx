import React from "react";
import {
  FiUser,
  FiSearch,
  FiBriefcase,
  FiMail,
  FiCheckCircle,
} from "react-icons/fi";
import candidateImage1 from "../../assets/candidate/profile.jpg?url";
import candidateImage2 from "../../assets/candidate/smartmach.svg?url";
import candidateImage3 from "../../assets/candidate/interviewp.png?url";

const CandidateProcess = () => {
  return (
    <div className="bg-white py-20">
   
      <div className="text-center max-w-4xl mx-auto px-6 mb-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Your <span className="text-[#F37F21]">Dream Career</span> Journey
        </h2>
        <p className="text-xl text-gray-600">
          We guide you through every step of the recruitment process with
          personalized support and industry expertise.
        </p>
      </div>

      
      <div className="max-w-6xl mx-auto px-6">
      
        <div className="flex flex-col md:flex-row items-center mb-28">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mr-6">
                <FiUser className="text-[#F37F21] text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Profile Creation
              </h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Begin by creating your comprehensive profile. We'll highlight your
              skills, experience, and career aspirations to present you in the
              best light to potential employers.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-3" />
                <span className="text-gray-700">Skill assessment</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-3" />
                <span className="text-gray-700">Career goal alignment</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-3" />
                <span className="text-gray-700">Resume optimization</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={candidateImage1}
              alt="Candidate profile creation"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

  
        <div className="flex flex-col md:flex-row items-center mb-28">
          <div className="md:w-1/2 order-2 md:order-1">
            <img
              src={candidateImage2}
              alt="Job matching process"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2 mb-10 md:mb-0 md:pl-12 order-1 md:order-2">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mr-6">
                <FiSearch className="text-[#F37F21] text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Smart Matching
              </h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              Our advanced algorithms and expert recruiters match you with
              opportunities that align perfectly with your skills, values, and
              career objectives.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-3" />
                <span className="text-gray-700">Compatibility scoring</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-3" />
                <span className="text-gray-700">Cultural fit analysis</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-3" />
                <span className="text-gray-700">Salary benchmarking</span>
              </li>
            </ul>
          </div>
        </div>

    
        <div className="flex flex-col md:flex-row items-center mb-28">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mr-6">
                <FiBriefcase className="text-[#F37F21] text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Interview Process
              </h3>
            </div>
            <p className="text-gray-600 mb-6 text-lg">
              We prepare you thoroughly for interviews with targeted coaching,
              mock sessions, and insider knowledge about the companies you're
              meeting with.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-3" />
                <span className="text-gray-700">Interview coaching</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-3" />
                <span className="text-gray-700">Company research</span>
              </li>
              <li className="flex items-center">
                <FiCheckCircle className="text-green-500 mr-3" />
                <span className="text-gray-700">Feedback analysis</span>
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={candidateImage3}
              alt="Interview preparation"
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

   
        <div className="bg-gradient-to-r from-[#123B65]/90 to-[#123B65] rounded-2xl p-10 text-white text-center">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
              <FiMail className="text-3xl" />
            </div>
            <h3 className="text-3xl font-bold mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 text-blue-100">
              Contact our recruitment specialists today and take the first step
              toward your dream career.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-white text-[#F37F21] hover:bg-blue-50 font-bold py-4 px-8 rounded-lg transition-all">
                carrer@eurocore.co
              </button>
              <button
                onClick={() => {
                  const section = document.querySelector("#candiate-form");
                  section?.scrollIntoView({ behavior: "smooth" });
                  // setShowContactForm(true);
                }}
                className="bg-transparent border-2 border-white hover:bg-white/10 font-bold py-4 px-8 rounded-lg transition-all"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProcess;
