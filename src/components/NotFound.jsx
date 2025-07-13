import React from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-800 to-cyan-100 relative overflow-hidden px-4">
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-10 z-0">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          {[...Array(30)].map((_, i) => (
            <circle
              key={i}
              cx={Math.random() * 100}
              cy={Math.random() * 100}
              r={Math.random() * 1.5 + 0.5}
              fill="#00BCFF"
            />
          ))}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-extrabold text-[#00BCFF] animate-bounce">
          This page under development
        </h1>
        <p className="text-2xl font-semibold text-gray-800 mt-4">
          Sorry from us
        </p>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          The page you’re looking for doesn’t exist or has been moved. Try going
          back or navigate home.
        </p>
        <Link
          to="/"
          className="inline-flex items-center mt-6 px-6 py-3 bg-[#00BCFF] text-white font-medium rounded-lg shadow-md hover:bg-[#009FE3] transition"
        >
          <FaArrowLeft className="mr-2" />
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
