'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

export default function SolutionSection() {
  const [activeCase, setActiveCase] = useState<number | null>(null);
  const { t } = useI18n();

  const pillars = [
    {
      title: t('method.pillar1.title'),
      desc: t('method.pillar1.desc'),
      wide: true,
      variant: 'purple',
      cta: t('method.pillar1.cta'),
      caseStudy: {
        title: t('method.pillar1.case.title'),
        problem: t('method.pillar1.case.problem'),
        solution: t('method.pillar1.case.solution'),
        result: t('method.pillar1.case.result'),
      },
    },
    {
      title: t('method.pillar2.title'),
      desc: t('method.pillar2.desc'),
      wide: false,
      variant: 'dark',
      cta: t('method.pillar2.cta'),
      caseStudy: {
        title: t('method.pillar2.case.title'),
        problem: t('method.pillar2.case.problem'),
        solution: t('method.pillar2.case.solution'),
        result: t('method.pillar2.case.result'),
      },
    },
    {
      title: t('method.pillar3.title'),
      desc: t('method.pillar3.desc'),
      wide: false,
      variant: 'dark',
      cta: t('method.pillar3.cta'),
      caseStudy: {
        title: t('method.pillar3.case.title'),
        problem: t('method.pillar3.case.problem'),
        solution: t('method.pillar3.case.solution'),
        result: t('method.pillar3.case.result'),
      },
    },
    {
      title: t('method.pillar4.title'),
      desc: t('method.pillar4.desc'),
      wide: true,
      variant: 'grey',
      cta: t('method.pillar4.cta'),
      caseStudy: {
        title: t('method.pillar4.case.title'),
        problem: t('method.pillar4.case.problem'),
        solution: t('method.pillar4.case.solution'),
        result: t('method.pillar4.case.result'),
      },
    },
  ];

  return (
    <section id="metodo" className="section-padding bg-brand-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">{t('method.label')}</p>
          <h2 className="text-display-lg font-display font-bold tracking-tight mb-5">
            {t('method.title')}
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
            {t('method.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            let cardClass = '';
            let btnClass = '';
            if (p.variant === 'purple') {
              cardClass = 'bg-brand-purple text-white';
              btnClass = 'bg-white/20 hover:bg-white/30 text-white';
            } else if (p.variant === 'dark') {
              cardClass = 'bg-white/5 text-white border border-white/10';
              btnClass = 'bg-white/10 hover:bg-white/20 text-white';
            } else {
              cardClass = 'bg-zinc-400 text-brand-black';
              btnClass = 'bg-brand-black/10 hover:bg-brand-black/20 text-brand-black';
            }

            return (
              <div
                key={p.title}
                className={`${cardClass} p-10 md:p-14 rounded-3xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl cursor-pointer ${
                  p.wide ? 'md:col-span-2' : 'md:col-span-1'
                }`}
                onClick={() => setActiveCase(i)}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{p.title}</h3>
                <p className="text-lg opacity-85 leading-relaxed mb-8">{p.desc}</p>
                <button className={`${btnClass} px-6 py-3 rounded-full text-sm font-bold transition-all`}>
                  {p.cta}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal */}
      {activeCase !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setActiveCase(null)}
        >
          <div
            className="bg-brand-black border border-white/10 rounded-3xl max-w-2xl w-full p-10 md:p-12 relative shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCase(null)}
              className="absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors"
            >
              <X className="w-7 h-7" />
            </button>

            <p className="text-brand-purple text-xs font-bold uppercase tracking-widest mb-3">{t('method.modal.label')}</p>
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-10">
              {pillars[activeCase].caseStudy.title}
            </h3>

            <div className="space-y-8">
              <div>
                <h4 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">{t('method.modal.problem')}</h4>
                <p className="text-zinc-300 leading-relaxed">{pillars[activeCase].caseStudy.problem}</p>
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-purple uppercase tracking-wider mb-3">{t('method.modal.solution')}</h4>
                <p className="text-zinc-300 leading-relaxed">{pillars[activeCase].caseStudy.solution}</p>
              </div>
              <div className="bg-brand-purple/20 border border-brand-purple/30 rounded-2xl p-6">
                <h4 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-3">{t('method.modal.result')}</h4>
                <p className="text-white leading-relaxed font-bold text-lg">{pillars[activeCase].caseStudy.result}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
