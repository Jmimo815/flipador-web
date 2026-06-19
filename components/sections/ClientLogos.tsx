export default function ClientLogos() {
  const clients = [
    'Consultora Regional',
    'Agencia de Contenido',
    'Tech Startup',
    'Firma Legal',
    'Universidad',
    'Industria 4.0',
  ];

  return (
    <section className="py-12 border-y border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8 font-semibold">
          Confían en nuestro método
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
          {clients.map((client) => (
            <span
              key={client}
              className="text-sm md:text-base font-bold text-zinc-400 hover:text-white transition-colors duration-500 tracking-wide whitespace-nowrap"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
