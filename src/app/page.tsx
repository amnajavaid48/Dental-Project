import About from "@/components/About";
import CTAbanner from "@/components/CTAbanner";
import Form from "@/components/Form";
import Hero from "@/components/Hero";
import MapArea from "@/components/MapArea";
import PatientPlace from "@/components/PatientPlace";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Treatment from "@/components/Treatments";
import WinningAwards from "@/components/WinningAwards";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Treatment />
      <CTAbanner />
      <Testimonials />
      <Team />
      <WinningAwards />
      <Form />
      <PatientPlace />
      <MapArea />
    </main>
  );
}
