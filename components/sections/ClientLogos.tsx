'use client';

import { useI18n } from '@/lib/i18n';

const clients = [
  'Consultora Regional',
  'Agencia de Contenido',
  'Tech Startup',
  'Firma Legal',
  'Universidad',
  'Industria 4.0',
];

export default function ClientLogos() {
  const { t } = useI18n();

  return (
    <section className="py-16 bg-brand-black border-b border-white/5">
      <div className="container mx-auto px-6 text-center">
        <p className="text-zinc-600 text-xs uppercase tracking-[0.25em] mb-10 font-bold">
          {t('clients.label')}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 opacity-40 hover:opacity-70 transition-opacity duration-700">
          {clients.map((client) => (
            <span
              key={client}
              className="text-sm md:text-base font-bold text-zinc-400 hover:text-white transition-colors duration-500 tracking-wide whitespace-nowrap"
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
