'use client';

import { useRef } from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { submitContact, type ContactState } from '@/app/actions/contact';
import { useI18n } from '@/lib/i18n';
import { formTranslations } from '@/lib/formTranslations';

function SubmitButton() {
  const { pending } = useFormStatus();
  const { locale } = useI18n();
  const ft = formTranslations[locale];
  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full inline-flex items-center justify-center bg-brand-purple hover:bg-purple-600 text-white px-8 py-4 text-base font-bold rounded-full transition-all hover:scale-105 disabled:opacity-60 disabled:hover:scale-100"
    >
      {pending ? ft['contact.sending'] : ft['contact.submit']}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useFormState<ContactState | null, FormData>(submitContact, null);
  const formRef = useRef<HTMLFormElement>(null);
  const { locale } = useI18n();
  const ft = formTranslations[locale];

  if (state?.ok) {
    if (state.mailto) {
      if (typeof window !== 'undefined') {
        window.location.href = state.mailto;
      }
    }
    return (
      <div className="text-center py-10">
        <p className="text-green-400 font-bold text-xl mb-2">{ft['contact.success']}</p>
        <p className="text-zinc-400">{ft['contact.successSub']}</p>
      </div>
    );
  }

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-purple focus:ring-1 focus:ring-brand-purple transition-colors';

  return (
    <form ref={formRef} action={formAction} className="space-y-5">
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">{ft['contact.name']} *</label>
        <input name="name" required className={inputClass} placeholder="Juan Pérez" />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">{ft['contact.email']} *</label>
        <input name="email" type="email" required className={inputClass} placeholder="juan@empresa.com" />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">{ft['contact.company']}</label>
        <input name="company" className={inputClass} placeholder="Empresa SAS" />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">{ft['contact.service']}</label>
        <select name="service" className={`${inputClass} appearance-none`}>
          <option value="">—</option>
          <option value="diagnostico">{ft['contact.service.diagnostico']}</option>
          <option value="sovereign">{ft['contact.service.sovereign']}</option>
          <option value="transformacion">{ft['contact.service.transformacion']}</option>
          <option value="taller">{ft['contact.service.taller']}</option>
          <option value="otro">{ft['contact.service.otro']}</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-300 mb-1">{ft['contact.message']} *</label>
        <textarea
          name="message"
          required
          rows={4}
          className={inputClass}
          placeholder="¿En qué podemos ayudarte?"
        />
      </div>
      {state?.error && (
        <p className="text-red-400 text-sm">{ft[state.error] ?? state.error}</p>
      )}
      <SubmitButton />
    </form>
  );
}
