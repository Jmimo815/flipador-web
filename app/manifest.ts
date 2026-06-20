import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'FLIP∀DOOR',
    short_name: 'FLIP∀DOOR',
    description: 'Deja de operar la IA. Comienza a dirigirla.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#452476',
    icons: [
      {
        src: '/favicon.svg',
        sizes: '32x32',
        type: 'image/svg+xml',
      },
      {
        src: '/favicon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  };
}
