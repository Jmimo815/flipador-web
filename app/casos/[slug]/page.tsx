import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { getLocaleFromCookie, type SiteLocale } from '@/lib/meta';
import CaseStudyContent from '@/components/CaseStudyContent';

const validSlugs = [
  'liberar-talento',
  'democratizar-conocimiento',
  'cerrar-brecha',
  'optimizar-agilidad',
];

const titles: Record<SiteLocale, string> = {
  es: 'Caso de estudio',
  en: 'Case study',
  de: 'Fallstudie',
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  if (!validSlugs.includes(params.slug)) return {};
  const cookieStore = cookies();
  const locale = getLocaleFromCookie(cookieStore.get('flipador-locale')?.value);
  return {
    title: `${titles[locale]} — FLIP∀DOOR`,
    description: 'Conocé cómo implementamos IA en una organización real.',
  };
}

export default function CasoPage({ params }: { params: { slug: string } }) {
  if (!validSlugs.includes(params.slug)) notFound();
  return <CaseStudyContent slug={params.slug} />;
}
