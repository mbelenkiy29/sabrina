import { ClientLogos } from "@/components/home/ClientLogos";
import { CtaBand } from "@/components/home/CtaBand";
import { Hero } from "@/components/home/Hero";
import { Process } from "@/components/home/Process";
import { SelectedWork } from "@/components/home/SelectedWork";
import { ServicesStrip } from "@/components/home/ServicesStrip";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesStrip />
      <SelectedWork />
      <Process />
      <ClientLogos />
      <Testimonials />
      <CtaBand />
    </>
  );
}
