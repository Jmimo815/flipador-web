'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useI18n } from '@/lib/i18n';
import LanguageToggle from './LanguageToggle';
import ContactModal from './ContactModal';
import ContactForm from './ContactForm';
import { formTranslations } from '@/lib/formTranslations';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const { t, locale } = useI18n();
  const ft = formTranslations[locale];

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
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-black/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <Image
              src="/brand/ISOTIPO_FLIPADOOR-removebg-preview.png"
              alt="FLIP∀DOOR"
              width={32}
              height={32}
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
            <button
              onClick={() => setContactOpen(true)}
              className="text-sm font-semibold text-brand-purple hover:text-purple-400 transition-colors"
            >
              {t('nav.contactar')}
            </button>
            <LanguageToggle />
          </div>

          <div className="md:hidden flex items-center gap-4">
            <LanguageToggle />
            <button
              onClick={() => setContactOpen(true)}
              className="text-sm font-semibold text-brand-purple"
            >
              {t('nav.contactar')}
            </button>
          </div>
        </div>
      </nav>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} title={ft['contact.title']}>
        <ContactForm />
      </ContactModal>
    </>
  );
}
