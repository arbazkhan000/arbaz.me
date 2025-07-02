// Navbar.jsx

"use client";


import { motion } from "framer-motion";
import { CodeXml, Github, Linkedin, Mail, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full px-4 py-2 flex items-center justify-between bg-white dark:bg-neutral-900 rounded-full border border-gray-200 dark:border-neutral-700 max-w-4xl mx-auto mt-6 transition-colors duration-300"
    >
      {/* Logo */}
      <div className="flex items-center gap-2">
        
        <Link href="/">
        <span className="font-semibold text-black dark:text-white">  <CodeXml /></span>
        </Link>
      </div>

      {/* Links - Desktop */}
      <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-black dark:text-white">
        <li><Link href="/about">About</Link></li>
        <li><Link href="/educations">Education</Link></li>
        <li><Link href="/skills">Skills</Link></li>

        <li><Link href="/projects">Projects</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

      {/* Icons */}
      <div className="flex items-center gap-2">
        {/* Hamburger Button - only on small screens */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-black dark:text-white md:hidden"
          aria-label="Open menu"
        >
          <Menu size={22} />
        </button>
        {mounted && (
          <button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-black dark:text-white"
            aria-label="Toggle dark mode"
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        )}
        <a
          href="https://www.linkedin.com/in/mohd-arbaz-khan-000/"
          target="_blank"
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-black dark:text-white"
        >
          < Linkedin  size={18} />
        </a>
        <a
          href="https://github.com/arbazkhan000"
          target="_blank"
          className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-black dark:text-white"
        >
          <Github size={18} />
        </a>
        <a
          href="mailto:mdarbaz9675@gmail.com"
          target="_blank"
          className="p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-neutral-800 border-gray-200 dark:border-neutral-700 text-black dark:text-white"
        >
          <Mail size={18} />
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white dark:bg-neutral-900 p-4 shadow-md flex flex-col gap-4 md:hidden z-50 text-black dark:text-white border-t border-gray-200 dark:border-neutral-700">
          <button
            onClick={() => setIsOpen(false)}
            className="self-end mb-2 p-2 rounded-full border hover:bg-gray-100 dark:hover:bg-neutral-800 border-gray-200 dark:border-neutral-700"
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
          <a href="/about" onClick={() => setIsOpen(false)}>About</a>
          <a href="/educations" onClick={() => setIsOpen(false)}>Education</a>
          <a href="/skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="/projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="/contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;
