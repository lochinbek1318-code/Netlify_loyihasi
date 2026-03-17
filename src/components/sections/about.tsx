"use client";

import { motion } from "framer-motion";
import { User, Code2, Rocket, Calendar, Coffee, Star } from "lucide-react";

const stats = [
  { label: "Loyihalar", value: "10+", icon: Star },
  { label: "Kurslar", value: "5+", icon: Code2 },
  { label: "Qahva", value: "∞", icon: Coffee },
];

const cards = [
  {
    icon: User,
    title: "Tajriba",
    desc: "Junior Developer, Freelancer",
    gradient: "from-blue-600/20 to-blue-600/5",
    border: "hover:border-blue-500/40",
  },
  {
    icon: Code2,
    title: "Ta\u02bclim",
    desc: "Mustaqil o\u02bcrganish & Kurslar",
    gradient: "from-violet-600/20 to-violet-600/5",
    border: "hover:border-violet-500/40",
  },
  {
    icon: Calendar,
    title: "Maqsad",
    desc: "Full-Stack Developer bo\u02bcl\u0131sh",
    gradient: "from-emerald-600/20 to-emerald-600/5",
    border: "hover:border-emerald-500/40",
  },
  {
    icon: Rocket,
    title: "Qiziqishlar",
    desc: "3D Web Design, AI, UI/UX",
    gradient: "from-orange-600/20 to-orange-600/5",
    border: "hover:border-orange-500/40",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 space-y-16">
      <motion.div
        className="space-y-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold">Men Haqimda</h2>
        <div className="h-1 w-20 bg-gradient-to-r from-white to-neutral-500 rounded-full" />
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Text side */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-neutral-300 leading-relaxed text-lg">
            Veb-texnologiyalar olamiga bo&apos;lgan qiziqishim bir necha yil
            avval boshlangan. Hozirda men Junior Developer sifatida o&apos;z
            bilimlarimni oshirib, zamonaviy veb-ilovalarni yaratish ustida
            ishlayapman.
          </p>
          <p className="text-neutral-400 leading-relaxed text-lg">
            Mening maqsadim nafaqat kod yozish, balki foydalanuvchilar uchun
            qulay, tez va chiroyli interfeyslarni taqdim etishdir. Har bir
            loyihaga ijodiy yondashaman va yangi bilimlar olishdan
            to&apos;xtamayman.
          </p>

          {/* Stats */}
          <div className="flex gap-8 pt-4">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <Icon className="mx-auto mb-2 text-neutral-500" size={18} />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-neutral-500 mt-1">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Cards side */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                whileHover={{ scale: 1.03, y: -4 }}
                className={`p-6 bg-gradient-to-br ${card.gradient} border border-neutral-800 ${card.border} rounded-2xl transition-colors duration-300`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Icon className="mb-4 text-neutral-400" size={28} />
                <h3 className="font-semibold text-lg mb-1">{card.title}</h3>
                <p className="text-neutral-500 text-sm">{card.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
