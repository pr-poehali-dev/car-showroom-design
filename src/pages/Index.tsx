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
      image: 'https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/e2501d67-e7a5-41be-91ee-9acec9c3534f.jpg',
      features: ['5000 затяжек', 'LED подсветка', 'Type-C зарядка'],
      badge: 'Хит продаж'
    },
    {
      id: 2,
      name: 'Cyber Smoke X',
      category: 'devices',
      price: '2 490 ₽',
      image: 'https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/e2501d67-e7a5-41be-91ee-9acec9c3534f.jpg',
      features: ['3000 затяжек', 'Компактный', 'RGB подсветка']
    },
    {
      id: 3,
      name: 'Liquid Neon Mix',
      category: 'liquids',
      price: '890 ₽',
      image: 'https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/e2501d67-e7a5-41be-91ee-9acec9c3534f.jpg',
      features: ['30ml', 'Salt nicotine', 'Премиум вкус']
    },
    {
      id: 4,
      name: 'Ultra Pod Max',
      category: 'devices',
      price: '4 590 ₽',
      image: 'https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/e2501d67-e7a5-41be-91ee-9acec9c3534f.jpg',
      features: ['8000 затяжек', 'Двойная спираль', 'Умный чип'],
      badge: 'Новинка'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все товары', icon: 'Grid3x3' },
    { id: 'devices', name: 'Устройства', icon: 'Cpu' },
    { id: 'liquids', name: 'Жидкости', icon: 'Droplet' },
    { id: 'accessories', name: 'Аксессуары', icon: 'Package' }
  ];

  const features = [
    { icon: 'Zap', title: 'Быстрая доставка', description: 'За 2 часа по городу' },
    { icon: 'Shield', title: '100% оригинал', description: 'Гарантия подлинности' },
    { icon: 'Gift', title: 'Бонусы', description: 'Кешбэк до 10%' },
    { icon: 'Clock', title: '24/7', description: 'Работаем круглосуточно' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-x-hidden">
      <div 
        className="fixed inset-0 opacity-30 pointer-events-none"
        style={{ 
          backgroundImage: 'url(https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/29abdfbb-8072-4c37-8984-3aeac503c2d1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(10px)'
        }}
      />
      
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-primary/30">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 flex items-center justify-center">
              <Icon name="Gun" size={32} style={{ color: '#00FF41', filter: 'drop-shadow(0 0 10px #00FF41)' }} />
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight">
                <span style={{ color: '#FF10F0', textShadow: '0 0 20px #FF10F0' }}>Дымо</span>
                <span style={{ color: '#00FF41', textShadow: '0 0 20px #00FF41' }}>Gun</span>
              </div>
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
            <Button className="hidden md:flex bg-primary text-black hover:bg-primary/90 font-semibold">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
          </div>
        </div>
      </header>

      <section className="pt-32 pb-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <Badge className="bg-gradient-to-r from-primary to-secondary text-black border-0 px-4 py-1 text-sm font-semibold">
                Новая коллекция 2024
              </Badge>
              
              <div>
                <h1 className="text-7xl md:text-9xl font-black leading-none mb-6">
                  <span style={{ color: '#FF10F0', textShadow: '0 0 40px #FF10F0, 0 0 80px #FF10F0' }}>Дымо</span>
                  <div className="flex items-center gap-4 mt-2">
                    <Icon name="Gun" size={80} style={{ color: '#00FF41', filter: 'drop-shadow(0 0 30px #00FF41)' }} />
                    <span style={{ color: '#00FF41', textShadow: '0 0 40px #00FF41, 0 0 80px #00FF41' }}>Gun</span>
                  </div>
                </h1>
                
                <p className="text-xl text-gray-300 leading-relaxed">
                  Твой надежный вейп-шоп с оригинальной продукцией и моментальной доставкой по городу
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary text-black hover:bg-primary/90 font-bold text-lg px-8">
                  Смотреть каталог
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 font-bold">
                  <Icon name="Phone" className="mr-2" size={20} />
                  Позвонить
                </Button>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-secondary/30 rounded-3xl blur-3xl" />
              <img 
                src="https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/e0ee323e-7639-4e79-96ec-0c4628f748bf.jpg"
                alt="Neon Gun"
                className="relative rounded-3xl shadow-2xl shadow-primary/50 w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} className="bg-black/60 border-primary/30 backdrop-blur-sm hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                    <Icon name={feature.icon as any} size={24} className="text-black" />
                  </div>
                  <h3 className="font-bold text-white">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 relative">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-black mb-4">
              <span style={{ color: '#FF10F0', textShadow: '0 0 30px #FF10F0' }}>Наш </span>
              <span style={{ color: '#00FF41', textShadow: '0 0 30px #00FF41' }}>каталог</span>
            </h2>
            <p className="text-xl text-gray-400">Только оригинальная продукция с гарантией</p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map(cat => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? 'default' : 'outline'}
                className={activeCategory === cat.id 
                  ? 'bg-primary text-black hover:bg-primary/90 font-semibold' 
                  : 'border-primary/50 text-primary hover:bg-primary/10'}
                onClick={() => setActiveCategory(cat.id)}
              >
                <Icon name={cat.icon as any} size={18} className="mr-2" />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <Card key={product.id} className="bg-black/60 border-primary/30 backdrop-blur-sm hover:border-primary transition-all hover:shadow-2xl hover:shadow-primary/30 group overflow-hidden">
                <div className="relative overflow-hidden">
                  {product.badge && (
                    <Badge className="absolute top-3 right-3 z-10 bg-secondary text-white border-0">
                      {product.badge}
                    </Badge>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{product.name}</CardTitle>
                  <CardDescription className="text-2xl font-bold text-primary">{product.price}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="border-primary/50 text-gray-300 text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary text-black hover:opacity-90 font-bold">
                    <Icon name="ShoppingCart" size={18} className="mr-2" />
                    В корзину
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 relative bg-gradient-to-b from-transparent to-black/50">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/40 rounded-3xl blur-2xl" />
              <img 
                src="https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/29abdfbb-8072-4c37-8984-3aeac503c2d1.jpg"
                alt="Smoke"
                className="relative rounded-3xl shadow-2xl"
              />
            </div>
            
            <div className="space-y-6">
              <h2 className="text-5xl font-black">
                <span style={{ color: '#00FF41', textShadow: '0 0 30px #00FF41' }}>Почему </span>
                <span style={{ color: '#FF10F0', textShadow: '0 0 30px #FF10F0' }}>мы?</span>
              </h2>
              
              <div className="space-y-4">
                <div className="flex gap-4 p-4 bg-black/40 border border-primary/20 rounded-xl backdrop-blur-sm">
                  <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white mb-1">Только оригинал</h3>
                    <p className="text-gray-400">Все товары сертифицированы и имеют гарантию производителя</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-black/40 border border-primary/20 rounded-xl backdrop-blur-sm">
                  <Icon name="Truck" className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white mb-1">Быстрая доставка</h3>
                    <p className="text-gray-400">Доставим за 2 часа по городу или бесплатно при заказе от 3000₽</p>
                  </div>
                </div>
                
                <div className="flex gap-4 p-4 bg-black/40 border border-primary/20 rounded-xl backdrop-blur-sm">
                  <Icon name="Sparkles" className="text-primary flex-shrink-0" size={24} />
                  <div>
                    <h3 className="font-bold text-white mb-1">Программа лояльности</h3>
                    <p className="text-gray-400">Получайте кешбэк и скидки на повторные покупки до 10%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contacts" className="py-16 px-4 relative border-t border-primary/30 bg-black/80">
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="text-3xl font-bold">
                <span style={{ color: '#FF10F0', textShadow: '0 0 15px #FF10F0' }}>Дымо</span>
                <span style={{ color: '#00FF41', textShadow: '0 0 15px #00FF41' }}>Gun</span>
              </div>
              <p className="text-gray-400">Ваш надежный вейп-шоп с оригинальной продукцией</p>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Навигация</h3>
              <div className="space-y-2 text-gray-400">
                <a href="#catalog" className="block hover:text-primary transition-colors">Каталог</a>
                <a href="#about" className="block hover:text-primary transition-colors">О нас</a>
                <a href="#delivery" className="block hover:text-primary transition-colors">Доставка</a>
                <a href="#contacts" className="block hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Контакты</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={16} className="text-primary" />
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={16} className="text-primary" />
                  <span>info@dymogun.ru</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} className="text-primary" />
                  <span>г. Москва, ул. Примерная 1</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-bold text-white mb-4">Режим работы</h3>
              <div className="space-y-2 text-gray-400">
                <p>Пн-Вс: 10:00 - 22:00</p>
                <p className="text-primary font-semibold">Доставка 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-primary/20 text-center text-gray-500">
            <p>&copy; 2024 ДымоGun. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
