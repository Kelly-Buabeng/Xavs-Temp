"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-white text-gray-900 font-sans">
      {/* Hero */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-blue-500">XAVS</span>{" "}
            <span>Labs</span>
            <div>Research Security Intelligence</div>
          </h1>
          <p className="text-lg text-gray-600">
            We help startups and SMEs grow with secure systems, AI-driven
            workflows, and business intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Work with us
            </Link>
            <Link
              href="#"
              className="bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition"
            >
              Explore Research
            </Link>
          </div>
        </div>
        <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
          <Image
            src="/hero23.png"
            alt="Hero Illustration"
            width={600}
            height={400}
            className="object-cover rounded-3xl"
          />
        </div>
      </motion.section>

      {/* Partners */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-center gap-12 grayscale">
        {["amazon", "dribbble", "hubspot", "notion", "netflix", "zoom"].map(
          (logo) => (
            <div key={logo} className="h-8 w-24 bg-gray-200 rounded" />
          )
        )}
      </section>

      {/* Services */}
      <Services />

      {/* Use Cases */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="mb-12">
          <span className="bg-blue-500 text-white font-semibold px-4 py-1 rounded">
            Case Studies
          </span>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl">
            Explore how we’ve helped businesses achieve real results.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {["E-commerce Growth", "B2B Lead Gen", "Startup Launch"].map(
            (useCase, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 border border-gray-200 rounded-2xl hover:shadow-md transition"
              >
                <h3 className="font-bold text-xl mb-4">{useCase}</h3>
                <p className="text-gray-600 mb-4">
                  Short description of how we solved problems for clients.
                </p>
                <Link href="#" className="text-gray-900 font-medium underline">
                  Read More
                </Link>
              </div>
            )
          )}
        </div>
      </motion.section>

      {/* About Us */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div>
          <span className="bg-blue-500 text-white font-semibold px-4 py-1 rounded">
            About Us
          </span>
          <h2 className="text-4xl font-extrabold mt-6 mb-6">
            Empowering businesses through digital innovation
          </h2>
          <p className="text-lg text-gray-600">
            We are a Ghanaian-based digital agency dedicated to helping
            companies thrive in the digital world through modern strategies and
            solutions.
          </p>
        </div>
        <div className="w-full h-80 bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden">
          <Image
            src="/replacement.png"
            alt="About Illustration"
            width={600}
            height={400}
            className="object-cover rounded-3xl"
          />
        </div>
      </motion.section>

      {/* Contact Us */}
      <motion.section
        className="bg-gray-900 text-white py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="bg-blue-500 text-white font-semibold px-4 py-1 rounded">
              Contact Us
            </span>
            <h2 className="text-4xl font-extrabold mt-6 mb-6">
              Let’s work together
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get in touch and let’s discuss how we can help your business grow.
            </p>
            <div className="space-y-4 text-gray-300">
              <p>Email: xavslabs@gmail.com</p>
              <p>Phone: (+233) 054-395-1760</p>
              <p>Location: Accra, Ghana</p>
            </div>
          </div>
          <form className="bg-white text-gray-900 rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-3 border rounded-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border rounded-lg"
              />
            </div>
            <textarea
              placeholder="Your message"
              className="w-full p-3 border rounded-lg h-32 mb-4"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-lime-400 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} XAVSlab. All rights reserved.
      </footer>
    </div>
  );
}
