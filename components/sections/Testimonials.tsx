'use client';

import { useI18n } from '@/lib/i18n';

export default function Testimonials() {
  const { t } = useI18n();

  const testimonials = [
    {
      quote: t('testimonials.1.quote'),
      name: t('testimonials.1.name'),
      role: t('testimonials.1.role'),
      company: t('testimonials.1.company'),
      initials: 'CR',
    },
    {
      quote: t('testimonials.2.quote'),
      name: t('testimonials.2.name'),
      role: t('testimonials.2.role'),
      company: t('testimonials.2.company'),
      initials: 'LM',
    },
    {
      quote: t('testimonials.3.quote'),
      name: t('testimonials.3.name'),
      role: t('testimonials.3.role'),
      company: t('testimonials.3.company'),
      initials: 'AH',
    },
  ];

  return (
    <section id="testimonios" className="section-padding bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">{t('testimonials.label')}</p>
          <h2 className="text-display-lg font-display font-bold tracking-tight mb-5">
            {t('testimonials.title')} <span className="glow-text">{t('testimonials.titleHighlight')}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="glass p-10 rounded-3xl hover:border-white/20 transition-all duration-500"
            >
              <p className="text-lg md:text-xl text-zinc-300 leading-relaxed mb-10 italic font-medium">
                “{item.quote}”
              </p>
              <footer className="flex items-center gap-4">
                <div className="w-14 h-14 bg-brand-purple rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg shadow-purple-500/20">
                  {item.initials}
                </div>
                <div>
                  <cite className="font-bold text-white not-italic text-lg">{item.name}</cite>
                  <p className="text-zinc-500 text-sm">{item.role}, {item.company}</p>
                </div>
              </footer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
