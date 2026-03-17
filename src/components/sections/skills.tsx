"use client";

import { motion } from "framer-motion";
import { Code2, Palette, Server, GitBranch, Cpu, Zap } from "lucide-react";

const skills = [
  {
    name: "React / Next.js",
    level: "Advanced",
    percentage: 90,
    category: "Frontend",
    icon: Code2,
    color: "from-blue-500 to-cyan-400",
    glow: "shadow-blue-500/20",
  },
  {
    name: "TypeScript",
    level: "Intermediate",
    percentage: 65,
    category: "Core",
    icon: Cpu,
    color: "from-violet-500 to-indigo-400",
    glow: "shadow-violet-500/20",
  },
  {
    name: "Tailwind CSS",
    level: "Advanced",
    percentage: 90,
    category: "Design",
    icon: Palette,
    color: "from-teal-500 to-emerald-400",
    glow: "shadow-teal-500/20",
  },
  {
    name: "Node.js",
    level: "Basic",
    percentage: 35,
    category: "Backend",
    icon: Server,
    color: "from-green-500 to-lime-400",
    glow: "shadow-green-500/20",
  },
  {
    name: "Framer Motion",
    level: "Intermediate",
    percentage: 65,
    category: "Animation",
    icon: Zap,
    color: "from-orange-500 to-amber-400",
    glow: "shadow-orange-500/20",
  },
  {
    name: "Git / GitHub",
    level: "Intermediate",
    percentage: 70,
    category: "Tools",
    icon: GitBranch,
    color: "from-rose-500 to-pink-400",
    glow: "shadow-rose-500/20",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export function Skills() {
  return (
    <section id="skills" className="py-24 space-y-14">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">Ko&apos;nikmalar</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-white to-neutral-500 rounded-full" />
        <p className="text-xl text-neutral-400">Men ishlaydigan texnologiyalar.</p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`group relative p-7 bg-neutral-900/40 border border-neutral-800 rounded-3xl hover:bg-neutral-900/70 hover:border-neutral-700 transition-all duration-300 overflow-hidden shadow-xl ${skill.glow}`}
            >
              {/* Background glow */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

              <div className="flex justify-between items-start mb-5">
                <div className={`p-2.5 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10`}>
                  <Icon className="text-white" size={22} />
                </div>
                <div className="flex flex-col items-end gap-1">
                  <span className="text-xs font-bold uppercase tracking-widest text-neutral-500">
                    {skill.category}
                  </span>
                  <span className="text-xs font-medium px-2.5 py-1 bg-neutral-800 border border-neutral-700 rounded-full text-neutral-300">
                    {skill.level}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold mb-5 group-hover:text-white transition-colors">
                {skill.name}
              </h3>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-xs text-neutral-600">İlerleme</span>
                  <span className="text-xs font-bold text-neutral-400">{skill.percentage}%</span>
                </div>
                <div className="h-1.5 w-full bg-neutral-800 rounded-full overflow-hidden">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percentage}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
