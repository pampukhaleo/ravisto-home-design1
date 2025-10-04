import { Leaf, Shield, Truck, ThumbsUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const advantages = [
  {
    icon: Leaf,
    title: "Екологічність",
    description: "100% натуральні тканини без шкідливих домішок",
  },
  {
    icon: Shield,
    title: "Гарантія якості",
    description: "Офіційна гарантія на всю продукцію",
  },
  {
    icon: Truck,
    title: "Швидка доставка",
    description: "Доставка по всій Україні протягом 1-3 днів",
  },
  {
    icon: ThumbsUp,
    title: "Легке повернення",
    description: "Повернення товару протягом 14 днів",
  },
];

export const Advantages = () => {
  return (
    <section id="advantages" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Наші переваги
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Чому тисячі клієнтів обирають нас
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage) => (
            <Card 
              key={advantage.title}
              className="text-center shadow-soft hover:shadow-medium transition-smooth border-border"
            >
              <CardContent className="p-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <advantage.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{advantage.title}</h3>
                <p className="text-muted-foreground text-sm">{advantage.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
