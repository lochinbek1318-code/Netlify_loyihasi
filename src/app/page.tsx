"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/ui/navbar";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Projects } from "@/components/sections/projects";
import { Contact } from "@/components/sections/contact";

const socials = [
  { icon: Github, href: "https://github.com/lochinbek", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/lochinbek", label: "LinkedIn" },
  { icon: Mail, href: "mailto:lochinbek@coder.uz", label: "Email" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neutral-800 scroll-smooth">
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 scroll-mt-24">

        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-32 pb-12">

          {/* Left Content */}
          <motion.div
            className="flex-1 space-y-8 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-5">
              <motion.span
                className="inline-block px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-sm font-medium text-neutral-400"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                ✦ Loyiha qabul qilishga tayyorman
              </motion.span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">
                Sotvoldiyev <br />
                <span className="text-neutral-500">Lochinbek</span>
              </h1>
            </div>

            <motion.p
              className="max-w-lg text-xl md:text-2xl text-neutral-400 font-light mx-auto md:mx-0 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Junior Web Developer &amp; UI Designer.{" "}
              <span className="text-neutral-300">Zamonaviy dunyoni zamonaviy kodlar bilan quramiz.</span>
            </motion.p>

            <motion.div
              className="flex items-center justify-center md:justify-start gap-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl hover:bg-neutral-800 hover:border-neutral-600 hover:scale-110 transition-all duration-200"
                  >
                    <Icon size={22} />
                  </a>
                ))}
              </div>
              <div className="h-10 w-[1px] bg-neutral-800 mx-1 hidden md:block" />
              <motion.a
                href="/resume.pdf"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="hidden md:inline-flex px-7 py-3.5 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-all text-sm"
              >
                Rezyume Yuklash
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex-1 flex justify-center w-full"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border border-neutral-800 group transition-all duration-500 hover:scale-[1.02] hover:border-neutral-600">
              <div className="absolute inset-0 bg-neutral-900 animate-pulse group-hover:hidden" />
              <Image
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop"
                alt="Developer Profile"
                fill
                className="grayscale group-hover:grayscale-0 transition-all duration-700 object-cover"
                priority
              />
            </div>
          </motion.div>
        </section>

        {/* Scroll Indicator */}
        <motion.div
          className="flex justify-center pb-12 -mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Link href="#about" className="flex flex-col items-center gap-2 text-neutral-600 hover:text-neutral-400 transition-colors">
            <span className="text-xs uppercase tracking-widest">Pastga aylantiring</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </Link>
        </motion.div>

        {/* Sections */}
        <div className="space-y-0">
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>

        <footer className="py-12 border-t border-neutral-900 text-center text-neutral-600">
          <p>© 2026 Lochinbek. Barcha huquqlar himoyalangan.</p>
        </footer>
      </main>
    </div>
  );
}
