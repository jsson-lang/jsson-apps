export function FeaturesTeaser() {
  return (
    <section className="px-6 py-24 sm:py-32 bg-foreground/5">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-24 lg:grid-cols-2">
          {/* Main Features */}
          <div className="space-y-12">
            <h2 className="text-2xl font-black uppercase tracking-[0.2em] opacity-40">Features</h2>
            <ul className="space-y-6">
              {[
                "Syntax Highlighting (VS Code)",
                "Full Arithmetic (+, -, *, /)",
                "Variable System",
                "Metaprogramming (Map/Templates)",
                "Multi-format Export (JSON, YAML, TOML, TS)",
                "Streaming (100k+ items)"
              ].map((feature, i) => (
                <li key={i} className="text-xl font-bold uppercase tracking-tighter border-b border-border/10 pb-4">
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* v0.0.6 Teaser */}
          <div className="space-y-12">
            <h2 className="text-2xl font-black uppercase tracking-[0.2em] opacity-40 text-muted-foreground">COMING SOON IN v0.0.6</h2>
            <div className="space-y-8">
              <div className="group">
                <h3 className="text-4xl font-black tracking-tighter uppercase mb-2">@preset & @use</h3>
                <p className="text-muted-foreground font-light uppercase tracking-widest text-xs">Mixins & inheritance for configs</p>
              </div>
              <div className="group">
                <h3 className="text-4xl font-black tracking-tighter uppercase mb-2">HTTP Server</h3>
                <p className="text-muted-foreground font-light uppercase tracking-widest text-xs">jsson serve - transpile & validate via API</p>
              </div>
              <div className="group">
                <h3 className="text-4xl font-black tracking-tighter uppercase mb-2">LSP Support</h3>
                <p className="text-muted-foreground font-light uppercase tracking-widest text-xs">Fucking IDE integration</p>
              </div>
              <div className="group">
                <h3 className="text-4xl font-black tracking-tighter uppercase mb-2">Advanced Validation</h3>
                <p className="text-muted-foreground font-light uppercase tracking-widest text-xs">Kebab, snake, semver & custom schemas</p>
              </div>
              <div className="group opacity-30 mt-12 p-8 border border-dashed border-foreground/20 rounded-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.3em]">And more fucking features.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
