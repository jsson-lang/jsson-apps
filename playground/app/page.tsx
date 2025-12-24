import type { Metadata } from 'next';
import Link from 'next/link';
import MainPlayground from '@/components/playground/main';
import { Stats } from '@/components/playground/stats';
import Logo from '@/components/shared/logo';
import { Button } from '@/components/ui/button';
import { PlaygroundProvider } from '@/contexts/playground-context';

export const metadata: Metadata = {
  title: 'Playground - JSSON',
  description: 'Playground for JSSON - JavaScript Simplified Object Notation',
};

export default function PlaygroundPage() {
  return (
    <PlaygroundProvider>
      <div className="flex flex-col h-screen overflow-hidden bg-background selection:bg-primary selection:text-primary-foreground">
        <header className="flex items-center justify-between px-4 sm:px-6 py-3 sm:py-4 border-b border-border relative z-10">
          <div className="flex items-center gap-3 sm:gap-6">
            <Logo size="sm" />
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            <div className="hidden lg:flex items-center">
              <Stats />
            </div>
            <Link href="https://docs.jssonlang.tech/" target="_blank">
              <Button size="sm" variant="outline" className="h-8 px-2 sm:px-4 text-[10px] sm:text-xs uppercase font-bold tracking-wider">
                <span className="hidden sm:inline">Go to docs</span>
                <span className="sm:hidden">Docs</span>
              </Button>
            </Link>
          </div>
        </header>

        <MainPlayground />
      </div>
    </PlaygroundProvider>
  );
}
