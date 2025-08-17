import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiX, FiUser, FiBriefcase, FiArrowRight } from "react-icons/fi";

const ContactForm = ({ show, onClose }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showBooking, setShowBooking] = useState(false);

  useEffect(() => {
    if (showBooking) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [showBooking]);

  useEffect(() => {
    if (!show) {
      setSelectedOption(null);
      setShowBooking(false);
    }
  }, [show]);

  const renderCalendly = () => {
    const url =
      selectedOption === "employee"
        ? "https://calendly.com/eurocore/employee"
        : "https://calendly.com/eurocore/partners";

    return (
      <div className="h-full w-full">
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    );
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setTimeout(() => setShowBooking(true), 800);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 overflow-hidden"
        >
          <motion.div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center p-4"
            layout
          >
            {!showBooking ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative"
                layout
              >
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-400 cursor-pointer hover:text-gray-600"
                  aria-label="Close"
                >
                  <FiX size={24} />
                </button>

                <h2 className="text-2xl font-bold text-center mb-8">
                  How would you like to connect?
                </h2>

                <div className="space-y-4">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-6 rounded-xl border-2 cursor-pointer flex items-center justify-between transition-all ${
                      selectedOption === "employee"
                        ? "border-blue-500 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                    }`}
                    onClick={() => handleOptionSelect("employee")}
                  >
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-blue-100 text-blue-600 mr-4">
                        <FiUser size={24} />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-lg">Employee</h3>
                        <p className="text-gray-600">
                          Looking for job opportunities
                        </p>
                      </div>
                    </div>
                    <FiArrowRight className="text-gray-400" size={20} />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full p-6 rounded-xl cursor-pointer border-2 flex items-center justify-between transition-all ${
                      selectedOption === "partner"
                        ? "border-green-500 bg-green-50"
                        : "border-gray-200 hover:border-green-300"
                    }`}
                    onClick={() => handleOptionSelect("partner")}
                  >
                    <div className="flex items-center">
                      <div className="p-3 rounded-full bg-green-100 text-green-600 mr-4">
                        <FiBriefcase size={24} />
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-lg">Partner</h3>
                        <p className="text-gray-600">
                          Explore business collaborations
                        </p>
                      </div>
                    </div>
                    <FiArrowRight className="text-gray-400" size={20} />
                  </motion.button>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className={`absolute inset-0 ${
                  selectedOption === "employee" ? "bg-blue-50" : "bg-green-50"
                }`}
                layout
              >
                <button
                  onClick={() => {
                    setShowBooking(false);
                    setTimeout(() => setSelectedOption(null), 300);
                  }}
                  className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
                  aria-label="Back"
                >
                  <FiX size={24} />
                </button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="h-full w-full"
                >
                  {renderCalendly()}
                </motion.div>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
