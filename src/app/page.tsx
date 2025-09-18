"use client";

import BotIcon from "@/components/bot";
import { services } from "@/components/data";
import Footer from "@/components/footer";
import { motion } from "framer-motion";
import {
  Rocket,
  ShoppingCart,
  Banknote,
  Ambulance,
  Handshake,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const images = ["/bg.jpg", "/bg-2.jpg", "/bg-3.jpg", "/bg-4.jpg"];

export default function Home() {
  const [activeService, setActiveService] = useState(services[0]);
  const [serviceOptions, setServiceOptions] = useState(services[0].options);
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fade, setFade] = useState(true);

  const text =
    "AI-Powered Solutions for Smarter, Secure, and Scalable Businesses";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  // Background image rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFade(true);
      }, 500);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // Typewriter effect
  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  // Blinking cursor
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);


  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950">
      {/* Floating Bot Icon */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex z-50 drop-shadow-xl">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <motion.section
        className={`h-[90vh] flex items-center justify-start bg-cover bg-center relative transition-opacity duration-1000 ${fade ? "opacity-100" : "opacity-0"}`}
        style={{ backgroundImage: `url('${currentImage}')` }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="backdrop-blur-md bg-black/50 absolute top-0 w-full h-full z-10 rounded-b-3xl" />
        <div className="md:px-32 px-6 z-20 w-full md:w-1/2 flex flex-col gap-8">
          <motion.h1
            className="md:text-6xl text-4xl font-extrabold text-white drop-shadow-lg tracking-tight"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {displayText}
            <span className={blink ? "inline" : "invisible"} aria-label="blinking cursor">|</span>
          </motion.h1>
          <motion.p
            className="text-2xl mt-2 text-gray-200 max-w-xl font-medium drop-shadow"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We automate, secure, and optimize businesses with cutting-edge AI, cybersecurity, and cloud solutions.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 mt-4"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/company/about-us">
              <button className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300">
                Get Started
              </button>
            </Link>
            <Link href="/company/contact-us">
              <button className="border-2 border-blue-500 text-blue-600 px-8 py-3 rounded-full font-semibold bg-white/80 dark:bg-gray-900/80 shadow-lg hover:bg-blue-600 hover:text-white hover:border-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300">
                Book a Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section – Clean & Modern */}

      {/* About Us Section – Clean & Modern */}
      <motion.section
        className="py-28 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <motion.div
            className="h-[420px] rounded-3xl overflow-hidden shadow-xl border-4 border-blue-100 dark:border-gray-800"
            style={{
              backgroundImage: "url('/about-pic.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            aria-label="About XAVS Technologies image"
          />

          {/* Content */}
          <div>
            <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
              About Us
            </h2>
            <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-12">
              XAVS Technologies is a Ghanaian-based <strong>AI and cybersecurity company</strong> helping businesses 
              automate, secure, and scale with innovative solutions in AI, cloud, and next-gen security. 
              Our mission is to empower enterprises across Africa and beyond with future-ready technology.
            </p>

            {/* Key Points (icon + text) */}
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { icon: "⚡", title: "AI Automation" },
                { icon: "🛡️", title: "Cybersecurity" },
                { icon: "☁️", title: "Cloud Solutions" },
                { icon: "🏦", title: "Industry-Specific AI" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-gray-50/80 dark:bg-gray-800/80 rounded-2xl p-5 shadow hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <p className="font-semibold text-gray-800 dark:text-gray-200">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link href="/company/contact-us">
              <button className="mt-12 px-10 py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all">
                Book a Demo
              </button>
            </Link>
          </div>
        </div>
      </motion.section>


      {/* Our Services Section */}

      <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-blue-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent rounded-b-3xl" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mb-20">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-xl tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses with automation, cybersecurity, and scalable solutions designed for the future.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mx-auto relative z-10 gap-10 max-w-7xl">
          {/* Sidebar */}
          <div className="w-full md:w-1/2 lg:w-1/3 bg-white/90 dark:bg-gray-950/90 md:px-16 md:py-16 px-4 py-10 flex flex-col gap-8 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800">
            <div className="flex justify-end w-full">
              <h2 className="text-5xl font-bold text-gray-800 dark:text-gray-300 text-right leading-tight">
                OUR <br /> SERVICES
              </h2>
            </div>
            <ul className="mt-6 space-y-3">
              {services.map((service, id) => (
                <li
                  key={id}
                  className={`cursor-pointer text-lg font-semibold px-4 py-2 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-400 ${
                    activeService === service
                      ? "text-black dark:text-white border-l-4 border-pink-500 bg-pink-50/40 dark:bg-pink-900/20 shadow"
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-100/60 dark:hover:bg-gray-800/60"
                  }`}
                  onClick={() => {
                    setActiveService(service);
                    setServiceOptions(service.options);
                  }}
                  tabIndex={0}
                  aria-label={`Show ${service.heading} services`}
                >
                  {service.heading}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Content */}
          <div className="w-full md:w-2/3 lg:w-2/3 p-6 md:p-14 bg-white/95 dark:bg-gray-950/95 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-6">
            <h2 className="text-3xl font-bold dark:text-gray-200 mb-2">
              {activeService.heading}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              What we offer to our clients is a comprehensive suite of services, including:
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
              {serviceOptions.map((serviceOption, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-100 dark:border-gray-800 rounded-2xl shadow-md dark:shadow-gray-950 bg-white/90 dark:bg-gray-950/90 hover:scale-[1.03] hover:shadow-xl transition-all duration-200"
                >
                  <h3 className="font-bold text-lg dark:text-gray-200">
                    {serviceOption.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-base mt-2">
                    {serviceOption.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}

      <motion.section className="py-20 bg-gray-100/90 dark:bg-gray-950/90 text-gray-800 dark:text-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-700 dark:text-gray-300 tracking-tight">
            INDUSTRIES WE SERVE – WHO NEEDS XAVS?
          </h2>
          <p className="mb-14 max-w-xl mx-auto text-lg">
            XAVS Technologies serves a wide range of industries with our cutting-edge AI, cybersecurity, and cloud solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-10">
            {[
              {
                icon: <Rocket size={60} color="red" />,
                title: "SMEs & Startups",
                description: "Scale fast with AI-powered automation",
                borderColor: "border-red-600",
              },
              {
                icon: <ShoppingCart size={60} color="#1cb039" />,
                title: "E-commerce & Retail",
                description: "Optimize customer experience & security",
                borderColor: "border-green-600",
              },
              {
                icon: <Banknote size={60} color="blue" />,
                title: "Finance & Banking",
                description: "AI-driven fraud detection & cybersecurity compliance",
                borderColor: "border-blue-600",
              },
              {
                icon: <Ambulance size={60} color="#d7bf1d" />,
                title: "Healthcare",
                description: "Secure patient data & automate operations with AI",
                borderColor: "border-yellow-600",
              },
              {
                icon: <Handshake size={60} color="#c11ab3" />,
                title: "Enterprise & Government",
                description: "Advanced AI & cloud security for critical infrastructure",
                borderColor: "border-pink-500",
              },
            ].map(({ icon, title, description, borderColor }, i) => (
              <div
                key={i}
                className={`p-10 bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-xl w-72 h-72 flex flex-col justify-center items-center border-b-4 ${borderColor} hover:scale-105 hover:shadow-2xl transition-all`}
              >
                <div className="mb-8">{icon}</div>
                <h3 className="text-2xl font-bold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link
              href="/company/contact-us"
              className="inline-block bg-gradient-to-r from-blue-600 to-blue-400 hover:from-blue-700 hover:to-blue-500 transition text-white rounded-full px-10 py-4 font-semibold shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Contact Us Section */}

      <motion.section
        className="py-24 bg-gradient-to-br from-blue-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="bg-white/90 dark:bg-gray-800/90 p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
              CONTACT US
            </h2>
            <div className="space-y-7">
              <div className="flex items-center gap-5">
                <Mail size={28} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">support@xavstech.com</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <MapPin size={28} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <Phone size={28} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">(+233) XXX-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-5">
                <MessageCircle size={28} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Live Chat</p>
                  <p className="text-gray-600 dark:text-gray-400">Available 24/7 for business inquiries.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white/90 dark:bg-gray-800/90 p-10 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-4 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 dark:bg-gray-900/80 bg-gray-50/80 dark:text-white text-gray-900 shadow-sm"
                  aria-label="Full Name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-4 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 dark:bg-gray-900/80 bg-gray-50/80 dark:text-white text-gray-900 shadow-sm"
                  aria-label="Email"
                  required
                />
              </div>
              <textarea
                placeholder="Type your message..."
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-blue-500 dark:bg-gray-900/80 bg-gray-50/80 dark:text-white text-gray-900 shadow-sm h-32"
                aria-label="Message"
                required
              ></textarea>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Please be informed that when you click the Send button, XAVS Technologies will process your personal data in accordance with our Privacy Notice for the purpose of providing you with appropriate information.
              </p>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-4 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all text-lg"
                aria-label="Send Message"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </motion.section>

  {/* Footer */}
  <Footer services={services} />
    </div>
  );
}
