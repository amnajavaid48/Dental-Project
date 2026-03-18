import About from "@/components/About";
import CTAbanner from "@/components/CTAbanner";
import Hero from "@/components/Hero";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Treatment from "@/components/Treatments";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Treatment />
      <CTAbanner />
      <Testimonials />
      <Team />
    </main>
  );
}
