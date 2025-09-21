"use client";

import BotIcon from "@/components/bot";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [activeLocation, setActiveLocation] = useState("Accra");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="bg-white text-gray-900 font-sans min-h-screen flex flex-col">
      {/* Floating Bot Icon */}
      <div className="fixed right-4 bottom-6 z-50">
        <BotIcon />
      </div>

      {/* Hero */}
      <motion.section
        className="max-w-4xl mx-auto px-6 py-20 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="text-5xl font-extrabold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          We’d love to hear from you! Get in touch and let’s build something great together.
        </p>
      </motion.section>

      {/* Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 gap-12 flex-grow">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Info Block */}
          <div className="rounded-2xl border border-gray-200 p-8 bg-gray-50">
            <h2 className="text-xl font-bold mb-6">Get In Touch</h2>
            <div className="space-y-6">
              <InfoRow
                icon={<Phone className="h-5 w-5" />}
                label="Phone"
                value="+233 (0) 55-123-4567"
              />
              <InfoRow
                icon={<Mail className="h-5 w-5" />}
                label="Email"
                value="hello@xavslabs.com"
              />
              <InfoRow
                icon={<MapPin className="h-5 w-5" />}
                label="Address"
                value="123 Tech Street, Accra, Ghana"
              />
            </div>

            {/* Social Media */}
            <div className="pt-6">
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-3">
                <SocialIcon href="#" Icon={Facebook} />
                <SocialIcon href="#" Icon={Twitter} />
                <SocialIcon href="#" Icon={Instagram} />
                <SocialIcon href="#" Icon={Youtube} />
              </div>
            </div>
          </div>

          {/* Locations Block */}
          <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
            <h3 className="font-semibold mb-3">Our Locations</h3>
            <div className="flex space-x-3 mb-4">
              {["Accra", "Nigeria", "UK"].map((loc) => (
                <button
                  key={loc}
                  onClick={() => setActiveLocation(loc)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    activeLocation === loc
                      ? "bg-gray-900 text-white"
                      : "bg-white border border-gray-200 hover:bg-gray-100"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>

            <motion.div
              key={activeLocation}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="h-56 rounded-xl overflow-hidden border"
            >
              <iframe
                src={
                  activeLocation === "Accra"
                    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31715.02706276963!2d-0.1786116!3d5.6301224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9a9a1cfc1a9d%3A0x8b7c1345c1a9a8!2sEast%20Legon%2C%20Accra!5e0!3m2!1sen!2sgh!4v1695200000000!5m2!1sen!2sgh"
                    : activeLocation === "Nigeria"
                    ? "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63512.08292829058!2d3.348889!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b1a96d7b1ab%3A0xd7f8b6c51c3f6f!2sLagos!5e0!3m2!1sen!2sng!4v1695200000001!5m2!1sen!2sng"
                    : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.951488411983!2d-0.127647!3d51.5073219!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b3335a8c7d1%3A0x4291f3171b9b1c!2sLondon!5e0!3m2!1sen!2suk!4v1695200000002!5m2!1sen!2suk"
                }
                width="100%"
                height="100%"
                loading="lazy"
                className="border-none"
                title={`${activeLocation} Location`}
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <form
            onSubmit={handleSubmit}
            className="p-8 rounded-2xl border border-gray-200 bg-gray-50"
          >
            <FormInput
              id="name"
              label="Name"
              value={formData.name}
              onChange={handleChange}
            />
            <FormInput
              id="email"
              type="email"
              label="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <FormTextarea
              id="message"
              label="Message"
              value={formData.message}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-3 rounded-xl transition"
            >
              {submitted ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </motion.div>
      </section>
    </div>
  );
}

/* ---------- Small Subcomponents ---------- */
function InfoRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start">
      <span className="p-2 rounded-full bg-gray-100 mr-4">{icon}</span>
      <div>
        <h3 className="font-semibold">{label}</h3>
        <p className="text-gray-600">{value}</p>
      </div>
    </div>
  );
}

function SocialIcon({ href, Icon }: { href: string; Icon: React.ElementType }) {
  return (
    <a
      href={href}
      className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition"
    >
      <Icon className="h-5 w-5 text-gray-700" />
    </a>
  );
}

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function FormInput({ id, label, value, onChange, type = "text" }: FormInputProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-sm font-semibold mb-2 text-gray-800"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required
        className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-gray-900"
      />
    </div>
  );
}

interface FormTextareaProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function FormTextarea({ id, label, value, onChange }: FormTextareaProps) {
  return (
    <div className="mb-6">
      <label
        htmlFor={id}
        className="block text-sm font-semibold mb-2 text-gray-800"
      >
        {label}
      </label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
        rows={4}
        className="w-full p-3 border border-gray-200 rounded-lg bg-white focus:ring-2 focus:ring-gray-900"
      />
    </div>
  );
}
