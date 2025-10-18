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
  FaStar,
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
    <div className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] bg-[length:50px_50px] bg-grid-slate-800"></div>
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
            className="inline-flex items-center gap-3 mb-6 px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-2 h-2 bg-[#F37F21] rounded-full animate-ping"></div>
            <span className="text-blue-800 text-sm font-semibold tracking-wider">
              WHY CHOOSE US
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
            variants={item}
          >
            The EuroCore
            <motion.span
              className="block bg-[#F37F21] bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
            >
              Advantage
            </motion.span>
          </motion.h2>

          <motion.div
            className="w-24 h-1 bg-[#F37F21] mx-auto mb-8 rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />

          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            variants={item}
          >
            Transforming workforce solutions through innovation, expertise, and
            <span className="bg-[#F37F21] bg-clip-text text-transparent font-semibold">
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
                    className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={reason.image}
                      alt={reason.title}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                    {/* Floating Number Badge */}
                    <motion.div
                      className={`absolute top-6 left-6 w-16 h-16 rounded-2xl bg-[#F37F21] flex items-center justify-center shadow-lg border-2 border-white`}
                      variants={floatingVariants}
                      animate="animate"
                    >
                      <span className="text-white font-bold text-xl">
                        {reason.number}
                      </span>
                    </motion.div>

                    {/* Image Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 mix-blend-overlay"></div>
                  </motion.div>

                  {/* Enhanced Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-[#F37F21] rounded-full shadow-lg border-2 border-white"
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
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#F37F21] rounded-full shadow-lg border-2 border-white"
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
                    className={`p-4 rounded-2xl bg-[#F37F21] shadow-lg border border-white/20`}
                  >
                    <div className="text-white">{reason.icon}</div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    {reason.title}
                  </h3>
                </motion.div>

                {/* Description */}
                <div className="space-y-4">
                  {reason.description.map((paragraph, i) => (
                    <motion.p
                      key={i}
                      className="text-lg text-gray-700 leading-relaxed"
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
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-300"
                          whileHover={{
                            scale: 1.02,
                            backgroundColor: "rgba(255,255,255,0.9)",
                          }}
                        >
                          <div className="text-blue-600">{feature.icon}</div>
                          <span className="text-gray-800 font-medium">
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
                          className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/50 transition-colors duration-200"
                          whileHover={{ x: 5 }}
                        >
                          <FaCheckCircle className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </motion.div>

               
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Bottom CTA */}
        <motion.div
          className="text-center mt-20 pt-12 border-t border-blue-200/30"
          variants={item}
        >
          <motion.div
            className="inline-flex flex-col sm:flex-row items-center gap-6 bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-blue-200/50 shadow-xl hover:shadow-2xl transition-all duration-300"
            whileHover={{ y: -5 }}
          >
            <div className="text-left">
              <div className="flex items-center gap-2 mb-2">
                <FaStar className="text-yellow-500" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Ready to Transform Your Workforce?
                </h3>
              </div>
              <p className="text-gray-700">
                Join hundreds of companies that trust EuroCore for their
                staffing solutions
              </p>
            </div>
            <motion.button
              className="px-8 py-3 bg-[#F37F21] hover:bg-[#1e4f80] text-white font-semibold rounded-xl hover:shadow-lg transition-all cursor-pointer duration-300 whitespace-nowrap border border-blue-500/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default WhyCloudeKonektion;
