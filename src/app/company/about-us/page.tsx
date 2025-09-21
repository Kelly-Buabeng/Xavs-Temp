"use client";

import BotIcon from "@/components/bot";
import { ArrowUpRight, Users, Target, Eye, Shield, Cloud, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Floating Bot Icon */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex z-50">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <span className="bg-blue-500 text-white font-semibold px-4 py-1 rounded">
          About Us
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight">
          About XAVS Technologies
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Leading the digital transformation in Africa through AI, cybersecurity,
          and cloud innovation.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 rounded-2xl overflow-hidden border border-gray-200">
          <Image
            src="/about-pic.jpg"
            alt="XAVS Technologies Team"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Who We Are</h2>
          <p className="text-gray-600">
            XAVS Technologies is a Ghanaian-based AI and cybersecurity company dedicated
            to helping businesses automate, secure, and scale. We leverage AI, cloud computing,
            and next-gen cybersecurity solutions to empower enterprises across Africa and beyond.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {[
              { icon: Brain, label: "AI & Automation" },
              { icon: Shield, label: "Cybersecurity" },
              { icon: Cloud, label: "Cloud Solutions" },
              { icon: Users, label: "IT Consulting" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center">
                <div className="bg-blue-100 p-2 rounded-full mr-3">
                  <Icon className="text-blue-600 h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>

          <Link
            href="#"
            className="inline-block bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
          >
            Book a Demo
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-gray-200 p-8 rounded-2xl">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <Target className="text-blue-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Our Mission</h3>
          </div>
          <p className="text-gray-600">
            To empower African businesses with cutting-edge technology solutions
            that drive growth, enhance security, and create sustainable competitive
            advantages in the digital economy.
          </p>
        </div>

        <div className="border border-gray-200 p-8 rounded-2xl">
          <div className="flex items-center mb-4">
            <div className="bg-blue-100 p-2 rounded-full mr-3">
              <Eye className="text-blue-600 h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Our Vision</h3>
          </div>
          <p className="text-gray-600">
            To be Africa&apos;s leading technology partner, transforming industries
            through innovation and building a digitally empowered future for businesses
            across the continent.
          </p>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="bg-blue-500 text-white font-semibold px-4 py-1 rounded">
            Services
          </span>
          <h2 className="mt-6 text-3xl font-bold">What We Offer</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "AI-Driven Business Automation",
              desc: "Cut manual work and increase efficiency with intelligent automation solutions tailored to your business processes.",
            },
            {
              title: "Enterprise-Grade Cybersecurity",
              desc: "AI-powered threat detection and protection to safeguard your digital assets and customer data.",
            },
            {
              title: "Cloud Transformation",
              desc: "Scalable, cost-effective cloud solutions that grow with your business and enhance operational flexibility.",
            },
            {
              title: "Industry-Specific Solutions",
              desc: "Custom AI applications for finance, e-commerce, healthcare, and other key sectors.",
            },
          ].map(({ title, desc }) => (
            <div
              key={title}
              className="p-8 border border-gray-200 rounded-2xl hover:shadow-md transition"
            >
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t border-gray-200">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Let&apos;s discuss how our solutions can help your organization thrive in the digital age.
        </p>
        <Link
          href="/company/contact-us"
          className="inline-flex items-center bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
        >
          <span>Send Us A Message</span>
          <ArrowUpRight className="ml-2" />
        </Link>
      </section>
    </div>
  );
}
