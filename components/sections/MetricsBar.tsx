export default function MetricsBar() {
  const metrics = [
    { value: '14', unit: 'días', label: 'Promedio de implementación' },
    { value: '320', unit: 'h', label: 'Horas liberadas por cliente/mes' },
    { value: '94', unit: '%', label: 'Consultas resueltas automáticamente' },
    { value: '20', unit: 'x', label: 'Multiplicación de producción' },
  ];

  return (
    <section className="py-16 bg-brand-purple">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-4xl md:text-5xl font-display font-bold text-white">
                {m.value}
                <span className="text-purple-300">{m.unit}</span>
              </div>
              <p className="text-purple-200 text-sm mt-2 font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
