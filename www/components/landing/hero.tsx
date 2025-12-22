'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Logo from '../shared/logo';

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center px-6 py-32 text-center min-h-[80vh]">
      <div className="flex flex-col items-center">
        <div className="mb-12">
          <Logo size="xl" />
        </div>

        <h1 className="text-5xl font-black tracking-tighter sm:text-8xl lg:text-9xl uppercase">
          Just JSSON Powerfull
        </h1>

        <p className="mt-8 max-w-3xl text-xl text-muted-foreground sm:text-2xl font-medium tracking-tight uppercase">
          Universal configuration format. <br className="hidden sm:block" />
          Write once, output JSON, YAML, TOML, or TypeScript.
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
