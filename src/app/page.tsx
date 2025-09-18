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
    <div className="relative">
      {/* Floating Bot Icon */}
      <div className="fixed right-0 items-center top-1/2 flex z-50">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <motion.section
        className={`h-screen flex items-center justify-start bg-cover bg-center relative transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url('${currentImage}')`,
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <div className="bg-black/60 absolute top-0 w-full h-full z-10"></div>
        <div className="md:px-32 px-10 z-20 w-full md:w-1/2">
          <motion.h1
            className="md:text-5xl text-3xl font-bold text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {displayText}
            <span className={blink ? "inline" : "invisible"}>|</span>
          </motion.h1>
          <motion.p
            className="text-xl mt-4 text-gray-300 max-w-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We automate, secure, and optimize businesses with cutting-edge AI,
            cybersecurity, and cloud solutions.
          </motion.p>
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link href="/company/about-us">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
            </Link>
            <Link href="/company/contact-us">
              <button className="border-blue-600 text-blue-500 px-6 py-3 rounded-full font-semibold hover:bg-blue-700 hover:text-white hover:border-blue-700 border-[2px] transition duration-300">
                Book a Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        className="py-20 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            style={{
              backgroundImage: "url('/about-pic.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[400px] rounded-2xl shadow-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          ></motion.div>

          <motion.div
            className="p-8 bg-gray-50 dark:bg-gray-900 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
              About Us
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              XAVS Technologies is a Ghanaian-based AI and cybersecurity company
              dedicated to helping businesses automate, secure, and scale. We
              leverage AI, cloud computing, and next-gen cybersecurity solutions
              to empower enterprises across Africa and beyond.
            </p>
            <ul className="space-y-3 text-gray-600 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <div>
                  <strong>AI-Driven Business Automation:</strong> Cut manual work, increase efficiency.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <div>
                  <strong>Enterprise-Grade Cybersecurity:</strong> AI-powered threat detection & protection.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <div>
                  <strong>Cloud Transformation & IT Consulting:</strong> Scalable, cost-effective cloud solutions.
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600">•</span>
                <div>
                  <strong>Industry-Specific Solutions:</strong> AI for finance, e-commerce, healthcare & more.
                </div>
              </li>
            </ul>
            <Link href="/company/contact-us">
              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                Book a Demo
              </button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Our Services Section */}
      <section className="relative py-20 bg-gray-900 text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses with automation, cybersecurity, and scalable
            solutions designed for the future.
          </p>
        </div>

        <div className="flex flex-col md:flex-row mx-auto relative z-10">
          {/* Sidebar */}
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 bg-gray-100 dark:bg-gray-950 md:px-32 md:py-16 px-4 py-10 flex flex-col gap-7 ">
            <div className="flex justify-end w-full">
              <h2 className="text-6xl font-bold text-gray-800 dark:text-gray-300 text-right">
                OUR <br /> SERVICES
              </h2>
            </div>
            <ul className="mt-6 space-y-4">
              {services.map((service, id) => (
                <li
                  key={id}
                  className={`cursor-pointer text-lg font-semibold p-2 ${
                    activeService === service
                      ? "text-black dark:text-white border-l-4 border-pink-500"
                      : "text-gray-600 dark:text-gray-400"
                  }`}
                  onClick={() => {
                    setActiveService(service);
                    setServiceOptions(service.options);
                  }}
                >
                  {service.heading}
                </li>
              ))}
            </ul>
          </div>

          {/* Service Content */}
          <div className="w-full md:w-2/3 lg:w-3/4 p-6 md:p-20 bg-white dark:bg-gray-950">
            <h2 className="text-3xl font-bold dark:text-gray-200">
              {activeService.heading}
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              What we offer to our clients is a comprehensive suite of services,
              including:
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {serviceOptions.map((serviceOption, index) => (
                <div
                  key={index}
                  className="p-4 border dark:border-gray-800 rounded-lg shadow-md dark:shadow-gray-950 bg-white dark:bg-gray-950"
                >
                  <h3 className="font-bold text-lg dark:text-gray-200">
                    {serviceOption.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">
                    {serviceOption.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <motion.section className="py-16 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold mb-10 text-gray-700 dark:text-gray-300">
            INDUSTRIES WE SERVE – WHO NEEDS XAVS?
          </h2>
          <p className="mb-12 max-w-xl mx-auto">
            XAVS Technologies serves a wide range of industries with our
            cutting-edge AI, cybersecurity, and cloud solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
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
                className={`p-8 bg-white dark:bg-gray-900 rounded-lg shadow-md w-72 h-72 flex flex-col justify-center items-center border-b-4 ${borderColor}`}
              >
                <div className="mb-8">{icon}</div>
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link
              href="/company/contact-us"
              className="inline-block bg-blue-600 hover:bg-blue-700 transition text-white rounded-full px-8 py-3 font-semibold"
            >
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Contact Us Section */}
      <motion.section
        className="py-20 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              CONTACT US
            </h2>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail size={24} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    support@xavstech.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={24} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={24} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    (+233) XXX-XXX-XXXX
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle size={24} className="text-blue-600" />
                <div>
                  <p className="font-semibold">Live Chat</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Available 24/7 for business inquiries.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-900"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-900"
                />
              </div>
              <textarea
                placeholder="Type your message..."
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-900 h-32"
              ></textarea>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Please be informed that when you click the Send button, XAVS
                Technologies will process your personal data in accordance with
                our Privacy Notice for the purpose of providing you with
                appropriate information.
              </p>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
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
