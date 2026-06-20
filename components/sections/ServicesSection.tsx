'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Briefcase, Shield, GraduationCap, Workflow } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    tag: 'Enterprise',
    title: 'Consultoría Estratégica',
    desc: 'Auditoría de procesos y diseño de un roadmap de IA personalizado para maximizar el ROI.',
    icon: Briefcase,
    cta: 'Auditar mi proceso',
  },
  {
    tag: 'Sovereign',
    title: 'Sovereign AI Setup',
    desc: 'Despliegue de modelos LLM locales para privacidad absoluta y costo cero en tokens.',
    icon: Shield,
    cta: 'Desplegar Sovereign AI',
  },
  {
    tag: 'Academy',
    title: 'Taller de Desmitificación',
    desc: 'Capacitación intensiva para equipos: transformando el miedo en maestría tecnológica.',
    icon: GraduationCap,
    cta: 'Reservar taller',
  },
  {
    tag: 'Efficiency',
    title: 'Flujos Autónomos',
    desc: 'Integraciones inteligentes que eliminan el trabajo repetitivo y liberan tiempo.',
    icon: Workflow,
    cta: 'Automatizar operaciones',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.service-card', {
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
    <section ref={sectionRef} id="servicios" className="section-padding bg-zinc-50 text-brand-black wave-bg">
      {/* Animated wave lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" aria-hidden="true">
        <path className="svc-wave-1" d="M0,120 C400,200 800,60 1200,160 C1600,260 2000,80 2400,180 C2800,260 3200,140 3600,200 L3600,800 L0,800 Z" fill="none" stroke="rgba(69,36,118,0.05)" strokeWidth="1.5" />
        <path className="svc-wave-2" d="M0,300 C400,360 800,240 1200,340 C1600,420 2000,280 2400,360 C2800,420 3200,300 3600,360 L3600,800 L0,800 Z" fill="none" stroke="rgba(69,36,118,0.035)" strokeWidth="1" />
        <path className="svc-wave-3" d="M0,480 C360,530 720,440 1080,500 C1440,560 1800,430 2160,510 C2520,570 2880,450 3240,510 L3240,800 L0,800 Z" fill="none" stroke="rgba(163,165,165,0.06)" strokeWidth="1" />
        <path className="svc-wave-4" d="M0,600 C300,640 600,560 900,620 C1200,670 1500,550 1800,620 C2100,670 2400,580 2700,630 L2700,800 L0,800 Z" fill="rgba(69,36,118,0.015)" stroke="none" />
      </svg>

      <div className="container mx-auto px-6 text-center relative z-10">
        <p className="text-brand-purple text-sm font-semibold uppercase tracking-widest mb-4">Servicios</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
          Nuestras Puertas Abiertas
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg mb-16">
          Toma el control de tu infraestructura tecnológica con soluciones de alto impacto.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="service-card group p-8 rounded-3xl bg-white/90 backdrop-blur-sm border border-zinc-200 text-left hover:border-brand-purple hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-5 group-hover:bg-brand-purple transition-colors duration-300">
                  <Icon className="w-5 h-5 text-brand-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs font-bold text-brand-purple uppercase tracking-widest">{s.tag}</span>
                <h3 className="text-xl font-bold mt-2 mb-3 group-hover:text-brand-purple transition-colors">
                  {s.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                <a
                  href="#contacto"
                  className="inline-flex items-center text-sm font-semibold text-brand-purple hover:text-purple-700 transition-colors group/link"
                >
                  {s.cta}
                  <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .svc-wave-1 { animation: svcWave1 16s ease-in-out infinite; }
        .svc-wave-2 { animation: svcWave2 20s ease-in-out infinite; }
        .svc-wave-3 { animation: svcWave3 24s ease-in-out infinite; }
        .svc-wave-4 { animation: svcWave4 30s ease-in-out infinite; }
        @keyframes svcWave1 {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-30px) translateY(12px); }
          50% { transform: translateX(15px) translateY(-8px); }
          75% { transform: translateX(-10px) translateY(6px); }
        }
        @keyframes svcWave2 {
          0%, 100% { transform: translateX(0) translateY(0); }
          33% { transform: translateX(25px) translateY(-15px); }
          66% { transform: translateX(-20px) translateY(10px); }
        }
        @keyframes svcWave3 {
          0%, 100% { transform: translateX(0) translateY(0); }
          20% { transform: translateX(-18px) translateY(8px); }
          60% { transform: translateX(28px) translateY(-12px); }
          80% { transform: translateX(-8px) translateY(4px); }
        }
        @keyframes svcWave4 {
          0%, 100% { transform: translateX(0) translateY(0); }
          40% { transform: translateX(-20px) translateY(6px); }
          70% { transform: translateX(15px) translateY(-10px); }
        }
      `}</style>
    </section>
  );
}