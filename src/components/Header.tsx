import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-gaming-blue to-gaming-cyan p-2 rounded-lg">
              <Icon name="Gamepad2" className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-montserrat font-bold text-gaming-dark">
              КиП
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gaming-blue transition-colors"
            >
              Каталог
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gaming-blue transition-colors"
            >
              Акции
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gaming-blue transition-colors"
            >
              Предзаказы
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gaming-blue transition-colors"
            >
              Подписки
            </a>
          </nav>

          {/* Search & Actions */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-gray-100 rounded-lg px-3 py-2">
              <Icon name="Search" className="h-4 w-4 text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Поиск игр..."
                className="bg-transparent outline-none text-sm w-48"
              />
            </div>
            <Button variant="outline" size="sm">
              <Icon name="User" className="h-4 w-4 mr-2" />
              Войти
            </Button>
            <Button size="sm" className="bg-gaming-blue hover:bg-gaming-cyan">
              <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
