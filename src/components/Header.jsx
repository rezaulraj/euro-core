import React, { useState, useEffect } from "react";
import ReactCountryFlag from "react-country-flag";
import { FiMenu, FiX, FiChevronDown, FiMail } from "react-icons/fi";
import {
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineInformationCircle,
} from "react-icons/hi";
import { MdOutlineHome } from "react-icons/md";
import { TbUsersPlus } from "react-icons/tb";
import { GrUserWorker } from "react-icons/gr";
import { RiServiceLine } from "react-icons/ri";
import ContactForm from "./ContactForm";
import logo2 from "/eurocore-logo.png?url";
import logo3 from "/eurocore-Dark-BG-logo.png?url";
import { FaCalendarAlt, FaHandsHelping } from "react-icons/fa";
import { FaUsersBetweenLines } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import InfinityTextSlider from "./InfinityTextSlider";

const Header = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("US");
  const [isHoveringLanguage, setIsHoveringLanguage] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const [activeNavItem, setActiveNavItem] = useState("");
  const [scrollingDown, setScrollingDown] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const languages = [
    { code: "US", name: "English", countryCode: "US" },
    // { code: "MT", name: "Malta", countryCode: "MT" },
    // { code: "SI", name: "Serbia", countryCode: "SI" },
    // { code: "HR", name: "Croatia", countryCode: "HR" },
    // { code: "ES", name: "Español", countryCode: "ES" },
  ];

  const navItems = [
    { label: "Home", path: "/", icon: <MdOutlineHome className="text-xl" /> },
    {
      label: "Industries",
      path: "/industries",
      icon: <HiOutlineOfficeBuilding className="text-xl" />,
    },
    {
      label: "Employers",
      path: "/for-employers",
      icon: <GrUserWorker className="text-xl" />,
    },
    {
      label: "Workers & Partners",
      icon: <HiOutlineUserGroup className="text-xl" />,
      subNav: [
        {
          label: "What We Offer",
          icons: <RiServiceLine className="text-white" />,
          path: "/what-we-offer",
        },
        {
          label: "Partnership",
          icons: <FaHandsHelping className="text-white" />,
          path: "/partnership",
        },
        {
          label: "Candidate",
          icons: <FaUsersBetweenLines className="text-white" />,
          path: "/candidate",
        },
      ],
    },
    {
      label: "About Us",
      path: "/about-us",
      icon: <HiOutlineInformationCircle className="text-xl" />,
    },
    {
      label: "Career",
      path: "/career",
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

  
  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(
      (item) =>
        item.path === currentPath ||
        (item.subNav &&
          item.subNav.some((subItem) => subItem.path === currentPath))
    );
    setActiveNavItem(activeItem?.label || "");
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setAtTop(currentScrollY <= 0);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        setScrollingDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleContactSubmit = (formData) => {
    console.log("Form submitted:", formData);
  };

  const toggleMobileSubmenu = (index) => {
    setMobileSubmenuOpen(mobileSubmenuOpen === index ? null : index);
  };

  const isNavItemActive = (item) => {
    return (
      activeNavItem === item.label ||
      (item.subNav &&
        item.subNav.some((subItem) => subItem.path === location.pathname))
    );
  };

  return (
    <>
      <header
        className={`fixed w-full z-50 transition-all duration-500 ${
          scrolled ? "bg-white/80 backdrop-blur-xl shadow-sm" : "bg-transparent"
        }`}
      >
        {atTop && (
          <div className="bg-blue-dark w-full">
            <InfinityTextSlider atTop={atTop} />
          </div>
        )}
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
         
          <a href="/">
            <img src={scrolled ? logo2 : logo3} alt="logo" className="h-6" />
          </a>

         
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

          
          <nav className="hidden md:flex items-center space-x-6 relative">
            {navItems.map((item, idx) => (
              <div key={idx} className="relative group">
                <a
                  href={item.path || "#"}
                  className={`flex items-center space-x-1 text-lg font-medium transition-all duration-300 ${
                    scrolled
                      ? isNavItemActive(item)
                        ? "text-[#F37F21]"
                        : "text-gray-800 hover:text-[#F37F21]"
                      : isNavItemActive(item)
                      ? "text-[#F37F21]"
                      : "text-white hover:text-[#F37F21]"
                  }`}
                  onClick={() => setActiveNavItem(item.label)}
                >
                  {item.icon}
                  <span>{item.label}</span>
                  {item.subNav && (
                    <FiChevronDown className="text-lg font-medium mt-1" />
                  )}
                </a>

                {item.subNav && (
                  <div className="absolute left-0 mt-3 w-60 bg-[#123B65] shadow-xl rounded-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-1 group-hover:translate-y-0 z-40">
                    <ul className="py-3">
                      {item.subNav.map((sub, subIdx) => (
                        <li key={subIdx}>
                          <a
                            href={sub.path}
                            className={`flex items-center space-x-3 px-4 py-2 text-gray-100 hover:bg-[#123b65da] text-lg font-medium hover:text-[#F37F21] transition-colors duration-200 ${
                              location.pathname === sub.path
                                ? "text-[#F37F21]"
                                : ""
                            }`}
                          >
                            {sub.icons}
                            <span>{sub.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          
          <div className="hidden md:flex items-center space-x-2">
           
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
                      : "text-white hover:bg-blue-100/20"
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
                      className={`w-full text-left px-4 py-3 text-lg flex items-center space-x-3 transition-colors duration-200 cursor-pointer ${
                        selectedLanguage === language.code
                          ? "bg-[#F37F21]/10 text-[#F37F21]"
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

          
            <button
              onClick={() => setShowContactForm(true)}
              className={`flex items-center space-x-2 px-6 py-2 rounded-full text-lg font-medium transition-all duration-300 cursor-pointer ${
                scrolled
                  ? "bg-[#f38021f5] text-white hover:bg-[#123B65] hover:shadow-lg"
                  : "bg-[#f38021f5] text-white hover:bg-[#123B65] hover:shadow-lg"
              }`}
            >
              <FaCalendarAlt className="text-xl" />
              <span>Book 1:1 Meeting</span>
            </button>
          </div>
        </div>

    
        {mobileMenuOpen && (
          <div className="md:hidden bg-white h-screen shadow-xl transition-all duration-500 overflow-y-auto">
            <div className="container mx-auto px-4 py-2">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center">
                      <a
                        href={item.path || "#"}
                        className={`flex items-center space-x-4 text-lg font-medium py-2 border-b border-gray-100 transition-colors duration-300 w-full ${
                          isNavItemActive(item)
                            ? "text-[#F37F21]"
                            : "text-gray-800 hover:text-[#F37F21]"
                        }`}
                        onClick={(e) => {
                          if (item.subNav) {
                            e.preventDefault();
                            toggleMobileSubmenu(idx);
                          } else {
                            setMobileMenuOpen(false);
                            setActiveNavItem(item.label);
                          }
                        }}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </a>
                      {item.subNav && (
                        <button
                          onClick={() => toggleMobileSubmenu(idx)}
                          className="p-2 text-gray-800"
                        >
                          <FiChevronDown
                            className={`transition-transform ${
                              mobileSubmenuOpen === idx ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      )}
                    </div>

                    {item.subNav && mobileSubmenuOpen === idx && (
                      <div className="bg-gray-50 rounded-lg my-1">
                        {item.subNav.map((sub, subIdx) => (
                          <a
                            key={subIdx}
                            href={sub.path}
                            className={`flex items-center space-x-3 py-3 font-medium duration-200 text-lg ${
                              location.pathname === sub.path
                                ? "text-[#F37F21]"
                                : "text-gray-800 hover:text-[#F37F21]"
                            }`}
                            onClick={() => {
                              setMobileMenuOpen(false);
                              setActiveNavItem(item.label);
                            }}
                          >
                            {sub.icons}
                            <span>{sub.label}</span>
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
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
                          ? "bg-[#00BCFF]/10 text-[#F37F21] border border-[#F37F21]/20"
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
                className="w-full mt-2 px-6 py-4 bg-[#F37F21] hover:bg-[#123B65] text-white rounded-xl text-xl font-medium flex items-center justify-center space-x-3 cursor-pointer transition-colors duration-300"
              >
                <FiMail className="text-2xl" />
                <span>Book 1:1 Meeting</span>
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
