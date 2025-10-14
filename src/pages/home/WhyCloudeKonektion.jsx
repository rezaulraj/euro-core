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
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const WhyCloudeKonektion = () => {
  const reasons = [
    {
      number: "01",
      icon: <FaUserTie className="text-3xl" />,
      title: "Elite Talent Acquisition",
      description: [
        "We specialize in connecting businesses with exceptional talent across diverse industries. Our rigorous screening process ensures only the most qualified candidates reach your doorstep.",
        "From entry-level positions to specialized roles, we deliver professionals who drive your business forward.",
      ],
      features: [
        {
          icon: <FaBuilding />,
          text: "Construction & Infrastructure",
        },
        {
          icon: <FaTruckMoving />,
          text: "Logistics & Transportation",
        },
        {
          icon: <FaUsersCog />,
          text: "Facility Management",
        },
        {
          icon: <FaChartBar />,
          text: "Administrative Roles",
        },
      ],
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      number: "02",
      icon: <FaGlobeAmericas className="text-3xl" />,
      title: "Global Workforce Solutions",
      description: [
        "Tap into our extensive international network of skilled professionals. We bridge geographical gaps to bring you the best talent from around the world.",
        "Our multilingual team and cultural expertise ensure seamless integration of international staff into your organization.",
      ],
      highlights: [
        "Cross-border recruitment",
        "Multilingual candidates",
        "Cultural integration support",
        "Global compliance expertise",
      ],
      image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-green-500 to-blue-600",
    },
    {
      number: "03",
      icon: <FaHandshake className="text-3xl" />,
      title: "Strategic Partnership Approach",
      description: [
        "We believe in building long-term relationships rather than transactional partnerships. Our team becomes an extension of your HR department.",
        "Regular market insights, workforce analytics, and strategic planning ensure your staffing needs are always met proactively.",
      ],
      benefits: [
        "Dedicated account management",
        "Market intelligence reports",
        "Workforce planning consultancy",
        "Performance analytics",
      ],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.1&auto=format&fit=crop&w=800&q=80",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: {
      y: 60,
      opacity: 0,
      scale: 0.95,
    },
    show: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
        duration: 0.8,
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 1.1,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse delay-500"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(#ffffff 1px, transparent 1px),
                           linear-gradient(90deg, #ffffff 1px, transparent 1px)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <motion.div
        className="relative max-w-7xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={container}
      >
        {/* Header Section */}
        <motion.div className="text-center mb-20" variants={item}>
          <motion.div
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-[#F37F21] rounded-full animate-ping"></div>
            <span className="text-white/80 text-sm font-semibold tracking-wider">
              WHY CHOOSE US
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
            variants={item}
          >
            The EuroCore
            <motion.span
              className="block bg-gradient-to-r from-[#F37F21] to-orange-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Advantage
            </motion.span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-[#F37F21] to-orange-400 mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            variants={item}
          >
            Transforming workforce solutions through innovation, expertise, and
            <span className="text-[#F37F21] font-semibold">
              {" "}
              unparalleled commitment
            </span>{" "}
            to your success
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <motion.div className="space-y-32" variants={container}>
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-row-dense" : ""
              }`}
              variants={item}
            >
              {/* Image Section */}
              <motion.div
                className={`relative ${
                  index % 2 === 1 ? "lg:col-start-2" : ""
                }`}
                variants={imageVariants}
              >
                <div className="relative group">
                  {/* Main Image */}
                  <motion.div
                    className="relative rounded-3xl overflow-hidden shadow-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Floating Number Badge */}
                    <motion.div
                      className={`absolute top-6 left-6 w-16 h-16 rounded-2xl bg-gradient-to-br ${reason.gradient} flex items-center justify-center shadow-lg`}
                      variants={floatingVariants}
                      animate="animate"
                    >
                      <span className="text-white font-bold text-xl">
                        {reason.number}
                      </span>
                    </motion.div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-[#F37F21] rounded-full shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: index * 0.5,
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-500 rounded-full shadow-lg"
                    animate={{
                      y: [0, 10, 0],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 0.7,
                    }}
                  />
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                className={`flex flex-col justify-center space-y-6 ${
                  index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                }`}
                variants={item}
              >
                {/* Icon Header */}
                <motion.div
                  className="flex items-center gap-4 mb-2"
                  whileHover={{ x: 10 }}
                >
                  <div
                    className={`p-4 rounded-2xl bg-gradient-to-br ${reason.gradient} shadow-lg`}
                  >
                    <div className="text-white">{reason.icon}</div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white">
                    {reason.title}
                  </h3>
                </motion.div>

                {/* Description */}
                <div className="space-y-4">
                  {reason.description.map((paragraph, i) => (
                    <motion.p
                      key={i}
                      className="text-lg text-gray-300 leading-relaxed"
                      whileHover={{ x: 5 }}
                    >
                      {paragraph}
                    </motion.p>
                  ))}
                </div>

                {/* Features/Highlights/Benefits */}
                <motion.div
                  className="mt-6 space-y-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {reason.features && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {reason.features.map((feature, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#F37F21]/30 transition-all duration-300"
                          whileHover={{
                            scale: 1.02,
                            backgroundColor: "rgba(255,255,255,0.1)",
                          }}
                        >
                          <div className="text-[#F37F21]">{feature.icon}</div>
                          <span className="text-white font-medium">
                            {feature.text}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  )}

                  {(reason.highlights || reason.benefits) && (
                    <div className="space-y-2">
                      {(reason.highlights || reason.benefits).map((item, i) => (
                        <motion.div
                          key={i}
                          className="flex items-center gap-3"
                          whileHover={{ x: 5 }}
                        >
                          <FaCheckCircle className="text-[#F37F21] flex-shrink-0" />
                          <span className="text-gray-300">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>

                {/* CTA Button */}
                <motion.button
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#F37F21] to-orange-500 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 mt-6 w-fit"
                  whileHover={{
                    scale: 1.05,
                    background: "linear-gradient(45deg, #F37F21, #ff8c42)",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span>Discover More</span>
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-20 pt-12 border-t border-white/10"
          variants={item}
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-[#F37F21]/30 transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Ready to Transform Your Workforce?
              </h3>
              <p className="text-gray-300">
                Join hundreds of companies that trust EuroCore for their
                staffing solutions
              </p>
            </div>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-[#F37F21] to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default WhyCloudeKonektion;
