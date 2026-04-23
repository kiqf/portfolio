import { Navbar } from "@/components/layout/navigation";
import { HeroSection, SkillsSection } from "@/components/sections";

export default function Home() {
  return (
    <main id="topo" className="min-h-screen bg-neutral-50 text-neutral-950">
      <Navbar />

      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 px-6 py-12">
        <HeroSection />
      </div>
    </main>
  );
}
