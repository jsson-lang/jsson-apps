export function QuickStart() {
  return (
    <section className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold tracking-tighter uppercase text-center mb-16">Quick Start</h2>
        
        <div className="space-y-16">
          {/* Install */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">01. Install</h3>
            <div className="rounded-xl border border-border/10 bg-black p-6">
              <code className="text-sm sm:text-base text-zinc-400">
                go install github.com/jsson-lang/jsson/cmd/jsson@latest
              </code>
            </div>
          </div>

          {/* Use */}
          <div className="flex flex-col gap-6">
            <h3 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">02. Use</h3>
            <div className="rounded-xl border border-border/10 bg-black p-6">
              <code className="text-sm sm:text-base text-zinc-400">
                echo &apos;app {'{'} name = &quot;MyApp&quot;, ports = 3000..3005 {'}'}&apos; | jsson
              </code>
            </div>
          </div>

          {/* Output */}
          <div className="flex flex-col gap-6 text-center pt-8">
            <p className="text-2xl font-black uppercase tracking-tighter">Write 80% less config.</p>
            <p className="text-xl text-muted-foreground italic font-light">Get the same result. Sleep better at night.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
