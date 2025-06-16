import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const promotions = [
  {
    id: 1,
    title: "Летняя распродажа",
    discount: "до 80%",
    description: "Огромные скидки на хиты года",
    endDate: "31 июля",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=200&fit=crop",
    category: "Распродажа",
    color: "bg-gaming-red",
  },
  {
    id: 2,
    title: "Предзаказы 2024",
    discount: "скидка 15%",
    description: "Закажи новинки заранее и сэкономь",
    endDate: "До релиза",
    image:
      "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=400&h=200&fit=crop",
    category: "Предзаказ",
    color: "bg-gaming-yellow",
  },
  {
    id: 3,
    title: "Game Pass Ultimate",
    discount: "3 месяца за 299₽",
    description: "Сотни игр в одной подписке",
    endDate: "Ограниченное время",
    image:
      "https://images.unsplash.com/photo-1556438064-2d7646166914?w=400&h=200&fit=crop",
    category: "Подписка",
    color: "bg-gaming-blue",
  },
];

const weeklyDeals = [
  {
    name: "Cyberpunk 2077",
    oldPrice: "2999₽",
    newPrice: "1499₽",
    discount: "50%",
  },
  {
    name: "Red Dead Redemption 2",
    oldPrice: "3499₽",
    newPrice: "1749₽",
    discount: "50%",
  },
  {
    name: "The Witcher 3",
    oldPrice: "1999₽",
    newPrice: "599₽",
    discount: "70%",
  },
  { name: "GTA V", oldPrice: "2299₽", newPrice: "689₽", discount: "70%" },
];

const Promotions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-gaming-blue to-gaming-cyan text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-montserrat font-bold mb-6">
            🔥 Горячие акции КиП
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Лучшие предложения и скидки на игры для настоящих геймеров
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-gaming-blue hover:bg-gray-100"
          >
            <Icon name="Flame" className="h-5 w-5 mr-2" />
            Смотреть все акции
          </Button>
        </div>
      </section>

      {/* Main Promotions */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-montserrat font-bold text-gaming-dark mb-12 text-center">
            Главные акции
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo) => (
              <Card
                key={promo.id}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className={`absolute top-4 left-4 ${promo.color} text-white border-none`}
                  >
                    {promo.category}
                  </Badge>
                  <div className="absolute top-4 right-4 bg-white text-gaming-dark px-3 py-1 rounded-full font-bold">
                    {promo.discount}
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-montserrat font-bold mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      До {promo.endDate}
                    </span>
                    <Button
                      size="sm"
                      className="bg-gaming-blue hover:bg-gaming-cyan"
                    >
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Deals */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gaming-dark mb-4">
              ⚡ Предложения недели
            </h2>
            <p className="text-gray-600">Обновляется каждый понедельник</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {weeklyDeals.map((game, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="destructive" className="bg-gaming-red">
                      -{game.discount}
                    </Badge>
                    <Icon
                      name="Heart"
                      className="h-5 w-5 text-gray-400 hover:text-gaming-red cursor-pointer"
                    />
                  </div>

                  <h3 className="font-semibold mb-3 text-gaming-dark">
                    {game.name}
                  </h3>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500 line-through text-sm">
                        {game.oldPrice}
                      </span>
                      <span className="text-gaming-blue font-bold text-lg">
                        {game.newPrice}
                      </span>
                    </div>
                    <Button
                      className="w-full bg-gaming-blue hover:bg-gaming-cyan"
                      size="sm"
                    >
                      <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />В
                      корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gaming-light">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <Icon
              name="Mail"
              className="h-12 w-12 text-gaming-blue mx-auto mb-6"
            />
            <h2 className="text-3xl font-montserrat font-bold text-gaming-dark mb-4">
              Не пропускай акции!
            </h2>
            <p className="text-gray-600 mb-8">
              Подпишись на рассылку и узнавай о скидках первым
            </p>
            <div className="flex max-w-md mx-auto gap-4">
              <input
                type="email"
                placeholder="Твой email"
                className="flex-1 px-4 py-3 rounded-lg border focus:outline-none focus:border-gaming-blue"
              />
              <Button className="bg-gaming-blue hover:bg-gaming-cyan px-8">
                Подписаться
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Promotions;
