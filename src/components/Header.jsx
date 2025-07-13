import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiMail } from "react-icons/fi";
import {
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineInformationCircle,
  HiOutlineLogin,
} from "react-icons/hi";
import { MdOutlineHome } from "react-icons/md";
import { TbUsersPlus } from "react-icons/tb";
import ContactForm from "./ContactForm";
import logo2 from "/eurocore-logo.png?url";
import logo3 from "/eurocore-Dark-BG-logo.png?url";
import { RiServiceFill, RiServiceLine } from "react-icons/ri";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("US");
  const [isHoveringLanguage, setIsHoveringLanguage] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const languages = [
    { code: "US", name: "English", countryCode: "US" },
    { code: "MT", name: "Malta", countryCode: "MT" },
    { code: "SI", name: "Serbia", countryCode: "SI" },
    { code: "HR", name: "Croatia", countryCode: "HR" },
    { code: "ES", name: "Español", countryCode: "ES" },
  ];

  const navItems = [
    { label: "Home", path: "/", icon: <MdOutlineHome className="text-xl" /> },
    {
      label: "Services",
      path: "/services",
      icon: <RiServiceLine className="text-xl" />,
    },
    {
      label: "For Employers",
      path: "/for-employers",
      icon: <HiOutlineOfficeBuilding className="text-xl" />,
    },
    {
      label: "For Candidates",
      path: "/for-candidates",
      icon: <HiOutlineUserGroup className="text-xl" />,
    },
    {
      label: "About Us",
      path: "/about-us",
      icon: <HiOutlineInformationCircle className="text-xl" />,
    },
    {
      label: "Join Us",
      path: "/join-us",
      icon: <TbUsersPlus className="text-xl" />,
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const handleContactSubmit = (formData) => {
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex items-center">
            {/* <h1
              className="text-3xl font-bold transition-colors duration-500"
              style={{ color: "#00BCFF" }}
            >
              Cloud Konektion
            </h1> */}

            <a href="/">
              {scrolled ? (
                <img src={logo2} alt="" className="h-5" />
              ) : (
                <img src={logo3} alt="" className="h-5" />
              )}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none p-2 rounded-full transition-all duration-300 hover:bg-gray-100 hover:bg-opacity-20"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <FiX
                className={`w-6 h-6 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            ) : (
              <FiMenu
                className={`w-6 h-6 ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
              />
            )}
          </button>

          {/* Desktop Navigation - Center */}
          <nav className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className={`flex items-center space-x-2 text-lg font-medium transition-all duration-300 ${
                  scrolled
                    ? "text-gray-800 hover:text-[#00BCFF]"
                    : "text-white hover:text-gray-200"
                }`}
              >
                <span className="">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </nav>

          {/* Right Section */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Language Selector */}
            {/* Language Selector */}
            <div className="relative">
              <div
                className="inline-block"
                onMouseEnter={() => setIsHoveringLanguage(true)}
                onMouseLeave={() => setIsHoveringLanguage(false)}
              >
                <button
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${
                    scrolled
                      ? "text-gray-800 hover:bg-blue-200"
                      : "text-white hover:bg-blue-100/20 hover:bg-opacity-10"
                  }`}
                >
                  <ReactCountryFlag
                    countryCode={selectedLanguage}
                    svg
                    style={{ width: "1.5em", height: "1.5em" }}
                    className="rounded-sm"
                  />
                  <FiChevronDown
                    className={`transition-transform duration-300 ${
                      isHoveringLanguage ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`absolute right-0 mt-0 w-56 bg-white rounded-xl shadow-xl z-50 border border-gray-100 transition-all duration-300 origin-top ${
                    isHoveringLanguage
                      ? "scale-y-100 opacity-100"
                      : "scale-y-95 opacity-0 pointer-events-none"
                  }`}
                  onMouseEnter={() => setIsHoveringLanguage(true)}
                  onMouseLeave={() => setIsHoveringLanguage(false)}
                >
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`w-full text-left px-4 py-3 text-lg flex items-center space-x-3 transition-colors duration-200 ${
                        selectedLanguage === language.code
                          ? "bg-[#00BCFF]/10 text-[#00BCFF]"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                      onClick={() => setSelectedLanguage(language.code)}
                    >
                      <ReactCountryFlag
                        countryCode={language.countryCode}
                        svg
                        style={{ width: "1.5em", height: "1.5em" }}
                        className="rounded-sm"
                      />
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Button */}
            <button
              onClick={() => setShowContactForm(true)}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 ${
                scrolled
                  ? "bg-[#123B65] text-white hover:bg-[#f38021f5] hover:shadow-lg"
                  : "bg-[#123B65] text-white hover:bg-[#f38021f5] hover:shadow-lg"
              }`}
            >
              <FiMail className="text-xl" />
              <span>Book Meeting</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            className={`md:hidden bg-white h-screen shadow-xl transition-all duration-500 ${
              mobileMenuOpen
                ? "max-h-screen overflow-y-scroll opacity-100"
                : "max-h-0 opacity-0 overflow-y-scroll"
            }`}
          >
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.path}
                    href={item.path}
                    className="flex items-center space-x-4 text-lg font-medium text-gray-800 py-2 border-b border-gray-100 hover:text-[#00BCFF] transition-colors duration-300"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span className="text-[#00BCFF]">{item.icon}</span>
                    <span>{item.label}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-4 pt-4 border-t border-gray-200">
                <h4 className="text-gray-500 text-xl mb-4 font-medium">
                  Select Language
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-lg ${
                        selectedLanguage === language.code
                          ? "bg-[#00BCFF]/10 text-[#00BCFF] border border-[#00BCFF]/20"
                          : "bg-gray-50 text-gray-700 hover:bg-gray-100"
                      }`}
                      onClick={() => {
                        setSelectedLanguage(language.code);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <ReactCountryFlag
                        countryCode={language.countryCode}
                        svg
                        style={{ width: "1.5em", height: "1.5em" }}
                        className="rounded-sm"
                      />
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <button
                onClick={() => {
                  setShowContactForm(true);
                  setMobileMenuOpen(false);
                }}
                className="w-full mt-2 px-6 py-4 bg-[#00BCFF] text-white rounded-xl text-xl font-medium flex items-center justify-center space-x-3 hover:bg-blue-600 transition-colors duration-300"
              >
                <FiMail className="text-2xl" />
                <span>Contact Us</span>
              </button>
            </div>
          </div>
        )}
      </header>
      <ContactForm
        show={showContactForm}
        onClose={() => setShowContactForm(false)}
        onSubmit={handleContactSubmit}
      />
    </>
  );
};

export default Header;
