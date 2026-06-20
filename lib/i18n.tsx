'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, TranslationKey } from './translations';

export type Locale = 'es' | 'en' | 'de';

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
  isTransitioning: boolean;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('flipador-locale') as Locale | null;
    if (saved && (saved === 'es' || saved === 'en' || saved === 'de')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: Locale) => {
    if (l === locale) return;
    setIsTransitioning(true);
    // Breve pausa para que el blur se aplique antes del re-render
    setTimeout(() => {
      setLocaleState(l);
      localStorage.setItem('flipador-locale', l);
      // Mantener blur un momento mientras React re-renderiza todo
      setTimeout(() => {
        setIsTransitioning(false);
      }, 250);
    }, 150);
  };

  const t = (key: TranslationKey): string => {
    const val = translations[locale][key];
    return (val as string) ?? key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, isTransitioning }}>
      <>
        {children}
        {/* Blur overlay durante cambio de idioma */}
        <div
          className={`fixed inset-0 z-[100] bg-brand-black/50 backdrop-blur-xl transition-opacity duration-300 pointer-events-none ${
            isTransitioning ? 'opacity-100' : 'opacity-0'
          }`}
          aria-hidden="true"
        />
      </>
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
