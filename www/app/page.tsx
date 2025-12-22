import { CodeDemo } from '@/components/landing/code-demo';
import { FAQ } from '@/components/landing/faq';
import { Features } from '@/components/landing/features';
import { Footer } from '@/components/landing/footer';
import { Hero } from '@/components/landing/hero';
import { Releases } from '@/components/landing/releases';
import { Showcase } from '@/components/landing/showcase';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Releases />
      <Features />
      <Showcase />
      <CodeDemo />
      <FAQ />
      <Footer />
    </main>
  );
}
