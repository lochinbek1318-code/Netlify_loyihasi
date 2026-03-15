"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Asosiy", href: "#hero" },
  { name: "Men haqimda", href: "#about" },
  { name: "Ko'nikmalar", href: "#skills" },
  { name: "Loyihalar", href: "#projects" },
  { name: "Aloqa", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-black/80 backdrop-blur-md border-neutral-800 py-3"
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          LOCHINBEK<span className="text-neutral-500">.DEV</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <button className="px-4 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors">
            Bog'lanish
          </button>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden p-2 text-neutral-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-neutral-800 p-6 space-y-4 flex flex-col items-center animate-in fade-in slide-in-from-top-4">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium text-neutral-400 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <button className="w-full max-w-xs px-4 py-3 bg-white text-black text-sm font-semibold rounded-full hover:bg-neutral-200 transition-colors">
            Bog'lanish
          </button>
        </div>
      )}
    </nav>
  );
}
