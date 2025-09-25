"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Services() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const services = [
    {
      heading: "AI-Powered Business Automation",
      options: [
        { title: "Automated Task Management", text: "AI-driven workflows for efficiency." },
        { title: "AI-Powered Customer Support", text: "Chatbots, voice assistants & more." },
        { title: "Smart Business Intelligence & Data Insights", text: "AI-powered analytics dashboards." },
      ],
    },
    {
      heading: "AI-Driven Cybersecurity & Cloud Protection",
      options: [
        { title: "AI-Based Threat Detection", text: "Predict & prevent cyber threats before they hit." },
        { title: "Cloud Security & Data Encryption", text: "Safeguard sensitive business data." },
        { title: "Real-Time Fraud Detection", text: "Protect online transactions instantly." },
      ],
    },
    {
      heading: "Cloud Transformation & IT Solutions",
      options: [
        { title: "Cloud Migration & Consulting", text: "Seamless transition to AWS, Azure, or Google Cloud." },
        { title: "AI-Powered IT Support & Monitoring", text: "Proactive detection and resolution of IT issues." },
        { title: "Cybersecurity Compliance & Data Protection", text: "Stay compliant and secure." },
      ],
    },
    {
      heading: "Custom Software & AI Solutions",
      options: [
        { title: "Tailor-made AI Software", text: "Custom AI platforms built for your needs." },
        { title: "Custom App & Platform Development", text: "Web, mobile, and desktop applications." },
        { title: "AI-Driven Data Processing", text: "Machine learning tools to unlock business value." },
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
      {/* Section Header */}
      <div className="mb-12">
        <span className="bg-blue-500 text-white font-semibold px-4 py-2 rounded">
          Services
        </span>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl">
          Explore our core technology services. Click a section to learn more.
        </p>
      </div>

      {/* Accordion */}
      <div className="space-y-4">
        {services.map((service, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={i}
              className="border-2 border-zinc-700 rounded-2xl overflow-hidden bg-zinc-900"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`service-panel-${i}`}
                className="w-full flex justify-between items-center px-8 py-6 text-left font-bold text-lg text-white hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-blue-400/30 transition-all duration-300"
              >
                {service.heading}
                <span className="text-blue-400 text-2xl font-bold leading-none">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    id={`service-panel-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-8 pb-6 space-y-4 bg-zinc-800"
                  >
                    {service.options.map((opt, j) => (
                      <div key={j}>
                        <h4 className="font-semibold text-white mb-1">{opt.title}</h4>
                        <p className="text-gray-300 text-sm leading-relaxed">{opt.text}</p>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
