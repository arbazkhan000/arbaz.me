"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 px-4 transition-colors duration-300"
    >
      
    <div className="absolute inset-0 -z-10 pointer-events-none select-none overflow-hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="w-full h-full"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
              patternContentUnits="userSpaceOnUse"
            >
              <path
                d="M 80 0 L 0 0 0 80"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-indigo-200 dark:text-indigo-900"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>


      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="max-w-4xl text-center"
      >
        <div className="inline-block mb-4 rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-sm font-medium shadow-md">
          ⚡ Fullstack Web Developer
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
          Software Engineering
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
          Hi, I'm Mohd Arbaz — a Full Stack Developer in the making. I'm currently
          learning modern web development and working on exciting projects to sharpen
          my skills. I'm passionate about turning ideas into real applications and
          continuously improving as a developer. 🚀
        </p>

       
      </motion.div>
    </motion.section>
  );
}
