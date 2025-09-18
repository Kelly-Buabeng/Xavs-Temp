import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin, Send } from "lucide-react";
import Link from "next/link";
import { FooterProps } from "../../types";

export default function Footer({ services }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              XAVS TECH
            </h1>
            <p className="mt-4 text-gray-300 max-w-md">
              Leading the digital transformation in Africa through AI, cybersecurity, and cloud innovation.
            </p>
            
            <div className="mt-6 space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">Accra, Ghana</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">godfredquarm123@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-blue-400 mr-3" />
                <span className="text-gray-300">+233 54 540 5939</span>
              </div>
            </div>
            
            <div className="flex mt-6 space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-500 transition">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-500 transition">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-blue-400 transition">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-red-500 transition">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Explore
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {["About Us", "Bookmarks", "Sign Up"].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-gray-300 hover:text-white transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Support
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {["Contact Us", "Help Center", "Store Pickup", "Accessibility"].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-gray-300 hover:text-white transition">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Services
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-blue-500"></span>
            </h3>
            <ul className="space-y-3">
              {services.map((service, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-gray-300 hover:text-white transition">
                    {service.heading}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-16 pt-10 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold">Stay Updated</h3>
              <p className="text-gray-300 mt-2">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white w-full"
              />
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center justify-center transition">
                <span>Subscribe</span>
                <Send className="ml-2 h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} XAVS Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}