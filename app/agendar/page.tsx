import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getLocaleFromCookie } from '@/lib/meta';

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = cookies();
  const locale = getLocaleFromCookie(cookieStore.get('flipador-locale')?.value);
  const titles = {
    es: 'Agendar reunión',
    en: 'Book a meeting',
    de: 'Termin vereinbaren',
  };
  return {
    title: `${titles[locale]} — FLIP∀DOOR`,
  };
}

export default function AgendarPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 pb-20 flex items-center justify-center">
      <div className="text-center px-6 max-w-xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-6">
          Agendá tu Diagnóstico IA
        </h1>
        <p className="text-zinc-400 mb-10 text-lg">
          Elegí el canal que prefieras. Respondemos en menos de 24 horas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/573054636733"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-purple text-white px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
          >
            Contactar por WhatsApp
          </a>
          <a
            href="mailto:contacto@flipadoor.com"
            className="inline-flex items-center justify-center border border-white/20 text-white px-8 py-4 rounded-full font-bold hover:bg-white/5 transition-colors"
          >
            Enviar un Email
          </a>
        </div>
      </div>
    </main>
  );
}
