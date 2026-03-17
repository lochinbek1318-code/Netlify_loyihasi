"use client";

import { motion } from "framer-motion";
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/lochinbek" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/lochinbek" },
  { icon: Twitter, label: "Twitter", href: "https://twitter.com/lochinbek" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 space-y-14">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">Bog&apos;lanish</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-white to-neutral-500 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left side */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xl text-neutral-400 leading-relaxed">
            Sizda ajoyib g&apos;oya bormi yoki shunchaki salom bermoqchimisiz?
            Men har doim yangi hamkorliklar va loyihalar uchun ochiqman.
          </p>

          <a
            href="mailto:lochinbek@coder.uz"
            className="flex items-center gap-4 p-6 bg-neutral-900/50 border border-neutral-800 hover:border-neutral-600 rounded-2xl w-fit group transition-colors duration-300"
          >
            <div className="p-3 bg-white text-black rounded-xl group-hover:scale-110 transition-transform">
              <Mail size={22} />
            </div>
            <div>
              <p className="text-sm text-neutral-500 font-medium">Email manzilim</p>
              <p className="text-lg font-bold">lochinbek@coder.uz</p>
            </div>
          </a>

          {/* Socials */}
          <div className="space-y-3">
            <p className="text-sm font-medium text-neutral-500 uppercase tracking-widest">
              Ijtimoiy Tarmoqlar
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-3 bg-neutral-900 border border-neutral-800 hover:border-neutral-600 hover:bg-neutral-800 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.form
          className="space-y-5"
          onSubmit={(e) => e.preventDefault()}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400">Ism</label>
              <input
                type="text"
                placeholder="Lochinbek"
                className="w-full bg-neutral-900/70 border border-neutral-800 focus:border-neutral-500 rounded-xl px-4 py-3 outline-none transition-colors duration-200 text-sm"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400">Email</label>
              <input
                type="email"
                placeholder="example@mail.com"
                className="w-full bg-neutral-900/70 border border-neutral-800 focus:border-neutral-500 rounded-xl px-4 py-3 outline-none transition-colors duration-200 text-sm"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400">Mavzu</label>
            <input
              type="text"
              placeholder="Loyiha haqida..."
              className="w-full bg-neutral-900/70 border border-neutral-800 focus:border-neutral-500 rounded-xl px-4 py-3 outline-none transition-colors duration-200 text-sm"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400">Xabar</label>
            <textarea
              rows={4}
              placeholder="Loyihangiz haqida batafsil yozing..."
              className="w-full bg-neutral-900/70 border border-neutral-800 focus:border-neutral-500 rounded-xl px-4 py-3 outline-none transition-colors duration-200 resize-none text-sm"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors duration-200"
          >
            Yuborish <Send size={16} />
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
