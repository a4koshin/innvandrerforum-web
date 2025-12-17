import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";
import { Navigations } from "@/constants/data";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand/About Column */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 flex-shrink-0">
                <Image
                  src="/logo.png"
                  alt="logo"
                  fill
                  priority
                  className="object-contain"
                  sizes="(max-width: 768px) 48px, 48px"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Innvandrerforum
              </span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mt-4">
              Dedicated to supporting and empowering immigrant communities
              through collaboration, resources, and innovative projects.
            </p>
            <div className="flex space-x-4 pt-4">
              <a
                href="https://www.facebook.com/InnvandreriOstfold"
                className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter className="w-5 h-5" />
              </a> */}
              <a
                href="https://www.instagram.com/innvandrerforumostfold/"
                className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="p-2 bg-blue-800 rounded-lg hover:bg-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-5 h-5" />
              </a> */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {Navigations.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className="flex items-center text-blue-100 hover:text-white transition-colors group py-1"
                  >
                    <FaArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    <span className="truncate">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-blue-700">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-5 h-5 text-gray-100 mt-1 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Underhaugsgata
                  {/* <br /> */} 3, 1607 Fredrikstad
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhone className="w-5 h-5 text-gray-100 flex-shrink-0 rotate-90" />
                <a
                  href="tel:+4712345678"
                  className="text-blue-100 hover:text-white transition-colors text-sm"
                >
                  + 47 484 60 886
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="w-5 h-5 text-gray-100 flex-shrink-0" />
                <a
                  href="mailto:innvandrerforumiostfold@gmail.com"
                  className="text-blue-100 hover:text-white transition-colors text-sm break-all"
                >
                  innvandrerforumiostfold@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider & Bottom Section */}
        <div className="border-t border-blue-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm text-center md:text-left">
              © {currentYear} Innvandrerforum Østfold. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-sm">
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
