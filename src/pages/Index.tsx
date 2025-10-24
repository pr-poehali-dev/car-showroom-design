import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedSection, setSelectedSection] = useState('home');

  const cars = [
    {
      id: 1,
      name: 'Mercedes-AMG GT',
      price: '12 500 000 ₽',
      year: 2024,
      power: '585 л.с.',
      acceleration: '3.6 сек',
      image: 'https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/e8a1a09f-c493-4c3d-873d-c60e5ac5ba9d.jpg'
    },
    {
      id: 2,
      name: 'BMW M5 Competition',
      price: '10 800 000 ₽',
      year: 2024,
      power: '625 л.с.',
      acceleration: '3.3 сек',
      image: 'https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/3ac99afc-63da-4723-909b-4691477e1979.jpg'
    },
    {
      id: 3,
      name: 'Porsche 911 Turbo S',
      price: '18 900 000 ₽',
      year: 2024,
      power: '650 л.с.',
      acceleration: '2.7 сек',
      image: 'https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/ff84d8dc-68b5-4015-90a4-086af2fbcac3.jpg'
    }
  ];

  const reviews = [
    { name: 'Александр К.', text: 'Отличный сервис! Помогли с выбором, оформили все документы быстро. Очень доволен покупкой BMW M5.', rating: 5 },
    { name: 'Михаил В.', text: 'Профессиональный подход. Trade-in прошел гладко, получил справедливую оценку. Рекомендую!', rating: 5 },
    { name: 'Дмитрий С.', text: 'Превосходное обслуживание. Кредит одобрили за день. Теперь владелец Porsche 911!', rating: 5 }
  ];

  const services = [
    { icon: 'Car', title: 'Trade-in', description: 'Обмен вашего автомобиля по выгодной цене' },
    { icon: 'CreditCard', title: 'Кредитование', description: 'Выгодные условия от ведущих банков' },
    { icon: 'Wrench', title: 'Сервис', description: 'Полное техническое обслуживание' },
    { icon: 'Shield', title: 'Гарантия', description: 'Расширенная гарантия на все автомобили' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Icon name="Car" className="text-primary-foreground" size={24} />
            </div>
            <span className="text-2xl font-bold">PREMIUM AUTO</span>
          </div>
          <nav className="hidden md:flex gap-8">
            <button onClick={() => setSelectedSection('home')} className={`hover:text-primary transition-colors ${selectedSection === 'home' ? 'text-primary' : ''}`}>Главная</button>
            <button onClick={() => setSelectedSection('catalog')} className={`hover:text-primary transition-colors ${selectedSection === 'catalog' ? 'text-primary' : ''}`}>Каталог</button>
            <button onClick={() => setSelectedSection('services')} className={`hover:text-primary transition-colors ${selectedSection === 'services' ? 'text-primary' : ''}`}>Сервис</button>
            <button onClick={() => setSelectedSection('about')} className={`hover:text-primary transition-colors ${selectedSection === 'about' ? 'text-primary' : ''}`}>О нас</button>
            <button onClick={() => setSelectedSection('reviews')} className={`hover:text-primary transition-colors ${selectedSection === 'reviews' ? 'text-primary' : ''}`}>Отзывы</button>
            <button onClick={() => setSelectedSection('contacts')} className={`hover:text-primary transition-colors ${selectedSection === 'contacts' ? 'text-primary' : ''}`}>Контакты</button>
          </nav>
          <Button variant="default" className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            +7 (495) 123-45-67
          </Button>
        </div>
      </header>

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center min-h-[600px]">
            <div className="space-y-6 animate-fade-in">
              <Badge variant="outline" className="border-primary text-primary">Премиум автосалон</Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Автомобили<br />
                <span className="text-primary">премиум-класса</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Эксклюзивные модели от ведущих производителей. Полный сервис и индивидуальный подход к каждому клиенту.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="text-lg px-8" onClick={() => setSelectedSection('catalog')}>
                  Смотреть каталог
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Позвонить
                </Button>
              </div>
            </div>
            <div className="relative h-[500px] animate-scale-in">
              <img 
                src={cars[0].image} 
                alt="Premium car" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">Каталог</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Наши автомобили</h2>
            <p className="text-muted-foreground text-lg">Эксклюзивная коллекция премиум автомобилей</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {cars.map((car) => (
              <Card key={car.id} className="overflow-hidden hover-scale group">
                <div className="relative h-64 overflow-hidden">
                  <img src={car.image} alt={car.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">{car.year}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">{car.name}</CardTitle>
                  <CardDescription className="text-xl font-bold text-primary">{car.price}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Zap" size={18} className="text-primary" />
                      <span>{car.power}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Gauge" size={18} className="text-primary" />
                      <span>{car.acceleration}</span>
                    </div>
                  </div>
                  <Button className="w-full" size="lg">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">Сервис</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Полный спектр услуг</h2>
            <p className="text-muted-foreground text-lg">Всё для вашего комфорта и удобства</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center p-6 hover-scale">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon as any} size={32} className="text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="outline" className="border-primary text-primary mb-4">О компании</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Premium Auto</h2>
              <p className="text-muted-foreground text-lg mb-6">
                Мы специализируемся на продаже премиальных автомобилей ведущих мировых брендов. Наша команда профессионалов с многолетним опытом поможет вам выбрать идеальный автомобиль.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">15+</div>
                  <div className="text-sm text-muted-foreground">Лет на рынке</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Довольных клиентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Гарантия качества</div>
                </div>
              </div>
              <Button size="lg" variant="outline">
                Узнать больше
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Button>
            </div>
            <div className="relative h-[400px]">
              <img 
                src="https://cdn.poehali.dev/projects/e2ab5612-346c-4fa7-8a7f-a192a299a907/files/3ac99afc-63da-4723-909b-4691477e1979.jpg" 
                alt="About us" 
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="reviews" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <Badge variant="outline" className="border-primary text-primary mb-4">Отзывы</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Что говорят наши клиенты</h2>
            <p className="text-muted-foreground text-lg">Реальные отзывы реальных людей</p>
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
                  <span className="font-semibold">{review.name}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <Badge variant="outline" className="border-primary text-primary mb-4">Контакты</Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Свяжитесь с нами</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Телефон</div>
                    <div className="text-muted-foreground">+7 (495) 123-45-67</div>
                    <div className="text-muted-foreground">+7 (495) 765-43-21</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Email</div>
                    <div className="text-muted-foreground">info@premium-auto.ru</div>
                    <div className="text-muted-foreground">sales@premium-auto.ru</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Адрес</div>
                    <div className="text-muted-foreground">г. Москва, Ленинградский проспект, 36</div>
                    <div className="text-muted-foreground">Ежедневно с 9:00 до 21:00</div>
                  </div>
                </div>
              </div>
            </div>
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
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
                    placeholder="Сообщение" 
                    rows={4}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
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

      <footer className="bg-black border-t border-border py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Car" className="text-primary-foreground" size={20} />
              </div>
              <span className="text-xl font-bold">PREMIUM AUTO</span>
            </div>
            <div className="text-muted-foreground text-center">
              © 2024 Premium Auto. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
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
