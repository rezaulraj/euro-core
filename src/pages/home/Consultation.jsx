import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";
import bgimage from "../../assets/home/map.avif";
import ContactForm from "../../components/ContactForm";

const Consultation = () => {
  const [showContactForm, setShowContactForm] = useState(false);

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

  return (
    <div className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${bgimage})` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.5 }}
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={container}
      >
        <motion.div className="text-center mb-12" variants={item}>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Need a <span className="text-[#F37F21]">consultation</span>?
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            Let's discuss how we can help you find the perfect digital talent
            for your business needs.
          </motion.p>
        </motion.div>

        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-xl shadow-2xl overflow-hidden max-w-2xl mx-auto"
          variants={item}
          whileHover={{
            y: -5,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div className="p-8 sm:p-10 text-center">
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 bg-[#F37F21] rounded-full mb-6"
              whileHover={{ rotate: 15, scale: 1.1 }}
            >
              <FaEnvelope className="text-2xl text-white" />
            </motion.div>
            <motion.h3
              className="text-2xl font-bold text-gray-900 mb-6"
              whileHover={{ color: "#F37F21" }}
            >
              Free Consultation
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8"
              variants={container}
            >
              {[
                {
                  icon: <FaEnvelope />,
                  title: "Email Us",
                  text: "help@cloudkonektion.eu",
                },
                {
                  icon: <FaCalendarAlt />,
                  title: "Schedule",
                  text: "Online Meeting",
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Visit Us",
                  text: "60, ST. JOSEPH STREET,ISLA, Malta",
                },
              ].map((option, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center"
                  variants={item}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="w-12 h-12 bg-[#F37F21]/10 rounded-full flex items-center justify-center mb-3"
                    whileHover={{ backgroundColor: "rgba(138, 188, 255, 0.2)" }}
                  >
                    {React.cloneElement(option.icon, {
                      className: "text-[#F37F21] text-xl",
                    })}
                  </motion.div>
                  <p className="font-medium text-gray-700">{option.title}</p>
                  <p className="text-gray-600">{option.text}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.button
              onClick={() => {
                // const section = document.querySelector("#contact");
                // section?.scrollIntoView({ behavior: "smooth" });
                setShowContactForm(true);
              }}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#F37F21] text-white rounded-lg font-semibold hover:bg-[#F37F21] transition-all duration-300 hover:shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Request Free Meeting</span>
              <FaCalendarAlt className="ml-3" />
            </motion.button>
          </div>
        </motion.div>
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
      <ContactForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </div>
  );
};

export default Consultation;
