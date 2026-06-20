'use client';

import { useI18n } from '@/lib/i18n';

const partners = [
  'INDUSTRIA 5.0',
  'SOVEREIGN AI',
  'RAG FRAMEWORKS',
];

export default function Authority() {
  const { t } = useI18n();

  return (
    <section className="py-14 border-y border-white/5 bg-brand-black">
      <div className="container mx-auto px-6 text-center">
        <p className="text-zinc-600 text-xs uppercase tracking-[0.25em] mb-10 font-bold">
          {t('authority.label')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {partners.map((item, i) => (
            <div key={item} className="flex items-center gap-8 md:gap-12">
              <span className="text-sm md:text-base font-bold text-zinc-700 hover:text-zinc-400 transition-colors duration-500 tracking-wider whitespace-nowrap">
                {item}
              </span>
              {i < partners.length - 1 && (
                <span className="w-1.5 h-1.5 bg-brand-purple rounded-full flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
