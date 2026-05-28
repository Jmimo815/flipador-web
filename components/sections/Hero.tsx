
import React from 'react';
import Image from 'next/image';
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center glow-bg px-6 py-20 overflow-hidden">
      <div className="container mx-auto text-center relative z-10">
        <div className="mb-12 flex justify-center animate-in fade-in zoom-in duration-1000">
          <img src="C:/Users/jonat/.hermes-web-ui/upload/default/1fff5a0ad6e9df6e.png" 
               alt="FLIP∀DOOR Logo" className="h-32 md:h-48 w-auto object-contain" />
        </div_div>
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-tight text-white">
          Deja de operar la IA. <br />
          <span className="text-[#452476] italic underline decoration-brandGrey/30">Comienza a dirigirla.</span>
        </h1>
        <p className="text-lg md:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          Lideramos la transición hacia la <span className="text-white font-medium italic">Industria 5.0</span>. 
          Adaptamos la IA para abrir puertas y liberar el ingenio humano.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-[#452476] hover:bg-purple-700 text-white px-10 py-7 text-xl font-bold rounded-full shadow-2xl transition-all hover:scale-105">
            Abrir mi Puerta al Futuro
          </Button>
          <a href="#metodo" className="text-zinc-400 hover:text-white font-medium transition-all flex items-center gap-2 group">
            Descubre el Método ∀ <span className="group-hover:translate-x-2 transition-transform">&rarr;</span>
          </a>
        </div_div>
      </div_div>
    </section>
  );
}
