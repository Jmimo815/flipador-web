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
      title: 'Consultora eliminó 320 horas mensuales de trabajo manual',
      problem: '12 consultores copiaban datos entre CRM, email y Excel para armar reportes de clientes. El 70% de su jornada se iba en tareas repetitivas.',
      solution: 'Ecosistema de agentes IA que extrae, procesa y envía reportes automáticamente desde el CRM.',
      result: '320 horas/mes liberadas. Facturación subió 23% al dedicar ese tiempo a cierre de deals.',
    },
  },
  {
    title: 'Democratizar Conocimiento',
    desc: 'IA accesible, segura y sin silos organizacionales.',
    wide: false,
    variant: 'dark',
    caseStudy: {
      title: '200 empleados encontraban respuestas en segundos, no horas',
      problem: 'Manuales y normas dispersos en 15 plataformas. Cada consulta interna tardaba horas en resolverse.',
      solution: 'Sistema RAG con acceso a toda la documentación interna. Sin APIs externas. Datos dentro de la empresa.',
      result: '94% de consultas resueltas al instante sin intervención humana. Cero fuga de información.',
    },
  },
  {
    title: 'Cerrar la Brecha',
    desc: 'Aprendizaje acelerado basado en implementación inmediata.',
    wide: false,
    variant: 'dark',
    caseStudy: {
      title: 'Equipo sin experiencia en IA, operativo en 14 días',
      problem: '8 personas necesitaban automatizar atención al cliente. Ninguna había usado IA. Capacitación tradicional tomaría meses.',
      solution: '5 días de taller + 9 días de acompañamiento implementando sobre sus procesos reales. Cero teoría suelta.',
      result: '3 agentes IA funcionando. Tiempo de respuesta al cliente: de 4 horas a 12 minutos.',
    },
  },
  {
    title: 'Optimizar Agilidad',
    desc: 'Consistencia y velocidad generativa para que tu empresa escale sin fricciones.',
    wide: true,
    variant: 'grey',
    caseStudy: {
      title: 'Agencia multiplicó su producción 20x con el mismo equipo',
      problem: '3 personas producían 10 piezas de contenido al mes. Escalar implicaba contratar más gente.',
      solution: 'Flujos autónomos que generan borradores, editan, adaptan formatos y programan publicación. El humano supervisa y decide.',
      result: '200+ piezas/mes. Costo por pieza bajó 85%. Sin contratar a nadie.',
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
                <h4 className="text-sm font-semibold text-red-400 uppercase tracking-wider mb-2">Problema</h4>
                <p className="text-zinc-300 leading-relaxed">{pillars[activeCase].caseStudy.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-brand-purple uppercase tracking-wider mb-2">Solución</h4>
                <p className="text-zinc-300 leading-relaxed">{pillars[activeCase].caseStudy.solution}</p>
              </div>
              <div className="bg-brand-purple/20 border border-brand-purple/30 rounded-2xl p-5">
                <h4 className="text-sm font-semibold text-green-400 uppercase tracking-wider mb-2">Resultado</h4>
                <p className="text-white leading-relaxed font-medium">{pillars[activeCase].caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}