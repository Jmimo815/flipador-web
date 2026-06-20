import { cookies } from 'next/headers';
import { translations } from '@/lib/translations';
import { metaByLocale, getLocaleFromCookie, type SiteLocale } from '@/lib/meta';

export default function JsonLd() {
  const cookieStore = cookies();
  const locale: SiteLocale = getLocaleFromCookie(cookieStore.get('flipador-locale')?.value);
  const t = translations[locale];
  const meta = metaByLocale[locale];

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FLIP∀DOOR',
    url: 'https://flipadoor.com',
    logo: 'https://flipadoor.com/favicon.svg',
    sameAs: [
      'https://linkedin.com/company/flipadoor',
      'https://x.com/flipadoor',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+57-305-463-6733',
      contactType: 'sales',
      email: 'contacto@flipadoor.com',
      areaServed: 'CO',
      availableLanguage: ['Spanish', 'English', 'German'],
    },
  };

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: meta.title,
    description: meta.description,
    provider: { '@type': 'Organization', name: 'FLIP∀DOOR' },
    areaServed: { '@type': 'Country', name: 'Colombia' },
  };

  const faqPage = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: Array.from({ length: 6 }, (_, i) => ({
      '@type': 'Question',
      name: t[`faq.${i + 1}.q` as keyof typeof t],
      acceptedAnswer: {
        '@type': 'Answer',
        text: t[`faq.${i + 1}.a` as keyof typeof t],
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(service) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
