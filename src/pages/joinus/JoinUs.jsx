import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaHandsHelping,
  FaChartLine,
  FaLaugh,
  FaGlobe,
  FaTimes,
} from "react-icons/fa";
import { GiGrowth, GiEarthAmerica } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";

const JoinUs = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const coreValues = [
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Innovation",
      description: "We challenge the status quo and pioneer new solutions",
    },
    {
      icon: <FaHandsHelping className="text-4xl" />,
      title: "Collaboration",
      description:
        "Great things happen when we work together across disciplines",
    },
    {
      icon: <GiGrowth className="text-4xl" />,
      title: "Growth",
      description: "We invest in continuous learning and personal development",
    },
  ];

  const perks = [
    {
      icon: <FaChartLine className="text-3xl" />,
      title: "Career Development",
      items: ["Mentorship programs", "Leadership training", "Skill workshops"],
    },
    {
      icon: <FaLaugh className="text-3xl" />,
      title: "Work Environment",
      items: ["Flexible schedules", "Remote options", "Wellness programs"],
    },
    {
      icon: <GiEarthAmerica className="text-3xl" />,
      title: "Global Impact",
      items: ["International projects", "Diverse team", "Sustainability focus"],
    },
  ];

  return (
    <section
      id="meet-team"
      className="py-20 bg-gradient-to-b from-gray-50 to-white relative"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-[#F37F21] px-4 py-2 rounded-full mb-4">
            <FaUsers className="text-lg" />
            <span className="font-medium">Be Part of Something Great</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Join Our <span className="text-[#F37F21]">Mission</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're building the future of cloud technology with passionate,
            creative minds
          </p>
        </div>

        <div className="mb-20 bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our <span className="text-[#F37F21]">Culture</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                At Euro Core, we've created an environment where creativity
                thrives and people feel empowered to do their best work. Watch
                our team in action:
              </p>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-[#F37F21] text-white rounded-lg font-medium hover:bg-[#f38021d7] transition-colors"
              >
                <FaCirclePlay />
                Play Culture Video
              </button>
            </div>
            <div className="bg-gray-100 min-h-[300px] flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Team collaborating"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Our <span className="text-[#F37F21]">Core Values</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="mx-auto mb-6 w-20 h-20 rounded-full bg-blue-50 flex items-center justify-center text-[#F37F21]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-20 bg-blue-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why You'll <span className="text-[#F37F21]">Love It Here</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-[#F37F21]">
                    {perk.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {perk.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {perk.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-3xl bg-black rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-3 right-3 z-10 text-white text-2xl bg-black/40 p-2 rounded-full hover:bg-black/70 transition"
              >
                <FaTimes />
              </button>
              <video
                src="https://videos.pexels.com/video-files/3246359/3246359-uhd_2560_1440_25fps.mp4"
                controls
                autoPlay
                className="w-full h-[400px] object-cover"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default JoinUs;
