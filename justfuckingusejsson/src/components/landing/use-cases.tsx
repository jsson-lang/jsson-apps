const useCases = [
  { title: 'Database Seeding', description: 'Generate 100k records without copy-pasting.' },
  { title: 'Kubernetes Configs', description: 'Deploy specs for 50 microservices in one line.' },
  { title: 'E-commerce', description: '500 product variants handled automatically.' },
  { title: 'Geo Data', description: 'Millions of coordinates managed efficiently.' },
  { title: 'i18n', description: 'Structured and organized translations.' },
  { title: 'CI/CD', description: "YAML pipelines that don't cause headaches." },
];

export function UseCases() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-4xl font-black tracking-tighter uppercase mb-20 text-center sm:text-left">
          Use Cases
        </h2>
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {useCases.map((useCase, i) => (
            <div
              key={i}
              className="flex flex-col gap-4 border-l border-border/10 pl-8 transition-colors hover:border-foreground/20"
            >
              <h3 className="text-xl font-bold uppercase tracking-tight">{useCase.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {useCase.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
