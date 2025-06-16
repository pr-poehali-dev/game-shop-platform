import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const offers = [
  {
    title: "Скидки до 80%",
    subtitle: "Летняя распродажа",
    description: "Тысячи игр по сниженным ценам",
    buttonText: "Смотреть акции",
    background: "bg-gradient-to-r from-gaming-red to-red-600",
    icon: "Flame",
  },
  {
    title: "Предзаказы",
    subtitle: "Новинки 2024",
    description: "Закажи игру до релиза и получи бонусы",
    buttonText: "Предзаказать",
    background: "bg-gradient-to-r from-gaming-yellow to-amber-500",
    icon: "Clock",
  },
  {
    title: "Game Pass",
    subtitle: "Подписки со скидкой",
    description: "Доступ к сотням игр за месяц",
    buttonText: "Подписаться",
    background: "bg-gradient-to-r from-gaming-blue to-gaming-cyan",
    icon: "Infinity",
  },
];

const SpecialOffers = () => {
  return (
    <section className="py-16 bg-gaming-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gaming-dark mb-4">
            Специальные предложения
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Не упусти лучшие скидки и эксклюзивные предложения для геймеров
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardContent
                className={`${offer.background} text-white p-8 relative`}
              >
                <div className="absolute top-4 right-4 opacity-20">
                  <Icon name={offer.icon as any} className="h-16 w-16" />
                </div>

                <div className="relative z-10">
                  <h3 className="text-2xl font-montserrat font-bold mb-2">
                    {offer.title}
                  </h3>
                  <p className="text-lg font-semibold mb-3 opacity-90">
                    {offer.subtitle}
                  </p>
                  <p className="mb-6 opacity-80">{offer.description}</p>
                  <Button
                    variant="secondary"
                    size="lg"
                    className="bg-white text-gaming-dark hover:bg-gray-100 font-semibold"
                  >
                    {offer.buttonText}
                    <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
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

export default SpecialOffers;
