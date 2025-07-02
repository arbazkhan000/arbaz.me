"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Carousel } from "../components/ui/carousel";

const projects = [
  {
    id:1,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    isNew: true,
    live: "#",
    code: "#",
  },
  {
    id:2,
    title: "E-Rikshaw Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    isNew: false,
    live: "#",
    code: "#",
  },
  {
    id:3,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    tech: ["Next.js", "TypeScript", "Stripe", "Prisma", "PostgreSQL"],
    isNew: true,
    live: "#",
    code: "#",
  },
  {
    id:4,
    title: "AI Task Manager",
    description:
      "Smart task management app that uses AI to categorize, prioritize, and suggest optimal task scheduling.",
    tech: ["React", "Python", "TensorFlow", "FastAPI", "MongoDB"],
    isNew: false, // test carousel logic by setting this to false
    live: "#",
    code: "#",
  },
];

export default function Projects() {
  const newProjects = projects.filter((project) => project.isNew);
  const oldProjects = projects.filter((project) => !project.isNew);
  const totalProjects = projects.length;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-4xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Projects <span className="text-base font-medium text-gray-500 dark:text-gray-400">({totalProjects} total)</span></h2>
      <p className="mb-10 text-gray-700 dark:text-gray-300">Some of my featured work and open-source contributions</p>

      {/* Recent Projects Grid */}
      {newProjects.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Projects</h3>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="grid md:grid-cols-2 gap-8 mb-10"
          >
            {newProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow p-0 overflow-hidden flex flex-col border border-gray-100 dark:border-neutral-800"
              >
                <div className="h-48 bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
                  <span className="text-gray-300 dark:text-gray-600 text-3xl select-none">🖼️</span>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow hover:bg-gray-900 dark:hover:bg-neutral-200 transition"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-black dark:bg-neutral-800 dark:text-white font-semibold shadow hover:bg-gray-200 dark:hover:bg-neutral-700 transition border border-gray-200 dark:border-neutral-700"
                    >
                      <Github size={18} /> View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </>
      )}

      {/* Old Projects Carousel */}
      {oldProjects.length > 0 && (
        <>
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Old Projects</h3>
          <Carousel>
            {oldProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                className="bg-white dark:bg-neutral-900 rounded-2xl shadow border border-gray-100 dark:border-neutral-800 flex flex-col"
              >
                <div className="h-48 bg-gray-100 dark:bg-neutral-800 flex items-center justify-center">
                  <span className="text-gray-300 dark:text-gray-600 text-3xl select-none">🖼️</span>
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium shadow"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.live}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold shadow hover:bg-gray-900 dark:hover:bg-neutral-200 transition"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </a>
                    <a
                      href={project.code}
                      target="_blank"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-100 text-black dark:bg-neutral-800 dark:text-white font-semibold shadow hover:bg-gray-200 dark:hover:bg-neutral-700 transition border border-gray-200 dark:border-neutral-700"
                    >
                      <Github size={18} /> View Code
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </Carousel>
        </>
      )}
    </motion.section>
  );
}
