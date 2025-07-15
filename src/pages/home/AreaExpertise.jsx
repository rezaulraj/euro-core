import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaCar,
  FaBreadSlice,
  FaIndustry,
  FaHome,
  FaUtensils,
  FaTshirt,
  FaCarAlt,
  FaAppleAlt,
  FaChair,
  FaTools,
  FaHotel,
  FaBroom,
  FaHardHat,
  FaCogs,
  FaTree,
  FaWarehouse,
  FaCut,
  FaOilCan,
  FaBoxOpen,
  FaFlask,
  FaPaw,
  FaShoppingBag,
  FaShip,
  FaPallet,
  FaWrench,
  FaTruck,
  FaArrowRight,
} from "react-icons/fa";

const AreaExpertise = () => {
  const expertiseAreas = [
    {
      icon: <FaLeaf className="text-4xl text-[#F37F21]" />,
      title: "Agriculture",
      description:
        "We supply skilled farm workers experienced in crop handling, livestock care, greenhouse work, and irrigation.",
    },
    {
      icon: <FaCar className="text-4xl text-[#F37F21]" />,
      title: "Automotive / Car / Mechanic",
      description:
        "We provide expert car mechanics and technicians for repairs, servicing, inspections, and automotive electrical work.",
    },
    {
      icon: <FaBreadSlice className="text-4xl text-[#F37F21]" />,
      title: "Bakery",
      description:
        "We offer experienced bakery staff for baking, mixing, decorating, and handling day-to-day shop operations.",
    },
    {
      icon: <FaIndustry className="text-4xl text-[#F37F21]" />,
      title: "Base Metal / Metal Industry",
      description:
        "We supply skilled metal workers for welding, fabrication, casting, machining, and metal finishing.",
    },
    {
      icon: <FaHome className="text-4xl text-[#F37F21]" />,
      title: "Care Homes / Elderly Care",
      description:
        "We provide caregivers and healthcare staff with hands-on experience in patient care, assistance, and elderly support.",
    },
    {
      icon: <FaUtensils className="text-4xl text-[#F37F21]" />,
      title: "Food Production",
      description:
        "We deliver skilled food production workers for processing, packaging, QA, and machine operations.",
    },
    {
      icon: <FaUtensils className="text-4xl text-[#F37F21]" />,
      title: "Food Shop / Restaurant",
      description:
        "We supply restaurant staff experienced in cooking, customer service, and full restaurant operations.",
    },
    {
      icon: <FaTshirt className="text-4xl text-[#F37F21]" />,
      title: "Textile / Garment / Leather Industry",
      description:
        "We provide experienced workers for garment making, leather production, shoe crafting, and quality checking.",
    },
    {
      icon: <FaCarAlt className="text-4xl text-[#F37F21]" />,
      title: "Car Wash & Servicing",
      description:
        "We offer car wash workers and auto detailers experienced in vehicle cleaning and basic service support.",
    },
    {
      icon: <FaAppleAlt className="text-4xl text-[#F37F21]" />,
      title: "Fruit Picking / Harvesting",
      description:
        "We provide experienced fruit and crop pickers for orchard work, seasonal harvests, and field operations.",
    },
    {
      icon: <FaChair className="text-4xl text-[#F37F21]" />,
      title: "Furniture / Wood Industry",
      description:
        "We supply skilled furniture makers and woodworkers for cabinet work, design, and upholstery.",
    },
    {
      icon: <FaTools className="text-4xl text-[#F37F21]" />,
      title: "Garage / Auto Workshop",
      description:
        "We deliver skilled garage workers for diagnostics, repairs, and regular vehicle maintenance.",
    },
    {
      icon: <FaHotel className="text-4xl text-[#F37F21]" />,
      title: "Hotel / Resort / Hospitality",
      description:
        "We provide experienced hotel staff for housekeeping, guest service, events, and hospitality operations.",
    },
    {
      icon: <FaBroom className="text-4xl text-[#F37F21]" />,
      title: "Cleaning Services",
      description:
        "We offer professional cleaning staff for offices, homes, industries, and facilities of all sizes.",
    },
    {
      icon: <FaHardHat className="text-4xl text-[#F37F21]" />,
      title: "Construction",
      description:
        "We provide skilled construction labor including electricians, plumbers, engineers, and building crews.",
    },
    {
      icon: <FaCogs className="text-4xl text-[#F37F21]" />,
      title: "Machinery / Mechanical Industry",
      description:
        "We deliver skilled workers for operating, maintaining, and assembling machinery in industrial settings.",
    },
    {
      icon: <FaTree className="text-4xl text-[#F37F21]" />,
      title: "Forestry / Timber Industry",
      description:
        "We provide workers experienced in tree planting, logging, forest protection, and timber handling.",
    },
    {
      icon: <FaWarehouse className="text-4xl text-[#F37F21]" />,
      title: "Manufacturing",
      description:
        "We offer manufacturing staff for factory operations, assembly lines, and production supervision.",
    },
    {
      icon: <FaCut className="text-4xl text-[#F37F21]" />,
      title: "Hairdressing / Salon",
      description:
        "We supply professional stylists and barbers with hands-on salon experience in hair and beauty.",
    },
    {
      icon: <FaOilCan className="text-4xl text-[#F37F21]" />,
      title: "Oil Refinery",
      description:
        "We deliver experienced refinery staff for plant operations, safety, and equipment handling.",
    },
    {
      icon: <FaBoxOpen className="text-4xl text-[#F37F21]" />,
      title: "Packaging",
      description:
        "We provide packaging staff for machine operation, quality checks, and product preparation.",
    },
    {
      icon: <FaFlask className="text-4xl text-[#F37F21]" />,
      title: "Plastic Industry",
      description:
        "We supply skilled workers for molding, extrusion, inspection, and plastic production lines.",
    },
    {
      icon: <FaPaw className="text-4xl text-[#F37F21]" />,
      title: "Pet Care",
      description:
        "We offer caring and reliable staff for pet grooming, veterinary support, and animal care.",
    },
    {
      icon: <FaShoppingBag className="text-4xl text-[#F37F21]" />,
      title: "Retail",
      description:
        "We provide sales, cashier, and store staff for all types of retail shops and outlets.",
    },
    {
      icon: <FaShip className="text-4xl text-[#F37F21]" />,
      title: "Shipping / Shipyard / Marine",
      description:
        "We deliver shipyard professionals for welding, repairs, marine tech, and ship maintenance.",
    },
    {
      icon: <FaPallet className="text-4xl text-[#F37F21]" />,
      title: "Warehouse / Logistics",
      description:
        "We offer reliable warehouse staff for inventory, forklift driving, and shipping roles.",
    },
    {
      icon: <FaWrench className="text-4xl text-[#F37F21]" />,
      title: "Turnkey / Installation / Maintenance / Repair",
      description:
        "We provide experienced workers for installation, building maintenance, and system repairs.",
    },
    {
      icon: <FaTruck className="text-4xl text-[#F37F21]" />,
      title: "Transport / Driver / Delivery / Logistics",
      description:
        "We deliver licensed and experienced drivers, logistics staff, and delivery professionals.",
    },
    {
      icon: <FaCut className="text-4xl text-[#F37F21]" />,
      title: "Wellness & Spa Industry",
      description:
        "We provide skilled massage therapists, spa assistants, and beauticians experienced in wellness services.",
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
              className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300"
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

        <motion.div className="text-center mt-12" variants={item}>
          <motion.a
            href="/industries"
            className="group inline-flex items-center px-8 py-4 bg-[#F37F21] text-white rounded-lg text-lg font-semibold hover:bg-[#123B65] transition-all duration-300 hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Explore All Industries</span>
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
    </div>
  );
};

export default AreaExpertise;
