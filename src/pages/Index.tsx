import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const slopes = [
    { name: 'Зеленая трасса', difficulty: 'Легкая', length: '2.5 км', lift: 'Подъемник №1', status: 'Открыта' },
    { name: 'Синяя трасса', difficulty: 'Средняя', length: '3.8 км', lift: 'Подъемник №2', status: 'Открыта' },
    { name: 'Красная трасса', difficulty: 'Сложная', length: '4.2 км', lift: 'Подъемник №3', status: 'Открыта' },
    { name: 'Черная трасса', difficulty: 'Экстремальная', length: '5.1 км', lift: 'Подъемник №4', status: 'Закрыта' }
  ];

  const facilities = [
    { icon: 'Mountain', title: 'Трассы', description: '15 трасс разной сложности для всех уровней' },
    { icon: 'Cable', title: 'Подъемники', description: '8 современных подъемников с высокой пропускной способностью' },
    { icon: 'Hotel', title: 'Отели', description: '5 комфортабельных отелей с видом на горы' },
    { icon: 'Utensils', title: 'Рестораны', description: 'Рестораны и кафе с панорамными видами' },
    { icon: 'GraduationCap', title: 'Школа', description: 'Профессиональные инструкторы для детей и взрослых' },
    { icon: 'Sparkles', title: 'Развлечения', description: 'Сноупарк, каток, сауна и spa-центр' }
  ];

  const prices = [
    { name: 'Дневной ски-пасс', price: '2 500 ₽', duration: '1 день', description: 'Полный день катания на всех открытых трассах' },
    { name: 'Недельный абонемент', price: '15 000 ₽', duration: '7 дней', description: 'Экономия 30% при покупке на неделю' },
    { name: 'Сезонный пасс', price: '45 000 ₽', duration: 'Сезон', description: 'Безлимитное катание весь сезон с привилегиями' }
  ];

  const reviews = [
    { name: 'Елена М.', text: 'Прекрасный курорт! Отличные трассы, дружелюбный персонал. Обязательно вернемся!', rating: 5 },
    { name: 'Игорь П.', text: 'Семейный отдых удался на все 100%. Детям понравилась горнолыжная школа.', rating: 5 },
    { name: 'Анна К.', text: 'Великолепные виды, современные подъемники. Лучший курорт в регионе!', rating: 5 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
              <Icon name="Mountain" className="text-white" size={28} />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">Снежная Гора</div>
              <div className="text-xs text-muted-foreground">Горнолыжный курорт</div>
            </div>
          </div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => setActiveTab('home')} className={`hover:text-primary transition-colors ${activeTab === 'home' ? 'text-primary font-semibold' : 'text-foreground'}`}>Главная</button>
            <button onClick={() => setActiveTab('slopes')} className={`hover:text-primary transition-colors ${activeTab === 'slopes' ? 'text-primary font-semibold' : 'text-foreground'}`}>Трассы</button>
            <button onClick={() => setActiveTab('facilities')} className={`hover:text-primary transition-colors ${activeTab === 'facilities' ? 'text-primary font-semibold' : 'text-foreground'}`}>Удобства</button>
            <button onClick={() => setActiveTab('prices')} className={`hover:text-primary transition-colors ${activeTab === 'prices' ? 'text-primary font-semibold' : 'text-foreground'}`}>Цены</button>
            <button onClick={() => setActiveTab('contacts')} className={`hover:text-primary transition-colors ${activeTab === 'contacts' ? 'text-primary font-semibold' : 'text-foreground'}`}>Контакты</button>
          </nav>
          <Button className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (800) 555-35-35
          </Button>
        </div>
      </header>

      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100 -z-10"></div>
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-6 animate-fade-in">
              <Badge className="bg-primary text-white">Зимний сезон 2024-2025</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight text-foreground">
                Снежная<br />
                <span className="text-primary">Гора</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Первоклассный горнолыжный курорт для всей семьи. 15 трасс, 8 подъемников, профессиональная школа и незабываемые впечатления!
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Ticket" size={20} className="mr-2" />
                  Купить ски-пасс
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Забронировать
                </Button>
              </div>
              <div className="flex gap-8 pt-4">
                <div>
                  <div className="text-4xl font-bold text-primary">15</div>
                  <div className="text-sm text-muted-foreground">Трасс</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">8</div>
                  <div className="text-sm text-muted-foreground">Подъемников</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">2500м</div>
                  <div className="text-sm text-muted-foreground">Высота</div>
                </div>
              </div>
            </div>
            <div className="relative h-[500px] animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/e58805e7-3918-45a7-b97e-0f64a130a8d0.jpg" 
                alt="Ski resort" 
                className="w-full h-full object-cover rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="slopes" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">Трассы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Наши трассы</h2>
            <p className="text-muted-foreground text-lg">От зеленых для новичков до черных для профи</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slopes.map((slope, index) => (
              <Card key={index} className="hover-scale">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-xl">{slope.name}</CardTitle>
                    <Badge className={slope.status === 'Открыта' ? 'bg-green-500' : 'bg-red-500'}>
                      {slope.status}
                    </Badge>
                  </div>
                  <CardDescription className="text-lg font-semibold text-primary">{slope.difficulty}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Route" size={18} className="text-primary" />
                    <span>Длина: {slope.length}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Cable" size={18} className="text-primary" />
                    <span>{slope.lift}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="facilities" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">Удобства</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Инфраструктура курорта</h2>
            <p className="text-muted-foreground text-lg">Всё для вашего комфорта и отличного отдыха</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {facilities.map((facility, index) => (
              <Card key={index} className="text-center p-6 hover-scale border-2 hover:border-primary transition-all">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={facility.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">{facility.title}</h3>
                <p className="text-muted-foreground">{facility.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">Галерея</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Атмосфера курорта</h2>
            <p className="text-muted-foreground text-lg">Посмотрите, как выглядит отдых у нас</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative h-[400px] group overflow-hidden rounded-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/963433b4-1574-4555-994d-df31af3769f0.jpg" 
                alt="Ski lift" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Современные подъемники</h3>
                  <p className="text-white/90">Быстрый и комфортный подъем на вершину</p>
                </div>
              </div>
            </div>
            <div className="relative h-[400px] group overflow-hidden rounded-2xl">
              <img 
                src="https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/9a4172c3-e4e0-4415-acdd-b5d39012489f.jpg" 
                alt="Hotel" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Уютные отели</h3>
                  <p className="text-white/90">Комфорт и тепло после дня на склонах</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices" className="py-16 px-4 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">Цены</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Ски-пассы</h2>
            <p className="text-muted-foreground text-lg">Выберите оптимальный вариант для себя</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {prices.map((price, index) => (
              <Card key={index} className={`p-8 hover-scale ${index === 1 ? 'border-2 border-primary shadow-xl' : ''}`}>
                {index === 1 && <Badge className="mb-4 bg-primary">Популярный</Badge>}
                <h3 className="text-2xl font-bold mb-2 text-foreground">{price.name}</h3>
                <div className="text-4xl font-bold text-primary mb-2">{price.price}</div>
                <div className="text-muted-foreground mb-4">{price.duration}</div>
                <p className="text-muted-foreground mb-6">{price.description}</p>
                <Button className="w-full" variant={index === 1 ? 'default' : 'outline'}>
                  Купить
                  <Icon name="ShoppingCart" size={18} className="ml-2" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Что говорят гости</h2>
            <p className="text-muted-foreground text-lg">Реальные впечатления наших посетителей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">{review.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon name="User" size={20} className="text-primary" />
                  </div>
                  <span className="font-semibold text-foreground">{review.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge variant="outline" className="border-primary text-primary mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Свяжитесь с нами</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">Телефон</div>
                    <div className="text-muted-foreground">+7 (800) 555-35-35</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">Email</div>
                    <div className="text-muted-foreground">info@snezhnaya-gora.ru</div>
                    <div className="text-muted-foreground">booking@snezhnaya-gora.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1 text-foreground">Адрес</div>
                    <div className="text-muted-foreground">Краснодарский край, Красная Поляна</div>
                    <div className="text-muted-foreground">Ежедневно с 8:00 до 22:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Забронировать отдых</h3>
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Ваше имя" 
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input 
                    type="date" 
                    className="px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input 
                    type="number" 
                    placeholder="Кол-во гостей" 
                    className="px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Комментарий" 
                    rows={3}
                    className="w-full px-4 py-3 bg-background border border-input rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  />
                </div>
                <Button size="lg" className="w-full">
                  Отправить заявку
                  <Icon name="Send" size={18} className="ml-2" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Icon name="Mountain" className="text-white" size={24} />
              </div>
              <div>
                <div className="text-xl font-bold">Снежная Гора</div>
                <div className="text-xs text-white/70">Горнолыжный курорт</div>
              </div>
            </div>
            <div className="text-white/70 text-center">
              © 2024 Снежная Гора. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-primary">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
