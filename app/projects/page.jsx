"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Globe } from "lucide-react";

import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";
import { projects } from '../mockData/data';


export default function Projects() {
  const newProjects = projects.filter((p) => p.isNew);
  const oldProjects = projects.filter((p) => !p.isNew);

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-4xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6"
    >
      <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-tr from-white/10 via-white/30 to-white/10 animate-border-shimmer mb-6">
        <div className="flex items-center gap-2 rounded-full bg-black text-white px-6">
          <Globe size={16} className="text-[#EB7C46]" />
          <span className="font-medium">Project</span>
        </div>
      </div>

      <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
        Projects <span className="text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">({projects.length} total)</span>
      </h2>
      <p className="mb-6 sm:mb-10 text-sm sm:text-base text-gray-700 dark:text-gray-300">Some of my featured work and open-source contributions</p>

      {/* New Projects */}
      {newProjects.length > 0 && (
        <>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">New Projects</h3>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 sm:mb-10">
            {newProjects.map((project, idx) => (
                              <motion.div
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + idx * 0.1, ease: "easeOut" }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative flex flex-col h-[480px] sm:h-[520px] bg-white dark:bg-neutral-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-800 overflow-hidden hover:shadow-2xl transition-all duration-500"
                >
                  {/* Project Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      {project.isNew ? "NEW" : "FEATURED"}
                    </div>
                  </div>

                  {/* Image Section with Overlay */}
                  <div className="relative flex-shrink-0 h-[160px] sm:h-[180px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content Section */}
                  <div className="p-4 sm:p-6 flex flex-col flex-1">
                    {/* Title with Icon */}
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                      <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
                        {project.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 flex-1">
                      {project.description.split(0,40)}
                    </p>

                    {/* Tech Stack with Labels */}
                    <div className="mb-3 sm:mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                          Tech Stack
                        </span>
                        <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tech.map((tech, techIdx) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.2 + techIdx * 0.05 }}
                            className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-700 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm border border-gray-200 dark:border-neutral-600 hover:shadow-md transition-all duration-200 hover:scale-105"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                                          {/* Action Buttons */}
                      <div className="flex gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4 border-t border-gray-100 dark:border-neutral-700">
                        <InteractiveHoverButton
                          as="a"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          icon={ExternalLink}
                          className="flex-1 justify-center bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl text-xs sm:text-sm"
                        >
                          Live Demo
                        </InteractiveHoverButton>
                        <InteractiveHoverButton
                          as="a"
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          icon={Github}
                          className="flex-1 justify-center bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-neutral-600 text-xs sm:text-sm"
                        >
                          View Code
                        </InteractiveHoverButton>
                      </div>
                  </div>

                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </motion.div>
            ))}
          </div>
        </>
      )}

      {/* Old Projects Scroll */}
      {oldProjects.length > 0 && (
        <>
          <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-gray-900 dark:text-white">Recent Projects</h3>
          <div className="relative h-[70vh] sm:h-[80vh] overflow-y-auto snap-y snap-mandatory">
            {oldProjects.map((project, idx) => (
              <div key={project.id} className="h-full w-full snap-start flex items-center justify-center">
                                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + idx * 0.1, ease: "easeOut" }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="group relative flex flex-col h-[480px] sm:h-[520px] bg-white dark:bg-neutral-900 rounded-xl sm:rounded-2xl shadow-lg border border-gray-100 dark:border-neutral-800 overflow-hidden w-full max-w-sm sm:max-w-2xl mx-auto my-4 hover:shadow-2xl transition-all duration-500"
                  >
                    {/* Project Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                        {project.isNew ? "NEW" : "FEATURED"}
                      </div>
                    </div>

                    {/* Image Section with Overlay */}
                    <div className="relative flex-shrink-0 h-[160px] sm:h-[220px] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-4 sm:p-6 flex flex-col flex-1">
                      {/* Title with Icon */}
                      <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"></div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white line-clamp-1">
                          {project.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-3 flex-1">
                        {project.description.split(0,40)}
                      </p>

                      {/* Tech Stack with Labels */}
                      <div className="mb-3 sm:mb-4">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                            Tech Stack
                          </span>
                          <div className="flex-1 h-px bg-gradient-to-r from-gray-300 to-transparent dark:from-gray-600"></div>
                        </div>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {project.tech.map((tech, techIdx) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.2 + techIdx * 0.05 }}
                              className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-neutral-800 dark:to-neutral-700 text-gray-700 dark:text-gray-200 px-3 py-1.5 rounded-full text-xs font-medium shadow-sm border border-gray-200 dark:border-neutral-600 hover:shadow-md transition-all duration-200 hover:scale-105"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-2 sm:gap-3 mt-auto pt-3 sm:pt-4 border-t border-gray-100 dark:border-neutral-700">
                        <InteractiveHoverButton
                          as="a"
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          icon={ExternalLink}
                          className="flex-1 justify-center bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl text-xs sm:text-sm"
                        >
                          Live Demo
                        </InteractiveHoverButton>
                        <InteractiveHoverButton
                          as="a"
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          icon={Github}
                          className="flex-1 justify-center bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-neutral-600 text-xs sm:text-sm"
                        >
                          View Code
                        </InteractiveHoverButton>
                      </div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500/10 to-emerald-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                  </motion.div>
              </div>
            ))}
          </div>
        </>
      )}
    </motion.section>
  );
}
