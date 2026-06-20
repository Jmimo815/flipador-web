import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getLocaleFromCookie } from '@/lib/meta';
import { legalMeta } from '@/lib/legalMeta';
import LegalPage from '@/components/LegalPage';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const locale = getLocaleFromCookie(cookieStore.get('flipador-locale')?.value);
  const meta = legalMeta[locale].cookies;
  return {
    title: meta.title,
    description: meta.description,
  };
}

export default function CookiesPage() {
  return <LegalPage type="cookies" />;
}
