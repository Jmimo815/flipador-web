import { ImageResponse } from 'next/og';
import { cookies } from 'next/headers';
import { getLocaleFromCookie, type SiteLocale } from '@/lib/meta';

export const alt = 'FLIP∀DOOR';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image() {
  const cookieStore = cookies();
  const locale: SiteLocale = getLocaleFromCookie(cookieStore.get('flipador-locale')?.value);

  const headline =
    locale === 'en'
      ? 'Stop Operating AI. Start Directing It.'
      : locale === 'de'
        ? 'Hört auf, KI zu bedienen. Fangt an, sie zu lenken.'
        : 'Deja de operar la IA. Comienza a dirigirla.';

  const subtitle =
    locale === 'en'
      ? 'Deploy private AI agents in 14 days. No external APIs. No data leaks.'
      : locale === 'de'
        ? 'Private KI-Agenten in 14 Tagen. Keine externen APIs. Keine Datenlecks.'
        : 'Implementá agentes IA privados en 14 días. Sin APIs externas. Sin fugas de datos.';

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a0b2e 50%, #452476 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 60,
          fontFamily: 'Inter, system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: 24,
            textAlign: 'center',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
          }}
        >
          {headline}
        </div>
        <div
          style={{
            fontSize: 32,
            color: 'rgba(255,255,255,0.75)',
            textAlign: 'center',
            maxWidth: 800,
            lineHeight: 1.4,
          }}
        >
          {subtitle}
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 24,
            fontWeight: 600,
            color: '#a78bfa',
            letterSpacing: '0.15em',
            textTransform: 'uppercase' as const,
          }}
        >
          FLIP∀DOOR
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
