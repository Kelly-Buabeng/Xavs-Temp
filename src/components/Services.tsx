"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      heading: "AI-Powered Business Automation",
      options: [
        { title: "Automated Task Management", text: "AI-driven workflows for efficiency" },
        { title: "AI-Powered Customer Support", text: "Chatbots, voice assistants & more" },
        { title: "Smart Business Intelligence & Data Insights", text: "AI-powered analytics" },
      ],
    },
    {
      heading: "AI-Driven Cybersecurity & Cloud Protection",
      options: [
        { title: "AI-Based Threat Detection", text: "Predict & prevent cyber threats" },
        { title: "Cloud Security & Data Encryption", text: "Keep business data secure" },
        { title: "Real-Time Fraud Detection", text: "Protect transactions & prevent fraud" },
      ],
    },
    {
      heading: "Cloud Transformation & IT Solutions",
      options: [
        { title: "Cloud Migration & Consulting", text: "AWS, Azure, Google Cloud" },
        { title: "AI-Powered IT Support & Monitoring", text: "Proactive issue detection & resolution" },
        { title: "Cybersecurity Compliance & Data Protection", text: "Stay secure & compliant" },
      ],
    },
    {
      heading: "Custom Software & AI Solutions",
      options: [
        { title: "Tailor-made AI software solutions for enterprises", text: "Custom AI software development" },
        { title: "Custom app & platform development", text: "Web, mobile, desktop & more" },
        { title: "AI-driven data processing & machine learning tools", text: "Custom AI tools for your business" },
      ],
    },
  ];

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 py-24"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div className="mb-12">
        <span className="bg-blue-500 text-white font-semibold px-4 py-1 rounded">
          Services
        </span>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl">
          Explore our core technology services. Click a section to learn more.
        </p>
      </div>

      <div className="space-y-4">
        {services.map((service, i) => (
          <div
            key={i}
            className="border border-gray-200 rounded-xl overflow-hidden"
          >
            {/* Heading */}
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-lg text-gray-800 hover:bg-gray-50"
            >
              {service.heading}
              <span className="text-blue-500 text-2xl leading-none">
                {openIndex === i ? "−" : "+"}
              </span>
            </button>

            {/* Expanded content */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 space-y-3 bg-gray-50"
                >
                  {service.options.map((opt, j) => (
                    <div key={j}>
                      <h4 className="font-medium text-gray-900">{opt.title}</h4>
                      <p className="text-gray-600 text-sm">{opt.text}</p>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
