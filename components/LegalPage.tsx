'use client';

import { legalTranslations } from '@/lib/legalTranslations';
import { useI18n } from '@/lib/i18n';

interface LegalPageProps {
  type: 'terms' | 'privacy' | 'cookies';
}

export default function LegalPage({ type }: LegalPageProps) {
  const { locale } = useI18n();
  const doc = legalTranslations[locale][type];

  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">{doc.title}</h1>
        <p className="text-zinc-400 mb-8">{doc.updated}</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          {doc.sections.map((section, i) => (
            <section key={i}>
              <h2 className="text-xl font-bold text-white mb-3">{section.title}</h2>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside space-y-2">
                  {section.content.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p>{section.content}</p>
              )}
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
