"use client";

import { services } from "@/components/data";
import Footer from "@/components/footer";
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
  Cpu,
  Shield,
  Cloud,
  Building,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeService, setActiveService] = useState(services[0]);
  const [serviceOptions, setServiceOptions] = useState(services[0].options);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      {/* Hero */}
      <section className="py-24 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 dark:text-white">
            AI-Powered Solutions for Smarter, Secure, and Scalable Businesses
          </h1>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl">
            We automate, secure, and optimize businesses with cutting-edge AI, cybersecurity, and cloud solutions.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/company/about-us">
              <button className="px-5 py-2.5 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900">
                Get Started
              </button>
            </Link>
            <Link href="/company/contact-us">
              <button className="px-5 py-2.5 rounded-md border border-gray-300 text-gray-900 dark:border-gray-700 dark:text-gray-100">
                Book a Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className="h-[320px] rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-900"
            style={{
              backgroundImage: "url('/about-pic.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            aria-label="About XAVS Technologies image"
          />

          <div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">About Us</h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              XAVS Technologies is a Ghanaian-based <strong>AI and cybersecurity company</strong> helping businesses
              automate, secure, and scale with innovative solutions in AI, cloud, and next-gen security. Our mission is
              to empower enterprises across Africa and beyond with future-ready technology.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Cpu, title: "AI Automation" },
                { icon: Shield, title: "Cybersecurity" },
                { icon: Cloud, title: "Cloud Solutions" },
                { icon: Building, title: "Industry-Specific AI" },
              ].map(({ icon: Icon, title }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 border border-gray-200 dark:border-gray-800 rounded-lg p-4"
                >
                  <Icon size={22} className="text-gray-500" />
                  <p className="font-medium text-gray-800 dark:text-gray-200">{title}</p>
                </div>
              ))}
            </div>

            <Link href="/company/contact-us">
              <button className="mt-10 px-5 py-2.5 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900">
                Book a Demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 border-y border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">Our Services</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl">
            Empowering businesses with automation, cybersecurity, and scalable solutions designed for the future.
          </p>

          <div className="mt-12 flex flex-col md:flex-row gap-10">
            {/* Sidebar */}
            <div className="w-full md:w-1/3">
              <ul className="space-y-2">
                {services.map((service, id) => (
                  <li
                    key={id}
                    className={`cursor-pointer px-3 py-2 rounded-md text-sm font-medium border transition-colors ${
                      activeService === service
                        ? "border-gray-900 text-gray-900 dark:border-gray-200 dark:text-gray-100"
                        : "border-transparent text-gray-600 hover:border-gray-300 dark:text-gray-400 dark:hover:border-gray-700"
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

            {/* Content */}
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {activeService.heading}
              </h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">
                What we offer to our clients is a comprehensive suite of services, including:
              </p>
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {serviceOptions.map((serviceOption, index) => (
                  <div
                    key={index}
                    className="p-5 border border-gray-200 dark:border-gray-800 rounded-lg bg-white dark:bg-gray-950"
                  >
                    <h4 className="font-medium text-gray-900 dark:text-gray-100">{serviceOption.title}</h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{serviceOption.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white">
            Industries We Serve
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-gray-600 dark:text-gray-400">
            XAVS Technologies serves a wide range of industries with our cutting-edge AI, cybersecurity, and cloud
            solutions.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            {[
              { icon: Rocket, title: "SMEs & Startups", description: "Scale fast with AI-powered automation" },
              { icon: ShoppingCart, title: "E-commerce & Retail", description: "Optimize customer experience & security" },
              { icon: Banknote, title: "Finance & Banking", description: "AI-driven fraud detection & compliance" },
              { icon: Ambulance, title: "Healthcare", description: "Secure patient data & automate operations" },
              { icon: Handshake, title: "Enterprise & Government", description: "Advanced AI & cloud security" },
            ].map(({ icon: Icon, title, description }, i) => (
              <div
                key={i}
                className="p-8 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 w-72 h-64 flex flex-col justify-center items-center"
              >
                <Icon size={48} className="mb-6 text-gray-500" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/company/contact-us" className="inline-block">
              <button className="px-5 py-2.5 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900">
                Get a Free Consultation
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-6">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Us</h2>
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <Mail size={22} className="text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Email</p>
                  <p className="text-gray-600 dark:text-gray-400">support@xavstech.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={22} className="text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Location</p>
                  <p className="text-gray-600 dark:text-gray-400">Accra, Ghana</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={22} className="text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Phone</p>
                  <p className="text-gray-600 dark:text-gray-400">(+233) XXX-XXX-XXXX</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MessageCircle size={22} className="text-gray-500" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Live Chat</p>
                  <p className="text-gray-600 dark:text-gray-400">Available 24/7 for business inquiries.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none"
                  aria-label="Full Name"
                  required
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-950 text-gray-900 dark:text-white focus:outline-none"
                  aria-label="Email"
                  required
                />
              </div>
              <textarea
                placeholder="Type your message..."
                className="w-full p-3 border border-gray-300 dark:border-gray-700 rounded-md bg-white dark:bg-gray-950 text-gray-900 dark:text-white h-32 focus:outline-none"
                aria-label="Message"
                required
              ></textarea>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Please be informed that when you click the Send button, XAVS Technologies will process your personal
                data in accordance with our Privacy Notice for the purpose of providing you with appropriate
                information.
              </p>
              <button
                type="submit"
                className="w-full px-5 py-2.5 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                aria-label="Send Message"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer services={services} />
    </div>
  );
}
