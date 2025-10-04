import { Card, CardContent } from "@/components/ui/card";
import beddingImage from "@/assets/product-bedding.jpg";
import towelsImage from "@/assets/product-towels.jpg";
import pillowsImage from "@/assets/product-pillows.jpg";
import tableImage from "@/assets/product-table.jpg";

const products = [
  {
    title: "Постільна білизна",
    description: "Преміум комплекти з натуральних тканин",
    image: beddingImage,
  },
  {
    title: "Рушники",
    description: "М'які та високоякісні рушники для ванної",
    image: towelsImage,
  },
  {
    title: "Декоративні подушки",
    description: "Стильні подушки для вітальні та спальні",
    image: pillowsImage,
  },
  {
    title: "Столовий текстиль",
    description: "Серветки, доріжки та скатертини",
    image: tableImage,
  },
];

export const Products = () => {
  return (
    <section id="products" className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Наші продукти
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Широкий асортимент домашнього текстилю для кожної кімнати
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card 
              key={product.title} 
              className="overflow-hidden shadow-soft hover:shadow-medium transition-smooth border-border"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-smooth"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground">{product.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
