"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div className="bg-zinc-950 text-white font-sans">
      {/* Hero */}
      <motion.section
        className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
            <span className="text-blue-500 font-extrabold">XAVS</span>{" "}
            <span className="text-white">Labs</span>
            <div className="text-white text-3xl md:text-4xl mt-2">
              Research Security Intelligence
            </div>
          </h1>
          <p className="text-lg text-white leading-relaxed">
            We help startups and SMEs grow with secure systems, AI-driven
            workflows, and business intelligence.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/company/contact-us"
              className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 transition-all duration-300 shadow-lg"
            >
              Work with us
            </Link>
            <Link
              href="#"
              className="bg-zinc-800 text-blue-400 border border-blue-400 px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300"
            >
              Explore Research
            </Link>
          </div>
        </div>
        <div className="w-full h-80 bg-zinc-900 rounded-3xl flex items-center justify-center overflow-hidden border border-zinc-800">
          <Image
            src="/hero23.png"
            alt="Hero Illustration"
            width={600}
            height={400}
            className="object-cover rounded-3xl opacity-90"
          />
        </div>
      </motion.section>

      {/* Partners */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-wrap justify-center gap-12">
        {["amazon", "dribbble", "hubspot", "notion", "netflix", "zoom"].map(
          (logo) => (
            <div
              key={logo}
              className="h-8 w-24 bg-zinc-800 rounded border border-zinc-700 opacity-60 hover:opacity-80 transition-opacity"
            />
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
          <span className="bg-blue-500 text-white font-semibold px-4 py-2 rounded">
            Case Studies
          </span>
          <p className="mt-4 text-lg text-white max-w-2xl">
            Explore how we&apos;ve helped businesses achieve real results.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Case 1 */}
          <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500/50 hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-xl mb-4 text-white">
              E-commerce Growth
            </h3>
            <p className="text-gray-400">
              Implemented AI-driven product recommendations and secure checkout
              for a Ghanaian online retailer — boosting conversion rates by 32%
              and reducing cart abandonment.
            </p>
          </div>

          {/* Case 2 */}
          <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500/50 hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-xl mb-4 text-white">B2B Lead Gen</h3>
            <p className="text-gray-400">
              Built an automated lead-scoring platform for a pan-African IT
              services provider — improving sales efficiency and generating 3x
              more qualified opportunities.
            </p>
          </div>

          {/* Case 3 */}
          <div className="p-8 bg-zinc-900 border border-zinc-800 rounded-2xl hover:border-blue-500/50 hover:shadow-md transition-all duration-300">
            <h3 className="font-bold text-xl mb-4 text-white">Startup Launch</h3>
            <p className="text-gray-400">
              Helped a fintech startup migrate to cloud infrastructure with
              built-in cybersecurity — cutting hosting costs by 40% and ensuring
              compliance from day one.
            </p>
          </div>
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
          <h2 className="text-4xl font-extrabold mt-6 mb-6 text-white">
            Empowering businesses through digital innovation
          </h2>
          <p className="text-lg text-gray-400 leading-relaxed">
            We are a Ghanaian-based digital agency dedicated to helping
            companies thrive in the digital world through modern strategies and
            solutions.
          </p>
        </div>
        <div className="w-full h-80 bg-zinc-900 rounded-3xl flex items-center justify-center overflow-hidden border border-zinc-800">
          <Image
            src="/replacement.png"
            alt="About Illustration"
            width={600}
            height={400}
            className="object-cover rounded-3xl opacity-90"
          />
        </div>
      </motion.section>

      {/* Contact Us */}
      <motion.section
        className="bg-zinc-900 border-t border-zinc-800 text-white py-24"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="bg-blue-500 text-white font-semibold px-4 py-1 rounded">
              Contact Us
            </span>
            <h2 className="text-4xl font-extrabold mt-6 mb-6 text-white">
              Let&apos;s work together
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Get in touch and let&apos;s discuss how we can help your business
              grow.
            </p>
            <div className="space-y-4 text-gray-300">
              <p>Email: xavslabs@gmail.com</p>
              <p>Phone: (+233) 054-395-1760</p>
              <p>Location: Accra, Ghana</p>
            </div>
          </div>
          <form
            action="/api/contact"
            method="POST"
            className="bg-zinc-950 border border-zinc-800 text-gray-100 rounded-2xl p-8 shadow-lg"
          >
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors"
              />
            </div>
            <textarea
              name="message"
              placeholder="Your message"
              required
              className="w-full p-3 bg-zinc-800 border border-zinc-700 rounded-lg h-32 mb-4 text-gray-100 placeholder-gray-400 focus:border-blue-400 focus:outline-none transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-400 transition-all duration-300 shadow-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto px-6 py-12 border-t border-zinc-800 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} XAVSlab. All rights reserved.
      </footer>
    </div>
  );
}
