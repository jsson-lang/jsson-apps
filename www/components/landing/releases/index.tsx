'use client';

import { ExternalLink, GitBranch } from 'lucide-react';
import Link from 'next/link';
import DecoratorsGrid from '@/components/shared/decorators-grid';
import { cn } from '@/lib/utils';
import { releases } from './releaseData';

export function Releases() {
  return (
    <section className="py-32 border-t border-border/10">
      <div className="container mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground mb-4">
            Evolution & Maintenance
          </h2>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p className="text-4xl sm:text-5xl font-bold tracking-tighter uppercase max-w-2xl">
              Constant Innovation. <br />
              Version by Version.
            </p>
            <Link
              href="https://github.com/jsson-lang/jsson/releases"
              target="_blank"
              className="group flex items-center gap-2 text-xs font-black uppercase tracking-widest border-b border-foreground/20 pb-1 hover:border-foreground transition-colors"
            >
              See all releases on GitHub
              <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border/50 relative">
          <DecoratorsGrid />

          {releases.map((release, index) => {
            const isFeatured = index === 0 || index === releases.length - 1;
            return (
              <div
                key={index}
                className={cn(
                  'flex flex-col border border-border/50 bg-muted/5 p-8 group relative overflow-hidden',
                  isFeatured ? 'lg:col-span-3 md:col-span-2' : '',
                )}
              >
                <div
                  className="absolute inset-0 opacity-[0.02] pointer-events-none group-hover:opacity-[0.05] transition-opacity"
                  style={{
                    backgroundImage:
                      'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                ></div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-sm font-bold px-2 py-0.5 bg-foreground text-background">
                        {release.version}
                      </span>
                      {release.tag && (
                        <span className="text-[10px] font-black uppercase tracking-widest text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full">
                          {release.tag}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground text-right">
                      {release.date}
                    </span>
                  </div>

                  <div
                    className={cn(
                      'flex flex-col h-full',
                      isFeatured && 'lg:flex-row lg:items-stretch lg:gap-12',
                    )}
                  >
                    <div
                      className={cn(
                        'flex-1',
                        isFeatured && 'lg:pr-12 lg:border-r lg:border-border/20 lg:border-dashed',
                      )}
                    >
                      <h3
                        className={cn(
                          'font-bold uppercase tracking-tight mb-4 group-hover:text-primary transition-colors',
                          isFeatured ? 'text-2xl sm:text-3xl' : 'text-xl',
                        )}
                      >
                        {release.title}
                      </h3>

                      <p
                        className={cn(
                          'text-muted-foreground font-normal leading-relaxed mb-8',
                          isFeatured ? 'text-base max-w-2xl' : 'text-sm',
                        )}
                      >
                        {release.description}
                      </p>
                    </div>

                    <div
                      className={cn(
                        'mt-auto pt-6 border-t border-border/50 border-dashed flex items-center justify-between',
                        isFeatured &&
                          'lg:mt-0 lg:pt-0 lg:border-t-0 lg:flex-col lg:items-end lg:justify-center lg:gap-6 lg:min-w-[200px]',
                      )}
                    >
                      <div
                        className={cn(
                          'flex flex-col items-start gap-1',
                          isFeatured && 'lg:items-end',
                        )}
                      >
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground flex items-center gap-1.5">
                          <GitBranch className="h-3 w-3" />
                          {release.branch || 'main branch'}
                        </span>
                        {isFeatured && (
                          <span className="hidden lg:block text-[9px] font-mono text-muted-foreground/50">
                            ID: {release.version.replace('v', '')}-rel-stable
                          </span>
                        )}
                      </div>

                      <Link
                        href={
                          release.branch
                            ? `https://github.com/jsson-lang/jsson/tree/${release.branch}`
                            : `https://github.com/jsson-lang/jsson/releases/tag/${release.version}`
                        }
                        target="_blank"
                        className={cn(
                          'text-[10px] font-black uppercase tracking-widest transition-all',
                          isFeatured
                            ? 'lg:px-8 lg:py-4 lg:bg-foreground lg:text-background lg:hover:bg-primary lg:hover:scale-105'
                            : 'hover:text-foreground underline underline-offset-4 decoration-border/50 hover:decoration-foreground',
                        )}
                      >
                        {release.branch ? 'View Branch' : 'View Full Changelog'}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
