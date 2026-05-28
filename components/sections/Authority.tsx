export default function Authority() {
  const partners = [
    'SENA COLOMBIA',
    'INDUSTRIA 5.0',
    'SOVEREIGN AI',
    'RAG FRAMEWORKS',
  ];

  return (
    <section className="py-12 border-y border-white/5 bg-brand-black">
      <div className="container mx-auto px-6 text-center">
        <p className="text-zinc-600 text-xs uppercase tracking-[0.2em] mb-10 font-semibold">
          Metodología validada en implementaciones de escala
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {partners.map((item) => (
            <span
              key={item}
              className="text-sm md:text-base font-bold text-zinc-600 hover:text-zinc-300 transition-colors duration-500 tracking-wider"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}