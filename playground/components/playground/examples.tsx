'use client';

import { BookOpen, ChevronRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetPanel,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import { EXAMPLES } from './examples-data';

interface ExamplesSheetProps {
  onSelect: (code: string) => void;
}

export default function ExamplesSheet({ onSelect }: ExamplesSheetProps) {
  const [open, setOpen] = useState(false);

  const handleSelect = (code: string) => {
    onSelect(code);
    setOpen(false);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'e' && e.altKey) {
        setOpen(true);
      }
    };

    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" className="gap-2 group px-3 h-8" />}>
        <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="text-[10px] font-black uppercase tracking-widest">Examples</span>
        <div className="hidden sm:flex items-center gap-1 opacity-20 ml-1">
          <span className="border border-foreground/30 rounded px-1 min-w-[1.2rem] text-[8px]">
            ⌥
          </span>
          <span className="border border-foreground/30 rounded px-1 min-w-[1.2rem] text-[8px]">
            E
          </span>
        </div>
      </SheetTrigger>

      <SheetContent className="sm:max-w-xl overflow-y-auto rounded-none border-l bg-background p-0">
        <SheetHeader className="p-8 border-b dashed-separator bg-muted/5">
          <SheetTitle className="text-2xl font-black uppercase tracking-tight">
            Structure Library
          </SheetTitle>
          <SheetDescription className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60 mt-2">
            Explore production-ready blueprints and real-world patterns.
          </SheetDescription>
        </SheetHeader>

        <SheetPanel className="p-8">
          <div className="grid gap-6">
            {EXAMPLES.map((example, index) => (
              <button
                key={`${example.title}-${index}`}
                type="button"
                onClick={() => handleSelect(example.code)}
                className={cn(
                  'flex items-start gap-6 rounded-none border border-border p-6 text-left transition-all hover:bg-muted/10 hover:border-foreground/20 group relative overflow-hidden',
                  'focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-foreground',
                )}
              >
                <div className="absolute top-0 right-0 p-2 opacity-5 scale-150 rotate-12 group-hover:opacity-10 transition-opacity">
                  <example.icon className="h-12 w-12" />
                </div>

                <div className="flex-1 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
                      {example.title}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/40 border border-border px-2 py-0.5">
                      {example.category}
                    </span>
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 leading-relaxed max-w-[90%]">
                    {example.description}
                  </p>
                </div>
                <ChevronRight className="h-4 w-4 text-muted-foreground/30 group-hover:text-foreground transition-colors self-center" />
              </button>
            ))}
          </div>
        </SheetPanel>
      </SheetContent>
    </Sheet>
  );
}
