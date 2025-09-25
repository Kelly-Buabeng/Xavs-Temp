"use client";

import React from "react";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-zinc-950 text-center px-6 font-sans">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Blogs Coming Soon
        </h1>
        <p className="text-lg text-white max-w-xl mx-auto leading-relaxed">
          We're working on insightful articles and updates. Stay tuned for the
          latest news from XAVS LAB.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;