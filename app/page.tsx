import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import Portfolio from "@/components/home/Portfolio";
import Process from "@/components/home/Process";
import WhyNexOra from "@/components/home/WhyNexOra";
import CTAStrip from "@/components/home/CTAStrip";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Portfolio />
        <Process />
        <WhyNexOra />
        <CTAStrip />
        <Footer />
      </main>
    </>
  );
}
