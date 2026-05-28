const pillars = [
  {
    title: 'Liberar Talento',
    desc: 'Convertimos la automatización en un catalizador creativo. Pasamos la rutina al pensamiento estratégico.',
    wide: true,
    variant: 'purple',
  },
  {
    title: 'Democratizar Conocimiento',
    desc: 'IA accesible, segura y sin silos organizacionales.',
    wide: false,
    variant: 'dark',
  },
  {
    title: 'Cerrar la Brecha',
    desc: 'Aprendizaje acelerado basado en implementación inmediata.',
    wide: false,
    variant: 'dark',
  },
  {
    title: 'Optimizar Agilidad',
    desc: 'Consistencia y velocidad generativa para que tu empresa escale sin fricciones.',
    wide: true,
    variant: 'grey',
  },
];

export default function SolutionSection() {
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
          {pillars.map((p) => {
            let cardClass = '';
            if (p.variant === 'purple') cardClass = 'bg-brand-purple text-white';
            else if (p.variant === 'dark') cardClass = 'bg-white/5 text-white border border-white/10';
            else cardClass = 'bg-zinc-400 text-brand-black';

            return (
              <div
                key={p.title}
                className={`${cardClass} p-10 md:p-12 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl ${
                  p.wide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-lg opacity-80 leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}