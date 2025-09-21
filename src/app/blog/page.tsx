"use client";

import React from "react";

const BlogPage: React.FC = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white text-center px-6">
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Blogs Coming Soon
        </h1>
        <p className="text-lg text-gray-600 max-w-xl mx-auto">
          We’re working on insightful articles and updates. Stay tuned for the
          latest news from XAVS LAB.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
