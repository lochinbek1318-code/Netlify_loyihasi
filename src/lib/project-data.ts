export type Project = {
  title: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Zamonaviy Next.js va Framer Motion bilan qurilgan shaxsiy portfolio sayt. 3D animatsiyalar va silliq UI bilan.",
    tags: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/lochinbek",
    demo: "/",
    featured: true,
  },
  {
    title: "E-Commerce UI",
    description:
      "Zamonaviy e-commerce interfeysi. Mahsulot kartochkalari, savatcha va to'lov sahifalarini o'z ichiga oladi.",
    tags: ["React", "TypeScript", "Tailwind CSS", "Zustand"],
    github: "https://github.com/lochinbek",
    featured: true,
  },
  {
    title: "Task Manager App",
    description:
      "Drag & drop funksiyasiga ega bo'lgan vazifalar boshqaruvchi ilova. Real-time yangilanishlar bilan.",
    tags: ["React", "Node.js", "MongoDB", "Socket.io"],
    github: "https://github.com/lochinbek",
    featured: false,
  },
  {
    title: "Weather Dashboard",
    description:
      "OpenWeatherMap API orqali real vaqt ob-havo ma'lumotlarini ko'rsatuvchi dashboard.",
    tags: ["JavaScript", "API", "CSS", "Charts.js"],
    github: "https://github.com/lochinbek",
    featured: false,
  },
];
