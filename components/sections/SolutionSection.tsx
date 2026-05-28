'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

const pillars = [
  {
    title: 'Liberar Talento',
    desc: 'Convertimos la automatización en un catalizador creativo. Pasamos la rutina al pensamiento estratégico.',
    wide: true,
    variant: 'purple',
    caseStudy: {
      title: 'Consultora de 12 personas ahorró 320 horas/mes',
      scenario: 'Un equipo de consultores pasaba el 70% de su tiempo copiando datos entre CRM, email y hojas de cálculo para generar reportes para clientes.',
      solution: 'Implementamos un ecosistema de agentes IA que extrae datos del CRM, los procesa, genera reportes personalizados y los envía automáticamente.',
      result: '320 horas mensuales liberadas. El equipo redirigió ese tiempo a estrategia y cierre de deals. Facturación aumentó 23% en 4 meses.',
    },
  },
  {
    title: 'Democratizar Conocimiento',
    desc: 'IA accesible, segura y sin silos organizacionales.',
    wide: false,
    variant: 'dark',
    caseStudy: {
      title: 'Base de conocimiento que responde en segundos',
      scenario: 'Una empresa con 200+ empleados tenía manuales, procedimientos y normativas dispersos en 15 herramientas diferentes. Cada consulta interna demoraba horas.',
      solution: 'Desplegamos un sistema RAG (Retrieval-Augmented Generation) con acceso a toda la documentación interna, protegido y sin depender de APIs externas.',
      result: 'Tiempo de respuesta de horas a segundos. 94% de consultas resueltas sin intervención humana. Cero fuga de datos.',
    },
  },
  {
    title: 'Cerrar la Brecha',
    desc: 'Aprendizaje acelerado basado en implementación inmediata.',
    wide: false,
    variant: 'dark',
    caseStudy: {
      title: 'De 0 a operativo en 2 semanas',
      scenario: 'Un equipo de 8 personas sin experiencia en IA necesitaba integrar automatización en su flujo de atención al cliente.',
      solution: 'Taller intensivo de 5 días + 9 días de acompañamiento implementando soluciones reales sobre sus propios procesos. Cero teoría abstracta.',
      result: 'En 14 días el equipo operaba 3 agentes IA autónomos. Redujeron tiempo de respuesta al cliente de 4 horas a 12 minutos.',
    },
  },
  {
    title: 'Optimizar Agilidad',
    desc: 'Consistencia y velocidad generativa para que tu empresa escale sin fricciones.',
    wide: true,
    variant: 'grey',
    caseStudy: {
      title: 'De 10 a 200 piezas de contenido sin contratar',
      scenario: 'Una agencia de marketing producía 10 piezas de contenido mensuales con un equipo de 3 personas. Escalar significaba triplicar la nómina.',
      solution: 'Diseñamos flujos autónomos con IA que generan borradores, editan, adaptan formatos y programan publicación. El equipo humano supervisa y decide.',
      result: '200+ piezas mensuales con el mismo equipo. Costo por pieza reducido 85%. Calidad consistente sin burnout.',
    },
  },
];

export default function SolutionSection() {
  const [activeCase, setActiveCase] = useState<number | null>(null);

  return (
    <section id="metodo" className="section-padding bg-brand-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-brand-purple text-sm font-semibold uppercase tracking-widest mb-4">El método</p>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-4 tracking-tight">
            El Método&nbsp;<span className="glow-text">∀</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Adaptabilidad universal para abrir oportunidades reales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            let cardClass = '';
            let btnClass = '';
            if (p.variant === 'purple') {
              cardClass = 'bg-brand-purple text-white';
              btnClass = 'bg-white/20 hover:bg-white/30 text-white';
            } else if (p.variant === 'dark') {
              cardClass = 'bg-white/5 text-white border border-white/10';
              btnClass = 'bg-white/10 hover:bg-white/20 text-white';
            } else {
              cardClass = 'bg-zinc-400 text-brand-black';
              btnClass = 'bg-brand-black/10 hover:bg-brand-black/20 text-brand-black';
            }

            return (
              <div
                key={p.title}
                className={`${cardClass} p-10 md:p-12 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl cursor-pointer ${
                  p.wide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
                onClick={() => setActiveCase(i)}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed mb-6">{p.desc}</p>
                <button className={`${btnClass} px-5 py-2.5 rounded-full text-sm font-semibold transition-all`}>
                  Ver caso de uso →
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeCase !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setActiveCase(null)}
        >
          <div
            className="bg-brand-black border border-white/10 rounded-3xl max-w-2xl w-full p-8 md:p-10 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCase(null)}
              className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-2">Caso de uso</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8">
              {pillars[activeCase].caseStudy.title}
            </h3>

            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Situación</h4>
                <p className="text-zinc-300 leading-relaxed">{pillars[activeCase].caseStudy.scenario}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-zinc-400 uppercase tracking-wider mb-2">Solución FLIP∀DOOR</h4>
                <p className="text-zinc-300 leading-relaxed">{pillars[activeCase].caseStudy.solution}</p>
              </div>
              <div className="bg-brand-purple/20 border border-brand-purple/30 rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-brand-purple uppercase tracking-wider mb-2">Resultado</h4>
                <p className="text-white leading-relaxed font-medium">{pillars[activeCase].caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}