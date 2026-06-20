import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getLocaleFromCookie, type SiteLocale } from '@/lib/meta';
import AnimatedSection from '@/components/AnimatedSection';

const titles: Record<SiteLocale, string> = {
  es: 'Casos de estudio',
  en: 'Case studies',
  de: 'Fallstudien',
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const locale = getLocaleFromCookie(cookieStore.get('flipador-locale')?.value);
  return {
    title: `${titles[locale]} — FLIP∀DOOR`,
  };
}

const cases = [
  { slug: 'liberar-talento', label: 'Liberar Talento' },
  { slug: 'democratizar-conocimiento', label: 'Democratizar Conocimiento' },
  { slug: 'cerrar-brecha', label: 'Cerrar la Brecha' },
  { slug: 'optimizar-agilidad', label: 'Optimizar Agilidad' },
];

export default function CasosPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-12">Casos de estudio</h1>
        <div className="grid gap-6">
          {cases.map((c) => (
            <AnimatedSection key={c.slug}>
              <a
                href={`/casos/${c.slug}`}
                className="block glass p-8 rounded-2xl hover:border-white/20 transition-all"
              >
                <h2 className="text-xl font-bold">{c.label}</h2>
                <span className="text-brand-purple font-semibold mt-2 inline-block">
                  Leer caso →
                </span>
              </a>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </main>
  );
}
