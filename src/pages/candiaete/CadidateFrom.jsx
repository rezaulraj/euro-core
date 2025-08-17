import React from "react";
import {
  FiUser,
  FiMail,
  FiPhone,
  FiBriefcase,
  FiMessageSquare,
  FiUpload,
} from "react-icons/fi";

const CandidateForm = () => {
  return (
    <div
      id="candiate-form"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our <span className="text-[#F37F21]">Talent Network</span>
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Complete the form below and our recruitment team will contact you
            about matching opportunities.
          </p>
        </div>

        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="md:flex">
            <div className="hidden md:block md:w-2/5 bg-gradient-to-b from-[#123B65] to-[#123B65]/90 p-10 text-white">
              <div className="h-full flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Why Register With Us?
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-gray-500 rounded-full p-1 mr-3 mt-1">
                        <FiBriefcase className="text-white text-sm" />
                      </div>
                      <span>Access to exclusive job opportunities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gray-500 rounded-full p-1 mr-3 mt-1">
                        <FiUser className="text-white text-sm" />
                      </div>
                      <span>Personalized career guidance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-gray-500 rounded-full p-1 mr-3 mt-1">
                        <FiMessageSquare className="text-white text-sm" />
                      </div>
                      <span>Direct communication with recruiters</span>
                    </li>
                  </ul>
                </div>
                <div className="mt-8">
                  <div className="flex items-center">
                    <div className="border-t border-gray-500 w-16 mr-4"></div>
                    <span className="text-blue-200">Need help?</span>
                  </div>
                  <p className="text-blue-100 mt-2">
                    Email us at: carrer@eurocore.co
                  </p>
                </div>
              </div>
            </div>

            <div className="md:w-3/5 p-8 md:p-10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      First Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="pl-10 block w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21]"
                        placeholder="John"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-medium text-gray-700 mb-1"
                    >
                      Last Name
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <FiUser className="text-gray-400" />
                      </div>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="pl-10 block w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21]"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiMail className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="pl-10 block w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21]"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="pl-10 block w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21]"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="jobInterest"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Job Interest / Position
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FiBriefcase className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      id="jobInterest"
                      name="jobInterest"
                      className="pl-10 block w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21]"
                      placeholder="Software Engineer, Marketing Manager, etc."
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Upload Resume
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg">
                    <div className="space-y-1 text-center">
                      <div className="flex justify-center">
                        <FiUpload className="text-gray-400 text-2xl" />
                      </div>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="resume"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-[#F37F21] hover:text-[#F37F21] focus-within:outline-none"
                        >
                          <span>Upload a file</span>
                          <input
                            id="resume"
                            name="resume"
                            type="file"
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX up to 5MB
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Additional Information
                  </label>
                  <div className="relative">
                    <div className="absolute top-3 left-3">
                      <FiMessageSquare className="text-gray-400" />
                    </div>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="pl-10 block w-full border border-gray-300 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21]"
                      placeholder="Tell us about your skills, experience, and career goals..."
                    ></textarea>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center py-4 px-6 border border-transparent rounded-lg shadow-sm text-lg font-medium text-white bg-[#F37F21] hover:bg-[#F37F21]/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#F37F21] transition-all"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateForm;
