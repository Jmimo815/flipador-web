'use client';

import { useI18n } from '@/lib/i18n';

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/25 via-brand-black to-brand-black" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-brand-purple/15 rounded-full blur-3xl animate-pulse-slow" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Logo */}
        <div className="mb-12 animate-fade-up">
          <img
            src="/brand/ISOTIPO_FLIPADOOR-removebg-preview.png"
            alt="FLIP∀DOOR"
            className="h-28 md:h-44 w-auto mx-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Headline — bold and modern */}
        <h1 className="text-display-xl font-display font-bold tracking-tighter mb-8 animate-fade-up">
          {t('hero.headline1')}
          <br />
          <span className="glow-text">{t('hero.headline2')}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-3xl mx-auto mb-14 leading-relaxed animate-fade-in">
          {t('hero.subtitle1')} <span className="text-white font-semibold">14 {t('hero.days')}</span>. {t('hero.subtitle2')}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
          <a
            href="#servicios"
            className="inline-flex items-center justify-center bg-brand-purple hover:bg-purple-600 text-white px-10 py-5 text-lg font-bold rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
          >
            {t('hero.cta.primary')}
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
          <a
            href="#metodo"
            className="inline-flex items-center text-zinc-400 hover:text-white font-semibold transition-colors group text-lg"
          >
            {t('hero.cta.secondary')}
            <span className="group-hover:translate-x-2 transition-transform ml-1 font-bold">→</span>
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-7 h-7 text-zinc-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
