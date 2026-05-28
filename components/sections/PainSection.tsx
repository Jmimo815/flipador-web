import { AlertTriangle, MessageSquareOff, DollarSign } from 'lucide-react';

const pains = [
  {
    title: 'Saturación de Herramientas',
    desc: 'Usar 20 herramientas aisladas no es optimizar; es crear ruido administrativo. Diseñamos ecosistemas integrados donde el flujo de datos es invisible.',
    icon: AlertTriangle,
    accent: 'from-purple-500 to-purple-700',
  },
  {
    title: 'La Falacia del Prompt',
    desc: 'Un prompt mágico no soluciona un proceso roto. Implementamos arquitecturas de IA reales (RAG, Agentes) que resuelven problemas.',
    icon: MessageSquareOff,
    accent: 'from-zinc-600 to-zinc-800',
  },
  {
    title: 'Eficiencia de Costos',
    desc: 'Suscripciones masivas sin estrategia es quemar capital. Optimizamos con Sovereign AI para reducir costos sin sacrificar potencia.',
    icon: DollarSign,
    accent: 'from-purple-500 to-purple-700',
  },
];

export default function PainSection() {
  return (
    <section className="section-padding bg-white text-brand-black">
      <div className="container mx-auto px-6 text-center">
        <p className="text-brand-purple text-sm font-semibold uppercase tracking-widest mb-4">El problema</p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold mb-6 tracking-tight">
          El Laberinto de la IA
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto text-lg mb-16 italic">
          Saliendo de la fase de &ldquo;operador&rdquo; hacia la maestría estratégica.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group p-8 md:p-10 rounded-3xl border border-zinc-200 bg-white text-left hover:shadow-2xl hover:border-purple-200 transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${p.accent} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-brand-purple transition-colors">
                  {p.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}