"use client";

import BotIcon from "@/components/bot";
import { services } from "@/components/data";
import Footer from "@/components/footer";
import { ArrowUpRight } from "lucide-react";

import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen dark:bg-black bg-gray-100 text-gray-900 dark:text-white relative">
      {/* Floating Bot Icon */}
      <div className="fixed right-0 top-1/2 transform -translate-y-1/2 flex z-50">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center relative transition-opacity duration-1000"
        style={{
          backgroundImage: `url('/aboutbg.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="max-w-4xl mx-auto text-center p-6 z-10">
          <h1 className="text-5xl font-extrabold text-gray-100 tracking-wide">
            About Us
          </h1>
          <p className="text-lg mt-4 text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We are dedicated to providing exceptional service and support. Reach
            out to us with any inquiries or feedback—we’re here to help!
          </p>
        </div>
      </div>

      <section className="py-16 dark:bg-black">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center">
          {/* Image Section */}
          <div
            style={{
              backgroundImage: "url('/about-pic.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="h-[400px] w-full rounded-md"
          ></div>

          {/* Content Section */}
          <div className="text-center md:text-left dark:bg-gray-950 p-5 bg-gray-100 rounded-r-md">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-200 mb-4">
              About Us
            </h2>
            <p className="text-md text-gray-600 dark:text-gray-300 max-w-3xl">
              XAVS Technologies is a Ghanaian-based AI and cybersecurity company
              dedicated to helping businesses automate, secure, and scale. We
              leverage AI, cloud computing, and next-gen cybersecurity solutions
              to empower enterprises across Africa and beyond.
            </p>

            <div className="mt-3 text-sm flex flex-col gap-2">
              <li className="flex md:gap-2 italic text-gray-600 dark:text-gray-400 flex-wrap">
                <h3 className="font-bold">AI-Driven Business Automation:</h3>{" "}
                <p className="text-start">
                  Cut manual work, increase efficiency.
                </p>
              </li>
              <li className="flex gap-2 italic text-gray-600 dark:text-gray-400 flex-wrap">
                <h3 className="font-bold">Enterprise-Grade Cybersecurity:</h3>{" "}
                <p className="text-start">
                  AI-powered threat detection & protection.
                </p>
              </li>
              <li className="flex gap-2 italic text-gray-600 dark:text-gray-400 flex-wrap">
                <h3 className="font-bold">
                  Cloud Transformation & IT Consulting:
                </h3>{" "}
                <p className="text-start">
                  Scalable, cost-effective cloud solutions.
                </p>
              </li>
              <li className="flex gap-2 italic text-gray-600 dark:text-gray-400 flex-wrap">
                <h3 className="font-bold">Industry-Specific Solutions:</h3>{" "}
                <p className="text-start">
                  AI for finance, e-commerce, healthcare & more.
                </p>
              </li>
            </div>

            <div className="mt-6">
              <a
                href="#"
                className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
              >
                Book a Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section
        className="relative bg-gray-900 dark:bg-gray-800 text-gray-200"
        style={{
          backgroundImage: `url('/about1.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50 z-10"></div>

        {/* Content */}
        <div className="relative max-w-4xl mx-auto text-center py-16 px-6 md:px-12 lg:px-24 z-20">
          <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            Our goal is to innovate and provide cutting-edge solutions that
            simplify everyday tasks. We prioritize quality, efficiency, and
            customer satisfaction above all else.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="text-center md:text-left flex flex-col gap-4">
            <h1 className="text-4xl font-semibold">Title</h1>
            <p className="text-gray-600 dark:text-gray-300">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Inventore a commodi natus ducimus incidunt id reprehenderit
              voluptas aliquam, aspernatur, tenetur reiciendis facere repellat
              beatae exercitationem modi, rerum voluptate enim alias.
            </p>
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300 w-[200px]">
              Button Text
            </button>
          </div>
          <div className="flex justify-center">
            <Image
              src="/about2.png"
              alt=""
              width={400}
              height={400}
              className=""
            />
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
