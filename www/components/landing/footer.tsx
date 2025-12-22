import Link from 'next/link';
import Logo from '../shared/logo';

export function Footer() {
  return (
    <footer className="border-t border-border/10 py-24">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
          <div className="max-w-xs">
            <Logo size="md" />
            <p className="mt-6 text-sm text-muted-foreground uppercase tracking-widest font-medium leading-relaxed">
              Universal Configuration. <br />
              Write Logic. Get Result.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
            <div className="flex flex-col gap-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                Product
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://playground.jssonlang.tech"
                  className="text-sm font-bold uppercase tracking-tight hover:opacity-70 transition-opacity"
                >
                  Playground
                </Link>
                <Link
                  href="https://docs.jssonlang.tech"
                  className="text-sm font-bold uppercase tracking-tight hover:opacity-70 transition-opacity"
                >
                  Docs
                </Link>
                <Link
                  href="https://docs.jssonlang.tech/changelog"
                  className="text-sm font-bold uppercase tracking-tight hover:opacity-70 transition-opacity"
                >
                  Changelog
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                Source
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="https://github.com/jssonlang/jsson"
                  className="text-sm font-bold uppercase tracking-tight hover:opacity-70 transition-opacity"
                >
                  GitHub
                </Link>
                <Link
                  href="https://x.com/jssonlang"
                  className="text-sm font-bold uppercase tracking-tight hover:opacity-70 transition-opacity"
                >
                  X / Twitter
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
                Legal
              </h3>
              <div className="flex flex-col gap-2">
                <Link
                  href="/privacy"
                  className="text-sm font-bold uppercase tracking-tight hover:opacity-70 transition-opacity"
                >
                  Privacy
                </Link>
                <Link
                  href="/terms"
                  className="text-sm font-bold uppercase tracking-tight hover:opacity-70 transition-opacity"
                >
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">
          <p>© {new Date().getFullYear()} JSSON PROJECT</p>
          <p>MADE WITH LOVE BY CARLOSEDUJS</p>
        </div>
      </div>
    </footer>
  );
}
