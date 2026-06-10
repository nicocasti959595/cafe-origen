import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import ObrasSociales from "@/components/ObrasSociales";
import Gallery from "@/components/Gallery";
import HealthServices from "@/components/HealthServices";
import Process from "@/components/Process";
import TurnoCTA from "@/components/TurnoCTA";
import Coverage from "@/components/Coverage";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Stats />
        <Services />
        <WhyUs />
        <ObrasSociales />
        <Gallery />
        <HealthServices />
        <Process />
        <TurnoCTA />
        <Coverage />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
