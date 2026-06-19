import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad — FLIP∀DOOR',
  description: 'Cómo protegemos tus datos personales bajo la Ley 1581 de 2012 de Colombia.',
};

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Política de Privacidad</h1>
        <p className="text-zinc-400 mb-8">Última actualización: junio 2026</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Responsable del tratamiento</h2>
            <p>FLIP∀DOOR SAS, NIT [pendiente], con domicilio en Bogotá, Colombia. Email: contacto@flipadoor.com. Somos responsables del tratamiento de datos personales conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Datos que recolectamos</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Nombre y apellido</li>
              <li>Correo electrónico</li>
              <li>Empresa u organización</li>
              <li>Cargo o rol</li>
              <li>Número de teléfono (opcional)</li>
              <li>Datos de navegación (cookies, IP, device)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Finalidad del tratamiento</h2>
            <p>Tus datos se utilizan para: responder consultas, enviar propuestas comerciales, coordinar diagnósticos, enviar newsletters (con tu consentimiento), y mejorar nuestros servicios.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Derechos del titular</h2>
            <p>De acuerdo con la Ley 1581 de 2012, tenés derecho a: conocer, actualizar, rectificar, suprimir tus datos; revocar la autorización; acceder gratuitamente a tus datos; y presentar quejas ante la SIC.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Seguridad</h2>
            <p>Implementamos medidas técnicas y administrativas para proteger tus datos. Sin embargo, ningún sistema es 100% seguro. Si detectás una vulnerabilidad, escribinos a contacto@flipadoor.com.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Transferencias internacionales</h2>
            <p>Usamos servicios de terceros (Vercel, Tally, Google Workspace) que pueden almacenar datos fuera de Colombia. Garantizamos que estos proveedores cumplen con estándares de protección adecuados.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Cambios</h2>
            <p>Podemos actualizar esta política. Te notificaremos por email si los cambios son sustanciales.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
