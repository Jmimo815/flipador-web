import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies — FLIP∀DOOR',
  description: 'Información sobre cómo usamos cookies y tecnologías de seguimiento.',
};

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Política de Cookies</h1>
        <p className="text-zinc-400 mb-8">Última actualización: junio 2026</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. ¿Qué son las cookies?</h2>
            <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitás un sitio web. Nos permiten recordar tus preferencias, entender cómo usás nuestro sitio, y mejorar tu experiencia.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Cookies que usamos</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Cookies esenciales:</strong> necesarias para el funcionamiento del sitio (preferencia de cookies, navegación).</li>
              <li><strong>Cookies de rendimiento:</strong> nos ayudan a entender cómo interactuás con el sitio (Vercel Analytics).</li>
              <li><strong>Cookies de funcionalidad:</strong> recuerdan tus preferencias (idioma, tema oscuro).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Proveedores de terceros</h2>
            <p>Utilizamos servicios que pueden instalar cookies:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Vercel:</strong> hosting y analytics.</li>
              <li><strong>Tally.so:</strong> formularios de contacto.</li>
              <li><strong>Google Fonts:</strong> carga tipográfica.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Control de cookies</h2>
            <p>Podés gestionar las cookies desde la configuración de tu navegador. También podés revocar tu consentimiento haciendo clic en "Gestionar cookies" en el banner inferior.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Duración</h2>
            <p>Las cookies de preferencias duran hasta que las borres manualmente. Las cookies de sesión se eliminan al cerrar el navegador.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Contacto</h2>
            <p>Si tenés dudas sobre cookies, escribinos a contacto@flipadoor.com.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
