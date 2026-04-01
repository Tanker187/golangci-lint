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
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <Features />
        <CodeDemo />
        <Linters />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
