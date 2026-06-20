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

export default function Testimonials() {
  return (
    <section id="testimonios" className="section-padding bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">Testimonios</p>
          <h2 className="text-display-lg font-display font-bold tracking-tight mb-5">
            Quienes abrieron <span className="glow-text">su puerta</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="glass p-10 rounded-3xl hover:border-white/20 transition-all duration-500"
            >
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-10 italic font-medium">
                “{t.quote}”
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg shadow-purple-500/20">
                  {t.initials}
                </div>
                <div>
                  <cite className="font-bold text-white not-italic text-lg">{t.name}</cite>
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
