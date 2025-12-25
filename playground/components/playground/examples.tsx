'use client';

import { BookOpen, ChevronRight } from 'lucide-react';
import { useQueryState } from 'nuqs';
import { Suspense, useEffect, useState } from 'react';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import { EXAMPLES } from './examples-data';

interface ExamplesSheetProps {
  onSelect: (code: string) => void;
}

function ExamplesSheetContent({ onSelect }: ExamplesSheetProps) {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useQueryState('tab', { defaultValue: 'all' });

  const handleSelect = (code: string) => {
    onSelect(code);
    setOpen(false);
  };

  const handleTabChange = (value: string) => {
    setActiveTab(value);
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
      <SheetTrigger render={<Button variant="outline" className="gap-2 group" />}>
        <BookOpen className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
        <span className="text-[10px] font-black uppercase tracking-widest">Examples</span>
        <div className="hidden sm:flex items-center gap-1 opacity-20 ml-1">
          <span className="border border-foreground/30 rounded px-1 min-w-[1.2rem] text-[8px]">
            ALT
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

        <SheetPanel className="p-0">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="px-8 pt-6 pb-2 border-b dashed-separator sticky top-0 bg-background z-30">
              <TabsList className="w-full justify-start gap-1 h-auto p-0 bg-transparent rounded-none">
                <TabsTrigger
                  value="all"
                  className="px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-none border border-border data-[state=active]:bg-foreground data-[state=active]:text-background transition-all"
                >
                  All
                </TabsTrigger>
                {Array.from(new Set(EXAMPLES.map((e) => e.category))).map((category) => (
                  <TabsTrigger
                    key={category}
                    value={category.toLowerCase()}
                    className="px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-none border border-border data-[state=active]:bg-foreground data-[state=active]:text-background transition-all"
                  >
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0 outline-none">
              <div className="grid gap-0 divide-y dashed-separator">
                {EXAMPLES.map((example, index) => (
                  <ExampleButton key={example.id} example={example} onSelect={handleSelect} />
                ))}
              </div>
            </TabsContent>

            {Array.from(new Set(EXAMPLES.map((e) => e.category))).map((category) => (
              <TabsContent
                key={category}
                value={category.toLowerCase()}
                className="mt-0 outline-none"
              >
                <div className="grid gap-0 divide-y dashed-separator">
                  {EXAMPLES.filter((e) => e.category === category).map((example) => (
                    <ExampleButton key={example.id} example={example} onSelect={handleSelect} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </SheetPanel>
      </SheetContent>
    </Sheet>
  );
}

interface ExampleButtonProps {
  example: (typeof EXAMPLES)[number];
  onSelect: (code: string) => void;
}

function ExampleButton({ example, onSelect }: ExampleButtonProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(example.code)}
      className={cn(
        'flex items-start gap-6 px-10 py-8 text-left transition-all hover:bg-muted/10 group relative overflow-hidden',
        'focus-visible:outline-none focus:bg-muted/10',
      )}
    >
      <div className="absolute top-0 right-0 p-4 opacity-[0.02] scale-150 rotate-12 group-hover:opacity-[0.06] transition-opacity">
        <example.icon className="h-20 w-20" />
      </div>

      <div className="flex-1 space-y-3 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-muted/30 border border-border group-hover:bg-primary/10 group-hover:border-primary/30 transition-all">
            <example.icon className="h-4 w-4 text-muted-foreground/60 group-hover:text-primary transition-colors" />
          </div>
          <span className="text-xs font-black uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
            {example.title}
          </span>
        </div>
        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground leading-loose max-w-[85%]">
          {example.description}
        </p>
      </div>
      <ChevronRight className="h-4 w-4 text-muted-foreground/20 group-hover:text-foreground transition-colors self-center" />
    </button>
  );
}

export default function ExamplesSheet(props: ExamplesSheetProps) {
  return (
    <Suspense
      fallback={
        <Button variant="outline" className="gap-2 group" disabled>
          <BookOpen className="h-4 w-4 text-muted-foreground" />
          <span className="text-[10px] font-black uppercase tracking-widest">Examples</span>
        </Button>
      }
    >
      <ExamplesSheetContent {...props} />
    </Suspense>
  );
}
