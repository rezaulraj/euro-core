import React from "react";
import { motion } from "framer-motion";
import {
  FaUserTie,
  FaBuilding,
  FaGlobeAmericas,
  FaHandshake,
  FaTruckMoving,
  FaHardHat,
  FaUsersCog,
  FaChartBar,
} from "react-icons/fa";

const WhyCloudeKonektion = () => {
  const reasons = [
    {
      number: "1",
      icon: <FaUserTie className="text-4xl text-[#F37F21]" />,
      title: "Top Talent, Delivered with Precision",
      description: [
        "With deep expertise in workforce recruitment, we understand what it takes to find the right people in today’s fast-moving and competitive industries.",
        "We provide tailored hiring solutions across a wide range of roles — from skilled labor and operations to hospitality, logistics, and team supervision.",
      ],
      features: [
        {
          icon: <FaBuilding className="text-[#F37F21]" />,
          text: "Construction & Infrastructure",
        },
        {
          icon: <FaTruckMoving className="text-[#F37F21]" />,
          text: "Logistics & Transportation",
        },
        {
          icon: <FaUsersCog className="text-[#F37F21]" />,
          text: "Facility & Maintenance Staff",
        },
        {
          icon: <FaChartBar className="text-[#F37F21]" />,
          text: "Service & Admin Roles",
        },
      ],
    },
    {
      number: "2",
      icon: <FaGlobeAmericas className="text-4xl text-[#F37F21]" />,
      title: "Unmatched Access to Skilled Workers",
      description: [
        "Gain access to one of the most reliable labor networks across multiple regions. From local candidates to workers in high-demand global sectors, we deliver talent quickly and efficiently.",
        "Our smart matching process ensures that every placement meets your business needs in terms of skills, availability, and long-term fit.",
      ],
      highlights: [
        "Global candidate reach",
        "High-volume workforce supply",
        "Skill-based matching system",
        "Fast, reliable sourcing",
      ],
    },
    {
      number: "3",
      icon: <FaHandshake className="text-4xl text-[#F37F21]" />,
      title: "Strategic & Consultative Recruitment",
      description: [
        "We go beyond basic staffing — we build resilient and adaptable teams tailored to your industry’s requirements.",
        "Our consultative approach includes market insights, workforce planning, and retention strategies to ensure your operations run smoothly.",
      ],
      benefits: [
        "Long-term workforce planning",
        "Retention-focused hiring",
        "Industry-specific insights",
        "Flexible hiring strategies",
      ],
    },
  ];

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
      className="relative bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={container}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        {[...Array(6)].map((_, i) => (
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
        <motion.div className="text-center mb-16" variants={item}>
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            whileHover={{ scale: 1.02 }}
          >
            Why <span className="text-[#F37F21]">Euro </span>
            <span className="text-[#123B65]">Core</span>?
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-[#F37F21] mx-auto mb-6"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            whileHover={{ scale: 1.01 }}
          >
            Discover how our specialized approach sets us apart in executive
            recruitment
          </motion.p>
        </motion.div>

        <motion.div className="space-y-16" variants={container}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
              variants={item}
              whileHover={{ y: -5 }}
            >
              <motion.div
                className="lg:col-span-2 flex flex-col items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative mb-6">
                  <span className="text-8xl font-bold text-gray-200">
                    {reason.number}
                  </span>
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    whileHover={{ rotate: 15 }}
                  >
                    {reason.icon}
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                className="lg:col-span-10 bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                whileHover={{
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
                  borderColor: "#F37F21",
                }}
              >
                <motion.h3
                  className="text-2xl font-bold text-gray-900 mb-4"
                  whileHover={{ color: "#F37F21" }}
                >
                  {reason.title}
                </motion.h3>

                {reason.description.map((paragraph, i) => (
                  <motion.p
                    key={i}
                    className="text-gray-600 mb-4"
                    whileHover={{ x: 5 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}

                <motion.div
                  className="mt-6"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {reason.features && (
                    <motion.div
                      className="grid grid-cols-2 md:grid-cols-4 gap-4"
                      variants={container}
                    >
                      {reason.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center space-x-2"
                          variants={item}
                          whileHover={{ scale: 1.05 }}
                        >
                          {feature.icon}
                          <span className="text-gray-700">{feature.text}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}

                  {reason.highlights && (
                    <motion.ul
                      className="grid grid-cols-1 md:grid-cols-2 gap-2"
                      variants={container}
                    >
                      {reason.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          className="flex items-start"
                          variants={item}
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-[#F37F21] mr-2">•</span>
                          <span className="text-gray-700">{highlight}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}

                  {reason.benefits && (
                    <motion.div
                      className="grid grid-cols-1 md:grid-cols-2 gap-4"
                      variants={container}
                    >
                      {reason.benefits.map((benefit, i) => (
                        <motion.div
                          key={i}
                          className="flex items-start"
                          variants={item}
                          whileHover={{ scale: 1.02 }}
                        >
                          <div className="flex-shrink-0 h-6 w-6 text-[#F37F21] mr-2">
                            <svg
                              className="h-full w-full"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                clipRule="evenodd"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyCloudeKonektion;
