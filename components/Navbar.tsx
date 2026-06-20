'use client';

import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import LanguageToggle from './LanguageToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const { t } = useI18n();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t('nav.metodo'), href: '#metodo' },
    { label: t('nav.servicios'), href: '#servicios' },
    { label: t('nav.casos'), href: '#casos' },
    { label: t('nav.testimonios'), href: '#testimonios' },
    { label: t('nav.planes'), href: '#planes' },
    { label: t('nav.faq'), href: '#faq' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <img
            src="/brand/ISOTIPO_FLIPADOOR-removebg-preview.png"
            alt="FLIP∀DOOR"
            className="h-8 w-auto object-contain"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://tally.so/r/vGKy58"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-purple hover:text-purple-400 transition-colors"
          >
            {t('nav.contactar')}
          </a>
          <LanguageToggle />
        </div>

        <div className="md:hidden flex items-center gap-4">
          <LanguageToggle />
          <a
            href="https://tally.so/r/vGKy58"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-purple"
          >
            {t('nav.contactar')}
          </a>
        </div>
      </div>
    </nav>
  );
}
