import { Check } from 'lucide-react';

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
  return (
    <section id="planes" className="section-padding bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">Planes</p>
          <h2 className="text-display-lg font-display font-bold tracking-tight mb-5">
            Invertí en tu <span className="glow-text">Transformación</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
            Empezá gratis. Escalá según tu madurez. Sin costos ocultos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-10 rounded-3xl transition-all duration-500 ${
                plan.highlighted
                  ? 'bg-brand-purple/25 border-2 border-brand-purple shadow-2xl shadow-brand-purple/25 scale-[1.02]'
                  : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  Más popular
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
                {plan.price}
                {plan.period && (
                  <span className="text-zinc-500 text-lg font-normal ml-1">{plan.period}</span>
                )}
              </div>
              <p className="text-zinc-400 text-sm mb-8">{plan.description}</p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-purple-400' : 'text-zinc-500'
                    }`} />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://tally.so/r/vGKy58"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 px-6 rounded-full font-bold transition-all ${
                  plan.highlighted
                    ? 'bg-brand-purple text-white hover:bg-purple-600 shadow-lg shadow-purple-500/20'
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
