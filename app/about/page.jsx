"use client";

import { motion } from "framer-motion";
import { Download, Github, User } from "lucide-react";
import { InteractiveHoverButton } from '../components/ui/interactive-hover-button';

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
       <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-tr from-white/10 via-white/30 to-white/10 animate-border-shimmer mb-6">
      <div className="flex items-center gap-2 rounded-full bg-black text-white px-6">
        <User size={16} className="text-[#EB7C46]" />
        <span className="font-medium">  About Me</span>
      </div>
    </div>
       
        {/* <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 text-xs font-semibold shadow">About Me</span> */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
  Growing as a developer <br /> one project at a time
</h2>

        <p className="text-gray-700 dark:text-gray-200 mb-8 text-base md:text-lg">
 I’m Mohd Arbaz, a passionate Full Stack Developer and second-year BCA student at JMS Group of Institutions.  
I specialize in building modern, scalable web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).
<br />

I’ve built and deployed multiple real-world projects, including an AI Interview Platform, an Expense Tracker, and a Car Rentals web application.  
I’m actively exploring more ideas and working on several full-stack projects that focus on solving real-life problems with clean UI, authentication, API integration, and responsive design.
<br />
I enjoy learning new technologies, solving problems, and turning ideas into functional products.  
I’m currently open to internship opportunities where I can apply my skills, collaborate with teams, and grow as a developer.
</p>

         <div className="flex gap-4">
                       
                      
         <InteractiveHoverButton 
                        className="flex-1 justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"
         
         
         onClick={handleDownload} icon={Download}>
  Download CV
</InteractiveHoverButton>

<InteractiveHoverButton 
                        className="flex-1 justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl"

  as="a"
  href="https://github.com/arbazkhan000"
  target="_blank"
  rel="noopener noreferrer"
  icon={Github}
>
  Github
</InteractiveHoverButton>
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
