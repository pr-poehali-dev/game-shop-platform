import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const stats = [
  { number: "500K+", label: "Довольных игроков" },
  { number: "10K+", label: "Игр в каталоге" },
  { number: "5 лет", label: "На рынке" },
  { number: "24/7", label: "Поддержка" },
];

const team = [
  {
    name: "Алексей Петров",
    role: "CEO & Основатель",
    description: "Геймер с 15-летним стажем, создал КиП для всех любителей игр",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Мария Сидорова",
    role: "Head of Gaming",
    description: "Отвечает за подбор лучших игр и эксклюзивных предложений",
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b69ad100?w=150&h=150&fit=crop&crop=face",
  },
  {
    name: "Дмитрий Козлов",
    role: "Tech Director",
    description: "Следит за тем, чтобы платформа работала быстро и стабильно",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
];

const advantages = [
  {
    icon: "Shield",
    title: "Безопасность",
    description: "Все ключи лицензионные, полная защита покупок",
  },
  {
    icon: "Zap",
    title: "Моментальная доставка",
    description: "Получай ключи сразу после оплаты на email",
  },
  {
    icon: "Headphones",
    title: "Поддержка 24/7",
    description: "Всегда готовы помочь с любыми вопросами",
  },
  {
    icon: "Tag",
    title: "Лучшие цены",
    description: "Регулярные скидки и эксклюзивные предложения",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gaming-blue to-gaming-cyan text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-montserrat font-bold mb-6">
              О магазине КиП
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Мы создали КиП для настоящих геймеров — место, где можно найти
              любую игру по честной цене с гарантией качества
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-gaming-yellow">
                    {stat.number}
                  </div>
                  <div className="text-sm opacity-80">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-montserrat font-bold text-gaming-dark mb-8">
              Наша миссия
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-12">
              Мы верим, что каждый геймер заслуживает доступа к лучшим играм без
              переплат. КиП — это не просто магазин, это сообщество
              единомышленников, где качество, скорость и честность стоят на
              первом месте.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advantages.map((advantage, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-all duration-300"
                >
                  <CardContent className="p-6">
                    <div className="bg-gaming-light p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                      <Icon
                        name={advantage.icon as any}
                        className="h-8 w-8 text-gaming-blue"
                      />
                    </div>
                    <h3 className="font-montserrat font-bold text-gaming-dark mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {advantage.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 bg-gaming-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-montserrat font-bold text-gaming-dark mb-4">
              Команда КиП
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Мы — команда увлеченных геймеров, которые создают лучший сервис
              для покупки игр
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-8">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="font-montserrat font-bold text-gaming-dark mb-1">
                    {member.name}
                  </h3>
                  <p className="text-gaming-blue font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-montserrat font-bold text-gaming-dark mb-6">
              Есть вопросы?
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Мы всегда рады помочь! Свяжись с нами любым удобным способом
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-gaming-blue hover:bg-gaming-cyan" size="lg">
                <Icon name="MessageCircle" className="h-5 w-5 mr-2" />
                Онлайн чат
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gaming-blue text-gaming-blue hover:bg-gaming-light"
              >
                <Icon name="Mail" className="h-5 w-5 mr-2" />
                support@kip.ru
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gaming-blue text-gaming-blue hover:bg-gaming-light"
              >
                <Icon name="Phone" className="h-5 w-5 mr-2" />8 (800) 555-35-35
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
