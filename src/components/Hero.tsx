import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-textiles.jpg";

export const Hero = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden rounded-3xl mx-4 my-8">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 to-foreground/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
          Затишок для вашого дому
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
          Якісний домашній текстиль, що створює атмосферу комфорту та тепла
        </p>
        <Button 
          variant="hero" 
          size="lg"
          onClick={scrollToForm}
          className="bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
        >
          Замовити консультацію
        </Button>
      </div>
    </section>
  );
};
