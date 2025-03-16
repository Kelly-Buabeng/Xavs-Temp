"use client";
import BotIcon from "@/components/bot";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen dark:bg-black text-gray-900 dark:text-white relative">
      <div className="fixed right-0 items-center top-1/2 flex z-50">
        <BotIcon />
      </div>

      {/* Hero Section */}
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center relative transition-opacity duration-1000"
        style={{
          backgroundImage: `url('/image3.jpg')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full absolute top-0 bg-black/60"></div>
        <div className="max-w-4xl mx-auto text-center p-6 z-10">
          <h1 className="text-4xl font-bold text-gray-300">CONTACT US</h1>
          <p className="text-md mt-4 text-gray-100">
            We&apos;d love to hear from you!
          </p>
        </div>
      </div>

      {/* Contact Form */}
      <section className="bg-white dark:bg-gray-950 w-full flex flex-col items-center pb-10">
        <div className="my-6 md:max-w-3xl px-5 w-full text-center">
          <h1 className="dark:text-gray-200 text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            similique eos voluptate numquam, inventore ea ipsa maiores esse quia
            fugiat laborum labore. Officiis aperiam iure dolores ab architecto
            atque ea!
          </h1>
        </div>
        <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 grid-cols-1 gap-5">
          <div className="px-3">
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-lg shadow-lg dark:shadow-gray-900/80"
            >
              <div className="mb-4 ">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-bold mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 border dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition duration-300"
              >
                {submitted ? "Message Sent!" : "Send Message"}
              </button>
            </form>
          </div>
          <div className="w-full p-8 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-blue-500 mb-4">Reach Us</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis
              diam lectus sapien.
            </p>
            <div className="flex space-x-4 mb-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-blue-500"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
            <div className="w-full h-[500px] md:h-64 bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61721.31638275849!2d-0.16286549038425105!3d5.623273753349461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b13b0062aad%3A0x75de9717e31b2442!2sAccra%20Mall!5e0!3m2!1sen!2sus!4v1741818998308!5m2!1sen!2sus"
                width="600"
                height="600"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="flex justify-center items-center gap-6 pb-10 bg-white dark:bg-gray-950">
          <Instagram />
          <Facebook />
          <Youtube />
          <Twitter />
        </div>
      </section>
    </div>
  );
}
