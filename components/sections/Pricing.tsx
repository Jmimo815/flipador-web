'use client';

import { useI18n } from '@/lib/i18n';
import { Check } from 'lucide-react';

export default function Pricing() {
  const { t } = useI18n();

  const plans = [
    {
      name: t('pricing.plan1.name'),
      price: t('pricing.plan1.price'),
      period: t('pricing.plan1.period'),
      description: t('pricing.plan1.description'),
      features: t('pricing.plan1.features').split(','),
      highlighted: false,
      cta: t('pricing.plan1.cta'),
    },
    {
      name: t('pricing.plan2.name'),
      price: t('pricing.plan2.price'),
      period: t('pricing.plan2.period'),
      description: t('pricing.plan2.description'),
      features: t('pricing.plan2.features').split(','),
      highlighted: true,
      cta: t('pricing.plan2.cta'),
    },
    {
      name: t('pricing.plan3.name'),
      price: t('pricing.plan3.price'),
      period: t('pricing.plan3.period'),
      description: t('pricing.plan3.description'),
      features: t('pricing.plan3.features').split(','),
      highlighted: false,
      cta: t('pricing.plan3.cta'),
    },
  ];

  return (
    <section id="planes" className="section-padding bg-brand-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">{t('pricing.label')}</p>
          <h2 className="text-display-lg font-display font-bold tracking-tight mb-5">
            {t('pricing.title')} <span className="glow-text">{t('pricing.titleHighlight')}</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-10 rounded-3xl transition-all duration-500 ${
                plan.highlighted
                  ? 'bg-brand-purple/25 border-2 border-brand-purple shadow-2xl shadow-brand-purple/25 scale-[1.02]'
                  : 'bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-purple text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                  {t('pricing.popular')}
                </div>
              )}

              <h3 className="text-xl font-bold text-white mb-3">{plan.name}</h3>
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-3">
                {plan.price}
                {plan.period && (
                  <span className="text-zinc-500 text-lg font-normal ml-1">{plan.period}</span>
                )}
              </div>
              <p className="text-zinc-400 text-sm mb-8">{plan.description}</p>

              <ul className="space-y-4 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                      plan.highlighted ? 'text-purple-400' : 'text-zinc-500'
                    }`} />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://tally.so/r/vGKy58"
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-4 px-6 rounded-full font-bold transition-all ${
                  plan.highlighted
                    ? 'bg-brand-purple text-white hover:bg-purple-600 shadow-lg shadow-purple-500/20'
                    : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
