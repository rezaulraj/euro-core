import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { FiX, FiUser, FiBriefcase } from "react-icons/fi"; // Import icons

const ContactForm = ({ show, onClose }) => {
  const [selectedOption, setSelectedOption] = useState("employee");

  useEffect(() => {
    if (selectedOption === "employee" || selectedOption === "partner") {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [selectedOption]);

  useEffect(() => {
    if (!show) {
      setSelectedOption("employee");
    }
  }, [show]);

  const renderCalendly = () => {
    const url =
      selectedOption === "employee"
        ? "https://calendly.com/eurocore/employee"
        : "https://calendly.com/eurocore/partners";

    return (
      <div id="booking-section">
        <div
          className="calendly-inline-widget"
          data-url={url}
          style={{ minWidth: "320px", height: "700px" }}
        ></div>
        <button
          onClick={onClose}
          className="mt-4 w-full bg-gray-200 text-gray-700 py-2 px-4 rounded hover:bg-gray-300"
        >
          Close
        </button>
      </div>
    );
  };

  const scrollToBooking = () => {
    const section = document.getElementById("booking-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ type: "spring", damping: 25 }}
            className="bg-white max-h-[90vh] overflow-auto rounded-xl shadow-2xl max-w-2xl w-full p-8 relative"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
              aria-label="Close"
            >
              <FiX size={24} />
            </button>

            <div className="mb-4 flex justify-center space-x-10 text-center">
              <label className="font-medium flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  value="employee"
                  checked={selectedOption === "employee"}
                  onChange={() => setSelectedOption("employee")}
                  className="mr-2"
                />
                <FiUser className="mr-1 text-blue-500" size={20} />
                Book as Employee
              </label>

              <label className="font-medium flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="option"
                  value="partner"
                  checked={selectedOption === "partner"}
                  onChange={() => setSelectedOption("partner")}
                  className="mr-2"
                />
                <FiBriefcase className="mr-1 text-green-500" size={20} />
                Book as Partner
              </label>
            </div>

            {(selectedOption === "employee" ||
              selectedOption === "partner") && (
              <div className="text-center mb-6">
                <button
                  onClick={scrollToBooking}
                  className="bg-[#00BCFF] text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-blue-600 transition"
                >
                  Quickly Booking
                </button>
              </div>
            )}

            {(selectedOption === "employee" || selectedOption === "partner") &&
              renderCalendly()}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactForm;
