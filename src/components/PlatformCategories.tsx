import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const platforms = [
  {
    name: "PC Games",
    icon: "Monitor",
    color: "bg-gaming-blue",
    count: "2000+ игр",
  },
  {
    name: "PlayStation",
    icon: "Gamepad2",
    color: "bg-blue-600",
    count: "800+ игр",
  },
  {
    name: "Xbox",
    icon: "Gamepad",
    color: "bg-green-600",
    count: "750+ игр",
  },
  {
    name: "Nintendo Switch",
    icon: "Smartphone",
    color: "bg-red-500",
    count: "600+ игр",
  },
];

const PlatformCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-montserrat font-bold text-gaming-dark mb-4">
            Выберите платформу
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Игры для всех популярных платформ с мгновенной доставкой цифровых
            ключей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              <CardContent className="p-6 text-center">
                <div
                  className={`${platform.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon
                    name={platform.icon as any}
                    className="h-8 w-8 text-white"
                  />
                </div>
                <h3 className="text-xl font-montserrat font-semibold text-gaming-dark mb-2">
                  {platform.name}
                </h3>
                <p className="text-gaming-blue font-medium">{platform.count}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformCategories;
