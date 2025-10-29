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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-48 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 -right-48 w-[600px] h-[600px] bg-purple-300/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="animate-slide-up">
              <div className="inline-block mb-6 px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full border border-primary/20">
                <span className="text-primary font-semibold">🚀 Рост продаж до +150%</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight bg-gradient-to-r from-secondary via-purple-600 to-primary bg-clip-text text-transparent">
                Диагностика точки роста продаж
              </h1>
              
              <p className="text-xl md:text-2xl mb-4 text-gray-700 font-light">
                Узнайте, где ваш бизнес теряет прибыль — и как вырасти до +150%
              </p>
              
              <p className="text-base md:text-lg mb-10 text-gray-600 leading-relaxed">
                Индивидуальная встреча с экспертом, на которой вы получите оценку потенциала роста оборота и прибыли в рублях и рекомендации, что конкретно нужно изменить, чтобы расти быстрее.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <Button 
                  onClick={scrollToForm}
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-semibold text-lg px-10 py-7 rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <span className="mr-2">✨</span>
                  Записаться на диагностику
                </Button>
              </div>
              
              <div className="mt-8 flex items-center gap-2 text-gray-600">
                <Icon name="Clock" size={18} className="text-primary" />
                <span className="text-sm">60–90 минут онлайн в Zoom</span>
              </div>
            </div>
            
            <div className="relative animate-slide-up hidden lg:block" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-3xl blur-2xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/bf91508c-adef-476d-b12b-28d5c7bb2c7a/files/e4096da4-0084-4a71-aeea-7974b607bef9.jpg" 
                alt="Рост продаж и аналитика" 
                className="relative rounded-3xl shadow-2xl w-full h-auto transform hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Whom Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Для кого эта диагностика
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: 'Users',
                gradient: 'from-blue-500 to-cyan-500',
                text: 'Для собственников и директоров бизнеса с отделом продаж от 5 человек'
              },
              {
                icon: 'TrendingUp',
                gradient: 'from-purple-500 to-pink-500',
                text: 'Для компаний, где продажи идут стабильно, но рост замедлился'
              },
              {
                icon: 'Target',
                gradient: 'from-orange-500 to-red-500',
                text: 'Для тех, кто хочет понять, где "застряли" деньги и что мешает масштабироваться'
              }
            ].map((item, idx) => (
              <Card key={idx} className="group relative border-none bg-white/60 backdrop-blur-sm hover:bg-white transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                <CardContent className="p-8 text-center relative">
                  <div className={`w-20 h-20 bg-gradient-to-br ${item.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon name={item.icon} className="text-white" size={36} />
                  </div>
                  <p className="text-gray-700 leading-relaxed font-medium">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens Section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Что происходит на диагностике
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4 mb-12">
            {[
              { icon: '💬', text: 'Эксперт задаёт вопросы о компании, рынке, клиентской базе и системе продаж', color: 'from-blue-500/10 to-cyan-500/10' },
              { icon: '📊', text: 'Анализирует текущие показатели и выявляет узкие места', color: 'from-purple-500/10 to-pink-500/10' },
              { icon: '💡', text: 'Рассчитывает потенциал роста оборота и прибыли', color: 'from-amber-500/10 to-orange-500/10' },
              { icon: '🧭', text: 'Даёт конкретные рекомендации, что нужно скорректировать', color: 'from-green-500/10 to-emerald-500/10' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className={`group flex items-start gap-6 p-8 bg-gradient-to-r ${item.color} backdrop-blur-sm rounded-3xl hover:shadow-xl transition-all duration-300 hover:-translate-x-2 border border-white/50`}
              >
                <span className="text-5xl flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                <p className="text-lg text-gray-700 pt-3 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-r from-primary/5 via-purple-500/5 to-pink-500/5 backdrop-blur-sm p-10 rounded-3xl border-2 border-primary/20 shadow-xl">
            <Icon name="Sparkles" className="text-primary mx-auto mb-4" size={40} />
            <p className="text-2xl font-bold text-secondary mb-3">После встречи вы поймёте,</p>
            <p className="text-lg text-gray-700">какие действия реально приведут к увеличению продаж и прибыли.</p>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-secondary via-slate-900 to-purple-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 text-white">
              Результат диагностики
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {[
              'Прогноз роста оборота и прибыли — в рублях и процентах',
              'Перечень конкретных шагов для увеличения продаж',
              'Экспертное заключение с зонами потерь и точками влияния'
            ].map((item, idx) => (
              <div key={idx} className="group flex items-center gap-5 p-6 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/15 transition-all duration-300 border border-white/10 hover:border-primary/50">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="CheckCircle2" className="text-white" size={24} />
                </div>
                <p className="text-lg text-white font-medium">{item}</p>
              </div>
            ))}
          </div>
          
          <div className="max-w-3xl mx-auto mt-12 text-center bg-gradient-to-r from-primary/20 to-purple-600/20 backdrop-blur-md p-10 rounded-3xl border-2 border-primary/30 shadow-2xl">
            <p className="text-2xl font-bold mb-3 text-white">Вы получите ясную картину:</p>
            <p className="text-lg text-gray-200">где вы теряете деньги и как превратить это в рост.</p>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-24 bg-gradient-to-b from-purple-50/30 to-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Полезные материалы в подарок
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-12">
            {[
              { icon: '🧾', title: 'Чек-лист проверки РОПа', gradient: 'from-blue-500/10 to-cyan-500/10', border: 'border-blue-500/30' },
              { icon: '📋', title: 'Чек-лист проверки МОПа', gradient: 'from-purple-500/10 to-pink-500/10', border: 'border-purple-500/30' },
              { icon: '🗂', title: 'План РОПа на 90 дней', gradient: 'from-orange-500/10 to-red-500/10', border: 'border-orange-500/30' },
              { icon: '📈', title: 'Калькулятор «Точки роста» (Excel)', gradient: 'from-green-500/10 to-emerald-500/10', border: 'border-green-500/30' }
            ].map((item, idx) => (
              <Card key={idx} className={`group border-2 ${item.border} hover:border-primary/70 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-gradient-to-br ${item.gradient} backdrop-blur-sm`}>
                <CardContent className="p-8 text-center">
                  <span className="text-6xl block mb-4 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">{item.icon}</span>
                  <p className="font-bold text-gray-800">{item.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <p className="text-center text-gray-600 max-w-3xl mx-auto text-lg">
            После диагностики вы сможете использовать эти инструменты для самостоятельной работы и контроля отдела продаж.
          </p>
        </div>
      </section>

      {/* Expert Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Кто проводит диагностику
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 via-purple-50/50 to-pink-50/30 p-12 rounded-3xl border-2 border-primary/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative">
              <Icon name="Award" className="text-primary mx-auto mb-6" size={48} />
              <p className="text-xl text-gray-700 leading-relaxed text-center">
                Диагностику проводят <span className="font-bold text-secondary bg-primary/10 px-2 py-1 rounded">эксперты-практики с опытом 10+ лет</span> в B2B-продажах и управлении, по методикам и технологиям <span className="font-bold text-secondary">Андрея Веселова</span>, автора 5 книг в т.ч. <span className="italic font-semibold">"Организация работы отдела продаж. Системный подход"</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent">
              Стоимость и гарантия
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <Card className="group relative border-2 border-green-500/50 hover:border-green-500 shadow-xl bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 group-hover:from-green-500/10 group-hover:to-emerald-500/10 transition-all duration-300"></div>
              <CardContent className="p-10 text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 text-5xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  💼
                </div>
                <p className="text-4xl font-bold text-secondary mb-3">Бесплатно</p>
                <p className="text-gray-700 font-medium text-lg">для компаний с отделом продаж от 5 человек</p>
              </CardContent>
            </Card>
            
            <Card className="group relative border-2 border-primary/50 hover:border-primary shadow-xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 group-hover:from-primary/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
              <CardContent className="p-10 text-center relative">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-5xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  💰
                </div>
                <p className="text-4xl font-bold text-secondary mb-3">20 000 ₽</p>
                <p className="text-gray-700 font-medium text-lg">для отделов продаж до 5 человек</p>
              </CardContent>
            </Card>
          </div>
          
          <Card className="max-w-5xl mx-auto border-2 border-primary/30 bg-gradient-to-r from-primary/5 via-purple-50/50 to-white shadow-2xl overflow-hidden">
            <CardContent className="p-12">
              <div className="flex flex-col md:flex-row items-start gap-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 text-5xl shadow-xl">
                  🛡
                </div>
                <div>
                  <h3 className="text-3xl font-bold text-secondary mb-4 flex items-center gap-3">
                    Гарантия полезности
                    <Icon name="Shield" className="text-primary" size={32} />
                  </h3>
                  <p className="text-xl text-gray-700 leading-relaxed">
                    Если после встречи вы не возьмёте в работу ни одной рекомендации или сочтёте диагностику бесполезной — оплата не требуется.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section id="booking-form" className="py-24 relative overflow-hidden bg-gradient-to-br from-secondary via-slate-900 to-purple-950">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-10 w-96 h-96 bg-primary rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Хотите узнать, где теряются ваши продажи?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Запишитесь на бесплатную диагностику, чтобы получить расчёт потенциала роста и конкретные рекомендации от эксперта.
            </p>
          </div>
          
          <Card className="max-w-xl mx-auto shadow-2xl bg-white/95 backdrop-blur-lg border-2 border-white/20">
            <CardContent className="p-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-secondary font-semibold text-base">Ваше имя *</Label>
                  <Input
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="mt-2 h-12 text-base border-2 focus:border-primary rounded-xl"
                    placeholder="Иван Петров"
                  />
                </div>
                <div>
                  <Label htmlFor="company" className="text-secondary font-semibold text-base">Название компании *</Label>
                  <Input
                    id="company"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="mt-2 h-12 text-base border-2 focus:border-primary rounded-xl"
                    placeholder="ООО «Успех»"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-secondary font-semibold text-base">Телефон *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2 h-12 text-base border-2 focus:border-primary rounded-xl"
                    placeholder="+7 (999) 123-45-67"
                  />
                </div>
                <div>
                  <Label htmlFor="teamSize" className="text-secondary font-semibold text-base">Размер отдела продаж *</Label>
                  <Input
                    id="teamSize"
                    required
                    value={formData.teamSize}
                    onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                    className="mt-2 h-12 text-base border-2 focus:border-primary rounded-xl"
                    placeholder="7 человек"
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-white font-bold text-lg py-7 rounded-2xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105 hover:-translate-y-1 mt-8"
                >
                  <span className="mr-2">🚀</span>
                  Записаться на диагностику
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary/95 backdrop-blur-lg text-white py-12 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <p className="text-gray-400">© 2024 Диагностика точки роста продаж. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;