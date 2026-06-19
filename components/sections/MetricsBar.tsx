'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const metrics = [
  { value: 14, unit: 'días', label: 'Promedio de implementación', suffix: '' },
  { value: 320, unit: 'h', label: 'Horas liberadas por cliente/mes', suffix: '' },
  { value: 94, unit: '%', label: 'Consultas resueltas automáticamente', suffix: '%' },
  { value: 20, unit: 'x', label: 'Multiplicación de producción', suffix: 'x' },
];

export default function MetricsBar() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const numberRefs = useRef<HTMLSpanElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal animation
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      });

      // Counter animation
      numberRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = metrics[i].value;
        gsap.from(el, {
          textContent: 0,
          duration: 2,
          ease: 'power1.out',
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
          onUpdate: function () {
            const current = Math.round(parseFloat(el.textContent || '0'));
            el.textContent = String(current);
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-brand-purple">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m, i) => (
            <div key={m.label}>
              <div className="text-4xl md:text-5xl font-display font-bold text-white">
                <span
                  ref={(el) => {
                    if (el) numberRefs.current[i] = el;
                  }}
                >
                  {m.value}
                </span>
                <span className="text-purple-300">{m.unit}</span>
              </div>
              <p className="text-purple-200 text-sm mt-2 font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
