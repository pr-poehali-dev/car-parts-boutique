import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [vinCode, setVinCode] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');

  const popularParts = [
    {
      id: 1,
      name: 'Тормозные колодки',
      brand: 'Bosch',
      price: '2 890',
      image: '/img/0ab992ff-18cb-49e9-843f-7ad22e67440b.jpg',
      category: 'Тормозная система',
      inStock: true
    },
    {
      id: 2,
      name: 'Масляный фильтр',
      brand: 'Mann-Filter',
      price: '650',
      image: '/img/0ab992ff-18cb-49e9-843f-7ad22e67440b.jpg',
      category: 'Фильтры',
      inStock: true
    },
    {
      id: 3,
      name: 'Амортизатор передний',
      brand: 'Monroe',
      price: '4 200',
      image: '/img/0ab992ff-18cb-49e9-843f-7ad22e67440b.jpg',
      category: 'Подвеска',
      inStock: false
    },
    {
      id: 4,
      name: 'Свечи зажигания',
      brand: 'NGK',
      price: '1 150',
      image: '/img/0ab992ff-18cb-49e9-843f-7ad22e67440b.jpg',
      category: 'Зажигание',
      inStock: true
    }
  ];

  const carBrands = [
    'BMW', 'Mercedes-Benz', 'Audi', 'Volkswagen', 'Toyota', 
    'Honda', 'Ford', 'Chevrolet', 'Nissan', 'Hyundai'
  ];

  const handleVinSearch = () => {
    if (vinCode.length >= 17) {
      alert(`Поиск запчастей для VIN: ${vinCode}`);
    } else {
      alert('VIN-код должен содержать 17 символов');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Icon name="Wrench" className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-dark-charcoal">AUTO PARTS BOUTIQUE</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Каталог</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Подбор</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Доставка</a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </nav>
            <Button variant="outline">
              <Icon name="ShoppingCart" className="h-4 w-4 mr-2" />
              Корзина
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-dark-charcoal text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-dark-charcoal to-gray-800 opacity-90"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Запчасти для вашего автомобиля
            </h2>
            <p className="text-xl mb-8 text-gray-300">
              Быстрый поиск по VIN-коду или марке автомобиля
            </p>
            
            {/* VIN Search */}
            <div className="max-w-2xl mx-auto bg-white rounded-lg p-6 shadow-xl">
              <div className="flex flex-col space-y-4">
                <div className="flex items-center space-x-2 text-dark-charcoal">
                  <Icon name="Search" className="h-5 w-5 text-primary" />
                  <span className="font-semibold">Поиск по VIN-коду</span>
                </div>
                <div className="flex space-x-2">
                  <Input
                    placeholder="Введите VIN-код (17 символов)"
                    value={vinCode}
                    onChange={(e) => setVinCode(e.target.value.toUpperCase())}
                    className="flex-1 text-lg"
                    maxLength={17}
                  />
                  <Button onClick={handleVinSearch} className="px-8">
                    Найти
                  </Button>
                </div>
                <p className="text-sm text-gray-600">
                  VIN-код находится в техпаспорте или на кузове автомобиля
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Tabs defaultValue="popular" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="popular">Популярные запчасти</TabsTrigger>
            <TabsTrigger value="brands">Подбор по марке</TabsTrigger>
            <TabsTrigger value="categories">Категории</TabsTrigger>
          </TabsList>
          
          <TabsContent value="popular" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {popularParts.map((part) => (
                <Card key={part.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-100 relative">
                    <img 
                      src={part.image} 
                      alt={part.name}
                      className="w-full h-full object-cover"
                    />
                    {!part.inStock && (
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                        <Badge variant="destructive">Нет в наличии</Badge>
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{part.name}</CardTitle>
                      <Badge variant="outline">{part.brand}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">{part.category}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-primary">{part.price} ₽</span>
                      <Button size="sm" disabled={!part.inStock}>
                        <Icon name="Plus" className="h-4 w-4 mr-1" />
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="brands" className="mt-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {carBrands.map((brand) => (
                <Button
                  key={brand}
                  variant={selectedBrand === brand ? "default" : "outline"}
                  className="h-16 text-lg"
                  onClick={() => setSelectedBrand(brand)}
                >
                  {brand}
                </Button>
              ))}
            </div>
            {selectedBrand && (
              <div className="mt-8 p-6 bg-white rounded-lg border">
                <h3 className="text-xl font-semibold mb-4">
                  Запчасти для {selectedBrand}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Wrench" className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">Двигатель</h4>
                        <p className="text-sm text-gray-600">156 запчастей</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Gauge" className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">Тормозная система</h4>
                        <p className="text-sm text-gray-600">89 запчастей</p>
                      </div>
                    </div>
                  </Card>
                  <Card className="p-4">
                    <div className="flex items-center space-x-3">
                      <Icon name="Cog" className="h-6 w-6 text-primary" />
                      <div>
                        <h4 className="font-semibold">Подвеска</h4>
                        <p className="text-sm text-gray-600">124 запчасти</p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            )}
          </TabsContent>

          <TabsContent value="categories" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: 'Двигатель', icon: 'Wrench', count: 1247 },
                { name: 'Тормозная система', icon: 'Gauge', count: 856 },
                { name: 'Подвеска', icon: 'Cog', count: 923 },
                { name: 'Электрика', icon: 'Zap', count: 654 },
                { name: 'Кузовные детали', icon: 'Shield', count: 432 },
                { name: 'Фильтры', icon: 'Filter', count: 234 },
                { name: 'Масла', icon: 'Droplets', count: 189 },
                { name: 'Аксессуары', icon: 'Star', count: 567 }
              ].map((category) => (
                <Card key={category.name} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                  <Icon name={category.icon as any} className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">{category.name}</h3>
                  <p className="text-gray-600">{category.count} товаров</p>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Наши преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Search" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Поиск по VIN</h3>
              <p className="text-gray-600">
                Быстрый и точный подбор запчастей по VIN-коду вашего автомобиля
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">
                Доставка по всей России. В Москве - курьером в день заказа
              </p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600">
                Только оригинальные запчасти от проверенных производителей
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Wrench" className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">AUTO PARTS</span>
              </div>
              <p className="text-gray-400">
                Ваш надежный партнер в поиске качественных автозапчастей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Двигатель</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Подвеска</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Тормоза</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Электрика</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Информация</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Гарантия</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center">
                  <Icon name="Phone" className="h-4 w-4 mr-2" />
                  +7 (495) 123-45-67
                </p>
                <p className="flex items-center">
                  <Icon name="Mail" className="h-4 w-4 mr-2" />
                  info@autoparts.ru
                </p>
                <p className="flex items-center">
                  <Icon name="MapPin" className="h-4 w-4 mr-2" />
                  Москва, ул. Автозаводская, 1
                </p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Auto Parts Boutique. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;