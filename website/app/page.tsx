import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Stats } from "@/components/stats";
import { Features } from "@/components/features";
import { CodeDemo } from "@/components/code-demo";
import { Linters } from "@/components/linters";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Features />
        <CodeDemo />
        <Linters />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
