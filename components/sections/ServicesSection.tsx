import { Briefcase, Shield, GraduationCap, Workflow } from 'lucide-react';

const services = [
  {
    tag: 'Enterprise',
    title: 'Consultoría Estratégica',
    desc: 'Auditoría de procesos y diseño de un roadmap de IA personalizado para maximizar el ROI.',
    icon: Briefcase,
  },
  {
    tag: 'Sovereign',
    title: 'Sovereign AI Setup',
    desc: 'Despliegue de modelos LLM locales para privacidad absoluta y costo cero en tokens.',
    icon: Shield,
  },
  {
    tag: 'Academy',
    title: 'Taller de Desmitificación',
    desc: 'Capacitación intensiva para equipos: transformando el miedo en maestría tecnológica.',
    icon: GraduationCap,
  },
  {
    tag: 'Efficiency',
    title: 'Flujos Autónomos',
    desc: 'Integraciones inteligentes que eliminan el trabajo repetitivo y liberan tiempo.',
    icon: Workflow,
  },
];

export default function ServicesSection() {
  return (
    <section id="servicios" className="section-padding bg-zinc-50 text-brand-black light-section">
      {/* Animated blobs */}
      <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-purple-200/15 rounded-full blur-3xl animate-[floatBlob2_18s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-[350px] h-[350px] bg-purple-100/20 rounded-full blur-3xl animate-[floatBlob1_14s_ease-in-out_infinite] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-zinc-200/30 rounded-full blur-3xl animate-[floatBlob1_20s_ease-in-out_infinite_reverse] pointer-events-none" />

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
                className="group p-8 rounded-3xl bg-white/80 backdrop-blur-sm border border-zinc-200 text-left hover:border-brand-purple hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-500"
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
                  Consultar
                  <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
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