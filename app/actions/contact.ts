'use server';

export interface ContactState {
  ok?: boolean;
  error?: string;
  mailto?: string;
}

export async function submitContact(_prevState: ContactState | null, formData: FormData): Promise<ContactState> {
  const name = String(formData.get('name') ?? '').trim();
  const email = String(formData.get('email') ?? '').trim();
  const company = String(formData.get('company') ?? '').trim();
  const service = String(formData.get('service') ?? '').trim();
  const message = String(formData.get('message') ?? '').trim();

  if (!name || !email || !message) {
    return { ok: false, error: 'contact.errorRequired' };
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, service, message, source: 'flipador-web' }),
      });
      return { ok: true };
    } catch {
      return { ok: false, error: 'contact.errorSend' };
    }
  }

  const subject = encodeURIComponent(`Contacto desde flipadoor.com - ${name}`);
  const body = encodeURIComponent(
    `Nombre: ${name}\nEmail: ${email}\nEmpresa: ${company}\nServicio: ${service}\n\nMensaje:\n${message}`
  );
  return { ok: true, mailto: `mailto:contacto@flipadoor.com?subject=${subject}&body=${body}` };
}
