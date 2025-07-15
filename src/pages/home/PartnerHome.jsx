import React from "react";
import { motion } from "framer-motion";
import {
  FaShieldAlt,
  FaTrophy,
  FaChartLine,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const PartnerHome = () => {
  const benefits = [
    {
      icon: <FaShieldAlt className="text-3xl text-[#F37F21]" />,
      title: "Protect Your Business",
      description: "Secure top cybersecurity talent to safeguard your assets",
    },
    {
      icon: <FaTrophy className="text-3xl text-[#F37F21]" />,
      title: "Triumph in the Marketplace",
      description: "Outperform competitors with elite tech teams",
    },
    {
      icon: <FaChartLine className="text-3xl text-[#F37F21]" />,
      title: "Maximize Profitability",
      description: "Drive revenue growth with strategic hires",
    },
    {
      icon: <FaLightbulb className="text-3xl text-[#F37F21]" />,
      title: "Innovate Faster",
      description: "Accelerate development with top-tier digital talent",
    },
  ];

  // Animation variants
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
    hidden: { y: 50, opacity: 0 },
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
    hidden: { y: 0, x: 0, scale: 1 },
    animate: {
      y: [-20, 0, 20, 0],
      x: [10, 20, 10, 0],
      scale: [1.05, 1, 0.95, 1],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 py-20 px-4 sm:px-6 lg:px-8"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      {/* Floating background elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-[#F37F21]"
            style={{
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(60px)",
            }}
            variants={float}
            initial="hidden"
            animate="animate"
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" variants={container}>
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-[#00BCFF]/10 text-[#F37F21] text-sm font-semibold mb-6"
            variants={item}
            whileHover={{ scale: 1.05 }}
          >
            <span>Comprehensive Talent Solutions</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
            variants={item}
            whileHover={{ scale: 1.01 }}
          >
            Your Reliable Partner for Quality
            <br className="hidden lg:block" />
            <span className="text-[#F37F21]"> Manpower Staffing </span>Solutions
          </motion.h1>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={item}
            whileHover={{ x: 5 }}
          >
            Our expert hires give your company the competitive edge helping you
            innovate faster, protect your business, outperform the competition,
            and boost profitability
          </motion.p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          variants={container}
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-white/20"
              variants={item}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
                borderColor: "#F37F21",
              }}
            >
              <div className="flex flex-col items-center text-center">
                <motion.div
                  className="p-4 bg-[#F37F21]/10 rounded-full mb-4"
                  whileHover={{ rotate: 15 }}
                >
                  {benefit.icon}
                </motion.div>
                <motion.h3
                  className="text-xl font-bold text-gray-900 mb-2"
                  whileHover={{ color: "#F37F21" }}
                >
                  {benefit.title}
                </motion.h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div className="text-center" variants={item}>
          <motion.a
            href="about-us"
            className="group inline-flex items-center px-8 py-4 bg-[#F37F21] text-white rounded-lg text-lg font-semibold hover:bg-[#123B65] transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>LEARN MORE</span>
            <motion.span
              className="ml-3"
              animate={{ x: [0, 5, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <FaArrowRight />
            </motion.span>
          </motion.a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PartnerHome;
