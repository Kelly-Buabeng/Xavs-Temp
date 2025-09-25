"use client";

import BotIcon from "@/components/bot";
import { services } from "@/components/data";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [activeService, setActiveService] = useState(services[0]);
  const [serviceOptions, setServiceOptions] = useState(services[0].options);

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative font-sans">
      {/* Floating Bot Icon */}
      <div className="fixed right-6 bottom-6 z-50">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center">
        <div className="text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-white">
            Our Services
          </h1>
          <p className="text-lg md:text-xl mt-4 text-white max-w-2xl mx-auto leading-relaxed">
            Automation, cybersecurity, and scalable solutions designed for the
            future.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mx-auto max-w-7xl px-6 py-24 flex flex-col gap-16">
        {/* Service Selector */}
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, id) => (
            <button
              key={id}
              onClick={() => {
                setActiveService(service);
                setServiceOptions(service.options);
              }}
              className={`px-8 py-4 rounded-xl font-semibold text-sm md:text-base border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-400/30 ${
                activeService === service
                  ? "bg-blue-500 text-white border-blue-500 shadow-lg hover:shadow-xl hover:bg-blue-400"
                  : "bg-zinc-800 text-white border-zinc-600 hover:bg-zinc-700 hover:border-blue-400"
              }`}
            >
              {service.heading}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-white">
            {activeService.heading}
          </h2>
          <p className="text-white mb-12 text-lg leading-relaxed">
            We provide a comprehensive suite of services, including:
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceOptions.map((option, index) => (
              <div
                key={index}
                className="p-8 border-2 border-zinc-700 rounded-2xl bg-zinc-900 shadow-xl hover:shadow-2xl hover:border-blue-400 hover:shadow-blue-500/10 focus-within:border-blue-400 focus-within:shadow-blue-500/10 transition-all duration-300"
              >
                <h3 className="font-bold text-xl mb-3 text-white">
                  {option.title}
                </h3>
                <p className="text-white text-base leading-relaxed">{option.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-zinc-900 border-t-2 border-zinc-800 text-center">
        <Link
          href="/company/contact-us"
          className="inline-flex items-center gap-2 font-semibold text-lg text-blue-400 hover:text-blue-300 focus:text-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-400/30 focus:rounded-lg px-4 py-2 transition-all duration-300"
        >
          Send Us A Message
          <ArrowUpRight size={22} />
        </Link>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t-2 border-zinc-800 text-center text-white text-sm">
        © {new Date().getFullYear()} XAVSlab. All rights reserved.
      </footer>
    </div>
  );
}