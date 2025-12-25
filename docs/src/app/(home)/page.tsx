import { ArrowRight, Zap, Code2, Server, FileJson, Terminal, Sparkles, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import Logo from '@/components/logo';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
        <div className="flex items-center gap-2">
          <Logo width={225} height={225} />
          <h1 className="text-6xl font-bold tracking-tighter sm:text-8xl lg:text-9xl text-foreground">
            JSSON <span className="sr-only">Language</span>
          </h1>
        </div>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground sm:text-xl font-light tracking-tight">
          The universal configuration meta-format. Write once, transpile to{' '}
          <span className="text-foreground font-medium">JSON</span>,{' '}
          <span className="text-foreground font-medium">YAML</span>,{' '}
          <span className="text-foreground font-medium">TOML</span>, or{' '}
          <span className="text-foreground font-medium">TypeScript</span>.
        </p>

        <div className="mt-12 flex gap-4">
          <Link
            href="/docs"
            className="group inline-flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-10 text-base font-medium text-background transition-all hover:opacity-90"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            href="https://playground.jssonlang.tech"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-border px-8 text-base font-medium text-foreground transition-all hover:bg-muted"
          >
            Try Playground
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-border/10">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-xl bg-muted/30 p-6 border border-border/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                <FileJson className="h-4 w-4" />
                config.jsson
              </div>
              <pre className="text-sm leading-relaxed overflow-x-auto">
{`@preset "api" {
  timeout = 30
  retries = 3
}

users [
  template { id, role }
  map (u) = @use "api" {
    id = @uuid
    email = @email
    role = u.role
    active = yes
  }
  1..5, "admin"
  6..100, "user"
]`}
              </pre>
            </div>
            <div className="rounded-xl bg-muted/30 p-6 border border-border/20">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
                <Terminal className="h-4 w-4" />
                Output (100 users)
              </div>
              <pre className="text-sm leading-relaxed overflow-x-auto text-muted-foreground">
{`{
  "users": [
    {
      "timeout": 30,
      "retries": 3,
      "id": "a1b2c3d4-...",
      "email": "user_x@example.com",
      "role": "admin",
      "active": true
    },
    // ... 99 more users
  ]
}`}
              </pre>
            </div>
          </div>
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

      <section className="px-6 py-32 bg-muted/5">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-muted-foreground mb-12 text-center">
            Key Features
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Zap className="h-5 w-5 text-yellow-500" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Universal Output</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                One source file for JSON, YAML, TOML, and TypeScript. Never sync configs manually again.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Code2 className="h-5 w-5 text-blue-500" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Logic Built-In</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Variables, ranges, map transformations, arithmetic, and conditionals. No external tools needed.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-purple-500" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Presets & Validators</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Reusable templates with @preset/@use. Auto-generate UUIDs, emails, dates with validators.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Server className="h-5 w-5 text-green-500" />
                <h3 className="text-sm font-bold uppercase tracking-widest">HTTP Server</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Built-in REST API for transpilation. Perfect for playgrounds, CI/CD, and microservices.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-5 w-5 text-orange-500" />
                <h3 className="text-sm font-bold uppercase tracking-widest">VS Code Extension</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Full LSP support with syntax highlighting, diagnostics, auto-complete, and go-to-definition.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-emerald-500" />
                <h3 className="text-sm font-bold uppercase tracking-widest">Schema Validation</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Validate transpiled output against JSON Schema. Catch errors before deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 border-t border-border/10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-muted/50 px-4 py-2 text-sm">
            <span className="font-bold">v0.0.6</span>
            <span className="text-muted-foreground">— Presets, Validators, LSP Support</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-border/10">
        <div className="mx-auto flex max-w-4xl items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">
          <div className="flex gap-8">
            <Link
              href="https://github.com/jsson-lang/jsson"
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
            <Link
              href="/docs"
              className="hover:text-foreground transition-colors"
            >
              Docs
            </Link>
          </div>
          <p>© {new Date().getFullYear()} JSSON</p>
        </div>
      </footer>
    </div>
  );
}
