import { SplineSceneBasic } from "@/components/demo";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { Navbar } from "@/components/ui/navbar";
import { About } from "@/components/sections/about";
import { Skills } from "@/components/sections/skills";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neutral-800 scroll-smooth">
      <Navbar />
      
      <main className="max-w-6xl mx-auto px-6 space-y-24 scroll-mt-24">
        
        {/* Hero Section */}
        <section id="hero" className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between gap-12 pt-32 pb-12">
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-4">
              <span className="inline-block px-4 py-1.5 bg-neutral-900 border border-neutral-800 rounded-full text-sm font-medium text-neutral-400">
                Loyiha qabul qilishga tayyorman
              </span>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-none">
                Sotvoldiyev <br />
                <span className="text-neutral-500">Lochinbek</span>
              </h1>
            </div>
            
            <p className="max-w-lg text-xl md:text-2xl text-neutral-400 font-light mx-auto md:mx-0 leading-relaxed">
              Junior Web Developer & UI Designer. Zamonaviy dunyoni zamonaviy kodlar bilan quramiz.
            </p>

            <div className="flex items-center justify-center md:justify-start gap-6 pt-4">
              <div className="flex gap-4">
                <button className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl hover:bg-neutral-800 hover:border-neutral-700 transition-all">
                  <Github size={24} />
                </button>
                <button className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl hover:bg-neutral-800 hover:border-neutral-700 transition-all">
                  <Linkedin size={24} />
                </button>
                <button className="p-3 bg-neutral-900 border border-neutral-800 rounded-2xl hover:bg-neutral-800 hover:border-neutral-700 transition-all">
                  <Mail size={24} />
                </button>
              </div>
              <div className="h-12 w-[1px] bg-neutral-800 mx-2 hidden md:block" />
              <button className="hidden md:flex px-8 py-4 bg-white text-black font-bold rounded-2xl hover:bg-neutral-200 transition-all">
                Rezyume Yuklash
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center w-full">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-[3rem] overflow-hidden border border-neutral-800 group transition-all duration-500 hover:scale-[1.02] hover:border-neutral-600">
              <div className="absolute inset-0 bg-neutral-900 animate-pulse group-hover:hidden" />
              <Image 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop" 
                alt="Developer Profile"
                fill
                className="grayscale hover:grayscale-0 transition-all duration-700 object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects / 3D Scene Section */}
        <section id="projects" className="py-24 space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold">Loyihalar & 3D Eksperimentlar</h2>
            <div className="h-1 w-20 bg-white rounded-full" />
            <p className="text-xl text-neutral-400">Dasturlash va dizayn uyg'unligi.</p>
          </div>
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-[3rem] overflow-hidden p-4 md:p-8">
            <SplineSceneBasic />
          </div>
        </section>

        {/* Contact Section */}
        <Contact />

        <footer className="py-12 border-t border-neutral-900 text-center text-neutral-600">
          <p>© 2026 Lochinbek. Barcha huquqlar himoyalangan.</p>
        </footer>

      </main>
    </div>
  );
}
