
import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function ServicesSection() {
  const services = [
    { tag: "Enterprise", title: "Consultoría Estratégica", desc: "Auditoría de procesos y diseño de un roadmap de IA personalizado para maximizar el ROI." },
    { tag: "Sovereign", title: "Sovereign AI Setup", desc: "Despliegue de modelos LLM locales para privacidad absoluta y costo cero en tokens." },
    { tag: "Academy", title: "Taller de Desmitificación", desc: "Capacitación intensiva para equipos: transformando el miedo en maestría tecnológica." },
    { tag: "Efficiency", title: "Flujos Autónomos", desc: "Integraciones inteligentes que eliminan el trabajo repetitivo y liberan tiempo." },
  ];

  return (
    <section id="servicios" className="py-24 bg-white text-[#0a0a0a]">
      <div className="container mx-auto px-6 text-center">
        <div className="mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-4 tracking-tight">Nuestras Puertas Abiertas</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg">Toma el control de tu infraestructura tecnológica con soluciones de alto impacto.</p>
        </div_div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <Card key={i} className="p-8 rounded-3xl border-zinc-200 hover:border-brandPurple transition-all text-left group bg-zinc-50 border">
              <span className="text-xs font-black text-[#452476] uppercase tracking-widest">{s.tag}</span>
              <h3 className="text-2xl font-bold mt-3 mb-4 group-hover:text-[#452476] transition-colors">{s.title}</h3>
              <p className="text-zinc-500 text-sm mb-8 leading-relaxed">{s.desc}</p>
              <Button variant="outline" className="w-full border-brandPurple text-brandPurple hover:bg-brandPurple hover:text-white rounded-full">Consultar &rarr;</Button>
            </Card>
          ))}
        </div_div>
      </div_div>
    </section>
  );
}
