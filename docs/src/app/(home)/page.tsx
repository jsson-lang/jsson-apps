import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/logo';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
        <div className="flex items-center gap-2">
          <Logo width={225} height={225} />
          <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl lg:text-9xl text-foreground">
            JSSON <span className="sr-only">Language</span>
          </h1>
        </div>

        <p className="mt-8 max-w-xl text-lg text-muted-foreground sm:text-xl font-light tracking-tight">
          Universal configuration format. Write once, output JSON, YAML, TOML, or TypeScript. Learn
          with docs here.
        </p>

        <div className="mt-12">
          <Link
            href="/docs"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-10 text-base font-medium text-background transition-all hover:opacity-90"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="px-6 py-32 border-t border-border/10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground mb-8">
            Philosophy
          </h2>
          <p className="text-3xl sm:text-4xl font-bold tracking-tighter leading-[1.1]">
            Configuration should be expressive, logic-first, and completely type-safe. Stop
            repeating yourself across formats.
          </p>
        </div>
      </section>

      {/* Key Capabilities */}
      <section className="px-6 py-32 bg-muted/5">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-16 sm:grid-cols-3">
            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">
                01. Universal
              </h3>
              <p className="text-lg font-medium leading-snug">
                One source for JSON, YAML, TOML, and TypeScript.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">
                02. Logic-First
              </h3>
              <p className="text-lg font-medium leading-snug">
                Embedded variables, ranges, and map transformations.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground">
                03. Production Ready
              </h3>
              <p className="text-lg font-medium leading-snug">
                Type-safe outputs and schema validation at scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
          <div className="flex gap-8">
            <Link
              href="https://github.com/jssonlang/jsson"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <Link
              href="https://playground.jssonlang.tech"
              className="hover:text-foreground transition-colors"
            >
              Playground
            </Link>
          </div>
          <p>© {new Date().getFullYear()} JSSON</p>
        </div>
      </footer>
    </div>
  );
}
