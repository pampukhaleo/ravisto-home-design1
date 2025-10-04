import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    title: "Стандарт",
    price: "від 1200",
    description: "Базові комплекти високої якості",
    features: [
      "Натуральні тканини",
      "Стандартна упаковка",
      "Базові кольори",
      "Гарантія 6 місяців",
    ],
  },
  {
    title: "Преміум",
    price: "від 2400",
    description: "Комплекти підвищеної якості",
    features: [
      "Преміум тканини",
      "Подарункова упаковка",
      "Широка палітра кольорів",
      "Гарантія 12 місяців",
      "Безкоштовна доставка",
    ],
    featured: true,
  },
  {
    title: "Люкс",
    price: "від 4000",
    description: "Ексклюзивні дизайнерські комплекти",
    features: [
      "Дизайнерські тканини",
      "Ексклюзивна упаковка",
      "Індивідуальні замовлення",
      "Гарантія 24 місяці",
      "Безкоштовна доставка",
      "Персональний менеджер",
    ],
  },
];

export const Pricing = () => {
  const scrollToForm = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Наші ціни
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Виберіть оптимальний варіант для вас
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier) => (
            <Card 
              key={tier.title}
              className={`shadow-soft hover:shadow-medium transition-smooth border-border ${
                tier.featured ? 'ring-2 ring-primary shadow-medium' : ''
              }`}
            >
              <CardHeader>
                <CardTitle className="text-2xl">{tier.title}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-primary">{tier.price}</span>
                  <span className="text-muted-foreground"> грн</span>
                </div>
                <p className="text-muted-foreground mt-2">{tier.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  variant={tier.featured ? "default" : "outline"} 
                  className="w-full"
                  onClick={scrollToForm}
                >
                  Замовити
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
