import React from "react";
import {
  FaHandshake,
  FaUserTie,
  FaBuilding,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaChartLine,
} from "react-icons/fa";

const ContactPartner = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          {/* <div className="inline-flex items-center justify-center mb-4">
            <FaHandshake className="text-[#F37F21] text-3xl mr-3" />
            <span className="bg-[#F37F21]/10 text-[#F37F21] font-semibold px-4 py-2 rounded-full">
              PARTNER WITH US
            </span>
          </div> */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Let's Build <span className="text-[#F37F21]">Something Great</span>{" "}
            Together
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to explore partnership opportunities? Fill out the form below
            and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="p-8">
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="relative">
                      <label
                        htmlFor="name"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Your Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaUserTie className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                          placeholder="John Smith"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="company"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Company Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaBuilding className="text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="company"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                          placeholder="Acme Inc."
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="email"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaEnvelope className="text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label
                        htmlFor="phone"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Phone Number
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaPhone className="text-gray-400" />
                        </div>
                        <input
                          type="tel"
                          id="phone"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2 relative">
                      <label
                        htmlFor="country"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        Country/Region
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <FaGlobe className="text-gray-400" />
                        </div>
                        <select
                          id="country"
                          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition appearance-none bg-white"
                        >
                          <option>Select your country</option>
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                          <option>Germany</option>
                          <option>Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label
                        htmlFor="message"
                        className="block text-gray-700 font-medium mb-2"
                      >
                        How Can We Collaborate?
                      </label>
                      <textarea
                        id="message"
                        rows="4"
                        className="block w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                        placeholder="Tell us about your partnership interests and how we can work together..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="flex items-center mb-6">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 text-[#F37F21] bg-gray-100 border-gray-300 rounded focus:ring-[#F37F21]"
                    />
                    <label
                      htmlFor="terms"
                      className="ml-2 text-sm text-gray-600"
                    >
                      I agree to the{" "}
                      <a
                        href="/terms-and-conditions"
                        className="text-[#F37F21] hover:underline"
                      >
                        terms and conditions
                      </a>
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#F37F21] hover:bg-[#E5711A] text-white font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center cursor-pointer"
                  >
                    <FaHandshake className="mr-2" />
                    Submit Partnership Request
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="bg-gradient-to-br from-[#143D66] to-[#143D66]/90 rounded-2xl shadow-xl text-white p-8 h-full">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <FaHandshake className="mr-3" />
                Why Partner With Us?
              </h3>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                    <FaGlobe className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Global Reach</h4>
                    <p className="text-white/90">
                      Access our international network of talent and clients
                      across multiple industries.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                    <FaChartLine className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Mutual Growth</h4>
                    <p className="text-white/90">
                      Our partnership model is designed to help both parties
                      grow and succeed together.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-white/20 p-2 rounded-full mr-4 mt-1">
                    <FaBuilding className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">
                      Dedicated Support
                    </h4>
                    <p className="text-white/90">
                      Your success is our priority. We provide personalized
                      support to all our partners.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <h4 className="font-bold text-lg mb-4 flex items-center">
                  <FaMapMarkerAlt className="mr-2" />
                  Contact Information
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <FaEnvelope className="mr-3 text-white/80" />
                    <span>partners@humblehunters.com</span>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-3 text-white/80" />
                    <span>+1 (800) 123-4567</span>
                  </div>
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mr-3 mt-1 text-white/80" />
                    <span>
                      123 Partnership Ave, Suite 500
                      <br />
                      San Francisco, CA 94107
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPartner;
