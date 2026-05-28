import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'FLIP∀DOOR — AI-Powered Content Intelligence',
  description: 'Lideramos la transición hacia la Industria 5.0. Adaptamos la IA para abrir puertas y liberar el ingenio humano.',
  keywords: 'AI, Industria 5.0, Sovereign AI, automatización, RAG, agentes IA, consultoría',
  openGraph: {
    title: 'FLIP∀DOOR — The Door is Open',
    description: 'Deja de operar la IA. Comienza a dirigirla.',
    type: 'website',
    url: 'https://flipadoor.com',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark">
      <body className="font-sans">{children}</body>
    </html>
  );
}