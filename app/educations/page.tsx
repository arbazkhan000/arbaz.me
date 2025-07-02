  "use client";

import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

const educationData = [
  {
    institution: "JMS Group of Institutions, Hapur",
    degree: "Bachelor of Computer Applications (BCA)",
    years: "2022 - Present",
    description:
      "Currently pursuing BCA with a strong foundation in web development, data structures, and programming. Actively working on personal and academic projects, and continuously exploring new technologies.",
    skills: ["JavaScript", "React.js","Next.js", "Node.js", "Data Structures", "MongoDB", "Tailwind CSS"],
  },
  
  
];


export default function Education() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="max-w-4xl mx-auto py-16 px-4"
    >
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Education</h2>
      <p className="mb-10 text-gray-700 dark:text-gray-300">A timeline of my academic background and key achievements</p>
      <div className="relative border-l-2 border-gray-200 dark:border-neutral-700 ml-4">
        {educationData.map((edu, idx) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 + idx * 0.15, ease: "easeOut" }}
            className="mb-12 ml-6 flex flex-col gap-2"
          >
            <div className="absolute -left-5 top-2 w-8 h-8 rounded-full bg-gray-100 dark:bg-neutral-800 flex items-center justify-center border border-gray-200 dark:border-neutral-700">
              <span className="text-gray-400 dark:text-gray-500 text-lg font-bold">🎓</span>
            </div>
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white flex items-center gap-2">
              {edu.institution}
            </h3>
            <div className="font-medium text-gray-800 dark:text-gray-200">{edu.degree}</div>
            <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm mb-1">
              <Calendar size={16} />
              {edu.years}
            </div>
            <div className="text-gray-700 dark:text-gray-300 mb-2 text-sm">{edu.description}</div>
            <div className="flex flex-wrap gap-2 mt-1">
              {edu.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 px-3 py-1 rounded-full text-xs font-medium shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
