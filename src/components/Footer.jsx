import React, { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaChevronRight,
  FaCheckCircle,
  FaTiktok,
  FaYoutube,
  FaPinterest,
  FaCalendar,
} from "react-icons/fa";
import logo3 from "/eurocore-Dark-BG-logo.png?url";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "For Employers", href: "/for-employers" },
    { name: "What We Offer", href: "/what-we-offer" },
    { name: "Partner", href: "/partnership" },
    { name: "About Us", href: "/about-us" },
    { name: "Join Us", href: "/career" },
    { name: "Blogs", href: "/blogs" },
  ];

  const services = [
    "Agriculture",
    "Automotive / Car / Mechanic",
    "Care Homes / Elderly Care",
    "Food Shop / Restaurant",
    "Car Wash & Servicing",
    "Fruit Picking / Harvesting",
    "See More...",
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6 ">
            <a href="/">
              <img src={logo3} alt="" className="h-14" />
            </a>
            <p className="text-gray-400 mt-4">
              Partnering with ambitious organizations in Europe, APAC, and MENA
              to build future-ready digital teams.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/107980266/admin/dashboard/"
                target="_blank"
                className="text-gray-400 hover:text-[#F37F21] transition-colors"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href="https://x.com/cloudkonektion
"
                target="_blank"
                className="text-gray-400 hover:text-[#F37F21] transition-colors"
              >
                <FaXTwitter className="text-xl" />
              </a>
              <a
                href="https://www.facebook.com/cloudkonektion/"
                target="_blank"
                className="text-gray-400 hover:text-[#F37F21] transition-colors"
              >
                <FaFacebook className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/cloudkonektion/"
                target="_blank"
                className="text-gray-400 hover:text-[#F37F21] transition-colors"
              >
                <FaInstagram className="text-xl" />
              </a>

              <a
                href="https://www.youtube.com/@cloudkonektion0"
                target="_blank"
                className="text-gray-400 hover:text-[#F37F21] transition-colors"
              >
                <FaYoutube className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center text-gray-400 hover:text-[#F37F21] transition-colors"
                  >
                    <FaChevronRight className="text-xs mr-2 text-[#F37F21]" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Industries</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="industries"
                    className="flex items-center text-gray-400 hover:text-[#F37F21] transition-colors"
                  >
                    <FaChevronRight className="text-xs mr-2 text-[#F37F21]" />
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="text-[#F37F21] mt-1 mr-3" />
                <p className="text-gray-400">
                  60, ST. JOSEPH STREET,
                  <br />
                  ISLA, Malta
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <FaCalendar className="h-5 w-5 text-[#F37F21]" />
                </div>
                <div className="ml-3">
                  <p className="text-gray-400">Mon-Fri, 9am-5pm PST</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-[#F37F21] mr-3" />
                <a
                  href="mailto:info@cloudkonektion.com"
                  className="text-gray-400 hover:text-[#F37F21] transition-colors"
                >
                  carrer@eurocore.co
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Euro Core. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="/terms-and-conditions"
              className="text-gray-500 hover:text-[#F37F21] text-sm transition-colors"
            >
              Terms & Condition
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
