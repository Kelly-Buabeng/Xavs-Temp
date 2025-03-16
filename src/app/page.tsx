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
  const [currentImage, setCurrentImage] = useState(images[0]);
  const [fade, setFade] = useState(true); // Controls fade animation
  const [serviceOptions, setServiceOptions] = useState(services[0].options);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false); // Start fade-out effect

      setTimeout(() => {
        setCurrentImage((prevImage) => {
          const currentIndex = images.indexOf(prevImage);
          const nextIndex = (currentIndex + 1) % images.length;
          return images[nextIndex];
        });
        setFade(true); // Start fade-in effect
      }, 500); // Wait for fade-out before changing image
    }, 10000); // 5 minutes

    return () => clearInterval(interval);
  }, []);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setMessage("Please enter a valid email.");
      return;
    }
    setMessage("Subscribed successfully! 🎉");
    setEmail(""); // Clear input after submission
  };

  const text =
    "AI-Powered Solutions for Smarter, Secure, and Scalable Businesses";
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, 50);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);
  return (
    <div className="relative h-screen">
      <div className="fixed right-0 items-center top-1/2 flex z-50">
        <BotIcon />
      </div>
      <div
        className={`h-screen flex items-center justify-start bg-cover bg-center flex-wrap gap-10 relative transition-opacity duration-1000 ${
          fade ? "opacity-100" : "opacity-0"
        }`}
        style={{
          backgroundImage: `url('${currentImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        onDoubleClick={() => {
          setFade(false); // Start fade-out effect

          setTimeout(() => {
            setCurrentImage((prevImage) => {
              const currentIndex = images.indexOf(prevImage);
              const nextIndex = (currentIndex + 1) % images.length;
              return images[nextIndex];
            });
            setFade(true); // Start fade-in effect
          }, 500); // Wait for fade-out before changing image
        }}
      >
        <div className="bg-black/60 absolute top-0 w-full h-full z-10"></div>
        <div className="md:px-32 px-10 z-20">
          <div className="flex flex-col">
            <h1 className="md:text-5xl text-3xl mt-40 font-bold md:mt-4 min-w-20 md:max-w-[550px] text-white">
              {displayText}
              <span className={blink ? "inline" : "invisible"}>|</span>
            </h1>
            <p className="text-xl mt-2 text-gray-400 md:max-w-[600px]">
              We automate, secure, and optimize businesses with cutting-edge AI,
              cybersecurity, and cloud solutions. Call-to-Action (CTA) Buttons.
            </p>
            <div className="flex md:gap-4 mt-4 flex-wrap gap-2">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold mt-4 hover:bg-blue-700 transition duration-300">
                Get Started
              </button>
              <button className="border-blue-600 text-blue-500 px-6 py-3 rounded-full font-semibold mt-4 hover:bg-blue-700 hover:text-white hover:border-blue-700 border-[2px] transition duration-300">
                Book a Consultation
              </button>
            </div>
          </div>
        </div>
      </div>

      <motion.section
        className="py-16 dark:bg-black"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: 100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Image Section */}
          <div
            style={{
              backgroundImage: "url('/about-pic.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[400px] w-full rounded-md"
          ></div>

          {/* Content Section */}
          <div className="text-center md:text-left dark:bg-gray-950 p-5 bg-gray-100 rounded-r-md">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              About Us
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-300 max-w-3xl">
              XAVS Technologies is a Ghanaian-based AI and cybersecurity company
              dedicated to helping businesses automate, secure, and scale. We
              leverage AI, cloud computing, and next-gen cybersecurity solutions
              to empower enterprises across Africa and beyond.
            </p>

            <div className="mt-3 text-sm flex flex-col gap-2">
              <li className="flex md:gap-2 italic text-gray-600 dark:text-gray-400 flex-wrap">
                <h3 className="font-bold">AI-Driven Business Automation:</h3>{" "}
                <p className="text-start">
                  Cut manual work, increase efficiency.
                </p>
              </li>
              <li className="flex gap-2 italic text-gray-600 dark:text-gray-400 flex-wrap">
                <h3 className="font-bold">Enterprise-Grade Cybersecurity:</h3>{" "}
                <p className="text-start">
                  AI-powered threat detection & protection.
                </p>
              </li>
              <li className="flex gap-2 italic text-gray-600 dark:text-gray-400 flex-wrap">
                <h3 className="font-bold">
                  Cloud Transformation & IT Consulting:
                </h3>{" "}
                <p className="text-start">
                  Scalable, cost-effective cloud solutions.
                </p>
              </li>
              <li className="flex gap-2 italic text-gray-600 dark:text-gray-400 flex-wrap">
                <h3 className="font-bold">Industry-Specific Solutions:</h3>{" "}
                <p className="text-start">
                  AI for finance, e-commerce, healthcare & more.
                </p>
              </li>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col md:flex-row mx-auto"
      >
        {/* Sidebar */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-100 dark:bg-gray-950 md:px-32 md:py-16 px-4 py-10 flex flex-col gap-7 ">
          <div className="flex justify-end w-full">
            <h2 className="text-6xl font-bold text-gray-300 text-right">
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
                    : "text-gray-600"
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

        {/* Content Section */}
        <div className="w-full md:w-2/3 lg:w-3/4 p-6 md:p-20">
          <h2 className="text-3xl font-bold dark:text-gray-200">
            {activeService.heading}
          </h2>
          <p className="text-gray-600 mt-2">
            What we offer to our clients is a comprehensive suite of services,
            including:
          </p>

          {/* Service Cards */}
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
      </motion.section>

      {/* Industries Section */}
      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="py-16 bg-gray-100 dark:bg-gray-950 text-gray-800 dark:text-gray-200"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-400">
              INDUSTRIES WE SERVE – WHO NEEDS XAVS?
            </h2>
            <p className="text-md max-w-[500px] mb-6">
              XAVS Technologies serves a wide range of industries with our
              cutting-edge AI, cybersecurity, and cloud solutions. Here are some
              of the industries that benefit from our services:
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg h-[300px] w-[300px] flex flex-col justify-center items-center border-b-2 border-red-600">
              <div className="mb-10">
                <Rocket size={60} color="red" />
              </div>
              <h3 className="text-xl font-semibold">SMEs & Startups</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Scale fast with AI-powered automation
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg h-[300px] w-[300px] flex flex-col justify-center items-center border-b-2 border-green-600">
              <div className="mb-10">
                <ShoppingCart size={60} color="#1cb039" />
              </div>
              <h3 className="text-xl font-semibold">E-commerce & Retail</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Optimize customer experience & security
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg h-[300px] w-[300px] flex flex-col justify-center items-center border-b-2 border-blue-600">
              <div className="mb-10">
                <Banknote size={60} color="blue" />
              </div>
              <h3 className="text-xl font-semibold">Finance & Banking</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI-driven fraud detection & cybersecurity compliance
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg h-[300px] w-[300px] flex flex-col justify-center items-center border-b-2 border-yellow-600">
              <div className="mb-10">
                <Ambulance size={60} color="#d7bf1d" />
              </div>
              <h3 className="text-xl font-semibold">Healthcare</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Secure patient data & automate operations with AI
              </p>
            </div>
            <div className="p-6 bg-white dark:bg-gray-900 shadow-md rounded-lg h-[300px] w-[300px] flex flex-col justify-center items-center border-b-2 border-pink-500">
              <div className="mb-10">
                <Handshake size={60} color="#c11ab3" />
              </div>
              <h3 className="text-xl font-semibold">Enterprise & Government</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Advanced AI & cloud security for critical infrastructure
              </p>
            </div>
          </div>
          <div className="mt-8 flex justify-center items-center gap-2 flex-col">
            <p>Is your business ready for AI transformation?</p>
            <a
              href="#"
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Get a Free Consultation
            </a>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.9 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="relative text-white flex items-center w-full"
        style={{
          background: "url('/image1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark overlay covering only the image */}
        <div className="absolute inset-0 dark:bg-black/70 bg-black/50"></div>

        {/* Content with higher z-index to stay above the overlay */}
        <div className="relative max-w-3xl flex mx-auto items-center justify-center flex-col text-center py-10 px-6 md:px-16 z-10">
          <h2 className="text-3xl font-bold text-gray-400">
            BLOG & RESOURCES – STAY AHEAD WITH XAVS
          </h2>
          <p className="text-lg mt-4">
            Latest Insights on AI, Cybersecurity & Business Automation
          </p>
          <ul className="mt-4 text-left text-md">
            <li>How AI is transforming business automation in Africa</li>
            <li>Top cybersecurity threats & how AI prevents them</li>
            <li>The future of cloud computing & AI integration</li>
          </ul>

          <p className="mt-6 text-lg font-semibold">
            Subscribe for weekly insights!
          </p>

          <form
            onSubmit={handleSubscribe}
            className="mt-4 flex flex-col md:flex-row items-center justify-center gap-3"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full md:w-auto px-4 py-2 text-gray-900 rounded-md focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Join Our Newsletter
            </button>
          </form>

          {message && <p className="mt-3 text-green-400">{message}</p>}
        </div>
      </motion.section>

      {/* Contact Sections */}
      <motion.section
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        exit={{ x: -100, opacity: 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: false, amount: 0.5 }}
        className="flex flex-col md:flex-row"
      >
        {/* Left Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 bg-gray-100 dark:bg-gray-950 md:px-32 md:py-16 px-4 py-10 flex flex-col">
          <div className="flex justify-end w-full">
            <h2 className="text-6xl font-bold text-gray-300 text-right">
              CONTACT <br /> US
            </h2>
          </div>

          <div className="flex justify-center items-start gap-6 mt-10 flex-col w-full">
            {/* Email */}
            <div>
              <p className="text-lg font-semibold dark:text-gray-200 flex items-center gap-2">
                <Mail size={20} /> Email
              </p>
              <p className="text-gray-400">support@xavstech.com</p>
            </div>

            {/* Location */}
            <div>
              <p className="text-lg font-semibold dark:text-gray-200 flex items-center gap-2">
                <MapPin size={20} /> Location
              </p>
              <p className="text-gray-400">Accra, Ghana</p>
            </div>

            {/* Phone */}
            <div>
              <p className="text-lg font-semibold dark:text-gray-200 flex items-center gap-2">
                <Phone size={20} /> Phone
              </p>
              <p className="text-gray-400">(+233) XXX-XXX-XXXX</p>
            </div>

            {/* Live Chat */}
            <div>
              <p className="text-lg font-semibold dark:text-gray-200 flex items-center gap-2">
                <MessageCircle size={20} /> Live Chat
              </p>
              <p className="text-gray-400">
                Available 24/7 for business inquiries.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-2/3 lg:w-3/4 py-6 md:px-20 px-16">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-1/2 p-3 border border-gray-300 rounded"
            />
          </div>

          <textarea
            placeholder="Type your message..."
            className="w-full p-3 border border-gray-300 rounded mt-4 h-32"
          ></textarea>

          <p className="text-sm text-gray-600 mt-4">
            Please be informed that when you click the Send button, XAVS
            Technologies will process your personal data in accordance with our
            Privacy Notice for the purpose of providing you with appropriate
            information.
          </p>

          <button className="bg-blue-500 text-white px-6 py-3 rounded mt-4">
            Send
          </button>

          {/* Book a Consultation */}
          <div className="mt-6 text-center">
            <p className="text-lg font-semibold mb-10 dark:text-gray-200">
              Let’s start your AI transformation journey!
            </p>
            <Link
              href={"#"}
              className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Footer Section */}
      <Footer services={services} />
    </div>
  );
}
