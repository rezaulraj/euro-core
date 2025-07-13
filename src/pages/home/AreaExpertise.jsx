import React from "react";
import { motion } from "framer-motion";
import {
  FaTruckMoving,
  FaBuilding,
  FaIndustry,
  FaTools,
  FaConciergeBell,
  FaTree,
  FaArrowRight,
} from "react-icons/fa";

const AreaExpertise = () => {
  const expertiseAreas = [
    {
      icon: <FaBuilding className="text-4xl text-[#F37F21]" />,
      title: "Construction & Infrastructure",
      description:
        "Reliable manpower for residential, commercial, and civil construction projects ensuring quality, safety, and timely delivery.",
    },
    {
      icon: <FaIndustry className="text-4xl text-[#F37F21]" />,
      title: "Manufacturing & Industrial",
      description:
        "Operators, technicians, and supervisors who keep production lines running smoothly across various industries.",
    },
    {
      icon: <FaTruckMoving className="text-4xl text-[#F37F21]" />,
      title: "Logistics & Transportation",
      description:
        "From warehouse staff to licensed drivers, we provide the backbone of efficient supply chain and delivery operations.",
    },
    {
      icon: <FaTools className="text-4xl text-[#F37F21]" />,
      title: "Facility Management & Maintenance",
      description:
        "Skilled maintenance workers and technicians for the upkeep of buildings, equipment, and large-scale facilities.",
    },
    {
      icon: <FaConciergeBell className="text-4xl text-[#F37F21]" />,
      title: "Hospitality & Service Roles",
      description:
        "Housekeepers, kitchen staff, cleaners, and other support personnel who ensure smooth day-to-day service operations.",
    },
    {
      icon: <FaTree className="text-4xl text-[#F37F21]" />,
      title: "Woodwork & Carpentry Talent",
      description:
        "Skilled carpenters and craftsmen for furniture, interior, and construction woodwork.",
    },
  ];
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div id="our-expertise" className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Our areas of <span className="text-[#F37F21]">expertise</span>
          </h2>
          <div className="w-20 h-1 bg-[#F37F21] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized recruitment solutions tailored to your needs
          </p>
        </motion.div>

        {/* Expertise Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {expertiseAreas.map((area, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={{ y: -5 }}
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
            >
              <div className="p-3 bg-[#F37F21]/10 rounded-full inline-flex mb-4">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600">{area.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <motion.div className="text-center mt-8" variants={item}>
        <motion.a
          href="services"
          className="group inline-flex items-center px-8 py-4 bg-[#F37F21] text-white rounded-lg text-lg font-semibold hover:bg-[#123B65] transition-all duration-300 hover:shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span>Explore Your Services</span>
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
  );
};

export default AreaExpertise;
