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
      className={`fixed top-0 z-50 w-full transition-all duration-300 border-b
        ${isScrolled ? "bg-white border-gray-200" : "bg-white/80 backdrop-blur-md border-transparent"}
      `}
    >
      <motion.nav
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-gray-900">XAVS</span>
          <span className="text-blue-500">LAB</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 font-medium text-gray-700">
          <Link
            href="/company/about-us"
            className="hover:text-gray-900 hover:underline underline-offset-4 transition"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-gray-900 hover:underline underline-offset-4 transition"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="hover:text-gray-900 hover:underline underline-offset-4 transition"
          >
            Blog
          </Link>
          <Link
            href="/company/contact-us"
            className="hover:text-gray-900 hover:underline underline-offset-4 transition"
          >
            Contact Us
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/company/contact-us"
            className="border border-gray-900 px-5 py-2 rounded-xl font-medium hover:bg-gray-900 hover:text-white transition"
          >
            Request a quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="md:hidden flex flex-col gap-4 px-6 py-6 bg-white border-t border-gray-200"
          >
            <Link href="/" className="py-2 text-gray-700 hover:text-gray-900 hover:underline">
              Home
            </Link>
            <Link href="/company/about-us" className="py-2 text-gray-700 hover:text-gray-900 hover:underline">
              About Us
            </Link>
            <Link href="/services" className="py-2 text-gray-700 hover:text-gray-900 hover:underline">
              Services
            </Link>
            <Link href="/blog" className="py-2 text-gray-700 hover:text-gray-900 hover:underline">
              Blog
            </Link>
            <Link href="/company/contact-us" className="py-2 text-gray-700 hover:text-gray-900 hover:underline">
              Contact Us
            </Link>
            <Link
              href="/company/contact-us"
              className="mt-4 border border-gray-900 px-5 py-2 rounded-xl font-medium text-center hover:bg-gray-900 hover:text-white transition"
            >
              Request a quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
