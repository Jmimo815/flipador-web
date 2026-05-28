'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/20 via-brand-black to-brand-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-brand-purple/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-10 animate-fade-up">
          <img
            src="/brand/ISOTIPO_FLIPADOOR-removebg-preview.png"
            alt="FLIP∀DOOR"
            className="h-24 md:h-36 w-auto mx-auto object-contain"
          />
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 animate-fade-up-delay">
          Deja de operar la IA.
          <br />
          <span className="glow-text">Comienza a dirigirla.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-up-delay-2">
          Lideramos la transición hacia la <span className="text-white font-medium">Industria&nbsp;5.0</span>.
          Adaptamos la IA para abrir puertas y liberar el ingenio humano.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up-delay-2">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center bg-brand-purple hover:bg-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Abrir mi puerta al futuro
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#metodo"
            className="inline-flex items-center text-zinc-400 hover:text-white font-medium transition-colors group"
          >
            Descubre el Método&nbsp;∀
            <span className="group-hover:translate-x-2 transition-transform ml-1">&rarr;</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-zinc-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}