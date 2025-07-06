"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { InteractiveGridPattern } from "./ui/interactive-grid-pattern";
import { ShimmerButton } from './ui/shimmer-button';


export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="relative w-full min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950 px-4 transition-colors duration-300 overflow-hidden"
      aria-label="Hero Section"
    >
      {/* Background Pattern */}
     <div className="absolute inset-0">
  <InteractiveGridPattern className="w-full h-full" />
</div>




      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="relative z-10 max-w-4xl text-center"
      >

        <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-tr from-white/10 via-white/30 to-white/10 animate-border-shimmer mb-6">
      <div className="flex items-center gap-2 rounded-full bg-black text-white px-6">
        <Zap size={16} className="text-[#EB7C46]" />
        <span className="font-medium">Web Developer</span>
      </div>
    </div>



        {/* <RainbowButton >Get Unlimited Access</RainbowButton>;
        <div className="inline-block mb-4 rounded-full bg-black text-white dark:bg-white dark:text-black px-4 py-1 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300">
         
        </div> */}

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
          Software Engineering
        </h1>

        <p className="mt-6 text-lg md:text-xl lg:text-2xl text-gray-700 dark:text-gray-200 max-w-3xl mx-auto">
         Hi, I'm Mohd Arbaz 👋  
Full Stack Developer | Software Engineer | BCA Student  
I build modern and scalable web applications using the MERN stack.  
Currently working on Many project and open to internship opportunities.🚀
        </p>
      </motion.div>
    </motion.section>
  );
}
