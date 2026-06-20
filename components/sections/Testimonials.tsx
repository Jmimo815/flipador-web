'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const testimonials = [
    {
      quote: 'En 14 días pasamos de no saber qué era un agente IA a tener 3 operativos atendiendo clientes. Transformación real, no buzzwords.',
      name: 'Carlos Rodríguez',
      role: 'COO',
      company: 'Consultora Regional',
      initials: 'CR',
    },
    {
      quote: 'Nuestros 200 empleados encontraban respuestas en segundos, no en horas. La soberanía de datos fue clave para aprobarlo con compliance.',
      name: 'Laura Méndez',
      role: 'Directora de Innovación',
      company: 'Firma Legal',
      initials: 'LM',
    },
    {
      quote: 'De 10 piezas de contenido al mes pasamos a 200+ con el mismo equipo de 3 personas. El costo por pieza bajó 85%.',
      name: 'Andrés Herrera',
      role: 'CEO',
      company: 'Agencia de Contenido',
      initials: 'AH',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testimonial-card', {
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
    <section ref={sectionRef} id="testimonios" className="section-padding bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-purple text-sm font-semibold uppercase tracking-widest mb-4">Testimonios</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-4 tracking-tight">
            Quienes abrieron <span className="glow-text">su puerta</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="testimonial-card glass p-8 rounded-3xl hover:border-white/20 transition-all duration-500"
            >
              <p className="text-lg text-zinc-300 leading-relaxed mb-8 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <cite className="font-bold text-white not-italic">{t.name}</cite>
                  <p className="text-zinc-500 text-sm">{t.role}, {t.company}</p>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
