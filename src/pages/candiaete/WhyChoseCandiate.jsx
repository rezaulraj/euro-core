import React from "react";
import { motion } from "framer-motion";
import {
  FiCheckCircle,
  FiUsers,
  FiShield,
  FiClock,
  FiBarChart2,
  FiGlobe,
  FiArrowRight,
  FiStar,
  FiAward,
  FiTarget,
} from "react-icons/fi";
import {
  MdOutlineWorkspacePremium,
  MdOutlineHandshake,
  MdRocketLaunch,
  MdTrendingUp,
  MdSupportAgent,
} from "react-icons/md";
import {
  FaUserTie,
  FaRegLightbulb,
  FaNetworkWired,
  FaChartLine,
} from "react-icons/fa";

const WhyChoseCandidateEurocore = () => {
  // Recruitment Process Steps with unique designs
  const processSteps = [
    {
      step: "01",
      icon: <FiUsers className="text-2xl" />,
      title: "Profile Assessment",
      description:
        "Comprehensive evaluation of your skills, experience, and career aspirations with AI-powered analysis.",
      image:
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      color: "from-blue-500 to-cyan-500",
      features: [
        "Skill Mapping",
        "Experience Analysis",
        "Career Goals Alignment",
      ],
    },
    {
      step: "02",
      icon: <FiBarChart2 className="text-2xl" />,
      title: "Career Matching",
      description:
        "Advanced algorithms match you with ideal opportunities based on multiple factors and cultural fit.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.1&auto=format&fit=crop&w=600&q=80",
      color: "from-purple-500 to-pink-500",
      features: [
        "AI-Powered Matching",
        "Cultural Fit Analysis",
        "Opportunity Scoring",
      ],
    },
    {
      step: "03",
      icon: <MdOutlineHandshake className="text-2xl" />,
      title: "Interview Preparation",
      description:
        "Personalized coaching and resources to help you shine in interviews with mock sessions.",
      image:
        "https://plus.unsplash.com/premium_photo-1683120677943-4c0aed9b7540?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
      color: "from-orange-500 to-red-500",
      features: [
        "Mock Interviews",
        "Industry Insights",
        "Negotiation Training",
      ],
    },
    {
      step: "04",
      icon: <FiCheckCircle className="text-2xl" />,
      title: "Job Placement",
      description:
        "We negotiate on your behalf to secure the best possible offer and ensure smooth onboarding.",
      image:
        "https://images.unsplash.com/photo-1758520144555-af04bf9ad3e2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1032",
      color: "from-green-500 to-emerald-500",
      features: [
        "Offer Negotiation",
        "Onboarding Support",
        "Career Transition",
      ],
    },
  ];

  // Candidate Advantages with unique card designs
  const advantages = [
    {
      icon: <FiGlobe className="text-2xl" />,
      title: "Global Opportunities",
      description:
        "Access to exclusive positions with leading companies worldwide across 50+ countries.",
      stat: "50+",
      statLabel: "Countries",
      gradient: "from-blue-400 to-cyan-400",
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: <MdOutlineWorkspacePremium className="text-2xl" />,
      title: "Premium Network",
      description:
        "Direct connections to decision-makers at Fortune 500 companies and innovative startups.",
      stat: "1000+",
      statLabel: "Companies",
      gradient: "from-purple-400 to-pink-400",
      image:
        "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: <FiShield className="text-2xl" />,
      title: "Confidentiality",
      description:
        "Discreet job search with complete privacy protection and encrypted communications.",
      stat: "100%",
      statLabel: "Secure",
      gradient: "from-green-400 to-emerald-400",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: <FiClock className="text-2xl" />,
      title: "Time Efficiency",
      description:
        "Reduced hiring timeline through our streamlined AI-powered matching process.",
      stat: "3x",
      statLabel: "Faster",
      gradient: "from-orange-400 to-red-400",
      image:
        "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: <FaUserTie className="text-2xl" />,
      title: "Career Advocacy",
      description:
        "Dedicated consultants who champion your career goals and provide personalized guidance.",
      stat: "1:1",
      statLabel: "Support",
      gradient: "from-indigo-400 to-blue-400",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80",
    },
    {
      icon: <MdSupportAgent className="text-2xl" />,
      title: "Post-Placement Support",
      description:
        "Ongoing career guidance and mentorship even after you've secured your dream role.",
      stat: "6mo",
      statLabel: "Support",
      gradient: "from-teal-400 to-green-400",
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.1&auto=format&fit=crop&w=300&q=80",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <motion.div
        className="text-center mb-20 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-gray-100 mb-6"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-2 h-2 bg-[#F37F21] rounded-full animate-pulse"></div>
          <span className="text-sm font-semibold text-gray-600">
            WHY CHOOSE EURO CORE
          </span>
        </motion.div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Your Career
          <motion.span
            className="block bg-gradient-to-r from-[#F37F21] to-orange-500 bg-clip-text text-transparent"
            whileHover={{ scale: 1.02 }}
          >
            Transformation Partner
          </motion.span>
        </h1>

        <motion.p
          className="text-xl text-gray-600 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We revolutionize recruitment with a candidate-first approach that
          delivers
          <span className="text-[#F37F21] font-semibold">
            {" "}
            exceptional results
          </span>{" "}
          for both job seekers and employers worldwide.
        </motion.p>
      </motion.div>

      {/* Recruitment Process - Timeline Design */}
      <motion.div
        className="mb-32"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our <span className="text-[#F37F21]">Recruitment Journey</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A seamless, transparent process designed to match you with your
            perfect career opportunity
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.step}
              className={`flex flex-col lg:flex-row items-center gap-8 mb-16 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
              variants={itemVariants}
            >
              {/* Image Section */}
              <div className="lg:w-1/2">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                    {/* Step Number */}
                    <motion.div
                      className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <span className="text-white font-bold text-sm">
                        {step.step}
                      </span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="lg:w-1/2">
                <motion.div
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center shadow-lg`}
                    >
                      <div className="text-white">{step.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="space-y-2">
                    {step.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3 text-gray-700"
                        whileHover={{ x: 5 }}
                      >
                        <FiCheckCircle className="text-[#F37F21] flex-shrink-0" />
                        <span>{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Candidate Advantages - Grid with Stats */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your <span className="text-[#F37F21]">Competitive Edge</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Exclusive benefits that set you apart in today's competitive job
            market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              {/* Main Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden h-full">
                {/* Background Gradient */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${advantage.gradient} rounded-full filter blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${advantage.gradient} flex items-center justify-center shadow-lg`}
                  >
                    <div className="text-white">{advantage.icon}</div>
                  </div>

                  {/* Stat Bubble */}
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      {advantage.stat}
                    </div>
                    <div className="text-sm text-gray-500">
                      {advantage.statLabel}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {advantage.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {advantage.description}
                </p>

                {/* Image Thumbnail */}
                <div className="mt-4">
                  <div className="w-full h-32 rounded-lg overflow-hidden">
                    <img
                      src={advantage.image}
                      alt={advantage.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Hover Effect Border */}
                <div
                  className={`absolute inset-0 rounded-2xl border-2 border-transparent bg-gradient-to-r ${advantage.gradient} bg-clip-padding group-hover:opacity-100 opacity-0 transition-all duration-300 -z-10`}
                >
                  <div className="absolute inset-[2px] rounded-2xl bg-white z-10"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-[#F37F21] to-orange-500 rounded-3xl p-12 text-white max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Career?
          </h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of successful candidates who found their dream jobs
            through EuroCore
          </p>
          <motion.button
            className="bg-white text-[#F37F21] px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
            <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default WhyChoseCandidateEurocore;
