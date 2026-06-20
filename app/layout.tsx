import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import './globals.css';

const ColorBends = dynamic(
  () => import('@/components/ColorBends'),
  { ssr: false }
);

export const metadata: Metadata = {
  title: 'FLIP∀DOOR — AI-Powered Content Intelligence',
  description: 'Lideramos la transición hacia la Industria 5.0. Adaptamos la IA para abrir puertas y liberar el ingenio humano.',
  keywords: 'AI, Industria 5.0, Sovereign AI, automatización, RAG, agentes IA, consultoría',
  openGraph: {
    title: 'FLIP∀DOOR — Deja de operar la IA. Comienza a dirigirla.',
    description: 'Deja de operar la IA. Comienza a dirigirla.',
    type: 'website',
    url: 'https://flipadoor.com',
  },
};

const bgColors = [
  '#0a0a0a',
  '#120421',
  '#452476',
  '#1e0f33',
  '#2d1b4e',
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <head>
        <meta charSet="utf-8" />
      </head>
      <body className="font-sans relative">
        <ColorBends
          colors={bgColors}
          speed={0.15}
          scale={1.2}
          frequency={0.8}
          warpStrength={0.7}
          intensity={1.2}
          noise={0.08}
          bandWidth={5}
          rotation={45}
          transparent
        />
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
