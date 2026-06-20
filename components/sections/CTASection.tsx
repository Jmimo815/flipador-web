'use client';

import { useState } from 'react';
import { useI18n } from '@/lib/i18n';
import ContactModal from '@/components/ContactModal';
import ContactForm from '@/components/ContactForm';
import { formTranslations } from '@/lib/formTranslations';

export default function CTASection() {
  const [contactOpen, setContactOpen] = useState(false);
  const { t, locale } = useI18n();
  const ft = formTranslations[locale];

  return (
    <section id="contacto" className="relative py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-brand-purple via-purple-900 to-brand-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(139,92,246,0.35),transparent_70%)]" />

      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-display-lg font-display font-bold tracking-tight text-white mb-8">
          {t('cta.title')}
        </h2>
        <p className="text-purple-200/80 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          {t('cta.subtitle')}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/573054636733"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-brand-purple px-10 py-5 text-lg font-bold rounded-full hover:bg-purple-50 transition-all hover:scale-105 shadow-2xl shadow-black/25"
          >
            {t('cta.whatsapp')}
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.932 11.932 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.239 0-4.332-.717-6.033-1.935l-.422-.305-3.1 1.04 1.04-3.1-.305-.422A9.956 9.956 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </a>
          <button
            onClick={() => setContactOpen(true)}
            className="inline-flex items-center justify-center border-2 border-white/40 text-white px-10 py-5 text-lg font-bold rounded-full hover:bg-white/10 hover:border-white/70 transition-all"
          >
            {t('cta.email')}
          </button>
        </div>
      </div>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} title={ft['contact.title']}>
        <ContactForm />
      </ContactModal>
    </section>
  );
}
