'use client';

import { ChartCandlestick } from 'lucide-react';
import { usePlaygroundContext } from '@/contexts/playground-context';
import { Button } from '../ui/button';
import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogPanel,
  DialogPopup,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog';
import { StatsOverview } from './stats-overview';
import { calculateStats } from './stats-utils';

export function Stats() {
  const { jssonCode, output, format } = usePlaygroundContext();
  const stats = calculateStats(jssonCode, output);
  const hasData = jssonCode.length > 0 || output.length > 0;

  return (
    <Dialog>
      <DialogTrigger render={<Button />}>
        <div className="flex items-center gap-2 group">
          <ChartCandlestick className="h-4 w-4 text-muted-foreground group-hover:text-emerald-500 transition-colors" />
          <span className="text-[10px] font-black uppercase tracking-widest">Overview</span>
        </div>
      </DialogTrigger>
      <DialogPopup className="md:max-w-5xl rounded-none border border-border bg-background p-0 overflow-hidden">
        <DialogHeader className="p-8 border-b dashed-separator bg-muted/5">
          <DialogTitle className="text-2xl font-black uppercase tracking-tight">
            Transpilation Intelligence
          </DialogTitle>
          <DialogDescription className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/60 mt-2">
            Transpilation & Generation Efficiency Metrics
          </DialogDescription>
        </DialogHeader>
        <DialogPanel className="p-0">
          {hasData ? (
            <StatsOverview stats={stats} format={format} />
          ) : (
            <div className="py-24 text-center text-muted-foreground bg-grid">
              <ChartCandlestick className="mx-auto h-12 w-12 mb-6 opacity-20" />
              <p className="text-[10px] font-black uppercase tracking-[0.3em]">
                No data points analyzed yet
              </p>
            </div>
          )}
        </DialogPanel>
      </DialogPopup>
    </Dialog>
  );
}
