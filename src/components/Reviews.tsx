import { Card, CardContent } from "@/components/ui/card";
import { Star, Video } from "lucide-react";

const textReviews = [
  {
    name: "Олена Іваненко",
    rating: 5,
    text: "Чудова якість постільної білизни! М'яка, приємна на дотик. Після прання не втратила кольору. Рекомендую!",
  },
  {
    name: "Андрій Коваленко",
    rating: 5,
    text: "Замовляв рушники для всієї родини. Дуже задоволений якістю та швидкою доставкою. Обов'язково замовлю ще.",
  },
  {
    name: "Марина Петренко",
    rating: 5,
    text: "Декоративні подушки просто чудові! Ідеально вписались в інтер'єр. Дякую за професійну консультацію.",
  },
];

const videoReviews = [
  {
    name: "Відгук Тетяни",
    thumbnail: "🎥",
  },
  {
    name: "Відгук Володимира",
    thumbnail: "🎥",
  },
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Відгуки клієнтів
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Що про нас кажуть наші клієнти
        </p>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold mb-6">Текстові відгуки</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {textReviews.map((review) => (
              <Card key={review.name} className="shadow-soft hover:shadow-medium transition-smooth border-border">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-3">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">{review.text}</p>
                  <p className="font-semibold">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6">Відео відгуки</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {videoReviews.map((video) => (
              <Card 
                key={video.name}
                className="shadow-soft hover:shadow-medium transition-smooth border-border cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Video className="w-16 h-16 text-primary" />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold">{video.name}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
