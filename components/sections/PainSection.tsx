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
    <section className="section-padding bg-white text-brand-black wave-bg">
      {/* Animated wave lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" preserveAspectRatio="none" aria-hidden="true">
        {/* Wave 1 - slow */}
        <path className="wave-line-1" d="M0,160 C320,220 640,100 960,180 C1280,260 1600,120 1920,200 C2240,280 2560,140 2880,200 L2880,600 L0,600 Z" fill="none" stroke="rgba(69,36,118,0.06)" strokeWidth="1.5" />
        <path className="wave-line-2" d="M0,280 C320,340 640,220 960,300 C1280,380 1600,240 1920,320 C2240,400 2560,260 2880,320 L2880,600 L0,600 Z" fill="none" stroke="rgba(69,36,118,0.04)" strokeWidth="1" />
        <path className="wave-line-3" d="M0,400 C320,440 640,360 960,420 C1280,480 1600,340 1920,440 C2240,500 2560,380 2880,440 L2880,600 L0,600 Z" fill="none" stroke="rgba(163,165,165,0.05)" strokeWidth="1" />
      </svg>

      <div className="container mx-auto px-6 text-center relative z-10">
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
                className="group p-8 md:p-10 rounded-3xl border border-zinc-200 bg-white/90 backdrop-blur-sm text-left hover:shadow-2xl hover:border-purple-300 hover:shadow-purple-100 transition-all duration-500"
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

      <style>{`
        .wave-line-1 { animation: waveFlow1 18s ease-in-out infinite; }
        .wave-line-2 { animation: waveFlow2 22s ease-in-out infinite; }
        .wave-line-3 { animation: waveFlow3 26s ease-in-out infinite; }
        @keyframes waveFlow1 {
          0%, 100% { transform: translateX(0) translateY(0); }
          25% { transform: translateX(-40px) translateY(15px); }
          50% { transform: translateX(20px) translateY(-10px); }
          75% { transform: translateX(-15px) translateY(8px); }
        }
        @keyframes waveFlow2 {
          0%, 100% { transform: translateX(0) translateY(0); }
          33% { transform: translateX(30px) translateY(-20px); }
          66% { transform: translateX(-25px) translateY(12px); }
        }
        @keyframes waveFlow3 {
          0%, 100% { transform: translateX(0) translateY(0); }
          20% { transform: translateX(-20px) translateY(10px); }
          60% { transform: translateX(35px) translateY(-15px); }
          80% { transform: translateX(-10px) translateY(5px); }
        }
      `}</style>
    </section>
  );
}