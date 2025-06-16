import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const games = [
  {
    title: "Cyberpunk 2077",
    price: "1299 ₽",
    oldPrice: "2599 ₽",
    platform: "PC",
    rating: 4.2,
    image:
      "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400&h=300&fit=crop",
    discount: "-50%",
  },
  {
    title: "The Witcher 3",
    price: "899 ₽",
    oldPrice: "",
    platform: "PC",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=300&fit=crop",
    discount: "",
  },
  {
    title: "God of War",
    price: "1599 ₽",
    oldPrice: "1999 ₽",
    platform: "PlayStation",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=300&fit=crop",
    discount: "-20%",
  },
  {
    title: "Zelda: Breath of Wild",
    price: "3299 ₽",
    oldPrice: "",
    platform: "Nintendo Switch",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
    discount: "",
  },
];

const FeaturedGames = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-3xl font-montserrat font-bold text-gaming-dark mb-2">
              Популярные игры
            </h2>
            <p className="text-gray-600">
              Хиты продаж и лучшие предложения недели
            </p>
          </div>
          <Button variant="outline">
            Смотреть все
            <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {games.map((game, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="relative">
                <img
                  src={game.image}
                  alt={game.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {game.discount && (
                  <div className="absolute top-3 left-3 bg-gaming-red text-white px-2 py-1 rounded text-sm font-semibold">
                    {game.discount}
                  </div>
                )}
                <div className="absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs">
                  {game.platform}
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-montserrat font-semibold text-gaming-dark mb-2 line-clamp-1">
                  {game.title}
                </h3>

                <div className="flex items-center mb-3">
                  <div className="flex text-gaming-yellow">
                    {[...Array(5)].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        className={`h-4 w-4 ${i < Math.floor(game.rating) ? "fill-current" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-gray-600 ml-2">
                    {game.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gaming-blue">
                      {game.price}
                    </span>
                    {game.oldPrice && (
                      <span className="text-sm text-gray-500 line-through ml-2">
                        {game.oldPrice}
                      </span>
                    )}
                  </div>
                  <Button
                    size="sm"
                    className="bg-gaming-blue hover:bg-gaming-cyan"
                  >
                    <Icon name="ShoppingCart" className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedGames;
