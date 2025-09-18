"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function MainNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300
        ${isScrolled
          ? "bg-white dark:bg-black border-gray-200 dark:border-gray-800 shadow-md"
          : "bg-white/30 dark:bg-black/30 backdrop-blur-md border-transparent"
        }`}
    >
      <div className="flex justify-between items-center px-6 lg:px-20 py-4">
        {/* Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-black dark:text-white">XAVS</span>
          <span className="text-blue-500">LAB</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
          <Link href="/services" className="hover:text-blue-500 transition-colors">
            Services
          </Link>
          <Link href="/company/about-us" className="hover:text-blue-500 transition-colors">
            About Us
          </Link>
          <Link href="/company/contact-us" className="hover:text-blue-500 transition-colors">
            Contact Us
          </Link>
          <Link href="/company/careers" className="hover:text-blue-500 transition-colors">
            Careers
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-gray-700 dark:text-gray-300"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden flex flex-col gap-3 px-6 py-4 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800"
          >
            <Link href="/" className="py-2 hover:text-blue-500">
              Home
            </Link>
            <Link href="/services" className="py-2 hover:text-blue-500">
              Services
            </Link>
            <Link href="/company/about-us" className="py-2 hover:text-blue-500">
              About Us
            </Link>
            <Link href="/company/contact-us" className="py-2 hover:text-blue-500">
              Contact Us
            </Link>
            <Link href="/company/careers" className="py-2 hover:text-blue-500">
              Careers
            </Link>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
