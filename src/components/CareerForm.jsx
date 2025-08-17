import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef } from "react";
import {
  FiCheckCircle,
  FiMail,
  FiMessageSquare,
  FiUser,
  FiPhone,
  FiUpload,
  FiX,
  FiFileText,
} from "react-icons/fi";

const CareerForm = ({ show, onClose, onSubmit }) => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    cv: null,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, cv: e.target.files[0] }));
    }
  };

  const removeFile = () => {
    setFormData((prev) => ({ ...prev, cv: null }));
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormSubmitted(true);

    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        cv: null,
      });
      onClose();
    }, 3000);
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
            className="bg-white rounded-xl shadow-2xl max-w-md w-full p-8 relative"
          >
            {!formSubmitted ? (
              <>
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  <FiX className="text-xl" />
                </button>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contact Us
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center mb-2">
                        <FiUser className="text-gray-500 mr-2" />
                        <label htmlFor="name" className="text-gray-700">
                          Full Name
                        </label>
                      </div>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                        required
                      />
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <FiMail className="text-gray-500 mr-2" />
                        <label htmlFor="email" className="text-gray-700">
                          Email Address
                        </label>
                      </div>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                        required
                      />
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <FiPhone className="text-gray-500 mr-2" />
                        <label htmlFor="phone" className="text-gray-700">
                          Phone Number
                        </label>
                      </div>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                        required
                      />
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <FiFileText className="text-gray-500 mr-2" />
                        <label htmlFor="cv" className="text-gray-700">
                          Upload CV (Optional)
                        </label>
                      </div>
                      <div className="relative">
                        <input
                          type="file"
                          id="cv"
                          name="cv"
                          ref={fileInputRef}
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          accept=".pdf,.doc,.docx"
                        />
                        <div className="flex items-center justify-between px-4 py-3 border border-gray-300 rounded-lg hover:border-[#F37F21] transition">
                          <span className="text-gray-500 truncate">
                            {formData.cv ? formData.cv.name : "Choose file..."}
                          </span>
                          <FiUpload className="text-gray-500" />
                        </div>
                      </div>
                      {formData.cv && (
                        <button
                          type="button"
                          onClick={removeFile}
                          className="mt-2 text-sm text-[#F37F21] hover:text-[#F37F21]/90 flex items-center"
                        >
                          <FiX className="mr-1" /> Remove file
                        </button>
                      )}
                    </div>

                    <div>
                      <div className="flex items-center mb-2">
                        <FiMessageSquare className="text-gray-500 mr-2" />
                        <label htmlFor="message" className="text-gray-700">
                          Your Message
                        </label>
                      </div>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#F37F21] focus:border-[#F37F21] outline-none transition"
                        required
                      ></textarea>
                    </div>
                  </div>

                  <div className="mt-8 flex space-x-4">
                    <button
                      type="submit"
                      className="flex-1 cursor-pointer bg-[#F37F21] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#F37F21]/90 transition-colors shadow-md hover:shadow-lg"
                    >
                      Submit
                    </button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="flex-1 cursor-pointer bg-gray-100 text-gray-800 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-8"
              >
                <FiCheckCircle className="text-5xl text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600">
                  Your message has been sent successfully.
                </p>
                <p className="text-gray-600">We'll get back to you soon.</p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CareerForm;
