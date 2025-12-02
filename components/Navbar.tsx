"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigations } from "@/constants/data";
import { RiMenuFill, RiArrowDownSLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo with improved hover effect */}
          <Link href="/" className="flex items-center space-x-2 group relative">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src="/logo.png"
                width={scrolled ? 60 : 70}
                height={scrolled ? 60 : 70}
                priority
                alt="Logo"
                className="transition-all duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-[#1C427A] to-[#E73535] bg-clip-text text-transparent">
              Innvandrerforum I Østfold
            </span>
          </Link>

          {/* Desktop Navigation with active states */}
          <nav className="hidden lg:flex items-center space-x-1">
            {Navigations.map((item) => {
              const isActive = pathname === item.href;
              return (
                <div key={item.id} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center space-x-1 ${
                      isActive
                        ? "text-[#E73535] font-semibold"
                        : "text-[#1C427A] hover:text-[#E73535]"
                    }`}
                  >
                    <span>{item.name}</span>
                    {/* {item.submenu && (
                      <RiArrowDownSLine className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                    )} */}
                  </Link>

                  {/* Active indicator */}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-[#E73535] to-transparent" />
                  )}

                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E73535]/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-200 pointer-events-none" />
                </div>
              );
            })}
          </nav>

          {/* Mobile Menu Button - Improved */}
          <div className="flex items-center lg:hidden space-x-2">
            <button
              onClick={toggleBar}
              className="relative p-3 rounded-xl bg-gradient-to-br from-white to-gray-50 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#E73535]/30"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              <div className="relative w-6 h-6">
                {isOpen ? (
                  <IoMdClose className="w-6 h-6 text-[#E73535] transition-transform duration-300 rotate-90" />
                ) : (
                  <RiMenuFill className="w-6 h-6 text-[#1C427A] transition-transform duration-300" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation - Enhanced */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-96 opacity-100 visible"
            : "max-h-0 opacity-0 invisible"
        }`}
      >
        <div className="bg-gradient-to-b from-white to-gray-50 border-t border-gray-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4">
            {/* Mobile Navigation Links */}
            <nav className="flex flex-col">
              {Navigations.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className={`flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? "bg-red-500/60 text-white font-semibold"
                        : "text-blue-900 hover:bg-red-50/70"
                    }`}
                  >
                    <span>{item.name}</span>
                    {/* {item.submenu && <RiArrowDownSLine className="w-5 h-5" />} */}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
