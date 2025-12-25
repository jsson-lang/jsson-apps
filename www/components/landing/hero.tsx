'use client';

import { ArrowRight, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import Logo from '../shared/logo';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-32 text-center min-h-[80vh]">
      <div className="flex flex-col items-center">
        <div className="mb-8">
          <Badge variant="outline" className="h-8 px-4 text-xs font-black uppercase tracking-[0.2em] bg-muted/50 gap-2 rounded-full border-border/50">
             <Sparkles className="h-3 w-3 text-amber-500 fill-amber-500" />
             v0.0.6 - Last pre-alpha
          </Badge>
        </div>
        <div className="mb-12">
          <Logo size="xl" />
        </div>

        <h1 className="text-5xl font-black tracking-tighter sm:text-8xl lg:text-9xl uppercase">
          Configuration with Superpowers
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-muted-foreground sm:text-2xl font-medium tracking-tight uppercase">
          Write logic, not JSON. Presets, validators, HTTP server and LSP support. <br className="hidden sm:block" />
          One source for JSON, YAML, TOML, and TypeScript.
        </p>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="https://playground.jssonlang.tech"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'h-14 px-10 text-lg font-bold uppercase tracking-tighter rounded-full',
            )}
          >
            Start Coding <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
          <Link
            href="https://docs.jssonlang.tech"
            className={cn(
              buttonVariants({ size: 'lg', variant: 'outline' }),
              'h-14 px-10 text-lg font-bold uppercase tracking-tighter rounded-full',
            )}
          >
            Documentation
          </Link>
        </div>
      </div>
    </section>
  );
}
