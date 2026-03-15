import { User, Code2, Rocket } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-24 space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">Men Haqimda</h2>
        <div className="h-1 w-20 bg-white rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-neutral-300 leading-relaxed text-lg">
          <p>
            Veb-texnologiyalar olamiga bo'lgan qiziqishim bir necha yil avval boshlangan. 
            Hozirda men Junior Developer sifatida o'z bilimlarimni oshirib, 
            zamonaviy veb-ilovalarni yaratish ustida ishlayapman.
          </p>
          <p>
            Mening maqsadim nafaqat kod yozish, balki foydalanuvchilar uchun 
            qulay, tez va chiroyli interfeyslarni taqdim etishdir. Har bir loyihaga 
            ijodiy yondashaman va yangi bilimlar olishdan to'xtamayman.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-colors">
            <User className="mb-4 text-neutral-400" size={32} />
            <h3 className="font-semibold text-xl mb-2">Tajriba</h3>
            <p className="text-neutral-500">Junior Developer, Freelancer</p>
          </div>
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl hover:border-neutral-700 transition-colors">
            <Code2 className="mb-4 text-neutral-400" size={32} />
            <h3 className="font-semibold text-xl mb-2">Ta'lim</h3>
            <p className="text-neutral-500">Mustaqil o'rganish & Kurslar</p>
          </div>
          <div className="p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl md:col-span-2 hover:border-neutral-700 transition-colors">
            <Rocket className="mb-4 text-neutral-400" size={32} />
            <h3 className="font-semibold text-xl mb-2">Qiziqishlar</h3>
            <p className="text-neutral-500">3D Web Design, AI Integration, UI/UX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
