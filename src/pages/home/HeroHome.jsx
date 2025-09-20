import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import heroImage from "../../assets/home/herohome.webp";
import {
  FaSearch,
  FaHeadset,
  FaGlobeAmericas,
  FaChartLine,
  FaUserTie,
} from "react-icons/fa";
import ContactForm from "../../components/ContactForm";
import axios from "axios";

const HeroHome = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  useEffect(() => {
    axios
      .post("http://localhost:5000/api/visitors/track")
      .then((res) => console.log("Visitor tracked:", res.data))
      .catch((err) => console.error("Error tracking visitor", err));
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const statsVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <motion.div
          className="absolute inset-0 bg-black/50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1 }}
        />

        <motion.div
          className="relative z-10 max-w-7xl mx-auto px-6 py-32"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.div className="text-center space-y-8">
            <motion.div
              className="flex items-center justify-center space-x-2"
              variants={itemVariants}
            >
              <FaGlobeAmericas className="text-[#F37F21] text-xl" />
              <span className="text-white font-medium tracking-wider">
                GLOBAL RECRUITMENT SOLUTIONS
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold text-white leading-tight"
              variants={itemVariants}
            >
              <motion.span className="block" variants={itemVariants}>
                World Class
              </motion.span>
              <motion.span
                className="block text-[#F37F21]"
                variants={itemVariants}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Executive Recruitment
              </motion.span>
              <motion.span
                className="block"
                variants={itemVariants}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                & Headhunting
              </motion.span>
            </motion.h1>

            <motion.div
              className="relative inline-block"
              variants={itemVariants}
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-lg md:text-xl text-white bg-black/40 px-4 py-2 rounded-lg inline-block">
                Your
                <span className="font-bold text-[#F37F21] pl-2">
                  #1 Executive Search Partner
                </span>
              </p>
              <div className="absolute -bottom-1 left-0 right-0 h-1 bg-[#00BCFF]/50 blur-sm"></div>
            </motion.div>

            <motion.p
              className="text-white/90 max-w-3xl mx-auto text-lg leading-relaxed"
              variants={itemVariants}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ delay: 0.7 }}
            >
              We specialize in securing top-tier senior talent for high-growth
              companies and global enterprises helping you lead, scale, and stay
              ahead.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 pt-4"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <motion.button
                onClick={() => {
                  const section = document.querySelector("#our-expertise");
                  section?.scrollIntoView({ behavior: "smooth" });
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative cursor-pointer overflow-hidden group px-8 py-3 bg-[#F37F21] text-white hover:text-gray-900 rounded-lg font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <FaSearch className="text-lg" />
                  <span>Discover Our Expertise</span>
                </span>
                <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></span>
              </motion.button>

              <motion.button
                onClick={() => {
                  // const section = document.querySelector("#contact");
                  // section?.scrollIntoView({ behavior: "smooth" });
                  setShowContactForm(true);
                }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative cursor-pointer overflow-hidden group px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:-translate-y-1"
              >
                <span className="relative z-10 flex items-center justify-center space-x-2">
                  <FaHeadset className="text-lg" />
                  <span>Free Consultation</span>
                </span>
                <span className="absolute inset-0 bg-white/10 group-hover:bg-white/0 transition-all duration-300 rounded-lg"></span>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* <motion.div
          className="absolute bottom-10 left-0 right-0"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
              variants={{
                offscreen: {},
                onscreen: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
            >
              {[
                {
                  icon: <FaUserTie className="text-3xl text-[#00BCFF]" />,
                  value: "500+",
                  label: "Executives Placed",
                },
                {
                  icon: <FaGlobeAmericas className="text-3xl text-[#00BCFF]" />,
                  value: "40+",
                  label: "Countries",
                },
                {
                  icon: <FaChartLine className="text-3xl text-[#00BCFF]" />,
                  value: "95%",
                  label: "Success Rate",
                },
                {
                  icon: <FaSearch className="text-3xl text-[#00BCFF]" />,
                  value: "24h",
                  label: "Response Time",
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={statsVariants}
                  className="backdrop-blur-sm bg-white/10 p-4 rounded-lg border border-white/20 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex justify-center">{stat.icon}</div>
                  <p className="text-2xl font-bold text-white mt-2">
                    {stat.value}
                  </p>
                  <p className="text-white/80 text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div> */}
      </div>
      <ContactForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </div>
  );
};

export default HeroHome;
