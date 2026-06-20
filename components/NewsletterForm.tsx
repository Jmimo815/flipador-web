'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { subscribe, type SubscribeState } from '@/app/actions/subscribe';
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
      className="bg-brand-purple hover:bg-purple-600 text-white px-6 py-3 rounded-full font-bold text-sm transition-all disabled:opacity-60 shrink-0"
    >
      {pending ? '...' : ft['newsletter.button']}
    </button>
  );
}

export default function NewsletterForm() {
  const [state, formAction] = useFormState<SubscribeState | null, FormData>(subscribe, null);
  const { locale } = useI18n();
  const ft = formTranslations[locale];

  if (state?.ok) {
    return (
      <div className="text-green-400 font-bold text-sm">{ft['newsletter.success']}</div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
      <input
        name="email"
        type="email"
        required
        placeholder={ft['newsletter.placeholder']}
        className="flex-1 bg-white/5 border border-white/10 rounded-full px-5 py-3 text-white placeholder-zinc-500 focus:outline-none focus:border-brand-purple text-sm"
      />
      <SubmitButton />
      {state?.error && (
        <p className="text-red-400 text-xs w-full">{ft[state.error] ?? state.error}</p>
      )}
    </form>
  );
}
