import React from "react";
import heroGallery from "../../assets/gallery/gallery.avif";

const HeroGallery = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ backgroundImage: `url(${heroGallery})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-700/60"></div>

        {/* <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-pulse-slow"></div> */}
      </div>

      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto py-32">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-[#F37F21] rounded-full animate-ping mr-2"></span>
          <span className="text-sm font-semibold tracking-wider">
            SUCCESS STORIES
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent">
            Recruitment
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#1e4f80] via-purple-400 to-[#F37F21] bg-clip-text text-transparent">
            Success Stories
          </span>
        </h1>

        <p className="text-xl sm:text-2xl lg:text-3xl font-light mb-8 text-blue-100 max-w-4xl mx-auto leading-relaxed">
          Transforming Careers, Building Futures -
          <span className="text-white font-medium"> One Success at a Time</span>
        </p>

        <p className="text-lg sm:text-xl text-gray-200 mb-12 max-w-3xl mx-auto leading-relaxed">
          Discover how our recruitment expertise has helped thousands of
          professionals find their dream jobs and companies build exceptional
          teams.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              5,000+
            </div>
            <div className="text-blue-200 font-medium">
              Successful Placements
            </div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              98%
            </div>
            <div className="text-blue-200 font-medium">Success Rate</div>
          </div>
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
              150+
            </div>
            <div className="text-blue-200 font-medium">Partner Companies</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button className="group relative px-8 cursor-pointer py-4 bg-[#F37F21] rounded-xl font-semibold text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 hover:from-blue-500 hover:to-purple-500 min-w-[200px]">
            <span className="relative z-10">View Success Stories</span>
            <div className="absolute inset-0 bg-[#1e4f80] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <button className="px-8 py-4 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-xl font-semibold text-white hover:bg-white/20 hover:border-white/50 transform hover:-translate-y-1 transition-all duration-300 min-w-[200px]">
            Join Our Success
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      {/* <div className="absolute top-20 left-10 w-4 h-4 bg-blue-400 rounded-full animate-float opacity-60"></div>
      <div className="absolute top-40 right-20 w-6 h-6 bg-purple-400 rounded-full animate-float-delayed opacity-40"></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 bg-pink-400 rounded-full animate-float-slow opacity-50"></div>
      <div className="absolute bottom-20 right-10 w-5 h-5 bg-cyan-400 rounded-full animate-float-delayed-slow opacity-30"></div> */}
    </div>
  );
};

export default HeroGallery;
