'use client';

import { useI18n } from '@/lib/i18n';

export default function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1">
      <button
        onClick={() => setLocale('es')}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
          locale === 'es'
            ? 'bg-brand-purple text-white shadow-md'
            : 'text-zinc-400 hover:text-white'
        }`}
        aria-label="Cambiar a español"
      >
        ES
      </button>
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1 text-xs font-bold rounded-full transition-all ${
          locale === 'en'
            ? 'bg-brand-purple text-white shadow-md'
            : 'text-zinc-400 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
