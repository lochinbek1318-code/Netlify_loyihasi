"use client";

import { Mail, Send } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="py-24 space-y-12">
      <div className="space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold">Bog'lanish</h2>
        <div className="h-1 w-20 bg-white rounded-full" />
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <p className="text-xl text-neutral-400 leading-relaxed">
            Sizda ajoyib g'oya bormi yoki shunchaki salom bermoqchimisiz? 
            Men har doim yangi hamkorliklar va loyihalar uchun ochiqman.
          </p>
          
          <div className="flex items-center gap-4 p-6 bg-neutral-900/50 border border-neutral-800 rounded-2xl w-fit">
            <div className="p-3 bg-white text-black rounded-xl">
              <Mail size={24} />
            </div>
            <div>
              <p className="text-sm text-neutral-500 font-medium">Email manzilim</p>
              <p className="text-lg font-bold">lochinbek@coder.uz</p>
            </div>
          </div>
        </div>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400">Ism</label>
              <input 
                type="text" 
                placeholder="Lochinbek"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-neutral-400">Email</label>
              <input 
                type="email" 
                placeholder="example@mail.com"
                className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-400">Xabar</label>
            <textarea 
              rows={4} 
              placeholder="Loyihangiz haqida yozing..."
              className="w-full bg-neutral-900 border border-neutral-800 rounded-xl px-4 py-3 focus:outline-none focus:border-white transition-colors resize-none"
              required
            />
          </div>
          <button className="flex items-center justify-center gap-2 w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-colors">
            Yuborish <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
