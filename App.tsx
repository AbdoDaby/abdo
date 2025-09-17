
import React, { useState, useMemo } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Tabs from './components/Tabs';
import CarCard from './components/CarCard';
import Footer from './components/Footer';
import type { Car } from './types';
import { ListingType } from './types';
import { CARS } from './constants';

const App: React.FC = () => {
  const [listingType, setListingType] = useState<ListingType>(ListingType.SALE);
  const [searchTerm, setSearchTerm] = useState('');

  const handleTabChange = (type: ListingType) => {
    setListingType(type);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCars = useMemo(() => {
    return CARS.filter(car => {
      const matchesType = car.type === listingType;
      const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            car.brand.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesType && matchesSearch;
    });
  }, [listingType, searchTerm]);

  return (
    <div className="bg-slate-900 text-white min-h-screen">
      <Header />
      <main>
        <Hero searchTerm={searchTerm} onSearchChange={handleSearchChange} />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Tabs activeTab={listingType} onTabChange={handleTabChange} />
          {filteredCars.length > 0 ? (
            <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredCars.map((car: Car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-slate-400 text-xl">عفواً، لا توجد سيارات تطابق بحثك.</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
