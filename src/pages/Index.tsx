import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Neon Pod Pro',
      category: 'devices',
      price: '3 990 ₽',
      image: 'https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/47b05a65-eca0-442a-bd55-b0c16d07d9c8.jpg',
      features: ['5000 затяжек', 'LED подсветка', 'Type-C зарядка']
    },
    {
      id: 2,
      name: 'Liquid Mix Pack',
      category: 'liquids',
      price: '1 290 ₽',
      image: 'https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/609a81c4-7855-45d9-8a74-2f3573ee91f5.jpg',
      features: ['30ml', 'Salt nicotine', '5 вкусов']
    },
    {
      id: 3,
      name: 'Cyber Mod X',
      category: 'devices',
      price: '7 490 ₽',
      image: 'https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/9b886fd0-53d7-4c19-90f5-8367f6b703e3.jpg',
      features: ['200W мощность', 'OLED дисплей', 'Умные режимы']
    }
  ];

  const features = [
    { icon: 'Zap', title: 'Быстрая доставка', description: 'Доставим за 2 часа по городу' },
    { icon: 'Shield', title: 'Оригинальная продукция', description: '100% гарантия подлинности' },
    { icon: 'Gift', title: 'Бонусная программа', description: 'Кешбэк до 10% на каждую покупку' },
    { icon: 'Clock', title: 'Работаем 24/7', description: 'Круглосуточная поддержка клиентов' }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3x3' },
    { id: 'devices', name: 'Устройства', icon: 'Smartphone' },
    { id: 'liquids', name: 'Жидкости', icon: 'Droplet' },
    { id: 'accessories', name: 'Аксессуары', icon: 'Package' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background -z-10"></div>
      
      <header className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Icon name="Sparkles" className="text-black" size={28} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur-lg opacity-50"></div>
            </div>
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ДымоGun</div>
              <div className="text-xs text-muted-foreground">Vape Shop</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#catalog" className="hover:text-primary transition-colors">Каталог</a>
            <a href="#about" className="hover:text-primary transition-colors">О нас</a>
            <a href="#delivery" className="hover:text-primary transition-colors">Доставка</a>
            <a href="#contacts" className="hover:text-primary transition-colors">Контакты</a>
          </nav>
          <div className="flex gap-3">
            <Button variant="ghost" size="icon" className="hover:text-primary">
              <Icon name="ShoppingCart" size={20} />
            </Button>
            <Button className="hidden md:flex bg-gradient-to-r from-primary to-accent text-black hover:opacity-90">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary to-accent text-black border-0">
                Новая коллекция 2024
              </Badge>
              <h1 className="text-6xl md:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                  ДымоGun
                </span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Твой надежный вейп-шоп с оригинальной продукцией и моментальной доставкой. Широкий выбор устройств и жидкостей.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8 bg-gradient-to-r from-primary to-accent text-black hover:opacity-90 shadow-lg shadow-primary/50">
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-primary text-primary hover:bg-primary hover:text-black">
                  <Icon name="Percent" size={20} className="mr-2" />
                  Акции
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Товаров</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
                <div>
                  <div className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">100%</div>
                  <div className="text-sm text-muted-foreground">Оригинал</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 rounded-2xl blur-2xl"></div>
              <img 
                src={products[0].image}
                alt="Vape device" 
                className="relative w-full h-full object-cover rounded-2xl shadow-2xl shadow-primary/20"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">Каталог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наша продукция</h2>
            <p className="text-muted-foreground text-lg">Только оригинальные устройства и жидкости</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                className={activeCategory === cat.id 
                  ? "bg-gradient-to-r from-primary to-accent text-black border-0" 
                  : "border-primary/30 hover:border-primary"}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover-scale group bg-card border-2 border-border hover:border-primary transition-all">
                <div className="relative h-80 overflow-hidden bg-black">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{product.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">{product.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-accent text-black hover:opacity-90" size="lg">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">Преимущества</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Почему выбирают нас</h2>
            <p className="text-muted-foreground text-lg">Качество и сервис на высшем уровне</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover-scale bg-card border-2 border-border hover:border-primary transition-all">
                <div className="relative w-16 h-16 mx-auto mb-4">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-lg opacity-50"></div>
                  <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center">
                    <Icon name={feature.icon as any} size={32} className="text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="delivery" className="py-16 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-primary text-primary mb-4">Доставка</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Быстро и удобно</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Truck" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Курьерская доставка</h3>
                    <p className="text-muted-foreground">Доставим за 2 часа по городу. Бесплатно от 3000₽</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Самовывоз</h3>
                    <p className="text-muted-foreground">3 точки самовывоза в удобных локациях</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="CreditCard" size={24} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Удобная оплата</h3>
                    <p className="text-muted-foreground">Наличные, карта, СБП, Apple Pay, Google Pay</p>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-card border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Расчет стоимости доставки</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваш адрес" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="text" 
                    placeholder="Сумма заказа" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-black hover:opacity-90">
                  Рассчитать
                  <Icon name="Calculator" size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge variant="outline" className="border-primary text-primary mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (999) 123-45-67</div>
                    <div className="text-muted-foreground">+7 (999) 765-43-21</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@dymogun.ru</div>
                    <div className="text-muted-foreground">shop@dymogun.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, ул. Арбат, 10</div>
                    <div className="text-muted-foreground">Ежедневно с 10:00 до 22:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 bg-card border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Задать вопрос</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Ваш вопрос" 
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button size="lg" className="w-full bg-gradient-to-r from-primary to-accent text-black hover:opacity-90">
                  Отправить
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-black border-t border-primary/20 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Icon name="Sparkles" className="text-black" size={24} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-lg blur-lg opacity-50"></div>
              </div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">ДымоGun</div>
                <div className="text-xs text-muted-foreground">Vape Shop</div>
              </div>
            </div>
            <div className="text-muted-foreground text-center text-sm">
              © 2024 ДымоGun. Продажа товаров лицам старше 18 лет.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="Send" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-primary">
                <Icon name="MessageCircle" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
