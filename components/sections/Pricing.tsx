'use client';

import { useEffect, useRef } from 'react';
import { Check } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);


const plans = [
  {
    name: 'Diagnóstico IA',
    price: 'Gratis',
    period: '',
    description: 'Descubrí oportunidades ocultas en 30 minutos.',
    features: [
      'Assessment de 30 minutos',
      'Mapa de madurez IA',
      'Roadmap priorizado',
      'Sin compromiso',
    ],
    highlighted: false,
    cta: 'Reservar diagnóstico',
  },
  {
    name: 'Sovereign AI Setup',
    price: 'Desde $3K',
    period: 'USD',
    description: 'IA privada, segura y operativa en 14 días.',
    features: [
      'Implementación LLM local',
      'Arquitectura RAG inicial',
      'Hasta 3 agentes IA',
      'Capacitación del equipo',
      'Soporte 30 días',
    ],
    highlighted: true,
    cta: 'Empezar implementación',
  },
  {
    name: 'Transformación Completa',
    price: 'Desde $15K',
    period: 'USD',
    description: 'Programa de 90 días para escalar con IA.',
    features: [
      'Ecosistema IA completo',
      'Flujos autónomos ilimitados',
      'Capacitación avanzada',
      'Soporte prioritario',
      'Métricas de ROI mensuales',
      'Acompañamiento continuo',
    ],
    highlighted: false,
    cta: 'Conversar con ventas',
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        y: 60,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="planes" className="section-padding bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-purple text-sm font-semibold uppercase tracking-widest mb-4">Planes</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Invertí en tu <span className="glow-text">Transformación</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Empezá gratis. Escalá según tu madurez. Sin costos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`pricing-card relative p-8 rounded-3xl transition-all duration-500 ${
                plan.highlighted
                  ? 'bg-brand-purple/20 border-2 border-brand-purple shadow-2xl shadow-brand-purple/20'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Más popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                {plan.price}
                {plan.period && (
                  <span className="text-zinc-500 text-base font-normal ml-1">{plan.period}</span>
                )}
              </div>
              <p className="text-zinc-400 text-sm mb-6">{plan.description}</p>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-brand-purple' : 'text-zinc-500'
                    }`} />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://tally.so/r/vGKy58"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 px-6 rounded-full font-semibold transition-all ${
                  plan.highlighted
                    ? 'bg-brand-purple text-white hover:bg-purple-700'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
