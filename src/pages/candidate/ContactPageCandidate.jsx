import React, { useState } from "react";
import {
  FaPaperclip,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaFileAlt,
  FaLinkedin,
  FaGithub,
  FaPinterest,
  FaYoutube,
  FaTiktok,
  FaInstagram,
  FaFacebook,
  FaCalendar,
  FaTimes,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineWork, MdOutlineMessage } from "react-icons/md";

const ContactPageCandidate = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    cv: null,
    motivationLetter: null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitting(false);
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        cv: null,
        motivationLetter: null,
      });
    }, 1500);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      id="get-in-touch"
      className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
    >
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
                  className="px-4 py-2 bg-[#F37F21] text-white rounded-lg hover:bg-blue-700 transition"
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

      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in <span className="text-[#F37F21]">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions or want to apply for a position? We'd love to hear
            from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <MdOutlineMessage className="text-[#F37F21]" />
                Contact Form
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6">
                  {/* Name */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                      placeholder="Your Name"
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                      placeholder="Email Address"
                      required
                    />
                  </div>

                  {/* Phone */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaPhone className="text-gray-400" />
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                      placeholder="Phone Number (Optional)"
                    />
                  </div>

                  {/* Subject */}
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MdOutlineWork className="text-gray-400" />
                    </div>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition appearance-none bg-white"
                      required
                    >
                      <option value="">Select Subject</option>
                      <option value="Job Application">Job Application</option>
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                      placeholder="Your Message"
                      required
                    ></textarea>
                  </div>

                  {/* CV Upload */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <label className="cursor-pointer">
                      <div className="flex flex-col items-center justify-center">
                        <FaFileAlt className="text-3xl text-[#F37F21] mb-2" />
                        <p className="text-sm text-gray-600 mb-1">
                          {formData.cv
                            ? formData.cv.name
                            : "Upload your CV (PDF, DOC, DOCX)"}
                        </p>
                        <span className="text-sm text-blue-600 font-medium">
                          Click to browse files
                        </span>
                      </div>
                      <input
                        type="file"
                        name="cv"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                        required
                      />
                    </label>
                  </div>

                  {/* Motivation Letter Upload */}
                  {/* <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                    <label className="cursor-pointer">
                      <div className="flex flex-col items-center justify-center">
                        <FaFileAlt className="text-3xl text-[#F37F21] mb-2" />
                        <p className="text-sm text-gray-600 mb-1">
                          {formData.motivationLetter
                            ? formData.motivationLetter.name
                            : "Upload Motivation Letter (Optional)"}
                        </p>
                        <span className="text-sm text-blue-600 font-medium">
                          Click to browse files
                        </span>
                      </div>
                      <input
                        type="file"
                        name="motivationLetter"
                        onChange={handleFileChange}
                        className="hidden"
                        accept=".pdf,.doc,.docx"
                      />
                    </label>
                  </div> */}

                  {/* Submit Button */}
                  <div>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full flex justify-center items-center px-6 py-4 bg-[#F37F21] text-white font-medium rounded-lg hover:bg-[#F37F21]/80 focus:outline-none focus:ring-2 focus:ring-[#F37F21] focus:ring-offset-2 transition-all cursor-pointer ${
                        isSubmitting ? "opacity-70 cursor-not-allowed" : ""
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Processing...
                        </>
                      ) : (
                        <>
                          <FaPaperclip className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Office Info */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Office
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg
                      className="h-6 w-6 text-[#F37F21]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      ></path>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      ></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600">60, ST. JOSEPH STREET,</p>
                    <p className="text-gray-600">ISLA, Malta</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaEnvelope className="h-5 w-5 text-[#F37F21]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600">help@cloudkonektion.eu</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <FaCalendar className="h-5 w-5 text-[#F37F21]" />
                  </div>
                  <div className="ml-3">
                    <p className="text-gray-600">Mon-Fri, 9am-5pm PST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Connect With Us
              </h3>
              <div className="flex flex-wrap space-x-4 space-y-4">
                <a
                  href="https://www.linkedin.com/company/107980266/admin/dashboard/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#F37F21] hover:bg-blue-200 transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </a>
                <a
                  href="https://x.com/cloudkonektion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#F37F21] hover:bg-blue-200 transition-colors"
                >
                  <FaXTwitter className="text-xl" />
                </a>
                <a
                  href="https://www.facebook.com/cloudkonektion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#F37F21] hover:bg-blue-200 transition-colors"
                >
                  <FaFacebook className="text-xl" />
                </a>
                <a
                  href="https://www.instagram.com/cloudkonektion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#F37F21] hover:bg-blue-200 transition-colors"
                >
                  <FaInstagram className="text-xl" />
                </a>
                {/* <a
                  href="https://www.tiktok.com/@cloudkonektion"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaTiktok className="text-xl" />
                </a> */}
                <a
                  href="https://www.youtube.com/@cloudkonektion0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#F37F21] hover:bg-blue-200 transition-colors"
                >
                  <FaYoutube className="text-xl" />
                </a>
                {/* <a
                  href="https://www.pinterest.com/cloudkonektion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 hover:bg-blue-200 transition-colors"
                >
                  <FaPinterest className="text-xl" />
                </a> */}
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d3231.8883193835154!2d14.513150775680367!3d35.90075081788424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m5!1s0x130e452977901537%3A0x18a22beaac790ffc!2s60%20St.Joseph&#39;s%20Street%2C%20Il-Belt%20Valletta%2C%20Malta!3m2!1d35.9007465!2d14.515725699999999!4m0!5e0!3m2!1sen!2sbd!4v1752040902403!5m2!1sen!2sbd"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPageCandidate;
