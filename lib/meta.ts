import type { Metadata } from 'next';

export type SiteLocale = 'es' | 'en' | 'de';

export const metaByLocale: Record<
  SiteLocale,
  Pick<Metadata, 'title' | 'description' | 'keywords' | 'openGraph'>
> = {
  es: {
    title: 'FLIP∀DOOR — Deja de operar la IA. Comienza a dirigirla.',
    description:
      'Implementá agentes IA privados en 14 días. Sin APIs externas. Sin fugas de datos. Tu equipo opera, no es reemplazado.',
    keywords:
      'AI, Industria 5.0, Sovereign AI, automatización, RAG, agentes IA, consultoría, Colombia',
    openGraph: {
      title: 'FLIP∀DOOR — Deja de operar la IA. Comienza a dirigirla.',
      description:
        'Implementá agentes IA privados en 14 días. Sin APIs externas. Sin fugas de datos.',
      type: 'website',
      url: 'https://flipadoor.com',
      locale: 'es_CO',
    },
  },
  en: {
    title: 'FLIP∀DOOR — Stop Operating AI. Start Directing It.',
    description:
      'Deploy private AI agents in 14 days. No external APIs. No data leaks. Your team operates, it is not replaced.',
    keywords:
      'AI, Industry 5.0, Sovereign AI, automation, RAG, AI agents, consulting',
    openGraph: {
      title: 'FLIP∀DOOR — Stop Operating AI. Start Directing It.',
      description:
        'Deploy private AI agents in 14 days. No external APIs. No data leaks.',
      type: 'website',
      url: 'https://flipadoor.com',
      locale: 'en_US',
    },
  },
  de: {
    title: 'FLIP∀DOOR — Hört auf, KI zu bedienen. Fangt an, sie zu lenken.',
    description:
      'Private KI-Agenten in 14 Tagen. Keine externen APIs. Keine Datenlecks. Ihr Team arbeitet, es wird nicht ersetzt.',
    keywords:
      'KI, Industrie 5.0, Sovereign AI, Automatisierung, RAG, KI-Agenten, Beratung',
    openGraph: {
      title: 'FLIP∀DOOR — Hört auf, KI zu bedienen. Fangt an, sie zu lenken.',
      description:
        'Private KI-Agenten in 14 Tagen. Keine externen APIs. Keine Datenlecks.',
      type: 'website',
      url: 'https://flipadoor.com',
      locale: 'de_DE',
    },
  },
};

export function getLocaleFromCookie(cookieHeader?: string | null): SiteLocale {
  if (!cookieHeader) return 'es';
  const match = cookieHeader.match(/flipador-locale=(es|en|de)/);
  return (match?.[1] as SiteLocale) ?? 'es';
}
