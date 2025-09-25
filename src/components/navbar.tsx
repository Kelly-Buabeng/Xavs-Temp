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
      className={`fixed top-0 z-50 w-full transition-all duration-300 border-b-2 font-sans
        ${isScrolled ? "bg-zinc-950 border-zinc-800" : "bg-zinc-950/90 backdrop-blur-md border-transparent"}
      `}
    >
      <motion.nav
        className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Brand */}
        <Link href="/" className="text-2xl font-extrabold tracking-tight">
          <span className="text-white">XAVS</span>
          <span className="text-blue-500">LAB</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 font-semibold text-white">
          <Link
            href="/company/about-us"
            className="hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:rounded px-2 py-1 transition-all duration-300"
          >
            About Us
          </Link>
          <Link
            href="/services"
            className="hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:rounded px-2 py-1 transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="/blog"
            className="hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:rounded px-2 py-1 transition-all duration-300"
          >
            Blog
          </Link>
          <Link
            href="/company/contact-us"
            className="hover:text-blue-400 focus:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-400/30 focus:rounded px-2 py-1 transition-all duration-300"
          >
            Contact Us
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <Link
            href="/company/contact-us"
            className="bg-blue-500 text-white border-2 border-blue-500 px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 hover:border-blue-400 focus:bg-blue-400 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/30 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Request a quote
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-zinc-800 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
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
            className="md:hidden flex flex-col gap-4 px-6 py-6 bg-zinc-900 border-t-2 border-zinc-800"
          >
            <Link 
              href="/" 
              className="py-3 px-4 text-white hover:text-blue-400 hover:bg-zinc-800 focus:text-blue-400 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400/30 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/company/about-us" 
              className="py-3 px-4 text-white hover:text-blue-400 hover:bg-zinc-800 focus:text-blue-400 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400/30 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/services" 
              className="py-3 px-4 text-white hover:text-blue-400 hover:bg-zinc-800 focus:text-blue-400 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400/30 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/blog" 
              className="py-3 px-4 text-white hover:text-blue-400 hover:bg-zinc-800 focus:text-blue-400 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400/30 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <Link 
              href="/company/contact-us" 
              className="py-3 px-4 text-white hover:text-blue-400 hover:bg-zinc-800 focus:text-blue-400 focus:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400/30 rounded-lg transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              href="/company/contact-us"
              className="mt-4 bg-blue-500 text-white border-2 border-blue-500 px-6 py-3 rounded-xl font-semibold text-center hover:bg-blue-400 hover:border-blue-400 focus:bg-blue-400 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/30 transition-all duration-300 shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Request a quote
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}