import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { About } from "@/components/About";
import { Advantages } from "@/components/Advantages";
import { Pricing } from "@/components/Pricing";
import { Reviews } from "@/components/Reviews";
import { FAQ } from "@/components/FAQ";
import { ReturnProcess } from "@/components/ReturnProcess";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Products />
      <About />
      <Advantages />
      <Pricing />
      <Reviews />
      <FAQ />
      <ReturnProcess />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
