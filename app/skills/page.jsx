import { Code } from "lucide-react";
import { skills } from "../mockData/data";



export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
      <div className="relative inline-block p-[2px] rounded-full bg-gradient-to-tr from-white/10 via-white/30 to-white/10 animate-border-shimmer mb-6">
      <div className="flex items-center gap-2 rounded-full bg-black text-white px-6">
        <Code size={16} className="text-[#EB7C46]" />
        <span className="font-medium">  Skills</span>
      </div>
    </div>
      <h2 className="text-3xl font-bold mb-2 text-gray-900 dark:text-white">Skills</h2>
      <p className="mb-10 text-gray-700 dark:text-gray-300">A snapshot of my technical toolkit and favorite technologies.</p>
      <div className="grid md:grid-cols-2 gap-8">
        {skills.map((group) => (
          <div key={group.category}>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">{group.category}</h3>
            <div className="flex flex-wrap gap-3">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 px-3 py-1.5 rounded-full text-sm font-medium shadow"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
