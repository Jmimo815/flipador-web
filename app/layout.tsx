import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import './globals.css';
import { I18nProvider } from '@/lib/i18n';
import I18nHtml from '@/components/I18nHtml';
import { metaByLocale, getLocaleFromCookie, type SiteLocale } from '@/lib/meta';

export function generateMetadata(): Metadata {
  const cookieStore = cookies();
  const cookieHeader = cookieStore.get('flipador-locale')?.value;
  const locale: SiteLocale = getLocaleFromCookie(cookieHeader);
  const meta = metaByLocale[locale];

  return {
    ...meta,
    metadataBase: new URL('https://flipadoor.com'),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.openGraph?.title ?? meta.title ?? 'FLIP∀DOOR',
      description: meta.openGraph?.description ?? meta.description ?? '',
    },
    alternates: {
      canonical: 'https://flipadoor.com',
      languages: {
        'es': 'https://flipadoor.com',
        'en': 'https://flipadoor.com',
        'de': 'https://flipadoor.com',
        'x-default': 'https://flipadoor.com',
      },
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const cookieHeader = cookieStore.get('flipador-locale')?.value;
  const locale: SiteLocale = getLocaleFromCookie(cookieHeader);

  return (
    <html lang={locale} className="dark">
      <body className="font-sans">
        <I18nProvider>
          <I18nHtml>{children}</I18nHtml>
        </I18nProvider>
      </body>
    </html>
  );
}
