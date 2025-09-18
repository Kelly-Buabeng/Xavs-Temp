"use client";

import BotIcon from "@/components/bot";
import { services } from "@/components/data";
import Footer from "@/components/footer";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [activeLocation, setActiveLocation] = useState("Accra");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen dark:bg-gradient-to-br dark:from-black dark:to-gray-900 bg-gradient-to-br from-blue-50 to-white text-gray-900 dark:text-white relative overflow-x-hidden">
      {/* Floating Bot Icon */}
      <div className="fixed right-0 top-1/2 flex z-50">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <div
        className="h-64 flex items-center justify-center bg-cover bg-center relative transition-opacity duration-1000"
        style={{ backgroundImage: `url('/image3.jpg')`, backgroundAttachment: "fixed" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-black/60 to-blue-700/60 backdrop-blur-sm"></div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center p-8 z-10 relative"
        >
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg tracking-tight">
            Contact Us
          </h1>
          <p className="text-lg mt-4 text-blue-100 font-medium">
            We'd love to hear from you!
          </p>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="dark:text-gray-200 text-gray-700 max-w-3xl mx-auto text-lg">
            Have questions or want to discuss a project? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div className="rounded-3xl bg-white/70 dark:bg-gray-900/60 shadow-xl p-8 backdrop-blur-md border border-blue-100 dark:border-gray-800">
              <h2 className="text-2xl font-bold text-blue-600 mb-6">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 shadow-md">
                    <Phone className="text-blue-500 h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 shadow-md">
                    <Mail className="text-blue-500 h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-400">hello@xavstech.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4 shadow-md">
                    <MapPin className="text-blue-500 h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">123 Tech Street, Accra, Ghana</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="pt-6">
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" aria-label="Facebook" className="bg-gradient-to-tr from-blue-500 to-blue-700 p-3 rounded-full hover:scale-110 transition shadow-lg text-white">
                    <Facebook className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="Twitter" className="bg-gradient-to-tr from-blue-400 to-blue-600 p-3 rounded-full hover:scale-110 transition shadow-lg text-white">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="Instagram" className="bg-gradient-to-tr from-pink-500 to-yellow-400 p-3 rounded-full hover:scale-110 transition shadow-lg text-white">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" aria-label="YouTube" className="bg-gradient-to-tr from-red-500 to-red-700 p-3 rounded-full hover:scale-110 transition shadow-lg text-white">
                    <Youtube className="h-5 w-5" />
                  </a>
                </div>
              </div>

              {/* Location Buttons */}
              <div className="pt-8">
                <h3 className="font-semibold mb-3">Our Locations</h3>
                <div className="flex space-x-3 mb-4">
                  {["Accra", "Nigeria", "UK"].map((loc) => (
                    <button
                      key={loc}
                      onClick={() => setActiveLocation(loc)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                        activeLocation === loc ? "bg-blue-600 text-white shadow-lg" : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                      }`}
                      aria-pressed={activeLocation === loc}
                    >
                      {loc}
                    </button>
                  ))}
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="h-64 rounded-xl overflow-hidden shadow-lg"
                >
                  {/* Example: Google Maps iframe for each location */}
                  {activeLocation === "Accra" && (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61721.31638275849!2d-0.16286549038425105!3d5.623273753349461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b13b0062aad%3A0x75de9717e31b2442!2sAccra%20Mall!5e0!3m2!1sen!2sus!4v1741818998308!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className="rounded-xl border-none"
                      title="Accra Location"
                    />
                  )}
                  {activeLocation === "Nigeria" && (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.484590605551!2d3.379206515334495!3d6.524379525232598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b15a884b5d9%3A0x8c6c9936e5b9b1f6!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1741819000000!5m2!1sen!2sng"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className="rounded-xl border-none"
                      title="Nigeria Location"
                    />
                  )}
                  {activeLocation === "UK" && (
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.50228789864!2d-0.1277585!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333aaaabbb%3A0x1234567890abcdef!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1741819012345!5m2!1sen!2suk"
                      width="100%"
                      height="100%"
                      loading="lazy"
                      className="rounded-xl border-none"
                      title="UK Location"
                    />
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-3xl shadow-2xl dark:shadow-gray-900/80 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border border-blue-100 dark:border-gray-800"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="name"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  autoComplete="email"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-tr from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                aria-live="polite"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-8 p-6 bg-gray-50/80 dark:bg-gray-800/80 rounded-2xl shadow-md"
            >
              <h3 className="font-semibold mb-3">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer services={services} />
    </div>
  );
}
