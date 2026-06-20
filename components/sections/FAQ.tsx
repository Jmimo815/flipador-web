'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { t } = useI18n();

  const faqs = [
    { q: t('faq.1.q'), a: t('faq.1.a') },
    { q: t('faq.2.q'), a: t('faq.2.a') },
    { q: t('faq.3.q'), a: t('faq.3.a') },
    { q: t('faq.4.q'), a: t('faq.4.a') },
    { q: t('faq.5.q'), a: t('faq.5.a') },
    { q: t('faq.6.q'), a: t('faq.6.a') },
  ];

  return (
    <section id="faq" className="section-padding bg-brand-black border-y border-white/5">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-20">
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">{t('faq.label')}</p>
          <h2 className="text-display-lg font-display font-bold tracking-tight">
            {t('faq.title')} <span className="glow-text">{t('faq.titleHighlight')}</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 ${
                  isOpen
                    ? 'bg-white/5 border-white/10'
                    : 'bg-transparent border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  className="w-full flex items-center justify-between p-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-white font-semibold pr-4 text-base md:text-lg">{faq.q}</span>
                  <ChevronDown
                    className={`w-6 h-6 text-brand-purple flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-zinc-400 leading-relaxed text-base">{faq.a}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
