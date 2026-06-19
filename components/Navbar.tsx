'use client';

import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'MÃ©todo', href: '#metodo' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Casos', href: '#casos' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Planes', href: '#planes' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-black/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/brand/ISOTIPO_FLIPADOOR-removebg-preview.png"
            alt="FLIPâDOOR"
            className="h-8 w-auto object-contain"
          />
          <span className="font-display font-bold text-white text-lg tracking-tight">FLIPâDOOR</span>
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
            Contactar
          </a>
        </div>

        <div className="md:hidden">
          <a
            href="https://tally.so/r/vGKy58"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-brand-purple"
          >
            Contactar
          </a>
        </div>
      </div>
    </nav>
  );
}
