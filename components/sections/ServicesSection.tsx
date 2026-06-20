import { Briefcase, Shield, GraduationCap, Workflow } from 'lucide-react';

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
  return (
    <section id="servicios" className="section-padding bg-zinc-50 text-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">Servicios</p>
          <h2 className="text-display-lg font-display font-bold tracking-tight mb-5">
            Nuestras Puertas Abiertas
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl">
            Toma el control de tu infraestructura tecnológica con soluciones de alto impacto.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group p-8 rounded-3xl bg-white border border-zinc-200 text-left hover:border-brand-purple hover:shadow-2xl hover:shadow-purple-100/40 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-brand-purple transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs font-bold text-brand-purple uppercase tracking-widest">{s.tag}</span>
                <h3 className="text-xl md:text-2xl font-bold mt-3 mb-4 group-hover:text-brand-purple transition-colors">
                  {s.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-6">{s.desc}</p>
                <a
                  href="https://tally.so/r/vGKy58"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-brand-purple hover:text-purple-800 transition-colors group/link"
                >
                  {s.cta}
                  <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
