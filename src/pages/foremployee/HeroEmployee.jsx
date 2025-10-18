import React, { useState } from "react";
import { FaUserTie, FaChartLine, FaArrowRight } from "react-icons/fa";
import heroImage from "../../assets/employee/heroemp.jpg";
import { motion } from "framer-motion";

import Calendly from "../../components/Calendly";

const HeroEmployee = () => {
  const [showCalendly, setShowCalendly] = useState(false);
  return (
    <div className="relative h-screen min-h-[500px] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Professional team working together"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5">
            Skilled<span className="text-[#F37F21]"> Workforce </span> <br />
            Just a Call Away!
          </h1>
          <p className="text-xl text-gray-300 mb-4 max-w-2xl mx-auto">
            If you're looking for skilled and experienced workers for your
            business, we're here to help! We connect you with reliable,
            hard-working professionals who are ready to meet your job needs. Our
            team makes the hiring process simple and stress-free.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-3">
          <motion.button
            onClick={() => setShowCalendly(true)}
            className="group relative overflow-hidden px-8 py-4 bg-[#F37F21] hover:bg-[#1e4f80] text-white font-bold rounded-lg shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-[#E06D1A] hover:bg-[#1e4f80] "></div>
            <div className="relative z-10 flex items-center">
              <FaUserTie className="mr-3 text-xl" />
              <span>Hire Skilled Worker</span>
              <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </motion.button>

          <motion.button
            onClick={() => {
              const section = document.querySelector("#how-we-work");
              section?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group relative overflow-hidden px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white/30 hover:border-white/50 backdrop-blur-sm cursor-pointer"
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255, 255, 255, 0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center">
              <FaChartLine className="mr-3 text-xl" />
              <span>Explore How It Works</span>
              <FaArrowRight className="ml-3 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </motion.button>
        </div>
      </div>

      <div className="absolute bottom-10 left-10 w-24 h-24 rounded-full bg-[#00BCFF]/10 blur-xl animate-float"></div>
      <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#0066FF]/10 blur-xl animate-float-delay"></div>

      <Calendly show={showCalendly} onClose={() => setShowCalendly(false)} />
      <style jsx="true" global="true">{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(-20px) translateX(10px);
          }
          50% {
            transform: translateY(0) translateX(20px);
          }
          75% {
            transform: translateY(20px) translateX(10px);
          }
        }
        @keyframes float-delay {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }
          25% {
            transform: translateY(10px) translateX(-20px);
          }
          50% {
            transform: translateY(20px) translateX(0);
          }
          75% {
            transform: translateY(10px) translateX(20px);
          }
        }
        .animate-float {
          animation: float 15s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroEmployee;
