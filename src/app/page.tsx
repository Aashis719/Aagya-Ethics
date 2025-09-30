import Hero from "@/components/Hero";
import About from "@/components/About";
import ProductShowcase from "@/components/ProductShowcase";
import ValueProps from "@/components/ValueProps";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProductShowcase />
      <About />
      
      <ValueProps />
      <Footer />
    </main>
  );
}
