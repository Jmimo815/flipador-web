'use client';

import { useState, useEffect } from 'react';

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('flipadoor-cookies-accepted');
    if (!accepted) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('flipadoor-cookies-accepted', 'true');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-brand-black/95 backdrop-blur-xl border-t border-white/10 px-6 py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-zinc-400 text-sm">
          Utilizamos cookies para mejorar tu experiencia. Al continuar navegando, aceptás nuestra{' '}
          <a href="#" className="text-brand-purple hover:underline">Política de Privacidad</a>.
        </p>
        <button
          onClick={accept}
          className="bg-brand-purple hover:bg-purple-700 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-colors whitespace-nowrap"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
}
