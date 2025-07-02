"use client";

import { motion } from "framer-motion";
import { Download, Github } from "lucide-react";

export default function About() {


const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/mohd-arbaz-resume.pdf";
    link.download = "mohd-arbaz-resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-[60vh] w-full px-4 py-16 gap-12"
    >
      {/* Left: Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-xl w-full"
      >
        <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-xs font-semibold shadow">About Me</span>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
  Growing as a developer <br /> one project at a time
</h2>

        <p className="text-gray-700 dark:text-gray-200 mb-8 text-base md:text-lg">
  I'm Mohd Arbaz, a passionate and dedicated Full Stack Developer currently pursuing my BCA and building real-world web projects. I enjoy working with technologies like React, Node.js, and MongoDB to create clean, user-friendly, and functional applications. I'm constantly learning and improving, with a strong interest in scalable systems and modern development practices. My goal is to grow as a developer and contribute to impactful software solutions.
</p>

        <div className="flex gap-4">
          <a
                   href="https://github.com/arbazkhan000"
            target="_blank"
                     className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-full shadow hover:bg-gray-900 dark:hover:bg-neutral-200 transition"

          >
            <Github size={18} /> View Github
          </a>
           <button
          onClick={handleDownload}
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold rounded-full shadow hover:bg-gray-900 dark:hover:bg-neutral-200 transition"
        >
          Download CV <Download size={18} />
        </button>
        </div>
      </motion.div>
      {/* Right: Image Placeholder */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="w-64 h-64 rounded-xl bg-gray-100 dark:bg-neutral-800 flex items-center justify-center"
      >
        <span className="text-gray-300 dark:text-gray-600 text-2xl select-none">🖼️</span>
      </motion.div>
    </motion.section>
  );
}
