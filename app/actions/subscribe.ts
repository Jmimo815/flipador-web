'use server';

export interface SubscribeState {
  ok?: boolean;
  error?: string;
}

export async function subscribe(
  _prevState: SubscribeState | null,
  formData: FormData
): Promise<SubscribeState> {
  const email = String(formData.get('email') ?? '').trim();
  if (!email || !email.includes('@')) {
    return { ok: false, error: 'newsletter.errorInvalid' };
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source: 'flipador-web' }),
      });
      return { ok: true };
    } catch {
      return { ok: false, error: 'newsletter.errorSend' };
    }
  }

  return { ok: true };
}
