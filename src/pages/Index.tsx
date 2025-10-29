import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    teamSize: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', company: '', phone: '', teamSize: '' });
  };

  const scrollToForm = () => {
    document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-secondary via-secondary to-[#0f1419] text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Диагностика точки роста продаж
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300 font-light">
              Узнайте, где ваш бизнес теряет прибыль — и как вырасти до +150%
            </p>
            <p className="text-base md:text-lg mb-8 text-gray-400 max-w-3xl mx-auto">
              Индивидуальная встреча с экспертом, на которой вы получите оценку потенциала роста оборота и прибыли в рублях и рекомендации, что конкретно нужно изменить, чтобы расти быстрее.
            </p>
            <Button 
              onClick={scrollToForm}
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-secondary font-semibold text-lg px-8 py-6 rounded-full shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105"
            >
              👉 Записаться на диагностику
            </Button>
            <p className="text-sm text-gray-400 mt-4">60–90 минут онлайн в Zoom</p>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-secondary">
            Для кого эта диагностика
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: 'Users',
                text: 'Для собственников и директоров бизнеса с отделом продаж от 5 человек'
              },
              {
                icon: 'TrendingUp',
                text: 'Для компаний, где продажи идут стабильно, но рост замедлился'
              },
              {
                icon: 'Target',
                text: 'Для тех, кто хочет понять, где "застряли" деньги и что мешает масштабироваться'
              }
            ].map((item, idx) => (
              <Card key={idx} className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <p className="text-gray-700 leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-secondary">
            Что происходит на диагностике
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            {[
              { icon: '💬', text: 'Эксперт задаёт вопросы о компании, рынке, клиентской базе и системе продаж' },
              { icon: '📊', text: 'Анализирует текущие показатели и выявляет узкие места' },
              { icon: '💡', text: 'Рассчитывает потенциал роста оборота и прибыли' },
              { icon: '🧭', text: 'Даёт конкретные рекомендации, что нужно скорректировать' }
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-6 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors duration-300">
                <span className="text-4xl flex-shrink-0">{item.icon}</span>
                <p className="text-lg text-gray-700 pt-2">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-2xl border-l-4 border-primary">
            <p className="text-xl font-semibold text-secondary mb-2">После встречи вы поймёте,</p>
            <p className="text-lg text-gray-700">какие действия реально приведут к увеличению продаж и прибыли.</p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Результат диагностики
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              'Прогноз роста оборота и прибыли — в рублях и процентах',
              'Перечень конкретных шагов для увеличения продаж',
              'Экспертное заключение с зонами потерь и точками влияния'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-4 p-6 bg-white/10 rounded-lg backdrop-blur-sm">
                <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={28} />
                <p className="text-lg">{item}</p>
              </div>
            ))}
          </div>
          <div className="max-w-3xl mx-auto mt-12 text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-primary/30">
            <p className="text-xl font-semibold mb-2">Вы получите ясную картину:</p>
            <p className="text-lg text-gray-300">где вы теряете деньги и как превратить это в рост.</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-secondary">
            Полезные материалы в подарок
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { icon: '🧾', title: 'Чек-лист проверки РОПа' },
              { icon: '📋', title: 'Чек-лист проверки МОПа' },
              { icon: '🗂', title: 'План РОПа на 90 дней' },
              { icon: '📈', title: 'Калькулятор «Точки роста» (Excel)' }
            ].map((item, idx) => (
              <Card key={idx} className="border-2 border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-white">
                <CardContent className="p-6 text-center">
                  <span className="text-5xl block mb-4">{item.icon}</span>
                  <p className="font-semibold text-gray-800">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            После диагностики вы сможете использовать эти инструменты для самостоятельной работы и контроля отдела продаж.
          </p>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-secondary">
            Кто проводит диагностику
          </h2>
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-muted/50 to-primary/5 p-10 rounded-2xl border-2 border-primary/20">
            <p className="text-lg text-gray-700 leading-relaxed text-center">
              Диагностику проводят <span className="font-semibold text-secondary">эксперты-практики с опытом 10+ лет</span> в B2B-продажах и управлении, по методикам и технологиям <span className="font-semibold text-secondary">Андрея Веселова</span>, автора 5 книг в т.ч. <span className="italic">"Организация работы отдела продаж. Системный подход"</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-secondary">
            Стоимость и гарантия полезности
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <Card className="border-2 border-green-500 shadow-xl bg-white">
              <CardContent className="p-8 text-center">
                <span className="text-5xl mb-4 block">💼</span>
                <p className="text-2xl font-bold text-secondary mb-2">Бесплатно</p>
                <p className="text-gray-600">для компаний с отделом продаж от 5 человек</p>
              </CardContent>
            </Card>
            <Card className="border-2 border-primary shadow-xl bg-white">
              <CardContent className="p-8 text-center">
                <span className="text-5xl mb-4 block">💰</span>
                <p className="text-2xl font-bold text-secondary mb-2">20 000 ₽</p>
                <p className="text-gray-600">для отделов продаж до 5 человек</p>
              </CardContent>
            </Card>
          </div>
          <Card className="max-w-4xl mx-auto border-2 border-primary/30 bg-gradient-to-r from-primary/5 to-white shadow-xl">
            <CardContent className="p-10">
              <div className="flex items-start gap-6">
                <span className="text-5xl flex-shrink-0">🛡</span>
                <div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Гарантия полезности:</h3>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Если после встречи вы не возьмёте в работу ни одной рекомендации или сочтёте диагностику бесполезной — оплата не требуется.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section id="booking-form" className="py-20 bg-gradient-to-br from-secondary via-secondary to-[#0f1419] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Хотите узнать, где теряются ваши продажи — и что даст рост на 150%?
            </h2>
            <p className="text-lg text-gray-300">
              Запишитесь на бесплатную диагностику, чтобы получить расчёт потенциала роста и конкретные рекомендации от эксперта.
            </p>
          </div>
          
          <Card className="max-w-xl mx-auto shadow-2xl bg-white">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-secondary">Ваше имя *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-secondary">Название компании *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-2"
                    placeholder="ООО «Успех»"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-secondary">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="teamSize" className="text-secondary">Размер отдела продаж *</Label>
                  <Input
                    id="teamSize"
                    required
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="mt-2"
                    placeholder="7 человек"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-secondary font-semibold text-lg py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  🚀 Записаться на диагностику
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary text-white py-8">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-400">© 2024 Диагностика точки роста продаж. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
