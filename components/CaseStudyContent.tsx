'use client';

import { notFound } from 'next/navigation';
import { useI18n } from '@/lib/i18n';
import AnimatedSection from './AnimatedSection';
import { TranslationKey } from '@/lib/translations';

const slugMap = [
  { slug: 'liberar-talento', num: 1 },
  { slug: 'democratizar-conocimiento', num: 2 },
  { slug: 'cerrar-brecha', num: 3 },
  { slug: 'optimizar-agilidad', num: 4 },
];

const titleKeys: TranslationKey[] = [
  'method.pillar1.case.title',
  'method.pillar2.case.title',
  'method.pillar3.case.title',
  'method.pillar4.case.title',
];

const problemKeys: TranslationKey[] = [
  'method.pillar1.case.problem',
  'method.pillar2.case.problem',
  'method.pillar3.case.problem',
  'method.pillar4.case.problem',
];

const solutionKeys: TranslationKey[] = [
  'method.pillar1.case.solution',
  'method.pillar2.case.solution',
  'method.pillar3.case.solution',
  'method.pillar4.case.solution',
];

const resultKeys: TranslationKey[] = [
  'method.pillar1.case.result',
  'method.pillar2.case.result',
  'method.pillar3.case.result',
  'method.pillar4.case.result',
];

export default function CaseStudyContent({ slug }: { slug: string }) {
  const { t } = useI18n();
  const mapping = slugMap.find((m) => m.slug === slug);
  if (!mapping) return notFound();

  const idx = mapping.num - 1;

  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <AnimatedSection>
          <p className="text-brand-purple text-sm font-bold uppercase tracking-[0.2em] mb-4">
            {t('method.modal.label')}
          </p>
          <h1 className="text-3xl md:text-5xl font-display font-bold mb-10">
            {t(titleKeys[idx])}
          </h1>

          <div className="space-y-10">
            <div className="glass p-8 rounded-2xl border-l-4 border-red-400">
              <h2 className="text-sm font-bold text-red-400 uppercase tracking-wider mb-3">
                {t('method.modal.problem')}
              </h2>
              <p className="text-zinc-300 leading-relaxed text-lg">
                {t(problemKeys[idx])}
              </p>
            </div>

            <div className="glass p-8 rounded-2xl border-l-4 border-brand-purple">
              <h2 className="text-sm font-bold text-brand-purple uppercase tracking-wider mb-3">
                {t('method.modal.solution')}
              </h2>
              <p className="text-zinc-300 leading-relaxed text-lg">
                {t(solutionKeys[idx])}
              </p>
            </div>

            <div className="bg-brand-purple/20 border border-brand-purple/30 rounded-2xl p-8">
              <h2 className="text-sm font-bold text-green-400 uppercase tracking-wider mb-3">
                {t('method.modal.result')}
              </h2>
              <p className="text-white leading-relaxed font-bold text-xl">
                {t(resultKeys[idx])}
              </p>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={200}>
          <div className="mt-16 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/#metodo"
              className="inline-flex items-center justify-center border-2 border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors"
            >
              ← {t('method.label')}
            </a>
            <a
              href="https://wa.me/573054636733"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-brand-purple text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              {t('cta.whatsapp')}
            </a>
          </div>
        </AnimatedSection>
      </div>
    </main>
  );
}
