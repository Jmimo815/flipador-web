const metrics = [
  { value: '14', unit: 'días', label: 'Promedio de implementación' },
  { value: '320', unit: 'h', label: 'Horas liberadas por cliente/mes' },
  { value: '94', unit: '%', label: 'Consultas resueltas automáticamente' },
  { value: '20', unit: 'x', label: 'Multiplicación de producción' },
];

export default function MetricsBar() {
  return (
    <section className="py-20 md:py-24 bg-brand-purple">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 text-center">
          {metrics.map((m) => (
            <div key={m.label}>
              <div className="text-5xl md:text-6xl font-display font-bold text-white tracking-tight">
                {m.value}
                <span className="text-purple-300 text-3xl md:text-4xl ml-1">{m.unit}</span>
              </div>
              <p className="text-purple-200 text-sm mt-3 font-semibold">{m.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
