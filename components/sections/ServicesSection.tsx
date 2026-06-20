'use client';

import { useI18n } from '@/lib/i18n';
import { Briefcase, Shield, GraduationCap, Workflow } from 'lucide-react';

export default function ServicesSection() {
  const { t } = useI18n();

  const services = [
    {
      tag: t('services.1.tag'),
      title: t('services.1.title'),
      desc: t('services.1.desc'),
      icon: Briefcase,
      cta: t('services.1.cta'),
    },
    {
      tag: t('services.2.tag'),
      title: t('services.2.title'),
      desc: t('services.2.desc'),
      icon: Shield,
      cta: t('services.2.cta'),
    },
    {
      tag: t('services.3.tag'),
      title: t('services.3.title'),
      desc: t('services.3.desc'),
      icon: GraduationCap,
      cta: t('services.3.cta'),
    },
    {
      tag: t('services.4.tag'),
      title: t('services.4.title'),
      desc: t('services.4.desc'),
      icon: Workflow,
      cta: t('services.4.cta'),
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-zinc-50 text-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">{t('services.label')}</p>
          <h2 className="text-display-lg font-display font-bold tracking-tight mb-5">
            {t('services.title')}
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl">
            {t('services.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="group p-8 rounded-3xl bg-white border border-zinc-200 text-left hover:border-brand-purple hover:shadow-2xl hover:shadow-purple-100/40 transition-all duration-500"
              >
                <div className="w-14 h-14 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:bg-brand-purple transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-purple group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-xs font-bold text-brand-purple uppercase tracking-widest">{s.tag}</span>
                <h3 className="text-xl md:text-2xl font-bold mt-3 mb-4 group-hover:text-brand-purple transition-colors">
                  {s.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed mb-6">{s.desc}</p>
                <a
                  href="https://tally.so/r/vGKy58"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-bold text-brand-purple hover:text-purple-800 transition-colors group/link"
                >
                  {s.cta}
                  <svg className="ml-1 w-4 h-4 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
