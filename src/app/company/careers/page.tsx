"use client";

import BotIcon from "@/components/bot";
import { jobListings, services } from "@/components/data";
import Footer from "@/components/footer";
import { ChevronDown, ChevronUp, MapPin, Clock, Briefcase, Search } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

export default function CareersPage() {
  const [openJob, setOpenJob] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleJob = (index: number) => {
    setOpenJob(openJob === index ? null : index);
  };

  // Get unique categories
  const categories = ["all", ...new Set(jobListings.map(job => job.category))];

  // Filter jobs by category and search query
  const filteredJobs = jobListings
    .filter(job => activeCategory === "all" || job.category === activeCategory)
    .filter(job => 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
<motion.section
  className="h-[70vh] flex flex-col items-center justify-center bg-cover bg-center bg-fixed relative"
  style={{ backgroundImage: `url('/image.png')` }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
>
  <div className="absolute inset-0 bg-black/60"></div>
  <div className="max-w-4xl mx-auto text-center p-6 z-10">
    <motion.h1 
      className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      CAREERS AT XAVS
    </motion.h1>
    <motion.p 
      className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Join our team and help shape the future of technology
    </motion.p>
  </div>
  <motion.div 
    className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
  >
    <ChevronDown size={30} className="text-white" />
  </motion.div>
</motion.section>


      {/* Intro Section */}
      <motion.section 
        className="py-16 bg-white dark:bg-gray-800"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the XAVS Revolution</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              At XAVS Technologies, we are on a mission to revolutionize AI, cybersecurity, 
              and business automation. We are a lean, remote-first startup focused on driving 
              innovation and delivering cutting-edge solutions to businesses worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Briefcase, title: "Innovative Projects", desc: "Work on cutting-edge technology that transforms industries" },
              { icon: MapPin, title: "Remote First", desc: "Work from anywhere with our flexible remote policy" },
              { icon: Clock, title: "Flexible Hours", desc: "Balance work and life with our adaptable scheduling" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl text-center shadow-md hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Job Listings Section */}
      <motion.section 
        className="py-16 bg-gray-50 dark:bg-gray-900"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div 
            className="text-center mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Open Positions</h2>
            <p className="text-gray-600 dark:text-gray-300">
              Explore opportunities to join our growing team
            </p>
          </motion.div>

          {/* Search Bar */}
          <motion.div 
            className="relative max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              placeholder="Search by job title or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 focus:outline-none focus:border-blue-500 transition-all"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={18} />
          </motion.div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 hover:scale-105"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div 
                    className="p-6 cursor-pointer flex justify-between items-start"
                    onClick={() => toggleJob(index)}
                  >
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                        <span className="flex items-center">
                          <Briefcase size={14} className="mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <MapPin size={14} className="mr-1" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: openJob === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </div>
                  
                  {openJob === index && (
                    <motion.div 
                      className="px-6 pb-6 pt-2 border-t border-gray-100 dark:border-gray-700"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Requirements:</h4>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                          {job.requirements.map((req, i) => (
                            <li key={i}>{req}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold mb-2">Benefits:</h4>
                        <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
                          {job.benefits.map((benefit, i) => (
                            <li key={i}>{benefit}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium transition-colors">
                        Apply Now
                      </button>
                    </motion.div>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="text-center py-10">
                <p className="text-gray-500 dark:text-gray-400">No positions available in this category at the moment.</p>
                <p className="text-gray-500 dark:text-gray-400 mt-2">Check back later or explore other categories.</p>
              </div>
            )}
          </div>
        </div>
      </motion.section>

      <Footer services={services} />
      
      {/* Floating Chat Bot */}
      <div className="fixed right-6 bottom-6 z-50">
        <BotIcon />
      </div>
    </div>
  );
}