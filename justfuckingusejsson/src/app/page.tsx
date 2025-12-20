import { Hero } from "@/components/landing/hero";
import { ProblemSolution } from "@/components/landing/problem-solution";
import { ComparisonTable } from "@/components/landing/comparison-table";
import { QuickStart } from "@/components/landing/quick-start";
import { UseCases } from "@/components/landing/use-cases";
import { FeaturesTeaser } from "@/components/landing/features-teaser";
import { BottomLine } from "@/components/landing/bottom-line";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background selection:bg-foreground selection:text-background">
      <nav className="fixed top-0 z-50 w-full border-b border-border/5 bg-background/80 backdrop-blur-md px-6 py-4">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="text-sm font-black uppercase tracking-widest">
            JSSON
          </Link>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-widest">
            <Link href="https://github.com/jsson-lang/jsson" className="hover:opacity-60 transition-opacity">GitHub</Link>
            <Link href="https://docs.jssonlang.tech" className="hover:opacity-60 transition-opacity">Docs</Link>
            <Link href="https://playground.jssonlang.tech" className="hover:opacity-60 transition-opacity underline decoration-2">Try Playground</Link>
          </div>
        </div>
      </nav>

      <div className="pt-16">
        <Hero />
        <ProblemSolution />
        <ComparisonTable />
        <UseCases />
        <FeaturesTeaser />
        <QuickStart />
        <BottomLine />
      </div>

      <footer className="px-6 py-24 border-t border-border/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-12 text-center md:flex-row md:text-left">
          <div className="space-y-4">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Just Fucking Use Jsson</h2>
            <p className="text-sm text-muted-foreground font-medium uppercase tracking-[0.2em] opacity-60">Made with minimal effort, Maximum result.</p>
          </div>
          <div className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground">
            © {new Date().getFullYear()} Carlos Eduardo
          </div>
        </div>
      </footer>
    </main>
  );
}
