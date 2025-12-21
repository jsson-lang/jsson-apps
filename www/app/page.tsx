import { Hero } from "@/components/landing/hero";
import { Features } from "@/components/landing/features";
import { Showcase } from "@/components/landing/showcase";
import { CodeDemo } from "@/components/landing/code-demo";
import { Releases } from "@/components/landing/releases";
import { FAQ } from "@/components/landing/faq";
import { Footer } from "@/components/landing/footer";

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
