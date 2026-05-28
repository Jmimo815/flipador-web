
import React from 'react';

export default function Authority() {
  const partners = ["SENA COLOMBIA", "INDUSTRIA 5.0", "Sovereign AI", "RAG Frameworks"];
  return (
    <section id="autoridad" className="py-12 bg-[#0a0a0a] border-y border-zinc-900">
      <div className="container mx-auto px-6 text-center">
        <p className="text-zinc-500 text-xs uppercase tracking-widest mb-12 font-semibold">Metodología Validada en Implementaciones de Escala</p>
        <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {partners.map(item => <span key={item} className="text-lg md:text-2xl font-bold text-white tracking-tighter">{item}</span>)}
        </div_div>
      </div_div>
    </section>
  );
}
