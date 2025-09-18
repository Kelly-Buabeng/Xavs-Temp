"use client";

import BotIcon from "@/components/bot";
import { services } from "@/components/data";
import Footer from "@/components/footer";
import { ArrowUpRight, Users, Target, Eye, Shield, Cloud, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen dark:bg-black bg-gray-50 text-gray-900 dark:text-white relative">
      {/* Floating Bot Icon */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex z-50">
        <BotIcon />
      </div>

      {/* Hero Section - Made more compact */}
      <div
        className="h-96 flex items-center justify-center bg-cover bg-center relative transition-opacity duration-1000"
        style={{
          backgroundImage: `url('/aboutbg.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-4xl mx-auto text-center p-6 z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-100 tracking-wide">
            About XAVS Technologies
          </h1>
          <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Leading the digital transformation in Africa through AI, cybersecurity, and cloud innovation.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section - More compact layout */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
          <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
            <Image
              src="/about-pic.jpg"
              alt="XAVS Technologies Team"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200">
              Who We Are
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              XAVS Technologies is a Ghanaian-based AI and cybersecurity company dedicated to helping businesses automate, secure, and scale. We leverage AI, cloud computing, and next-gen cybersecurity solutions to empower enterprises across Africa and beyond.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                  <Brain className="text-blue-500 h-5 w-5" />
                </div>
                <span className="text-sm font-medium">AI & Automation</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                  <Shield className="text-blue-500 h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Cybersecurity</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                  <Cloud className="text-blue-500 h-5 w-5" />
                </div>
                <span className="text-sm font-medium">Cloud Solutions</span>
              </div>
              <div className="flex items-center">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                  <Users className="text-blue-500 h-5 w-5" />
                </div>
                <span className="text-sm font-medium">IT Consulting</span>
              </div>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </section>

        {/* Mission & Vision - Combined Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-blue-50 dark:bg-blue-900/20 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                <Target className="text-blue-500 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To empower African businesses with cutting-edge technology solutions that drive growth, enhance security, and create sustainable competitive advantages in the digital economy.
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-8 rounded-xl">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-full mr-3">
                <Eye className="text-blue-500 h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300">
              To be Africa&apos;s leading technology partner, transforming industries through innovation and building a digitally empowered future for businesses across the continent.
            </p>
          </div>
        </section>

        {/* Services Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-10">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">AI-Driven Business Automation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Cut manual work and increase efficiency with intelligent automation solutions tailored to your business processes.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Enterprise-Grade Cybersecurity</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AI-powered threat detection and protection to safeguard your digital assets and customer data.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Cloud Transformation</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Scalable, cost-effective cloud solutions that grow with your business and enhance operational flexibility.
              </p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Industry-Specific Solutions</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Custom AI applications for finance, e-commerce, healthcare, and other key sectors.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center py-10 bg-blue-50 dark:bg-blue-900/20 rounded-xl mb-10">
          <h2 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
            Let's discuss how our solutions can help your organization thrive in the digital age.
          </p>
          <Link 
            href="/company/contact-us" 
            className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
          >
            <span>Send Us A Message</span>
            <ArrowUpRight className="ml-2" />
          </Link>
        </section>
      </div>

      {/* Footer Section */}
      <Footer services={services} />
    </div>
  );
}