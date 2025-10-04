import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Які матеріали ви використовуєте?",
    answer: "Ми використовуємо виключно натуральні тканини: 100% бавовна, льон, сатин та перкаль. Всі матеріали проходять сертифікацію якості.",
  },
  {
    question: "Як доглядати за вашою продукцією?",
    answer: "Рекомендуємо прання при температурі до 40°C, використання м'якого порошку без відбілювачів. Детальні інструкції додаються до кожного виробу.",
  },
  {
    question: "Чи можна замовити нестандартний розмір?",
    answer: "Так, ми приймаємо індивідуальні замовлення. Зв'яжіться з нами для обговорення деталей та термінів виготовлення.",
  },
  {
    question: "Скільки часу займає доставка?",
    answer: "Доставка по Україні займає 1-3 робочі дні. Для Києва доступна експрес-доставка протягом дня.",
  },
  {
    question: "Чи надаєте ви гарантію?",
    answer: "Так, на всю продукцію надається гарантія від 6 до 24 місяців залежно від категорії товару.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Часті питання
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Відповіді на найпопулярніші запитання
        </p>
        
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border">
              <AccordionTrigger className="text-left hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
