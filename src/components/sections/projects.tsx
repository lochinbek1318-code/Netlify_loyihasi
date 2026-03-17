"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink, Star } from "lucide-react";
import { projects } from "@/lib/project-data";

const tagColors: Record<string, string> = {
  "Next.js": "bg-black border-neutral-700 text-neutral-300",
  "TypeScript": "bg-blue-950 border-blue-800 text-blue-300",
  "Framer Motion": "bg-orange-950 border-orange-800 text-orange-300",
  "Tailwind CSS": "bg-teal-950 border-teal-800 text-teal-300",
  "React": "bg-cyan-950 border-cyan-800 text-cyan-300",
  "Zustand": "bg-purple-950 border-purple-800 text-purple-300",
  "Node.js": "bg-green-950 border-green-800 text-green-300",
  "MongoDB": "bg-emerald-950 border-emerald-800 text-emerald-300",
  "Socket.io": "bg-neutral-800 border-neutral-600 text-neutral-300",
  "JavaScript": "bg-yellow-950 border-yellow-800 text-yellow-300",
  "API": "bg-rose-950 border-rose-800 text-rose-300",
  "CSS": "bg-indigo-950 border-indigo-800 text-indigo-300",
  "Charts.js": "bg-violet-950 border-violet-800 text-violet-300",
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 space-y-14">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">Loyihalar</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-white to-neutral-500 rounded-full" />
        <p className="text-xl text-neutral-400">
          Yaratgan ish va tajribalarim.
        </p>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {projects.map((project) => (
          <motion.div
            key={project.title}
            variants={cardVariants}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.2 }}
            className="group relative flex flex-col p-7 bg-neutral-900/40 border border-neutral-800 hover:border-neutral-600 rounded-3xl transition-all duration-300 overflow-hidden"
          >
            {/* Gradient glow background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-bold group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="flex items-center gap-1 text-xs font-medium px-2.5 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-yellow-400">
                    <Star size={10} fill="currentColor" /> Featured
                  </span>
                )}
              </div>

              <p className="text-neutral-400 leading-relaxed flex-1 mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs font-medium px-2.5 py-1 border rounded-full ${tagColors[tag] ?? "bg-neutral-800 border-neutral-700 text-neutral-300"}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
                  >
                    <ExternalLink size={16} /> Demo
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
