'use client';

import { useI18n } from '@/lib/i18n';

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
      {(['es', 'en', 'de'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          className={`px-2.5 py-1 text-xs font-bold rounded-full transition-all ${
            locale === l
              ? 'bg-brand-purple text-white shadow-md'
              : 'text-zinc-400 hover:text-white'
          }`}
          aria-label={l === 'es' ? 'Cambiar a español' : l === 'en' ? 'Switch to English' : 'Auf Deutsch wechseln'}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
