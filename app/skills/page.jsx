const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Redux"]
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "MongoDB", "REST API"]
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "GitHub",  "Vercel", "Netlify",  "Postman"]
  },
  {
    category: "Other",
    items: ["Python", "C++",  "Framer Motion","Appwrite","Supabase"]
  }
];

export default function Skills() {
  return (
    <section className="max-w-4xl mx-auto py-16 px-4">
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
                  className="bg-gray-100 dark:bg-neutral-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium shadow"
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
