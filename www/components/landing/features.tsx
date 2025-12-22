'use client';

import DecoratorsGrid from '@/components/shared/decorators-grid';

const features = [
  {
    title: 'Universal Output',
    description:
      'Write once, export everywhere. Convert JSSON into JSON, YAML, TOML, or TypeScript.',
  },
  {
    title: 'Variables',
    description: 'Declare values once and reuse them throughout your config. Zero duplication.',
  },
  {
    title: 'Templates',
    description: 'Define models once and instantiate them with spreadsheet-style rows.',
  },
  {
    title: 'Advanced Maps',
    description: 'Transform values declaratively. Generate derived fields and dynamic objects.',
  },
  {
    title: 'Smart Ranges',
    description: 'Generate massive datasets with 1..10000 and range-driven maps instantly.',
  },
  {
    title: 'Arithmetic & Logic',
    description: 'Full math, comparisons, modulo, and ternaries right inside the DSL.',
  },
  {
    title: 'Nested Structures',
    description: 'Naturally express deep arrays and multi-level data expansions.',
  },
  {
    title: 'Composition',
    description: 'Break large configs into parts and merge them with clean include rules.',
  },
  {
    title: 'Native Types',
    description: 'Clean syntax for strings, numbers, and booleans without quoting hell.',
  },
];

export function Features() {
  return (
    <section className="py-32 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Features
          </h2>
          <p className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase max-w-2xl">
            Stop repeating yourself in JSON. Upgrade to JSSON.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 relative border border-border/50 bg-muted/5">
          <DecoratorsGrid />
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4 p-8 border border-border/50">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                {(index + 1).toString().padStart(2, '0')}
              </span>
              <h3 className="text-xl font-bold uppercase tracking-tight">{feature.title}</h3>
              <p className="text-muted-foreground font-light leading-snug">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
