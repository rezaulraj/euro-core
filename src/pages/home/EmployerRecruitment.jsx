import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  FaRocket,
  FaChartLine,
  FaGlobe,
  FaUserTie,
  FaLightbulb,
  FaArrowRight,
  FaHandshake,
} from "react-icons/fa";
import bgimage from "../../assets/home/dot.svg?url";

const DotPattern = () => (
  <motion.svg
    className="absolute inset-0 w-full h-full opacity-10 z-0"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.1 }}
    transition={{ duration: 1.5 }}
  >
    <pattern
      id="dotPattern"
      x="0"
      y="0"
      width="20"
      height="20"
      patternUnits="userSpaceOnUse"
    >
      <circle cx="10" cy="10" r="1" fill="#00BCFF" />
    </pattern>
    <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
  </motion.svg>
);

const EmployerRecruitment = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const stats = [
    {
      icon: <FaGlobe className="text-3xl text-[#F37F21]" />,
      value: "30+",
      label: "Countries Served",
      description: "Access top talent across Europe and beyond",
    },
    {
      icon: <FaUserTie className="text-3xl text-[#F37F21]" />,
      value: "95%",
      label: "Retention Rate",
      description: "Higher quality placements that stay longer",
    },
    {
      icon: <FaChartLine className="text-3xl text-[#F37F21]" />,
      value: "3x",
      label: "Faster Hiring",
      description: "Reduce time-to-hire with our efficient process",
    },
    {
      icon: <FaLightbulb className="text-3xl text-[#F37F21]" />,
      value: "10+",
      label: "Industry Specializations",
      description: "Deep expertise in your sector's talent needs",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
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

  const slideIn = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="relative overflow-hidden bg-gray-50"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
        backgroundPosition: "center",
      }}
      initial="hidden"
      animate={controls}
      variants={container}
    >
      <DotPattern />

      <div className="relative z-10 py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <motion.div className="space-y-8" variants={container}>
            <motion.div className="flex items-center space-x-3" variants={item}>
              <div className="w-12 h-1 bg-[#F37F21]"></div>
              <span className="text-sm font-semibold tracking-wider text-[#F37F21] uppercase">
                Strategic Talent Solutions
              </span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
              variants={item}
            >
              Transform Your Workforce With{" "}
              <span className="text-[#F37F21]">EuroCore</span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={item}
            >
              EuroCore delivers premium recruitment solutions that give European
              businesses the competitive edge. We don't just fill positions - we
              build high-performing teams that drive your business forward.
            </motion.p>

            {/* Key Benefits */}
            <motion.div className="space-y-4" variants={container}>
              {[
                "✓ Precision-matched candidates in 72 hours or less",
                "✓ 24-month placement guarantee on all hires",
                "✓ Dedicated account management and market insights",
                "✓ Compliance assurance across 30+ jurisdictions",
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start"
                  variants={item}
                >
                  <span className="text-[#F37F21] mr-2 mt-1">•</span>
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Employer CTA Button */}
            <motion.div variants={item} className="pt-4">
              <a
                href="/for-employers"
                className="inline-flex items-center justify-center gap-3 bg-[#F37F21] hover:bg-[#E5711A] text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <FaHandshake className="text-xl" />
                More About Our Talent Solution
                <FaArrowRight className="animate-pulse" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div className="relative" variants={slideIn}>
            <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Why Leading Companies Choose EuroCore
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-200 hover:border-[#F37F21]/50 transition-all"
                    whileHover={{ y: -5 }}
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-3 bg-[#F37F21]/10 rounded-full">
                        {stat.icon}
                      </div>
                      <p className="text-3xl font-bold text-gray-900">
                        {stat.value}
                      </p>
                      <p className="text-lg font-medium text-gray-800 mt-2">
                        {stat.label}
                      </p>
                      <p className="text-sm text-gray-500 mt-2">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="mt-8 bg-blue-50/50 p-4 rounded-lg border border-blue-100 text-center">
                <p className="text-blue-800 font-medium">
                  "EuroCore reduced our hiring time by 60% while improving
                  candidate quality"
                </p>
                <p className="text-sm text-blue-600 mt-2">
                  — Director of HR, Fortune 500 Technology Firm
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmployerRecruitment;
