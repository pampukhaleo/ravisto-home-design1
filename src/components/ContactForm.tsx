import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Дякуємо за звернення!",
      description: "Ми зв'яжемося з вами найближчим часом.",
    });

    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <section id="contact-form" className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Залишити заявку
        </h2>
        <p className="text-center text-muted-foreground mb-12">
          Заповніть форму і ми зв'яжемося з вами протягом 15 хвилин
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-6 bg-card p-8 rounded-2xl shadow-soft border border-border">
          <div className="space-y-2">
            <Label htmlFor="name">Ім'я *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Ваше ім'я"
              className="rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Телефон *</Label>
            <Input
              id="phone"
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+380 XX XXX XX XX"
              className="rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="rounded-lg"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Повідомлення</Label>
            <Textarea
              id="message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Розкажіть про ваші побажання..."
              className="rounded-lg min-h-[120px]"
            />
          </div>

          <Button type="submit" className="w-full" size="lg">
            Відправити заявку
          </Button>
        </form>
      </div>
    </section>
  );
};
