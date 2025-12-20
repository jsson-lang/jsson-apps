import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-6 py-24 text-center sm:py-32">
      <h1 className="text-6xl font-black tracking-tighter sm:text-8xl lg:text-9xl text-foreground uppercase leading-[0.8]">
        Just Fucking Use Jsson
      </h1>
      
      <p className="mt-12 max-w-2xl text-xl text-muted-foreground sm:text-2xl font-light tracking-tight">
        JSON is verbose. YAML is confusing. TOML is boring. Writing configurations should not be painful.
      </p>

      <div className="mt-16">
        <Link
          href="https://docs.jssonlang.tech"
          className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-foreground px-12 text-lg font-bold text-background transition-all hover:opacity-90 active:scale-95"
        >
          Documentation
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
