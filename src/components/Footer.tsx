import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Контакти</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1 flex-shrink-0" />
                <div>
                  <p>+380 XX XXX XX XX</p>
                  <p className="text-sm opacity-80">Пн-Пт: 9:00-18:00</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>info@textiles.ua</p>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <p>м. Київ, вул. Прикладна 1</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Навігація</h3>
            <ul className="space-y-2">
              <li><a href="#products" className="hover:text-primary transition-smooth">Продукти</a></li>
              <li><a href="#about" className="hover:text-primary transition-smooth">Про нас</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-smooth">Ціни</a></li>
              <li><a href="#reviews" className="hover:text-primary transition-smooth">Відгуки</a></li>
              <li><a href="#faq" className="hover:text-primary transition-smooth">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Інформація</h3>
            <ul className="space-y-2">
              <li><a href="#return" className="hover:text-primary transition-smooth">Повернення товару</a></li>
              <li><a href="#contact-form" className="hover:text-primary transition-smooth">Залишити заявку</a></li>
              <li className="opacity-80">Доставка та оплата</li>
              <li className="opacity-80">Політика конфіденційності</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="opacity-80">© 2024 Домашній Текстиль. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};
