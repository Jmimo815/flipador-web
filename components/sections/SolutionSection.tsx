
import React from 'react';
import { Card } from "@/components/ui/card";

export default function SolutionSection() {
  const pillars = [
    { title: "Liberar Talento", desc: "Convertimos la automatización en un catalizador creativo. Pasamos la rutina al pensamiento estratégico.", span: "md:col-span-2", bg: "bg-[#452476] text-white" },
    { title: "Democratizar Conocimiento", desc: "IA accesible, segura y sin silos organizacionales.", span: "md:col-span-1", bg: "bg-zinc-900/50 text-white border border-zinc-800" },
    { title: "Cerrar la Brecha", desc: "Aprendizaje acelerado basado en implementación inmediata.", span: "md:col-span-1", bg: "bg-zinc-900/50 text-white border border-zinc-800" },
    { title: "Optimizar Agilidad", desc: "Consistencia y velocidad generativa para que tu empresa escale sin fricciones.", span: "md:col-span-2", bg: "bg-zinc-400 text-black" },
  ];

  return (
    <section id="metodo" className="py-24 bg-[#0a0a0a] text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 italic tracking-tighter">El Método <span className="text-[#452476]">∀</span></h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">Adaptabilidad universal para abrir oportunidades reales.</p>
        </div_div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((p, i) => (
            <Card key={i} className={`p-12 rounded-3xl relative group overflow-hidden ${p.span} ${p.bg}`}>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed">{p.desc}</p>
              </div_div>
            </Card>
          ))}
        </div_div>
      </div_div>
    </section>
  );
}
