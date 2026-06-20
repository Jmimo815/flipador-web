'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, TranslationKey } from './translations';

export type Locale = 'es' | 'en';

interface I18nContextType {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: TranslationKey) => string;
}

const I18nContext = createContext<I18nContextType | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('es');

  useEffect(() => {
    const saved = localStorage.getItem('flipador-locale') as Locale | null;
    if (saved && (saved === 'es' || saved === 'en')) {
      setLocaleState(saved);
    }
  }, []);

  const setLocale = (l: Locale) => {
    setLocaleState(l);
    localStorage.setItem('flipador-locale', l);
  };

  const t = (key: TranslationKey): string => {
    const val = translations[locale][key];
    return (val as string) ?? key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
}
