import { SplineSceneBasic } from "@/components/demo";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-neutral-800">
      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 space-y-24">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Sotvoldiyev Lochinbek
            </h1>
            <p className="text-xl md:text-2xl text-neutral-400 font-light">
              Junior Developer
            </p>
            <p className="max-w-lg text-neutral-300 mx-auto md:mx-0 leading-relaxed">
              Assalomu alaykum! Men veb-dasturlash sohasiga qiziqaman va zamonaviy texnologiyalar
              orqali chiroyli va qulay interfeyslarni yaratishni yaxshi ko'raman.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
              <button className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">
                <Github size={24} />
              </button>
              <button className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">
                <Linkedin size={24} />
              </button>
              <button className="p-2 bg-neutral-900 rounded-full hover:bg-neutral-800 transition-colors">
                <Mail size={24} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex justify-center w-full">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neutral-800">
              <Image 
                src="https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=800&auto=format&fit=crop" 
                alt="Developer Profile"
                layout="fill"
                objectFit="cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* 3D Interactive Spotlight Section from user prompt */}
        <section className="pt-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">Loyihalar & 3D Eksperimentlar</h2>
            <p className="text-neutral-400 mt-2">Dasturlash va dizayn uyg'unligi.</p>
          </div>
          <SplineSceneBasic />
        </section>

      </main>
    </div>
  );
}
