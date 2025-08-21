import React, { useState } from "react";
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
  FaHeadset,
} from "react-icons/fa";
import ContactForm from "../../components/ContactForm";

const DottedBackground = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden opacity-10">
    <svg
      className="absolute inset-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
    >
      <pattern
        id="dot-pattern"
        width="20"
        height="20"
        patternUnits="userSpaceOnUse"
        patternTransform="rotate(45)"
      >
        <circle cx="10" cy="10" r="1" fill="#123B65" />
      </pattern>
      <rect width="100%" height="100%" fill="url(#dot-pattern)" />
    </svg>
  </div>
);

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, 0.05, 0.01, 0.9],
    },
  },
};

const cardHover = {
  y: -10,
  transition: {
    type: "spring",
    stiffness: 300,
    damping: 10,
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const categories = [
  {
    title: "Agriculture",
    icon: <FaLeaf className="text-3xl text-green-600" />,
    roles: [
      "🧑‍🌾 Farm Workers",
      "👨‍🔬 Agricultural Technicians",
      "🔍 Crop Inspectors",
      "🌿 Horticulturists",
      "🐄 Livestock Handlers",
      "💧 Irrigation Specialists",
    ],
    description:
      "We supply skilled farm workers experienced in crop handling, livestock care, greenhouse work, and irrigation.",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Automotive / Car / Mechanic",
    icon: <FaCar className="text-3xl text-blue-600" />,
    roles: [
      "🔧 Auto Mechanics",
      "⚙️ Automotive Engineers",
      "🎨 Car Painters",
      "🛠️ Service Technicians",
      "🔍 Vehicle Inspectors",
      "💡 Automotive Electricians",
    ],
    description:
      "We provide expert car mechanics and technicians for repairs, servicing, inspections, and automotive electrical work.",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Bakery",
    icon: <FaBreadSlice className="text-3xl text-amber-600" />,
    roles: [
      "👨‍🍳 Bakers",
      "🥐 Pastry Chefs",
      "🏪 Bakery Managers",
      "🥣 Dough Mixers",
      "🛍️ Bakery Sales Staff",
      "🎂 Cake Decorators",
    ],
    description:
      "We offer experienced bakery staff for baking, mixing, decorating, and handling day-to-day shop operations.",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Base Metal / Metal Industry",
    icon: <FaIndustry className="text-3xl text-gray-600" />,
    roles: [
      "🔩 Metallurgists",
      "🧰 Metal Fabricators",
      "🔥 Foundry Workers",
      "🛠️ Metal Finishers",
      "⚒️ Welders",
      "🧱 Metal Machinists",
    ],
    description:
      "We supply skilled metal workers for welding, fabrication, casting, machining, and metal finishing.",
    image:
      "https://images.unsplash.com/photo-1697281679290-ad7be1b10682?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Care Homes / Elderly Care",
    icon: <FaHome className="text-3xl text-pink-600" />,
    roles: [
      "👩‍⚕️ Caregivers",
      "🩺 Nurses",
      "👨‍⚕️ Healthcare Assistants",
      "📋 Medical Social Workers",
      "🎯 Activity Coordinators",
      "🏡 Care Home Managers",
    ],
    description:
      "We provide caregivers and healthcare staff with hands-on experience in patient care, assistance, and elderly support.",
    image:
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Food Production",
    icon: <FaUtensils className="text-3xl text-red-600" />,
    roles: [
      "👷‍♂️ Production Supervisors",
      "⚙️ Machine Operators",
      "✅ QA Technicians",
      "🥼 Food Technologists",
      "🔄 Production Workers",
      "📦 Packaging Operators",
    ],
    description:
      "We deliver skilled food production workers for processing, packaging, QA, and machine operations.",
    image:
      "https://images.unsplash.com/photo-1651525670114-2b8117390b28?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Food Shop / Restaurant",
    icon: <FaUtensils className="text-3xl text-orange-600" />,
    roles: [
      "👨‍🍳 Restaurant Managers",
      "🧑‍💼 Servers / Waitstaff",
      "👨‍🍳 Chefs",
      "🙋 Hosts / Hostesses",
      "🍸 Bartenders",
      "🍳 Kitchen Staff",
    ],
    description:
      "We supply restaurant staff experienced in cooking, customer service, and full restaurant operations.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Textile / Garment / Leather Industry",
    icon: <FaTshirt className="text-3xl text-purple-600" />,
    roles: [
      "🧵 Textile Engineers",
      "🏭 Factory Workers",
      "✂️ Tailors",
      "👞 Shoemakers",
      "🎨 Textile Designers",
      "🔍 Quality Control Inspectors",
    ],
    description:
      "We provide experienced workers for garment making, leather production, shoe crafting, and quality checking.",
    image:
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Car Wash & Servicing",
    icon: <FaCarAlt className="text-3xl text-blue-500" />,
    roles: [
      "🚿 Car Wash Attendants",
      "🧽 Auto Detailers",
      "🔧 Car Service Technicians",
      "🅿️ Valets",
      "📋 Service Advisors",
      "👨‍🔧 Car Wash Supervisors",
    ],
    description:
      "We offer car wash workers and auto detailers experienced in vehicle cleaning and basic service support.",
    image:
      "https://images.unsplash.com/photo-1597156776667-501b49b1f3d8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Fruit Picking / Harvesting",
    icon: <FaAppleAlt className="text-3xl text-green-500" />,
    roles: [
      "🍎 Fruit Pickers",
      "🌳 Orchard Workers",
      "🧺 Harvesting Technicians",
      "🌽 Crop Pickers",
      "👨‍🌾 Agricultural Laborers",
      "👩‍💼 Field Supervisors",
    ],
    description:
      "We provide experienced fruit and crop pickers for orchard work, seasonal harvests, and field operations.",
    image:
      "https://images.unsplash.com/photo-1504208434309-cb69f4fe52b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Furniture / Wood Industry",
    icon: <FaChair className="text-3xl text-amber-800" />,
    roles: [
      "🪚 Woodworkers",
      "🛋️ Furniture Designers",
      "🔨 Cabinetmakers",
      "🎨 Wood Finishers",
      "🪑 Upholsterers",
      "🪵 Wood Carvers",
    ],
    description:
      "We supply skilled furniture makers and woodworkers for cabinet work, design, and upholstery.",
    image:
      "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Garage / Auto Workshop",
    icon: <FaTools className="text-3xl text-gray-700" />,
    roles: [
      "🔧 Garage Mechanics",
      "🧰 Automotive Technicians",
      "📋 Service Advisors",
      "🏭 Garage Managers",
      "🔎 Vehicle Diagnosticians",
      "🛑 Brake Specialists",
    ],
    description:
      "We deliver skilled garage workers for diagnostics, repairs, and regular vehicle maintenance.",
    image:
      "https://plus.unsplash.com/premium_photo-1676998430772-7ecf9619405d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hotel / Resort / Hospitality",
    icon: <FaHotel className="text-3xl text-indigo-600" />,
    roles: [
      "🏨 Hotel Managers",
      "🛎️ Front Desk Staff",
      "🧼 Housekeeping",
      "🍽️ Catering Staff",
      "🎩 Concierge",
      "🎉 Events Coordinators",
    ],
    description:
      "We provide experienced hotel staff for housekeeping, guest service, events, and hospitality operations.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Cleaning Services",
    icon: <FaBroom className="text-3xl text-blue-400" />,
    roles: [
      "🧹 Cleaners",
      "🧼 Janitors",
      "🧽 Housekeepers",
      "🏭 Industrial Cleaners",
      "🚮 Environmental Service Workers",
      "🧑‍💼 Cleaning Supervisors",
    ],
    description:
      "We offer professional cleaning staff for offices, homes, industries, and facilities of all sizes.",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Construction",
    icon: <FaHardHat className="text-3xl text-yellow-600" />,
    roles: [
      "👷 Construction Workers",
      "📋 Project Managers",
      "🏗️ Civil Engineers",
      "📐 Architects",
      "💡 Electricians",
      "🔧 Plumbers",
    ],
    description:
      "We provide skilled construction labor including electricians, plumbers, engineers, and building crews.",
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Machinery / Mechanical Industry",
    icon: <FaCogs className="text-3xl text-gray-500" />,
    roles: [
      "⚙️ Machine Operators",
      "🛠️ Maintenance Technicians",
      "🧑‍🏭 Production Supervisors",
      "🔍 QC Inspectors",
      "📐 Machine Engineers",
      "🏭 Manufacturing Technicians",
    ],
    description:
      "We deliver skilled workers for operating, maintaining, and assembling machinery in industrial settings.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Forestry / Timber Industry",
    icon: <FaTree className="text-3xl text-green-700" />,
    roles: [
      "🌲 Foresters",
      "🌳 Arborists",
      "🚜 Logging Operators",
      "🛡️ Forest Rangers",
      "🪓 Timber Harvesters",
      "🌱 Tree Planters",
    ],
    description:
      "We provide workers experienced in tree planting, logging, forest protection, and timber handling.",
    image:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Manufacturing",
    icon: <FaWarehouse className="text-3xl text-blue-700" />,
    roles: [
      "🏭 Manufacturing Engineers",
      "🔄 Production Workers",
      "🔍 QA Inspectors",
      "👷‍♂️ Supervisors",
      "🔩 Assembly Workers",
      "🛠️ Technicians",
    ],
    description:
      "We offer manufacturing staff for factory operations, assembly lines, and production supervision.",
    image:
      "https://plus.unsplash.com/premium_photo-1661882258240-bd6d5221cbca?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Hairdressing / Salon",
    icon: <FaCut className="text-3xl text-pink-500" />,
    roles: [
      "💇 Hairstylists",
      "🏪 Salon Managers",
      "🎨 Hair Colorists",
      "💦 Shampoo Technicians",
      "🙋 Assistants",
      "💈 Barbers",
    ],
    description:
      "We supply professional stylists and barbers with hands-on salon experience in hair and beauty.",
    image:
      "https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Oil Refinery",
    icon: <FaOilCan className="text-3xl text-black" />,
    roles: [
      "🛢️ Refinery Operators",
      "⚗️ Chemical Engineers",
      "🧪 Process Technicians",
      "🧰 Instrumentation Technicians",
      "⚠️ Safety Inspectors",
      "🏭 Refinery Managers",
    ],
    description:
      "We deliver experienced refinery staff for plant operations, safety, and equipment handling.",
    image:
      "https://plus.unsplash.com/premium_photo-1661964136447-676beb97b303?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Packaging",
    icon: <FaBoxOpen className="text-3xl text-brown-600" />,
    roles: [
      "📦 Packaging Operators",
      "🎨 Designers",
      "✅ QC Technicians",
      "🧑‍🏭 Supervisors",
      "⚙️ Machine Operators",
      "📐 Engineers",
    ],
    description:
      "We provide packaging staff for machine operation, quality checks, and product preparation.",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Plastic Industry",
    icon: <FaFlask className="text-3xl text-yellow-400" />,
    roles: [
      "🔧 Plastic Engineers",
      "🧊 Mold Operators",
      "➰ Extrusion Technicians",
      "✅ QC Inspectors",
      "⚙️ Machine Operators",
      "🎨 Designers",
    ],
    description:
      "We supply skilled workers for molding, extrusion, inspection, and plastic production lines.",
    image:
      "https://images.unsplash.com/photo-1721622248657-55b1c5ec1dbe?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Pet Care",
    icon: <FaPaw className="text-3xl text-brown-400" />,
    roles: [
      "🐶 Pet Groomers",
      "🐾 Veterinary Assistants",
      "🏪 Pet Store Staff",
      "🧬 Animal Technicians",
      "🛏️ Pet Sitters",
      "🐕 Kennel Attendants",
    ],
    description:
      "We offer caring and reliable staff for pet grooming, veterinary support, and animal care.",
    image:
      "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Retail",
    icon: <FaShoppingBag className="text-3xl text-purple-500" />,
    roles: [
      "🛍️ Sales Associates",
      "🏪 Store Managers",
      "💳 Cashiers",
      "🧥 Merchandisers",
      "📦 Stock Clerks",
      "👨‍💼 Supervisors",
    ],
    description:
      "We provide sales, cashier, and store staff for all types of retail shops and outlets.",
    image:
      "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Shipping / Shipyard / Marine",
    icon: <FaShip className="text-3xl text-blue-800" />,
    roles: [
      "🛳️ Shipyard Workers",
      "⚓ Ship Engineers",
      "🔥 Marine Welders",
      "📐 Ship Designers",
      "🧑‍🏭 Supervisors",
      "🔧 Technicians",
    ],
    description:
      "We deliver shipyard professionals for welding, repairs, marine tech, and ship maintenance.",
    image:
      "https://images.unsplash.com/photo-1718314786551-798f1398a7b1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Warehouse / Logistics",
    icon: <FaPallet className="text-3xl text-orange-700" />,
    roles: [
      "🏬 Warehouse Workers",
      "🚜 Forklift Operators",
      "🧑‍💼 Supervisors",
      "📦 Inventory Clerks",
      "📮 Shipping Clerks",
      "🏪 Managers",
    ],
    description:
      "We offer reliable warehouse staff for inventory, forklift driving, and shipping roles.",
    image:
      "https://plus.unsplash.com/premium_photo-1663040001568-f07cab70d71f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Turnkey / Installation / Maintenance / Repair",
    icon: <FaWrench className="text-3xl text-gray-600" />,
    roles: [
      "🔧 Installation Technicians",
      "🔩 Maintenance Workers",
      "🛠️ Repair Specialists",
      "📋 Project Managers",
      "🏢 Facility Staff",
      "📐 Engineers",
    ],
    description:
      "We provide experienced workers for installation, building maintenance, and system repairs.",
    image:
      "https://images.unsplash.com/photo-1639303338365-6d5912cd8c56?q=80&w=878&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Transport / Driver / Delivery / Logistics",
    icon: <FaTruck className="text-3xl text-gray-800" />,
    roles: [
      "🚚 Drivers",
      "📦 Delivery Staff",
      "🧭 Logistics Coordinators",
      "🗺️ Transport Managers",
      "👨‍💼 Supervisors",
      "🚛 Fleet Managers",
    ],
    description:
      "We deliver licensed and experienced drivers, logistics staff, and delivery professionals.",
    image:
      "https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
  {
    title: "Wellness & Spa Industry",
    icon: <FaCut className="text-3xl text-pink-400" />,
    roles: [
      "💆‍♀️ Massage Therapists",
      "💇‍♀️ Beauticians",
      "🧖 Spa Attendants",
      "💅 Nail Technicians",
      "🧴 Skincare Assistants",
      "🏪 Spa Receptionists",
    ],
    description:
      "We provide skilled massage therapists, spa assistants, and beauticians experienced in wellness, relaxation, and personal care services.",
    image:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
  },
];

const AllServices = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  return (
    <div className="relative min-h-screen py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <DottedBackground />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
            variants={fadeInUp}
          >
            Find Skilled <span className="text-[#F37F21]">Professionals</span>
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            We connect businesses with qualified workers across various
            industries
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={cardHover}
              className="bg-white/70 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-white/30 relative group"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="relative h-48 overflow-hidden">
                <motion.img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                  <div className="flex items-center">
                    <motion.div
                      className="p-3 bg-white/90 backdrop-blur-sm rounded-full mr-4 shadow-lg"
                      whileHover={{ rotate: 15, scale: 1.1 }}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-xl font-bold text-white drop-shadow-md">
                      {category.title}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white/50 backdrop-blur-sm">
                <motion.p
                  className="text-gray-700 mb-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {category.description}
                </motion.p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">
                    Available Roles:
                  </h4>
                  <ul className="space-y-1">
                    {category.roles.map((role, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center"
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.1 * i }}
                      >
                        <span className="text-gray-700">{role}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* <motion.button
                  onClick={() => {
                    const section = document.querySelector("#contact");
                    section?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full mt-4 px-4 py-3 bg-gradient-to-r from-[#F37F21] to-[#E06D1A] text-white font-medium rounded-lg hover:from-[#E06D1A] hover:to-[#D45C0A] transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 10px 20px rgba(243, 127, 33, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">
                    Recruit {category.title.split("/")[0]} Staff
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-[#E06D1A] to-[#D45C0A] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                </motion.button> */}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-20 bg-white/70 backdrop-blur-lg rounded-2xl p-8 md:p-12 text-center shadow-2xl border border-white/30 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F37F21]/10 via-transparent to-[#123B65]/10 opacity-0 hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

          <motion.h3
            className="text-2xl md:text-3xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Need Custom Staffing Solutions?
          </motion.h3>
          <motion.p
            className="text-lg mb-8 max-w-2xl mx-auto text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Our experts will work with you to find the perfect candidates for
            your specific requirements
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <motion.button
              onClick={() => {
                // const section = document.querySelector("#contact");
                // section?.scrollIntoView({ behavior: "smooth" });
                setShowContactForm(true);
              }}
              className="px-8 py-3 bg-gradient-to-r from-[#F37F21] to-[#E06D1A] text-white font-bold rounded-lg hover:from-[#E06D1A] hover:to-[#D45C0A] transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Free Consultation</span>{" "}
              <FaHeadset className="text-lg" />
              <span className="absolute inset-0 bg-gradient-to-r from-[#E06D1A] to-[#D45C0A] opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
            </motion.button>
            <motion.button
              onClick={() => {
                const section = document.querySelector("#contact");
                section?.scrollIntoView({ behavior: "smooth" });
                // setShowContactForm(true);
              }}
              className="px-8 py-3 bg-transparent border-2 border-[#123B65] text-[#123B65] font-bold rounded-lg hover:bg-[#123B65]/10 transition-colors duration-300 hover:shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Our Team
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      <ContactForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
      />
    </div>
  );
};

export default AllServices;
