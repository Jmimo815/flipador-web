import { SiteLocale } from './meta';

export const legalMeta: Record<
  SiteLocale,
  Record<'terms' | 'privacy' | 'cookies', { title: string; description: string }>
> = {
  es: {
    terms: {
      title: 'Términos de Servicio — FLIP∀DOOR',
      description: 'Condiciones generales de contratación de servicios de consultoría de IA.',
    },
    privacy: {
      title: 'Política de Privacidad — FLIP∀DOOR',
      description: 'Cómo protegemos tus datos personales bajo la Ley 1581 de 2012 de Colombia.',
    },
    cookies: {
      title: 'Política de Cookies — FLIP∀DOOR',
      description: 'Información sobre cómo usamos cookies y tecnologías de seguimiento.',
    },
  },
  en: {
    terms: {
      title: 'Terms of Service — FLIP∀DOOR',
      description: 'General terms and conditions for contracting AI consulting services.',
    },
    privacy: {
      title: 'Privacy Policy — FLIP∀DOOR',
      description: 'How we protect your personal data under Colombian Law 1581 of 2012.',
    },
    cookies: {
      title: 'Cookie Policy — FLIP∀DOOR',
      description: 'Information about how we use cookies and tracking technologies.',
    },
  },
  de: {
    terms: {
      title: 'Allgemeine Geschäftsbedingungen — FLIP∀DOOR',
      description: 'Allgemeine Geschäftsbedingungen für die Beauftragung von KI-Beratungsleistungen.',
    },
    privacy: {
      title: 'Datenschutzerklärung — FLIP∀DOOR',
      description: 'Wie wir Ihre persönlichen Daten gemäß dem kolumbianischen Gesetz 1581 von 2012 schützen.',
    },
    cookies: {
      title: 'Cookie-Richtlinie — FLIP∀DOOR',
      description: 'Informationen zur Verwendung von Cookies und Tracking-Technologien.',
    },
  },
};
