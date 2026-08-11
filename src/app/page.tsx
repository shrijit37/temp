import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Marquee from "@/components/ui/Marquee";
import About from "@/components/home/About";
import ProductsBento from "@/components/home/ProductsBento";
import Industries from "@/components/home/Industries";
import Process from "@/components/home/Process";
import Statement from "@/components/home/Statement";
import WhyDmc from "@/components/home/WhyDmc";
import Contact from "@/components/home/Contact";
import { company } from "@/data/company";

export default function Home() {
  return (
    <main className="overflow-x-hidden w-full max-w-full">
      <Nav />
      <Hero />
      <Marquee items={company.materials} className="py-6 sm:py-8 border-y border-line bg-coal/50" />
      <About />
      <ProductsBento />
      <Industries />
      <Process />
      <Statement />
      <WhyDmc />
      <Contact />
      <Footer />
    </main>
  );
}
