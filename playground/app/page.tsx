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
        <header className="flex items-center justify-between px-6 py-4 border-b border-border relative z-10">
          <div className="flex items-center gap-6">
            <Logo size="sm" />
          </div>

          <div className="flex items-center gap-8">
            <Stats />
            <Link href="https://docs.jssonlang.tech/" target="_blank">
              <Button size="sm" variant="outline" className="h-8 px-4">
                Go to docs
              </Button>
            </Link>
          </div>
        </header>

        <MainPlayground />
      </div>
    </PlaygroundProvider>
  );
}
