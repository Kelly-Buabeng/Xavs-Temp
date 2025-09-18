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
    <div className="min-h-screen dark:bg-black bg-gray-100 text-gray-900 dark:text-white relative">
      {/* Floating Bot Icon */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex z-50">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <div
        className="relative h-[70vh] flex items-center justify-center bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: `url('/services.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Our Services
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Empowering businesses with automation, cybersecurity, and scalable
            solutions designed for the future.
          </p>

          
        </div>
      </div>


      

      <section className="flex flex-col md:flex-row mx-auto">
        {/* Sidebar */}
        <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/3 bg-gray-100 dark:bg-gray-950 md:px-32 md:py-16 px-4 py-10 flex flex-col gap-7 ">
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
      </section>

      <section className=" px-6 py-7 bg-gray-900">
        <div className="max-w-6xl mx-auto flex justify-center items-center gap-6 w-full">
          <Link href="/company/contact-us" className="flex items-center gap-2">
            <h1 className="text-xl">Send Us A Message</h1>
            <ArrowUpRight size={40} />
          </Link>
        </div>
      </section>

      {/* Footer Section */}
      <Footer services={services} />
    </div>
  );
}
