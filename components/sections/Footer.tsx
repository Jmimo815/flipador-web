'use client';

import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="py-12 bg-brand-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <img
              src="/brand/BLOKE TEXTO FLIPADOR.png"
              alt="FLIP∀DOOR"
              className="h-10 w-auto object-contain"
            />
          </div>

          {/* Links */}
          <div className="flex items-center gap-8 text-sm text-zinc-500">
            <a href="https://linkedin.com/company/flipadoor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">LinkedIn</a>
            <a href="https://x.com/flipadoor" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">X</a>
            <a href="https://wa.me/573054636733" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors font-medium">WhatsApp</a>
          </div>

          {/* Copyright + Legal */}
          <div className="text-xs text-zinc-600">
            <p>{t('footer.copyright').replace('{year}', String(new Date().getFullYear()))}</p>
            <div className="flex items-center gap-4 mt-2">
              <a href="/privacidad" className="hover:text-zinc-400 transition-colors">{t('footer.privacy')}</a>
              <span className="text-zinc-700">·</span>
              <a href="/terminos" className="hover:text-zinc-400 transition-colors">{t('footer.terms')}</a>
              <span className="text-zinc-700">·</span>
              <a href="/cookies" className="hover:text-zinc-400 transition-colors">{t('footer.cookies')}</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
