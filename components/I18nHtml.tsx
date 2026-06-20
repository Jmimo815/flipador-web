'use client';

import { useEffect } from 'react';
import { useI18n } from '@/lib/i18n';

export default function I18nHtml({ children }: { children: React.ReactNode }) {
  const { locale } = useI18n();

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  return <>{children}</>;
}
