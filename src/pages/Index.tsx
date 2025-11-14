import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const services = [
    {
      icon: 'Target',
      title: 'Стратегия',
      description: 'Глубокий анализ рынка и разработка индивидуальной стратегии продвижения вашего бренда',
    },
    {
      icon: 'Megaphone',
      title: 'Реклама',
      description: 'Комплексные рекламные кампании с гарантированным результатом и полным сопровождением',
    },
    {
      icon: 'PenTool',
      title: 'Брендинг',
      description: 'Создание уникального визуального стиля и позиционирования для вашего бизнеса',
    },
    {
      icon: 'TrendingUp',
      title: 'Аналитика',
      description: 'Детальная аналитика всех показателей с еженедельными отчётами и рекомендациями',
    },
    {
      icon: 'Users',
      title: 'SMM',
      description: 'Управление социальными сетями, создание контента и взаимодействие с аудиторией',
    },
    {
      icon: 'Search',
      title: 'SEO',
      description: 'Продвижение в поисковых системах и оптимизация для максимальной видимости',
    },
  ];

  const pricing = [
    {
      service: 'Стратегический аудит',
      price: 'от 150 000 ₽',
      duration: '2-3 недели',
    },
    {
      service: 'Комплексная рекламная кампания',
      price: 'от 250 000 ₽/мес',
      duration: 'минимум 3 месяца',
    },
    {
      service: 'Разработка бренда',
      price: 'от 300 000 ₽',
      duration: '4-6 недель',
    },
    {
      service: 'SMM-сопровождение',
      price: 'от 120 000 ₽/мес',
      duration: 'от 6 месяцев',
    },
    {
      service: 'SEO-продвижение',
      price: 'от 180 000 ₽/мес',
      duration: 'от 6 месяцев',
    },
    {
      service: 'Аналитика и отчётность',
      price: 'от 80 000 ₽/мес',
      duration: 'от 3 месяцев',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: 'Заявка отправлена',
      description: 'Мы свяжемся с вами в ближайшее время',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Sparkles" className="text-accent" size={28} />
            <span className="text-2xl font-bold tracking-tight">TAURUS</span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-sm font-medium hover:text-accent transition-colors">
              Услуги
            </a>
            <a href="#pricing" className="text-sm font-medium hover:text-accent transition-colors">
              Прайс
            </a>
            <a href="#contact" className="text-sm font-medium hover:text-accent transition-colors">
              Контакты
            </a>
          </nav>
          <Button className="hidden md:inline-flex">
            <a href="#contact">Начать проект</a>
          </Button>
        </div>
      </header>

      <section className="pt-40 pb-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 animate-in fade-in duration-1000">
            <div className="inline-block">
              <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
                Маркетинговое агентство премиум-класса
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1]">
              Превращаем бренды
              <br />в <span className="text-accent">легенды</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
              ИП Сальникова Тамара Леонидовна • Комплексный маркетинг для амбициозных компаний
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" className="text-base h-14 px-8">
                <a href="#contact">Обсудить проект</a>
              </Button>
              <Button size="lg" variant="outline" className="text-base h-14 px-8">
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Комплексные решения для роста вашего бизнеса
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Icon name={service.icon} className="text-accent" size={28} />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Прайс-лист</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Прозрачные цены на профессиональные услуги
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {pricing.map((item, index) => (
              <Card key={index} className="border-border hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{item.service}</CardTitle>
                  <CardDescription className="text-sm">{item.duration}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-accent">{item.price}</div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto bg-primary text-primary-foreground border-0">
              <CardContent className="pt-8 pb-8 px-6">
                <div className="flex items-center gap-3 justify-center mb-4">
                  <Icon name="Star" className="text-accent" size={24} />
                  <h3 className="text-2xl font-bold">Индивидуальное предложение</h3>
                </div>
                <p className="text-primary-foreground/80 mb-6">
                  Нужно комплексное решение? Мы разработаем персональный план с учётом всех ваших задач
                </p>
                <Button size="lg" variant="secondary" className="h-12">
                  <a href="#contact">Получить расчёт</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-4 bg-secondary/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Начнём сотрудничество</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Оставьте заявку, и мы свяжемся с вами в течение дня
            </p>
          </div>
          <Card className="border-border">
            <CardContent className="pt-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium">
                    Телефон
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Расскажите о вашем проекте..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" size="lg" className="w-full h-14 text-base">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="Sparkles" className="text-accent" size={24} />
              <span className="text-xl font-bold">TAURUS</span>
            </div>
            <div className="text-sm text-muted-foreground text-center md:text-left">
              ИП Сальникова Тамара Леонидовна © 2024
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Linkedin" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
