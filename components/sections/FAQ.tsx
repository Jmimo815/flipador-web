'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: '¿Mis datos quedan privados o van a la nube pública?',
    a: 'Sovereign AI significa que tus datos NUNCA salen de tu infraestructura. Desplegamos modelos LLM locales o en tu VPC privada. Cero APIs externas, cero fuga de información.',
  },
  {
    q: '¿Cuánto dura implementar una solución?',
    a: 'Nuestro promedio es 14 días para el MVP operativo. El taller de desmitificación toma 5 días. La transformación completa se programa en ciclos de 90 días.',
  },
  {
    q: '¿Mi equipo necesita saber programar?',
    a: 'No. Diseñamos interfaces donde el humano supervisa y decide, mientras los agentes ejecutan. Capacitamos a tu equipo en el uso operativo, no en código.',
  },
  {
    q: '¿Qué es exactamente Sovereign AI?',
    a: 'Es la capacidad de operar inteligencia artificial con datos propios, modelos propios y control total. Sin depender de APIs de terceros ni exponer información sensible.',
  },
  {
    q: '¿Funciona con cualquier modelo de IA?',
    a: 'Sí. Evaluamos tu caso y recomendamos el stack óptimo: Llama, Mistral, Claude, GPT-4, o combinaciones híbridas. La arquitectura se adapta a tu realidad, no al revés.',
  },
  {
    q: '¿Cómo empiezo?',
    a: 'Agendá un Diagnóstico IA gratuito de 30 minutos. Identificamos oportunidades, medimos madurez y priorizamos un roadmap. Sin compromiso.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="section-padding bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-20">
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">Preguntas frecuentes</p>
          <h2 className="text-display-lg font-display font-bold tracking-tight">
            Resolvemos tus <span className="glow-text">dudas</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white/5 border-white/10'
                    : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-semibold pr-4 text-base md:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-brand-purple flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-zinc-400 leading-relaxed text-base">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
