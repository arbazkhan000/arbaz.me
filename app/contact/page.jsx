"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";

export default function Contact() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-2xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Contact</h2>
      <p className="mb-8 text-gray-700 dark:text-gray-300">Feel free to reach out for collaborations, project inquiries, or just to say hi!</p>
      <form className="bg-white dark:bg-neutral-900 rounded-2xl shadow p-8 flex flex-col gap-6 border border-gray-100 dark:border-neutral-800">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="w-full px-4 py-2 rounded-lg border border-gray-200 dark:border-neutral-700 bg-gray-50 dark:bg-neutral-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow hover:bg-gray-900 dark:hover:bg-neutral-200 transition"
        >
          <Mail size={18} /> Send Message
        </button>
      </form>
    
    </motion.section>
  );
} 