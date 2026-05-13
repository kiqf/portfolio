import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-24">
      <About />
      </main>
    </>
  );
}