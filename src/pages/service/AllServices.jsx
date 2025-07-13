import React from "react";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaHardHat,
  FaIndustry,
  FaRobot,
  FaTruckMoving,
  FaWarehouse,
  FaTools,
  FaWrench,
  FaConciergeBell,
  FaUtensils,
  FaTree,
  FaHammer,
} from "react-icons/fa";

// Service images
import constructionImg from "../../assets/service/construction.jpg";
import manufacturingImg from "../../assets/service/manufacturing.jpg";
import logisticsImg from "../../assets/service/logistics.jpg";
import facilityImg from "../../assets/service/facility.webp";
import hospitalityImg from "../../assets/service/hospitality.avif";
import woodworkImg from "../../assets/service/woodwork.avif";

const services = [
  {
    icons: [
      <FaBuilding key="building" className="text-3xl text-[#F37F21]" />,
      <FaHardHat key="hardhat" className="text-3xl text-[#F37F21]" />,
    ],
    title: "Construction & Infrastructure",
    highlights: [
      "Skilled laborers for all construction phases",
      "Specialized tradespeople (electricians, plumbers, etc.)",
      "Site supervisors and project managers",
      "Heavy equipment operators",
    ],
    description:
      "We provide comprehensive staffing solutions for construction projects of all scales - from residential developments to large-scale infrastructure. Our rigorously vetted professionals bring expertise in concrete work, steel erection, finishing trades, and site management. We prioritize safety-certified personnel with experience in OSHA compliance and modern construction techniques.",
    benefits: [
      "Reduced time-to-hire for critical roles",
      "Safety-focused workforce",
      "Scalable team sizes",
      "Specialized trade expertise",
    ],
    image: constructionImg,
  },
  {
    icons: [
      <FaIndustry key="industry" className="text-3xl text-[#F37F21]" />,
      <FaRobot key="robot" className="text-3xl text-[#F37F21]" />,
    ],
    title: "Manufacturing & Industrial",
    highlights: [
      "Production line operators",
      "Quality control inspectors",
      "Maintenance technicians",
      "Inventory specialists",
    ],
    description:
      "Our manufacturing staffing solutions keep your production lines running optimally. We supply skilled workers for assembly, machining, welding, and industrial maintenance. Whether you need temporary support for peak seasons or permanent hires for expansion, we understand the precision and reliability required in manufacturing environments.",
    benefits: [
      "Reduced downtime",
      "Flexible staffing models",
      "Technical skill verification",
      "Cross-trained personnel",
    ],
    image: manufacturingImg,
  },
  {
    icons: [
      <FaTruckMoving key="truck" className="text-3xl text-[#F37F21]" />,
      <FaWarehouse key="warehouse" className="text-3xl text-[#F37F21]" />,
    ],
    title: "Logistics & Transportation",
    highlights: [
      "CDL-certified drivers",
      "Forklift operators",
      "Warehouse associates",
      "Supply chain coordinators",
    ],
    description:
      "From last-mile delivery to warehouse operations, we provide the workforce that keeps goods moving. Our logistics professionals include certified drivers, experienced material handlers, and inventory specialists. We staff for all shipping/receiving, order fulfillment, and distribution center needs with personnel trained in WMS systems and modern logistics practices.",
    benefits: [
      "Certified equipment operators",
      "Seasonal staffing flexibility",
      "Safety-trained personnel",
      "Inventory accuracy focus",
    ],
    image: logisticsImg,
  },
  {
    icons: [
      <FaTools key="tools" className="text-3xl text-[#F37F21]" />,
      <FaWrench key="wrench" className="text-3xl text-[#F37F21]" />,
    ],
    title: "Facility Management & Maintenance",
    highlights: [
      "HVAC technicians",
      "Electrical maintenance",
      "Janitorial staff",
      "Groundskeepers",
    ],
    description:
      "We provide comprehensive facility support teams - from skilled technicians for specialized equipment maintenance to custodial staff for daily operations. Our personnel are trained in preventive maintenance programs, energy efficiency practices, and emergency response protocols for commercial buildings, campuses, and industrial facilities.",
    benefits: [
      "24/7 emergency coverage",
      "Certified technicians",
      "Customized service plans",
      "Preventive maintenance focus",
    ],
    image: facilityImg,
  },
  {
    icons: [
      <FaConciergeBell key="concierge" className="text-3xl text-[#F37F21]" />,
      <FaUtensils key="utensils" className="text-3xl text-[#F37F21]" />,
    ],
    title: "Hospitality & Service Roles",
    highlights: [
      "Hotel housekeeping",
      "Food service staff",
      "Front desk personnel",
      "Event support teams",
    ],
    description:
      "Our hospitality staffing solutions cover all aspects of guest service excellence. From boutique hotels to large resorts, we provide trained personnel in housekeeping, food preparation, concierge services, and banquet operations. All staff undergo service excellence training and understand the importance of creating positive guest experiences.",
    benefits: [
      "Service-trained personnel",
      "Flexible scheduling",
      "Cultural fit matching",
      "Multilingual staff available",
    ],
    image: hospitalityImg,
  },
  {
    icons: [
      <FaTree key="tree" className="text-3xl text-[#F37F21]" />,
      <FaHammer key="hammer" className="text-3xl text-[#F37F21]" />,
    ],
    title: "Woodwork & Carpentry Talent",
    highlights: [
      "Custom furniture makers",
      "Cabinet installers",
      "Finish carpenters",
      "Millwork specialists",
    ],
    description:
      "We connect you with master craftsmen and skilled woodworkers for precision carpentry needs. Our network includes artisans for high-end custom work as well as production-oriented carpenters for volume projects. All personnel are vetted for their technical skills, attention to detail, and knowledge of materials and finishes.",
    benefits: [
      "Artisan-level craftsmanship",
      "Material expertise",
      "Blueprint literacy",
      "Finish quality focus",
    ],
    image: woodworkImg,
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const AllServices = () => {
  return (
    <div className="bg-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Specialized{" "}
            <span className="text-[#F37F21]">Workforce Solutions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Industry-specific staffing tailored to your operational requirements
            and quality standards
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-28">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Text Content */}
              <div className="md:w-1/2">
                <div className="flex items-center mb-6 gap-3">
                  <div className="flex gap-2">
                    {service.icons.map((icon, i) => (
                      <div key={i} className="p-3 bg-[#F37F21]/10 rounded-full">
                        {icon}
                      </div>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Key Roles We Fill:
                  </h4>
                  <ul className="grid grid-cols-2 gap-2 mb-4">
                    {service.highlights.map((item, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-[#F37F21] mr-2">•</span>
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Your Benefits:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.benefits.map((benefit, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-[#00BCFF]/10 text-[#F37F21] text-sm"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    const section = document.querySelector("#contact");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-6 py-3 bg-[#F37F21] text-white font-medium rounded-lg hover:bg-[#F37F21] transition-colors duration-300 shadow-md"
                >
                  Request {service.title.split("&")[0]} Staff
                </button>
              </div>

              {/* Image */}
              <div className="md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative rounded-xl overflow-hidden shadow-2xl h-96 w-full"
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <p className="text-sm font-medium mb-1">
                        FEATURED SERVICE
                      </p>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-28 bg-gradient-to-r from-[#123B65] to-[#1b5ea1] rounded-2xl p-12 text-center text-white shadow-xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6">
            Need Custom Staffing Solutions?
          </h3>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our experts will work with you to understand your specific
            requirements and build the perfect workforce solution for your
            business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => {
                const section = document.querySelector("#contact");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-white text-[#123B65] font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md"
            >
              Schedule Consultation
            </button>
            <button className="px-8 py-4 bg-transparent border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-colors duration-300">
              Email Now: help@cloudkonektion.eu
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllServices;
