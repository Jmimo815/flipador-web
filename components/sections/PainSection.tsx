
import React from 'react';
import { Card } from "@/components/ui/card";
import { AlertCircle, HelpCircle, Zap } from "lucide-react";

export default function PainSection() {
  const pains = [
    {
      title: "Saturación de Herramientas",
      desc: "Usar 20 herramientas aisladas no es optimizar; es crear ruido administrativo. Diseñamos ecosistemas integrados donde el flujo de datos es invisible.",
      icon: <AlertCircle className="w-8 h-8 text-white" />,
      color: "bg-[#452476]"
    },
    {
      title: "La Falacia del Prompt",
      desc: "Un prompt mágico no soluciona un proceso roto. Implementamos arquitecturas de IA reales (RAG, Agentes) que resuelven problemas.",
      icon: <HelpCircle className="w-8 h-8 text-brandPurple" />,
      color: "bg-zinc-900"
    },
    {
      title: "Eficiencia de Costos",
      desc: "Suscripciones masivas sin estrategia es quemar capital. Optimizamos con Sovereign AI para reducir costos sin sacrificar potencia.",
      icon: <Zap className="w-8 h-8 text-white" />,
      color: "bg-[#452476]"
    }
  ];

  return (
    <section className="py-24 bg-white text-[#0a0a0a]">
      <div className="container mx-auto px-6 text-center">
        <div className="reveal mb-16">
          <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight">El Laberinto de la IA</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg italic">Saliendo de la fase de "operador" hacia la maestría estratégica.</p>
        </div_div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
          {pains.map((p, i) => (
            <Card key={i} className="p-10 rounded-3xl border-zinc-200 hover:border-brandPurple transition-all text-left group shadow-sm hover:shadow-xl bg-white overflow-hidden">
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: p.color}}>
                {p.icon}
              </div_div>
              <h3 className="text-2xl font-extrabold mb-4 group-hover:text-brandPurple transition-colors">{p.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-lg">{p.desc}</p>
            </Card>
          ))}
        </div_div>
      </div_div>
    </section>
  );
}
