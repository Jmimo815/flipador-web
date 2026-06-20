'use client';

import { useI18n } from '@/lib/i18n';
import { AlertTriangle, MessageSquareOff, DollarSign } from 'lucide-react';

export default function PainSection() {
  const { t } = useI18n();

  const pains = [
    {
      title: t('pain.1.title'),
      desc: t('pain.1.desc'),
      icon: AlertTriangle,
      accent: 'from-purple-600 to-purple-800',
    },
    {
      title: t('pain.2.title'),
      desc: t('pain.2.desc'),
      icon: MessageSquareOff,
      accent: 'from-zinc-700 to-zinc-900',
    },
    {
      title: t('pain.3.title'),
      desc: t('pain.3.desc'),
      icon: DollarSign,
      accent: 'from-purple-600 to-purple-800',
    },
  ];

  return (
    <section className="section-padding bg-zinc-50 text-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">{t('pain.label')}</p>
          <h2 className="text-display-lg font-display font-bold tracking-tight mb-5">
            {t('pain.title')}
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto text-lg md:text-xl italic">
            {t('pain.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="group p-10 rounded-3xl border border-zinc-200 bg-white text-left hover:shadow-2xl hover:border-purple-300 transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 bg-gradient-to-br ${p.accent} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-brand-purple transition-colors">
                  {p.title}
                </h3>
                <p className="text-zinc-500 leading-relaxed text-base">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
