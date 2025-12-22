"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Navigations } from "@/constants/data";
import { RiMenuFill, RiArrowDownSLine } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsOpen(false);
    setOpenSub(null);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-2"
          : "bg-white/10 backdrop-blur-sm py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo.png"
              width={scrolled ? 60 : 70}
              height={scrolled ? 60 : 70}
              priority
              alt="Logo"
            />
            <span className="hidden sm:block text-xl font-bold bg-gradient-to-r from-[#1C427A] to-[#E73535] bg-clip-text text-transparent">
              Innvandrerforum I Østfold
            </span>
          </Link>

          {/* ================= DESKTOP NAV ================= */}
          <nav className="hidden lg:flex items-center space-x-1">
            {Navigations.map((item) => {
              const isActive =
                pathname === item.href ||
                item.children?.some((c) => pathname === c.href);

              return (
                <div key={item.id} className="relative group">
                  <Link
                    href={item.href}
                    className={`px-4 py-2 rounded-lg flex items-center gap-1 transition-all ${
                      isActive
                        ? "text-[#E73535] font-semibold"
                        : "text-[#1C427A] hover:text-[#E73535]"
                    }`}
                  >
                    {item.name}
                    {item.children && <RiArrowDownSLine />}
                  </Link>

                  {/* Dropdown */}
                  {item.children && (
                    <div
                      className="absolute left-0 top-full mt-2 w-56 rounded-xl bg-white border border-gray-200 shadow-xl
                                 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                                 transition-all duration-200"
                    >
                      <div className="py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.id}
                            href={child.href}
                            className={`block px-4 py-2 text-sm transition-colors ${
                              pathname === child.href
                                ? "bg-red-50 text-[#E73535] font-medium"
                                : "text-[#1C427A] hover:bg-red-50"
                            }`}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-3 rounded-xl bg-white shadow border border-gray-200"
          >
            {isOpen ? (
              <IoMdClose className="w-6 h-6 text-[#E73535]" />
            ) : (
              <RiMenuFill className="w-6 h-6 text-[#1C427A]" />
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE NAV ================= */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-white border-t border-gray-200 shadow-lg">
          <nav className="px-4 py-4 space-y-1">
            {Navigations.map((item) => {
              const isActive =
                pathname === item.href ||
                item.children?.some((c) => pathname === c.href);

              const isSubOpen = openSub === item.id;

              return (
                <div key={item.id}>
                  <button
                    onClick={() =>
                      item.children
                        ? setOpenSub(isSubOpen ? null : item.id)
                        : null
                    }
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition ${
                      isActive
                        ? "bg-red-500 text-white font-semibold"
                        : "text-blue-900 hover:bg-red-50/70"
                    }`}
                  >
                    {item.name}
                    {item.children && (
                      <RiArrowDownSLine
                        className={`transition-transform ${
                          isSubOpen ? "rotate-180" : ""
                        }`}
                      />
                    )}
                  </button>

                  {/* Mobile dropdown */}
                  {item.children && isSubOpen && (
                    <div className="ml-6 mt-1 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.id}
                          href={child.href}
                          className="block px-4 py-2 text-sm rounded-md text-blue-900 hover:bg-red-50"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
