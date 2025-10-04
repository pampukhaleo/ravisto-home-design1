import { Award, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Понад 15 років на ринку",
    description: "Ми працюємо з 2008 року, забезпечуючи якість та надійність",
  },
  {
    icon: Award,
    title: "Преміум якість",
    description: "Використовуємо лише найкращі натуральні матеріали",
  },
  {
    icon: Heart,
    title: "Любов до деталей",
    description: "Кожен виріб створений з турботою про ваш комфорт",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Про нас
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ми — команда професіоналів, що створює затишок у вашому домі
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-card p-8 rounded-2xl shadow-soft hover:shadow-medium transition-smooth border border-border"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
