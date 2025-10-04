import { Card, CardContent } from "@/components/ui/card";
import { FileText, Package, RefreshCcw, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "1. Зв'яжіться з нами",
    description: "Повідомте нас про бажання повернути товар протягом 14 днів",
  },
  {
    icon: Package,
    title: "2. Підготуйте товар",
    description: "Упакуйте товар у оригінальну упаковку зі всіма бірками",
  },
  {
    icon: RefreshCcw,
    title: "3. Відправте товар",
    description: "Відправте товар за нашою адресою або викличте кур'єра",
  },
  {
    icon: CheckCircle,
    title: "4. Отримайте кошти",
    description: "Після перевірки товару отримаєте повернення коштів протягом 5-7 днів",
  },
];

export const ReturnProcess = () => {
  return (
    <section id="return" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Процес повернення
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Простий та зручний процес повернення товару
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <Card 
              key={step.title}
              className="shadow-soft hover:shadow-medium transition-smooth border-border"
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-card rounded-2xl shadow-soft border border-border max-w-3xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Умови повернення</h3>
          <ul className="space-y-2 text-muted-foreground">
            <li>• Товар повинен бути в оригінальній упаковці</li>
            <li>• Всі бірки та етикетки мають бути збережені</li>
            <li>• Товар не повинен мати слідів використання</li>
            <li>• Повернення можливе протягом 14 днів з моменту отримання</li>
            <li>• Вартість зворотної доставки компенсується у разі браку товару</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
