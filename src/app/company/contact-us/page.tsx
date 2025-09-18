"use client";
import BotIcon from "@/components/bot";
import { services } from "@/components/data";
import Footer from "@/components/footer";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeLocation, setActiveLocation] = useState("Accra");


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

      {/* Hero Section - Made more compact */}
      <div
        className="h-60 flex items-center justify-center bg-cover bg-center relative transition-opacity duration-1000"
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

      {/* Main Content - More compact layout */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-10">
          <p className="dark:text-gray-200 text-gray-700 max-w-3xl mx-auto">
            Have questions or want to discuss a project? Reach out to our team and we'll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Information */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-blue-500">Get In Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Phone className="text-blue-500 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <Mail className="text-blue-500 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">hello@xavstech.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full mr-4">
                  <MapPin className="text-blue-500 h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600 dark:text-gray-400">123 Tech Street, Accra, Ghana</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
              <h3 className="font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="bg-gray-100 dark:bg-gray-800 p-3 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/30 transition">
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            {/* Location Section with Multiple Maps */}
            <div className="pt-6">
              <h3 className="font-semibold mb-3">Our Locations</h3>

              <div className="flex space-x-3 mb-4">
                {["Accra", "Nigeria", "UK"].map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setActiveLocation(loc)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                      activeLocation === loc
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"
                    }`}
                  >
                    {loc}
                  </button>
                ))}
              </div>

              <div className="h-64 rounded-lg overflow-hidden">
                {activeLocation === "Accra" && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61721.31638275849!2d-0.16286549038425105!3d5.623273753349461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9b13b0062aad%3A0x75de9717e31b2442!2sAccra%20Mall!5e0!3m2!1sen!2sus!4v1741818998308!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                )}

                {activeLocation === "Nigeria" && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.484590605551!2d3.379206515334495!3d6.524379525232598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b15a884b5d9%3A0x8c6c9936e5b9b1f6!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1741819000000!5m2!1sen!2sng"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                )}

                {activeLocation === "UK" && (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19801.50228789864!2d-0.1277585!3d51.5073509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b333aaaabbb%3A0x1234567890abcdef!2sLondon%2C%20UK!5e0!3m2!1sen!2suk!4v1741819012345!5m2!1sen!2suk"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    className="rounded-lg"
                  ></iframe>
                )}
              </div>
            </div>

          </div>
          
          {/* Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="p-6 rounded-lg shadow-lg dark:shadow-gray-900/80 bg-white dark:bg-gray-900"
            >
              <div className="mb-4">
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
            
            <div className="mt-8 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
              <h3 className="font-semibold mb-3">Response Time</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer services={services} />
    </div>
  );
}