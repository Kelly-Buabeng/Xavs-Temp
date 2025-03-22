"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import React, { useState, useEffect } from "react";
// import { useDarkMode } from "./context/themeContext";

export default function MainNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  // const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`p-3 shadow-md dark:text-white text-black dark:border-b dark:border-gray-700 z-30 ${
        isScrolled ? "bg-white dark:bg-black" : "backdrop-blur-md"
      } w-full transition-all duration-300 fixed top-0`}
    >
      <div className="flex justify-between items-center px-4 lg:px-20">
        <div className="flex items-center gap-10">
          {/* Brand Section */}
          <div>
            <Link href="/">
              <h1 className="text-lg font-bold text-black md:text-white">
                XAVS<span className="text-blue-500">LAB</span>
              </h1>
            </Link>
          </div>

          {/* Desktop Links */}
          <ul className="hidden lg:flex gap-1 relative text-white">
            <div>
              <Link
                href="/services"
                className={`block px-4 py-2 text-sm hover:bg-blue-700  ${
                  isScrolled
                    ? "dark:text-white text-black hover:text-white"
                    : "dark:text-white"
                }`}
              >
                Services
              </Link>
            </div>

            {/* Company Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setCompanyDropdown(true)}
              onMouseLeave={() => setCompanyDropdown(false)}
            >
              <button
                className={`block px-4 py-2 text-sm hover:bg-blue-700  ${
                  isScrolled
                    ? "dark:text-white text-black hover:text-white"
                    : "dark:text-white"
                }`}
              >
                Company
              </button>
              {companyDropdown && (
                <div className="absolute left-0 w-[500px] bg-white dark:bg-black shadow-lg rounded-md grid grid-cols-2">
                  <div>
                    <Link
                      href="/company/contact-us"
                      className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-950"
                    >
                      <h1 className="dark:text-white text-black">Contact Us</h1>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Iusto, expedita.
                      </p>
                    </Link>
                  </div>
                  <Link
                    href="/company/about-us"
                    className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-950"
                  >
                    <h1 className="dark:text-white text-black">About Us</h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto, expedita.
                    </p>
                  </Link>
                  <Link
                    href="/company/careers"
                    className="block px-4 py-2 text-sm hover:bg-gray-200 dark:hover:bg-gray-950"
                  >
                    <h1 className="dark:text-white text-black">Careers</h1>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Iusto, expedita.
                    </p>
                  </Link>
                </div>
              )}
            </div>
          </ul>
        </div>

        {/* Action Section */}
        <div className="flex gap-5 items-center dark:text-gray-400">
          {/* Search Bar */}
          <div className="hidden lg:flex justify-center items-center rounded-md dark:bg-searchColor border-searchColor border-2 px-2 h-10 w-64">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 bg-transparent outline-none text-sm px-2"
            />
            <button>
              <Search />
            </button>
          </div>

          {/* Dark Mode Toggle */}
          {/* <div className="relative w-6 h-10 flex items-center justify-center">
            {darkMode ? (
              <Sun
                onClick={toggleDarkMode}
                className="cursor-pointer text-yellow-500 hover:text-yellow-600 transition-transform duration-300"
              />
            ) : (
              <Moon
                onClick={toggleDarkMode}
                className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-gray-900 transition-transform duration-300"
              />
            )}
          </div> */}

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex items-center text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <div className="space-y-1">
              <span className="block h-0.5 w-6 bg-current"></span>
              <span className="block h-0.5 w-6 bg-current"></span>
              <span className="block h-0.5 w-6 bg-current"></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden flex flex-col mt-4 space-y-2 px-4">
          <Link href="/" className="text-sm p-2 rounded-md">
            Home
          </Link>

          {/* Services Dropdown */}
          <button
            onClick={() => setServicesDropdown((prev) => !prev)}
            className="text-sm p-2 rounded-md flex justify-between items-center"
          >
            Services
            <span>{servicesDropdown ? "▲" : "▼"}</span>
          </button>
          {servicesDropdown && (
            <div className="flex flex-col space-y-1 pl-4">
              <Link href="/services/web-development" className="text-sm p-2">
                Web Development
              </Link>
              <Link href="/services/mobile-apps" className="text-sm p-2">
                Mobile Apps
              </Link>
              <Link href="/services/ai-solutions" className="text-sm p-2">
                AI Solutions
              </Link>
            </div>
          )}

          {/* Company Dropdown */}
          <button
            onClick={() => setCompanyDropdown((prev) => !prev)}
            className="text-sm p-2 rounded-md flex justify-between items-center"
          >
            Company
            <span>{companyDropdown ? "▲" : "▼"}</span>
          </button>
          {companyDropdown && (
            <div className="flex flex-col space-y-1 pl-4">
              <Link href="/company/contact-us" className="text-sm p-2">
                Contact Us
              </Link>
              <Link href="/about-us" className="text-sm p-2">
                About Us
              </Link>
              <Link
                href="/company/careers"
                className="text-sm p-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Careers
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
