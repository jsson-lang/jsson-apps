const comparisons = [
  { problem: 'Quotes everywhere', solution: 'No quotes in keys' },
  { problem: 'Missing commas', solution: 'Optional commas' },
  { problem: 'Repeated data', solution: 'Templates + Variables' },
  { problem: 'Manual ranges', solution: 'Auto-ranges (1..100)' },
  { problem: 'Scattered configs', solution: 'Clean include system' },
  { problem: 'Errors in copy-paste', solution: 'Map transformations' },
];

export function ComparisonTable() {
  return (
    <section className="px-6 py-24 sm:py-32 border-y border-border/10">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tighter uppercase text-center mb-20">
          Why Jsson?
        </h2>
        <div className="grid gap-0 border border-border/10">
          <div className="grid grid-cols-2 bg-muted/20 border-b border-border/10">
            <div className="p-6 text-sm font-black uppercase tracking-widest text-muted-foreground">
              Problem
            </div>
            <div className="p-6 text-sm font-black uppercase tracking-widest">Solution</div>
          </div>
          {comparisons.map((item, i) => (
            <div
              key={i}
              className="grid grid-cols-2 border-b border-border/10 last:border-0 hover:bg-muted/5 transition-colors"
            >
              <div className="p-6 text-lg text-muted-foreground line-through decoration-1 opacity-50">
                {item.problem}
              </div>
              <div className="p-6 text-lg font-medium text-foreground uppercase tracking-tight">
                {item.solution}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
