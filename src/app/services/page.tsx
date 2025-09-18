"use client";

import BotIcon from "@/components/bot";
import { services } from "@/components/data";
import Footer from "@/components/footer";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function Services() {
  const [serviceOptions, setServiceOptions] = useState(services[0].options);
  const [activeService, setActiveService] = useState(services[0]);
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950 text-gray-900 dark:text-white relative">
      {/* Floating Bot Icon */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 flex z-50 drop-shadow-xl">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <div
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center bg-fixed rounded-b-3xl shadow-xl"
        style={{ backgroundImage: `url('/services.jpg')` }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 backdrop-blur-md bg-black/60 rounded-b-3xl" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-xl tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-xl mt-2 text-gray-200 max-w-2xl mx-auto leading-relaxed font-medium drop-shadow">
            Empowering businesses with automation, cybersecurity, and scalable solutions designed for the future.
          </p>
        </div>
      </div>

      <section className="flex flex-col md:flex-row mx-auto max-w-7xl gap-10 py-20">
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

        {/* Content Section */}
        <div className="w-full md:w-2/3 lg:w-2/3 p-6 md:p-14 bg-white/95 dark:bg-gray-950/95 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800 flex flex-col gap-6">
          <h2 className="text-3xl font-bold dark:text-gray-200 mb-2">
            {activeService.heading}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            What we offer to our clients is a comprehensive suite of services, including:
          </p>

          {/* Service Cards */}
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
      </section>

      <section className="px-6 py-10 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-900 dark:to-blue-700 rounded-t-3xl shadow-xl">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-6 w-full">
          <Link href="/company/contact-us" className="flex items-center gap-3 group">
            <span className="text-2xl font-semibold text-white group-hover:underline">Send Us A Message</span>
            <ArrowUpRight size={36} className="text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <Footer services={services} />
    </div>
  );
}
