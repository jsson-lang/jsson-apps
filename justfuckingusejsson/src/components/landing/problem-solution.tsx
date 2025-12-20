export function ProblemSolution() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold tracking-tighter uppercase">The Problem</h2>
            <div className="rounded-2xl border border-border/10 bg-muted/30 p-6 md:p-8">
              <pre className="text-sm md:text-base leading-relaxed overflow-x-auto text-muted-foreground">
                <code>{`{
  "users": [
    { "name": "João", "age": 19 },
    { "name": "Maria", "age": 25 }
  ],
  "ports": [8080, 8081, 8082]
}`}</code>
              </pre>
            </div>
            <p className="text-lg text-muted-foreground italic">Verbose, repetitive, and manually intensive.</p>
          </div>

          {/* Solution */}
          <div className="flex flex-col gap-8">
            <h2 className="text-3xl font-bold tracking-tighter uppercase">The Solution</h2>
            <div className="rounded-2xl border border-foreground/10 bg-foreground/5 p-6 md:p-8">
              <pre className="text-sm md:text-base leading-relaxed overflow-x-auto text-foreground">
                <code>{`users [
  template { name, age }
  
  João, 19
  Maria, 25
]

ports = 8080..8082`}</code>
              </pre>
            </div>
            <p className="text-lg text-foreground font-medium">Same output. Zero bullshit.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
