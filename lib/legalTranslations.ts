type LegalSection = { title: string; content: string | string[] };

type LegalDoc = { title: string; updated: string; sections: LegalSection[] };

export const legalTranslations: Record<
  'es' | 'en' | 'de',
  { terms: LegalDoc; privacy: LegalDoc; cookies: LegalDoc }
> = {
  es: {
    terms: {
      title: 'Términos de Servicio',
      updated: 'Última actualización: junio 2026',
      sections: [
        {
          title: '1. Objeto',
          content:
            'FLIP∀DOOR SAS ofrece servicios de consultoría, implementación y capacitación en inteligencia artificial. Estos términos rigen la relación contractual entre FLIP∀DOOR y sus clientes.',
        },
        {
          title: '2. Alcance de los servicios',
          content: [
            'Diagnóstico IA: assessment gratuito de 30 minutos.',
            'Sovereign AI Setup: implementación de modelos locales, arquitectura RAG, hasta 3 agentes.',
            'Transformación Completa: programa de 90 días con acompañamiento continuo.',
            'Talleres de capacitación: presenciales o virtuales.',
          ],
        },
        {
          title: '3. Pagos',
          content:
            'Los honorarios se pactan por escrito en cada propuesta. El anticipo es del 50% para iniciar implementaciones. El saldo se liquida contra entregables pactados. Pagos en COP o USD según acuerdo.',
        },
        {
          title: '4. Propiedad intelectual',
          content:
            'El código, arquitecturas, prompts y documentación desarrollados durante el proyecto son propiedad del cliente una vez cancelado el servicio. FLIP∀DOOR retiene derecho de citar el caso como referencia comercial salvo acuerdo de confidencialidad expreso.',
        },
        {
          title: '5. Confidencialidad',
          content:
            'Ambas partes se obligan a mantener confidencialidad sobre información técnica, financiera y operativa. Esta obligación sobrevive a la terminación del contrato por 3 años.',
        },
        {
          title: '6. Limitación de responsabilidad',
          content:
            'FLIP∀DOOR no garantiza resultados específicos de ROI ni de adopción interna. La implementación de IA depende de factores ajenos a nuestro control (infraestructura del cliente, adopción del equipo, políticas internas).',
        },
        {
          title: '7. Ley aplicable',
          content:
            'Estos términos se rigen por la ley colombiana. Cualquier controversia se someterá a los tribunales de Bogotá, Colombia.',
        },
        {
          title: '8. Modificaciones',
          content:
            'FLIP∀DOOR puede modificar estos términos. El uso continuado de nuestros servicios implica aceptación de los términos vigentes.',
        },
      ],
    },
    privacy: {
      title: 'Política de Privacidad',
      updated: 'Última actualización: junio 2026',
      sections: [
        {
          title: '1. Responsable del tratamiento',
          content:
            'FLIP∀DOOR SAS, NIT [pendiente], con domicilio en Bogotá, Colombia. Email: contacto@flipadoor.com. Somos responsables del tratamiento de datos personales conforme a la Ley 1581 de 2012 y el Decreto 1377 de 2013.',
        },
        {
          title: '2. Datos que recolectamos',
          content: [
            'Nombre y apellido',
            'Correo electrónico',
            'Empresa u organización',
            'Cargo o rol',
            'Número de teléfono (opcional)',
            'Datos de navegación (cookies, IP, device)',
          ],
        },
        {
          title: '3. Finalidad del tratamiento',
          content:
            'Tus datos se utilizan para: responder consultas, enviar propuestas comerciales, coordinar diagnósticos, enviar newsletters (con tu consentimiento), y mejorar nuestros servicios.',
        },
        {
          title: '4. Derechos del titular',
          content:
            'De acuerdo con la Ley 1581 de 2012, tenés derecho a: conocer, actualizar, rectificar, suprimir tus datos; revocar la autorización; acceder gratuitamente a tus datos; y presentar quejas ante la SIC.',
        },
        {
          title: '5. Seguridad',
          content:
            'Implementamos medidas técnicas y administrativas para proteger tus datos. Sin embargo, ningún sistema es 100% seguro. Si detectás una vulnerabilidad, escribinos a contacto@flipadoor.com.',
        },
        {
          title: '6. Transferencias internacionales',
          content:
            'Usamos servicios de terceros (Vercel, Tally, Google Workspace) que pueden almacenar datos fuera de Colombia. Garantizamos que estos proveedores cumplen con estándares de protección adecuados.',
        },
        {
          title: '7. Cambios',
          content:
            'Podemos actualizar esta política. Te notificaremos por email si los cambios son sustanciales.',
        },
      ],
    },
    cookies: {
      title: 'Política de Cookies',
      updated: 'Última actualización: junio 2026',
      sections: [
        {
          title: '1. ¿Qué son las cookies?',
          content:
            'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitás un sitio web. Nos permiten recordar tus preferencias, entender cómo usás nuestro sitio, y mejorar tu experiencia.',
        },
        {
          title: '2. Cookies que usamos',
          content: [
            'Cookies esenciales: necesarias para el funcionamiento del sitio (preferencia de cookies, navegación).',
            'Cookies de rendimiento: nos ayudan a entender cómo interactuás con el sitio (Vercel Analytics).',
            'Cookies de funcionalidad: recuerdan tus preferencias (idioma, tema oscuro).',
          ],
        },
        {
          title: '3. Proveedores de terceros',
          content: [
            'Vercel: hosting y analytics.',
            'Tally.so: formularios de contacto.',
            'Google Fonts: carga tipográfica.',
          ],
        },
        {
          title: '4. Control de cookies',
          content:
            'Podés gestionar las cookies desde la configuración de tu navegador. También podés revocar tu consentimiento haciendo clic en "Gestionar cookies" en el banner inferior.',
        },
        {
          title: '5. Duración',
          content:
            'Las cookies de preferencias duran hasta que las borres manualmente. Las cookies de sesión se eliminan al cerrar el navegador.',
        },
        {
          title: '6. Contacto',
          content: 'Si tenés dudas sobre cookies, escribinos a contacto@flipadoor.com.',
        },
      ],
    },
  },
  en: {
    terms: {
      title: 'Terms of Service',
      updated: 'Last updated: June 2026',
      sections: [
        {
          title: '1. Purpose',
          content:
            'FLIP∀DOOR SAS provides artificial intelligence consulting, implementation, and training services. These terms govern the contractual relationship between FLIP∀DOOR and its clients.',
        },
        {
          title: '2. Scope of Services',
          content: [
            'AI Diagnosis: free 30-minute assessment.',
            'Sovereign AI Setup: deployment of local models, RAG architecture, up to 3 agents.',
            'Full Transformation: 90-day program with continuous support.',
            'Training workshops: in-person or virtual.',
          ],
        },
        {
          title: '3. Payments',
          content:
            'Fees are agreed in writing for each proposal. A 50% advance is required to start implementations. The balance is settled against agreed deliverables. Payments in COP or USD as agreed.',
        },
        {
          title: '4. Intellectual Property',
          content:
            'Code, architectures, prompts, and documentation developed during the project become the client\'s property once the service is paid in full. FLIP∀DOOR retains the right to cite the case as a commercial reference unless an express confidentiality agreement is in place.',
        },
        {
          title: '5. Confidentiality',
          content:
            'Both parties agree to maintain confidentiality regarding technical, financial, and operational information. This obligation survives contract termination for 3 years.',
        },
        {
          title: '6. Limitation of Liability',
          content:
            'FLIP∀DOOR does not guarantee specific ROI or internal adoption results. AI implementation depends on factors beyond our control (client infrastructure, team adoption, internal policies).',
        },
        {
          title: '7. Governing Law',
          content:
            'These terms are governed by Colombian law. Any dispute shall be submitted to the courts of Bogotá, Colombia.',
        },
        {
          title: '8. Amendments',
          content:
            'FLIP∀DOOR may amend these terms. Continued use of our services implies acceptance of the current terms.',
        },
      ],
    },
    privacy: {
      title: 'Privacy Policy',
      updated: 'Last updated: June 2026',
      sections: [
        {
          title: '1. Data Controller',
          content:
            'FLIP∀DOOR SAS, Tax ID [pending], domiciled in Bogotá, Colombia. Email: contacto@flipadoor.com. We are responsible for the processing of personal data in accordance with Law 1581 of 2012 and Decree 1377 of 2013.',
        },
        {
          title: '2. Data We Collect',
          content: [
            'Full name',
            'Email address',
            'Company or organization',
            'Job title or role',
            'Phone number (optional)',
            'Browsing data (cookies, IP, device)',
          ],
        },
        {
          title: '3. Purpose of Processing',
          content:
            'Your data is used to: respond to inquiries, send commercial proposals, coordinate diagnostics, send newsletters (with your consent), and improve our services.',
        },
        {
          title: '4. Rights of the Data Subject',
          content:
            'Under Law 1581 of 2012, you have the right to: know, update, rectify, and delete your data; revoke authorization; access your data free of charge; and file complaints with the SIC.',
        },
        {
          title: '5. Security',
          content:
            'We implement technical and administrative measures to protect your data. However, no system is 100% secure. If you detect a vulnerability, write to contacto@flipadoor.com.',
        },
        {
          title: '6. International Transfers',
          content:
            'We use third-party services (Vercel, Tally, Google Workspace) that may store data outside Colombia. We ensure these providers comply with adequate protection standards.',
        },
        {
          title: '7. Changes',
          content:
            'We may update this policy. We will notify you by email if changes are substantial.',
        },
      ],
    },
    cookies: {
      title: 'Cookie Policy',
      updated: 'Last updated: June 2026',
      sections: [
        {
          title: '1. What Are Cookies?',
          content:
            'Cookies are small text files stored on your device when you visit a website. They allow us to remember your preferences, understand how you use our site, and improve your experience.',
        },
        {
          title: '2. Cookies We Use',
          content: [
            'Essential cookies: necessary for the site to function (cookie preference, navigation).',
            'Performance cookies: help us understand how you interact with the site (Vercel Analytics).',
            'Functionality cookies: remember your preferences (language, dark theme).',
          ],
        },
        {
          title: '3. Third-Party Providers',
          content: [
            'Vercel: hosting and analytics.',
            'Tally.so: contact forms.',
            'Google Fonts: font loading.',
          ],
        },
        {
          title: '4. Cookie Control',
          content:
            'You can manage cookies from your browser settings. You can also revoke your consent by clicking "Manage cookies" in the bottom banner.',
        },
        {
          title: '5. Duration',
          content:
            'Preference cookies last until you manually delete them. Session cookies are removed when you close the browser.',
        },
        {
          title: '6. Contact',
          content: 'If you have questions about cookies, write to contacto@flipadoor.com.',
        },
      ],
    },
  },
  de: {
    terms: {
      title: 'Allgemeine Geschäftsbedingungen',
      updated: 'Letzte Aktualisierung: Juni 2026',
      sections: [
        {
          title: '1. Vertragsgegenstand',
          content:
            'FLIP∀DOOR SAS bietet Dienstleistungen in den Bereichen Beratung, Implementierung und Schulung für Künstliche Intelligenz an. Diese Bedingungen regeln die Vertragsbeziehung zwischen FLIP∀DOOR und ihren Kunden.',
        },
        {
          title: '2. Leistungsumfang',
          content: [
            'KI-Diagnose: kostenfreies 30-minütiges Assessment.',
            'Sovereign AI Setup: Bereitstellung lokaler Modelle, RAG-Architektur, bis zu 3 Agenten.',
            'Komplette Transformation: 90-Tage-Programm mit kontinuierlicher Begleitung.',
            'Schulungs-Workshops: vor Ort oder virtuell.',
          ],
        },
        {
          title: '3. Zahlungen',
          content:
            'Die Honorare werden schriftlich für jedes Angebot vereinbart. Eine Vorauszahlung von 50% ist für den Beginn der Implementierung erforderlich. Der Restbetrag wird gegen vereinbarte Lieferungen abgerechnet. Zahlungen in COP oder USD nach Vereinbarung.',
        },
        {
          title: '4. Geistiges Eigentum',
          content:
            'Code, Architekturen, Prompts und Dokumentationen, die während des Projekts entwickelt werden, gehen nach vollständiger Bezahlung in das Eigentum des Kunden über. FLIP∀DOOR behält sich das Recht vor, den Fall als kommerzielle Referenz zu nennen, sofern keine ausdrückliche Geheimhaltungsvereinbarung besteht.',
        },
        {
          title: '5. Vertraulichkeit',
          content:
            'Beide Parteien verpflichten sich, technische, finanzielle und operative Informationen vertraulich zu behandeln. Diese Verpflichtung überdauert die Vertragsbeendigung um 3 Jahre.',
        },
        {
          title: '6. Haftungsbeschränkung',
          content:
            'FLIP∀DOOR garantiert keine spezifischen ROI-Ergebnisse oder interne Adoptionsraten. Die KI-Implementierung hängt von Faktoren ab, die außerhalb unserer Kontrolle liegen (Infrastruktur des Kunden, Team-Adoption, interne Richtlinien).',
        },
        {
          title: '7. Anwendbares Recht',
          content:
            'Diese Bedingungen unterliegen kolumbianischem Recht. Streitigkeiten werden den Gerichten von Bogotá, Kolumbien, unterbreitet.',
        },
        {
          title: '8. Änderungen',
          content:
            'FLIP∀DOOR kann diese Bedingungen ändern. Die fortgesetzte Nutzung unserer Dienstleistungen bedeutet die Akzeptanz der jeweils gültigen Bedingungen.',
        },
      ],
    },
    privacy: {
      title: 'Datenschutzerklärung',
      updated: 'Letzte Aktualisierung: Juni 2026',
      sections: [
        {
          title: '1. Verantwortlicher für die Datenverarbeitung',
          content:
            'FLIP∀DOOR SAS, Steuernummer [ausstehend], ansässig in Bogotá, Kolumbien. E-Mail: contacto@flipadoor.com. Wir sind verantwortlich für die Verarbeitung personenbezogener Daten gemäß dem kolumbianischen Gesetz 1581 von 2012 und dem Dekret 1377 von 2013.',
        },
        {
          title: '2. Erhobene Daten',
          content: [
            'Vor- und Nachname',
            'E-Mail-Adresse',
            'Unternehmen oder Organisation',
            'Position oder Rolle',
            'Telefonnummer (optional)',
            'Browsing-Daten (Cookies, IP, Gerät)',
          ],
        },
        {
          title: '3. Zweck der Verarbeitung',
          content:
            'Ihre Daten werden verwendet, um: Anfragen zu beantworten, kommerzielle Angebote zu senden, Diagnosen zu koordinieren, Newsletter zu senden (mit Ihrer Einwilligung) und unsere Dienstleistungen zu verbessern.',
        },
        {
          title: '4. Rechte der betroffenen Person',
          content:
            'Gemäß dem kolumbianischen Gesetz 1581 von 2012 haben Sie das Recht: Ihre Daten einzusehen, zu aktualisieren, zu berichtigen und zu löschen; die Einwilligung zu widerrufen; kostenlos auf Ihre Daten zuzugreifen; und Beschwerden bei der SIC einzureichen.',
        },
        {
          title: '5. Sicherheit',
          content:
            'Wir implementieren technische und administrative Maßnahmen zum Schutz Ihrer Daten. Kein System ist jedoch 100% sicher. Falls Sie eine Schwachstelle feststellen, schreiben Sie an contacto@flipadoor.com.',
        },
        {
          title: '6. Grenzüberschreitende Datenübermittlung',
          content:
            'Wir nutzen Drittanbieter (Vercel, Tally, Google Workspace), die Daten außerhalb Kolumbiens speichern können. Wir stellen sicher, dass diese Anbieter angemessene Schutzstandards einhalten.',
        },
        {
          title: '7. Änderungen',
          content:
            'Wir können diese Richtlinie aktualisieren. Bei wesentlichen Änderungen benachrichtigen wir Sie per E-Mail.',
        },
      ],
    },
    cookies: {
      title: 'Cookie-Richtlinie',
      updated: 'Letzte Aktualisierung: Juni 2026',
      sections: [
        {
          title: '1. Was sind Cookies?',
          content:
            'Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie eine Website besuchen. Sie ermöglichen es uns, Ihre Präferenzen zu speichern, zu verstehen, wie Sie unsere Seite nutzen, und Ihre Erfahrung zu verbessern.',
        },
        {
          title: '2. Verwendete Cookies',
          content: [
            'Essenzielle Cookies: notwendig für den Betrieb der Seite (Cookie-Einstellung, Navigation).',
            'Leistungs-Cookies: helfen uns zu verstehen, wie Sie mit der Seite interagieren (Vercel Analytics).',
            'Funktionalitäts-Cookies: speichern Ihre Präferenzen (Sprache, dunkles Theme).',
          ],
        },
        {
          title: '3. Drittanbieter',
          content: [
            'Vercel: Hosting und Analytics.',
            'Tally.so: Kontaktformulare.',
            'Google Fonts: Schriftarten-Ladung.',
          ],
        },
        {
          title: '4. Cookie-Verwaltung',
          content:
            'Sie können Cookies in den Einstellungen Ihres Browsers verwalten. Sie können Ihre Einwilligung auch widerrufen, indem Sie auf "Cookies verwalten" im unteren Banner klicken.',
        },
        {
          title: '5. Dauer',
          content:
            'Präferenz-Cookies bleiben bestehen, bis Sie sie manuell löschen. Sitzungs-Cookies werden beim Schließen des Browsers entfernt.',
        },
        {
          title: '6. Kontakt',
          content:
            'Bei Fragen zu Cookies schreiben Sie an contacto@flipadoor.com.',
        },
      ],
    },
  },
} as const;
