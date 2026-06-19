import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio — FLIP∀DOOR',
  description: 'Condiciones generales de contratación de servicios de consultoría de IA.',
};

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-brand-black text-white pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <h1 className="text-3xl md:text-5xl font-display font-bold mb-8">Términos de Servicio</h1>
        <p className="text-zinc-400 mb-8">Última actualización: junio 2026</p>

        <div className="space-y-8 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Objeto</h2>
            <p>FLIP∀DOOR SAS ofrece servicios de consultoría, implementación y capacitación en inteligencia artificial. Estos términos rigen la relación contractual entre FLIP∀DOOR y sus clientes.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Alcance de los servicios</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Diagnóstico IA: assessment gratuito de 30 minutos.</li>
              <li>Sovereign AI Setup: implementación de modelos locales, arquitectura RAG, hasta 3 agentes.</li>
              <li>Transformación Completa: programa de 90 días con acompañamiento continuo.</li>
              <li>Talleres de capacitación: presenciales o virtuales.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Pagos</h2>
            <p>Los honorarios se pactan por escrito en cada propuesta. El anticipo es del 50% para iniciar implementaciones. El saldo se liquida contra entregables pactados. Pagos en COP o USD según acuerdo.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Propiedad intelectual</h2>
            <p>El código, arquitecturas, prompts y documentación desarrollados durante el proyecto son propiedad del cliente una vez cancelado el servicio. FLIP∀DOOR retiene derecho de citar el caso como referencia comercial salvo acuerdo de confidencialidad expreso.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Confidencialidad</h2>
            <p>Ambas partes se obligan a mantener confidencialidad sobre información técnica, financiera y operativa. Esta obligación sobrevive a la terminación del contrato por 3 años.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Limitación de responsabilidad</h2>
            <p>FLIP∀DOOR no garantiza resultados específicos de ROI ni de adopción interna. La implementación de IA depende de factores ajenos a nuestro control (infraestructura del cliente, adopción del equipo, políticas internas).</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Ley aplicable</h2>
            <p>Estos términos se rigen por la ley colombiana. Cualquier controversia se someterá a los tribunales de Bogotá, Colombia.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Modificaciones</h2>
            <p>FLIP∀DOOR puede modificar estos términos. El uso continuado de nuestros servicios implica aceptación de los términos vigentes.</p>
          </section>
        </div>
      </div>
    </main>
  );
}
