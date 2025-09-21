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
    <div className="min-h-screen bg-white text-gray-900 relative">
      {/* Floating Bot Icon */}
      <div className="fixed right-6 bottom-6 z-50">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center bg-gray-100 rounded-b-3xl shadow-sm">
        <div className="text-center px-6 max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl mt-4 text-gray-600 max-w-2xl mx-auto">
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
              className={`px-6 py-3 rounded-full font-medium text-sm md:text-base border transition-all ${
                activeService === service
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {service.heading}
            </button>
          ))}
        </div>

        {/* Service Content */}
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {activeService.heading}
          </h2>
          <p className="text-gray-600 mb-12 text-lg">
            We provide a comprehensive suite of services, including:
          </p>

          {/* Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceOptions.map((option, index) => (
              <div
                key={index}
                className="p-8 border border-gray-200 rounded-2xl bg-white shadow-sm hover:shadow-md hover:scale-[1.01] transition-all"
              >
                <h3 className="font-semibold text-xl mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 text-base">{option.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gray-50 border-t border-gray-200 text-center">
        <Link
          href="/company/contact-us"
          className="inline-flex items-center gap-2 font-medium text-lg text-gray-900 hover:underline"
        >
          Send Us A Message
          <ArrowUpRight size={22} />
        </Link>
      </section>
    </div>
  );
}
