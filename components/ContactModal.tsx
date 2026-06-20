'use client';

import { useRef, useEffect, ReactNode } from 'react';
import { X } from 'lucide-react';

interface ContactModalProps {
  children: ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
}

export default function ContactModal({ children, open, onClose, title }: ContactModalProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open) {
      if (!d.open) d.showModal();
    } else {
      if (d.open) d.close();
    }
  }, [open]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const handler = (e: MouseEvent) => {
      const rect = d.getBoundingClientRect();
      if (
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom
      ) {
        onClose();
      }
    };
    d.addEventListener('click', handler);
    return () => d.removeEventListener('click', handler);
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      className="bg-transparent p-0 backdrop:bg-black/80 backdrop:backdrop-blur-md"
      onClose={onClose}
    >
      <div className="bg-brand-black border border-white/10 rounded-3xl max-w-lg w-full p-8 md:p-10 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-zinc-500 hover:text-white transition-colors"
          aria-label="Cerrar"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl font-display font-bold text-white mb-6">{title}</h2>
        {children}
      </div>
    </dialog>
  );
}
