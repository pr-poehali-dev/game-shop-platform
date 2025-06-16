import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gaming-dark text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-gaming-blue to-gaming-cyan p-2 rounded-lg">
                <Icon name="Gamepad2" className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-montserrat font-bold">КиП</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Ваш надежный магазин видеоигр и игрового оборудования. Лучшие
              цены, мгновенная доставка, круглосуточная поддержка.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Mail"
                className="h-5 w-5 text-gaming-cyan cursor-pointer hover:text-gaming-yellow transition-colors"
              />
              <Icon
                name="Phone"
                className="h-5 w-5 text-gaming-cyan cursor-pointer hover:text-gaming-yellow transition-colors"
              />
              <Icon
                name="MessageCircle"
                className="h-5 w-5 text-gaming-cyan cursor-pointer hover:text-gaming-yellow transition-colors"
              />
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-gaming-cyan transition-colors"
                >
                  PC игры
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gaming-cyan transition-colors"
                >
                  PlayStation
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gaming-cyan transition-colors"
                >
                  Xbox
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gaming-cyan transition-colors"
                >
                  Nintendo Switch
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gaming-cyan transition-colors"
                >
                  Аксессуары
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-gaming-cyan transition-colors"
                >
                  Предзаказы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gaming-cyan transition-colors"
                >
                  Подписки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gaming-cyan transition-colors"
                >
                  Акции
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gaming-cyan transition-colors"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-gaming-cyan transition-colors"
                >
                  Поддержка
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-montserrat font-semibold mb-4">Контакты</h4>
            <div className="space-y-2 text-sm text-gray-300">
              <p>📧 support@kip-games.ru</p>
              <p>📞 8 (800) 555-0123</p>
              <p>🕒 Поддержка 24/7</p>
              <p>📍 Москва, Россия</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © 2024 КиП. Все права защищены.
          </p>
          <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
            <a href="#" className="hover:text-gaming-cyan transition-colors">
              Политика конфиденциальности
            </a>
            <a href="#" className="hover:text-gaming-cyan transition-colors">
              Условия использования
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
