"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-2xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6"
    >
      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-900 dark:text-white">Get In Touch</h2>
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-lg mx-auto">
          Feel free to reach out for collaborations, project inquiries, or just to say hi! I'd love to hear from you.
        </p>
      </div>
      
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="bg-white dark:bg-neutral-900 rounded-2xl shadow-lg p-6 sm:p-8 flex flex-col gap-5 sm:gap-6 border border-gray-100 dark:border-neutral-800 hover:shadow-xl transition-shadow duration-300"
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your full name"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
            required
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="your.email@example.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500"
            required
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-200 mb-2">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell me about your project or just say hello!"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 placeholder-gray-400 dark:placeholder-gray-500 resize-none"
            required
          />
        </motion.div>
        <motion.button
          type="submit"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="group relative flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base overflow-hidden"
        >
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          {/* Content */}
          <div className="relative flex items-center gap-2">
            <motion.div
              initial={{ rotate: 0 }}
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <Mail size={18} className="text-white" />
            </motion.div>
            <span>Send Message</span>
          </div>
          
          {/* Loading State (hidden by default) */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-0">
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        </motion.button>
      </motion.form>
    
    </motion.section>
  );
} 