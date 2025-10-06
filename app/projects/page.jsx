"use client";

import { motion } from "framer-motion";
import { Github, Globe } from "lucide-react";
import { InteractiveHoverButton } from "../components/ui/interactive-hover-button";
import { projects } from "../mockData/data";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../components/ui/carousel";

export default function Projects() {
    const newProjects = projects.filter((p) => p.isNew);

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl mx-auto py-8 sm:py-12 md:py-16 px-4 sm:px-6"
        >
            {/* Header */}
            <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-tr from-white/10 via-white/30 to-white/10 animate-border-shimmer mb-6">
                <div className="flex items-center gap-2 rounded-full bg-black text-white px-6 py-1.5">
                    <Globe size={16} className="text-[#EB7C46]" />
                    <span className="font-medium">Projects</span>
                </div>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900 dark:text-white">
                Projects{" "}
                <span className="text-sm sm:text-base font-medium text-gray-500 dark:text-gray-400">
                    ({projects.length} total)
                </span>
            </h2>
            <p className="mb-6 sm:mb-10 text-sm sm:text-base text-gray-700 dark:text-gray-300">
                Some of my featured work and open-source contributions
            </p>

            {newProjects.length > 0 && (
                <>
                    <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                        New Projects
                    </h3>

                    <Carousel
                        opts={{
                            loop: true,
                            align: "start",
                        }}
                        className="relative"
                    >
                        <CarouselContent>
                            {newProjects.map((project, idx) => (
                                <CarouselItem
                                    key={project.id}
                                    className="basis-full sm:basis-1/2 md:basis-1/3 flex"
                                >
                                    <motion.div
                                        initial={{
                                            opacity: 0,
                                            scale: 0.95,
                                            y: 20,
                                        }}
                                        animate={{
                                            opacity: 1,
                                            scale: 1,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.1 + idx * 0.1,
                                            ease: "easeOut",
                                        }}
                                        whileHover={{ y: -4, scale: 1.02 }}
                                        className="group relative flex flex-col bg-white dark:bg-neutral-900 
                    rounded-2xl shadow-md border border-gray-200 dark:border-neutral-800 
                    overflow-hidden hover:shadow-lg transition-all duration-500 
                    h-full min-h-[400px] sm:min-h-[420px] md:min-h-[440px]"
                                    >
                                        {/* Image */}
                                        <div className="relative h-32 sm:h-36 md:h-40 overflow-hidden">
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                        </div>

                                        {/* Content */}
                                        <div className="p-4 flex flex-col flex-1">
                                            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1 line-clamp-1">
                                                {project.title}
                                            </h3>
                                            <p className="text-gray-600 dark:text-gray-300 text-sm leading-snug mb-2 line-clamp-3 flex-1">
                                                {project.description.slice(
                                                    0,
                                                    70
                                                )}
                                                ...
                                            </p>

                                            <div className="mb-2">
                                                <span className="block text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                                                    Tech Stack
                                                </span>
                                                <div className="flex flex-wrap gap-1">
                                                    {project.tech.map(
                                                        (tech, techIdx) => (
                                                            <motion.span
                                                                key={tech}
                                                                initial={{
                                                                    opacity: 0,
                                                                    scale: 0.8,
                                                                }}
                                                                animate={{
                                                                    opacity: 1,
                                                                    scale: 1,
                                                                }}
                                                                transition={{
                                                                    duration: 0.3,
                                                                    delay:
                                                                        0.2 +
                                                                        techIdx *
                                                                            0.05,
                                                                }}
                                                                className="bg-gray-100 dark:bg-neutral-800 text-gray-700 dark:text-gray-200 
                              px-2 py-0.5 rounded-full text-xs border border-gray-200 dark:border-neutral-600"
                                                            >
                                                                {tech}
                                                            </motion.span>
                                                        )
                                                    )}
                                                </div>
                                            </div>

                                            <div className="flex gap-3 mt-auto pt-3 border-t border-gray-200 dark:border-neutral-700">
                                                {/* 🌐 Live Demo Button */}
                                                <InteractiveHoverButton
                                                    as="a"
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 
      bg-gradient-to-r from-blue-500 to-purple-600 
      hover:from-purple-600 hover:to-pink-500 
      text-white text-sm font-medium py-2.5 rounded-xl 
      shadow-md shadow-blue-500/20 hover:shadow-purple-500/40 
      transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
                                                >
                                                    <span className="flex items-center gap-2 text-xs ">
                                                       
                                                        Live Demo
                                                    </span>
                                                </InteractiveHoverButton>

                                                {/* 💻 View Code Button */}
                                                <InteractiveHoverButton
                                                    as="a"
                                                    href={project.code}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex-1 flex items-center justify-center gap-2 
      bg-gray-50 dark:bg-neutral-800 
      border border-gray-200 dark:border-neutral-700 
      hover:border-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-700 
      text-gray-800 dark:text-gray-200 
      text-sm font-medium py-2.5 rounded-xl 
      transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02]"
                                                >
                                                    <span className="flex items-center gap-2 text-xs">
                                                        
                                                        View Code
                                                    </span>
                                                </InteractiveHoverButton>
                                            </div>
                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>

                        {/* Next/Prev arrows */}
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </>
            )}
        </motion.section>
    );
}
