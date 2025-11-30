"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigations } from "@/constants/data";
import { RiMenuFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg bg-white/10"
          : "bg-white/80 backdrop-blur-sm"
      }`}
      style={{ width: "calc(100% - 2rem)", maxWidth: "80rem" }} // 2rem padding on sides, max-w-7xl
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center group" aria-label="Home">
            <div className="relative transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/logo.png"
                width={70}
                height={70}
                alt="Company Logo"
                className="drop-shadow-sm"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {Navigations.map((nav) => {
              const isActive = pathname === nav.href;
              return (
                <Link
                  key={nav.id}
                  href={nav.href}
                  className={`relative font-medium transition-all duration-300 py-2 px-1 ${
                    isActive
                      ? "text-[#E73535] font-semibold"
                      : "text-[#052453] hover:text-[#E73535]"
                  }`}
                >
                  {nav.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E73535] rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleBar}
            className="lg:hidden p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#E73535] focus:ring-opacity-50"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <IoMdClose className="w-6 h-6 text-[#052453]" />
            ) : (
              <RiMenuFill className="w-6 h-6 text-[#052453]" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden fixed inset-0 bg-white transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ top: "0" }} // Start from top for mobile
      >
        <div className="flex flex-col h-full bg-white">
          {/* Mobile Header */}
          <div className="flex justify-between items-center h-16 px-4 border-b border-gray-100">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <Image
                src="/logo.png"
                width={50}
                height={50}
                alt="Company Logo"
              />
            </Link>
            <button
              onClick={toggleBar}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-gray-100"
              aria-label="Close menu"
            >
              <IoMdClose className="w-6 h-6 text-[#052453]" />
            </button>
          </div>

          {/* Mobile Navigation Links */}
          <nav className="flex flex-col flex-1 px-6 py-8 space-y-4">
            {Navigations.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.id}
                  href={item.href}
                  className={`py-4 px-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                    isActive
                      ? "bg-[#E73535] text-white shadow-lg"
                      : "text-[#052453] hover:bg-gray-50 hover:text-[#E73535]"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
