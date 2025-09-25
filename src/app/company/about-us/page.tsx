"use client";

import BotIcon from "@/components/bot";
import { ArrowUpRight, Users, Target, Eye, Shield, Cloud, Brain } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white relative font-sans">
      {/* Floating Bot Icon */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex z-50">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <span className="bg-blue-500 text-white font-semibold px-4 py-2 rounded">
          About Us
        </span>
        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold leading-tight text-white">
          About XAVS Technologies
        </h1>
        <p className="mt-4 text-lg text-white max-w-2xl mx-auto leading-relaxed">
          Leading the digital transformation in Africa through AI, cybersecurity,
          and cloud innovation.
        </p>
      </section>

      {/* Who We Are */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-96 rounded-3xl overflow-hidden border-2 border-zinc-700 bg-zinc-900">
          <Image
            src="/about-pic.jpg"
            alt="XAVS Technologies Team"
            fill
            className="object-cover opacity-90"
          />
        </div>

        <div className="space-y-6">
          <h2 className="text-3xl font-extrabold text-white">Who We Are</h2>
          <p className="text-white leading-relaxed">
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
                <div className="bg-blue-500 p-3 rounded-full mr-4">
                  <Icon className="text-white h-5 w-5" />
                </div>
                <span className="text-sm font-semibold text-white">{label}</span>
              </div>
            ))}
          </div>

          <Link
            href="/company/contact-us"
            className="inline-block bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/30 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Book a Demo
          </Link>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border-2 border-zinc-700 p-8 rounded-2xl bg-zinc-900 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 p-3 rounded-full mr-4">
              <Target className="text-white h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Mission</h3>
          </div>
          <p className="text-white leading-relaxed">
            To empower African businesses with cutting-edge technology solutions
            that drive growth, enhance security, and create sustainable competitive
            advantages in the digital economy.
          </p>
        </div>

        <div className="border-2 border-zinc-700 p-8 rounded-2xl bg-zinc-900 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300">
          <div className="flex items-center mb-4">
            <div className="bg-blue-500 p-3 rounded-full mr-4">
              <Eye className="text-white h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Our Vision</h3>
          </div>
          <p className="text-white leading-relaxed">
            To be Africa&apos;s leading technology partner, transforming industries
            through innovation and building a digitally empowered future for businesses
            across the continent.
          </p>
        </div>
      </section>

      {/* Services Highlights */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <span className="bg-blue-500 text-white font-semibold px-4 py-2 rounded">
            Services
          </span>
          <h2 className="mt-6 text-3xl font-extrabold text-white">What We Offer</h2>
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
              className="p-8 border-2 border-zinc-700 rounded-2xl bg-zinc-900 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 focus-within:border-blue-400 focus-within:shadow-lg focus-within:shadow-blue-500/10 transition-all duration-300"
            >
              <h3 className="font-bold text-lg mb-3 text-white">{title}</h3>
              <p className="text-white text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center border-t-2 border-zinc-800">
        <h2 className="text-3xl font-extrabold mb-4 text-white">Ready to Transform Your Business?</h2>
        <p className="text-white mb-8 max-w-2xl mx-auto leading-relaxed">
          Let&apos;s discuss how our solutions can help your organization thrive in the digital age.
        </p>
        <Link
          href="/company/contact-us"
          className="inline-flex items-center bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-400 focus:bg-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/30 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <span>Send Us A Message</span>
          <ArrowUpRight className="ml-2" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t-2 border-zinc-800 text-center text-white text-sm">
        © {new Date().getFullYear()} XAVSlab. All rights reserved.
      </footer>
    </div>
  );
}