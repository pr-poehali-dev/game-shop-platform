import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-gaming-blue via-gaming-cyan to-primary py-16 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-montserrat font-bold leading-tight">
              Мир игр в <span className="text-gaming-yellow">КиП</span>
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed">
              Тысячи игр для ПК и консолей, мгновенная доставка ключей, лучшие
              цены и эксклюзивные предложения для настоящих геймеров.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gaming-yellow hover:bg-yellow-500 text-gaming-dark font-semibold"
              >
                <Icon name="Play" className="h-5 w-5 mr-2" />
                Смотреть каталог
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gaming-blue"
              >
                <Icon name="Gift" className="h-5 w-5 mr-2" />
                Акции недели
              </Button>
            </div>
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-montserral font-bold">5000+</div>
                <div className="text-sm text-blue-200">Игр в каталоге</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-montserral font-bold">24/7</div>
                <div className="text-sm text-blue-200">Поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-montserral font-bold">99%</div>
                <div className="text-sm text-blue-200">Довольных клиентов</div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop&crop=center"
              alt="Gaming Setup"
              className="rounded-2xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300"
            />
            <div className="absolute -top-4 -right-4 bg-gaming-red text-white px-4 py-2 rounded-full font-semibold animate-pulse">
              -50% 🔥
            </div>
          </div>
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-gaming-yellow rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gaming-red rounded-full"></div>
      </div>
    </section>
  );
};

export default Hero;
