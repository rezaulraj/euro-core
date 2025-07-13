import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaComment, FaTimes } from "react-icons/fa";
import contact from "../../assets/home/contact.jpg";

const ContactHelp = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const float = {
    hidden: { y: 0, x: 0 },
    animate: {
      y: [-15, 0, 15, 0],
      x: [10, 20, 10, 0],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const floatDelay = {
    hidden: { y: 0, x: 0 },
    animate: {
      y: [10, 20, 10, 0],
      x: [-20, 0, 20, 0],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setShowPopup(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/20 flex items-center justify-center z-50 p-4">
          <motion.div
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <FaTimes className="text-xl" />
            </button>
            <div className="text-center">
              <motion.div
                className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
              >
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
              </motion.div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Successful submission!
              </h3>
              <p className="text-gray-600 mb-6">We will connect you shortly.</p>
              <div className="flex justify-center space-x-4">
                <motion.button
                  onClick={closePopup}
                  className="px-4 py-2 bg-[#F37F21] text-white rounded-lg hover:bg-[#F37F21] transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Close
                </motion.button>
                <motion.button
                  onClick={() => {
                    console.log("Cancelled");
                    closePopup();
                  }}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Cancel
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img
          src={contact}
          alt="Contact background"
          className="w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={container}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div className="text-white" variants={container}>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={item}
              whileHover={{ scale: 1.02 }}
            >
              Got A <span className="text-[#F37F21]">question</span>?
            </motion.h2>
            <motion.p
              className="text-xl md:text-2xl mb-8 opacity-90"
              variants={item}
              whileHover={{ x: 5 }}
            >
              We're here to help. Let's talk
            </motion.p>
            <motion.div className="space-y-4" variants={container}>
              {[
                {
                  icon: <FaUser />,
                  title: "Expert Support",
                  text: "Our specialists are ready to assist you",
                },
                {
                  icon: <FaEnvelope />,
                  title: "Quick Response",
                  text: "Typically reply within 24 hours",
                },
                {
                  icon: <FaComment />,
                  title: "Personalized Advice",
                  text: "Tailored solutions for your needs",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4"
                  variants={item}
                  whileHover={{ x: 5 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#F37F21]/10 rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 15, scale: 1.1 }}
                  >
                    {React.cloneElement(feature.icon, {
                      className: "text-[#F37F21] text-xl",
                    })}
                  </motion.div>
                  <div>
                    <motion.h4
                      className="text-lg font-semibold"
                      whileHover={{ color: "#F37F21" }}
                    >
                      {feature.title}
                    </motion.h4>
                    <p className="opacity-80">{feature.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden p-8 md:p-10"
            variants={item}
            whileHover={{
              y: -5,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <form className="space-y-6" onSubmit={handleSubmit}>
              {[
                {
                  icon: <FaUser />,
                  id: "name",
                  label: "Your name",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  icon: <FaEnvelope />,
                  id: "email",
                  label: "Your email",
                  type: "email",
                  placeholder: "john@example.com",
                },
                {
                  icon: <FaComment />,
                  id: "message",
                  label: "How can we help?",
                  type: "textarea",
                  placeholder: "Tell us about your needs...",
                },
              ].map((field, index) => (
                <motion.div
                  key={index}
                  className="space-y-1"
                  whileHover={{ scale: 1.01 }}
                >
                  <label
                    htmlFor={field.id}
                    className="block text-gray-700 font-medium"
                  >
                    {field.label}
                  </label>
                  <div className="relative">
                    <div
                      className={`absolute ${
                        field.type === "textarea"
                          ? "top-3 left-3"
                          : "inset-y-0 left-0 pl-3 flex items-center"
                      } pointer-events-none`}
                    >
                      {React.cloneElement(field.icon, {
                        className: "text-gray-400",
                      })}
                    </div>
                    {field.type === "textarea" ? (
                      <textarea
                        id={field.id}
                        rows="4"
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required
                      />
                    ) : (
                      <input
                        type={field.type}
                        id={field.id}
                        className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                        placeholder={field.placeholder}
                        value={formData[field.id]}
                        onChange={handleChange}
                        required
                      />
                    )}
                  </div>
                </motion.div>
              ))}

              <motion.button
                type="submit"
                className="w-full bg-[#F37F21] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#123B65] transition-colors duration-300 shadow-md hover:shadow-lg"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Submit Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-10 w-24 h-24 rounded-full bg-[#F37F21]/10 blur-xl"
        variants={float}
        initial="hidden"
        animate="animate"
      />
      <motion.div
        className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-[#F37F21]/10 blur-xl"
        variants={floatDelay}
        initial="hidden"
        animate="animate"
      />
    </div>
  );
};

export default ContactHelp;
