const skills = [
  { name: "React / Next.js", level: "Advanced", category: "Frontend" },
  { name: "TypeScript", level: "Intermediate", category: "Core" },
  { name: "Tailwind CSS", level: "Advanced", category: "Design" },
  { name: "Node.js", level: "Basic", category: "Backend" },
  { name: "Framer Motion", level: "Intermediate", category: "Animation" },
  { name: "Git / GitHub", level: "Intermediate", category: "Tools" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">Ko'nikmalar</h2>
        <div className="h-1 w-20 bg-white rounded-full" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group p-8 bg-neutral-900/40 border border-neutral-800 rounded-3xl hover:bg-neutral-900/60 hover:border-neutral-700 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                {skill.category}
              </span>
              <span className="text-xs font-medium px-2 py-1 bg-neutral-800 rounded-full text-neutral-300">
                {skill.level}
              </span>
            </div>
            <h3 className="text-2xl font-bold group-hover:text-white transition-colors">
              {skill.name}
            </h3>
            <div className="mt-6 h-1 w-full bg-neutral-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-white transition-all duration-1000 group-hover:bg-neutral-400" 
                style={{ 
                  width: skill.level === "Advanced" ? "90%" : skill.level === "Intermediate" ? "65%" : "35%" 
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
