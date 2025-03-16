"use client";
import BotIcon from "@/components/bot";
import { jobListings } from "@/components/data";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function CareersPage() {
  const [openJob, setOpenJob] = useState<number | null>(null);

  const toggleJob = (index: number) => {
    setOpenJob(openJob === index ? null : index);
  };
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black text-gray-900 dark:text-white relative">
      <div className="fixed right-0 items-center top-1/2 flex z-50">
        <BotIcon />
      </div>
      <div
        className="h-screen flex items-center justify-center bg-cover bg-center relative transition-opacity duration-1000"
        style={{
          backgroundImage: `url('/image.png')`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="w-full h-full absolute top-0 bg-black/60"></div>
        <div className="max-w-4xl mx-auto text-center p-6 z-10">
          <h1 className="text-4xl font-bold text-gray-300">
            CAREERS & CONTRACTOR OPPORTUNITIES
          </h1>
          <p className="text-md mt-4 text-gray-100">
            Join our team and help us build the future of technology.
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-4xl font-bold text-center mt-10">
          Join the XAVS Revolution
        </h1>
        <p className="text-center text-lg mt-4">
          At XAVS Technologies, we are on a mission to revolutionize AI,
          cybersecurity, and business automation. We are a lean, remote-first
          startup focused on driving innovation and delivering cutting-edge
          solutions to businesses worldwide.
        </p>
        {/* Job Listings */}
        <div className="mt-10 flex flex-col gap-4">
          {jobListings.map((job, index) => (
            <div
              key={index}
              className="dark:border-gray-800 border-gray-300 border-[1px] p-6 rounded-lg cursor-pointer"
              onClick={() => toggleJob(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold dark:text-white text-black">
                  {job.title}
                </h2>
                {openJob === index ? <ChevronUp /> : <ChevronDown />}
              </div>
              {openJob === index && (
                <div className="mt-2">
                  <p className="dark:text-gray-400 text-gray-400">
                    {job.description}
                  </p>
                  <button className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800">
                    Apply Now
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
